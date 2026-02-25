(function(){
'use strict';
var $amp$pages$artist$portrait$portrait_section$$, $amp$pages$artist$biography$preview$$, $amp$pages$artist$biography$details$$, $amp$pages$artist$biography$biography_section$$, $amp$pages$artist$works$works_section$$, $amp$pages$artist$escape$escape_section$$, $amp$pages$artist$video$video_section$$, $amp$pages$artist$return$0$return_section$$;
$amp$pages$artist$portrait$portrait_section$$ = function($G__182950_map__182935_map__182935__$1_props__41575__auto__$jscomp$39_vec__182932_vec__182942$$, $maybe_ref__41576__auto__$jscomp$39$$) {
  $G__182950_map__182935_map__182935__$1_props__41575__auto__$jscomp$39_vec__182932_vec__182942$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__182950_map__182935_map__182935__$1_props__41575__auto__$jscomp$39_vec__182932_vec__182942$$), $maybe_ref__41576__auto__$jscomp$39$$], null);
  $G__182950_map__182935_map__182935__$1_props__41575__auto__$jscomp$39_vec__182932_vec__182942$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__182950_map__182935_map__182935__$1_props__41575__auto__$jscomp$39_vec__182932_vec__182942$$, 0, null);
  $G__182950_map__182935_map__182935__$1_props__41575__auto__$jscomp$39_vec__182932_vec__182942$$ = $APP.$cljs$core$__destructure_map$$($G__182950_map__182935_map__182935__$1_props__41575__auto__$jscomp$39_vec__182932_vec__182942$$);
  var $id$jscomp$84$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__182950_map__182935_map__182935__$1_props__41575__auto__$jscomp$39_vec__182932_vec__182942$$, $APP.$cljs$cst$285$id$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $ref$jscomp$17$$ = $APP.$helix$hooks$use_ref$$("portrait-ref");
  $G__182950_map__182935_map__182935__$1_props__41575__auto__$jscomp$39_vec__182932_vec__182942$$ = $APP.$amp$hooks$use_intersection_observer$use_intersection_observer$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($ref$jscomp$17$$, $APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$754$threshold$$, 0.05], null)]));
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__182950_map__182935_map__182935__$1_props__41575__auto__$jscomp$39_vec__182932_vec__182942$$, 0, null);
  var $visible_QMARK_$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__182950_map__182935_map__182935__$1_props__41575__auto__$jscomp$39_vec__182932_vec__182942$$, 1, null);
  $G__182950_map__182935_map__182935__$1_props__41575__auto__$jscomp$39_vec__182932_vec__182942$$ = function() {
    return {id:$id$jscomp$84$$, ref:$ref$jscomp$17$$, className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["pt-12 sm:pt-14", "pb-10 sm:pb-12"]))), children:[function() {
      var $G__182954$$ = function() {
        return {className:"px-4", children:function() {
          var $G__182958$$ = function() {
            return {className:"relative w-full aspect-[3/4] sm:aspect-[4/5] md:aspect-[16/9] overflow-hidden", children:[function() {
              var $G__182962$$ = {"img-src":"https://atd-722658831.imgix.net/portraits/zz-portrait-2.jpg", fit:"crop", "active?":$visible_QMARK_$$};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$ui$image_overlay$lazy_image_with_overlay$$, $G__182962$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$ui$image_overlay$lazy_image_with_overlay$$, $G__182962$$);
            }(), function() {
              var $G__182967$$ = function() {
                return {className:"absolute bottom-0 left-0 right-0 p-6 sm:p-10\n                                   bg-gradient-to-t from-black/70 to-transparent", children:[function() {
                  var $G__182971$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$eyebrow$$, "text-slate-500  dark:text-slate-500", "mb-2"]))), children:"The Artist"};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__182971$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__182971$$);
                }(), function() {
                  var $G__182975$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$heading_display$$, "mb-2"]))), children:"Zadik Zadikian"};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("h1", $G__182975$$) : $APP.$helix$core$jsx$$.call(null, "h1", $G__182975$$);
                }(), function() {
                  var $G__182979$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-display font-medium text-xs uppercase tracking-[0.2em]", "text-amber-600 dark:text-amber-300/70"]))), children:"Sculptor · b. 1948, Erevan"};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__182979$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__182979$$);
                }()]};
              }();
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__182967$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__182967$$);
            }()]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__182958$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__182958$$);
        }()};
      }();
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__182954$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__182954$$);
    }(), function() {
      var $G__182983$$ = function() {
        return {className:"px-4 mt-10", children:function() {
          var $G__182988$$ = function() {
            return {className:"border-l-2 border-white/20 dark:border-white/20 pl-6", children:[function() {
              var $G__182992$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_lg$$, "italic"]))), children:"“If you want to learn about something, become that thing and then study yourself.”"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__182992$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__182992$$);
            }(), function() {
              var $G__183000$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["block mt-3 not-italic", $APP.$amp$styles$label_muted$$]))), children:"— Zadik Zadikian"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("cite", $G__183000$$) : $APP.$helix$core$jsx$$.call(null, "cite", $G__183000$$);
            }()]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("blockquote", $G__182988$$) : $APP.$helix$core$jsxs$$.call(null, "blockquote", $G__182988$$);
        }()};
      }();
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__182983$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__182983$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("section", $G__182950_map__182935_map__182935__$1_props__41575__auto__$jscomp$39_vec__182932_vec__182942$$) : $APP.$helix$core$jsxs$$.call(null, "section", $G__182950_map__182935_map__182935__$1_props__41575__auto__$jscomp$39_vec__182932_vec__182942$$);
};
$amp$pages$artist$biography$preview$$ = function($G__182915_props__41575__auto__$jscomp$40$$) {
  $APP.$helix$core$extract_cljs_props$$($G__182915_props__41575__auto__$jscomp$40$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__182915_props__41575__auto__$jscomp$40$$ = function() {
    return {className:"px-4", children:[function() {
      var $G__182919$$ = {author:"Carlo McCormick", "class":"mb-6"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$ui$written_by$written_by$$, $G__182919$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$ui$written_by$written_by$$, $G__182919$$);
    }(), function() {
      var $G__182925$$ = function() {
        return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_lg$$, "mb-6"]))), children:[function() {
          var $G__182929$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:"Zadik Zadikian"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__182929$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__182929$$);
        }(), " (b. 1948, Erevan, Soviet Armenia) has spent over five decades creating works ", "that challenge both the materials and ideologies of contemporary art. A daring ", "escape from the Soviet Union in his youth marked the beginning of an extraordinary ", "journey, from his training under ", function() {
          var $G__182937$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:"Benjamino Bufano"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__182937$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__182937$$);
        }(), " to his longstanding friendship with ", function() {
          var $G__182941$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:"Richard Serra"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__182941$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__182941$$);
        }(), "."]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__182925$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__182925$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__182915_props__41575__auto__$jscomp$40$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__182915_props__41575__auto__$jscomp$40$$);
};
$amp$pages$artist$biography$details$$ = function($G__183027_props__41575__auto__$jscomp$41$$) {
  $APP.$helix$core$extract_cljs_props$$($G__183027_props__41575__auto__$jscomp$41$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__183027_props__41575__auto__$jscomp$41$$ = function() {
    return {className:"px-4", children:[function() {
      var $G__183035$$ = {author:"Carlo McCormick", "class":"mb-6"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$ui$written_by$written_by$$, $G__183035$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$ui$written_by$written_by$$, $G__183035$$);
    }(), function() {
      var $G__183045$$ = function() {
        return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_lg$$, "mb-6"]))), children:[function() {
          var $G__183051$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:"Zadik Zadikian"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__183051$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__183051$$);
        }(), " (b. 1948, Erevan, Soviet Armenia) has spent over five decades creating works ", "that challenge both the materials and ideologies of contemporary art. A daring ", "escape from the Soviet Union in his youth marked the beginning of an extraordinary ", "journey, from his training under ", function() {
          var $G__183062$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:"Benjamino Bufano"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__183062$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__183062$$);
        }(), " to his longstanding friendship with ", function() {
          var $G__183070$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:"Richard Serra"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__183070$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__183070$$);
        }(), "."]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__183045$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__183045$$);
    }(), function() {
      var $G__183078$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$, "mb-6"]))), children:["Born in Erevan during the late Soviet period, Zadikian grew up amid the tension ", "between the rich cultural heritage of Armenia and the rigid constraints of the ", "Soviet system. From an early age he was drawn to material and form—carving, ", 
      "assembling, and building with whatever was at hand. This instinct for making ", "would define his entire career."]};
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__183078$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__183078$$);
    }(), function() {
      var $G__183082_JSCompiler_temp_const$jscomp$inline_3704$$ = $APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$, "mb-6"])));
      var $G__183087$jscomp$inline_3706_JSCompiler_inline_result$jscomp$inline_3705$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:"Benjamino Bufano"};
      $G__183087$jscomp$inline_3706_JSCompiler_inline_result$jscomp$inline_3705$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__183087$jscomp$inline_3706_JSCompiler_inline_result$jscomp$inline_3705$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__183087$jscomp$inline_3706_JSCompiler_inline_result$jscomp$inline_3705$$);
      $G__183082_JSCompiler_temp_const$jscomp$inline_3704$$ = {className:$G__183082_JSCompiler_temp_const$jscomp$inline_3704$$, children:["After arriving in the United States, Zadikian studied under ", $G__183087$jscomp$inline_3706_JSCompiler_inline_result$jscomp$inline_3705$$, " in San Francisco, absorbing the elder sculptor’s commitment to monumental ", "public art and the conviction that sculpture should occupy and transform shared space. ", "These formative years instilled a deep respect for craft, scale, and the social ", 
      "responsibility of the artist."]};
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__183082_JSCompiler_temp_const$jscomp$inline_3704$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__183082_JSCompiler_temp_const$jscomp$inline_3704$$);
    }(), function() {
      var $G__183091_JSCompiler_temp_const$jscomp$inline_3708$$ = $APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$, "mb-6"])));
      var $G__183096$jscomp$inline_3710_JSCompiler_inline_result$jscomp$inline_3709$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:"gold leaf"};
      $G__183096$jscomp$inline_3710_JSCompiler_inline_result$jscomp$inline_3709$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__183096$jscomp$inline_3710_JSCompiler_inline_result$jscomp$inline_3709$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__183096$jscomp$inline_3710_JSCompiler_inline_result$jscomp$inline_3709$$);
      $G__183091_JSCompiler_temp_const$jscomp$inline_3708$$ = {className:$G__183091_JSCompiler_temp_const$jscomp$inline_3708$$, children:["Zadikian’s exploration of gilded forms has established him as one of the leading ", "sculptors in the realm of contemporary alchemy. His pieces, often crafted from ", $G__183096$jscomp$inline_3710_JSCompiler_inline_result$jscomp$inline_3709$$, ", suggest a transcendence of time and place, pushing boundaries while creating ", "worlds that seem to belong to another realm entirely."]};
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__183091_JSCompiler_temp_const$jscomp$inline_3708$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__183091_JSCompiler_temp_const$jscomp$inline_3708$$);
    }(), function() {
      var $G__183101_JSCompiler_temp_const$jscomp$inline_3712$$ = $APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$, "mb-6"])));
      var $G__183109$jscomp$inline_3714_JSCompiler_inline_result$jscomp$inline_3713$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:"block, or brick"};
      $G__183109$jscomp$inline_3714_JSCompiler_inline_result$jscomp$inline_3713$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__183109$jscomp$inline_3714_JSCompiler_inline_result$jscomp$inline_3713$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__183109$jscomp$inline_3714_JSCompiler_inline_result$jscomp$inline_3713$$);
      $G__183101_JSCompiler_temp_const$jscomp$inline_3712$$ = {className:$G__183101_JSCompiler_temp_const$jscomp$inline_3712$$, children:["Centered on the most basic unit—the ", $G__183109$jscomp$inline_3714_JSCompiler_inline_result$jscomp$inline_3713$$, "—which has been continuously used for building for over eleven millennia, ", "Zadikian’s simplified plaster casts are elemental and foundational: a humble ", "aesthetics where form, beauty, and meaning emerge through the assembly and fluid ", "recombination of humanity’s most common architectural building element."]};
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__183101_JSCompiler_temp_const$jscomp$inline_3712$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__183101_JSCompiler_temp_const$jscomp$inline_3712$$);
    }(), function() {
      var $G__183113_JSCompiler_temp_const$jscomp$inline_3716$$ = $APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$, "mb-6"])));
      var $G__183121$jscomp$inline_3718_JSCompiler_inline_result$jscomp$inline_3717$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:"Richard Serra"};
      $G__183121$jscomp$inline_3718_JSCompiler_inline_result$jscomp$inline_3717$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__183121$jscomp$inline_3718_JSCompiler_inline_result$jscomp$inline_3717$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__183121$jscomp$inline_3718_JSCompiler_inline_result$jscomp$inline_3717$$);
      $G__183113_JSCompiler_temp_const$jscomp$inline_3716$$ = {className:$G__183113_JSCompiler_temp_const$jscomp$inline_3716$$, children:["His friendship with ", $G__183121$jscomp$inline_3718_JSCompiler_inline_result$jscomp$inline_3717$$, " has been a touchstone throughout his practice—not as influence in a stylistic ", "sense, but as a shared conviction that sculpture’s power resides in the encounter ", "between material, space, and the viewer’s body. Both artists insist that the ", "experience of the work cannot be reduced to a photograph; it must be walked ", 
      "through, stood beside, and felt."]};
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__183113_JSCompiler_temp_const$jscomp$inline_3716$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__183113_JSCompiler_temp_const$jscomp$inline_3716$$);
    }(), function() {
      var $G__183129$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$]))), children:["Over five decades, Zadikian has built a body of work that is at once minimal ", "and maximal—pared to the elemental unit yet expansive in its combinatorial ", "possibilities. Each block is singular; together they form structures that echo ", "the layered histories of the civilizations that invented them."]};
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__183129$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__183129$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__183027_props__41575__auto__$jscomp$41$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__183027_props__41575__auto__$jscomp$41$$);
};
$amp$pages$artist$biography$biography_section$$ = function($G__183146_id$jscomp$85_map__183144_map__183144__$1_props__41575__auto__$jscomp$42_vec__183141$$, $G__183153$jscomp$inline_3721_JSCompiler_inline_result$jscomp$inline_3720_maybe_ref__41576__auto__$jscomp$42$$) {
  $G__183146_id$jscomp$85_map__183144_map__183144__$1_props__41575__auto__$jscomp$42_vec__183141$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__183146_id$jscomp$85_map__183144_map__183144__$1_props__41575__auto__$jscomp$42_vec__183141$$), $G__183153$jscomp$inline_3721_JSCompiler_inline_result$jscomp$inline_3720_maybe_ref__41576__auto__$jscomp$42$$], null);
  $G__183146_id$jscomp$85_map__183144_map__183144__$1_props__41575__auto__$jscomp$42_vec__183141$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__183146_id$jscomp$85_map__183144_map__183144__$1_props__41575__auto__$jscomp$42_vec__183141$$, 0, null);
  $G__183146_id$jscomp$85_map__183144_map__183144__$1_props__41575__auto__$jscomp$42_vec__183141$$ = $APP.$cljs$core$__destructure_map$$($G__183146_id$jscomp$85_map__183144_map__183144__$1_props__41575__auto__$jscomp$42_vec__183141$$);
  $G__183146_id$jscomp$85_map__183144_map__183144__$1_props__41575__auto__$jscomp$42_vec__183141$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__183146_id$jscomp$85_map__183144_map__183144__$1_props__41575__auto__$jscomp$42_vec__183141$$, $APP.$cljs$cst$285$id$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__183153$jscomp$inline_3721_JSCompiler_inline_result$jscomp$inline_3720_maybe_ref__41576__auto__$jscomp$42$$ = {"section-hint":"biography", title:"The Artist", "expand-button-label":"Read full biography", "preview-text":$amp$pages$artist$biography$preview$$, "full-text":$amp$pages$artist$biography$details$$};
  $G__183153$jscomp$inline_3721_JSCompiler_inline_result$jscomp$inline_3720_maybe_ref__41576__auto__$jscomp$42$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$ui$expandable_text$expandable_text_area_light$$, $G__183153$jscomp$inline_3721_JSCompiler_inline_result$jscomp$inline_3720_maybe_ref__41576__auto__$jscomp$42$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$ui$expandable_text$expandable_text_area_light$$, $G__183153$jscomp$inline_3721_JSCompiler_inline_result$jscomp$inline_3720_maybe_ref__41576__auto__$jscomp$42$$);
  $G__183146_id$jscomp$85_map__183144_map__183144__$1_props__41575__auto__$jscomp$42_vec__183141$$ = {id:$G__183146_id$jscomp$85_map__183144_map__183144__$1_props__41575__auto__$jscomp$42_vec__183141$$, children:$G__183153$jscomp$inline_3721_JSCompiler_inline_result$jscomp$inline_3720_maybe_ref__41576__auto__$jscomp$42$$};
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__183146_id$jscomp$85_map__183144_map__183144__$1_props__41575__auto__$jscomp$42_vec__183141$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__183146_id$jscomp$85_map__183144_map__183144__$1_props__41575__auto__$jscomp$42_vec__183141$$);
};
$amp$pages$artist$works$works_section$$ = function($G__183756_id$jscomp$86_map__183751_map__183751__$1_props__41575__auto__$jscomp$43_vec__183748$$, $maybe_ref__41576__auto__$jscomp$43_ref$jscomp$18$$) {
  $G__183756_id$jscomp$86_map__183751_map__183751__$1_props__41575__auto__$jscomp$43_vec__183748$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__183756_id$jscomp$86_map__183751_map__183751__$1_props__41575__auto__$jscomp$43_vec__183748$$), $maybe_ref__41576__auto__$jscomp$43_ref$jscomp$18$$], null);
  $G__183756_id$jscomp$86_map__183751_map__183751__$1_props__41575__auto__$jscomp$43_vec__183748$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__183756_id$jscomp$86_map__183751_map__183751__$1_props__41575__auto__$jscomp$43_vec__183748$$, 0, null);
  $G__183756_id$jscomp$86_map__183751_map__183751__$1_props__41575__auto__$jscomp$43_vec__183748$$ = $APP.$cljs$core$__destructure_map$$($G__183756_id$jscomp$86_map__183751_map__183751__$1_props__41575__auto__$jscomp$43_vec__183748$$);
  $G__183756_id$jscomp$86_map__183751_map__183751__$1_props__41575__auto__$jscomp$43_vec__183748$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__183756_id$jscomp$86_map__183751_map__183751__$1_props__41575__auto__$jscomp$43_vec__183748$$, $APP.$cljs$cst$285$id$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $maybe_ref__41576__auto__$jscomp$43_ref$jscomp$18$$ = $APP.$helix$hooks$use_ref$$("works-ref");
  var $G__183760$jscomp$inline_4064_G__183764$jscomp$inline_4065_G__183768$jscomp$inline_4066_JSCompiler_inline_result$jscomp$inline_4063_vec__183752$$ = $APP.$amp$hooks$use_intersection_observer$use_intersection_observer$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($maybe_ref__41576__auto__$jscomp$43_ref$jscomp$18$$, $APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$754$threshold$$, 0.05], null)]));
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__183760$jscomp$inline_4064_G__183764$jscomp$inline_4065_G__183768$jscomp$inline_4066_JSCompiler_inline_result$jscomp$inline_4063_vec__183752$$, 0, null);
  $G__183760$jscomp$inline_4064_G__183764$jscomp$inline_4065_G__183768$jscomp$inline_4066_JSCompiler_inline_result$jscomp$inline_4063_vec__183752$$ = {"enabled?":$APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__183760$jscomp$inline_4064_G__183764$jscomp$inline_4065_G__183768$jscomp$inline_4066_JSCompiler_inline_result$jscomp$inline_4063_vec__183752$$, 1, null), slides:$amp$pages$artist$works$slides$$};
  $G__183760$jscomp$inline_4064_G__183764$jscomp$inline_4065_G__183768$jscomp$inline_4066_JSCompiler_inline_result$jscomp$inline_4063_vec__183752$$ = {className:"mt-6 relative pinstripe-bold", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$ui$image_gallery$lazy_image_gallery$$, $G__183760$jscomp$inline_4064_G__183764$jscomp$inline_4065_G__183768$jscomp$inline_4066_JSCompiler_inline_result$jscomp$inline_4063_vec__183752$$) : 
  $APP.$helix$core$jsx$$.call(null, $APP.$amp$ui$image_gallery$lazy_image_gallery$$, $G__183760$jscomp$inline_4064_G__183764$jscomp$inline_4065_G__183768$jscomp$inline_4066_JSCompiler_inline_result$jscomp$inline_4063_vec__183752$$)};
  $G__183760$jscomp$inline_4064_G__183764$jscomp$inline_4065_G__183768$jscomp$inline_4066_JSCompiler_inline_result$jscomp$inline_4063_vec__183752$$ = {eyebrow:"selected works", title:"The Work", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__183760$jscomp$inline_4064_G__183764$jscomp$inline_4065_G__183768$jscomp$inline_4066_JSCompiler_inline_result$jscomp$inline_4063_vec__183752$$) : $APP.$helix$core$jsx$$.call(null, 
  "div", $G__183760$jscomp$inline_4064_G__183764$jscomp$inline_4065_G__183768$jscomp$inline_4066_JSCompiler_inline_result$jscomp$inline_4063_vec__183752$$)};
  $G__183760$jscomp$inline_4064_G__183764$jscomp$inline_4065_G__183768$jscomp$inline_4066_JSCompiler_inline_result$jscomp$inline_4063_vec__183752$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$ui$section_header$section_header$$, $G__183760$jscomp$inline_4064_G__183764$jscomp$inline_4065_G__183768$jscomp$inline_4066_JSCompiler_inline_result$jscomp$inline_4063_vec__183752$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$ui$section_header$section_header$$, 
  $G__183760$jscomp$inline_4064_G__183764$jscomp$inline_4065_G__183768$jscomp$inline_4066_JSCompiler_inline_result$jscomp$inline_4063_vec__183752$$);
  $G__183756_id$jscomp$86_map__183751_map__183751__$1_props__41575__auto__$jscomp$43_vec__183748$$ = {id:$G__183756_id$jscomp$86_map__183751_map__183751__$1_props__41575__auto__$jscomp$43_vec__183748$$, ref:$maybe_ref__41576__auto__$jscomp$43_ref$jscomp$18$$, children:$G__183760$jscomp$inline_4064_G__183764$jscomp$inline_4065_G__183768$jscomp$inline_4066_JSCompiler_inline_result$jscomp$inline_4063_vec__183752$$};
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__183756_id$jscomp$86_map__183751_map__183751__$1_props__41575__auto__$jscomp$43_vec__183748$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__183756_id$jscomp$86_map__183751_map__183751__$1_props__41575__auto__$jscomp$43_vec__183748$$);
};
$amp$pages$artist$escape$escape_section$$ = function($G__183177_map__183173_map__183173__$1_props__41575__auto__$jscomp$44_vec__183170$$, $maybe_ref__41576__auto__$jscomp$44$$) {
  $G__183177_map__183173_map__183173__$1_props__41575__auto__$jscomp$44_vec__183170$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__183177_map__183173_map__183173__$1_props__41575__auto__$jscomp$44_vec__183170$$), $maybe_ref__41576__auto__$jscomp$44$$], null);
  $G__183177_map__183173_map__183173__$1_props__41575__auto__$jscomp$44_vec__183170$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__183177_map__183173_map__183173__$1_props__41575__auto__$jscomp$44_vec__183170$$, 0, null);
  $G__183177_map__183173_map__183173__$1_props__41575__auto__$jscomp$44_vec__183170$$ = $APP.$cljs$core$__destructure_map$$($G__183177_map__183173_map__183173__$1_props__41575__auto__$jscomp$44_vec__183170$$);
  var $id$jscomp$87$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__183177_map__183173_map__183173__$1_props__41575__auto__$jscomp$44_vec__183170$$, $APP.$cljs$cst$285$id$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__183177_map__183173_map__183173__$1_props__41575__auto__$jscomp$44_vec__183170$$ = function() {
    return {id:$id$jscomp$87$$, children:function() {
      var $G__183181$$ = function() {
        return {eyebrow:"origins", title:"The Escape", children:function() {
          var $G__183187$$ = function() {
            return {className:"mt-6 px-4", children:[function() {
              var $G__183191_JSCompiler_temp_const$jscomp$inline_3726$$ = $APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_lg$$, "mb-6"])));
              var $G__183197$jscomp$inline_3728_JSCompiler_inline_result$jscomp$inline_3727$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:"Zadik Zadikian"};
              $G__183197$jscomp$inline_3728_JSCompiler_inline_result$jscomp$inline_3727$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__183197$jscomp$inline_3728_JSCompiler_inline_result$jscomp$inline_3727$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__183197$jscomp$inline_3728_JSCompiler_inline_result$jscomp$inline_3727$$);
              $G__183191_JSCompiler_temp_const$jscomp$inline_3726$$ = {className:$G__183191_JSCompiler_temp_const$jscomp$inline_3726$$, children:["In the early 1970s, at the height of the Cold War, a young ", $G__183197$jscomp$inline_3728_JSCompiler_inline_result$jscomp$inline_3727$$, " made the decision that would define the rest of his life: ", "to leave Soviet Armenia. The borders were sealed, emigration all ", "but impossible, and the penalties for attempting it severe. Yet ", "the pull of artistic freedom—the chance to work without ", 
              "ideological constraint—proved stronger than fear."]};
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__183191_JSCompiler_temp_const$jscomp$inline_3726$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__183191_JSCompiler_temp_const$jscomp$inline_3726$$);
            }(), function() {
              var $G__183205$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$, "mb-6"]))), children:"The journey was perilous, crossing through countries and relying on ;networks of sympathizers and fellow dissidents. Zadikian carried ;almost nothing—a few sketches, the clothes on his back, and an ;unshakeable conviction that sculpture was worth risking everything for. ;The details of the crossing remain partially obscured, as much by the ;passage of time as by the deliberate silence that protected those who ;helped him.".split(";")};
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__183205$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__183205$$);
            }(), function() {
              var $G__183209$$ = function() {
                return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$, "mb-6"]))), children:["Arriving first in Europe and eventually reaching ", function() {
                  var $G__183215$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:"San Francisco"};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__183215$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__183215$$);
                }(), ", Zadikian found himself in a city teeming with artistic reinvention. ", "It was here that he encountered ", function() {
                  var $G__183225$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:"Benjamino Bufano"};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__183225$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__183225$$);
                }(), ", the Italian-American sculptor whose monumental public works and ", "pacifist convictions resonated deeply with the young Armenian exile. ", "Under Bufano’s mentorship, Zadikian learned not only technique but ", "a philosophy of art as civic presence—sculpture that belongs to everyone."]};
              }();
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__183209$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__183209$$);
            }(), function() {
              var $G__183235$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$, "mb-6"]))), children:"The escape from the Soviet Union was not merely a biographical event; {it became the foundational metaphor of Zadikian’s practice. The {block—the basic unit of construction and of confinement—carries {within it the memory of walls that constrain and walls that shelter. {Every sculpture he builds is, in some sense, an act of rebuilding: {taking the elemental unit of architecture and reassembling it into {something free.".split("{")};
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__183235$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__183235$$);
            }(), function() {
              var $G__183243$$ = function() {
                return {className:"border-l-2 border-white/20 dark:border-white/20 pl-6 my-8", children:[function() {
                  var $G__183249$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$, "italic"]))), children:["“The block remembers two things—the wall it was taken ", "from and the wall it will become.”"]};
                  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__183249$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__183249$$);
                }(), function() {
                  var $G__183257$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["block mt-3 not-italic", $APP.$amp$styles$label_muted$$]))), children:"— Zadik Zadikian"};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("cite", $G__183257$$) : $APP.$helix$core$jsx$$.call(null, "cite", $G__183257$$);
                }()]};
              }();
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("blockquote", $G__183243$$) : $APP.$helix$core$jsxs$$.call(null, "blockquote", $G__183243$$);
            }()]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__183187$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__183187$$);
        }()};
      }();
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$ui$section_header$section_header$$, $G__183181$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$ui$section_header$section_header$$, $G__183181$$);
    }()};
  }();
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__183177_map__183173_map__183173__$1_props__41575__auto__$jscomp$44_vec__183170$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__183177_map__183173_map__183173__$1_props__41575__auto__$jscomp$44_vec__183170$$);
};
$amp$pages$artist$video$video_section$$ = function($G__183321_map__183315_map__183315__$1_props__41575__auto__$jscomp$45_vec__183312_vec__183317$$, $maybe_ref__41576__auto__$jscomp$45$$) {
  $G__183321_map__183315_map__183315__$1_props__41575__auto__$jscomp$45_vec__183312_vec__183317$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__183321_map__183315_map__183315__$1_props__41575__auto__$jscomp$45_vec__183312_vec__183317$$), $maybe_ref__41576__auto__$jscomp$45$$], null);
  $G__183321_map__183315_map__183315__$1_props__41575__auto__$jscomp$45_vec__183312_vec__183317$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__183321_map__183315_map__183315__$1_props__41575__auto__$jscomp$45_vec__183312_vec__183317$$, 0, null);
  $G__183321_map__183315_map__183315__$1_props__41575__auto__$jscomp$45_vec__183312_vec__183317$$ = $APP.$cljs$core$__destructure_map$$($G__183321_map__183315_map__183315__$1_props__41575__auto__$jscomp$45_vec__183312_vec__183317$$);
  var $id$jscomp$88$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__183321_map__183315_map__183315__$1_props__41575__auto__$jscomp$45_vec__183312_vec__183317$$, $APP.$cljs$cst$285$id$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $ref$jscomp$19$$ = $APP.$helix$hooks$use_ref$$("artist-video-ref");
  $G__183321_map__183315_map__183315__$1_props__41575__auto__$jscomp$45_vec__183312_vec__183317$$ = $APP.$amp$hooks$use_intersection_observer$use_intersection_observer$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($ref$jscomp$19$$, $APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$741$end$$, "bottom"], null)]));
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__183321_map__183315_map__183315__$1_props__41575__auto__$jscomp$45_vec__183312_vec__183317$$, 0, null);
  var $visible_QMARK_$jscomp$2$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__183321_map__183315_map__183315__$1_props__41575__auto__$jscomp$45_vec__183312_vec__183317$$, 1, null);
  $G__183321_map__183315_map__183315__$1_props__41575__auto__$jscomp$45_vec__183312_vec__183317$$ = function() {
    return {id:$id$jscomp$88$$, ref:$ref$jscomp$19$$, children:function() {
      var $G__183325$$ = function() {
        return {eyebrow:"in his own words", title:"The Artist Speaks", children:function() {
          var $G__183330$$ = function() {
            return {className:"mt-6 px-4", children:[function() {
              var $G__183334$$ = function() {
                return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$, "mb-8"]))), children:["Hear ", function() {
                  var $G__183342$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:"Zadik Zadikian"};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__183342$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__183342$$);
                }(), " speak about his practice, his relationship with material, and ", "the significance of representing ", function() {
                  var $G__183350$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:"Armenia"};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__183350$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__183350$$);
                }(), " at the 61st Venice Biennale."]};
              }();
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__183334$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__183334$$);
            }(), function() {
              var $G__183360_G__183368$jscomp$inline_3731$$ = {"playback-id":"ay2rRkV3PxHTy92Gfi00SibKfEDjDLqGqxmiTzbrz3sQ", "aspect-ratio":1.77, "should-play?":$visible_QMARK_$jscomp$2$$, "allow-audio?":!0};
              $G__183360_G__183368$jscomp$inline_3731$$ = {className:"w-full aspect-[16/9]", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$pages$artist$video$lazy_video$$, $G__183360_G__183368$jscomp$inline_3731$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$artist$video$lazy_video$$, $G__183360_G__183368$jscomp$inline_3731$$)};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__183360_G__183368$jscomp$inline_3731$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__183360_G__183368$jscomp$inline_3731$$);
            }()]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__183330$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__183330$$);
        }()};
      }();
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$ui$section_header$section_header$$, $G__183325$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$ui$section_header$section_header$$, $G__183325$$);
    }()};
  }();
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__183321_map__183315_map__183315__$1_props__41575__auto__$jscomp$45_vec__183312_vec__183317$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__183321_map__183315_map__183315__$1_props__41575__auto__$jscomp$45_vec__183312_vec__183317$$);
};
$amp$pages$artist$return$0$return_section$$ = function($G__183346_map__183338_map__183338__$1_props__41575__auto__$jscomp$46_vec__183335$$, $maybe_ref__41576__auto__$jscomp$46$$) {
  $G__183346_map__183338_map__183338__$1_props__41575__auto__$jscomp$46_vec__183335$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__183346_map__183338_map__183338__$1_props__41575__auto__$jscomp$46_vec__183335$$), $maybe_ref__41576__auto__$jscomp$46$$], null);
  $G__183346_map__183338_map__183338__$1_props__41575__auto__$jscomp$46_vec__183335$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__183346_map__183338_map__183338__$1_props__41575__auto__$jscomp$46_vec__183335$$, 0, null);
  $G__183346_map__183338_map__183338__$1_props__41575__auto__$jscomp$46_vec__183335$$ = $APP.$cljs$core$__destructure_map$$($G__183346_map__183338_map__183338__$1_props__41575__auto__$jscomp$46_vec__183335$$);
  var $id$jscomp$89$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__183346_map__183338_map__183338__$1_props__41575__auto__$jscomp$46_vec__183335$$, $APP.$cljs$cst$285$id$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__183346_map__183338_map__183338__$1_props__41575__auto__$jscomp$46_vec__183335$$ = function() {
    return {id:$id$jscomp$89$$, children:function() {
      var $G__183354$$ = function() {
        return {eyebrow:"full circle", title:"Return to Armenia", children:function() {
          var $G__183358$$ = function() {
            return {className:"mt-6 px-4", children:[function() {
              var $G__183366_JSCompiler_temp_const$jscomp$inline_3733$$ = $APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_lg$$, "mb-6"])));
              var $G__183372$jscomp$inline_3735_JSCompiler_inline_result$jscomp$inline_3734$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:"Zadik Zadikian"};
              $G__183372$jscomp$inline_3735_JSCompiler_inline_result$jscomp$inline_3734$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__183372$jscomp$inline_3735_JSCompiler_inline_result$jscomp$inline_3734$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__183372$jscomp$inline_3735_JSCompiler_inline_result$jscomp$inline_3734$$);
              $G__183366_JSCompiler_temp_const$jscomp$inline_3733$$ = {className:$G__183366_JSCompiler_temp_const$jscomp$inline_3733$$, children:["After decades in the United States, ", $G__183372$jscomp$inline_3735_JSCompiler_inline_result$jscomp$inline_3734$$, " began a gradual return—not only to the country he had fled, ", "but to the questions of identity, belonging, and cultural memory ", "that had shaped his work from the very beginning."]};
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__183366_JSCompiler_temp_const$jscomp$inline_3733$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__183366_JSCompiler_temp_const$jscomp$inline_3733$$);
            }(), function() {
              var $G__183379$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$, "mb-6"]))), children:"Armenia in the post-Soviet era was a country in transformation. {The independence of 1991 had opened new possibilities but also {revealed old wounds. For Zadikian, returning was not a simple {homecoming; it was an encounter with a nation remaking itself {from the same elemental materials—stone, earth, will—that {he had been working with in his studio for half a century.".split("{")};
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__183379$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__183379$$);
            }(), function() {
              var $G__183383$$ = function() {
                return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$, "mb-6"]))), children:["The invitation to represent ", function() {
                  var $G__183390$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:"Armenia at the 61st Venice Biennale"};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__183390$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__183390$$);
                }(), " carries a particular resonance. Venice and Armenia share a deep ", "historical connection: the island of ", function() {
                  var $G__183396$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:"San Lazzaro degli Armeni"};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__183396$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__183396$$);
                }(), " has housed an Armenian monastery since 1717, preserving manuscripts, ", "language, and culture through centuries of upheaval. To bring Armenian ", "art to the Biennale is to continue a conversation that has been ", "unfolding in this lagoon for over three hundred years."]};
              }();
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__183383$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__183383$$);
            }(), function() {
              var $G__183400$$ = function() {
                return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$, "mb-6"]))), children:["For Zadikian, the Biennale is not a stage for national spectacle ", "but a place where the quiet persistence of making—the ", function() {
                  var $G__183406$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:"studio as sanctuary"};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__183406$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__183406$$);
                }(), "—can speak across borders. The pavilion will operate as a ", "living workshop, echoing the Armenian tradition of the ", function() {
                  var $G__183410$$ = {className:$APP.$helix$impl$props$normalize_class$$("italic"), children:"arvestanots"};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__183410$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__183410$$);
                }(), " (workshop), where art is inseparable from the daily labor of its creation."]};
              }();
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__183400$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__183400$$);
            }(), function() {
              var $G__183418$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$, "mb-6"]))), children:["In representing Armenia at Venice, Zadikian closes a circle that ", "began with his escape. The young man who left a culture behind in ", "order to make art freely now returns that art to the world stage ", "under the flag of the nation he never stopped carrying with him."]};
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__183418$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__183418$$);
            }(), function() {
              var $G__183422$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_closing$$, "mt-10"]))), children:["“The block is the smallest homeland. Wherever you stack it, ", "you are building Armenia.”"]};
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__183422$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__183422$$);
            }()]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__183358$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__183358$$);
        }()};
      }();
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$ui$section_header$section_header$$, $G__183354$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$ui$section_header$section_header$$, $G__183354$$);
    }()};
  }();
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__183346_map__183338_map__183338__$1_props__41575__auto__$jscomp$46_vec__183335$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__183346_map__183338_map__183338__$1_props__41575__auto__$jscomp$46_vec__183335$$);
};
$APP.$amp$pages$artist$page$artist_view$$ = function($G__183970_props__41575__auto__$jscomp$47_vec__183966$$, $maybe_ref__41576__auto__$jscomp$47$$) {
  $G__183970_props__41575__auto__$jscomp$47_vec__183966$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__183970_props__41575__auto__$jscomp$47_vec__183966$$), $maybe_ref__41576__auto__$jscomp$47$$], null);
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__183970_props__41575__auto__$jscomp$47_vec__183966$$, 0, null);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__183970_props__41575__auto__$jscomp$47_vec__183966$$ = {children:[function() {
    var $G__183973$$ = {id:"portrait"};
    return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$pages$artist$portrait$portrait_section$$, $G__183973$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$artist$portrait$portrait_section$$, $G__183973$$);
  }(), function() {
    var $G__183981$$ = {id:"biography"};
    return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$pages$artist$biography$biography_section$$, $G__183981$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$artist$biography$biography_section$$, $G__183981$$);
  }(), function() {
    var $G__183987$$ = {id:"works"};
    return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$pages$artist$works$works_section$$, $G__183987$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$artist$works$works_section$$, $G__183987$$);
  }(), function() {
    var $G__183998$$ = {id:"escape"};
    return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$pages$artist$escape$escape_section$$, $G__183998$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$artist$escape$escape_section$$, $G__183998$$);
  }(), function() {
    var $G__184006$$ = {id:"video"};
    return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$pages$artist$video$video_section$$, $G__184006$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$artist$video$video_section$$, $G__184006$$);
  }(), function() {
    var $G__184010$$ = {id:"return"};
    return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$pages$artist$return$0$return_section$$, $G__184010$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$artist$return$0$return_section$$, $G__184010$$);
  }()]};
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$ui$page_shell$page_shell$$, $G__183970_props__41575__auto__$jscomp$47_vec__183966$$) : $APP.$helix$core$jsxs$$.call(null, $APP.$amp$ui$page_shell$page_shell$$, $G__183970_props__41575__auto__$jscomp$47_vec__183966$$);
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