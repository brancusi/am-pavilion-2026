(function(){
'use strict';
var $amp$pages$venue$page$walking_directions$$, $amp$pages$venue$page$water_taxi_directions$$, $amp$pages$venue$page$getting_there_section$$, $amp$pages$venue$page$hero_section$$, $amp$pages$venue$page$about_section$$, $amp$pages$venue$page$studio_section$$, $amp$pages$venue$page$outdoor_section$$, $amp$pages$venue$page$arsenale_section$$, $cljs$cst$793$route_steps$$, $cljs$cst$787$address_title$$, $cljs$cst$798$marine_label$$;
$amp$pages$venue$page$walking_directions$$ = function($G__85528_map__85526_props__45963__auto__$jscomp$80_vec__85523$$, $maybe_ref__45964__auto__$jscomp$80$$) {
  $G__85528_map__85526_props__45963__auto__$jscomp$80_vec__85523$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__85528_map__85526_props__45963__auto__$jscomp$80_vec__85523$$), $maybe_ref__45964__auto__$jscomp$80$$], null);
  $G__85528_map__85526_props__45963__auto__$jscomp$80_vec__85523$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__85528_map__85526_props__45963__auto__$jscomp$80_vec__85523$$, 0, null);
  $APP.$cljs$core$__destructure_map$$($G__85528_map__85526_props__45963__auto__$jscomp$80_vec__85523$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $is_desktop_QMARK_$jscomp$2$$ = $APP.$amp$hooks$use_media_query$use_touch_enabled$$();
  $G__85528_map__85526_props__45963__auto__$jscomp$80_vec__85523$$ = function() {
    return {className:"mb-16", children:[function() {
      var $G__85532$$ = function() {
        return {className:"px-4", children:[function() {
          var $G__85536$$ = {text:"On Foot"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$ui$directions$sub_heading$$, $G__85536$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$ui$directions$sub_heading$$, $G__85536$$);
        }(), function() {
          var $G__85540$$ = function() {
            return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$, "mb-6"]))), children:["The pavilion sits inside the Arsenale, roughly an ", function() {
              var $G__85544$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:"eight-minute walk"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__85544$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__85544$$);
            }(), " from the crossing at the ", function() {
              var $G__85548$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:"Piraeus Lion"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__85548$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__85548$$);
            }(), ". Follow the highlighted route on the map to ", function() {
              var $G__85552$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:"Tesa 41"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__85552$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__85552$$);
            }(), "."]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__85540$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__85540$$);
        }(), function() {
          var $G__85556_G__85560$jscomp$inline_3951$$ = {title:"Address"};
          $G__85556_G__85560$jscomp$inline_3951$$ = {className:"mb-8", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$ui$directions$address_block$$, $G__85556_G__85560$jscomp$inline_3951$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$ui$directions$address_block$$, $G__85556_G__85560$jscomp$inline_3951$$)};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__85556_G__85560$jscomp$inline_3951$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__85556_G__85560$jscomp$inline_3951$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__85532$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__85532$$);
    }(), function() {
      var $G__85564$$ = {};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$ui$directions$map_button$$, $G__85564$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$ui$directions$map_button$$, $G__85564$$);
    }(), function() {
      var $G__85566$$ = function() {
        return {className:"mb-6", children:[function() {
          var $G__85570$$ = {dev:!1, "interactive?":$is_desktop_QMARK_$jscomp$2$$, "initial-view":$APP.$amp$pages$venue$map_config$initial_view$$, "ant-paths":$APP.$amp$pages$venue$map_config$ant_paths$$, layers:$APP.$amp$pages$venue$map_config$layers$$};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$ui$map$mapbox_map$$, $G__85570$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$ui$map$mapbox_map$$, $G__85570$$);
        }(), function() {
          var $G__85574$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-mono", "text-sm", "italic", "text-slate-600  dark:text-slate-400", "mt-4 px-4"]))), children:"Walking path from the crossing to the pavilion — approximately 8 minutes"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__85574$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__85574$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__85566$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__85566$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__85528_map__85526_props__45963__auto__$jscomp$80_vec__85523$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__85528_map__85526_props__45963__auto__$jscomp$80_vec__85523$$);
};
$amp$pages$venue$page$water_taxi_directions$$ = function($G__85613_map__85600_props__45963__auto__$jscomp$81_vec__85597_vec__85605$$, $maybe_ref__45964__auto__$jscomp$81$$) {
  $G__85613_map__85600_props__45963__auto__$jscomp$81_vec__85597_vec__85605$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__85613_map__85600_props__45963__auto__$jscomp$81_vec__85597_vec__85605$$), $maybe_ref__45964__auto__$jscomp$81$$], null);
  $G__85613_map__85600_props__45963__auto__$jscomp$81_vec__85597_vec__85605$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__85613_map__85600_props__45963__auto__$jscomp$81_vec__85597_vec__85605$$, 0, null);
  $APP.$cljs$core$__destructure_map$$($G__85613_map__85600_props__45963__auto__$jscomp$81_vec__85597_vec__85605$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__85613_map__85600_props__45963__auto__$jscomp$81_vec__85597_vec__85605$$ = $APP.$helix$hooks$use_state$$($APP.$cljs$cst$761$it$$);
  var $lang$jscomp$4$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__85613_map__85600_props__45963__auto__$jscomp$81_vec__85597_vec__85605$$, 0, null), $set_lang$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__85613_map__85600_props__45963__auto__$jscomp$81_vec__85597_vec__85605$$, 1, null), $c$jscomp$227$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($amp$pages$venue$page$water_taxi_copy$$, $lang$jscomp$4$$);
  $G__85613_map__85600_props__45963__auto__$jscomp$81_vec__85597_vec__85605$$ = function() {
    return {className:"mb-8", children:[function() {
      var $G__85619$$ = function() {
        return {className:"px-4", children:[function() {
          var $G__85625$$ = {text:"By Water Taxi"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$ui$directions$sub_heading$$, $G__85625$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$ui$directions$sub_heading$$, $G__85625$$);
        }(), function() {
          var $G__85629$$ = function() {
            return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$, "mb-6"]))), children:["Water taxis can bring guests directly to the pavilion’s landing inside the ", function() {
              var $G__85634$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:"Arsenale Militare"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__85634$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__85634$$);
            }(), ". Access is approved by the Marine Office, but the driver must follow the procedure below. ", function() {
              var $G__85638$$ = {className:$APP.$helix$impl$props$normalize_class$$("italic"), children:"Show these instructions to your driver — they are in Italian by default, with English available."};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__85638$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__85638$$);
            }()]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__85629$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__85629$$);
        }(), function() {
          var $G__85643$$ = {lang:$lang$jscomp$4$$, "on-change":$set_lang$$};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$ui$directions$lang_toggle$$, $G__85643$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$ui$directions$lang_toggle$$, $G__85643$$);
        }(), function() {
          var $G__85648$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$heading_section$$, "mb-1"]))), children:$APP.$cljs$cst$288$title$$.$cljs$core$IFn$_invoke$arity$1$($c$jscomp$227$$)};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("h4", $G__85648$$) : $APP.$helix$core$jsx$$.call(null, "h4", $G__85648$$);
        }(), function() {
          var $G__85652$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$label_muted$$, "mb-6"]))), children:$APP.$cljs$cst$782$subtitle$$.$cljs$core$IFn$_invoke$arity$1$($c$jscomp$227$$)};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__85652$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__85652$$);
        }(), function() {
          var $G__85660$$ = function() {
            return {className:"space-y-3 mb-8", children:[function() {
              var $G__85666$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$, $APP.$amp$styles$em_strong$$]))), children:$APP.$cljs$core$first$$($APP.$cljs$cst$792$authorized$$.$cljs$core$IFn$_invoke$arity$1$($c$jscomp$227$$))};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__85666$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__85666$$);
            }(), function() {
              var $G__85674$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$body_base$$), children:$APP.$cljs$core$second$$($APP.$cljs$cst$792$authorized$$.$cljs$core$IFn$_invoke$arity$1$($c$jscomp$227$$))};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__85674$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__85674$$);
            }()]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__85660$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__85660$$);
        }(), function() {
          var $G__85679$$ = function() {
            return {className:"mb-8", children:function() {
              var $G__85683$$ = {children:[function() {
                var $G__85685$$ = {text:$APP.$cljs$cst$786$before_title$$.$cljs$core$IFn$_invoke$arity$1$($c$jscomp$227$$), "warn?":!0};
                return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$ui$directions$mini_heading$$, $G__85685$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$ui$directions$mini_heading$$, $G__85685$$);
              }(), function() {
                var $G__85689$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$, "mb-2"]))), children:$APP.$cljs$cst$796$before_body$$.$cljs$core$IFn$_invoke$arity$1$($c$jscomp$227$$)};
                return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__85689$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__85689$$);
              }(), function() {
                var $G__85693$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_closing$$, "mb-4"]))), children:$APP.$cljs$cst$799$before_quote$$.$cljs$core$IFn$_invoke$arity$1$($c$jscomp$227$$)};
                return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__85693$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__85693$$);
              }(), function() {
                var $G__85698$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$label_muted$$, "mb-1"]))), children:$cljs$cst$798$marine_label$$.$cljs$core$IFn$_invoke$arity$1$($c$jscomp$227$$)};
                return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__85698$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__85698$$);
              }(), function() {
                var $G__85702$$ = $APP.$helix$impl$props$merge_obj$$({}, $APP.$helix$impl$props$_props$cljs$0core$0IFn$0_invoke$0arity$01$$($APP.$amp$ui$directions$marine_office_phone$$));
                return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$ui$directions$phone_link$$, $G__85702$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$ui$directions$phone_link$$, $G__85702$$);
              }()]};
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$ui$directions$callout$$, $G__85683$$) : $APP.$helix$core$jsxs$$.call(null, $APP.$amp$ui$directions$callout$$, $G__85683$$);
            }()};
          }();
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__85679$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__85679$$);
        }(), function() {
          var $G__85706$$ = function() {
            return {className:"mb-8", children:function() {
              var $G__85710$$ = {children:[function() {
                var $G__85712$$ = {text:$APP.$cljs$cst$789$entrance_title$$.$cljs$core$IFn$_invoke$arity$1$($c$jscomp$227$$), "warn?":!0};
                return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$ui$directions$mini_heading$$, $G__85712$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$ui$directions$mini_heading$$, $G__85712$$);
              }(), function() {
                var $G__85717$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$, "mb-2"]))), children:$APP.$cljs$cst$791$entrance_lead$$.$cljs$core$IFn$_invoke$arity$1$($c$jscomp$227$$)};
                return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__85717$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__85717$$);
              }(), function() {
                var $G__85725$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-display", "font-semibold", "text-lg", "text-slate-900  dark:text-slate-100", "mb-3"]))), children:$APP.$cljs$cst$790$entrance_name$$.$cljs$core$IFn$_invoke$arity$1$($c$jscomp$227$$)};
                return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__85725$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__85725$$);
              }(), function() {
                var $G__85729$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$, "mb-2"]))), children:$APP.$cljs$cst$795$entrance_body$$.$cljs$core$IFn$_invoke$arity$1$($c$jscomp$227$$)};
                return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__85729$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__85729$$);
              }(), function() {
                var $G__85733$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-body", "text-base", "font-medium", "text-rose-600   dark:text-rose-400", "leading-relaxed"]))), children:$APP.$cljs$cst$788$entrance_warn$$.$cljs$core$IFn$_invoke$arity$1$($c$jscomp$227$$)};
                return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__85733$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__85733$$);
              }()]};
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$ui$directions$callout$$, $G__85710$$) : $APP.$helix$core$jsxs$$.call(null, $APP.$amp$ui$directions$callout$$, $G__85710$$);
            }()};
          }();
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__85706$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__85706$$);
        }(), function() {
          var $G__85743$$ = function() {
            return {className:"mb-8", children:[function() {
              var $G__85751$$ = {text:$APP.$cljs$cst$794$route_title$$.$cljs$core$IFn$_invoke$arity$1$($c$jscomp$227$$)};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$ui$directions$mini_heading$$, $G__85751$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$ui$directions$mini_heading$$, $G__85751$$);
            }(), function() {
              var $G__85759$$ = {steps:$cljs$cst$793$route_steps$$.$cljs$core$IFn$_invoke$arity$1$($c$jscomp$227$$)};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$ui$directions$numbered_steps$$, $G__85759$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$ui$directions$numbered_steps$$, $G__85759$$);
            }()]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__85743$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__85743$$);
        }(), function() {
          var $G__85771_G__85779$jscomp$inline_3954$$ = {title:$cljs$cst$787$address_title$$.$cljs$core$IFn$_invoke$arity$1$($c$jscomp$227$$)};
          $G__85771_G__85779$jscomp$inline_3954$$ = {className:"mb-8", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$ui$directions$address_block$$, $G__85771_G__85779$jscomp$inline_3954$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$ui$directions$address_block$$, $G__85771_G__85779$jscomp$inline_3954$$)};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__85771_G__85779$jscomp$inline_3954$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__85771_G__85779$jscomp$inline_3954$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__85619$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__85619$$);
    }(), function() {
      var $G__85787$$ = function() {
        return {className:"mb-8", children:[function() {
          var $G__85795$$ = {src:"/images/graphics/water_taxi_route.jpg", alt:"Map of the Arsenale showing the only permitted water taxi entrance at Rio delle Galeazze and the route south to the Armenian Pavilion drop-off point", loading:"lazy", className:"w-full h-auto"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("img", $G__85795$$) : $APP.$helix$core$jsx$$.call(null, "img", $G__85795$$);
        }(), function() {
          var $G__85801$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-mono", "text-sm", "italic", "text-slate-600  dark:text-slate-400", "mt-4 px-4"]))), children:$APP.$cljs$cst$797$map_caption$$.$cljs$core$IFn$_invoke$arity$1$($c$jscomp$227$$)};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__85801$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__85801$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__85787$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__85787$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__85613_map__85600_props__45963__auto__$jscomp$81_vec__85597_vec__85605$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__85613_map__85600_props__45963__auto__$jscomp$81_vec__85597_vec__85605$$);
};
$amp$pages$venue$page$getting_there_section$$ = function($G__85830_map__85819_props__45963__auto__$jscomp$82_vec__85816$$, $maybe_ref__45964__auto__$jscomp$82$$) {
  $G__85830_map__85819_props__45963__auto__$jscomp$82_vec__85816$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__85830_map__85819_props__45963__auto__$jscomp$82_vec__85816$$), $maybe_ref__45964__auto__$jscomp$82$$], null);
  $G__85830_map__85819_props__45963__auto__$jscomp$82_vec__85816$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__85830_map__85819_props__45963__auto__$jscomp$82_vec__85816$$, 0, null);
  $APP.$cljs$core$__destructure_map$$($G__85830_map__85819_props__45963__auto__$jscomp$82_vec__85816$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__85830_map__85819_props__45963__auto__$jscomp$82_vec__85816$$ = function() {
    return {className:$APP.$helix$impl$props$normalize_class$$("pb-10 sm:pb-12"), children:[function() {
      var $G__85840$$ = function() {
        return {className:"px-4", children:[function() {
          var $G__85848$$ = {text:"Directions"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$ui$section_header$section_eyebrow$$, $G__85848$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$ui$section_header$section_eyebrow$$, $G__85848$$);
        }(), function() {
          var $G__85860$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$amp$pages$venue$page$venue_display$$, "mb-8"]))), children:"Getting There"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("h2", $G__85860$$) : $APP.$helix$core$jsx$$.call(null, "h2", $G__85860$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__85840$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__85840$$);
    }(), function() {
      var $G__85871$$ = {};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$pages$venue$page$walking_directions$$, $G__85871$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$venue$page$walking_directions$$, $G__85871$$);
    }(), function() {
      var $G__85876$$ = {};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$pages$venue$page$water_taxi_directions$$, $G__85876$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$venue$page$water_taxi_directions$$, $G__85876$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__85830_map__85819_props__45963__auto__$jscomp$82_vec__85816$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__85830_map__85819_props__45963__auto__$jscomp$82_vec__85816$$);
};
$amp$pages$venue$page$hero_section$$ = function($G__85910_map__85906_props__45963__auto__$jscomp$83_vec__85903$$, $maybe_ref__45964__auto__$jscomp$83$$) {
  $G__85910_map__85906_props__45963__auto__$jscomp$83_vec__85903$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__85910_map__85906_props__45963__auto__$jscomp$83_vec__85903$$), $maybe_ref__45964__auto__$jscomp$83$$], null);
  $G__85910_map__85906_props__45963__auto__$jscomp$83_vec__85903$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__85910_map__85906_props__45963__auto__$jscomp$83_vec__85903$$, 0, null);
  $APP.$cljs$core$__destructure_map$$($G__85910_map__85906_props__45963__auto__$jscomp$83_vec__85903$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__85910_map__85906_props__45963__auto__$jscomp$83_vec__85903$$ = function() {
    return {className:"pt-10 pb-4 px-4", children:[function() {
      var $G__85915$$ = {text:"Venice · Arsenale Militare"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$ui$section_header$section_eyebrow$$, $G__85915$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$ui$section_header$section_eyebrow$$, $G__85915$$);
    }(), function() {
      var $G__85919$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$amp$pages$venue$page$venue_display$$, "mb-8"]))), children:"Visit the pavilion"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("h1", $G__85919$$) : $APP.$helix$core$jsx$$.call(null, "h1", $G__85919$$);
    }(), function() {
      var $G__85923$$ = function() {
        return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_lg$$, "mb-4"]))), children:["The Armenia Pavilion unfolds across ", function() {
          var $G__85928$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:"two sites"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__85928$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__85928$$);
        }(), " within the historic Arsenale of Venice. Reach it ", function() {
          var $G__85932$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:"on foot"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__85932$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__85932$$);
        }(), " through the Biennale grounds, or arrive by ", function() {
          var $G__85936$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:"water taxi"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__85936$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__85936$$);
        }(), " directly at the pavilion’s landing."]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__85923$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__85923$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__85910_map__85906_props__45963__auto__$jscomp$83_vec__85903$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__85910_map__85906_props__45963__auto__$jscomp$83_vec__85903$$);
};
$amp$pages$venue$page$about_section$$ = function($G__85976_map__85966_props__45963__auto__$jscomp$84_vec__85963$$, $maybe_ref__45964__auto__$jscomp$84$$) {
  $G__85976_map__85966_props__45963__auto__$jscomp$84_vec__85963$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__85976_map__85966_props__45963__auto__$jscomp$84_vec__85963$$), $maybe_ref__45964__auto__$jscomp$84$$], null);
  $G__85976_map__85966_props__45963__auto__$jscomp$84_vec__85963$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__85976_map__85966_props__45963__auto__$jscomp$84_vec__85963$$, 0, null);
  $APP.$cljs$core$__destructure_map$$($G__85976_map__85966_props__45963__auto__$jscomp$84_vec__85963$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__85976_map__85966_props__45963__auto__$jscomp$84_vec__85963$$ = function() {
    return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["pb-10 sm:pb-12", "px-4"]))), children:[function() {
      var $G__85980$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$amp$pages$venue$page$venue_display$$, "mb-8"]))), children:"About"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("h2", $G__85980$$) : $APP.$helix$core$jsx$$.call(null, "h2", $G__85980$$);
    }(), function() {
      var $G__85988$$ = function() {
        return {className:"space-y-6", children:[function() {
          var $G__85994$$ = function() {
            return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$body_lg$$), children:["The Armenia Pavilion unfolds across ", function() {
              var $G__86000$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:"two sites"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__86000$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__86000$$);
            }(), " within the historic Arsenale of Venice—a ", function() {
              var $G__86008$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:"5,000-square-foot interior studio"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__86008$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__86008$$);
            }(), " and a monumental ", function() {
              var $G__86018$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:"outdoor sculpture"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__86018$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__86018$$);
            }(), " at the gates of the complex."]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__85994$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__85994$$);
        }(), function() {
          var $G__86024_JSCompiler_temp_const$jscomp$inline_3956$$ = $APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$body_base$$);
          var $G__86032$jscomp$inline_3958_JSCompiler_inline_result$jscomp$inline_3957$$ = {className:$APP.$helix$impl$props$normalize_class$$("italic"), children:"a place for study, for work, to create, share, and exhibit"};
          $G__86032$jscomp$inline_3958_JSCompiler_inline_result$jscomp$inline_3957$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__86032$jscomp$inline_3958_JSCompiler_inline_result$jscomp$inline_3957$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__86032$jscomp$inline_3958_JSCompiler_inline_result$jscomp$inline_3957$$);
          $G__86024_JSCompiler_temp_const$jscomp$inline_3956$$ = {className:$G__86024_JSCompiler_temp_const$jscomp$inline_3956$$, children:["Together they form a single constellation: ", $G__86032$jscomp$inline_3958_JSCompiler_inline_result$jscomp$inline_3957$$, ". Over six months the Pavilion operates not as a static exhibition ", "but as a living workshop—open, evolving, and built in real time."]};
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__86024_JSCompiler_temp_const$jscomp$inline_3956$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__86024_JSCompiler_temp_const$jscomp$inline_3956$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__85988$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__85988$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__85976_map__85966_props__45963__auto__$jscomp$84_vec__85963$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__85976_map__85966_props__45963__auto__$jscomp$84_vec__85963$$);
};
$amp$pages$venue$page$studio_section$$ = function($G__86083_map__86078_props__45963__auto__$jscomp$85_vec__86075_vec__86079$$, $maybe_ref__45964__auto__$jscomp$85$$) {
  $G__86083_map__86078_props__45963__auto__$jscomp$85_vec__86075_vec__86079$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__86083_map__86078_props__45963__auto__$jscomp$85_vec__86075_vec__86079$$), $maybe_ref__45964__auto__$jscomp$85$$], null);
  $G__86083_map__86078_props__45963__auto__$jscomp$85_vec__86075_vec__86079$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__86083_map__86078_props__45963__auto__$jscomp$85_vec__86075_vec__86079$$, 0, null);
  $APP.$cljs$core$__destructure_map$$($G__86083_map__86078_props__45963__auto__$jscomp$85_vec__86075_vec__86079$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $ref$jscomp$14$$ = $APP.$helix$hooks$use_ref$$("studio-ref");
  $G__86083_map__86078_props__45963__auto__$jscomp$85_vec__86075_vec__86079$$ = $APP.$amp$hooks$use_intersection_observer$use_intersection_observer$$($ref$jscomp$14$$);
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__86083_map__86078_props__45963__auto__$jscomp$85_vec__86075_vec__86079$$, 0, null);
  var $is_visible_QMARK_$jscomp$2$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__86083_map__86078_props__45963__auto__$jscomp$85_vec__86075_vec__86079$$, 1, null);
  $G__86083_map__86078_props__45963__auto__$jscomp$85_vec__86075_vec__86079$$ = function() {
    return {className:$APP.$helix$impl$props$normalize_class$$("pb-10 sm:pb-12"), children:[function() {
      var $G__86087$$ = function() {
        return {className:"px-4", children:[function() {
          var $G__86091$$ = {text:"Interior · Tesa 41"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$ui$section_header$section_eyebrow$$, $G__86091$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$ui$section_header$section_eyebrow$$, $G__86091$$);
        }(), function() {
          var $G__86095$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$amp$pages$venue$page$venue_display$$, "mb-8"]))), children:"The Studio"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("h2", $G__86095$$) : $APP.$helix$core$jsx$$.call(null, "h2", $G__86095$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__86087$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__86087$$);
    }(), function() {
      var $G__86099$$ = function() {
        return {className:"px-4 space-y-6", children:[function() {
          var $G__86103$$ = function() {
            return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$body_lg$$), children:[function() {
              var $G__86107$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:"Tesa 41"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__86107$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__86107$$);
            }(), " is the primary studio and exhibition space for the Armenia Pavilion—", function() {
              var $G__86111$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:"5,000 square feet"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__86111$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__86111$$);
            }(), " of expansive industrial volume within the Arsenale that functions as the ", function() {
              var $G__86115$$ = {className:$APP.$helix$impl$props$normalize_class$$("italic"), children:"operational and conceptual heart"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__86115$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__86115$$);
            }(), " of the project."]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__86103$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__86103$$);
        }(), function() {
          var $G__86119$$ = function() {
            return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$body_base$$), children:["Here, the Pavilion operates as a ", function() {
              var $G__86123$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:"working studio"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__86123$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__86123$$);
            }(), " rather than a static exhibition—a place of continuous ", function() {
              var $G__86127$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:"making"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__86127$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__86127$$);
            }(), ", ", function() {
              var $G__86131$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:"stacking"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__86131$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__86131$$);
            }(), ", ", function() {
              var $G__86135$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:"dismantling"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__86135$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__86135$$);
            }(), ", and ", function() {
              var $G__86139$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:"rebuilding"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__86139$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__86139$$);
            }(), ". The interior volume allows the work to expand ", function() {
              var $G__86143$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:"horizontally"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__86143$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__86143$$);
            }(), " and ", function() {
              var $G__86147$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:"vertically"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__86147$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__86147$$);
            }(), ", accommodating both monumental arrangements and intimate moments of material attention."]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__86119$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__86119$$);
        }(), function() {
          var $G__86151$$ = function() {
            return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$body_base$$), children:["Defined by scale, clarity, and architectural restraint, the space is built for sustained ", function() {
              var $G__86155$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:"fabrication"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__86155$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__86155$$);
            }(), ", ", function() {
              var $G__86159$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:"assembly"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__86159$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__86159$$);
            }(), ", and ", function() {
              var $G__86163$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:"reconfiguration"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__86163$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__86163$$);
            }(), " across the full duration of the Biennale."]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__86151$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__86151$$);
        }(), function() {
          var $G__86167_JSCompiler_temp_const$jscomp$inline_3960$$ = $APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_closing$$])));
          var $G__86171$jscomp$inline_3962_JSCompiler_inline_result$jscomp$inline_3961$$ = {className:$APP.$helix$impl$props$normalize_class$$("italic"), children:"the studio as the artwork itself"};
          $G__86171$jscomp$inline_3962_JSCompiler_inline_result$jscomp$inline_3961$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__86171$jscomp$inline_3962_JSCompiler_inline_result$jscomp$inline_3961$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__86171$jscomp$inline_3962_JSCompiler_inline_result$jscomp$inline_3961$$);
          $G__86167_JSCompiler_temp_const$jscomp$inline_3960$$ = {className:$G__86167_JSCompiler_temp_const$jscomp$inline_3960$$, children:["Tesa 41 anchors the Pavilion physically and philosophically—establishing ", $G__86171$jscomp$inline_3962_JSCompiler_inline_result$jscomp$inline_3961$$, "."]};
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__86167_JSCompiler_temp_const$jscomp$inline_3960$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__86167_JSCompiler_temp_const$jscomp$inline_3960$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__86099$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__86099$$);
    }(), function() {
      var $G__86175$$ = function() {
        return {className:"w-full flex flex-col gap-4 mt-8", ref:$ref$jscomp$14$$, children:[function() {
          var $G__86179_G__86183$jscomp$inline_3965$$ = {"playback-id":"KaA1Jf2AusJZ966KPeZrdwJ5S53kboLO4E4fGLrgTLk", "aspect-ratio":1.77, "should-play?":$is_visible_QMARK_$jscomp$2$$, "allow-audio?":!1};
          $G__86179_G__86183$jscomp$inline_3965$$ = {className:"w-full aspect-[16/9]", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$pages$venue$page$lazy_video$$, $G__86179_G__86183$jscomp$inline_3965$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$venue$page$lazy_video$$, $G__86179_G__86183$jscomp$inline_3965$$)};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__86179_G__86183$jscomp$inline_3965$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__86179_G__86183$jscomp$inline_3965$$);
        }(), function() {
          var $G__86187$$ = {"enabled?":$is_visible_QMARK_$jscomp$2$$, slides:$amp$pages$venue$page$tesa_41_slides$$};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$ui$image_gallery$lazy_image_gallery$$, $G__86187$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$ui$image_gallery$lazy_image_gallery$$, $G__86187$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__86175$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__86175$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__86083_map__86078_props__45963__auto__$jscomp$85_vec__86075_vec__86079$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__86083_map__86078_props__45963__auto__$jscomp$85_vec__86075_vec__86079$$);
};
$amp$pages$venue$page$outdoor_section$$ = function($G__86201_map__86196_props__45963__auto__$jscomp$86_vec__86193_vec__86197$$, $maybe_ref__45964__auto__$jscomp$86$$) {
  $G__86201_map__86196_props__45963__auto__$jscomp$86_vec__86193_vec__86197$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__86201_map__86196_props__45963__auto__$jscomp$86_vec__86193_vec__86197$$), $maybe_ref__45964__auto__$jscomp$86$$], null);
  $G__86201_map__86196_props__45963__auto__$jscomp$86_vec__86193_vec__86197$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__86201_map__86196_props__45963__auto__$jscomp$86_vec__86193_vec__86197$$, 0, null);
  $APP.$cljs$core$__destructure_map$$($G__86201_map__86196_props__45963__auto__$jscomp$86_vec__86193_vec__86197$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $ref$jscomp$15$$ = $APP.$helix$hooks$use_ref$$("outdoor-ref");
  $G__86201_map__86196_props__45963__auto__$jscomp$86_vec__86193_vec__86197$$ = $APP.$amp$hooks$use_intersection_observer$use_intersection_observer$$($ref$jscomp$15$$);
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__86201_map__86196_props__45963__auto__$jscomp$86_vec__86193_vec__86197$$, 0, null);
  var $is_visible_QMARK_$jscomp$3$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__86201_map__86196_props__45963__auto__$jscomp$86_vec__86193_vec__86197$$, 1, null);
  $G__86201_map__86196_props__45963__auto__$jscomp$86_vec__86193_vec__86197$$ = function() {
    return {className:$APP.$helix$impl$props$normalize_class$$("pb-10 sm:pb-12"), children:[function() {
      var $G__86205$$ = function() {
        return {className:"px-4", children:[function() {
          var $G__86209$$ = {text:"Exterior · Arsenale Crossing"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$ui$section_header$section_eyebrow$$, $G__86209$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$ui$section_header$section_eyebrow$$, $G__86209$$);
        }(), function() {
          var $G__86213$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$amp$pages$venue$page$venue_display$$, "mb-8"]))), children:"The Outdoor Piece"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("h2", $G__86213$$) : $APP.$helix$core$jsx$$.call(null, "h2", $G__86213$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__86205$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__86205$$);
    }(), function() {
      var $G__86217$$ = function() {
        return {className:"px-4 space-y-6", children:[function() {
          var $G__86221$$ = function() {
            return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$body_lg$$), children:["The outdoor artwork will be installed at the historic crossing grounds near the ", function() {
              var $G__86225$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:"Piraeus Lion"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__86225$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__86225$$);
            }(), ", one of the most recognized landmarks marking the approach to the Arsenale. ", "Positioned at a critical pedestrian junction, this site receives ", function() {
              var $G__86229$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:"exceptionally high foot traffic"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__86229$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__86229$$);
            }(), " throughout the six-month exhibition period."]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__86221$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__86221$$);
        }(), function() {
          var $G__86233$$ = function() {
            return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$body_base$$), children:["Visitors moving between venues, crossing the bridge into the Arsenale, and navigating the surrounding waterfront naturally converge here. ", "The Armenian Pavilion lies less than a ten-minute walk from this point, making the installation both a ", function() {
              var $G__86237$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:"threshold"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__86237$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__86237$$);
            }(), " and a ", function() {
              var $G__86241$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:"directional marker"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__86241$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__86241$$);
            }(), "—an early encounter that orients audiences toward the Pavilion."]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__86233$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__86233$$);
        }(), function() {
          var $G__86245_JSCompiler_temp_const$jscomp$inline_3967$$ = $APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_closing$$])));
          var $G__86249$jscomp$inline_3969_JSCompiler_inline_result$jscomp$inline_3968$$ = {className:$APP.$helix$impl$props$normalize_class$$("italic"), children:"sculpture, signal, and prelude"};
          $G__86249$jscomp$inline_3969_JSCompiler_inline_result$jscomp$inline_3968$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__86249$jscomp$inline_3969_JSCompiler_inline_result$jscomp$inline_3968$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__86249$jscomp$inline_3969_JSCompiler_inline_result$jscomp$inline_3968$$);
          $G__86245_JSCompiler_temp_const$jscomp$inline_3967$$ = {className:$G__86245_JSCompiler_temp_const$jscomp$inline_3967$$, children:["A freestanding, architecturally scaled form—functioning simultaneously as ", $G__86249$jscomp$inline_3969_JSCompiler_inline_result$jscomp$inline_3968$$, "."]};
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__86245_JSCompiler_temp_const$jscomp$inline_3967$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__86245_JSCompiler_temp_const$jscomp$inline_3967$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__86217$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__86217$$);
    }(), function() {
      var $G__86253_G__86257$jscomp$inline_3972_JSCompiler_inline_result$jscomp$inline_3971$$ = {"enabled?":$is_visible_QMARK_$jscomp$3$$, slides:$amp$pages$venue$page$crossing_slides$$};
      $G__86253_G__86257$jscomp$inline_3972_JSCompiler_inline_result$jscomp$inline_3971$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$ui$image_gallery$lazy_image_gallery$$, $G__86253_G__86257$jscomp$inline_3972_JSCompiler_inline_result$jscomp$inline_3971$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$ui$image_gallery$lazy_image_gallery$$, $G__86253_G__86257$jscomp$inline_3972_JSCompiler_inline_result$jscomp$inline_3971$$);
      $G__86253_G__86257$jscomp$inline_3972_JSCompiler_inline_result$jscomp$inline_3971$$ = {className:"w-full flex flex-col gap-4 mt-8", ref:$ref$jscomp$15$$, children:$G__86253_G__86257$jscomp$inline_3972_JSCompiler_inline_result$jscomp$inline_3971$$};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__86253_G__86257$jscomp$inline_3972_JSCompiler_inline_result$jscomp$inline_3971$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__86253_G__86257$jscomp$inline_3972_JSCompiler_inline_result$jscomp$inline_3971$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__86201_map__86196_props__45963__auto__$jscomp$86_vec__86193_vec__86197$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__86201_map__86196_props__45963__auto__$jscomp$86_vec__86193_vec__86197$$);
};
$amp$pages$venue$page$arsenale_section$$ = function($G__86268_map__86266_props__45963__auto__$jscomp$87_vec__86263$$, $maybe_ref__45964__auto__$jscomp$87$$) {
  $G__86268_map__86266_props__45963__auto__$jscomp$87_vec__86263$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__86268_map__86266_props__45963__auto__$jscomp$87_vec__86263$$), $maybe_ref__45964__auto__$jscomp$87$$], null);
  $G__86268_map__86266_props__45963__auto__$jscomp$87_vec__86263$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__86268_map__86266_props__45963__auto__$jscomp$87_vec__86263$$, 0, null);
  $APP.$cljs$core$__destructure_map$$($G__86268_map__86266_props__45963__auto__$jscomp$87_vec__86263$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__86268_map__86266_props__45963__auto__$jscomp$87_vec__86263$$ = function() {
    return {className:$APP.$helix$impl$props$normalize_class$$("pb-10 sm:pb-12"), children:[function() {
      var $G__86272$$ = function() {
        return {className:"px-4", children:[function() {
          var $G__86276$$ = {text:"History"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$ui$section_header$section_eyebrow$$, $G__86276$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$ui$section_header$section_eyebrow$$, $G__86276$$);
        }(), function() {
          var $G__86280$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$amp$pages$venue$page$venue_display$$, "mb-8"]))), children:"Arsenale Militare"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("h2", $G__86280$$) : $APP.$helix$core$jsx$$.call(null, "h2", $G__86280$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__86272$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__86272$$);
    }(), function() {
      var $G__86284$$ = function() {
        return {className:"px-4 space-y-6", children:[function() {
          var $G__86288$$ = function() {
            return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$body_lg$$), children:["The ", function() {
              var $G__86292$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:"Arsenale di Venezia"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__86292$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__86292$$);
            }(), " is one of the largest and oldest shipbuilding complexes in the world. ", "Founded in the ", function() {
              var $G__86296$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:"12th century"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__86296$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__86296$$);
            }(), ", it served as the engine of Venetian naval power for over ", function() {
              var $G__86300$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:"seven centuries"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__86300$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__86300$$);
            }(), "—at its peak employing 16,000 workers and capable of producing a fully outfitted warship in a single day."]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__86288$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__86288$$);
        }(), function() {
          var $G__86305$$ = function() {
            return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$body_base$$), children:["Spanning roughly ", function() {
              var $G__86309$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:"45 hectares"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__86309$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__86309$$);
            }(), " of covered halls, dry docks, and open yards, the Arsenale is a monumental index of ", function() {
              var $G__86313$$ = {className:$APP.$helix$impl$props$normalize_class$$("italic"), children:"industrial ingenuity"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__86313$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__86313$$);
            }(), ". Its massive brick walls, timber-roofed warehouses (", function() {
              var $G__86318$$ = {className:$APP.$helix$impl$props$normalize_class$$("italic"), children:"tese"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__86318$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__86318$$);
            }(), "), and water-accessed basins represent a proto-industrial system that anticipated modern assembly-line production by centuries."]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__86305$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__86305$$);
        }(), function() {
          var $G__86326$$ = function() {
            return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$body_base$$), children:["Since ", function() {
              var $G__86330$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:"1980"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__86330$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__86330$$);
            }(), ", the Arsenale has served as a primary exhibition site for the ", function() {
              var $G__86338$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:"Venice Biennale"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__86338$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__86338$$);
            }(), "—its raw, monumental spaces providing a counterpoint to the refined galleries of the Giardini. ", "National pavilions, large-scale installations, and the central International Exhibition share this vast industrial landscape, ", "transforming shipbuilding halls into some of the most powerful exhibition spaces in the world."]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__86326$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__86326$$);
        }(), function() {
          var $G__86348_JSCompiler_temp_const$jscomp$inline_3974$$ = $APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_closing$$])));
          var $G__86354$jscomp$inline_3976_JSCompiler_inline_result$jscomp$inline_3975$$ = {className:$APP.$helix$impl$props$normalize_class$$("italic"), children:"working within"};
          $G__86354$jscomp$inline_3976_JSCompiler_inline_result$jscomp$inline_3975$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__86354$jscomp$inline_3976_JSCompiler_inline_result$jscomp$inline_3975$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__86354$jscomp$inline_3976_JSCompiler_inline_result$jscomp$inline_3975$$);
          $G__86348_JSCompiler_temp_const$jscomp$inline_3974$$ = {className:$G__86348_JSCompiler_temp_const$jscomp$inline_3974$$, children:["Tesa 41 sits within this historic matrix—one of the original covered warehouses now given over to artistic production. ", "The Armenia Pavilion's presence continues a tradition of nations ", $G__86354$jscomp$inline_3976_JSCompiler_inline_result$jscomp$inline_3975$$, " the Arsenale's industrial grain, not against it."]};
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__86348_JSCompiler_temp_const$jscomp$inline_3974$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__86348_JSCompiler_temp_const$jscomp$inline_3974$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__86284$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__86284$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__86268_map__86266_props__45963__auto__$jscomp$87_vec__86263$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__86268_map__86266_props__45963__auto__$jscomp$87_vec__86263$$);
};
$APP.$amp$pages$venue$page$venue_view$$ = function($G__86374_props__45963__auto__$jscomp$88_vec__86369$$, $maybe_ref__45964__auto__$jscomp$88$$) {
  $G__86374_props__45963__auto__$jscomp$88_vec__86369$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__86374_props__45963__auto__$jscomp$88_vec__86369$$), $maybe_ref__45964__auto__$jscomp$88$$], null);
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__86374_props__45963__auto__$jscomp$88_vec__86369$$, 0, null);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__86374_props__45963__auto__$jscomp$88_vec__86369$$ = {children:[function() {
    var $G__86376$$ = {};
    return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$pages$venue$page$hero_section$$, $G__86376$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$venue$page$hero_section$$, $G__86376$$);
  }(), function() {
    var $G__86378$$ = {};
    return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$ui$directions$opening_hours$$, $G__86378$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$ui$directions$opening_hours$$, $G__86378$$);
  }(), function() {
    var $G__86380$$ = {};
    return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$pages$venue$page$getting_there_section$$, $G__86380$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$venue$page$getting_there_section$$, $G__86380$$);
  }(), function() {
    var $G__86382$$ = {};
    return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$pages$venue$page$about_section$$, $G__86382$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$venue$page$about_section$$, $G__86382$$);
  }(), function() {
    var $G__86384$$ = {};
    return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$pages$venue$page$studio_section$$, $G__86384$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$venue$page$studio_section$$, $G__86384$$);
  }(), function() {
    var $G__86386$$ = {};
    return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$pages$venue$page$outdoor_section$$, $G__86386$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$venue$page$outdoor_section$$, $G__86386$$);
  }(), function() {
    var $G__86388$$ = {};
    return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$pages$venue$page$arsenale_section$$, $G__86388$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$venue$page$arsenale_section$$, $G__86388$$);
  }()]};
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$ui$page_shell$page_shell$$, $G__86374_props__45963__auto__$jscomp$88_vec__86369$$) : $APP.$helix$core$jsxs$$.call(null, $APP.$amp$ui$page_shell$page_shell$$, $G__86374_props__45963__auto__$jscomp$88_vec__86369$$);
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