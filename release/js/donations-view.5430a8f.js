(function(){
'use strict';
var $amp$pages$donations$page$open_stripe$$, $amp$pages$donations$page$stat_card$$, $amp$pages$donations$page$method_card$$, $amp$pages$donations$page$bank_field$$, $amp$pages$donations$page$transfer_card$$, $amp$pages$donations$page$support_card$$, $amp$pages$donations$page$hero_section$$, $amp$pages$donations$page$giving_section$$, $amp$pages$donations$page$bank_section$$, $amp$pages$donations$page$impact_section$$, $amp$pages$donations$page$donor_support_section$$, $cljs$cst$787$secondary_title$$, 
$cljs$cst$786$primary_action$$, $cljs$cst$788$secondary_action$$, $cljs$cst$790$transfer$$, $cljs$cst$785$primary_title$$;
$amp$pages$donations$page$open_stripe$$ = function() {
  return window.open("https://donate.stripe.com/14A5kC6SC5RQfo4frS6Ri00", "_blank", "noopener,noreferrer");
};
$amp$pages$donations$page$stat_card$$ = function($G__47639$jscomp$1_map__47637_map__47637__$1_props__41644__auto__$jscomp$13_vec__47634$$, $maybe_ref__41645__auto__$jscomp$13$$) {
  $G__47639$jscomp$1_map__47637_map__47637__$1_props__41644__auto__$jscomp$13_vec__47634$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__47639$jscomp$1_map__47637_map__47637__$1_props__41644__auto__$jscomp$13_vec__47634$$), $maybe_ref__41645__auto__$jscomp$13$$], null);
  $G__47639$jscomp$1_map__47637_map__47637__$1_props__41644__auto__$jscomp$13_vec__47634$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__47639$jscomp$1_map__47637_map__47637__$1_props__41644__auto__$jscomp$13_vec__47634$$, 0, null);
  $G__47639$jscomp$1_map__47637_map__47637__$1_props__41644__auto__$jscomp$13_vec__47634$$ = $APP.$cljs$core$__destructure_map$$($G__47639$jscomp$1_map__47637_map__47637__$1_props__41644__auto__$jscomp$13_vec__47634$$);
  var $label$jscomp$17$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__47639$jscomp$1_map__47637_map__47637__$1_props__41644__auto__$jscomp$13_vec__47634$$, $APP.$cljs$cst$403$label$$), $value$jscomp$324$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__47639$jscomp$1_map__47637_map__47637__$1_props__41644__auto__$jscomp$13_vec__47634$$, $APP.$cljs$cst$119$value$$), $detail$jscomp$7$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__47639$jscomp$1_map__47637_map__47637__$1_props__41644__auto__$jscomp$13_vec__47634$$, 
  $APP.$cljs$cst$637$detail$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__47639$jscomp$1_map__47637_map__47637__$1_props__41644__auto__$jscomp$13_vec__47634$$ = function() {
    return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["rounded-3xl border px-5 py-5", "bg-slate-100/60 dark:bg-slate-800/60", "border-slate-200 dark:border-white/15"]))), children:[function() {
      var $G__47643$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$label_muted$$, "mb-2"]))), children:$label$jscomp$17$$};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__47643$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__47643$$);
    }(), function() {
      var $G__47647$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-mono", "text-xl", "font-semibold", "text-slate-900  dark:text-slate-100"]))), children:$value$jscomp$324$$};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__47647$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__47647$$);
    }(), function() {
      var $G__47651$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_sm$$, "mt-3"]))), children:$detail$jscomp$7$$};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__47651$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__47651$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__47639$jscomp$1_map__47637_map__47637__$1_props__41644__auto__$jscomp$13_vec__47634$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__47639$jscomp$1_map__47637_map__47637__$1_props__41644__auto__$jscomp$13_vec__47634$$);
};
$amp$pages$donations$page$method_card$$ = function($G__47662$jscomp$1_map__47660_map__47660__$1_props__41644__auto__$jscomp$14_vec__47657$$, $maybe_ref__41645__auto__$jscomp$14$$) {
  $G__47662$jscomp$1_map__47660_map__47660__$1_props__41644__auto__$jscomp$14_vec__47657$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__47662$jscomp$1_map__47660_map__47660__$1_props__41644__auto__$jscomp$14_vec__47657$$), $maybe_ref__41645__auto__$jscomp$14$$], null);
  $G__47662$jscomp$1_map__47660_map__47660__$1_props__41644__auto__$jscomp$14_vec__47657$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__47662$jscomp$1_map__47660_map__47660__$1_props__41644__auto__$jscomp$14_vec__47657$$, 0, null);
  $G__47662$jscomp$1_map__47660_map__47660__$1_props__41644__auto__$jscomp$14_vec__47657$$ = $APP.$cljs$core$__destructure_map$$($G__47662$jscomp$1_map__47660_map__47660__$1_props__41644__auto__$jscomp$14_vec__47657$$);
  var $eyebrow$jscomp$2$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__47662$jscomp$1_map__47660_map__47660__$1_props__41644__auto__$jscomp$14_vec__47657$$, $APP.$cljs$cst$756$eyebrow$$), $title$jscomp$26$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__47662$jscomp$1_map__47660_map__47660__$1_props__41644__auto__$jscomp$14_vec__47657$$, $APP.$cljs$cst$288$title$$), $body$jscomp$7$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__47662$jscomp$1_map__47660_map__47660__$1_props__41644__auto__$jscomp$14_vec__47657$$, 
  $APP.$cljs$cst$234$body$$), $primary_title$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__47662$jscomp$1_map__47660_map__47660__$1_props__41644__auto__$jscomp$14_vec__47657$$, $cljs$cst$785$primary_title$$), $primary_action$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__47662$jscomp$1_map__47660_map__47660__$1_props__41644__auto__$jscomp$14_vec__47657$$, $cljs$cst$786$primary_action$$), $secondary_title$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__47662$jscomp$1_map__47660_map__47660__$1_props__41644__auto__$jscomp$14_vec__47657$$, 
  $cljs$cst$787$secondary_title$$), $secondary_action$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__47662$jscomp$1_map__47660_map__47660__$1_props__41644__auto__$jscomp$14_vec__47657$$, $cljs$cst$788$secondary_action$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__47662$jscomp$1_map__47660_map__47660__$1_props__41644__auto__$jscomp$14_vec__47657$$ = function() {
    return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["relative overflow-hidden rounded-[1.75rem] border px-6 py-6 sm:px-7", "bg-white        dark:bg-slate-900", "border-slate-200 dark:border-white/15"]))), children:[function() {
      var $G__47666$$ = {className:"mb-6 h-px w-14 bg-pink-500/70"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__47666$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__47666$$);
    }(), function() {
      var $G__47670$jscomp$1$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$label_muted$$, "mb-3"]))), children:$eyebrow$jscomp$2$$};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__47670$jscomp$1$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__47670$jscomp$1$$);
    }(), function() {
      var $G__47674$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-display", "font-semibold", "text-2xl", "text-slate-900  dark:text-slate-100", "uppercase tracking-wide"]))), children:$title$jscomp$26$$};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("h3", $G__47674$$) : $APP.$helix$core$jsx$$.call(null, "h3", $G__47674$$);
    }(), function() {
      var $G__47678$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$, "mt-4 mb-6"]))), children:$body$jscomp$7$$};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__47678$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__47678$$);
    }(), function() {
      var $G__47682$$ = function() {
        return {className:"flex flex-col gap-3 sm:flex-row sm:flex-wrap", children:[function() {
          var $G__47686$jscomp$1$$ = {title:$primary_title$$, "on-click":$primary_action$$};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$ui$button$main_button$$, $G__47686$jscomp$1$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$ui$button$main_button$$, $G__47686$jscomp$1$$);
        }(), $APP.$cljs$core$truth_$$($secondary_title$$) ? function() {
          var $G__47690$$ = {className:$APP.$helix$impl$props$normalize_class$$($amp$pages$donations$page$secondary_button_class$$), onClick:$secondary_action$$, children:$secondary_title$$};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("button", $G__47690$$) : $APP.$helix$core$jsx$$.call(null, "button", $G__47690$$);
        }() : null]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__47682$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__47682$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__47662$jscomp$1_map__47660_map__47660__$1_props__41644__auto__$jscomp$14_vec__47657$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__47662$jscomp$1_map__47660_map__47660__$1_props__41644__auto__$jscomp$14_vec__47657$$);
};
$amp$pages$donations$page$bank_field$$ = function($G__47701_map__47699_map__47699__$1_props__41644__auto__$jscomp$15_vec__47696$$, $maybe_ref__41645__auto__$jscomp$15$$) {
  $G__47701_map__47699_map__47699__$1_props__41644__auto__$jscomp$15_vec__47696$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__47701_map__47699_map__47699__$1_props__41644__auto__$jscomp$15_vec__47696$$), $maybe_ref__41645__auto__$jscomp$15$$], null);
  $G__47701_map__47699_map__47699__$1_props__41644__auto__$jscomp$15_vec__47696$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__47701_map__47699_map__47699__$1_props__41644__auto__$jscomp$15_vec__47696$$, 0, null);
  $G__47701_map__47699_map__47699__$1_props__41644__auto__$jscomp$15_vec__47696$$ = $APP.$cljs$core$__destructure_map$$($G__47701_map__47699_map__47699__$1_props__41644__auto__$jscomp$15_vec__47696$$);
  var $label$jscomp$18$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__47701_map__47699_map__47699__$1_props__41644__auto__$jscomp$15_vec__47696$$, $APP.$cljs$cst$403$label$$), $value$jscomp$325$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__47701_map__47699_map__47699__$1_props__41644__auto__$jscomp$15_vec__47696$$, $APP.$cljs$cst$119$value$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__47701_map__47699_map__47699__$1_props__41644__auto__$jscomp$15_vec__47696$$ = function() {
    return {className:"flex items-start justify-between gap-6 border-t border-slate-200/60 py-3 first:border-t-0 first:pt-0 dark:border-slate-800", children:[function() {
      var $G__47705$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$label_muted$$, "pt-0.5"]))), children:$label$jscomp$18$$};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__47705$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__47705$$);
    }(), $APP.$cljs$core$sequential_QMARK_$$($value$jscomp$325$$) ? function() {
      var $G__47709$$ = function() {
        return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-mono", "text-sm", "text-slate-900  dark:text-slate-100", "text-right leading-snug"]))), children:$APP.$cljs$core$map_indexed$cljs$0core$0IFn$0_invoke$0arity$02$$(function($G__47714$jscomp$1_idx$jscomp$69$$, $G__47713_line$jscomp$21$$) {
          $G__47713_line$jscomp$21$$ = {children:$G__47713_line$jscomp$21$$};
          $G__47714$jscomp$1_idx$jscomp$69$$ = "" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($label$jscomp$18$$) + "-" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($G__47714$jscomp$1_idx$jscomp$69$$);
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$("p", $G__47713_line$jscomp$21$$, $G__47714$jscomp$1_idx$jscomp$69$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__47713_line$jscomp$21$$, $G__47714$jscomp$1_idx$jscomp$69$$);
        }, $value$jscomp$325$$)};
      }();
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__47709$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__47709$$);
    }() : function() {
      var $G__47718$jscomp$1$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-mono", "text-sm", "font-semibold", "text-slate-900  dark:text-slate-100", "text-right"]))), children:$value$jscomp$325$$};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__47718$jscomp$1$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__47718$jscomp$1$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__47701_map__47699_map__47699__$1_props__41644__auto__$jscomp$15_vec__47696$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__47701_map__47699_map__47699__$1_props__41644__auto__$jscomp$15_vec__47696$$);
};
$amp$pages$donations$page$transfer_card$$ = function($G__47729_map__47727_map__47727__$1_props__41644__auto__$jscomp$16_vec__47724$$, $maybe_ref__41645__auto__$jscomp$16$$) {
  $G__47729_map__47727_map__47727__$1_props__41644__auto__$jscomp$16_vec__47724$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__47729_map__47727_map__47727__$1_props__41644__auto__$jscomp$16_vec__47724$$), $maybe_ref__41645__auto__$jscomp$16$$], null);
  $G__47729_map__47727_map__47727__$1_props__41644__auto__$jscomp$16_vec__47724$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__47729_map__47727_map__47727__$1_props__41644__auto__$jscomp$16_vec__47724$$, 0, null);
  $G__47729_map__47727_map__47727__$1_props__41644__auto__$jscomp$16_vec__47724$$ = $APP.$cljs$core$__destructure_map$$($G__47729_map__47727_map__47727__$1_props__41644__auto__$jscomp$16_vec__47724$$);
  var $title$jscomp$27$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__47729_map__47727_map__47727__$1_props__41644__auto__$jscomp$16_vec__47724$$, $APP.$cljs$cst$288$title$$), $description$jscomp$4$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__47729_map__47727_map__47727__$1_props__41644__auto__$jscomp$16_vec__47724$$, $APP.$cljs$cst$789$description$$), $transfer$jscomp$5$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__47729_map__47727_map__47727__$1_props__41644__auto__$jscomp$16_vec__47724$$, 
  $cljs$cst$790$transfer$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__47729_map__47727_map__47727__$1_props__41644__auto__$jscomp$16_vec__47724$$ = function() {
    return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["relative overflow-hidden rounded-[1.75rem] border px-6 py-6 sm:px-7", "bg-white        dark:bg-slate-900", "border-slate-200 dark:border-white/15"]))), children:[function() {
      var $G__47733$$ = {className:"mb-6 h-px w-14 bg-pink-500/70"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__47733$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__47733$$);
    }(), function() {
      var $G__47737$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$heading_section$$, "text-slate-900  dark:text-slate-100", "mb-3"]))), children:$title$jscomp$27$$};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__47737$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__47737$$);
    }(), function() {
      var $G__47741$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_sm$$, "mb-6"]))), children:$description$jscomp$4$$};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__47741$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__47741$$);
    }(), function() {
      var $G__47745$$ = function() {
        return {className:"space-y-1", children:$APP.$cljs$core$map$$.$cljs$core$IFn$_invoke$arity$2$(function($label$jscomp$19_p__47748$$) {
          var $G__47751_map__47749__$1$$ = $APP.$cljs$core$__destructure_map$$($label$jscomp$19_p__47748$$);
          $label$jscomp$19_p__47748$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__47751_map__47749__$1$$, $APP.$cljs$cst$403$label$$);
          $G__47751_map__47749__$1$$ = {label:$APP.$cljs$cst$403$label$$.$cljs$core$IFn$_invoke$arity$1$($G__47751_map__47749__$1$$), value:$APP.$cljs$cst$119$value$$.$cljs$core$IFn$_invoke$arity$1$($G__47751_map__47749__$1$$)};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$($amp$pages$donations$page$bank_field$$, $G__47751_map__47749__$1$$, $label$jscomp$19_p__47748$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$donations$page$bank_field$$, $G__47751_map__47749__$1$$, $label$jscomp$19_p__47748$$);
        }, $APP.$cljs$cst$402$fields$$.$cljs$core$IFn$_invoke$arity$1$($transfer$jscomp$5$$))};
      }();
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__47745$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__47745$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__47729_map__47727_map__47727__$1_props__41644__auto__$jscomp$16_vec__47724$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__47729_map__47727_map__47727__$1_props__41644__auto__$jscomp$16_vec__47724$$);
};
$amp$pages$donations$page$support_card$$ = function($G__47763_map__47761_map__47761__$1_props__41644__auto__$jscomp$17_vec__47758$$, $maybe_ref__41645__auto__$jscomp$17$$) {
  $G__47763_map__47761_map__47761__$1_props__41644__auto__$jscomp$17_vec__47758$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__47763_map__47761_map__47761__$1_props__41644__auto__$jscomp$17_vec__47758$$), $maybe_ref__41645__auto__$jscomp$17$$], null);
  $G__47763_map__47761_map__47761__$1_props__41644__auto__$jscomp$17_vec__47758$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__47763_map__47761_map__47761__$1_props__41644__auto__$jscomp$17_vec__47758$$, 0, null);
  $G__47763_map__47761_map__47761__$1_props__41644__auto__$jscomp$17_vec__47758$$ = $APP.$cljs$core$__destructure_map$$($G__47763_map__47761_map__47761__$1_props__41644__auto__$jscomp$17_vec__47758$$);
  var $title$jscomp$28$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__47763_map__47761_map__47761__$1_props__41644__auto__$jscomp$17_vec__47758$$, $APP.$cljs$cst$288$title$$), $body$jscomp$8$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__47763_map__47761_map__47761__$1_props__41644__auto__$jscomp$17_vec__47758$$, $APP.$cljs$cst$234$body$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__47763_map__47761_map__47761__$1_props__41644__auto__$jscomp$17_vec__47758$$ = function() {
    return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["rounded-[1.5rem] border px-5 py-5", "bg-slate-100/60 dark:bg-slate-800/60", "border-slate-200 dark:border-white/15"]))), children:[function() {
      var $G__47767$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$heading_sm$$, "mb-3"]))), children:$title$jscomp$28$$};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__47767$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__47767$$);
    }(), function() {
      var $G__47771$jscomp$1$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$body_sm$$), children:$body$jscomp$8$$};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__47771$jscomp$1$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__47771$jscomp$1$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__47763_map__47761_map__47761__$1_props__41644__auto__$jscomp$17_vec__47758$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__47763_map__47761_map__47761__$1_props__41644__auto__$jscomp$17_vec__47758$$);
};
$amp$pages$donations$page$hero_section$$ = function($G__47781$jscomp$1_props__41644__auto__$jscomp$18$$) {
  $APP.$helix$core$extract_cljs_props$$($G__47781$jscomp$1_props__41644__auto__$jscomp$18$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $scroll_to_id$jscomp$3$$ = $APP.$amp$hooks$use_scroll_to$use_scroll_to_id$$();
  $G__47781$jscomp$1_props__41644__auto__$jscomp$18$$ = function() {
    return {className:"px-4 pb-14 pt-10", children:[function() {
      var $G__47785$jscomp$1$$ = {text:"Support Armenia · Venice Biennale 2026"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$ui$section_header$section_eyebrow$$, $G__47785$jscomp$1$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$ui$section_header$section_eyebrow$$, $G__47785$jscomp$1$$);
    }(), function() {
      var $G__47789$$ = function() {
        return {className:"grid gap-8 lg:grid-cols-[minmax(0,1fr)_22rem] lg:items-start", children:[function() {
          var $G__47793$$ = function() {
            return {className:"space-y-6", children:[function() {
              var $G__47797$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-display", "font-semibold", "uppercase", "leading-none text-4xl sm:text-6xl md:text-7xl", "text-slate-900  dark:text-slate-100"]))), children:"Donate to the pavilion"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("h1", $G__47797$$) : $APP.$helix$core$jsx$$.call(null, "h1", $G__47797$$);
            }(), function() {
              var $G__47801$jscomp$1$$ = function() {
                return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$body_lg$$), children:["Supporting the Armenia Pavilion is an investment in ", function() {
                  var $G__47805$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:"Armenia's national presence"};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__47805$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__47805$$);
                }(), " at the 61st Venice Biennale. This is not simply participation in an art event, but ", function() {
                  var $G__47809$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:"presence in the world's most influential cultural forum"};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__47809$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__47809$$);
                }(), "."]};
              }();
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__47801$jscomp$1$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__47801$jscomp$1$$);
            }(), function() {
              var $G__47813_JSCompiler_temp_const$jscomp$inline_4016$$ = $APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$body_base$$);
              var $G__47817$jscomp$inline_4018_JSCompiler_inline_result$jscomp$inline_4017$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$value_currency$$), children:$APP.$cljs$cst$400$target$$.$cljs$core$IFn$_invoke$arity$1$($APP.$amp$data$donations$campaign$$)};
              $G__47817$jscomp$inline_4018_JSCompiler_inline_result$jscomp$inline_4017$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__47817$jscomp$inline_4018_JSCompiler_inline_result$jscomp$inline_4017$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__47817$jscomp$inline_4018_JSCompiler_inline_result$jscomp$inline_4017$$);
              $G__47813_JSCompiler_temp_const$jscomp$inline_4016$$ = {className:$G__47813_JSCompiler_temp_const$jscomp$inline_4016$$, children:["With a total budget of approximately ", $G__47817$jscomp$inline_4018_JSCompiler_inline_result$jscomp$inline_4017$$, ", the Pavilion operates as a living studio across the full six-month Biennale, funding production, installation, operations, communications, and documentation at museum scale."]};
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__47813_JSCompiler_temp_const$jscomp$inline_4016$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__47813_JSCompiler_temp_const$jscomp$inline_4016$$);
            }(), function() {
              var $G__47821_JSCompiler_temp_const$jscomp$inline_4020$$ = $APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$body_base$$);
              var $G__47825$jscomp$inline_4022_JSCompiler_inline_result$jscomp$inline_4021$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_bold$$), children:$APP.$cljs$cst$165$name$$.$cljs$core$IFn$_invoke$arity$1$($APP.$amp$data$donations$organization$$)};
              $G__47825$jscomp$inline_4022_JSCompiler_inline_result$jscomp$inline_4021$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__47825$jscomp$inline_4022_JSCompiler_inline_result$jscomp$inline_4021$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__47825$jscomp$inline_4022_JSCompiler_inline_result$jscomp$inline_4021$$);
              $G__47821_JSCompiler_temp_const$jscomp$inline_4020$$ = {className:$G__47821_JSCompiler_temp_const$jscomp$inline_4020$$, children:["Gifts made through ", $G__47825$jscomp$inline_4022_JSCompiler_inline_result$jscomp$inline_4021$$, " support the project as tax-deductible charitable contributions, while direct transfers make it possible to support the Pavilion in the format that works best for patrons, institutions, and international donors."]};
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__47821_JSCompiler_temp_const$jscomp$inline_4020$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__47821_JSCompiler_temp_const$jscomp$inline_4020$$);
            }(), function() {
              var $G__47829$$ = function() {
                return {className:"flex flex-col gap-3 pt-2 sm:flex-row sm:flex-wrap", children:[function() {
                  var $G__47833$$ = {title:"Donate via Stripe", "on-click":$amp$pages$donations$page$open_stripe$$};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$ui$button$main_button$$, $G__47833$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$ui$button$main_button$$, $G__47833$$);
                }(), function() {
                  var $G__47837$$ = function() {
                    return {className:$APP.$helix$impl$props$normalize_class$$($amp$pages$donations$page$secondary_button_class$$), onClick:function() {
                      return $scroll_to_id$jscomp$3$$.$cljs$core$IFn$_invoke$arity$1$ ? $scroll_to_id$jscomp$3$$.$cljs$core$IFn$_invoke$arity$1$("bank-details") : $scroll_to_id$jscomp$3$$.call(null, "bank-details");
                    }, children:"Bank transfer details"};
                  }();
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("button", $G__47837$$) : $APP.$helix$core$jsx$$.call(null, "button", $G__47837$$);
                }(), function() {
                  var $G__47841$$ = {href:"/budget", className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$amp$pages$donations$page$secondary_button_class$$, "no-underline"]))), children:"View full budget"};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("a", $G__47841$$) : $APP.$helix$core$jsx$$.call(null, "a", $G__47841$$);
                }()]};
              }();
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__47829$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__47829$$);
            }()]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__47793$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__47793$$);
        }(), function() {
          var $G__47845$$ = function() {
            return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["relative overflow-hidden rounded-[2rem] border px-6 py-6", "bg-white        dark:bg-slate-900", "border-slate-200 dark:border-white/15"]))), children:[function() {
              var $G__47849$$ = {className:"h-px w-16 bg-pink-500/70"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__47849$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__47849$$);
            }(), function() {
              var $G__47853$$ = {src:"/images/graphics/61_biennale_logo_line.svg", className:"mt-6 h-6 opacity-50 invert dark:invert-0"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("img", $G__47853$$) : $APP.$helix$core$jsx$$.call(null, "img", $G__47853$$);
            }(), function() {
              var $G__47857$jscomp$1$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$label_muted$$, "mt-6 mb-3"]))), children:"Campaign snapshot"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__47857$jscomp$1$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__47857$jscomp$1$$);
            }(), function() {
              var $G__47861$$ = function() {
                return {className:"space-y-4", children:[function() {
                  var $G__47865$$ = {label:"Target", value:$APP.$cljs$cst$400$target$$.$cljs$core$IFn$_invoke$arity$1$($APP.$amp$data$donations$campaign$$), detail:"Approximate full project budget supporting the Pavilion across production, operations, and public visibility."};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$pages$donations$page$stat_card$$, $G__47865$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$donations$page$stat_card$$, $G__47865$$);
                }(), function() {
                  var $G__47869$$ = {label:"Duration", value:$APP.$cljs$cst$401$duration$$.$cljs$core$IFn$_invoke$arity$1$($APP.$amp$data$donations$campaign$$), detail:"A sustained six-month presentation that functions as a working studio and public-facing national exhibition."};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$pages$donations$page$stat_card$$, $G__47869$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$donations$page$stat_card$$, $G__47869$$);
                }(), function() {
                  var $G__47873$$ = {label:"Tax status", value:$APP.$cljs$cst$12$status$$.$cljs$core$IFn$_invoke$arity$1$($APP.$amp$data$donations$organization$$), detail:"Contributions through Fallen Angels Inc. are tax deductible to the extent permitted by law."};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$pages$donations$page$stat_card$$, $G__47873$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$donations$page$stat_card$$, $G__47873$$);
                }()]};
              }();
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__47861$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__47861$$);
            }()]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__47845$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__47845$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__47789$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__47789$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("section", $G__47781$jscomp$1_props__41644__auto__$jscomp$18$$) : $APP.$helix$core$jsxs$$.call(null, "section", $G__47781$jscomp$1_props__41644__auto__$jscomp$18$$);
};
$amp$pages$donations$page$giving_section$$ = function($G__47883_props__41644__auto__$jscomp$19$$) {
  $APP.$helix$core$extract_cljs_props$$($G__47883_props__41644__auto__$jscomp$19$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $scroll_to_id$jscomp$4$$ = $APP.$amp$hooks$use_scroll_to$use_scroll_to_id$$();
  $G__47883_props__41644__auto__$jscomp$19$$ = function() {
    return {className:"px-4 py-6", children:[function() {
      var $G__47887$jscomp$1$$ = {text:"Choose a giving path"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$ui$section_header$section_eyebrow$$, $G__47887$jscomp$1$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$ui$section_header$section_eyebrow$$, $G__47887$jscomp$1$$);
    }(), function() {
      var $G__47891$jscomp$1$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$amp$pages$donations$page$section_title$$, "mb-6"]))), children:"Two ways to support the work"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("h2", $G__47891$jscomp$1$$) : $APP.$helix$core$jsx$$.call(null, "h2", $G__47891$jscomp$1$$);
    }(), function() {
      var $G__47895$$ = function() {
        return {className:"grid gap-6 xl:grid-cols-2", children:[function() {
          var $G__47899$$ = {eyebrow:"Online giving", title:"Donate instantly", body:"Use the existing Stripe checkout for a fast online contribution. This is the simplest route for individual supporters who want to give immediately.", "primary-title":"Open Stripe Checkout", "primary-action":$amp$pages$donations$page$open_stripe$$};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$pages$donations$page$method_card$$, $G__47899$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$donations$page$method_card$$, $G__47899$$);
        }(), function() {
          var $G__47903$$ = function() {
            return {eyebrow:"Wire transfer", title:"Support by bank transfer", body:"Domestic and international transfer instructions are available below for patrons, institutions, and donors who prefer direct banking rails.", "primary-title":"See bank details", "primary-action":function() {
              return $scroll_to_id$jscomp$4$$.$cljs$core$IFn$_invoke$arity$1$ ? $scroll_to_id$jscomp$4$$.$cljs$core$IFn$_invoke$arity$1$("bank-details") : $scroll_to_id$jscomp$4$$.call(null, "bank-details");
            }, "secondary-title":"Request a receipt", "secondary-action":function() {
              return window.open("mailto:" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($APP.$cljs$cst$398$email$$.$cljs$core$IFn$_invoke$arity$1$($APP.$amp$data$donations$contact$$)) + "?subject\x3dDonation%20receipt", "_self");
            }};
          }();
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$pages$donations$page$method_card$$, $G__47903$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$donations$page$method_card$$, $G__47903$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__47895$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__47895$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("section", $G__47883_props__41644__auto__$jscomp$19$$) : $APP.$helix$core$jsxs$$.call(null, "section", $G__47883_props__41644__auto__$jscomp$19$$);
};
$amp$pages$donations$page$bank_section$$ = function($G__47913_props__41644__auto__$jscomp$20$$) {
  $APP.$helix$core$extract_cljs_props$$($G__47913_props__41644__auto__$jscomp$20$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__47913_props__41644__auto__$jscomp$20$$ = function() {
    return {id:"bank-details", className:"px-4 py-6", children:[function() {
      var $G__47917$$ = {text:"Wire instructions"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$ui$section_header$section_eyebrow$$, $G__47917$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$ui$section_header$section_eyebrow$$, $G__47917$$);
    }(), function() {
      var $G__47921$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$amp$pages$donations$page$section_title$$, "mb-4"]))), children:"Bank transfer details"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("h2", $G__47921$$) : $APP.$helix$core$jsx$$.call(null, "h2", $G__47921$$);
    }(), function() {
      var $G__47925_JSCompiler_temp_const$jscomp$inline_4024$$ = $APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$, "mb-6 max-w-3xl"])));
      var $G__47929$jscomp$inline_4026_JSCompiler_inline_result$jscomp$inline_4025$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_bold$$), children:$APP.$cljs$cst$165$name$$.$cljs$core$IFn$_invoke$arity$1$($APP.$amp$data$donations$organization$$)};
      $G__47929$jscomp$inline_4026_JSCompiler_inline_result$jscomp$inline_4025$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__47929$jscomp$inline_4026_JSCompiler_inline_result$jscomp$inline_4025$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__47929$jscomp$inline_4026_JSCompiler_inline_result$jscomp$inline_4025$$);
      $G__47925_JSCompiler_temp_const$jscomp$inline_4024$$ = {className:$G__47925_JSCompiler_temp_const$jscomp$inline_4024$$, children:["The Pavilion can receive both domestic and international transfers through ", $G__47929$jscomp$inline_4026_JSCompiler_inline_result$jscomp$inline_4025$$, ". Please include your name and email address in the transfer memo if you would like a receipt letter for your records."]};
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__47925_JSCompiler_temp_const$jscomp$inline_4024$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__47925_JSCompiler_temp_const$jscomp$inline_4024$$);
    }(), function() {
      var $G__47933$$ = function() {
        return {className:"grid gap-6 xl:grid-cols-2", children:[function() {
          var $G__47937$jscomp$1$$ = {title:$APP.$cljs$cst$288$title$$.$cljs$core$IFn$_invoke$arity$1$($APP.$amp$data$donations$domestic_transfer$$), description:"For U.S.-based donors and domestic bank transfers.", transfer:$APP.$amp$data$donations$domestic_transfer$$};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$pages$donations$page$transfer_card$$, $G__47937$jscomp$1$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$donations$page$transfer_card$$, $G__47937$jscomp$1$$);
        }(), function() {
          var $G__47941$jscomp$1$$ = {title:$APP.$cljs$cst$288$title$$.$cljs$core$IFn$_invoke$arity$1$($APP.$amp$data$donations$international_transfer$$), description:"For international patrons, institutions, and cross-border transfers.", transfer:$APP.$amp$data$donations$international_transfer$$};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$pages$donations$page$transfer_card$$, $G__47941$jscomp$1$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$donations$page$transfer_card$$, $G__47941$jscomp$1$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__47933$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__47933$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("section", $G__47913_props__41644__auto__$jscomp$20$$) : $APP.$helix$core$jsxs$$.call(null, "section", $G__47913_props__41644__auto__$jscomp$20$$);
};
$amp$pages$donations$page$impact_section$$ = function($G__47951$jscomp$1_props__41644__auto__$jscomp$21$$) {
  $APP.$helix$core$extract_cljs_props$$($G__47951$jscomp$1_props__41644__auto__$jscomp$21$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__47951$jscomp$1_props__41644__auto__$jscomp$21$$ = function() {
    return {className:"px-4 py-6", children:[function() {
      var $G__47955$jscomp$1$$ = {text:"Why support"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$ui$section_header$section_eyebrow$$, $G__47955$jscomp$1$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$ui$section_header$section_eyebrow$$, $G__47955$jscomp$1$$);
    }(), function() {
      var $G__47959$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$amp$pages$donations$page$section_title$$, "mb-4"]))), children:"What your donation secures"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("h2", $G__47959$$) : $APP.$helix$core$jsx$$.call(null, "h2", $G__47959$$);
    }(), function() {
      var $G__47963$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$, "mb-6 max-w-3xl"]))), children:"This Pavilion is not a symbolic gesture. It is a concrete, public assertion that Armenia belongs on equal footing where the world is watching: in museums, in the press, in institutional memory, and in the cultural imagination that follows Venice for years afterward."};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__47963$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__47963$$);
    }(), function() {
      var $G__47967$jscomp$1$$ = function() {
        return {className:"grid gap-4 md:grid-cols-2", children:$APP.$cljs$core$map$$.$cljs$core$IFn$_invoke$arity$2$(function($p__47970_title$jscomp$29$$) {
          var $G__47973_map__47971__$1$$ = $APP.$cljs$core$__destructure_map$$($p__47970_title$jscomp$29$$);
          $p__47970_title$jscomp$29$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__47973_map__47971__$1$$, $APP.$cljs$cst$288$title$$);
          $G__47973_map__47971__$1$$ = {title:$p__47970_title$jscomp$29$$, body:$APP.$cljs$cst$234$body$$.$cljs$core$IFn$_invoke$arity$1$($G__47973_map__47971__$1$$)};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$($amp$pages$donations$page$support_card$$, $G__47973_map__47971__$1$$, $p__47970_title$jscomp$29$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$donations$page$support_card$$, $G__47973_map__47971__$1$$, $p__47970_title$jscomp$29$$);
        }, $amp$pages$donations$page$support_pillars$$)};
      }();
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__47967$jscomp$1$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__47967$jscomp$1$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("section", $G__47951$jscomp$1_props__41644__auto__$jscomp$21$$) : $APP.$helix$core$jsxs$$.call(null, "section", $G__47951$jscomp$1_props__41644__auto__$jscomp$21$$);
};
$amp$pages$donations$page$donor_support_section$$ = function($G__47984_props__41644__auto__$jscomp$22$$) {
  $APP.$helix$core$extract_cljs_props$$($G__47984_props__41644__auto__$jscomp$22$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__47984_props__41644__auto__$jscomp$22$$ = function() {
    return {className:"px-4 pb-16 pt-6", children:function() {
      var $G__47988$$ = function() {
        return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["overflow-hidden rounded-[2rem] border px-6 py-7 sm:px-8", "bg-white        dark:bg-slate-900", "border-slate-200 dark:border-white/15"]))), children:[function() {
          var $G__47992$$ = {className:"mb-6 h-px w-16 bg-pink-500/70"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__47992$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__47992$$);
        }(), function() {
          var $G__47996$jscomp$1$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$amp$pages$donations$page$section_title$$, "mb-4"]))), children:"Receipts, questions, and donor support"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("h2", $G__47996$jscomp$1$$) : $APP.$helix$core$jsx$$.call(null, "h2", $G__47996$jscomp$1$$);
        }(), function() {
          var $G__48000$jscomp$1$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_base$$, "max-w-3xl"]))), children:[$APP.$cljs$cst$165$name$$.$cljs$core$IFn$_invoke$arity$1$($APP.$amp$data$donations$organization$$), " is a registered ", $APP.$cljs$cst$12$status$$.$cljs$core$IFn$_invoke$arity$1$($APP.$amp$data$donations$organization$$), " public non-profit organization based in ", 
          $APP.$cljs$cst$396$location$$.$cljs$core$IFn$_invoke$arity$1$($APP.$amp$data$donations$organization$$), ". ", $APP.$cljs$cst$397$tax_note$$.$cljs$core$IFn$_invoke$arity$1$($APP.$amp$data$donations$organization$$)]};
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__48000$jscomp$1$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__48000$jscomp$1$$);
        }(), function() {
          var $G__48004$jscomp$1$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_sm$$, "mt-4 max-w-3xl"]))), children:"If you would like a receipt letter for your records, please include your name and email address with the transfer memo."};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__48004$jscomp$1$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__48004$jscomp$1$$);
        }(), function() {
          var $G__48008$jscomp$1$$ = function() {
            return {className:"mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap", children:[function() {
              var $G__48012$jscomp$1$$ = {title:"Donate via Stripe", "on-click":$amp$pages$donations$page$open_stripe$$};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$ui$button$main_button$$, $G__48012$jscomp$1$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$ui$button$main_button$$, $G__48012$jscomp$1$$);
            }(), function() {
              var $G__48016$$ = {href:"mailto:" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($APP.$cljs$cst$398$email$$.$cljs$core$IFn$_invoke$arity$1$($APP.$amp$data$donations$contact$$)) + "?subject\x3dDonation%20question", className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$amp$pages$donations$page$secondary_button_class$$, "no-underline"]))), children:"Email donor support"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("a", $G__48016$$) : $APP.$helix$core$jsx$$.call(null, "a", $G__48016$$);
            }(), function() {
              var $G__48021$$ = {href:"tel:" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($APP.$cljs$cst$399$phone$$.$cljs$core$IFn$_invoke$arity$1$($APP.$amp$data$donations$contact$$)), className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$amp$pages$donations$page$secondary_button_class$$, "no-underline"]))), children:$APP.$cljs$cst$399$phone$$.$cljs$core$IFn$_invoke$arity$1$($APP.$amp$data$donations$contact$$)};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("a", $G__48021$$) : $APP.$helix$core$jsx$$.call(null, "a", $G__48021$$);
            }()]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__48008$jscomp$1$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__48008$jscomp$1$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__47988$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__47988$$);
    }()};
  }();
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("section", $G__47984_props__41644__auto__$jscomp$22$$) : $APP.$helix$core$jsx$$.call(null, "section", $G__47984_props__41644__auto__$jscomp$22$$);
};
$APP.$amp$pages$donations$page$donations_view$$ = function($G__48044_props__41644__auto__$jscomp$23_vec__48040$jscomp$1$$, $maybe_ref__41645__auto__$jscomp$23$$) {
  $G__48044_props__41644__auto__$jscomp$23_vec__48040$jscomp$1$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__48044_props__41644__auto__$jscomp$23_vec__48040$jscomp$1$$), $maybe_ref__41645__auto__$jscomp$23$$], null);
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__48044_props__41644__auto__$jscomp$23_vec__48040$jscomp$1$$, 0, null);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__48044_props__41644__auto__$jscomp$23_vec__48040$jscomp$1$$ = {children:function() {
    var $G__48048$jscomp$1$$ = function() {
      return {className:"w-full", children:[function() {
        var $G__48054$jscomp$1$$ = {};
        return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$pages$donations$page$hero_section$$, $G__48054$jscomp$1$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$donations$page$hero_section$$, $G__48054$jscomp$1$$);
      }(), function() {
        var $G__48059$$ = {};
        return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$pages$donations$page$giving_section$$, $G__48059$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$donations$page$giving_section$$, $G__48059$$);
      }(), function() {
        var $G__48061$$ = {};
        return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$pages$donations$page$bank_section$$, $G__48061$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$donations$page$bank_section$$, $G__48061$$);
      }(), function() {
        var $G__48065$$ = {};
        return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$pages$donations$page$impact_section$$, $G__48065$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$donations$page$impact_section$$, $G__48065$$);
      }(), function() {
        var $G__48067$$ = {};
        return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$pages$donations$page$donor_support_section$$, $G__48067$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$donations$page$donor_support_section$$, $G__48067$$);
      }()]};
    }();
    return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__48048$jscomp$1$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__48048$jscomp$1$$);
  }()};
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$ui$page_shell$page_shell$$, $G__48044_props__41644__auto__$jscomp$23_vec__48040$jscomp$1$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$ui$page_shell$page_shell$$, $G__48044_props__41644__auto__$jscomp$23_vec__48040$jscomp$1$$);
};
$cljs$cst$787$secondary_title$$ = new $APP.$cljs$core$Keyword$$(null, "secondary-title", "secondary-title", 1012370973);
$cljs$cst$786$primary_action$$ = new $APP.$cljs$core$Keyword$$(null, "primary-action", "primary-action", 275405527);
$cljs$cst$788$secondary_action$$ = new $APP.$cljs$core$Keyword$$(null, "secondary-action", "secondary-action", -981761836);
$cljs$cst$790$transfer$$ = new $APP.$cljs$core$Keyword$$(null, "transfer", "transfer", 327423400);
$cljs$cst$785$primary_title$$ = new $APP.$cljs$core$Keyword$$(null, "primary-title", "primary-title", -1889397148);
$APP.$JSCompiler_StaticMethods_beforeLoadModuleCode$$("donations-view");
var $amp$pages$donations$page$section_title$$ = $APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-display", "font-semibold", "uppercase", "leading-none text-2xl sm:text-4xl md:text-5xl", "text-slate-900  dark:text-slate-100"])), $amp$pages$donations$page$secondary_button_class$$ = $APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$("font-mono;text-[10px];font-semibold;uppercase;tracking-[0.15em];inline-flex items-center justify-center rounded-full border px-4 py-3;text-slate-700  dark:text-slate-300;border-slate-200 dark:border-white/15;transition-colors duration-200;hover:border-pink-500/40 hover:text-pink-600 dark:hover:text-pink-300".split(";"))), 
$amp$pages$donations$page$support_pillars$$ = new $APP.$cljs$core$PersistentVector$$(null, 4, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$288$title$$, "National dignity, made public", $APP.$cljs$cst$234$body$$, "Armenia is framed through excellence, discipline, and contemporary creativity rather than being reduced to tragedy or geopolitics."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$288$title$$, 
"Narrative control", $APP.$cljs$cst$234$body$$, "A pavilion lets Armenia author its own image on the world stage instead of leaving that image to be simplified by others."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$288$title$$, "Soft power that compounds", $APP.$cljs$cst$234$body$$, "Visibility in Venice creates long-tail value through press, institutional relationships, education, tourism, and diplomacy."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, 
[$APP.$cljs$cst$288$title$$, "A platform for future generations", $APP.$cljs$cst$234$body$$, "A serious national presence signals that Armenian artists, students, and institutions belong on the international stage."], null)], null);
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$301$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$302$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$pages$donations$page$stat_card$$, "", null, null) : (void 0).call(null, $amp$pages$donations$page$stat_card$$, "", null, null)), $APP.$helix$core$register_BANG_$$($amp$pages$donations$page$stat_card$$, 
"amp.pages.donations.page/stat-card"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$301$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$302$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$pages$donations$page$method_card$$, "", null, null) : (void 0).call(null, $amp$pages$donations$page$method_card$$, "", null, null)), $APP.$helix$core$register_BANG_$$($amp$pages$donations$page$method_card$$, 
"amp.pages.donations.page/method-card"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$301$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$302$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$pages$donations$page$bank_field$$, "", null, null) : (void 0).call(null, $amp$pages$donations$page$bank_field$$, "", null, null)), $APP.$helix$core$register_BANG_$$($amp$pages$donations$page$bank_field$$, 
"amp.pages.donations.page/bank-field"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$301$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$302$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$pages$donations$page$transfer_card$$, "", null, null) : (void 0).call(null, $amp$pages$donations$page$transfer_card$$, "", null, null)), $APP.$helix$core$register_BANG_$$($amp$pages$donations$page$transfer_card$$, 
"amp.pages.donations.page/transfer-card"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$301$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$302$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$pages$donations$page$support_card$$, "", null, null) : (void 0).call(null, $amp$pages$donations$page$support_card$$, "", null, null)), $APP.$helix$core$register_BANG_$$($amp$pages$donations$page$support_card$$, 
"amp.pages.donations.page/support-card"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$301$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$302$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$pages$donations$page$hero_section$$, "(use-scroll-to-id)", null, null) : (void 0).call(null, $amp$pages$donations$page$hero_section$$, "(use-scroll-to-id)", 
null, null)), $APP.$helix$core$register_BANG_$$($amp$pages$donations$page$hero_section$$, "amp.pages.donations.page/hero-section"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$301$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$302$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$pages$donations$page$giving_section$$, "(use-scroll-to-id)", null, null) : (void 0).call(null, $amp$pages$donations$page$giving_section$$, "(use-scroll-to-id)", 
null, null)), $APP.$helix$core$register_BANG_$$($amp$pages$donations$page$giving_section$$, "amp.pages.donations.page/giving-section"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$301$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$302$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$pages$donations$page$bank_section$$, "", null, null) : (void 0).call(null, $amp$pages$donations$page$bank_section$$, "", null, null)), $APP.$helix$core$register_BANG_$$($amp$pages$donations$page$bank_section$$, 
"amp.pages.donations.page/bank-section"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$301$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$302$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$pages$donations$page$impact_section$$, "", null, null) : (void 0).call(null, $amp$pages$donations$page$impact_section$$, "", null, null)), $APP.$helix$core$register_BANG_$$($amp$pages$donations$page$impact_section$$, 
"amp.pages.donations.page/impact-section"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$301$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$302$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$pages$donations$page$donor_support_section$$, "", null, null) : (void 0).call(null, $amp$pages$donations$page$donor_support_section$$, "", null, null)), 
$APP.$helix$core$register_BANG_$$($amp$pages$donations$page$donor_support_section$$, "amp.pages.donations.page/donor-support-section"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$301$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$302$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($APP.$amp$pages$donations$page$donations_view$$, "", null, null) : (void 0).call(null, $APP.$amp$pages$donations$page$donations_view$$, "", null, null)), 
$APP.$helix$core$register_BANG_$$($APP.$amp$pages$donations$page$donations_view$$, "amp.pages.donations.page/donations-view"));
$APP.$module$contents$shadow$loader_set_loaded$$();

}).call(this);