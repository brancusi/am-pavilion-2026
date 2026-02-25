(function(){
'use strict';
var $amp$pages$artist$portrait$portrait_section$$, $amp$pages$artist$biography$preview$$, $amp$pages$artist$biography$details$$, $amp$pages$artist$biography$biography_section$$, $amp$pages$artist$works$works_section$$, $amp$pages$artist$escape$escape_section$$, $amp$pages$artist$video$video_section$$, $amp$pages$artist$return$0$return_section$$;
$amp$pages$artist$portrait$portrait_section$$ = function($G__151729_map__151690_map__151690__$1_props__41575__auto__$jscomp$38_vec__151687_vec__151719$$, $maybe_ref__41576__auto__$jscomp$38$$) {
  $G__151729_map__151690_map__151690__$1_props__41575__auto__$jscomp$38_vec__151687_vec__151719$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__151729_map__151690_map__151690__$1_props__41575__auto__$jscomp$38_vec__151687_vec__151719$$), $maybe_ref__41576__auto__$jscomp$38$$], null);
  $G__151729_map__151690_map__151690__$1_props__41575__auto__$jscomp$38_vec__151687_vec__151719$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__151729_map__151690_map__151690__$1_props__41575__auto__$jscomp$38_vec__151687_vec__151719$$, 0, null);
  $G__151729_map__151690_map__151690__$1_props__41575__auto__$jscomp$38_vec__151687_vec__151719$$ = $APP.$cljs$core$__destructure_map$$($G__151729_map__151690_map__151690__$1_props__41575__auto__$jscomp$38_vec__151687_vec__151719$$);
  var $id$jscomp$84$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__151729_map__151690_map__151690__$1_props__41575__auto__$jscomp$38_vec__151687_vec__151719$$, $APP.$cljs$cst$285$id$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $ref$jscomp$17$$ = $APP.$helix$hooks$use_ref$$("portrait-ref");
  $G__151729_map__151690_map__151690__$1_props__41575__auto__$jscomp$38_vec__151687_vec__151719$$ = $APP.$amp$hooks$use_intersection_observer$use_intersection_observer$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($ref$jscomp$17$$, $APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$754$threshold$$, 0.05], null)]));
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__151729_map__151690_map__151690__$1_props__41575__auto__$jscomp$38_vec__151687_vec__151719$$, 0, null);
  var $visible_QMARK_$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__151729_map__151690_map__151690__$1_props__41575__auto__$jscomp$38_vec__151687_vec__151719$$, 1, null);
  $G__151729_map__151690_map__151690__$1_props__41575__auto__$jscomp$38_vec__151687_vec__151719$$ = function() {
    return {id:$id$jscomp$84$$, ref:$ref$jscomp$17$$, className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["pt-12 sm:pt-14", "pb-10 sm:pb-12"]))), children:[function() {
      var $G__151741$$ = function() {
        return {className:"px-4", children:function() {
          var $G__151749$$ = function() {
            return {className:"relative w-full aspect-[3/4] sm:aspect-[4/5] md:aspect-[16/9] overflow-hidden", children:[function() {
              var $G__151758$$ = {"img-src":"https://atd-722658831.imgix.net/portraits/zz-portrait-2.jpg", fit:"crop", "active?":$visible_QMARK_$$};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$ui$image_overlay$lazy_image_with_overlay$$, $G__151758$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$ui$image_overlay$lazy_image_with_overlay$$, $G__151758$$);
            }(), function() {
              var $G__151766$$ = function() {
                return {className:"absolute bottom-0 left-0 right-0 p-6 sm:p-10\n                                   bg-gradient-to-t from-black/70 to-transparent", children:[function() {
                  var $G__151770$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$eyebrow$$, "text-slate-500  dark:text-slate-500", "mb-2"]))), children:"The Artist"};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__151770$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__151770$$);
                }(), function() {
                  var $G__151782$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$heading_display$$, "mb-2"]))), children:"Zadik Zadikian"};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("h1", $G__151782$$) : $APP.$helix$core$jsx$$.call(null, "h1", $G__151782$$);
                }(), function() {
                  var $G__151790$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-display font-medium text-xs uppercase tracking-[0.2em]", "text-amber-600 dark:text-amber-300/70"]))), children:"Sculptor · b. 1948, Erevan"};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__151790$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__151790$$);
                }()]};
              }();
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__151766$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__151766$$);
            }()]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__151749$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__151749$$);
        }()};
      }();
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__151741$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__151741$$);
    }(), function() {
      var $G__151802$$ = function() {
        return {className:"px-4 mt-10", children:function() {
          var $G__151806$$ = function() {
            return {className:"border-l-2 border-white/20 dark:border-white/20 pl-6", children:[function() {
              var $G__151814$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_lg$$, "italic"]))), children:"“If you want to learn about something, become that thing and then study yourself.”"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__151814$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__151814$$);
            }(), function() {
              var $G__151832$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["block mt-3 not-italic", $APP.$amp$styles$label_muted$$]))), children:"— Zadik Zadikian"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("cite", $G__151832$$) : $APP.$helix$core$jsx$$.call(null, "cite", $G__151832$$);
            }()]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("blockquote", $G__151806$$) : $APP.$helix$core$jsxs$$.call(null, "blockquote", $G__151806$$);
        }()};
      }();
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__151802$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__151802$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("section", $G__151729_map__151690_map__151690__$1_props__41575__auto__$jscomp$38_vec__151687_vec__151719$$) : $APP.$helix$core$jsxs$$.call(null, "section", $G__151729_map__151690_map__151690__$1_props__41575__auto__$jscomp$38_vec__151687_vec__151719$$);
};
$amp$pages$artist$biography$preview$$ = function($G__156987_props__41575__auto__$jscomp$39$$) {
  $APP.$helix$core$extract_cljs_props$$($G__156987_props__41575__auto__$jscomp$39$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__156987_props__41575__auto__$jscomp$39$$ = function() {
    return {className:"px-4", children:[function() {
      var $G__156991$$ = {author:"Carlo McCormick", "class":"mb-6"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$ui$written_by$written_by$$, $G__156991$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$ui$written_by$written_by$$, $G__156991$$);
    }(), function() {
      var $G__156995$$ = function() {
        return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_lg$$, "mb-6"]))), children:[function() {
          var $G__156999$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:"Zadik Zadikian"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__156999$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__156999$$);
        }(), " (b. 1948, Erevan, Soviet Armenia) has spent over five decades creating works ", "that challenge both the materials and ideologies of contemporary art. A daring ", "escape from the Soviet Union in his youth marked the beginning of an extraordinary ", "journey, from his training under ", function() {
          var $G__157003$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:"Benjamino Bufano"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__157003$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__157003$$);
        }(), " to his longstanding friendship with ", function() {
          var $G__157007$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:"Richard Serra"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__157007$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__157007$$);
        }(), "."]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__156995$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__156995$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__156987_props__41575__auto__$jscomp$39$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__156987_props__41575__auto__$jscomp$39$$);
};
$amp$pages$artist$biography$details$$ = function($G__157064_props__41575__auto__$jscomp$40$$) {
  $APP.$helix$core$extract_cljs_props$$($G__157064_props__41575__auto__$jscomp$40$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__157064_props__41575__auto__$jscomp$40$$ = function() {
    return {className:"px-4", children:[function() {
      var $G__157074$$ = {author:"Carlo McCormick", "class":"mb-6"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$ui$written_by$written_by$$, $G__157074$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$ui$written_by$written_by$$, $G__157074$$);
    }(), function() {
      var $G__157084$$ = function() {
        return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_lg$$, "mb-6"]))), children:[function() {
          var $G__157098$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:"Zadik Zadikian"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__157098$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__157098$$);
        }(), " (b. 1948, Erevan, Soviet Armenia) has spent over five decades creating works ", "that challenge both the materials and ideologies of contemporary art. A daring ", "escape from the Soviet Union in his youth marked the beginning of an extraordinary ", "journey, from his training under ", function() {
          var $G__157112$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:"Benjamino Bufano"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__157112$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__157112$$);
        }(), " to his longstanding friendship with ", function() {
          var $G__157124$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:"Richard Serra"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__157124$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__157124$$);
        }(), "."]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__157084$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__157084$$);
    }(), function() {
      var $G__157136$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$, "mb-6"]))), children:["Born in Erevan during the late Soviet period, Zadikian grew up amid the tension ", "between the rich cultural heritage of Armenia and the rigid constraints of the ", "Soviet system. From an early age he was drawn to material and form—carving, ", 
      "assembling, and building with whatever was at hand. This instinct for making ", "would define his entire career."]};
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__157136$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__157136$$);
    }(), function() {
      var $G__157146_JSCompiler_temp_const$jscomp$inline_3704$$ = $APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$, "mb-6"])));
      var $G__157154$jscomp$inline_3706_JSCompiler_inline_result$jscomp$inline_3705$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:"Benjamino Bufano"};
      $G__157154$jscomp$inline_3706_JSCompiler_inline_result$jscomp$inline_3705$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__157154$jscomp$inline_3706_JSCompiler_inline_result$jscomp$inline_3705$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__157154$jscomp$inline_3706_JSCompiler_inline_result$jscomp$inline_3705$$);
      $G__157146_JSCompiler_temp_const$jscomp$inline_3704$$ = {className:$G__157146_JSCompiler_temp_const$jscomp$inline_3704$$, children:["After arriving in the United States, Zadikian studied under ", $G__157154$jscomp$inline_3706_JSCompiler_inline_result$jscomp$inline_3705$$, " in San Francisco, absorbing the elder sculptor’s commitment to monumental ", "public art and the conviction that sculpture should occupy and transform shared space. ", "These formative years instilled a deep respect for craft, scale, and the social ", 
      "responsibility of the artist."]};
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__157146_JSCompiler_temp_const$jscomp$inline_3704$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__157146_JSCompiler_temp_const$jscomp$inline_3704$$);
    }(), function() {
      var $G__157166_JSCompiler_temp_const$jscomp$inline_3708$$ = $APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$, "mb-6"])));
      var $G__157176$jscomp$inline_3710_JSCompiler_inline_result$jscomp$inline_3709$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:"gold leaf"};
      $G__157176$jscomp$inline_3710_JSCompiler_inline_result$jscomp$inline_3709$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__157176$jscomp$inline_3710_JSCompiler_inline_result$jscomp$inline_3709$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__157176$jscomp$inline_3710_JSCompiler_inline_result$jscomp$inline_3709$$);
      $G__157166_JSCompiler_temp_const$jscomp$inline_3708$$ = {className:$G__157166_JSCompiler_temp_const$jscomp$inline_3708$$, children:["Zadikian’s exploration of gilded forms has established him as one of the leading ", "sculptors in the realm of contemporary alchemy. His pieces, often crafted from ", $G__157176$jscomp$inline_3710_JSCompiler_inline_result$jscomp$inline_3709$$, ", suggest a transcendence of time and place, pushing boundaries while creating ", "worlds that seem to belong to another realm entirely."]};
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__157166_JSCompiler_temp_const$jscomp$inline_3708$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__157166_JSCompiler_temp_const$jscomp$inline_3708$$);
    }(), function() {
      var $G__157188_JSCompiler_temp_const$jscomp$inline_3712$$ = $APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$, "mb-6"])));
      var $G__157200$jscomp$inline_3714_JSCompiler_inline_result$jscomp$inline_3713$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:"block, or brick"};
      $G__157200$jscomp$inline_3714_JSCompiler_inline_result$jscomp$inline_3713$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__157200$jscomp$inline_3714_JSCompiler_inline_result$jscomp$inline_3713$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__157200$jscomp$inline_3714_JSCompiler_inline_result$jscomp$inline_3713$$);
      $G__157188_JSCompiler_temp_const$jscomp$inline_3712$$ = {className:$G__157188_JSCompiler_temp_const$jscomp$inline_3712$$, children:["Centered on the most basic unit—the ", $G__157200$jscomp$inline_3714_JSCompiler_inline_result$jscomp$inline_3713$$, "—which has been continuously used for building for over eleven millennia, ", "Zadikian’s simplified plaster casts are elemental and foundational: a humble ", "aesthetics where form, beauty, and meaning emerge through the assembly and fluid ", "recombination of humanity’s most common architectural building element."]};
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__157188_JSCompiler_temp_const$jscomp$inline_3712$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__157188_JSCompiler_temp_const$jscomp$inline_3712$$);
    }(), function() {
      var $G__157208_JSCompiler_temp_const$jscomp$inline_3716$$ = $APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$, "mb-6"])));
      var $G__157213$jscomp$inline_3718_JSCompiler_inline_result$jscomp$inline_3717$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:"Richard Serra"};
      $G__157213$jscomp$inline_3718_JSCompiler_inline_result$jscomp$inline_3717$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__157213$jscomp$inline_3718_JSCompiler_inline_result$jscomp$inline_3717$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__157213$jscomp$inline_3718_JSCompiler_inline_result$jscomp$inline_3717$$);
      $G__157208_JSCompiler_temp_const$jscomp$inline_3716$$ = {className:$G__157208_JSCompiler_temp_const$jscomp$inline_3716$$, children:["His friendship with ", $G__157213$jscomp$inline_3718_JSCompiler_inline_result$jscomp$inline_3717$$, " has been a touchstone throughout his practice—not as influence in a stylistic ", "sense, but as a shared conviction that sculpture’s power resides in the encounter ", "between material, space, and the viewer’s body. Both artists insist that the ", "experience of the work cannot be reduced to a photograph; it must be walked ", 
      "through, stood beside, and felt."]};
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__157208_JSCompiler_temp_const$jscomp$inline_3716$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__157208_JSCompiler_temp_const$jscomp$inline_3716$$);
    }(), function() {
      var $G__157225$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$]))), children:["Over five decades, Zadikian has built a body of work that is at once minimal ", "and maximal—pared to the elemental unit yet expansive in its combinatorial ", "possibilities. Each block is singular; together they form structures that echo ", "the layered histories of the civilizations that invented them."]};
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__157225$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__157225$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__157064_props__41575__auto__$jscomp$40$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__157064_props__41575__auto__$jscomp$40$$);
};
$amp$pages$artist$biography$biography_section$$ = function($G__157248_id$jscomp$85_map__157241_map__157241__$1_props__41575__auto__$jscomp$41_vec__157238$$, $G__157254$jscomp$inline_3721_JSCompiler_inline_result$jscomp$inline_3720_maybe_ref__41576__auto__$jscomp$41$$) {
  $G__157248_id$jscomp$85_map__157241_map__157241__$1_props__41575__auto__$jscomp$41_vec__157238$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__157248_id$jscomp$85_map__157241_map__157241__$1_props__41575__auto__$jscomp$41_vec__157238$$), $G__157254$jscomp$inline_3721_JSCompiler_inline_result$jscomp$inline_3720_maybe_ref__41576__auto__$jscomp$41$$], null);
  $G__157248_id$jscomp$85_map__157241_map__157241__$1_props__41575__auto__$jscomp$41_vec__157238$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__157248_id$jscomp$85_map__157241_map__157241__$1_props__41575__auto__$jscomp$41_vec__157238$$, 0, null);
  $G__157248_id$jscomp$85_map__157241_map__157241__$1_props__41575__auto__$jscomp$41_vec__157238$$ = $APP.$cljs$core$__destructure_map$$($G__157248_id$jscomp$85_map__157241_map__157241__$1_props__41575__auto__$jscomp$41_vec__157238$$);
  $G__157248_id$jscomp$85_map__157241_map__157241__$1_props__41575__auto__$jscomp$41_vec__157238$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__157248_id$jscomp$85_map__157241_map__157241__$1_props__41575__auto__$jscomp$41_vec__157238$$, $APP.$cljs$cst$285$id$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__157254$jscomp$inline_3721_JSCompiler_inline_result$jscomp$inline_3720_maybe_ref__41576__auto__$jscomp$41$$ = {"section-hint":"biography", title:"The Artist", "expand-button-label":"Read full biography", "preview-text":$amp$pages$artist$biography$preview$$, "full-text":$amp$pages$artist$biography$details$$};
  $G__157254$jscomp$inline_3721_JSCompiler_inline_result$jscomp$inline_3720_maybe_ref__41576__auto__$jscomp$41$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$ui$expandable_text$expandable_text_area_light$$, $G__157254$jscomp$inline_3721_JSCompiler_inline_result$jscomp$inline_3720_maybe_ref__41576__auto__$jscomp$41$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$ui$expandable_text$expandable_text_area_light$$, $G__157254$jscomp$inline_3721_JSCompiler_inline_result$jscomp$inline_3720_maybe_ref__41576__auto__$jscomp$41$$);
  $G__157248_id$jscomp$85_map__157241_map__157241__$1_props__41575__auto__$jscomp$41_vec__157238$$ = {id:$G__157248_id$jscomp$85_map__157241_map__157241__$1_props__41575__auto__$jscomp$41_vec__157238$$, children:$G__157254$jscomp$inline_3721_JSCompiler_inline_result$jscomp$inline_3720_maybe_ref__41576__auto__$jscomp$41$$};
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__157248_id$jscomp$85_map__157241_map__157241__$1_props__41575__auto__$jscomp$41_vec__157238$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__157248_id$jscomp$85_map__157241_map__157241__$1_props__41575__auto__$jscomp$41_vec__157238$$);
};
$amp$pages$artist$works$works_section$$ = function($G__157935_id$jscomp$86_map__157922_map__157922__$1_props__41575__auto__$jscomp$42_vec__157919$$, $maybe_ref__41576__auto__$jscomp$42_ref$jscomp$18$$) {
  $G__157935_id$jscomp$86_map__157922_map__157922__$1_props__41575__auto__$jscomp$42_vec__157919$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__157935_id$jscomp$86_map__157922_map__157922__$1_props__41575__auto__$jscomp$42_vec__157919$$), $maybe_ref__41576__auto__$jscomp$42_ref$jscomp$18$$], null);
  $G__157935_id$jscomp$86_map__157922_map__157922__$1_props__41575__auto__$jscomp$42_vec__157919$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__157935_id$jscomp$86_map__157922_map__157922__$1_props__41575__auto__$jscomp$42_vec__157919$$, 0, null);
  $G__157935_id$jscomp$86_map__157922_map__157922__$1_props__41575__auto__$jscomp$42_vec__157919$$ = $APP.$cljs$core$__destructure_map$$($G__157935_id$jscomp$86_map__157922_map__157922__$1_props__41575__auto__$jscomp$42_vec__157919$$);
  $G__157935_id$jscomp$86_map__157922_map__157922__$1_props__41575__auto__$jscomp$42_vec__157919$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__157935_id$jscomp$86_map__157922_map__157922__$1_props__41575__auto__$jscomp$42_vec__157919$$, $APP.$cljs$cst$285$id$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $maybe_ref__41576__auto__$jscomp$42_ref$jscomp$18$$ = $APP.$helix$hooks$use_ref$$("works-ref");
  var $G__157945$jscomp$inline_4064_G__157953$jscomp$inline_4065_G__157961$jscomp$inline_4066_JSCompiler_inline_result$jscomp$inline_4063_vec__157928$$ = $APP.$amp$hooks$use_intersection_observer$use_intersection_observer$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($maybe_ref__41576__auto__$jscomp$42_ref$jscomp$18$$, $APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$754$threshold$$, 0.05], null)]));
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__157945$jscomp$inline_4064_G__157953$jscomp$inline_4065_G__157961$jscomp$inline_4066_JSCompiler_inline_result$jscomp$inline_4063_vec__157928$$, 0, null);
  $G__157945$jscomp$inline_4064_G__157953$jscomp$inline_4065_G__157961$jscomp$inline_4066_JSCompiler_inline_result$jscomp$inline_4063_vec__157928$$ = {"enabled?":$APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__157945$jscomp$inline_4064_G__157953$jscomp$inline_4065_G__157961$jscomp$inline_4066_JSCompiler_inline_result$jscomp$inline_4063_vec__157928$$, 1, null), slides:$amp$pages$artist$works$slides$$};
  $G__157945$jscomp$inline_4064_G__157953$jscomp$inline_4065_G__157961$jscomp$inline_4066_JSCompiler_inline_result$jscomp$inline_4063_vec__157928$$ = {className:"mt-6 relative pinstripe-bold", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$ui$image_gallery$lazy_image_gallery$$, $G__157945$jscomp$inline_4064_G__157953$jscomp$inline_4065_G__157961$jscomp$inline_4066_JSCompiler_inline_result$jscomp$inline_4063_vec__157928$$) : 
  $APP.$helix$core$jsx$$.call(null, $APP.$amp$ui$image_gallery$lazy_image_gallery$$, $G__157945$jscomp$inline_4064_G__157953$jscomp$inline_4065_G__157961$jscomp$inline_4066_JSCompiler_inline_result$jscomp$inline_4063_vec__157928$$)};
  $G__157945$jscomp$inline_4064_G__157953$jscomp$inline_4065_G__157961$jscomp$inline_4066_JSCompiler_inline_result$jscomp$inline_4063_vec__157928$$ = {eyebrow:"selected works", title:"The Work", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__157945$jscomp$inline_4064_G__157953$jscomp$inline_4065_G__157961$jscomp$inline_4066_JSCompiler_inline_result$jscomp$inline_4063_vec__157928$$) : $APP.$helix$core$jsx$$.call(null, 
  "div", $G__157945$jscomp$inline_4064_G__157953$jscomp$inline_4065_G__157961$jscomp$inline_4066_JSCompiler_inline_result$jscomp$inline_4063_vec__157928$$)};
  $G__157945$jscomp$inline_4064_G__157953$jscomp$inline_4065_G__157961$jscomp$inline_4066_JSCompiler_inline_result$jscomp$inline_4063_vec__157928$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$ui$section_header$section_header$$, $G__157945$jscomp$inline_4064_G__157953$jscomp$inline_4065_G__157961$jscomp$inline_4066_JSCompiler_inline_result$jscomp$inline_4063_vec__157928$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$ui$section_header$section_header$$, 
  $G__157945$jscomp$inline_4064_G__157953$jscomp$inline_4065_G__157961$jscomp$inline_4066_JSCompiler_inline_result$jscomp$inline_4063_vec__157928$$);
  $G__157935_id$jscomp$86_map__157922_map__157922__$1_props__41575__auto__$jscomp$42_vec__157919$$ = {id:$G__157935_id$jscomp$86_map__157922_map__157922__$1_props__41575__auto__$jscomp$42_vec__157919$$, ref:$maybe_ref__41576__auto__$jscomp$42_ref$jscomp$18$$, children:$G__157945$jscomp$inline_4064_G__157953$jscomp$inline_4065_G__157961$jscomp$inline_4066_JSCompiler_inline_result$jscomp$inline_4063_vec__157928$$};
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__157935_id$jscomp$86_map__157922_map__157922__$1_props__41575__auto__$jscomp$42_vec__157919$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__157935_id$jscomp$86_map__157922_map__157922__$1_props__41575__auto__$jscomp$42_vec__157919$$);
};
$amp$pages$artist$escape$escape_section$$ = function($G__157045_map__157038_map__157038__$1_props__41575__auto__$jscomp$43_vec__157035$$, $maybe_ref__41576__auto__$jscomp$43$$) {
  $G__157045_map__157038_map__157038__$1_props__41575__auto__$jscomp$43_vec__157035$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__157045_map__157038_map__157038__$1_props__41575__auto__$jscomp$43_vec__157035$$), $maybe_ref__41576__auto__$jscomp$43$$], null);
  $G__157045_map__157038_map__157038__$1_props__41575__auto__$jscomp$43_vec__157035$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__157045_map__157038_map__157038__$1_props__41575__auto__$jscomp$43_vec__157035$$, 0, null);
  $G__157045_map__157038_map__157038__$1_props__41575__auto__$jscomp$43_vec__157035$$ = $APP.$cljs$core$__destructure_map$$($G__157045_map__157038_map__157038__$1_props__41575__auto__$jscomp$43_vec__157035$$);
  var $id$jscomp$87$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__157045_map__157038_map__157038__$1_props__41575__auto__$jscomp$43_vec__157035$$, $APP.$cljs$cst$285$id$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__157045_map__157038_map__157038__$1_props__41575__auto__$jscomp$43_vec__157035$$ = function() {
    return {id:$id$jscomp$87$$, children:function() {
      var $G__157056$$ = function() {
        return {eyebrow:"origins", title:"The Escape", children:function() {
          var $G__157066$$ = function() {
            return {className:"mt-6 px-4", children:[function() {
              var $G__157076_JSCompiler_temp_const$jscomp$inline_3726$$ = $APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_lg$$, "mb-6"])));
              var $G__157088$jscomp$inline_3728_JSCompiler_inline_result$jscomp$inline_3727$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:"Zadik Zadikian"};
              $G__157088$jscomp$inline_3728_JSCompiler_inline_result$jscomp$inline_3727$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__157088$jscomp$inline_3728_JSCompiler_inline_result$jscomp$inline_3727$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__157088$jscomp$inline_3728_JSCompiler_inline_result$jscomp$inline_3727$$);
              $G__157076_JSCompiler_temp_const$jscomp$inline_3726$$ = {className:$G__157076_JSCompiler_temp_const$jscomp$inline_3726$$, children:["In the early 1970s, at the height of the Cold War, a young ", $G__157088$jscomp$inline_3728_JSCompiler_inline_result$jscomp$inline_3727$$, " made the decision that would define the rest of his life: ", "to leave Soviet Armenia. The borders were sealed, emigration all ", "but impossible, and the penalties for attempting it severe. Yet ", "the pull of artistic freedom—the chance to work without ", 
              "ideological constraint—proved stronger than fear."]};
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__157076_JSCompiler_temp_const$jscomp$inline_3726$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__157076_JSCompiler_temp_const$jscomp$inline_3726$$);
            }(), function() {
              var $G__157104$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$, "mb-6"]))), children:"The journey was perilous, crossing through countries and relying on ;networks of sympathizers and fellow dissidents. Zadikian carried ;almost nothing—a few sketches, the clothes on his back, and an ;unshakeable conviction that sculpture was worth risking everything for. ;The details of the crossing remain partially obscured, as much by the ;passage of time as by the deliberate silence that protected those who ;helped him.".split(";")};
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__157104$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__157104$$);
            }(), function() {
              var $G__157118$$ = function() {
                return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$, "mb-6"]))), children:["Arriving first in Europe and eventually reaching ", function() {
                  var $G__157130$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:"San Francisco"};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__157130$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__157130$$);
                }(), ", Zadikian found himself in a city teeming with artistic reinvention. ", "It was here that he encountered ", function() {
                  var $G__157142$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:"Benjamino Bufano"};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__157142$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__157142$$);
                }(), ", the Italian-American sculptor whose monumental public works and ", "pacifist convictions resonated deeply with the young Armenian exile. ", "Under Bufano’s mentorship, Zadikian learned not only technique but ", "a philosophy of art as civic presence—sculpture that belongs to everyone."]};
              }();
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__157118$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__157118$$);
            }(), function() {
              var $G__157160$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$, "mb-6"]))), children:"The escape from the Soviet Union was not merely a biographical event; {it became the foundational metaphor of Zadikian’s practice. The {block—the basic unit of construction and of confinement—carries {within it the memory of walls that constrain and walls that shelter. {Every sculpture he builds is, in some sense, an act of rebuilding: {taking the elemental unit of architecture and reassembling it into {something free.".split("{")};
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__157160$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__157160$$);
            }(), function() {
              var $G__157172$$ = function() {
                return {className:"border-l-2 border-white/20 dark:border-white/20 pl-6 my-8", children:[function() {
                  var $G__157178$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$, "italic"]))), children:["“The block remembers two things—the wall it was taken ", "from and the wall it will become.”"]};
                  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__157178$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__157178$$);
                }(), function() {
                  var $G__157192$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["block mt-3 not-italic", $APP.$amp$styles$label_muted$$]))), children:"— Zadik Zadikian"};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("cite", $G__157192$$) : $APP.$helix$core$jsx$$.call(null, "cite", $G__157192$$);
                }()]};
              }();
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("blockquote", $G__157172$$) : $APP.$helix$core$jsxs$$.call(null, "blockquote", $G__157172$$);
            }()]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__157066$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__157066$$);
        }()};
      }();
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$ui$section_header$section_header$$, $G__157056$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$ui$section_header$section_header$$, $G__157056$$);
    }()};
  }();
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__157045_map__157038_map__157038__$1_props__41575__auto__$jscomp$43_vec__157035$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__157045_map__157038_map__157038__$1_props__41575__auto__$jscomp$43_vec__157035$$);
};
$amp$pages$artist$video$video_section$$ = function($G__157276_map__157271_map__157271__$1_props__41575__auto__$jscomp$44_vec__157268_vec__157272$$, $maybe_ref__41576__auto__$jscomp$44$$) {
  $G__157276_map__157271_map__157271__$1_props__41575__auto__$jscomp$44_vec__157268_vec__157272$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__157276_map__157271_map__157271__$1_props__41575__auto__$jscomp$44_vec__157268_vec__157272$$), $maybe_ref__41576__auto__$jscomp$44$$], null);
  $G__157276_map__157271_map__157271__$1_props__41575__auto__$jscomp$44_vec__157268_vec__157272$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__157276_map__157271_map__157271__$1_props__41575__auto__$jscomp$44_vec__157268_vec__157272$$, 0, null);
  $G__157276_map__157271_map__157271__$1_props__41575__auto__$jscomp$44_vec__157268_vec__157272$$ = $APP.$cljs$core$__destructure_map$$($G__157276_map__157271_map__157271__$1_props__41575__auto__$jscomp$44_vec__157268_vec__157272$$);
  var $id$jscomp$88$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__157276_map__157271_map__157271__$1_props__41575__auto__$jscomp$44_vec__157268_vec__157272$$, $APP.$cljs$cst$285$id$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $ref$jscomp$19$$ = $APP.$helix$hooks$use_ref$$("artist-video-ref");
  $G__157276_map__157271_map__157271__$1_props__41575__auto__$jscomp$44_vec__157268_vec__157272$$ = $APP.$amp$hooks$use_intersection_observer$use_intersection_observer$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($ref$jscomp$19$$, $APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$741$end$$, "bottom"], null)]));
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__157276_map__157271_map__157271__$1_props__41575__auto__$jscomp$44_vec__157268_vec__157272$$, 0, null);
  var $visible_QMARK_$jscomp$2$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__157276_map__157271_map__157271__$1_props__41575__auto__$jscomp$44_vec__157268_vec__157272$$, 1, null);
  $G__157276_map__157271_map__157271__$1_props__41575__auto__$jscomp$44_vec__157268_vec__157272$$ = function() {
    return {id:$id$jscomp$88$$, ref:$ref$jscomp$19$$, children:function() {
      var $G__157280$$ = function() {
        return {eyebrow:"in his own words", title:"The Artist Speaks", children:function() {
          var $G__157284$$ = function() {
            return {className:"mt-6 px-4", children:[function() {
              var $G__157289$$ = function() {
                return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$, "mb-8"]))), children:["Hear ", function() {
                  var $G__157293$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:"Zadik Zadikian"};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__157293$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__157293$$);
                }(), " speak about his practice, his relationship with material, and ", "the significance of representing ", function() {
                  var $G__157297$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:"Armenia"};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__157297$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__157297$$);
                }(), " at the 61st Venice Biennale."]};
              }();
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__157289$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__157289$$);
            }(), function() {
              var $G__157301_G__157305$jscomp$inline_3731$$ = {"playback-id":"ay2rRkV3PxHTy92Gfi00SibKfEDjDLqGqxmiTzbrz3sQ", "aspect-ratio":1.77, "should-play?":$visible_QMARK_$jscomp$2$$, "allow-audio?":!0};
              $G__157301_G__157305$jscomp$inline_3731$$ = {className:"w-full aspect-[16/9]", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$pages$artist$video$lazy_video$$, $G__157301_G__157305$jscomp$inline_3731$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$artist$video$lazy_video$$, $G__157301_G__157305$jscomp$inline_3731$$)};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__157301_G__157305$jscomp$inline_3731$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__157301_G__157305$jscomp$inline_3731$$);
            }()]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__157284$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__157284$$);
        }()};
      }();
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$ui$section_header$section_header$$, $G__157280$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$ui$section_header$section_header$$, $G__157280$$);
    }()};
  }();
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__157276_map__157271_map__157271__$1_props__41575__auto__$jscomp$44_vec__157268_vec__157272$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__157276_map__157271_map__157271__$1_props__41575__auto__$jscomp$44_vec__157268_vec__157272$$);
};
$amp$pages$artist$return$0$return_section$$ = function($G__157325_map__157315_map__157315__$1_props__41575__auto__$jscomp$45_vec__157312$$, $maybe_ref__41576__auto__$jscomp$45$$) {
  $G__157325_map__157315_map__157315__$1_props__41575__auto__$jscomp$45_vec__157312$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__157325_map__157315_map__157315__$1_props__41575__auto__$jscomp$45_vec__157312$$), $maybe_ref__41576__auto__$jscomp$45$$], null);
  $G__157325_map__157315_map__157315__$1_props__41575__auto__$jscomp$45_vec__157312$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__157325_map__157315_map__157315__$1_props__41575__auto__$jscomp$45_vec__157312$$, 0, null);
  $G__157325_map__157315_map__157315__$1_props__41575__auto__$jscomp$45_vec__157312$$ = $APP.$cljs$core$__destructure_map$$($G__157325_map__157315_map__157315__$1_props__41575__auto__$jscomp$45_vec__157312$$);
  var $id$jscomp$89$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__157325_map__157315_map__157315__$1_props__41575__auto__$jscomp$45_vec__157312$$, $APP.$cljs$cst$285$id$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__157325_map__157315_map__157315__$1_props__41575__auto__$jscomp$45_vec__157312$$ = function() {
    return {id:$id$jscomp$89$$, children:function() {
      var $G__157333$$ = function() {
        return {eyebrow:"full circle", title:"Return to Armenia", children:function() {
          var $G__157339$$ = function() {
            return {className:"mt-6 px-4", children:[function() {
              var $G__157347_JSCompiler_temp_const$jscomp$inline_3733$$ = $APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_lg$$, "mb-6"])));
              var $G__157355$jscomp$inline_3735_JSCompiler_inline_result$jscomp$inline_3734$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:"Zadik Zadikian"};
              $G__157355$jscomp$inline_3735_JSCompiler_inline_result$jscomp$inline_3734$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__157355$jscomp$inline_3735_JSCompiler_inline_result$jscomp$inline_3734$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__157355$jscomp$inline_3735_JSCompiler_inline_result$jscomp$inline_3734$$);
              $G__157347_JSCompiler_temp_const$jscomp$inline_3733$$ = {className:$G__157347_JSCompiler_temp_const$jscomp$inline_3733$$, children:["After decades in the United States, ", $G__157355$jscomp$inline_3735_JSCompiler_inline_result$jscomp$inline_3734$$, " began a gradual return—not only to the country he had fled, ", "but to the questions of identity, belonging, and cultural memory ", "that had shaped his work from the very beginning."]};
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__157347_JSCompiler_temp_const$jscomp$inline_3733$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__157347_JSCompiler_temp_const$jscomp$inline_3733$$);
            }(), function() {
              var $G__157365$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$, "mb-6"]))), children:"Armenia in the post-Soviet era was a country in transformation. {The independence of 1991 had opened new possibilities but also {revealed old wounds. For Zadikian, returning was not a simple {homecoming; it was an encounter with a nation remaking itself {from the same elemental materials—stone, earth, will—that {he had been working with in his studio for half a century.".split("{")};
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__157365$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__157365$$);
            }(), function() {
              var $G__157375$$ = function() {
                return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$, "mb-6"]))), children:["The invitation to represent ", function() {
                  var $G__157383$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:"Armenia at the 61st Venice Biennale"};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__157383$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__157383$$);
                }(), " carries a particular resonance. Venice and Armenia share a deep ", "historical connection: the island of ", function() {
                  var $G__157389$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:"San Lazzaro degli Armeni"};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__157389$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__157389$$);
                }(), " has housed an Armenian monastery since 1717, preserving manuscripts, ", "language, and culture through centuries of upheaval. To bring Armenian ", "art to the Biennale is to continue a conversation that has been ", "unfolding in this lagoon for over three hundred years."]};
              }();
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__157375$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__157375$$);
            }(), function() {
              var $G__157397$$ = function() {
                return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$, "mb-6"]))), children:["For Zadikian, the Biennale is not a stage for national spectacle ", "but a place where the quiet persistence of making—the ", function() {
                  var $G__157405$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:"studio as sanctuary"};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__157405$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__157405$$);
                }(), "—can speak across borders. The pavilion will operate as a ", "living workshop, echoing the Armenian tradition of the ", function() {
                  var $G__157413$$ = {className:$APP.$helix$impl$props$normalize_class$$("italic"), children:"arvestanots"};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__157413$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__157413$$);
                }(), " (workshop), where art is inseparable from the daily labor of its creation."]};
              }();
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__157397$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__157397$$);
            }(), function() {
              var $G__157423$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$, "mb-6"]))), children:["In representing Armenia at Venice, Zadikian closes a circle that ", "began with his escape. The young man who left a culture behind in ", "order to make art freely now returns that art to the world stage ", "under the flag of the nation he never stopped carrying with him."]};
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__157423$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__157423$$);
            }(), function() {
              var $G__157429$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_closing$$, "mt-10"]))), children:["“The block is the smallest homeland. Wherever you stack it, ", "you are building Armenia.”"]};
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__157429$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__157429$$);
            }()]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__157339$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__157339$$);
        }()};
      }();
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$ui$section_header$section_header$$, $G__157333$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$ui$section_header$section_header$$, $G__157333$$);
    }()};
  }();
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__157325_map__157315_map__157315__$1_props__41575__auto__$jscomp$45_vec__157312$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__157325_map__157315_map__157315__$1_props__41575__auto__$jscomp$45_vec__157312$$);
};
$APP.$amp$pages$artist$page$artist_view$$ = function($G__158437_props__41575__auto__$jscomp$46_vec__158433$$, $maybe_ref__41576__auto__$jscomp$46$$) {
  $G__158437_props__41575__auto__$jscomp$46_vec__158433$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__158437_props__41575__auto__$jscomp$46_vec__158433$$), $maybe_ref__41576__auto__$jscomp$46$$], null);
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__158437_props__41575__auto__$jscomp$46_vec__158433$$, 0, null);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__158437_props__41575__auto__$jscomp$46_vec__158433$$ = {children:[function() {
    var $G__158441$$ = {id:"portrait"};
    return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$pages$artist$portrait$portrait_section$$, $G__158441$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$artist$portrait$portrait_section$$, $G__158441$$);
  }(), function() {
    var $G__158448$$ = {id:"biography"};
    return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$pages$artist$biography$biography_section$$, $G__158448$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$artist$biography$biography_section$$, $G__158448$$);
  }(), function() {
    var $G__158452$$ = {id:"works"};
    return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$pages$artist$works$works_section$$, $G__158452$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$artist$works$works_section$$, $G__158452$$);
  }(), function() {
    var $G__158456$$ = {id:"escape"};
    return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$pages$artist$escape$escape_section$$, $G__158456$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$artist$escape$escape_section$$, $G__158456$$);
  }(), function() {
    var $G__158460$$ = {id:"video"};
    return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$pages$artist$video$video_section$$, $G__158460$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$artist$video$video_section$$, $G__158460$$);
  }(), function() {
    var $G__158465$$ = {id:"return"};
    return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$pages$artist$return$0$return_section$$, $G__158465$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$artist$return$0$return_section$$, $G__158465$$);
  }()]};
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$ui$page_shell$page_shell$$, $G__158437_props__41575__auto__$jscomp$46_vec__158433$$) : $APP.$helix$core$jsxs$$.call(null, $APP.$amp$ui$page_shell$page_shell$$, $G__158437_props__41575__auto__$jscomp$46_vec__158433$$);
};
$APP.$JSCompiler_StaticMethods_beforeLoadModuleCode$$("artist-view");
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$297$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$298$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$pages$artist$portrait$portrait_section$$, '(hooks/use-ref "portrait-ref")(use-intersection-observer ref {:threshold 0.05})', null, null) : (void 0).call(null, 
$amp$pages$artist$portrait$portrait_section$$, '(hooks/use-ref "portrait-ref")(use-intersection-observer ref {:threshold 0.05})', null, null)), $APP.$helix$core$register_BANG_$$($amp$pages$artist$portrait$portrait_section$$, "amp.pages.artist.portrait/portrait-section"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$297$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$298$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$pages$artist$biography$preview$$, "", null, null) : (void 0).call(null, $amp$pages$artist$biography$preview$$, "", null, null)), $APP.$helix$core$register_BANG_$$($amp$pages$artist$biography$preview$$, 
"amp.pages.artist.biography/preview"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$297$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$298$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$pages$artist$biography$details$$, "", null, null) : (void 0).call(null, $amp$pages$artist$biography$details$$, "", null, null)), $APP.$helix$core$register_BANG_$$($amp$pages$artist$biography$details$$, 
"amp.pages.artist.biography/details"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$297$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$298$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$pages$artist$biography$biography_section$$, "", null, null) : (void 0).call(null, $amp$pages$artist$biography$biography_section$$, "", null, null)), 
$APP.$helix$core$register_BANG_$$($amp$pages$artist$biography$biography_section$$, "amp.pages.artist.biography/biography-section"));
var $amp$pages$artist$works$slides$$ = new $APP.$cljs$core$PersistentVector$$(null, 7, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$724$img_src$$, "https://atd-722658831.imgix.net/artwork/1.jpeg", $APP.$cljs$cst$733$aspect_ratio$$, 0.75, $APP.$cljs$cst$706$caption$$, "GILDED BLOCK COMPOSITION", $APP.$cljs$cst$707$credit$$, "Zadik Zadikian"], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$724$img_src$$, 
"https://atd-722658831.imgix.net/blue_yellow/top_view.jpg", $APP.$cljs$cst$733$aspect_ratio$$, 0.75, $APP.$cljs$cst$706$caption$$, "BLUE YELLOW BLUE YELLOW", $APP.$cljs$cst$707$credit$$, "Studio 2026"], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$724$img_src$$, "https://atd-722658831.imgix.net/blue_yellow/side-2.jpg", $APP.$cljs$cst$733$aspect_ratio$$, 0.75, $APP.$cljs$cst$706$caption$$, "BLUE YELLOW BLUE YELLOW", $APP.$cljs$cst$707$credit$$, "Studio 2026"], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 
4, [$APP.$cljs$cst$724$img_src$$, "https://atd-722658831.imgix.net/big_red/master.jpg", $APP.$cljs$cst$733$aspect_ratio$$, 1.78, $APP.$cljs$cst$706$caption$$, "THE BIG RED", $APP.$cljs$cst$707$credit$$, "Render 2026"], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$724$img_src$$, "https://atd-722658831.imgix.net/big_red/corner_low.jpg", $APP.$cljs$cst$733$aspect_ratio$$, 0.75, $APP.$cljs$cst$706$caption$$, "THE BIG RED", $APP.$cljs$cst$707$credit$$, "Render 2026"], null), 
new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$724$img_src$$, "https://atd-722658831.imgix.net/photos/blue_unit_with_hand.jpg", $APP.$cljs$cst$733$aspect_ratio$$, 1.5, $APP.$cljs$cst$706$caption$$, "BLUE BLOCK", $APP.$cljs$cst$707$credit$$, "Los Angeles 2026"], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$724$img_src$$, "https://atd-722658831.imgix.net/big_red/flag.jpg", $APP.$cljs$cst$733$aspect_ratio$$, 1.38, $APP.$cljs$cst$706$caption$$, "THE BIG RED", 
$APP.$cljs$cst$707$credit$$, "Render 2026"], null)], null);
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$297$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$298$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$pages$artist$works$works_section$$, '(hooks/use-ref "works-ref")(use-intersection-observer ref {:threshold 0.05})', null, null) : (void 0).call(null, 
$amp$pages$artist$works$works_section$$, '(hooks/use-ref "works-ref")(use-intersection-observer ref {:threshold 0.05})', null, null)), $APP.$helix$core$register_BANG_$$($amp$pages$artist$works$works_section$$, "amp.pages.artist.works/works-section"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$297$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$298$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$pages$artist$escape$escape_section$$, "", null, null) : (void 0).call(null, $amp$pages$artist$escape$escape_section$$, "", null, null)), $APP.$helix$core$register_BANG_$$($amp$pages$artist$escape$escape_section$$, 
"amp.pages.artist.escape/escape-section"));
var $amp$pages$artist$video$lazy_video$$ = $APP.$amp$utils$lazy_loading$lazy_component_STAR_$$(new $APP.$shadow$lazy$Loadable$$(new $APP.$cljs$core$PersistentVector$$(null, 1, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, ["video-background"], null), function() {
  return $APP.$amp$ui$video_background$video_background$$;
}));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$297$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$298$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$pages$artist$video$video_section$$, '(hooks/use-ref "artist-video-ref")(use-intersection-observer ref {:end "bottom"})', null, null) : (void 0).call(null, 
$amp$pages$artist$video$video_section$$, '(hooks/use-ref "artist-video-ref")(use-intersection-observer ref {:end "bottom"})', null, null)), $APP.$helix$core$register_BANG_$$($amp$pages$artist$video$video_section$$, "amp.pages.artist.video/video-section"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$297$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$298$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$pages$artist$return$0$return_section$$, "", null, null) : (void 0).call(null, $amp$pages$artist$return$0$return_section$$, "", null, null)), $APP.$helix$core$register_BANG_$$($amp$pages$artist$return$0$return_section$$, 
"amp.pages.artist.return/return-section"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$297$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$298$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($APP.$amp$pages$artist$page$artist_view$$, "", null, null) : (void 0).call(null, $APP.$amp$pages$artist$page$artist_view$$, "", null, null)), $APP.$helix$core$register_BANG_$$($APP.$amp$pages$artist$page$artist_view$$, 
"amp.pages.artist.page/artist-view"));
$APP.$module$contents$shadow$loader_set_loaded$$();

}).call(this);