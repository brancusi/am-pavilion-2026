(function(){
'use strict';
var $amp$ui$icons$InformationCircle$$, $amp$ui$icons$ArrowTurnRightUp$$, $cljs$core$take_while$cljs$0core$0IFn$0_invoke$0arity$02$$, $cljs$core$partition_by$cljs$0core$0IFn$0_invoke$0arity$02$$, $amp$hooks$use_scroll_to$use_scroll_to_ref$$, $amp$hooks$use_scroll_to$use_scroll_to_top$cljs$0core$0IFn$0_invoke$0arity$0variadic$$, $amp$pages$budget$committee$preview$$, $amp$pages$budget$committee$details$$, $amp$pages$budget$committee$committee_member_card$$, $amp$pages$budget$committee$committee_gallery$$, 
$amp$pages$budget$committee$committee$$, $amp$pages$budget$table$format_currency$$, $amp$pages$budget$table$sub_total_all_sections$$, $amp$pages$budget$table$total_section$$, $amp$pages$budget$table$pad_two_digits$$, $amp$pages$budget$table$detail_line_item$$, $amp$pages$budget$table$details__GT_render_items$$, $amp$pages$budget$table$section_line_item$$, $amp$pages$budget$table$budget_table$$, $amp$pages$budget$cost_breakdown$preview$$, $amp$pages$budget$cost_breakdown$details$$, $amp$pages$budget$cost_breakdown$footer$$, 
$amp$pages$budget$cost_breakdown$cost_breakdown$$, $amp$pages$budget$location$preview_text$$, $amp$pages$budget$location$preview$$, $amp$pages$budget$location$full_details$$, $amp$pages$budget$location$location_section$$, $amp$pages$budget$cash_flow$parse_date$$, $amp$pages$budget$cash_flow$date__GT_ms$$, $amp$pages$budget$cash_flow$format_currency$$, $amp$pages$budget$cash_flow$priority_tag_bg$$, $amp$pages$budget$cash_flow$priority_tag_text$$, $amp$pages$budget$cash_flow$priority_dot_classes$$, 
$amp$pages$budget$cash_flow$priority_amount_class$$, $amp$pages$budget$cash_flow$priority_label$$, $amp$pages$budget$cash_flow$group_by_month$$, $amp$pages$budget$cash_flow$month_rollups$$, $amp$pages$budget$cash_flow$status_classes$$, $amp$pages$budget$cash_flow$timeline_node$$, $amp$pages$budget$cash_flow$now_marker$$, $amp$pages$budget$cash_flow$month_header$$, $amp$pages$budget$cash_flow$month_summary_row$$, $amp$pages$budget$cash_flow$view_toggle$$, $amp$pages$budget$cash_flow$summary_header$$, 
$amp$pages$budget$cash_flow$cash_flow$$, $amp$pages$budget$non_profit$non_profit$$, $amp$pages$budget$sponsors$logo_card$$, $amp$pages$budget$sponsors$name_item$$, $amp$pages$budget$sponsors$tier_section$$, $amp$pages$budget$sponsors$sponsors_section$$, $amp$pages$budget$why_support$preview$$, $amp$pages$budget$why_support$details$$, $amp$pages$budget$why_support$why_support$$, $amp$nav$back_up$back_up_nav$$, $amp$pages$budget$section$section_link$$, $amp$pages$budget$section$header$$, $amp$pages$budget$section$budget_section$$, 
$cljs$cst$847$admin_apr_26$$, $cljs$cst$861$venice_sep_26$$, $cljs$cst$820$venice_sep_25$$, $cljs$cst$839$la_feb_26$$, $cljs$cst$849$venice_may_26$$, $cljs$cst$814$priority$$, $cljs$cst$894$accent$$, $cljs$cst$800$venue$$, $cljs$cst$843$la_mar_26$$, $cljs$cst$876$n_crit$$, $cljs$cst$865$admin_oct_26$$, $cljs$cst$897$supporter$$, $cljs$cst$825$admin_oct_25$$, $cljs$cst$852$venice_jun_26$$, $cljs$cst$879$has_now$$, $cljs$cst$803$the_studio$$, $cljs$cst$885$month$$, $cljs$cst$896$benefactor$$, $cljs$cst$827$la_nov_25$$, 
$cljs$cst$837$contingency_jan_26$$, $cljs$cst$855$venice_jul_26$$, $cljs$cst$875$entries$$, $cljs$cst$874$all_paid$$, $cljs$cst$815$normal$$, $cljs$cst$812$admin_jul_25$$, $cljs$cst$856$admin_jul_26$$, $cljs$cst$877$n_paid$$, $cljs$cst$808$documentation$$, $cljs$cst$819$contingency_aug_25$$, $cljs$cst$860$contingency_aug_26$$, $cljs$cst$809$debt_raised$$, $cljs$cst$853$admin_jun_26$$, $cljs$cst$797$expanded_items$$, $cljs$cst$888$tier$$, $cljs$cst$829$contingency_nov_25$$, $cljs$cst$869$contingency_nov_26$$, 
$cljs$cst$794$tax$$, $cljs$cst$804$logistics$$, $cljs$cst$850$admin_may_26$$, $cljs$cst$836$admin_jan_26$$, $cljs$cst$838$venice_feb_26$$, $cljs$cst$833$venice_jan_26$$, $cljs$cst$878$n_items$$, $cljs$cst$866$contingency_oct_26$$, $cljs$cst$826$contingency_oct_25$$, $cljs$cst$844$admin_mar_26$$, $cljs$cst$816$paid$$, $cljs$cst$792$details$$, $cljs$cst$870$venice_dec_26$$, $cljs$cst$842$venice_mar_26$$, $cljs$cst$895$order$$, $cljs$cst$840$admin_feb_26$$, $cljs$cst$848$contingency_apr_26$$, $cljs$cst$881$entry$$, 
$cljs$cst$871$admin_dec_26$$, $cljs$cst$831$admin_dec_25$$, $cljs$cst$799$item$$, $cljs$cst$868$admin_nov_26$$, $cljs$cst$828$admin_nov_25$$, $cljs$cst$813$due$$, $cljs$cst$798$description$$, $cljs$cst$834$critical$$, $cljs$cst$857$contingency_jul_26$$, $cljs$cst$817$contingency_jul_25$$, $cljs$cst$872$contingency_dec_26$$, $cljs$cst$832$contingency_dec_25$$, $cljs$cst$851$contingency_may_26$$, $cljs$cst$854$contingency_jun_26$$, $cljs$cst$791$amount$$, $cljs$cst$887$past_QMARK_$$, $cljs$cst$811$cash_flow_model$$, 
$cljs$cst$880$dot$$, $cljs$cst$883$expanded_QMARK_$$, $cljs$cst$796$set_expanded_items$$, $cljs$cst$793$rate$$, $cljs$cst$841$contingency_feb_26$$, $cljs$cst$806$marketing$$, $cljs$cst$802$la_prod$$, $cljs$cst$892$patron$$, $cljs$cst$873$fill$$, $cljs$cst$810$funds_raised$$, $cljs$cst$863$contingency_sep_26$$, $cljs$cst$823$contingency_sep_25$$, $cljs$cst$898$members$$, $cljs$cst$795$cost_data$$, $cljs$cst$867$venice_nov_26$$, $cljs$cst$882$rollup$$, $cljs$cst$893$individual$$, $cljs$cst$862$admin_sep_26$$, 
$cljs$cst$821$admin_sep_25$$, $cljs$cst$846$venice_apr_26$$, $cljs$cst$891$institution$$, $cljs$cst$890$logo$$, $cljs$cst$822$high$$, $cljs$cst$805$opening$$, $cljs$cst$899$anchor$$, $cljs$cst$801$admin$$, $cljs$cst$845$contingency_mar_26$$, $cljs$cst$864$venice_oct_26$$, $cljs$cst$824$venice_oct_25$$, $cljs$cst$886$now$$, $cljs$cst$858$venice_aug_26$$, $cljs$cst$859$admin_aug_26$$, $cljs$cst$818$admin_aug_25$$, $cljs$cst$889$founding_patron$$, $cljs$cst$830$la_dec_25$$, $cljs$cst$835$la_jan_26$$, 
$cljs$cst$807$publication$$, $cljs$cst$884$target_total$$;
$amp$ui$icons$InformationCircle$$ = function($G__52439_JSCompiler_temp_const$jscomp$inline_3485_class$$jscomp$7_map__52437_map__52437__$1_props__41652__auto__$jscomp$5_vec__52434$$, $G__52443$jscomp$inline_3487_JSCompiler_inline_result$jscomp$inline_3486_maybe_ref__41653__auto__$jscomp$5$$) {
  $G__52439_JSCompiler_temp_const$jscomp$inline_3485_class$$jscomp$7_map__52437_map__52437__$1_props__41652__auto__$jscomp$5_vec__52434$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__52439_JSCompiler_temp_const$jscomp$inline_3485_class$$jscomp$7_map__52437_map__52437__$1_props__41652__auto__$jscomp$5_vec__52434$$), $G__52443$jscomp$inline_3487_JSCompiler_inline_result$jscomp$inline_3486_maybe_ref__41653__auto__$jscomp$5$$], 
  null);
  $G__52439_JSCompiler_temp_const$jscomp$inline_3485_class$$jscomp$7_map__52437_map__52437__$1_props__41652__auto__$jscomp$5_vec__52434$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__52439_JSCompiler_temp_const$jscomp$inline_3485_class$$jscomp$7_map__52437_map__52437__$1_props__41652__auto__$jscomp$5_vec__52434$$, 0, null);
  $G__52439_JSCompiler_temp_const$jscomp$inline_3485_class$$jscomp$7_map__52437_map__52437__$1_props__41652__auto__$jscomp$5_vec__52434$$ = $APP.$cljs$core$__destructure_map$$($G__52439_JSCompiler_temp_const$jscomp$inline_3485_class$$jscomp$7_map__52437_map__52437__$1_props__41652__auto__$jscomp$5_vec__52434$$);
  $G__52439_JSCompiler_temp_const$jscomp$inline_3485_class$$jscomp$7_map__52437_map__52437__$1_props__41652__auto__$jscomp$5_vec__52434$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__52439_JSCompiler_temp_const$jscomp$inline_3485_class$$jscomp$7_map__52437_map__52437__$1_props__41652__auto__$jscomp$5_vec__52434$$, $APP.$cljs$cst$67$class$$);
  $G__52439_JSCompiler_temp_const$jscomp$inline_3485_class$$jscomp$7_map__52437_map__52437__$1_props__41652__auto__$jscomp$5_vec__52434$$ = $APP.$helix$impl$props$normalize_class$$($G__52439_JSCompiler_temp_const$jscomp$inline_3485_class$$jscomp$7_map__52437_map__52437__$1_props__41652__auto__$jscomp$5_vec__52434$$);
  $G__52443$jscomp$inline_3487_JSCompiler_inline_result$jscomp$inline_3486_maybe_ref__41653__auto__$jscomp$5$$ = {strokeLinecap:"round", strokeLinejoin:"round", d:"m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"};
  $G__52443$jscomp$inline_3487_JSCompiler_inline_result$jscomp$inline_3486_maybe_ref__41653__auto__$jscomp$5$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("path", $G__52443$jscomp$inline_3487_JSCompiler_inline_result$jscomp$inline_3486_maybe_ref__41653__auto__$jscomp$5$$) : $APP.$helix$core$jsx$$.call(null, "path", $G__52443$jscomp$inline_3487_JSCompiler_inline_result$jscomp$inline_3486_maybe_ref__41653__auto__$jscomp$5$$);
  $G__52439_JSCompiler_temp_const$jscomp$inline_3485_class$$jscomp$7_map__52437_map__52437__$1_props__41652__auto__$jscomp$5_vec__52434$$ = {xmlns:"http://www.w3.org/2000/svg", fill:"none", viewBox:"0 0 24 24", strokeWidth:1.5, stroke:"currentColor", className:$G__52439_JSCompiler_temp_const$jscomp$inline_3485_class$$jscomp$7_map__52437_map__52437__$1_props__41652__auto__$jscomp$5_vec__52434$$, children:$G__52443$jscomp$inline_3487_JSCompiler_inline_result$jscomp$inline_3486_maybe_ref__41653__auto__$jscomp$5$$};
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("svg", $G__52439_JSCompiler_temp_const$jscomp$inline_3485_class$$jscomp$7_map__52437_map__52437__$1_props__41652__auto__$jscomp$5_vec__52434$$) : $APP.$helix$core$jsx$$.call(null, "svg", $G__52439_JSCompiler_temp_const$jscomp$inline_3485_class$$jscomp$7_map__52437_map__52437__$1_props__41652__auto__$jscomp$5_vec__52434$$);
};
$amp$ui$icons$ArrowTurnRightUp$$ = function($G__52516_props$jscomp$11_props__41652__auto__$jscomp$10_vec__52512$$, $G__52520$jscomp$inline_3496_JSCompiler_inline_result$jscomp$3456_maybe_ref__41653__auto__$jscomp$10$$) {
  $G__52516_props$jscomp$11_props__41652__auto__$jscomp$10_vec__52512$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__52516_props$jscomp$11_props__41652__auto__$jscomp$10_vec__52512$$), $G__52520$jscomp$inline_3496_JSCompiler_inline_result$jscomp$3456_maybe_ref__41653__auto__$jscomp$10$$], null);
  $G__52516_props$jscomp$11_props__41652__auto__$jscomp$10_vec__52512$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__52516_props$jscomp$11_props__41652__auto__$jscomp$10_vec__52512$$, 0, null);
  $G__52520$jscomp$inline_3496_JSCompiler_inline_result$jscomp$3456_maybe_ref__41653__auto__$jscomp$10$$ = {strokeLinecap:"round", strokeLinejoin:"round", d:"m11.99 7.5 3.75-3.75m0 0 3.75 3.75m-3.75-3.75v16.499H4.49"};
  $G__52520$jscomp$inline_3496_JSCompiler_inline_result$jscomp$3456_maybe_ref__41653__auto__$jscomp$10$$ = {xmlns:"http://www.w3.org/2000/svg", fill:"none", viewBox:"0 0 24 24", strokeWidth:1.5, stroke:"currentColor", className:"size-6", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("path", $G__52520$jscomp$inline_3496_JSCompiler_inline_result$jscomp$3456_maybe_ref__41653__auto__$jscomp$10$$) : $APP.$helix$core$jsx$$.call(null, 
  "path", $G__52520$jscomp$inline_3496_JSCompiler_inline_result$jscomp$3456_maybe_ref__41653__auto__$jscomp$10$$)};
  $G__52516_props$jscomp$11_props__41652__auto__$jscomp$10_vec__52512$$ = $APP.$helix$impl$props$merge_obj$$($G__52520$jscomp$inline_3496_JSCompiler_inline_result$jscomp$3456_maybe_ref__41653__auto__$jscomp$10$$, $APP.$helix$impl$props$_dom_props$cljs$0core$0IFn$0_invoke$0arity$01$$($G__52516_props$jscomp$11_props__41652__auto__$jscomp$10_vec__52512$$));
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("svg", $G__52516_props$jscomp$11_props__41652__auto__$jscomp$10_vec__52512$$) : $APP.$helix$core$jsx$$.call(null, "svg", $G__52516_props$jscomp$11_props__41652__auto__$jscomp$10_vec__52512$$);
};
$cljs$core$take_while$cljs$0core$0IFn$0_invoke$0arity$02$$ = function($pred$jscomp$14$$, $coll$jscomp$728$$) {
  return new $APP.$cljs$core$LazySeq$$(null, function() {
    var $JSCompiler_temp$jscomp$430_temp__5823__auto__$jscomp$22$$ = $APP.$cljs$core$seq$$($coll$jscomp$728$$);
    if ($JSCompiler_temp$jscomp$430_temp__5823__auto__$jscomp$22$$) {
      var $G__47638$jscomp$inline_2182_JSCompiler_inline_result$jscomp$431$$ = $APP.$cljs$core$first$$($JSCompiler_temp$jscomp$430_temp__5823__auto__$jscomp$22$$);
      $G__47638$jscomp$inline_2182_JSCompiler_inline_result$jscomp$431$$ = $pred$jscomp$14$$.$cljs$core$IFn$_invoke$arity$1$ ? $pred$jscomp$14$$.$cljs$core$IFn$_invoke$arity$1$($G__47638$jscomp$inline_2182_JSCompiler_inline_result$jscomp$431$$) : $pred$jscomp$14$$.call(null, $G__47638$jscomp$inline_2182_JSCompiler_inline_result$jscomp$431$$);
      $JSCompiler_temp$jscomp$430_temp__5823__auto__$jscomp$22$$ = $APP.$cljs$core$truth_$$($G__47638$jscomp$inline_2182_JSCompiler_inline_result$jscomp$431$$) ? $APP.$cljs$core$cons$$($APP.$cljs$core$first$$($JSCompiler_temp$jscomp$430_temp__5823__auto__$jscomp$22$$), $cljs$core$take_while$cljs$0core$0IFn$0_invoke$0arity$02$$($pred$jscomp$14$$, $APP.$cljs$core$rest$$($JSCompiler_temp$jscomp$430_temp__5823__auto__$jscomp$22$$))) : null;
    } else {
      $JSCompiler_temp$jscomp$430_temp__5823__auto__$jscomp$22$$ = null;
    }
    return $JSCompiler_temp$jscomp$430_temp__5823__auto__$jscomp$22$$;
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
$amp$hooks$use_scroll_to$use_scroll_to_top$cljs$0core$0IFn$0_invoke$0arity$0variadic$$ = function() {
  var $G__50961_map__50960__$1$$ = $APP.$cljs$core$__destructure_map$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$402$duration$$, 1], null)])), $duration$jscomp$3$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$03$$($G__50961_map__50960__$1$$, $APP.$cljs$cst$402$duration$$, 0.35);
  $G__50961_map__50960__$1$$ = function() {
    function $G__50980$$($var_args$jscomp$418$$) {
      var $G__50982__i__$jscomp$349$$ = null;
      if (arguments.length > 0) {
        $G__50982__i__$jscomp$349$$ = 0;
        for (var $G__50982__a$$ = Array(arguments.length - 0); $G__50982__i__$jscomp$349$$ < $G__50982__a$$.length;) {
          $G__50982__a$$[$G__50982__i__$jscomp$349$$] = arguments[$G__50982__i__$jscomp$349$$ + 0], ++$G__50982__i__$jscomp$349$$;
        }
        $G__50982__i__$jscomp$349$$ = new $APP.$cljs$core$IndexedSeq$$($G__50982__a$$, 0, null);
      }
      return $G__50980__delegate$$.call(this, $G__50982__i__$jscomp$349$$);
    }
    function $G__50980__delegate$$() {
      $APP.$cljs$core$tap_GT_$$(new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$25$type$$, $APP.$cljs$cst$407$scroll_to_top$$, $APP.$cljs$cst$402$duration$$, $duration$jscomp$3$$], null));
      return $APP.$module$node_modules$gsap$dist$gsap$$.gsap.to(window, $APP.$cljs$core$clj__GT_js$$(new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$402$duration$$, $duration$jscomp$3$$, $APP.$cljs$cst$403$scrollTo$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$404$y$$, 0], null), $APP.$cljs$cst$406$ease$$, "power2.inOut"], null)));
    }
    $G__50980$$.$cljs$lang$maxFixedArity$ = 0;
    $G__50980$$.$cljs$lang$applyTo$ = function($_$jscomp$350_arglist__50983$$) {
      $_$jscomp$350_arglist__50983$$ = $APP.$cljs$core$seq$$($_$jscomp$350_arglist__50983$$);
      return $G__50980__delegate$$($_$jscomp$350_arglist__50983$$);
    };
    $G__50980$$.$cljs$core$IFn$_invoke$arity$variadic$ = $G__50980__delegate$$;
    return $G__50980$$;
  }();
  var $G__50962$$ = [];
  return $APP.$helix$hooks$raw_use_callback$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$hooks$raw_use_callback$$.$cljs$core$IFn$_invoke$arity$2$($G__50961_map__50960__$1$$, $G__50962$$) : $APP.$helix$hooks$raw_use_callback$$.call(null, $G__50961_map__50960__$1$$, $G__50962$$);
};
$amp$pages$budget$committee$preview$$ = function($G__75607_map__75601_props__41575__auto__$jscomp$36_vec__75598$$, $maybe_ref__41576__auto__$jscomp$36$$) {
  $G__75607_map__75601_props__41575__auto__$jscomp$36_vec__75598$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__75607_map__75601_props__41575__auto__$jscomp$36_vec__75598$$), $maybe_ref__41576__auto__$jscomp$36$$], null);
  $G__75607_map__75601_props__41575__auto__$jscomp$36_vec__75598$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__75607_map__75601_props__41575__auto__$jscomp$36_vec__75598$$, 0, null);
  $APP.$cljs$core$__destructure_map$$($G__75607_map__75601_props__41575__auto__$jscomp$36_vec__75598$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__75607_map__75601_props__41575__auto__$jscomp$36_vec__75598$$ = function() {
    return {className:"space-y-3 p-4", children:function() {
      var $G__75615$$ = function() {
        return {children:[function() {
          var $G__75623$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:"To realize an undertaking of this scale and international significance, an "};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__75623$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__75623$$);
        }(), function() {
          var $G__75631$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:"urgent fundraising program"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__75631$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__75631$$);
        }(), function() {
          var $G__75637$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:" is greatly needed."};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__75637$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__75637$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__75615$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__75615$$);
    }()};
  }();
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__75607_map__75601_props__41575__auto__$jscomp$36_vec__75598$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__75607_map__75601_props__41575__auto__$jscomp$36_vec__75598$$);
};
$amp$pages$budget$committee$details$$ = function($G__75714_map__75707_props__41575__auto__$jscomp$37_vec__75704$$, $maybe_ref__41576__auto__$jscomp$37$$) {
  $G__75714_map__75707_props__41575__auto__$jscomp$37_vec__75704$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__75714_map__75707_props__41575__auto__$jscomp$37_vec__75704$$), $maybe_ref__41576__auto__$jscomp$37$$], null);
  $G__75714_map__75707_props__41575__auto__$jscomp$37_vec__75704$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__75714_map__75707_props__41575__auto__$jscomp$37_vec__75704$$, 0, null);
  $APP.$cljs$core$__destructure_map$$($G__75714_map__75707_props__41575__auto__$jscomp$37_vec__75704$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__75714_map__75707_props__41575__auto__$jscomp$37_vec__75704$$ = function() {
    return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["p-4", $APP.$amp$styles$body_lg$$]))), children:[function() {
      var $G__75723$$ = function() {
        return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["italic text-lg text-red-300"]))), children:["*Note: As Armenia does not maintain a permanent national pavilion in Venice, the Pavilion must be realized through a rented venue—a standard and widely accepted model for many non-permanent participating nations. ", "The selected site operates at a base rental cost of approximately ", 
        function() {
          var $G__75731$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$value_currency$$), children:"$145,600"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__75731$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__75731$$);
        }(), function() {
          var $G__75741$$ = {className:"text-red-300", children:[", covering the entire six-month duration of the Exhibition, and represents a strategic and fiscally responsible choice given its immediate proximity to the Arsenale proper. ", "Comparable venues just minutes away within the Arsenale or Giardini typically begin at "]};
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__75741$$) : $APP.$helix$core$jsxs$$.call(null, "span", $G__75741$$);
        }(), function() {
          var $G__75749$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$value_currency$$), children:"$450,000 or more"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__75749$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__75749$$);
        }(), function() {
          var $G__75757$$ = {className:"text-red-300", children:[" in base rent alone—often closer to €450,000+—excluding construction, staffing, technical services, and operational expenses. ", "In this context, the Pavilion’s location offers extraordinary visibility and access at a fraction of the cost, positioning Armenia at the heart of the Biennale circuit while maintaining responsible stewardship of resources."]};
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__75757$$) : $APP.$helix$core$jsxs$$.call(null, "span", $G__75757$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__75723$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__75723$$);
    }(), function() {
      var $G__75765$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["mt-6 text-red-500 text-2xl"]))), children:"To realize an undertaking of this scale and international significance, an urgent fundraising program is greatly needed."};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__75765$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__75765$$);
    }(), function() {
      var $G__75773$$ = function() {
        return {className:"mt-6", children:[function() {
          var $G__75781$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-medium", "text-slate-900  dark:text-slate-100"]))), children:["At present we are starting with a small committee including members ", "Archbishop Hovnan Derderian, Tony Shafrazi, Tina Chakarian, Rafi Ourfalian, Khachik Khudikyan, ", "Andranik Torosyan, Aram Alajajian, and Vik Hovsepian, "]};
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__75781$$) : $APP.$helix$core$jsxs$$.call(null, "span", $G__75781$$);
        }(), function() {
          var $G__75789$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-bold", "text-rose-600   dark:text-rose-400"]))), children:"hopefully encouraging others more able to realize our goal."};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__75789$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__75789$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__75773$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__75773$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__75714_map__75707_props__41575__auto__$jscomp$37_vec__75704$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__75714_map__75707_props__41575__auto__$jscomp$37_vec__75704$$);
};
$amp$pages$budget$committee$committee_member_card$$ = function($G__75825_map__75823_map__75823__$1_props__41575__auto__$jscomp$38_vec__75820$$, $maybe_ref__41576__auto__$jscomp$38$$) {
  $G__75825_map__75823_map__75823__$1_props__41575__auto__$jscomp$38_vec__75820$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__75825_map__75823_map__75823__$1_props__41575__auto__$jscomp$38_vec__75820$$), $maybe_ref__41576__auto__$jscomp$38$$], null);
  $G__75825_map__75823_map__75823__$1_props__41575__auto__$jscomp$38_vec__75820$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__75825_map__75823_map__75823__$1_props__41575__auto__$jscomp$38_vec__75820$$, 0, null);
  $G__75825_map__75823_map__75823__$1_props__41575__auto__$jscomp$38_vec__75820$$ = $APP.$cljs$core$__destructure_map$$($G__75825_map__75823_map__75823__$1_props__41575__auto__$jscomp$38_vec__75820$$);
  var $name$jscomp$197$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__75825_map__75823_map__75823__$1_props__41575__auto__$jscomp$38_vec__75820$$, $APP.$cljs$cst$165$name$$), $role$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__75825_map__75823_map__75823__$1_props__41575__auto__$jscomp$38_vec__75820$$, $APP.$cljs$cst$790$role$$), $img_src$jscomp$5$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__75825_map__75823_map__75823__$1_props__41575__auto__$jscomp$38_vec__75820$$, 
  $APP.$cljs$cst$724$img_src$$);
  $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__75825_map__75823_map__75823__$1_props__41575__auto__$jscomp$38_vec__75820$$, $APP.$cljs$cst$707$credit$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $overlay_styles$$ = $APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-mono", "bg-white/70 px-1 text-slate-500"]));
  $G__75825_map__75823_map__75823__$1_props__41575__auto__$jscomp$38_vec__75820$$ = function() {
    return {className:"w-[150px] aspect-[0.7] relative ml-2", children:function() {
      var $G__75829$$ = function() {
        return {"img-src":$img_src$jscomp$5$$, fit:"crop", "aspect-ratio":0.7, "active?":!0, children:function() {
          var $G__75834$$ = function() {
            return {className:"", children:[function() {
              var $G__75838_G__75842$jscomp$inline_3672_JSCompiler_inline_result$jscomp$inline_3671$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["italic", "text-xs"]))), children:$name$jscomp$197$$};
              $G__75838_G__75842$jscomp$inline_3672_JSCompiler_inline_result$jscomp$inline_3671$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__75838_G__75842$jscomp$inline_3672_JSCompiler_inline_result$jscomp$inline_3671$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__75838_G__75842$jscomp$inline_3672_JSCompiler_inline_result$jscomp$inline_3671$$);
              $G__75838_G__75842$jscomp$inline_3672_JSCompiler_inline_result$jscomp$inline_3671$$ = {position:$APP.$cljs$cst$696$tl$$, rotation:90, "parent-styles":$overlay_styles$$, children:$G__75838_G__75842$jscomp$inline_3672_JSCompiler_inline_result$jscomp$inline_3671$$};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$ui$overlays$caption_overlay$$, $G__75838_G__75842$jscomp$inline_3672_JSCompiler_inline_result$jscomp$inline_3671$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$ui$overlays$caption_overlay$$, $G__75838_G__75842$jscomp$inline_3672_JSCompiler_inline_result$jscomp$inline_3671$$);
            }(), function() {
              var $G__75847_G__75851$jscomp$inline_3675_JSCompiler_inline_result$jscomp$inline_3674$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["italic", "text-xs"]))), children:$role$$};
              $G__75847_G__75851$jscomp$inline_3675_JSCompiler_inline_result$jscomp$inline_3674$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__75847_G__75851$jscomp$inline_3675_JSCompiler_inline_result$jscomp$inline_3674$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__75847_G__75851$jscomp$inline_3675_JSCompiler_inline_result$jscomp$inline_3674$$);
              $G__75847_G__75851$jscomp$inline_3675_JSCompiler_inline_result$jscomp$inline_3674$$ = {position:$APP.$cljs$cst$701$bl$$, "parent-styles":$overlay_styles$$, children:$G__75847_G__75851$jscomp$inline_3675_JSCompiler_inline_result$jscomp$inline_3674$$};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$ui$overlays$caption_overlay$$, $G__75847_G__75851$jscomp$inline_3675_JSCompiler_inline_result$jscomp$inline_3674$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$ui$overlays$caption_overlay$$, $G__75847_G__75851$jscomp$inline_3675_JSCompiler_inline_result$jscomp$inline_3674$$);
            }()]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__75834$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__75834$$);
        }()};
      }();
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$ui$image_overlay$lazy_image_with_overlay$$, $G__75829$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$ui$image_overlay$lazy_image_with_overlay$$, $G__75829$$);
    }()};
  }();
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__75825_map__75823_map__75823__$1_props__41575__auto__$jscomp$38_vec__75820$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__75825_map__75823_map__75823__$1_props__41575__auto__$jscomp$38_vec__75820$$);
};
$amp$pages$budget$committee$committee_gallery$$ = function($G__75896_map__75890_props__41575__auto__$jscomp$39_vec__75887$$, $maybe_ref__41576__auto__$jscomp$39$$) {
  $G__75896_map__75890_props__41575__auto__$jscomp$39_vec__75887$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__75896_map__75890_props__41575__auto__$jscomp$39_vec__75887$$), $maybe_ref__41576__auto__$jscomp$39$$], null);
  $G__75896_map__75890_props__41575__auto__$jscomp$39_vec__75887$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__75896_map__75890_props__41575__auto__$jscomp$39_vec__75887$$, 0, null);
  $APP.$cljs$core$__destructure_map$$($G__75896_map__75890_props__41575__auto__$jscomp$39_vec__75887$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__75896_map__75890_props__41575__auto__$jscomp$39_vec__75887$$ = function() {
    return {className:"p-4 w-full", children:function() {
      var $G__75904$$ = function() {
        return {children:[function() {
          var $G__75912_G__75918$jscomp$inline_3678$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$label_muted$$), children:"Committee Members"};
          $G__75912_G__75918$jscomp$inline_3678$$ = {className:"pl-4", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("h3", $G__75912_G__75918$jscomp$inline_3678$$) : $APP.$helix$core$jsx$$.call(null, "h3", $G__75912_G__75918$jscomp$inline_3678$$)};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__75912_G__75918$jscomp$inline_3678$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__75912_G__75918$jscomp$inline_3678$$);
        }(), function() {
          var $G__75933$$ = function() {
            return {className:"mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4", children:$APP.$cljs$core$map$$.$cljs$core$IFn$_invoke$arity$2$(function($name$jscomp$198_p__75942$$) {
              var $credit$jscomp$4_map__75943__$1$$ = $APP.$cljs$core$__destructure_map$$($name$jscomp$198_p__75942$$);
              $name$jscomp$198_p__75942$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($credit$jscomp$4_map__75943__$1$$, $APP.$cljs$cst$165$name$$);
              var $G__75949_G__75958$jscomp$inline_3681_JSCompiler_temp$jscomp$inline_3680_role$jscomp$1$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($credit$jscomp$4_map__75943__$1$$, $APP.$cljs$cst$790$role$$), $img_src$jscomp$6$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($credit$jscomp$4_map__75943__$1$$, $APP.$cljs$cst$724$img_src$$);
              $credit$jscomp$4_map__75943__$1$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($credit$jscomp$4_map__75943__$1$$, $APP.$cljs$cst$707$credit$$);
              $APP.$cljs$core$truth_$$($img_src$jscomp$6$$) ? ($G__75949_G__75958$jscomp$inline_3681_JSCompiler_temp$jscomp$inline_3680_role$jscomp$1$$ = {name:$name$jscomp$198_p__75942$$, role:$G__75949_G__75958$jscomp$inline_3681_JSCompiler_temp$jscomp$inline_3680_role$jscomp$1$$, "img-src":$img_src$jscomp$6$$, credit:$credit$jscomp$4_map__75943__$1$$}, $G__75949_G__75958$jscomp$inline_3681_JSCompiler_temp$jscomp$inline_3680_role$jscomp$1$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? 
              $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$pages$budget$committee$committee_member_card$$, $G__75949_G__75958$jscomp$inline_3681_JSCompiler_temp$jscomp$inline_3680_role$jscomp$1$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$budget$committee$committee_member_card$$, $G__75949_G__75958$jscomp$inline_3681_JSCompiler_temp$jscomp$inline_3680_role$jscomp$1$$)) : $G__75949_G__75958$jscomp$inline_3681_JSCompiler_temp$jscomp$inline_3680_role$jscomp$1$$ = null;
              $G__75949_G__75958$jscomp$inline_3681_JSCompiler_temp$jscomp$inline_3680_role$jscomp$1$$ = {children:$G__75949_G__75958$jscomp$inline_3681_JSCompiler_temp$jscomp$inline_3680_role$jscomp$1$$};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$("div", $G__75949_G__75958$jscomp$inline_3681_JSCompiler_temp$jscomp$inline_3680_role$jscomp$1$$, $name$jscomp$198_p__75942$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__75949_G__75958$jscomp$inline_3681_JSCompiler_temp$jscomp$inline_3680_role$jscomp$1$$, $name$jscomp$198_p__75942$$);
            }, $amp$pages$budget$committee$committee_members$$)};
          }();
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__75933$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__75933$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__75904$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__75904$$);
    }()};
  }();
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__75896_map__75890_props__41575__auto__$jscomp$39_vec__75887$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__75896_map__75890_props__41575__auto__$jscomp$39_vec__75887$$);
};
$amp$pages$budget$committee$committee$$ = function($G__75992_map__75983_map__75983__$1_props__41575__auto__$jscomp$40_vec__75980$$, $maybe_ref__41576__auto__$jscomp$40$$) {
  $G__75992_map__75983_map__75983__$1_props__41575__auto__$jscomp$40_vec__75980$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__75992_map__75983_map__75983__$1_props__41575__auto__$jscomp$40_vec__75980$$), $maybe_ref__41576__auto__$jscomp$40$$], null);
  $G__75992_map__75983_map__75983__$1_props__41575__auto__$jscomp$40_vec__75980$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__75992_map__75983_map__75983__$1_props__41575__auto__$jscomp$40_vec__75980$$, 0, null);
  $G__75992_map__75983_map__75983__$1_props__41575__auto__$jscomp$40_vec__75980$$ = $APP.$cljs$core$__destructure_map$$($G__75992_map__75983_map__75983__$1_props__41575__auto__$jscomp$40_vec__75980$$);
  var $id$jscomp$84$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__75992_map__75983_map__75983__$1_props__41575__auto__$jscomp$40_vec__75980$$, $APP.$cljs$cst$285$id$$), $subtitle$jscomp$2$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__75992_map__75983_map__75983__$1_props__41575__auto__$jscomp$40_vec__75980$$, $APP.$cljs$cst$770$subtitle$$), $title$jscomp$21$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__75992_map__75983_map__75983__$1_props__41575__auto__$jscomp$40_vec__75980$$, 
  $APP.$cljs$cst$287$title$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__75992_map__75983_map__75983__$1_props__41575__auto__$jscomp$40_vec__75980$$ = function() {
    return {id:$id$jscomp$84$$, className:"space-y-4", children:[function() {
      var $G__75998$$ = {idx:5, "section-hint":$subtitle$jscomp$2$$, title:$title$jscomp$21$$, "expand-button-label":"Read more", "preview-text":$amp$pages$budget$committee$preview$$, "full-text":$amp$pages$budget$committee$details$$};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$ui$expandable_text$expandable_text_area_2$$, $G__75998$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$ui$expandable_text$expandable_text_area_2$$, $G__75998$$);
    }(), function() {
      var $G__76004$$ = {children:$amp$pages$budget$committee$committee_members$$};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$pages$budget$committee$committee_gallery$$, $G__76004$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$budget$committee$committee_gallery$$, $G__76004$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("section", $G__75992_map__75983_map__75983__$1_props__41575__auto__$jscomp$40_vec__75980$$) : $APP.$helix$core$jsxs$$.call(null, "section", $G__75992_map__75983_map__75983__$1_props__41575__auto__$jscomp$40_vec__75980$$);
};
$amp$pages$budget$table$format_currency$$ = function($amount$$) {
  return "$" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$(Math.round($amount$$).toLocaleString("en-US"));
};
$amp$pages$budget$table$sub_total_all_sections$$ = function($cost_data$$) {
  return $APP.$cljs$core$reduce$cljs$0core$0IFn$0_invoke$0arity$02$$($APP.$cljs$core$_PLUS_$$, $APP.$cljs$core$map$$.$cljs$core$IFn$_invoke$arity$2$(function($p1__75971_SHARP__tax_rate$jscomp$inline_2189$$) {
    var $item_details$jscomp$inline_2187_sub_total$jscomp$inline_2188$$ = $cljs$cst$792$details$$.$cljs$core$IFn$_invoke$arity$1$($p1__75971_SHARP__tax_rate$jscomp$inline_2189$$);
    $item_details$jscomp$inline_2187_sub_total$jscomp$inline_2188$$ = $APP.$cljs$core$reduce$cljs$0core$0IFn$0_invoke$0arity$02$$($APP.$cljs$core$_PLUS_$$, $APP.$cljs$core$map$$.$cljs$core$IFn$_invoke$arity$2$($cljs$cst$791$amount$$, $item_details$jscomp$inline_2187_sub_total$jscomp$inline_2188$$));
    $p1__75971_SHARP__tax_rate$jscomp$inline_2189$$ = $cljs$cst$793$rate$$.$cljs$core$IFn$_invoke$arity$1$($cljs$cst$794$tax$$.$cljs$core$IFn$_invoke$arity$1$($p1__75971_SHARP__tax_rate$jscomp$inline_2189$$));
    return ($p1__75971_SHARP__tax_rate$jscomp$inline_2189$$ > 0 ? $p1__75971_SHARP__tax_rate$jscomp$inline_2189$$ * $item_details$jscomp$inline_2187_sub_total$jscomp$inline_2188$$ : 0) + $item_details$jscomp$inline_2187_sub_total$jscomp$inline_2188$$;
  }, $cost_data$$));
};
$amp$pages$budget$table$total_section$$ = function($G__76046_cost_data$jscomp$1_map__76044_map__76044__$1_props__41575__auto__$jscomp$41_vec__76041$$, $maybe_ref__41576__auto__$jscomp$41$$) {
  $G__76046_cost_data$jscomp$1_map__76044_map__76044__$1_props__41575__auto__$jscomp$41_vec__76041$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__76046_cost_data$jscomp$1_map__76044_map__76044__$1_props__41575__auto__$jscomp$41_vec__76041$$), $maybe_ref__41576__auto__$jscomp$41$$], null);
  $G__76046_cost_data$jscomp$1_map__76044_map__76044__$1_props__41575__auto__$jscomp$41_vec__76041$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__76046_cost_data$jscomp$1_map__76044_map__76044__$1_props__41575__auto__$jscomp$41_vec__76041$$, 0, null);
  $G__76046_cost_data$jscomp$1_map__76044_map__76044__$1_props__41575__auto__$jscomp$41_vec__76041$$ = $APP.$cljs$core$__destructure_map$$($G__76046_cost_data$jscomp$1_map__76044_map__76044__$1_props__41575__auto__$jscomp$41_vec__76041$$);
  $G__76046_cost_data$jscomp$1_map__76044_map__76044__$1_props__41575__auto__$jscomp$41_vec__76041$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__76046_cost_data$jscomp$1_map__76044_map__76044__$1_props__41575__auto__$jscomp$41_vec__76041$$, $cljs$cst$795$cost_data$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $sub_total$jscomp$1$$ = $amp$pages$budget$table$sub_total_all_sections$$($G__76046_cost_data$jscomp$1_map__76044_map__76044__$1_props__41575__auto__$jscomp$41_vec__76041$$), $grand_total$$ = $sub_total$jscomp$1$$ + 66821;
  $G__76046_cost_data$jscomp$1_map__76044_map__76044__$1_props__41575__auto__$jscomp$41_vec__76041$$ = function() {
    return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["flex flex-col", "font-mono"]))), children:[function() {
      var $G__76051$$ = function() {
        return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["bg-white        dark:bg-slate-900", "text-slate-900  dark:text-slate-100", "flex items-baseline px-4 py-2 border-t-2", "border-pink-500/70 dark:border-pink-500/70"]))), children:[function() {
          var $G__76055$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["text-sm", "uppercase", "tracking-wider", "text-slate-600  dark:text-slate-400", "flex-1 min-w-0"]))), children:"Sub total"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("h3", $G__76055$$) : $APP.$helix$core$jsx$$.call(null, "h3", $G__76055$$);
        }(), function() {
          var $G__76091_G__76095$jscomp$inline_3684$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-semibold", "text-slate-700  dark:text-slate-300"]))), children:$amp$pages$budget$table$format_currency$$($sub_total$jscomp$1$$)};
          $G__76091_G__76095$jscomp$inline_3684$$ = {className:"flex items-baseline justify-end shrink-0 ml-2", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__76091_G__76095$jscomp$inline_3684$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__76091_G__76095$jscomp$inline_3684$$)};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__76091_G__76095$jscomp$inline_3684$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__76091_G__76095$jscomp$inline_3684$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("li", $G__76051$$) : $APP.$helix$core$jsxs$$.call(null, "li", $G__76051$$);
    }(), function() {
      var $G__76101$jscomp$1$$ = function() {
        return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["bg-slate-100/60 dark:bg-slate-800/60", "text-slate-900  dark:text-slate-100", "flex items-baseline px-4 py-2"]))), children:[function() {
          var $G__76107$jscomp$1$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["text-sm", "uppercase", "tracking-wider", "text-slate-600  dark:text-slate-400", "flex-1 min-w-0"]))), children:"Contingency 5%"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("h3", $G__76107$jscomp$1$$) : $APP.$helix$core$jsx$$.call(null, "h3", $G__76107$jscomp$1$$);
        }(), function() {
          var $G__76120_G__76126$jscomp$inline_3687$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-semibold", "text-slate-700  dark:text-slate-300"]))), children:$amp$pages$budget$table$format_currency$$(66821)};
          $G__76120_G__76126$jscomp$inline_3687$$ = {className:"flex items-baseline justify-end shrink-0 ml-2", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__76120_G__76126$jscomp$inline_3687$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__76120_G__76126$jscomp$inline_3687$$)};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__76120_G__76126$jscomp$inline_3687$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__76120_G__76126$jscomp$inline_3687$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("li", $G__76101$jscomp$1$$) : $APP.$helix$core$jsxs$$.call(null, "li", $G__76101$jscomp$1$$);
    }(), function() {
      var $G__76133$jscomp$1$$ = function() {
        return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["bg-white        dark:bg-slate-900", "text-slate-900  dark:text-slate-100", "flex items-baseline px-4 py-4 border-t border-pink-500/40"]))), children:[function() {
          var $G__76142$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-bold", "text-lg", "uppercase", "tracking-wider", "flex-1 min-w-0"]))), children:"TOTAL"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("h3", $G__76142$$) : $APP.$helix$core$jsx$$.call(null, "h3", $G__76142$$);
        }(), function() {
          var $G__76156$jscomp$1_G__76164$jscomp$inline_3690$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$value_lg$$), children:$amp$pages$budget$table$format_currency$$($grand_total$$)};
          $G__76156$jscomp$1_G__76164$jscomp$inline_3690$$ = {className:"flex items-baseline justify-end shrink-0 ml-2", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__76156$jscomp$1_G__76164$jscomp$inline_3690$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__76156$jscomp$1_G__76164$jscomp$inline_3690$$)};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__76156$jscomp$1_G__76164$jscomp$inline_3690$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__76156$jscomp$1_G__76164$jscomp$inline_3690$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("li", $G__76133$jscomp$1$$) : $APP.$helix$core$jsxs$$.call(null, "li", $G__76133$jscomp$1$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__76046_cost_data$jscomp$1_map__76044_map__76044__$1_props__41575__auto__$jscomp$41_vec__76041$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__76046_cost_data$jscomp$1_map__76044_map__76044__$1_props__41575__auto__$jscomp$41_vec__76041$$);
};
$amp$pages$budget$table$pad_two_digits$$ = function($n$jscomp$225$$) {
  return $n$jscomp$225$$ < 10 ? "0" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($n$jscomp$225$$) : "" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($n$jscomp$225$$);
};
$amp$pages$budget$table$detail_line_item$$ = function($G__76290_G__76340_map__76269_map__76269__$1_props__41575__auto__$jscomp$42_vec__76266$$, $maybe_ref__41576__auto__$jscomp$42$$) {
  $G__76290_G__76340_map__76269_map__76269__$1_props__41575__auto__$jscomp$42_vec__76266$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__76290_G__76340_map__76269_map__76269__$1_props__41575__auto__$jscomp$42_vec__76266$$), $maybe_ref__41576__auto__$jscomp$42$$], null);
  $G__76290_G__76340_map__76269_map__76269__$1_props__41575__auto__$jscomp$42_vec__76266$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__76290_G__76340_map__76269_map__76269__$1_props__41575__auto__$jscomp$42_vec__76266$$, 0, null);
  $G__76290_G__76340_map__76269_map__76269__$1_props__41575__auto__$jscomp$42_vec__76266$$ = $APP.$cljs$core$__destructure_map$$($G__76290_G__76340_map__76269_map__76269__$1_props__41575__auto__$jscomp$42_vec__76266$$);
  var $idx$jscomp$70$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__76290_G__76340_map__76269_map__76269__$1_props__41575__auto__$jscomp$42_vec__76266$$, $APP.$cljs$cst$744$idx$$), $detail$jscomp$7$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__76290_G__76340_map__76269_map__76269__$1_props__41575__auto__$jscomp$42_vec__76266$$, $APP.$cljs$cst$625$detail$$), $set_expanded_items$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__76290_G__76340_map__76269_map__76269__$1_props__41575__auto__$jscomp$42_vec__76266$$, 
  $cljs$cst$796$set_expanded_items$$), $expanded_items$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__76290_G__76340_map__76269_map__76269__$1_props__41575__auto__$jscomp$42_vec__76266$$, $cljs$cst$797$expanded_items$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $item_id$$ = "detail-item-" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($idx$jscomp$70$$), $description$jscomp$4$$ = $cljs$cst$798$description$$.$cljs$core$IFn$_invoke$arity$1$($detail$jscomp$7$$), $is_odd_detail_QMARK_$$ = !$APP.$cljs$core$even_QMARK_$$($idx$jscomp$70$$);
  if ($APP.$cljs$core$truth_$$($description$jscomp$4$$)) {
    return $G__76290_G__76340_map__76269_map__76269__$1_props__41575__auto__$jscomp$42_vec__76266$$ = function() {
      return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["cursor-pointer overflow-hidden", "font-mono", $is_odd_detail_QMARK_$$ ? "bg-slate-100/60 dark:bg-slate-800/60" : null]))), onClick:function() {
        function $G__76293$$($prev$jscomp$11$$) {
          return $APP.$cljs$core$truth_$$($prev$jscomp$11$$.$cljs$core$IFn$_invoke$arity$1$ ? $prev$jscomp$11$$.$cljs$core$IFn$_invoke$arity$1$($item_id$$) : $prev$jscomp$11$$.call(null, $item_id$$)) ? $APP.$cljs$core$disj$$.$cljs$core$IFn$_invoke$arity$2$($prev$jscomp$11$$, $item_id$$) : $APP.$cljs$core$conj$$.$cljs$core$IFn$_invoke$arity$2$($prev$jscomp$11$$, $item_id$$);
        }
        return $set_expanded_items$$.$cljs$core$IFn$_invoke$arity$1$ ? $set_expanded_items$$.$cljs$core$IFn$_invoke$arity$1$($G__76293$$) : $set_expanded_items$$.call(null, $G__76293$$);
      }, children:[function() {
        var $G__76295$$ = function() {
          return {className:"px-8 py-2 flex justify-between items-center", children:[function() {
            var $G__76299$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["text-[11px]", "text-slate-400  dark:text-slate-600", "mr-4"]))), children:"" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($amp$pages$budget$table$pad_two_digits$$($idx$jscomp$70$$ + 1)) + "."};
            return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__76299$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__76299$$);
          }(), function() {
            var $G__76304_JSCompiler_temp_const$jscomp$inline_3899$$ = $APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["justify-start flex-1 flex items-center", "text-sm", "text-slate-700  dark:text-slate-300"])));
            var $JSCompiler_temp_const$jscomp$inline_3900$$ = $APP.$cljs$cst$287$title$$.$cljs$core$IFn$_invoke$arity$1$($detail$jscomp$7$$);
            var $G__76310$jscomp$inline_3902_JSCompiler_inline_result$jscomp$inline_3901_JSCompiler_temp_const$jscomp$inline_3903$$ = $APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["w-4 h-4 ml-2", "text-slate-400  dark:text-slate-600"])));
            var $G__76314$jscomp$inline_3905_JSCompiler_inline_result$jscomp$inline_3904$$ = {};
            $G__76314$jscomp$inline_3905_JSCompiler_inline_result$jscomp$inline_3904$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$ui$icons$InformationCircle$$, $G__76314$jscomp$inline_3905_JSCompiler_inline_result$jscomp$inline_3904$$) : $APP.$helix$core$jsx$$.call(null, $amp$ui$icons$InformationCircle$$, $G__76314$jscomp$inline_3905_JSCompiler_inline_result$jscomp$inline_3904$$);
            $G__76310$jscomp$inline_3902_JSCompiler_inline_result$jscomp$inline_3901_JSCompiler_temp_const$jscomp$inline_3903$$ = {className:$G__76310$jscomp$inline_3902_JSCompiler_inline_result$jscomp$inline_3901_JSCompiler_temp_const$jscomp$inline_3903$$, children:$G__76314$jscomp$inline_3905_JSCompiler_inline_result$jscomp$inline_3904$$};
            $G__76310$jscomp$inline_3902_JSCompiler_inline_result$jscomp$inline_3901_JSCompiler_temp_const$jscomp$inline_3903$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__76310$jscomp$inline_3902_JSCompiler_inline_result$jscomp$inline_3901_JSCompiler_temp_const$jscomp$inline_3903$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__76310$jscomp$inline_3902_JSCompiler_inline_result$jscomp$inline_3901_JSCompiler_temp_const$jscomp$inline_3903$$);
            $G__76304_JSCompiler_temp_const$jscomp$inline_3899$$ = {className:$G__76304_JSCompiler_temp_const$jscomp$inline_3899$$, children:[$JSCompiler_temp_const$jscomp$inline_3900$$, $G__76310$jscomp$inline_3902_JSCompiler_inline_result$jscomp$inline_3901_JSCompiler_temp_const$jscomp$inline_3903$$]};
            return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__76304_JSCompiler_temp_const$jscomp$inline_3899$$) : $APP.$helix$core$jsxs$$.call(null, "span", $G__76304_JSCompiler_temp_const$jscomp$inline_3899$$);
          }(), function() {
            var $G__76320$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$value_sm$$), children:$amp$pages$budget$table$format_currency$$($cljs$cst$791$amount$$.$cljs$core$IFn$_invoke$arity$1$($detail$jscomp$7$$))};
            return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__76320$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__76320$$);
          }()]};
        }();
        return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__76295$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__76295$$);
      }(), $APP.$cljs$core$truth_$$($expanded_items$$.$cljs$core$IFn$_invoke$arity$1$ ? $expanded_items$$.$cljs$core$IFn$_invoke$arity$1$($item_id$$) : $expanded_items$$.call(null, $item_id$$)) ? function() {
        var $G__76324_G__76328$jscomp$inline_3985_G__76332$jscomp$inline_3986_JSCompiler_temp_const$jscomp$inline_3987$$ = $APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_sm$$, "bg-slate-100/60 dark:bg-slate-800/60"])));
        var $G__76336$jscomp$inline_3989_JSCompiler_inline_result$jscomp$inline_3988$$ = {className:"px-6 py-4", children:$description$jscomp$4$$};
        $G__76336$jscomp$inline_3989_JSCompiler_inline_result$jscomp$inline_3988$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__76336$jscomp$inline_3989_JSCompiler_inline_result$jscomp$inline_3988$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__76336$jscomp$inline_3989_JSCompiler_inline_result$jscomp$inline_3988$$);
        $G__76324_G__76328$jscomp$inline_3985_G__76332$jscomp$inline_3986_JSCompiler_temp_const$jscomp$inline_3987$$ = {className:$G__76324_G__76328$jscomp$inline_3985_G__76332$jscomp$inline_3986_JSCompiler_temp_const$jscomp$inline_3987$$, children:$G__76336$jscomp$inline_3989_JSCompiler_inline_result$jscomp$inline_3988$$};
        $G__76324_G__76328$jscomp$inline_3985_G__76332$jscomp$inline_3986_JSCompiler_temp_const$jscomp$inline_3987$$ = {className:"", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__76324_G__76328$jscomp$inline_3985_G__76332$jscomp$inline_3986_JSCompiler_temp_const$jscomp$inline_3987$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__76324_G__76328$jscomp$inline_3985_G__76332$jscomp$inline_3986_JSCompiler_temp_const$jscomp$inline_3987$$)};
        $G__76324_G__76328$jscomp$inline_3985_G__76332$jscomp$inline_3986_JSCompiler_temp_const$jscomp$inline_3987$$ = {className:"border-l-2 border-pink-500/30", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__76324_G__76328$jscomp$inline_3985_G__76332$jscomp$inline_3986_JSCompiler_temp_const$jscomp$inline_3987$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__76324_G__76328$jscomp$inline_3985_G__76332$jscomp$inline_3986_JSCompiler_temp_const$jscomp$inline_3987$$)};
        return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__76324_G__76328$jscomp$inline_3985_G__76332$jscomp$inline_3986_JSCompiler_temp_const$jscomp$inline_3987$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__76324_G__76328$jscomp$inline_3985_G__76332$jscomp$inline_3986_JSCompiler_temp_const$jscomp$inline_3987$$);
      }() : null]};
    }(), $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("li", $G__76290_G__76340_map__76269_map__76269__$1_props__41575__auto__$jscomp$42_vec__76266$$) : $APP.$helix$core$jsxs$$.call(null, "li", $G__76290_G__76340_map__76269_map__76269__$1_props__41575__auto__$jscomp$42_vec__76266$$);
  }
  $G__76290_G__76340_map__76269_map__76269__$1_props__41575__auto__$jscomp$42_vec__76266$$ = function() {
    return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-mono", $is_odd_detail_QMARK_$$ ? "bg-slate-100/60 dark:bg-slate-800/60" : null]))), children:function() {
      var $G__76344$$ = function() {
        return {className:"px-8 py-2 flex justify-between items-center", children:[function() {
          var $G__76348$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["text-[11px]", "text-slate-400  dark:text-slate-600", "mr-4"]))), children:"" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($amp$pages$budget$table$pad_two_digits$$($idx$jscomp$70$$ + 1)) + "."};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__76348$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__76348$$);
        }(), function() {
          var $G__76353$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["justify-start flex-1", "text-sm", "text-slate-700  dark:text-slate-300"]))), children:$APP.$cljs$cst$287$title$$.$cljs$core$IFn$_invoke$arity$1$($detail$jscomp$7$$)};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__76353$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__76353$$);
        }(), function() {
          var $G__76357$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$value_sm$$), children:$amp$pages$budget$table$format_currency$$($cljs$cst$791$amount$$.$cljs$core$IFn$_invoke$arity$1$($detail$jscomp$7$$))};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__76357$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__76357$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__76344$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__76344$$);
    }()};
  }();
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("li", $G__76290_G__76340_map__76269_map__76269__$1_props__41575__auto__$jscomp$42_vec__76266$$) : $APP.$helix$core$jsx$$.call(null, "li", $G__76290_G__76340_map__76269_map__76269__$1_props__41575__auto__$jscomp$42_vec__76266$$);
};
$amp$pages$budget$table$details__GT_render_items$$ = function($G__77514_details$jscomp$4$$) {
  for (var $G__77513_items$jscomp$8$$ = $G__77514_details$jscomp$4$$, $idx$jscomp$71$$ = 0, $prev_group$$ = null, $result$jscomp$135$$ = $APP.$cljs$core$PersistentVector$EMPTY$$;;) {
    if ($APP.$cljs$core$empty_QMARK_$$($G__77513_items$jscomp$8$$)) {
      return $result$jscomp$135$$;
    }
    var $detail$jscomp$8$$ = $APP.$cljs$core$first$$($G__77513_items$jscomp$8$$), $curr_group$$ = $APP.$cljs$cst$578$group$$.$cljs$core$IFn$_invoke$arity$1$($detail$jscomp$8$$), $show_header_QMARK_$$ = function() {
      var $and__5140__auto__$jscomp$87$$ = $curr_group$$;
      return $APP.$cljs$core$truth_$$($and__5140__auto__$jscomp$87$$) ? $APP.$cljs$core$not_EQ_$cljs$0core$0IFn$0_invoke$0arity$02$$($curr_group$$, $prev_group$$) : $and__5140__auto__$jscomp$87$$;
    }();
    $G__77513_items$jscomp$8$$ = $APP.$cljs$core$rest$$($G__77513_items$jscomp$8$$);
    $G__77514_details$jscomp$4$$ = $idx$jscomp$71$$ + 1;
    var $G__77515$$ = $curr_group$$, $G__77516$$ = function() {
      var $G__76364_G__76364__$1$$ = $result$jscomp$135$$;
      $G__76364_G__76364__$1$$ = $APP.$cljs$core$truth_$$($show_header_QMARK_$$) ? $APP.$cljs$core$conj$$.$cljs$core$IFn$_invoke$arity$2$($G__76364_G__76364__$1$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$25$type$$, $APP.$cljs$cst$238$header$$, $APP.$cljs$cst$408$label$$, $curr_group$$, $APP.$cljs$cst$99$key$$, "gh-" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($idx$jscomp$71$$)], null)) : $G__76364_G__76364__$1$$;
      return $APP.$cljs$core$conj$$.$cljs$core$IFn$_invoke$arity$2$($G__76364_G__76364__$1$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$25$type$$, $APP.$cljs$cst$625$detail$$, $APP.$cljs$cst$625$detail$$, $detail$jscomp$8$$, $APP.$cljs$cst$744$idx$$, $idx$jscomp$71$$, $APP.$cljs$cst$99$key$$, "d-" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($idx$jscomp$71$$)], null));
    }();
    $idx$jscomp$71$$ = $G__77514_details$jscomp$4$$;
    $prev_group$$ = $G__77515$$;
    $result$jscomp$135$$ = $G__77516$$;
  }
};
$amp$pages$budget$table$section_line_item$$ = function($G__76446_details$jscomp$5_map__76428_map__76428__$1_props__41575__auto__$jscomp$43_vec__76425$$, $maybe_ref__41576__auto__$jscomp$43_tax_rate$jscomp$1$$) {
  $G__76446_details$jscomp$5_map__76428_map__76428__$1_props__41575__auto__$jscomp$43_vec__76425$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__76446_details$jscomp$5_map__76428_map__76428__$1_props__41575__auto__$jscomp$43_vec__76425$$), $maybe_ref__41576__auto__$jscomp$43_tax_rate$jscomp$1$$], null);
  $G__76446_details$jscomp$5_map__76428_map__76428__$1_props__41575__auto__$jscomp$43_vec__76425$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__76446_details$jscomp$5_map__76428_map__76428__$1_props__41575__auto__$jscomp$43_vec__76425$$, 0, null);
  $G__76446_details$jscomp$5_map__76428_map__76428__$1_props__41575__auto__$jscomp$43_vec__76425$$ = $APP.$cljs$core$__destructure_map$$($G__76446_details$jscomp$5_map__76428_map__76428__$1_props__41575__auto__$jscomp$43_vec__76425$$);
  var $idx$jscomp$72$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__76446_details$jscomp$5_map__76428_map__76428__$1_props__41575__auto__$jscomp$43_vec__76425$$, $APP.$cljs$cst$744$idx$$), $item$jscomp$38$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__76446_details$jscomp$5_map__76428_map__76428__$1_props__41575__auto__$jscomp$43_vec__76425$$, $cljs$cst$799$item$$), $set_expanded_items$jscomp$1$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__76446_details$jscomp$5_map__76428_map__76428__$1_props__41575__auto__$jscomp$43_vec__76425$$, 
  $cljs$cst$796$set_expanded_items$$), $expanded_items$jscomp$1$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__76446_details$jscomp$5_map__76428_map__76428__$1_props__41575__auto__$jscomp$43_vec__76425$$, $cljs$cst$797$expanded_items$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $section_ref$$ = $APP.$helix$hooks$use_ref$$("section-" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($idx$jscomp$72$$)), $scroll_to_ref$$ = $amp$hooks$use_scroll_to$use_scroll_to_ref$$(), $item_id$jscomp$1$$ = "item-" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($idx$jscomp$72$$);
  $G__76446_details$jscomp$5_map__76428_map__76428__$1_props__41575__auto__$jscomp$43_vec__76425$$ = $cljs$cst$792$details$$.$cljs$core$IFn$_invoke$arity$1$($item$jscomp$38$$);
  var $sub_total$jscomp$2$$ = $APP.$cljs$core$reduce$cljs$0core$0IFn$0_invoke$0arity$02$$($APP.$cljs$core$_PLUS_$$, $APP.$cljs$core$map$$.$cljs$core$IFn$_invoke$arity$2$($cljs$cst$791$amount$$, $G__76446_details$jscomp$5_map__76428_map__76428__$1_props__41575__auto__$jscomp$43_vec__76425$$));
  $maybe_ref__41576__auto__$jscomp$43_tax_rate$jscomp$1$$ = $cljs$cst$793$rate$$.$cljs$core$IFn$_invoke$arity$1$($cljs$cst$794$tax$$.$cljs$core$IFn$_invoke$arity$1$($item$jscomp$38$$));
  var $tax_label$$ = $APP.$cljs$cst$408$label$$.$cljs$core$IFn$_invoke$arity$1$($cljs$cst$794$tax$$.$cljs$core$IFn$_invoke$arity$1$($item$jscomp$38$$)), $tax_total$jscomp$1$$ = $sub_total$jscomp$2$$ * $maybe_ref__41576__auto__$jscomp$43_tax_rate$jscomp$1$$, $has_tax_QMARK_$jscomp$1$$ = $maybe_ref__41576__auto__$jscomp$43_tax_rate$jscomp$1$$ > 0, $total$jscomp$4$$ = $sub_total$jscomp$2$$ + $tax_total$jscomp$1$$, $is_odd$$ = !$APP.$cljs$core$even_QMARK_$$($idx$jscomp$72$$), $render_items$$ = $amp$pages$budget$table$details__GT_render_items$$($G__76446_details$jscomp$5_map__76428_map__76428__$1_props__41575__auto__$jscomp$43_vec__76425$$);
  $G__76446_details$jscomp$5_map__76428_map__76428__$1_props__41575__auto__$jscomp$43_vec__76425$$ = function() {
    return {ref:$section_ref$$, className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["overflow-hidden", "font-mono", $is_odd$$ ? "bg-white        dark:bg-slate-900" : "bg-slate-100/60 dark:bg-slate-800/60"]))), children:[function() {
      var $G__76454$$ = function() {
        return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["flex flex-wrap items-baseline px-4 py-3 gap-y-1 cursor-pointer transition-colors", "hover:bg-slate-800/50 dark:hover:bg-slate-800/50"]))), onClick:function() {
          function $G__76461$$($prev$jscomp$12$$) {
            return $APP.$cljs$core$truth_$$($prev$jscomp$12$$.$cljs$core$IFn$_invoke$arity$1$ ? $prev$jscomp$12$$.$cljs$core$IFn$_invoke$arity$1$($item_id$jscomp$1$$) : $prev$jscomp$12$$.call(null, $item_id$jscomp$1$$)) ? $APP.$cljs$core$disj$$.$cljs$core$IFn$_invoke$arity$2$($prev$jscomp$12$$, $item_id$jscomp$1$$) : $APP.$cljs$core$conj$$.$cljs$core$IFn$_invoke$arity$2$($prev$jscomp$12$$, $item_id$jscomp$1$$);
          }
          return $set_expanded_items$jscomp$1$$.$cljs$core$IFn$_invoke$arity$1$ ? $set_expanded_items$jscomp$1$$.$cljs$core$IFn$_invoke$arity$1$($G__76461$$) : $set_expanded_items$jscomp$1$$.call(null, $G__76461$$);
        }, children:[function() {
          var $G__76471$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$("font-display;font-semibold;uppercase;tracking-wide;text-slate-700  dark:text-slate-300;text-base sm:text-lg flex-1 min-w-0".split(";")))), children:"" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($idx$jscomp$72$$ + 1) + ". " + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($APP.$cljs$cst$287$title$$.$cljs$core$IFn$_invoke$arity$1$($item$jscomp$38$$))};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("h3", $G__76471$$) : $APP.$helix$core$jsx$$.call(null, "h3", $G__76471$$);
        }(), function() {
          var $G__76483$$ = function() {
            return {className:"flex items-baseline justify-end shrink-0 ml-2", children:[function() {
              var $G__76491$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-semibold", "text-indigo-600 dark:text-indigo-300", "text-sm", "sm:text-base"]))), children:$amp$pages$budget$table$format_currency$$($total$jscomp$4$$)};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__76491$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__76491$$);
            }(), function() {
              var $G__76499_JSCompiler_temp_const$jscomp$inline_3334$$ = $APP.$helix$impl$props$normalize_class$$("w-4 h-4 ml-3 transition-transform " + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$("text-slate-500  dark:text-slate-500") + " " + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($APP.$cljs$core$truth_$$($expanded_items$jscomp$1$$.$cljs$core$IFn$_invoke$arity$1$ ? $expanded_items$jscomp$1$$.$cljs$core$IFn$_invoke$arity$1$($item_id$jscomp$1$$) : $expanded_items$jscomp$1$$.call(null, 
              $item_id$jscomp$1$$)) ? "rotate-90" : null));
              var $G__76556$jscomp$inline_3336_JSCompiler_inline_result$jscomp$inline_3335$$ = {};
              $G__76556$jscomp$inline_3336_JSCompiler_inline_result$jscomp$inline_3335$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$ui$icons$ChevronRightIcon$$, $G__76556$jscomp$inline_3336_JSCompiler_inline_result$jscomp$inline_3335$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$ui$icons$ChevronRightIcon$$, $G__76556$jscomp$inline_3336_JSCompiler_inline_result$jscomp$inline_3335$$);
              $G__76499_JSCompiler_temp_const$jscomp$inline_3334$$ = {className:$G__76499_JSCompiler_temp_const$jscomp$inline_3334$$, children:$G__76556$jscomp$inline_3336_JSCompiler_inline_result$jscomp$inline_3335$$};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__76499_JSCompiler_temp_const$jscomp$inline_3334$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__76499_JSCompiler_temp_const$jscomp$inline_3334$$);
            }()]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__76483$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__76483$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__76454$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__76454$$);
    }(), $APP.$cljs$core$truth_$$($expanded_items$jscomp$1$$.$cljs$core$IFn$_invoke$arity$1$ ? $expanded_items$jscomp$1$$.$cljs$core$IFn$_invoke$arity$1$($item_id$jscomp$1$$) : $expanded_items$jscomp$1$$.call(null, $item_id$jscomp$1$$)) ? function() {
      var $G__76617$$ = function() {
        return {className:"border-l-2 border-pink-500/30", children:[function() {
          var $G__76629_JSCompiler_temp_const$jscomp$inline_3701$$ = $APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_sm$$, "bg-slate-100/60 dark:bg-slate-800/60"])));
          var $G__76637$jscomp$inline_3703_JSCompiler_inline_result$jscomp$inline_3702$$ = {className:"px-8 py-4", children:$cljs$cst$798$description$$.$cljs$core$IFn$_invoke$arity$1$($item$jscomp$38$$)};
          $G__76637$jscomp$inline_3703_JSCompiler_inline_result$jscomp$inline_3702$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__76637$jscomp$inline_3703_JSCompiler_inline_result$jscomp$inline_3702$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__76637$jscomp$inline_3703_JSCompiler_inline_result$jscomp$inline_3702$$);
          $G__76629_JSCompiler_temp_const$jscomp$inline_3701$$ = {className:$G__76629_JSCompiler_temp_const$jscomp$inline_3701$$, children:$G__76637$jscomp$inline_3703_JSCompiler_inline_result$jscomp$inline_3702$$};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__76629_JSCompiler_temp_const$jscomp$inline_3701$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__76629_JSCompiler_temp_const$jscomp$inline_3701$$);
        }(), function() {
          var $G__76661$$ = function() {
            return {children:$APP.$cljs$core$map$$.$cljs$core$IFn$_invoke$arity$2$(function($G__76702_G__76729_ri$$) {
              var $G__76670_G__76670__$1_G__76701_G__76728_JSCompiler_temp_const$jscomp$inline_3705$$ = $APP.$cljs$cst$25$type$$.$cljs$core$IFn$_invoke$arity$1$($G__76702_G__76729_ri$$);
              $G__76670_G__76670__$1_G__76701_G__76728_JSCompiler_temp_const$jscomp$inline_3705$$ = $G__76670_G__76670__$1_G__76701_G__76728_JSCompiler_temp_const$jscomp$inline_3705$$ instanceof $APP.$cljs$core$Keyword$$ ? $G__76670_G__76670__$1_G__76701_G__76728_JSCompiler_temp_const$jscomp$inline_3705$$.$fqn$ : null;
              switch($G__76670_G__76670__$1_G__76701_G__76728_JSCompiler_temp_const$jscomp$inline_3705$$) {
                case "header":
                  $G__76670_G__76670__$1_G__76701_G__76728_JSCompiler_temp_const$jscomp$inline_3705$$ = $APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$("px-8 py-2 border-b border-slate-700/40;bg-white        dark:bg-slate-900;text-pink-700/50 dark:text-pink-300/50;text-sm sm:text-base;font-semibold;uppercase;tracking-[0.15em]".split(";"))));
                  var $G__76717$jscomp$inline_3707_JSCompiler_inline_result$jscomp$inline_3706$$ = {children:$APP.$cljs$cst$408$label$$.$cljs$core$IFn$_invoke$arity$1$($G__76702_G__76729_ri$$)};
                  $G__76717$jscomp$inline_3707_JSCompiler_inline_result$jscomp$inline_3706$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__76717$jscomp$inline_3707_JSCompiler_inline_result$jscomp$inline_3706$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__76717$jscomp$inline_3707_JSCompiler_inline_result$jscomp$inline_3706$$);
                  $G__76670_G__76670__$1_G__76701_G__76728_JSCompiler_temp_const$jscomp$inline_3705$$ = {className:$G__76670_G__76670__$1_G__76701_G__76728_JSCompiler_temp_const$jscomp$inline_3705$$, children:$G__76717$jscomp$inline_3707_JSCompiler_inline_result$jscomp$inline_3706$$};
                  $G__76702_G__76729_ri$$ = $APP.$cljs$cst$99$key$$.$cljs$core$IFn$_invoke$arity$1$($G__76702_G__76729_ri$$);
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$("div", $G__76670_G__76670__$1_G__76701_G__76728_JSCompiler_temp_const$jscomp$inline_3705$$, $G__76702_G__76729_ri$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__76670_G__76670__$1_G__76701_G__76728_JSCompiler_temp_const$jscomp$inline_3705$$, $G__76702_G__76729_ri$$);
                case "detail":
                  return $G__76670_G__76670__$1_G__76701_G__76728_JSCompiler_temp_const$jscomp$inline_3705$$ = {idx:$APP.$cljs$cst$744$idx$$.$cljs$core$IFn$_invoke$arity$1$($G__76702_G__76729_ri$$), detail:$APP.$cljs$cst$625$detail$$.$cljs$core$IFn$_invoke$arity$1$($G__76702_G__76729_ri$$), "set-expanded-items":$set_expanded_items$jscomp$1$$, "expanded-items":$expanded_items$jscomp$1$$}, $G__76702_G__76729_ri$$ = $APP.$cljs$cst$99$key$$.$cljs$core$IFn$_invoke$arity$1$($G__76702_G__76729_ri$$), $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$ ? 
                  $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$($amp$pages$budget$table$detail_line_item$$, $G__76670_G__76670__$1_G__76701_G__76728_JSCompiler_temp_const$jscomp$inline_3705$$, $G__76702_G__76729_ri$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$budget$table$detail_line_item$$, $G__76670_G__76670__$1_G__76701_G__76728_JSCompiler_temp_const$jscomp$inline_3705$$, $G__76702_G__76729_ri$$);
                default:
                  throw Error("No matching clause: " + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($G__76670_G__76670__$1_G__76701_G__76728_JSCompiler_temp_const$jscomp$inline_3705$$));
              }
            }, $render_items$$)};
          }();
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("ol", $G__76661$$) : $APP.$helix$core$jsx$$.call(null, "ol", $G__76661$$);
        }(), function() {
          var $G__76736$$ = function() {
            return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["bg-white        dark:bg-slate-900", "flex flex-col border-t border-slate-200 dark:border-slate-800"]))), children:[$has_tax_QMARK_$jscomp$1$$ ? function() {
              var $G__76742$$ = function() {
                return {children:[function() {
                  var $G__76746$$ = function() {
                    return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-semibold", "text-sm", "px-8 py-2 flex"]))), children:[function() {
                      var $G__76752$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["text-[10px]", "text-slate-400  dark:text-slate-600"]))), children:"-"};
                      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__76752$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__76752$$);
                    }(), function() {
                      var $G__76760$$ = function() {
                        return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["flex justify-between ml-8 w-full", "text-slate-700  dark:text-slate-300"]))), children:[function() {
                          var $G__76767$$ = {children:"Sub total: "};
                          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__76767$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__76767$$);
                        }(), function() {
                          var $G__76775$$ = {children:$amp$pages$budget$table$format_currency$$($sub_total$jscomp$2$$)};
                          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__76775$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__76775$$);
                        }()]};
                      }();
                      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__76760$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__76760$$);
                    }()]};
                  }();
                  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__76746$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__76746$$);
                }(), function() {
                  var $G__76790$$ = function() {
                    return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-semibold", "text-sm", "px-8 py-2 flex"]))), children:[function() {
                      var $G__76856$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["text-[10px]", "text-slate-400  dark:text-slate-600"]))), children:"-"};
                      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__76856$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__76856$$);
                    }(), function() {
                      var $G__76897$$ = function() {
                        return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["flex justify-between ml-8 w-full", "text-amber-600/80 dark:text-amber-300/80"]))), children:[function() {
                          var $G__76918$$ = {children:$tax_label$$};
                          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__76918$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__76918$$);
                        }(), function() {
                          var $G__76937$$ = {children:$amp$pages$budget$table$format_currency$$($tax_total$jscomp$1$$)};
                          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__76937$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__76937$$);
                        }()]};
                      }();
                      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__76897$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__76897$$);
                    }()]};
                  }();
                  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__76790$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__76790$$);
                }()]};
              }();
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__76742$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__76742$$);
            }() : null, function() {
              var $G__76954$$ = function() {
                return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-bold", "text-base", "bg-slate-50 dark:bg-slate-950 px-8 py-4 flex border-t border-pink-500/20"]))), children:[function() {
                  var $G__76958$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["text-[10px]", "text-slate-400  dark:text-slate-600"]))), children:"-"};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__76958$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__76958$$);
                }(), function() {
                  var $G__76971$$ = function() {
                    return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["flex justify-between ml-8 w-full", "text-pink-700   dark:text-pink-300"]))), children:[function() {
                      var $G__76983$$ = {children:"Total: "};
                      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__76983$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__76983$$);
                    }(), function() {
                      var $G__77006$$ = {children:$amp$pages$budget$table$format_currency$$($total$jscomp$4$$)};
                      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__77006$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__77006$$);
                    }()]};
                  }();
                  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__76971$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__76971$$);
                }()]};
              }();
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__76954$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__76954$$);
            }(), function() {
              var $G__77040$$ = function() {
                return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$btn_text$$, "bg-slate-100/60 dark:bg-slate-800/60", "flex p-3 justify-center items-center cursor-pointer"]))), onClick:function() {
                  function $G__77060_77694$$($prev$jscomp$13$$) {
                    return $APP.$cljs$core$truth_$$($prev$jscomp$13$$.$cljs$core$IFn$_invoke$arity$1$ ? $prev$jscomp$13$$.$cljs$core$IFn$_invoke$arity$1$($item_id$jscomp$1$$) : $prev$jscomp$13$$.call(null, $item_id$jscomp$1$$)) ? $APP.$cljs$core$disj$$.$cljs$core$IFn$_invoke$arity$2$($prev$jscomp$13$$, $item_id$jscomp$1$$) : $APP.$cljs$core$conj$$.$cljs$core$IFn$_invoke$arity$2$($prev$jscomp$13$$, $item_id$jscomp$1$$);
                  }
                  $set_expanded_items$jscomp$1$$.$cljs$core$IFn$_invoke$arity$1$ ? $set_expanded_items$jscomp$1$$.$cljs$core$IFn$_invoke$arity$1$($G__77060_77694$$) : $set_expanded_items$jscomp$1$$.call(null, $G__77060_77694$$);
                  return $scroll_to_ref$$.$cljs$core$IFn$_invoke$arity$1$ ? $scroll_to_ref$$.$cljs$core$IFn$_invoke$arity$1$($section_ref$$) : $scroll_to_ref$$.call(null, $section_ref$$);
                }, children:["CLOSE SECTION", function() {
                  var $G__77089_JSCompiler_temp_const$jscomp$inline_3342$$ = $APP.$helix$impl$props$normalize_class$$("w-4 h-4 transition-transform ml-2 " + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($APP.$cljs$core$truth_$$($expanded_items$jscomp$1$$.$cljs$core$IFn$_invoke$arity$1$ ? $expanded_items$jscomp$1$$.$cljs$core$IFn$_invoke$arity$1$($item_id$jscomp$1$$) : $expanded_items$jscomp$1$$.call(null, $item_id$jscomp$1$$)) ? "-rotate-90" : null));
                  var $G__77162$jscomp$inline_3344_JSCompiler_inline_result$jscomp$inline_3343$$ = {};
                  $G__77162$jscomp$inline_3344_JSCompiler_inline_result$jscomp$inline_3343$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$ui$icons$ChevronRightIcon$$, $G__77162$jscomp$inline_3344_JSCompiler_inline_result$jscomp$inline_3343$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$ui$icons$ChevronRightIcon$$, $G__77162$jscomp$inline_3344_JSCompiler_inline_result$jscomp$inline_3343$$);
                  $G__77089_JSCompiler_temp_const$jscomp$inline_3342$$ = {className:$G__77089_JSCompiler_temp_const$jscomp$inline_3342$$, children:$G__77162$jscomp$inline_3344_JSCompiler_inline_result$jscomp$inline_3343$$};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__77089_JSCompiler_temp_const$jscomp$inline_3342$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__77089_JSCompiler_temp_const$jscomp$inline_3342$$);
                }()]};
              }();
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__77040$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__77040$$);
            }()]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__76736$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__76736$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__76617$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__76617$$);
    }() : null]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("li", $G__76446_details$jscomp$5_map__76428_map__76428__$1_props__41575__auto__$jscomp$43_vec__76425$$) : $APP.$helix$core$jsxs$$.call(null, "li", $G__76446_details$jscomp$5_map__76428_map__76428__$1_props__41575__auto__$jscomp$43_vec__76425$$);
};
$amp$pages$budget$table$budget_table$$ = function($G__77212_map__77203_map__77203__$1_props__41575__auto__$jscomp$44_vec__77200_vec__77206$$, $maybe_ref__41576__auto__$jscomp$44$$) {
  $G__77212_map__77203_map__77203__$1_props__41575__auto__$jscomp$44_vec__77200_vec__77206$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__77212_map__77203_map__77203__$1_props__41575__auto__$jscomp$44_vec__77200_vec__77206$$), $maybe_ref__41576__auto__$jscomp$44$$], null);
  $G__77212_map__77203_map__77203__$1_props__41575__auto__$jscomp$44_vec__77200_vec__77206$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__77212_map__77203_map__77203__$1_props__41575__auto__$jscomp$44_vec__77200_vec__77206$$, 0, null);
  $G__77212_map__77203_map__77203__$1_props__41575__auto__$jscomp$44_vec__77200_vec__77206$$ = $APP.$cljs$core$__destructure_map$$($G__77212_map__77203_map__77203__$1_props__41575__auto__$jscomp$44_vec__77200_vec__77206$$);
  var $cost_data$jscomp$2$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__77212_map__77203_map__77203__$1_props__41575__auto__$jscomp$44_vec__77200_vec__77206$$, $cljs$cst$795$cost_data$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__77212_map__77203_map__77203__$1_props__41575__auto__$jscomp$44_vec__77200_vec__77206$$ = $APP.$helix$hooks$use_state$$($APP.$cljs$core$PersistentHashSet$EMPTY$$);
  var $expanded_items$jscomp$2$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__77212_map__77203_map__77203__$1_props__41575__auto__$jscomp$44_vec__77200_vec__77206$$, 0, null), $set_expanded_items$jscomp$2$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__77212_map__77203_map__77203__$1_props__41575__auto__$jscomp$44_vec__77200_vec__77206$$, 1, null);
  $G__77212_map__77203_map__77203__$1_props__41575__auto__$jscomp$44_vec__77200_vec__77206$$ = function() {
    return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["w-full", "text-slate-950  dark:text-white", "font-mono"]))), children:[$APP.$cljs$core$map_indexed$cljs$0core$0IFn$0_invoke$0arity$02$$(function($G__77229_idx$jscomp$73$$, $G__77227_item$jscomp$39$$) {
      $G__77227_item$jscomp$39$$ = {idx:$G__77229_idx$jscomp$73$$, item:$G__77227_item$jscomp$39$$, "set-expanded-items":$set_expanded_items$jscomp$2$$, "expanded-items":$expanded_items$jscomp$2$$};
      $G__77229_idx$jscomp$73$$ = "" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($G__77229_idx$jscomp$73$$) + "-section";
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$($amp$pages$budget$table$section_line_item$$, $G__77227_item$jscomp$39$$, $G__77229_idx$jscomp$73$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$budget$table$section_line_item$$, $G__77227_item$jscomp$39$$, $G__77229_idx$jscomp$73$$);
    }, $cost_data$jscomp$2$$), function() {
      var $G__77234$$ = {"cost-data":$cost_data$jscomp$2$$};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$pages$budget$table$total_section$$, $G__77234$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$budget$table$total_section$$, $G__77234$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("ol", $G__77212_map__77203_map__77203__$1_props__41575__auto__$jscomp$44_vec__77200_vec__77206$$) : $APP.$helix$core$jsxs$$.call(null, "ol", $G__77212_map__77203_map__77203__$1_props__41575__auto__$jscomp$44_vec__77200_vec__77206$$);
};
$amp$pages$budget$cost_breakdown$preview$$ = function($G__77564_map__77537_props__41575__auto__$jscomp$45_vec__77534$$, $maybe_ref__41576__auto__$jscomp$45$$) {
  $G__77564_map__77537_props__41575__auto__$jscomp$45_vec__77534$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__77564_map__77537_props__41575__auto__$jscomp$45_vec__77534$$), $maybe_ref__41576__auto__$jscomp$45$$], null);
  $G__77564_map__77537_props__41575__auto__$jscomp$45_vec__77534$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__77564_map__77537_props__41575__auto__$jscomp$45_vec__77534$$, 0, null);
  $APP.$cljs$core$__destructure_map$$($G__77564_map__77537_props__41575__auto__$jscomp$45_vec__77534$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__77564_map__77537_props__41575__auto__$jscomp$45_vec__77534$$ = function() {
    return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_lg$$, "p-4"]))), children:[function() {
      var $G__77591$$ = {children:["The Armenia Pavilion at the 61st Venice Biennale is a major international cultural undertaking—", "structured to meet the standards of the most rigorous national presentations. "]};
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__77591$$) : $APP.$helix$core$jsxs$$.call(null, "span", $G__77591$$);
    }(), function() {
      var $G__77621$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:"With a total budget of approximately "};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__77621$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__77621$$);
    }(), function() {
      var $G__77654$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:" ("};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__77654$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__77654$$);
    }(), function() {
      var $G__77670$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$value_currency$$), children:"$1,6M USD"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__77670$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__77670$$);
    }(), function() {
      var $G__77697$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:"), the financial framework covers the full scope of "};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__77697$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__77697$$);
    }(), function() {
      var $G__77702$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:"production, installation, operations, communications,"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__77702$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__77702$$);
    }(), function() {
      var $G__77718$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:" and "};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__77718$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__77718$$);
    }(), function() {
      var $G__77758$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:"documentation"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__77758$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__77758$$);
    }(), function() {
      var $G__77772$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:". "};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__77772$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__77772$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__77564_map__77537_props__41575__auto__$jscomp$45_vec__77534$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__77564_map__77537_props__41575__auto__$jscomp$45_vec__77534$$);
};
$amp$pages$budget$cost_breakdown$details$$ = function($G__77784_map__77782_props__41575__auto__$jscomp$46_vec__77779$$, $maybe_ref__41576__auto__$jscomp$46$$) {
  $G__77784_map__77782_props__41575__auto__$jscomp$46_vec__77779$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__77784_map__77782_props__41575__auto__$jscomp$46_vec__77779$$), $maybe_ref__41576__auto__$jscomp$46$$], null);
  $G__77784_map__77782_props__41575__auto__$jscomp$46_vec__77779$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__77784_map__77782_props__41575__auto__$jscomp$46_vec__77779$$, 0, null);
  $APP.$cljs$core$__destructure_map$$($G__77784_map__77782_props__41575__auto__$jscomp$46_vec__77779$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__77784_map__77782_props__41575__auto__$jscomp$46_vec__77779$$ = function() {
    return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_lg$$, "p-4"]))), children:[function() {
      var $G__77788$$ = {children:["The Armenia Pavilion at the 61st Venice Biennale is a major international cultural undertaking—", "structured to meet the standards of the most rigorous national presentations. "]};
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__77788$$) : $APP.$helix$core$jsxs$$.call(null, "span", $G__77788$$);
    }(), function() {
      var $G__77792$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:"With a total budget of approximately "};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__77792$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__77792$$);
    }(), function() {
      var $G__77796$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:" ("};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__77796$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__77796$$);
    }(), function() {
      var $G__77800$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$value_currency$$), children:"$1,6M USD"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__77800$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__77800$$);
    }(), function() {
      var $G__77804$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:"), the financial framework covers the full scope of "};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__77804$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__77804$$);
    }(), function() {
      var $G__77808$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:"production, installation, operations, communications,"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__77808$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__77808$$);
    }(), function() {
      var $G__77812$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:" and "};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__77812$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__77812$$);
    }(), function() {
      var $G__77816$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:"documentation"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__77816$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__77816$$);
    }(), function() {
      var $G__77820$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:". "};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__77820$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__77820$$);
    }(), function() {
      var $G__77824$$ = {className:"block my-6", children:["As Armenia does not maintain a permanent national pavilion in Venice, a venue must be secured through rental—", "as is customary for many smaller and non-permanent participating nations. "]};
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__77824$$) : $APP.$helix$core$jsxs$$.call(null, "span", $G__77824$$);
    }(), function() {
      var $G__77828$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:"The selected site is located outside the Biennale's primary zones, enabling a significantly lower base rent—approximately "};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__77828$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__77828$$);
    }(), function() {
      var $G__77832$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$value_currency$$), children:"$145,600"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__77832$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__77832$$);
    }(), function() {
      var $G__77836$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:"—while remaining fully accredited and visible within the official Biennale structure. "};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__77836$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__77836$$);
    }(), function() {
      var $G__77840$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:"By contrast, venues within the Giardini or Arsenale—when available—typically begin at "};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__77840$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__77840$$);
    }(), function() {
      var $G__77844$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$value_currency$$), children:"$450,000"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__77844$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__77844$$);
    }(), function() {
      var $G__77848$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:" in base rent, before construction, staffing, utilities, logistics, and operating overhead. "};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__77848$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__77848$$);
    }(), function() {
      var $G__77852$$ = function() {
        return {className:"mt-6", children:[function() {
          var $G__77856$$ = {className:"mt-6", children:"Crucially, the nature of "};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__77856$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__77856$$);
        }(), function() {
          var $G__77860$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:"THE STUDIO"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__77860$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__77860$$);
        }(), function() {
          var $G__77864$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:" makes this venue choice not only strategic but essential. "};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__77864$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__77864$$);
        }(), function() {
          var $G__77868$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:"The work is conceived to be produced, refined, and evolved "};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__77868$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__77868$$);
        }(), function() {
          var $G__77872$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-semibold", "italic", "text-slate-900  dark:text-slate-100"]))), children:"on site"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__77872$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__77872$$);
        }(), function() {
          var $G__77876$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:", allowing the Pavilion to function simultaneously as exhibition space and working studio. "};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__77876$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__77876$$);
        }(), function() {
          var $G__77880$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:["This approach meets extremely tight production and installation deadlines while maintaining full artistic and technical control—", "conditions that would be far more difficult, costly, or even impossible under a traditional off-site fabrication and transport model. "]};
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__77880$$) : $APP.$helix$core$jsxs$$.call(null, "span", $G__77880$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__77852$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__77852$$);
    }(), function() {
      var $G__77884$$ = {className:"block my-6", children:"Rather than directing the majority of resources toward a single, fixed monumental installation, the artist and team have deliberately taken another route. "};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__77884$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__77884$$);
    }(), function() {
      var $G__77888$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:"By producing the work on site, the Pavilion avoids the need for a pre-fabricated "};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__77888$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__77888$$);
    }(), function() {
      var $G__77892$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-semibold", "italic", "text-slate-900  dark:text-slate-100"]))), children:"“grand object”"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__77892$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__77892$$);
    }(), function() {
      var $G__77896$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:" altogether. "};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__77896$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__77896$$);
    }(), function() {
      var $G__77900$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:"This decision reduces fabrication, crating, international shipping, and risk-related costs, while aligning more precisely with the broader conceptual goals: "};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__77900$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__77900$$);
    }(), function() {
      var $G__77904$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:"process over spectacle, presence over monumentality,"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__77904$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__77904$$);
    }(), function() {
      var $G__77908$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:" and "};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__77908$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__77908$$);
    }(), function() {
      var $G__77912$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:"sustained making over static display"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__77912$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__77912$$);
    }(), function() {
      var $G__77916$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:". "};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__77916$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__77916$$);
    }(), function() {
      var $G__77920$$ = function() {
        return {className:"my-6", children:[function() {
          var $G__77924$$ = {className:"", children:"In this sense, cost efficiency and artistic rigor are not in opposition but mutually reinforcing. "};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__77924$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__77924$$);
        }(), function() {
          var $G__77928$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:"The Pavilion's structure distributes resources across time, labor, materials, and public engagement—rather than concentrating them into a single object whose expense would be driven largely by transport and scale rather than meaning. "};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__77928$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__77928$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__77920$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__77920$$);
    }(), function() {
      var $G__77932$$ = function() {
        return {className:"block my-6", children:[function() {
          var $G__77936$$ = {className:"", children:"Despite these efficiencies, the overall cost of operating in Venice during the Biennale remains high. "};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__77936$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__77936$$);
        }(), function() {
          var $G__77940$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:"Venice's unique geography, limited infrastructure, and extraordinary demand elevate costs across all categories—logistics, storage, labor, accommodations, and technical services. "};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__77940$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__77940$$);
        }(), function() {
          var $G__77944$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:"These conditions are shared by all national pavilions and reflect the Biennale's position as the most visible international platform in contemporary art. "};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__77944$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__77944$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__77932$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__77932$$);
    }(), function() {
      var $G__77948$$ = {className:"mt-6", children:"Unlike projects that culminate at opening, this Pavilion is conceived as a"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__77948$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__77948$$);
    }(), function() {
      var $G__77952$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-semibold", "italic", "text-slate-900  dark:text-slate-100"]))), children:" seven-month operational commitment"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__77952$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__77952$$);
    }(), function() {
      var $G__77956$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:": a living environment that functions simultaneously as exhibition space, working studio, public forum, and diplomatic platform—requiring sustained staffing, materials, logistics, and institutional oversight throughout the duration of the Biennale. "};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__77956$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__77956$$);
    }(), function() {
      var $G__77960$$ = {className:"block mt-6", children:"Significant investment secures venue readiness and regulatory compliance, supports curatorial and administrative leadership, funds museum-scale fabrication and specialized craft, and addresses Venice-specific transport, storage, installation, and reverse logistics. "};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__77960$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__77960$$);
    }(), function() {
      var $G__77964$$ = function() {
        return {className:"block mt-6", children:[function() {
          var $G__77968$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:"THE STUDIO"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__77968$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__77968$$);
        }(), function() {
          var $G__77972$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:" is budgeted as an ongoing on-site operation, ensuring continuous execution, maintenance, and evolution of the work across the exhibition period—distinguishing the Pavilion from static presentations. "};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__77972$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__77972$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__77964$$) : $APP.$helix$core$jsxs$$.call(null, "span", $G__77964$$);
    }(), function() {
      var $G__77976$$ = {className:"block mt-6", children:"Public visibility and long-term legacy are strengthened through opening week programs, marketing and public relations, publication, and comprehensive film and photographic documentation—ensuring that the Pavilion's impact extends into international media, scholarship, and institutional archives. "};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__77976$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__77976$$);
    }(), function() {
      var $G__77980$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_closing$$, "block mt-6"]))), children:"A responsible contingency is included to accommodate the realities of an extended international project operating across jurisdictions, timelines, and currencies—ensuring stability, accountability, and the successful delivery of Armenia's national presentation on the world stage."};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__77980$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__77980$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__77784_map__77782_props__41575__auto__$jscomp$46_vec__77779$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__77784_map__77782_props__41575__auto__$jscomp$46_vec__77779$$);
};
$amp$pages$budget$cost_breakdown$footer$$ = function($G__77991_G__77995$jscomp$inline_3710_map__77989_props__41575__auto__$jscomp$47_vec__77986$$, $maybe_ref__41576__auto__$jscomp$47$$) {
  $G__77991_G__77995$jscomp$inline_3710_map__77989_props__41575__auto__$jscomp$47_vec__77986$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__77991_G__77995$jscomp$inline_3710_map__77989_props__41575__auto__$jscomp$47_vec__77986$$), $maybe_ref__41576__auto__$jscomp$47$$], null);
  $G__77991_G__77995$jscomp$inline_3710_map__77989_props__41575__auto__$jscomp$47_vec__77986$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__77991_G__77995$jscomp$inline_3710_map__77989_props__41575__auto__$jscomp$47_vec__77986$$, 0, null);
  $APP.$cljs$core$__destructure_map$$($G__77991_G__77995$jscomp$inline_3710_map__77989_props__41575__auto__$jscomp$47_vec__77986$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__77991_G__77995$jscomp$inline_3710_map__77989_props__41575__auto__$jscomp$47_vec__77986$$ = {"cost-data":$amp$pages$budget$cost_breakdown$cost_data$$};
  $G__77991_G__77995$jscomp$inline_3710_map__77989_props__41575__auto__$jscomp$47_vec__77986$$ = {className:"mt-12", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$pages$budget$table$budget_table$$, $G__77991_G__77995$jscomp$inline_3710_map__77989_props__41575__auto__$jscomp$47_vec__77986$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$budget$table$budget_table$$, $G__77991_G__77995$jscomp$inline_3710_map__77989_props__41575__auto__$jscomp$47_vec__77986$$)};
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__77991_G__77995$jscomp$inline_3710_map__77989_props__41575__auto__$jscomp$47_vec__77986$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__77991_G__77995$jscomp$inline_3710_map__77989_props__41575__auto__$jscomp$47_vec__77986$$);
};
$amp$pages$budget$cost_breakdown$cost_breakdown$$ = function($G__78006_id$jscomp$85_map__78004_props__41575__auto__$jscomp$48_vec__78001$$, $G__78010$jscomp$inline_3713_JSCompiler_inline_result$jscomp$inline_3712_maybe_ref__41576__auto__$jscomp$48_subtitle$jscomp$3$$) {
  $G__78006_id$jscomp$85_map__78004_props__41575__auto__$jscomp$48_vec__78001$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__78006_id$jscomp$85_map__78004_props__41575__auto__$jscomp$48_vec__78001$$), $G__78010$jscomp$inline_3713_JSCompiler_inline_result$jscomp$inline_3712_maybe_ref__41576__auto__$jscomp$48_subtitle$jscomp$3$$], null);
  $G__78006_id$jscomp$85_map__78004_props__41575__auto__$jscomp$48_vec__78001$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__78006_id$jscomp$85_map__78004_props__41575__auto__$jscomp$48_vec__78001$$, 0, null);
  var $map__78004__$1_title$jscomp$22$$ = $APP.$cljs$core$__destructure_map$$($G__78006_id$jscomp$85_map__78004_props__41575__auto__$jscomp$48_vec__78001$$);
  $G__78006_id$jscomp$85_map__78004_props__41575__auto__$jscomp$48_vec__78001$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__78004__$1_title$jscomp$22$$, $APP.$cljs$cst$285$id$$);
  $G__78010$jscomp$inline_3713_JSCompiler_inline_result$jscomp$inline_3712_maybe_ref__41576__auto__$jscomp$48_subtitle$jscomp$3$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__78004__$1_title$jscomp$22$$, $APP.$cljs$cst$770$subtitle$$);
  $map__78004__$1_title$jscomp$22$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__78004__$1_title$jscomp$22$$, $APP.$cljs$cst$287$title$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__78010$jscomp$inline_3713_JSCompiler_inline_result$jscomp$inline_3712_maybe_ref__41576__auto__$jscomp$48_subtitle$jscomp$3$$ = {idx:3, "section-hint":$G__78010$jscomp$inline_3713_JSCompiler_inline_result$jscomp$inline_3712_maybe_ref__41576__auto__$jscomp$48_subtitle$jscomp$3$$, title:$map__78004__$1_title$jscomp$22$$, "expand-button-label":"Read more", "preview-text":$amp$pages$budget$cost_breakdown$preview$$, "full-text":$amp$pages$budget$cost_breakdown$details$$, "footer-text":$amp$pages$budget$cost_breakdown$footer$$};
  $G__78010$jscomp$inline_3713_JSCompiler_inline_result$jscomp$inline_3712_maybe_ref__41576__auto__$jscomp$48_subtitle$jscomp$3$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$ui$expandable_text$expandable_text_area_2$$, $G__78010$jscomp$inline_3713_JSCompiler_inline_result$jscomp$inline_3712_maybe_ref__41576__auto__$jscomp$48_subtitle$jscomp$3$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$ui$expandable_text$expandable_text_area_2$$, 
  $G__78010$jscomp$inline_3713_JSCompiler_inline_result$jscomp$inline_3712_maybe_ref__41576__auto__$jscomp$48_subtitle$jscomp$3$$);
  $G__78006_id$jscomp$85_map__78004_props__41575__auto__$jscomp$48_vec__78001$$ = {id:$G__78006_id$jscomp$85_map__78004_props__41575__auto__$jscomp$48_vec__78001$$, children:$G__78010$jscomp$inline_3713_JSCompiler_inline_result$jscomp$inline_3712_maybe_ref__41576__auto__$jscomp$48_subtitle$jscomp$3$$};
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__78006_id$jscomp$85_map__78004_props__41575__auto__$jscomp$48_vec__78001$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__78006_id$jscomp$85_map__78004_props__41575__auto__$jscomp$48_vec__78001$$);
};
$amp$pages$budget$location$preview_text$$ = function($G__76140$jscomp$1_props__41575__auto__$jscomp$49$$) {
  $APP.$helix$core$extract_cljs_props$$($G__76140$jscomp$1_props__41575__auto__$jscomp$49$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__76140$jscomp$1_props__41575__auto__$jscomp$49$$ = function() {
    return {className:"", children:["The Armenia Pavilion 2026 will be located across ", function() {
      var $G__76152$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:"two sites,"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__76152$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__76152$$);
    }(), " within the historic Arsenale of Venice. ", function() {
      var $G__76160$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:" 1. A wonderful interior grand studio"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__76160$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__76160$$);
    }(), function() {
      var $G__76169$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:" , as well 2. An important exterior public crossing to the Arsenale"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__76169$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__76169$$);
    }(), ". ", "Together these two sites will form a single spatial constellation. ", function() {
      var $G__76173$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-900  dark:text-slate-100"), children:"A place for study, a place for work, to create, share and exhibit"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__76173$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__76173$$);
    }(), function() {
      var $G__76182$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-900  dark:text-slate-100"), children:" at a public-crossing threshold"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__76182$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__76182$$);
    }(), "—each distinctly neccesary and helpful, both in concluding the final design as well as the making, viewing, and observing of the artworks presented."]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__76140$jscomp$1_props__41575__auto__$jscomp$49$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__76140$jscomp$1_props__41575__auto__$jscomp$49$$);
};
$amp$pages$budget$location$preview$$ = function($G__76216_G__76224$jscomp$inline_3351_map__76211_props__41575__auto__$jscomp$50_vec__76208$$, $maybe_ref__41576__auto__$jscomp$50$$) {
  $G__76216_G__76224$jscomp$inline_3351_map__76211_props__41575__auto__$jscomp$50_vec__76208$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__76216_G__76224$jscomp$inline_3351_map__76211_props__41575__auto__$jscomp$50_vec__76208$$), $maybe_ref__41576__auto__$jscomp$50$$], null);
  $G__76216_G__76224$jscomp$inline_3351_map__76211_props__41575__auto__$jscomp$50_vec__76208$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__76216_G__76224$jscomp$inline_3351_map__76211_props__41575__auto__$jscomp$50_vec__76208$$, 0, null);
  $APP.$cljs$core$__destructure_map$$($G__76216_G__76224$jscomp$inline_3351_map__76211_props__41575__auto__$jscomp$50_vec__76208$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__76216_G__76224$jscomp$inline_3351_map__76211_props__41575__auto__$jscomp$50_vec__76208$$ = {};
  $G__76216_G__76224$jscomp$inline_3351_map__76211_props__41575__auto__$jscomp$50_vec__76208$$ = {className:"p-4 mb-12", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$pages$budget$location$preview_text$$, $G__76216_G__76224$jscomp$inline_3351_map__76211_props__41575__auto__$jscomp$50_vec__76208$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$budget$location$preview_text$$, $G__76216_G__76224$jscomp$inline_3351_map__76211_props__41575__auto__$jscomp$50_vec__76208$$)};
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__76216_G__76224$jscomp$inline_3351_map__76211_props__41575__auto__$jscomp$50_vec__76208$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__76216_G__76224$jscomp$inline_3351_map__76211_props__41575__auto__$jscomp$50_vec__76208$$);
};
$amp$pages$budget$location$full_details$$ = function($G__76252_map__76250_map__76250__$1_props__41575__auto__$jscomp$51_vec__76247$$, $maybe_ref__41576__auto__$jscomp$51$$) {
  $G__76252_map__76250_map__76250__$1_props__41575__auto__$jscomp$51_vec__76247$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__76252_map__76250_map__76250__$1_props__41575__auto__$jscomp$51_vec__76247$$), $maybe_ref__41576__auto__$jscomp$51$$], null);
  $G__76252_map__76250_map__76250__$1_props__41575__auto__$jscomp$51_vec__76247$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__76252_map__76250_map__76250__$1_props__41575__auto__$jscomp$51_vec__76247$$, 0, null);
  $G__76252_map__76250_map__76250__$1_props__41575__auto__$jscomp$51_vec__76247$$ = $APP.$cljs$core$__destructure_map$$($G__76252_map__76250_map__76250__$1_props__41575__auto__$jscomp$51_vec__76247$$);
  $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__76252_map__76250_map__76250__$1_props__41575__auto__$jscomp$51_vec__76247$$, $APP.$cljs$cst$285$id$$);
  $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__76252_map__76250_map__76250__$1_props__41575__auto__$jscomp$51_vec__76247$$, $APP.$cljs$cst$770$subtitle$$);
  $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__76252_map__76250_map__76250__$1_props__41575__auto__$jscomp$51_vec__76247$$, $APP.$cljs$cst$287$title$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $is_desktop_QMARK_$jscomp$2$$ = $APP.$amp$hooks$use_media_query$use_touch_enabled$$();
  $G__76252_map__76250_map__76250__$1_props__41575__auto__$jscomp$51_vec__76247$$ = function() {
    return {className:"space-y-8", children:function() {
      var $G__76256$$ = function() {
        return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$body_lg$$), children:[function() {
          var $G__76261_G__76265$jscomp$inline_3354$$ = {};
          $G__76261_G__76265$jscomp$inline_3354$$ = {className:"p-4 mb-12", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$pages$budget$location$preview_text$$, $G__76261_G__76265$jscomp$inline_3354$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$budget$location$preview_text$$, $G__76261_G__76265$jscomp$inline_3354$$)};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__76261_G__76265$jscomp$inline_3354$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__76261_G__76265$jscomp$inline_3354$$);
        }(), function() {
          var $G__76271$$ = function() {
            return {className:"my-8", children:[function() {
              var $G__76275$$ = {dev:!1, "interactive?":$is_desktop_QMARK_$jscomp$2$$, "initial-view":$APP.$amp$pages$venue$map_config$initial_view$$, "ant-paths":$APP.$amp$pages$venue$map_config$ant_paths$$, layers:$APP.$amp$pages$venue$map_config$layers$$};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$ui$map$mapbox_map$$, $G__76275$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$ui$map$mapbox_map$$, $G__76275$$);
            }(), function() {
              var $G__76279$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-mono", "text-sm", "italic", "mt-4 px-4"]))), children:"* Walking path from the crossing to the pavilion. ~8 minutes"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__76279$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__76279$$);
            }()]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__76271$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__76271$$);
        }(), function() {
          var $G__76283$$ = function() {
            return {className:"px-4 mt-8 flex flex-col sm:flex-row gap-4", children:[function() {
              var $G__76287$$ = {href:"/visit", className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$("font-display;font-medium;inline-flex items-center gap-2;text-sm uppercase tracking-wider;text-pink-600 dark:text-pink-300;hover:text-pink-700 dark:hover:text-pink-200;transition-colors duration-200".split(";")))), children:"See the full Visitor Guide →"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("a", $G__76287$$) : $APP.$helix$core$jsx$$.call(null, "a", $G__76287$$);
            }(), function() {
              var $G__76316$$ = {href:"https://maps.app.goo.gl/XBwAbBQcj47eHyq5A", target:"_blank", rel:"noopener noreferrer", className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$("font-display;font-medium;inline-flex items-center gap-2;text-sm uppercase tracking-wider;text-slate-500  dark:text-slate-500;hover:text-pink-600 dark:hover:text-pink-300;transition-colors duration-200".split(";")))), 
              children:"Open in Maps ↗"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("a", $G__76316$$) : $APP.$helix$core$jsx$$.call(null, "a", $G__76316$$);
            }()]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__76283$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__76283$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__76256$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__76256$$);
    }()};
  }();
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__76252_map__76250_map__76250__$1_props__41575__auto__$jscomp$51_vec__76247$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__76252_map__76250_map__76250__$1_props__41575__auto__$jscomp$51_vec__76247$$);
};
$amp$pages$budget$location$location_section$$ = function($G__76390_id$jscomp$87_map__76370_props__41575__auto__$jscomp$52_vec__76367$$, $G__76399$jscomp$inline_3716_JSCompiler_inline_result$jscomp$inline_3715_maybe_ref__41576__auto__$jscomp$52_subtitle$jscomp$5$$) {
  $G__76390_id$jscomp$87_map__76370_props__41575__auto__$jscomp$52_vec__76367$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__76390_id$jscomp$87_map__76370_props__41575__auto__$jscomp$52_vec__76367$$), $G__76399$jscomp$inline_3716_JSCompiler_inline_result$jscomp$inline_3715_maybe_ref__41576__auto__$jscomp$52_subtitle$jscomp$5$$], null);
  $G__76390_id$jscomp$87_map__76370_props__41575__auto__$jscomp$52_vec__76367$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__76390_id$jscomp$87_map__76370_props__41575__auto__$jscomp$52_vec__76367$$, 0, null);
  var $map__76370__$1_title$jscomp$24$$ = $APP.$cljs$core$__destructure_map$$($G__76390_id$jscomp$87_map__76370_props__41575__auto__$jscomp$52_vec__76367$$);
  $G__76390_id$jscomp$87_map__76370_props__41575__auto__$jscomp$52_vec__76367$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__76370__$1_title$jscomp$24$$, $APP.$cljs$cst$285$id$$);
  $G__76399$jscomp$inline_3716_JSCompiler_inline_result$jscomp$inline_3715_maybe_ref__41576__auto__$jscomp$52_subtitle$jscomp$5$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__76370__$1_title$jscomp$24$$, $APP.$cljs$cst$770$subtitle$$);
  $map__76370__$1_title$jscomp$24$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__76370__$1_title$jscomp$24$$, $APP.$cljs$cst$287$title$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__76399$jscomp$inline_3716_JSCompiler_inline_result$jscomp$inline_3715_maybe_ref__41576__auto__$jscomp$52_subtitle$jscomp$5$$ = {idx:7, "section-hint":$G__76399$jscomp$inline_3716_JSCompiler_inline_result$jscomp$inline_3715_maybe_ref__41576__auto__$jscomp$52_subtitle$jscomp$5$$, title:$map__76370__$1_title$jscomp$24$$, "expand-button-label":"Expand details", "preview-text":$amp$pages$budget$location$preview$$, "full-text":$amp$pages$budget$location$full_details$$};
  $G__76399$jscomp$inline_3716_JSCompiler_inline_result$jscomp$inline_3715_maybe_ref__41576__auto__$jscomp$52_subtitle$jscomp$5$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$ui$expandable_text$expandable_text_area_2$$, $G__76399$jscomp$inline_3716_JSCompiler_inline_result$jscomp$inline_3715_maybe_ref__41576__auto__$jscomp$52_subtitle$jscomp$5$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$ui$expandable_text$expandable_text_area_2$$, 
  $G__76399$jscomp$inline_3716_JSCompiler_inline_result$jscomp$inline_3715_maybe_ref__41576__auto__$jscomp$52_subtitle$jscomp$5$$);
  $G__76390_id$jscomp$87_map__76370_props__41575__auto__$jscomp$52_vec__76367$$ = {id:$G__76390_id$jscomp$87_map__76370_props__41575__auto__$jscomp$52_vec__76367$$, children:$G__76399$jscomp$inline_3716_JSCompiler_inline_result$jscomp$inline_3715_maybe_ref__41576__auto__$jscomp$52_subtitle$jscomp$5$$};
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__76390_id$jscomp$87_map__76370_props__41575__auto__$jscomp$52_vec__76367$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__76390_id$jscomp$87_map__76370_props__41575__auto__$jscomp$52_vec__76367$$);
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
    return $amp$pages$budget$cash_flow$parse_date$$($cljs$cst$813$due$$.$cljs$core$IFn$_invoke$arity$1$($e$jscomp$219$$)).toLocaleString("en-US", {month:"long", year:"numeric"});
  }, $APP.$cljs$core$sort_by$cljs$0core$0IFn$0_invoke$0arity$02$$($APP.$cljs$core$comp$$.$cljs$core$IFn$_invoke$arity$3$($amp$pages$budget$cash_flow$date__GT_ms$$, $amp$pages$budget$cash_flow$parse_date$$, $cljs$cst$813$due$$), $entries$jscomp$4$$));
};
$amp$pages$budget$cash_flow$month_rollups$$ = function($entries$jscomp$5_groups_sorted$$) {
  $entries$jscomp$5_groups_sorted$$ = $APP.$cljs$core$sort_by$cljs$0core$0IFn$0_invoke$0arity$02$$($APP.$cljs$core$comp$$.$cljs$core$IFn$_invoke$arity$3$($amp$pages$budget$cash_flow$date__GT_ms$$, $amp$pages$budget$cash_flow$parse_date$$, $cljs$cst$813$due$$), $entries$jscomp$5_groups_sorted$$);
  $entries$jscomp$5_groups_sorted$$ = $amp$pages$budget$cash_flow$group_by_month$$($entries$jscomp$5_groups_sorted$$);
  return $APP.$cljs$core$mapv$cljs$0core$0IFn$0_invoke$0arity$02$$(function($group$jscomp$1$$) {
    var $d$jscomp$154$$ = $amp$pages$budget$cash_flow$parse_date$$($cljs$cst$813$due$$.$cljs$core$IFn$_invoke$arity$1$($APP.$cljs$core$first$$($group$jscomp$1$$))), $label$jscomp$15$$ = $d$jscomp$154$$.toLocaleString("en-US", {month:"short", year:"numeric"}), $total$jscomp$5$$ = $APP.$cljs$core$reduce$cljs$0core$0IFn$0_invoke$0arity$03$$($APP.$cljs$core$_PLUS_$$, 0, $APP.$cljs$core$map$$.$cljs$core$IFn$_invoke$arity$2$($cljs$cst$791$amount$$, $group$jscomp$1$$)), $paid$$ = $APP.$cljs$core$reduce$cljs$0core$0IFn$0_invoke$0arity$03$$($APP.$cljs$core$_PLUS_$$, 
    0, $APP.$cljs$core$map$$.$cljs$core$IFn$_invoke$arity$2$($cljs$cst$791$amount$$, $APP.$cljs$core$filter$cljs$0core$0IFn$0_invoke$0arity$02$$(function($p1__78114_SHARP_$$) {
      return $APP.$cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$($cljs$cst$816$paid$$, $APP.$cljs$cst$12$status$$.$cljs$core$IFn$_invoke$arity$1$($p1__78114_SHARP_$$));
    }, $group$jscomp$1$$))), $pending$jscomp$1$$ = $total$jscomp$5$$ - $paid$$, $n_items$$ = $APP.$cljs$core$count$$($group$jscomp$1$$), $n_paid$$ = $APP.$cljs$core$count$$($APP.$cljs$core$filter$cljs$0core$0IFn$0_invoke$0arity$02$$(function($p1__78115_SHARP_$$) {
      return $APP.$cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$($cljs$cst$816$paid$$, $APP.$cljs$cst$12$status$$.$cljs$core$IFn$_invoke$arity$1$($p1__78115_SHARP_$$));
    }, $group$jscomp$1$$)), $n_crit$jscomp$1$$ = $APP.$cljs$core$count$$($APP.$cljs$core$filter$cljs$0core$0IFn$0_invoke$0arity$02$$(function($p1__78118_SHARP_$$) {
      return $APP.$cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$($cljs$cst$834$critical$$, $cljs$cst$814$priority$$.$cljs$core$IFn$_invoke$arity$1$($p1__78118_SHARP_$$));
    }, $group$jscomp$1$$)), $all_paid$jscomp$1$$ = $APP.$cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$($n_paid$$, $n_items$$), $has_now$$ = function() {
      var $year$jscomp$2$$ = $d$jscomp$154$$.getFullYear(), $now$$ = new Date(), $n_year$$ = $now$$.getFullYear();
      return $APP.$cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$($d$jscomp$154$$.getMonth(), $now$$.getMonth()) && $APP.$cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$($year$jscomp$2$$, $n_year$$);
    }();
    return $APP.$cljs$core$PersistentHashMap$fromArrays$$([$cljs$cst$874$all_paid$$, $cljs$cst$875$entries$$, $APP.$cljs$cst$14$pending$$, $cljs$cst$876$n_crit$$, $APP.$cljs$cst$726$total$$, $APP.$cljs$cst$408$label$$, $cljs$cst$816$paid$$, $cljs$cst$877$n_paid$$, $cljs$cst$878$n_items$$, $cljs$cst$879$has_now$$], [$all_paid$jscomp$1$$, $group$jscomp$1$$, $pending$jscomp$1$$, $n_crit$jscomp$1$$, $total$jscomp$5$$, $label$jscomp$15$$, $paid$$, $n_paid$$, $n_items$$, $has_now$$]);
  }, $entries$jscomp$5_groups_sorted$$);
};
$amp$pages$budget$cash_flow$status_classes$$ = function($status$jscomp$10$$) {
  switch($status$jscomp$10$$ instanceof $APP.$cljs$core$Keyword$$ ? $status$jscomp$10$$.$fqn$ : null) {
    case "paid":
      return new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$cljs$cst$880$dot$$, "bg-emerald-400/20 dark:bg-emerald-300/20", $APP.$cljs$cst$392$text$$, "text-emerald-600 dark:text-emerald-300", $APP.$cljs$cst$408$label$$, "COST, PAID"], null);
    case "pending":
      return new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$cljs$cst$880$dot$$, "bg-slate-400/15 dark:bg-slate-500/15", $APP.$cljs$cst$392$text$$, "text-slate-500", $APP.$cljs$cst$408$label$$, "DUE"], null);
    default:
      return new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$cljs$cst$880$dot$$, "bg-slate-400/15 dark:bg-slate-500/15", $APP.$cljs$cst$392$text$$, "text-slate-500", $APP.$cljs$cst$408$label$$, "—"], null);
  }
};
$amp$pages$budget$cash_flow$timeline_node$$ = function($G__78285_79318_G__78296_map__78277_map__78277__$1_map__78282__$1_props__41575__auto__$jscomp$53_status$jscomp$11_vec__78274$$, $G__78286_79319_entry$jscomp$29_maybe_ref__41576__auto__$jscomp$53$$) {
  $G__78285_79318_G__78296_map__78277_map__78277__$1_map__78282__$1_props__41575__auto__$jscomp$53_status$jscomp$11_vec__78274$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__78285_79318_G__78296_map__78277_map__78277__$1_map__78282__$1_props__41575__auto__$jscomp$53_status$jscomp$11_vec__78274$$), $G__78286_79319_entry$jscomp$29_maybe_ref__41576__auto__$jscomp$53$$], null);
  $G__78285_79318_G__78296_map__78277_map__78277__$1_map__78282__$1_props__41575__auto__$jscomp$53_status$jscomp$11_vec__78274$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__78285_79318_G__78296_map__78277_map__78277__$1_map__78282__$1_props__41575__auto__$jscomp$53_status$jscomp$11_vec__78274$$, 0, null);
  $G__78285_79318_G__78296_map__78277_map__78277__$1_map__78282__$1_props__41575__auto__$jscomp$53_status$jscomp$11_vec__78274$$ = $APP.$cljs$core$__destructure_map$$($G__78285_79318_G__78296_map__78277_map__78277__$1_map__78282__$1_props__41575__auto__$jscomp$53_status$jscomp$11_vec__78274$$);
  $G__78286_79319_entry$jscomp$29_maybe_ref__41576__auto__$jscomp$53$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__78285_79318_G__78296_map__78277_map__78277__$1_map__78282__$1_props__41575__auto__$jscomp$53_status$jscomp$11_vec__78274$$, $cljs$cst$881$entry$$);
  var $idx$jscomp$74$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__78285_79318_G__78296_map__78277_map__78277__$1_map__78282__$1_props__41575__auto__$jscomp$53_status$jscomp$11_vec__78274$$, $APP.$cljs$cst$744$idx$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__78285_79318_G__78296_map__78277_map__78277__$1_map__78282__$1_props__41575__auto__$jscomp$53_status$jscomp$11_vec__78274$$ = $APP.$cljs$core$__destructure_map$$($G__78286_79319_entry$jscomp$29_maybe_ref__41576__auto__$jscomp$53$$);
  var $title$jscomp$25$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__78285_79318_G__78296_map__78277_map__78277__$1_map__78282__$1_props__41575__auto__$jscomp$53_status$jscomp$11_vec__78274$$, $APP.$cljs$cst$287$title$$), $due$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__78285_79318_G__78296_map__78277_map__78277__$1_map__78282__$1_props__41575__auto__$jscomp$53_status$jscomp$11_vec__78274$$, $cljs$cst$813$due$$), $amount$jscomp$1$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__78285_79318_G__78296_map__78277_map__78277__$1_map__78282__$1_props__41575__auto__$jscomp$53_status$jscomp$11_vec__78274$$, 
  $cljs$cst$791$amount$$), $priority$jscomp$1$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__78285_79318_G__78296_map__78277_map__78277__$1_map__78282__$1_props__41575__auto__$jscomp$53_status$jscomp$11_vec__78274$$, $cljs$cst$814$priority$$);
  $G__78285_79318_G__78296_map__78277_map__78277__$1_map__78282__$1_props__41575__auto__$jscomp$53_status$jscomp$11_vec__78274$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__78285_79318_G__78296_map__78277_map__78277__$1_map__78282__$1_props__41575__auto__$jscomp$53_status$jscomp$11_vec__78274$$, $APP.$cljs$cst$12$status$$);
  var $node_ref$$ = $APP.$helix$hooks$use_ref$$(null), $paid_QMARK_$jscomp$2$$ = $APP.$cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$($APP.$cljs$core$keyword$$.$cljs$core$IFn$_invoke$arity$1$($G__78285_79318_G__78296_map__78277_map__78277__$1_map__78282__$1_props__41575__auto__$jscomp$53_status$jscomp$11_vec__78274$$), $cljs$cst$816$paid$$), $st$jscomp$2$$ = $amp$pages$budget$cash_flow$status_classes$$($APP.$cljs$core$keyword$$.$cljs$core$IFn$_invoke$arity$1$($G__78285_79318_G__78296_map__78277_map__78277__$1_map__78282__$1_props__41575__auto__$jscomp$53_status$jscomp$11_vec__78274$$));
  $G__78285_79318_G__78296_map__78277_map__78277__$1_map__78282__$1_props__41575__auto__$jscomp$53_status$jscomp$11_vec__78274$$ = $APP.$helix$hooks$wrap_fx$$(function() {
    return $APP.$cljs$core$truth_$$($APP.$cljs$core$_deref$$($node_ref$$)) ? $APP.$module$node_modules$gsap$dist$gsap$$.gsap.fromTo($APP.$cljs$core$_deref$$($node_ref$$), {opacity:0, x:-20}, {opacity:1, x:0, duration:0.4, delay:$idx$jscomp$74$$ * 0.06, ease:"power2.out"}) : null;
  });
  $G__78286_79319_entry$jscomp$29_maybe_ref__41576__auto__$jscomp$53$$ = [];
  $APP.$helix$hooks$raw_use_effect$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$hooks$raw_use_effect$$.$cljs$core$IFn$_invoke$arity$2$($G__78285_79318_G__78296_map__78277_map__78277__$1_map__78282__$1_props__41575__auto__$jscomp$53_status$jscomp$11_vec__78274$$, $G__78286_79319_entry$jscomp$29_maybe_ref__41576__auto__$jscomp$53$$) : $APP.$helix$hooks$raw_use_effect$$.call(null, $G__78285_79318_G__78296_map__78277_map__78277__$1_map__78282__$1_props__41575__auto__$jscomp$53_status$jscomp$11_vec__78274$$, 
  $G__78286_79319_entry$jscomp$29_maybe_ref__41576__auto__$jscomp$53$$);
  $G__78285_79318_G__78296_map__78277_map__78277__$1_map__78282__$1_props__41575__auto__$jscomp$53_status$jscomp$11_vec__78274$$ = function() {
    return {ref:$node_ref$$, className:$APP.$helix$impl$props$normalize_class$$("relative flex items-stretch opacity-0 " + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($paid_QMARK_$jscomp$2$$ ? "opacity-50" : null)), children:[function() {
      var $G__78302$$ = function() {
        return {className:"relative flex flex-col items-center", style:{width:$APP.$helix$impl$props$__GT_js$$("28px"), minWidth:$APP.$helix$impl$props$__GT_js$$("28px")}, children:[function() {
          var $G__78310$$ = {className:$APP.$helix$impl$props$normalize_class$$("mt-4 h-2.5 w-2.5 rounded-full border-2 flex-shrink-0 " + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($amp$pages$budget$cash_flow$priority_dot_classes$$($APP.$cljs$core$keyword$$.$cljs$core$IFn$_invoke$arity$1$($priority$jscomp$1$$), $paid_QMARK_$jscomp$2$$)))};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__78310$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__78310$$);
        }(), function() {
          var $G__78314$$ = {className:"flex-1 border-l border-dashed border-slate-300 dark:border-slate-700"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__78314$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__78314$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__78302$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__78302$$);
    }(), function() {
      var $G__78319_G__78323$jscomp$inline_3913$$ = {className:"w-4 border-t border-dashed border-slate-300 dark:border-slate-600", style:{marginTop:$APP.$helix$impl$props$__GT_js$$("1px")}};
      $G__78319_G__78323$jscomp$inline_3913$$ = {className:"flex items-start pt-[18px]", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__78319_G__78323$jscomp$inline_3913$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__78319_G__78323$jscomp$inline_3913$$)};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__78319_G__78323$jscomp$inline_3913$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__78319_G__78323$jscomp$inline_3913$$);
    }(), function() {
      var $G__78329$$ = function() {
        return {className:"flex-1 pb-5 pt-1 pl-1", children:[function() {
          var $G__78334$$ = function() {
            return {className:"flex items-center gap-2 mb-1", children:[function() {
              var $G__78338_JSCompiler_temp_const$jscomp$3025$$ = $APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-mono", "text-[11px]", "text-slate-600  dark:text-slate-400"])));
              var $JSCompiler_inline_result$jscomp$3026_d$jscomp$inline_3359$$ = $amp$pages$budget$cash_flow$parse_date$$($due$$);
              $JSCompiler_inline_result$jscomp$3026_d$jscomp$inline_3359$$ = "" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($JSCompiler_inline_result$jscomp$3026_d$jscomp$inline_3359$$.toLocaleString("en-US", {month:"short"})) + " " + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($JSCompiler_inline_result$jscomp$3026_d$jscomp$inline_3359$$.getDate());
              $G__78338_JSCompiler_temp_const$jscomp$3025$$ = {className:$G__78338_JSCompiler_temp_const$jscomp$3025$$, children:$JSCompiler_inline_result$jscomp$3026_d$jscomp$inline_3359$$};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__78338_JSCompiler_temp_const$jscomp$3025$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__78338_JSCompiler_temp_const$jscomp$3025$$);
            }(), function() {
              var $G__78347$$ = {className:$APP.$helix$impl$props$normalize_class$$("px-1.5 py-px text-[9px] font-bold uppercase tracking-widest font-mono " + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($amp$pages$budget$cash_flow$priority_tag_bg$$($APP.$cljs$core$keyword$$.$cljs$core$IFn$_invoke$arity$1$($priority$jscomp$1$$))) + " " + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($amp$pages$budget$cash_flow$priority_tag_text$$($APP.$cljs$core$keyword$$.$cljs$core$IFn$_invoke$arity$1$($priority$jscomp$1$$)))), 
              children:$amp$pages$budget$cash_flow$priority_label$$($APP.$cljs$core$keyword$$.$cljs$core$IFn$_invoke$arity$1$($priority$jscomp$1$$))};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__78347$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__78347$$);
            }(), function() {
              var $G__78369$$ = {className:$APP.$helix$impl$props$normalize_class$$("px-1.5 py-px text-[9px] font-bold uppercase tracking-widest font-mono " + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($cljs$cst$880$dot$$.$cljs$core$IFn$_invoke$arity$1$($st$jscomp$2$$)) + " " + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($APP.$cljs$cst$392$text$$.$cljs$core$IFn$_invoke$arity$1$($st$jscomp$2$$))), children:$APP.$cljs$cst$408$label$$.$cljs$core$IFn$_invoke$arity$1$($st$jscomp$2$$)};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__78369$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__78369$$);
            }()]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__78334$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__78334$$);
        }(), function() {
          var $G__78381$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-sm leading-snug " + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($paid_QMARK_$jscomp$2$$ ? "" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$("text-slate-600  dark:text-slate-400") + " line-through" : "text-slate-700  dark:text-slate-300")), children:$title$jscomp$25$$};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__78381$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__78381$$);
        }(), function() {
          var $G__78395$$ = {className:$APP.$helix$impl$props$normalize_class$$("mt-0.5 font-mono text-base font-semibold tracking-tight " + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($amp$pages$budget$cash_flow$priority_amount_class$$($APP.$cljs$core$keyword$$.$cljs$core$IFn$_invoke$arity$1$($priority$jscomp$1$$), $paid_QMARK_$jscomp$2$$))), children:$amp$pages$budget$cash_flow$format_currency$$($amount$jscomp$1$$)};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__78395$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__78395$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__78329$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__78329$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__78285_79318_G__78296_map__78277_map__78277__$1_map__78282__$1_props__41575__auto__$jscomp$53_status$jscomp$11_vec__78274$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__78285_79318_G__78296_map__78277_map__78277__$1_map__78282__$1_props__41575__auto__$jscomp$53_status$jscomp$11_vec__78274$$);
};
$amp$pages$budget$cash_flow$now_marker$$ = function($G__78428_79336_G__78435_props__41575__auto__$jscomp$54$$) {
  $APP.$helix$core$extract_cljs_props$$($G__78428_79336_G__78435_props__41575__auto__$jscomp$54$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $ref$jscomp$17$$ = $APP.$helix$hooks$use_ref$$(null);
  $G__78428_79336_G__78435_props__41575__auto__$jscomp$54$$ = $APP.$helix$hooks$wrap_fx$$(function() {
    return $APP.$cljs$core$truth_$$($APP.$cljs$core$_deref$$($ref$jscomp$17$$)) ? $APP.$module$node_modules$gsap$dist$gsap$$.gsap.fromTo($APP.$cljs$core$_deref$$($ref$jscomp$17$$), {opacity:0, scaleX:0}, {opacity:1, scaleX:1, duration:0.6, delay:0.2, ease:"power3.out"}) : null;
  });
  var $G__78429_79337$$ = [];
  $APP.$helix$hooks$raw_use_effect$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$hooks$raw_use_effect$$.$cljs$core$IFn$_invoke$arity$2$($G__78428_79336_G__78435_props__41575__auto__$jscomp$54$$, $G__78429_79337$$) : $APP.$helix$hooks$raw_use_effect$$.call(null, $G__78428_79336_G__78435_props__41575__auto__$jscomp$54$$, $G__78429_79337$$);
  $G__78428_79336_G__78435_props__41575__auto__$jscomp$54$$ = function() {
    return {ref:$ref$jscomp$17$$, className:"flex items-center gap-2 py-3 origin-left opacity-0", children:[function() {
      var $G__78439$$ = function() {
        return {className:"relative flex items-center justify-center", style:{width:$APP.$helix$impl$props$__GT_js$$("28px"), minWidth:$APP.$helix$impl$props$__GT_js$$("28px")}, children:[function() {
          var $G__78446$$ = {className:"absolute h-5 w-5 animate-ping rounded-full bg-rose-400/30"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__78446$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__78446$$);
        }(), function() {
          var $G__78452$$ = {className:"h-2.5 w-2.5 rounded-full bg-rose-400"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__78452$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__78452$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__78439$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__78439$$);
    }(), function() {
      var $G__78456$$ = {className:"flex-1 h-px bg-rose-400/50"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__78456$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__78456$$);
    }(), function() {
      var $G__78460$$ = {className:"font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-rose-400 pr-1", children:"now"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__78460$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__78460$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__78428_79336_G__78435_props__41575__auto__$jscomp$54$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__78428_79336_G__78435_props__41575__auto__$jscomp$54$$);
};
$amp$pages$budget$cash_flow$month_header$$ = function($G__78480_79379_G__78485_map__78479_map__78479__$1_props__41575__auto__$jscomp$55_vec__78476$$, $G__78481_79380_maybe_ref__41576__auto__$jscomp$55$$) {
  $G__78480_79379_G__78485_map__78479_map__78479__$1_props__41575__auto__$jscomp$55_vec__78476$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__78480_79379_G__78485_map__78479_map__78479__$1_props__41575__auto__$jscomp$55_vec__78476$$), $G__78481_79380_maybe_ref__41576__auto__$jscomp$55$$], null);
  $G__78480_79379_G__78485_map__78479_map__78479__$1_props__41575__auto__$jscomp$55_vec__78476$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__78480_79379_G__78485_map__78479_map__78479__$1_props__41575__auto__$jscomp$55_vec__78476$$, 0, null);
  $G__78480_79379_G__78485_map__78479_map__78479__$1_props__41575__auto__$jscomp$55_vec__78476$$ = $APP.$cljs$core$__destructure_map$$($G__78480_79379_G__78485_map__78479_map__78479__$1_props__41575__auto__$jscomp$55_vec__78476$$);
  var $label$jscomp$16$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__78480_79379_G__78485_map__78479_map__78479__$1_props__41575__auto__$jscomp$55_vec__78476$$, $APP.$cljs$cst$408$label$$), $idx$jscomp$75$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__78480_79379_G__78485_map__78479_map__78479__$1_props__41575__auto__$jscomp$55_vec__78476$$, $APP.$cljs$cst$744$idx$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $ref$jscomp$18$$ = $APP.$helix$hooks$use_ref$$(null);
  $G__78480_79379_G__78485_map__78479_map__78479__$1_props__41575__auto__$jscomp$55_vec__78476$$ = $APP.$helix$hooks$wrap_fx$$(function() {
    return $APP.$cljs$core$truth_$$($APP.$cljs$core$_deref$$($ref$jscomp$18$$)) ? $APP.$module$node_modules$gsap$dist$gsap$$.gsap.fromTo($APP.$cljs$core$_deref$$($ref$jscomp$18$$), {opacity:0, y:8}, {opacity:1, y:0, duration:0.35, delay:0.1 + $idx$jscomp$75$$ * 0.05, ease:"power2.out"}) : null;
  });
  $G__78481_79380_maybe_ref__41576__auto__$jscomp$55$$ = [];
  $APP.$helix$hooks$raw_use_effect$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$hooks$raw_use_effect$$.$cljs$core$IFn$_invoke$arity$2$($G__78480_79379_G__78485_map__78479_map__78479__$1_props__41575__auto__$jscomp$55_vec__78476$$, $G__78481_79380_maybe_ref__41576__auto__$jscomp$55$$) : $APP.$helix$hooks$raw_use_effect$$.call(null, $G__78480_79379_G__78485_map__78479_map__78479__$1_props__41575__auto__$jscomp$55_vec__78476$$, $G__78481_79380_maybe_ref__41576__auto__$jscomp$55$$);
  $G__78480_79379_G__78485_map__78479_map__78479__$1_props__41575__auto__$jscomp$55_vec__78476$$ = function() {
    return {ref:$ref$jscomp$18$$, className:"flex items-center gap-3 pt-8 pb-2 opacity-0", children:[function() {
      var $G__78491$$ = {className:"h-px w-8 bg-pink-500/70"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__78491$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__78491$$);
    }(), function() {
      var $G__78497$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$("font-mono;text-[10px];font-bold;uppercase;tracking-[0.25em];text-slate-600  dark:text-slate-400".split(";")))), children:$label$jscomp$16$$};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__78497$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__78497$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__78480_79379_G__78485_map__78479_map__78479__$1_props__41575__auto__$jscomp$55_vec__78476$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__78480_79379_G__78485_map__78479_map__78479__$1_props__41575__auto__$jscomp$55_vec__78476$$);
};
$amp$pages$budget$cash_flow$month_summary_row$$ = function($G__78515_79388_G__78518_map__78513_map__78513__$1_map__78514__$1_props__41575__auto__$jscomp$56_vec__78510$$, $G__78516_79389_all_paid$jscomp$2_maybe_ref__41576__auto__$jscomp$56_rollup$$) {
  $G__78515_79388_G__78518_map__78513_map__78513__$1_map__78514__$1_props__41575__auto__$jscomp$56_vec__78510$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__78515_79388_G__78518_map__78513_map__78513__$1_map__78514__$1_props__41575__auto__$jscomp$56_vec__78510$$), $G__78516_79389_all_paid$jscomp$2_maybe_ref__41576__auto__$jscomp$56_rollup$$], null);
  $G__78515_79388_G__78518_map__78513_map__78513__$1_map__78514__$1_props__41575__auto__$jscomp$56_vec__78510$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__78515_79388_G__78518_map__78513_map__78513__$1_map__78514__$1_props__41575__auto__$jscomp$56_vec__78510$$, 0, null);
  $G__78515_79388_G__78518_map__78513_map__78513__$1_map__78514__$1_props__41575__auto__$jscomp$56_vec__78510$$ = $APP.$cljs$core$__destructure_map$$($G__78515_79388_G__78518_map__78513_map__78513__$1_map__78514__$1_props__41575__auto__$jscomp$56_vec__78510$$);
  $G__78516_79389_all_paid$jscomp$2_maybe_ref__41576__auto__$jscomp$56_rollup$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__78515_79388_G__78518_map__78513_map__78513__$1_map__78514__$1_props__41575__auto__$jscomp$56_vec__78510$$, $cljs$cst$882$rollup$$);
  var $idx$jscomp$76$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__78515_79388_G__78518_map__78513_map__78513__$1_map__78514__$1_props__41575__auto__$jscomp$56_vec__78510$$, $APP.$cljs$cst$744$idx$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__78515_79388_G__78518_map__78513_map__78513__$1_map__78514__$1_props__41575__auto__$jscomp$56_vec__78510$$ = $APP.$cljs$core$__destructure_map$$($G__78516_79389_all_paid$jscomp$2_maybe_ref__41576__auto__$jscomp$56_rollup$$);
  var $label$jscomp$17$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__78515_79388_G__78518_map__78513_map__78513__$1_map__78514__$1_props__41575__auto__$jscomp$56_vec__78510$$, $APP.$cljs$cst$408$label$$), $total$jscomp$6$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__78515_79388_G__78518_map__78513_map__78513__$1_map__78514__$1_props__41575__auto__$jscomp$56_vec__78510$$, $APP.$cljs$cst$726$total$$), $paid$jscomp$1$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__78515_79388_G__78518_map__78513_map__78513__$1_map__78514__$1_props__41575__auto__$jscomp$56_vec__78510$$, 
  $cljs$cst$816$paid$$), $pending$jscomp$2$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__78515_79388_G__78518_map__78513_map__78513__$1_map__78514__$1_props__41575__auto__$jscomp$56_vec__78510$$, $APP.$cljs$cst$14$pending$$), $n_items$jscomp$1$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__78515_79388_G__78518_map__78513_map__78513__$1_map__78514__$1_props__41575__auto__$jscomp$56_vec__78510$$, $cljs$cst$878$n_items$$), $n_crit$jscomp$2$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__78515_79388_G__78518_map__78513_map__78513__$1_map__78514__$1_props__41575__auto__$jscomp$56_vec__78510$$, 
  $cljs$cst$876$n_crit$$);
  $G__78516_79389_all_paid$jscomp$2_maybe_ref__41576__auto__$jscomp$56_rollup$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__78515_79388_G__78518_map__78513_map__78513__$1_map__78514__$1_props__41575__auto__$jscomp$56_vec__78510$$, $cljs$cst$874$all_paid$$);
  var $has_now$jscomp$1$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__78515_79388_G__78518_map__78513_map__78513__$1_map__78514__$1_props__41575__auto__$jscomp$56_vec__78510$$, $cljs$cst$879$has_now$$), $ref$jscomp$19$$ = $APP.$helix$hooks$use_ref$$(null), $cls$jscomp$2$$ = $APP.$cljs$core$truth_$$($G__78516_79389_all_paid$jscomp$2_maybe_ref__41576__auto__$jscomp$56_rollup$$) ? new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$393$border$$, "border-emerald-500 dark:border-emerald-300", 
  $cljs$cst$873$fill$$, "bg-transparent", $APP.$cljs$cst$392$text$$, "text-emerald-600 dark:text-emerald-300"], null) : $n_crit$jscomp$2$$ > 0 ? new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$393$border$$, "border-pink-600 dark:border-pink-300", $cljs$cst$873$fill$$, "bg-pink-600 dark:bg-pink-300", $APP.$cljs$cst$392$text$$, "text-pink-600 dark:text-pink-300"], null) : new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$393$border$$, "border-indigo-500 dark:border-indigo-300", 
  $cljs$cst$873$fill$$, "bg-indigo-500 dark:bg-indigo-300", $APP.$cljs$cst$392$text$$, "text-indigo-600 dark:text-indigo-300"], null);
  $G__78515_79388_G__78518_map__78513_map__78513__$1_map__78514__$1_props__41575__auto__$jscomp$56_vec__78510$$ = $APP.$helix$hooks$wrap_fx$$(function() {
    return $APP.$cljs$core$truth_$$($APP.$cljs$core$_deref$$($ref$jscomp$19$$)) ? $APP.$module$node_modules$gsap$dist$gsap$$.gsap.fromTo($APP.$cljs$core$_deref$$($ref$jscomp$19$$), {opacity:0, x:-16}, {opacity:1, x:0, duration:0.35, delay:$idx$jscomp$76$$ * 0.05, ease:"power2.out"}) : null;
  });
  $G__78516_79389_all_paid$jscomp$2_maybe_ref__41576__auto__$jscomp$56_rollup$$ = [];
  $APP.$helix$hooks$raw_use_effect$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$hooks$raw_use_effect$$.$cljs$core$IFn$_invoke$arity$2$($G__78515_79388_G__78518_map__78513_map__78513__$1_map__78514__$1_props__41575__auto__$jscomp$56_vec__78510$$, $G__78516_79389_all_paid$jscomp$2_maybe_ref__41576__auto__$jscomp$56_rollup$$) : $APP.$helix$hooks$raw_use_effect$$.call(null, $G__78515_79388_G__78518_map__78513_map__78513__$1_map__78514__$1_props__41575__auto__$jscomp$56_vec__78510$$, $G__78516_79389_all_paid$jscomp$2_maybe_ref__41576__auto__$jscomp$56_rollup$$);
  $G__78515_79388_G__78518_map__78513_map__78513__$1_map__78514__$1_props__41575__auto__$jscomp$56_vec__78510$$ = function() {
    return {ref:$ref$jscomp$19$$, className:"relative flex items-stretch opacity-0", children:[function() {
      var $G__78522$$ = function() {
        return {className:"relative flex flex-col items-center", style:{width:$APP.$helix$impl$props$__GT_js$$("28px"), minWidth:$APP.$helix$impl$props$__GT_js$$("28px")}, children:[function() {
          var $G__78530$$ = {className:$APP.$helix$impl$props$normalize_class$$("mt-4 h-2.5 w-2.5 rounded-full border-2 flex-shrink-0 " + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($APP.$cljs$cst$393$border$$.$cljs$core$IFn$_invoke$arity$1$($cls$jscomp$2$$)) + " " + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($cljs$cst$873$fill$$.$cljs$core$IFn$_invoke$arity$1$($cls$jscomp$2$$)))};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__78530$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__78530$$);
        }(), function() {
          var $G__78547$$ = {className:"flex-1 border-l border-dashed border-slate-300 dark:border-slate-700"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__78547$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__78547$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__78522$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__78522$$);
    }(), function() {
      var $G__78551_G__78555$jscomp$inline_3916$$ = {className:"w-4 border-t border-dashed border-slate-300 dark:border-slate-600", style:{marginTop:$APP.$helix$impl$props$__GT_js$$("1px")}};
      $G__78551_G__78555$jscomp$inline_3916$$ = {className:"flex items-start pt-[18px]", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__78551_G__78555$jscomp$inline_3916$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__78551_G__78555$jscomp$inline_3916$$)};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__78551_G__78555$jscomp$inline_3916$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__78551_G__78555$jscomp$inline_3916$$);
    }(), function() {
      var $G__78561$$ = function() {
        return {className:"flex-1 pb-4 pt-1 pl-1", children:[function() {
          var $G__78565$$ = function() {
            return {className:"flex items-center gap-2 mb-1", children:[function() {
              var $G__78569$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$("font-mono;text-xs;font-bold;uppercase;tracking-wider;text-slate-900  dark:text-slate-100".split(";")))), children:$label$jscomp$17$$};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__78569$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__78569$$);
            }(), function() {
              var $G__78573$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-mono", "text-[10px]", "text-slate-600  dark:text-slate-400"]))), children:"" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($n_items$jscomp$1$$) + " items"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__78573$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__78573$$);
            }(), $APP.$cljs$core$truth_$$($has_now$jscomp$1$$) ? function() {
              var $G__78577$$ = {className:"px-1.5 py-px text-[9px] font-bold uppercase tracking-widest font-mono bg-emerald-500/15 text-emerald-600 dark:bg-emerald-300/15 dark:text-emerald-300", children:"NOW"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__78577$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__78577$$);
            }() : null, $n_crit$jscomp$2$$ > 0 ? function() {
              var $G__78581$$ = {className:"px-1.5 py-px text-[9px] font-bold uppercase tracking-widest font-mono bg-pink-500/15 text-pink-600 dark:text-pink-300", children:"" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($n_crit$jscomp$2$$) + " crit"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__78581$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__78581$$);
            }() : null]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__78565$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__78565$$);
        }(), function() {
          var $G__78589$$ = function() {
            return {className:"flex items-baseline gap-3", children:[function() {
              var $G__78593$$ = {className:$APP.$helix$impl$props$normalize_class$$("font-mono text-lg font-bold tracking-tight " + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($APP.$cljs$cst$392$text$$.$cljs$core$IFn$_invoke$arity$1$($cls$jscomp$2$$))), children:$amp$pages$budget$cash_flow$format_currency$$($total$jscomp$6$$)};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__78593$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__78593$$);
            }(), $paid$jscomp$1$$ > 0 ? function() {
              var $G__78602$$ = {className:"font-mono text-[11px] text-emerald-600/60 dark:text-emerald-300/60", children:"" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($amp$pages$budget$cash_flow$format_currency$$($paid$jscomp$1$$)) + " COST, PAID"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__78602$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__78602$$);
            }() : null, $pending$jscomp$2$$ > 0 ? function() {
              var $G__78614$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-mono", "text-[11px]", "text-slate-600  dark:text-slate-400"]))), children:"" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($amp$pages$budget$cash_flow$format_currency$$($pending$jscomp$2$$)) + " due"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__78614$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__78614$$);
            }() : null]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__78589$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__78589$$);
        }(), function() {
          var $G__78626_G__78632$jscomp$inline_3919$$ = {className:"absolute left-0 top-0 h-px bg-emerald-500/50 dark:bg-emerald-300/50", style:{width:$APP.$helix$impl$props$__GT_js$$("" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($total$jscomp$6$$ > 0 ? Math.round($paid$jscomp$1$$ / $total$jscomp$6$$ * 100) : 0) + "%")}};
          $G__78626_G__78632$jscomp$inline_3919$$ = {className:"mt-1.5 h-px w-full bg-slate-200 dark:bg-slate-800 relative", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__78626_G__78632$jscomp$inline_3919$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__78626_G__78632$jscomp$inline_3919$$)};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__78626_G__78632$jscomp$inline_3919$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__78626_G__78632$jscomp$inline_3919$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__78561$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__78561$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__78515_79388_G__78518_map__78513_map__78513__$1_map__78514__$1_props__41575__auto__$jscomp$56_vec__78510$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__78515_79388_G__78518_map__78513_map__78513__$1_map__78514__$1_props__41575__auto__$jscomp$56_vec__78510$$);
};
$amp$pages$budget$cash_flow$view_toggle$$ = function($G__78689_map__78681_map__78681__$1_props__41575__auto__$jscomp$57_vec__78678$$, $maybe_ref__41576__auto__$jscomp$57$$) {
  $G__78689_map__78681_map__78681__$1_props__41575__auto__$jscomp$57_vec__78678$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__78689_map__78681_map__78681__$1_props__41575__auto__$jscomp$57_vec__78678$$), $maybe_ref__41576__auto__$jscomp$57$$], null);
  $G__78689_map__78681_map__78681__$1_props__41575__auto__$jscomp$57_vec__78678$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__78689_map__78681_map__78681__$1_props__41575__auto__$jscomp$57_vec__78678$$, 0, null);
  $G__78689_map__78681_map__78681__$1_props__41575__auto__$jscomp$57_vec__78678$$ = $APP.$cljs$core$__destructure_map$$($G__78689_map__78681_map__78681__$1_props__41575__auto__$jscomp$57_vec__78678$$);
  var $expanded_QMARK_$jscomp$2$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__78689_map__78681_map__78681__$1_props__41575__auto__$jscomp$57_vec__78678$$, $cljs$cst$883$expanded_QMARK_$$), $on_toggle$jscomp$2$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__78689_map__78681_map__78681__$1_props__41575__auto__$jscomp$57_vec__78678$$, $APP.$cljs$cst$756$on_toggle$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__78689_map__78681_map__78681__$1_props__41575__auto__$jscomp$57_vec__78678$$ = function() {
    return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$("mb-4 flex items-center gap-2;font-mono;text-[10px];font-bold;uppercase;tracking-[0.25em];text-slate-600  dark:text-slate-400;transition-colors hover:text-pink-600 dark:hover:text-pink-300".split(";")))), onClick:$on_toggle$jscomp$2$$, children:[function() {
      var $G__78697$$ = {className:"h-px w-4 bg-pink-500/50"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__78697$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__78697$$);
    }(), $APP.$cljs$core$truth_$$($expanded_QMARK_$jscomp$2$$) ? "Summary" : "Expand", function() {
      var $G__78705$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-400  dark:text-slate-600"), children:$APP.$cljs$core$truth_$$($expanded_QMARK_$jscomp$2$$) ? "▲" : "▼"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__78705$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__78705$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("button", $G__78689_map__78681_map__78681__$1_props__41575__auto__$jscomp$57_vec__78678$$) : $APP.$helix$core$jsxs$$.call(null, "button", $G__78689_map__78681_map__78681__$1_props__41575__auto__$jscomp$57_vec__78678$$);
};
$amp$pages$budget$cash_flow$summary_header$$ = function($G__78773_79440_G__78780_map__78768_map__78768__$1_props__41575__auto__$jscomp$58_vec__78765$$, $G__78774_79441_entries$jscomp$6_maybe_ref__41576__auto__$jscomp$58$$) {
  $G__78773_79440_G__78780_map__78768_map__78768__$1_props__41575__auto__$jscomp$58_vec__78765$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__78773_79440_G__78780_map__78768_map__78768__$1_props__41575__auto__$jscomp$58_vec__78765$$), $G__78774_79441_entries$jscomp$6_maybe_ref__41576__auto__$jscomp$58$$], null);
  $G__78773_79440_G__78780_map__78768_map__78768__$1_props__41575__auto__$jscomp$58_vec__78765$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__78773_79440_G__78780_map__78768_map__78768__$1_props__41575__auto__$jscomp$58_vec__78765$$, 0, null);
  $G__78773_79440_G__78780_map__78768_map__78768__$1_props__41575__auto__$jscomp$58_vec__78765$$ = $APP.$cljs$core$__destructure_map$$($G__78773_79440_G__78780_map__78768_map__78768__$1_props__41575__auto__$jscomp$58_vec__78765$$);
  $G__78774_79441_entries$jscomp$6_maybe_ref__41576__auto__$jscomp$58$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__78773_79440_G__78780_map__78768_map__78768__$1_props__41575__auto__$jscomp$58_vec__78765$$, $cljs$cst$875$entries$$);
  var $target_total$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__78773_79440_G__78780_map__78768_map__78768__$1_props__41575__auto__$jscomp$58_vec__78765$$, $cljs$cst$884$target_total$$), $funds_raised$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__78773_79440_G__78780_map__78768_map__78768__$1_props__41575__auto__$jscomp$58_vec__78765$$, $cljs$cst$810$funds_raised$$);
  $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__78773_79440_G__78780_map__78768_map__78768__$1_props__41575__auto__$jscomp$58_vec__78765$$, $cljs$cst$809$debt_raised$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $paid_sum$$ = $APP.$cljs$core$reduce$cljs$0core$0IFn$0_invoke$0arity$03$$($APP.$cljs$core$_PLUS_$$, 0, $APP.$cljs$core$map$$.$cljs$core$IFn$_invoke$arity$2$($cljs$cst$791$amount$$, $APP.$cljs$core$filter$cljs$0core$0IFn$0_invoke$0arity$02$$(function($p1__78721_SHARP_$$) {
    return $APP.$cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$($cljs$cst$816$paid$$, $APP.$cljs$core$keyword$$.$cljs$core$IFn$_invoke$arity$1$($APP.$cljs$cst$12$status$$.$cljs$core$IFn$_invoke$arity$1$($p1__78721_SHARP_$$)));
  }, $G__78774_79441_entries$jscomp$6_maybe_ref__41576__auto__$jscomp$58$$))), $pending_sum$$ = $target_total$$ - $paid_sum$$, $critical_sum$$ = $APP.$cljs$core$reduce$cljs$0core$0IFn$0_invoke$0arity$03$$($APP.$cljs$core$_PLUS_$$, 0, $APP.$cljs$core$map$$.$cljs$core$IFn$_invoke$arity$2$($cljs$cst$791$amount$$, $APP.$cljs$core$filter$cljs$0core$0IFn$0_invoke$0arity$02$$(function($p1__78726_SHARP_$$) {
    return $APP.$cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$($cljs$cst$834$critical$$, $APP.$cljs$core$keyword$$.$cljs$core$IFn$_invoke$arity$1$($cljs$cst$814$priority$$.$cljs$core$IFn$_invoke$arity$1$($p1__78726_SHARP_$$)));
  }, $G__78774_79441_entries$jscomp$6_maybe_ref__41576__auto__$jscomp$58$$))), $gap$$ = $target_total$$ - $funds_raised$$, $next_due$$ = function() {
    var $d$jscomp$155$$ = new Date();
    $d$jscomp$155$$.setDate($d$jscomp$155$$.getDate() + 7);
    return $d$jscomp$155$$;
  }(), $ref$jscomp$20$$ = $APP.$helix$hooks$use_ref$$(null);
  $G__78773_79440_G__78780_map__78768_map__78768__$1_props__41575__auto__$jscomp$58_vec__78765$$ = $APP.$helix$hooks$wrap_fx$$(function() {
    return $APP.$cljs$core$truth_$$($APP.$cljs$core$_deref$$($ref$jscomp$20$$)) ? $APP.$module$node_modules$gsap$dist$gsap$$.gsap.fromTo($APP.$cljs$core$_deref$$($ref$jscomp$20$$), {opacity:0, y:-12}, {opacity:1, y:0, duration:0.5, ease:"power2.out"}) : null;
  });
  $G__78774_79441_entries$jscomp$6_maybe_ref__41576__auto__$jscomp$58$$ = [];
  $APP.$helix$hooks$raw_use_effect$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$hooks$raw_use_effect$$.$cljs$core$IFn$_invoke$arity$2$($G__78773_79440_G__78780_map__78768_map__78768__$1_props__41575__auto__$jscomp$58_vec__78765$$, $G__78774_79441_entries$jscomp$6_maybe_ref__41576__auto__$jscomp$58$$) : $APP.$helix$hooks$raw_use_effect$$.call(null, $G__78773_79440_G__78780_map__78768_map__78768__$1_props__41575__auto__$jscomp$58_vec__78765$$, $G__78774_79441_entries$jscomp$6_maybe_ref__41576__auto__$jscomp$58$$);
  $G__78773_79440_G__78780_map__78768_map__78768__$1_props__41575__auto__$jscomp$58_vec__78765$$ = function() {
    return {ref:$ref$jscomp$20$$, className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["mb-4 pb-5 opacity-0", "border-b", "border-slate-200 dark:border-white/15"]))), children:[function() {
      var $G__78784$$ = function() {
        return {className:"mb-6 flex items-center gap-3", children:[function() {
          var $G__78788$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["w-10", "h-px bg-pink-500/70"])))};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__78788$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__78788$$);
        }(), function() {
          var $G__78792$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$eyebrow_highlight$$), children:"4. "};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__78792$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__78792$$);
        }(), function() {
          var $G__78798$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$eyebrow_midlight$$), children:"Cash Flow"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__78798$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__78798$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__78784$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__78784$$);
    }(), function() {
      var $G__78804$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-mono", "text-3xl", "font-extrabold", "tracking-tight", "text-slate-900  dark:text-slate-100"]))), children:$amp$pages$budget$cash_flow$format_currency$$($target_total$$)};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__78804$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__78804$$);
    }(), function() {
      var $G__78808$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-mono", "text-[11px] mt-0.5", "text-slate-600  dark:text-slate-400"]))), children:"target total"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__78808$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__78808$$);
    }(), function() {
      var $G__78812$$ = function() {
        return {className:"mt-4 grid grid-cols-2 gap-4", children:[function() {
          var $G__78816$$ = function() {
            return {className:"border-l-2 border-emerald-500/90 dark:border-emerald-300/90 pl-3", children:[function() {
              var $G__78822$$ = {className:"font-mono text-lg uppercase tracking-widest text-emerald-600/50 dark:text-emerald-300/50 mb-1", children:"Funds Raised"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__78822$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__78822$$);
            }(), function() {
              var $G__78826$$ = {className:"font-mono text-lg font-bold text-emerald-600 dark:text-emerald-300", children:$amp$pages$budget$cash_flow$format_currency$$($funds_raised$$)};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__78826$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__78826$$);
            }()]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__78816$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__78816$$);
        }(), function() {
          var $G__78832$$ = function() {
            return {className:"border-l-2 border-pink-500/90 dark:border-pink-300/90 pl-3", children:[function() {
              var $G__78836$$ = {className:"font-mono text-lg uppercase tracking-widest text-pink-600/50 dark:text-pink-300/50 mb-1", children:"Remaining"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__78836$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__78836$$);
            }(), function() {
              var $G__78842$$ = {className:"font-mono text-lg font-bold text-pink-600 dark:text-pink-300", children:$amp$pages$budget$cash_flow$format_currency$$($gap$$)};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__78842$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__78842$$);
            }()]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__78832$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__78832$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__78812$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__78812$$);
    }(), function() {
      var $G__78849$$ = function() {
        return {className:"mt-3 grid grid-cols-2 gap-4", children:[function() {
          var $G__78853$$ = function() {
            return {className:"border-l-2 border-emerald-500/20 dark:border-emerald-300/20 pl-3", children:[function() {
              var $G__78857$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$("font-mono;text-lg;uppercase;tracking-widest;text-slate-600  dark:text-slate-400;mb-1".split(";")))), children:"COST, PAID"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__78857$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__78857$$);
            }(), function() {
              var $G__78861$$ = {className:"font-mono text-lg font-bold text-emerald-600 dark:text-emerald-300", children:$amp$pages$budget$cash_flow$format_currency$$($paid_sum$$)};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__78861$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__78861$$);
            }()]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__78853$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__78853$$);
        }(), function() {
          var $G__78865$$ = function() {
            return {className:$APP.$helix$impl$props$normalize_class$$("border-l-2 pl-3 " + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$("border-slate-200 dark:border-white/15")), children:[function() {
              var $G__78869$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$("font-mono;text-lg;uppercase;tracking-widest;text-slate-600  dark:text-slate-400;mb-1".split(";")))), children:"Pending"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__78869$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__78869$$);
            }(), function() {
              var $G__78877$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-mono", "text-lg", "font-bold", " text-pink-600 dark:text-pink-300"]))), children:$amp$pages$budget$cash_flow$format_currency$$($pending_sum$$)};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__78877$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__78877$$);
            }()]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__78865$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__78865$$);
        }(), function() {
          var $G__78882$$ = function() {
            return {className:"border-l-2 border-pink-500/30 pl-3", children:[function() {
              var $G__78891$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$("font-mono;text-lg;uppercase;tracking-widest;text-slate-600  dark:text-slate-400;mb-1".split(";")))), children:"Critical"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__78891$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__78891$$);
            }(), function() {
              var $G__78900$$ = {className:"font-mono text-lg font-bold text-pink-600 dark:text-pink-300", children:$amp$pages$budget$cash_flow$format_currency$$($critical_sum$$)};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__78900$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__78900$$);
            }()]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__78882$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__78882$$);
        }(), function() {
          var $G__78906$$ = function() {
            return {className:"border-l-2 border-indigo-500/30 dark:border-indigo-400/30 pl-3", children:[function() {
              var $G__78912$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$("font-mono;text-lg;uppercase;tracking-widest;text-slate-600  dark:text-slate-400;mb-1".split(";")))), children:"Next Due"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__78912$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__78912$$);
            }(), function() {
              var $G__78926$$ = {className:"font-mono text-base font-bold text-indigo-600 dark:text-indigo-300", children:"" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($next_due$$.toLocaleString("en-US", {month:"short"})) + " " + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($next_due$$.getDate())};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__78926$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__78926$$);
            }()]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__78906$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__78906$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__78849$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__78849$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__78773_79440_G__78780_map__78768_map__78768__$1_props__41575__auto__$jscomp$58_vec__78765$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__78773_79440_G__78780_map__78768_map__78768__$1_props__41575__auto__$jscomp$58_vec__78765$$);
};
$amp$pages$budget$cash_flow$cash_flow$$ = function($G__79012_79515_G__79017_map__79003_map__79003__$1_props__41575__auto__$jscomp$59_vec__79000_vec__79004_vec__79007$$, $G__79013_79516_maybe_ref__41576__auto__$jscomp$59$$) {
  $G__79012_79515_G__79017_map__79003_map__79003__$1_props__41575__auto__$jscomp$59_vec__79000_vec__79004_vec__79007$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__79012_79515_G__79017_map__79003_map__79003__$1_props__41575__auto__$jscomp$59_vec__79000_vec__79004_vec__79007$$), $G__79013_79516_maybe_ref__41576__auto__$jscomp$59$$], null);
  $G__79012_79515_G__79017_map__79003_map__79003__$1_props__41575__auto__$jscomp$59_vec__79000_vec__79004_vec__79007$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__79012_79515_G__79017_map__79003_map__79003__$1_props__41575__auto__$jscomp$59_vec__79000_vec__79004_vec__79007$$, 0, null);
  $G__79012_79515_G__79017_map__79003_map__79003__$1_props__41575__auto__$jscomp$59_vec__79000_vec__79004_vec__79007$$ = $APP.$cljs$core$__destructure_map$$($G__79012_79515_G__79017_map__79003_map__79003__$1_props__41575__auto__$jscomp$59_vec__79000_vec__79004_vec__79007$$);
  var $id$jscomp$88$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__79012_79515_G__79017_map__79003_map__79003__$1_props__41575__auto__$jscomp$59_vec__79000_vec__79004_vec__79007$$, $APP.$cljs$cst$285$id$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__79012_79515_G__79017_map__79003_map__79003__$1_props__41575__auto__$jscomp$59_vec__79000_vec__79004_vec__79007$$ = $APP.$helix$hooks$use_state$$(null);
  var $error$jscomp$22$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__79012_79515_G__79017_map__79003_map__79003__$1_props__41575__auto__$jscomp$59_vec__79000_vec__79004_vec__79007$$, 0, null);
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__79012_79515_G__79017_map__79003_map__79003__$1_props__41575__auto__$jscomp$59_vec__79000_vec__79004_vec__79007$$, 1, null);
  $G__79012_79515_G__79017_map__79003_map__79003__$1_props__41575__auto__$jscomp$59_vec__79000_vec__79004_vec__79007$$ = $APP.$helix$hooks$use_state$$(!1);
  var $expanded_QMARK_$jscomp$3$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__79012_79515_G__79017_map__79003_map__79003__$1_props__41575__auto__$jscomp$59_vec__79000_vec__79004_vec__79007$$, 0, null), $set_expanded_BANG_$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__79012_79515_G__79017_map__79003_map__79003__$1_props__41575__auto__$jscomp$59_vec__79000_vec__79004_vec__79007$$, 1, null), $container_ref$jscomp$2$$ = $APP.$helix$hooks$use_ref$$(null);
  $G__79012_79515_G__79017_map__79003_map__79003__$1_props__41575__auto__$jscomp$59_vec__79000_vec__79004_vec__79007$$ = $APP.$helix$hooks$wrap_fx$$(function() {
    if ($APP.$cljs$core$truth_$$($APP.$cljs$core$truth_$$($amp$pages$budget$cash_flow$cashflow_data$$) ? $APP.$cljs$core$_deref$$($container_ref$jscomp$2$$) : $amp$pages$budget$cash_flow$cashflow_data$$)) {
      var $spine$$ = $APP.$cljs$core$_deref$$($container_ref$jscomp$2$$).querySelector(".cf-spine");
      return $APP.$cljs$core$truth_$$($spine$$) ? $APP.$module$node_modules$gsap$dist$gsap$$.gsap.fromTo($spine$$, {scaleY:0}, {scaleY:1, duration:0.8, delay:0.05, ease:"power3.out"}) : null;
    }
    return null;
  });
  $G__79013_79516_maybe_ref__41576__auto__$jscomp$59$$ = [$amp$pages$budget$cash_flow$cashflow_data$$];
  $APP.$helix$hooks$raw_use_effect$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$hooks$raw_use_effect$$.$cljs$core$IFn$_invoke$arity$2$($G__79012_79515_G__79017_map__79003_map__79003__$1_props__41575__auto__$jscomp$59_vec__79000_vec__79004_vec__79007$$, $G__79013_79516_maybe_ref__41576__auto__$jscomp$59$$) : $APP.$helix$hooks$raw_use_effect$$.call(null, $G__79012_79515_G__79017_map__79003_map__79003__$1_props__41575__auto__$jscomp$59_vec__79000_vec__79004_vec__79007$$, $G__79013_79516_maybe_ref__41576__auto__$jscomp$59$$);
  $G__79012_79515_G__79017_map__79003_map__79003__$1_props__41575__auto__$jscomp$59_vec__79000_vec__79004_vec__79007$$ = function() {
    return {id:$id$jscomp$88$$, ref:$container_ref$jscomp$2$$, className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["min-h-screen px-4 pb-8 pt-6 antialiased selection:bg-pink-500/30", "text-slate-900  dark:text-slate-100", "bg-white        dark:bg-slate-900"]))), children:$APP.$cljs$core$truth_$$($error$jscomp$22$$) ? function() {
      var $G__79023$$ = {className:"font-mono text-sm text-red-400 p-4", children:"err: " + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($error$jscomp$22$$)};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__79023$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__79023$$);
    }() : $amp$pages$budget$cash_flow$cashflow_data$$ == null ? function() {
      var $G__79029_G__79033$jscomp$inline_3725$$ = {className:"h-5 w-5 animate-spin border-2 border-slate-700 border-t-pink-400"};
      $G__79029_G__79033$jscomp$inline_3725$$ = {className:"flex items-center justify-center py-20", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__79029_G__79033$jscomp$inline_3725$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__79029_G__79033$jscomp$inline_3725$$)};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__79029_G__79033$jscomp$inline_3725$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__79029_G__79033$jscomp$inline_3725$$);
    }() : function() {
      var $G__79186_map__79040__$1_sorted$jscomp$1$$ = $APP.$cljs$core$__destructure_map$$($amp$pages$budget$cash_flow$cashflow_data$$), $cash_flow_model$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__79186_map__79040__$1_sorted$jscomp$1$$, $cljs$cst$811$cash_flow_model$$), $funds_raised$jscomp$1$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__79186_map__79040__$1_sorted$jscomp$1$$, $cljs$cst$810$funds_raised$$), $debt_raised$jscomp$1$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__79186_map__79040__$1_sorted$jscomp$1$$, 
      $cljs$cst$809$debt_raised$$), $target_total$jscomp$1$$ = $amp$pages$budget$table$sub_total_all_sections$$($amp$pages$budget$cost_breakdown$cost_data$$) + 66821, $entries_kw$$ = $APP.$cljs$core$map$$.$cljs$core$IFn$_invoke$arity$2$(function($p1__78960_SHARP_$$) {
        return $APP.$cljs$core$update$cljs$0core$0IFn$0_invoke$0arity$03$$($APP.$cljs$core$update$cljs$0core$0IFn$0_invoke$0arity$03$$($p1__78960_SHARP_$$, $cljs$cst$814$priority$$, $APP.$cljs$core$keyword$$), $APP.$cljs$cst$12$status$$, $APP.$cljs$core$keyword$$);
      }, $cash_flow_model$$);
      $G__79186_map__79040__$1_sorted$jscomp$1$$ = $APP.$cljs$core$sort_by$cljs$0core$0IFn$0_invoke$0arity$02$$($APP.$cljs$core$comp$$.$cljs$core$IFn$_invoke$arity$3$($amp$pages$budget$cash_flow$date__GT_ms$$, $amp$pages$budget$cash_flow$parse_date$$, $cljs$cst$813$due$$), $entries_kw$$);
      var $groups$jscomp$1$$ = $amp$pages$budget$cash_flow$group_by_month$$($G__79186_map__79040__$1_sorted$jscomp$1$$), $now_ms$$ = $amp$pages$budget$cash_flow$date__GT_ms$$(new Date()), $all_items$$ = function() {
        for (var $items$jscomp$9$$ = $APP.$cljs$core$atom$cljs$0core$0IFn$0_invoke$0arity$01$$($APP.$cljs$core$PersistentVector$EMPTY$$), $now_done$$ = $APP.$cljs$core$atom$cljs$0core$0IFn$0_invoke$0arity$01$$(!1), $counter$$ = $APP.$cljs$core$atom$cljs$0core$0IFn$0_invoke$0arity$01$$(0), $G__79568_seq__79042_79532_seq__79042_79566__$1_temp__5823__auto___79565$$ = $APP.$cljs$core$seq$$($groups$jscomp$1$$), $G__79569_G__79587_chunk__79043_79533_group_79572_seq__79121_79574_seq__79121_79585__$1_temp__5823__auto___79584__$1$$ = 
        null, $G__79570_G__79588_c__5673__auto___79567_chunk__79122_79575_count__79044_79534_entry_79591_month_label_79573$$ = 0, $G__79589_c__5673__auto___79586_count__79123_79576_entry_ms_79592_i__79045_79535$$ = 0;;) {
          if ($G__79589_c__5673__auto___79586_count__79123_79576_entry_ms_79592_i__79045_79535$$ < $G__79570_G__79588_c__5673__auto___79567_chunk__79122_79575_count__79044_79534_entry_79591_month_label_79573$$) {
            var $G__79551_group_79536_i__79124_79577_seq__79063_79538_seq__79063_79549__$1_temp__5823__auto___79548$$ = $G__79569_G__79587_chunk__79043_79533_group_79572_seq__79121_79574_seq__79121_79585__$1_temp__5823__auto___79584__$1$$.$cljs$core$IIndexed$_nth$arity$2$(null, $G__79589_c__5673__auto___79586_count__79123_79576_entry_ms_79592_i__79045_79535$$), $G__79552_chunk__79064_79539_entry_79555_entry_79578_month_label_79537$$ = $amp$pages$budget$cash_flow$parse_date$$($cljs$cst$813$due$$.$cljs$core$IFn$_invoke$arity$1$($APP.$cljs$core$first$$($G__79551_group_79536_i__79124_79577_seq__79063_79538_seq__79063_79549__$1_temp__5823__auto___79548$$))).toLocaleString("en-US", 
            {month:"long", year:"numeric"});
            $APP.$cljs$core$swap_BANG_$$.$cljs$core$IFn$_invoke$arity$3$($items$jscomp$9$$, $APP.$cljs$core$conj$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$25$type$$, $cljs$cst$885$month$$, $APP.$cljs$cst$408$label$$, $G__79552_chunk__79064_79539_entry_79555_entry_79578_month_label_79537$$, $APP.$cljs$cst$744$idx$$, $APP.$cljs$core$_deref$$($counter$$)], null));
            $APP.$cljs$core$swap_BANG_$$.$cljs$core$IFn$_invoke$arity$2$($counter$$, $APP.$cljs$core$inc$$);
            $G__79551_group_79536_i__79124_79577_seq__79063_79538_seq__79063_79549__$1_temp__5823__auto___79548$$ = $APP.$cljs$core$seq$$($G__79551_group_79536_i__79124_79577_seq__79063_79538_seq__79063_79549__$1_temp__5823__auto___79548$$);
            $G__79552_chunk__79064_79539_entry_79555_entry_79578_month_label_79537$$ = null;
            for (var $G__79553_c__5673__auto___79550_count__79065_79540_entry_ms_79556_entry_ms_79579$$ = 0, $i__79066_79541$$ = 0;;) {
              if ($i__79066_79541$$ < $G__79553_c__5673__auto___79550_count__79065_79540_entry_ms_79556_entry_ms_79579$$) {
                var $entry_79542$$ = $G__79552_chunk__79064_79539_entry_79555_entry_79578_month_label_79537$$.$cljs$core$IIndexed$_nth$arity$2$(null, $i__79066_79541$$), $entry_ms_79543$$ = $amp$pages$budget$cash_flow$date__GT_ms$$($amp$pages$budget$cash_flow$parse_date$$($cljs$cst$813$due$$.$cljs$core$IFn$_invoke$arity$1$($entry_79542$$)));
                $APP.$cljs$core$not$$($APP.$cljs$core$_deref$$($now_done$$)) && $entry_ms_79543$$ > $now_ms$$ && ($APP.$cljs$core$swap_BANG_$$.$cljs$core$IFn$_invoke$arity$3$($items$jscomp$9$$, $APP.$cljs$core$conj$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$25$type$$, $cljs$cst$886$now$$], null)), $APP.$cljs$core$reset_BANG_$$($now_done$$, !0));
                $APP.$cljs$core$swap_BANG_$$.$cljs$core$IFn$_invoke$arity$3$($items$jscomp$9$$, $APP.$cljs$core$conj$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$25$type$$, $cljs$cst$881$entry$$, $cljs$cst$881$entry$$, $entry_79542$$, $APP.$cljs$cst$744$idx$$, $APP.$cljs$core$_deref$$($counter$$), $cljs$cst$887$past_QMARK_$$, $APP.$cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$($cljs$cst$816$paid$$, $APP.$cljs$cst$12$status$$.$cljs$core$IFn$_invoke$arity$1$($entry_79542$$))], 
                null));
                $APP.$cljs$core$swap_BANG_$$.$cljs$core$IFn$_invoke$arity$2$($counter$$, $APP.$cljs$core$inc$$);
                $i__79066_79541$$ += 1;
              } else {
                if ($G__79551_group_79536_i__79124_79577_seq__79063_79538_seq__79063_79549__$1_temp__5823__auto___79548$$ = $APP.$cljs$core$seq$$($G__79551_group_79536_i__79124_79577_seq__79063_79538_seq__79063_79549__$1_temp__5823__auto___79548$$)) {
                  $APP.$cljs$core$chunked_seq_QMARK_$$($G__79551_group_79536_i__79124_79577_seq__79063_79538_seq__79063_79549__$1_temp__5823__auto___79548$$) ? ($G__79553_c__5673__auto___79550_count__79065_79540_entry_ms_79556_entry_ms_79579$$ = $APP.$cljs$core$_chunked_first$$($G__79551_group_79536_i__79124_79577_seq__79063_79538_seq__79063_79549__$1_temp__5823__auto___79548$$), $G__79551_group_79536_i__79124_79577_seq__79063_79538_seq__79063_79549__$1_temp__5823__auto___79548$$ = $APP.$cljs$core$_chunked_rest$$($G__79551_group_79536_i__79124_79577_seq__79063_79538_seq__79063_79549__$1_temp__5823__auto___79548$$), 
                  $G__79552_chunk__79064_79539_entry_79555_entry_79578_month_label_79537$$ = $G__79553_c__5673__auto___79550_count__79065_79540_entry_ms_79556_entry_ms_79579$$, $G__79553_c__5673__auto___79550_count__79065_79540_entry_ms_79556_entry_ms_79579$$ = $APP.$cljs$core$count$$($G__79553_c__5673__auto___79550_count__79065_79540_entry_ms_79556_entry_ms_79579$$)) : ($G__79552_chunk__79064_79539_entry_79555_entry_79578_month_label_79537$$ = $APP.$cljs$core$first$$($G__79551_group_79536_i__79124_79577_seq__79063_79538_seq__79063_79549__$1_temp__5823__auto___79548$$), 
                  $G__79553_c__5673__auto___79550_count__79065_79540_entry_ms_79556_entry_ms_79579$$ = $amp$pages$budget$cash_flow$date__GT_ms$$($amp$pages$budget$cash_flow$parse_date$$($cljs$cst$813$due$$.$cljs$core$IFn$_invoke$arity$1$($G__79552_chunk__79064_79539_entry_79555_entry_79578_month_label_79537$$))), $APP.$cljs$core$not$$($APP.$cljs$core$_deref$$($now_done$$)) && $G__79553_c__5673__auto___79550_count__79065_79540_entry_ms_79556_entry_ms_79579$$ > $now_ms$$ && ($APP.$cljs$core$swap_BANG_$$.$cljs$core$IFn$_invoke$arity$3$($items$jscomp$9$$, 
                  $APP.$cljs$core$conj$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$25$type$$, $cljs$cst$886$now$$], null)), $APP.$cljs$core$reset_BANG_$$($now_done$$, !0)), $APP.$cljs$core$swap_BANG_$$.$cljs$core$IFn$_invoke$arity$3$($items$jscomp$9$$, $APP.$cljs$core$conj$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$25$type$$, $cljs$cst$881$entry$$, $cljs$cst$881$entry$$, $G__79552_chunk__79064_79539_entry_79555_entry_79578_month_label_79537$$, $APP.$cljs$cst$744$idx$$, 
                  $APP.$cljs$core$_deref$$($counter$$), $cljs$cst$887$past_QMARK_$$, $APP.$cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$($cljs$cst$816$paid$$, $APP.$cljs$cst$12$status$$.$cljs$core$IFn$_invoke$arity$1$($G__79552_chunk__79064_79539_entry_79555_entry_79578_month_label_79537$$))], null)), $APP.$cljs$core$swap_BANG_$$.$cljs$core$IFn$_invoke$arity$2$($counter$$, $APP.$cljs$core$inc$$), $G__79551_group_79536_i__79124_79577_seq__79063_79538_seq__79063_79549__$1_temp__5823__auto___79548$$ = 
                  $APP.$cljs$core$next$$($G__79551_group_79536_i__79124_79577_seq__79063_79538_seq__79063_79549__$1_temp__5823__auto___79548$$), $G__79552_chunk__79064_79539_entry_79555_entry_79578_month_label_79537$$ = null, $G__79553_c__5673__auto___79550_count__79065_79540_entry_ms_79556_entry_ms_79579$$ = 0), $i__79066_79541$$ = 0;
                } else {
                  break;
                }
              }
            }
            $G__79589_c__5673__auto___79586_count__79123_79576_entry_ms_79592_i__79045_79535$$ += 1;
          } else {
            if ($G__79568_seq__79042_79532_seq__79042_79566__$1_temp__5823__auto___79565$$ = $APP.$cljs$core$seq$$($G__79568_seq__79042_79532_seq__79042_79566__$1_temp__5823__auto___79565$$)) {
              if ($APP.$cljs$core$chunked_seq_QMARK_$$($G__79568_seq__79042_79532_seq__79042_79566__$1_temp__5823__auto___79565$$)) {
                $G__79570_G__79588_c__5673__auto___79567_chunk__79122_79575_count__79044_79534_entry_79591_month_label_79573$$ = $APP.$cljs$core$_chunked_first$$($G__79568_seq__79042_79532_seq__79042_79566__$1_temp__5823__auto___79565$$), $G__79568_seq__79042_79532_seq__79042_79566__$1_temp__5823__auto___79565$$ = $APP.$cljs$core$_chunked_rest$$($G__79568_seq__79042_79532_seq__79042_79566__$1_temp__5823__auto___79565$$), $G__79569_G__79587_chunk__79043_79533_group_79572_seq__79121_79574_seq__79121_79585__$1_temp__5823__auto___79584__$1$$ = 
                $G__79570_G__79588_c__5673__auto___79567_chunk__79122_79575_count__79044_79534_entry_79591_month_label_79573$$, $G__79570_G__79588_c__5673__auto___79567_chunk__79122_79575_count__79044_79534_entry_79591_month_label_79573$$ = $APP.$cljs$core$count$$($G__79570_G__79588_c__5673__auto___79567_chunk__79122_79575_count__79044_79534_entry_79591_month_label_79573$$);
              } else {
                $G__79569_G__79587_chunk__79043_79533_group_79572_seq__79121_79574_seq__79121_79585__$1_temp__5823__auto___79584__$1$$ = $APP.$cljs$core$first$$($G__79568_seq__79042_79532_seq__79042_79566__$1_temp__5823__auto___79565$$);
                $G__79570_G__79588_c__5673__auto___79567_chunk__79122_79575_count__79044_79534_entry_79591_month_label_79573$$ = $amp$pages$budget$cash_flow$parse_date$$($cljs$cst$813$due$$.$cljs$core$IFn$_invoke$arity$1$($APP.$cljs$core$first$$($G__79569_G__79587_chunk__79043_79533_group_79572_seq__79121_79574_seq__79121_79585__$1_temp__5823__auto___79584__$1$$))).toLocaleString("en-US", {month:"long", year:"numeric"});
                $APP.$cljs$core$swap_BANG_$$.$cljs$core$IFn$_invoke$arity$3$($items$jscomp$9$$, $APP.$cljs$core$conj$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$25$type$$, $cljs$cst$885$month$$, $APP.$cljs$cst$408$label$$, $G__79570_G__79588_c__5673__auto___79567_chunk__79122_79575_count__79044_79534_entry_79591_month_label_79573$$, $APP.$cljs$cst$744$idx$$, $APP.$cljs$core$_deref$$($counter$$)], null));
                $APP.$cljs$core$swap_BANG_$$.$cljs$core$IFn$_invoke$arity$2$($counter$$, $APP.$cljs$core$inc$$);
                $G__79569_G__79587_chunk__79043_79533_group_79572_seq__79121_79574_seq__79121_79585__$1_temp__5823__auto___79584__$1$$ = $APP.$cljs$core$seq$$($G__79569_G__79587_chunk__79043_79533_group_79572_seq__79121_79574_seq__79121_79585__$1_temp__5823__auto___79584__$1$$);
                $G__79570_G__79588_c__5673__auto___79567_chunk__79122_79575_count__79044_79534_entry_79591_month_label_79573$$ = null;
                for ($G__79551_group_79536_i__79124_79577_seq__79063_79538_seq__79063_79549__$1_temp__5823__auto___79548$$ = $G__79589_c__5673__auto___79586_count__79123_79576_entry_ms_79592_i__79045_79535$$ = 0;;) {
                  if ($G__79551_group_79536_i__79124_79577_seq__79063_79538_seq__79063_79549__$1_temp__5823__auto___79548$$ < $G__79589_c__5673__auto___79586_count__79123_79576_entry_ms_79592_i__79045_79535$$) {
                    $G__79552_chunk__79064_79539_entry_79555_entry_79578_month_label_79537$$ = $G__79570_G__79588_c__5673__auto___79567_chunk__79122_79575_count__79044_79534_entry_79591_month_label_79573$$.$cljs$core$IIndexed$_nth$arity$2$(null, $G__79551_group_79536_i__79124_79577_seq__79063_79538_seq__79063_79549__$1_temp__5823__auto___79548$$), $G__79553_c__5673__auto___79550_count__79065_79540_entry_ms_79556_entry_ms_79579$$ = $amp$pages$budget$cash_flow$date__GT_ms$$($amp$pages$budget$cash_flow$parse_date$$($cljs$cst$813$due$$.$cljs$core$IFn$_invoke$arity$1$($G__79552_chunk__79064_79539_entry_79555_entry_79578_month_label_79537$$))), 
                    $APP.$cljs$core$not$$($APP.$cljs$core$_deref$$($now_done$$)) && $G__79553_c__5673__auto___79550_count__79065_79540_entry_ms_79556_entry_ms_79579$$ > $now_ms$$ && ($APP.$cljs$core$swap_BANG_$$.$cljs$core$IFn$_invoke$arity$3$($items$jscomp$9$$, $APP.$cljs$core$conj$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$25$type$$, $cljs$cst$886$now$$], null)), $APP.$cljs$core$reset_BANG_$$($now_done$$, !0)), $APP.$cljs$core$swap_BANG_$$.$cljs$core$IFn$_invoke$arity$3$($items$jscomp$9$$, 
                    $APP.$cljs$core$conj$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$25$type$$, $cljs$cst$881$entry$$, $cljs$cst$881$entry$$, $G__79552_chunk__79064_79539_entry_79555_entry_79578_month_label_79537$$, $APP.$cljs$cst$744$idx$$, $APP.$cljs$core$_deref$$($counter$$), $cljs$cst$887$past_QMARK_$$, $APP.$cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$($cljs$cst$816$paid$$, $APP.$cljs$cst$12$status$$.$cljs$core$IFn$_invoke$arity$1$($G__79552_chunk__79064_79539_entry_79555_entry_79578_month_label_79537$$))], 
                    null)), $APP.$cljs$core$swap_BANG_$$.$cljs$core$IFn$_invoke$arity$2$($counter$$, $APP.$cljs$core$inc$$), $G__79551_group_79536_i__79124_79577_seq__79063_79538_seq__79063_79549__$1_temp__5823__auto___79548$$ += 1;
                  } else {
                    if ($G__79569_G__79587_chunk__79043_79533_group_79572_seq__79121_79574_seq__79121_79585__$1_temp__5823__auto___79584__$1$$ = $APP.$cljs$core$seq$$($G__79569_G__79587_chunk__79043_79533_group_79572_seq__79121_79574_seq__79121_79585__$1_temp__5823__auto___79584__$1$$)) {
                      $APP.$cljs$core$chunked_seq_QMARK_$$($G__79569_G__79587_chunk__79043_79533_group_79572_seq__79121_79574_seq__79121_79585__$1_temp__5823__auto___79584__$1$$) ? ($G__79589_c__5673__auto___79586_count__79123_79576_entry_ms_79592_i__79045_79535$$ = $APP.$cljs$core$_chunked_first$$($G__79569_G__79587_chunk__79043_79533_group_79572_seq__79121_79574_seq__79121_79585__$1_temp__5823__auto___79584__$1$$), $G__79569_G__79587_chunk__79043_79533_group_79572_seq__79121_79574_seq__79121_79585__$1_temp__5823__auto___79584__$1$$ = 
                      $APP.$cljs$core$_chunked_rest$$($G__79569_G__79587_chunk__79043_79533_group_79572_seq__79121_79574_seq__79121_79585__$1_temp__5823__auto___79584__$1$$), $G__79570_G__79588_c__5673__auto___79567_chunk__79122_79575_count__79044_79534_entry_79591_month_label_79573$$ = $G__79589_c__5673__auto___79586_count__79123_79576_entry_ms_79592_i__79045_79535$$, $G__79589_c__5673__auto___79586_count__79123_79576_entry_ms_79592_i__79045_79535$$ = $APP.$cljs$core$count$$($G__79589_c__5673__auto___79586_count__79123_79576_entry_ms_79592_i__79045_79535$$)) : 
                      ($G__79570_G__79588_c__5673__auto___79567_chunk__79122_79575_count__79044_79534_entry_79591_month_label_79573$$ = $APP.$cljs$core$first$$($G__79569_G__79587_chunk__79043_79533_group_79572_seq__79121_79574_seq__79121_79585__$1_temp__5823__auto___79584__$1$$), $G__79589_c__5673__auto___79586_count__79123_79576_entry_ms_79592_i__79045_79535$$ = $amp$pages$budget$cash_flow$date__GT_ms$$($amp$pages$budget$cash_flow$parse_date$$($cljs$cst$813$due$$.$cljs$core$IFn$_invoke$arity$1$($G__79570_G__79588_c__5673__auto___79567_chunk__79122_79575_count__79044_79534_entry_79591_month_label_79573$$))), 
                      $APP.$cljs$core$not$$($APP.$cljs$core$_deref$$($now_done$$)) && $G__79589_c__5673__auto___79586_count__79123_79576_entry_ms_79592_i__79045_79535$$ > $now_ms$$ && ($APP.$cljs$core$swap_BANG_$$.$cljs$core$IFn$_invoke$arity$3$($items$jscomp$9$$, $APP.$cljs$core$conj$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$25$type$$, $cljs$cst$886$now$$], null)), $APP.$cljs$core$reset_BANG_$$($now_done$$, !0)), $APP.$cljs$core$swap_BANG_$$.$cljs$core$IFn$_invoke$arity$3$($items$jscomp$9$$, 
                      $APP.$cljs$core$conj$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$25$type$$, $cljs$cst$881$entry$$, $cljs$cst$881$entry$$, $G__79570_G__79588_c__5673__auto___79567_chunk__79122_79575_count__79044_79534_entry_79591_month_label_79573$$, $APP.$cljs$cst$744$idx$$, $APP.$cljs$core$_deref$$($counter$$), $cljs$cst$887$past_QMARK_$$, $APP.$cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$($cljs$cst$816$paid$$, $APP.$cljs$cst$12$status$$.$cljs$core$IFn$_invoke$arity$1$($G__79570_G__79588_c__5673__auto___79567_chunk__79122_79575_count__79044_79534_entry_79591_month_label_79573$$))], 
                      null)), $APP.$cljs$core$swap_BANG_$$.$cljs$core$IFn$_invoke$arity$2$($counter$$, $APP.$cljs$core$inc$$), $G__79569_G__79587_chunk__79043_79533_group_79572_seq__79121_79574_seq__79121_79585__$1_temp__5823__auto___79584__$1$$ = $APP.$cljs$core$next$$($G__79569_G__79587_chunk__79043_79533_group_79572_seq__79121_79574_seq__79121_79585__$1_temp__5823__auto___79584__$1$$), $G__79570_G__79588_c__5673__auto___79567_chunk__79122_79575_count__79044_79534_entry_79591_month_label_79573$$ = 
                      null, $G__79589_c__5673__auto___79586_count__79123_79576_entry_ms_79592_i__79045_79535$$ = 0), $G__79551_group_79536_i__79124_79577_seq__79063_79538_seq__79063_79549__$1_temp__5823__auto___79548$$ = 0;
                    } else {
                      break;
                    }
                  }
                }
                $G__79568_seq__79042_79532_seq__79042_79566__$1_temp__5823__auto___79565$$ = $APP.$cljs$core$next$$($G__79568_seq__79042_79532_seq__79042_79566__$1_temp__5823__auto___79565$$);
                $G__79569_G__79587_chunk__79043_79533_group_79572_seq__79121_79574_seq__79121_79585__$1_temp__5823__auto___79584__$1$$ = null;
                $G__79570_G__79588_c__5673__auto___79567_chunk__79122_79575_count__79044_79534_entry_79591_month_label_79573$$ = 0;
              }
              $G__79589_c__5673__auto___79586_count__79123_79576_entry_ms_79592_i__79045_79535$$ = 0;
            } else {
              break;
            }
          }
        }
        $APP.$cljs$core$not$$($APP.$cljs$core$_deref$$($now_done$$)) && $APP.$cljs$core$swap_BANG_$$.$cljs$core$IFn$_invoke$arity$3$($items$jscomp$9$$, $APP.$cljs$core$conj$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$25$type$$, $cljs$cst$886$now$$], null));
        return $APP.$cljs$core$_deref$$($items$jscomp$9$$);
      }();
      $G__79186_map__79040__$1_sorted$jscomp$1$$ = function() {
        return {children:[function() {
          var $G__79191$$ = {entries:$entries_kw$$, "target-total":$target_total$jscomp$1$$, "funds-raised":$funds_raised$jscomp$1$$, "debt-raised":$debt_raised$jscomp$1$$};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$pages$budget$cash_flow$summary_header$$, $G__79191$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$budget$cash_flow$summary_header$$, $G__79191$$);
        }(), function() {
          var $G__79195$$ = function() {
            return {"expanded?":$expanded_QMARK_$jscomp$3$$, "on-toggle":function() {
              return $set_expanded_BANG_$$.$cljs$core$IFn$_invoke$arity$1$ ? $set_expanded_BANG_$$.$cljs$core$IFn$_invoke$arity$1$($APP.$cljs$core$not$$) : $set_expanded_BANG_$$.call(null, $APP.$cljs$core$not$$);
            }};
          }();
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$pages$budget$cash_flow$view_toggle$$, $G__79195$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$budget$cash_flow$view_toggle$$, $G__79195$$);
        }(), function() {
          var $G__79199$$ = function() {
            return {className:"relative", children:[function() {
              var $G__79203$$ = {className:$APP.$helix$impl$props$normalize_class$$("cf-spine absolute left-[13px] top-0 h-full origin-top border-l border-dashed " + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$("border-slate-200 dark:border-white/15"))};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__79203$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__79203$$);
            }(), $APP.$cljs$core$truth_$$($expanded_QMARK_$jscomp$3$$) ? $APP.$cljs$core$map_indexed$cljs$0core$0IFn$0_invoke$0arity$02$$(function($G__79209_G__79213_G__79219_i$jscomp$423$$, $G__79208_G__79218_item$jscomp$40$$) {
              var $G__79206_G__79206__$1$$ = $APP.$cljs$cst$25$type$$.$cljs$core$IFn$_invoke$arity$1$($G__79208_G__79218_item$jscomp$40$$);
              $G__79206_G__79206__$1$$ = $G__79206_G__79206__$1$$ instanceof $APP.$cljs$core$Keyword$$ ? $G__79206_G__79206__$1$$.$fqn$ : null;
              switch($G__79206_G__79206__$1$$) {
                case "month":
                  return $G__79208_G__79218_item$jscomp$40$$ = {label:$APP.$cljs$cst$408$label$$.$cljs$core$IFn$_invoke$arity$1$($G__79208_G__79218_item$jscomp$40$$), idx:$APP.$cljs$cst$744$idx$$.$cljs$core$IFn$_invoke$arity$1$($G__79208_G__79218_item$jscomp$40$$)}, $G__79209_G__79213_G__79219_i$jscomp$423$$ = "m-" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($G__79209_G__79213_G__79219_i$jscomp$423$$), $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$($amp$pages$budget$cash_flow$month_header$$, 
                  $G__79208_G__79218_item$jscomp$40$$, $G__79209_G__79213_G__79219_i$jscomp$423$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$budget$cash_flow$month_header$$, $G__79208_G__79218_item$jscomp$40$$, $G__79209_G__79213_G__79219_i$jscomp$423$$);
                case "now":
                  return $G__79209_G__79213_G__79219_i$jscomp$423$$ = {}, $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$($amp$pages$budget$cash_flow$now_marker$$, $G__79209_G__79213_G__79219_i$jscomp$423$$, "now") : $APP.$helix$core$jsx$$.call(null, $amp$pages$budget$cash_flow$now_marker$$, $G__79209_G__79213_G__79219_i$jscomp$423$$, "now");
                case "entry":
                  return $G__79208_G__79218_item$jscomp$40$$ = {entry:$cljs$cst$881$entry$$.$cljs$core$IFn$_invoke$arity$1$($G__79208_G__79218_item$jscomp$40$$), idx:$APP.$cljs$cst$744$idx$$.$cljs$core$IFn$_invoke$arity$1$($G__79208_G__79218_item$jscomp$40$$), "is-past":$APP.$cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$($cljs$cst$816$paid$$, $APP.$cljs$cst$12$status$$.$cljs$core$IFn$_invoke$arity$1$($cljs$cst$881$entry$$.$cljs$core$IFn$_invoke$arity$1$($G__79208_G__79218_item$jscomp$40$$)))}, 
                  $G__79209_G__79213_G__79219_i$jscomp$423$$ = "e-" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($G__79209_G__79213_G__79219_i$jscomp$423$$), $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$($amp$pages$budget$cash_flow$timeline_node$$, $G__79208_G__79218_item$jscomp$40$$, $G__79209_G__79213_G__79219_i$jscomp$423$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$budget$cash_flow$timeline_node$$, $G__79208_G__79218_item$jscomp$40$$, 
                  $G__79209_G__79213_G__79219_i$jscomp$423$$);
                default:
                  throw Error("No matching clause: " + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($G__79206_G__79206__$1$$));
              }
            }, $all_items$$) : function() {
              var $c__5673__auto___79615_rollups_seq__79222_79602_temp__5823__auto___79613_vec__79265_79620$$ = $amp$pages$budget$cash_flow$month_rollups$$($entries_kw$$), $now_done$jscomp$1$$ = $APP.$cljs$core$atom$cljs$0core$0IFn$0_invoke$0arity$01$$(!1), $out$jscomp$15$$ = $APP.$cljs$core$atom$cljs$0core$0IFn$0_invoke$0arity$01$$($APP.$cljs$core$PersistentVector$EMPTY$$);
              $c__5673__auto___79615_rollups_seq__79222_79602_temp__5823__auto___79613_vec__79265_79620$$ = $APP.$cljs$core$seq$$($APP.$cljs$core$map_indexed$cljs$0core$0IFn$0_invoke$0arity$02$$($APP.$cljs$core$vector$$, $c__5673__auto___79615_rollups_seq__79222_79602_temp__5823__auto___79613_vec__79265_79620$$));
              for (var $G__79617_chunk__79223_79603_seq__79222_79614__$1$$ = null, $G__79618_count__79224_79604$$ = 0, $G__79616_i__79225_79605$$ = 0;;) {
                if ($G__79616_i__79225_79605$$ < $G__79618_count__79224_79604$$) {
                  var $vec__79252_79606$$ = $G__79617_chunk__79223_79603_seq__79222_79614__$1$$.$cljs$core$IIndexed$_nth$arity$2$(null, $G__79616_i__79225_79605$$), $i_79607$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($vec__79252_79606$$, 0, null), $r_79608$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($vec__79252_79606$$, 1, null);
                  $APP.$cljs$core$truth_$$(function() {
                    var $and__5140__auto__$jscomp$89$$ = $APP.$cljs$core$not$$($APP.$cljs$core$_deref$$($now_done$jscomp$1$$));
                    return $and__5140__auto__$jscomp$89$$ ? $cljs$cst$879$has_now$$.$cljs$core$IFn$_invoke$arity$1$($r_79608$$) : $and__5140__auto__$jscomp$89$$;
                  }()) && ($APP.$cljs$core$swap_BANG_$$.$cljs$core$IFn$_invoke$arity$3$($out$jscomp$15$$, $APP.$cljs$core$conj$$, function() {
                    var $G__79256$$ = {};
                    return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$($amp$pages$budget$cash_flow$now_marker$$, $G__79256$$, "now-s") : $APP.$helix$core$jsx$$.call(null, $amp$pages$budget$cash_flow$now_marker$$, $G__79256$$, "now-s");
                  }()), $APP.$cljs$core$reset_BANG_$$($now_done$jscomp$1$$, !0));
                  $APP.$cljs$core$swap_BANG_$$.$cljs$core$IFn$_invoke$arity$3$($out$jscomp$15$$, $APP.$cljs$core$conj$$, function() {
                    var $G__79261$$ = {rollup:$r_79608$$, idx:$i_79607$$}, $G__79262$$ = "sr-" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($i_79607$$);
                    return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$($amp$pages$budget$cash_flow$month_summary_row$$, $G__79261$$, $G__79262$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$budget$cash_flow$month_summary_row$$, $G__79261$$, $G__79262$$);
                  }());
                  $G__79616_i__79225_79605$$ += 1;
                } else {
                  if ($c__5673__auto___79615_rollups_seq__79222_79602_temp__5823__auto___79613_vec__79265_79620$$ = $APP.$cljs$core$seq$$($c__5673__auto___79615_rollups_seq__79222_79602_temp__5823__auto___79613_vec__79265_79620$$)) {
                    $G__79617_chunk__79223_79603_seq__79222_79614__$1$$ = $c__5673__auto___79615_rollups_seq__79222_79602_temp__5823__auto___79613_vec__79265_79620$$;
                    if ($APP.$cljs$core$chunked_seq_QMARK_$$($G__79617_chunk__79223_79603_seq__79222_79614__$1$$)) {
                      $c__5673__auto___79615_rollups_seq__79222_79602_temp__5823__auto___79613_vec__79265_79620$$ = $APP.$cljs$core$_chunked_first$$($G__79617_chunk__79223_79603_seq__79222_79614__$1$$), $G__79616_i__79225_79605$$ = $APP.$cljs$core$_chunked_rest$$($G__79617_chunk__79223_79603_seq__79222_79614__$1$$), $G__79617_chunk__79223_79603_seq__79222_79614__$1$$ = $c__5673__auto___79615_rollups_seq__79222_79602_temp__5823__auto___79613_vec__79265_79620$$, $G__79618_count__79224_79604$$ = $APP.$cljs$core$count$$($c__5673__auto___79615_rollups_seq__79222_79602_temp__5823__auto___79613_vec__79265_79620$$), 
                      $c__5673__auto___79615_rollups_seq__79222_79602_temp__5823__auto___79613_vec__79265_79620$$ = $G__79616_i__79225_79605$$;
                    } else {
                      $c__5673__auto___79615_rollups_seq__79222_79602_temp__5823__auto___79613_vec__79265_79620$$ = $APP.$cljs$core$first$$($G__79617_chunk__79223_79603_seq__79222_79614__$1$$);
                      var $i_79621$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($c__5673__auto___79615_rollups_seq__79222_79602_temp__5823__auto___79613_vec__79265_79620$$, 0, null), $r_79622$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($c__5673__auto___79615_rollups_seq__79222_79602_temp__5823__auto___79613_vec__79265_79620$$, 1, null);
                      $APP.$cljs$core$truth_$$(function() {
                        var $and__5140__auto__$jscomp$90$$ = $APP.$cljs$core$not$$($APP.$cljs$core$_deref$$($now_done$jscomp$1$$));
                        return $and__5140__auto__$jscomp$90$$ ? $cljs$cst$879$has_now$$.$cljs$core$IFn$_invoke$arity$1$($r_79622$$) : $and__5140__auto__$jscomp$90$$;
                      }()) && ($APP.$cljs$core$swap_BANG_$$.$cljs$core$IFn$_invoke$arity$3$($out$jscomp$15$$, $APP.$cljs$core$conj$$, function() {
                        var $G__79269$$ = {};
                        return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$($amp$pages$budget$cash_flow$now_marker$$, $G__79269$$, "now-s") : $APP.$helix$core$jsx$$.call(null, $amp$pages$budget$cash_flow$now_marker$$, $G__79269$$, "now-s");
                      }()), $APP.$cljs$core$reset_BANG_$$($now_done$jscomp$1$$, !0));
                      $APP.$cljs$core$swap_BANG_$$.$cljs$core$IFn$_invoke$arity$3$($out$jscomp$15$$, $APP.$cljs$core$conj$$, function() {
                        var $G__79274$$ = {rollup:$r_79622$$, idx:$i_79621$$}, $G__79275$$ = "sr-" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($i_79621$$);
                        return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$($amp$pages$budget$cash_flow$month_summary_row$$, $G__79274$$, $G__79275$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$budget$cash_flow$month_summary_row$$, $G__79274$$, $G__79275$$);
                      }());
                      $c__5673__auto___79615_rollups_seq__79222_79602_temp__5823__auto___79613_vec__79265_79620$$ = $APP.$cljs$core$next$$($G__79617_chunk__79223_79603_seq__79222_79614__$1$$);
                      $G__79617_chunk__79223_79603_seq__79222_79614__$1$$ = null;
                      $G__79618_count__79224_79604$$ = 0;
                    }
                    $G__79616_i__79225_79605$$ = 0;
                  } else {
                    break;
                  }
                }
              }
              $APP.$cljs$core$not$$($APP.$cljs$core$_deref$$($now_done$jscomp$1$$)) && $APP.$cljs$core$swap_BANG_$$.$cljs$core$IFn$_invoke$arity$3$($out$jscomp$15$$, $APP.$cljs$core$conj$$, function() {
                var $G__79279$$ = {};
                return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$($amp$pages$budget$cash_flow$now_marker$$, $G__79279$$, "now-s") : $APP.$helix$core$jsx$$.call(null, $amp$pages$budget$cash_flow$now_marker$$, $G__79279$$, "now-s");
              }());
              return $APP.$cljs$core$_deref$$($out$jscomp$15$$);
            }()]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__79199$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__79199$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__79186_map__79040__$1_sorted$jscomp$1$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__79186_map__79040__$1_sorted$jscomp$1$$);
    }()};
  }();
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__79012_79515_G__79017_map__79003_map__79003__$1_props__41575__auto__$jscomp$59_vec__79000_vec__79004_vec__79007$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__79012_79515_G__79017_map__79003_map__79003__$1_props__41575__auto__$jscomp$59_vec__79000_vec__79004_vec__79007$$);
};
$amp$pages$budget$non_profit$non_profit$$ = function($G__76397_map__76374_map__76374__$1_props__41575__auto__$jscomp$60_vec__76371$$, $maybe_ref__41576__auto__$jscomp$60$$) {
  $G__76397_map__76374_map__76374__$1_props__41575__auto__$jscomp$60_vec__76371$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__76397_map__76374_map__76374__$1_props__41575__auto__$jscomp$60_vec__76371$$), $maybe_ref__41576__auto__$jscomp$60$$], null);
  $G__76397_map__76374_map__76374__$1_props__41575__auto__$jscomp$60_vec__76371$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__76397_map__76374_map__76374__$1_props__41575__auto__$jscomp$60_vec__76371$$, 0, null);
  $G__76397_map__76374_map__76374__$1_props__41575__auto__$jscomp$60_vec__76371$$ = $APP.$cljs$core$__destructure_map$$($G__76397_map__76374_map__76374__$1_props__41575__auto__$jscomp$60_vec__76371$$);
  var $id$jscomp$89$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__76397_map__76374_map__76374__$1_props__41575__auto__$jscomp$60_vec__76371$$, $APP.$cljs$cst$285$id$$), $subtitle$jscomp$6$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__76397_map__76374_map__76374__$1_props__41575__auto__$jscomp$60_vec__76371$$, $APP.$cljs$cst$770$subtitle$$), $title$jscomp$26$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__76397_map__76374_map__76374__$1_props__41575__auto__$jscomp$60_vec__76371$$, 
  $APP.$cljs$cst$287$title$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $field_label$$ = $APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-semibold", "text-slate-600  dark:text-slate-400"])), $field_value$$ = $APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["text-right", "font-bold", "text-indigo-600 dark:text-indigo-300", "tracking-wide"]));
  $G__76397_map__76374_map__76374__$1_props__41575__auto__$jscomp$60_vec__76371$$ = function() {
    return {id:$id$jscomp$89$$, children:function() {
      var $G__76412$$ = function() {
        return {idx:8, eyebrow:$subtitle$jscomp$6$$, title:$title$jscomp$26$$, children:function() {
          var $G__76420$$ = function() {
            return {className:"space-y-8 p-4", children:[function() {
              var $G__76430$$ = function() {
                return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["text-slate-700  dark:text-slate-300", "mb-12"]))), children:[function() {
                  var $G__76434$$ = function() {
                    return {children:["The Armenia Pavilion 2026 is supported through ", function() {
                      var $G__76438$$ = {className:$APP.$helix$impl$props$normalize_class$$("font-semibold"), children:"Fallen Angels Inc."};
                      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__76438$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__76438$$);
                    }(), ", a registered ", function() {
                      var $G__76442$$ = {className:$APP.$helix$impl$props$normalize_class$$("font-semibold"), children:"501(c)(3)"};
                      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__76442$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__76442$$);
                    }(), " public non-profit organization. ", function() {
                      var $G__76450$$ = {className:$APP.$helix$impl$props$normalize_class$$("font-semibold"), children:"Contributions are tax deductible"};
                      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__76450$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__76450$$);
                    }(), " to the extent permitted by law."]};
                  }();
                  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__76434$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__76434$$);
                }(), function() {
                  var $G__76458$$ = function() {
                    return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-mono", "text-sm", "mt-6 space-y-1"]))), children:[function() {
                      var $G__76463_G__76467$jscomp$inline_3728$$ = {className:$APP.$helix$impl$props$normalize_class$$($field_label$$), children:"Organization: "};
                      $G__76463_G__76467$jscomp$inline_3728$$ = {children:[$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__76463_G__76467$jscomp$inline_3728$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__76463_G__76467$jscomp$inline_3728$$), "Fallen Angels Inc."]};
                      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__76463_G__76467$jscomp$inline_3728$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__76463_G__76467$jscomp$inline_3728$$);
                    }(), function() {
                      var $G__76475$$ = function() {
                        return {children:[function() {
                          var $G__76479$$ = {className:$APP.$helix$impl$props$normalize_class$$($field_label$$), children:"EIN: "};
                          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__76479$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__76479$$);
                        }(), function() {
                          var $G__76485$$ = {className:$APP.$helix$impl$props$normalize_class$$($field_value$$), children:"92-2395513"};
                          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__76485$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__76485$$);
                        }()]};
                      }();
                      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__76475$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__76475$$);
                    }(), function() {
                      var $G__76495$$ = function() {
                        return {children:[function() {
                          var $G__76501$$ = {className:$APP.$helix$impl$props$normalize_class$$($field_label$$), children:"Located in: "};
                          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__76501$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__76501$$);
                        }(), function() {
                          var $G__76507$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_bold$$), children:"Los Angeles, CA"};
                          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__76507$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__76507$$);
                        }()]};
                      }();
                      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__76495$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__76495$$);
                    }()]};
                  }();
                  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__76458$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__76458$$);
                }(), function() {
                  var $G__76511$$ = function() {
                    return {className:"mt-10 grid grid-cols-1 lg:grid-cols-2 gap-10", children:[function() {
                      var $G__76515$$ = function() {
                        return {children:[function() {
                          var $G__76519_JSCompiler_temp_const$jscomp$inline_3730$$ = $APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$heading_section$$, "text-slate-900  dark:text-slate-100", "mb-4"])));
                          var $G__76523$jscomp$inline_3732_JSCompiler_inline_result$jscomp$inline_3731$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-normal", "text-slate-600  dark:text-slate-400"]))), children:"Transfers"};
                          $G__76523$jscomp$inline_3732_JSCompiler_inline_result$jscomp$inline_3731$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__76523$jscomp$inline_3732_JSCompiler_inline_result$jscomp$inline_3731$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__76523$jscomp$inline_3732_JSCompiler_inline_result$jscomp$inline_3731$$);
                          $G__76519_JSCompiler_temp_const$jscomp$inline_3730$$ = {className:$G__76519_JSCompiler_temp_const$jscomp$inline_3730$$, children:["Domestic ", $G__76523$jscomp$inline_3732_JSCompiler_inline_result$jscomp$inline_3731$$]};
                          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__76519_JSCompiler_temp_const$jscomp$inline_3730$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__76519_JSCompiler_temp_const$jscomp$inline_3730$$);
                        }(), function() {
                          var $G__76527$$ = function() {
                            return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-mono", "text-sm", "space-y-3"]))), children:[function() {
                              var $G__76531$$ = function() {
                                return {className:"flex items-baseline justify-between gap-6", children:[function() {
                                  var $G__76535$$ = {className:$APP.$helix$impl$props$normalize_class$$($field_label$$), children:"Name:"};
                                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__76535$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__76535$$);
                                }(), function() {
                                  var $G__76539$$ = {className:"text-right", children:"Fallen Angels Inc."};
                                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__76539$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__76539$$);
                                }()]};
                              }();
                              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__76531$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__76531$$);
                            }(), function() {
                              var $G__76545$$ = function() {
                                return {className:"flex items-baseline justify-between gap-6", children:[function() {
                                  var $G__76549$$ = {className:$APP.$helix$impl$props$normalize_class$$($field_label$$), children:"Routing:"};
                                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__76549$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__76549$$);
                                }(), function() {
                                  var $G__76558$$ = {className:$APP.$helix$impl$props$normalize_class$$($field_value$$), children:"091311229"};
                                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__76558$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__76558$$);
                                }()]};
                              }();
                              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__76545$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__76545$$);
                            }(), function() {
                              var $G__76562$$ = function() {
                                return {className:"flex items-baseline justify-between gap-6", children:[function() {
                                  var $G__76566$$ = {className:$APP.$helix$impl$props$normalize_class$$($field_label$$), children:"Account #:"};
                                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__76566$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__76566$$);
                                }(), function() {
                                  var $G__76570$$ = {className:$APP.$helix$impl$props$normalize_class$$($field_value$$), children:"202535309341"};
                                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__76570$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__76570$$);
                                }()]};
                              }();
                              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__76562$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__76562$$);
                            }(), function() {
                              var $G__76575$$ = function() {
                                return {className:"flex items-start justify-between gap-6", children:[function() {
                                  var $G__76580$$ = {className:$APP.$helix$impl$props$normalize_class$$($field_label$$), children:"Address:"};
                                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__76580$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__76580$$);
                                }(), function() {
                                  var $G__76584$$ = function() {
                                    return {className:"text-right leading-snug", children:[function() {
                                      var $G__76588$$ = {children:"Choice Financial Group"};
                                      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__76588$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__76588$$);
                                    }(), function() {
                                      var $G__76596$$ = {children:"4501 23rd Avenue S"};
                                      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__76596$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__76596$$);
                                    }(), function() {
                                      var $G__76600$$ = {children:"Fargo, ND 58104"};
                                      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__76600$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__76600$$);
                                    }()]};
                                  }();
                                  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__76584$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__76584$$);
                                }()]};
                              }();
                              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__76575$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__76575$$);
                            }()]};
                          }();
                          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__76527$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__76527$$);
                        }()]};
                      }();
                      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__76515$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__76515$$);
                    }(), function() {
                      var $G__76605$$ = function() {
                        return {children:[function() {
                          var $G__76611_JSCompiler_temp_const$jscomp$inline_3734$$ = $APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$heading_section$$, "text-slate-900  dark:text-slate-100", "mb-4"])));
                          var $G__76625$jscomp$inline_3736_JSCompiler_inline_result$jscomp$inline_3735$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-normal", "text-slate-600  dark:text-slate-400"]))), children:"Transfers"};
                          $G__76625$jscomp$inline_3736_JSCompiler_inline_result$jscomp$inline_3735$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__76625$jscomp$inline_3736_JSCompiler_inline_result$jscomp$inline_3735$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__76625$jscomp$inline_3736_JSCompiler_inline_result$jscomp$inline_3735$$);
                          $G__76611_JSCompiler_temp_const$jscomp$inline_3734$$ = {className:$G__76611_JSCompiler_temp_const$jscomp$inline_3734$$, children:["International ", $G__76625$jscomp$inline_3736_JSCompiler_inline_result$jscomp$inline_3735$$]};
                          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__76611_JSCompiler_temp_const$jscomp$inline_3734$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__76611_JSCompiler_temp_const$jscomp$inline_3734$$);
                        }(), function() {
                          var $G__76639$$ = function() {
                            return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-mono", "text-sm", "space-y-3"]))), children:[function() {
                              var $G__76645$$ = function() {
                                return {className:"flex items-baseline justify-between gap-6", children:[function() {
                                  var $G__76651$$ = {className:$APP.$helix$impl$props$normalize_class$$($field_label$$), children:"Name:"};
                                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__76651$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__76651$$);
                                }(), function() {
                                  var $G__76655$$ = {className:"text-right", children:"Fallen Angels Inc."};
                                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__76655$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__76655$$);
                                }()]};
                              }();
                              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__76645$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__76645$$);
                            }(), function() {
                              var $G__76665$$ = function() {
                                return {className:"flex items-baseline justify-between gap-6", children:[function() {
                                  var $G__76672$$ = {className:$APP.$helix$impl$props$normalize_class$$($field_label$$), children:"SWIFT/BIC:"};
                                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__76672$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__76672$$);
                                }(), function() {
                                  var $G__76681$$ = {className:$APP.$helix$impl$props$normalize_class$$($field_value$$), children:"CHFGUS44021"};
                                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__76681$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__76681$$);
                                }()]};
                              }();
                              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__76665$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__76665$$);
                            }(), function() {
                              var $G__76685$$ = function() {
                                return {className:"flex items-baseline justify-between gap-6", children:[function() {
                                  var $G__76693$$ = {className:$APP.$helix$impl$props$normalize_class$$($field_label$$), children:"ABA/Routing:"};
                                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__76693$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__76693$$);
                                }(), function() {
                                  var $G__76699$$ = {className:$APP.$helix$impl$props$normalize_class$$($field_value$$), children:"091311229"};
                                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__76699$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__76699$$);
                                }()]};
                              }();
                              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__76685$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__76685$$);
                            }(), function() {
                              var $G__76721$$ = function() {
                                return {className:"flex items-baseline justify-between gap-6", children:[function() {
                                  var $G__76726$$ = {className:$APP.$helix$impl$props$normalize_class$$($field_label$$), children:"IBAN/Account #:"};
                                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__76726$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__76726$$);
                                }(), function() {
                                  var $G__76750$$ = {className:$APP.$helix$impl$props$normalize_class$$($field_value$$), children:"202535309341"};
                                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__76750$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__76750$$);
                                }()]};
                              }();
                              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__76721$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__76721$$);
                            }(), function() {
                              var $G__76777$$ = function() {
                                return {className:"flex items-start justify-between gap-6", children:[function() {
                                  var $G__76784$$ = {className:$APP.$helix$impl$props$normalize_class$$($field_label$$), children:"Address:"};
                                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__76784$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__76784$$);
                                }(), function() {
                                  var $G__76795$$ = function() {
                                    return {className:"text-right leading-snug", children:[function() {
                                      var $G__76808$$ = {children:"Choice Financial Group"};
                                      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__76808$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__76808$$);
                                    }(), function() {
                                      var $G__76812$$ = {children:"4501 23rd Avenue S"};
                                      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__76812$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__76812$$);
                                    }(), function() {
                                      var $G__76824$$ = {children:"Fargo, ND 58104"};
                                      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__76824$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__76824$$);
                                    }()]};
                                  }();
                                  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__76795$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__76795$$);
                                }()]};
                              }();
                              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__76777$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__76777$$);
                            }()]};
                          }();
                          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__76639$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__76639$$);
                        }()]};
                      }();
                      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__76605$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__76605$$);
                    }()]};
                  }();
                  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__76511$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__76511$$);
                }()]};
              }();
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__76430$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__76430$$);
            }(), function() {
              var $G__76870$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["text-slate-600  dark:text-slate-400", "p-4 mt-10 text-sm md:text-base"]))), children:"If you would like a receipt letter for your records, please include your name and email address with the transfer memo."};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__76870$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__76870$$);
            }()]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__76420$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__76420$$);
        }()};
      }();
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$pages$budget$section_block$section_block$$, $G__76412$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$pages$budget$section_block$section_block$$, $G__76412$$);
    }()};
  }();
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__76397_map__76374_map__76374__$1_props__41575__auto__$jscomp$60_vec__76371$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__76397_map__76374_map__76374__$1_props__41575__auto__$jscomp$60_vec__76371$$);
};
$amp$pages$budget$sponsors$logo_card$$ = function($G__76382_G__76386$jscomp$inline_3922_map__76379_name$jscomp$199_props__41575__auto__$jscomp$61_vec__76376$$, $logo_map__76379__$1_maybe_ref__41576__auto__$jscomp$61$$) {
  $G__76382_G__76386$jscomp$inline_3922_map__76379_name$jscomp$199_props__41575__auto__$jscomp$61_vec__76376$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__76382_G__76386$jscomp$inline_3922_map__76379_name$jscomp$199_props__41575__auto__$jscomp$61_vec__76376$$), $logo_map__76379__$1_maybe_ref__41576__auto__$jscomp$61$$], null);
  $G__76382_G__76386$jscomp$inline_3922_map__76379_name$jscomp$199_props__41575__auto__$jscomp$61_vec__76376$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__76382_G__76386$jscomp$inline_3922_map__76379_name$jscomp$199_props__41575__auto__$jscomp$61_vec__76376$$, 0, null);
  $logo_map__76379__$1_maybe_ref__41576__auto__$jscomp$61$$ = $APP.$cljs$core$__destructure_map$$($G__76382_G__76386$jscomp$inline_3922_map__76379_name$jscomp$199_props__41575__auto__$jscomp$61_vec__76376$$);
  $G__76382_G__76386$jscomp$inline_3922_map__76379_name$jscomp$199_props__41575__auto__$jscomp$61_vec__76376$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($logo_map__76379__$1_maybe_ref__41576__auto__$jscomp$61$$, $APP.$cljs$cst$165$name$$);
  $logo_map__76379__$1_maybe_ref__41576__auto__$jscomp$61$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($logo_map__76379__$1_maybe_ref__41576__auto__$jscomp$61$$, $cljs$cst$890$logo$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__76382_G__76386$jscomp$inline_3922_map__76379_name$jscomp$199_props__41575__auto__$jscomp$61_vec__76376$$ = {src:$logo_map__76379__$1_maybe_ref__41576__auto__$jscomp$61$$, alt:$G__76382_G__76386$jscomp$inline_3922_map__76379_name$jscomp$199_props__41575__auto__$jscomp$61_vec__76376$$, style:{height:$APP.$helix$impl$props$__GT_js$$("4rem"), width:$APP.$helix$impl$props$__GT_js$$("auto")}, className:" transition-all duration-500\n                         \n                         drop-shadow-[0_0_12px_rgba(249,168,212,0)] group-hover:drop-shadow-[0_0_20px_rgba(249,168,212,0.15)]"};
  $G__76382_G__76386$jscomp$inline_3922_map__76379_name$jscomp$199_props__41575__auto__$jscomp$61_vec__76376$$ = {className:"group py-6 px-8 transition-all duration-500 ease-out", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("img", $G__76382_G__76386$jscomp$inline_3922_map__76379_name$jscomp$199_props__41575__auto__$jscomp$61_vec__76376$$) : $APP.$helix$core$jsx$$.call(null, "img", $G__76382_G__76386$jscomp$inline_3922_map__76379_name$jscomp$199_props__41575__auto__$jscomp$61_vec__76376$$)};
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__76382_G__76386$jscomp$inline_3922_map__76379_name$jscomp$199_props__41575__auto__$jscomp$61_vec__76376$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__76382_G__76386$jscomp$inline_3922_map__76379_name$jscomp$199_props__41575__auto__$jscomp$61_vec__76376$$);
};
$amp$pages$budget$sponsors$name_item$$ = function($G__76416_map__76410_name$jscomp$200_props__41575__auto__$jscomp$62_vec__76407$$, $accent_map__76410__$1_maybe_ref__41576__auto__$jscomp$62$$) {
  $G__76416_map__76410_name$jscomp$200_props__41575__auto__$jscomp$62_vec__76407$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__76416_map__76410_name$jscomp$200_props__41575__auto__$jscomp$62_vec__76407$$), $accent_map__76410__$1_maybe_ref__41576__auto__$jscomp$62$$], null);
  $G__76416_map__76410_name$jscomp$200_props__41575__auto__$jscomp$62_vec__76407$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__76416_map__76410_name$jscomp$200_props__41575__auto__$jscomp$62_vec__76407$$, 0, null);
  $accent_map__76410__$1_maybe_ref__41576__auto__$jscomp$62$$ = $APP.$cljs$core$__destructure_map$$($G__76416_map__76410_name$jscomp$200_props__41575__auto__$jscomp$62_vec__76407$$);
  $G__76416_map__76410_name$jscomp$200_props__41575__auto__$jscomp$62_vec__76407$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($accent_map__76410__$1_maybe_ref__41576__auto__$jscomp$62$$, $APP.$cljs$cst$165$name$$);
  $accent_map__76410__$1_maybe_ref__41576__auto__$jscomp$62$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($accent_map__76410__$1_maybe_ref__41576__auto__$jscomp$62$$, $cljs$cst$894$accent$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__76416_map__76410_name$jscomp$200_props__41575__auto__$jscomp$62_vec__76407$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-mono", "text-sm", "tracking-wide", $accent_map__76410__$1_maybe_ref__41576__auto__$jscomp$62$$]))), children:$G__76416_map__76410_name$jscomp$200_props__41575__auto__$jscomp$62_vec__76407$$};
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__76416_map__76410_name$jscomp$200_props__41575__auto__$jscomp$62_vec__76407$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__76416_map__76410_name$jscomp$200_props__41575__auto__$jscomp$62_vec__76407$$);
};
$amp$pages$budget$sponsors$tier_section$$ = function($G__76609_map__76592_map__76592__$1_members$jscomp$1_props__41575__auto__$jscomp$63_vec__76589$$, $map__76603_map__76603__$1_maybe_ref__41576__auto__$jscomp$63_tier$$) {
  $G__76609_map__76592_map__76592__$1_members$jscomp$1_props__41575__auto__$jscomp$63_vec__76589$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__76609_map__76592_map__76592__$1_members$jscomp$1_props__41575__auto__$jscomp$63_vec__76589$$), $map__76603_map__76603__$1_maybe_ref__41576__auto__$jscomp$63_tier$$], null);
  $G__76609_map__76592_map__76592__$1_members$jscomp$1_props__41575__auto__$jscomp$63_vec__76589$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__76609_map__76592_map__76592__$1_members$jscomp$1_props__41575__auto__$jscomp$63_vec__76589$$, 0, null);
  $G__76609_map__76592_map__76592__$1_members$jscomp$1_props__41575__auto__$jscomp$63_vec__76589$$ = $APP.$cljs$core$__destructure_map$$($G__76609_map__76592_map__76592__$1_members$jscomp$1_props__41575__auto__$jscomp$63_vec__76589$$);
  $map__76603_map__76603__$1_maybe_ref__41576__auto__$jscomp$63_tier$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__76609_map__76592_map__76592__$1_members$jscomp$1_props__41575__auto__$jscomp$63_vec__76589$$, $cljs$cst$888$tier$$);
  $G__76609_map__76592_map__76592__$1_members$jscomp$1_props__41575__auto__$jscomp$63_vec__76589$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__76609_map__76592_map__76592__$1_members$jscomp$1_props__41575__auto__$jscomp$63_vec__76589$$, $cljs$cst$898$members$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $map__76603_map__76603__$1_maybe_ref__41576__auto__$jscomp$63_tier$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($amp$pages$budget$sponsors$tier_meta$$, $map__76603_map__76603__$1_maybe_ref__41576__auto__$jscomp$63_tier$$);
  $map__76603_map__76603__$1_maybe_ref__41576__auto__$jscomp$63_tier$$ = $APP.$cljs$core$__destructure_map$$($map__76603_map__76603__$1_maybe_ref__41576__auto__$jscomp$63_tier$$);
  var $label$jscomp$18$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__76603_map__76603__$1_maybe_ref__41576__auto__$jscomp$63_tier$$, $APP.$cljs$cst$408$label$$), $accent$jscomp$1$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__76603_map__76603__$1_maybe_ref__41576__auto__$jscomp$63_tier$$, $cljs$cst$894$accent$$), $border$jscomp$6$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__76603_map__76603__$1_maybe_ref__41576__auto__$jscomp$63_tier$$, 
  $APP.$cljs$cst$393$border$$), $with_logos$$ = $APP.$cljs$core$filter$cljs$0core$0IFn$0_invoke$0arity$02$$($cljs$cst$890$logo$$, $G__76609_map__76592_map__76592__$1_members$jscomp$1_props__41575__auto__$jscomp$63_vec__76589$$), $without_logos$$ = $APP.$cljs$core$remove$cljs$0core$0IFn$0_invoke$0arity$02$$($cljs$cst$890$logo$$, $G__76609_map__76592_map__76592__$1_members$jscomp$1_props__41575__auto__$jscomp$63_vec__76589$$);
  $G__76609_map__76592_map__76592__$1_members$jscomp$1_props__41575__auto__$jscomp$63_vec__76589$$ = function() {
    return {className:"mb-12", children:[function() {
      var $G__76619_G__76628$jscomp$inline_3741$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-mono", "text-xl", "font-bold", "uppercase", "tracking-[0.15em]", $accent$jscomp$1$$]))), children:$label$jscomp$18$$};
      $G__76619_G__76628$jscomp$inline_3741$$ = {className:"flex items-center gap-3 mb", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__76619_G__76628$jscomp$inline_3741$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__76619_G__76628$jscomp$inline_3741$$)};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__76619_G__76628$jscomp$inline_3741$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__76619_G__76628$jscomp$inline_3741$$);
    }(), $APP.$cljs$core$seq$$($with_logos$$) ? function() {
      var $G__76643$$ = function() {
        return {className:"mb-4 flex flex-col items-center", children:$APP.$cljs$core$map$$.$cljs$core$IFn$_invoke$arity$2$(function($name$jscomp$201_p__76666$$) {
          var $G__76674_logo$jscomp$1_map__76667__$1$$ = $APP.$cljs$core$__destructure_map$$($name$jscomp$201_p__76666$$);
          $name$jscomp$201_p__76666$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__76674_logo$jscomp$1_map__76667__$1$$, $APP.$cljs$cst$165$name$$);
          $G__76674_logo$jscomp$1_map__76667__$1$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__76674_logo$jscomp$1_map__76667__$1$$, $cljs$cst$890$logo$$);
          $G__76674_logo$jscomp$1_map__76667__$1$$ = {name:$name$jscomp$201_p__76666$$, logo:$G__76674_logo$jscomp$1_map__76667__$1$$};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$($amp$pages$budget$sponsors$logo_card$$, $G__76674_logo$jscomp$1_map__76667__$1$$, $name$jscomp$201_p__76666$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$budget$sponsors$logo_card$$, $G__76674_logo$jscomp$1_map__76667__$1$$, $name$jscomp$201_p__76666$$);
        }, $with_logos$$)};
      }();
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__76643$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__76643$$);
    }() : null, $APP.$cljs$core$seq$$($without_logos$$) ? function() {
      var $G__76687$$ = function() {
        return {className:"flex flex-wrap gap-x-6 gap-y-2", children:$APP.$cljs$core$map$$.$cljs$core$IFn$_invoke$arity$2$(function($map__76697__$1_name$jscomp$202_p__76696$$) {
          $map__76697__$1_name$jscomp$202_p__76696$$ = $APP.$cljs$core$__destructure_map$$($map__76697__$1_name$jscomp$202_p__76696$$);
          $map__76697__$1_name$jscomp$202_p__76696$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__76697__$1_name$jscomp$202_p__76696$$, $APP.$cljs$cst$165$name$$);
          var $G__76706_JSCompiler_temp_const$jscomp$inline_3743$$ = $APP.$helix$impl$props$normalize_class$$("border-l-2 pl-3 py-1 " + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($border$jscomp$6$$));
          var $G__76711$jscomp$inline_3745_JSCompiler_inline_result$jscomp$inline_3744$$ = {name:$map__76697__$1_name$jscomp$202_p__76696$$, accent:$accent$jscomp$1$$};
          $G__76711$jscomp$inline_3745_JSCompiler_inline_result$jscomp$inline_3744$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$pages$budget$sponsors$name_item$$, $G__76711$jscomp$inline_3745_JSCompiler_inline_result$jscomp$inline_3744$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$budget$sponsors$name_item$$, $G__76711$jscomp$inline_3745_JSCompiler_inline_result$jscomp$inline_3744$$);
          $G__76706_JSCompiler_temp_const$jscomp$inline_3743$$ = {className:$G__76706_JSCompiler_temp_const$jscomp$inline_3743$$, children:$G__76711$jscomp$inline_3745_JSCompiler_inline_result$jscomp$inline_3744$$};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$("div", $G__76706_JSCompiler_temp_const$jscomp$inline_3743$$, $map__76697__$1_name$jscomp$202_p__76696$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__76706_JSCompiler_temp_const$jscomp$inline_3743$$, $map__76697__$1_name$jscomp$202_p__76696$$);
        }, $without_logos$$)};
      }();
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__76687$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__76687$$);
    }() : null]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__76609_map__76592_map__76592__$1_members$jscomp$1_props__41575__auto__$jscomp$63_vec__76589$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__76609_map__76592_map__76592__$1_members$jscomp$1_props__41575__auto__$jscomp$63_vec__76589$$);
};
$amp$pages$budget$sponsors$sponsors_section$$ = function($G__76816_map__76773_map__76773__$1_props__41575__auto__$jscomp$64_vec__76770$$, $maybe_ref__41576__auto__$jscomp$64$$) {
  $G__76816_map__76773_map__76773__$1_props__41575__auto__$jscomp$64_vec__76770$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__76816_map__76773_map__76773__$1_props__41575__auto__$jscomp$64_vec__76770$$), $maybe_ref__41576__auto__$jscomp$64$$], null);
  $G__76816_map__76773_map__76773__$1_props__41575__auto__$jscomp$64_vec__76770$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__76816_map__76773_map__76773__$1_props__41575__auto__$jscomp$64_vec__76770$$, 0, null);
  $G__76816_map__76773_map__76773__$1_props__41575__auto__$jscomp$64_vec__76770$$ = $APP.$cljs$core$__destructure_map$$($G__76816_map__76773_map__76773__$1_props__41575__auto__$jscomp$64_vec__76770$$);
  var $id$jscomp$90$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__76816_map__76773_map__76773__$1_props__41575__auto__$jscomp$64_vec__76770$$, $APP.$cljs$cst$285$id$$), $subtitle$jscomp$7$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__76816_map__76773_map__76773__$1_props__41575__auto__$jscomp$64_vec__76770$$, $APP.$cljs$cst$770$subtitle$$), $title$jscomp$27$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__76816_map__76773_map__76773__$1_props__41575__auto__$jscomp$64_vec__76770$$, 
  $APP.$cljs$cst$287$title$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $grouped$jscomp$1$$ = $APP.$cljs$core$sort_by$cljs$0core$0IFn$0_invoke$0arity$02$$(function($p__76791$$) {
    var $tier$jscomp$1$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($p__76791$$, 0, null);
    $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($p__76791$$, 1, null);
    return $cljs$cst$895$order$$.$cljs$core$IFn$_invoke$arity$1$($APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($amp$pages$budget$sponsors$tier_meta$$, $tier$jscomp$1$$));
  }, $APP.$cljs$core$group_by$$($cljs$cst$888$tier$$, $amp$pages$budget$sponsors$sponsors$$));
  $G__76816_map__76773_map__76773__$1_props__41575__auto__$jscomp$64_vec__76770$$ = function() {
    return {id:$id$jscomp$90$$, children:function() {
      var $G__76826$$ = function() {
        return {idx:6, eyebrow:$subtitle$jscomp$7$$, title:$title$jscomp$27$$, children:function() {
          var $G__76837$$ = function() {
            return {className:"p-4 mt-6 space-y-2", children:[function() {
              var $G__76845$$ = function() {
                return {className:"mb-12", children:[function() {
                  var $G__76849$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["text-slate-700  dark:text-slate-300", "mb-8"]))), children:"At present the Armenia Pavilion 2026 "};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__76849$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__76849$$);
                }(), function() {
                  var $G__76860$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["text-rose-600   dark:text-rose-400"]))), children:"is only made possible"};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__76860$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__76860$$);
                }(), function() {
                  var $G__76874$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["text-slate-700  dark:text-slate-300", "mb-8"]))), children:" through the generosity of foundations, families, and individuals committed to helping sustaining Armenia's cultural presence on the international stage."};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__76874$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__76874$$);
                }()]};
              }();
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__76845$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__76845$$);
            }(), $APP.$cljs$core$map$$.$cljs$core$IFn$_invoke$arity$2$(function($G__76899_members$jscomp$2_p__76887$$) {
              var $G__76900_tier$jscomp$2$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__76899_members$jscomp$2_p__76887$$, 0, null);
              $G__76899_members$jscomp$2_p__76887$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__76899_members$jscomp$2_p__76887$$, 1, null);
              $G__76899_members$jscomp$2_p__76887$$ = {tier:$G__76900_tier$jscomp$2$$, members:$G__76899_members$jscomp$2_p__76887$$};
              $G__76900_tier$jscomp$2$$ = $APP.$cljs$core$name$$($G__76900_tier$jscomp$2$$);
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$($amp$pages$budget$sponsors$tier_section$$, $G__76899_members$jscomp$2_p__76887$$, $G__76900_tier$jscomp$2$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$budget$sponsors$tier_section$$, $G__76899_members$jscomp$2_p__76887$$, $G__76900_tier$jscomp$2$$);
            }, $grouped$jscomp$1$$)]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__76837$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__76837$$);
        }()};
      }();
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$pages$budget$section_block$section_block$$, $G__76826$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$pages$budget$section_block$section_block$$, $G__76826$$);
    }()};
  }();
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__76816_map__76773_map__76773__$1_props__41575__auto__$jscomp$64_vec__76770$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__76816_map__76773_map__76773__$1_props__41575__auto__$jscomp$64_vec__76770$$);
};
$amp$pages$budget$why_support$preview$$ = function($G__77243_map__77241_props__41575__auto__$jscomp$65_vec__77238$$, $maybe_ref__41576__auto__$jscomp$65$$) {
  $G__77243_map__77241_props__41575__auto__$jscomp$65_vec__77238$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__77243_map__77241_props__41575__auto__$jscomp$65_vec__77238$$), $maybe_ref__41576__auto__$jscomp$65$$], null);
  $G__77243_map__77241_props__41575__auto__$jscomp$65_vec__77238$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__77243_map__77241_props__41575__auto__$jscomp$65_vec__77238$$, 0, null);
  $APP.$cljs$core$__destructure_map$$($G__77243_map__77241_props__41575__auto__$jscomp$65_vec__77238$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__77243_map__77241_props__41575__auto__$jscomp$65_vec__77238$$ = function() {
    return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_lg$$, "p-4"]))), children:[function() {
      var $G__77247$$ = {children:'To stand on the Biennale\'s global stage is not "participation" in an art event—it is '};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__77247$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__77247$$);
    }(), function() {
      var $G__77252$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:"presence in the world's most influential cultural forum"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__77252$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__77252$$);
    }(), function() {
      var $G__77264$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:", where nations are read, remembered, and measured in real time. "};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__77264$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__77264$$);
    }(), function() {
      var $G__77286$$ = {children:"For the Republic of Armenia, a Pavilion is a sovereign act of cultural visibility: it declares that Armenia is not only a history to be mourned or a headline to be managed, but a "};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__77286$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__77286$$);
    }(), function() {
      var $G__77318$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-semibold", "italic", "text-slate-900  dark:text-slate-100"]))), children:"living intelligence"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__77318$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__77318$$);
    }(), function() {
      var $G__77328$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:"—capable of producing contemporary vision at the highest level. "};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__77328$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__77328$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__77243_map__77241_props__41575__auto__$jscomp$65_vec__77238$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__77243_map__77241_props__41575__auto__$jscomp$65_vec__77238$$);
};
$amp$pages$budget$why_support$details$$ = function($G__77365_map__77362_props__41575__auto__$jscomp$66_vec__77356$$, $maybe_ref__41576__auto__$jscomp$66$$) {
  $G__77365_map__77362_props__41575__auto__$jscomp$66_vec__77356$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__77365_map__77362_props__41575__auto__$jscomp$66_vec__77356$$), $maybe_ref__41576__auto__$jscomp$66$$], null);
  $G__77365_map__77362_props__41575__auto__$jscomp$66_vec__77356$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__77365_map__77362_props__41575__auto__$jscomp$66_vec__77356$$, 0, null);
  $APP.$cljs$core$__destructure_map$$($G__77365_map__77362_props__41575__auto__$jscomp$66_vec__77356$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__77365_map__77362_props__41575__auto__$jscomp$66_vec__77356$$ = function() {
    return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_lg$$, "p-4"]))), children:[function() {
      var $G__77374$$ = {children:'To stand on the Biennale\'s global stage is not "participation" in an art event—it is '};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__77374$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__77374$$);
    }(), function() {
      var $G__77382$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:"presence in the world's most influential cultural forum"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__77382$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__77382$$);
    }(), function() {
      var $G__77390$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:", where nations are read, remembered, and measured in real time. "};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__77390$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__77390$$);
    }(), function() {
      var $G__77398$$ = {children:"For the Republic of Armenia, a Pavilion is a sovereign act of cultural visibility: it declares that Armenia is not only a history to be mourned or a headline to be managed, but a "};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__77398$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__77398$$);
    }(), function() {
      var $G__77404$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-semibold", "italic", "text-slate-900  dark:text-slate-100"]))), children:"living intelligence"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__77404$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__77404$$);
    }(), function() {
      var $G__77414$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:"—capable of producing contemporary vision at the highest level. "};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__77414$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__77414$$);
    }(), function() {
      var $G__77424$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:"This is how nations earn stature without asking permission: by contributing meaning, not pleading for sympathy. In Venice, Armenia enters the shared conversation that curators, museums, collectors, journalists, and governments track—and what is seen there echoes for years in exhibitions, acquisitions, education, tourism, diplomacy, and philanthropic interest."};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__77424$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__77424$$);
    }(), function() {
      var $G__77432_G__77436$jscomp$inline_3748$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$em_strong$$, "text-lg"]))), children:"This is why being present matters—and what it elevates:"};
      $G__77432_G__77436$jscomp$inline_3748$$ = {className:"mt-8 mb-4", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__77432_G__77436$jscomp$inline_3748$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__77432_G__77436$jscomp$inline_3748$$)};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__77432_G__77436$jscomp$inline_3748$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__77432_G__77436$jscomp$inline_3748$$);
    }(), function() {
      var $G__77448$$ = function() {
        return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["text-slate-700  dark:text-slate-300", "space-y-4 ml-4"]))), children:[function() {
          var $G__77454_G__77460$jscomp$inline_3751$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_bold$$), children:"National dignity, made public: "};
          $G__77454_G__77460$jscomp$inline_3751$$ = {className:"", children:[$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__77454_G__77460$jscomp$inline_3751$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__77454_G__77460$jscomp$inline_3751$$), "Armenia is framed through excellence, discipline, and contemporary creativity—not solely through tragedy or geopolitics."]};
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("li", $G__77454_G__77460$jscomp$inline_3751$$) : $APP.$helix$core$jsxs$$.call(null, "li", $G__77454_G__77460$jscomp$inline_3751$$);
        }(), function() {
          var $G__77470_G__77476$jscomp$inline_3754$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_bold$$), children:"Soft power that compounds: "};
          $G__77470_G__77476$jscomp$inline_3754$$ = {className:"", children:[$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__77470_G__77476$jscomp$inline_3754$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__77470_G__77476$jscomp$inline_3754$$), "Cultural visibility becomes long-term credibility—opening doors that money or lobbying cannot."]};
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("li", $G__77470_G__77476$jscomp$inline_3754$$) : $APP.$helix$core$jsxs$$.call(null, "li", $G__77470_G__77476$jscomp$inline_3754$$);
        }(), function() {
          var $G__77484_G__77493$jscomp$inline_3757$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_bold$$), children:"Narrative control: "};
          $G__77484_G__77493$jscomp$inline_3757$$ = {className:"", children:[$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__77484_G__77493$jscomp$inline_3757$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__77484_G__77493$jscomp$inline_3757$$), "If Armenia does not author its own image, others will—and they will simplify it."]};
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("li", $G__77484_G__77493$jscomp$inline_3757$$) : $APP.$helix$core$jsxs$$.call(null, "li", $G__77484_G__77493$jscomp$inline_3757$$);
        }(), function() {
          var $G__77497_G__77502$jscomp$inline_3760$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_bold$$), children:"A platform for future generations: "};
          $G__77497_G__77502$jscomp$inline_3760$$ = {className:"", children:[$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__77497_G__77502$jscomp$inline_3760$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__77497_G__77502$jscomp$inline_3760$$), 'A serious national presence signals to Armenian artists, students, and institutions that the world stage is not "for others."']};
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("li", $G__77497_G__77502$jscomp$inline_3760$$) : $APP.$helix$core$jsxs$$.call(null, "li", $G__77497_G__77502$jscomp$inline_3760$$);
        }(), function() {
          var $G__77506_G__77510$jscomp$inline_3763$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_bold$$), children:"Diaspora cohesion: "};
          $G__77506_G__77510$jscomp$inline_3763$$ = {className:"", children:[$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__77506_G__77510$jscomp$inline_3763$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__77506_G__77510$jscomp$inline_3763$$), "A Pavilion becomes a shared achievement—an anchor event that unifies donors, families, and communities around something constructive and proud."]};
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("li", $G__77506_G__77510$jscomp$inline_3763$$) : $APP.$helix$core$jsxs$$.call(null, "li", $G__77506_G__77510$jscomp$inline_3763$$);
        }(), function() {
          var $G__77518_G__77522$jscomp$inline_3766$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_bold$$), children:"Institutional consequences: "};
          $G__77518_G__77522$jscomp$inline_3766$$ = {className:"", children:[$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__77518_G__77522$jscomp$inline_3766$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__77518_G__77522$jscomp$inline_3766$$), "Serious participation invites museum partnerships, residencies, publications, acquisitions, and recurring invitations—real infrastructure, not a momentary spotlight."]};
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("li", $G__77518_G__77522$jscomp$inline_3766$$) : $APP.$helix$core$jsxs$$.call(null, "li", $G__77518_G__77522$jscomp$inline_3766$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("ul", $G__77448$$) : $APP.$helix$core$jsxs$$.call(null, "ul", $G__77448$$);
    }(), function() {
      var $G__77527$$ = function() {
        return {className:"block mt-8", children:[function() {
          var $G__77531$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:"The opportunity cost of not partaking is brutal and silent: "};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__77531$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__77531$$);
        }(), function() {
          var $G__77539$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-semibold", "italic", "text-slate-900  dark:text-slate-100"]))), children:"invisibility"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__77539$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__77539$$);
        }(), function() {
          var $G__77543$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:". The world does not pause because a nation is under-resourced; it simply moves on, and the absence becomes a habit. In a cultural ecosystem, absence reads as incapacity. It reinforces the unfair but persistent idea that Armenia is peripheral—always reacting, never defining. "};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__77543$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__77543$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__77527$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__77527$$);
    }(), function() {
      var $G__77547$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["text-slate-700  dark:text-slate-300", "block mt-6"]))), children:'That is the long-term gap: Armenia is not always "where it should be" because it has too often been forced into survival mode—outspent, out-networked, and underrepresented in the institutions that shape global memory. '};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__77547$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__77547$$);
    }(), function() {
      var $G__77551$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["text-slate-700  dark:text-slate-300", "block mt-6"]))), children:'A donor is not "buying" a sculpture or an event; they are buying '};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__77551$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__77551$$);
    }(), function() {
      var $G__77556$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:"representation with consequences"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__77556$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__77556$$);
    }(), function() {
      var $G__77560$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:": an enduring record that Armenia showed up with seriousness, ambition, and world-class execution. The legacy is reputational and generational: a Pavilion that becomes a reference point—documented, published, archived, collected, cited—and a model that makes the next Armenian presence easier, stronger, and inevitable."};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__77560$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__77560$$);
    }(), function() {
      var $G__77566$$ = {className:"block mt-8", children:"And yes: "};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__77566$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__77566$$);
    }(), function() {
      var $G__77572$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-semibold", "italic", "text-slate-900  dark:text-slate-100"]))), children:"the cultural battle must be won"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__77572$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__77572$$);
    }(), function() {
      var $G__77576$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:"—not with aggression, but with clarity, consistency, and excellence. Culture is where nations become undeniable. It is where influence is built without violence; where history is not only remembered, but translated into future power. "};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__77576$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__77576$$);
    }(), function() {
      var $G__77580$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_closing$$, "block mt-6"]))), children:"Supporting this Pavilion is patriotism in its most practical form: it is an investment in Armenia's standing, Armenia's narrative, and Armenia's right to be seen at full scale—on equal terms—where the world is watching."};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__77580$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__77580$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__77365_map__77362_props__41575__auto__$jscomp$66_vec__77356$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__77365_map__77362_props__41575__auto__$jscomp$66_vec__77356$$);
};
$amp$pages$budget$why_support$why_support$$ = function($G__77613_id$jscomp$91_map__77602_props__41575__auto__$jscomp$67_vec__77599$$, $G__77623$jscomp$inline_3769_JSCompiler_inline_result$jscomp$inline_3768_maybe_ref__41576__auto__$jscomp$67_subtitle$jscomp$8$$) {
  $G__77613_id$jscomp$91_map__77602_props__41575__auto__$jscomp$67_vec__77599$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__77613_id$jscomp$91_map__77602_props__41575__auto__$jscomp$67_vec__77599$$), $G__77623$jscomp$inline_3769_JSCompiler_inline_result$jscomp$inline_3768_maybe_ref__41576__auto__$jscomp$67_subtitle$jscomp$8$$], null);
  $G__77613_id$jscomp$91_map__77602_props__41575__auto__$jscomp$67_vec__77599$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__77613_id$jscomp$91_map__77602_props__41575__auto__$jscomp$67_vec__77599$$, 0, null);
  var $map__77602__$1_title$jscomp$28$$ = $APP.$cljs$core$__destructure_map$$($G__77613_id$jscomp$91_map__77602_props__41575__auto__$jscomp$67_vec__77599$$);
  $G__77613_id$jscomp$91_map__77602_props__41575__auto__$jscomp$67_vec__77599$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__77602__$1_title$jscomp$28$$, $APP.$cljs$cst$285$id$$);
  $G__77623$jscomp$inline_3769_JSCompiler_inline_result$jscomp$inline_3768_maybe_ref__41576__auto__$jscomp$67_subtitle$jscomp$8$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__77602__$1_title$jscomp$28$$, $APP.$cljs$cst$770$subtitle$$);
  $map__77602__$1_title$jscomp$28$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__77602__$1_title$jscomp$28$$, $APP.$cljs$cst$287$title$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__77623$jscomp$inline_3769_JSCompiler_inline_result$jscomp$inline_3768_maybe_ref__41576__auto__$jscomp$67_subtitle$jscomp$8$$ = {idx:9, "section-hint":$G__77623$jscomp$inline_3769_JSCompiler_inline_result$jscomp$inline_3768_maybe_ref__41576__auto__$jscomp$67_subtitle$jscomp$8$$, title:$map__77602__$1_title$jscomp$28$$, "expand-button-label":"Read more", "preview-text":$amp$pages$budget$why_support$preview$$, "full-text":$amp$pages$budget$why_support$details$$};
  $G__77623$jscomp$inline_3769_JSCompiler_inline_result$jscomp$inline_3768_maybe_ref__41576__auto__$jscomp$67_subtitle$jscomp$8$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$ui$expandable_text$expandable_text_area_2$$, $G__77623$jscomp$inline_3769_JSCompiler_inline_result$jscomp$inline_3768_maybe_ref__41576__auto__$jscomp$67_subtitle$jscomp$8$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$ui$expandable_text$expandable_text_area_2$$, 
  $G__77623$jscomp$inline_3769_JSCompiler_inline_result$jscomp$inline_3768_maybe_ref__41576__auto__$jscomp$67_subtitle$jscomp$8$$);
  $G__77613_id$jscomp$91_map__77602_props__41575__auto__$jscomp$67_vec__77599$$ = {id:$G__77613_id$jscomp$91_map__77602_props__41575__auto__$jscomp$67_vec__77599$$, children:$G__77623$jscomp$inline_3769_JSCompiler_inline_result$jscomp$inline_3768_maybe_ref__41576__auto__$jscomp$67_subtitle$jscomp$8$$};
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__77613_id$jscomp$91_map__77602_props__41575__auto__$jscomp$67_vec__77599$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__77613_id$jscomp$91_map__77602_props__41575__auto__$jscomp$67_vec__77599$$);
};
$amp$nav$back_up$back_up_nav$$ = function($G__52952_is_active_QMARK_$jscomp$8_props__41652__auto__$jscomp$19_vec__52943$$) {
  $APP.$helix$core$extract_cljs_props$$($G__52952_is_active_QMARK_$jscomp$8_props__41652__auto__$jscomp$19_vec__52943$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $container_ref$jscomp$3$$ = $APP.$helix$hooks$use_ref$$("container-ref"), $button_ref$$ = $APP.$helix$hooks$use_ref$$("button-ref"), $scroll_to_top$$ = $amp$hooks$use_scroll_to$use_scroll_to_top$cljs$0core$0IFn$0_invoke$0arity$0variadic$$();
  $G__52952_is_active_QMARK_$jscomp$8_props__41652__auto__$jscomp$19_vec__52943$$ = $APP.$amp$hooks$use_scroll_trigger$use_scroll_trigger$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($container_ref$jscomp$3$$, $APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$cljs$cst$269$start$$, function() {
    return window.innerHeight - window.innerHeight / 8;
  }, $APP.$cljs$cst$757$end$$, "1000000px", $APP.$cljs$cst$759$markers_QMARK_$$, !1, $APP.$cljs$cst$760$debug_QMARK_$$, !1]));
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__52952_is_active_QMARK_$jscomp$8_props__41652__auto__$jscomp$19_vec__52943$$, 0, null);
  $G__52952_is_active_QMARK_$jscomp$8_props__41652__auto__$jscomp$19_vec__52943$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__52952_is_active_QMARK_$jscomp$8_props__41652__auto__$jscomp$19_vec__52943$$, 1, null);
  $APP.$amp$hooks$use_hover_animations$use_hover_animations$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($button_ref$$);
  $APP.$amp$hooks$use_toggle_animations$use_toggle_animations$$(new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$609$target$$, $container_ref$jscomp$3$$, $APP.$cljs$cst$763$on_to$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$404$y$$, 0, $APP.$cljs$cst$725$opacity$$, 1], null), $APP.$cljs$cst$765$off_to$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$404$y$$, -150, $APP.$cljs$cst$725$opacity$$, 0.25], null), $APP.$cljs$cst$761$is_on_QMARK_$$, 
  $G__52952_is_active_QMARK_$jscomp$8_props__41652__auto__$jscomp$19_vec__52943$$], null));
  $G__52952_is_active_QMARK_$jscomp$8_props__41652__auto__$jscomp$19_vec__52943$$ = function() {
    var $G__52956$jscomp$inline_3771_G__52960$jscomp$inline_3773_JSCompiler_inline_result$jscomp$3466_JSCompiler_inline_result$jscomp$inline_3772$$ = {};
    $G__52956$jscomp$inline_3771_G__52960$jscomp$inline_3773_JSCompiler_inline_result$jscomp$3466_JSCompiler_inline_result$jscomp$inline_3772$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$ui$icons$ArrowTurnRightUp$$, $G__52956$jscomp$inline_3771_G__52960$jscomp$inline_3773_JSCompiler_inline_result$jscomp$3466_JSCompiler_inline_result$jscomp$inline_3772$$) : $APP.$helix$core$jsx$$.call(null, $amp$ui$icons$ArrowTurnRightUp$$, 
    $G__52956$jscomp$inline_3771_G__52960$jscomp$inline_3773_JSCompiler_inline_result$jscomp$3466_JSCompiler_inline_result$jscomp$inline_3772$$);
    $G__52956$jscomp$inline_3771_G__52960$jscomp$inline_3773_JSCompiler_inline_result$jscomp$3466_JSCompiler_inline_result$jscomp$inline_3772$$ = {ref:$button_ref$$, className:"flex \n                           w-full\n                           h-full\n                           bg-pink-300\n                           opacity-90\n                           font-bold\n                           text-xl\n                           px-4\n                           white-space-no-wrap", onClick:$scroll_to_top$$, 
    children:["To Top ", $G__52956$jscomp$inline_3771_G__52960$jscomp$inline_3773_JSCompiler_inline_result$jscomp$3466_JSCompiler_inline_result$jscomp$inline_3772$$]};
    $G__52956$jscomp$inline_3771_G__52960$jscomp$inline_3773_JSCompiler_inline_result$jscomp$3466_JSCompiler_inline_result$jscomp$inline_3772$$ = $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__52956$jscomp$inline_3771_G__52960$jscomp$inline_3773_JSCompiler_inline_result$jscomp$3466_JSCompiler_inline_result$jscomp$inline_3772$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__52956$jscomp$inline_3771_G__52960$jscomp$inline_3773_JSCompiler_inline_result$jscomp$3466_JSCompiler_inline_result$jscomp$inline_3772$$);
    return {ref:$container_ref$jscomp$3$$, className:"fixed right-0 cursor-pointer z-30", children:$G__52956$jscomp$inline_3771_G__52960$jscomp$inline_3773_JSCompiler_inline_result$jscomp$3466_JSCompiler_inline_result$jscomp$inline_3772$$};
  }();
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__52952_is_active_QMARK_$jscomp$8_props__41652__auto__$jscomp$19_vec__52943$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__52952_is_active_QMARK_$jscomp$8_props__41652__auto__$jscomp$19_vec__52943$$);
};
$amp$pages$budget$section$section_link$$ = function($G__79391_map__79387_map__79387__$1_props__41575__auto__$jscomp$68_vec__79384$$, $maybe_ref__41576__auto__$jscomp$68$$) {
  $G__79391_map__79387_map__79387__$1_props__41575__auto__$jscomp$68_vec__79384$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__79391_map__79387_map__79387__$1_props__41575__auto__$jscomp$68_vec__79384$$), $maybe_ref__41576__auto__$jscomp$68$$], null);
  $G__79391_map__79387_map__79387__$1_props__41575__auto__$jscomp$68_vec__79384$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__79391_map__79387_map__79387__$1_props__41575__auto__$jscomp$68_vec__79384$$, 0, null);
  $G__79391_map__79387_map__79387__$1_props__41575__auto__$jscomp$68_vec__79384$$ = $APP.$cljs$core$__destructure_map$$($G__79391_map__79387_map__79387__$1_props__41575__auto__$jscomp$68_vec__79384$$);
  var $title$jscomp$29$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__79391_map__79387_map__79387__$1_props__41575__auto__$jscomp$68_vec__79384$$, $APP.$cljs$cst$287$title$$), $anchor$jscomp$2$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__79391_map__79387_map__79387__$1_props__41575__auto__$jscomp$68_vec__79384$$, $cljs$cst$899$anchor$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $scroll_to_id$jscomp$3$$ = $APP.$amp$hooks$use_scroll_to$use_scroll_to_id$$();
  $G__79391_map__79387_map__79387__$1_props__41575__auto__$jscomp$68_vec__79384$$ = function() {
    return {onClick:function() {
      return $scroll_to_id$jscomp$3$$.$cljs$core$IFn$_invoke$arity$1$ ? $scroll_to_id$jscomp$3$$.$cljs$core$IFn$_invoke$arity$1$($anchor$jscomp$2$$) : $scroll_to_id$jscomp$3$$.call(null, $anchor$jscomp$2$$);
    }, className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$nav_link$$), children:[$title$jscomp$29$$, " ", function() {
      var $G__79395$$ = {"class":"w-4 h-4 inline-block ml-1"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$ui$icons$ChevronRightIcon$$, $G__79395$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$ui$icons$ChevronRightIcon$$, $G__79395$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("button", $G__79391_map__79387_map__79387__$1_props__41575__auto__$jscomp$68_vec__79384$$) : $APP.$helix$core$jsxs$$.call(null, "button", $G__79391_map__79387_map__79387__$1_props__41575__auto__$jscomp$68_vec__79384$$);
};
$amp$pages$budget$section$header$$ = function($G__79405_props__41575__auto__$jscomp$69$$) {
  $APP.$helix$core$extract_cljs_props$$($G__79405_props__41575__auto__$jscomp$69$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__79405_props__41575__auto__$jscomp$69$$ = function() {
    return {className:"relative", children:[function() {
      var $G__79409_G__79413$jscomp$inline_3776$$ = {src:"images/graphics/61_biennale_logo_line.svg", className:"invert dark:invert-0"};
      $G__79409_G__79413$jscomp$inline_3776$$ = {className:"w-1/2 lg:w-1/4 lg:max-w-64 mt-4 lg:mt-8 px-4", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("img", $G__79409_G__79413$jscomp$inline_3776$$) : $APP.$helix$core$jsx$$.call(null, "img", $G__79409_G__79413$jscomp$inline_3776$$)};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__79409_G__79413$jscomp$inline_3776$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__79409_G__79413$jscomp$inline_3776$$);
    }(), function() {
      var $G__79417_G__79421$jscomp$inline_3779$$ = {translate:"no", className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["notranslate", $APP.$amp$styles$heading_page$$]))), children:"ARMENIA PAVILION, 61st INTERNATIONAL ART EXHIBITION LA BIENNALE DI VENEZIA"};
      $G__79417_G__79421$jscomp$inline_3779$$ = {className:"px-4 mt-12 lg:mt-16 max-w-4xl", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("h1", $G__79417_G__79421$jscomp$inline_3779$$) : $APP.$helix$core$jsx$$.call(null, "h1", $G__79417_G__79421$jscomp$inline_3779$$)};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__79417_G__79421$jscomp$inline_3779$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__79417_G__79421$jscomp$inline_3779$$);
    }(), function() {
      var $G__79425$$ = function() {
        return {className:"w-full px-4 mt-8", children:function() {
          var $G__79429$$ = function() {
            return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["text-slate-950  dark:text-white", "space-y-3 flex flex-col justify-start items-start"]))), children:[function() {
              var $G__79433$$ = {title:"1. Press Release", anchor:"section-1"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$pages$budget$section$section_link$$, $G__79433$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$budget$section$section_link$$, $G__79433$$);
            }(), function() {
              var $G__79437$$ = {title:"2. Overview - THE STUDIO", anchor:"section-2"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$pages$budget$section$section_link$$, $G__79437$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$budget$section$section_link$$, $G__79437$$);
            }(), function() {
              var $G__79443$$ = {title:"3. Budget", anchor:"section-3"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$pages$budget$section$section_link$$, $G__79443$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$budget$section$section_link$$, $G__79443$$);
            }(), function() {
              var $G__79447$$ = {title:"4. Cashflow", anchor:"section-4"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$pages$budget$section$section_link$$, $G__79447$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$budget$section$section_link$$, $G__79447$$);
            }(), function() {
              var $G__79451$$ = {title:"5. Committee", anchor:"section-5"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$pages$budget$section$section_link$$, $G__79451$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$budget$section$section_link$$, $G__79451$$);
            }(), function() {
              var $G__79455$$ = {title:"6. Patrons \x26 Sponsors", anchor:"section-6"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$pages$budget$section$section_link$$, $G__79455$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$budget$section$section_link$$, $G__79455$$);
            }(), function() {
              var $G__79459$$ = {title:"7. Location Details", anchor:"section-7"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$pages$budget$section$section_link$$, $G__79459$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$budget$section$section_link$$, $G__79459$$);
            }(), function() {
              var $G__79463$$ = {title:"8. Donation Info", anchor:"section-8"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$pages$budget$section$section_link$$, $G__79463$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$budget$section$section_link$$, $G__79463$$);
            }(), function() {
              var $G__79467$$ = {title:"9. Why Support", anchor:"section-9"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$pages$budget$section$section_link$$, $G__79467$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$budget$section$section_link$$, $G__79467$$);
            }()]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__79429$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__79429$$);
        }()};
      }();
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__79425$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__79425$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__79405_props__41575__auto__$jscomp$69$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__79405_props__41575__auto__$jscomp$69$$);
};
$amp$pages$budget$section$budget_section$$ = function($G__79477_props__41575__auto__$jscomp$70$$) {
  $APP.$helix$core$extract_cljs_props$$($G__79477_props__41575__auto__$jscomp$70$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__79477_props__41575__auto__$jscomp$70$$ = function() {
    return {"section-id":"budget-section", children:[function() {
      var $G__79482$$ = {};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$nav$back_up$back_up_nav$$, $G__79482$$) : $APP.$helix$core$jsx$$.call(null, $amp$nav$back_up$back_up_nav$$, $G__79482$$);
    }(), function() {
      var $G__79484$$ = function() {
        return {className:$APP.$helix$impl$props$normalize_class$$("w-full h-full pt-14 " + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$("text-slate-900  dark:text-slate-100") + " grey-grad flex items-center justify-center flex-col"), children:function() {
          var $G__79488$$ = function() {
            return {className:$APP.$helix$impl$props$normalize_class$$("flex flex-col " + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$("w-full lg:w-8/12 min-w-0")), children:[function() {
              var $G__79492$$ = {};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$pages$budget$section$header$$, $G__79492$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$budget$section$header$$, $G__79492$$);
            }(), function() {
              var $G__79494$$ = {id:"section-1", idx:1, subtitle:"press", title:"press release", "show-budget-footer?":!0};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$pages$landing$press_release$press_release$$, $G__79494$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$pages$landing$press_release$press_release$$, $G__79494$$);
            }(), function() {
              var $G__79498$$ = {id:"section-2", idx:2, subtitle:"overview", title:"Armenian Pavilion - The Studio"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$pages$landing$studio$about_studio$$, $G__79498$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$pages$landing$studio$about_studio$$, $G__79498$$);
            }(), function() {
              var $G__79502$$ = {id:"section-3", subtitle:"financials", title:"budget"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$pages$budget$cost_breakdown$cost_breakdown$$, $G__79502$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$budget$cost_breakdown$cost_breakdown$$, $G__79502$$);
            }(), function() {
              var $G__79506$$ = {id:"section-4", subtitle:"financials", title:"cashflow"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$pages$budget$cash_flow$cash_flow$$, $G__79506$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$budget$cash_flow$cash_flow$$, $G__79506$$);
            }(), function() {
              var $G__79510$$ = {id:"section-5", subtitle:"team", title:"committee"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$pages$budget$committee$committee$$, $G__79510$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$budget$committee$committee$$, $G__79510$$);
            }(), function() {
              var $G__79514$$ = {id:"section-6", subtitle:"acknowledgements", title:"patrons \x26 sponsors"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$pages$budget$sponsors$sponsors_section$$, $G__79514$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$budget$sponsors$sponsors_section$$, $G__79514$$);
            }(), function() {
              var $G__79520$$ = {id:"section-7", subtitle:"venue", title:"location information"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$pages$budget$location$location_section$$, $G__79520$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$budget$location$location_section$$, $G__79520$$);
            }(), function() {
              var $G__79524$$ = {id:"section-8", subtitle:"non-profit", title:"donation information"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$pages$budget$non_profit$non_profit$$, $G__79524$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$budget$non_profit$non_profit$$, $G__79524$$);
            }(), function() {
              var $G__79528$$ = {id:"section-9", subtitle:"why it matters", title:"why support"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$pages$budget$why_support$why_support$$, $G__79528$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$budget$why_support$why_support$$, $G__79528$$);
            }()]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__79488$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__79488$$);
        }()};
      }();
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__79484$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__79484$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$3$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$3$($APP.$amp$ui$section$section$$, $G__79477_props__41575__auto__$jscomp$70$$, "budget-section") : $APP.$helix$core$jsxs$$.call(null, $APP.$amp$ui$section$section$$, $G__79477_props__41575__auto__$jscomp$70$$, "budget-section");
};
$APP.$amp$pages$budget$page$budget_view$$ = function($G__79633_G__79637$jscomp$inline_3397_props__41575__auto__$jscomp$71_vec__79629$$, $maybe_ref__41576__auto__$jscomp$71$$) {
  $G__79633_G__79637$jscomp$inline_3397_props__41575__auto__$jscomp$71_vec__79629$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__79633_G__79637$jscomp$inline_3397_props__41575__auto__$jscomp$71_vec__79629$$), $maybe_ref__41576__auto__$jscomp$71$$], null);
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__79633_G__79637$jscomp$inline_3397_props__41575__auto__$jscomp$71_vec__79629$$, 0, null);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__79633_G__79637$jscomp$inline_3397_props__41575__auto__$jscomp$71_vec__79629$$ = {};
  $G__79633_G__79637$jscomp$inline_3397_props__41575__auto__$jscomp$71_vec__79629$$ = {children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$pages$budget$section$budget_section$$, $G__79633_G__79637$jscomp$inline_3397_props__41575__auto__$jscomp$71_vec__79629$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$budget$section$budget_section$$, $G__79633_G__79637$jscomp$inline_3397_props__41575__auto__$jscomp$71_vec__79629$$)};
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__79633_G__79637$jscomp$inline_3397_props__41575__auto__$jscomp$71_vec__79629$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__79633_G__79637$jscomp$inline_3397_props__41575__auto__$jscomp$71_vec__79629$$);
};
$cljs$cst$847$admin_apr_26$$ = new $APP.$cljs$core$Keyword$$(null, "admin-apr-26", "admin-apr-26", -1594649114);
$cljs$cst$861$venice_sep_26$$ = new $APP.$cljs$core$Keyword$$(null, "venice-sep-26", "venice-sep-26", 94763672);
$cljs$cst$820$venice_sep_25$$ = new $APP.$cljs$core$Keyword$$(null, "venice-sep-25", "venice-sep-25", 339442983);
$cljs$cst$839$la_feb_26$$ = new $APP.$cljs$core$Keyword$$(null, "la-feb-26", "la-feb-26", -2123365555);
$cljs$cst$849$venice_may_26$$ = new $APP.$cljs$core$Keyword$$(null, "venice-may-26", "venice-may-26", 2072857227);
$cljs$cst$814$priority$$ = new $APP.$cljs$core$Keyword$$(null, "priority", "priority", 1431093715);
$cljs$cst$894$accent$$ = new $APP.$cljs$core$Keyword$$(null, "accent", "accent", -1826298468);
$cljs$cst$800$venue$$ = new $APP.$cljs$core$Keyword$$(null, "venue", "venue", -731609643);
$cljs$cst$843$la_mar_26$$ = new $APP.$cljs$core$Keyword$$(null, "la-mar-26", "la-mar-26", 1380188343);
$cljs$cst$876$n_crit$$ = new $APP.$cljs$core$Keyword$$(null, "n-crit", "n-crit", 769065100);
$cljs$cst$865$admin_oct_26$$ = new $APP.$cljs$core$Keyword$$(null, "admin-oct-26", "admin-oct-26", 1040051883);
$cljs$cst$897$supporter$$ = new $APP.$cljs$core$Keyword$$(null, "supporter", "supporter", 789659821);
$cljs$cst$825$admin_oct_25$$ = new $APP.$cljs$core$Keyword$$(null, "admin-oct-25", "admin-oct-25", 1520025024);
$cljs$cst$852$venice_jun_26$$ = new $APP.$cljs$core$Keyword$$(null, "venice-jun-26", "venice-jun-26", -604048435);
$cljs$cst$879$has_now$$ = new $APP.$cljs$core$Keyword$$(null, "has-now", "has-now", 654554843);
$cljs$cst$803$the_studio$$ = new $APP.$cljs$core$Keyword$$(null, "the-studio", "the-studio", 106848628);
$cljs$cst$885$month$$ = new $APP.$cljs$core$Keyword$$(null, "month", "month", -1960248533);
$cljs$cst$896$benefactor$$ = new $APP.$cljs$core$Keyword$$(null, "benefactor", "benefactor", -1181533202);
$cljs$cst$827$la_nov_25$$ = new $APP.$cljs$core$Keyword$$(null, "la-nov-25", "la-nov-25", 245379756);
$cljs$cst$837$contingency_jan_26$$ = new $APP.$cljs$core$Keyword$$(null, "contingency-jan-26", "contingency-jan-26", 22175239);
$cljs$cst$855$venice_jul_26$$ = new $APP.$cljs$core$Keyword$$(null, "venice-jul-26", "venice-jul-26", -1607597583);
$cljs$cst$875$entries$$ = new $APP.$cljs$core$Keyword$$(null, "entries", "entries", -86943161);
$cljs$cst$874$all_paid$$ = new $APP.$cljs$core$Keyword$$(null, "all-paid", "all-paid", 366243873);
$cljs$cst$815$normal$$ = new $APP.$cljs$core$Keyword$$(null, "normal", "normal", -1519123858);
$cljs$cst$812$admin_jul_25$$ = new $APP.$cljs$core$Keyword$$(null, "admin-jul-25", "admin-jul-25", 264378453);
$cljs$cst$856$admin_jul_26$$ = new $APP.$cljs$core$Keyword$$(null, "admin-jul-26", "admin-jul-26", 149736986);
$cljs$cst$877$n_paid$$ = new $APP.$cljs$core$Keyword$$(null, "n-paid", "n-paid", -1703730024);
$cljs$cst$808$documentation$$ = new $APP.$cljs$core$Keyword$$(null, "documentation", "documentation", 1889593999);
$cljs$cst$819$contingency_aug_25$$ = new $APP.$cljs$core$Keyword$$(null, "contingency-aug-25", "contingency-aug-25", -1541402500);
$cljs$cst$860$contingency_aug_26$$ = new $APP.$cljs$core$Keyword$$(null, "contingency-aug-26", "contingency-aug-26", 1402254021);
$cljs$cst$809$debt_raised$$ = new $APP.$cljs$core$Keyword$$(null, "debt-raised", "debt-raised", -1855117742);
$cljs$cst$853$admin_jun_26$$ = new $APP.$cljs$core$Keyword$$(null, "admin-jun-26", "admin-jun-26", -541328069);
$cljs$cst$797$expanded_items$$ = new $APP.$cljs$core$Keyword$$(null, "expanded-items", "expanded-items", 749320313);
$cljs$cst$888$tier$$ = new $APP.$cljs$core$Keyword$$(null, "tier", "tier", -1071893374);
$cljs$cst$829$contingency_nov_25$$ = new $APP.$cljs$core$Keyword$$(null, "contingency-nov-25", "contingency-nov-25", 2119549379);
$cljs$cst$869$contingency_nov_26$$ = new $APP.$cljs$core$Keyword$$(null, "contingency-nov-26", "contingency-nov-26", 195578875);
$cljs$cst$794$tax$$ = new $APP.$cljs$core$Keyword$$(null, "tax", "tax", -226525810);
$cljs$cst$804$logistics$$ = new $APP.$cljs$core$Keyword$$(null, "logistics", "logistics", 712670037);
$cljs$cst$850$admin_may_26$$ = new $APP.$cljs$core$Keyword$$(null, "admin-may-26", "admin-may-26", 1889129108);
$cljs$cst$836$admin_jan_26$$ = new $APP.$cljs$core$Keyword$$(null, "admin-jan-26", "admin-jan-26", 142603763);
$cljs$cst$838$venice_feb_26$$ = new $APP.$cljs$core$Keyword$$(null, "venice-feb-26", "venice-feb-26", -1651098139);
$cljs$cst$833$venice_jan_26$$ = new $APP.$cljs$core$Keyword$$(null, "venice-jan-26", "venice-jan-26", -68766759);
$cljs$cst$878$n_items$$ = new $APP.$cljs$core$Keyword$$(null, "n-items", "n-items", -880425095);
$cljs$cst$866$contingency_oct_26$$ = new $APP.$cljs$core$Keyword$$(null, "contingency-oct-26", "contingency-oct-26", -60258419);
$cljs$cst$826$contingency_oct_25$$ = new $APP.$cljs$core$Keyword$$(null, "contingency-oct-25", "contingency-oct-25", 400053796);
$cljs$cst$844$admin_mar_26$$ = new $APP.$cljs$core$Keyword$$(null, "admin-mar-26", "admin-mar-26", -338557509);
$cljs$cst$816$paid$$ = new $APP.$cljs$core$Keyword$$(null, "paid", "paid", 1195086102);
$cljs$cst$792$details$$ = new $APP.$cljs$core$Keyword$$(null, "details", "details", 1956795411);
$cljs$cst$870$venice_dec_26$$ = new $APP.$cljs$core$Keyword$$(null, "venice-dec-26", "venice-dec-26", 1428198827);
$cljs$cst$842$venice_mar_26$$ = new $APP.$cljs$core$Keyword$$(null, "venice-mar-26", "venice-mar-26", -1280378980);
$cljs$cst$895$order$$ = new $APP.$cljs$core$Keyword$$(null, "order", "order", -1254677256);
$cljs$cst$840$admin_feb_26$$ = new $APP.$cljs$core$Keyword$$(null, "admin-feb-26", "admin-feb-26", 1788307477);
$cljs$cst$848$contingency_apr_26$$ = new $APP.$cljs$core$Keyword$$(null, "contingency-apr-26", "contingency-apr-26", -197755096);
$cljs$cst$881$entry$$ = new $APP.$cljs$core$Keyword$$(null, "entry", "entry", 505168823);
$cljs$cst$871$admin_dec_26$$ = new $APP.$cljs$core$Keyword$$(null, "admin-dec-26", "admin-dec-26", 1444073491);
$cljs$cst$831$admin_dec_25$$ = new $APP.$cljs$core$Keyword$$(null, "admin-dec-25", "admin-dec-25", 629109073);
$cljs$cst$799$item$$ = new $APP.$cljs$core$Keyword$$(null, "item", "item", 249373802);
$cljs$cst$868$admin_nov_26$$ = new $APP.$cljs$core$Keyword$$(null, "admin-nov-26", "admin-nov-26", 899776291);
$cljs$cst$828$admin_nov_25$$ = new $APP.$cljs$core$Keyword$$(null, "admin-nov-25", "admin-nov-25", -26984311);
$cljs$cst$813$due$$ = new $APP.$cljs$core$Keyword$$(null, "due", "due", -1754731313);
$cljs$cst$798$description$$ = new $APP.$cljs$core$Keyword$$(null, "description", "description", -1428560544);
$cljs$cst$834$critical$$ = new $APP.$cljs$core$Keyword$$(null, "critical", "critical", -838839117);
$cljs$cst$857$contingency_jul_26$$ = new $APP.$cljs$core$Keyword$$(null, "contingency-jul-26", "contingency-jul-26", 1067897141);
$cljs$cst$817$contingency_jul_25$$ = new $APP.$cljs$core$Keyword$$(null, "contingency-jul-25", "contingency-jul-25", -1729678391);
$cljs$cst$872$contingency_dec_26$$ = new $APP.$cljs$core$Keyword$$(null, "contingency-dec-26", "contingency-dec-26", -60155593);
$cljs$cst$832$contingency_dec_25$$ = new $APP.$cljs$core$Keyword$$(null, "contingency-dec-25", "contingency-dec-25", 1266897629);
$cljs$cst$851$contingency_may_26$$ = new $APP.$cljs$core$Keyword$$(null, "contingency-may-26", "contingency-may-26", -484422222);
$cljs$cst$854$contingency_jun_26$$ = new $APP.$cljs$core$Keyword$$(null, "contingency-jun-26", "contingency-jun-26", 28697636);
$cljs$cst$791$amount$$ = new $APP.$cljs$core$Keyword$$(null, "amount", "amount", 364489504);
$cljs$cst$887$past_QMARK_$$ = new $APP.$cljs$core$Keyword$$(null, "past?", "past?", -125779631);
$cljs$cst$811$cash_flow_model$$ = new $APP.$cljs$core$Keyword$$(null, "cash-flow-model", "cash-flow-model", -883317453);
$cljs$cst$880$dot$$ = new $APP.$cljs$core$Keyword$$(null, "dot", "dot", 1442709401);
$cljs$cst$883$expanded_QMARK_$$ = new $APP.$cljs$core$Keyword$$(null, "expanded?", "expanded?", 2055832296);
$cljs$cst$796$set_expanded_items$$ = new $APP.$cljs$core$Keyword$$(null, "set-expanded-items", "set-expanded-items", -112840979);
$cljs$cst$793$rate$$ = new $APP.$cljs$core$Keyword$$(null, "rate", "rate", -1428659698);
$cljs$cst$841$contingency_feb_26$$ = new $APP.$cljs$core$Keyword$$(null, "contingency-feb-26", "contingency-feb-26", 509692640);
$cljs$cst$806$marketing$$ = new $APP.$cljs$core$Keyword$$(null, "marketing", "marketing", 2054879774);
$cljs$cst$802$la_prod$$ = new $APP.$cljs$core$Keyword$$(null, "la-prod", "la-prod", 1444492244);
$cljs$cst$892$patron$$ = new $APP.$cljs$core$Keyword$$(null, "patron", "patron", -1174215364);
$cljs$cst$873$fill$$ = new $APP.$cljs$core$Keyword$$(null, "fill", "fill", 883462889);
$cljs$cst$810$funds_raised$$ = new $APP.$cljs$core$Keyword$$(null, "funds-raised", "funds-raised", -197009653);
$cljs$cst$863$contingency_sep_26$$ = new $APP.$cljs$core$Keyword$$(null, "contingency-sep-26", "contingency-sep-26", 479744418);
$cljs$cst$823$contingency_sep_25$$ = new $APP.$cljs$core$Keyword$$(null, "contingency-sep-25", "contingency-sep-25", -1119739004);
$cljs$cst$898$members$$ = new $APP.$cljs$core$Keyword$$(null, "members", "members", 159001018);
$cljs$cst$795$cost_data$$ = new $APP.$cljs$core$Keyword$$(null, "cost-data", "cost-data", -1991336764);
$cljs$cst$867$venice_nov_26$$ = new $APP.$cljs$core$Keyword$$(null, "venice-nov-26", "venice-nov-26", 1130078643);
$cljs$cst$882$rollup$$ = new $APP.$cljs$core$Keyword$$(null, "rollup", "rollup", -1742987157);
$cljs$cst$893$individual$$ = new $APP.$cljs$core$Keyword$$(null, "individual", "individual", -1643964808);
$cljs$cst$862$admin_sep_26$$ = new $APP.$cljs$core$Keyword$$(null, "admin-sep-26", "admin-sep-26", -700799960);
$cljs$cst$821$admin_sep_25$$ = new $APP.$cljs$core$Keyword$$(null, "admin-sep-25", "admin-sep-25", 753699567);
$cljs$cst$846$venice_apr_26$$ = new $APP.$cljs$core$Keyword$$(null, "venice-apr-26", "venice-apr-26", -1422709865);
$cljs$cst$891$institution$$ = new $APP.$cljs$core$Keyword$$(null, "institution", "institution", -70023072);
$cljs$cst$890$logo$$ = new $APP.$cljs$core$Keyword$$(null, "logo", "logo", 1237980263);
$cljs$cst$822$high$$ = new $APP.$cljs$core$Keyword$$(null, "high", "high", 2027297808);
$cljs$cst$805$opening$$ = new $APP.$cljs$core$Keyword$$(null, "opening", "opening", 450993708);
$cljs$cst$899$anchor$$ = new $APP.$cljs$core$Keyword$$(null, "anchor", "anchor", 1549638489);
$cljs$cst$801$admin$$ = new $APP.$cljs$core$Keyword$$(null, "admin", "admin", -1239101627);
$cljs$cst$845$contingency_mar_26$$ = new $APP.$cljs$core$Keyword$$(null, "contingency-mar-26", "contingency-mar-26", 1126538363);
$cljs$cst$864$venice_oct_26$$ = new $APP.$cljs$core$Keyword$$(null, "venice-oct-26", "venice-oct-26", -1699834368);
$cljs$cst$824$venice_oct_25$$ = new $APP.$cljs$core$Keyword$$(null, "venice-oct-25", "venice-oct-25", -641394196);
$cljs$cst$886$now$$ = new $APP.$cljs$core$Keyword$$(null, "now", "now", -1650525531);
$cljs$cst$858$venice_aug_26$$ = new $APP.$cljs$core$Keyword$$(null, "venice-aug-26", "venice-aug-26", 520228272);
$cljs$cst$859$admin_aug_26$$ = new $APP.$cljs$core$Keyword$$(null, "admin-aug-26", "admin-aug-26", -1522732065);
$cljs$cst$818$admin_aug_25$$ = new $APP.$cljs$core$Keyword$$(null, "admin-aug-25", "admin-aug-25", -1520609899);
$cljs$cst$889$founding_patron$$ = new $APP.$cljs$core$Keyword$$(null, "founding-patron", "founding-patron", -1158627303);
$cljs$cst$830$la_dec_25$$ = new $APP.$cljs$core$Keyword$$(null, "la-dec-25", "la-dec-25", -844494315);
$cljs$cst$835$la_jan_26$$ = new $APP.$cljs$core$Keyword$$(null, "la-jan-26", "la-jan-26", -425305268);
$cljs$cst$807$publication$$ = new $APP.$cljs$core$Keyword$$(null, "publication", "publication", -1089697399);
$cljs$cst$884$target_total$$ = new $APP.$cljs$core$Keyword$$(null, "target-total", "target-total", 158942849);
$APP.$JSCompiler_StaticMethods_beforeLoadModuleCode$$("budget-view");
var $amp$pages$budget$committee$committee_members$$ = new $APP.$cljs$core$PersistentVector$$(null, 9, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$165$name$$, "Archbishop Derderian", $APP.$cljs$cst$790$role$$, "Committee Lead", $APP.$cljs$cst$724$img_src$$, "https://atd-722658831.imgix.net/committee/hovnan.png", $APP.$cljs$cst$707$credit$$, "Courtesy of the Committee"], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, 
[$APP.$cljs$cst$165$name$$, "Tony Shafrazi", $APP.$cljs$cst$790$role$$, "Chief Curator", $APP.$cljs$cst$724$img_src$$, "https://atd-722658831.imgix.net/committee/tony.png", $APP.$cljs$cst$707$credit$$, "Courtesy of the Committee"], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$165$name$$, "Tina Chakarian", $APP.$cljs$cst$790$role$$, "Curator", $APP.$cljs$cst$724$img_src$$, "https://atd-722658831.imgix.net/committee/tina.png", $APP.$cljs$cst$707$credit$$, "Courtesy of the Committee"], 
null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$165$name$$, "Zadik Zadikian", $APP.$cljs$cst$790$role$$, "Artist", $APP.$cljs$cst$724$img_src$$, "https://atd-722658831.imgix.net/committee/zadik.png", $APP.$cljs$cst$707$credit$$, "Courtesy of the Committee"], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$165$name$$, "Rafi Ourfalian", $APP.$cljs$cst$790$role$$, "Legal Advisor", $APP.$cljs$cst$724$img_src$$, "https://atd-722658831.imgix.net/committee/rafi.png", 
$APP.$cljs$cst$707$credit$$, "Courtesy of the Committee"], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$165$name$$, "Khachik Khudikyan", $APP.$cljs$cst$790$role$$, "Logistics Advisor", $APP.$cljs$cst$724$img_src$$, "https://atd-722658831.imgix.net/committee/chris.png", $APP.$cljs$cst$707$credit$$, "Courtesy of the Committee"], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$165$name$$, "Andranik Torosyan", $APP.$cljs$cst$790$role$$, "Financial Advisor", 
$APP.$cljs$cst$724$img_src$$, "https://atd-722658831.imgix.net/committee/andy.png", $APP.$cljs$cst$707$credit$$, "Courtesy of the Committee"], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$165$name$$, "Aram Alajajian", $APP.$cljs$cst$790$role$$, "Architect", $APP.$cljs$cst$724$img_src$$, "https://atd-722658831.imgix.net/committee/aram.png", $APP.$cljs$cst$707$credit$$, "Courtesy of the Committee"], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$165$name$$, 
"Vik Hovsepian", $APP.$cljs$cst$790$role$$, "Committee Member", $APP.$cljs$cst$707$credit$$, "Courtesy of the Committee", $APP.$cljs$cst$724$img_src$$, "https://atd-722658831.imgix.net/committee/vic.png"], null)], null);
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
var $amp$pages$budget$cost_breakdown$cost_data$$ = new $APP.$cljs$core$PersistentVector$$(null, 9, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$285$id$$, $cljs$cst$800$venue$$, $APP.$cljs$cst$287$title$$, "Venue \x26 Operations", $cljs$cst$798$description$$, "Secures and operates the Venice exhibition venue for the full Biennale period: rental, staffing, regulatory compliance, construction, lighting, taxes, and on-site overhead including team lodging and living expenses—ensuring the Pavilion is compliant, safe, and fully operational.", 
$cljs$cst$792$details$$, new $APP.$cljs$core$PersistentVector$$(null, 14, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$578$group$$, "Base", $APP.$cljs$cst$287$title$$, "Base Rent", $cljs$cst$791$amount$$, 145600, $cljs$cst$798$description$$, "Exclusive use of venue April–December 2026 for the full Biennale period."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$578$group$$, "Base", $APP.$cljs$cst$287$title$$, 
"Base Staff", $cljs$cst$791$amount$$, 50000, $cljs$cst$798$description$$, "Exhibition staff during the opening period, including security and front-of-house personnel."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$578$group$$, "Base", $APP.$cljs$cst$287$title$$, "Curatorial Mediator", $cljs$cst$791$amount$$, 25000, $cljs$cst$798$description$$, "Trained curatorial mediator providing visitor guidance, interpretation, and artwork oversight."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 
4, [$APP.$cljs$cst$578$group$$, "Base", $APP.$cljs$cst$287$title$$, "Cleaning", $cljs$cst$791$amount$$, 7000, $cljs$cst$798$description$$, "Weekly professional cleaning and periodic deep cleans for a high-traffic international exhibition."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$578$group$$, "Permitting", $APP.$cljs$cst$287$title$$, "Permits \x26 Signage", $cljs$cst$791$amount$$, 10000, $cljs$cst$798$description$$, "SCIA permits, exhibition signage approvals, and municipal permits for operational compliance in Venice."], 
null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$578$group$$, "Permitting", $APP.$cljs$cst$287$title$$, "Fire Safety Cert.", $cljs$cst$791$amount$$, 3500, $cljs$cst$798$description$$, "Mandatory fire-safety certification, inspections, and documentation required by Venetian authorities."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$578$group$$, "Permitting", $APP.$cljs$cst$287$title$$, "Liability Ins.", $cljs$cst$791$amount$$, 2500, $cljs$cst$798$description$$, 
"Public liability insurance covering visitors, staff, and third parties for the full exhibition period."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$578$group$$, "Construction", $APP.$cljs$cst$287$title$$, "Partitions \x26 Walls", $cljs$cst$791$amount$$, 9500, $cljs$cst$798$description$$, "Windows, door alterations, partitions, and minor structural adjustments to adapt the venue."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$578$group$$, 
"Construction", $APP.$cljs$cst$287$title$$, "Lighting", $cljs$cst$791$amount$$, 7500, $cljs$cst$798$description$$, "Overhead ceiling-mounted, freestanding, and supplemental exhibition lighting equipment and installation."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$578$group$$, "Taxes", $APP.$cljs$cst$287$title$$, "Signage Taxes", $cljs$cst$791$amount$$, 1500, $cljs$cst$798$description$$, "Municipal banner and signage tax for exterior and wayfinding signage during the Biennale."], 
null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$578$group$$, "Taxes", $APP.$cljs$cst$287$title$$, "VAT 22%", $cljs$cst$791$amount$$, 55E3, $cljs$cst$798$description$$, "Italian value-added tax on applicable venue services."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$578$group$$, "Overhead", $APP.$cljs$cst$287$title$$, "Team Lodging", $cljs$cst$791$amount$$, 95E3, $cljs$cst$798$description$$, "Accommodation for the Venice studio team. $125/night per head, 2 months pre-production + 10 months operations."], 
null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$578$group$$, "Overhead", $APP.$cljs$cst$287$title$$, "Per Diem", $cljs$cst$791$amount$$, 66E3, $cljs$cst$798$description$$, "Daily living expenses for the Venice-based team. $100/day per head during active operating months."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$578$group$$, "Overhead", $APP.$cljs$cst$287$title$$, "Project Insurance", $cljs$cst$791$amount$$, 5E4, $cljs$cst$798$description$$, 
"Project insurance coverage for the Venice operations period. 10 months at $5,000/month."], null)], null)], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$285$id$$, $cljs$cst$801$admin$$, $APP.$cljs$cst$287$title$$, "Administration", $cljs$cst$798$description$$, "Core leadership, project management, and operational overhead supporting curatorial direction, artist oversight, coordination, compliance, travel, and lodging—ensuring continuity across the full Biennale cycle.", 
$cljs$cst$792$details$$, new $APP.$cljs$core$PersistentVector$$(null, 6, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$578$group$$, "Staff", $APP.$cljs$cst$287$title$$, "Curators", $cljs$cst$791$amount$$, 9E4, $cljs$cst$798$description$$, "Curatorial leadership. 18 months at $5,000/month."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$578$group$$, "Staff", $APP.$cljs$cst$287$title$$, "Artist", $cljs$cst$791$amount$$, 
45E3, $cljs$cst$798$description$$, "Artist fees. 18 months at $2,500/month."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$578$group$$, "Staff", $APP.$cljs$cst$287$title$$, "Project Coordinator", $cljs$cst$791$amount$$, 45E3, $cljs$cst$798$description$$, "Project coordination. 18 months at $2,500/month."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$578$group$$, "Travel \x26 Overhead", $APP.$cljs$cst$287$title$$, "Team Travel", $cljs$cst$791$amount$$, 
49E3, $cljs$cst$798$description$$, "International and regional travel for core team during scouting, installation, opening week, and milestones."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$578$group$$, "Travel \x26 Overhead", $APP.$cljs$cst$287$title$$, "Team Lodging", $cljs$cst$791$amount$$, 7500, $cljs$cst$798$description$$, "Accommodation for core team during opening week and critical on-site periods in Venice."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 
4, [$APP.$cljs$cst$578$group$$, "Travel \x26 Overhead", $APP.$cljs$cst$287$title$$, "Misc", $cljs$cst$791$amount$$, 5500, $cljs$cst$798$description$$, "Miscellaneous administrative expenses, software, tools, and incidentals. 11 months at $500/month."], null)], null)], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$285$id$$, $cljs$cst$802$la_prod$$, $APP.$cljs$cst$287$title$$, "LA Production", $cljs$cst$798$description$$, "Los Angeles–based production: skilled labor, casting, mold-making, materials, studio overhead, and supplies—ensuring museum-grade fabrication and crating prior to shipment to Venice.", 
$cljs$cst$792$details$$, new $APP.$cljs$core$PersistentVector$$(null, 21, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$578$group$$, "Labor", $APP.$cljs$cst$287$title$$, "Lead Caster", $cljs$cst$791$amount$$, 37625, $cljs$cst$798$description$$, "Lead caster. 5 months at $7,525/month."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$578$group$$, "Labor", $APP.$cljs$cst$287$title$$, "Caster", $cljs$cst$791$amount$$, 
22500, $cljs$cst$798$description$$, "Casting professional. 5 months at $4,500/month."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$578$group$$, "Labor", $APP.$cljs$cst$287$title$$, "General Assistant", $cljs$cst$791$amount$$, 21500, $cljs$cst$798$description$$, "General production assistant. 5 months at $4,300/month."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$578$group$$, "Labor", $APP.$cljs$cst$287$title$$, "Mold Maker", $cljs$cst$791$amount$$, 
15E3, $cljs$cst$798$description$$, "Specialist mold maker. 2 months at $7,500/month."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$578$group$$, "Labor", $APP.$cljs$cst$287$title$$, "Foam Sprayer", $cljs$cst$791$amount$$, 9E3, $cljs$cst$798$description$$, "Contract foam sprayer for structural cores. 2 months at $4,500/month."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$578$group$$, "Labor", $APP.$cljs$cst$287$title$$, "Casting Asst. ×3", 
$cljs$cst$791$amount$$, 9E3, $cljs$cst$798$description$$, "3 casting assistants. 2 months at $1,500/month each."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$578$group$$, "Labor", $APP.$cljs$cst$287$title$$, "Packers ×4", $cljs$cst$791$amount$$, 14E3, $cljs$cst$798$description$$, "4 packers for crating and shipping prep. 1 month at $3,500 each."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$578$group$$, "Labor", $APP.$cljs$cst$287$title$$, 
"Crate Makers ×2", $cljs$cst$791$amount$$, 1E4, $cljs$cst$798$description$$, "2 crate makers for custom shipping crates. 1 month at $5,000 each."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$578$group$$, "Overhead", $APP.$cljs$cst$287$title$$, "Studio Rental", $cljs$cst$791$amount$$, 22500, $cljs$cst$798$description$$, "LA studio rent for fabrication. 5 months at $4,500/month."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$578$group$$, "Overhead", 
$APP.$cljs$cst$287$title$$, "Foam Space Rental", $cljs$cst$791$amount$$, 5500, $cljs$cst$798$description$$, "Additional foam production space rental. 2 months at $2,750/month."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$578$group$$, "Overhead", $APP.$cljs$cst$287$title$$, "Utilities", $cljs$cst$791$amount$$, 3E3, $cljs$cst$798$description$$, "Utilities for the LA production facility. 2 months at $1,500/month."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 
4, [$APP.$cljs$cst$578$group$$, "Materials", $APP.$cljs$cst$287$title$$, "Pigment", $cljs$cst$791$amount$$, 11500, $cljs$cst$798$description$$, "High-quality pigments integrated into plaster at casting."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$578$group$$, "Materials", $APP.$cljs$cst$287$title$$, "Honeycomb", $cljs$cst$791$amount$$, 1500, $cljs$cst$798$description$$, "Structural honeycomb material for lightweight internal reinforcement."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 
4, [$APP.$cljs$cst$578$group$$, "Materials", $APP.$cljs$cst$287$title$$, "Polymers", $cljs$cst$791$amount$$, 1500, $cljs$cst$798$description$$, "Binders and polymer materials used in finishing and protection."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$578$group$$, "Materials", $APP.$cljs$cst$287$title$$, "Foam Material", $cljs$cst$791$amount$$, 21E3, $cljs$cst$798$description$$, "Lightweight foam cores for structural integrity while minimizing shipping weight."], 
null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$578$group$$, "Materials", $APP.$cljs$cst$287$title$$, "Plaster", $cljs$cst$791$amount$$, 4500, $cljs$cst$798$description$$, "Primary casting material for all sculptural units."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$578$group$$, "Materials", $APP.$cljs$cst$287$title$$, "Supplies", $cljs$cst$791$amount$$, 10500, $cljs$cst$798$description$$, "Consumable supplies used during casting and finishing."], 
null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$578$group$$, "Materials", $APP.$cljs$cst$287$title$$, "Mold Supplies", $cljs$cst$791$amount$$, 17500, $cljs$cst$798$description$$, "Custom mold materials, CNC mother units, and fabrication aids."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$578$group$$, "Materials", $APP.$cljs$cst$287$title$$, "Crate Materials", $cljs$cst$791$amount$$, 15E3, $cljs$cst$798$description$$, "Materials for constructing custom shipping crates."], 
null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$578$group$$, "Materials", $APP.$cljs$cst$287$title$$, "Packing Supplies", $cljs$cst$791$amount$$, 5E3, $cljs$cst$798$description$$, "Packing materials for securing artwork during international transit."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$578$group$$, "Materials", $APP.$cljs$cst$287$title$$, "Misc", $cljs$cst$791$amount$$, 7500, $cljs$cst$798$description$$, "Miscellaneous production expenses. 5 months at $1,500/month."], 
null)], null)], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$285$id$$, $cljs$cst$803$the_studio$$, $APP.$cljs$cst$287$title$$, "The Studio", $cljs$cst$798$description$$, "On-site operation of THE STUDIO in Venice: staffing, installation and de-installation crews, local materials, and daily production—supporting continuous fabrication and reconfiguration throughout the Biennale.", $cljs$cst$792$details$$, new $APP.$cljs$core$PersistentVector$$(null, 15, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, 
[new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$578$group$$, "Staff", $APP.$cljs$cst$287$title$$, "Studio Asst. #1", $cljs$cst$791$amount$$, 54E3, $cljs$cst$798$description$$, "Full-time studio assistant. 9 months at $6,000/month."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$578$group$$, "Staff", $APP.$cljs$cst$287$title$$, "Studio Asst. #2", $cljs$cst$791$amount$$, 46500, $cljs$cst$798$description$$, "Studio assistant. 6 months at $6,000 + 3 months at $3,500."], 
null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$578$group$$, "Staff", $APP.$cljs$cst$287$title$$, "Studio Asst. #3", $cljs$cst$791$amount$$, 23500, $cljs$cst$798$description$$, "Studio assistant. 1 month at $6,000 + 5 months at $3,500."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$578$group$$, "Staff", $APP.$cljs$cst$287$title$$, "Studio Asst. #4", $cljs$cst$791$amount$$, 23500, $cljs$cst$798$description$$, "Studio assistant. 1 month at $6,000 + 5 months at $3,500."], 
null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$578$group$$, "Staff", $APP.$cljs$cst$287$title$$, "Studio Asst. #5", $cljs$cst$791$amount$$, 6E3, $cljs$cst$798$description$$, "Temporary studio assistant. 1 month at $6,000."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$578$group$$, "Staff", $APP.$cljs$cst$287$title$$, "Studio Asst. #6", $cljs$cst$791$amount$$, 6E3, $cljs$cst$798$description$$, "Temporary studio assistant. 1 month at $6,000."], 
null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$578$group$$, "Install / Uninstall", $APP.$cljs$cst$287$title$$, "Installers ×4", $cljs$cst$791$amount$$, 32E3, $cljs$cst$798$description$$, "4 installers for install and uninstall. 2 engagements at $4,000 each."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$578$group$$, "Install / Uninstall", $APP.$cljs$cst$287$title$$, "Crate Makers ×2", $cljs$cst$791$amount$$, 11E3, $cljs$cst$798$description$$, 
"2 crate makers for Venice de-install crating. 1 engagement at $5,500 each."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$578$group$$, "Materials", $APP.$cljs$cst$287$title$$, "Foam Material", $cljs$cst$791$amount$$, 11500, $cljs$cst$798$description$$, "Venice-sourced foam materials for ongoing on-site fabrication."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$578$group$$, "Materials", $APP.$cljs$cst$287$title$$, "Pigment", $cljs$cst$791$amount$$, 
6750, $cljs$cst$798$description$$, "Pigments for on-site casting and finishing work."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$578$group$$, "Materials", $APP.$cljs$cst$287$title$$, "Plaster", $cljs$cst$791$amount$$, 4750, $cljs$cst$798$description$$, "Plaster for on-site sculptural production."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$578$group$$, "Materials", $APP.$cljs$cst$287$title$$, "Supplies", $cljs$cst$791$amount$$, 4750, 
$cljs$cst$798$description$$, "Consumable supplies for ongoing studio activity."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$578$group$$, "Materials", $APP.$cljs$cst$287$title$$, "Crate Materials", $cljs$cst$791$amount$$, 7500, $cljs$cst$798$description$$, "Materials for crating artwork for return shipment."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$578$group$$, "Materials", $APP.$cljs$cst$287$title$$, "Packing Supplies", $cljs$cst$791$amount$$, 
2500, $cljs$cst$798$description$$, "Packing materials for securing artwork at close-out."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$578$group$$, "Materials", $APP.$cljs$cst$287$title$$, "Misc Materials", $cljs$cst$791$amount$$, 4250, $cljs$cst$798$description$$, "Miscellaneous materials and expendables for studio operations."], null)], null)], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$285$id$$, $cljs$cst$804$logistics$$, $APP.$cljs$cst$287$title$$, 
"Logistics \x26 Transport", $cljs$cst$798$description$$, "International and local transport under Biennale conditions: freight, insurance, port handling, lagoon barge transport, forklift operations, storage, and reverse logistics for return shipment.", $cljs$cst$792$details$$, new $APP.$cljs$core$PersistentVector$$(null, 17, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$578$group$$, "International Freight", $APP.$cljs$cst$287$title$$, 
"Ship LA → Venice", $cljs$cst$791$amount$$, 3E4, $cljs$cst$798$description$$, "International freight from Los Angeles to Venice for all crated artwork and materials."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$578$group$$, "International Freight", $APP.$cljs$cst$287$title$$, "Ship Venice → LA", $cljs$cst$791$amount$$, 3E4, $cljs$cst$798$description$$, "Return international freight from Venice to Los Angeles after close-out."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 
4, [$APP.$cljs$cst$578$group$$, "International Freight", $APP.$cljs$cst$287$title$$, "Transit Insurance", $cljs$cst$791$amount$$, 12E3, $cljs$cst$798$description$$, "Insurance coverage for artwork during international transit."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$578$group$$, "Install / Uninstall", $APP.$cljs$cst$287$title$$, "Installers (Venice)", $cljs$cst$791$amount$$, 7200, $cljs$cst$798$description$$, "Local Venice installation crew. 4 installers for on-site install."], 
null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$578$group$$, "Install / Uninstall", $APP.$cljs$cst$287$title$$, "Uninstallers (Venice)", $cljs$cst$791$amount$$, 9E3, $cljs$cst$798$description$$, "Local Venice de-installation crew. 5 uninstallers for close-out."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$578$group$$, "Local Transport", $APP.$cljs$cst$287$title$$, "Port Handling", $cljs$cst$791$amount$$, 2500, $cljs$cst$798$description$$, "Offloading crates at Venice port; includes terminal fees and labor."], 
null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$578$group$$, "Local Transport", $APP.$cljs$cst$287$title$$, "Barge (Port → Stor.)", $cljs$cst$791$amount$$, 3E3, $cljs$cst$798$description$$, "Lagoon barge transport for crates from port to storage facility."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$578$group$$, "Local Transport", $APP.$cljs$cst$287$title$$, "Trucking (Stor. → Venue)", $cljs$cst$791$amount$$, 1200, $cljs$cst$798$description$$, 
"Truck transport from storage depot to Biennale venue access point."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$578$group$$, "Local Transport", $APP.$cljs$cst$287$title$$, "Barge (Stor. → Venue)", $cljs$cst$791$amount$$, 3E3, $cljs$cst$798$description$$, "Barge shipping for crates/materials to venue area via Venice canals."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$578$group$$, "Local Transport", $APP.$cljs$cst$287$title$$, "Forklift \x26 Operator", 
$cljs$cst$791$amount$$, 1300, $cljs$cst$798$description$$, "Forklift + licensed operator for unloading/loading at venue. 2 days at $650/day."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$578$group$$, "Local Transport", $APP.$cljs$cst$287$title$$, "Handling Crew", $cljs$cst$791$amount$$, 500, $cljs$cst$798$description$$, "Movers for crate handling, navigation of canals and venue access."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$578$group$$, 
"Storage", $APP.$cljs$cst$287$title$$, "Short-Term Storage", $cljs$cst$791$amount$$, 1200, $cljs$cst$798$description$$, "Storage of crates between arrival and installation. 60 crates for 20 days."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$578$group$$, "Storage", $APP.$cljs$cst$287$title$$, "Empty Crate Storage", $cljs$cst$791$amount$$, 2E3, $cljs$cst$798$description$$, "Storage of empty crates during the Biennale exhibition run. 200 days."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 
4, [$APP.$cljs$cst$578$group$$, "Storage", $APP.$cljs$cst$287$title$$, "Waste Removal", $cljs$cst$791$amount$$, 1E3, $cljs$cst$798$description$$, "Removal of packing material, foam waste, and install debris."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$578$group$$, "Reverse Logistics", $APP.$cljs$cst$287$title$$, "Reverse Barge", $cljs$cst$791$amount$$, 3E3, $cljs$cst$798$description$$, "Return transport of crates/materials after uninstall."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 
4, [$APP.$cljs$cst$578$group$$, "Reverse Logistics", $APP.$cljs$cst$287$title$$, "Reverse Trucking", $cljs$cst$791$amount$$, 1200, $cljs$cst$798$description$$, "Transport of crates back to port for outbound shipping."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$578$group$$, "Reverse Logistics", $APP.$cljs$cst$287$title$$, "Reverse Port Handling", $cljs$cst$791$amount$$, 2500, $cljs$cst$798$description$$, "Terminal fees + labor for reloading outbound container."], null)], 
null)], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$285$id$$, $cljs$cst$805$opening$$, $APP.$cljs$cst$287$title$$, "Opening Week", $cljs$cst$798$description$$, "Opening reception and first public visibility of the Pavilion: hospitality, staffing, technical support, press and VIP coordination—executed during the Biennale's most compressed period.", $cljs$cst$792$details$$, new $APP.$cljs$core$PersistentVector$$(null, 11, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, 
[new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$578$group$$, "Hospitality", $APP.$cljs$cst$287$title$$, "Catering — Food", $cljs$cst$791$amount$$, 5250, $cljs$cst$798$description$$, "Passed hors d'oeuvres for opening night reception. 75 guests at $70/guest."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$578$group$$, "Hospitality", $APP.$cljs$cst$287$title$$, "Catering — Beverages", $cljs$cst$791$amount$$, 1500, $cljs$cst$798$description$$, "Prosecco, wine, and non-alcoholic drinks. 100 guests at $15/guest."], 
null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$578$group$$, "Hospitality", $APP.$cljs$cst$287$title$$, "Catering Staff", $cljs$cst$791$amount$$, 1500, $cljs$cst$798$description$$, "3–6 servers + 1 event captain for opening night."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$578$group$$, "Hospitality", $APP.$cljs$cst$287$title$$, "Rentals", $cljs$cst$791$amount$$, 1500, $cljs$cst$798$description$$, "Tables, linens, glassware; Venice incurs transport surcharges due to canals."], 
null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$578$group$$, "Event Ops", $APP.$cljs$cst$287$title$$, "Event Coordinator", $cljs$cst$791$amount$$, 1500, $cljs$cst$798$description$$, "Scheduling, setup, guest flow, liaising with pavilion staff and caterer."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$578$group$$, "Event Ops", $APP.$cljs$cst$287$title$$, "Security", $cljs$cst$791$amount$$, 800, $cljs$cst$798$description$$, "Safe capacity management at openings per Biennale requirements."], 
null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$578$group$$, "Event Ops", $APP.$cljs$cst$287$title$$, "Audio, Light \x26 Tech", $cljs$cst$791$amount$$, 1E3, $cljs$cst$798$description$$, "Small speaker system, microphone, ambient lighting reinforcement."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$578$group$$, "Event Ops", $APP.$cljs$cst$287$title$$, "Event Photography", $cljs$cst$791$amount$$, 500, $cljs$cst$798$description$$, "Opening night event photography coverage."], 
null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$578$group$$, "Event Ops", $APP.$cljs$cst$287$title$$, "Invitations", $cljs$cst$791$amount$$, 500, $cljs$cst$798$description$$, "Printing or premium digital distribution of invitations."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$578$group$$, "VIP Programs", $APP.$cljs$cst$287$title$$, "VIP Press Preview", $cljs$cst$791$amount$$, 1500, $cljs$cst$798$description$$, "Staff + scheduling for VIP/press walkthroughs during opening week."], 
null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$578$group$$, "VIP Programs", $APP.$cljs$cst$287$title$$, "VIP Water Taxi", $cljs$cst$791$amount$$, 1500, $cljs$cst$798$description$$, "Transport allowance for VIPs/officials. 8 rides at $120/ride."], null)], null)], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$285$id$$, $cljs$cst$806$marketing$$, $APP.$cljs$cst$287$title$$, "Marketing \x26 PR", $cljs$cst$798$description$$, "Visibility and communications: identity design, PR, advertising, social media, and press activity—positioning the Pavilion within the global Biennale discourse.", 
$cljs$cst$792$details$$, new $APP.$cljs$core$PersistentVector$$(null, 18, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$578$group$$, "Design", $APP.$cljs$cst$287$title$$, "Visual Identity", $cljs$cst$791$amount$$, 2500, $cljs$cst$798$description$$, "Design of pavilion identity, key visual and main poster."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$578$group$$, "Design", $APP.$cljs$cst$287$title$$, 
"Essentials Package", $cljs$cst$791$amount$$, 1500, $cljs$cst$798$description$$, "Press kit, invitations, social templates, digital ads."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$578$group$$, "Design", $APP.$cljs$cst$287$title$$, "Website \x26 Hosting", $cljs$cst$791$amount$$, 7500, $cljs$cst$798$description$$, "Design and hosting of the pavilion website."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$578$group$$, "Design", $APP.$cljs$cst$287$title$$, 
"OOH Design", $cljs$cst$791$amount$$, 1500, $cljs$cst$798$description$$, "Design for totems and out-of-home placements."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$578$group$$, "Design", $APP.$cljs$cst$287$title$$, "Exhibition Graphics", $cljs$cst$791$amount$$, 1500, $cljs$cst$798$description$$, "Entrance graphics, wall texts, wayfinding signage."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$578$group$$, "Writing", $APP.$cljs$cst$287$title$$, 
"Social Copywriting", $cljs$cst$791$amount$$, 1500, $cljs$cst$798$description$$, "Ongoing caption writing, messaging, narrative scripting."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$578$group$$, "Writing", $APP.$cljs$cst$287$title$$, "PR Writing", $cljs$cst$791$amount$$, 1500, $cljs$cst$798$description$$, "Speeches, press releases, media statements."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$578$group$$, "Advertising", $APP.$cljs$cst$287$title$$, 
"Totem Placement", $cljs$cst$791$amount$$, 8500, $cljs$cst$798$description$$, "Rental + printing + installation for Biennale duration."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$578$group$$, "Advertising", $APP.$cljs$cst$287$title$$, "Vaporetto Wraps", $cljs$cst$791$amount$$, 12500, $cljs$cst$798$description$$, "Rental + production for 2–3 vaporetto lines over Biennale duration."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$578$group$$, 
"Advertising", $APP.$cljs$cst$287$title$$, "Poster Printing", $cljs$cst$791$amount$$, 5E3, $cljs$cst$798$description$$, "250 posters at $20 each for venue and city placements."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$578$group$$, "Advertising", $APP.$cljs$cst$287$title$$, "Outdoor Posters", $cljs$cst$791$amount$$, 3E3, $cljs$cst$798$description$$, "Secondary placements across Venice — 50 posters at $60 each."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 
4, [$APP.$cljs$cst$578$group$$, "Advertising", $APP.$cljs$cst$287$title$$, "Social Media Ads", $cljs$cst$791$amount$$, 2500, $cljs$cst$798$description$$, "Instagram, Facebook, and TikTok ads for 7 months."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$578$group$$, "Advertising", $APP.$cljs$cst$287$title$$, "Social Campaign Mgmt", $cljs$cst$791$amount$$, 2500, $cljs$cst$798$description$$, "Strategy, posting, optimization, reporting."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 
4, [$APP.$cljs$cst$578$group$$, "Advertising", $APP.$cljs$cst$287$title$$, "Digital Pub Ads", $cljs$cst$791$amount$$, 2500, $cljs$cst$798$description$$, "Ads on e-flux, ArtNews, Hyperallergic, Frieze."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$578$group$$, "Advertising", $APP.$cljs$cst$287$title$$, "Print Pub Ads", $cljs$cst$791$amount$$, 5E3, $cljs$cst$798$description$$, "Artforum, Art Newspaper, and similar print publications."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 
4, [$APP.$cljs$cst$578$group$$, "PR", $APP.$cljs$cst$287$title$$, "PR — Pre-Opening", $cljs$cst$791$amount$$, 1500, $cljs$cst$798$description$$, "Press relations, writing, pitching, coordination."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$578$group$$, "PR", $APP.$cljs$cst$287$title$$, "PR — Ongoing", $cljs$cst$791$amount$$, 1500, $cljs$cst$798$description$$, "Sustained PR, press tracking, releases, interviews over 7 months."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 
4, [$APP.$cljs$cst$578$group$$, "PR", $APP.$cljs$cst$287$title$$, "Marketing Mgmt Fee", $cljs$cst$791$amount$$, 2500, $cljs$cst$798$description$$, "Overall coordination of marketing and media buys."], null)], null)], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$285$id$$, $cljs$cst$807$publication$$, $APP.$cljs$cst$287$title$$, "Publications", $cljs$cst$798$description$$, "Catalogue and printed materials: commissioned texts, design, editing, printing, totes, and stationery—ensuring long-term scholarly and institutional presence.", 
$cljs$cst$792$details$$, new $APP.$cljs$core$PersistentVector$$(null, 12, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$578$group$$, "Writing", $APP.$cljs$cst$287$title$$, "Curatorial Essay", $cljs$cst$791$amount$$, 2500, $cljs$cst$798$description$$, "Primary curatorial essay for catalogue and website."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$578$group$$, "Writing", $APP.$cljs$cst$287$title$$, 
"Catalogue Essays", $cljs$cst$791$amount$$, 4E3, $cljs$cst$798$description$$, "Commissioned essays by 4 invited writers and scholars at $1,000 each."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$578$group$$, "Catalogue", $APP.$cljs$cst$287$title$$, "Design", $cljs$cst$791$amount$$, 7500, $cljs$cst$798$description$$, "Design of exhibition catalogue (120 pages, soft cover)."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$578$group$$, "Catalogue", 
$APP.$cljs$cst$287$title$$, "Editing \x26 Layout", $cljs$cst$791$amount$$, 2500, $cljs$cst$798$description$$, "Editing and layout of copy, images, and inserts."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$578$group$$, "Catalogue", $APP.$cljs$cst$287$title$$, "Printing", $cljs$cst$791$amount$$, 12E3, $cljs$cst$798$description$$, "High-quality color printing, 120 pages. 150 copies at $80 each."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$578$group$$, 
"Catalogue", $APP.$cljs$cst$287$title$$, "Proofs \x26 Shipping", $cljs$cst$791$amount$$, 1E3, $cljs$cst$798$description$$, "Proofs, shipping, and miscellaneous printing costs."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$578$group$$, "Tote", $APP.$cljs$cst$287$title$$, "Design", $cljs$cst$791$amount$$, 2500, $cljs$cst$798$description$$, "Design of exhibition totes."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$578$group$$, "Tote", $APP.$cljs$cst$287$title$$, 
"Printing", $cljs$cst$791$amount$$, 4500, $cljs$cst$798$description$$, "High-quality silkscreen run. 300 totes at $15 each."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$578$group$$, "Tote", $APP.$cljs$cst$287$title$$, "Proofs \x26 Shipping", $cljs$cst$791$amount$$, 1E3, $cljs$cst$798$description$$, "Proofs, shipping, and miscellaneous costs for totes."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$578$group$$, "Stationery", $APP.$cljs$cst$287$title$$, 
"Design", $cljs$cst$791$amount$$, 1500, $cljs$cst$798$description$$, "Cards, postcards, flyers design."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$578$group$$, "Stationery", $APP.$cljs$cst$287$title$$, "Printing", $cljs$cst$791$amount$$, 1500, $cljs$cst$798$description$$, "300 pieces at $5 each."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$578$group$$, "Stationery", $APP.$cljs$cst$287$title$$, "Proofs \x26 Shipping", $cljs$cst$791$amount$$, 
250, $cljs$cst$798$description$$, "Proofs, shipping, and miscellaneous stationery costs."], null)], null)], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$285$id$$, $cljs$cst$808$documentation$$, $APP.$cljs$cst$287$title$$, "Documentation", $cljs$cst$798$description$$, "Comprehensive visual documentation: cinema-quality film production, photography, sound recording, editing, social media deliverables, and archiving—supporting press visibility, scholarship, and institutional legacy.", 
$cljs$cst$792$details$$, new $APP.$cljs$core$PersistentVector$$(null, 12, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$578$group$$, "Production", $APP.$cljs$cst$287$title$$, "Camera \x26 Lighting", $cljs$cst$791$amount$$, 1E4, $cljs$cst$798$description$$, "Rental package for cinema cameras, lenses, lighting, audio kits."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$578$group$$, "Production", $APP.$cljs$cst$287$title$$, 
"DPs ×2", $cljs$cst$791$amount$$, 20400, $cljs$cst$798$description$$, "Lead cinematographers for install, opening, and walkthroughs. 2 DPs × 12 days × $850/day."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$578$group$$, "Production", $APP.$cljs$cst$287$title$$, "Assistant / Gaffer", $cljs$cst$791$amount$$, 4500, $cljs$cst$798$description$$, "Lighting and camera support during shoots. 10 days at $450/day."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$578$group$$, 
"Production", $APP.$cljs$cst$287$title$$, "Sound Recording", $cljs$cst$791$amount$$, 2800, $cljs$cst$798$description$$, "Location audio capture, ambient sound, dialogue. 8 days at $350/day."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$578$group$$, "Production", $APP.$cljs$cst$287$title$$, "Photo — Install", $cljs$cst$791$amount$$, 1750, $cljs$cst$798$description$$, "High-resolution documentation during installation. 5 days at $350/day."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 
4, [$APP.$cljs$cst$578$group$$, "Production", $APP.$cljs$cst$287$title$$, "Photo — Exhibition", $cljs$cst$791$amount$$, 1800, $cljs$cst$798$description$$, "Final artwork + pavilion architecture photography. 3 days at $600/day."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$578$group$$, "Production", $APP.$cljs$cst$287$title$$, "Photo — Opening", $cljs$cst$791$amount$$, 1400, $cljs$cst$798$description$$, "Coverage for VIP events, public programs, press preview. 2 days at $700/day."], 
null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$578$group$$, "Post", $APP.$cljs$cst$287$title$$, "Film Assembly", $cljs$cst$791$amount$$, 3E3, $cljs$cst$798$description$$, "Initial cut of installation and exhibition film. 6 days at $500/day."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$578$group$$, "Post", $APP.$cljs$cst$287$title$$, "Final Cut \x26 Color", $cljs$cst$791$amount$$, 2400, $cljs$cst$798$description$$, "Professional colorist and finishing for final delivery. 4 days at $600/day."], 
null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$578$group$$, "Post", $APP.$cljs$cst$287$title$$, "Sound Edit \x26 Mix", $cljs$cst$791$amount$$, 1600, $cljs$cst$798$description$$, "Cleanup, music integration, final audio polish. 4 days at $400/day."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$578$group$$, "Post", $APP.$cljs$cst$287$title$$, "Social Deliverables", $cljs$cst$791$amount$$, 6E3, $cljs$cst$798$description$$, "Short-form clips optimized for IG/FB/TikTok. 5 days at $1,200/day."], 
null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$578$group$$, "Post", $APP.$cljs$cst$287$title$$, "Backup \x26 Archive", $cljs$cst$791$amount$$, 750, $cljs$cst$798$description$$, "Redundancy, hard drives, digital archiving of all materials."], null)], null)], null)], null);
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
var $amp$pages$budget$cash_flow$cashflow_data$$ = new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$cljs$cst$809$debt_raised$$, 0, $cljs$cst$810$funds_raised$$, 175000, $cljs$cst$811$cash_flow_model$$, $APP.$cljs$core$PersistentVector$fromArray$$([new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$285$id$$, $cljs$cst$812$admin_jul_25$$, $APP.$cljs$cst$287$title$$, "Admin — Core Team (Jul)", $cljs$cst$813$due$$, "2025-07-15", $cljs$cst$791$amount$$, 10000, $cljs$cst$814$priority$$, 
$cljs$cst$815$normal$$, $APP.$cljs$cst$12$status$$, $cljs$cst$816$paid$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$285$id$$, $cljs$cst$817$contingency_jul_25$$, $APP.$cljs$cst$287$title$$, "Contingency (Jul)", $cljs$cst$813$due$$, "2025-07-20", $cljs$cst$791$amount$$, 500, $cljs$cst$814$priority$$, $cljs$cst$815$normal$$, $APP.$cljs$cst$12$status$$, $cljs$cst$816$paid$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$285$id$$, $cljs$cst$818$admin_aug_25$$, 
$APP.$cljs$cst$287$title$$, "Admin — Core Team (Aug)", $cljs$cst$813$due$$, "2025-08-15", $cljs$cst$791$amount$$, 10000, $cljs$cst$814$priority$$, $cljs$cst$815$normal$$, $APP.$cljs$cst$12$status$$, $cljs$cst$816$paid$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$285$id$$, $cljs$cst$819$contingency_aug_25$$, $APP.$cljs$cst$287$title$$, "Contingency (Aug)", $cljs$cst$813$due$$, "2025-08-20", $cljs$cst$791$amount$$, 500, $cljs$cst$814$priority$$, $cljs$cst$815$normal$$, 
$APP.$cljs$cst$12$status$$, $cljs$cst$816$paid$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$285$id$$, $cljs$cst$820$venice_sep_25$$, $APP.$cljs$cst$287$title$$, "Venice — Lodging \x26 Per Diem (Sep)", $cljs$cst$813$due$$, "2025-09-05", $cljs$cst$791$amount$$, 13000, $cljs$cst$814$priority$$, $cljs$cst$815$normal$$, $APP.$cljs$cst$12$status$$, $cljs$cst$816$paid$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$285$id$$, $cljs$cst$821$admin_sep_25$$, 
$APP.$cljs$cst$287$title$$, "Admin — Core Team + Travel (Sep)", $cljs$cst$813$due$$, "2025-09-15", $cljs$cst$791$amount$$, 20000, $cljs$cst$814$priority$$, $cljs$cst$822$high$$, $APP.$cljs$cst$12$status$$, $cljs$cst$816$paid$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$285$id$$, $cljs$cst$823$contingency_sep_25$$, $APP.$cljs$cst$287$title$$, "Contingency (Sep)", $cljs$cst$813$due$$, "2025-09-20", $cljs$cst$791$amount$$, 650, $cljs$cst$814$priority$$, $cljs$cst$815$normal$$, 
$APP.$cljs$cst$12$status$$, $cljs$cst$816$paid$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$285$id$$, $cljs$cst$824$venice_oct_25$$, $APP.$cljs$cst$287$title$$, "Venice — Lodging \x26 Per Diem (Oct)", $cljs$cst$813$due$$, "2025-10-05", $cljs$cst$791$amount$$, 13E3, $cljs$cst$814$priority$$, $cljs$cst$815$normal$$, $APP.$cljs$cst$12$status$$, $cljs$cst$816$paid$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$285$id$$, $cljs$cst$825$admin_oct_25$$, 
$APP.$cljs$cst$287$title$$, "Admin — Core Team + Travel (Oct)", $cljs$cst$813$due$$, "2025-10-15", $cljs$cst$791$amount$$, 2E4, $cljs$cst$814$priority$$, $cljs$cst$822$high$$, $APP.$cljs$cst$12$status$$, $cljs$cst$816$paid$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$285$id$$, $cljs$cst$826$contingency_oct_25$$, $APP.$cljs$cst$287$title$$, "Contingency (Oct)", $cljs$cst$813$due$$, "2025-10-20", $cljs$cst$791$amount$$, 650, $cljs$cst$814$priority$$, $cljs$cst$815$normal$$, 
$APP.$cljs$cst$12$status$$, $cljs$cst$816$paid$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$285$id$$, $cljs$cst$827$la_nov_25$$, $APP.$cljs$cst$287$title$$, "LA Production — Phase 1 Startup (Nov)", $cljs$cst$813$due$$, "2025-11-10", $cljs$cst$791$amount$$, 31325, $cljs$cst$814$priority$$, $cljs$cst$822$high$$, $APP.$cljs$cst$12$status$$, $cljs$cst$816$paid$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$285$id$$, $cljs$cst$828$admin_nov_25$$, 
$APP.$cljs$cst$287$title$$, "Admin — Core Team (Nov)", $cljs$cst$813$due$$, "2025-11-15", $cljs$cst$791$amount$$, 1E4, $cljs$cst$814$priority$$, $cljs$cst$815$normal$$, $APP.$cljs$cst$12$status$$, $cljs$cst$816$paid$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$285$id$$, $cljs$cst$829$contingency_nov_25$$, $APP.$cljs$cst$287$title$$, "Contingency (Nov)", $cljs$cst$813$due$$, "2025-11-20", $cljs$cst$791$amount$$, 1566, $cljs$cst$814$priority$$, $cljs$cst$815$normal$$, 
$APP.$cljs$cst$12$status$$, $cljs$cst$816$paid$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$285$id$$, $cljs$cst$830$la_dec_25$$, $APP.$cljs$cst$287$title$$, "LA Production — Phase 1 Continued (Dec)", $cljs$cst$813$due$$, "2025-12-10", $cljs$cst$791$amount$$, 31325, $cljs$cst$814$priority$$, $cljs$cst$822$high$$, $APP.$cljs$cst$12$status$$, $cljs$cst$816$paid$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$285$id$$, $cljs$cst$831$admin_dec_25$$, 
$APP.$cljs$cst$287$title$$, "Admin — Core Team (Dec)", $cljs$cst$813$due$$, "2025-12-15", $cljs$cst$791$amount$$, 1E4, $cljs$cst$814$priority$$, $cljs$cst$815$normal$$, $APP.$cljs$cst$12$status$$, $cljs$cst$816$paid$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$285$id$$, $cljs$cst$832$contingency_dec_25$$, $APP.$cljs$cst$287$title$$, "Contingency (Dec)", $cljs$cst$813$due$$, "2025-12-20", $cljs$cst$791$amount$$, 1566, $cljs$cst$814$priority$$, $cljs$cst$815$normal$$, 
$APP.$cljs$cst$12$status$$, $cljs$cst$816$paid$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$285$id$$, $cljs$cst$833$venice_jan_26$$, $APP.$cljs$cst$287$title$$, "Venice — Venue Tranche 1 (10%)", $cljs$cst$813$due$$, "2026-01-05", $cljs$cst$791$amount$$, 30650, $cljs$cst$814$priority$$, $cljs$cst$834$critical$$, $APP.$cljs$cst$12$status$$, $cljs$cst$816$paid$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$285$id$$, $cljs$cst$835$la_jan_26$$, 
$APP.$cljs$cst$287$title$$, "LA Production — Phase 2 (Jan)", $cljs$cst$813$due$$, "2026-01-10", $cljs$cst$791$amount$$, 30325, $cljs$cst$814$priority$$, $cljs$cst$822$high$$, $APP.$cljs$cst$12$status$$, $cljs$cst$816$paid$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$285$id$$, $cljs$cst$836$admin_jan_26$$, $APP.$cljs$cst$287$title$$, "Admin — Core Team (Jan)", $cljs$cst$813$due$$, "2026-01-15", $cljs$cst$791$amount$$, 1E4, $cljs$cst$814$priority$$, $cljs$cst$815$normal$$, 
$APP.$cljs$cst$12$status$$, $cljs$cst$816$paid$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$285$id$$, $cljs$cst$837$contingency_jan_26$$, $APP.$cljs$cst$287$title$$, "Contingency (Jan)", $cljs$cst$813$due$$, "2026-01-20", $cljs$cst$791$amount$$, 3049, $cljs$cst$814$priority$$, $cljs$cst$815$normal$$, $APP.$cljs$cst$12$status$$, $cljs$cst$816$paid$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$285$id$$, $cljs$cst$838$venice_feb_26$$, $APP.$cljs$cst$287$title$$, 
"Venice — Venue Tranche 2 + 3 (60%)", $cljs$cst$813$due$$, "2026-02-05", $cljs$cst$791$amount$$, 183900, $cljs$cst$814$priority$$, $cljs$cst$834$critical$$, $APP.$cljs$cst$12$status$$, $APP.$cljs$cst$14$pending$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$285$id$$, $cljs$cst$839$la_feb_26$$, $APP.$cljs$cst$287$title$$, "LA Production — Phase 3 (Feb)", $cljs$cst$813$due$$, "2026-02-10", $cljs$cst$791$amount$$, 74825, $cljs$cst$814$priority$$, $cljs$cst$834$critical$$, 
$APP.$cljs$cst$12$status$$, $APP.$cljs$cst$14$pending$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$285$id$$, $cljs$cst$840$admin_feb_26$$, $APP.$cljs$cst$287$title$$, "Admin — Core Team + Misc (Feb)", $cljs$cst$813$due$$, "2026-02-15", $cljs$cst$791$amount$$, 10500, $cljs$cst$814$priority$$, $cljs$cst$822$high$$, $APP.$cljs$cst$12$status$$, $APP.$cljs$cst$14$pending$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$285$id$$, $cljs$cst$841$contingency_feb_26$$, 
$APP.$cljs$cst$287$title$$, "Contingency (Feb)", $cljs$cst$813$due$$, "2026-02-20", $cljs$cst$791$amount$$, 12936, $cljs$cst$814$priority$$, $cljs$cst$815$normal$$, $APP.$cljs$cst$12$status$$, $APP.$cljs$cst$14$pending$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$285$id$$, $cljs$cst$842$venice_mar_26$$, $APP.$cljs$cst$287$title$$, "Venice — Venue Tranche 4 + Logistics (Outbound) + Setup", $cljs$cst$813$due$$, "2026-03-05", $cljs$cst$791$amount$$, 172200, $cljs$cst$814$priority$$, 
$cljs$cst$834$critical$$, $APP.$cljs$cst$12$status$$, $APP.$cljs$cst$14$pending$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$285$id$$, $cljs$cst$843$la_mar_26$$, $APP.$cljs$cst$287$title$$, "LA Production — Final Phase + Crating (Mar)", $cljs$cst$813$due$$, "2026-03-10", $cljs$cst$791$amount$$, 97325, $cljs$cst$814$priority$$, $cljs$cst$834$critical$$, $APP.$cljs$cst$12$status$$, $APP.$cljs$cst$14$pending$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, 
[$APP.$cljs$cst$285$id$$, $cljs$cst$844$admin_mar_26$$, $APP.$cljs$cst$287$title$$, "Admin — Core Team + Misc (Mar)", $cljs$cst$813$due$$, "2026-03-15", $cljs$cst$791$amount$$, 10500, $cljs$cst$814$priority$$, $cljs$cst$822$high$$, $APP.$cljs$cst$12$status$$, $APP.$cljs$cst$14$pending$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$285$id$$, $cljs$cst$845$contingency_mar_26$$, $APP.$cljs$cst$287$title$$, "Contingency (Mar)", $cljs$cst$813$due$$, "2026-03-20", $cljs$cst$791$amount$$, 
13476, $cljs$cst$814$priority$$, $cljs$cst$815$normal$$, $APP.$cljs$cst$12$status$$, $APP.$cljs$cst$14$pending$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$285$id$$, $cljs$cst$846$venice_apr_26$$, $APP.$cljs$cst$287$title$$, "Venice — Opening Month + Studio Launch + Operations", $cljs$cst$813$due$$, "2026-04-05", $cljs$cst$791$amount$$, 110267, $cljs$cst$814$priority$$, $cljs$cst$834$critical$$, $APP.$cljs$cst$12$status$$, $APP.$cljs$cst$14$pending$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 
6, [$APP.$cljs$cst$285$id$$, $cljs$cst$847$admin_apr_26$$, $APP.$cljs$cst$287$title$$, "Admin — Core Team + Travel + Lodging (Apr)", $cljs$cst$813$due$$, "2026-04-15", $cljs$cst$791$amount$$, 33E3, $cljs$cst$814$priority$$, $cljs$cst$822$high$$, $APP.$cljs$cst$12$status$$, $APP.$cljs$cst$14$pending$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$285$id$$, $cljs$cst$848$contingency_apr_26$$, $APP.$cljs$cst$287$title$$, "Contingency (Apr)", $cljs$cst$813$due$$, "2026-04-20", 
$cljs$cst$791$amount$$, 5513, $cljs$cst$814$priority$$, $cljs$cst$815$normal$$, $APP.$cljs$cst$12$status$$, $APP.$cljs$cst$14$pending$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$285$id$$, $cljs$cst$849$venice_may_26$$, $APP.$cljs$cst$287$title$$, "Venice — Studio + Operations (May)", $cljs$cst$813$due$$, "2026-05-05", $cljs$cst$791$amount$$, 53717, $cljs$cst$814$priority$$, $cljs$cst$815$normal$$, $APP.$cljs$cst$12$status$$, $APP.$cljs$cst$14$pending$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 
6, [$APP.$cljs$cst$285$id$$, $cljs$cst$850$admin_may_26$$, $APP.$cljs$cst$287$title$$, "Admin — Core Team + Misc (May)", $cljs$cst$813$due$$, "2026-05-15", $cljs$cst$791$amount$$, 10500, $cljs$cst$814$priority$$, $cljs$cst$815$normal$$, $APP.$cljs$cst$12$status$$, $APP.$cljs$cst$14$pending$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$285$id$$, $cljs$cst$851$contingency_may_26$$, $APP.$cljs$cst$287$title$$, "Contingency (May)", $cljs$cst$813$due$$, "2026-05-20", $cljs$cst$791$amount$$, 
2686, $cljs$cst$814$priority$$, $cljs$cst$815$normal$$, $APP.$cljs$cst$12$status$$, $APP.$cljs$cst$14$pending$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$285$id$$, $cljs$cst$852$venice_jun_26$$, $APP.$cljs$cst$287$title$$, "Venice — Studio + Operations + Catalogue (Jun)", $cljs$cst$813$due$$, "2026-06-05", $cljs$cst$791$amount$$, 94467, $cljs$cst$814$priority$$, $cljs$cst$822$high$$, $APP.$cljs$cst$12$status$$, $APP.$cljs$cst$14$pending$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 
6, [$APP.$cljs$cst$285$id$$, $cljs$cst$853$admin_jun_26$$, $APP.$cljs$cst$287$title$$, "Admin — Core Team + Travel + Misc (Jun)", $cljs$cst$813$due$$, "2026-06-15", $cljs$cst$791$amount$$, 12500, $cljs$cst$814$priority$$, $cljs$cst$815$normal$$, $APP.$cljs$cst$12$status$$, $APP.$cljs$cst$14$pending$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$285$id$$, $cljs$cst$854$contingency_jun_26$$, $APP.$cljs$cst$287$title$$, "Contingency (Jun)", $cljs$cst$813$due$$, "2026-06-20", 
$cljs$cst$791$amount$$, 4723, $cljs$cst$814$priority$$, $cljs$cst$815$normal$$, $APP.$cljs$cst$12$status$$, $APP.$cljs$cst$14$pending$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$285$id$$, $cljs$cst$855$venice_jul_26$$, $APP.$cljs$cst$287$title$$, "Venice — Studio + Operations (Jul)", $cljs$cst$813$due$$, "2026-07-05", $cljs$cst$791$amount$$, 53717, $cljs$cst$814$priority$$, $cljs$cst$815$normal$$, $APP.$cljs$cst$12$status$$, $APP.$cljs$cst$14$pending$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 
6, [$APP.$cljs$cst$285$id$$, $cljs$cst$856$admin_jul_26$$, $APP.$cljs$cst$287$title$$, "Admin — Core Team + Misc (Jul)", $cljs$cst$813$due$$, "2026-07-15", $cljs$cst$791$amount$$, 10500, $cljs$cst$814$priority$$, $cljs$cst$815$normal$$, $APP.$cljs$cst$12$status$$, $APP.$cljs$cst$14$pending$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$285$id$$, $cljs$cst$857$contingency_jul_26$$, $APP.$cljs$cst$287$title$$, "Contingency (Jul)", $cljs$cst$813$due$$, "2026-07-20", $cljs$cst$791$amount$$, 
2686, $cljs$cst$814$priority$$, $cljs$cst$815$normal$$, $APP.$cljs$cst$12$status$$, $APP.$cljs$cst$14$pending$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$285$id$$, $cljs$cst$858$venice_aug_26$$, $APP.$cljs$cst$287$title$$, "Venice — Studio + Operations (Aug)", $cljs$cst$813$due$$, "2026-08-05", $cljs$cst$791$amount$$, 53717, $cljs$cst$814$priority$$, $cljs$cst$815$normal$$, $APP.$cljs$cst$12$status$$, $APP.$cljs$cst$14$pending$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 
6, [$APP.$cljs$cst$285$id$$, $cljs$cst$859$admin_aug_26$$, $APP.$cljs$cst$287$title$$, "Admin — Core Team + Misc (Aug)", $cljs$cst$813$due$$, "2026-08-15", $cljs$cst$791$amount$$, 10500, $cljs$cst$814$priority$$, $cljs$cst$815$normal$$, $APP.$cljs$cst$12$status$$, $APP.$cljs$cst$14$pending$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$285$id$$, $cljs$cst$860$contingency_aug_26$$, $APP.$cljs$cst$287$title$$, "Contingency (Aug)", $cljs$cst$813$due$$, "2026-08-20", $cljs$cst$791$amount$$, 
2686, $cljs$cst$814$priority$$, $cljs$cst$815$normal$$, $APP.$cljs$cst$12$status$$, $APP.$cljs$cst$14$pending$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$285$id$$, $cljs$cst$861$venice_sep_26$$, $APP.$cljs$cst$287$title$$, "Venice — Studio + Operations (Sep)", $cljs$cst$813$due$$, "2026-09-05", $cljs$cst$791$amount$$, 53717, $cljs$cst$814$priority$$, $cljs$cst$815$normal$$, $APP.$cljs$cst$12$status$$, $APP.$cljs$cst$14$pending$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 
6, [$APP.$cljs$cst$285$id$$, $cljs$cst$862$admin_sep_26$$, $APP.$cljs$cst$287$title$$, "Admin — Core Team + Travel + Misc (Sep)", $cljs$cst$813$due$$, "2026-09-15", $cljs$cst$791$amount$$, 12500, $cljs$cst$814$priority$$, $cljs$cst$815$normal$$, $APP.$cljs$cst$12$status$$, $APP.$cljs$cst$14$pending$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$285$id$$, $cljs$cst$863$contingency_sep_26$$, $APP.$cljs$cst$287$title$$, "Contingency (Sep)", $cljs$cst$813$due$$, "2026-09-20", 
$cljs$cst$791$amount$$, 2686, $cljs$cst$814$priority$$, $cljs$cst$815$normal$$, $APP.$cljs$cst$12$status$$, $APP.$cljs$cst$14$pending$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$285$id$$, $cljs$cst$864$venice_oct_26$$, $APP.$cljs$cst$287$title$$, "Venice — Studio + Operations (Oct)", $cljs$cst$813$due$$, "2026-10-05", $cljs$cst$791$amount$$, 42217, $cljs$cst$814$priority$$, $cljs$cst$815$normal$$, $APP.$cljs$cst$12$status$$, $APP.$cljs$cst$14$pending$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 
6, [$APP.$cljs$cst$285$id$$, $cljs$cst$865$admin_oct_26$$, $APP.$cljs$cst$287$title$$, "Admin — Core Team + Misc (Oct)", $cljs$cst$813$due$$, "2026-10-15", $cljs$cst$791$amount$$, 10500, $cljs$cst$814$priority$$, $cljs$cst$815$normal$$, $APP.$cljs$cst$12$status$$, $APP.$cljs$cst$14$pending$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$285$id$$, $cljs$cst$866$contingency_oct_26$$, $APP.$cljs$cst$287$title$$, "Contingency (Oct)", $cljs$cst$813$due$$, "2026-10-20", $cljs$cst$791$amount$$, 
2111, $cljs$cst$814$priority$$, $cljs$cst$815$normal$$, $APP.$cljs$cst$12$status$$, $APP.$cljs$cst$14$pending$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$285$id$$, $cljs$cst$867$venice_nov_26$$, $APP.$cljs$cst$287$title$$, "Venice — Studio + Operations (Nov)", $cljs$cst$813$due$$, "2026-11-05", $cljs$cst$791$amount$$, 42217, $cljs$cst$814$priority$$, $cljs$cst$815$normal$$, $APP.$cljs$cst$12$status$$, $APP.$cljs$cst$14$pending$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 
6, [$APP.$cljs$cst$285$id$$, $cljs$cst$868$admin_nov_26$$, $APP.$cljs$cst$287$title$$, "Admin — Core Team + Misc (Nov)", $cljs$cst$813$due$$, "2026-11-15", $cljs$cst$791$amount$$, 10500, $cljs$cst$814$priority$$, $cljs$cst$815$normal$$, $APP.$cljs$cst$12$status$$, $APP.$cljs$cst$14$pending$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$285$id$$, $cljs$cst$869$contingency_nov_26$$, $APP.$cljs$cst$287$title$$, "Contingency (Nov)", $cljs$cst$813$due$$, "2026-11-20", $cljs$cst$791$amount$$, 
2111, $cljs$cst$814$priority$$, $cljs$cst$815$normal$$, $APP.$cljs$cst$12$status$$, $APP.$cljs$cst$14$pending$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$285$id$$, $cljs$cst$870$venice_dec_26$$, $APP.$cljs$cst$287$title$$, "Venice — Close-out + Logistics (Return)", $cljs$cst$813$due$$, "2026-12-05", $cljs$cst$791$amount$$, 134517, $cljs$cst$814$priority$$, $cljs$cst$822$high$$, $APP.$cljs$cst$12$status$$, $APP.$cljs$cst$14$pending$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 
6, [$APP.$cljs$cst$285$id$$, $cljs$cst$871$admin_dec_26$$, $APP.$cljs$cst$287$title$$, "Admin — Core Team + Travel + Misc (Dec)", $cljs$cst$813$due$$, "2026-12-15", $cljs$cst$791$amount$$, 20500, $cljs$cst$814$priority$$, $cljs$cst$822$high$$, $APP.$cljs$cst$12$status$$, $APP.$cljs$cst$14$pending$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$285$id$$, $cljs$cst$872$contingency_dec_26$$, $APP.$cljs$cst$287$title$$, "Contingency (Dec)", $cljs$cst$813$due$$, "2026-12-20", 
$cljs$cst$791$amount$$, 6726, $cljs$cst$814$priority$$, $cljs$cst$815$normal$$, $APP.$cljs$cst$12$status$$, $APP.$cljs$cst$14$pending$$], null)], !0)], null);
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
var $amp$pages$budget$sponsors$sponsors$$ = new $APP.$cljs$core$PersistentVector$$(null, 5, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$165$name$$, "Tony Shafrazi", $cljs$cst$888$tier$$, $cljs$cst$889$founding_patron$$, $cljs$cst$890$logo$$, "images/graphics/tony_shafrazi_logo_lighter.svg", $APP.$cljs$cst$25$type$$, $cljs$cst$891$institution$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$165$name$$, 
"Armenian Fund USA", $cljs$cst$888$tier$$, $cljs$cst$889$founding_patron$$, $cljs$cst$890$logo$$, "images/graphics/armenia_fund_logo.svg", $APP.$cljs$cst$25$type$$, $cljs$cst$891$institution$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$165$name$$, "Khudikyan Family", $cljs$cst$888$tier$$, $cljs$cst$892$patron$$, $APP.$cljs$cst$25$type$$, $cljs$cst$893$individual$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$165$name$$, "Ourfalian Family", 
$cljs$cst$888$tier$$, $cljs$cst$892$patron$$, $APP.$cljs$cst$25$type$$, $cljs$cst$893$individual$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$165$name$$, "Sarafyan Family", $cljs$cst$888$tier$$, $cljs$cst$892$patron$$, $APP.$cljs$cst$25$type$$, $cljs$cst$893$individual$$], null)], null), $amp$pages$budget$sponsors$tier_meta$$ = new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$cljs$cst$889$founding_patron$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$408$label$$, 
"Founding Patrons", $cljs$cst$894$accent$$, "text-pink-700 dark:text-pink-300", $APP.$cljs$cst$393$border$$, "border-pink-500/30", $cljs$cst$895$order$$, 0], null), $cljs$cst$892$patron$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$408$label$$, "Patrons", $cljs$cst$894$accent$$, "text-amber-700 dark:text-amber-300", $APP.$cljs$cst$393$border$$, "border-amber-500/30 dark:border-amber-300/30", $cljs$cst$895$order$$, 1], null), $cljs$cst$896$benefactor$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 
4, [$APP.$cljs$cst$408$label$$, "Benefactors", $cljs$cst$894$accent$$, "text-indigo-700 dark:text-indigo-300", $APP.$cljs$cst$393$border$$, "border-indigo-500/30 dark:border-indigo-300/30", $cljs$cst$895$order$$, 2], null), $cljs$cst$897$supporter$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$408$label$$, "Supporters", $cljs$cst$894$accent$$, "text-slate-700 dark:text-slate-300", $APP.$cljs$cst$393$border$$, "border-slate-400 dark:border-slate-600", $cljs$cst$895$order$$, 3], 
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
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$297$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$298$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$nav$back_up$back_up_nav$$, '(hooks/use-ref "container-ref")(hooks/use-ref "button-ref")(use-scroll-to-top {:duration 1})(use-scroll-trigger container-ref :start (fn [] (- (win-utils/height) (/ (win-utils/height) 8))) :end "1000000px" :markers? false :debug? false)(use-hover-animations button-ref :over {:opacity 1} :out {:opacity 0.7})(use-toggle-animations {:target container-ref, :on-to {:y 0, :opacity 1}, :off-to {:y -150, :opacity 0.25}, :is-on? is-active?})', 
null, null) : (void 0).call(null, $amp$nav$back_up$back_up_nav$$, '(hooks/use-ref "container-ref")(hooks/use-ref "button-ref")(use-scroll-to-top {:duration 1})(use-scroll-trigger container-ref :start (fn [] (- (win-utils/height) (/ (win-utils/height) 8))) :end "1000000px" :markers? false :debug? false)(use-hover-animations button-ref :over {:opacity 1} :out {:opacity 0.7})(use-toggle-animations {:target container-ref, :on-to {:y 0, :opacity 1}, :off-to {:y -150, :opacity 0.25}, :is-on? is-active?})', 
null, null)), $APP.$helix$core$register_BANG_$$($amp$nav$back_up$back_up_nav$$, "amp.nav.back-up/back-up-nav"));
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