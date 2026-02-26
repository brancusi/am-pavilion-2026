(function(){
'use strict';
var $amp$pages$artist$portrait$portrait_section$$, $amp$pages$artist$biography$preview$$, $amp$pages$artist$biography$details$$, $amp$pages$artist$biography$biography_section$$, $amp$pages$artist$works$works_section$$, $amp$pages$artist$escape$escape_section$$, $amp$pages$artist$video$video_section$$, $amp$pages$artist$return$0$return_section$$;
$amp$pages$artist$portrait$portrait_section$$ = function($G__266140_map__266133_map__266133__$1_props__41575__auto__$jscomp$27_vec__266130_vec__266136$$, $maybe_ref__41576__auto__$jscomp$27$$) {
  $G__266140_map__266133_map__266133__$1_props__41575__auto__$jscomp$27_vec__266130_vec__266136$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__266140_map__266133_map__266133__$1_props__41575__auto__$jscomp$27_vec__266130_vec__266136$$), $maybe_ref__41576__auto__$jscomp$27$$], null);
  $G__266140_map__266133_map__266133__$1_props__41575__auto__$jscomp$27_vec__266130_vec__266136$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__266140_map__266133_map__266133__$1_props__41575__auto__$jscomp$27_vec__266130_vec__266136$$, 0, null);
  $G__266140_map__266133_map__266133__$1_props__41575__auto__$jscomp$27_vec__266130_vec__266136$$ = $APP.$cljs$core$__destructure_map$$($G__266140_map__266133_map__266133__$1_props__41575__auto__$jscomp$27_vec__266130_vec__266136$$);
  var $id$jscomp$84$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__266140_map__266133_map__266133__$1_props__41575__auto__$jscomp$27_vec__266130_vec__266136$$, $APP.$cljs$cst$286$id$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $ref$jscomp$17$$ = $APP.$helix$hooks$use_ref$$("portrait-ref");
  $G__266140_map__266133_map__266133__$1_props__41575__auto__$jscomp$27_vec__266130_vec__266136$$ = $APP.$amp$hooks$use_intersection_observer$use_intersection_observer$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($ref$jscomp$17$$, $APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$756$threshold$$, 0.05], null)]));
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__266140_map__266133_map__266133__$1_props__41575__auto__$jscomp$27_vec__266130_vec__266136$$, 0, null);
  var $visible_QMARK_$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__266140_map__266133_map__266133__$1_props__41575__auto__$jscomp$27_vec__266130_vec__266136$$, 1, null);
  $G__266140_map__266133_map__266133__$1_props__41575__auto__$jscomp$27_vec__266130_vec__266136$$ = function() {
    return {id:$id$jscomp$84$$, ref:$ref$jscomp$17$$, className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["pt-12 sm:pt-14", "pb-10 sm:pb-12"]))), children:[function() {
      var $G__266144$$ = function() {
        return {className:"px-4", children:function() {
          var $G__266148$$ = function() {
            return {className:"relative w-full aspect-[3/4] sm:aspect-[4/5] md:aspect-[16/9] overflow-hidden", children:[function() {
              var $G__266153$$ = {"img-src":"https://atd-722658831.imgix.net/portraits/zz-portrait-2.jpg", fit:"crop", "active?":$visible_QMARK_$$};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$ui$image_overlay$lazy_image_with_overlay$$, $G__266153$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$ui$image_overlay$lazy_image_with_overlay$$, $G__266153$$);
            }(), function() {
              var $G__266157$$ = function() {
                return {className:"absolute bottom-0 left-0 right-0 p-6 sm:p-10\n                                   bg-gradient-to-t from-black/70 to-transparent", children:[function() {
                  var $G__266161$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$eyebrow$$, "text-slate-500  dark:text-slate-500", "mb-2"]))), children:"The Artist"};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__266161$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__266161$$);
                }(), function() {
                  var $G__266165$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$heading_display$$, "mb-2"]))), children:"Zadik Zadikian"};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("h1", $G__266165$$) : $APP.$helix$core$jsx$$.call(null, "h1", $G__266165$$);
                }(), function() {
                  var $G__266169$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$person_role$$]))), children:"Sculptor · Los Angeles, USA"};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__266169$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__266169$$);
                }()]};
              }();
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__266157$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__266157$$);
            }()]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__266148$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__266148$$);
        }()};
      }();
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__266144$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__266144$$);
    }(), function() {
      var $G__266173$$ = function() {
        return {className:"px-4 mt-10", children:function() {
          var $G__266177$$ = function() {
            return {className:"border-l-2 border-white/20 dark:border-white/20 pl-6", children:[function() {
              var $G__266181$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_lg$$, "italic"]))), children:"“If you want to learn about something, become that thing and then study yourself.”"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__266181$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__266181$$);
            }(), function() {
              var $G__266185$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["block mt-3 not-italic", $APP.$amp$styles$label_muted$$]))), children:"— Zadik Zadikian"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("cite", $G__266185$$) : $APP.$helix$core$jsx$$.call(null, "cite", $G__266185$$);
            }()]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("blockquote", $G__266177$$) : $APP.$helix$core$jsxs$$.call(null, "blockquote", $G__266177$$);
        }()};
      }();
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__266173$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__266173$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("section", $G__266140_map__266133_map__266133__$1_props__41575__auto__$jscomp$27_vec__266130_vec__266136$$) : $APP.$helix$core$jsxs$$.call(null, "section", $G__266140_map__266133_map__266133__$1_props__41575__auto__$jscomp$27_vec__266130_vec__266136$$);
};
$amp$pages$artist$biography$preview$$ = function($G__266114_props__41575__auto__$jscomp$28$$) {
  $APP.$helix$core$extract_cljs_props$$($G__266114_props__41575__auto__$jscomp$28$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__266114_props__41575__auto__$jscomp$28$$ = function() {
    return {className:"px-4", children:[function() {
      var $G__266118$$ = {author:"Carlo McCormick", "class":"mb-6"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$ui$written_by$written_by$$, $G__266118$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$ui$written_by$written_by$$, $G__266118$$);
    }(), function() {
      var $G__266122_JSCompiler_temp_const$jscomp$inline_3713$$ = $APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$, "mb-6"])));
      var $G__266127$jscomp$inline_3715_JSCompiler_inline_result$jscomp$inline_3714$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:"Zadik Zadikian"};
      $G__266127$jscomp$inline_3715_JSCompiler_inline_result$jscomp$inline_3714$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__266127$jscomp$inline_3715_JSCompiler_inline_result$jscomp$inline_3714$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__266127$jscomp$inline_3715_JSCompiler_inline_result$jscomp$inline_3714$$);
      $G__266122_JSCompiler_temp_const$jscomp$inline_3713$$ = {className:$G__266122_JSCompiler_temp_const$jscomp$inline_3713$$, children:["Born in Yerevan, ", $G__266127$jscomp$inline_3715_JSCompiler_inline_result$jscomp$inline_3714$$, "’s life began in extremes. At nineteen—armed only with conviction—he ", "escaped Soviet Armenia by swimming across the Arax River under machine-gun fire. ", "He arrived in America with nothing but the instincts that had guided him since ", "childhood: to build, to shape matter, to seek form through discipline and ", 
      "elemental materials."]};
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__266122_JSCompiler_temp_const$jscomp$inline_3713$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__266122_JSCompiler_temp_const$jscomp$inline_3713$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__266114_props__41575__auto__$jscomp$28$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__266114_props__41575__auto__$jscomp$28$$);
};
$amp$pages$artist$biography$details$$ = function($G__266197_props__41575__auto__$jscomp$29$$) {
  $APP.$helix$core$extract_cljs_props$$($G__266197_props__41575__auto__$jscomp$29$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__266197_props__41575__auto__$jscomp$29$$ = function() {
    return {className:"px-4", children:[function() {
      var $G__266201$$ = {author:"Carlo McCormick", "class":"mb-6"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$ui$written_by$written_by$$, $G__266201$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$ui$written_by$written_by$$, $G__266201$$);
    }(), function() {
      var $G__266209_JSCompiler_temp_const$jscomp$inline_3717$$ = $APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$, "mb-6"])));
      var $G__266213$jscomp$inline_3719_JSCompiler_inline_result$jscomp$inline_3718$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:"Zadik Zadikian"};
      $G__266213$jscomp$inline_3719_JSCompiler_inline_result$jscomp$inline_3718$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__266213$jscomp$inline_3719_JSCompiler_inline_result$jscomp$inline_3718$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__266213$jscomp$inline_3719_JSCompiler_inline_result$jscomp$inline_3718$$);
      $G__266209_JSCompiler_temp_const$jscomp$inline_3717$$ = {className:$G__266209_JSCompiler_temp_const$jscomp$inline_3717$$, children:["Born in Yerevan, ", $G__266213$jscomp$inline_3719_JSCompiler_inline_result$jscomp$inline_3718$$, "’s life began in extremes. At nineteen—armed only with conviction—he ", "escaped Soviet Armenia by swimming across the Arax River under machine-gun fire. ", "He arrived in America with nothing but the instincts that had guided him since ", "childhood: to build, to shape matter, to seek form through discipline and ", 
      "elemental materials."]};
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__266209_JSCompiler_temp_const$jscomp$inline_3717$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__266209_JSCompiler_temp_const$jscomp$inline_3717$$);
    }(), function() {
      var $G__266224$$ = function() {
        return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$, "mb-6"]))), children:["In San Francisco, he apprenticed with sculptor ", function() {
          var $G__266239$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:"Beniamino Bufano"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__266239$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__266239$$);
        }(), ", absorbing a lifelong sense of scale, color, and the physical intelligence of ", "large-form making. Drawn to the heat and velocity of New York, he moved east in ", "1974 and quickly found himself inside the crucible of the Minimalist movement, ", "assisting ", function() {
          var $G__266253$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:"Richard Serra"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__266253$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__266253$$);
        }(), " on the monumental black oil-stick wall drawings—one of which Serra titled ", function() {
          var $G__266264$$ = {children:"Zadikian"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("em", $G__266264$$) : $APP.$helix$core$jsx$$.call(null, "em", $G__266264$$);
        }(), "."]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__266224$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__266224$$);
    }(), function() {
      var $G__266279$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$, "mb-6"]))), children:"This immersion into New York’s severity and possibility forged an artist who has ;always moved toward intensity: toward weight, clarity, touch. The son of a builder, ;he grew up with materials—clay, plaster, stone, the raw grammar of structure. In ;New York, these instincts crystallized. In 1976 he transformed his ;ten-thousand-square-foot home and studio into a continuous field of industrial ;gold, an act of totalizing vision that set the tone for everything that followed.".split(";")};
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__266279$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__266279$$);
    }(), function() {
      var $G__266290_JSCompiler_temp_const$jscomp$inline_3721$$ = $APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$, "mb-6"])));
      var $G__266307$jscomp$inline_3723_JSCompiler_inline_result$jscomp$inline_3722$$ = {children:"1,000 Bricks Gilded in 24-Karat Gold Leaf"};
      $G__266307$jscomp$inline_3723_JSCompiler_inline_result$jscomp$inline_3722$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("em", $G__266307$jscomp$inline_3723_JSCompiler_inline_result$jscomp$inline_3722$$) : $APP.$helix$core$jsx$$.call(null, "em", $G__266307$jscomp$inline_3723_JSCompiler_inline_result$jscomp$inline_3722$$);
      $G__266290_JSCompiler_temp_const$jscomp$inline_3721$$ = {className:$G__266290_JSCompiler_temp_const$jscomp$inline_3721$$, children:["His 1978 project ", $G__266307$jscomp$inline_3723_JSCompiler_inline_result$jscomp$inline_3722$$, " marked the emergence of his now-signature language: unit-based sculptural ", "forms—bricklike, essential, endlessly recombinable—through which gold becomes ", "not decoration but ontology. For decades, Zadikian has pushed this vocabulary to ", "distill the elemental. His works hover between the geological and the luminous, ", 
      "between ancient memory and future speculation, always returning to the fundamental ", "question: What is born when matter is reduced to its clearest form?"]};
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__266290_JSCompiler_temp_const$jscomp$inline_3721$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__266290_JSCompiler_temp_const$jscomp$inline_3721$$);
    }(), function() {
      var $G__266321$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$]))), children:["Zadikian’s practice is defined by extremes—of material, of discipline, of ", "vision—and by a lifelong commitment to the structures that underlie both art ", "and the world itself. His is a studio forged through touch, labor, repetition, ", "and the pursuit of a form so essential it borders on the eternal."]};
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__266321$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__266321$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__266197_props__41575__auto__$jscomp$29$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__266197_props__41575__auto__$jscomp$29$$);
};
$amp$pages$artist$biography$biography_section$$ = function($G__266390_id$jscomp$85_map__266375_map__266375__$1_props__41575__auto__$jscomp$30_vec__266372$$, $G__266398$jscomp$inline_3726_JSCompiler_inline_result$jscomp$inline_3725_maybe_ref__41576__auto__$jscomp$30$$) {
  $G__266390_id$jscomp$85_map__266375_map__266375__$1_props__41575__auto__$jscomp$30_vec__266372$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__266390_id$jscomp$85_map__266375_map__266375__$1_props__41575__auto__$jscomp$30_vec__266372$$), $G__266398$jscomp$inline_3726_JSCompiler_inline_result$jscomp$inline_3725_maybe_ref__41576__auto__$jscomp$30$$], null);
  $G__266390_id$jscomp$85_map__266375_map__266375__$1_props__41575__auto__$jscomp$30_vec__266372$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__266390_id$jscomp$85_map__266375_map__266375__$1_props__41575__auto__$jscomp$30_vec__266372$$, 0, null);
  $G__266390_id$jscomp$85_map__266375_map__266375__$1_props__41575__auto__$jscomp$30_vec__266372$$ = $APP.$cljs$core$__destructure_map$$($G__266390_id$jscomp$85_map__266375_map__266375__$1_props__41575__auto__$jscomp$30_vec__266372$$);
  $G__266390_id$jscomp$85_map__266375_map__266375__$1_props__41575__auto__$jscomp$30_vec__266372$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__266390_id$jscomp$85_map__266375_map__266375__$1_props__41575__auto__$jscomp$30_vec__266372$$, $APP.$cljs$cst$286$id$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__266398$jscomp$inline_3726_JSCompiler_inline_result$jscomp$inline_3725_maybe_ref__41576__auto__$jscomp$30$$ = {"section-hint":"biography", title:"The Artist", "expand-button-label":"Read full biography", "preview-text":$amp$pages$artist$biography$preview$$, "full-text":$amp$pages$artist$biography$details$$};
  $G__266398$jscomp$inline_3726_JSCompiler_inline_result$jscomp$inline_3725_maybe_ref__41576__auto__$jscomp$30$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$ui$expandable_text$expandable_text_area_light$$, $G__266398$jscomp$inline_3726_JSCompiler_inline_result$jscomp$inline_3725_maybe_ref__41576__auto__$jscomp$30$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$ui$expandable_text$expandable_text_area_light$$, $G__266398$jscomp$inline_3726_JSCompiler_inline_result$jscomp$inline_3725_maybe_ref__41576__auto__$jscomp$30$$);
  $G__266390_id$jscomp$85_map__266375_map__266375__$1_props__41575__auto__$jscomp$30_vec__266372$$ = {id:$G__266390_id$jscomp$85_map__266375_map__266375__$1_props__41575__auto__$jscomp$30_vec__266372$$, children:$G__266398$jscomp$inline_3726_JSCompiler_inline_result$jscomp$inline_3725_maybe_ref__41576__auto__$jscomp$30$$};
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__266390_id$jscomp$85_map__266375_map__266375__$1_props__41575__auto__$jscomp$30_vec__266372$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__266390_id$jscomp$85_map__266375_map__266375__$1_props__41575__auto__$jscomp$30_vec__266372$$);
};
$amp$pages$artist$works$works_section$$ = function($G__276711_id$jscomp$86_map__276706_map__276706__$1_props__41575__auto__$jscomp$31_vec__276703$$, $maybe_ref__41576__auto__$jscomp$31_ref$jscomp$18$$) {
  $G__276711_id$jscomp$86_map__276706_map__276706__$1_props__41575__auto__$jscomp$31_vec__276703$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__276711_id$jscomp$86_map__276706_map__276706__$1_props__41575__auto__$jscomp$31_vec__276703$$), $maybe_ref__41576__auto__$jscomp$31_ref$jscomp$18$$], null);
  $G__276711_id$jscomp$86_map__276706_map__276706__$1_props__41575__auto__$jscomp$31_vec__276703$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__276711_id$jscomp$86_map__276706_map__276706__$1_props__41575__auto__$jscomp$31_vec__276703$$, 0, null);
  $G__276711_id$jscomp$86_map__276706_map__276706__$1_props__41575__auto__$jscomp$31_vec__276703$$ = $APP.$cljs$core$__destructure_map$$($G__276711_id$jscomp$86_map__276706_map__276706__$1_props__41575__auto__$jscomp$31_vec__276703$$);
  $G__276711_id$jscomp$86_map__276706_map__276706__$1_props__41575__auto__$jscomp$31_vec__276703$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__276711_id$jscomp$86_map__276706_map__276706__$1_props__41575__auto__$jscomp$31_vec__276703$$, $APP.$cljs$cst$286$id$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $maybe_ref__41576__auto__$jscomp$31_ref$jscomp$18$$ = $APP.$helix$hooks$use_ref$$("works-ref");
  var $G__276715$jscomp$inline_4086_G__276719$jscomp$inline_4087_G__276723$jscomp$inline_4088_JSCompiler_inline_result$jscomp$inline_4085_vec__276707$$ = $APP.$amp$hooks$use_intersection_observer$use_intersection_observer$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($maybe_ref__41576__auto__$jscomp$31_ref$jscomp$18$$, $APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$756$threshold$$, 0.05], null)]));
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__276715$jscomp$inline_4086_G__276719$jscomp$inline_4087_G__276723$jscomp$inline_4088_JSCompiler_inline_result$jscomp$inline_4085_vec__276707$$, 0, null);
  $G__276715$jscomp$inline_4086_G__276719$jscomp$inline_4087_G__276723$jscomp$inline_4088_JSCompiler_inline_result$jscomp$inline_4085_vec__276707$$ = {"enabled?":$APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__276715$jscomp$inline_4086_G__276719$jscomp$inline_4087_G__276723$jscomp$inline_4088_JSCompiler_inline_result$jscomp$inline_4085_vec__276707$$, 1, null), slides:$amp$pages$artist$works$slides$$};
  $G__276715$jscomp$inline_4086_G__276719$jscomp$inline_4087_G__276723$jscomp$inline_4088_JSCompiler_inline_result$jscomp$inline_4085_vec__276707$$ = {className:"mt-6 relative pinstripe-bold", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$ui$image_gallery$lazy_image_gallery$$, $G__276715$jscomp$inline_4086_G__276719$jscomp$inline_4087_G__276723$jscomp$inline_4088_JSCompiler_inline_result$jscomp$inline_4085_vec__276707$$) : 
  $APP.$helix$core$jsx$$.call(null, $APP.$amp$ui$image_gallery$lazy_image_gallery$$, $G__276715$jscomp$inline_4086_G__276719$jscomp$inline_4087_G__276723$jscomp$inline_4088_JSCompiler_inline_result$jscomp$inline_4085_vec__276707$$)};
  $G__276715$jscomp$inline_4086_G__276719$jscomp$inline_4087_G__276723$jscomp$inline_4088_JSCompiler_inline_result$jscomp$inline_4085_vec__276707$$ = {eyebrow:"selected works", title:"The Work", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__276715$jscomp$inline_4086_G__276719$jscomp$inline_4087_G__276723$jscomp$inline_4088_JSCompiler_inline_result$jscomp$inline_4085_vec__276707$$) : $APP.$helix$core$jsx$$.call(null, 
  "div", $G__276715$jscomp$inline_4086_G__276719$jscomp$inline_4087_G__276723$jscomp$inline_4088_JSCompiler_inline_result$jscomp$inline_4085_vec__276707$$)};
  $G__276715$jscomp$inline_4086_G__276719$jscomp$inline_4087_G__276723$jscomp$inline_4088_JSCompiler_inline_result$jscomp$inline_4085_vec__276707$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$ui$section_header$section_header$$, $G__276715$jscomp$inline_4086_G__276719$jscomp$inline_4087_G__276723$jscomp$inline_4088_JSCompiler_inline_result$jscomp$inline_4085_vec__276707$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$ui$section_header$section_header$$, 
  $G__276715$jscomp$inline_4086_G__276719$jscomp$inline_4087_G__276723$jscomp$inline_4088_JSCompiler_inline_result$jscomp$inline_4085_vec__276707$$);
  $G__276711_id$jscomp$86_map__276706_map__276706__$1_props__41575__auto__$jscomp$31_vec__276703$$ = {id:$G__276711_id$jscomp$86_map__276706_map__276706__$1_props__41575__auto__$jscomp$31_vec__276703$$, ref:$maybe_ref__41576__auto__$jscomp$31_ref$jscomp$18$$, children:$G__276715$jscomp$inline_4086_G__276719$jscomp$inline_4087_G__276723$jscomp$inline_4088_JSCompiler_inline_result$jscomp$inline_4085_vec__276707$$};
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__276711_id$jscomp$86_map__276706_map__276706__$1_props__41575__auto__$jscomp$31_vec__276703$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__276711_id$jscomp$86_map__276706_map__276706__$1_props__41575__auto__$jscomp$31_vec__276703$$);
};
$amp$pages$artist$escape$escape_section$$ = function($G__47152$jscomp$1_map__47146_map__47146__$1_props__41658__auto__$jscomp$18_vec__47143$$, $maybe_ref__41659__auto__$jscomp$18$$) {
  $G__47152$jscomp$1_map__47146_map__47146__$1_props__41658__auto__$jscomp$18_vec__47143$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__47152$jscomp$1_map__47146_map__47146__$1_props__41658__auto__$jscomp$18_vec__47143$$), $maybe_ref__41659__auto__$jscomp$18$$], null);
  $G__47152$jscomp$1_map__47146_map__47146__$1_props__41658__auto__$jscomp$18_vec__47143$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__47152$jscomp$1_map__47146_map__47146__$1_props__41658__auto__$jscomp$18_vec__47143$$, 0, null);
  $G__47152$jscomp$1_map__47146_map__47146__$1_props__41658__auto__$jscomp$18_vec__47143$$ = $APP.$cljs$core$__destructure_map$$($G__47152$jscomp$1_map__47146_map__47146__$1_props__41658__auto__$jscomp$18_vec__47143$$);
  var $id$jscomp$87$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__47152$jscomp$1_map__47146_map__47146__$1_props__41658__auto__$jscomp$18_vec__47143$$, $APP.$cljs$cst$286$id$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__47152$jscomp$1_map__47146_map__47146__$1_props__41658__auto__$jscomp$18_vec__47143$$ = function() {
    return {id:$id$jscomp$87$$, children:function() {
      var $G__47160$jscomp$1$$ = function() {
        return {eyebrow:"origins", title:"The Escape", children:function() {
          var $G__47166$$ = function() {
            return {className:"mt-6 px-4", children:[function() {
              var $G__47172$jscomp$1$$ = function() {
                return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$, "mb-6"]))), children:["At nineteen—armed only with conviction—", function() {
                  var $G__47180$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:"Zadik Zadikian"};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__47180$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__47180$$);
                }(), " escaped Soviet Armenia by swimming across the ", function() {
                  var $G__47188$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:"Arax River"};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__47188$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__47188$$);
                }(), " under machine-gun fire. He arrived in America with nothing but ", "the instincts that had guided him since childhood: to build, to ", "shape matter, to seek form through discipline and elemental materials."]};
              }();
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__47172$jscomp$1$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__47172$jscomp$1$$);
            }(), function() {
              var $G__47196$$ = function() {
                return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$, "mb-6"]))), children:["In ", function() {
                  var $G__47204$jscomp$1$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:"San Francisco"};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__47204$jscomp$1$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__47204$jscomp$1$$);
                }(), ", he apprenticed with sculptor ", function() {
                  var $G__47212$jscomp$1$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:"Beniamino Bufano"};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__47212$jscomp$1$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__47212$jscomp$1$$);
                }(), ", absorbing a lifelong sense of scale, color, and the physical ", "intelligence of large-form making. Drawn to the heat and velocity ", "of New York, he moved east in 1974 and quickly found himself inside ", "the crucible of the Minimalist movement, assisting ", function() {
                  var $G__47220$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:"Richard Serra"};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__47220$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__47220$$);
                }(), " on the monumental black oil-stick wall drawings—one of which ", "Serra titled ", function() {
                  var $G__47228$$ = {children:"Zadikian"};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("em", $G__47228$$) : $APP.$helix$core$jsx$$.call(null, "em", $G__47228$$);
                }(), "."]};
              }();
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__47196$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__47196$$);
            }(), function() {
              var $G__47234$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$, "mb-6"]))), children:["The son of a builder, he grew up with materials—clay, plaster, ", "stone, the raw grammar of structure. In New York, these instincts ", "crystallized. In 1976 he transformed his ten-thousand-square-foot ", "home and studio into a continuous field of industrial gold, an act ", 
              "of totalizing vision that set the tone for everything that followed."]};
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__47234$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__47234$$);
            }(), function() {
              var $G__47242$$ = function() {
                return {className:"border-l-2 border-white/20 dark:border-white/20 pl-6 my-8", children:[function() {
                  var $G__47248$jscomp$1$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$, "italic"]))), children:["“The block remembers two things—the wall it was taken ", "from and the wall it will become.”"]};
                  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__47248$jscomp$1$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__47248$jscomp$1$$);
                }(), function() {
                  var $G__47256$jscomp$1$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["block mt-3 not-italic", $APP.$amp$styles$label_muted$$]))), children:"— Zadik Zadikian"};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("cite", $G__47256$jscomp$1$$) : $APP.$helix$core$jsx$$.call(null, "cite", $G__47256$jscomp$1$$);
                }()]};
              }();
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("blockquote", $G__47242$$) : $APP.$helix$core$jsxs$$.call(null, "blockquote", $G__47242$$);
            }()]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__47166$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__47166$$);
        }()};
      }();
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$ui$section_header$section_header$$, $G__47160$jscomp$1$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$ui$section_header$section_header$$, $G__47160$jscomp$1$$);
    }()};
  }();
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__47152$jscomp$1_map__47146_map__47146__$1_props__41658__auto__$jscomp$18_vec__47143$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__47152$jscomp$1_map__47146_map__47146__$1_props__41658__auto__$jscomp$18_vec__47143$$);
};
$amp$pages$artist$video$video_section$$ = function($G__266359_map__266340_map__266340__$1_props__41575__auto__$jscomp$32_vec__266337_vec__266350$$, $maybe_ref__41576__auto__$jscomp$32$$) {
  $G__266359_map__266340_map__266340__$1_props__41575__auto__$jscomp$32_vec__266337_vec__266350$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__266359_map__266340_map__266340__$1_props__41575__auto__$jscomp$32_vec__266337_vec__266350$$), $maybe_ref__41576__auto__$jscomp$32$$], null);
  $G__266359_map__266340_map__266340__$1_props__41575__auto__$jscomp$32_vec__266337_vec__266350$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__266359_map__266340_map__266340__$1_props__41575__auto__$jscomp$32_vec__266337_vec__266350$$, 0, null);
  $G__266359_map__266340_map__266340__$1_props__41575__auto__$jscomp$32_vec__266337_vec__266350$$ = $APP.$cljs$core$__destructure_map$$($G__266359_map__266340_map__266340__$1_props__41575__auto__$jscomp$32_vec__266337_vec__266350$$);
  var $id$jscomp$88$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__266359_map__266340_map__266340__$1_props__41575__auto__$jscomp$32_vec__266337_vec__266350$$, $APP.$cljs$cst$286$id$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $ref$jscomp$19$$ = $APP.$helix$hooks$use_ref$$("artist-video-ref");
  $G__266359_map__266340_map__266340__$1_props__41575__auto__$jscomp$32_vec__266337_vec__266350$$ = $APP.$amp$hooks$use_intersection_observer$use_intersection_observer$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($ref$jscomp$19$$, $APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$743$end$$, "bottom"], null)]));
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__266359_map__266340_map__266340__$1_props__41575__auto__$jscomp$32_vec__266337_vec__266350$$, 0, null);
  var $visible_QMARK_$jscomp$2$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__266359_map__266340_map__266340__$1_props__41575__auto__$jscomp$32_vec__266337_vec__266350$$, 1, null);
  $G__266359_map__266340_map__266340__$1_props__41575__auto__$jscomp$32_vec__266337_vec__266350$$ = function() {
    return {id:$id$jscomp$88$$, ref:$ref$jscomp$19$$, children:function() {
      var $G__266368$$ = function() {
        return {eyebrow:"in his own words", title:"The Artist Speaks", children:function() {
          var $G__266382$$ = function() {
            return {className:"mt-6 px-4", children:[function() {
              var $G__266386$$ = function() {
                return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$, "mb-8"]))), children:["Hear ", function() {
                  var $G__266402$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:"Zadik Zadikian"};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__266402$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__266402$$);
                }(), " speak about his practice, his relationship with material, and ", "the significance of representing ", function() {
                  var $G__266410$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:"Armenia"};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__266410$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__266410$$);
                }(), " at the 61st Venice Biennale."]};
              }();
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__266386$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__266386$$);
            }(), function() {
              var $G__266417_G__266422$jscomp$inline_3732$$ = {"playback-id":"ay2rRkV3PxHTy92Gfi00SibKfEDjDLqGqxmiTzbrz3sQ", "aspect-ratio":1.77, "should-play?":$visible_QMARK_$jscomp$2$$, "allow-audio?":!0};
              $G__266417_G__266422$jscomp$inline_3732$$ = {className:"w-full aspect-[16/9]", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$pages$artist$video$lazy_video$$, $G__266417_G__266422$jscomp$inline_3732$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$artist$video$lazy_video$$, $G__266417_G__266422$jscomp$inline_3732$$)};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__266417_G__266422$jscomp$inline_3732$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__266417_G__266422$jscomp$inline_3732$$);
            }()]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__266382$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__266382$$);
        }()};
      }();
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$ui$section_header$section_header$$, $G__266368$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$ui$section_header$section_header$$, $G__266368$$);
    }()};
  }();
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__266359_map__266340_map__266340__$1_props__41575__auto__$jscomp$32_vec__266337_vec__266350$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__266359_map__266340_map__266340__$1_props__41575__auto__$jscomp$32_vec__266337_vec__266350$$);
};
$amp$pages$artist$return$0$return_section$$ = function($G__47154$jscomp$1_map__47150_map__47150__$1_props__41658__auto__$jscomp$19_vec__47147$$, $maybe_ref__41659__auto__$jscomp$19$$) {
  $G__47154$jscomp$1_map__47150_map__47150__$1_props__41658__auto__$jscomp$19_vec__47147$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__47154$jscomp$1_map__47150_map__47150__$1_props__41658__auto__$jscomp$19_vec__47147$$), $maybe_ref__41659__auto__$jscomp$19$$], null);
  $G__47154$jscomp$1_map__47150_map__47150__$1_props__41658__auto__$jscomp$19_vec__47147$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__47154$jscomp$1_map__47150_map__47150__$1_props__41658__auto__$jscomp$19_vec__47147$$, 0, null);
  $G__47154$jscomp$1_map__47150_map__47150__$1_props__41658__auto__$jscomp$19_vec__47147$$ = $APP.$cljs$core$__destructure_map$$($G__47154$jscomp$1_map__47150_map__47150__$1_props__41658__auto__$jscomp$19_vec__47147$$);
  var $id$jscomp$89$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__47154$jscomp$1_map__47150_map__47150__$1_props__41658__auto__$jscomp$19_vec__47147$$, $APP.$cljs$cst$286$id$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__47154$jscomp$1_map__47150_map__47150__$1_props__41658__auto__$jscomp$19_vec__47147$$ = function() {
    return {id:$id$jscomp$89$$, children:function() {
      var $G__47164$$ = function() {
        return {eyebrow:"full circle", title:"Return to Armenia", children:function() {
          var $G__47174$$ = function() {
            return {className:"mt-6 px-4", children:[function() {
              var $G__47182_JSCompiler_temp_const$jscomp$inline_3734$$ = $APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$, "mb-6"])));
              var $G__47190$jscomp$inline_3736_JSCompiler_inline_result$jscomp$inline_3735$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:"Zadik Zadikian"};
              $G__47190$jscomp$inline_3736_JSCompiler_inline_result$jscomp$inline_3735$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__47190$jscomp$inline_3736_JSCompiler_inline_result$jscomp$inline_3735$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__47190$jscomp$inline_3736_JSCompiler_inline_result$jscomp$inline_3735$$);
              $G__47182_JSCompiler_temp_const$jscomp$inline_3734$$ = {className:$G__47182_JSCompiler_temp_const$jscomp$inline_3734$$, children:["After decades in the United States, ", $G__47190$jscomp$inline_3736_JSCompiler_inline_result$jscomp$inline_3735$$, " began a gradual return—not only to the country he had fled, ", "but to the questions of identity, belonging, and cultural memory ", "that had shaped his work from the very beginning."]};
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__47182_JSCompiler_temp_const$jscomp$inline_3734$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__47182_JSCompiler_temp_const$jscomp$inline_3734$$);
            }(), function() {
              var $G__47200$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$, "mb-6"]))), children:"Armenia in the post-Soviet era was a country in transformation. {The independence of 1991 had opened new possibilities but also {revealed old wounds. For Zadikian, returning was not a simple {homecoming; it was an encounter with a nation remaking itself {from the same elemental materials—stone, earth, will—that {he had been working with in his studio for half a century.".split("{")};
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__47200$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__47200$$);
            }(), function() {
              var $G__47208$jscomp$1$$ = function() {
                return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$, "mb-6"]))), children:["The invitation to represent ", function() {
                  var $G__47216$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:"Armenia at the 61st Venice Biennale"};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__47216$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__47216$$);
                }(), " carries a particular resonance. Venice and Armenia share a deep ", "historical connection: the island of ", function() {
                  var $G__47224$jscomp$1$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:"San Lazzaro degli Armeni"};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__47224$jscomp$1$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__47224$jscomp$1$$);
                }(), " has housed an Armenian monastery since 1717, preserving manuscripts, ", "language, and culture through centuries of upheaval. To bring Armenian ", "art to the Biennale is to continue a conversation that has been ", "unfolding in this lagoon for over three hundred years."]};
              }();
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__47208$jscomp$1$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__47208$jscomp$1$$);
            }(), function() {
              var $G__47233$$ = function() {
                return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$, "mb-6"]))), children:["For Zadikian, the Biennale is not a stage for national spectacle ", "but a place where the quiet persistence of making—the ", function() {
                  var $G__47240$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:"studio as sanctuary"};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__47240$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__47240$$);
                }(), "—can speak across borders. The pavilion will operate as a ", "living workshop, echoing the Armenian tradition of the ", function() {
                  var $G__47252$jscomp$1$$ = {className:$APP.$helix$impl$props$normalize_class$$("italic"), children:"arvestanots"};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__47252$jscomp$1$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__47252$jscomp$1$$);
                }(), " (workshop), where art is inseparable from the daily labor of its creation."]};
              }();
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__47233$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__47233$$);
            }(), function() {
              var $G__47260$jscomp$1$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$, "mb-6"]))), children:["In representing Armenia at Venice, Zadikian closes a circle that ", "began with his escape. The young man who left a culture behind in ", "order to make art freely now returns that art to the world stage ", "under the flag of the nation he never stopped carrying with him."]};
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__47260$jscomp$1$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__47260$jscomp$1$$);
            }(), function() {
              var $G__47264$jscomp$1$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_closing$$, "mt-10"]))), children:["“The block is the smallest homeland. Wherever you stack it, ", "you are building Armenia.”"]};
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__47264$jscomp$1$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__47264$jscomp$1$$);
            }()]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__47174$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__47174$$);
        }()};
      }();
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$ui$section_header$section_header$$, $G__47164$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$ui$section_header$section_header$$, $G__47164$$);
    }()};
  }();
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__47154$jscomp$1_map__47150_map__47150__$1_props__41658__auto__$jscomp$19_vec__47147$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__47154$jscomp$1_map__47150_map__47150__$1_props__41658__auto__$jscomp$19_vec__47147$$);
};
$APP.$amp$pages$artist$page$artist_view$$ = function($G__47487$jscomp$1_props__41658__auto__$jscomp$20_vec__47478$$, $maybe_ref__41659__auto__$jscomp$20$$) {
  $G__47487$jscomp$1_props__41658__auto__$jscomp$20_vec__47478$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__47487$jscomp$1_props__41658__auto__$jscomp$20_vec__47478$$), $maybe_ref__41659__auto__$jscomp$20$$], null);
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__47487$jscomp$1_props__41658__auto__$jscomp$20_vec__47478$$, 0, null);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__47487$jscomp$1_props__41658__auto__$jscomp$20_vec__47478$$ = {children:[function() {
    var $G__47489$jscomp$1$$ = {id:"portrait"};
    return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$pages$artist$portrait$portrait_section$$, $G__47489$jscomp$1$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$artist$portrait$portrait_section$$, $G__47489$jscomp$1$$);
  }(), function() {
    var $G__47497$jscomp$1$$ = {id:"biography"};
    return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$pages$artist$biography$biography_section$$, $G__47497$jscomp$1$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$artist$biography$biography_section$$, $G__47497$jscomp$1$$);
  }(), function() {
    var $G__47507$jscomp$1$$ = {id:"works"};
    return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$pages$artist$works$works_section$$, $G__47507$jscomp$1$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$artist$works$works_section$$, $G__47507$jscomp$1$$);
  }(), function() {
    var $G__47515$$ = {id:"escape"};
    return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$pages$artist$escape$escape_section$$, $G__47515$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$artist$escape$escape_section$$, $G__47515$$);
  }(), function() {
    var $G__47521$$ = {id:"video"};
    return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$pages$artist$video$video_section$$, $G__47521$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$artist$video$video_section$$, $G__47521$$);
  }(), function() {
    var $G__47530$jscomp$1$$ = {id:"return"};
    return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$pages$artist$return$0$return_section$$, $G__47530$jscomp$1$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$artist$return$0$return_section$$, $G__47530$jscomp$1$$);
  }()]};
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$ui$page_shell$page_shell$$, $G__47487$jscomp$1_props__41658__auto__$jscomp$20_vec__47478$$) : $APP.$helix$core$jsxs$$.call(null, $APP.$amp$ui$page_shell$page_shell$$, $G__47487$jscomp$1_props__41658__auto__$jscomp$20_vec__47478$$);
};
$APP.$JSCompiler_StaticMethods_beforeLoadModuleCode$$("artist-view");
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$299$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$300$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$pages$artist$portrait$portrait_section$$, '(hooks/use-ref "portrait-ref")(use-intersection-observer ref {:threshold 0.05})', null, null) : (void 0).call(null, 
$amp$pages$artist$portrait$portrait_section$$, '(hooks/use-ref "portrait-ref")(use-intersection-observer ref {:threshold 0.05})', null, null)), $APP.$helix$core$register_BANG_$$($amp$pages$artist$portrait$portrait_section$$, "amp.pages.artist.portrait/portrait-section"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$299$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$300$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$pages$artist$biography$preview$$, "", null, null) : (void 0).call(null, $amp$pages$artist$biography$preview$$, "", null, null)), $APP.$helix$core$register_BANG_$$($amp$pages$artist$biography$preview$$, 
"amp.pages.artist.biography/preview"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$299$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$300$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$pages$artist$biography$details$$, "", null, null) : (void 0).call(null, $amp$pages$artist$biography$details$$, "", null, null)), $APP.$helix$core$register_BANG_$$($amp$pages$artist$biography$details$$, 
"amp.pages.artist.biography/details"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$299$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$300$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$pages$artist$biography$biography_section$$, "", null, null) : (void 0).call(null, $amp$pages$artist$biography$biography_section$$, "", null, null)), 
$APP.$helix$core$register_BANG_$$($amp$pages$artist$biography$biography_section$$, "amp.pages.artist.biography/biography-section"));
var $amp$pages$artist$works$slides$$ = new $APP.$cljs$core$PersistentVector$$(null, 7, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$726$img_src$$, "https://atd-722658831.imgix.net/artwork/1.jpeg", $APP.$cljs$cst$735$aspect_ratio$$, 0.75, $APP.$cljs$cst$708$caption$$, "GILDED BLOCK COMPOSITION", $APP.$cljs$cst$709$credit$$, "Zadik Zadikian"], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$726$img_src$$, 
"https://atd-722658831.imgix.net/blue_yellow/top_view.jpg", $APP.$cljs$cst$735$aspect_ratio$$, 0.75, $APP.$cljs$cst$708$caption$$, "BLUE YELLOW BLUE YELLOW", $APP.$cljs$cst$709$credit$$, "Studio 2026"], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$726$img_src$$, "https://atd-722658831.imgix.net/blue_yellow/side-2.jpg", $APP.$cljs$cst$735$aspect_ratio$$, 0.75, $APP.$cljs$cst$708$caption$$, "BLUE YELLOW BLUE YELLOW", $APP.$cljs$cst$709$credit$$, "Studio 2026"], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 
4, [$APP.$cljs$cst$726$img_src$$, "https://atd-722658831.imgix.net/big_red/master.jpg", $APP.$cljs$cst$735$aspect_ratio$$, 1.78, $APP.$cljs$cst$708$caption$$, "THE BIG RED", $APP.$cljs$cst$709$credit$$, "Render 2026"], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$726$img_src$$, "https://atd-722658831.imgix.net/big_red/corner_low.jpg", $APP.$cljs$cst$735$aspect_ratio$$, 0.75, $APP.$cljs$cst$708$caption$$, "THE BIG RED", $APP.$cljs$cst$709$credit$$, "Render 2026"], null), 
new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$726$img_src$$, "https://atd-722658831.imgix.net/photos/blue_unit_with_hand.jpg", $APP.$cljs$cst$735$aspect_ratio$$, 1.5, $APP.$cljs$cst$708$caption$$, "BLUE BLOCK", $APP.$cljs$cst$709$credit$$, "Los Angeles 2026"], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$726$img_src$$, "https://atd-722658831.imgix.net/big_red/flag.jpg", $APP.$cljs$cst$735$aspect_ratio$$, 1.38, $APP.$cljs$cst$708$caption$$, "THE BIG RED", 
$APP.$cljs$cst$709$credit$$, "Render 2026"], null)], null);
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$299$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$300$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$pages$artist$works$works_section$$, '(hooks/use-ref "works-ref")(use-intersection-observer ref {:threshold 0.05})', null, null) : (void 0).call(null, 
$amp$pages$artist$works$works_section$$, '(hooks/use-ref "works-ref")(use-intersection-observer ref {:threshold 0.05})', null, null)), $APP.$helix$core$register_BANG_$$($amp$pages$artist$works$works_section$$, "amp.pages.artist.works/works-section"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$299$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$300$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$pages$artist$escape$escape_section$$, "", null, null) : (void 0).call(null, $amp$pages$artist$escape$escape_section$$, "", null, null)), $APP.$helix$core$register_BANG_$$($amp$pages$artist$escape$escape_section$$, 
"amp.pages.artist.escape/escape-section"));
var $amp$pages$artist$video$lazy_video$$ = $APP.$amp$utils$lazy_loading$lazy_component_STAR_$$(new $APP.$shadow$lazy$Loadable$$(new $APP.$cljs$core$PersistentVector$$(null, 1, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, ["video-background"], null), function() {
  return $APP.$amp$ui$video_background$video_background$$;
}));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$299$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$300$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$pages$artist$video$video_section$$, '(hooks/use-ref "artist-video-ref")(use-intersection-observer ref {:end "bottom"})', null, null) : (void 0).call(null, 
$amp$pages$artist$video$video_section$$, '(hooks/use-ref "artist-video-ref")(use-intersection-observer ref {:end "bottom"})', null, null)), $APP.$helix$core$register_BANG_$$($amp$pages$artist$video$video_section$$, "amp.pages.artist.video/video-section"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$299$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$300$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$pages$artist$return$0$return_section$$, "", null, null) : (void 0).call(null, $amp$pages$artist$return$0$return_section$$, "", null, null)), $APP.$helix$core$register_BANG_$$($amp$pages$artist$return$0$return_section$$, 
"amp.pages.artist.return/return-section"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$299$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$300$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($APP.$amp$pages$artist$page$artist_view$$, "", null, null) : (void 0).call(null, $APP.$amp$pages$artist$page$artist_view$$, "", null, null)), $APP.$helix$core$register_BANG_$$($APP.$amp$pages$artist$page$artist_view$$, 
"amp.pages.artist.page/artist-view"));
$APP.$module$contents$shadow$loader_set_loaded$$();

}).call(this);