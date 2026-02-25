(function(){
'use strict';
var $amp$ui$icons$InformationCircle$$, $cljs$core$take_while$cljs$0core$0IFn$0_invoke$0arity$02$$, $cljs$core$partition_by$cljs$0core$0IFn$0_invoke$0arity$02$$, $amp$hooks$use_scroll_to$use_scroll_to_ref$$, $amp$pages$budget$committee$preview$$, $amp$pages$budget$committee$details$$, $amp$pages$budget$committee$committee_member_card$$, $amp$pages$budget$committee$committee_gallery$$, $amp$pages$budget$committee$committee$$, $amp$pages$budget$table$format_currency$$, $amp$pages$budget$table$sub_total_all_sections$$, 
$amp$pages$budget$table$total_section$$, $amp$pages$budget$table$pad_two_digits$$, $amp$pages$budget$table$detail_line_item$$, $amp$pages$budget$table$details__GT_render_items$$, $amp$pages$budget$table$section_line_item$$, $amp$pages$budget$table$budget_table$$, $amp$pages$budget$cost_breakdown$preview$$, $amp$pages$budget$cost_breakdown$details$$, $amp$pages$budget$cost_breakdown$footer$$, $amp$pages$budget$cost_breakdown$cost_breakdown$$, $amp$pages$budget$location$preview_text$$, $amp$pages$budget$location$preview$$, 
$amp$pages$budget$location$full_details$$, $amp$pages$budget$location$location_section$$, $amp$pages$budget$cash_flow$parse_date$$, $amp$pages$budget$cash_flow$date__GT_ms$$, $amp$pages$budget$cash_flow$format_currency$$, $amp$pages$budget$cash_flow$priority_tag_bg$$, $amp$pages$budget$cash_flow$priority_tag_text$$, $amp$pages$budget$cash_flow$priority_dot_classes$$, $amp$pages$budget$cash_flow$priority_amount_class$$, $amp$pages$budget$cash_flow$priority_label$$, $amp$pages$budget$cash_flow$group_by_month$$, 
$amp$pages$budget$cash_flow$month_rollups$$, $amp$pages$budget$cash_flow$status_classes$$, $amp$pages$budget$cash_flow$timeline_node$$, $amp$pages$budget$cash_flow$now_marker$$, $amp$pages$budget$cash_flow$month_header$$, $amp$pages$budget$cash_flow$month_summary_row$$, $amp$pages$budget$cash_flow$view_toggle$$, $amp$pages$budget$cash_flow$summary_header$$, $amp$pages$budget$cash_flow$cash_flow$$, $amp$pages$budget$non_profit$non_profit$$, $amp$pages$budget$sponsors$logo_card$$, $amp$pages$budget$sponsors$name_item$$, 
$amp$pages$budget$sponsors$tier_section$$, $amp$pages$budget$sponsors$sponsors_section$$, $amp$pages$budget$why_support$preview$$, $amp$pages$budget$why_support$details$$, $amp$pages$budget$why_support$why_support$$, $amp$pages$budget$section$section_link$$, $amp$pages$budget$section$header$$, $amp$pages$budget$section$budget_section$$, $cljs$cst$848$admin_apr_26$$, $cljs$cst$862$venice_sep_26$$, $cljs$cst$821$venice_sep_25$$, $cljs$cst$840$la_feb_26$$, $cljs$cst$850$venice_may_26$$, $cljs$cst$815$priority$$, 
$cljs$cst$895$accent$$, $cljs$cst$801$venue$$, $cljs$cst$844$la_mar_26$$, $cljs$cst$877$n_crit$$, $cljs$cst$866$admin_oct_26$$, $cljs$cst$898$supporter$$, $cljs$cst$826$admin_oct_25$$, $cljs$cst$853$venice_jun_26$$, $cljs$cst$880$has_now$$, $cljs$cst$804$the_studio$$, $cljs$cst$886$month$$, $cljs$cst$897$benefactor$$, $cljs$cst$828$la_nov_25$$, $cljs$cst$838$contingency_jan_26$$, $cljs$cst$856$venice_jul_26$$, $cljs$cst$876$entries$$, $cljs$cst$875$all_paid$$, $cljs$cst$816$normal$$, $cljs$cst$813$admin_jul_25$$, 
$cljs$cst$857$admin_jul_26$$, $cljs$cst$878$n_paid$$, $cljs$cst$809$documentation$$, $cljs$cst$820$contingency_aug_25$$, $cljs$cst$861$contingency_aug_26$$, $cljs$cst$810$debt_raised$$, $cljs$cst$854$admin_jun_26$$, $cljs$cst$798$expanded_items$$, $cljs$cst$889$tier$$, $cljs$cst$830$contingency_nov_25$$, $cljs$cst$870$contingency_nov_26$$, $cljs$cst$795$tax$$, $cljs$cst$805$logistics$$, $cljs$cst$851$admin_may_26$$, $cljs$cst$837$admin_jan_26$$, $cljs$cst$839$venice_feb_26$$, $cljs$cst$834$venice_jan_26$$, 
$cljs$cst$879$n_items$$, $cljs$cst$867$contingency_oct_26$$, $cljs$cst$827$contingency_oct_25$$, $cljs$cst$845$admin_mar_26$$, $cljs$cst$817$paid$$, $cljs$cst$793$details$$, $cljs$cst$871$venice_dec_26$$, $cljs$cst$843$venice_mar_26$$, $cljs$cst$896$order$$, $cljs$cst$841$admin_feb_26$$, $cljs$cst$849$contingency_apr_26$$, $cljs$cst$882$entry$$, $cljs$cst$872$admin_dec_26$$, $cljs$cst$832$admin_dec_25$$, $cljs$cst$800$item$$, $cljs$cst$869$admin_nov_26$$, $cljs$cst$829$admin_nov_25$$, $cljs$cst$814$due$$, 
$cljs$cst$799$description$$, $cljs$cst$835$critical$$, $cljs$cst$858$contingency_jul_26$$, $cljs$cst$818$contingency_jul_25$$, $cljs$cst$873$contingency_dec_26$$, $cljs$cst$833$contingency_dec_25$$, $cljs$cst$852$contingency_may_26$$, $cljs$cst$855$contingency_jun_26$$, $cljs$cst$792$amount$$, $cljs$cst$888$past_QMARK_$$, $cljs$cst$812$cash_flow_model$$, $cljs$cst$881$dot$$, $cljs$cst$884$expanded_QMARK_$$, $cljs$cst$797$set_expanded_items$$, $cljs$cst$794$rate$$, $cljs$cst$842$contingency_feb_26$$, 
$cljs$cst$807$marketing$$, $cljs$cst$803$la_prod$$, $cljs$cst$893$patron$$, $cljs$cst$874$fill$$, $cljs$cst$811$funds_raised$$, $cljs$cst$864$contingency_sep_26$$, $cljs$cst$824$contingency_sep_25$$, $cljs$cst$899$members$$, $cljs$cst$796$cost_data$$, $cljs$cst$868$venice_nov_26$$, $cljs$cst$883$rollup$$, $cljs$cst$894$individual$$, $cljs$cst$863$admin_sep_26$$, $cljs$cst$822$admin_sep_25$$, $cljs$cst$847$venice_apr_26$$, $cljs$cst$892$institution$$, $cljs$cst$891$logo$$, $cljs$cst$823$high$$, $cljs$cst$806$opening$$, 
$cljs$cst$900$anchor$$, $cljs$cst$802$admin$$, $cljs$cst$846$contingency_mar_26$$, $cljs$cst$865$venice_oct_26$$, $cljs$cst$825$venice_oct_25$$, $cljs$cst$887$now$$, $cljs$cst$859$venice_aug_26$$, $cljs$cst$860$admin_aug_26$$, $cljs$cst$819$admin_aug_25$$, $cljs$cst$890$founding_patron$$, $cljs$cst$831$la_dec_25$$, $cljs$cst$836$la_jan_26$$, $cljs$cst$808$publication$$, $cljs$cst$885$target_total$$;
$amp$ui$icons$InformationCircle$$ = function($G__52439_JSCompiler_temp_const$jscomp$inline_3518_class$$jscomp$7_map__52437_map__52437__$1_props__41652__auto__$jscomp$5_vec__52434$$, $G__52443$jscomp$inline_3520_JSCompiler_inline_result$jscomp$inline_3519_maybe_ref__41653__auto__$jscomp$5$$) {
  $G__52439_JSCompiler_temp_const$jscomp$inline_3518_class$$jscomp$7_map__52437_map__52437__$1_props__41652__auto__$jscomp$5_vec__52434$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__52439_JSCompiler_temp_const$jscomp$inline_3518_class$$jscomp$7_map__52437_map__52437__$1_props__41652__auto__$jscomp$5_vec__52434$$), $G__52443$jscomp$inline_3520_JSCompiler_inline_result$jscomp$inline_3519_maybe_ref__41653__auto__$jscomp$5$$], 
  null);
  $G__52439_JSCompiler_temp_const$jscomp$inline_3518_class$$jscomp$7_map__52437_map__52437__$1_props__41652__auto__$jscomp$5_vec__52434$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__52439_JSCompiler_temp_const$jscomp$inline_3518_class$$jscomp$7_map__52437_map__52437__$1_props__41652__auto__$jscomp$5_vec__52434$$, 0, null);
  $G__52439_JSCompiler_temp_const$jscomp$inline_3518_class$$jscomp$7_map__52437_map__52437__$1_props__41652__auto__$jscomp$5_vec__52434$$ = $APP.$cljs$core$__destructure_map$$($G__52439_JSCompiler_temp_const$jscomp$inline_3518_class$$jscomp$7_map__52437_map__52437__$1_props__41652__auto__$jscomp$5_vec__52434$$);
  $G__52439_JSCompiler_temp_const$jscomp$inline_3518_class$$jscomp$7_map__52437_map__52437__$1_props__41652__auto__$jscomp$5_vec__52434$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__52439_JSCompiler_temp_const$jscomp$inline_3518_class$$jscomp$7_map__52437_map__52437__$1_props__41652__auto__$jscomp$5_vec__52434$$, $APP.$cljs$cst$67$class$$);
  $G__52439_JSCompiler_temp_const$jscomp$inline_3518_class$$jscomp$7_map__52437_map__52437__$1_props__41652__auto__$jscomp$5_vec__52434$$ = $APP.$helix$impl$props$normalize_class$$($G__52439_JSCompiler_temp_const$jscomp$inline_3518_class$$jscomp$7_map__52437_map__52437__$1_props__41652__auto__$jscomp$5_vec__52434$$);
  $G__52443$jscomp$inline_3520_JSCompiler_inline_result$jscomp$inline_3519_maybe_ref__41653__auto__$jscomp$5$$ = {strokeLinecap:"round", strokeLinejoin:"round", d:"m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"};
  $G__52443$jscomp$inline_3520_JSCompiler_inline_result$jscomp$inline_3519_maybe_ref__41653__auto__$jscomp$5$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("path", $G__52443$jscomp$inline_3520_JSCompiler_inline_result$jscomp$inline_3519_maybe_ref__41653__auto__$jscomp$5$$) : $APP.$helix$core$jsx$$.call(null, "path", $G__52443$jscomp$inline_3520_JSCompiler_inline_result$jscomp$inline_3519_maybe_ref__41653__auto__$jscomp$5$$);
  $G__52439_JSCompiler_temp_const$jscomp$inline_3518_class$$jscomp$7_map__52437_map__52437__$1_props__41652__auto__$jscomp$5_vec__52434$$ = {xmlns:"http://www.w3.org/2000/svg", fill:"none", viewBox:"0 0 24 24", strokeWidth:1.5, stroke:"currentColor", className:$G__52439_JSCompiler_temp_const$jscomp$inline_3518_class$$jscomp$7_map__52437_map__52437__$1_props__41652__auto__$jscomp$5_vec__52434$$, children:$G__52443$jscomp$inline_3520_JSCompiler_inline_result$jscomp$inline_3519_maybe_ref__41653__auto__$jscomp$5$$};
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("svg", $G__52439_JSCompiler_temp_const$jscomp$inline_3518_class$$jscomp$7_map__52437_map__52437__$1_props__41652__auto__$jscomp$5_vec__52434$$) : $APP.$helix$core$jsx$$.call(null, "svg", $G__52439_JSCompiler_temp_const$jscomp$inline_3518_class$$jscomp$7_map__52437_map__52437__$1_props__41652__auto__$jscomp$5_vec__52434$$);
};
$cljs$core$take_while$cljs$0core$0IFn$0_invoke$0arity$02$$ = function($pred$jscomp$14$$, $coll$jscomp$728$$) {
  return new $APP.$cljs$core$LazySeq$$(null, function() {
    var $JSCompiler_temp$jscomp$431_temp__5823__auto__$jscomp$22$$ = $APP.$cljs$core$seq$$($coll$jscomp$728$$);
    if ($JSCompiler_temp$jscomp$431_temp__5823__auto__$jscomp$22$$) {
      var $G__47638$jscomp$inline_2184_JSCompiler_inline_result$jscomp$432$$ = $APP.$cljs$core$first$$($JSCompiler_temp$jscomp$431_temp__5823__auto__$jscomp$22$$);
      $G__47638$jscomp$inline_2184_JSCompiler_inline_result$jscomp$432$$ = $pred$jscomp$14$$.$cljs$core$IFn$_invoke$arity$1$ ? $pred$jscomp$14$$.$cljs$core$IFn$_invoke$arity$1$($G__47638$jscomp$inline_2184_JSCompiler_inline_result$jscomp$432$$) : $pred$jscomp$14$$.call(null, $G__47638$jscomp$inline_2184_JSCompiler_inline_result$jscomp$432$$);
      $JSCompiler_temp$jscomp$431_temp__5823__auto__$jscomp$22$$ = $APP.$cljs$core$truth_$$($G__47638$jscomp$inline_2184_JSCompiler_inline_result$jscomp$432$$) ? $APP.$cljs$core$cons$$($APP.$cljs$core$first$$($JSCompiler_temp$jscomp$431_temp__5823__auto__$jscomp$22$$), $cljs$core$take_while$cljs$0core$0IFn$0_invoke$0arity$02$$($pred$jscomp$14$$, $APP.$cljs$core$rest$$($JSCompiler_temp$jscomp$431_temp__5823__auto__$jscomp$22$$))) : null;
    } else {
      $JSCompiler_temp$jscomp$431_temp__5823__auto__$jscomp$22$$ = null;
    }
    return $JSCompiler_temp$jscomp$431_temp__5823__auto__$jscomp$22$$;
  }, null, null);
};
$cljs$core$partition_by$cljs$0core$0IFn$0_invoke$0arity$02$$ = function($f$jscomp$297$$, $coll$jscomp$747$$) {
  return new $APP.$cljs$core$LazySeq$$(null, function() {
    var $temp__5823__auto__$jscomp$28$$ = $APP.$cljs$core$seq$$($coll$jscomp$747$$);
    if ($temp__5823__auto__$jscomp$28$$) {
      var $fst$$ = $APP.$cljs$core$first$$($temp__5823__auto__$jscomp$28$$), $fv$$ = $f$jscomp$297$$.$cljs$core$IFn$_invoke$arity$1$ ? $f$jscomp$297$$.$cljs$core$IFn$_invoke$arity$1$($fst$$) : $f$jscomp$297$$.call(null, $fst$$), $run$$ = $APP.$cljs$core$cons$$($fst$$, $cljs$core$take_while$cljs$0core$0IFn$0_invoke$0arity$02$$(function($p1__47665_SHARP_$$) {
        return $APP.$cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$($fv$$, $f$jscomp$297$$.$cljs$core$IFn$_invoke$arity$1$ ? $f$jscomp$297$$.$cljs$core$IFn$_invoke$arity$1$($p1__47665_SHARP_$$) : $f$jscomp$297$$.call(null, $p1__47665_SHARP_$$));
      }, $APP.$cljs$core$next$$($temp__5823__auto__$jscomp$28$$)));
      return $APP.$cljs$core$cons$$($run$$, $cljs$core$partition_by$cljs$0core$0IFn$0_invoke$0arity$02$$($f$jscomp$297$$, new $APP.$cljs$core$LazySeq$$(null, function() {
        return $APP.$cljs$core$drop$cljs$0core$0IFn$0_invoke$0arity$02$$($APP.$cljs$core$count$$($run$$), $temp__5823__auto__$jscomp$28$$);
      }, null, null)));
    }
    return null;
  }, null, null);
};
$amp$hooks$use_scroll_to$use_scroll_to_ref$$ = function() {
  var $G__50946$$ = function() {
    function $G__50974$$($ref$jscomp$9$$, $var_args$jscomp$416$$) {
      var $G__50975__i_p__50948$jscomp$1$$ = null;
      if (arguments.length > 1) {
        $G__50975__i_p__50948$jscomp$1$$ = 0;
        for (var $G__50975__a$$ = Array(arguments.length - 1); $G__50975__i_p__50948$jscomp$1$$ < $G__50975__a$$.length;) {
          $G__50975__a$$[$G__50975__i_p__50948$jscomp$1$$] = arguments[$G__50975__i_p__50948$jscomp$1$$ + 1], ++$G__50975__i_p__50948$jscomp$1$$;
        }
        $G__50975__i_p__50948$jscomp$1$$ = new $APP.$cljs$core$IndexedSeq$$($G__50975__a$$, 0, null);
      }
      return $G__50974__delegate$$.call(this, $ref$jscomp$9$$, $G__50975__i_p__50948$jscomp$1$$);
    }
    function $G__50974__delegate$$($ref$jscomp$8_temp__5823__auto__$jscomp$68$$, $duration$jscomp$2_p__50948$$) {
      $duration$jscomp$2_p__50948$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($duration$jscomp$2_p__50948$$, 0, null);
      $ref$jscomp$8_temp__5823__auto__$jscomp$68$$ = $ref$jscomp$8_temp__5823__auto__$jscomp$68$$.current;
      return $APP.$cljs$core$truth_$$($ref$jscomp$8_temp__5823__auto__$jscomp$68$$) ? $APP.$module$node_modules$gsap$dist$gsap$$.gsap.to(window, $APP.$cljs$core$clj__GT_js$$(new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$402$duration$$, $APP.$cljs$core$truth_$$($duration$jscomp$2_p__50948$$) ? $duration$jscomp$2_p__50948$$ : 0.35, $APP.$cljs$cst$403$scrollTo$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$404$y$$, $ref$jscomp$8_temp__5823__auto__$jscomp$68$$, 
      $APP.$cljs$cst$405$autoKill$$, !1], null), $APP.$cljs$cst$406$ease$$, "power2.inOut"], null))) : null;
    }
    $G__50974$$.$cljs$lang$maxFixedArity$ = 1;
    $G__50974$$.$cljs$lang$applyTo$ = function($arglist__50976_p__50948$jscomp$2$$) {
      var $ref$jscomp$10$$ = $APP.$cljs$core$first$$($arglist__50976_p__50948$jscomp$2$$);
      $arglist__50976_p__50948$jscomp$2$$ = $APP.$cljs$core$rest$$($arglist__50976_p__50948$jscomp$2$$);
      return $G__50974__delegate$$($ref$jscomp$10$$, $arglist__50976_p__50948$jscomp$2$$);
    };
    $G__50974$$.$cljs$core$IFn$_invoke$arity$variadic$ = $G__50974__delegate$$;
    return $G__50974$$;
  }(), $G__50947$$ = [];
  return $APP.$helix$hooks$raw_use_callback$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$hooks$raw_use_callback$$.$cljs$core$IFn$_invoke$arity$2$($G__50946$$, $G__50947$$) : $APP.$helix$hooks$raw_use_callback$$.call(null, $G__50946$$, $G__50947$$);
};
$amp$pages$budget$committee$preview$$ = function($G__183601_map__183599_props__41575__auto__$jscomp$48_vec__183596$$, $maybe_ref__41576__auto__$jscomp$48$$) {
  $G__183601_map__183599_props__41575__auto__$jscomp$48_vec__183596$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__183601_map__183599_props__41575__auto__$jscomp$48_vec__183596$$), $maybe_ref__41576__auto__$jscomp$48$$], null);
  $G__183601_map__183599_props__41575__auto__$jscomp$48_vec__183596$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__183601_map__183599_props__41575__auto__$jscomp$48_vec__183596$$, 0, null);
  $APP.$cljs$core$__destructure_map$$($G__183601_map__183599_props__41575__auto__$jscomp$48_vec__183596$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__183601_map__183599_props__41575__auto__$jscomp$48_vec__183596$$ = function() {
    return {className:"space-y-3 p-4", children:function() {
      var $G__183605$$ = function() {
        return {children:[function() {
          var $G__183609$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:"To realize an undertaking of this scale and international significance, an "};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__183609$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__183609$$);
        }(), function() {
          var $G__183613$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:"urgent fundraising program"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__183613$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__183613$$);
        }(), function() {
          var $G__183617$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:" is greatly needed."};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__183617$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__183617$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__183605$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__183605$$);
    }()};
  }();
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__183601_map__183599_props__41575__auto__$jscomp$48_vec__183596$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__183601_map__183599_props__41575__auto__$jscomp$48_vec__183596$$);
};
$amp$pages$budget$committee$details$$ = function($G__183633_map__183630_props__41575__auto__$jscomp$49_vec__183627$$, $maybe_ref__41576__auto__$jscomp$49$$) {
  $G__183633_map__183630_props__41575__auto__$jscomp$49_vec__183627$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__183633_map__183630_props__41575__auto__$jscomp$49_vec__183627$$), $maybe_ref__41576__auto__$jscomp$49$$], null);
  $G__183633_map__183630_props__41575__auto__$jscomp$49_vec__183627$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__183633_map__183630_props__41575__auto__$jscomp$49_vec__183627$$, 0, null);
  $APP.$cljs$core$__destructure_map$$($G__183633_map__183630_props__41575__auto__$jscomp$49_vec__183627$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__183633_map__183630_props__41575__auto__$jscomp$49_vec__183627$$ = function() {
    return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["p-4", $APP.$amp$styles$body_lg$$]))), children:[function() {
      var $G__183637$$ = function() {
        return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["italic text-lg text-red-300"]))), children:["*Note: As Armenia does not maintain a permanent national pavilion in Venice, the Pavilion must be realized through a rented venue—a standard and widely accepted model for many non-permanent participating nations. ", "The selected site operates at a base rental cost of approximately ", 
        function() {
          var $G__183641$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$value_currency$$), children:"$145,600"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__183641$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__183641$$);
        }(), function() {
          var $G__183645$$ = {className:"text-red-300", children:[", covering the entire six-month duration of the Exhibition, and represents a strategic and fiscally responsible choice given its immediate proximity to the Arsenale proper. ", "Comparable venues just minutes away within the Arsenale or Giardini typically begin at "]};
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__183645$$) : $APP.$helix$core$jsxs$$.call(null, "span", $G__183645$$);
        }(), function() {
          var $G__183649$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$value_currency$$), children:"$450,000 or more"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__183649$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__183649$$);
        }(), function() {
          var $G__183653$$ = {className:"text-red-300", children:[" in base rent alone—often closer to €450,000+—excluding construction, staffing, technical services, and operational expenses. ", "In this context, the Pavilion’s location offers extraordinary visibility and access at a fraction of the cost, positioning Armenia at the heart of the Biennale circuit while maintaining responsible stewardship of resources."]};
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__183653$$) : $APP.$helix$core$jsxs$$.call(null, "span", $G__183653$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__183637$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__183637$$);
    }(), function() {
      var $G__183657$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["mt-6 text-red-500 text-2xl"]))), children:"To realize an undertaking of this scale and international significance, an urgent fundraising program is greatly needed."};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__183657$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__183657$$);
    }(), function() {
      var $G__183661$$ = function() {
        return {className:"mt-6", children:[function() {
          var $G__183665$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-medium", "text-slate-900  dark:text-slate-100"]))), children:["At present we are starting with a small committee including members ", "Archbishop Hovnan Derderian, Tony Shafrazi, Tina Chakarian, Rafi Ourfalian, Khachik Khudikyan, ", "Andranik Torosyan, Aram Alajajian, and Vik Hovsepian, "]};
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__183665$$) : $APP.$helix$core$jsxs$$.call(null, "span", $G__183665$$);
        }(), function() {
          var $G__183669$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-bold", "text-rose-600   dark:text-rose-400"]))), children:"hopefully encouraging others more able to realize our goal."};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__183669$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__183669$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__183661$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__183661$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__183633_map__183630_props__41575__auto__$jscomp$49_vec__183627$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__183633_map__183630_props__41575__auto__$jscomp$49_vec__183627$$);
};
$amp$pages$budget$committee$committee_member_card$$ = function($G__183680_map__183678_map__183678__$1_props__41575__auto__$jscomp$50_vec__183675$$, $maybe_ref__41576__auto__$jscomp$50$$) {
  $G__183680_map__183678_map__183678__$1_props__41575__auto__$jscomp$50_vec__183675$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__183680_map__183678_map__183678__$1_props__41575__auto__$jscomp$50_vec__183675$$), $maybe_ref__41576__auto__$jscomp$50$$], null);
  $G__183680_map__183678_map__183678__$1_props__41575__auto__$jscomp$50_vec__183675$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__183680_map__183678_map__183678__$1_props__41575__auto__$jscomp$50_vec__183675$$, 0, null);
  $G__183680_map__183678_map__183678__$1_props__41575__auto__$jscomp$50_vec__183675$$ = $APP.$cljs$core$__destructure_map$$($G__183680_map__183678_map__183678__$1_props__41575__auto__$jscomp$50_vec__183675$$);
  var $name$jscomp$197$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__183680_map__183678_map__183678__$1_props__41575__auto__$jscomp$50_vec__183675$$, $APP.$cljs$cst$165$name$$), $role$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__183680_map__183678_map__183678__$1_props__41575__auto__$jscomp$50_vec__183675$$, $APP.$cljs$cst$791$role$$), $img_src$jscomp$5$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__183680_map__183678_map__183678__$1_props__41575__auto__$jscomp$50_vec__183675$$, 
  $APP.$cljs$cst$724$img_src$$);
  $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__183680_map__183678_map__183678__$1_props__41575__auto__$jscomp$50_vec__183675$$, $APP.$cljs$cst$707$credit$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $overlay_styles$$ = $APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-mono", "bg-white/70 px-1 text-slate-500"]));
  $G__183680_map__183678_map__183678__$1_props__41575__auto__$jscomp$50_vec__183675$$ = function() {
    return {className:"w-[150px] aspect-[0.7] relative ml-2", children:function() {
      var $G__183684$$ = function() {
        return {"img-src":$img_src$jscomp$5$$, fit:"crop", "aspect-ratio":0.7, "active?":!0, children:function() {
          var $G__183688$$ = function() {
            return {className:"", children:[function() {
              var $G__183692_G__183696$jscomp$inline_3742_JSCompiler_inline_result$jscomp$inline_3741$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["italic", "text-xs"]))), children:$name$jscomp$197$$};
              $G__183692_G__183696$jscomp$inline_3742_JSCompiler_inline_result$jscomp$inline_3741$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__183692_G__183696$jscomp$inline_3742_JSCompiler_inline_result$jscomp$inline_3741$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__183692_G__183696$jscomp$inline_3742_JSCompiler_inline_result$jscomp$inline_3741$$);
              $G__183692_G__183696$jscomp$inline_3742_JSCompiler_inline_result$jscomp$inline_3741$$ = {position:$APP.$cljs$cst$696$tl$$, rotation:90, "parent-styles":$overlay_styles$$, children:$G__183692_G__183696$jscomp$inline_3742_JSCompiler_inline_result$jscomp$inline_3741$$};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$ui$overlays$caption_overlay$$, $G__183692_G__183696$jscomp$inline_3742_JSCompiler_inline_result$jscomp$inline_3741$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$ui$overlays$caption_overlay$$, $G__183692_G__183696$jscomp$inline_3742_JSCompiler_inline_result$jscomp$inline_3741$$);
            }(), function() {
              var $G__183700_G__183704$jscomp$inline_3745_JSCompiler_inline_result$jscomp$inline_3744$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["italic", "text-xs"]))), children:$role$$};
              $G__183700_G__183704$jscomp$inline_3745_JSCompiler_inline_result$jscomp$inline_3744$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__183700_G__183704$jscomp$inline_3745_JSCompiler_inline_result$jscomp$inline_3744$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__183700_G__183704$jscomp$inline_3745_JSCompiler_inline_result$jscomp$inline_3744$$);
              $G__183700_G__183704$jscomp$inline_3745_JSCompiler_inline_result$jscomp$inline_3744$$ = {position:$APP.$cljs$cst$701$bl$$, "parent-styles":$overlay_styles$$, children:$G__183700_G__183704$jscomp$inline_3745_JSCompiler_inline_result$jscomp$inline_3744$$};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$ui$overlays$caption_overlay$$, $G__183700_G__183704$jscomp$inline_3745_JSCompiler_inline_result$jscomp$inline_3744$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$ui$overlays$caption_overlay$$, $G__183700_G__183704$jscomp$inline_3745_JSCompiler_inline_result$jscomp$inline_3744$$);
            }()]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__183688$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__183688$$);
        }()};
      }();
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$ui$image_overlay$lazy_image_with_overlay$$, $G__183684$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$ui$image_overlay$lazy_image_with_overlay$$, $G__183684$$);
    }()};
  }();
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__183680_map__183678_map__183678__$1_props__41575__auto__$jscomp$50_vec__183675$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__183680_map__183678_map__183678__$1_props__41575__auto__$jscomp$50_vec__183675$$);
};
$amp$pages$budget$committee$committee_gallery$$ = function($G__183715_map__183713_props__41575__auto__$jscomp$51_vec__183710$$, $maybe_ref__41576__auto__$jscomp$51$$) {
  $G__183715_map__183713_props__41575__auto__$jscomp$51_vec__183710$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__183715_map__183713_props__41575__auto__$jscomp$51_vec__183710$$), $maybe_ref__41576__auto__$jscomp$51$$], null);
  $G__183715_map__183713_props__41575__auto__$jscomp$51_vec__183710$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__183715_map__183713_props__41575__auto__$jscomp$51_vec__183710$$, 0, null);
  $APP.$cljs$core$__destructure_map$$($G__183715_map__183713_props__41575__auto__$jscomp$51_vec__183710$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__183715_map__183713_props__41575__auto__$jscomp$51_vec__183710$$ = function() {
    return {className:"p-4 w-full", children:function() {
      var $G__183719$$ = function() {
        return {children:[function() {
          var $G__183723_G__183727$jscomp$inline_3748$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$label_muted$$), children:"Committee Members"};
          $G__183723_G__183727$jscomp$inline_3748$$ = {className:"pl-4", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("h3", $G__183723_G__183727$jscomp$inline_3748$$) : $APP.$helix$core$jsx$$.call(null, "h3", $G__183723_G__183727$jscomp$inline_3748$$)};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__183723_G__183727$jscomp$inline_3748$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__183723_G__183727$jscomp$inline_3748$$);
        }(), function() {
          var $G__183731$$ = function() {
            return {className:"mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4", children:$APP.$cljs$core$map$$.$cljs$core$IFn$_invoke$arity$2$(function($name$jscomp$198_p__183734$$) {
              var $credit$jscomp$4_map__183735__$1$$ = $APP.$cljs$core$__destructure_map$$($name$jscomp$198_p__183734$$);
              $name$jscomp$198_p__183734$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($credit$jscomp$4_map__183735__$1$$, $APP.$cljs$cst$165$name$$);
              var $G__183737_G__183743$jscomp$inline_3751_JSCompiler_temp$jscomp$inline_3750_role$jscomp$1$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($credit$jscomp$4_map__183735__$1$$, $APP.$cljs$cst$791$role$$), $img_src$jscomp$6$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($credit$jscomp$4_map__183735__$1$$, $APP.$cljs$cst$724$img_src$$);
              $credit$jscomp$4_map__183735__$1$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($credit$jscomp$4_map__183735__$1$$, $APP.$cljs$cst$707$credit$$);
              $APP.$cljs$core$truth_$$($img_src$jscomp$6$$) ? ($G__183737_G__183743$jscomp$inline_3751_JSCompiler_temp$jscomp$inline_3750_role$jscomp$1$$ = {name:$name$jscomp$198_p__183734$$, role:$G__183737_G__183743$jscomp$inline_3751_JSCompiler_temp$jscomp$inline_3750_role$jscomp$1$$, "img-src":$img_src$jscomp$6$$, credit:$credit$jscomp$4_map__183735__$1$$}, $G__183737_G__183743$jscomp$inline_3751_JSCompiler_temp$jscomp$inline_3750_role$jscomp$1$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? 
              $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$pages$budget$committee$committee_member_card$$, $G__183737_G__183743$jscomp$inline_3751_JSCompiler_temp$jscomp$inline_3750_role$jscomp$1$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$budget$committee$committee_member_card$$, $G__183737_G__183743$jscomp$inline_3751_JSCompiler_temp$jscomp$inline_3750_role$jscomp$1$$)) : $G__183737_G__183743$jscomp$inline_3751_JSCompiler_temp$jscomp$inline_3750_role$jscomp$1$$ = null;
              $G__183737_G__183743$jscomp$inline_3751_JSCompiler_temp$jscomp$inline_3750_role$jscomp$1$$ = {children:$G__183737_G__183743$jscomp$inline_3751_JSCompiler_temp$jscomp$inline_3750_role$jscomp$1$$};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$("div", $G__183737_G__183743$jscomp$inline_3751_JSCompiler_temp$jscomp$inline_3750_role$jscomp$1$$, $name$jscomp$198_p__183734$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__183737_G__183743$jscomp$inline_3751_JSCompiler_temp$jscomp$inline_3750_role$jscomp$1$$, $name$jscomp$198_p__183734$$);
            }, $amp$pages$budget$committee$committee_members$$)};
          }();
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__183731$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__183731$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__183719$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__183719$$);
    }()};
  }();
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__183715_map__183713_props__41575__auto__$jscomp$51_vec__183710$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__183715_map__183713_props__41575__auto__$jscomp$51_vec__183710$$);
};
$amp$pages$budget$committee$committee$$ = function($G__183779_map__183777_map__183777__$1_props__41575__auto__$jscomp$52_vec__183774$$, $maybe_ref__41576__auto__$jscomp$52$$) {
  $G__183779_map__183777_map__183777__$1_props__41575__auto__$jscomp$52_vec__183774$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__183779_map__183777_map__183777__$1_props__41575__auto__$jscomp$52_vec__183774$$), $maybe_ref__41576__auto__$jscomp$52$$], null);
  $G__183779_map__183777_map__183777__$1_props__41575__auto__$jscomp$52_vec__183774$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__183779_map__183777_map__183777__$1_props__41575__auto__$jscomp$52_vec__183774$$, 0, null);
  $G__183779_map__183777_map__183777__$1_props__41575__auto__$jscomp$52_vec__183774$$ = $APP.$cljs$core$__destructure_map$$($G__183779_map__183777_map__183777__$1_props__41575__auto__$jscomp$52_vec__183774$$);
  var $id$jscomp$90$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__183779_map__183777_map__183777__$1_props__41575__auto__$jscomp$52_vec__183774$$, $APP.$cljs$cst$285$id$$), $subtitle$jscomp$2$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__183779_map__183777_map__183777__$1_props__41575__auto__$jscomp$52_vec__183774$$, $APP.$cljs$cst$771$subtitle$$), $title$jscomp$23$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__183779_map__183777_map__183777__$1_props__41575__auto__$jscomp$52_vec__183774$$, 
  $APP.$cljs$cst$287$title$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__183779_map__183777_map__183777__$1_props__41575__auto__$jscomp$52_vec__183774$$ = function() {
    return {id:$id$jscomp$90$$, className:"space-y-4", children:[function() {
      var $G__183783$$ = {idx:5, "section-hint":$subtitle$jscomp$2$$, title:$title$jscomp$23$$, "expand-button-label":"Read more", "preview-text":$amp$pages$budget$committee$preview$$, "full-text":$amp$pages$budget$committee$details$$};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$ui$expandable_text$expandable_text_area_2$$, $G__183783$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$ui$expandable_text$expandable_text_area_2$$, $G__183783$$);
    }(), function() {
      var $G__183787$$ = {children:$amp$pages$budget$committee$committee_members$$};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$pages$budget$committee$committee_gallery$$, $G__183787$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$budget$committee$committee_gallery$$, $G__183787$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("section", $G__183779_map__183777_map__183777__$1_props__41575__auto__$jscomp$52_vec__183774$$) : $APP.$helix$core$jsxs$$.call(null, "section", $G__183779_map__183777_map__183777__$1_props__41575__auto__$jscomp$52_vec__183774$$);
};
$amp$pages$budget$table$format_currency$$ = function($amount$$) {
  return "$" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$(Math.round($amount$$).toLocaleString("en-US"));
};
$amp$pages$budget$table$sub_total_all_sections$$ = function($cost_data$$) {
  return $APP.$cljs$core$reduce$cljs$0core$0IFn$0_invoke$0arity$02$$($APP.$cljs$core$_PLUS_$$, $APP.$cljs$core$map$$.$cljs$core$IFn$_invoke$arity$2$(function($p1__183960_SHARP__tax_rate$jscomp$inline_2191$$) {
    var $item_details$jscomp$inline_2189_sub_total$jscomp$inline_2190$$ = $cljs$cst$793$details$$.$cljs$core$IFn$_invoke$arity$1$($p1__183960_SHARP__tax_rate$jscomp$inline_2191$$);
    $item_details$jscomp$inline_2189_sub_total$jscomp$inline_2190$$ = $APP.$cljs$core$reduce$cljs$0core$0IFn$0_invoke$0arity$02$$($APP.$cljs$core$_PLUS_$$, $APP.$cljs$core$map$$.$cljs$core$IFn$_invoke$arity$2$($cljs$cst$792$amount$$, $item_details$jscomp$inline_2189_sub_total$jscomp$inline_2190$$));
    $p1__183960_SHARP__tax_rate$jscomp$inline_2191$$ = $cljs$cst$794$rate$$.$cljs$core$IFn$_invoke$arity$1$($cljs$cst$795$tax$$.$cljs$core$IFn$_invoke$arity$1$($p1__183960_SHARP__tax_rate$jscomp$inline_2191$$));
    return ($p1__183960_SHARP__tax_rate$jscomp$inline_2191$$ > 0 ? $p1__183960_SHARP__tax_rate$jscomp$inline_2191$$ * $item_details$jscomp$inline_2189_sub_total$jscomp$inline_2190$$ : 0) + $item_details$jscomp$inline_2189_sub_total$jscomp$inline_2190$$;
  }, $cost_data$$));
};
$amp$pages$budget$table$total_section$$ = function($G__184022_cost_data$jscomp$1_map__184018_map__184018__$1_props__41575__auto__$jscomp$53_vec__184015$$, $maybe_ref__41576__auto__$jscomp$53$$) {
  $G__184022_cost_data$jscomp$1_map__184018_map__184018__$1_props__41575__auto__$jscomp$53_vec__184015$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__184022_cost_data$jscomp$1_map__184018_map__184018__$1_props__41575__auto__$jscomp$53_vec__184015$$), $maybe_ref__41576__auto__$jscomp$53$$], null);
  $G__184022_cost_data$jscomp$1_map__184018_map__184018__$1_props__41575__auto__$jscomp$53_vec__184015$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__184022_cost_data$jscomp$1_map__184018_map__184018__$1_props__41575__auto__$jscomp$53_vec__184015$$, 0, null);
  $G__184022_cost_data$jscomp$1_map__184018_map__184018__$1_props__41575__auto__$jscomp$53_vec__184015$$ = $APP.$cljs$core$__destructure_map$$($G__184022_cost_data$jscomp$1_map__184018_map__184018__$1_props__41575__auto__$jscomp$53_vec__184015$$);
  $G__184022_cost_data$jscomp$1_map__184018_map__184018__$1_props__41575__auto__$jscomp$53_vec__184015$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__184022_cost_data$jscomp$1_map__184018_map__184018__$1_props__41575__auto__$jscomp$53_vec__184015$$, $cljs$cst$796$cost_data$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $sub_total$jscomp$1$$ = $amp$pages$budget$table$sub_total_all_sections$$($G__184022_cost_data$jscomp$1_map__184018_map__184018__$1_props__41575__auto__$jscomp$53_vec__184015$$), $grand_total$$ = $sub_total$jscomp$1$$ + 66821;
  $G__184022_cost_data$jscomp$1_map__184018_map__184018__$1_props__41575__auto__$jscomp$53_vec__184015$$ = function() {
    return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["flex flex-col", "font-mono"]))), children:[function() {
      var $G__184026$$ = function() {
        return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["bg-white        dark:bg-slate-900", "text-slate-900  dark:text-slate-100", "flex items-baseline px-4 py-2 border-t-2", "border-pink-500/70 dark:border-pink-500/70"]))), children:[function() {
          var $G__184034$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["text-sm", "uppercase", "tracking-wider", "text-slate-600  dark:text-slate-400", "flex-1 min-w-0"]))), children:"Sub total"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("h3", $G__184034$$) : $APP.$helix$core$jsx$$.call(null, "h3", $G__184034$$);
        }(), function() {
          var $G__184040_G__184046$jscomp$inline_3754$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-semibold", "text-slate-700  dark:text-slate-300"]))), children:$amp$pages$budget$table$format_currency$$($sub_total$jscomp$1$$)};
          $G__184040_G__184046$jscomp$inline_3754$$ = {className:"flex items-baseline justify-end shrink-0 ml-2", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__184040_G__184046$jscomp$inline_3754$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__184040_G__184046$jscomp$inline_3754$$)};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__184040_G__184046$jscomp$inline_3754$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__184040_G__184046$jscomp$inline_3754$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("li", $G__184026$$) : $APP.$helix$core$jsxs$$.call(null, "li", $G__184026$$);
    }(), function() {
      var $G__184052$$ = function() {
        return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["bg-slate-100/60 dark:bg-slate-800/60", "text-slate-900  dark:text-slate-100", "flex items-baseline px-4 py-2"]))), children:[function() {
          var $G__184058$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["text-sm", "uppercase", "tracking-wider", "text-slate-600  dark:text-slate-400", "flex-1 min-w-0"]))), children:"Contingency 5%"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("h3", $G__184058$$) : $APP.$helix$core$jsx$$.call(null, "h3", $G__184058$$);
        }(), function() {
          var $G__184062_G__184066$jscomp$inline_3757$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-semibold", "text-slate-700  dark:text-slate-300"]))), children:$amp$pages$budget$table$format_currency$$(66821)};
          $G__184062_G__184066$jscomp$inline_3757$$ = {className:"flex items-baseline justify-end shrink-0 ml-2", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__184062_G__184066$jscomp$inline_3757$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__184062_G__184066$jscomp$inline_3757$$)};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__184062_G__184066$jscomp$inline_3757$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__184062_G__184066$jscomp$inline_3757$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("li", $G__184052$$) : $APP.$helix$core$jsxs$$.call(null, "li", $G__184052$$);
    }(), function() {
      var $G__184075$$ = function() {
        return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["bg-white        dark:bg-slate-900", "text-slate-900  dark:text-slate-100", "flex items-baseline px-4 py-4 border-t border-pink-500/40"]))), children:[function() {
          var $G__184083$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-bold", "text-lg", "uppercase", "tracking-wider", "flex-1 min-w-0"]))), children:"TOTAL"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("h3", $G__184083$$) : $APP.$helix$core$jsx$$.call(null, "h3", $G__184083$$);
        }(), function() {
          var $G__184089_G__184101$jscomp$inline_3760$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$value_lg$$), children:$amp$pages$budget$table$format_currency$$($grand_total$$)};
          $G__184089_G__184101$jscomp$inline_3760$$ = {className:"flex items-baseline justify-end shrink-0 ml-2", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__184089_G__184101$jscomp$inline_3760$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__184089_G__184101$jscomp$inline_3760$$)};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__184089_G__184101$jscomp$inline_3760$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__184089_G__184101$jscomp$inline_3760$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("li", $G__184075$$) : $APP.$helix$core$jsxs$$.call(null, "li", $G__184075$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__184022_cost_data$jscomp$1_map__184018_map__184018__$1_props__41575__auto__$jscomp$53_vec__184015$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__184022_cost_data$jscomp$1_map__184018_map__184018__$1_props__41575__auto__$jscomp$53_vec__184015$$);
};
$amp$pages$budget$table$pad_two_digits$$ = function($n$jscomp$225$$) {
  return $n$jscomp$225$$ < 10 ? "0" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($n$jscomp$225$$) : "" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($n$jscomp$225$$);
};
$amp$pages$budget$table$detail_line_item$$ = function($G__184146_G__184201_map__184144_map__184144__$1_props__41575__auto__$jscomp$54_vec__184141$$, $maybe_ref__41576__auto__$jscomp$54$$) {
  $G__184146_G__184201_map__184144_map__184144__$1_props__41575__auto__$jscomp$54_vec__184141$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__184146_G__184201_map__184144_map__184144__$1_props__41575__auto__$jscomp$54_vec__184141$$), $maybe_ref__41576__auto__$jscomp$54$$], null);
  $G__184146_G__184201_map__184144_map__184144__$1_props__41575__auto__$jscomp$54_vec__184141$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__184146_G__184201_map__184144_map__184144__$1_props__41575__auto__$jscomp$54_vec__184141$$, 0, null);
  $G__184146_G__184201_map__184144_map__184144__$1_props__41575__auto__$jscomp$54_vec__184141$$ = $APP.$cljs$core$__destructure_map$$($G__184146_G__184201_map__184144_map__184144__$1_props__41575__auto__$jscomp$54_vec__184141$$);
  var $idx$jscomp$70$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__184146_G__184201_map__184144_map__184144__$1_props__41575__auto__$jscomp$54_vec__184141$$, $APP.$cljs$cst$758$idx$$), $detail$jscomp$7$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__184146_G__184201_map__184144_map__184144__$1_props__41575__auto__$jscomp$54_vec__184141$$, $APP.$cljs$cst$625$detail$$), $set_expanded_items$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__184146_G__184201_map__184144_map__184144__$1_props__41575__auto__$jscomp$54_vec__184141$$, 
  $cljs$cst$797$set_expanded_items$$), $expanded_items$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__184146_G__184201_map__184144_map__184144__$1_props__41575__auto__$jscomp$54_vec__184141$$, $cljs$cst$798$expanded_items$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $item_id$$ = "detail-item-" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($idx$jscomp$70$$), $description$jscomp$4$$ = $cljs$cst$799$description$$.$cljs$core$IFn$_invoke$arity$1$($detail$jscomp$7$$), $is_odd_detail_QMARK_$$ = !$APP.$cljs$core$even_QMARK_$$($idx$jscomp$70$$);
  if ($APP.$cljs$core$truth_$$($description$jscomp$4$$)) {
    return $G__184146_G__184201_map__184144_map__184144__$1_props__41575__auto__$jscomp$54_vec__184141$$ = function() {
      return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["cursor-pointer overflow-hidden", "font-mono", $is_odd_detail_QMARK_$$ ? "bg-slate-100/60 dark:bg-slate-800/60" : null]))), onClick:function() {
        function $G__184149$$($prev$jscomp$11$$) {
          return $APP.$cljs$core$truth_$$($prev$jscomp$11$$.$cljs$core$IFn$_invoke$arity$1$ ? $prev$jscomp$11$$.$cljs$core$IFn$_invoke$arity$1$($item_id$$) : $prev$jscomp$11$$.call(null, $item_id$$)) ? $APP.$cljs$core$disj$$.$cljs$core$IFn$_invoke$arity$2$($prev$jscomp$11$$, $item_id$$) : $APP.$cljs$core$conj$$.$cljs$core$IFn$_invoke$arity$2$($prev$jscomp$11$$, $item_id$$);
        }
        return $set_expanded_items$$.$cljs$core$IFn$_invoke$arity$1$ ? $set_expanded_items$$.$cljs$core$IFn$_invoke$arity$1$($G__184149$$) : $set_expanded_items$$.call(null, $G__184149$$);
      }, children:[function() {
        var $G__184151$$ = function() {
          return {className:"px-8 py-2 flex justify-between items-center", children:[function() {
            var $G__184155$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["text-[11px]", "text-slate-400  dark:text-slate-600", "mr-4"]))), children:"" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($amp$pages$budget$table$pad_two_digits$$($idx$jscomp$70$$ + 1)) + "."};
            return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__184155$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__184155$$);
          }(), function() {
            var $G__184159_JSCompiler_temp_const$jscomp$inline_3969$$ = $APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["justify-start flex-1 flex items-center", "text-sm", "text-slate-700  dark:text-slate-300"])));
            var $JSCompiler_temp_const$jscomp$inline_3970$$ = $APP.$cljs$cst$287$title$$.$cljs$core$IFn$_invoke$arity$1$($detail$jscomp$7$$);
            var $G__184163$jscomp$inline_3972_JSCompiler_inline_result$jscomp$inline_3971_JSCompiler_temp_const$jscomp$inline_3973$$ = $APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["w-4 h-4 ml-2", "text-slate-400  dark:text-slate-600"])));
            var $G__184168$jscomp$inline_3975_JSCompiler_inline_result$jscomp$inline_3974$$ = {};
            $G__184168$jscomp$inline_3975_JSCompiler_inline_result$jscomp$inline_3974$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$ui$icons$InformationCircle$$, $G__184168$jscomp$inline_3975_JSCompiler_inline_result$jscomp$inline_3974$$) : $APP.$helix$core$jsx$$.call(null, $amp$ui$icons$InformationCircle$$, $G__184168$jscomp$inline_3975_JSCompiler_inline_result$jscomp$inline_3974$$);
            $G__184163$jscomp$inline_3972_JSCompiler_inline_result$jscomp$inline_3971_JSCompiler_temp_const$jscomp$inline_3973$$ = {className:$G__184163$jscomp$inline_3972_JSCompiler_inline_result$jscomp$inline_3971_JSCompiler_temp_const$jscomp$inline_3973$$, children:$G__184168$jscomp$inline_3975_JSCompiler_inline_result$jscomp$inline_3974$$};
            $G__184163$jscomp$inline_3972_JSCompiler_inline_result$jscomp$inline_3971_JSCompiler_temp_const$jscomp$inline_3973$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__184163$jscomp$inline_3972_JSCompiler_inline_result$jscomp$inline_3971_JSCompiler_temp_const$jscomp$inline_3973$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__184163$jscomp$inline_3972_JSCompiler_inline_result$jscomp$inline_3971_JSCompiler_temp_const$jscomp$inline_3973$$);
            $G__184159_JSCompiler_temp_const$jscomp$inline_3969$$ = {className:$G__184159_JSCompiler_temp_const$jscomp$inline_3969$$, children:[$JSCompiler_temp_const$jscomp$inline_3970$$, $G__184163$jscomp$inline_3972_JSCompiler_inline_result$jscomp$inline_3971_JSCompiler_temp_const$jscomp$inline_3973$$]};
            return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__184159_JSCompiler_temp_const$jscomp$inline_3969$$) : $APP.$helix$core$jsxs$$.call(null, "span", $G__184159_JSCompiler_temp_const$jscomp$inline_3969$$);
          }(), function() {
            var $G__184170$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$value_sm$$), children:$amp$pages$budget$table$format_currency$$($cljs$cst$792$amount$$.$cljs$core$IFn$_invoke$arity$1$($detail$jscomp$7$$))};
            return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__184170$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__184170$$);
          }()]};
        }();
        return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__184151$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__184151$$);
      }(), $APP.$cljs$core$truth_$$($expanded_items$$.$cljs$core$IFn$_invoke$arity$1$ ? $expanded_items$$.$cljs$core$IFn$_invoke$arity$1$($item_id$$) : $expanded_items$$.call(null, $item_id$$)) ? function() {
        var $G__184174_G__184179$jscomp$inline_4069_G__184184$jscomp$inline_4070_JSCompiler_temp_const$jscomp$inline_4071$$ = $APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_sm$$, "bg-slate-100/60 dark:bg-slate-800/60"])));
        var $G__184188$jscomp$inline_4073_JSCompiler_inline_result$jscomp$inline_4072$$ = {className:"px-6 py-4", children:$description$jscomp$4$$};
        $G__184188$jscomp$inline_4073_JSCompiler_inline_result$jscomp$inline_4072$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__184188$jscomp$inline_4073_JSCompiler_inline_result$jscomp$inline_4072$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__184188$jscomp$inline_4073_JSCompiler_inline_result$jscomp$inline_4072$$);
        $G__184174_G__184179$jscomp$inline_4069_G__184184$jscomp$inline_4070_JSCompiler_temp_const$jscomp$inline_4071$$ = {className:$G__184174_G__184179$jscomp$inline_4069_G__184184$jscomp$inline_4070_JSCompiler_temp_const$jscomp$inline_4071$$, children:$G__184188$jscomp$inline_4073_JSCompiler_inline_result$jscomp$inline_4072$$};
        $G__184174_G__184179$jscomp$inline_4069_G__184184$jscomp$inline_4070_JSCompiler_temp_const$jscomp$inline_4071$$ = {className:"", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__184174_G__184179$jscomp$inline_4069_G__184184$jscomp$inline_4070_JSCompiler_temp_const$jscomp$inline_4071$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__184174_G__184179$jscomp$inline_4069_G__184184$jscomp$inline_4070_JSCompiler_temp_const$jscomp$inline_4071$$)};
        $G__184174_G__184179$jscomp$inline_4069_G__184184$jscomp$inline_4070_JSCompiler_temp_const$jscomp$inline_4071$$ = {className:"border-l-2 border-pink-500/30", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__184174_G__184179$jscomp$inline_4069_G__184184$jscomp$inline_4070_JSCompiler_temp_const$jscomp$inline_4071$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__184174_G__184179$jscomp$inline_4069_G__184184$jscomp$inline_4070_JSCompiler_temp_const$jscomp$inline_4071$$)};
        return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__184174_G__184179$jscomp$inline_4069_G__184184$jscomp$inline_4070_JSCompiler_temp_const$jscomp$inline_4071$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__184174_G__184179$jscomp$inline_4069_G__184184$jscomp$inline_4070_JSCompiler_temp_const$jscomp$inline_4071$$);
      }() : null]};
    }(), $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("li", $G__184146_G__184201_map__184144_map__184144__$1_props__41575__auto__$jscomp$54_vec__184141$$) : $APP.$helix$core$jsxs$$.call(null, "li", $G__184146_G__184201_map__184144_map__184144__$1_props__41575__auto__$jscomp$54_vec__184141$$);
  }
  $G__184146_G__184201_map__184144_map__184144__$1_props__41575__auto__$jscomp$54_vec__184141$$ = function() {
    return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-mono", $is_odd_detail_QMARK_$$ ? "bg-slate-100/60 dark:bg-slate-800/60" : null]))), children:function() {
      var $G__184209$$ = function() {
        return {className:"px-8 py-2 flex justify-between items-center", children:[function() {
          var $G__184215$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["text-[11px]", "text-slate-400  dark:text-slate-600", "mr-4"]))), children:"" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($amp$pages$budget$table$pad_two_digits$$($idx$jscomp$70$$ + 1)) + "."};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__184215$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__184215$$);
        }(), function() {
          var $G__184227$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["justify-start flex-1", "text-sm", "text-slate-700  dark:text-slate-300"]))), children:$APP.$cljs$cst$287$title$$.$cljs$core$IFn$_invoke$arity$1$($detail$jscomp$7$$)};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__184227$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__184227$$);
        }(), function() {
          var $G__184235$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$value_sm$$), children:$amp$pages$budget$table$format_currency$$($cljs$cst$792$amount$$.$cljs$core$IFn$_invoke$arity$1$($detail$jscomp$7$$))};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__184235$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__184235$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__184209$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__184209$$);
    }()};
  }();
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("li", $G__184146_G__184201_map__184144_map__184144__$1_props__41575__auto__$jscomp$54_vec__184141$$) : $APP.$helix$core$jsx$$.call(null, "li", $G__184146_G__184201_map__184144_map__184144__$1_props__41575__auto__$jscomp$54_vec__184141$$);
};
$amp$pages$budget$table$details__GT_render_items$$ = function($G__184997_details$jscomp$4$$) {
  for (var $G__184996_items$jscomp$8$$ = $G__184997_details$jscomp$4$$, $idx$jscomp$71$$ = 0, $prev_group$$ = null, $result$jscomp$135$$ = $APP.$cljs$core$PersistentVector$EMPTY$$;;) {
    if ($APP.$cljs$core$empty_QMARK_$$($G__184996_items$jscomp$8$$)) {
      return $result$jscomp$135$$;
    }
    var $detail$jscomp$8$$ = $APP.$cljs$core$first$$($G__184996_items$jscomp$8$$), $curr_group$$ = $APP.$cljs$cst$578$group$$.$cljs$core$IFn$_invoke$arity$1$($detail$jscomp$8$$), $show_header_QMARK_$$ = function() {
      var $and__5140__auto__$jscomp$87$$ = $curr_group$$;
      return $APP.$cljs$core$truth_$$($and__5140__auto__$jscomp$87$$) ? $APP.$cljs$core$not_EQ_$cljs$0core$0IFn$0_invoke$0arity$02$$($curr_group$$, $prev_group$$) : $and__5140__auto__$jscomp$87$$;
    }();
    $G__184996_items$jscomp$8$$ = $APP.$cljs$core$rest$$($G__184996_items$jscomp$8$$);
    $G__184997_details$jscomp$4$$ = $idx$jscomp$71$$ + 1;
    var $G__184998$$ = $curr_group$$, $G__184999$$ = function() {
      var $G__184242_G__184242__$1$$ = $result$jscomp$135$$;
      $G__184242_G__184242__$1$$ = $APP.$cljs$core$truth_$$($show_header_QMARK_$$) ? $APP.$cljs$core$conj$$.$cljs$core$IFn$_invoke$arity$2$($G__184242_G__184242__$1$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$25$type$$, $APP.$cljs$cst$238$header$$, $APP.$cljs$cst$408$label$$, $curr_group$$, $APP.$cljs$cst$99$key$$, "gh-" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($idx$jscomp$71$$)], null)) : $G__184242_G__184242__$1$$;
      return $APP.$cljs$core$conj$$.$cljs$core$IFn$_invoke$arity$2$($G__184242_G__184242__$1$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$25$type$$, $APP.$cljs$cst$625$detail$$, $APP.$cljs$cst$625$detail$$, $detail$jscomp$8$$, $APP.$cljs$cst$758$idx$$, $idx$jscomp$71$$, $APP.$cljs$cst$99$key$$, "d-" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($idx$jscomp$71$$)], null));
    }();
    $idx$jscomp$71$$ = $G__184997_details$jscomp$4$$;
    $prev_group$$ = $G__184998$$;
    $result$jscomp$135$$ = $G__184999$$;
  }
};
$amp$pages$budget$table$section_line_item$$ = function($G__184338_details$jscomp$5_map__184306_map__184306__$1_props__41575__auto__$jscomp$55_vec__184303$$, $maybe_ref__41576__auto__$jscomp$55_tax_rate$jscomp$1$$) {
  $G__184338_details$jscomp$5_map__184306_map__184306__$1_props__41575__auto__$jscomp$55_vec__184303$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__184338_details$jscomp$5_map__184306_map__184306__$1_props__41575__auto__$jscomp$55_vec__184303$$), $maybe_ref__41576__auto__$jscomp$55_tax_rate$jscomp$1$$], null);
  $G__184338_details$jscomp$5_map__184306_map__184306__$1_props__41575__auto__$jscomp$55_vec__184303$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__184338_details$jscomp$5_map__184306_map__184306__$1_props__41575__auto__$jscomp$55_vec__184303$$, 0, null);
  $G__184338_details$jscomp$5_map__184306_map__184306__$1_props__41575__auto__$jscomp$55_vec__184303$$ = $APP.$cljs$core$__destructure_map$$($G__184338_details$jscomp$5_map__184306_map__184306__$1_props__41575__auto__$jscomp$55_vec__184303$$);
  var $idx$jscomp$72$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__184338_details$jscomp$5_map__184306_map__184306__$1_props__41575__auto__$jscomp$55_vec__184303$$, $APP.$cljs$cst$758$idx$$), $item$jscomp$38$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__184338_details$jscomp$5_map__184306_map__184306__$1_props__41575__auto__$jscomp$55_vec__184303$$, $cljs$cst$800$item$$), $set_expanded_items$jscomp$1$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__184338_details$jscomp$5_map__184306_map__184306__$1_props__41575__auto__$jscomp$55_vec__184303$$, 
  $cljs$cst$797$set_expanded_items$$), $expanded_items$jscomp$1$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__184338_details$jscomp$5_map__184306_map__184306__$1_props__41575__auto__$jscomp$55_vec__184303$$, $cljs$cst$798$expanded_items$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $section_ref$$ = $APP.$helix$hooks$use_ref$$("section-" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($idx$jscomp$72$$)), $scroll_to_ref$$ = $amp$hooks$use_scroll_to$use_scroll_to_ref$$(), $item_id$jscomp$1$$ = "item-" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($idx$jscomp$72$$);
  $G__184338_details$jscomp$5_map__184306_map__184306__$1_props__41575__auto__$jscomp$55_vec__184303$$ = $cljs$cst$793$details$$.$cljs$core$IFn$_invoke$arity$1$($item$jscomp$38$$);
  var $sub_total$jscomp$2$$ = $APP.$cljs$core$reduce$cljs$0core$0IFn$0_invoke$0arity$02$$($APP.$cljs$core$_PLUS_$$, $APP.$cljs$core$map$$.$cljs$core$IFn$_invoke$arity$2$($cljs$cst$792$amount$$, $G__184338_details$jscomp$5_map__184306_map__184306__$1_props__41575__auto__$jscomp$55_vec__184303$$));
  $maybe_ref__41576__auto__$jscomp$55_tax_rate$jscomp$1$$ = $cljs$cst$794$rate$$.$cljs$core$IFn$_invoke$arity$1$($cljs$cst$795$tax$$.$cljs$core$IFn$_invoke$arity$1$($item$jscomp$38$$));
  var $tax_label$$ = $APP.$cljs$cst$408$label$$.$cljs$core$IFn$_invoke$arity$1$($cljs$cst$795$tax$$.$cljs$core$IFn$_invoke$arity$1$($item$jscomp$38$$)), $tax_total$jscomp$1$$ = $sub_total$jscomp$2$$ * $maybe_ref__41576__auto__$jscomp$55_tax_rate$jscomp$1$$, $has_tax_QMARK_$jscomp$1$$ = $maybe_ref__41576__auto__$jscomp$55_tax_rate$jscomp$1$$ > 0, $total$jscomp$4$$ = $sub_total$jscomp$2$$ + $tax_total$jscomp$1$$, $is_odd$$ = !$APP.$cljs$core$even_QMARK_$$($idx$jscomp$72$$), $render_items$$ = $amp$pages$budget$table$details__GT_render_items$$($G__184338_details$jscomp$5_map__184306_map__184306__$1_props__41575__auto__$jscomp$55_vec__184303$$);
  $G__184338_details$jscomp$5_map__184306_map__184306__$1_props__41575__auto__$jscomp$55_vec__184303$$ = function() {
    return {ref:$section_ref$$, className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["overflow-hidden", "font-mono", $is_odd$$ ? "bg-white        dark:bg-slate-900" : "bg-slate-100/60 dark:bg-slate-800/60"]))), children:[function() {
      var $G__184352$$ = function() {
        return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["flex flex-wrap items-baseline px-4 py-3 gap-y-1 cursor-pointer transition-colors", "hover:bg-slate-800/50 dark:hover:bg-slate-800/50"]))), onClick:function() {
          function $G__184357$$($prev$jscomp$12$$) {
            return $APP.$cljs$core$truth_$$($prev$jscomp$12$$.$cljs$core$IFn$_invoke$arity$1$ ? $prev$jscomp$12$$.$cljs$core$IFn$_invoke$arity$1$($item_id$jscomp$1$$) : $prev$jscomp$12$$.call(null, $item_id$jscomp$1$$)) ? $APP.$cljs$core$disj$$.$cljs$core$IFn$_invoke$arity$2$($prev$jscomp$12$$, $item_id$jscomp$1$$) : $APP.$cljs$core$conj$$.$cljs$core$IFn$_invoke$arity$2$($prev$jscomp$12$$, $item_id$jscomp$1$$);
          }
          return $set_expanded_items$jscomp$1$$.$cljs$core$IFn$_invoke$arity$1$ ? $set_expanded_items$jscomp$1$$.$cljs$core$IFn$_invoke$arity$1$($G__184357$$) : $set_expanded_items$jscomp$1$$.call(null, $G__184357$$);
        }, children:[function() {
          var $G__184415$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$("font-display;font-semibold;uppercase;tracking-wide;text-slate-700  dark:text-slate-300;text-base sm:text-lg flex-1 min-w-0".split(";")))), children:"" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($idx$jscomp$72$$ + 1) + ". " + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($APP.$cljs$cst$287$title$$.$cljs$core$IFn$_invoke$arity$1$($item$jscomp$38$$))};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("h3", $G__184415$$) : $APP.$helix$core$jsx$$.call(null, "h3", $G__184415$$);
        }(), function() {
          var $G__184427$$ = function() {
            return {className:"flex items-baseline justify-end shrink-0 ml-2", children:[function() {
              var $G__184433$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-semibold", "text-indigo-600 dark:text-indigo-300", "text-sm", "sm:text-base"]))), children:$amp$pages$budget$table$format_currency$$($total$jscomp$4$$)};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__184433$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__184433$$);
            }(), function() {
              var $G__184443_JSCompiler_temp_const$jscomp$inline_3370$$ = $APP.$helix$impl$props$normalize_class$$("w-4 h-4 ml-3 transition-transform " + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$("text-slate-500  dark:text-slate-500") + " " + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($APP.$cljs$core$truth_$$($expanded_items$jscomp$1$$.$cljs$core$IFn$_invoke$arity$1$ ? $expanded_items$jscomp$1$$.$cljs$core$IFn$_invoke$arity$1$($item_id$jscomp$1$$) : $expanded_items$jscomp$1$$.call(null, 
              $item_id$jscomp$1$$)) ? "rotate-90" : null));
              var $G__184455$jscomp$inline_3372_JSCompiler_inline_result$jscomp$inline_3371$$ = {};
              $G__184455$jscomp$inline_3372_JSCompiler_inline_result$jscomp$inline_3371$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$ui$icons$ChevronRightIcon$$, $G__184455$jscomp$inline_3372_JSCompiler_inline_result$jscomp$inline_3371$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$ui$icons$ChevronRightIcon$$, $G__184455$jscomp$inline_3372_JSCompiler_inline_result$jscomp$inline_3371$$);
              $G__184443_JSCompiler_temp_const$jscomp$inline_3370$$ = {className:$G__184443_JSCompiler_temp_const$jscomp$inline_3370$$, children:$G__184455$jscomp$inline_3372_JSCompiler_inline_result$jscomp$inline_3371$$};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__184443_JSCompiler_temp_const$jscomp$inline_3370$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__184443_JSCompiler_temp_const$jscomp$inline_3370$$);
            }()]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__184427$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__184427$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__184352$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__184352$$);
    }(), $APP.$cljs$core$truth_$$($expanded_items$jscomp$1$$.$cljs$core$IFn$_invoke$arity$1$ ? $expanded_items$jscomp$1$$.$cljs$core$IFn$_invoke$arity$1$($item_id$jscomp$1$$) : $expanded_items$jscomp$1$$.call(null, $item_id$jscomp$1$$)) ? function() {
      var $G__184463$$ = function() {
        return {className:"border-l-2 border-pink-500/30", children:[function() {
          var $G__184469_JSCompiler_temp_const$jscomp$inline_3771$$ = $APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_sm$$, "bg-slate-100/60 dark:bg-slate-800/60"])));
          var $G__184475$jscomp$inline_3773_JSCompiler_inline_result$jscomp$inline_3772$$ = {className:"px-8 py-4", children:$cljs$cst$799$description$$.$cljs$core$IFn$_invoke$arity$1$($item$jscomp$38$$)};
          $G__184475$jscomp$inline_3773_JSCompiler_inline_result$jscomp$inline_3772$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__184475$jscomp$inline_3773_JSCompiler_inline_result$jscomp$inline_3772$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__184475$jscomp$inline_3773_JSCompiler_inline_result$jscomp$inline_3772$$);
          $G__184469_JSCompiler_temp_const$jscomp$inline_3771$$ = {className:$G__184469_JSCompiler_temp_const$jscomp$inline_3771$$, children:$G__184475$jscomp$inline_3773_JSCompiler_inline_result$jscomp$inline_3772$$};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__184469_JSCompiler_temp_const$jscomp$inline_3771$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__184469_JSCompiler_temp_const$jscomp$inline_3771$$);
        }(), function() {
          var $G__184479$$ = function() {
            return {children:$APP.$cljs$core$map$$.$cljs$core$IFn$_invoke$arity$2$(function($G__184486_G__184503_ri$$) {
              var $G__184482_G__184482__$1_G__184485_G__184502_JSCompiler_temp_const$jscomp$inline_3775$$ = $APP.$cljs$cst$25$type$$.$cljs$core$IFn$_invoke$arity$1$($G__184486_G__184503_ri$$);
              $G__184482_G__184482__$1_G__184485_G__184502_JSCompiler_temp_const$jscomp$inline_3775$$ = $G__184482_G__184482__$1_G__184485_G__184502_JSCompiler_temp_const$jscomp$inline_3775$$ instanceof $APP.$cljs$core$Keyword$$ ? $G__184482_G__184482__$1_G__184485_G__184502_JSCompiler_temp_const$jscomp$inline_3775$$.$fqn$ : null;
              switch($G__184482_G__184482__$1_G__184485_G__184502_JSCompiler_temp_const$jscomp$inline_3775$$) {
                case "header":
                  $G__184482_G__184482__$1_G__184485_G__184502_JSCompiler_temp_const$jscomp$inline_3775$$ = $APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$("px-8 py-2 border-b border-slate-700/40;bg-white        dark:bg-slate-900;text-pink-700/50 dark:text-pink-300/50;text-sm sm:text-base;font-semibold;uppercase;tracking-[0.15em]".split(";"))));
                  var $G__184490$jscomp$inline_3777_JSCompiler_inline_result$jscomp$inline_3776$$ = {children:$APP.$cljs$cst$408$label$$.$cljs$core$IFn$_invoke$arity$1$($G__184486_G__184503_ri$$)};
                  $G__184490$jscomp$inline_3777_JSCompiler_inline_result$jscomp$inline_3776$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__184490$jscomp$inline_3777_JSCompiler_inline_result$jscomp$inline_3776$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__184490$jscomp$inline_3777_JSCompiler_inline_result$jscomp$inline_3776$$);
                  $G__184482_G__184482__$1_G__184485_G__184502_JSCompiler_temp_const$jscomp$inline_3775$$ = {className:$G__184482_G__184482__$1_G__184485_G__184502_JSCompiler_temp_const$jscomp$inline_3775$$, children:$G__184490$jscomp$inline_3777_JSCompiler_inline_result$jscomp$inline_3776$$};
                  $G__184486_G__184503_ri$$ = $APP.$cljs$cst$99$key$$.$cljs$core$IFn$_invoke$arity$1$($G__184486_G__184503_ri$$);
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$("div", $G__184482_G__184482__$1_G__184485_G__184502_JSCompiler_temp_const$jscomp$inline_3775$$, $G__184486_G__184503_ri$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__184482_G__184482__$1_G__184485_G__184502_JSCompiler_temp_const$jscomp$inline_3775$$, $G__184486_G__184503_ri$$);
                case "detail":
                  return $G__184482_G__184482__$1_G__184485_G__184502_JSCompiler_temp_const$jscomp$inline_3775$$ = {idx:$APP.$cljs$cst$758$idx$$.$cljs$core$IFn$_invoke$arity$1$($G__184486_G__184503_ri$$), detail:$APP.$cljs$cst$625$detail$$.$cljs$core$IFn$_invoke$arity$1$($G__184486_G__184503_ri$$), "set-expanded-items":$set_expanded_items$jscomp$1$$, "expanded-items":$expanded_items$jscomp$1$$}, $G__184486_G__184503_ri$$ = $APP.$cljs$cst$99$key$$.$cljs$core$IFn$_invoke$arity$1$($G__184486_G__184503_ri$$), 
                  $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$($amp$pages$budget$table$detail_line_item$$, $G__184482_G__184482__$1_G__184485_G__184502_JSCompiler_temp_const$jscomp$inline_3775$$, $G__184486_G__184503_ri$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$budget$table$detail_line_item$$, $G__184482_G__184482__$1_G__184485_G__184502_JSCompiler_temp_const$jscomp$inline_3775$$, $G__184486_G__184503_ri$$);
                default:
                  throw Error("No matching clause: " + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($G__184482_G__184482__$1_G__184485_G__184502_JSCompiler_temp_const$jscomp$inline_3775$$));
              }
            }, $render_items$$)};
          }();
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("ol", $G__184479$$) : $APP.$helix$core$jsx$$.call(null, "ol", $G__184479$$);
        }(), function() {
          var $G__184521$$ = function() {
            return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["bg-white        dark:bg-slate-900", "flex flex-col border-t border-slate-200 dark:border-slate-800"]))), children:[$has_tax_QMARK_$jscomp$1$$ ? function() {
              var $G__184528$$ = function() {
                return {children:[function() {
                  var $G__184538$$ = function() {
                    return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-semibold", "text-sm", "px-8 py-2 flex"]))), children:[function() {
                      var $G__184556$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["text-[10px]", "text-slate-400  dark:text-slate-600"]))), children:"-"};
                      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__184556$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__184556$$);
                    }(), function() {
                      var $G__184580$$ = function() {
                        return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["flex justify-between ml-8 w-full", "text-slate-700  dark:text-slate-300"]))), children:[function() {
                          var $G__184594$$ = {children:"Sub total: "};
                          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__184594$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__184594$$);
                        }(), function() {
                          var $G__184614$$ = {children:$amp$pages$budget$table$format_currency$$($sub_total$jscomp$2$$)};
                          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__184614$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__184614$$);
                        }()]};
                      }();
                      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__184580$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__184580$$);
                    }()]};
                  }();
                  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__184538$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__184538$$);
                }(), function() {
                  var $G__184642$$ = function() {
                    return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-semibold", "text-sm", "px-8 py-2 flex"]))), children:[function() {
                      var $G__184650$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["text-[10px]", "text-slate-400  dark:text-slate-600"]))), children:"-"};
                      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__184650$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__184650$$);
                    }(), function() {
                      var $G__184654$$ = function() {
                        return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["flex justify-between ml-8 w-full", "text-amber-600/80 dark:text-amber-300/80"]))), children:[function() {
                          var $G__184658$$ = {children:$tax_label$$};
                          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__184658$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__184658$$);
                        }(), function() {
                          var $G__184662$$ = {children:$amp$pages$budget$table$format_currency$$($tax_total$jscomp$1$$)};
                          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__184662$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__184662$$);
                        }()]};
                      }();
                      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__184654$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__184654$$);
                    }()]};
                  }();
                  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__184642$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__184642$$);
                }()]};
              }();
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__184528$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__184528$$);
            }() : null, function() {
              var $G__184672$$ = function() {
                return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-bold", "text-base", "bg-slate-50 dark:bg-slate-950 px-8 py-4 flex border-t border-pink-500/20"]))), children:[function() {
                  var $G__184676$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["text-[10px]", "text-slate-400  dark:text-slate-600"]))), children:"-"};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__184676$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__184676$$);
                }(), function() {
                  var $G__184688$$ = function() {
                    return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["flex justify-between ml-8 w-full", "text-pink-700   dark:text-pink-300"]))), children:[function() {
                      var $G__184698$$ = {children:"Total: "};
                      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__184698$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__184698$$);
                    }(), function() {
                      var $G__184708$$ = {children:$amp$pages$budget$table$format_currency$$($total$jscomp$4$$)};
                      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__184708$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__184708$$);
                    }()]};
                  }();
                  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__184688$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__184688$$);
                }()]};
              }();
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__184672$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__184672$$);
            }(), function() {
              var $G__184718$$ = function() {
                return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$btn_text$$, "bg-slate-100/60 dark:bg-slate-800/60", "flex p-3 justify-center items-center cursor-pointer"]))), onClick:function() {
                  function $G__184731_185036$$($prev$jscomp$13$$) {
                    return $APP.$cljs$core$truth_$$($prev$jscomp$13$$.$cljs$core$IFn$_invoke$arity$1$ ? $prev$jscomp$13$$.$cljs$core$IFn$_invoke$arity$1$($item_id$jscomp$1$$) : $prev$jscomp$13$$.call(null, $item_id$jscomp$1$$)) ? $APP.$cljs$core$disj$$.$cljs$core$IFn$_invoke$arity$2$($prev$jscomp$13$$, $item_id$jscomp$1$$) : $APP.$cljs$core$conj$$.$cljs$core$IFn$_invoke$arity$2$($prev$jscomp$13$$, $item_id$jscomp$1$$);
                  }
                  $set_expanded_items$jscomp$1$$.$cljs$core$IFn$_invoke$arity$1$ ? $set_expanded_items$jscomp$1$$.$cljs$core$IFn$_invoke$arity$1$($G__184731_185036$$) : $set_expanded_items$jscomp$1$$.call(null, $G__184731_185036$$);
                  return $scroll_to_ref$$.$cljs$core$IFn$_invoke$arity$1$ ? $scroll_to_ref$$.$cljs$core$IFn$_invoke$arity$1$($section_ref$$) : $scroll_to_ref$$.call(null, $section_ref$$);
                }, children:["CLOSE SECTION", function() {
                  var $G__184739_JSCompiler_temp_const$jscomp$inline_3378$$ = $APP.$helix$impl$props$normalize_class$$("w-4 h-4 transition-transform ml-2 " + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($APP.$cljs$core$truth_$$($expanded_items$jscomp$1$$.$cljs$core$IFn$_invoke$arity$1$ ? $expanded_items$jscomp$1$$.$cljs$core$IFn$_invoke$arity$1$($item_id$jscomp$1$$) : $expanded_items$jscomp$1$$.call(null, $item_id$jscomp$1$$)) ? "-rotate-90" : null));
                  var $G__184753$jscomp$inline_3380_JSCompiler_inline_result$jscomp$inline_3379$$ = {};
                  $G__184753$jscomp$inline_3380_JSCompiler_inline_result$jscomp$inline_3379$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$ui$icons$ChevronRightIcon$$, $G__184753$jscomp$inline_3380_JSCompiler_inline_result$jscomp$inline_3379$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$ui$icons$ChevronRightIcon$$, $G__184753$jscomp$inline_3380_JSCompiler_inline_result$jscomp$inline_3379$$);
                  $G__184739_JSCompiler_temp_const$jscomp$inline_3378$$ = {className:$G__184739_JSCompiler_temp_const$jscomp$inline_3378$$, children:$G__184753$jscomp$inline_3380_JSCompiler_inline_result$jscomp$inline_3379$$};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__184739_JSCompiler_temp_const$jscomp$inline_3378$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__184739_JSCompiler_temp_const$jscomp$inline_3378$$);
                }()]};
              }();
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__184718$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__184718$$);
            }()]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__184521$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__184521$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__184463$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__184463$$);
    }() : null]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("li", $G__184338_details$jscomp$5_map__184306_map__184306__$1_props__41575__auto__$jscomp$55_vec__184303$$) : $APP.$helix$core$jsxs$$.call(null, "li", $G__184338_details$jscomp$5_map__184306_map__184306__$1_props__41575__auto__$jscomp$55_vec__184303$$);
};
$amp$pages$budget$table$budget_table$$ = function($G__184818_map__184805_map__184805__$1_props__41575__auto__$jscomp$56_vec__184802_vec__184808$$, $maybe_ref__41576__auto__$jscomp$56$$) {
  $G__184818_map__184805_map__184805__$1_props__41575__auto__$jscomp$56_vec__184802_vec__184808$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__184818_map__184805_map__184805__$1_props__41575__auto__$jscomp$56_vec__184802_vec__184808$$), $maybe_ref__41576__auto__$jscomp$56$$], null);
  $G__184818_map__184805_map__184805__$1_props__41575__auto__$jscomp$56_vec__184802_vec__184808$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__184818_map__184805_map__184805__$1_props__41575__auto__$jscomp$56_vec__184802_vec__184808$$, 0, null);
  $G__184818_map__184805_map__184805__$1_props__41575__auto__$jscomp$56_vec__184802_vec__184808$$ = $APP.$cljs$core$__destructure_map$$($G__184818_map__184805_map__184805__$1_props__41575__auto__$jscomp$56_vec__184802_vec__184808$$);
  var $cost_data$jscomp$2$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__184818_map__184805_map__184805__$1_props__41575__auto__$jscomp$56_vec__184802_vec__184808$$, $cljs$cst$796$cost_data$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__184818_map__184805_map__184805__$1_props__41575__auto__$jscomp$56_vec__184802_vec__184808$$ = $APP.$helix$hooks$use_state$$($APP.$cljs$core$PersistentHashSet$EMPTY$$);
  var $expanded_items$jscomp$2$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__184818_map__184805_map__184805__$1_props__41575__auto__$jscomp$56_vec__184802_vec__184808$$, 0, null), $set_expanded_items$jscomp$2$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__184818_map__184805_map__184805__$1_props__41575__auto__$jscomp$56_vec__184802_vec__184808$$, 1, null);
  $G__184818_map__184805_map__184805__$1_props__41575__auto__$jscomp$56_vec__184802_vec__184808$$ = function() {
    return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["w-full", "text-slate-950  dark:text-white", "font-mono"]))), children:[$APP.$cljs$core$map_indexed$cljs$0core$0IFn$0_invoke$0arity$02$$(function($G__184827_idx$jscomp$73$$, $G__184826_item$jscomp$39$$) {
      $G__184826_item$jscomp$39$$ = {idx:$G__184827_idx$jscomp$73$$, item:$G__184826_item$jscomp$39$$, "set-expanded-items":$set_expanded_items$jscomp$2$$, "expanded-items":$expanded_items$jscomp$2$$};
      $G__184827_idx$jscomp$73$$ = "" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($G__184827_idx$jscomp$73$$) + "-section";
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$($amp$pages$budget$table$section_line_item$$, $G__184826_item$jscomp$39$$, $G__184827_idx$jscomp$73$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$budget$table$section_line_item$$, $G__184826_item$jscomp$39$$, $G__184827_idx$jscomp$73$$);
    }, $cost_data$jscomp$2$$), function() {
      var $G__184839$$ = {"cost-data":$cost_data$jscomp$2$$};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$pages$budget$table$total_section$$, $G__184839$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$budget$table$total_section$$, $G__184839$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("ol", $G__184818_map__184805_map__184805__$1_props__41575__auto__$jscomp$56_vec__184802_vec__184808$$) : $APP.$helix$core$jsxs$$.call(null, "ol", $G__184818_map__184805_map__184805__$1_props__41575__auto__$jscomp$56_vec__184802_vec__184808$$);
};
$amp$pages$budget$cost_breakdown$preview$$ = function($G__185097_map__185091_props__41575__auto__$jscomp$57_vec__185088$$, $maybe_ref__41576__auto__$jscomp$57$$) {
  $G__185097_map__185091_props__41575__auto__$jscomp$57_vec__185088$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__185097_map__185091_props__41575__auto__$jscomp$57_vec__185088$$), $maybe_ref__41576__auto__$jscomp$57$$], null);
  $G__185097_map__185091_props__41575__auto__$jscomp$57_vec__185088$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__185097_map__185091_props__41575__auto__$jscomp$57_vec__185088$$, 0, null);
  $APP.$cljs$core$__destructure_map$$($G__185097_map__185091_props__41575__auto__$jscomp$57_vec__185088$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__185097_map__185091_props__41575__auto__$jscomp$57_vec__185088$$ = function() {
    return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_lg$$, "p-4"]))), children:[function() {
      var $G__185102$$ = {children:["The Armenia Pavilion at the 61st Venice Biennale is a major international cultural undertaking—", "structured to meet the standards of the most rigorous national presentations. "]};
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__185102$$) : $APP.$helix$core$jsxs$$.call(null, "span", $G__185102$$);
    }(), function() {
      var $G__185106$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:"With a total budget of approximately "};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__185106$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__185106$$);
    }(), function() {
      var $G__185116$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:" ("};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__185116$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__185116$$);
    }(), function() {
      var $G__185126$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$value_currency$$), children:"$1,6M USD"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__185126$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__185126$$);
    }(), function() {
      var $G__185130$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:"), the financial framework covers the full scope of "};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__185130$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__185130$$);
    }(), function() {
      var $G__185138$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:"production, installation, operations, communications,"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__185138$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__185138$$);
    }(), function() {
      var $G__185143$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:" and "};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__185143$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__185143$$);
    }(), function() {
      var $G__185147$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:"documentation"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__185147$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__185147$$);
    }(), function() {
      var $G__185152$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:". "};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__185152$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__185152$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__185097_map__185091_props__41575__auto__$jscomp$57_vec__185088$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__185097_map__185091_props__41575__auto__$jscomp$57_vec__185088$$);
};
$amp$pages$budget$cost_breakdown$details$$ = function($G__185200_map__185192_props__41575__auto__$jscomp$58_vec__185189$$, $maybe_ref__41576__auto__$jscomp$58$$) {
  $G__185200_map__185192_props__41575__auto__$jscomp$58_vec__185189$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__185200_map__185192_props__41575__auto__$jscomp$58_vec__185189$$), $maybe_ref__41576__auto__$jscomp$58$$], null);
  $G__185200_map__185192_props__41575__auto__$jscomp$58_vec__185189$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__185200_map__185192_props__41575__auto__$jscomp$58_vec__185189$$, 0, null);
  $APP.$cljs$core$__destructure_map$$($G__185200_map__185192_props__41575__auto__$jscomp$58_vec__185189$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__185200_map__185192_props__41575__auto__$jscomp$58_vec__185189$$ = function() {
    return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_lg$$, "p-4"]))), children:[function() {
      var $G__185204$$ = {children:["The Armenia Pavilion at the 61st Venice Biennale is a major international cultural undertaking—", "structured to meet the standards of the most rigorous national presentations. "]};
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__185204$$) : $APP.$helix$core$jsxs$$.call(null, "span", $G__185204$$);
    }(), function() {
      var $G__185208$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:"With a total budget of approximately "};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__185208$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__185208$$);
    }(), function() {
      var $G__185222$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:" ("};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__185222$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__185222$$);
    }(), function() {
      var $G__185230$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$value_currency$$), children:"$1,6M USD"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__185230$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__185230$$);
    }(), function() {
      var $G__185238$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:"), the financial framework covers the full scope of "};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__185238$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__185238$$);
    }(), function() {
      var $G__185246$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:"production, installation, operations, communications,"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__185246$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__185246$$);
    }(), function() {
      var $G__185251$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:" and "};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__185251$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__185251$$);
    }(), function() {
      var $G__185259$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:"documentation"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__185259$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__185259$$);
    }(), function() {
      var $G__185268$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:". "};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__185268$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__185268$$);
    }(), function() {
      var $G__185273$$ = {className:"block my-6", children:["As Armenia does not maintain a permanent national pavilion in Venice, a venue must be secured through rental—", "as is customary for many smaller and non-permanent participating nations. "]};
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__185273$$) : $APP.$helix$core$jsxs$$.call(null, "span", $G__185273$$);
    }(), function() {
      var $G__185281$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:"The selected site is located outside the Biennale's primary zones, enabling a significantly lower base rent—approximately "};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__185281$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__185281$$);
    }(), function() {
      var $G__185288$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$value_currency$$), children:"$145,600"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__185288$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__185288$$);
    }(), function() {
      var $G__185294$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:"—while remaining fully accredited and visible within the official Biennale structure. "};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__185294$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__185294$$);
    }(), function() {
      var $G__185304$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:"By contrast, venues within the Giardini or Arsenale—when available—typically begin at "};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__185304$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__185304$$);
    }(), function() {
      var $G__185312$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$value_currency$$), children:"$450,000"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__185312$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__185312$$);
    }(), function() {
      var $G__185321$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:" in base rent, before construction, staffing, utilities, logistics, and operating overhead. "};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__185321$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__185321$$);
    }(), function() {
      var $G__185330$$ = function() {
        return {className:"mt-6", children:[function() {
          var $G__185334$$ = {className:"mt-6", children:"Crucially, the nature of "};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__185334$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__185334$$);
        }(), function() {
          var $G__185342$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:"THE STUDIO"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__185342$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__185342$$);
        }(), function() {
          var $G__185347$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:" makes this venue choice not only strategic but essential. "};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__185347$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__185347$$);
        }(), function() {
          var $G__185351$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:"The work is conceived to be produced, refined, and evolved "};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__185351$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__185351$$);
        }(), function() {
          var $G__185355$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-semibold", "italic", "text-slate-900  dark:text-slate-100"]))), children:"on site"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__185355$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__185355$$);
        }(), function() {
          var $G__185359$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:", allowing the Pavilion to function simultaneously as exhibition space and working studio. "};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__185359$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__185359$$);
        }(), function() {
          var $G__185364$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:["This approach meets extremely tight production and installation deadlines while maintaining full artistic and technical control—", "conditions that would be far more difficult, costly, or even impossible under a traditional off-site fabrication and transport model. "]};
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__185364$$) : $APP.$helix$core$jsxs$$.call(null, "span", $G__185364$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__185330$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__185330$$);
    }(), function() {
      var $G__185368$$ = {className:"block my-6", children:"Rather than directing the majority of resources toward a single, fixed monumental installation, the artist and team have deliberately taken another route. "};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__185368$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__185368$$);
    }(), function() {
      var $G__185372$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:"By producing the work on site, the Pavilion avoids the need for a pre-fabricated "};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__185372$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__185372$$);
    }(), function() {
      var $G__185376$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-semibold", "italic", "text-slate-900  dark:text-slate-100"]))), children:"“grand object”"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__185376$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__185376$$);
    }(), function() {
      var $G__185380$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:" altogether. "};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__185380$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__185380$$);
    }(), function() {
      var $G__185384$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:"This decision reduces fabrication, crating, international shipping, and risk-related costs, while aligning more precisely with the broader conceptual goals: "};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__185384$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__185384$$);
    }(), function() {
      var $G__185388$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:"process over spectacle, presence over monumentality,"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__185388$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__185388$$);
    }(), function() {
      var $G__185392$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:" and "};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__185392$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__185392$$);
    }(), function() {
      var $G__185397$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:"sustained making over static display"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__185397$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__185397$$);
    }(), function() {
      var $G__185405$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:". "};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__185405$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__185405$$);
    }(), function() {
      var $G__185413$$ = function() {
        return {className:"my-6", children:[function() {
          var $G__185425$$ = {className:"", children:"In this sense, cost efficiency and artistic rigor are not in opposition but mutually reinforcing. "};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__185425$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__185425$$);
        }(), function() {
          var $G__185429$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:"The Pavilion's structure distributes resources across time, labor, materials, and public engagement—rather than concentrating them into a single object whose expense would be driven largely by transport and scale rather than meaning. "};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__185429$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__185429$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__185413$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__185413$$);
    }(), function() {
      var $G__185437$$ = function() {
        return {className:"block my-6", children:[function() {
          var $G__185441$$ = {className:"", children:"Despite these efficiencies, the overall cost of operating in Venice during the Biennale remains high. "};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__185441$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__185441$$);
        }(), function() {
          var $G__185451$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:"Venice's unique geography, limited infrastructure, and extraordinary demand elevate costs across all categories—logistics, storage, labor, accommodations, and technical services. "};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__185451$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__185451$$);
        }(), function() {
          var $G__185457$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:"These conditions are shared by all national pavilions and reflect the Biennale's position as the most visible international platform in contemporary art. "};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__185457$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__185457$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__185437$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__185437$$);
    }(), function() {
      var $G__185465$$ = {className:"mt-6", children:"Unlike projects that culminate at opening, this Pavilion is conceived as a"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__185465$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__185465$$);
    }(), function() {
      var $G__185473$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-semibold", "italic", "text-slate-900  dark:text-slate-100"]))), children:" seven-month operational commitment"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__185473$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__185473$$);
    }(), function() {
      var $G__185485$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:": a living environment that functions simultaneously as exhibition space, working studio, public forum, and diplomatic platform—requiring sustained staffing, materials, logistics, and institutional oversight throughout the duration of the Biennale. "};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__185485$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__185485$$);
    }(), function() {
      var $G__185489$$ = {className:"block mt-6", children:"Significant investment secures venue readiness and regulatory compliance, supports curatorial and administrative leadership, funds museum-scale fabrication and specialized craft, and addresses Venice-specific transport, storage, installation, and reverse logistics. "};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__185489$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__185489$$);
    }(), function() {
      var $G__185497$$ = function() {
        return {className:"block mt-6", children:[function() {
          var $G__185503$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:"THE STUDIO"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__185503$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__185503$$);
        }(), function() {
          var $G__185513$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:" is budgeted as an ongoing on-site operation, ensuring continuous execution, maintenance, and evolution of the work across the exhibition period—distinguishing the Pavilion from static presentations. "};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__185513$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__185513$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__185497$$) : $APP.$helix$core$jsxs$$.call(null, "span", $G__185497$$);
    }(), function() {
      var $G__185521$$ = {className:"block mt-6", children:"Public visibility and long-term legacy are strengthened through opening week programs, marketing and public relations, publication, and comprehensive film and photographic documentation—ensuring that the Pavilion's impact extends into international media, scholarship, and institutional archives. "};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__185521$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__185521$$);
    }(), function() {
      var $G__185529$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_closing$$, "block mt-6"]))), children:"A responsible contingency is included to accommodate the realities of an extended international project operating across jurisdictions, timelines, and currencies—ensuring stability, accountability, and the successful delivery of Armenia's national presentation on the world stage."};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__185529$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__185529$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__185200_map__185192_props__41575__auto__$jscomp$58_vec__185189$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__185200_map__185192_props__41575__auto__$jscomp$58_vec__185189$$);
};
$amp$pages$budget$cost_breakdown$footer$$ = function($G__185556_G__185566$jscomp$inline_3780_map__185554_props__41575__auto__$jscomp$59_vec__185551$$, $maybe_ref__41576__auto__$jscomp$59$$) {
  $G__185556_G__185566$jscomp$inline_3780_map__185554_props__41575__auto__$jscomp$59_vec__185551$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__185556_G__185566$jscomp$inline_3780_map__185554_props__41575__auto__$jscomp$59_vec__185551$$), $maybe_ref__41576__auto__$jscomp$59$$], null);
  $G__185556_G__185566$jscomp$inline_3780_map__185554_props__41575__auto__$jscomp$59_vec__185551$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__185556_G__185566$jscomp$inline_3780_map__185554_props__41575__auto__$jscomp$59_vec__185551$$, 0, null);
  $APP.$cljs$core$__destructure_map$$($G__185556_G__185566$jscomp$inline_3780_map__185554_props__41575__auto__$jscomp$59_vec__185551$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__185556_G__185566$jscomp$inline_3780_map__185554_props__41575__auto__$jscomp$59_vec__185551$$ = {"cost-data":$amp$pages$budget$cost_breakdown$cost_data$$};
  $G__185556_G__185566$jscomp$inline_3780_map__185554_props__41575__auto__$jscomp$59_vec__185551$$ = {className:"mt-12", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$pages$budget$table$budget_table$$, $G__185556_G__185566$jscomp$inline_3780_map__185554_props__41575__auto__$jscomp$59_vec__185551$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$budget$table$budget_table$$, $G__185556_G__185566$jscomp$inline_3780_map__185554_props__41575__auto__$jscomp$59_vec__185551$$)};
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__185556_G__185566$jscomp$inline_3780_map__185554_props__41575__auto__$jscomp$59_vec__185551$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__185556_G__185566$jscomp$inline_3780_map__185554_props__41575__auto__$jscomp$59_vec__185551$$);
};
$amp$pages$budget$cost_breakdown$cost_breakdown$$ = function($G__185631_id$jscomp$91_map__185625_props__41575__auto__$jscomp$60_vec__185622$$, $G__185635$jscomp$inline_3783_JSCompiler_inline_result$jscomp$inline_3782_maybe_ref__41576__auto__$jscomp$60_subtitle$jscomp$3$$) {
  $G__185631_id$jscomp$91_map__185625_props__41575__auto__$jscomp$60_vec__185622$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__185631_id$jscomp$91_map__185625_props__41575__auto__$jscomp$60_vec__185622$$), $G__185635$jscomp$inline_3783_JSCompiler_inline_result$jscomp$inline_3782_maybe_ref__41576__auto__$jscomp$60_subtitle$jscomp$3$$], null);
  $G__185631_id$jscomp$91_map__185625_props__41575__auto__$jscomp$60_vec__185622$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__185631_id$jscomp$91_map__185625_props__41575__auto__$jscomp$60_vec__185622$$, 0, null);
  var $map__185625__$1_title$jscomp$24$$ = $APP.$cljs$core$__destructure_map$$($G__185631_id$jscomp$91_map__185625_props__41575__auto__$jscomp$60_vec__185622$$);
  $G__185631_id$jscomp$91_map__185625_props__41575__auto__$jscomp$60_vec__185622$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__185625__$1_title$jscomp$24$$, $APP.$cljs$cst$285$id$$);
  $G__185635$jscomp$inline_3783_JSCompiler_inline_result$jscomp$inline_3782_maybe_ref__41576__auto__$jscomp$60_subtitle$jscomp$3$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__185625__$1_title$jscomp$24$$, $APP.$cljs$cst$771$subtitle$$);
  $map__185625__$1_title$jscomp$24$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__185625__$1_title$jscomp$24$$, $APP.$cljs$cst$287$title$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__185635$jscomp$inline_3783_JSCompiler_inline_result$jscomp$inline_3782_maybe_ref__41576__auto__$jscomp$60_subtitle$jscomp$3$$ = {idx:3, "section-hint":$G__185635$jscomp$inline_3783_JSCompiler_inline_result$jscomp$inline_3782_maybe_ref__41576__auto__$jscomp$60_subtitle$jscomp$3$$, title:$map__185625__$1_title$jscomp$24$$, "expand-button-label":"Read more", "preview-text":$amp$pages$budget$cost_breakdown$preview$$, "full-text":$amp$pages$budget$cost_breakdown$details$$, "footer-text":$amp$pages$budget$cost_breakdown$footer$$};
  $G__185635$jscomp$inline_3783_JSCompiler_inline_result$jscomp$inline_3782_maybe_ref__41576__auto__$jscomp$60_subtitle$jscomp$3$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$ui$expandable_text$expandable_text_area_2$$, $G__185635$jscomp$inline_3783_JSCompiler_inline_result$jscomp$inline_3782_maybe_ref__41576__auto__$jscomp$60_subtitle$jscomp$3$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$ui$expandable_text$expandable_text_area_2$$, 
  $G__185635$jscomp$inline_3783_JSCompiler_inline_result$jscomp$inline_3782_maybe_ref__41576__auto__$jscomp$60_subtitle$jscomp$3$$);
  $G__185631_id$jscomp$91_map__185625_props__41575__auto__$jscomp$60_vec__185622$$ = {id:$G__185631_id$jscomp$91_map__185625_props__41575__auto__$jscomp$60_vec__185622$$, children:$G__185635$jscomp$inline_3783_JSCompiler_inline_result$jscomp$inline_3782_maybe_ref__41576__auto__$jscomp$60_subtitle$jscomp$3$$};
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__185631_id$jscomp$91_map__185625_props__41575__auto__$jscomp$60_vec__185622$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__185631_id$jscomp$91_map__185625_props__41575__auto__$jscomp$60_vec__185622$$);
};
$amp$pages$budget$location$preview_text$$ = function($G__184195_props__41575__auto__$jscomp$61$$) {
  $APP.$helix$core$extract_cljs_props$$($G__184195_props__41575__auto__$jscomp$61$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__184195_props__41575__auto__$jscomp$61$$ = function() {
    return {className:"", children:["The Armenia Pavilion 2026 will be located across ", function() {
      var $G__184199$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:"two sites,"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__184199$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__184199$$);
    }(), " within the historic Arsenale of Venice. ", function() {
      var $G__184207$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:" 1. A wonderful interior grand studio"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__184207$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__184207$$);
    }(), function() {
      var $G__184219$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:" , as well 2. An important exterior public crossing to the Arsenale"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__184219$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__184219$$);
    }(), ". ", "Together these two sites will form a single spatial constellation. ", function() {
      var $G__184223$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-900  dark:text-slate-100"), children:"A place for study, a place for work, to create, share and exhibit"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__184223$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__184223$$);
    }(), function() {
      var $G__184231$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-900  dark:text-slate-100"), children:" at a public-crossing threshold"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__184231$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__184231$$);
    }(), "—each distinctly neccesary and helpful, both in concluding the final design as well as the making, viewing, and observing of the artworks presented."]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__184195_props__41575__auto__$jscomp$61$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__184195_props__41575__auto__$jscomp$61$$);
};
$amp$pages$budget$location$preview$$ = function($G__184249_G__184254$jscomp$inline_3387_map__184247_props__41575__auto__$jscomp$62_vec__184244$$, $maybe_ref__41576__auto__$jscomp$62$$) {
  $G__184249_G__184254$jscomp$inline_3387_map__184247_props__41575__auto__$jscomp$62_vec__184244$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__184249_G__184254$jscomp$inline_3387_map__184247_props__41575__auto__$jscomp$62_vec__184244$$), $maybe_ref__41576__auto__$jscomp$62$$], null);
  $G__184249_G__184254$jscomp$inline_3387_map__184247_props__41575__auto__$jscomp$62_vec__184244$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__184249_G__184254$jscomp$inline_3387_map__184247_props__41575__auto__$jscomp$62_vec__184244$$, 0, null);
  $APP.$cljs$core$__destructure_map$$($G__184249_G__184254$jscomp$inline_3387_map__184247_props__41575__auto__$jscomp$62_vec__184244$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__184249_G__184254$jscomp$inline_3387_map__184247_props__41575__auto__$jscomp$62_vec__184244$$ = {};
  $G__184249_G__184254$jscomp$inline_3387_map__184247_props__41575__auto__$jscomp$62_vec__184244$$ = {className:"p-4 mb-12", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$pages$budget$location$preview_text$$, $G__184249_G__184254$jscomp$inline_3387_map__184247_props__41575__auto__$jscomp$62_vec__184244$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$budget$location$preview_text$$, $G__184249_G__184254$jscomp$inline_3387_map__184247_props__41575__auto__$jscomp$62_vec__184244$$)};
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__184249_G__184254$jscomp$inline_3387_map__184247_props__41575__auto__$jscomp$62_vec__184244$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__184249_G__184254$jscomp$inline_3387_map__184247_props__41575__auto__$jscomp$62_vec__184244$$);
};
$amp$pages$budget$location$full_details$$ = function($G__184277_map__184273_map__184273__$1_props__41575__auto__$jscomp$63_vec__184270$$, $maybe_ref__41576__auto__$jscomp$63$$) {
  $G__184277_map__184273_map__184273__$1_props__41575__auto__$jscomp$63_vec__184270$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__184277_map__184273_map__184273__$1_props__41575__auto__$jscomp$63_vec__184270$$), $maybe_ref__41576__auto__$jscomp$63$$], null);
  $G__184277_map__184273_map__184273__$1_props__41575__auto__$jscomp$63_vec__184270$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__184277_map__184273_map__184273__$1_props__41575__auto__$jscomp$63_vec__184270$$, 0, null);
  $G__184277_map__184273_map__184273__$1_props__41575__auto__$jscomp$63_vec__184270$$ = $APP.$cljs$core$__destructure_map$$($G__184277_map__184273_map__184273__$1_props__41575__auto__$jscomp$63_vec__184270$$);
  $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__184277_map__184273_map__184273__$1_props__41575__auto__$jscomp$63_vec__184270$$, $APP.$cljs$cst$285$id$$);
  $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__184277_map__184273_map__184273__$1_props__41575__auto__$jscomp$63_vec__184270$$, $APP.$cljs$cst$771$subtitle$$);
  $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__184277_map__184273_map__184273__$1_props__41575__auto__$jscomp$63_vec__184270$$, $APP.$cljs$cst$287$title$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $is_desktop_QMARK_$jscomp$2$$ = $APP.$amp$hooks$use_media_query$use_touch_enabled$$();
  $G__184277_map__184273_map__184273__$1_props__41575__auto__$jscomp$63_vec__184270$$ = function() {
    return {className:"space-y-8", children:function() {
      var $G__184283$$ = function() {
        return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$body_lg$$), children:[function() {
          var $G__184291_G__184297$jscomp$inline_3390$$ = {};
          $G__184291_G__184297$jscomp$inline_3390$$ = {className:"p-4 mb-12", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$pages$budget$location$preview_text$$, $G__184291_G__184297$jscomp$inline_3390$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$budget$location$preview_text$$, $G__184291_G__184297$jscomp$inline_3390$$)};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__184291_G__184297$jscomp$inline_3390$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__184291_G__184297$jscomp$inline_3390$$);
        }(), function() {
          var $G__184302$$ = function() {
            return {className:"my-8", children:[function() {
              var $G__184310$$ = {dev:!1, "interactive?":$is_desktop_QMARK_$jscomp$2$$, "initial-view":$APP.$amp$pages$venue$map_config$initial_view$$, "ant-paths":$APP.$amp$pages$venue$map_config$ant_paths$$, layers:$APP.$amp$pages$venue$map_config$layers$$};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$ui$map$mapbox_map$$, $G__184310$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$ui$map$mapbox_map$$, $G__184310$$);
            }(), function() {
              var $G__184318$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-mono", "text-sm", "italic", "mt-4 px-4"]))), children:"* Walking path from the crossing to the pavilion. ~8 minutes"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__184318$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__184318$$);
            }()]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__184302$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__184302$$);
        }(), function() {
          var $G__184328$$ = function() {
            return {className:"px-4 mt-8 flex flex-col sm:flex-row gap-4", children:[function() {
              var $G__184334$$ = {href:"/visit", className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$("font-display;font-medium;inline-flex items-center gap-2;text-sm uppercase tracking-wider;text-pink-600 dark:text-pink-300;hover:text-pink-700 dark:hover:text-pink-200;transition-colors duration-200".split(";")))), children:"See the full Visitor Guide →"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("a", $G__184334$$) : $APP.$helix$core$jsx$$.call(null, "a", $G__184334$$);
            }(), function() {
              var $G__184346$$ = {href:"https://maps.app.goo.gl/XBwAbBQcj47eHyq5A", target:"_blank", rel:"noopener noreferrer", className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$("font-display;font-medium;inline-flex items-center gap-2;text-sm uppercase tracking-wider;text-slate-500  dark:text-slate-500;hover:text-pink-600 dark:hover:text-pink-300;transition-colors duration-200".split(";")))), 
              children:"Open in Maps ↗"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("a", $G__184346$$) : $APP.$helix$core$jsx$$.call(null, "a", $G__184346$$);
            }()]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__184328$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__184328$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__184283$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__184283$$);
    }()};
  }();
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__184277_map__184273_map__184273__$1_props__41575__auto__$jscomp$63_vec__184270$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__184277_map__184273_map__184273__$1_props__41575__auto__$jscomp$63_vec__184270$$);
};
$amp$pages$budget$location$location_section$$ = function($G__184394_id$jscomp$93_map__184386_props__41575__auto__$jscomp$64_vec__184383$$, $G__184402$jscomp$inline_3786_JSCompiler_inline_result$jscomp$inline_3785_maybe_ref__41576__auto__$jscomp$64_subtitle$jscomp$5$$) {
  $G__184394_id$jscomp$93_map__184386_props__41575__auto__$jscomp$64_vec__184383$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__184394_id$jscomp$93_map__184386_props__41575__auto__$jscomp$64_vec__184383$$), $G__184402$jscomp$inline_3786_JSCompiler_inline_result$jscomp$inline_3785_maybe_ref__41576__auto__$jscomp$64_subtitle$jscomp$5$$], null);
  $G__184394_id$jscomp$93_map__184386_props__41575__auto__$jscomp$64_vec__184383$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__184394_id$jscomp$93_map__184386_props__41575__auto__$jscomp$64_vec__184383$$, 0, null);
  var $map__184386__$1_title$jscomp$26$$ = $APP.$cljs$core$__destructure_map$$($G__184394_id$jscomp$93_map__184386_props__41575__auto__$jscomp$64_vec__184383$$);
  $G__184394_id$jscomp$93_map__184386_props__41575__auto__$jscomp$64_vec__184383$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__184386__$1_title$jscomp$26$$, $APP.$cljs$cst$285$id$$);
  $G__184402$jscomp$inline_3786_JSCompiler_inline_result$jscomp$inline_3785_maybe_ref__41576__auto__$jscomp$64_subtitle$jscomp$5$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__184386__$1_title$jscomp$26$$, $APP.$cljs$cst$771$subtitle$$);
  $map__184386__$1_title$jscomp$26$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__184386__$1_title$jscomp$26$$, $APP.$cljs$cst$287$title$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__184402$jscomp$inline_3786_JSCompiler_inline_result$jscomp$inline_3785_maybe_ref__41576__auto__$jscomp$64_subtitle$jscomp$5$$ = {idx:7, "section-hint":$G__184402$jscomp$inline_3786_JSCompiler_inline_result$jscomp$inline_3785_maybe_ref__41576__auto__$jscomp$64_subtitle$jscomp$5$$, title:$map__184386__$1_title$jscomp$26$$, "expand-button-label":"Expand details", "preview-text":$amp$pages$budget$location$preview$$, "full-text":$amp$pages$budget$location$full_details$$};
  $G__184402$jscomp$inline_3786_JSCompiler_inline_result$jscomp$inline_3785_maybe_ref__41576__auto__$jscomp$64_subtitle$jscomp$5$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$ui$expandable_text$expandable_text_area_2$$, $G__184402$jscomp$inline_3786_JSCompiler_inline_result$jscomp$inline_3785_maybe_ref__41576__auto__$jscomp$64_subtitle$jscomp$5$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$ui$expandable_text$expandable_text_area_2$$, 
  $G__184402$jscomp$inline_3786_JSCompiler_inline_result$jscomp$inline_3785_maybe_ref__41576__auto__$jscomp$64_subtitle$jscomp$5$$);
  $G__184394_id$jscomp$93_map__184386_props__41575__auto__$jscomp$64_vec__184383$$ = {id:$G__184394_id$jscomp$93_map__184386_props__41575__auto__$jscomp$64_vec__184383$$, children:$G__184402$jscomp$inline_3786_JSCompiler_inline_result$jscomp$inline_3785_maybe_ref__41576__auto__$jscomp$64_subtitle$jscomp$5$$};
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__184394_id$jscomp$93_map__184386_props__41575__auto__$jscomp$64_vec__184383$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__184394_id$jscomp$93_map__184386_props__41575__auto__$jscomp$64_vec__184383$$);
};
$amp$pages$budget$cash_flow$parse_date$$ = function($s$jscomp$226$$) {
  return new Date($s$jscomp$226$$);
};
$amp$pages$budget$cash_flow$date__GT_ms$$ = function($d$jscomp$151$$) {
  return $d$jscomp$151$$.getTime();
};
$amp$pages$budget$cash_flow$format_currency$$ = function($n$jscomp$226$$) {
  return $n$jscomp$226$$.toLocaleString("en-US", {style:"currency", currency:"USD", maximumFractionDigits:0});
};
$amp$pages$budget$cash_flow$priority_tag_bg$$ = function($p$jscomp$90$$) {
  switch($p$jscomp$90$$ instanceof $APP.$cljs$core$Keyword$$ ? $p$jscomp$90$$.$fqn$ : null) {
    case "critical":
      return "bg-red-500/15";
    case "high":
      return "bg-amber-400/15";
    case "normal":
      return "bg-indigo-400/15";
    default:
      return "bg-indigo-400/15";
  }
};
$amp$pages$budget$cash_flow$priority_tag_text$$ = function($p$jscomp$91$$) {
  switch($p$jscomp$91$$ instanceof $APP.$cljs$core$Keyword$$ ? $p$jscomp$91$$.$fqn$ : null) {
    case "critical":
      return "text-pink-600 dark:text-pink-300";
    case "high":
      return "text-amber-600 dark:text-amber-300";
    case "normal":
      return "text-indigo-600 dark:text-indigo-300";
    default:
      return "text-indigo-600 dark:text-indigo-300";
  }
};
$amp$pages$budget$cash_flow$priority_dot_classes$$ = function($p$jscomp$92$$, $fill_paid_QMARK_$$) {
  $fill_paid_QMARK_$$ = $APP.$cljs$core$truth_$$($fill_paid_QMARK_$$) ? "bg-transparent" : function() {
    switch($p$jscomp$92$$ instanceof $APP.$cljs$core$Keyword$$ ? $p$jscomp$92$$.$fqn$ : null) {
      case "critical":
        return "bg-pink-600 dark:bg-pink-300";
      case "high":
        return "bg-amber-500 dark:bg-amber-300";
      case "normal":
        return "bg-indigo-500 dark:bg-indigo-300";
      default:
        return "bg-indigo-500 dark:bg-indigo-300";
    }
  }();
  return "" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$(function() {
    switch($p$jscomp$92$$ instanceof $APP.$cljs$core$Keyword$$ ? $p$jscomp$92$$.$fqn$ : null) {
      case "critical":
        return "border-pink-600 dark:border-pink-300";
      case "high":
        return "border-amber-500 dark:border-amber-300";
      case "normal":
        return "border-indigo-500 dark:border-indigo-300";
      default:
        return "border-indigo-500 dark:border-indigo-300";
    }
  }()) + " " + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($fill_paid_QMARK_$$);
};
$amp$pages$budget$cash_flow$priority_amount_class$$ = function($p$jscomp$93$$, $paid_QMARK_$jscomp$1$$) {
  if ($APP.$cljs$core$truth_$$($paid_QMARK_$jscomp$1$$)) {
    return "text-slate-600  dark:text-slate-400";
  }
  switch($p$jscomp$93$$ instanceof $APP.$cljs$core$Keyword$$ ? $p$jscomp$93$$.$fqn$ : null) {
    case "critical":
      return "text-pink-600 dark:text-pink-300";
    case "high":
      return "text-amber-500 dark:text-amber-300";
    case "normal":
      return "text-indigo-600 dark:text-indigo-300";
    default:
      return "text-indigo-600 dark:text-indigo-300";
  }
};
$amp$pages$budget$cash_flow$priority_label$$ = function($p$jscomp$94$$) {
  switch($p$jscomp$94$$ instanceof $APP.$cljs$core$Keyword$$ ? $p$jscomp$94$$.$fqn$ : null) {
    case "critical":
      return "CRIT";
    case "high":
      return "HIGH";
    case "normal":
      return "NORM";
    default:
      return "—";
  }
};
$amp$pages$budget$cash_flow$group_by_month$$ = function($entries$jscomp$4$$) {
  return $cljs$core$partition_by$cljs$0core$0IFn$0_invoke$0arity$02$$(function($e$jscomp$219$$) {
    return $amp$pages$budget$cash_flow$parse_date$$($cljs$cst$814$due$$.$cljs$core$IFn$_invoke$arity$1$($e$jscomp$219$$)).toLocaleString("en-US", {month:"long", year:"numeric"});
  }, $APP.$cljs$core$sort_by$cljs$0core$0IFn$0_invoke$0arity$02$$($APP.$cljs$core$comp$$.$cljs$core$IFn$_invoke$arity$3$($amp$pages$budget$cash_flow$date__GT_ms$$, $amp$pages$budget$cash_flow$parse_date$$, $cljs$cst$814$due$$), $entries$jscomp$4$$));
};
$amp$pages$budget$cash_flow$month_rollups$$ = function($entries$jscomp$5_groups_sorted$$) {
  $entries$jscomp$5_groups_sorted$$ = $APP.$cljs$core$sort_by$cljs$0core$0IFn$0_invoke$0arity$02$$($APP.$cljs$core$comp$$.$cljs$core$IFn$_invoke$arity$3$($amp$pages$budget$cash_flow$date__GT_ms$$, $amp$pages$budget$cash_flow$parse_date$$, $cljs$cst$814$due$$), $entries$jscomp$5_groups_sorted$$);
  $entries$jscomp$5_groups_sorted$$ = $amp$pages$budget$cash_flow$group_by_month$$($entries$jscomp$5_groups_sorted$$);
  return $APP.$cljs$core$mapv$cljs$0core$0IFn$0_invoke$0arity$02$$(function($group$jscomp$1$$) {
    var $d$jscomp$154$$ = $amp$pages$budget$cash_flow$parse_date$$($cljs$cst$814$due$$.$cljs$core$IFn$_invoke$arity$1$($APP.$cljs$core$first$$($group$jscomp$1$$))), $label$jscomp$15$$ = $d$jscomp$154$$.toLocaleString("en-US", {month:"short", year:"numeric"}), $total$jscomp$5$$ = $APP.$cljs$core$reduce$cljs$0core$0IFn$0_invoke$0arity$03$$($APP.$cljs$core$_PLUS_$$, 0, $APP.$cljs$core$map$$.$cljs$core$IFn$_invoke$arity$2$($cljs$cst$792$amount$$, $group$jscomp$1$$)), $paid$$ = $APP.$cljs$core$reduce$cljs$0core$0IFn$0_invoke$0arity$03$$($APP.$cljs$core$_PLUS_$$, 
    0, $APP.$cljs$core$map$$.$cljs$core$IFn$_invoke$arity$2$($cljs$cst$792$amount$$, $APP.$cljs$core$filter$cljs$0core$0IFn$0_invoke$0arity$02$$(function($p1__185753_SHARP_$$) {
      return $APP.$cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$($cljs$cst$817$paid$$, $APP.$cljs$cst$12$status$$.$cljs$core$IFn$_invoke$arity$1$($p1__185753_SHARP_$$));
    }, $group$jscomp$1$$))), $pending$jscomp$1$$ = $total$jscomp$5$$ - $paid$$, $n_items$$ = $APP.$cljs$core$count$$($group$jscomp$1$$), $n_paid$$ = $APP.$cljs$core$count$$($APP.$cljs$core$filter$cljs$0core$0IFn$0_invoke$0arity$02$$(function($p1__185756_SHARP_$$) {
      return $APP.$cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$($cljs$cst$817$paid$$, $APP.$cljs$cst$12$status$$.$cljs$core$IFn$_invoke$arity$1$($p1__185756_SHARP_$$));
    }, $group$jscomp$1$$)), $n_crit$jscomp$1$$ = $APP.$cljs$core$count$$($APP.$cljs$core$filter$cljs$0core$0IFn$0_invoke$0arity$02$$(function($p1__185759_SHARP_$$) {
      return $APP.$cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$($cljs$cst$835$critical$$, $cljs$cst$815$priority$$.$cljs$core$IFn$_invoke$arity$1$($p1__185759_SHARP_$$));
    }, $group$jscomp$1$$)), $all_paid$jscomp$1$$ = $APP.$cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$($n_paid$$, $n_items$$), $has_now$$ = function() {
      var $year$jscomp$2$$ = $d$jscomp$154$$.getFullYear(), $now$$ = new Date(), $n_year$$ = $now$$.getFullYear();
      return $APP.$cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$($d$jscomp$154$$.getMonth(), $now$$.getMonth()) && $APP.$cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$($year$jscomp$2$$, $n_year$$);
    }();
    return $APP.$cljs$core$PersistentHashMap$fromArrays$$([$cljs$cst$875$all_paid$$, $cljs$cst$876$entries$$, $APP.$cljs$cst$14$pending$$, $cljs$cst$877$n_crit$$, $APP.$cljs$cst$726$total$$, $APP.$cljs$cst$408$label$$, $cljs$cst$817$paid$$, $cljs$cst$878$n_paid$$, $cljs$cst$879$n_items$$, $cljs$cst$880$has_now$$], [$all_paid$jscomp$1$$, $group$jscomp$1$$, $pending$jscomp$1$$, $n_crit$jscomp$1$$, $total$jscomp$5$$, $label$jscomp$15$$, $paid$$, $n_paid$$, $n_items$$, $has_now$$]);
  }, $entries$jscomp$5_groups_sorted$$);
};
$amp$pages$budget$cash_flow$status_classes$$ = function($status$jscomp$10$$) {
  switch($status$jscomp$10$$ instanceof $APP.$cljs$core$Keyword$$ ? $status$jscomp$10$$.$fqn$ : null) {
    case "paid":
      return new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$cljs$cst$881$dot$$, "bg-emerald-400/20 dark:bg-emerald-300/20", $APP.$cljs$cst$392$text$$, "text-emerald-600 dark:text-emerald-300", $APP.$cljs$cst$408$label$$, "COST, PAID"], null);
    case "pending":
      return new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$cljs$cst$881$dot$$, "bg-slate-400/15 dark:bg-slate-500/15", $APP.$cljs$cst$392$text$$, "text-slate-500", $APP.$cljs$cst$408$label$$, "DUE"], null);
    default:
      return new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$cljs$cst$881$dot$$, "bg-slate-400/15 dark:bg-slate-500/15", $APP.$cljs$cst$392$text$$, "text-slate-500", $APP.$cljs$cst$408$label$$, "—"], null);
  }
};
$amp$pages$budget$cash_flow$timeline_node$$ = function($G__185808_187025_G__185814_map__185802_map__185802__$1_map__185807__$1_props__41575__auto__$jscomp$65_status$jscomp$11_vec__185799$$, $G__185809_187026_entry$jscomp$29_maybe_ref__41576__auto__$jscomp$65$$) {
  $G__185808_187025_G__185814_map__185802_map__185802__$1_map__185807__$1_props__41575__auto__$jscomp$65_status$jscomp$11_vec__185799$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__185808_187025_G__185814_map__185802_map__185802__$1_map__185807__$1_props__41575__auto__$jscomp$65_status$jscomp$11_vec__185799$$), $G__185809_187026_entry$jscomp$29_maybe_ref__41576__auto__$jscomp$65$$], null);
  $G__185808_187025_G__185814_map__185802_map__185802__$1_map__185807__$1_props__41575__auto__$jscomp$65_status$jscomp$11_vec__185799$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__185808_187025_G__185814_map__185802_map__185802__$1_map__185807__$1_props__41575__auto__$jscomp$65_status$jscomp$11_vec__185799$$, 0, null);
  $G__185808_187025_G__185814_map__185802_map__185802__$1_map__185807__$1_props__41575__auto__$jscomp$65_status$jscomp$11_vec__185799$$ = $APP.$cljs$core$__destructure_map$$($G__185808_187025_G__185814_map__185802_map__185802__$1_map__185807__$1_props__41575__auto__$jscomp$65_status$jscomp$11_vec__185799$$);
  $G__185809_187026_entry$jscomp$29_maybe_ref__41576__auto__$jscomp$65$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__185808_187025_G__185814_map__185802_map__185802__$1_map__185807__$1_props__41575__auto__$jscomp$65_status$jscomp$11_vec__185799$$, $cljs$cst$882$entry$$);
  var $idx$jscomp$74$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__185808_187025_G__185814_map__185802_map__185802__$1_map__185807__$1_props__41575__auto__$jscomp$65_status$jscomp$11_vec__185799$$, $APP.$cljs$cst$758$idx$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__185808_187025_G__185814_map__185802_map__185802__$1_map__185807__$1_props__41575__auto__$jscomp$65_status$jscomp$11_vec__185799$$ = $APP.$cljs$core$__destructure_map$$($G__185809_187026_entry$jscomp$29_maybe_ref__41576__auto__$jscomp$65$$);
  var $title$jscomp$27$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__185808_187025_G__185814_map__185802_map__185802__$1_map__185807__$1_props__41575__auto__$jscomp$65_status$jscomp$11_vec__185799$$, $APP.$cljs$cst$287$title$$), $due$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__185808_187025_G__185814_map__185802_map__185802__$1_map__185807__$1_props__41575__auto__$jscomp$65_status$jscomp$11_vec__185799$$, $cljs$cst$814$due$$), $amount$jscomp$1$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__185808_187025_G__185814_map__185802_map__185802__$1_map__185807__$1_props__41575__auto__$jscomp$65_status$jscomp$11_vec__185799$$, 
  $cljs$cst$792$amount$$), $priority$jscomp$1$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__185808_187025_G__185814_map__185802_map__185802__$1_map__185807__$1_props__41575__auto__$jscomp$65_status$jscomp$11_vec__185799$$, $cljs$cst$815$priority$$);
  $G__185808_187025_G__185814_map__185802_map__185802__$1_map__185807__$1_props__41575__auto__$jscomp$65_status$jscomp$11_vec__185799$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__185808_187025_G__185814_map__185802_map__185802__$1_map__185807__$1_props__41575__auto__$jscomp$65_status$jscomp$11_vec__185799$$, $APP.$cljs$cst$12$status$$);
  var $node_ref$$ = $APP.$helix$hooks$use_ref$$(null), $paid_QMARK_$jscomp$2$$ = $APP.$cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$($APP.$cljs$core$keyword$$.$cljs$core$IFn$_invoke$arity$1$($G__185808_187025_G__185814_map__185802_map__185802__$1_map__185807__$1_props__41575__auto__$jscomp$65_status$jscomp$11_vec__185799$$), $cljs$cst$817$paid$$), $st$jscomp$2$$ = $amp$pages$budget$cash_flow$status_classes$$($APP.$cljs$core$keyword$$.$cljs$core$IFn$_invoke$arity$1$($G__185808_187025_G__185814_map__185802_map__185802__$1_map__185807__$1_props__41575__auto__$jscomp$65_status$jscomp$11_vec__185799$$));
  $G__185808_187025_G__185814_map__185802_map__185802__$1_map__185807__$1_props__41575__auto__$jscomp$65_status$jscomp$11_vec__185799$$ = $APP.$helix$hooks$wrap_fx$$(function() {
    return $APP.$cljs$core$truth_$$($APP.$cljs$core$_deref$$($node_ref$$)) ? $APP.$module$node_modules$gsap$dist$gsap$$.gsap.fromTo($APP.$cljs$core$_deref$$($node_ref$$), {opacity:0, x:-20}, {opacity:1, x:0, duration:0.4, delay:$idx$jscomp$74$$ * 0.06, ease:"power2.out"}) : null;
  });
  $G__185809_187026_entry$jscomp$29_maybe_ref__41576__auto__$jscomp$65$$ = [];
  $APP.$helix$hooks$raw_use_effect$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$hooks$raw_use_effect$$.$cljs$core$IFn$_invoke$arity$2$($G__185808_187025_G__185814_map__185802_map__185802__$1_map__185807__$1_props__41575__auto__$jscomp$65_status$jscomp$11_vec__185799$$, $G__185809_187026_entry$jscomp$29_maybe_ref__41576__auto__$jscomp$65$$) : $APP.$helix$hooks$raw_use_effect$$.call(null, $G__185808_187025_G__185814_map__185802_map__185802__$1_map__185807__$1_props__41575__auto__$jscomp$65_status$jscomp$11_vec__185799$$, 
  $G__185809_187026_entry$jscomp$29_maybe_ref__41576__auto__$jscomp$65$$);
  $G__185808_187025_G__185814_map__185802_map__185802__$1_map__185807__$1_props__41575__auto__$jscomp$65_status$jscomp$11_vec__185799$$ = function() {
    return {ref:$node_ref$$, className:$APP.$helix$impl$props$normalize_class$$("relative flex items-stretch opacity-0 " + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($paid_QMARK_$jscomp$2$$ ? "opacity-50" : null)), children:[function() {
      var $G__185820$$ = function() {
        return {className:"relative flex flex-col items-center", style:{width:$APP.$helix$impl$props$__GT_js$$("28px"), minWidth:$APP.$helix$impl$props$__GT_js$$("28px")}, children:[function() {
          var $G__185828$$ = {className:$APP.$helix$impl$props$normalize_class$$("mt-4 h-2.5 w-2.5 rounded-full border-2 flex-shrink-0 " + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($amp$pages$budget$cash_flow$priority_dot_classes$$($APP.$cljs$core$keyword$$.$cljs$core$IFn$_invoke$arity$1$($priority$jscomp$1$$), $paid_QMARK_$jscomp$2$$)))};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__185828$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__185828$$);
        }(), function() {
          var $G__185832$$ = {className:"flex-1 border-l border-dashed border-slate-300 dark:border-slate-700"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__185832$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__185832$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__185820$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__185820$$);
    }(), function() {
      var $G__185838_G__185844$jscomp$inline_3983$$ = {className:"w-4 border-t border-dashed border-slate-300 dark:border-slate-600", style:{marginTop:$APP.$helix$impl$props$__GT_js$$("1px")}};
      $G__185838_G__185844$jscomp$inline_3983$$ = {className:"flex items-start pt-[18px]", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__185838_G__185844$jscomp$inline_3983$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__185838_G__185844$jscomp$inline_3983$$)};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__185838_G__185844$jscomp$inline_3983$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__185838_G__185844$jscomp$inline_3983$$);
    }(), function() {
      var $G__185852$$ = function() {
        return {className:"flex-1 pb-5 pt-1 pl-1", children:[function() {
          var $G__185858$$ = function() {
            return {className:"flex items-center gap-2 mb-1", children:[function() {
              var $G__185862_JSCompiler_temp_const$jscomp$3040$$ = $APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-mono", "text-[11px]", "text-slate-600  dark:text-slate-400"])));
              var $JSCompiler_inline_result$jscomp$3041_d$jscomp$inline_3395$$ = $amp$pages$budget$cash_flow$parse_date$$($due$$);
              $JSCompiler_inline_result$jscomp$3041_d$jscomp$inline_3395$$ = "" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($JSCompiler_inline_result$jscomp$3041_d$jscomp$inline_3395$$.toLocaleString("en-US", {month:"short"})) + " " + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($JSCompiler_inline_result$jscomp$3041_d$jscomp$inline_3395$$.getDate());
              $G__185862_JSCompiler_temp_const$jscomp$3040$$ = {className:$G__185862_JSCompiler_temp_const$jscomp$3040$$, children:$JSCompiler_inline_result$jscomp$3041_d$jscomp$inline_3395$$};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__185862_JSCompiler_temp_const$jscomp$3040$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__185862_JSCompiler_temp_const$jscomp$3040$$);
            }(), function() {
              var $G__185866$$ = {className:$APP.$helix$impl$props$normalize_class$$("px-1.5 py-px text-[9px] font-bold uppercase tracking-widest font-mono " + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($amp$pages$budget$cash_flow$priority_tag_bg$$($APP.$cljs$core$keyword$$.$cljs$core$IFn$_invoke$arity$1$($priority$jscomp$1$$))) + " " + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($amp$pages$budget$cash_flow$priority_tag_text$$($APP.$cljs$core$keyword$$.$cljs$core$IFn$_invoke$arity$1$($priority$jscomp$1$$)))), 
              children:$amp$pages$budget$cash_flow$priority_label$$($APP.$cljs$core$keyword$$.$cljs$core$IFn$_invoke$arity$1$($priority$jscomp$1$$))};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__185866$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__185866$$);
            }(), function() {
              var $G__185874$$ = {className:$APP.$helix$impl$props$normalize_class$$("px-1.5 py-px text-[9px] font-bold uppercase tracking-widest font-mono " + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($cljs$cst$881$dot$$.$cljs$core$IFn$_invoke$arity$1$($st$jscomp$2$$)) + " " + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($APP.$cljs$cst$392$text$$.$cljs$core$IFn$_invoke$arity$1$($st$jscomp$2$$))), children:$APP.$cljs$cst$408$label$$.$cljs$core$IFn$_invoke$arity$1$($st$jscomp$2$$)};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__185874$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__185874$$);
            }()]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__185858$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__185858$$);
        }(), function() {
          var $G__185882$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-sm leading-snug " + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($paid_QMARK_$jscomp$2$$ ? "" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$("text-slate-600  dark:text-slate-400") + " line-through" : "text-slate-700  dark:text-slate-300")), children:$title$jscomp$27$$};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__185882$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__185882$$);
        }(), function() {
          var $G__185886$$ = {className:$APP.$helix$impl$props$normalize_class$$("mt-0.5 font-mono text-base font-semibold tracking-tight " + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($amp$pages$budget$cash_flow$priority_amount_class$$($APP.$cljs$core$keyword$$.$cljs$core$IFn$_invoke$arity$1$($priority$jscomp$1$$), $paid_QMARK_$jscomp$2$$))), children:$amp$pages$budget$cash_flow$format_currency$$($amount$jscomp$1$$)};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__185886$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__185886$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__185852$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__185852$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__185808_187025_G__185814_map__185802_map__185802__$1_map__185807__$1_props__41575__auto__$jscomp$65_status$jscomp$11_vec__185799$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__185808_187025_G__185814_map__185802_map__185802__$1_map__185807__$1_props__41575__auto__$jscomp$65_status$jscomp$11_vec__185799$$);
};
$amp$pages$budget$cash_flow$now_marker$$ = function($G__185901_187027_G__185906_props__41575__auto__$jscomp$66$$) {
  $APP.$helix$core$extract_cljs_props$$($G__185901_187027_G__185906_props__41575__auto__$jscomp$66$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $ref$jscomp$20$$ = $APP.$helix$hooks$use_ref$$(null);
  $G__185901_187027_G__185906_props__41575__auto__$jscomp$66$$ = $APP.$helix$hooks$wrap_fx$$(function() {
    return $APP.$cljs$core$truth_$$($APP.$cljs$core$_deref$$($ref$jscomp$20$$)) ? $APP.$module$node_modules$gsap$dist$gsap$$.gsap.fromTo($APP.$cljs$core$_deref$$($ref$jscomp$20$$), {opacity:0, scaleX:0}, {opacity:1, scaleX:1, duration:0.6, delay:0.2, ease:"power3.out"}) : null;
  });
  var $G__185902_187028$$ = [];
  $APP.$helix$hooks$raw_use_effect$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$hooks$raw_use_effect$$.$cljs$core$IFn$_invoke$arity$2$($G__185901_187027_G__185906_props__41575__auto__$jscomp$66$$, $G__185902_187028$$) : $APP.$helix$hooks$raw_use_effect$$.call(null, $G__185901_187027_G__185906_props__41575__auto__$jscomp$66$$, $G__185902_187028$$);
  $G__185901_187027_G__185906_props__41575__auto__$jscomp$66$$ = function() {
    return {ref:$ref$jscomp$20$$, className:"flex items-center gap-2 py-3 origin-left opacity-0", children:[function() {
      var $G__185912$$ = function() {
        return {className:"relative flex items-center justify-center", style:{width:$APP.$helix$impl$props$__GT_js$$("28px"), minWidth:$APP.$helix$impl$props$__GT_js$$("28px")}, children:[function() {
          var $G__185918$$ = {className:"absolute h-5 w-5 animate-ping rounded-full bg-rose-400/30"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__185918$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__185918$$);
        }(), function() {
          var $G__185922$$ = {className:"h-2.5 w-2.5 rounded-full bg-rose-400"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__185922$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__185922$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__185912$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__185912$$);
    }(), function() {
      var $G__185926$$ = {className:"flex-1 h-px bg-rose-400/50"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__185926$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__185926$$);
    }(), function() {
      var $G__185930$$ = {className:"font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-rose-400 pr-1", children:"now"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__185930$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__185930$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__185901_187027_G__185906_props__41575__auto__$jscomp$66$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__185901_187027_G__185906_props__41575__auto__$jscomp$66$$);
};
$amp$pages$budget$cash_flow$month_header$$ = function($G__185950_187029_G__185953_map__185947_map__185947__$1_props__41575__auto__$jscomp$67_vec__185944$$, $G__185951_187030_maybe_ref__41576__auto__$jscomp$67$$) {
  $G__185950_187029_G__185953_map__185947_map__185947__$1_props__41575__auto__$jscomp$67_vec__185944$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__185950_187029_G__185953_map__185947_map__185947__$1_props__41575__auto__$jscomp$67_vec__185944$$), $G__185951_187030_maybe_ref__41576__auto__$jscomp$67$$], null);
  $G__185950_187029_G__185953_map__185947_map__185947__$1_props__41575__auto__$jscomp$67_vec__185944$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__185950_187029_G__185953_map__185947_map__185947__$1_props__41575__auto__$jscomp$67_vec__185944$$, 0, null);
  $G__185950_187029_G__185953_map__185947_map__185947__$1_props__41575__auto__$jscomp$67_vec__185944$$ = $APP.$cljs$core$__destructure_map$$($G__185950_187029_G__185953_map__185947_map__185947__$1_props__41575__auto__$jscomp$67_vec__185944$$);
  var $label$jscomp$16$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__185950_187029_G__185953_map__185947_map__185947__$1_props__41575__auto__$jscomp$67_vec__185944$$, $APP.$cljs$cst$408$label$$), $idx$jscomp$75$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__185950_187029_G__185953_map__185947_map__185947__$1_props__41575__auto__$jscomp$67_vec__185944$$, $APP.$cljs$cst$758$idx$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $ref$jscomp$21$$ = $APP.$helix$hooks$use_ref$$(null);
  $G__185950_187029_G__185953_map__185947_map__185947__$1_props__41575__auto__$jscomp$67_vec__185944$$ = $APP.$helix$hooks$wrap_fx$$(function() {
    return $APP.$cljs$core$truth_$$($APP.$cljs$core$_deref$$($ref$jscomp$21$$)) ? $APP.$module$node_modules$gsap$dist$gsap$$.gsap.fromTo($APP.$cljs$core$_deref$$($ref$jscomp$21$$), {opacity:0, y:8}, {opacity:1, y:0, duration:0.35, delay:0.1 + $idx$jscomp$75$$ * 0.05, ease:"power2.out"}) : null;
  });
  $G__185951_187030_maybe_ref__41576__auto__$jscomp$67$$ = [];
  $APP.$helix$hooks$raw_use_effect$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$hooks$raw_use_effect$$.$cljs$core$IFn$_invoke$arity$2$($G__185950_187029_G__185953_map__185947_map__185947__$1_props__41575__auto__$jscomp$67_vec__185944$$, $G__185951_187030_maybe_ref__41576__auto__$jscomp$67$$) : $APP.$helix$hooks$raw_use_effect$$.call(null, $G__185950_187029_G__185953_map__185947_map__185947__$1_props__41575__auto__$jscomp$67_vec__185944$$, $G__185951_187030_maybe_ref__41576__auto__$jscomp$67$$);
  $G__185950_187029_G__185953_map__185947_map__185947__$1_props__41575__auto__$jscomp$67_vec__185944$$ = function() {
    return {ref:$ref$jscomp$21$$, className:"flex items-center gap-3 pt-8 pb-2 opacity-0", children:[function() {
      var $G__185957$$ = {className:"h-px w-8 bg-pink-500/70"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__185957$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__185957$$);
    }(), function() {
      var $G__185961$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$("font-mono;text-[10px];font-bold;uppercase;tracking-[0.25em];text-slate-600  dark:text-slate-400".split(";")))), children:$label$jscomp$16$$};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__185961$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__185961$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__185950_187029_G__185953_map__185947_map__185947__$1_props__41575__auto__$jscomp$67_vec__185944$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__185950_187029_G__185953_map__185947_map__185947__$1_props__41575__auto__$jscomp$67_vec__185944$$);
};
$amp$pages$budget$cash_flow$month_summary_row$$ = function($G__186048_187031_G__186081_map__186020_map__186020__$1_map__186034__$1_props__41575__auto__$jscomp$68_vec__186017$$, $G__186049_187032_all_paid$jscomp$2_maybe_ref__41576__auto__$jscomp$68_rollup$$) {
  $G__186048_187031_G__186081_map__186020_map__186020__$1_map__186034__$1_props__41575__auto__$jscomp$68_vec__186017$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__186048_187031_G__186081_map__186020_map__186020__$1_map__186034__$1_props__41575__auto__$jscomp$68_vec__186017$$), $G__186049_187032_all_paid$jscomp$2_maybe_ref__41576__auto__$jscomp$68_rollup$$], null);
  $G__186048_187031_G__186081_map__186020_map__186020__$1_map__186034__$1_props__41575__auto__$jscomp$68_vec__186017$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__186048_187031_G__186081_map__186020_map__186020__$1_map__186034__$1_props__41575__auto__$jscomp$68_vec__186017$$, 0, null);
  $G__186048_187031_G__186081_map__186020_map__186020__$1_map__186034__$1_props__41575__auto__$jscomp$68_vec__186017$$ = $APP.$cljs$core$__destructure_map$$($G__186048_187031_G__186081_map__186020_map__186020__$1_map__186034__$1_props__41575__auto__$jscomp$68_vec__186017$$);
  $G__186049_187032_all_paid$jscomp$2_maybe_ref__41576__auto__$jscomp$68_rollup$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__186048_187031_G__186081_map__186020_map__186020__$1_map__186034__$1_props__41575__auto__$jscomp$68_vec__186017$$, $cljs$cst$883$rollup$$);
  var $idx$jscomp$76$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__186048_187031_G__186081_map__186020_map__186020__$1_map__186034__$1_props__41575__auto__$jscomp$68_vec__186017$$, $APP.$cljs$cst$758$idx$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__186048_187031_G__186081_map__186020_map__186020__$1_map__186034__$1_props__41575__auto__$jscomp$68_vec__186017$$ = $APP.$cljs$core$__destructure_map$$($G__186049_187032_all_paid$jscomp$2_maybe_ref__41576__auto__$jscomp$68_rollup$$);
  var $label$jscomp$17$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__186048_187031_G__186081_map__186020_map__186020__$1_map__186034__$1_props__41575__auto__$jscomp$68_vec__186017$$, $APP.$cljs$cst$408$label$$), $total$jscomp$6$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__186048_187031_G__186081_map__186020_map__186020__$1_map__186034__$1_props__41575__auto__$jscomp$68_vec__186017$$, $APP.$cljs$cst$726$total$$), $paid$jscomp$1$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__186048_187031_G__186081_map__186020_map__186020__$1_map__186034__$1_props__41575__auto__$jscomp$68_vec__186017$$, 
  $cljs$cst$817$paid$$), $pending$jscomp$2$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__186048_187031_G__186081_map__186020_map__186020__$1_map__186034__$1_props__41575__auto__$jscomp$68_vec__186017$$, $APP.$cljs$cst$14$pending$$), $n_items$jscomp$1$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__186048_187031_G__186081_map__186020_map__186020__$1_map__186034__$1_props__41575__auto__$jscomp$68_vec__186017$$, $cljs$cst$879$n_items$$), $n_crit$jscomp$2$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__186048_187031_G__186081_map__186020_map__186020__$1_map__186034__$1_props__41575__auto__$jscomp$68_vec__186017$$, 
  $cljs$cst$877$n_crit$$);
  $G__186049_187032_all_paid$jscomp$2_maybe_ref__41576__auto__$jscomp$68_rollup$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__186048_187031_G__186081_map__186020_map__186020__$1_map__186034__$1_props__41575__auto__$jscomp$68_vec__186017$$, $cljs$cst$875$all_paid$$);
  var $has_now$jscomp$1$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__186048_187031_G__186081_map__186020_map__186020__$1_map__186034__$1_props__41575__auto__$jscomp$68_vec__186017$$, $cljs$cst$880$has_now$$), $ref$jscomp$22$$ = $APP.$helix$hooks$use_ref$$(null), $cls$jscomp$2$$ = $APP.$cljs$core$truth_$$($G__186049_187032_all_paid$jscomp$2_maybe_ref__41576__auto__$jscomp$68_rollup$$) ? new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$393$border$$, "border-emerald-500 dark:border-emerald-300", 
  $cljs$cst$874$fill$$, "bg-transparent", $APP.$cljs$cst$392$text$$, "text-emerald-600 dark:text-emerald-300"], null) : $n_crit$jscomp$2$$ > 0 ? new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$393$border$$, "border-pink-600 dark:border-pink-300", $cljs$cst$874$fill$$, "bg-pink-600 dark:bg-pink-300", $APP.$cljs$cst$392$text$$, "text-pink-600 dark:text-pink-300"], null) : new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$393$border$$, "border-indigo-500 dark:border-indigo-300", 
  $cljs$cst$874$fill$$, "bg-indigo-500 dark:bg-indigo-300", $APP.$cljs$cst$392$text$$, "text-indigo-600 dark:text-indigo-300"], null);
  $G__186048_187031_G__186081_map__186020_map__186020__$1_map__186034__$1_props__41575__auto__$jscomp$68_vec__186017$$ = $APP.$helix$hooks$wrap_fx$$(function() {
    return $APP.$cljs$core$truth_$$($APP.$cljs$core$_deref$$($ref$jscomp$22$$)) ? $APP.$module$node_modules$gsap$dist$gsap$$.gsap.fromTo($APP.$cljs$core$_deref$$($ref$jscomp$22$$), {opacity:0, x:-16}, {opacity:1, x:0, duration:0.35, delay:$idx$jscomp$76$$ * 0.05, ease:"power2.out"}) : null;
  });
  $G__186049_187032_all_paid$jscomp$2_maybe_ref__41576__auto__$jscomp$68_rollup$$ = [];
  $APP.$helix$hooks$raw_use_effect$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$hooks$raw_use_effect$$.$cljs$core$IFn$_invoke$arity$2$($G__186048_187031_G__186081_map__186020_map__186020__$1_map__186034__$1_props__41575__auto__$jscomp$68_vec__186017$$, $G__186049_187032_all_paid$jscomp$2_maybe_ref__41576__auto__$jscomp$68_rollup$$) : $APP.$helix$hooks$raw_use_effect$$.call(null, $G__186048_187031_G__186081_map__186020_map__186020__$1_map__186034__$1_props__41575__auto__$jscomp$68_vec__186017$$, 
  $G__186049_187032_all_paid$jscomp$2_maybe_ref__41576__auto__$jscomp$68_rollup$$);
  $G__186048_187031_G__186081_map__186020_map__186020__$1_map__186034__$1_props__41575__auto__$jscomp$68_vec__186017$$ = function() {
    return {ref:$ref$jscomp$22$$, className:"relative flex items-stretch opacity-0", children:[function() {
      var $G__186094$$ = function() {
        return {className:"relative flex flex-col items-center", style:{width:$APP.$helix$impl$props$__GT_js$$("28px"), minWidth:$APP.$helix$impl$props$__GT_js$$("28px")}, children:[function() {
          var $G__186116$$ = {className:$APP.$helix$impl$props$normalize_class$$("mt-4 h-2.5 w-2.5 rounded-full border-2 flex-shrink-0 " + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($APP.$cljs$cst$393$border$$.$cljs$core$IFn$_invoke$arity$1$($cls$jscomp$2$$)) + " " + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($cljs$cst$874$fill$$.$cljs$core$IFn$_invoke$arity$1$($cls$jscomp$2$$)))};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__186116$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__186116$$);
        }(), function() {
          var $G__186121$$ = {className:"flex-1 border-l border-dashed border-slate-300 dark:border-slate-700"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__186121$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__186121$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__186094$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__186094$$);
    }(), function() {
      var $G__186127_G__186131$jscomp$inline_3986$$ = {className:"w-4 border-t border-dashed border-slate-300 dark:border-slate-600", style:{marginTop:$APP.$helix$impl$props$__GT_js$$("1px")}};
      $G__186127_G__186131$jscomp$inline_3986$$ = {className:"flex items-start pt-[18px]", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__186127_G__186131$jscomp$inline_3986$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__186127_G__186131$jscomp$inline_3986$$)};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__186127_G__186131$jscomp$inline_3986$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__186127_G__186131$jscomp$inline_3986$$);
    }(), function() {
      var $G__186138$$ = function() {
        return {className:"flex-1 pb-4 pt-1 pl-1", children:[function() {
          var $G__186142$$ = function() {
            return {className:"flex items-center gap-2 mb-1", children:[function() {
              var $G__186150$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$("font-mono;text-xs;font-bold;uppercase;tracking-wider;text-slate-900  dark:text-slate-100".split(";")))), children:$label$jscomp$17$$};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__186150$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__186150$$);
            }(), function() {
              var $G__186158$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-mono", "text-[10px]", "text-slate-600  dark:text-slate-400"]))), children:"" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($n_items$jscomp$1$$) + " items"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__186158$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__186158$$);
            }(), $APP.$cljs$core$truth_$$($has_now$jscomp$1$$) ? function() {
              var $G__186170$$ = {className:"px-1.5 py-px text-[9px] font-bold uppercase tracking-widest font-mono bg-emerald-500/15 text-emerald-600 dark:bg-emerald-300/15 dark:text-emerald-300", children:"NOW"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__186170$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__186170$$);
            }() : null, $n_crit$jscomp$2$$ > 0 ? function() {
              var $G__186190$$ = {className:"px-1.5 py-px text-[9px] font-bold uppercase tracking-widest font-mono bg-pink-500/15 text-pink-600 dark:text-pink-300", children:"" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($n_crit$jscomp$2$$) + " crit"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__186190$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__186190$$);
            }() : null]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__186142$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__186142$$);
        }(), function() {
          var $G__186215$$ = function() {
            return {className:"flex items-baseline gap-3", children:[function() {
              var $G__186219$$ = {className:$APP.$helix$impl$props$normalize_class$$("font-mono text-lg font-bold tracking-tight " + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($APP.$cljs$cst$392$text$$.$cljs$core$IFn$_invoke$arity$1$($cls$jscomp$2$$))), children:$amp$pages$budget$cash_flow$format_currency$$($total$jscomp$6$$)};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__186219$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__186219$$);
            }(), $paid$jscomp$1$$ > 0 ? function() {
              var $G__186225$$ = {className:"font-mono text-[11px] text-emerald-600/60 dark:text-emerald-300/60", children:"" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($amp$pages$budget$cash_flow$format_currency$$($paid$jscomp$1$$)) + " COST, PAID"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__186225$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__186225$$);
            }() : null, $pending$jscomp$2$$ > 0 ? function() {
              var $G__186233$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-mono", "text-[11px]", "text-slate-600  dark:text-slate-400"]))), children:"" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($amp$pages$budget$cash_flow$format_currency$$($pending$jscomp$2$$)) + " due"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__186233$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__186233$$);
            }() : null]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__186215$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__186215$$);
        }(), function() {
          var $G__186245_G__186249$jscomp$inline_3989$$ = {className:"absolute left-0 top-0 h-px bg-emerald-500/50 dark:bg-emerald-300/50", style:{width:$APP.$helix$impl$props$__GT_js$$("" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($total$jscomp$6$$ > 0 ? Math.round($paid$jscomp$1$$ / $total$jscomp$6$$ * 100) : 0) + "%")}};
          $G__186245_G__186249$jscomp$inline_3989$$ = {className:"mt-1.5 h-px w-full bg-slate-200 dark:bg-slate-800 relative", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__186245_G__186249$jscomp$inline_3989$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__186245_G__186249$jscomp$inline_3989$$)};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__186245_G__186249$jscomp$inline_3989$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__186245_G__186249$jscomp$inline_3989$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__186138$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__186138$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__186048_187031_G__186081_map__186020_map__186020__$1_map__186034__$1_props__41575__auto__$jscomp$68_vec__186017$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__186048_187031_G__186081_map__186020_map__186020__$1_map__186034__$1_props__41575__auto__$jscomp$68_vec__186017$$);
};
$amp$pages$budget$cash_flow$view_toggle$$ = function($G__186278_map__186268_map__186268__$1_props__41575__auto__$jscomp$69_vec__186265$$, $maybe_ref__41576__auto__$jscomp$69$$) {
  $G__186278_map__186268_map__186268__$1_props__41575__auto__$jscomp$69_vec__186265$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__186278_map__186268_map__186268__$1_props__41575__auto__$jscomp$69_vec__186265$$), $maybe_ref__41576__auto__$jscomp$69$$], null);
  $G__186278_map__186268_map__186268__$1_props__41575__auto__$jscomp$69_vec__186265$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__186278_map__186268_map__186268__$1_props__41575__auto__$jscomp$69_vec__186265$$, 0, null);
  $G__186278_map__186268_map__186268__$1_props__41575__auto__$jscomp$69_vec__186265$$ = $APP.$cljs$core$__destructure_map$$($G__186278_map__186268_map__186268__$1_props__41575__auto__$jscomp$69_vec__186265$$);
  var $expanded_QMARK_$jscomp$3$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__186278_map__186268_map__186268__$1_props__41575__auto__$jscomp$69_vec__186265$$, $cljs$cst$884$expanded_QMARK_$$), $on_toggle$jscomp$2$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__186278_map__186268_map__186268__$1_props__41575__auto__$jscomp$69_vec__186265$$, $APP.$cljs$cst$739$on_toggle$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__186278_map__186268_map__186268__$1_props__41575__auto__$jscomp$69_vec__186265$$ = function() {
    return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$("mb-4 flex items-center gap-2;font-mono;text-[10px];font-bold;uppercase;tracking-[0.25em];text-slate-600  dark:text-slate-400;transition-colors hover:text-pink-600 dark:hover:text-pink-300".split(";")))), onClick:$on_toggle$jscomp$2$$, children:[function() {
      var $G__186290$$ = {className:"h-px w-4 bg-pink-500/50"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__186290$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__186290$$);
    }(), $APP.$cljs$core$truth_$$($expanded_QMARK_$jscomp$3$$) ? "Summary" : "Expand", function() {
      var $G__186296$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-400  dark:text-slate-600"), children:$APP.$cljs$core$truth_$$($expanded_QMARK_$jscomp$3$$) ? "▲" : "▼"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__186296$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__186296$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("button", $G__186278_map__186268_map__186268__$1_props__41575__auto__$jscomp$69_vec__186265$$) : $APP.$helix$core$jsxs$$.call(null, "button", $G__186278_map__186268_map__186268__$1_props__41575__auto__$jscomp$69_vec__186265$$);
};
$amp$pages$budget$cash_flow$summary_header$$ = function($G__186504_187047_G__186529_map__186436_map__186436__$1_props__41575__auto__$jscomp$70_vec__186433$$, $G__186505_187048_entries$jscomp$6_maybe_ref__41576__auto__$jscomp$70$$) {
  $G__186504_187047_G__186529_map__186436_map__186436__$1_props__41575__auto__$jscomp$70_vec__186433$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__186504_187047_G__186529_map__186436_map__186436__$1_props__41575__auto__$jscomp$70_vec__186433$$), $G__186505_187048_entries$jscomp$6_maybe_ref__41576__auto__$jscomp$70$$], null);
  $G__186504_187047_G__186529_map__186436_map__186436__$1_props__41575__auto__$jscomp$70_vec__186433$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__186504_187047_G__186529_map__186436_map__186436__$1_props__41575__auto__$jscomp$70_vec__186433$$, 0, null);
  $G__186504_187047_G__186529_map__186436_map__186436__$1_props__41575__auto__$jscomp$70_vec__186433$$ = $APP.$cljs$core$__destructure_map$$($G__186504_187047_G__186529_map__186436_map__186436__$1_props__41575__auto__$jscomp$70_vec__186433$$);
  $G__186505_187048_entries$jscomp$6_maybe_ref__41576__auto__$jscomp$70$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__186504_187047_G__186529_map__186436_map__186436__$1_props__41575__auto__$jscomp$70_vec__186433$$, $cljs$cst$876$entries$$);
  var $target_total$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__186504_187047_G__186529_map__186436_map__186436__$1_props__41575__auto__$jscomp$70_vec__186433$$, $cljs$cst$885$target_total$$), $funds_raised$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__186504_187047_G__186529_map__186436_map__186436__$1_props__41575__auto__$jscomp$70_vec__186433$$, $cljs$cst$811$funds_raised$$);
  $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__186504_187047_G__186529_map__186436_map__186436__$1_props__41575__auto__$jscomp$70_vec__186433$$, $cljs$cst$810$debt_raised$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $paid_sum$$ = $APP.$cljs$core$reduce$cljs$0core$0IFn$0_invoke$0arity$03$$($APP.$cljs$core$_PLUS_$$, 0, $APP.$cljs$core$map$$.$cljs$core$IFn$_invoke$arity$2$($cljs$cst$792$amount$$, $APP.$cljs$core$filter$cljs$0core$0IFn$0_invoke$0arity$02$$(function($p1__186314_SHARP_$$) {
    return $APP.$cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$($cljs$cst$817$paid$$, $APP.$cljs$core$keyword$$.$cljs$core$IFn$_invoke$arity$1$($APP.$cljs$cst$12$status$$.$cljs$core$IFn$_invoke$arity$1$($p1__186314_SHARP_$$)));
  }, $G__186505_187048_entries$jscomp$6_maybe_ref__41576__auto__$jscomp$70$$))), $pending_sum$$ = $target_total$$ - $paid_sum$$, $critical_sum$$ = $APP.$cljs$core$reduce$cljs$0core$0IFn$0_invoke$0arity$03$$($APP.$cljs$core$_PLUS_$$, 0, $APP.$cljs$core$map$$.$cljs$core$IFn$_invoke$arity$2$($cljs$cst$792$amount$$, $APP.$cljs$core$filter$cljs$0core$0IFn$0_invoke$0arity$02$$(function($p1__186315_SHARP_$$) {
    return $APP.$cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$($cljs$cst$835$critical$$, $APP.$cljs$core$keyword$$.$cljs$core$IFn$_invoke$arity$1$($cljs$cst$815$priority$$.$cljs$core$IFn$_invoke$arity$1$($p1__186315_SHARP_$$)));
  }, $G__186505_187048_entries$jscomp$6_maybe_ref__41576__auto__$jscomp$70$$))), $gap$$ = $target_total$$ - $funds_raised$$, $next_due$$ = function() {
    var $d$jscomp$155$$ = new Date();
    $d$jscomp$155$$.setDate($d$jscomp$155$$.getDate() + 7);
    return $d$jscomp$155$$;
  }(), $ref$jscomp$23$$ = $APP.$helix$hooks$use_ref$$(null);
  $G__186504_187047_G__186529_map__186436_map__186436__$1_props__41575__auto__$jscomp$70_vec__186433$$ = $APP.$helix$hooks$wrap_fx$$(function() {
    return $APP.$cljs$core$truth_$$($APP.$cljs$core$_deref$$($ref$jscomp$23$$)) ? $APP.$module$node_modules$gsap$dist$gsap$$.gsap.fromTo($APP.$cljs$core$_deref$$($ref$jscomp$23$$), {opacity:0, y:-12}, {opacity:1, y:0, duration:0.5, ease:"power2.out"}) : null;
  });
  $G__186505_187048_entries$jscomp$6_maybe_ref__41576__auto__$jscomp$70$$ = [];
  $APP.$helix$hooks$raw_use_effect$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$hooks$raw_use_effect$$.$cljs$core$IFn$_invoke$arity$2$($G__186504_187047_G__186529_map__186436_map__186436__$1_props__41575__auto__$jscomp$70_vec__186433$$, $G__186505_187048_entries$jscomp$6_maybe_ref__41576__auto__$jscomp$70$$) : $APP.$helix$hooks$raw_use_effect$$.call(null, $G__186504_187047_G__186529_map__186436_map__186436__$1_props__41575__auto__$jscomp$70_vec__186433$$, $G__186505_187048_entries$jscomp$6_maybe_ref__41576__auto__$jscomp$70$$);
  $G__186504_187047_G__186529_map__186436_map__186436__$1_props__41575__auto__$jscomp$70_vec__186433$$ = function() {
    return {ref:$ref$jscomp$23$$, className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["mb-4 pb-5 opacity-0", "border-b", "border-slate-200 dark:border-white/15"]))), children:[function() {
      var $G__186541$$ = function() {
        return {className:"mb-6 flex items-center gap-3", children:[function() {
          var $G__186549$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["w-10", "h-px bg-pink-500/70"])))};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__186549$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__186549$$);
        }(), function() {
          var $G__186563$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$eyebrow_highlight$$), children:"4. "};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__186563$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__186563$$);
        }(), function() {
          var $G__186573$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$eyebrow_midlight$$), children:"Cash Flow"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__186573$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__186573$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__186541$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__186541$$);
    }(), function() {
      var $G__186587$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-mono", "text-3xl", "font-extrabold", "tracking-tight", "text-slate-900  dark:text-slate-100"]))), children:$amp$pages$budget$cash_flow$format_currency$$($target_total$$)};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__186587$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__186587$$);
    }(), function() {
      var $G__186601$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-mono", "text-[11px] mt-0.5", "text-slate-600  dark:text-slate-400"]))), children:"target total"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__186601$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__186601$$);
    }(), function() {
      var $G__186608$$ = function() {
        return {className:"mt-4 grid grid-cols-2 gap-4", children:[function() {
          var $G__186614$$ = function() {
            return {className:"border-l-2 border-emerald-500/90 dark:border-emerald-300/90 pl-3", children:[function() {
              var $G__186622$$ = {className:"font-mono text-lg uppercase tracking-widest text-emerald-600/50 dark:text-emerald-300/50 mb-1", children:"Funds Raised"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__186622$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__186622$$);
            }(), function() {
              var $G__186628$$ = {className:"font-mono text-lg font-bold text-emerald-600 dark:text-emerald-300", children:$amp$pages$budget$cash_flow$format_currency$$($funds_raised$$)};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__186628$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__186628$$);
            }()]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__186614$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__186614$$);
        }(), function() {
          var $G__186637$$ = function() {
            return {className:"border-l-2 border-pink-500/90 dark:border-pink-300/90 pl-3", children:[function() {
              var $G__186661$$ = {className:"font-mono text-lg uppercase tracking-widest text-pink-600/50 dark:text-pink-300/50 mb-1", children:"Remaining"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__186661$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__186661$$);
            }(), function() {
              var $G__186673$$ = {className:"font-mono text-lg font-bold text-pink-600 dark:text-pink-300", children:$amp$pages$budget$cash_flow$format_currency$$($gap$$)};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__186673$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__186673$$);
            }()]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__186637$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__186637$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__186608$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__186608$$);
    }(), function() {
      var $G__186689$$ = function() {
        return {className:"mt-3 grid grid-cols-2 gap-4", children:[function() {
          var $G__186698$$ = function() {
            return {className:"border-l-2 border-emerald-500/20 dark:border-emerald-300/20 pl-3", children:[function() {
              var $G__186702$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$("font-mono;text-lg;uppercase;tracking-widest;text-slate-600  dark:text-slate-400;mb-1".split(";")))), children:"COST, PAID"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__186702$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__186702$$);
            }(), function() {
              var $G__186714$$ = {className:"font-mono text-lg font-bold text-emerald-600 dark:text-emerald-300", children:$amp$pages$budget$cash_flow$format_currency$$($paid_sum$$)};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__186714$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__186714$$);
            }()]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__186698$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__186698$$);
        }(), function() {
          var $G__186722$$ = function() {
            return {className:$APP.$helix$impl$props$normalize_class$$("border-l-2 pl-3 " + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$("border-slate-200 dark:border-white/15")), children:[function() {
              var $G__186731$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$("font-mono;text-lg;uppercase;tracking-widest;text-slate-600  dark:text-slate-400;mb-1".split(";")))), children:"Pending"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__186731$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__186731$$);
            }(), function() {
              var $G__186742$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-mono", "text-lg", "font-bold", " text-pink-600 dark:text-pink-300"]))), children:$amp$pages$budget$cash_flow$format_currency$$($pending_sum$$)};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__186742$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__186742$$);
            }()]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__186722$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__186722$$);
        }(), function() {
          var $G__186754$$ = function() {
            return {className:"border-l-2 border-pink-500/30 pl-3", children:[function() {
              var $G__186758$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$("font-mono;text-lg;uppercase;tracking-widest;text-slate-600  dark:text-slate-400;mb-1".split(";")))), children:"Critical"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__186758$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__186758$$);
            }(), function() {
              var $G__186762$$ = {className:"font-mono text-lg font-bold text-pink-600 dark:text-pink-300", children:$amp$pages$budget$cash_flow$format_currency$$($critical_sum$$)};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__186762$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__186762$$);
            }()]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__186754$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__186754$$);
        }(), function() {
          var $G__186766$$ = function() {
            return {className:"border-l-2 border-indigo-500/30 dark:border-indigo-400/30 pl-3", children:[function() {
              var $G__186770$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$("font-mono;text-lg;uppercase;tracking-widest;text-slate-600  dark:text-slate-400;mb-1".split(";")))), children:"Next Due"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__186770$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__186770$$);
            }(), function() {
              var $G__186774$$ = {className:"font-mono text-base font-bold text-indigo-600 dark:text-indigo-300", children:"" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($next_due$$.toLocaleString("en-US", {month:"short"})) + " " + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($next_due$$.getDate())};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__186774$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__186774$$);
            }()]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__186766$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__186766$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__186689$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__186689$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__186504_187047_G__186529_map__186436_map__186436__$1_props__41575__auto__$jscomp$70_vec__186433$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__186504_187047_G__186529_map__186436_map__186436__$1_props__41575__auto__$jscomp$70_vec__186433$$);
};
$amp$pages$budget$cash_flow$cash_flow$$ = function($G__186792_187119_G__186795_map__186785_map__186785__$1_props__41575__auto__$jscomp$71_vec__186782_vec__186786_vec__186789$$, $G__186793_187120_maybe_ref__41576__auto__$jscomp$71$$) {
  $G__186792_187119_G__186795_map__186785_map__186785__$1_props__41575__auto__$jscomp$71_vec__186782_vec__186786_vec__186789$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__186792_187119_G__186795_map__186785_map__186785__$1_props__41575__auto__$jscomp$71_vec__186782_vec__186786_vec__186789$$), $G__186793_187120_maybe_ref__41576__auto__$jscomp$71$$], null);
  $G__186792_187119_G__186795_map__186785_map__186785__$1_props__41575__auto__$jscomp$71_vec__186782_vec__186786_vec__186789$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__186792_187119_G__186795_map__186785_map__186785__$1_props__41575__auto__$jscomp$71_vec__186782_vec__186786_vec__186789$$, 0, null);
  $G__186792_187119_G__186795_map__186785_map__186785__$1_props__41575__auto__$jscomp$71_vec__186782_vec__186786_vec__186789$$ = $APP.$cljs$core$__destructure_map$$($G__186792_187119_G__186795_map__186785_map__186785__$1_props__41575__auto__$jscomp$71_vec__186782_vec__186786_vec__186789$$);
  var $id$jscomp$94$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__186792_187119_G__186795_map__186785_map__186785__$1_props__41575__auto__$jscomp$71_vec__186782_vec__186786_vec__186789$$, $APP.$cljs$cst$285$id$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__186792_187119_G__186795_map__186785_map__186785__$1_props__41575__auto__$jscomp$71_vec__186782_vec__186786_vec__186789$$ = $APP.$helix$hooks$use_state$$(null);
  var $error$jscomp$22$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__186792_187119_G__186795_map__186785_map__186785__$1_props__41575__auto__$jscomp$71_vec__186782_vec__186786_vec__186789$$, 0, null);
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__186792_187119_G__186795_map__186785_map__186785__$1_props__41575__auto__$jscomp$71_vec__186782_vec__186786_vec__186789$$, 1, null);
  $G__186792_187119_G__186795_map__186785_map__186785__$1_props__41575__auto__$jscomp$71_vec__186782_vec__186786_vec__186789$$ = $APP.$helix$hooks$use_state$$(!1);
  var $expanded_QMARK_$jscomp$4$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__186792_187119_G__186795_map__186785_map__186785__$1_props__41575__auto__$jscomp$71_vec__186782_vec__186786_vec__186789$$, 0, null), $set_expanded_BANG_$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__186792_187119_G__186795_map__186785_map__186785__$1_props__41575__auto__$jscomp$71_vec__186782_vec__186786_vec__186789$$, 1, null), $container_ref$jscomp$3$$ = $APP.$helix$hooks$use_ref$$(null);
  $G__186792_187119_G__186795_map__186785_map__186785__$1_props__41575__auto__$jscomp$71_vec__186782_vec__186786_vec__186789$$ = $APP.$helix$hooks$wrap_fx$$(function() {
    if ($APP.$cljs$core$truth_$$($APP.$cljs$core$truth_$$($amp$pages$budget$cash_flow$cashflow_data$$) ? $APP.$cljs$core$_deref$$($container_ref$jscomp$3$$) : $amp$pages$budget$cash_flow$cashflow_data$$)) {
      var $spine$$ = $APP.$cljs$core$_deref$$($container_ref$jscomp$3$$).querySelector(".cf-spine");
      return $APP.$cljs$core$truth_$$($spine$$) ? $APP.$module$node_modules$gsap$dist$gsap$$.gsap.fromTo($spine$$, {scaleY:0}, {scaleY:1, duration:0.8, delay:0.05, ease:"power3.out"}) : null;
    }
    return null;
  });
  $G__186793_187120_maybe_ref__41576__auto__$jscomp$71$$ = [$amp$pages$budget$cash_flow$cashflow_data$$];
  $APP.$helix$hooks$raw_use_effect$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$hooks$raw_use_effect$$.$cljs$core$IFn$_invoke$arity$2$($G__186792_187119_G__186795_map__186785_map__186785__$1_props__41575__auto__$jscomp$71_vec__186782_vec__186786_vec__186789$$, $G__186793_187120_maybe_ref__41576__auto__$jscomp$71$$) : $APP.$helix$hooks$raw_use_effect$$.call(null, $G__186792_187119_G__186795_map__186785_map__186785__$1_props__41575__auto__$jscomp$71_vec__186782_vec__186786_vec__186789$$, $G__186793_187120_maybe_ref__41576__auto__$jscomp$71$$);
  $G__186792_187119_G__186795_map__186785_map__186785__$1_props__41575__auto__$jscomp$71_vec__186782_vec__186786_vec__186789$$ = function() {
    return {id:$id$jscomp$94$$, ref:$container_ref$jscomp$3$$, className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["min-h-screen px-4 pb-8 pt-6 antialiased selection:bg-pink-500/30", "text-slate-900  dark:text-slate-100", "bg-white        dark:bg-slate-900"]))), children:$APP.$cljs$core$truth_$$($error$jscomp$22$$) ? function() {
      var $G__186799$$ = {className:"font-mono text-sm text-red-400 p-4", children:"err: " + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($error$jscomp$22$$)};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__186799$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__186799$$);
    }() : $amp$pages$budget$cash_flow$cashflow_data$$ == null ? function() {
      var $G__186803_G__186807$jscomp$inline_3795$$ = {className:"h-5 w-5 animate-spin border-2 border-slate-700 border-t-pink-400"};
      $G__186803_G__186807$jscomp$inline_3795$$ = {className:"flex items-center justify-center py-20", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__186803_G__186807$jscomp$inline_3795$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__186803_G__186807$jscomp$inline_3795$$)};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__186803_G__186807$jscomp$inline_3795$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__186803_G__186807$jscomp$inline_3795$$);
    }() : function() {
      var $G__186880_map__186810__$1_sorted$jscomp$1$$ = $APP.$cljs$core$__destructure_map$$($amp$pages$budget$cash_flow$cashflow_data$$), $cash_flow_model$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__186880_map__186810__$1_sorted$jscomp$1$$, $cljs$cst$812$cash_flow_model$$), $funds_raised$jscomp$1$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__186880_map__186810__$1_sorted$jscomp$1$$, $cljs$cst$811$funds_raised$$), $debt_raised$jscomp$1$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__186880_map__186810__$1_sorted$jscomp$1$$, 
      $cljs$cst$810$debt_raised$$), $target_total$jscomp$1$$ = $amp$pages$budget$table$sub_total_all_sections$$($amp$pages$budget$cost_breakdown$cost_data$$) + 66821, $entries_kw$$ = $APP.$cljs$core$map$$.$cljs$core$IFn$_invoke$arity$2$(function($p1__186779_SHARP_$$) {
        return $APP.$cljs$core$update$cljs$0core$0IFn$0_invoke$0arity$03$$($APP.$cljs$core$update$cljs$0core$0IFn$0_invoke$0arity$03$$($p1__186779_SHARP_$$, $cljs$cst$815$priority$$, $APP.$cljs$core$keyword$$), $APP.$cljs$cst$12$status$$, $APP.$cljs$core$keyword$$);
      }, $cash_flow_model$$);
      $G__186880_map__186810__$1_sorted$jscomp$1$$ = $APP.$cljs$core$sort_by$cljs$0core$0IFn$0_invoke$0arity$02$$($APP.$cljs$core$comp$$.$cljs$core$IFn$_invoke$arity$3$($amp$pages$budget$cash_flow$date__GT_ms$$, $amp$pages$budget$cash_flow$parse_date$$, $cljs$cst$814$due$$), $entries_kw$$);
      var $groups$jscomp$1$$ = $amp$pages$budget$cash_flow$group_by_month$$($G__186880_map__186810__$1_sorted$jscomp$1$$), $now_ms$$ = $amp$pages$budget$cash_flow$date__GT_ms$$(new Date()), $all_items$$ = function() {
        for (var $items$jscomp$9$$ = $APP.$cljs$core$atom$cljs$0core$0IFn$0_invoke$0arity$01$$($APP.$cljs$core$PersistentVector$EMPTY$$), $now_done$$ = $APP.$cljs$core$atom$cljs$0core$0IFn$0_invoke$0arity$01$$(!1), $counter$$ = $APP.$cljs$core$atom$cljs$0core$0IFn$0_invoke$0arity$01$$(0), $G__187209_seq__186811_187123_seq__186811_187207__$1_temp__5823__auto___187206$$ = $APP.$cljs$core$seq$$($groups$jscomp$1$$), $G__187210_G__187228_chunk__186812_187124_group_187213_seq__186856_187215_seq__186856_187226__$1_temp__5823__auto___187225__$1$$ = 
        null, $G__187211_G__187229_c__5673__auto___187208_chunk__186857_187216_count__186813_187125_entry_187232_month_label_187214$$ = 0, $G__187230_c__5673__auto___187227_count__186858_187217_entry_ms_187233_i__186814_187126$$ = 0;;) {
          if ($G__187230_c__5673__auto___187227_count__186858_187217_entry_ms_187233_i__186814_187126$$ < $G__187211_G__187229_c__5673__auto___187208_chunk__186857_187216_count__186813_187125_entry_187232_month_label_187214$$) {
            var $G__187183_group_187127_i__186859_187218_seq__186825_187151_seq__186825_187181__$1_temp__5823__auto___187178$$ = $G__187210_G__187228_chunk__186812_187124_group_187213_seq__186856_187215_seq__186856_187226__$1_temp__5823__auto___187225__$1$$.$cljs$core$IIndexed$_nth$arity$2$(null, $G__187230_c__5673__auto___187227_count__186858_187217_entry_ms_187233_i__186814_187126$$), $G__187184_chunk__186826_187153_entry_187189_entry_187219_month_label_187129$$ = $amp$pages$budget$cash_flow$parse_date$$($cljs$cst$814$due$$.$cljs$core$IFn$_invoke$arity$1$($APP.$cljs$core$first$$($G__187183_group_187127_i__186859_187218_seq__186825_187151_seq__186825_187181__$1_temp__5823__auto___187178$$))).toLocaleString("en-US", 
            {month:"long", year:"numeric"});
            $APP.$cljs$core$swap_BANG_$$.$cljs$core$IFn$_invoke$arity$3$($items$jscomp$9$$, $APP.$cljs$core$conj$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$25$type$$, $cljs$cst$886$month$$, $APP.$cljs$cst$408$label$$, $G__187184_chunk__186826_187153_entry_187189_entry_187219_month_label_187129$$, $APP.$cljs$cst$758$idx$$, $APP.$cljs$core$_deref$$($counter$$)], null));
            $APP.$cljs$core$swap_BANG_$$.$cljs$core$IFn$_invoke$arity$2$($counter$$, $APP.$cljs$core$inc$$);
            $G__187183_group_187127_i__186859_187218_seq__186825_187151_seq__186825_187181__$1_temp__5823__auto___187178$$ = $APP.$cljs$core$seq$$($G__187183_group_187127_i__186859_187218_seq__186825_187151_seq__186825_187181__$1_temp__5823__auto___187178$$);
            $G__187184_chunk__186826_187153_entry_187189_entry_187219_month_label_187129$$ = null;
            for (var $G__187185_c__5673__auto___187182_count__186827_187154_entry_ms_187192_entry_ms_187220$$ = 0, $i__186828_187155$$ = 0;;) {
              if ($i__186828_187155$$ < $G__187185_c__5673__auto___187182_count__186827_187154_entry_ms_187192_entry_ms_187220$$) {
                var $entry_187158$$ = $G__187184_chunk__186826_187153_entry_187189_entry_187219_month_label_187129$$.$cljs$core$IIndexed$_nth$arity$2$(null, $i__186828_187155$$), $entry_ms_187159$$ = $amp$pages$budget$cash_flow$date__GT_ms$$($amp$pages$budget$cash_flow$parse_date$$($cljs$cst$814$due$$.$cljs$core$IFn$_invoke$arity$1$($entry_187158$$)));
                $APP.$cljs$core$not$$($APP.$cljs$core$_deref$$($now_done$$)) && $entry_ms_187159$$ > $now_ms$$ && ($APP.$cljs$core$swap_BANG_$$.$cljs$core$IFn$_invoke$arity$3$($items$jscomp$9$$, $APP.$cljs$core$conj$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$25$type$$, $cljs$cst$887$now$$], null)), $APP.$cljs$core$reset_BANG_$$($now_done$$, !0));
                $APP.$cljs$core$swap_BANG_$$.$cljs$core$IFn$_invoke$arity$3$($items$jscomp$9$$, $APP.$cljs$core$conj$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$25$type$$, $cljs$cst$882$entry$$, $cljs$cst$882$entry$$, $entry_187158$$, $APP.$cljs$cst$758$idx$$, $APP.$cljs$core$_deref$$($counter$$), $cljs$cst$888$past_QMARK_$$, $APP.$cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$($cljs$cst$817$paid$$, $APP.$cljs$cst$12$status$$.$cljs$core$IFn$_invoke$arity$1$($entry_187158$$))], 
                null));
                $APP.$cljs$core$swap_BANG_$$.$cljs$core$IFn$_invoke$arity$2$($counter$$, $APP.$cljs$core$inc$$);
                $i__186828_187155$$ += 1;
              } else {
                if ($G__187183_group_187127_i__186859_187218_seq__186825_187151_seq__186825_187181__$1_temp__5823__auto___187178$$ = $APP.$cljs$core$seq$$($G__187183_group_187127_i__186859_187218_seq__186825_187151_seq__186825_187181__$1_temp__5823__auto___187178$$)) {
                  $APP.$cljs$core$chunked_seq_QMARK_$$($G__187183_group_187127_i__186859_187218_seq__186825_187151_seq__186825_187181__$1_temp__5823__auto___187178$$) ? ($G__187185_c__5673__auto___187182_count__186827_187154_entry_ms_187192_entry_ms_187220$$ = $APP.$cljs$core$_chunked_first$$($G__187183_group_187127_i__186859_187218_seq__186825_187151_seq__186825_187181__$1_temp__5823__auto___187178$$), $G__187183_group_187127_i__186859_187218_seq__186825_187151_seq__186825_187181__$1_temp__5823__auto___187178$$ = 
                  $APP.$cljs$core$_chunked_rest$$($G__187183_group_187127_i__186859_187218_seq__186825_187151_seq__186825_187181__$1_temp__5823__auto___187178$$), $G__187184_chunk__186826_187153_entry_187189_entry_187219_month_label_187129$$ = $G__187185_c__5673__auto___187182_count__186827_187154_entry_ms_187192_entry_ms_187220$$, $G__187185_c__5673__auto___187182_count__186827_187154_entry_ms_187192_entry_ms_187220$$ = $APP.$cljs$core$count$$($G__187185_c__5673__auto___187182_count__186827_187154_entry_ms_187192_entry_ms_187220$$)) : 
                  ($G__187184_chunk__186826_187153_entry_187189_entry_187219_month_label_187129$$ = $APP.$cljs$core$first$$($G__187183_group_187127_i__186859_187218_seq__186825_187151_seq__186825_187181__$1_temp__5823__auto___187178$$), $G__187185_c__5673__auto___187182_count__186827_187154_entry_ms_187192_entry_ms_187220$$ = $amp$pages$budget$cash_flow$date__GT_ms$$($amp$pages$budget$cash_flow$parse_date$$($cljs$cst$814$due$$.$cljs$core$IFn$_invoke$arity$1$($G__187184_chunk__186826_187153_entry_187189_entry_187219_month_label_187129$$))), 
                  $APP.$cljs$core$not$$($APP.$cljs$core$_deref$$($now_done$$)) && $G__187185_c__5673__auto___187182_count__186827_187154_entry_ms_187192_entry_ms_187220$$ > $now_ms$$ && ($APP.$cljs$core$swap_BANG_$$.$cljs$core$IFn$_invoke$arity$3$($items$jscomp$9$$, $APP.$cljs$core$conj$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$25$type$$, $cljs$cst$887$now$$], null)), $APP.$cljs$core$reset_BANG_$$($now_done$$, !0)), $APP.$cljs$core$swap_BANG_$$.$cljs$core$IFn$_invoke$arity$3$($items$jscomp$9$$, 
                  $APP.$cljs$core$conj$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$25$type$$, $cljs$cst$882$entry$$, $cljs$cst$882$entry$$, $G__187184_chunk__186826_187153_entry_187189_entry_187219_month_label_187129$$, $APP.$cljs$cst$758$idx$$, $APP.$cljs$core$_deref$$($counter$$), $cljs$cst$888$past_QMARK_$$, $APP.$cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$($cljs$cst$817$paid$$, $APP.$cljs$cst$12$status$$.$cljs$core$IFn$_invoke$arity$1$($G__187184_chunk__186826_187153_entry_187189_entry_187219_month_label_187129$$))], 
                  null)), $APP.$cljs$core$swap_BANG_$$.$cljs$core$IFn$_invoke$arity$2$($counter$$, $APP.$cljs$core$inc$$), $G__187183_group_187127_i__186859_187218_seq__186825_187151_seq__186825_187181__$1_temp__5823__auto___187178$$ = $APP.$cljs$core$next$$($G__187183_group_187127_i__186859_187218_seq__186825_187151_seq__186825_187181__$1_temp__5823__auto___187178$$), $G__187184_chunk__186826_187153_entry_187189_entry_187219_month_label_187129$$ = null, $G__187185_c__5673__auto___187182_count__186827_187154_entry_ms_187192_entry_ms_187220$$ = 
                  0), $i__186828_187155$$ = 0;
                } else {
                  break;
                }
              }
            }
            $G__187230_c__5673__auto___187227_count__186858_187217_entry_ms_187233_i__186814_187126$$ += 1;
          } else {
            if ($G__187209_seq__186811_187123_seq__186811_187207__$1_temp__5823__auto___187206$$ = $APP.$cljs$core$seq$$($G__187209_seq__186811_187123_seq__186811_187207__$1_temp__5823__auto___187206$$)) {
              if ($APP.$cljs$core$chunked_seq_QMARK_$$($G__187209_seq__186811_187123_seq__186811_187207__$1_temp__5823__auto___187206$$)) {
                $G__187211_G__187229_c__5673__auto___187208_chunk__186857_187216_count__186813_187125_entry_187232_month_label_187214$$ = $APP.$cljs$core$_chunked_first$$($G__187209_seq__186811_187123_seq__186811_187207__$1_temp__5823__auto___187206$$), $G__187209_seq__186811_187123_seq__186811_187207__$1_temp__5823__auto___187206$$ = $APP.$cljs$core$_chunked_rest$$($G__187209_seq__186811_187123_seq__186811_187207__$1_temp__5823__auto___187206$$), $G__187210_G__187228_chunk__186812_187124_group_187213_seq__186856_187215_seq__186856_187226__$1_temp__5823__auto___187225__$1$$ = 
                $G__187211_G__187229_c__5673__auto___187208_chunk__186857_187216_count__186813_187125_entry_187232_month_label_187214$$, $G__187211_G__187229_c__5673__auto___187208_chunk__186857_187216_count__186813_187125_entry_187232_month_label_187214$$ = $APP.$cljs$core$count$$($G__187211_G__187229_c__5673__auto___187208_chunk__186857_187216_count__186813_187125_entry_187232_month_label_187214$$);
              } else {
                $G__187210_G__187228_chunk__186812_187124_group_187213_seq__186856_187215_seq__186856_187226__$1_temp__5823__auto___187225__$1$$ = $APP.$cljs$core$first$$($G__187209_seq__186811_187123_seq__186811_187207__$1_temp__5823__auto___187206$$);
                $G__187211_G__187229_c__5673__auto___187208_chunk__186857_187216_count__186813_187125_entry_187232_month_label_187214$$ = $amp$pages$budget$cash_flow$parse_date$$($cljs$cst$814$due$$.$cljs$core$IFn$_invoke$arity$1$($APP.$cljs$core$first$$($G__187210_G__187228_chunk__186812_187124_group_187213_seq__186856_187215_seq__186856_187226__$1_temp__5823__auto___187225__$1$$))).toLocaleString("en-US", {month:"long", year:"numeric"});
                $APP.$cljs$core$swap_BANG_$$.$cljs$core$IFn$_invoke$arity$3$($items$jscomp$9$$, $APP.$cljs$core$conj$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$25$type$$, $cljs$cst$886$month$$, $APP.$cljs$cst$408$label$$, $G__187211_G__187229_c__5673__auto___187208_chunk__186857_187216_count__186813_187125_entry_187232_month_label_187214$$, $APP.$cljs$cst$758$idx$$, $APP.$cljs$core$_deref$$($counter$$)], null));
                $APP.$cljs$core$swap_BANG_$$.$cljs$core$IFn$_invoke$arity$2$($counter$$, $APP.$cljs$core$inc$$);
                $G__187210_G__187228_chunk__186812_187124_group_187213_seq__186856_187215_seq__186856_187226__$1_temp__5823__auto___187225__$1$$ = $APP.$cljs$core$seq$$($G__187210_G__187228_chunk__186812_187124_group_187213_seq__186856_187215_seq__186856_187226__$1_temp__5823__auto___187225__$1$$);
                $G__187211_G__187229_c__5673__auto___187208_chunk__186857_187216_count__186813_187125_entry_187232_month_label_187214$$ = null;
                for ($G__187183_group_187127_i__186859_187218_seq__186825_187151_seq__186825_187181__$1_temp__5823__auto___187178$$ = $G__187230_c__5673__auto___187227_count__186858_187217_entry_ms_187233_i__186814_187126$$ = 0;;) {
                  if ($G__187183_group_187127_i__186859_187218_seq__186825_187151_seq__186825_187181__$1_temp__5823__auto___187178$$ < $G__187230_c__5673__auto___187227_count__186858_187217_entry_ms_187233_i__186814_187126$$) {
                    $G__187184_chunk__186826_187153_entry_187189_entry_187219_month_label_187129$$ = $G__187211_G__187229_c__5673__auto___187208_chunk__186857_187216_count__186813_187125_entry_187232_month_label_187214$$.$cljs$core$IIndexed$_nth$arity$2$(null, $G__187183_group_187127_i__186859_187218_seq__186825_187151_seq__186825_187181__$1_temp__5823__auto___187178$$), $G__187185_c__5673__auto___187182_count__186827_187154_entry_ms_187192_entry_ms_187220$$ = $amp$pages$budget$cash_flow$date__GT_ms$$($amp$pages$budget$cash_flow$parse_date$$($cljs$cst$814$due$$.$cljs$core$IFn$_invoke$arity$1$($G__187184_chunk__186826_187153_entry_187189_entry_187219_month_label_187129$$))), 
                    $APP.$cljs$core$not$$($APP.$cljs$core$_deref$$($now_done$$)) && $G__187185_c__5673__auto___187182_count__186827_187154_entry_ms_187192_entry_ms_187220$$ > $now_ms$$ && ($APP.$cljs$core$swap_BANG_$$.$cljs$core$IFn$_invoke$arity$3$($items$jscomp$9$$, $APP.$cljs$core$conj$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$25$type$$, $cljs$cst$887$now$$], null)), $APP.$cljs$core$reset_BANG_$$($now_done$$, !0)), $APP.$cljs$core$swap_BANG_$$.$cljs$core$IFn$_invoke$arity$3$($items$jscomp$9$$, 
                    $APP.$cljs$core$conj$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$25$type$$, $cljs$cst$882$entry$$, $cljs$cst$882$entry$$, $G__187184_chunk__186826_187153_entry_187189_entry_187219_month_label_187129$$, $APP.$cljs$cst$758$idx$$, $APP.$cljs$core$_deref$$($counter$$), $cljs$cst$888$past_QMARK_$$, $APP.$cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$($cljs$cst$817$paid$$, $APP.$cljs$cst$12$status$$.$cljs$core$IFn$_invoke$arity$1$($G__187184_chunk__186826_187153_entry_187189_entry_187219_month_label_187129$$))], 
                    null)), $APP.$cljs$core$swap_BANG_$$.$cljs$core$IFn$_invoke$arity$2$($counter$$, $APP.$cljs$core$inc$$), $G__187183_group_187127_i__186859_187218_seq__186825_187151_seq__186825_187181__$1_temp__5823__auto___187178$$ += 1;
                  } else {
                    if ($G__187210_G__187228_chunk__186812_187124_group_187213_seq__186856_187215_seq__186856_187226__$1_temp__5823__auto___187225__$1$$ = $APP.$cljs$core$seq$$($G__187210_G__187228_chunk__186812_187124_group_187213_seq__186856_187215_seq__186856_187226__$1_temp__5823__auto___187225__$1$$)) {
                      $APP.$cljs$core$chunked_seq_QMARK_$$($G__187210_G__187228_chunk__186812_187124_group_187213_seq__186856_187215_seq__186856_187226__$1_temp__5823__auto___187225__$1$$) ? ($G__187230_c__5673__auto___187227_count__186858_187217_entry_ms_187233_i__186814_187126$$ = $APP.$cljs$core$_chunked_first$$($G__187210_G__187228_chunk__186812_187124_group_187213_seq__186856_187215_seq__186856_187226__$1_temp__5823__auto___187225__$1$$), $G__187210_G__187228_chunk__186812_187124_group_187213_seq__186856_187215_seq__186856_187226__$1_temp__5823__auto___187225__$1$$ = 
                      $APP.$cljs$core$_chunked_rest$$($G__187210_G__187228_chunk__186812_187124_group_187213_seq__186856_187215_seq__186856_187226__$1_temp__5823__auto___187225__$1$$), $G__187211_G__187229_c__5673__auto___187208_chunk__186857_187216_count__186813_187125_entry_187232_month_label_187214$$ = $G__187230_c__5673__auto___187227_count__186858_187217_entry_ms_187233_i__186814_187126$$, $G__187230_c__5673__auto___187227_count__186858_187217_entry_ms_187233_i__186814_187126$$ = $APP.$cljs$core$count$$($G__187230_c__5673__auto___187227_count__186858_187217_entry_ms_187233_i__186814_187126$$)) : 
                      ($G__187211_G__187229_c__5673__auto___187208_chunk__186857_187216_count__186813_187125_entry_187232_month_label_187214$$ = $APP.$cljs$core$first$$($G__187210_G__187228_chunk__186812_187124_group_187213_seq__186856_187215_seq__186856_187226__$1_temp__5823__auto___187225__$1$$), $G__187230_c__5673__auto___187227_count__186858_187217_entry_ms_187233_i__186814_187126$$ = $amp$pages$budget$cash_flow$date__GT_ms$$($amp$pages$budget$cash_flow$parse_date$$($cljs$cst$814$due$$.$cljs$core$IFn$_invoke$arity$1$($G__187211_G__187229_c__5673__auto___187208_chunk__186857_187216_count__186813_187125_entry_187232_month_label_187214$$))), 
                      $APP.$cljs$core$not$$($APP.$cljs$core$_deref$$($now_done$$)) && $G__187230_c__5673__auto___187227_count__186858_187217_entry_ms_187233_i__186814_187126$$ > $now_ms$$ && ($APP.$cljs$core$swap_BANG_$$.$cljs$core$IFn$_invoke$arity$3$($items$jscomp$9$$, $APP.$cljs$core$conj$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$25$type$$, $cljs$cst$887$now$$], null)), $APP.$cljs$core$reset_BANG_$$($now_done$$, !0)), $APP.$cljs$core$swap_BANG_$$.$cljs$core$IFn$_invoke$arity$3$($items$jscomp$9$$, 
                      $APP.$cljs$core$conj$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$25$type$$, $cljs$cst$882$entry$$, $cljs$cst$882$entry$$, $G__187211_G__187229_c__5673__auto___187208_chunk__186857_187216_count__186813_187125_entry_187232_month_label_187214$$, $APP.$cljs$cst$758$idx$$, $APP.$cljs$core$_deref$$($counter$$), $cljs$cst$888$past_QMARK_$$, $APP.$cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$($cljs$cst$817$paid$$, $APP.$cljs$cst$12$status$$.$cljs$core$IFn$_invoke$arity$1$($G__187211_G__187229_c__5673__auto___187208_chunk__186857_187216_count__186813_187125_entry_187232_month_label_187214$$))], 
                      null)), $APP.$cljs$core$swap_BANG_$$.$cljs$core$IFn$_invoke$arity$2$($counter$$, $APP.$cljs$core$inc$$), $G__187210_G__187228_chunk__186812_187124_group_187213_seq__186856_187215_seq__186856_187226__$1_temp__5823__auto___187225__$1$$ = $APP.$cljs$core$next$$($G__187210_G__187228_chunk__186812_187124_group_187213_seq__186856_187215_seq__186856_187226__$1_temp__5823__auto___187225__$1$$), $G__187211_G__187229_c__5673__auto___187208_chunk__186857_187216_count__186813_187125_entry_187232_month_label_187214$$ = 
                      null, $G__187230_c__5673__auto___187227_count__186858_187217_entry_ms_187233_i__186814_187126$$ = 0), $G__187183_group_187127_i__186859_187218_seq__186825_187151_seq__186825_187181__$1_temp__5823__auto___187178$$ = 0;
                    } else {
                      break;
                    }
                  }
                }
                $G__187209_seq__186811_187123_seq__186811_187207__$1_temp__5823__auto___187206$$ = $APP.$cljs$core$next$$($G__187209_seq__186811_187123_seq__186811_187207__$1_temp__5823__auto___187206$$);
                $G__187210_G__187228_chunk__186812_187124_group_187213_seq__186856_187215_seq__186856_187226__$1_temp__5823__auto___187225__$1$$ = null;
                $G__187211_G__187229_c__5673__auto___187208_chunk__186857_187216_count__186813_187125_entry_187232_month_label_187214$$ = 0;
              }
              $G__187230_c__5673__auto___187227_count__186858_187217_entry_ms_187233_i__186814_187126$$ = 0;
            } else {
              break;
            }
          }
        }
        $APP.$cljs$core$not$$($APP.$cljs$core$_deref$$($now_done$$)) && $APP.$cljs$core$swap_BANG_$$.$cljs$core$IFn$_invoke$arity$3$($items$jscomp$9$$, $APP.$cljs$core$conj$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$25$type$$, $cljs$cst$887$now$$], null));
        return $APP.$cljs$core$_deref$$($items$jscomp$9$$);
      }();
      $G__186880_map__186810__$1_sorted$jscomp$1$$ = function() {
        return {children:[function() {
          var $G__186887$$ = {entries:$entries_kw$$, "target-total":$target_total$jscomp$1$$, "funds-raised":$funds_raised$jscomp$1$$, "debt-raised":$debt_raised$jscomp$1$$};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$pages$budget$cash_flow$summary_header$$, $G__186887$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$budget$cash_flow$summary_header$$, $G__186887$$);
        }(), function() {
          var $G__186895$$ = function() {
            return {"expanded?":$expanded_QMARK_$jscomp$4$$, "on-toggle":function() {
              return $set_expanded_BANG_$$.$cljs$core$IFn$_invoke$arity$1$ ? $set_expanded_BANG_$$.$cljs$core$IFn$_invoke$arity$1$($APP.$cljs$core$not$$) : $set_expanded_BANG_$$.call(null, $APP.$cljs$core$not$$);
            }};
          }();
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$pages$budget$cash_flow$view_toggle$$, $G__186895$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$budget$cash_flow$view_toggle$$, $G__186895$$);
        }(), function() {
          var $G__186907$$ = function() {
            return {className:"relative", children:[function() {
              var $G__186913$$ = {className:$APP.$helix$impl$props$normalize_class$$("cf-spine absolute left-[13px] top-0 h-full origin-top border-l border-dashed " + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$("border-slate-200 dark:border-white/15"))};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__186913$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__186913$$);
            }(), $APP.$cljs$core$truth_$$($expanded_QMARK_$jscomp$4$$) ? $APP.$cljs$core$map_indexed$cljs$0core$0IFn$0_invoke$0arity$02$$(function($G__186935_G__186945_G__186951_i$jscomp$423$$, $G__186934_G__186950_item$jscomp$40$$) {
              var $G__186926_G__186926__$1$$ = $APP.$cljs$cst$25$type$$.$cljs$core$IFn$_invoke$arity$1$($G__186934_G__186950_item$jscomp$40$$);
              $G__186926_G__186926__$1$$ = $G__186926_G__186926__$1$$ instanceof $APP.$cljs$core$Keyword$$ ? $G__186926_G__186926__$1$$.$fqn$ : null;
              switch($G__186926_G__186926__$1$$) {
                case "month":
                  return $G__186934_G__186950_item$jscomp$40$$ = {label:$APP.$cljs$cst$408$label$$.$cljs$core$IFn$_invoke$arity$1$($G__186934_G__186950_item$jscomp$40$$), idx:$APP.$cljs$cst$758$idx$$.$cljs$core$IFn$_invoke$arity$1$($G__186934_G__186950_item$jscomp$40$$)}, $G__186935_G__186945_G__186951_i$jscomp$423$$ = "m-" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($G__186935_G__186945_G__186951_i$jscomp$423$$), $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$($amp$pages$budget$cash_flow$month_header$$, 
                  $G__186934_G__186950_item$jscomp$40$$, $G__186935_G__186945_G__186951_i$jscomp$423$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$budget$cash_flow$month_header$$, $G__186934_G__186950_item$jscomp$40$$, $G__186935_G__186945_G__186951_i$jscomp$423$$);
                case "now":
                  return $G__186935_G__186945_G__186951_i$jscomp$423$$ = {}, $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$($amp$pages$budget$cash_flow$now_marker$$, $G__186935_G__186945_G__186951_i$jscomp$423$$, "now") : $APP.$helix$core$jsx$$.call(null, $amp$pages$budget$cash_flow$now_marker$$, $G__186935_G__186945_G__186951_i$jscomp$423$$, "now");
                case "entry":
                  return $G__186934_G__186950_item$jscomp$40$$ = {entry:$cljs$cst$882$entry$$.$cljs$core$IFn$_invoke$arity$1$($G__186934_G__186950_item$jscomp$40$$), idx:$APP.$cljs$cst$758$idx$$.$cljs$core$IFn$_invoke$arity$1$($G__186934_G__186950_item$jscomp$40$$), "is-past":$APP.$cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$($cljs$cst$817$paid$$, $APP.$cljs$cst$12$status$$.$cljs$core$IFn$_invoke$arity$1$($cljs$cst$882$entry$$.$cljs$core$IFn$_invoke$arity$1$($G__186934_G__186950_item$jscomp$40$$)))}, 
                  $G__186935_G__186945_G__186951_i$jscomp$423$$ = "e-" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($G__186935_G__186945_G__186951_i$jscomp$423$$), $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$($amp$pages$budget$cash_flow$timeline_node$$, $G__186934_G__186950_item$jscomp$40$$, $G__186935_G__186945_G__186951_i$jscomp$423$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$budget$cash_flow$timeline_node$$, $G__186934_G__186950_item$jscomp$40$$, 
                  $G__186935_G__186945_G__186951_i$jscomp$423$$);
                default:
                  throw Error("No matching clause: " + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($G__186926_G__186926__$1$$));
              }
            }, $all_items$$) : function() {
              var $c__5673__auto___187256_rollups_seq__186955_187243_temp__5823__auto___187254_vec__186998_187261$$ = $amp$pages$budget$cash_flow$month_rollups$$($entries_kw$$), $now_done$jscomp$1$$ = $APP.$cljs$core$atom$cljs$0core$0IFn$0_invoke$0arity$01$$(!1), $out$jscomp$15$$ = $APP.$cljs$core$atom$cljs$0core$0IFn$0_invoke$0arity$01$$($APP.$cljs$core$PersistentVector$EMPTY$$);
              $c__5673__auto___187256_rollups_seq__186955_187243_temp__5823__auto___187254_vec__186998_187261$$ = $APP.$cljs$core$seq$$($APP.$cljs$core$map_indexed$cljs$0core$0IFn$0_invoke$0arity$02$$($APP.$cljs$core$vector$$, $c__5673__auto___187256_rollups_seq__186955_187243_temp__5823__auto___187254_vec__186998_187261$$));
              for (var $G__187258_chunk__186956_187244_seq__186955_187255__$1$$ = null, $G__187259_count__186957_187245$$ = 0, $G__187257_i__186958_187246$$ = 0;;) {
                if ($G__187257_i__186958_187246$$ < $G__187259_count__186957_187245$$) {
                  var $vec__186985_187247$$ = $G__187258_chunk__186956_187244_seq__186955_187255__$1$$.$cljs$core$IIndexed$_nth$arity$2$(null, $G__187257_i__186958_187246$$), $i_187248$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($vec__186985_187247$$, 0, null), $r_187249$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($vec__186985_187247$$, 1, null);
                  $APP.$cljs$core$truth_$$(function() {
                    var $and__5140__auto__$jscomp$89$$ = $APP.$cljs$core$not$$($APP.$cljs$core$_deref$$($now_done$jscomp$1$$));
                    return $and__5140__auto__$jscomp$89$$ ? $cljs$cst$880$has_now$$.$cljs$core$IFn$_invoke$arity$1$($r_187249$$) : $and__5140__auto__$jscomp$89$$;
                  }()) && ($APP.$cljs$core$swap_BANG_$$.$cljs$core$IFn$_invoke$arity$3$($out$jscomp$15$$, $APP.$cljs$core$conj$$, function() {
                    var $G__186989$$ = {};
                    return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$($amp$pages$budget$cash_flow$now_marker$$, $G__186989$$, "now-s") : $APP.$helix$core$jsx$$.call(null, $amp$pages$budget$cash_flow$now_marker$$, $G__186989$$, "now-s");
                  }()), $APP.$cljs$core$reset_BANG_$$($now_done$jscomp$1$$, !0));
                  $APP.$cljs$core$swap_BANG_$$.$cljs$core$IFn$_invoke$arity$3$($out$jscomp$15$$, $APP.$cljs$core$conj$$, function() {
                    var $G__186994$$ = {rollup:$r_187249$$, idx:$i_187248$$}, $G__186995$$ = "sr-" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($i_187248$$);
                    return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$($amp$pages$budget$cash_flow$month_summary_row$$, $G__186994$$, $G__186995$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$budget$cash_flow$month_summary_row$$, $G__186994$$, $G__186995$$);
                  }());
                  $G__187257_i__186958_187246$$ += 1;
                } else {
                  if ($c__5673__auto___187256_rollups_seq__186955_187243_temp__5823__auto___187254_vec__186998_187261$$ = $APP.$cljs$core$seq$$($c__5673__auto___187256_rollups_seq__186955_187243_temp__5823__auto___187254_vec__186998_187261$$)) {
                    $G__187258_chunk__186956_187244_seq__186955_187255__$1$$ = $c__5673__auto___187256_rollups_seq__186955_187243_temp__5823__auto___187254_vec__186998_187261$$;
                    if ($APP.$cljs$core$chunked_seq_QMARK_$$($G__187258_chunk__186956_187244_seq__186955_187255__$1$$)) {
                      $c__5673__auto___187256_rollups_seq__186955_187243_temp__5823__auto___187254_vec__186998_187261$$ = $APP.$cljs$core$_chunked_first$$($G__187258_chunk__186956_187244_seq__186955_187255__$1$$), $G__187257_i__186958_187246$$ = $APP.$cljs$core$_chunked_rest$$($G__187258_chunk__186956_187244_seq__186955_187255__$1$$), $G__187258_chunk__186956_187244_seq__186955_187255__$1$$ = $c__5673__auto___187256_rollups_seq__186955_187243_temp__5823__auto___187254_vec__186998_187261$$, $G__187259_count__186957_187245$$ = 
                      $APP.$cljs$core$count$$($c__5673__auto___187256_rollups_seq__186955_187243_temp__5823__auto___187254_vec__186998_187261$$), $c__5673__auto___187256_rollups_seq__186955_187243_temp__5823__auto___187254_vec__186998_187261$$ = $G__187257_i__186958_187246$$;
                    } else {
                      $c__5673__auto___187256_rollups_seq__186955_187243_temp__5823__auto___187254_vec__186998_187261$$ = $APP.$cljs$core$first$$($G__187258_chunk__186956_187244_seq__186955_187255__$1$$);
                      var $i_187262$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($c__5673__auto___187256_rollups_seq__186955_187243_temp__5823__auto___187254_vec__186998_187261$$, 0, null), $r_187263$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($c__5673__auto___187256_rollups_seq__186955_187243_temp__5823__auto___187254_vec__186998_187261$$, 1, null);
                      $APP.$cljs$core$truth_$$(function() {
                        var $and__5140__auto__$jscomp$90$$ = $APP.$cljs$core$not$$($APP.$cljs$core$_deref$$($now_done$jscomp$1$$));
                        return $and__5140__auto__$jscomp$90$$ ? $cljs$cst$880$has_now$$.$cljs$core$IFn$_invoke$arity$1$($r_187263$$) : $and__5140__auto__$jscomp$90$$;
                      }()) && ($APP.$cljs$core$swap_BANG_$$.$cljs$core$IFn$_invoke$arity$3$($out$jscomp$15$$, $APP.$cljs$core$conj$$, function() {
                        var $G__187002$$ = {};
                        return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$($amp$pages$budget$cash_flow$now_marker$$, $G__187002$$, "now-s") : $APP.$helix$core$jsx$$.call(null, $amp$pages$budget$cash_flow$now_marker$$, $G__187002$$, "now-s");
                      }()), $APP.$cljs$core$reset_BANG_$$($now_done$jscomp$1$$, !0));
                      $APP.$cljs$core$swap_BANG_$$.$cljs$core$IFn$_invoke$arity$3$($out$jscomp$15$$, $APP.$cljs$core$conj$$, function() {
                        var $G__187007$$ = {rollup:$r_187263$$, idx:$i_187262$$}, $G__187008$$ = "sr-" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($i_187262$$);
                        return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$($amp$pages$budget$cash_flow$month_summary_row$$, $G__187007$$, $G__187008$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$budget$cash_flow$month_summary_row$$, $G__187007$$, $G__187008$$);
                      }());
                      $c__5673__auto___187256_rollups_seq__186955_187243_temp__5823__auto___187254_vec__186998_187261$$ = $APP.$cljs$core$next$$($G__187258_chunk__186956_187244_seq__186955_187255__$1$$);
                      $G__187258_chunk__186956_187244_seq__186955_187255__$1$$ = null;
                      $G__187259_count__186957_187245$$ = 0;
                    }
                    $G__187257_i__186958_187246$$ = 0;
                  } else {
                    break;
                  }
                }
              }
              $APP.$cljs$core$not$$($APP.$cljs$core$_deref$$($now_done$jscomp$1$$)) && $APP.$cljs$core$swap_BANG_$$.$cljs$core$IFn$_invoke$arity$3$($out$jscomp$15$$, $APP.$cljs$core$conj$$, function() {
                var $G__187012$$ = {};
                return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$($amp$pages$budget$cash_flow$now_marker$$, $G__187012$$, "now-s") : $APP.$helix$core$jsx$$.call(null, $amp$pages$budget$cash_flow$now_marker$$, $G__187012$$, "now-s");
              }());
              return $APP.$cljs$core$_deref$$($out$jscomp$15$$);
            }()]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__186907$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__186907$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__186880_map__186810__$1_sorted$jscomp$1$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__186880_map__186810__$1_sorted$jscomp$1$$);
    }()};
  }();
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__186792_187119_G__186795_map__186785_map__186785__$1_props__41575__auto__$jscomp$71_vec__186782_vec__186786_vec__186789$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__186792_187119_G__186795_map__186785_map__186785__$1_props__41575__auto__$jscomp$71_vec__186782_vec__186786_vec__186789$$);
};
$amp$pages$budget$non_profit$non_profit$$ = function($G__184546_map__184532_map__184532__$1_props__41575__auto__$jscomp$72_vec__184529$$, $maybe_ref__41576__auto__$jscomp$72$$) {
  $G__184546_map__184532_map__184532__$1_props__41575__auto__$jscomp$72_vec__184529$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__184546_map__184532_map__184532__$1_props__41575__auto__$jscomp$72_vec__184529$$), $maybe_ref__41576__auto__$jscomp$72$$], null);
  $G__184546_map__184532_map__184532__$1_props__41575__auto__$jscomp$72_vec__184529$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__184546_map__184532_map__184532__$1_props__41575__auto__$jscomp$72_vec__184529$$, 0, null);
  $G__184546_map__184532_map__184532__$1_props__41575__auto__$jscomp$72_vec__184529$$ = $APP.$cljs$core$__destructure_map$$($G__184546_map__184532_map__184532__$1_props__41575__auto__$jscomp$72_vec__184529$$);
  var $id$jscomp$95$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__184546_map__184532_map__184532__$1_props__41575__auto__$jscomp$72_vec__184529$$, $APP.$cljs$cst$285$id$$), $subtitle$jscomp$6$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__184546_map__184532_map__184532__$1_props__41575__auto__$jscomp$72_vec__184529$$, $APP.$cljs$cst$771$subtitle$$), $title$jscomp$28$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__184546_map__184532_map__184532__$1_props__41575__auto__$jscomp$72_vec__184529$$, 
  $APP.$cljs$cst$287$title$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $field_label$$ = $APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-semibold", "text-slate-600  dark:text-slate-400"])), $field_value$$ = $APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["text-right", "font-bold", "text-indigo-600 dark:text-indigo-300", "tracking-wide"]));
  $G__184546_map__184532_map__184532__$1_props__41575__auto__$jscomp$72_vec__184529$$ = function() {
    return {id:$id$jscomp$95$$, children:function() {
      var $G__184552$$ = function() {
        return {idx:8, eyebrow:$subtitle$jscomp$6$$, title:$title$jscomp$28$$, children:function() {
          var $G__184558$$ = function() {
            return {className:"space-y-8 p-4", children:[function() {
              var $G__184566$$ = function() {
                return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["text-slate-700  dark:text-slate-300", "mb-12"]))), children:[function() {
                  var $G__184572$$ = function() {
                    return {children:["The Armenia Pavilion 2026 is supported through ", function() {
                      var $G__184576$$ = {className:$APP.$helix$impl$props$normalize_class$$("font-semibold"), children:"Fallen Angels Inc."};
                      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__184576$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__184576$$);
                    }(), ", a registered ", function() {
                      var $G__184584$$ = {className:$APP.$helix$impl$props$normalize_class$$("font-semibold"), children:"501(c)(3)"};
                      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__184584$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__184584$$);
                    }(), " public non-profit organization. ", function() {
                      var $G__184592$$ = {className:$APP.$helix$impl$props$normalize_class$$("font-semibold"), children:"Contributions are tax deductible"};
                      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__184592$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__184592$$);
                    }(), " to the extent permitted by law."]};
                  }();
                  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__184572$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__184572$$);
                }(), function() {
                  var $G__184598$$ = function() {
                    return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-mono", "text-sm", "mt-6 space-y-1"]))), children:[function() {
                      var $G__184606_G__184610$jscomp$inline_3798$$ = {className:$APP.$helix$impl$props$normalize_class$$($field_label$$), children:"Organization: "};
                      $G__184606_G__184610$jscomp$inline_3798$$ = {children:[$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__184606_G__184610$jscomp$inline_3798$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__184606_G__184610$jscomp$inline_3798$$), "Fallen Angels Inc."]};
                      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__184606_G__184610$jscomp$inline_3798$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__184606_G__184610$jscomp$inline_3798$$);
                    }(), function() {
                      var $G__184618$$ = function() {
                        return {children:[function() {
                          var $G__184624$$ = {className:$APP.$helix$impl$props$normalize_class$$($field_label$$), children:"EIN: "};
                          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__184624$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__184624$$);
                        }(), function() {
                          var $G__184628$$ = {className:$APP.$helix$impl$props$normalize_class$$($field_value$$), children:"92-2395513"};
                          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__184628$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__184628$$);
                        }()]};
                      }();
                      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__184618$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__184618$$);
                    }(), function() {
                      var $G__184636$$ = function() {
                        return {children:[function() {
                          var $G__184640$$ = {className:$APP.$helix$impl$props$normalize_class$$($field_label$$), children:"Located in: "};
                          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__184640$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__184640$$);
                        }(), function() {
                          var $G__184666$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_bold$$), children:"Los Angeles, CA"};
                          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__184666$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__184666$$);
                        }()]};
                      }();
                      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__184636$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__184636$$);
                    }()]};
                  }();
                  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__184598$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__184598$$);
                }(), function() {
                  var $G__184678$$ = function() {
                    return {className:"mt-10 grid grid-cols-1 lg:grid-cols-2 gap-10", children:[function() {
                      var $G__184684$$ = function() {
                        return {children:[function() {
                          var $G__184690_JSCompiler_temp_const$jscomp$inline_3800$$ = $APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$heading_section$$, "text-slate-900  dark:text-slate-100", "mb-4"])));
                          var $G__184700$jscomp$inline_3802_JSCompiler_inline_result$jscomp$inline_3801$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-normal", "text-slate-600  dark:text-slate-400"]))), children:"Transfers"};
                          $G__184700$jscomp$inline_3802_JSCompiler_inline_result$jscomp$inline_3801$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__184700$jscomp$inline_3802_JSCompiler_inline_result$jscomp$inline_3801$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__184700$jscomp$inline_3802_JSCompiler_inline_result$jscomp$inline_3801$$);
                          $G__184690_JSCompiler_temp_const$jscomp$inline_3800$$ = {className:$G__184690_JSCompiler_temp_const$jscomp$inline_3800$$, children:["Domestic ", $G__184700$jscomp$inline_3802_JSCompiler_inline_result$jscomp$inline_3801$$]};
                          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__184690_JSCompiler_temp_const$jscomp$inline_3800$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__184690_JSCompiler_temp_const$jscomp$inline_3800$$);
                        }(), function() {
                          var $G__184712$$ = function() {
                            return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-mono", "text-sm", "space-y-3"]))), children:[function() {
                              var $G__184720$$ = function() {
                                return {className:"flex items-baseline justify-between gap-6", children:[function() {
                                  var $G__184728$$ = {className:$APP.$helix$impl$props$normalize_class$$($field_label$$), children:"Name:"};
                                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__184728$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__184728$$);
                                }(), function() {
                                  var $G__184733$$ = {className:"text-right", children:"Fallen Angels Inc."};
                                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__184733$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__184733$$);
                                }()]};
                              }();
                              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__184720$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__184720$$);
                            }(), function() {
                              var $G__184737$$ = function() {
                                return {className:"flex items-baseline justify-between gap-6", children:[function() {
                                  var $G__184745$$ = {className:$APP.$helix$impl$props$normalize_class$$($field_label$$), children:"Routing:"};
                                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__184745$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__184745$$);
                                }(), function() {
                                  var $G__184751$$ = {className:$APP.$helix$impl$props$normalize_class$$($field_value$$), children:"091311229"};
                                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__184751$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__184751$$);
                                }()]};
                              }();
                              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__184737$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__184737$$);
                            }(), function() {
                              var $G__184759$$ = function() {
                                return {className:"flex items-baseline justify-between gap-6", children:[function() {
                                  var $G__184765$$ = {className:$APP.$helix$impl$props$normalize_class$$($field_label$$), children:"Account #:"};
                                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__184765$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__184765$$);
                                }(), function() {
                                  var $G__184772$$ = {className:$APP.$helix$impl$props$normalize_class$$($field_value$$), children:"202535309341"};
                                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__184772$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__184772$$);
                                }()]};
                              }();
                              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__184759$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__184759$$);
                            }(), function() {
                              var $G__184776$$ = function() {
                                return {className:"flex items-start justify-between gap-6", children:[function() {
                                  var $G__184780$$ = {className:$APP.$helix$impl$props$normalize_class$$($field_label$$), children:"Address:"};
                                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__184780$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__184780$$);
                                }(), function() {
                                  var $G__184785$$ = function() {
                                    return {className:"text-right leading-snug", children:[function() {
                                      var $G__184789$$ = {children:"Choice Financial Group"};
                                      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__184789$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__184789$$);
                                    }(), function() {
                                      var $G__184793$$ = {children:"4501 23rd Avenue S"};
                                      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__184793$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__184793$$);
                                    }(), function() {
                                      var $G__184799$$ = {children:"Fargo, ND 58104"};
                                      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__184799$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__184799$$);
                                    }()]};
                                  }();
                                  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__184785$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__184785$$);
                                }()]};
                              }();
                              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__184776$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__184776$$);
                            }()]};
                          }();
                          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__184712$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__184712$$);
                        }()]};
                      }();
                      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__184684$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__184684$$);
                    }(), function() {
                      var $G__184807$$ = function() {
                        return {children:[function() {
                          var $G__184814_JSCompiler_temp_const$jscomp$inline_3804$$ = $APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$heading_section$$, "text-slate-900  dark:text-slate-100", "mb-4"])));
                          var $G__184822$jscomp$inline_3806_JSCompiler_inline_result$jscomp$inline_3805$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-normal", "text-slate-600  dark:text-slate-400"]))), children:"Transfers"};
                          $G__184822$jscomp$inline_3806_JSCompiler_inline_result$jscomp$inline_3805$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__184822$jscomp$inline_3806_JSCompiler_inline_result$jscomp$inline_3805$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__184822$jscomp$inline_3806_JSCompiler_inline_result$jscomp$inline_3805$$);
                          $G__184814_JSCompiler_temp_const$jscomp$inline_3804$$ = {className:$G__184814_JSCompiler_temp_const$jscomp$inline_3804$$, children:["International ", $G__184822$jscomp$inline_3806_JSCompiler_inline_result$jscomp$inline_3805$$]};
                          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__184814_JSCompiler_temp_const$jscomp$inline_3804$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__184814_JSCompiler_temp_const$jscomp$inline_3804$$);
                        }(), function() {
                          var $G__184829$$ = function() {
                            return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-mono", "text-sm", "space-y-3"]))), children:[function() {
                              var $G__184835$$ = function() {
                                return {className:"flex items-baseline justify-between gap-6", children:[function() {
                                  var $G__184841$$ = {className:$APP.$helix$impl$props$normalize_class$$($field_label$$), children:"Name:"};
                                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__184841$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__184841$$);
                                }(), function() {
                                  var $G__184848$$ = {className:"text-right", children:"Fallen Angels Inc."};
                                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__184848$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__184848$$);
                                }()]};
                              }();
                              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__184835$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__184835$$);
                            }(), function() {
                              var $G__184853$$ = function() {
                                return {className:"flex items-baseline justify-between gap-6", children:[function() {
                                  var $G__184857$$ = {className:$APP.$helix$impl$props$normalize_class$$($field_label$$), children:"SWIFT/BIC:"};
                                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__184857$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__184857$$);
                                }(), function() {
                                  var $G__184861$$ = {className:$APP.$helix$impl$props$normalize_class$$($field_value$$), children:"CHFGUS44021"};
                                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__184861$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__184861$$);
                                }()]};
                              }();
                              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__184853$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__184853$$);
                            }(), function() {
                              var $G__184865$$ = function() {
                                return {className:"flex items-baseline justify-between gap-6", children:[function() {
                                  var $G__184869$$ = {className:$APP.$helix$impl$props$normalize_class$$($field_label$$), children:"ABA/Routing:"};
                                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__184869$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__184869$$);
                                }(), function() {
                                  var $G__184873$$ = {className:$APP.$helix$impl$props$normalize_class$$($field_value$$), children:"091311229"};
                                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__184873$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__184873$$);
                                }()]};
                              }();
                              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__184865$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__184865$$);
                            }(), function() {
                              var $G__184877$$ = function() {
                                return {className:"flex items-baseline justify-between gap-6", children:[function() {
                                  var $G__184881$$ = {className:$APP.$helix$impl$props$normalize_class$$($field_label$$), children:"IBAN/Account #:"};
                                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__184881$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__184881$$);
                                }(), function() {
                                  var $G__184885$$ = {className:$APP.$helix$impl$props$normalize_class$$($field_value$$), children:"202535309341"};
                                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__184885$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__184885$$);
                                }()]};
                              }();
                              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__184877$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__184877$$);
                            }(), function() {
                              var $G__184889$$ = function() {
                                return {className:"flex items-start justify-between gap-6", children:[function() {
                                  var $G__184893$$ = {className:$APP.$helix$impl$props$normalize_class$$($field_label$$), children:"Address:"};
                                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__184893$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__184893$$);
                                }(), function() {
                                  var $G__184897$$ = function() {
                                    return {className:"text-right leading-snug", children:[function() {
                                      var $G__184901$$ = {children:"Choice Financial Group"};
                                      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__184901$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__184901$$);
                                    }(), function() {
                                      var $G__184905$$ = {children:"4501 23rd Avenue S"};
                                      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__184905$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__184905$$);
                                    }(), function() {
                                      var $G__184909$$ = {children:"Fargo, ND 58104"};
                                      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__184909$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__184909$$);
                                    }()]};
                                  }();
                                  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__184897$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__184897$$);
                                }()]};
                              }();
                              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__184889$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__184889$$);
                            }()]};
                          }();
                          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__184829$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__184829$$);
                        }()]};
                      }();
                      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__184807$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__184807$$);
                    }()]};
                  }();
                  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__184678$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__184678$$);
                }()]};
              }();
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__184566$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__184566$$);
            }(), function() {
              var $G__184913$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["text-slate-600  dark:text-slate-400", "p-4 mt-10 text-sm md:text-base"]))), children:"If you would like a receipt letter for your records, please include your name and email address with the transfer memo."};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__184913$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__184913$$);
            }()]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__184558$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__184558$$);
        }()};
      }();
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$pages$budget$section_block$section_block$$, $G__184552$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$pages$budget$section_block$section_block$$, $G__184552$$);
    }()};
  }();
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__184546_map__184532_map__184532__$1_props__41575__auto__$jscomp$72_vec__184529$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__184546_map__184532_map__184532__$1_props__41575__auto__$jscomp$72_vec__184529$$);
};
$amp$pages$budget$sponsors$logo_card$$ = function($G__185063_G__185067$jscomp$inline_3992_map__185061_name$jscomp$199_props__41575__auto__$jscomp$73_vec__185058$$, $logo_map__185061__$1_maybe_ref__41576__auto__$jscomp$73$$) {
  $G__185063_G__185067$jscomp$inline_3992_map__185061_name$jscomp$199_props__41575__auto__$jscomp$73_vec__185058$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__185063_G__185067$jscomp$inline_3992_map__185061_name$jscomp$199_props__41575__auto__$jscomp$73_vec__185058$$), $logo_map__185061__$1_maybe_ref__41576__auto__$jscomp$73$$], null);
  $G__185063_G__185067$jscomp$inline_3992_map__185061_name$jscomp$199_props__41575__auto__$jscomp$73_vec__185058$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__185063_G__185067$jscomp$inline_3992_map__185061_name$jscomp$199_props__41575__auto__$jscomp$73_vec__185058$$, 0, null);
  $logo_map__185061__$1_maybe_ref__41576__auto__$jscomp$73$$ = $APP.$cljs$core$__destructure_map$$($G__185063_G__185067$jscomp$inline_3992_map__185061_name$jscomp$199_props__41575__auto__$jscomp$73_vec__185058$$);
  $G__185063_G__185067$jscomp$inline_3992_map__185061_name$jscomp$199_props__41575__auto__$jscomp$73_vec__185058$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($logo_map__185061__$1_maybe_ref__41576__auto__$jscomp$73$$, $APP.$cljs$cst$165$name$$);
  $logo_map__185061__$1_maybe_ref__41576__auto__$jscomp$73$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($logo_map__185061__$1_maybe_ref__41576__auto__$jscomp$73$$, $cljs$cst$891$logo$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__185063_G__185067$jscomp$inline_3992_map__185061_name$jscomp$199_props__41575__auto__$jscomp$73_vec__185058$$ = {src:$logo_map__185061__$1_maybe_ref__41576__auto__$jscomp$73$$, alt:$G__185063_G__185067$jscomp$inline_3992_map__185061_name$jscomp$199_props__41575__auto__$jscomp$73_vec__185058$$, style:{height:$APP.$helix$impl$props$__GT_js$$("4rem"), width:$APP.$helix$impl$props$__GT_js$$("auto")}, className:" transition-all duration-500\n                         \n                         drop-shadow-[0_0_12px_rgba(249,168,212,0)] group-hover:drop-shadow-[0_0_20px_rgba(249,168,212,0.15)]"};
  $G__185063_G__185067$jscomp$inline_3992_map__185061_name$jscomp$199_props__41575__auto__$jscomp$73_vec__185058$$ = {className:"group py-6 px-8 transition-all duration-500 ease-out", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("img", $G__185063_G__185067$jscomp$inline_3992_map__185061_name$jscomp$199_props__41575__auto__$jscomp$73_vec__185058$$) : $APP.$helix$core$jsx$$.call(null, "img", $G__185063_G__185067$jscomp$inline_3992_map__185061_name$jscomp$199_props__41575__auto__$jscomp$73_vec__185058$$)};
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__185063_G__185067$jscomp$inline_3992_map__185061_name$jscomp$199_props__41575__auto__$jscomp$73_vec__185058$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__185063_G__185067$jscomp$inline_3992_map__185061_name$jscomp$199_props__41575__auto__$jscomp$73_vec__185058$$);
};
$amp$pages$budget$sponsors$name_item$$ = function($G__185080_map__185078_name$jscomp$200_props__41575__auto__$jscomp$74_vec__185075$$, $accent_map__185078__$1_maybe_ref__41576__auto__$jscomp$74$$) {
  $G__185080_map__185078_name$jscomp$200_props__41575__auto__$jscomp$74_vec__185075$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__185080_map__185078_name$jscomp$200_props__41575__auto__$jscomp$74_vec__185075$$), $accent_map__185078__$1_maybe_ref__41576__auto__$jscomp$74$$], null);
  $G__185080_map__185078_name$jscomp$200_props__41575__auto__$jscomp$74_vec__185075$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__185080_map__185078_name$jscomp$200_props__41575__auto__$jscomp$74_vec__185075$$, 0, null);
  $accent_map__185078__$1_maybe_ref__41576__auto__$jscomp$74$$ = $APP.$cljs$core$__destructure_map$$($G__185080_map__185078_name$jscomp$200_props__41575__auto__$jscomp$74_vec__185075$$);
  $G__185080_map__185078_name$jscomp$200_props__41575__auto__$jscomp$74_vec__185075$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($accent_map__185078__$1_maybe_ref__41576__auto__$jscomp$74$$, $APP.$cljs$cst$165$name$$);
  $accent_map__185078__$1_maybe_ref__41576__auto__$jscomp$74$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($accent_map__185078__$1_maybe_ref__41576__auto__$jscomp$74$$, $cljs$cst$895$accent$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__185080_map__185078_name$jscomp$200_props__41575__auto__$jscomp$74_vec__185075$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-mono", "text-sm", "tracking-wide", $accent_map__185078__$1_maybe_ref__41576__auto__$jscomp$74$$]))), children:$G__185080_map__185078_name$jscomp$200_props__41575__auto__$jscomp$74_vec__185075$$};
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__185080_map__185078_name$jscomp$200_props__41575__auto__$jscomp$74_vec__185075$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__185080_map__185078_name$jscomp$200_props__41575__auto__$jscomp$74_vec__185075$$);
};
$amp$pages$budget$sponsors$tier_section$$ = function($G__185108_map__185095_map__185095__$1_members$jscomp$1_props__41575__auto__$jscomp$75_vec__185092$$, $map__185100_map__185100__$1_maybe_ref__41576__auto__$jscomp$75_tier$$) {
  $G__185108_map__185095_map__185095__$1_members$jscomp$1_props__41575__auto__$jscomp$75_vec__185092$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__185108_map__185095_map__185095__$1_members$jscomp$1_props__41575__auto__$jscomp$75_vec__185092$$), $map__185100_map__185100__$1_maybe_ref__41576__auto__$jscomp$75_tier$$], null);
  $G__185108_map__185095_map__185095__$1_members$jscomp$1_props__41575__auto__$jscomp$75_vec__185092$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__185108_map__185095_map__185095__$1_members$jscomp$1_props__41575__auto__$jscomp$75_vec__185092$$, 0, null);
  $G__185108_map__185095_map__185095__$1_members$jscomp$1_props__41575__auto__$jscomp$75_vec__185092$$ = $APP.$cljs$core$__destructure_map$$($G__185108_map__185095_map__185095__$1_members$jscomp$1_props__41575__auto__$jscomp$75_vec__185092$$);
  $map__185100_map__185100__$1_maybe_ref__41576__auto__$jscomp$75_tier$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__185108_map__185095_map__185095__$1_members$jscomp$1_props__41575__auto__$jscomp$75_vec__185092$$, $cljs$cst$889$tier$$);
  $G__185108_map__185095_map__185095__$1_members$jscomp$1_props__41575__auto__$jscomp$75_vec__185092$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__185108_map__185095_map__185095__$1_members$jscomp$1_props__41575__auto__$jscomp$75_vec__185092$$, $cljs$cst$899$members$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $map__185100_map__185100__$1_maybe_ref__41576__auto__$jscomp$75_tier$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($amp$pages$budget$sponsors$tier_meta$$, $map__185100_map__185100__$1_maybe_ref__41576__auto__$jscomp$75_tier$$);
  $map__185100_map__185100__$1_maybe_ref__41576__auto__$jscomp$75_tier$$ = $APP.$cljs$core$__destructure_map$$($map__185100_map__185100__$1_maybe_ref__41576__auto__$jscomp$75_tier$$);
  var $label$jscomp$18$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__185100_map__185100__$1_maybe_ref__41576__auto__$jscomp$75_tier$$, $APP.$cljs$cst$408$label$$), $accent$jscomp$1$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__185100_map__185100__$1_maybe_ref__41576__auto__$jscomp$75_tier$$, $cljs$cst$895$accent$$), $border$jscomp$6$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__185100_map__185100__$1_maybe_ref__41576__auto__$jscomp$75_tier$$, 
  $APP.$cljs$cst$393$border$$), $with_logos$$ = $APP.$cljs$core$filter$cljs$0core$0IFn$0_invoke$0arity$02$$($cljs$cst$891$logo$$, $G__185108_map__185095_map__185095__$1_members$jscomp$1_props__41575__auto__$jscomp$75_vec__185092$$), $without_logos$$ = $APP.$cljs$core$remove$cljs$0core$0IFn$0_invoke$0arity$02$$($cljs$cst$891$logo$$, $G__185108_map__185095_map__185095__$1_members$jscomp$1_props__41575__auto__$jscomp$75_vec__185092$$);
  $G__185108_map__185095_map__185095__$1_members$jscomp$1_props__41575__auto__$jscomp$75_vec__185092$$ = function() {
    return {className:"mb-12", children:[function() {
      var $G__185114_G__185122$jscomp$inline_3811$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-mono", "text-xl", "font-bold", "uppercase", "tracking-[0.15em]", $accent$jscomp$1$$]))), children:$label$jscomp$18$$};
      $G__185114_G__185122$jscomp$inline_3811$$ = {className:"flex items-center gap-3 mb", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__185114_G__185122$jscomp$inline_3811$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__185114_G__185122$jscomp$inline_3811$$)};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__185114_G__185122$jscomp$inline_3811$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__185114_G__185122$jscomp$inline_3811$$);
    }(), $APP.$cljs$core$seq$$($with_logos$$) ? function() {
      var $G__185134$$ = function() {
        return {className:"mb-4 flex flex-col items-center", children:$APP.$cljs$core$map$$.$cljs$core$IFn$_invoke$arity$2$(function($name$jscomp$201_p__185141$$) {
          var $G__185156_logo$jscomp$1_map__185150__$1$$ = $APP.$cljs$core$__destructure_map$$($name$jscomp$201_p__185141$$);
          $name$jscomp$201_p__185141$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__185156_logo$jscomp$1_map__185150__$1$$, $APP.$cljs$cst$165$name$$);
          $G__185156_logo$jscomp$1_map__185150__$1$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__185156_logo$jscomp$1_map__185150__$1$$, $cljs$cst$891$logo$$);
          $G__185156_logo$jscomp$1_map__185150__$1$$ = {name:$name$jscomp$201_p__185141$$, logo:$G__185156_logo$jscomp$1_map__185150__$1$$};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$($amp$pages$budget$sponsors$logo_card$$, $G__185156_logo$jscomp$1_map__185150__$1$$, $name$jscomp$201_p__185141$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$budget$sponsors$logo_card$$, $G__185156_logo$jscomp$1_map__185150__$1$$, $name$jscomp$201_p__185141$$);
        }, $with_logos$$)};
      }();
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__185134$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__185134$$);
    }() : null, $APP.$cljs$core$seq$$($without_logos$$) ? function() {
      var $G__185163$$ = function() {
        return {className:"flex flex-wrap gap-x-6 gap-y-2", children:$APP.$cljs$core$map$$.$cljs$core$IFn$_invoke$arity$2$(function($map__185167__$1_name$jscomp$202_p__185166$$) {
          $map__185167__$1_name$jscomp$202_p__185166$$ = $APP.$cljs$core$__destructure_map$$($map__185167__$1_name$jscomp$202_p__185166$$);
          $map__185167__$1_name$jscomp$202_p__185166$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__185167__$1_name$jscomp$202_p__185166$$, $APP.$cljs$cst$165$name$$);
          var $G__185169_JSCompiler_temp_const$jscomp$inline_3813$$ = $APP.$helix$impl$props$normalize_class$$("border-l-2 pl-3 py-1 " + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($border$jscomp$6$$));
          var $G__185174$jscomp$inline_3815_JSCompiler_inline_result$jscomp$inline_3814$$ = {name:$map__185167__$1_name$jscomp$202_p__185166$$, accent:$accent$jscomp$1$$};
          $G__185174$jscomp$inline_3815_JSCompiler_inline_result$jscomp$inline_3814$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$pages$budget$sponsors$name_item$$, $G__185174$jscomp$inline_3815_JSCompiler_inline_result$jscomp$inline_3814$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$budget$sponsors$name_item$$, $G__185174$jscomp$inline_3815_JSCompiler_inline_result$jscomp$inline_3814$$);
          $G__185169_JSCompiler_temp_const$jscomp$inline_3813$$ = {className:$G__185169_JSCompiler_temp_const$jscomp$inline_3813$$, children:$G__185174$jscomp$inline_3815_JSCompiler_inline_result$jscomp$inline_3814$$};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$("div", $G__185169_JSCompiler_temp_const$jscomp$inline_3813$$, $map__185167__$1_name$jscomp$202_p__185166$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__185169_JSCompiler_temp_const$jscomp$inline_3813$$, $map__185167__$1_name$jscomp$202_p__185166$$);
        }, $without_logos$$)};
      }();
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__185163$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__185163$$);
    }() : null]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__185108_map__185095_map__185095__$1_members$jscomp$1_props__41575__auto__$jscomp$75_vec__185092$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__185108_map__185095_map__185095__$1_members$jscomp$1_props__41575__auto__$jscomp$75_vec__185092$$);
};
$amp$pages$budget$sponsors$sponsors_section$$ = function($G__185194_map__185183_map__185183__$1_props__41575__auto__$jscomp$76_vec__185180$$, $maybe_ref__41576__auto__$jscomp$76$$) {
  $G__185194_map__185183_map__185183__$1_props__41575__auto__$jscomp$76_vec__185180$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__185194_map__185183_map__185183__$1_props__41575__auto__$jscomp$76_vec__185180$$), $maybe_ref__41576__auto__$jscomp$76$$], null);
  $G__185194_map__185183_map__185183__$1_props__41575__auto__$jscomp$76_vec__185180$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__185194_map__185183_map__185183__$1_props__41575__auto__$jscomp$76_vec__185180$$, 0, null);
  $G__185194_map__185183_map__185183__$1_props__41575__auto__$jscomp$76_vec__185180$$ = $APP.$cljs$core$__destructure_map$$($G__185194_map__185183_map__185183__$1_props__41575__auto__$jscomp$76_vec__185180$$);
  var $id$jscomp$96$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__185194_map__185183_map__185183__$1_props__41575__auto__$jscomp$76_vec__185180$$, $APP.$cljs$cst$285$id$$), $subtitle$jscomp$7$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__185194_map__185183_map__185183__$1_props__41575__auto__$jscomp$76_vec__185180$$, $APP.$cljs$cst$771$subtitle$$), $title$jscomp$29$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__185194_map__185183_map__185183__$1_props__41575__auto__$jscomp$76_vec__185180$$, 
  $APP.$cljs$cst$287$title$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $grouped$jscomp$1$$ = $APP.$cljs$core$sort_by$cljs$0core$0IFn$0_invoke$0arity$02$$(function($p__185184$$) {
    var $tier$jscomp$1$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($p__185184$$, 0, null);
    $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($p__185184$$, 1, null);
    return $cljs$cst$896$order$$.$cljs$core$IFn$_invoke$arity$1$($APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($amp$pages$budget$sponsors$tier_meta$$, $tier$jscomp$1$$));
  }, $APP.$cljs$core$group_by$$($cljs$cst$889$tier$$, $amp$pages$budget$sponsors$sponsors$$));
  $G__185194_map__185183_map__185183__$1_props__41575__auto__$jscomp$76_vec__185180$$ = function() {
    return {id:$id$jscomp$96$$, children:function() {
      var $G__185198$$ = function() {
        return {idx:6, eyebrow:$subtitle$jscomp$7$$, title:$title$jscomp$29$$, children:function() {
          var $G__185212$$ = function() {
            return {className:"p-4 mt-6 space-y-2", children:[function() {
              var $G__185218$$ = function() {
                return {className:"mb-12", children:[function() {
                  var $G__185224$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["text-slate-700  dark:text-slate-300", "mb-8"]))), children:"At present the Armenia Pavilion 2026 "};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__185224$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__185224$$);
                }(), function() {
                  var $G__185232$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["text-rose-600   dark:text-rose-400"]))), children:"is only made possible"};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__185232$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__185232$$);
                }(), function() {
                  var $G__185242$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["text-slate-700  dark:text-slate-300", "mb-8"]))), children:" through the generosity of foundations, families, and individuals committed to helping sustaining Armenia's cultural presence on the international stage."};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__185242$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__185242$$);
                }()]};
              }();
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__185218$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__185218$$);
            }(), $APP.$cljs$core$map$$.$cljs$core$IFn$_invoke$arity$2$(function($G__185263_members$jscomp$2_p__185254$$) {
              var $G__185264_tier$jscomp$2$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__185263_members$jscomp$2_p__185254$$, 0, null);
              $G__185263_members$jscomp$2_p__185254$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__185263_members$jscomp$2_p__185254$$, 1, null);
              $G__185263_members$jscomp$2_p__185254$$ = {tier:$G__185264_tier$jscomp$2$$, members:$G__185263_members$jscomp$2_p__185254$$};
              $G__185264_tier$jscomp$2$$ = $APP.$cljs$core$name$$($G__185264_tier$jscomp$2$$);
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$($amp$pages$budget$sponsors$tier_section$$, $G__185263_members$jscomp$2_p__185254$$, $G__185264_tier$jscomp$2$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$budget$sponsors$tier_section$$, $G__185263_members$jscomp$2_p__185254$$, $G__185264_tier$jscomp$2$$);
            }, $grouped$jscomp$1$$)]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__185212$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__185212$$);
        }()};
      }();
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$pages$budget$section_block$section_block$$, $G__185198$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$pages$budget$section_block$section_block$$, $G__185198$$);
    }()};
  }();
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__185194_map__185183_map__185183__$1_props__41575__auto__$jscomp$76_vec__185180$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__185194_map__185183_map__185183__$1_props__41575__auto__$jscomp$76_vec__185180$$);
};
$amp$pages$budget$why_support$preview$$ = function($G__185286_map__185279_props__41575__auto__$jscomp$77_vec__185276$$, $maybe_ref__41576__auto__$jscomp$77$$) {
  $G__185286_map__185279_props__41575__auto__$jscomp$77_vec__185276$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__185286_map__185279_props__41575__auto__$jscomp$77_vec__185276$$), $maybe_ref__41576__auto__$jscomp$77$$], null);
  $G__185286_map__185279_props__41575__auto__$jscomp$77_vec__185276$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__185286_map__185279_props__41575__auto__$jscomp$77_vec__185276$$, 0, null);
  $APP.$cljs$core$__destructure_map$$($G__185286_map__185279_props__41575__auto__$jscomp$77_vec__185276$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__185286_map__185279_props__41575__auto__$jscomp$77_vec__185276$$ = function() {
    return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_lg$$, "p-4"]))), children:[function() {
      var $G__185296$$ = {children:'To stand on the Biennale\'s global stage is not "participation" in an art event—it is '};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__185296$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__185296$$);
    }(), function() {
      var $G__185302$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:"presence in the world's most influential cultural forum"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__185302$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__185302$$);
    }(), function() {
      var $G__185310$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:", where nations are read, remembered, and measured in real time. "};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__185310$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__185310$$);
    }(), function() {
      var $G__185318$$ = {children:"For the Republic of Armenia, a Pavilion is a sovereign act of cultural visibility: it declares that Armenia is not only a history to be mourned or a headline to be managed, but a "};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__185318$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__185318$$);
    }(), function() {
      var $G__185326$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-semibold", "italic", "text-slate-900  dark:text-slate-100"]))), children:"living intelligence"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__185326$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__185326$$);
    }(), function() {
      var $G__185336$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:"—capable of producing contemporary vision at the highest level. "};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__185336$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__185336$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__185286_map__185279_props__41575__auto__$jscomp$77_vec__185276$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__185286_map__185279_props__41575__auto__$jscomp$77_vec__185276$$);
};
$amp$pages$budget$why_support$details$$ = function($G__185409_map__185403_props__41575__auto__$jscomp$78_vec__185400$$, $maybe_ref__41576__auto__$jscomp$78$$) {
  $G__185409_map__185403_props__41575__auto__$jscomp$78_vec__185400$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__185409_map__185403_props__41575__auto__$jscomp$78_vec__185400$$), $maybe_ref__41576__auto__$jscomp$78$$], null);
  $G__185409_map__185403_props__41575__auto__$jscomp$78_vec__185400$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__185409_map__185403_props__41575__auto__$jscomp$78_vec__185400$$, 0, null);
  $APP.$cljs$core$__destructure_map$$($G__185409_map__185403_props__41575__auto__$jscomp$78_vec__185400$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__185409_map__185403_props__41575__auto__$jscomp$78_vec__185400$$ = function() {
    return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_lg$$, "p-4"]))), children:[function() {
      var $G__185415$$ = {children:'To stand on the Biennale\'s global stage is not "participation" in an art event—it is '};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__185415$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__185415$$);
    }(), function() {
      var $G__185421$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:"presence in the world's most influential cultural forum"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__185421$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__185421$$);
    }(), function() {
      var $G__185433$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:", where nations are read, remembered, and measured in real time. "};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__185433$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__185433$$);
    }(), function() {
      var $G__185443$$ = {children:"For the Republic of Armenia, a Pavilion is a sovereign act of cultural visibility: it declares that Armenia is not only a history to be mourned or a headline to be managed, but a "};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__185443$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__185443$$);
    }(), function() {
      var $G__185449$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-semibold", "italic", "text-slate-900  dark:text-slate-100"]))), children:"living intelligence"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__185449$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__185449$$);
    }(), function() {
      var $G__185459$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:"—capable of producing contemporary vision at the highest level. "};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__185459$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__185459$$);
    }(), function() {
      var $G__185467$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:"This is how nations earn stature without asking permission: by contributing meaning, not pleading for sympathy. In Venice, Armenia enters the shared conversation that curators, museums, collectors, journalists, and governments track—and what is seen there echoes for years in exhibitions, acquisitions, education, tourism, diplomacy, and philanthropic interest."};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__185467$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__185467$$);
    }(), function() {
      var $G__185475_G__185481$jscomp$inline_3818$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$em_strong$$, "text-lg"]))), children:"This is why being present matters—and what it elevates:"};
      $G__185475_G__185481$jscomp$inline_3818$$ = {className:"mt-8 mb-4", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__185475_G__185481$jscomp$inline_3818$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__185475_G__185481$jscomp$inline_3818$$)};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__185475_G__185481$jscomp$inline_3818$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__185475_G__185481$jscomp$inline_3818$$);
    }(), function() {
      var $G__185493$$ = function() {
        return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["text-slate-700  dark:text-slate-300", "space-y-4 ml-4"]))), children:[function() {
          var $G__185501_G__185509$jscomp$inline_3821$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_bold$$), children:"National dignity, made public: "};
          $G__185501_G__185509$jscomp$inline_3821$$ = {className:"", children:[$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__185501_G__185509$jscomp$inline_3821$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__185501_G__185509$jscomp$inline_3821$$), "Armenia is framed through excellence, discipline, and contemporary creativity—not solely through tragedy or geopolitics."]};
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("li", $G__185501_G__185509$jscomp$inline_3821$$) : $APP.$helix$core$jsxs$$.call(null, "li", $G__185501_G__185509$jscomp$inline_3821$$);
        }(), function() {
          var $G__185517_G__185523$jscomp$inline_3824$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_bold$$), children:"Soft power that compounds: "};
          $G__185517_G__185523$jscomp$inline_3824$$ = {className:"", children:[$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__185517_G__185523$jscomp$inline_3824$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__185517_G__185523$jscomp$inline_3824$$), "Cultural visibility becomes long-term credibility—opening doors that money or lobbying cannot."]};
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("li", $G__185517_G__185523$jscomp$inline_3824$$) : $APP.$helix$core$jsxs$$.call(null, "li", $G__185517_G__185523$jscomp$inline_3824$$);
        }(), function() {
          var $G__185533_G__185537$jscomp$inline_3827$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_bold$$), children:"Narrative control: "};
          $G__185533_G__185537$jscomp$inline_3827$$ = {className:"", children:[$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__185533_G__185537$jscomp$inline_3827$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__185533_G__185537$jscomp$inline_3827$$), "If Armenia does not author its own image, others will—and they will simplify it."]};
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("li", $G__185533_G__185537$jscomp$inline_3827$$) : $APP.$helix$core$jsxs$$.call(null, "li", $G__185533_G__185537$jscomp$inline_3827$$);
        }(), function() {
          var $G__185544_G__185548$jscomp$inline_3830$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_bold$$), children:"A platform for future generations: "};
          $G__185544_G__185548$jscomp$inline_3830$$ = {className:"", children:[$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__185544_G__185548$jscomp$inline_3830$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__185544_G__185548$jscomp$inline_3830$$), 'A serious national presence signals to Armenian artists, students, and institutions that the world stage is not "for others."']};
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("li", $G__185544_G__185548$jscomp$inline_3830$$) : $APP.$helix$core$jsxs$$.call(null, "li", $G__185544_G__185548$jscomp$inline_3830$$);
        }(), function() {
          var $G__185558_G__185564$jscomp$inline_3833$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_bold$$), children:"Diaspora cohesion: "};
          $G__185558_G__185564$jscomp$inline_3833$$ = {className:"", children:[$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__185558_G__185564$jscomp$inline_3833$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__185558_G__185564$jscomp$inline_3833$$), "A Pavilion becomes a shared achievement—an anchor event that unifies donors, families, and communities around something constructive and proud."]};
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("li", $G__185558_G__185564$jscomp$inline_3833$$) : $APP.$helix$core$jsxs$$.call(null, "li", $G__185558_G__185564$jscomp$inline_3833$$);
        }(), function() {
          var $G__185572_G__185577$jscomp$inline_3836$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_bold$$), children:"Institutional consequences: "};
          $G__185572_G__185577$jscomp$inline_3836$$ = {className:"", children:[$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__185572_G__185577$jscomp$inline_3836$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__185572_G__185577$jscomp$inline_3836$$), "Serious participation invites museum partnerships, residencies, publications, acquisitions, and recurring invitations—real infrastructure, not a momentary spotlight."]};
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("li", $G__185572_G__185577$jscomp$inline_3836$$) : $APP.$helix$core$jsxs$$.call(null, "li", $G__185572_G__185577$jscomp$inline_3836$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("ul", $G__185493$$) : $APP.$helix$core$jsxs$$.call(null, "ul", $G__185493$$);
    }(), function() {
      var $G__185581$$ = function() {
        return {className:"block mt-8", children:[function() {
          var $G__185586$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:"The opportunity cost of not partaking is brutal and silent: "};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__185586$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__185586$$);
        }(), function() {
          var $G__185591$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-semibold", "italic", "text-slate-900  dark:text-slate-100"]))), children:"invisibility"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__185591$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__185591$$);
        }(), function() {
          var $G__185595$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:". The world does not pause because a nation is under-resourced; it simply moves on, and the absence becomes a habit. In a cultural ecosystem, absence reads as incapacity. It reinforces the unfair but persistent idea that Armenia is peripheral—always reacting, never defining. "};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__185595$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__185595$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__185581$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__185581$$);
    }(), function() {
      var $G__185599$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["text-slate-700  dark:text-slate-300", "block mt-6"]))), children:'That is the long-term gap: Armenia is not always "where it should be" because it has too often been forced into survival mode—outspent, out-networked, and underrepresented in the institutions that shape global memory. '};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__185599$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__185599$$);
    }(), function() {
      var $G__185603$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["text-slate-700  dark:text-slate-300", "block mt-6"]))), children:'A donor is not "buying" a sculpture or an event; they are buying '};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__185603$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__185603$$);
    }(), function() {
      var $G__185607$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:"representation with consequences"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__185607$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__185607$$);
    }(), function() {
      var $G__185611$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:": an enduring record that Armenia showed up with seriousness, ambition, and world-class execution. The legacy is reputational and generational: a Pavilion that becomes a reference point—documented, published, archived, collected, cited—and a model that makes the next Armenian presence easier, stronger, and inevitable."};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__185611$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__185611$$);
    }(), function() {
      var $G__185615$$ = {className:"block mt-8", children:"And yes: "};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__185615$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__185615$$);
    }(), function() {
      var $G__185619$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-semibold", "italic", "text-slate-900  dark:text-slate-100"]))), children:"the cultural battle must be won"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__185619$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__185619$$);
    }(), function() {
      var $G__185627$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:"—not with aggression, but with clarity, consistency, and excellence. Culture is where nations become undeniable. It is where influence is built without violence; where history is not only remembered, but translated into future power. "};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__185627$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__185627$$);
    }(), function() {
      var $G__185640$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_closing$$, "block mt-6"]))), children:"Supporting this Pavilion is patriotism in its most practical form: it is an investment in Armenia's standing, Armenia's narrative, and Armenia's right to be seen at full scale—on equal terms—where the world is watching."};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__185640$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__185640$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__185409_map__185403_props__41575__auto__$jscomp$78_vec__185400$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__185409_map__185403_props__41575__auto__$jscomp$78_vec__185400$$);
};
$amp$pages$budget$why_support$why_support$$ = function($G__185651_id$jscomp$97_map__185649_props__41575__auto__$jscomp$79_vec__185646$$, $G__185655$jscomp$inline_3839_JSCompiler_inline_result$jscomp$inline_3838_maybe_ref__41576__auto__$jscomp$79_subtitle$jscomp$8$$) {
  $G__185651_id$jscomp$97_map__185649_props__41575__auto__$jscomp$79_vec__185646$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__185651_id$jscomp$97_map__185649_props__41575__auto__$jscomp$79_vec__185646$$), $G__185655$jscomp$inline_3839_JSCompiler_inline_result$jscomp$inline_3838_maybe_ref__41576__auto__$jscomp$79_subtitle$jscomp$8$$], null);
  $G__185651_id$jscomp$97_map__185649_props__41575__auto__$jscomp$79_vec__185646$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__185651_id$jscomp$97_map__185649_props__41575__auto__$jscomp$79_vec__185646$$, 0, null);
  var $map__185649__$1_title$jscomp$30$$ = $APP.$cljs$core$__destructure_map$$($G__185651_id$jscomp$97_map__185649_props__41575__auto__$jscomp$79_vec__185646$$);
  $G__185651_id$jscomp$97_map__185649_props__41575__auto__$jscomp$79_vec__185646$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__185649__$1_title$jscomp$30$$, $APP.$cljs$cst$285$id$$);
  $G__185655$jscomp$inline_3839_JSCompiler_inline_result$jscomp$inline_3838_maybe_ref__41576__auto__$jscomp$79_subtitle$jscomp$8$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__185649__$1_title$jscomp$30$$, $APP.$cljs$cst$771$subtitle$$);
  $map__185649__$1_title$jscomp$30$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__185649__$1_title$jscomp$30$$, $APP.$cljs$cst$287$title$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__185655$jscomp$inline_3839_JSCompiler_inline_result$jscomp$inline_3838_maybe_ref__41576__auto__$jscomp$79_subtitle$jscomp$8$$ = {idx:9, "section-hint":$G__185655$jscomp$inline_3839_JSCompiler_inline_result$jscomp$inline_3838_maybe_ref__41576__auto__$jscomp$79_subtitle$jscomp$8$$, title:$map__185649__$1_title$jscomp$30$$, "expand-button-label":"Read more", "preview-text":$amp$pages$budget$why_support$preview$$, "full-text":$amp$pages$budget$why_support$details$$};
  $G__185655$jscomp$inline_3839_JSCompiler_inline_result$jscomp$inline_3838_maybe_ref__41576__auto__$jscomp$79_subtitle$jscomp$8$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$ui$expandable_text$expandable_text_area_2$$, $G__185655$jscomp$inline_3839_JSCompiler_inline_result$jscomp$inline_3838_maybe_ref__41576__auto__$jscomp$79_subtitle$jscomp$8$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$ui$expandable_text$expandable_text_area_2$$, 
  $G__185655$jscomp$inline_3839_JSCompiler_inline_result$jscomp$inline_3838_maybe_ref__41576__auto__$jscomp$79_subtitle$jscomp$8$$);
  $G__185651_id$jscomp$97_map__185649_props__41575__auto__$jscomp$79_vec__185646$$ = {id:$G__185651_id$jscomp$97_map__185649_props__41575__auto__$jscomp$79_vec__185646$$, children:$G__185655$jscomp$inline_3839_JSCompiler_inline_result$jscomp$inline_3838_maybe_ref__41576__auto__$jscomp$79_subtitle$jscomp$8$$};
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__185651_id$jscomp$97_map__185649_props__41575__auto__$jscomp$79_vec__185646$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__185651_id$jscomp$97_map__185649_props__41575__auto__$jscomp$79_vec__185646$$);
};
$amp$pages$budget$section$section_link$$ = function($G__187040_map__187038_map__187038__$1_props__41575__auto__$jscomp$80_vec__187035$$, $maybe_ref__41576__auto__$jscomp$80$$) {
  $G__187040_map__187038_map__187038__$1_props__41575__auto__$jscomp$80_vec__187035$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__187040_map__187038_map__187038__$1_props__41575__auto__$jscomp$80_vec__187035$$), $maybe_ref__41576__auto__$jscomp$80$$], null);
  $G__187040_map__187038_map__187038__$1_props__41575__auto__$jscomp$80_vec__187035$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__187040_map__187038_map__187038__$1_props__41575__auto__$jscomp$80_vec__187035$$, 0, null);
  $G__187040_map__187038_map__187038__$1_props__41575__auto__$jscomp$80_vec__187035$$ = $APP.$cljs$core$__destructure_map$$($G__187040_map__187038_map__187038__$1_props__41575__auto__$jscomp$80_vec__187035$$);
  var $title$jscomp$31$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__187040_map__187038_map__187038__$1_props__41575__auto__$jscomp$80_vec__187035$$, $APP.$cljs$cst$287$title$$), $anchor$jscomp$2$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__187040_map__187038_map__187038__$1_props__41575__auto__$jscomp$80_vec__187035$$, $cljs$cst$900$anchor$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $scroll_to_id$jscomp$3$$ = $APP.$amp$hooks$use_scroll_to$use_scroll_to_id$$();
  $G__187040_map__187038_map__187038__$1_props__41575__auto__$jscomp$80_vec__187035$$ = function() {
    return {onClick:function() {
      return $scroll_to_id$jscomp$3$$.$cljs$core$IFn$_invoke$arity$1$ ? $scroll_to_id$jscomp$3$$.$cljs$core$IFn$_invoke$arity$1$($anchor$jscomp$2$$) : $scroll_to_id$jscomp$3$$.call(null, $anchor$jscomp$2$$);
    }, className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$nav_link$$), children:[$title$jscomp$31$$, " ", function() {
      var $G__187044$$ = {"class":"w-4 h-4 inline-block ml-1"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$ui$icons$ChevronRightIcon$$, $G__187044$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$ui$icons$ChevronRightIcon$$, $G__187044$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("button", $G__187040_map__187038_map__187038__$1_props__41575__auto__$jscomp$80_vec__187035$$) : $APP.$helix$core$jsxs$$.call(null, "button", $G__187040_map__187038_map__187038__$1_props__41575__auto__$jscomp$80_vec__187035$$);
};
$amp$pages$budget$section$header$$ = function($G__187056_props__41575__auto__$jscomp$81$$) {
  $APP.$helix$core$extract_cljs_props$$($G__187056_props__41575__auto__$jscomp$81$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__187056_props__41575__auto__$jscomp$81$$ = function() {
    return {className:"relative", children:[function() {
      var $G__187060_G__187064$jscomp$inline_3842$$ = {src:"images/graphics/61_biennale_logo_line.svg", className:"invert dark:invert-0"};
      $G__187060_G__187064$jscomp$inline_3842$$ = {className:"w-1/2 lg:w-1/4 lg:max-w-64 mt-4 lg:mt-8 px-4", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("img", $G__187060_G__187064$jscomp$inline_3842$$) : $APP.$helix$core$jsx$$.call(null, "img", $G__187060_G__187064$jscomp$inline_3842$$)};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__187060_G__187064$jscomp$inline_3842$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__187060_G__187064$jscomp$inline_3842$$);
    }(), function() {
      var $G__187068_G__187072$jscomp$inline_3845$$ = {translate:"no", className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["notranslate", $APP.$amp$styles$heading_page$$]))), children:"ARMENIA PAVILION, 61st INTERNATIONAL ART EXHIBITION LA BIENNALE DI VENEZIA"};
      $G__187068_G__187072$jscomp$inline_3845$$ = {className:"px-4 mt-12 lg:mt-16 max-w-4xl", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("h1", $G__187068_G__187072$jscomp$inline_3845$$) : $APP.$helix$core$jsx$$.call(null, "h1", $G__187068_G__187072$jscomp$inline_3845$$)};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__187068_G__187072$jscomp$inline_3845$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__187068_G__187072$jscomp$inline_3845$$);
    }(), function() {
      var $G__187076$$ = function() {
        return {className:"w-full px-4 mt-8", children:function() {
          var $G__187080$$ = function() {
            return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["text-slate-950  dark:text-white", "space-y-3 flex flex-col justify-start items-start"]))), children:[function() {
              var $G__187084$$ = {title:"1. Press Release", anchor:"section-1"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$pages$budget$section$section_link$$, $G__187084$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$budget$section$section_link$$, $G__187084$$);
            }(), function() {
              var $G__187088$$ = {title:"2. Overview - THE STUDIO", anchor:"section-2"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$pages$budget$section$section_link$$, $G__187088$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$budget$section$section_link$$, $G__187088$$);
            }(), function() {
              var $G__187092$$ = {title:"3. Budget", anchor:"section-3"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$pages$budget$section$section_link$$, $G__187092$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$budget$section$section_link$$, $G__187092$$);
            }(), function() {
              var $G__187096$$ = {title:"4. Cashflow", anchor:"section-4"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$pages$budget$section$section_link$$, $G__187096$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$budget$section$section_link$$, $G__187096$$);
            }(), function() {
              var $G__187100$$ = {title:"5. Committee", anchor:"section-5"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$pages$budget$section$section_link$$, $G__187100$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$budget$section$section_link$$, $G__187100$$);
            }(), function() {
              var $G__187104$$ = {title:"6. Patrons \x26 Sponsors", anchor:"section-6"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$pages$budget$section$section_link$$, $G__187104$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$budget$section$section_link$$, $G__187104$$);
            }(), function() {
              var $G__187108$$ = {title:"7. Location Details", anchor:"section-7"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$pages$budget$section$section_link$$, $G__187108$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$budget$section$section_link$$, $G__187108$$);
            }(), function() {
              var $G__187112$$ = {title:"8. Donation Info", anchor:"section-8"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$pages$budget$section$section_link$$, $G__187112$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$budget$section$section_link$$, $G__187112$$);
            }(), function() {
              var $G__187116$$ = {title:"9. Why Support", anchor:"section-9"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$pages$budget$section$section_link$$, $G__187116$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$budget$section$section_link$$, $G__187116$$);
            }()]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__187080$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__187080$$);
        }()};
      }();
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__187076$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__187076$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__187056_props__41575__auto__$jscomp$81$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__187056_props__41575__auto__$jscomp$81$$);
};
$amp$pages$budget$section$budget_section$$ = function($G__187134_props__41575__auto__$jscomp$82$$) {
  $APP.$helix$core$extract_cljs_props$$($G__187134_props__41575__auto__$jscomp$82$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__187134_props__41575__auto__$jscomp$82$$ = function() {
    return {"section-id":"budget-section", children:function() {
      var $G__187139$$ = {children:[function() {
        var $G__187141$$ = {};
        return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$pages$budget$section$header$$, $G__187141$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$budget$section$header$$, $G__187141$$);
      }(), function() {
        var $G__187143$$ = {id:"section-1", idx:1, subtitle:"press", title:"press release", "show-budget-footer?":!0};
        return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$pages$landing$press_release$press_release$$, $G__187143$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$pages$landing$press_release$press_release$$, $G__187143$$);
      }(), function() {
        var $G__187147$$ = {id:"section-2", idx:2, subtitle:"overview", title:"Armenian Pavilion - The Studio"};
        return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$pages$landing$studio$about_studio$$, $G__187147$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$pages$landing$studio$about_studio$$, $G__187147$$);
      }(), function() {
        var $G__187152$$ = {id:"section-3", subtitle:"financials", title:"budget"};
        return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$pages$budget$cost_breakdown$cost_breakdown$$, $G__187152$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$budget$cost_breakdown$cost_breakdown$$, $G__187152$$);
      }(), function() {
        var $G__187161$$ = {id:"section-4", subtitle:"financials", title:"cashflow"};
        return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$pages$budget$cash_flow$cash_flow$$, $G__187161$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$budget$cash_flow$cash_flow$$, $G__187161$$);
      }(), function() {
        var $G__187165$$ = {id:"section-5", subtitle:"team", title:"committee"};
        return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$pages$budget$committee$committee$$, $G__187165$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$budget$committee$committee$$, $G__187165$$);
      }(), function() {
        var $G__187169$$ = {id:"section-6", subtitle:"acknowledgements", title:"patrons \x26 sponsors"};
        return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$pages$budget$sponsors$sponsors_section$$, $G__187169$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$budget$sponsors$sponsors_section$$, $G__187169$$);
      }(), function() {
        var $G__187177$$ = {id:"section-7", subtitle:"venue", title:"location information"};
        return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$pages$budget$location$location_section$$, $G__187177$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$budget$location$location_section$$, $G__187177$$);
      }(), function() {
        var $G__187188$$ = {id:"section-8", subtitle:"non-profit", title:"donation information"};
        return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$pages$budget$non_profit$non_profit$$, $G__187188$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$budget$non_profit$non_profit$$, $G__187188$$);
      }(), function() {
        var $G__187194$$ = {id:"section-9", subtitle:"why it matters", title:"why support"};
        return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$pages$budget$why_support$why_support$$, $G__187194$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$budget$why_support$why_support$$, $G__187194$$);
      }()]};
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$ui$page_shell$page_shell$$, $G__187139$$) : $APP.$helix$core$jsxs$$.call(null, $APP.$amp$ui$page_shell$page_shell$$, $G__187139$$);
    }()};
  }();
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$($APP.$amp$ui$section$section$$, $G__187134_props__41575__auto__$jscomp$82$$, "budget-section") : $APP.$helix$core$jsx$$.call(null, $APP.$amp$ui$section$section$$, $G__187134_props__41575__auto__$jscomp$82$$, "budget-section");
};
$APP.$amp$pages$budget$page$budget_view$$ = function($G__187274_G__187278$jscomp$inline_3430_props__41575__auto__$jscomp$83_vec__187270$$, $maybe_ref__41576__auto__$jscomp$83$$) {
  $G__187274_G__187278$jscomp$inline_3430_props__41575__auto__$jscomp$83_vec__187270$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__187274_G__187278$jscomp$inline_3430_props__41575__auto__$jscomp$83_vec__187270$$), $maybe_ref__41576__auto__$jscomp$83$$], null);
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__187274_G__187278$jscomp$inline_3430_props__41575__auto__$jscomp$83_vec__187270$$, 0, null);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__187274_G__187278$jscomp$inline_3430_props__41575__auto__$jscomp$83_vec__187270$$ = {};
  $G__187274_G__187278$jscomp$inline_3430_props__41575__auto__$jscomp$83_vec__187270$$ = {children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$pages$budget$section$budget_section$$, $G__187274_G__187278$jscomp$inline_3430_props__41575__auto__$jscomp$83_vec__187270$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$budget$section$budget_section$$, $G__187274_G__187278$jscomp$inline_3430_props__41575__auto__$jscomp$83_vec__187270$$)};
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__187274_G__187278$jscomp$inline_3430_props__41575__auto__$jscomp$83_vec__187270$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__187274_G__187278$jscomp$inline_3430_props__41575__auto__$jscomp$83_vec__187270$$);
};
$cljs$cst$848$admin_apr_26$$ = new $APP.$cljs$core$Keyword$$(null, "admin-apr-26", "admin-apr-26", -1594649114);
$cljs$cst$862$venice_sep_26$$ = new $APP.$cljs$core$Keyword$$(null, "venice-sep-26", "venice-sep-26", 94763672);
$cljs$cst$821$venice_sep_25$$ = new $APP.$cljs$core$Keyword$$(null, "venice-sep-25", "venice-sep-25", 339442983);
$cljs$cst$840$la_feb_26$$ = new $APP.$cljs$core$Keyword$$(null, "la-feb-26", "la-feb-26", -2123365555);
$cljs$cst$850$venice_may_26$$ = new $APP.$cljs$core$Keyword$$(null, "venice-may-26", "venice-may-26", 2072857227);
$cljs$cst$815$priority$$ = new $APP.$cljs$core$Keyword$$(null, "priority", "priority", 1431093715);
$cljs$cst$895$accent$$ = new $APP.$cljs$core$Keyword$$(null, "accent", "accent", -1826298468);
$cljs$cst$801$venue$$ = new $APP.$cljs$core$Keyword$$(null, "venue", "venue", -731609643);
$cljs$cst$844$la_mar_26$$ = new $APP.$cljs$core$Keyword$$(null, "la-mar-26", "la-mar-26", 1380188343);
$cljs$cst$877$n_crit$$ = new $APP.$cljs$core$Keyword$$(null, "n-crit", "n-crit", 769065100);
$cljs$cst$866$admin_oct_26$$ = new $APP.$cljs$core$Keyword$$(null, "admin-oct-26", "admin-oct-26", 1040051883);
$cljs$cst$898$supporter$$ = new $APP.$cljs$core$Keyword$$(null, "supporter", "supporter", 789659821);
$cljs$cst$826$admin_oct_25$$ = new $APP.$cljs$core$Keyword$$(null, "admin-oct-25", "admin-oct-25", 1520025024);
$cljs$cst$853$venice_jun_26$$ = new $APP.$cljs$core$Keyword$$(null, "venice-jun-26", "venice-jun-26", -604048435);
$cljs$cst$880$has_now$$ = new $APP.$cljs$core$Keyword$$(null, "has-now", "has-now", 654554843);
$cljs$cst$804$the_studio$$ = new $APP.$cljs$core$Keyword$$(null, "the-studio", "the-studio", 106848628);
$cljs$cst$886$month$$ = new $APP.$cljs$core$Keyword$$(null, "month", "month", -1960248533);
$cljs$cst$897$benefactor$$ = new $APP.$cljs$core$Keyword$$(null, "benefactor", "benefactor", -1181533202);
$cljs$cst$828$la_nov_25$$ = new $APP.$cljs$core$Keyword$$(null, "la-nov-25", "la-nov-25", 245379756);
$cljs$cst$838$contingency_jan_26$$ = new $APP.$cljs$core$Keyword$$(null, "contingency-jan-26", "contingency-jan-26", 22175239);
$cljs$cst$856$venice_jul_26$$ = new $APP.$cljs$core$Keyword$$(null, "venice-jul-26", "venice-jul-26", -1607597583);
$cljs$cst$876$entries$$ = new $APP.$cljs$core$Keyword$$(null, "entries", "entries", -86943161);
$cljs$cst$875$all_paid$$ = new $APP.$cljs$core$Keyword$$(null, "all-paid", "all-paid", 366243873);
$cljs$cst$816$normal$$ = new $APP.$cljs$core$Keyword$$(null, "normal", "normal", -1519123858);
$cljs$cst$813$admin_jul_25$$ = new $APP.$cljs$core$Keyword$$(null, "admin-jul-25", "admin-jul-25", 264378453);
$cljs$cst$857$admin_jul_26$$ = new $APP.$cljs$core$Keyword$$(null, "admin-jul-26", "admin-jul-26", 149736986);
$cljs$cst$878$n_paid$$ = new $APP.$cljs$core$Keyword$$(null, "n-paid", "n-paid", -1703730024);
$cljs$cst$809$documentation$$ = new $APP.$cljs$core$Keyword$$(null, "documentation", "documentation", 1889593999);
$cljs$cst$820$contingency_aug_25$$ = new $APP.$cljs$core$Keyword$$(null, "contingency-aug-25", "contingency-aug-25", -1541402500);
$cljs$cst$861$contingency_aug_26$$ = new $APP.$cljs$core$Keyword$$(null, "contingency-aug-26", "contingency-aug-26", 1402254021);
$cljs$cst$810$debt_raised$$ = new $APP.$cljs$core$Keyword$$(null, "debt-raised", "debt-raised", -1855117742);
$cljs$cst$854$admin_jun_26$$ = new $APP.$cljs$core$Keyword$$(null, "admin-jun-26", "admin-jun-26", -541328069);
$cljs$cst$798$expanded_items$$ = new $APP.$cljs$core$Keyword$$(null, "expanded-items", "expanded-items", 749320313);
$cljs$cst$889$tier$$ = new $APP.$cljs$core$Keyword$$(null, "tier", "tier", -1071893374);
$cljs$cst$830$contingency_nov_25$$ = new $APP.$cljs$core$Keyword$$(null, "contingency-nov-25", "contingency-nov-25", 2119549379);
$cljs$cst$870$contingency_nov_26$$ = new $APP.$cljs$core$Keyword$$(null, "contingency-nov-26", "contingency-nov-26", 195578875);
$cljs$cst$795$tax$$ = new $APP.$cljs$core$Keyword$$(null, "tax", "tax", -226525810);
$cljs$cst$805$logistics$$ = new $APP.$cljs$core$Keyword$$(null, "logistics", "logistics", 712670037);
$cljs$cst$851$admin_may_26$$ = new $APP.$cljs$core$Keyword$$(null, "admin-may-26", "admin-may-26", 1889129108);
$cljs$cst$837$admin_jan_26$$ = new $APP.$cljs$core$Keyword$$(null, "admin-jan-26", "admin-jan-26", 142603763);
$cljs$cst$839$venice_feb_26$$ = new $APP.$cljs$core$Keyword$$(null, "venice-feb-26", "venice-feb-26", -1651098139);
$cljs$cst$834$venice_jan_26$$ = new $APP.$cljs$core$Keyword$$(null, "venice-jan-26", "venice-jan-26", -68766759);
$cljs$cst$879$n_items$$ = new $APP.$cljs$core$Keyword$$(null, "n-items", "n-items", -880425095);
$cljs$cst$867$contingency_oct_26$$ = new $APP.$cljs$core$Keyword$$(null, "contingency-oct-26", "contingency-oct-26", -60258419);
$cljs$cst$827$contingency_oct_25$$ = new $APP.$cljs$core$Keyword$$(null, "contingency-oct-25", "contingency-oct-25", 400053796);
$cljs$cst$845$admin_mar_26$$ = new $APP.$cljs$core$Keyword$$(null, "admin-mar-26", "admin-mar-26", -338557509);
$cljs$cst$817$paid$$ = new $APP.$cljs$core$Keyword$$(null, "paid", "paid", 1195086102);
$cljs$cst$793$details$$ = new $APP.$cljs$core$Keyword$$(null, "details", "details", 1956795411);
$cljs$cst$871$venice_dec_26$$ = new $APP.$cljs$core$Keyword$$(null, "venice-dec-26", "venice-dec-26", 1428198827);
$cljs$cst$843$venice_mar_26$$ = new $APP.$cljs$core$Keyword$$(null, "venice-mar-26", "venice-mar-26", -1280378980);
$cljs$cst$896$order$$ = new $APP.$cljs$core$Keyword$$(null, "order", "order", -1254677256);
$cljs$cst$841$admin_feb_26$$ = new $APP.$cljs$core$Keyword$$(null, "admin-feb-26", "admin-feb-26", 1788307477);
$cljs$cst$849$contingency_apr_26$$ = new $APP.$cljs$core$Keyword$$(null, "contingency-apr-26", "contingency-apr-26", -197755096);
$cljs$cst$882$entry$$ = new $APP.$cljs$core$Keyword$$(null, "entry", "entry", 505168823);
$cljs$cst$872$admin_dec_26$$ = new $APP.$cljs$core$Keyword$$(null, "admin-dec-26", "admin-dec-26", 1444073491);
$cljs$cst$832$admin_dec_25$$ = new $APP.$cljs$core$Keyword$$(null, "admin-dec-25", "admin-dec-25", 629109073);
$cljs$cst$800$item$$ = new $APP.$cljs$core$Keyword$$(null, "item", "item", 249373802);
$cljs$cst$869$admin_nov_26$$ = new $APP.$cljs$core$Keyword$$(null, "admin-nov-26", "admin-nov-26", 899776291);
$cljs$cst$829$admin_nov_25$$ = new $APP.$cljs$core$Keyword$$(null, "admin-nov-25", "admin-nov-25", -26984311);
$cljs$cst$814$due$$ = new $APP.$cljs$core$Keyword$$(null, "due", "due", -1754731313);
$cljs$cst$799$description$$ = new $APP.$cljs$core$Keyword$$(null, "description", "description", -1428560544);
$cljs$cst$835$critical$$ = new $APP.$cljs$core$Keyword$$(null, "critical", "critical", -838839117);
$cljs$cst$858$contingency_jul_26$$ = new $APP.$cljs$core$Keyword$$(null, "contingency-jul-26", "contingency-jul-26", 1067897141);
$cljs$cst$818$contingency_jul_25$$ = new $APP.$cljs$core$Keyword$$(null, "contingency-jul-25", "contingency-jul-25", -1729678391);
$cljs$cst$873$contingency_dec_26$$ = new $APP.$cljs$core$Keyword$$(null, "contingency-dec-26", "contingency-dec-26", -60155593);
$cljs$cst$833$contingency_dec_25$$ = new $APP.$cljs$core$Keyword$$(null, "contingency-dec-25", "contingency-dec-25", 1266897629);
$cljs$cst$852$contingency_may_26$$ = new $APP.$cljs$core$Keyword$$(null, "contingency-may-26", "contingency-may-26", -484422222);
$cljs$cst$855$contingency_jun_26$$ = new $APP.$cljs$core$Keyword$$(null, "contingency-jun-26", "contingency-jun-26", 28697636);
$cljs$cst$792$amount$$ = new $APP.$cljs$core$Keyword$$(null, "amount", "amount", 364489504);
$cljs$cst$888$past_QMARK_$$ = new $APP.$cljs$core$Keyword$$(null, "past?", "past?", -125779631);
$cljs$cst$812$cash_flow_model$$ = new $APP.$cljs$core$Keyword$$(null, "cash-flow-model", "cash-flow-model", -883317453);
$cljs$cst$881$dot$$ = new $APP.$cljs$core$Keyword$$(null, "dot", "dot", 1442709401);
$cljs$cst$884$expanded_QMARK_$$ = new $APP.$cljs$core$Keyword$$(null, "expanded?", "expanded?", 2055832296);
$cljs$cst$797$set_expanded_items$$ = new $APP.$cljs$core$Keyword$$(null, "set-expanded-items", "set-expanded-items", -112840979);
$cljs$cst$794$rate$$ = new $APP.$cljs$core$Keyword$$(null, "rate", "rate", -1428659698);
$cljs$cst$842$contingency_feb_26$$ = new $APP.$cljs$core$Keyword$$(null, "contingency-feb-26", "contingency-feb-26", 509692640);
$cljs$cst$807$marketing$$ = new $APP.$cljs$core$Keyword$$(null, "marketing", "marketing", 2054879774);
$cljs$cst$803$la_prod$$ = new $APP.$cljs$core$Keyword$$(null, "la-prod", "la-prod", 1444492244);
$cljs$cst$893$patron$$ = new $APP.$cljs$core$Keyword$$(null, "patron", "patron", -1174215364);
$cljs$cst$874$fill$$ = new $APP.$cljs$core$Keyword$$(null, "fill", "fill", 883462889);
$cljs$cst$811$funds_raised$$ = new $APP.$cljs$core$Keyword$$(null, "funds-raised", "funds-raised", -197009653);
$cljs$cst$864$contingency_sep_26$$ = new $APP.$cljs$core$Keyword$$(null, "contingency-sep-26", "contingency-sep-26", 479744418);
$cljs$cst$824$contingency_sep_25$$ = new $APP.$cljs$core$Keyword$$(null, "contingency-sep-25", "contingency-sep-25", -1119739004);
$cljs$cst$899$members$$ = new $APP.$cljs$core$Keyword$$(null, "members", "members", 159001018);
$cljs$cst$796$cost_data$$ = new $APP.$cljs$core$Keyword$$(null, "cost-data", "cost-data", -1991336764);
$cljs$cst$868$venice_nov_26$$ = new $APP.$cljs$core$Keyword$$(null, "venice-nov-26", "venice-nov-26", 1130078643);
$cljs$cst$883$rollup$$ = new $APP.$cljs$core$Keyword$$(null, "rollup", "rollup", -1742987157);
$cljs$cst$894$individual$$ = new $APP.$cljs$core$Keyword$$(null, "individual", "individual", -1643964808);
$cljs$cst$863$admin_sep_26$$ = new $APP.$cljs$core$Keyword$$(null, "admin-sep-26", "admin-sep-26", -700799960);
$cljs$cst$822$admin_sep_25$$ = new $APP.$cljs$core$Keyword$$(null, "admin-sep-25", "admin-sep-25", 753699567);
$cljs$cst$847$venice_apr_26$$ = new $APP.$cljs$core$Keyword$$(null, "venice-apr-26", "venice-apr-26", -1422709865);
$cljs$cst$892$institution$$ = new $APP.$cljs$core$Keyword$$(null, "institution", "institution", -70023072);
$cljs$cst$891$logo$$ = new $APP.$cljs$core$Keyword$$(null, "logo", "logo", 1237980263);
$cljs$cst$823$high$$ = new $APP.$cljs$core$Keyword$$(null, "high", "high", 2027297808);
$cljs$cst$806$opening$$ = new $APP.$cljs$core$Keyword$$(null, "opening", "opening", 450993708);
$cljs$cst$900$anchor$$ = new $APP.$cljs$core$Keyword$$(null, "anchor", "anchor", 1549638489);
$cljs$cst$802$admin$$ = new $APP.$cljs$core$Keyword$$(null, "admin", "admin", -1239101627);
$cljs$cst$846$contingency_mar_26$$ = new $APP.$cljs$core$Keyword$$(null, "contingency-mar-26", "contingency-mar-26", 1126538363);
$cljs$cst$865$venice_oct_26$$ = new $APP.$cljs$core$Keyword$$(null, "venice-oct-26", "venice-oct-26", -1699834368);
$cljs$cst$825$venice_oct_25$$ = new $APP.$cljs$core$Keyword$$(null, "venice-oct-25", "venice-oct-25", -641394196);
$cljs$cst$887$now$$ = new $APP.$cljs$core$Keyword$$(null, "now", "now", -1650525531);
$cljs$cst$859$venice_aug_26$$ = new $APP.$cljs$core$Keyword$$(null, "venice-aug-26", "venice-aug-26", 520228272);
$cljs$cst$860$admin_aug_26$$ = new $APP.$cljs$core$Keyword$$(null, "admin-aug-26", "admin-aug-26", -1522732065);
$cljs$cst$819$admin_aug_25$$ = new $APP.$cljs$core$Keyword$$(null, "admin-aug-25", "admin-aug-25", -1520609899);
$cljs$cst$890$founding_patron$$ = new $APP.$cljs$core$Keyword$$(null, "founding-patron", "founding-patron", -1158627303);
$cljs$cst$831$la_dec_25$$ = new $APP.$cljs$core$Keyword$$(null, "la-dec-25", "la-dec-25", -844494315);
$cljs$cst$836$la_jan_26$$ = new $APP.$cljs$core$Keyword$$(null, "la-jan-26", "la-jan-26", -425305268);
$cljs$cst$808$publication$$ = new $APP.$cljs$core$Keyword$$(null, "publication", "publication", -1089697399);
$cljs$cst$885$target_total$$ = new $APP.$cljs$core$Keyword$$(null, "target-total", "target-total", 158942849);
$APP.$JSCompiler_StaticMethods_beforeLoadModuleCode$$("budget-view");
var $amp$pages$budget$committee$committee_members$$ = new $APP.$cljs$core$PersistentVector$$(null, 9, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$165$name$$, "Archbishop Derderian", $APP.$cljs$cst$791$role$$, "Committee Lead", $APP.$cljs$cst$724$img_src$$, "https://atd-722658831.imgix.net/committee/hovnan.png", $APP.$cljs$cst$707$credit$$, "Courtesy of the Committee"], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, 
[$APP.$cljs$cst$165$name$$, "Tony Shafrazi", $APP.$cljs$cst$791$role$$, "Chief Curator", $APP.$cljs$cst$724$img_src$$, "https://atd-722658831.imgix.net/committee/tony.png", $APP.$cljs$cst$707$credit$$, "Courtesy of the Committee"], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$165$name$$, "Tina Chakarian", $APP.$cljs$cst$791$role$$, "Curator", $APP.$cljs$cst$724$img_src$$, "https://atd-722658831.imgix.net/committee/tina.png", $APP.$cljs$cst$707$credit$$, "Courtesy of the Committee"], 
null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$165$name$$, "Zadik Zadikian", $APP.$cljs$cst$791$role$$, "Artist", $APP.$cljs$cst$724$img_src$$, "https://atd-722658831.imgix.net/committee/zadik.png", $APP.$cljs$cst$707$credit$$, "Courtesy of the Committee"], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$165$name$$, "Rafi Ourfalian", $APP.$cljs$cst$791$role$$, "Legal Advisor", $APP.$cljs$cst$724$img_src$$, "https://atd-722658831.imgix.net/committee/rafi.png", 
$APP.$cljs$cst$707$credit$$, "Courtesy of the Committee"], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$165$name$$, "Khachik Khudikyan", $APP.$cljs$cst$791$role$$, "Logistics Advisor", $APP.$cljs$cst$724$img_src$$, "https://atd-722658831.imgix.net/committee/chris.png", $APP.$cljs$cst$707$credit$$, "Courtesy of the Committee"], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$165$name$$, "Andranik Torosyan", $APP.$cljs$cst$791$role$$, "Financial Advisor", 
$APP.$cljs$cst$724$img_src$$, "https://atd-722658831.imgix.net/committee/andy.png", $APP.$cljs$cst$707$credit$$, "Courtesy of the Committee"], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$165$name$$, "Aram Alajajian", $APP.$cljs$cst$791$role$$, "Architect", $APP.$cljs$cst$724$img_src$$, "https://atd-722658831.imgix.net/committee/aram.png", $APP.$cljs$cst$707$credit$$, "Courtesy of the Committee"], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$165$name$$, 
"Vik Hovsepian", $APP.$cljs$cst$791$role$$, "Committee Member", $APP.$cljs$cst$707$credit$$, "Courtesy of the Committee", $APP.$cljs$cst$724$img_src$$, "https://atd-722658831.imgix.net/committee/vic.png"], null)], null);
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$297$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$298$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$pages$budget$committee$preview$$, "", null, null) : (void 0).call(null, $amp$pages$budget$committee$preview$$, "", null, null)), $APP.$helix$core$register_BANG_$$($amp$pages$budget$committee$preview$$, 
"amp.pages.budget.committee/preview"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$297$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$298$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$pages$budget$committee$details$$, "", null, null) : (void 0).call(null, $amp$pages$budget$committee$details$$, "", null, null)), $APP.$helix$core$register_BANG_$$($amp$pages$budget$committee$details$$, 
"amp.pages.budget.committee/details"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$297$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$298$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$pages$budget$committee$committee_member_card$$, "", null, null) : (void 0).call(null, $amp$pages$budget$committee$committee_member_card$$, "", null, 
null)), $APP.$helix$core$register_BANG_$$($amp$pages$budget$committee$committee_member_card$$, "amp.pages.budget.committee/committee-member-card"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$297$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$298$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$pages$budget$committee$committee_gallery$$, "", null, null) : (void 0).call(null, $amp$pages$budget$committee$committee_gallery$$, "", null, null)), 
$APP.$helix$core$register_BANG_$$($amp$pages$budget$committee$committee_gallery$$, "amp.pages.budget.committee/committee-gallery"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$297$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$298$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$pages$budget$committee$committee$$, "", null, null) : (void 0).call(null, $amp$pages$budget$committee$committee$$, "", null, null)), $APP.$helix$core$register_BANG_$$($amp$pages$budget$committee$committee$$, 
"amp.pages.budget.committee/committee"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$297$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$298$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$pages$budget$table$total_section$$, "", null, null) : (void 0).call(null, $amp$pages$budget$table$total_section$$, "", null, null)), $APP.$helix$core$register_BANG_$$($amp$pages$budget$table$total_section$$, 
"amp.pages.budget.table/total-section"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$297$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$298$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$pages$budget$table$detail_line_item$$, "", null, null) : (void 0).call(null, $amp$pages$budget$table$detail_line_item$$, "", null, null)), $APP.$helix$core$register_BANG_$$($amp$pages$budget$table$detail_line_item$$, 
"amp.pages.budget.table/detail-line-item"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$297$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$298$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$pages$budget$table$section_line_item$$, '(hooks/use-ref (str "section-" idx))(use-scroll-to-ref)', null, null) : (void 0).call(null, $amp$pages$budget$table$section_line_item$$, 
'(hooks/use-ref (str "section-" idx))(use-scroll-to-ref)', null, null)), $APP.$helix$core$register_BANG_$$($amp$pages$budget$table$section_line_item$$, "amp.pages.budget.table/section-line-item"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$297$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$298$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$pages$budget$table$budget_table$$, "(hooks/use-state #{})", null, null) : (void 0).call(null, $amp$pages$budget$table$budget_table$$, "(hooks/use-state #{})", 
null, null)), $APP.$helix$core$register_BANG_$$($amp$pages$budget$table$budget_table$$, "amp.pages.budget.table/budget-table"));
var $amp$pages$budget$cost_breakdown$cost_data$$ = new $APP.$cljs$core$PersistentVector$$(null, 9, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$285$id$$, $cljs$cst$801$venue$$, $APP.$cljs$cst$287$title$$, "Venue \x26 Operations", $cljs$cst$799$description$$, "Secures and operates the Venice exhibition venue for the full Biennale period: rental, staffing, regulatory compliance, construction, lighting, taxes, and on-site overhead including team lodging and living expenses—ensuring the Pavilion is compliant, safe, and fully operational.", 
$cljs$cst$793$details$$, new $APP.$cljs$core$PersistentVector$$(null, 14, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$578$group$$, "Base", $APP.$cljs$cst$287$title$$, "Base Rent", $cljs$cst$792$amount$$, 145600, $cljs$cst$799$description$$, "Exclusive use of venue April–December 2026 for the full Biennale period."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$578$group$$, "Base", $APP.$cljs$cst$287$title$$, 
"Base Staff", $cljs$cst$792$amount$$, 50000, $cljs$cst$799$description$$, "Exhibition staff during the opening period, including security and front-of-house personnel."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$578$group$$, "Base", $APP.$cljs$cst$287$title$$, "Curatorial Mediator", $cljs$cst$792$amount$$, 25000, $cljs$cst$799$description$$, "Trained curatorial mediator providing visitor guidance, interpretation, and artwork oversight."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 
4, [$APP.$cljs$cst$578$group$$, "Base", $APP.$cljs$cst$287$title$$, "Cleaning", $cljs$cst$792$amount$$, 7000, $cljs$cst$799$description$$, "Weekly professional cleaning and periodic deep cleans for a high-traffic international exhibition."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$578$group$$, "Permitting", $APP.$cljs$cst$287$title$$, "Permits \x26 Signage", $cljs$cst$792$amount$$, 10000, $cljs$cst$799$description$$, "SCIA permits, exhibition signage approvals, and municipal permits for operational compliance in Venice."], 
null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$578$group$$, "Permitting", $APP.$cljs$cst$287$title$$, "Fire Safety Cert.", $cljs$cst$792$amount$$, 3500, $cljs$cst$799$description$$, "Mandatory fire-safety certification, inspections, and documentation required by Venetian authorities."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$578$group$$, "Permitting", $APP.$cljs$cst$287$title$$, "Liability Ins.", $cljs$cst$792$amount$$, 2500, $cljs$cst$799$description$$, 
"Public liability insurance covering visitors, staff, and third parties for the full exhibition period."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$578$group$$, "Construction", $APP.$cljs$cst$287$title$$, "Partitions \x26 Walls", $cljs$cst$792$amount$$, 9500, $cljs$cst$799$description$$, "Windows, door alterations, partitions, and minor structural adjustments to adapt the venue."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$578$group$$, 
"Construction", $APP.$cljs$cst$287$title$$, "Lighting", $cljs$cst$792$amount$$, 7500, $cljs$cst$799$description$$, "Overhead ceiling-mounted, freestanding, and supplemental exhibition lighting equipment and installation."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$578$group$$, "Taxes", $APP.$cljs$cst$287$title$$, "Signage Taxes", $cljs$cst$792$amount$$, 1500, $cljs$cst$799$description$$, "Municipal banner and signage tax for exterior and wayfinding signage during the Biennale."], 
null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$578$group$$, "Taxes", $APP.$cljs$cst$287$title$$, "VAT 22%", $cljs$cst$792$amount$$, 55E3, $cljs$cst$799$description$$, "Italian value-added tax on applicable venue services."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$578$group$$, "Overhead", $APP.$cljs$cst$287$title$$, "Team Lodging", $cljs$cst$792$amount$$, 95E3, $cljs$cst$799$description$$, "Accommodation for the Venice studio team. $125/night per head, 2 months pre-production + 10 months operations."], 
null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$578$group$$, "Overhead", $APP.$cljs$cst$287$title$$, "Per Diem", $cljs$cst$792$amount$$, 66E3, $cljs$cst$799$description$$, "Daily living expenses for the Venice-based team. $100/day per head during active operating months."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$578$group$$, "Overhead", $APP.$cljs$cst$287$title$$, "Project Insurance", $cljs$cst$792$amount$$, 5E4, $cljs$cst$799$description$$, 
"Project insurance coverage for the Venice operations period. 10 months at $5,000/month."], null)], null)], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$285$id$$, $cljs$cst$802$admin$$, $APP.$cljs$cst$287$title$$, "Administration", $cljs$cst$799$description$$, "Core leadership, project management, and operational overhead supporting curatorial direction, artist oversight, coordination, compliance, travel, and lodging—ensuring continuity across the full Biennale cycle.", 
$cljs$cst$793$details$$, new $APP.$cljs$core$PersistentVector$$(null, 6, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$578$group$$, "Staff", $APP.$cljs$cst$287$title$$, "Curators", $cljs$cst$792$amount$$, 9E4, $cljs$cst$799$description$$, "Curatorial leadership. 18 months at $5,000/month."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$578$group$$, "Staff", $APP.$cljs$cst$287$title$$, "Artist", $cljs$cst$792$amount$$, 
45E3, $cljs$cst$799$description$$, "Artist fees. 18 months at $2,500/month."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$578$group$$, "Staff", $APP.$cljs$cst$287$title$$, "Project Coordinator", $cljs$cst$792$amount$$, 45E3, $cljs$cst$799$description$$, "Project coordination. 18 months at $2,500/month."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$578$group$$, "Travel \x26 Overhead", $APP.$cljs$cst$287$title$$, "Team Travel", $cljs$cst$792$amount$$, 
49E3, $cljs$cst$799$description$$, "International and regional travel for core team during scouting, installation, opening week, and milestones."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$578$group$$, "Travel \x26 Overhead", $APP.$cljs$cst$287$title$$, "Team Lodging", $cljs$cst$792$amount$$, 7500, $cljs$cst$799$description$$, "Accommodation for core team during opening week and critical on-site periods in Venice."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 
4, [$APP.$cljs$cst$578$group$$, "Travel \x26 Overhead", $APP.$cljs$cst$287$title$$, "Misc", $cljs$cst$792$amount$$, 5500, $cljs$cst$799$description$$, "Miscellaneous administrative expenses, software, tools, and incidentals. 11 months at $500/month."], null)], null)], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$285$id$$, $cljs$cst$803$la_prod$$, $APP.$cljs$cst$287$title$$, "LA Production", $cljs$cst$799$description$$, "Los Angeles–based production: skilled labor, casting, mold-making, materials, studio overhead, and supplies—ensuring museum-grade fabrication and crating prior to shipment to Venice.", 
$cljs$cst$793$details$$, new $APP.$cljs$core$PersistentVector$$(null, 21, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$578$group$$, "Labor", $APP.$cljs$cst$287$title$$, "Lead Caster", $cljs$cst$792$amount$$, 37625, $cljs$cst$799$description$$, "Lead caster. 5 months at $7,525/month."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$578$group$$, "Labor", $APP.$cljs$cst$287$title$$, "Caster", $cljs$cst$792$amount$$, 
22500, $cljs$cst$799$description$$, "Casting professional. 5 months at $4,500/month."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$578$group$$, "Labor", $APP.$cljs$cst$287$title$$, "General Assistant", $cljs$cst$792$amount$$, 21500, $cljs$cst$799$description$$, "General production assistant. 5 months at $4,300/month."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$578$group$$, "Labor", $APP.$cljs$cst$287$title$$, "Mold Maker", $cljs$cst$792$amount$$, 
15E3, $cljs$cst$799$description$$, "Specialist mold maker. 2 months at $7,500/month."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$578$group$$, "Labor", $APP.$cljs$cst$287$title$$, "Foam Sprayer", $cljs$cst$792$amount$$, 9E3, $cljs$cst$799$description$$, "Contract foam sprayer for structural cores. 2 months at $4,500/month."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$578$group$$, "Labor", $APP.$cljs$cst$287$title$$, "Casting Asst. ×3", 
$cljs$cst$792$amount$$, 9E3, $cljs$cst$799$description$$, "3 casting assistants. 2 months at $1,500/month each."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$578$group$$, "Labor", $APP.$cljs$cst$287$title$$, "Packers ×4", $cljs$cst$792$amount$$, 14E3, $cljs$cst$799$description$$, "4 packers for crating and shipping prep. 1 month at $3,500 each."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$578$group$$, "Labor", $APP.$cljs$cst$287$title$$, 
"Crate Makers ×2", $cljs$cst$792$amount$$, 1E4, $cljs$cst$799$description$$, "2 crate makers for custom shipping crates. 1 month at $5,000 each."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$578$group$$, "Overhead", $APP.$cljs$cst$287$title$$, "Studio Rental", $cljs$cst$792$amount$$, 22500, $cljs$cst$799$description$$, "LA studio rent for fabrication. 5 months at $4,500/month."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$578$group$$, "Overhead", 
$APP.$cljs$cst$287$title$$, "Foam Space Rental", $cljs$cst$792$amount$$, 5500, $cljs$cst$799$description$$, "Additional foam production space rental. 2 months at $2,750/month."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$578$group$$, "Overhead", $APP.$cljs$cst$287$title$$, "Utilities", $cljs$cst$792$amount$$, 3E3, $cljs$cst$799$description$$, "Utilities for the LA production facility. 2 months at $1,500/month."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 
4, [$APP.$cljs$cst$578$group$$, "Materials", $APP.$cljs$cst$287$title$$, "Pigment", $cljs$cst$792$amount$$, 11500, $cljs$cst$799$description$$, "High-quality pigments integrated into plaster at casting."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$578$group$$, "Materials", $APP.$cljs$cst$287$title$$, "Honeycomb", $cljs$cst$792$amount$$, 1500, $cljs$cst$799$description$$, "Structural honeycomb material for lightweight internal reinforcement."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 
4, [$APP.$cljs$cst$578$group$$, "Materials", $APP.$cljs$cst$287$title$$, "Polymers", $cljs$cst$792$amount$$, 1500, $cljs$cst$799$description$$, "Binders and polymer materials used in finishing and protection."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$578$group$$, "Materials", $APP.$cljs$cst$287$title$$, "Foam Material", $cljs$cst$792$amount$$, 21E3, $cljs$cst$799$description$$, "Lightweight foam cores for structural integrity while minimizing shipping weight."], 
null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$578$group$$, "Materials", $APP.$cljs$cst$287$title$$, "Plaster", $cljs$cst$792$amount$$, 4500, $cljs$cst$799$description$$, "Primary casting material for all sculptural units."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$578$group$$, "Materials", $APP.$cljs$cst$287$title$$, "Supplies", $cljs$cst$792$amount$$, 10500, $cljs$cst$799$description$$, "Consumable supplies used during casting and finishing."], 
null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$578$group$$, "Materials", $APP.$cljs$cst$287$title$$, "Mold Supplies", $cljs$cst$792$amount$$, 17500, $cljs$cst$799$description$$, "Custom mold materials, CNC mother units, and fabrication aids."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$578$group$$, "Materials", $APP.$cljs$cst$287$title$$, "Crate Materials", $cljs$cst$792$amount$$, 15E3, $cljs$cst$799$description$$, "Materials for constructing custom shipping crates."], 
null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$578$group$$, "Materials", $APP.$cljs$cst$287$title$$, "Packing Supplies", $cljs$cst$792$amount$$, 5E3, $cljs$cst$799$description$$, "Packing materials for securing artwork during international transit."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$578$group$$, "Materials", $APP.$cljs$cst$287$title$$, "Misc", $cljs$cst$792$amount$$, 7500, $cljs$cst$799$description$$, "Miscellaneous production expenses. 5 months at $1,500/month."], 
null)], null)], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$285$id$$, $cljs$cst$804$the_studio$$, $APP.$cljs$cst$287$title$$, "The Studio", $cljs$cst$799$description$$, "On-site operation of THE STUDIO in Venice: staffing, installation and de-installation crews, local materials, and daily production—supporting continuous fabrication and reconfiguration throughout the Biennale.", $cljs$cst$793$details$$, new $APP.$cljs$core$PersistentVector$$(null, 15, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, 
[new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$578$group$$, "Staff", $APP.$cljs$cst$287$title$$, "Studio Asst. #1", $cljs$cst$792$amount$$, 54E3, $cljs$cst$799$description$$, "Full-time studio assistant. 9 months at $6,000/month."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$578$group$$, "Staff", $APP.$cljs$cst$287$title$$, "Studio Asst. #2", $cljs$cst$792$amount$$, 46500, $cljs$cst$799$description$$, "Studio assistant. 6 months at $6,000 + 3 months at $3,500."], 
null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$578$group$$, "Staff", $APP.$cljs$cst$287$title$$, "Studio Asst. #3", $cljs$cst$792$amount$$, 23500, $cljs$cst$799$description$$, "Studio assistant. 1 month at $6,000 + 5 months at $3,500."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$578$group$$, "Staff", $APP.$cljs$cst$287$title$$, "Studio Asst. #4", $cljs$cst$792$amount$$, 23500, $cljs$cst$799$description$$, "Studio assistant. 1 month at $6,000 + 5 months at $3,500."], 
null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$578$group$$, "Staff", $APP.$cljs$cst$287$title$$, "Studio Asst. #5", $cljs$cst$792$amount$$, 6E3, $cljs$cst$799$description$$, "Temporary studio assistant. 1 month at $6,000."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$578$group$$, "Staff", $APP.$cljs$cst$287$title$$, "Studio Asst. #6", $cljs$cst$792$amount$$, 6E3, $cljs$cst$799$description$$, "Temporary studio assistant. 1 month at $6,000."], 
null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$578$group$$, "Install / Uninstall", $APP.$cljs$cst$287$title$$, "Installers ×4", $cljs$cst$792$amount$$, 32E3, $cljs$cst$799$description$$, "4 installers for install and uninstall. 2 engagements at $4,000 each."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$578$group$$, "Install / Uninstall", $APP.$cljs$cst$287$title$$, "Crate Makers ×2", $cljs$cst$792$amount$$, 11E3, $cljs$cst$799$description$$, 
"2 crate makers for Venice de-install crating. 1 engagement at $5,500 each."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$578$group$$, "Materials", $APP.$cljs$cst$287$title$$, "Foam Material", $cljs$cst$792$amount$$, 11500, $cljs$cst$799$description$$, "Venice-sourced foam materials for ongoing on-site fabrication."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$578$group$$, "Materials", $APP.$cljs$cst$287$title$$, "Pigment", $cljs$cst$792$amount$$, 
6750, $cljs$cst$799$description$$, "Pigments for on-site casting and finishing work."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$578$group$$, "Materials", $APP.$cljs$cst$287$title$$, "Plaster", $cljs$cst$792$amount$$, 4750, $cljs$cst$799$description$$, "Plaster for on-site sculptural production."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$578$group$$, "Materials", $APP.$cljs$cst$287$title$$, "Supplies", $cljs$cst$792$amount$$, 4750, 
$cljs$cst$799$description$$, "Consumable supplies for ongoing studio activity."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$578$group$$, "Materials", $APP.$cljs$cst$287$title$$, "Crate Materials", $cljs$cst$792$amount$$, 7500, $cljs$cst$799$description$$, "Materials for crating artwork for return shipment."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$578$group$$, "Materials", $APP.$cljs$cst$287$title$$, "Packing Supplies", $cljs$cst$792$amount$$, 
2500, $cljs$cst$799$description$$, "Packing materials for securing artwork at close-out."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$578$group$$, "Materials", $APP.$cljs$cst$287$title$$, "Misc Materials", $cljs$cst$792$amount$$, 4250, $cljs$cst$799$description$$, "Miscellaneous materials and expendables for studio operations."], null)], null)], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$285$id$$, $cljs$cst$805$logistics$$, $APP.$cljs$cst$287$title$$, 
"Logistics \x26 Transport", $cljs$cst$799$description$$, "International and local transport under Biennale conditions: freight, insurance, port handling, lagoon barge transport, forklift operations, storage, and reverse logistics for return shipment.", $cljs$cst$793$details$$, new $APP.$cljs$core$PersistentVector$$(null, 17, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$578$group$$, "International Freight", $APP.$cljs$cst$287$title$$, 
"Ship LA → Venice", $cljs$cst$792$amount$$, 3E4, $cljs$cst$799$description$$, "International freight from Los Angeles to Venice for all crated artwork and materials."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$578$group$$, "International Freight", $APP.$cljs$cst$287$title$$, "Ship Venice → LA", $cljs$cst$792$amount$$, 3E4, $cljs$cst$799$description$$, "Return international freight from Venice to Los Angeles after close-out."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 
4, [$APP.$cljs$cst$578$group$$, "International Freight", $APP.$cljs$cst$287$title$$, "Transit Insurance", $cljs$cst$792$amount$$, 12E3, $cljs$cst$799$description$$, "Insurance coverage for artwork during international transit."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$578$group$$, "Install / Uninstall", $APP.$cljs$cst$287$title$$, "Installers (Venice)", $cljs$cst$792$amount$$, 7200, $cljs$cst$799$description$$, "Local Venice installation crew. 4 installers for on-site install."], 
null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$578$group$$, "Install / Uninstall", $APP.$cljs$cst$287$title$$, "Uninstallers (Venice)", $cljs$cst$792$amount$$, 9E3, $cljs$cst$799$description$$, "Local Venice de-installation crew. 5 uninstallers for close-out."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$578$group$$, "Local Transport", $APP.$cljs$cst$287$title$$, "Port Handling", $cljs$cst$792$amount$$, 2500, $cljs$cst$799$description$$, "Offloading crates at Venice port; includes terminal fees and labor."], 
null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$578$group$$, "Local Transport", $APP.$cljs$cst$287$title$$, "Barge (Port → Stor.)", $cljs$cst$792$amount$$, 3E3, $cljs$cst$799$description$$, "Lagoon barge transport for crates from port to storage facility."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$578$group$$, "Local Transport", $APP.$cljs$cst$287$title$$, "Trucking (Stor. → Venue)", $cljs$cst$792$amount$$, 1200, $cljs$cst$799$description$$, 
"Truck transport from storage depot to Biennale venue access point."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$578$group$$, "Local Transport", $APP.$cljs$cst$287$title$$, "Barge (Stor. → Venue)", $cljs$cst$792$amount$$, 3E3, $cljs$cst$799$description$$, "Barge shipping for crates/materials to venue area via Venice canals."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$578$group$$, "Local Transport", $APP.$cljs$cst$287$title$$, "Forklift \x26 Operator", 
$cljs$cst$792$amount$$, 1300, $cljs$cst$799$description$$, "Forklift + licensed operator for unloading/loading at venue. 2 days at $650/day."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$578$group$$, "Local Transport", $APP.$cljs$cst$287$title$$, "Handling Crew", $cljs$cst$792$amount$$, 500, $cljs$cst$799$description$$, "Movers for crate handling, navigation of canals and venue access."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$578$group$$, 
"Storage", $APP.$cljs$cst$287$title$$, "Short-Term Storage", $cljs$cst$792$amount$$, 1200, $cljs$cst$799$description$$, "Storage of crates between arrival and installation. 60 crates for 20 days."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$578$group$$, "Storage", $APP.$cljs$cst$287$title$$, "Empty Crate Storage", $cljs$cst$792$amount$$, 2E3, $cljs$cst$799$description$$, "Storage of empty crates during the Biennale exhibition run. 200 days."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 
4, [$APP.$cljs$cst$578$group$$, "Storage", $APP.$cljs$cst$287$title$$, "Waste Removal", $cljs$cst$792$amount$$, 1E3, $cljs$cst$799$description$$, "Removal of packing material, foam waste, and install debris."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$578$group$$, "Reverse Logistics", $APP.$cljs$cst$287$title$$, "Reverse Barge", $cljs$cst$792$amount$$, 3E3, $cljs$cst$799$description$$, "Return transport of crates/materials after uninstall."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 
4, [$APP.$cljs$cst$578$group$$, "Reverse Logistics", $APP.$cljs$cst$287$title$$, "Reverse Trucking", $cljs$cst$792$amount$$, 1200, $cljs$cst$799$description$$, "Transport of crates back to port for outbound shipping."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$578$group$$, "Reverse Logistics", $APP.$cljs$cst$287$title$$, "Reverse Port Handling", $cljs$cst$792$amount$$, 2500, $cljs$cst$799$description$$, "Terminal fees + labor for reloading outbound container."], null)], 
null)], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$285$id$$, $cljs$cst$806$opening$$, $APP.$cljs$cst$287$title$$, "Opening Week", $cljs$cst$799$description$$, "Opening reception and first public visibility of the Pavilion: hospitality, staffing, technical support, press and VIP coordination—executed during the Biennale's most compressed period.", $cljs$cst$793$details$$, new $APP.$cljs$core$PersistentVector$$(null, 11, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, 
[new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$578$group$$, "Hospitality", $APP.$cljs$cst$287$title$$, "Catering — Food", $cljs$cst$792$amount$$, 5250, $cljs$cst$799$description$$, "Passed hors d'oeuvres for opening night reception. 75 guests at $70/guest."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$578$group$$, "Hospitality", $APP.$cljs$cst$287$title$$, "Catering — Beverages", $cljs$cst$792$amount$$, 1500, $cljs$cst$799$description$$, "Prosecco, wine, and non-alcoholic drinks. 100 guests at $15/guest."], 
null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$578$group$$, "Hospitality", $APP.$cljs$cst$287$title$$, "Catering Staff", $cljs$cst$792$amount$$, 1500, $cljs$cst$799$description$$, "3–6 servers + 1 event captain for opening night."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$578$group$$, "Hospitality", $APP.$cljs$cst$287$title$$, "Rentals", $cljs$cst$792$amount$$, 1500, $cljs$cst$799$description$$, "Tables, linens, glassware; Venice incurs transport surcharges due to canals."], 
null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$578$group$$, "Event Ops", $APP.$cljs$cst$287$title$$, "Event Coordinator", $cljs$cst$792$amount$$, 1500, $cljs$cst$799$description$$, "Scheduling, setup, guest flow, liaising with pavilion staff and caterer."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$578$group$$, "Event Ops", $APP.$cljs$cst$287$title$$, "Security", $cljs$cst$792$amount$$, 800, $cljs$cst$799$description$$, "Safe capacity management at openings per Biennale requirements."], 
null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$578$group$$, "Event Ops", $APP.$cljs$cst$287$title$$, "Audio, Light \x26 Tech", $cljs$cst$792$amount$$, 1E3, $cljs$cst$799$description$$, "Small speaker system, microphone, ambient lighting reinforcement."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$578$group$$, "Event Ops", $APP.$cljs$cst$287$title$$, "Event Photography", $cljs$cst$792$amount$$, 500, $cljs$cst$799$description$$, "Opening night event photography coverage."], 
null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$578$group$$, "Event Ops", $APP.$cljs$cst$287$title$$, "Invitations", $cljs$cst$792$amount$$, 500, $cljs$cst$799$description$$, "Printing or premium digital distribution of invitations."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$578$group$$, "VIP Programs", $APP.$cljs$cst$287$title$$, "VIP Press Preview", $cljs$cst$792$amount$$, 1500, $cljs$cst$799$description$$, "Staff + scheduling for VIP/press walkthroughs during opening week."], 
null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$578$group$$, "VIP Programs", $APP.$cljs$cst$287$title$$, "VIP Water Taxi", $cljs$cst$792$amount$$, 1500, $cljs$cst$799$description$$, "Transport allowance for VIPs/officials. 8 rides at $120/ride."], null)], null)], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$285$id$$, $cljs$cst$807$marketing$$, $APP.$cljs$cst$287$title$$, "Marketing \x26 PR", $cljs$cst$799$description$$, "Visibility and communications: identity design, PR, advertising, social media, and press activity—positioning the Pavilion within the global Biennale discourse.", 
$cljs$cst$793$details$$, new $APP.$cljs$core$PersistentVector$$(null, 18, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$578$group$$, "Design", $APP.$cljs$cst$287$title$$, "Visual Identity", $cljs$cst$792$amount$$, 2500, $cljs$cst$799$description$$, "Design of pavilion identity, key visual and main poster."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$578$group$$, "Design", $APP.$cljs$cst$287$title$$, 
"Essentials Package", $cljs$cst$792$amount$$, 1500, $cljs$cst$799$description$$, "Press kit, invitations, social templates, digital ads."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$578$group$$, "Design", $APP.$cljs$cst$287$title$$, "Website \x26 Hosting", $cljs$cst$792$amount$$, 7500, $cljs$cst$799$description$$, "Design and hosting of the pavilion website."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$578$group$$, "Design", $APP.$cljs$cst$287$title$$, 
"OOH Design", $cljs$cst$792$amount$$, 1500, $cljs$cst$799$description$$, "Design for totems and out-of-home placements."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$578$group$$, "Design", $APP.$cljs$cst$287$title$$, "Exhibition Graphics", $cljs$cst$792$amount$$, 1500, $cljs$cst$799$description$$, "Entrance graphics, wall texts, wayfinding signage."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$578$group$$, "Writing", $APP.$cljs$cst$287$title$$, 
"Social Copywriting", $cljs$cst$792$amount$$, 1500, $cljs$cst$799$description$$, "Ongoing caption writing, messaging, narrative scripting."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$578$group$$, "Writing", $APP.$cljs$cst$287$title$$, "PR Writing", $cljs$cst$792$amount$$, 1500, $cljs$cst$799$description$$, "Speeches, press releases, media statements."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$578$group$$, "Advertising", $APP.$cljs$cst$287$title$$, 
"Totem Placement", $cljs$cst$792$amount$$, 8500, $cljs$cst$799$description$$, "Rental + printing + installation for Biennale duration."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$578$group$$, "Advertising", $APP.$cljs$cst$287$title$$, "Vaporetto Wraps", $cljs$cst$792$amount$$, 12500, $cljs$cst$799$description$$, "Rental + production for 2–3 vaporetto lines over Biennale duration."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$578$group$$, 
"Advertising", $APP.$cljs$cst$287$title$$, "Poster Printing", $cljs$cst$792$amount$$, 5E3, $cljs$cst$799$description$$, "250 posters at $20 each for venue and city placements."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$578$group$$, "Advertising", $APP.$cljs$cst$287$title$$, "Outdoor Posters", $cljs$cst$792$amount$$, 3E3, $cljs$cst$799$description$$, "Secondary placements across Venice — 50 posters at $60 each."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 
4, [$APP.$cljs$cst$578$group$$, "Advertising", $APP.$cljs$cst$287$title$$, "Social Media Ads", $cljs$cst$792$amount$$, 2500, $cljs$cst$799$description$$, "Instagram, Facebook, and TikTok ads for 7 months."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$578$group$$, "Advertising", $APP.$cljs$cst$287$title$$, "Social Campaign Mgmt", $cljs$cst$792$amount$$, 2500, $cljs$cst$799$description$$, "Strategy, posting, optimization, reporting."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 
4, [$APP.$cljs$cst$578$group$$, "Advertising", $APP.$cljs$cst$287$title$$, "Digital Pub Ads", $cljs$cst$792$amount$$, 2500, $cljs$cst$799$description$$, "Ads on e-flux, ArtNews, Hyperallergic, Frieze."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$578$group$$, "Advertising", $APP.$cljs$cst$287$title$$, "Print Pub Ads", $cljs$cst$792$amount$$, 5E3, $cljs$cst$799$description$$, "Artforum, Art Newspaper, and similar print publications."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 
4, [$APP.$cljs$cst$578$group$$, "PR", $APP.$cljs$cst$287$title$$, "PR — Pre-Opening", $cljs$cst$792$amount$$, 1500, $cljs$cst$799$description$$, "Press relations, writing, pitching, coordination."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$578$group$$, "PR", $APP.$cljs$cst$287$title$$, "PR — Ongoing", $cljs$cst$792$amount$$, 1500, $cljs$cst$799$description$$, "Sustained PR, press tracking, releases, interviews over 7 months."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 
4, [$APP.$cljs$cst$578$group$$, "PR", $APP.$cljs$cst$287$title$$, "Marketing Mgmt Fee", $cljs$cst$792$amount$$, 2500, $cljs$cst$799$description$$, "Overall coordination of marketing and media buys."], null)], null)], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$285$id$$, $cljs$cst$808$publication$$, $APP.$cljs$cst$287$title$$, "Publications", $cljs$cst$799$description$$, "Catalogue and printed materials: commissioned texts, design, editing, printing, totes, and stationery—ensuring long-term scholarly and institutional presence.", 
$cljs$cst$793$details$$, new $APP.$cljs$core$PersistentVector$$(null, 12, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$578$group$$, "Writing", $APP.$cljs$cst$287$title$$, "Curatorial Essay", $cljs$cst$792$amount$$, 2500, $cljs$cst$799$description$$, "Primary curatorial essay for catalogue and website."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$578$group$$, "Writing", $APP.$cljs$cst$287$title$$, 
"Catalogue Essays", $cljs$cst$792$amount$$, 4E3, $cljs$cst$799$description$$, "Commissioned essays by 4 invited writers and scholars at $1,000 each."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$578$group$$, "Catalogue", $APP.$cljs$cst$287$title$$, "Design", $cljs$cst$792$amount$$, 7500, $cljs$cst$799$description$$, "Design of exhibition catalogue (120 pages, soft cover)."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$578$group$$, "Catalogue", 
$APP.$cljs$cst$287$title$$, "Editing \x26 Layout", $cljs$cst$792$amount$$, 2500, $cljs$cst$799$description$$, "Editing and layout of copy, images, and inserts."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$578$group$$, "Catalogue", $APP.$cljs$cst$287$title$$, "Printing", $cljs$cst$792$amount$$, 12E3, $cljs$cst$799$description$$, "High-quality color printing, 120 pages. 150 copies at $80 each."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$578$group$$, 
"Catalogue", $APP.$cljs$cst$287$title$$, "Proofs \x26 Shipping", $cljs$cst$792$amount$$, 1E3, $cljs$cst$799$description$$, "Proofs, shipping, and miscellaneous printing costs."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$578$group$$, "Tote", $APP.$cljs$cst$287$title$$, "Design", $cljs$cst$792$amount$$, 2500, $cljs$cst$799$description$$, "Design of exhibition totes."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$578$group$$, "Tote", $APP.$cljs$cst$287$title$$, 
"Printing", $cljs$cst$792$amount$$, 4500, $cljs$cst$799$description$$, "High-quality silkscreen run. 300 totes at $15 each."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$578$group$$, "Tote", $APP.$cljs$cst$287$title$$, "Proofs \x26 Shipping", $cljs$cst$792$amount$$, 1E3, $cljs$cst$799$description$$, "Proofs, shipping, and miscellaneous costs for totes."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$578$group$$, "Stationery", $APP.$cljs$cst$287$title$$, 
"Design", $cljs$cst$792$amount$$, 1500, $cljs$cst$799$description$$, "Cards, postcards, flyers design."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$578$group$$, "Stationery", $APP.$cljs$cst$287$title$$, "Printing", $cljs$cst$792$amount$$, 1500, $cljs$cst$799$description$$, "300 pieces at $5 each."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$578$group$$, "Stationery", $APP.$cljs$cst$287$title$$, "Proofs \x26 Shipping", $cljs$cst$792$amount$$, 
250, $cljs$cst$799$description$$, "Proofs, shipping, and miscellaneous stationery costs."], null)], null)], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$285$id$$, $cljs$cst$809$documentation$$, $APP.$cljs$cst$287$title$$, "Documentation", $cljs$cst$799$description$$, "Comprehensive visual documentation: cinema-quality film production, photography, sound recording, editing, social media deliverables, and archiving—supporting press visibility, scholarship, and institutional legacy.", 
$cljs$cst$793$details$$, new $APP.$cljs$core$PersistentVector$$(null, 12, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$578$group$$, "Production", $APP.$cljs$cst$287$title$$, "Camera \x26 Lighting", $cljs$cst$792$amount$$, 1E4, $cljs$cst$799$description$$, "Rental package for cinema cameras, lenses, lighting, audio kits."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$578$group$$, "Production", $APP.$cljs$cst$287$title$$, 
"DPs ×2", $cljs$cst$792$amount$$, 20400, $cljs$cst$799$description$$, "Lead cinematographers for install, opening, and walkthroughs. 2 DPs × 12 days × $850/day."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$578$group$$, "Production", $APP.$cljs$cst$287$title$$, "Assistant / Gaffer", $cljs$cst$792$amount$$, 4500, $cljs$cst$799$description$$, "Lighting and camera support during shoots. 10 days at $450/day."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$578$group$$, 
"Production", $APP.$cljs$cst$287$title$$, "Sound Recording", $cljs$cst$792$amount$$, 2800, $cljs$cst$799$description$$, "Location audio capture, ambient sound, dialogue. 8 days at $350/day."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$578$group$$, "Production", $APP.$cljs$cst$287$title$$, "Photo — Install", $cljs$cst$792$amount$$, 1750, $cljs$cst$799$description$$, "High-resolution documentation during installation. 5 days at $350/day."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 
4, [$APP.$cljs$cst$578$group$$, "Production", $APP.$cljs$cst$287$title$$, "Photo — Exhibition", $cljs$cst$792$amount$$, 1800, $cljs$cst$799$description$$, "Final artwork + pavilion architecture photography. 3 days at $600/day."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$578$group$$, "Production", $APP.$cljs$cst$287$title$$, "Photo — Opening", $cljs$cst$792$amount$$, 1400, $cljs$cst$799$description$$, "Coverage for VIP events, public programs, press preview. 2 days at $700/day."], 
null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$578$group$$, "Post", $APP.$cljs$cst$287$title$$, "Film Assembly", $cljs$cst$792$amount$$, 3E3, $cljs$cst$799$description$$, "Initial cut of installation and exhibition film. 6 days at $500/day."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$578$group$$, "Post", $APP.$cljs$cst$287$title$$, "Final Cut \x26 Color", $cljs$cst$792$amount$$, 2400, $cljs$cst$799$description$$, "Professional colorist and finishing for final delivery. 4 days at $600/day."], 
null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$578$group$$, "Post", $APP.$cljs$cst$287$title$$, "Sound Edit \x26 Mix", $cljs$cst$792$amount$$, 1600, $cljs$cst$799$description$$, "Cleanup, music integration, final audio polish. 4 days at $400/day."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$578$group$$, "Post", $APP.$cljs$cst$287$title$$, "Social Deliverables", $cljs$cst$792$amount$$, 6E3, $cljs$cst$799$description$$, "Short-form clips optimized for IG/FB/TikTok. 5 days at $1,200/day."], 
null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$578$group$$, "Post", $APP.$cljs$cst$287$title$$, "Backup \x26 Archive", $cljs$cst$792$amount$$, 750, $cljs$cst$799$description$$, "Redundancy, hard drives, digital archiving of all materials."], null)], null)], null)], null);
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$297$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$298$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$pages$budget$cost_breakdown$preview$$, "", null, null) : (void 0).call(null, $amp$pages$budget$cost_breakdown$preview$$, "", null, null)), $APP.$helix$core$register_BANG_$$($amp$pages$budget$cost_breakdown$preview$$, 
"amp.pages.budget.cost-breakdown/preview"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$297$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$298$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$pages$budget$cost_breakdown$details$$, "", null, null) : (void 0).call(null, $amp$pages$budget$cost_breakdown$details$$, "", null, null)), $APP.$helix$core$register_BANG_$$($amp$pages$budget$cost_breakdown$details$$, 
"amp.pages.budget.cost-breakdown/details"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$297$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$298$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$pages$budget$cost_breakdown$footer$$, "", null, null) : (void 0).call(null, $amp$pages$budget$cost_breakdown$footer$$, "", null, null)), $APP.$helix$core$register_BANG_$$($amp$pages$budget$cost_breakdown$footer$$, 
"amp.pages.budget.cost-breakdown/footer"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$297$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$298$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$pages$budget$cost_breakdown$cost_breakdown$$, "", null, null) : (void 0).call(null, $amp$pages$budget$cost_breakdown$cost_breakdown$$, "", null, null)), 
$APP.$helix$core$register_BANG_$$($amp$pages$budget$cost_breakdown$cost_breakdown$$, "amp.pages.budget.cost-breakdown/cost-breakdown"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$297$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$298$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$pages$budget$location$preview_text$$, "", null, null) : (void 0).call(null, $amp$pages$budget$location$preview_text$$, "", null, null)), $APP.$helix$core$register_BANG_$$($amp$pages$budget$location$preview_text$$, 
"amp.pages.budget.location/preview-text"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$297$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$298$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$pages$budget$location$preview$$, "", null, null) : (void 0).call(null, $amp$pages$budget$location$preview$$, "", null, null)), $APP.$helix$core$register_BANG_$$($amp$pages$budget$location$preview$$, 
"amp.pages.budget.location/preview"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$297$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$298$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$pages$budget$location$full_details$$, "(use-touch-enabled)", null, null) : (void 0).call(null, $amp$pages$budget$location$full_details$$, "(use-touch-enabled)", 
null, null)), $APP.$helix$core$register_BANG_$$($amp$pages$budget$location$full_details$$, "amp.pages.budget.location/full-details"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$297$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$298$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$pages$budget$location$location_section$$, "", null, null) : (void 0).call(null, $amp$pages$budget$location$location_section$$, "", null, null)), $APP.$helix$core$register_BANG_$$($amp$pages$budget$location$location_section$$, 
"amp.pages.budget.location/location-section"));
var $amp$pages$budget$cash_flow$cashflow_data$$ = new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$cljs$cst$810$debt_raised$$, 0, $cljs$cst$811$funds_raised$$, 175000, $cljs$cst$812$cash_flow_model$$, $APP.$cljs$core$PersistentVector$fromArray$$([new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$285$id$$, $cljs$cst$813$admin_jul_25$$, $APP.$cljs$cst$287$title$$, "Admin — Core Team (Jul)", $cljs$cst$814$due$$, "2025-07-15", $cljs$cst$792$amount$$, 10000, $cljs$cst$815$priority$$, 
$cljs$cst$816$normal$$, $APP.$cljs$cst$12$status$$, $cljs$cst$817$paid$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$285$id$$, $cljs$cst$818$contingency_jul_25$$, $APP.$cljs$cst$287$title$$, "Contingency (Jul)", $cljs$cst$814$due$$, "2025-07-20", $cljs$cst$792$amount$$, 500, $cljs$cst$815$priority$$, $cljs$cst$816$normal$$, $APP.$cljs$cst$12$status$$, $cljs$cst$817$paid$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$285$id$$, $cljs$cst$819$admin_aug_25$$, 
$APP.$cljs$cst$287$title$$, "Admin — Core Team (Aug)", $cljs$cst$814$due$$, "2025-08-15", $cljs$cst$792$amount$$, 10000, $cljs$cst$815$priority$$, $cljs$cst$816$normal$$, $APP.$cljs$cst$12$status$$, $cljs$cst$817$paid$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$285$id$$, $cljs$cst$820$contingency_aug_25$$, $APP.$cljs$cst$287$title$$, "Contingency (Aug)", $cljs$cst$814$due$$, "2025-08-20", $cljs$cst$792$amount$$, 500, $cljs$cst$815$priority$$, $cljs$cst$816$normal$$, 
$APP.$cljs$cst$12$status$$, $cljs$cst$817$paid$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$285$id$$, $cljs$cst$821$venice_sep_25$$, $APP.$cljs$cst$287$title$$, "Venice — Lodging \x26 Per Diem (Sep)", $cljs$cst$814$due$$, "2025-09-05", $cljs$cst$792$amount$$, 13000, $cljs$cst$815$priority$$, $cljs$cst$816$normal$$, $APP.$cljs$cst$12$status$$, $cljs$cst$817$paid$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$285$id$$, $cljs$cst$822$admin_sep_25$$, 
$APP.$cljs$cst$287$title$$, "Admin — Core Team + Travel (Sep)", $cljs$cst$814$due$$, "2025-09-15", $cljs$cst$792$amount$$, 20000, $cljs$cst$815$priority$$, $cljs$cst$823$high$$, $APP.$cljs$cst$12$status$$, $cljs$cst$817$paid$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$285$id$$, $cljs$cst$824$contingency_sep_25$$, $APP.$cljs$cst$287$title$$, "Contingency (Sep)", $cljs$cst$814$due$$, "2025-09-20", $cljs$cst$792$amount$$, 650, $cljs$cst$815$priority$$, $cljs$cst$816$normal$$, 
$APP.$cljs$cst$12$status$$, $cljs$cst$817$paid$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$285$id$$, $cljs$cst$825$venice_oct_25$$, $APP.$cljs$cst$287$title$$, "Venice — Lodging \x26 Per Diem (Oct)", $cljs$cst$814$due$$, "2025-10-05", $cljs$cst$792$amount$$, 13E3, $cljs$cst$815$priority$$, $cljs$cst$816$normal$$, $APP.$cljs$cst$12$status$$, $cljs$cst$817$paid$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$285$id$$, $cljs$cst$826$admin_oct_25$$, 
$APP.$cljs$cst$287$title$$, "Admin — Core Team + Travel (Oct)", $cljs$cst$814$due$$, "2025-10-15", $cljs$cst$792$amount$$, 2E4, $cljs$cst$815$priority$$, $cljs$cst$823$high$$, $APP.$cljs$cst$12$status$$, $cljs$cst$817$paid$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$285$id$$, $cljs$cst$827$contingency_oct_25$$, $APP.$cljs$cst$287$title$$, "Contingency (Oct)", $cljs$cst$814$due$$, "2025-10-20", $cljs$cst$792$amount$$, 650, $cljs$cst$815$priority$$, $cljs$cst$816$normal$$, 
$APP.$cljs$cst$12$status$$, $cljs$cst$817$paid$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$285$id$$, $cljs$cst$828$la_nov_25$$, $APP.$cljs$cst$287$title$$, "LA Production — Phase 1 Startup (Nov)", $cljs$cst$814$due$$, "2025-11-10", $cljs$cst$792$amount$$, 31325, $cljs$cst$815$priority$$, $cljs$cst$823$high$$, $APP.$cljs$cst$12$status$$, $cljs$cst$817$paid$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$285$id$$, $cljs$cst$829$admin_nov_25$$, 
$APP.$cljs$cst$287$title$$, "Admin — Core Team (Nov)", $cljs$cst$814$due$$, "2025-11-15", $cljs$cst$792$amount$$, 1E4, $cljs$cst$815$priority$$, $cljs$cst$816$normal$$, $APP.$cljs$cst$12$status$$, $cljs$cst$817$paid$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$285$id$$, $cljs$cst$830$contingency_nov_25$$, $APP.$cljs$cst$287$title$$, "Contingency (Nov)", $cljs$cst$814$due$$, "2025-11-20", $cljs$cst$792$amount$$, 1566, $cljs$cst$815$priority$$, $cljs$cst$816$normal$$, 
$APP.$cljs$cst$12$status$$, $cljs$cst$817$paid$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$285$id$$, $cljs$cst$831$la_dec_25$$, $APP.$cljs$cst$287$title$$, "LA Production — Phase 1 Continued (Dec)", $cljs$cst$814$due$$, "2025-12-10", $cljs$cst$792$amount$$, 31325, $cljs$cst$815$priority$$, $cljs$cst$823$high$$, $APP.$cljs$cst$12$status$$, $cljs$cst$817$paid$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$285$id$$, $cljs$cst$832$admin_dec_25$$, 
$APP.$cljs$cst$287$title$$, "Admin — Core Team (Dec)", $cljs$cst$814$due$$, "2025-12-15", $cljs$cst$792$amount$$, 1E4, $cljs$cst$815$priority$$, $cljs$cst$816$normal$$, $APP.$cljs$cst$12$status$$, $cljs$cst$817$paid$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$285$id$$, $cljs$cst$833$contingency_dec_25$$, $APP.$cljs$cst$287$title$$, "Contingency (Dec)", $cljs$cst$814$due$$, "2025-12-20", $cljs$cst$792$amount$$, 1566, $cljs$cst$815$priority$$, $cljs$cst$816$normal$$, 
$APP.$cljs$cst$12$status$$, $cljs$cst$817$paid$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$285$id$$, $cljs$cst$834$venice_jan_26$$, $APP.$cljs$cst$287$title$$, "Venice — Venue Tranche 1 (10%)", $cljs$cst$814$due$$, "2026-01-05", $cljs$cst$792$amount$$, 30650, $cljs$cst$815$priority$$, $cljs$cst$835$critical$$, $APP.$cljs$cst$12$status$$, $cljs$cst$817$paid$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$285$id$$, $cljs$cst$836$la_jan_26$$, 
$APP.$cljs$cst$287$title$$, "LA Production — Phase 2 (Jan)", $cljs$cst$814$due$$, "2026-01-10", $cljs$cst$792$amount$$, 30325, $cljs$cst$815$priority$$, $cljs$cst$823$high$$, $APP.$cljs$cst$12$status$$, $cljs$cst$817$paid$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$285$id$$, $cljs$cst$837$admin_jan_26$$, $APP.$cljs$cst$287$title$$, "Admin — Core Team (Jan)", $cljs$cst$814$due$$, "2026-01-15", $cljs$cst$792$amount$$, 1E4, $cljs$cst$815$priority$$, $cljs$cst$816$normal$$, 
$APP.$cljs$cst$12$status$$, $cljs$cst$817$paid$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$285$id$$, $cljs$cst$838$contingency_jan_26$$, $APP.$cljs$cst$287$title$$, "Contingency (Jan)", $cljs$cst$814$due$$, "2026-01-20", $cljs$cst$792$amount$$, 3049, $cljs$cst$815$priority$$, $cljs$cst$816$normal$$, $APP.$cljs$cst$12$status$$, $cljs$cst$817$paid$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$285$id$$, $cljs$cst$839$venice_feb_26$$, $APP.$cljs$cst$287$title$$, 
"Venice — Venue Tranche 2 + 3 (60%)", $cljs$cst$814$due$$, "2026-02-05", $cljs$cst$792$amount$$, 183900, $cljs$cst$815$priority$$, $cljs$cst$835$critical$$, $APP.$cljs$cst$12$status$$, $APP.$cljs$cst$14$pending$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$285$id$$, $cljs$cst$840$la_feb_26$$, $APP.$cljs$cst$287$title$$, "LA Production — Phase 3 (Feb)", $cljs$cst$814$due$$, "2026-02-10", $cljs$cst$792$amount$$, 74825, $cljs$cst$815$priority$$, $cljs$cst$835$critical$$, 
$APP.$cljs$cst$12$status$$, $APP.$cljs$cst$14$pending$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$285$id$$, $cljs$cst$841$admin_feb_26$$, $APP.$cljs$cst$287$title$$, "Admin — Core Team + Misc (Feb)", $cljs$cst$814$due$$, "2026-02-15", $cljs$cst$792$amount$$, 10500, $cljs$cst$815$priority$$, $cljs$cst$823$high$$, $APP.$cljs$cst$12$status$$, $APP.$cljs$cst$14$pending$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$285$id$$, $cljs$cst$842$contingency_feb_26$$, 
$APP.$cljs$cst$287$title$$, "Contingency (Feb)", $cljs$cst$814$due$$, "2026-02-20", $cljs$cst$792$amount$$, 12936, $cljs$cst$815$priority$$, $cljs$cst$816$normal$$, $APP.$cljs$cst$12$status$$, $APP.$cljs$cst$14$pending$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$285$id$$, $cljs$cst$843$venice_mar_26$$, $APP.$cljs$cst$287$title$$, "Venice — Venue Tranche 4 + Logistics (Outbound) + Setup", $cljs$cst$814$due$$, "2026-03-05", $cljs$cst$792$amount$$, 172200, $cljs$cst$815$priority$$, 
$cljs$cst$835$critical$$, $APP.$cljs$cst$12$status$$, $APP.$cljs$cst$14$pending$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$285$id$$, $cljs$cst$844$la_mar_26$$, $APP.$cljs$cst$287$title$$, "LA Production — Final Phase + Crating (Mar)", $cljs$cst$814$due$$, "2026-03-10", $cljs$cst$792$amount$$, 97325, $cljs$cst$815$priority$$, $cljs$cst$835$critical$$, $APP.$cljs$cst$12$status$$, $APP.$cljs$cst$14$pending$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, 
[$APP.$cljs$cst$285$id$$, $cljs$cst$845$admin_mar_26$$, $APP.$cljs$cst$287$title$$, "Admin — Core Team + Misc (Mar)", $cljs$cst$814$due$$, "2026-03-15", $cljs$cst$792$amount$$, 10500, $cljs$cst$815$priority$$, $cljs$cst$823$high$$, $APP.$cljs$cst$12$status$$, $APP.$cljs$cst$14$pending$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$285$id$$, $cljs$cst$846$contingency_mar_26$$, $APP.$cljs$cst$287$title$$, "Contingency (Mar)", $cljs$cst$814$due$$, "2026-03-20", $cljs$cst$792$amount$$, 
13476, $cljs$cst$815$priority$$, $cljs$cst$816$normal$$, $APP.$cljs$cst$12$status$$, $APP.$cljs$cst$14$pending$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$285$id$$, $cljs$cst$847$venice_apr_26$$, $APP.$cljs$cst$287$title$$, "Venice — Opening Month + Studio Launch + Operations", $cljs$cst$814$due$$, "2026-04-05", $cljs$cst$792$amount$$, 110267, $cljs$cst$815$priority$$, $cljs$cst$835$critical$$, $APP.$cljs$cst$12$status$$, $APP.$cljs$cst$14$pending$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 
6, [$APP.$cljs$cst$285$id$$, $cljs$cst$848$admin_apr_26$$, $APP.$cljs$cst$287$title$$, "Admin — Core Team + Travel + Lodging (Apr)", $cljs$cst$814$due$$, "2026-04-15", $cljs$cst$792$amount$$, 33E3, $cljs$cst$815$priority$$, $cljs$cst$823$high$$, $APP.$cljs$cst$12$status$$, $APP.$cljs$cst$14$pending$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$285$id$$, $cljs$cst$849$contingency_apr_26$$, $APP.$cljs$cst$287$title$$, "Contingency (Apr)", $cljs$cst$814$due$$, "2026-04-20", 
$cljs$cst$792$amount$$, 5513, $cljs$cst$815$priority$$, $cljs$cst$816$normal$$, $APP.$cljs$cst$12$status$$, $APP.$cljs$cst$14$pending$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$285$id$$, $cljs$cst$850$venice_may_26$$, $APP.$cljs$cst$287$title$$, "Venice — Studio + Operations (May)", $cljs$cst$814$due$$, "2026-05-05", $cljs$cst$792$amount$$, 53717, $cljs$cst$815$priority$$, $cljs$cst$816$normal$$, $APP.$cljs$cst$12$status$$, $APP.$cljs$cst$14$pending$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 
6, [$APP.$cljs$cst$285$id$$, $cljs$cst$851$admin_may_26$$, $APP.$cljs$cst$287$title$$, "Admin — Core Team + Misc (May)", $cljs$cst$814$due$$, "2026-05-15", $cljs$cst$792$amount$$, 10500, $cljs$cst$815$priority$$, $cljs$cst$816$normal$$, $APP.$cljs$cst$12$status$$, $APP.$cljs$cst$14$pending$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$285$id$$, $cljs$cst$852$contingency_may_26$$, $APP.$cljs$cst$287$title$$, "Contingency (May)", $cljs$cst$814$due$$, "2026-05-20", $cljs$cst$792$amount$$, 
2686, $cljs$cst$815$priority$$, $cljs$cst$816$normal$$, $APP.$cljs$cst$12$status$$, $APP.$cljs$cst$14$pending$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$285$id$$, $cljs$cst$853$venice_jun_26$$, $APP.$cljs$cst$287$title$$, "Venice — Studio + Operations + Catalogue (Jun)", $cljs$cst$814$due$$, "2026-06-05", $cljs$cst$792$amount$$, 94467, $cljs$cst$815$priority$$, $cljs$cst$823$high$$, $APP.$cljs$cst$12$status$$, $APP.$cljs$cst$14$pending$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 
6, [$APP.$cljs$cst$285$id$$, $cljs$cst$854$admin_jun_26$$, $APP.$cljs$cst$287$title$$, "Admin — Core Team + Travel + Misc (Jun)", $cljs$cst$814$due$$, "2026-06-15", $cljs$cst$792$amount$$, 12500, $cljs$cst$815$priority$$, $cljs$cst$816$normal$$, $APP.$cljs$cst$12$status$$, $APP.$cljs$cst$14$pending$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$285$id$$, $cljs$cst$855$contingency_jun_26$$, $APP.$cljs$cst$287$title$$, "Contingency (Jun)", $cljs$cst$814$due$$, "2026-06-20", 
$cljs$cst$792$amount$$, 4723, $cljs$cst$815$priority$$, $cljs$cst$816$normal$$, $APP.$cljs$cst$12$status$$, $APP.$cljs$cst$14$pending$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$285$id$$, $cljs$cst$856$venice_jul_26$$, $APP.$cljs$cst$287$title$$, "Venice — Studio + Operations (Jul)", $cljs$cst$814$due$$, "2026-07-05", $cljs$cst$792$amount$$, 53717, $cljs$cst$815$priority$$, $cljs$cst$816$normal$$, $APP.$cljs$cst$12$status$$, $APP.$cljs$cst$14$pending$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 
6, [$APP.$cljs$cst$285$id$$, $cljs$cst$857$admin_jul_26$$, $APP.$cljs$cst$287$title$$, "Admin — Core Team + Misc (Jul)", $cljs$cst$814$due$$, "2026-07-15", $cljs$cst$792$amount$$, 10500, $cljs$cst$815$priority$$, $cljs$cst$816$normal$$, $APP.$cljs$cst$12$status$$, $APP.$cljs$cst$14$pending$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$285$id$$, $cljs$cst$858$contingency_jul_26$$, $APP.$cljs$cst$287$title$$, "Contingency (Jul)", $cljs$cst$814$due$$, "2026-07-20", $cljs$cst$792$amount$$, 
2686, $cljs$cst$815$priority$$, $cljs$cst$816$normal$$, $APP.$cljs$cst$12$status$$, $APP.$cljs$cst$14$pending$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$285$id$$, $cljs$cst$859$venice_aug_26$$, $APP.$cljs$cst$287$title$$, "Venice — Studio + Operations (Aug)", $cljs$cst$814$due$$, "2026-08-05", $cljs$cst$792$amount$$, 53717, $cljs$cst$815$priority$$, $cljs$cst$816$normal$$, $APP.$cljs$cst$12$status$$, $APP.$cljs$cst$14$pending$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 
6, [$APP.$cljs$cst$285$id$$, $cljs$cst$860$admin_aug_26$$, $APP.$cljs$cst$287$title$$, "Admin — Core Team + Misc (Aug)", $cljs$cst$814$due$$, "2026-08-15", $cljs$cst$792$amount$$, 10500, $cljs$cst$815$priority$$, $cljs$cst$816$normal$$, $APP.$cljs$cst$12$status$$, $APP.$cljs$cst$14$pending$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$285$id$$, $cljs$cst$861$contingency_aug_26$$, $APP.$cljs$cst$287$title$$, "Contingency (Aug)", $cljs$cst$814$due$$, "2026-08-20", $cljs$cst$792$amount$$, 
2686, $cljs$cst$815$priority$$, $cljs$cst$816$normal$$, $APP.$cljs$cst$12$status$$, $APP.$cljs$cst$14$pending$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$285$id$$, $cljs$cst$862$venice_sep_26$$, $APP.$cljs$cst$287$title$$, "Venice — Studio + Operations (Sep)", $cljs$cst$814$due$$, "2026-09-05", $cljs$cst$792$amount$$, 53717, $cljs$cst$815$priority$$, $cljs$cst$816$normal$$, $APP.$cljs$cst$12$status$$, $APP.$cljs$cst$14$pending$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 
6, [$APP.$cljs$cst$285$id$$, $cljs$cst$863$admin_sep_26$$, $APP.$cljs$cst$287$title$$, "Admin — Core Team + Travel + Misc (Sep)", $cljs$cst$814$due$$, "2026-09-15", $cljs$cst$792$amount$$, 12500, $cljs$cst$815$priority$$, $cljs$cst$816$normal$$, $APP.$cljs$cst$12$status$$, $APP.$cljs$cst$14$pending$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$285$id$$, $cljs$cst$864$contingency_sep_26$$, $APP.$cljs$cst$287$title$$, "Contingency (Sep)", $cljs$cst$814$due$$, "2026-09-20", 
$cljs$cst$792$amount$$, 2686, $cljs$cst$815$priority$$, $cljs$cst$816$normal$$, $APP.$cljs$cst$12$status$$, $APP.$cljs$cst$14$pending$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$285$id$$, $cljs$cst$865$venice_oct_26$$, $APP.$cljs$cst$287$title$$, "Venice — Studio + Operations (Oct)", $cljs$cst$814$due$$, "2026-10-05", $cljs$cst$792$amount$$, 42217, $cljs$cst$815$priority$$, $cljs$cst$816$normal$$, $APP.$cljs$cst$12$status$$, $APP.$cljs$cst$14$pending$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 
6, [$APP.$cljs$cst$285$id$$, $cljs$cst$866$admin_oct_26$$, $APP.$cljs$cst$287$title$$, "Admin — Core Team + Misc (Oct)", $cljs$cst$814$due$$, "2026-10-15", $cljs$cst$792$amount$$, 10500, $cljs$cst$815$priority$$, $cljs$cst$816$normal$$, $APP.$cljs$cst$12$status$$, $APP.$cljs$cst$14$pending$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$285$id$$, $cljs$cst$867$contingency_oct_26$$, $APP.$cljs$cst$287$title$$, "Contingency (Oct)", $cljs$cst$814$due$$, "2026-10-20", $cljs$cst$792$amount$$, 
2111, $cljs$cst$815$priority$$, $cljs$cst$816$normal$$, $APP.$cljs$cst$12$status$$, $APP.$cljs$cst$14$pending$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$285$id$$, $cljs$cst$868$venice_nov_26$$, $APP.$cljs$cst$287$title$$, "Venice — Studio + Operations (Nov)", $cljs$cst$814$due$$, "2026-11-05", $cljs$cst$792$amount$$, 42217, $cljs$cst$815$priority$$, $cljs$cst$816$normal$$, $APP.$cljs$cst$12$status$$, $APP.$cljs$cst$14$pending$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 
6, [$APP.$cljs$cst$285$id$$, $cljs$cst$869$admin_nov_26$$, $APP.$cljs$cst$287$title$$, "Admin — Core Team + Misc (Nov)", $cljs$cst$814$due$$, "2026-11-15", $cljs$cst$792$amount$$, 10500, $cljs$cst$815$priority$$, $cljs$cst$816$normal$$, $APP.$cljs$cst$12$status$$, $APP.$cljs$cst$14$pending$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$285$id$$, $cljs$cst$870$contingency_nov_26$$, $APP.$cljs$cst$287$title$$, "Contingency (Nov)", $cljs$cst$814$due$$, "2026-11-20", $cljs$cst$792$amount$$, 
2111, $cljs$cst$815$priority$$, $cljs$cst$816$normal$$, $APP.$cljs$cst$12$status$$, $APP.$cljs$cst$14$pending$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$285$id$$, $cljs$cst$871$venice_dec_26$$, $APP.$cljs$cst$287$title$$, "Venice — Close-out + Logistics (Return)", $cljs$cst$814$due$$, "2026-12-05", $cljs$cst$792$amount$$, 134517, $cljs$cst$815$priority$$, $cljs$cst$823$high$$, $APP.$cljs$cst$12$status$$, $APP.$cljs$cst$14$pending$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 
6, [$APP.$cljs$cst$285$id$$, $cljs$cst$872$admin_dec_26$$, $APP.$cljs$cst$287$title$$, "Admin — Core Team + Travel + Misc (Dec)", $cljs$cst$814$due$$, "2026-12-15", $cljs$cst$792$amount$$, 20500, $cljs$cst$815$priority$$, $cljs$cst$823$high$$, $APP.$cljs$cst$12$status$$, $APP.$cljs$cst$14$pending$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$285$id$$, $cljs$cst$873$contingency_dec_26$$, $APP.$cljs$cst$287$title$$, "Contingency (Dec)", $cljs$cst$814$due$$, "2026-12-20", 
$cljs$cst$792$amount$$, 6726, $cljs$cst$815$priority$$, $cljs$cst$816$normal$$, $APP.$cljs$cst$12$status$$, $APP.$cljs$cst$14$pending$$], null)], !0)], null);
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$297$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$298$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$pages$budget$cash_flow$timeline_node$$, '(hooks/use-ref nil)(hooks/use-effect :once (when (clojure.core/deref node-ref) (.fromTo gsap (clojure.core/deref node-ref) {:opacity 0, :x -20} {:opacity 1, :x 0, :duration 0.4, :delay (* idx 0.06), :ease "power2.out"})))', 
null, null) : (void 0).call(null, $amp$pages$budget$cash_flow$timeline_node$$, '(hooks/use-ref nil)(hooks/use-effect :once (when (clojure.core/deref node-ref) (.fromTo gsap (clojure.core/deref node-ref) {:opacity 0, :x -20} {:opacity 1, :x 0, :duration 0.4, :delay (* idx 0.06), :ease "power2.out"})))', null, null)), $APP.$helix$core$register_BANG_$$($amp$pages$budget$cash_flow$timeline_node$$, "amp.pages.budget.cash-flow/timeline-node"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$297$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$298$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$pages$budget$cash_flow$now_marker$$, '(hooks/use-ref nil)(hooks/use-effect :once (when (clojure.core/deref ref) (.fromTo gsap (clojure.core/deref ref) {:opacity 0, :scaleX 0} {:opacity 1, :scaleX 1, :duration 0.6, :delay 0.2, :ease "power3.out"})))', 
null, null) : (void 0).call(null, $amp$pages$budget$cash_flow$now_marker$$, '(hooks/use-ref nil)(hooks/use-effect :once (when (clojure.core/deref ref) (.fromTo gsap (clojure.core/deref ref) {:opacity 0, :scaleX 0} {:opacity 1, :scaleX 1, :duration 0.6, :delay 0.2, :ease "power3.out"})))', null, null)), $APP.$helix$core$register_BANG_$$($amp$pages$budget$cash_flow$now_marker$$, "amp.pages.budget.cash-flow/now-marker"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$297$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$298$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$pages$budget$cash_flow$month_header$$, '(hooks/use-ref nil)(hooks/use-effect :once (when (clojure.core/deref ref) (.fromTo gsap (clojure.core/deref ref) {:opacity 0, :y 8} {:opacity 1, :y 0, :duration 0.35, :delay (+ 0.1 (* idx 0.05)), :ease "power2.out"})))', 
null, null) : (void 0).call(null, $amp$pages$budget$cash_flow$month_header$$, '(hooks/use-ref nil)(hooks/use-effect :once (when (clojure.core/deref ref) (.fromTo gsap (clojure.core/deref ref) {:opacity 0, :y 8} {:opacity 1, :y 0, :duration 0.35, :delay (+ 0.1 (* idx 0.05)), :ease "power2.out"})))', null, null)), $APP.$helix$core$register_BANG_$$($amp$pages$budget$cash_flow$month_header$$, "amp.pages.budget.cash-flow/month-header"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$297$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$298$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$pages$budget$cash_flow$month_summary_row$$, '(hooks/use-ref nil)(hooks/use-effect :once (when (clojure.core/deref ref) (.fromTo gsap (clojure.core/deref ref) {:opacity 0, :x -16} {:opacity 1, :x 0, :duration 0.35, :delay (* idx 0.05), :ease "power2.out"})))', 
null, null) : (void 0).call(null, $amp$pages$budget$cash_flow$month_summary_row$$, '(hooks/use-ref nil)(hooks/use-effect :once (when (clojure.core/deref ref) (.fromTo gsap (clojure.core/deref ref) {:opacity 0, :x -16} {:opacity 1, :x 0, :duration 0.35, :delay (* idx 0.05), :ease "power2.out"})))', null, null)), $APP.$helix$core$register_BANG_$$($amp$pages$budget$cash_flow$month_summary_row$$, "amp.pages.budget.cash-flow/month-summary-row"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$297$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$298$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$pages$budget$cash_flow$view_toggle$$, "", null, null) : (void 0).call(null, $amp$pages$budget$cash_flow$view_toggle$$, "", null, null)), $APP.$helix$core$register_BANG_$$($amp$pages$budget$cash_flow$view_toggle$$, 
"amp.pages.budget.cash-flow/view-toggle"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$297$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$298$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$pages$budget$cash_flow$summary_header$$, '(hooks/use-ref nil)(hooks/use-effect :once (when (clojure.core/deref ref) (.fromTo gsap (clojure.core/deref ref) {:opacity 0, :y -12} {:opacity 1, :y 0, :duration 0.5, :ease "power2.out"})))', 
null, null) : (void 0).call(null, $amp$pages$budget$cash_flow$summary_header$$, '(hooks/use-ref nil)(hooks/use-effect :once (when (clojure.core/deref ref) (.fromTo gsap (clojure.core/deref ref) {:opacity 0, :y -12} {:opacity 1, :y 0, :duration 0.5, :ease "power2.out"})))', null, null)), $APP.$helix$core$register_BANG_$$($amp$pages$budget$cash_flow$summary_header$$, "amp.pages.budget.cash-flow/summary-header"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$297$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$298$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$pages$budget$cash_flow$cash_flow$$, '(hooks/use-state nil)(hooks/use-state false)(hooks/use-ref nil)(hooks/use-effect [entries] (when (and entries (clojure.core/deref container-ref)) (let [spine (.querySelector (clojure.core/deref container-ref) ".cf-spine")] (when spine (.fromTo gsap spine {:scaleY 0} {:scaleY 1, :duration 0.8, :delay 0.05, :ease "power3.out"})))))', 
null, null) : (void 0).call(null, $amp$pages$budget$cash_flow$cash_flow$$, '(hooks/use-state nil)(hooks/use-state false)(hooks/use-ref nil)(hooks/use-effect [entries] (when (and entries (clojure.core/deref container-ref)) (let [spine (.querySelector (clojure.core/deref container-ref) ".cf-spine")] (when spine (.fromTo gsap spine {:scaleY 0} {:scaleY 1, :duration 0.8, :delay 0.05, :ease "power3.out"})))))', null, null)), $APP.$helix$core$register_BANG_$$($amp$pages$budget$cash_flow$cash_flow$$, "amp.pages.budget.cash-flow/cash-flow"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$297$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$298$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$pages$budget$non_profit$non_profit$$, "", null, null) : (void 0).call(null, $amp$pages$budget$non_profit$non_profit$$, "", null, null)), $APP.$helix$core$register_BANG_$$($amp$pages$budget$non_profit$non_profit$$, 
"amp.pages.budget.non-profit/non-profit"));
var $amp$pages$budget$sponsors$sponsors$$ = new $APP.$cljs$core$PersistentVector$$(null, 5, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$165$name$$, "Tony Shafrazi", $cljs$cst$889$tier$$, $cljs$cst$890$founding_patron$$, $cljs$cst$891$logo$$, "images/graphics/tony_shafrazi_logo_lighter.svg", $APP.$cljs$cst$25$type$$, $cljs$cst$892$institution$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$165$name$$, 
"Armenian Fund USA", $cljs$cst$889$tier$$, $cljs$cst$890$founding_patron$$, $cljs$cst$891$logo$$, "images/graphics/armenia_fund_logo.svg", $APP.$cljs$cst$25$type$$, $cljs$cst$892$institution$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$165$name$$, "Khudikyan Family", $cljs$cst$889$tier$$, $cljs$cst$893$patron$$, $APP.$cljs$cst$25$type$$, $cljs$cst$894$individual$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$165$name$$, "Ourfalian Family", 
$cljs$cst$889$tier$$, $cljs$cst$893$patron$$, $APP.$cljs$cst$25$type$$, $cljs$cst$894$individual$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$165$name$$, "Sarafyan Family", $cljs$cst$889$tier$$, $cljs$cst$893$patron$$, $APP.$cljs$cst$25$type$$, $cljs$cst$894$individual$$], null)], null), $amp$pages$budget$sponsors$tier_meta$$ = new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$cljs$cst$890$founding_patron$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$408$label$$, 
"Founding Patrons", $cljs$cst$895$accent$$, "text-pink-700 dark:text-pink-300", $APP.$cljs$cst$393$border$$, "border-pink-500/30", $cljs$cst$896$order$$, 0], null), $cljs$cst$893$patron$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$408$label$$, "Patrons", $cljs$cst$895$accent$$, "text-amber-700 dark:text-amber-300", $APP.$cljs$cst$393$border$$, "border-amber-500/30 dark:border-amber-300/30", $cljs$cst$896$order$$, 1], null), $cljs$cst$897$benefactor$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 
4, [$APP.$cljs$cst$408$label$$, "Benefactors", $cljs$cst$895$accent$$, "text-indigo-700 dark:text-indigo-300", $APP.$cljs$cst$393$border$$, "border-indigo-500/30 dark:border-indigo-300/30", $cljs$cst$896$order$$, 2], null), $cljs$cst$898$supporter$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$408$label$$, "Supporters", $cljs$cst$895$accent$$, "text-slate-700 dark:text-slate-300", $APP.$cljs$cst$393$border$$, "border-slate-400 dark:border-slate-600", $cljs$cst$896$order$$, 3], 
null)], null);
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$297$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$298$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$pages$budget$sponsors$logo_card$$, "", null, null) : (void 0).call(null, $amp$pages$budget$sponsors$logo_card$$, "", null, null)), $APP.$helix$core$register_BANG_$$($amp$pages$budget$sponsors$logo_card$$, 
"amp.pages.budget.sponsors/logo-card"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$297$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$298$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$pages$budget$sponsors$name_item$$, "", null, null) : (void 0).call(null, $amp$pages$budget$sponsors$name_item$$, "", null, null)), $APP.$helix$core$register_BANG_$$($amp$pages$budget$sponsors$name_item$$, 
"amp.pages.budget.sponsors/name-item"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$297$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$298$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$pages$budget$sponsors$tier_section$$, "", null, null) : (void 0).call(null, $amp$pages$budget$sponsors$tier_section$$, "", null, null)), $APP.$helix$core$register_BANG_$$($amp$pages$budget$sponsors$tier_section$$, 
"amp.pages.budget.sponsors/tier-section"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$297$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$298$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$pages$budget$sponsors$sponsors_section$$, "", null, null) : (void 0).call(null, $amp$pages$budget$sponsors$sponsors_section$$, "", null, null)), $APP.$helix$core$register_BANG_$$($amp$pages$budget$sponsors$sponsors_section$$, 
"amp.pages.budget.sponsors/sponsors-section"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$297$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$298$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$pages$budget$why_support$preview$$, "", null, null) : (void 0).call(null, $amp$pages$budget$why_support$preview$$, "", null, null)), $APP.$helix$core$register_BANG_$$($amp$pages$budget$why_support$preview$$, 
"amp.pages.budget.why-support/preview"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$297$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$298$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$pages$budget$why_support$details$$, "", null, null) : (void 0).call(null, $amp$pages$budget$why_support$details$$, "", null, null)), $APP.$helix$core$register_BANG_$$($amp$pages$budget$why_support$details$$, 
"amp.pages.budget.why-support/details"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$297$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$298$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$pages$budget$why_support$why_support$$, "", null, null) : (void 0).call(null, $amp$pages$budget$why_support$why_support$$, "", null, null)), $APP.$helix$core$register_BANG_$$($amp$pages$budget$why_support$why_support$$, 
"amp.pages.budget.why-support/why-support"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$297$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$298$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$pages$budget$section$section_link$$, "(use-scroll-to-id)", null, null) : (void 0).call(null, $amp$pages$budget$section$section_link$$, "(use-scroll-to-id)", 
null, null)), $APP.$helix$core$register_BANG_$$($amp$pages$budget$section$section_link$$, "amp.pages.budget.section/section-link"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$297$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$298$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$pages$budget$section$header$$, "", null, null) : (void 0).call(null, $amp$pages$budget$section$header$$, "", null, null)), $APP.$helix$core$register_BANG_$$($amp$pages$budget$section$header$$, 
"amp.pages.budget.section/header"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$297$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$298$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$pages$budget$section$budget_section$$, "", null, null) : (void 0).call(null, $amp$pages$budget$section$budget_section$$, "", null, null)), $APP.$helix$core$register_BANG_$$($amp$pages$budget$section$budget_section$$, 
"amp.pages.budget.section/budget-section"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$297$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$298$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($APP.$amp$pages$budget$page$budget_view$$, "", null, null) : (void 0).call(null, $APP.$amp$pages$budget$page$budget_view$$, "", null, null)), $APP.$helix$core$register_BANG_$$($APP.$amp$pages$budget$page$budget_view$$, 
"amp.pages.budget.page/budget-view"));
$APP.$module$contents$shadow$loader_set_loaded$$();

}).call(this);