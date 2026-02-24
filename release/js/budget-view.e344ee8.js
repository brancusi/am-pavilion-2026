(function(){
'use strict';
var $amp$ui$icons$InformationCircle$$, $amp$ui$icons$ArrowTurnRightUp$$, $cljs$core$take_while$cljs$0core$0IFn$0_invoke$0arity$02$$, $cljs$core$partition_by$cljs$0core$0IFn$0_invoke$0arity$02$$, $amp$hooks$use_scroll_to$use_scroll_to_ref$$, $amp$hooks$use_scroll_to$use_scroll_to_top$cljs$0core$0IFn$0_invoke$0arity$0variadic$$, $amp$pages$budget$committee$preview$$, $amp$pages$budget$committee$details$$, $amp$pages$budget$committee$committee_member_card$$, $amp$pages$budget$committee$committee_gallery$$, 
$amp$pages$budget$committee$committee$$, $amp$pages$budget$table$format_currency$$, $amp$pages$budget$table$sub_total_all_sections$$, $amp$pages$budget$table$total_section$$, $amp$pages$budget$table$pad_two_digits$$, $amp$pages$budget$table$detail_line_item$$, $amp$pages$budget$table$details__GT_render_items$$, $amp$pages$budget$table$section_line_item$$, $amp$pages$budget$table$budget_table$$, $amp$pages$budget$cost_breakdown$preview$$, $amp$pages$budget$cost_breakdown$details$$, $amp$pages$budget$cost_breakdown$footer$$, 
$amp$pages$budget$cost_breakdown$cost_breakdown$$, $amp$pages$budget$location$preview_text$$, $amp$pages$budget$location$preview$$, $amp$pages$budget$location$full_details$$, $amp$pages$budget$location$location_section$$, $amp$pages$budget$cash_flow$parse_date$$, $amp$pages$budget$cash_flow$date__GT_ms$$, $amp$pages$budget$cash_flow$format_currency$$, $amp$pages$budget$cash_flow$priority_tag_bg$$, $amp$pages$budget$cash_flow$priority_tag_text$$, $amp$pages$budget$cash_flow$priority_dot_classes$$, 
$amp$pages$budget$cash_flow$priority_amount_class$$, $amp$pages$budget$cash_flow$priority_label$$, $amp$pages$budget$cash_flow$group_by_month$$, $amp$pages$budget$cash_flow$month_rollups$$, $amp$pages$budget$cash_flow$status_classes$$, $amp$pages$budget$cash_flow$timeline_node$$, $amp$pages$budget$cash_flow$now_marker$$, $amp$pages$budget$cash_flow$month_header$$, $amp$pages$budget$cash_flow$month_summary_row$$, $amp$pages$budget$cash_flow$view_toggle$$, $amp$pages$budget$cash_flow$summary_header$$, 
$amp$pages$budget$cash_flow$cash_flow$$, $amp$pages$budget$non_profit$non_profit$$, $amp$pages$budget$sponsors$logo_card$$, $amp$pages$budget$sponsors$name_item$$, $amp$pages$budget$sponsors$tier_section$$, $amp$pages$budget$sponsors$sponsors_section$$, $amp$pages$budget$why_support$preview$$, $amp$pages$budget$why_support$details$$, $amp$pages$budget$why_support$why_support$$, $amp$nav$back_up$back_up_nav$$, $amp$pages$budget$footer$budget_footer$$, $amp$pages$budget$section$section_link$$, $amp$pages$budget$section$header$$, 
$amp$pages$budget$section$budget_section$$, $cljs$cst$832$admin_apr_26$$, $cljs$cst$846$venice_sep_26$$, $cljs$cst$805$venice_sep_25$$, $cljs$cst$824$la_feb_26$$, $cljs$cst$834$venice_may_26$$, $cljs$cst$887$outro_complete_callback$$, $cljs$cst$799$priority$$, $cljs$cst$879$accent$$, $cljs$cst$785$venue$$, $cljs$cst$828$la_mar_26$$, $cljs$cst$861$n_crit$$, $cljs$cst$850$admin_oct_26$$, $cljs$cst$882$supporter$$, $cljs$cst$810$admin_oct_25$$, $cljs$cst$837$venice_jun_26$$, $cljs$cst$864$has_now$$, 
$cljs$cst$788$the_studio$$, $cljs$cst$870$month$$, $cljs$cst$881$benefactor$$, $cljs$cst$812$la_nov_25$$, $cljs$cst$822$contingency_jan_26$$, $cljs$cst$840$venice_jul_26$$, $cljs$cst$860$entries$$, $cljs$cst$859$all_paid$$, $cljs$cst$800$normal$$, $cljs$cst$797$admin_jul_25$$, $cljs$cst$841$admin_jul_26$$, $cljs$cst$862$n_paid$$, $cljs$cst$793$documentation$$, $cljs$cst$804$contingency_aug_25$$, $cljs$cst$845$contingency_aug_26$$, $cljs$cst$794$debt_raised$$, $cljs$cst$838$admin_jun_26$$, $cljs$cst$781$expanded_items$$, 
$cljs$cst$873$tier$$, $cljs$cst$814$contingency_nov_25$$, $cljs$cst$854$contingency_nov_26$$, $cljs$cst$783$label$$, $cljs$cst$778$tax$$, $cljs$cst$886$intro_complete_callback$$, $cljs$cst$885$active$$, $cljs$cst$789$logistics$$, $cljs$cst$835$admin_may_26$$, $cljs$cst$821$admin_jan_26$$, $cljs$cst$823$venice_feb_26$$, $cljs$cst$818$venice_jan_26$$, $cljs$cst$863$n_items$$, $cljs$cst$851$contingency_oct_26$$, $cljs$cst$811$contingency_oct_25$$, $cljs$cst$829$admin_mar_26$$, $cljs$cst$801$paid$$, 
$cljs$cst$776$details$$, $cljs$cst$855$venice_dec_26$$, $cljs$cst$827$venice_mar_26$$, $cljs$cst$880$order$$, $cljs$cst$825$admin_feb_26$$, $cljs$cst$833$contingency_apr_26$$, $cljs$cst$866$entry$$, $cljs$cst$856$admin_dec_26$$, $cljs$cst$816$admin_dec_25$$, $cljs$cst$784$item$$, $cljs$cst$853$admin_nov_26$$, $cljs$cst$813$admin_nov_25$$, $cljs$cst$798$due$$, $cljs$cst$782$description$$, $cljs$cst$819$critical$$, $cljs$cst$842$contingency_jul_26$$, $cljs$cst$802$contingency_jul_25$$, $cljs$cst$857$contingency_dec_26$$, 
$cljs$cst$817$contingency_dec_25$$, $cljs$cst$836$contingency_may_26$$, $cljs$cst$839$contingency_jun_26$$, $cljs$cst$775$amount$$, $cljs$cst$872$past_QMARK_$$, $cljs$cst$796$cash_flow_model$$, $cljs$cst$865$dot$$, $cljs$cst$868$expanded_QMARK_$$, $cljs$cst$780$set_expanded_items$$, $cljs$cst$777$rate$$, $cljs$cst$826$contingency_feb_26$$, $cljs$cst$791$marketing$$, $cljs$cst$787$la_prod$$, $cljs$cst$877$patron$$, $cljs$cst$858$fill$$, $cljs$cst$795$funds_raised$$, $cljs$cst$848$contingency_sep_26$$, 
$cljs$cst$808$contingency_sep_25$$, $cljs$cst$883$members$$, $cljs$cst$779$cost_data$$, $cljs$cst$852$venice_nov_26$$, $cljs$cst$867$rollup$$, $cljs$cst$878$individual$$, $cljs$cst$847$admin_sep_26$$, $cljs$cst$806$admin_sep_25$$, $cljs$cst$831$venice_apr_26$$, $cljs$cst$876$institution$$, $cljs$cst$875$logo$$, $cljs$cst$807$high$$, $cljs$cst$790$opening$$, $cljs$cst$884$anchor$$, $cljs$cst$786$admin$$, $cljs$cst$830$contingency_mar_26$$, $cljs$cst$849$venice_oct_26$$, $cljs$cst$809$venice_oct_25$$, 
$cljs$cst$871$now$$, $cljs$cst$843$venice_aug_26$$, $cljs$cst$844$admin_aug_26$$, $cljs$cst$803$admin_aug_25$$, $cljs$cst$874$founding_patron$$, $cljs$cst$815$la_dec_25$$, $cljs$cst$820$la_jan_26$$, $cljs$cst$792$publication$$, $cljs$cst$869$target_total$$;
$amp$ui$icons$InformationCircle$$ = function($G__52161_JSCompiler_temp_const$jscomp$inline_3499_class$$jscomp$12_map__52159_map__52159__$1_props__41636__auto__$jscomp$17_vec__52156$$, $G__52165$jscomp$inline_3501_JSCompiler_inline_result$jscomp$inline_3500_maybe_ref__41637__auto__$jscomp$17$$) {
  $G__52161_JSCompiler_temp_const$jscomp$inline_3499_class$$jscomp$12_map__52159_map__52159__$1_props__41636__auto__$jscomp$17_vec__52156$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__52161_JSCompiler_temp_const$jscomp$inline_3499_class$$jscomp$12_map__52159_map__52159__$1_props__41636__auto__$jscomp$17_vec__52156$$), $G__52165$jscomp$inline_3501_JSCompiler_inline_result$jscomp$inline_3500_maybe_ref__41637__auto__$jscomp$17$$], 
  null);
  $G__52161_JSCompiler_temp_const$jscomp$inline_3499_class$$jscomp$12_map__52159_map__52159__$1_props__41636__auto__$jscomp$17_vec__52156$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__52161_JSCompiler_temp_const$jscomp$inline_3499_class$$jscomp$12_map__52159_map__52159__$1_props__41636__auto__$jscomp$17_vec__52156$$, 0, null);
  $G__52161_JSCompiler_temp_const$jscomp$inline_3499_class$$jscomp$12_map__52159_map__52159__$1_props__41636__auto__$jscomp$17_vec__52156$$ = $APP.$cljs$core$__destructure_map$$($G__52161_JSCompiler_temp_const$jscomp$inline_3499_class$$jscomp$12_map__52159_map__52159__$1_props__41636__auto__$jscomp$17_vec__52156$$);
  $G__52161_JSCompiler_temp_const$jscomp$inline_3499_class$$jscomp$12_map__52159_map__52159__$1_props__41636__auto__$jscomp$17_vec__52156$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__52161_JSCompiler_temp_const$jscomp$inline_3499_class$$jscomp$12_map__52159_map__52159__$1_props__41636__auto__$jscomp$17_vec__52156$$, $APP.$cljs$cst$67$class$$);
  $G__52161_JSCompiler_temp_const$jscomp$inline_3499_class$$jscomp$12_map__52159_map__52159__$1_props__41636__auto__$jscomp$17_vec__52156$$ = $APP.$helix$impl$props$normalize_class$$($G__52161_JSCompiler_temp_const$jscomp$inline_3499_class$$jscomp$12_map__52159_map__52159__$1_props__41636__auto__$jscomp$17_vec__52156$$);
  $G__52165$jscomp$inline_3501_JSCompiler_inline_result$jscomp$inline_3500_maybe_ref__41637__auto__$jscomp$17$$ = {strokeLinecap:"round", strokeLinejoin:"round", d:"m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"};
  $G__52165$jscomp$inline_3501_JSCompiler_inline_result$jscomp$inline_3500_maybe_ref__41637__auto__$jscomp$17$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("path", $G__52165$jscomp$inline_3501_JSCompiler_inline_result$jscomp$inline_3500_maybe_ref__41637__auto__$jscomp$17$$) : $APP.$helix$core$jsx$$.call(null, "path", $G__52165$jscomp$inline_3501_JSCompiler_inline_result$jscomp$inline_3500_maybe_ref__41637__auto__$jscomp$17$$);
  $G__52161_JSCompiler_temp_const$jscomp$inline_3499_class$$jscomp$12_map__52159_map__52159__$1_props__41636__auto__$jscomp$17_vec__52156$$ = {xmlns:"http://www.w3.org/2000/svg", fill:"none", viewBox:"0 0 24 24", strokeWidth:1.5, stroke:"currentColor", className:$G__52161_JSCompiler_temp_const$jscomp$inline_3499_class$$jscomp$12_map__52159_map__52159__$1_props__41636__auto__$jscomp$17_vec__52156$$, children:$G__52165$jscomp$inline_3501_JSCompiler_inline_result$jscomp$inline_3500_maybe_ref__41637__auto__$jscomp$17$$};
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("svg", $G__52161_JSCompiler_temp_const$jscomp$inline_3499_class$$jscomp$12_map__52159_map__52159__$1_props__41636__auto__$jscomp$17_vec__52156$$) : $APP.$helix$core$jsx$$.call(null, "svg", $G__52161_JSCompiler_temp_const$jscomp$inline_3499_class$$jscomp$12_map__52159_map__52159__$1_props__41636__auto__$jscomp$17_vec__52156$$);
};
$amp$ui$icons$ArrowTurnRightUp$$ = function($G__52256_props$jscomp$23_props__41636__auto__$jscomp$22_vec__52252$$, $G__52260$jscomp$inline_3510_JSCompiler_inline_result$jscomp$3406_maybe_ref__41637__auto__$jscomp$22$$) {
  $G__52256_props$jscomp$23_props__41636__auto__$jscomp$22_vec__52252$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__52256_props$jscomp$23_props__41636__auto__$jscomp$22_vec__52252$$), $G__52260$jscomp$inline_3510_JSCompiler_inline_result$jscomp$3406_maybe_ref__41637__auto__$jscomp$22$$], null);
  $G__52256_props$jscomp$23_props__41636__auto__$jscomp$22_vec__52252$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__52256_props$jscomp$23_props__41636__auto__$jscomp$22_vec__52252$$, 0, null);
  $G__52260$jscomp$inline_3510_JSCompiler_inline_result$jscomp$3406_maybe_ref__41637__auto__$jscomp$22$$ = {strokeLinecap:"round", strokeLinejoin:"round", d:"m11.99 7.5 3.75-3.75m0 0 3.75 3.75m-3.75-3.75v16.499H4.49"};
  $G__52260$jscomp$inline_3510_JSCompiler_inline_result$jscomp$3406_maybe_ref__41637__auto__$jscomp$22$$ = {xmlns:"http://www.w3.org/2000/svg", fill:"none", viewBox:"0 0 24 24", strokeWidth:1.5, stroke:"currentColor", className:"size-6", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("path", $G__52260$jscomp$inline_3510_JSCompiler_inline_result$jscomp$3406_maybe_ref__41637__auto__$jscomp$22$$) : $APP.$helix$core$jsx$$.call(null, 
  "path", $G__52260$jscomp$inline_3510_JSCompiler_inline_result$jscomp$3406_maybe_ref__41637__auto__$jscomp$22$$)};
  $G__52256_props$jscomp$23_props__41636__auto__$jscomp$22_vec__52252$$ = $APP.$helix$impl$props$merge_obj$$($G__52260$jscomp$inline_3510_JSCompiler_inline_result$jscomp$3406_maybe_ref__41637__auto__$jscomp$22$$, $APP.$helix$impl$props$_dom_props$cljs$0core$0IFn$0_invoke$0arity$01$$($G__52256_props$jscomp$23_props__41636__auto__$jscomp$22_vec__52252$$));
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("svg", $G__52256_props$jscomp$23_props__41636__auto__$jscomp$22_vec__52252$$) : $APP.$helix$core$jsx$$.call(null, "svg", $G__52256_props$jscomp$23_props__41636__auto__$jscomp$22_vec__52252$$);
};
$cljs$core$take_while$cljs$0core$0IFn$0_invoke$0arity$02$$ = function($pred$jscomp$14$$, $coll$jscomp$728$$) {
  return new $APP.$cljs$core$LazySeq$$(null, function() {
    var $JSCompiler_temp$jscomp$390_temp__5823__auto__$jscomp$22$$ = $APP.$cljs$core$seq$$($coll$jscomp$728$$);
    if ($JSCompiler_temp$jscomp$390_temp__5823__auto__$jscomp$22$$) {
      var $G__47638$jscomp$inline_2036_JSCompiler_inline_result$jscomp$391$$ = $APP.$cljs$core$first$$($JSCompiler_temp$jscomp$390_temp__5823__auto__$jscomp$22$$);
      $G__47638$jscomp$inline_2036_JSCompiler_inline_result$jscomp$391$$ = $pred$jscomp$14$$.$cljs$core$IFn$_invoke$arity$1$ ? $pred$jscomp$14$$.$cljs$core$IFn$_invoke$arity$1$($G__47638$jscomp$inline_2036_JSCompiler_inline_result$jscomp$391$$) : $pred$jscomp$14$$.call(null, $G__47638$jscomp$inline_2036_JSCompiler_inline_result$jscomp$391$$);
      $JSCompiler_temp$jscomp$390_temp__5823__auto__$jscomp$22$$ = $APP.$cljs$core$truth_$$($G__47638$jscomp$inline_2036_JSCompiler_inline_result$jscomp$391$$) ? $APP.$cljs$core$cons$$($APP.$cljs$core$first$$($JSCompiler_temp$jscomp$390_temp__5823__auto__$jscomp$22$$), $cljs$core$take_while$cljs$0core$0IFn$0_invoke$0arity$02$$($pred$jscomp$14$$, $APP.$cljs$core$rest$$($JSCompiler_temp$jscomp$390_temp__5823__auto__$jscomp$22$$))) : null;
    } else {
      $JSCompiler_temp$jscomp$390_temp__5823__auto__$jscomp$22$$ = null;
    }
    return $JSCompiler_temp$jscomp$390_temp__5823__auto__$jscomp$22$$;
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
    function $G__50974$$($ref$jscomp$13$$, $var_args$jscomp$479$$) {
      var $G__50975__i_p__50948$jscomp$1$$ = null;
      if (arguments.length > 1) {
        $G__50975__i_p__50948$jscomp$1$$ = 0;
        for (var $G__50975__a$$ = Array(arguments.length - 1); $G__50975__i_p__50948$jscomp$1$$ < $G__50975__a$$.length;) {
          $G__50975__a$$[$G__50975__i_p__50948$jscomp$1$$] = arguments[$G__50975__i_p__50948$jscomp$1$$ + 1], ++$G__50975__i_p__50948$jscomp$1$$;
        }
        $G__50975__i_p__50948$jscomp$1$$ = new $APP.$cljs$core$IndexedSeq$$($G__50975__a$$, 0, null);
      }
      return $G__50974__delegate$$.call(this, $ref$jscomp$13$$, $G__50975__i_p__50948$jscomp$1$$);
    }
    function $G__50974__delegate$$($ref$jscomp$12_temp__5823__auto__$jscomp$100$$, $duration$jscomp$3_p__50948$$) {
      $duration$jscomp$3_p__50948$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($duration$jscomp$3_p__50948$$, 0, null);
      $ref$jscomp$12_temp__5823__auto__$jscomp$100$$ = $ref$jscomp$12_temp__5823__auto__$jscomp$100$$.current;
      return $APP.$cljs$core$truth_$$($ref$jscomp$12_temp__5823__auto__$jscomp$100$$) ? $APP.$module$node_modules$gsap$dist$gsap$$.gsap.to(window, $APP.$cljs$core$clj__GT_js$$(new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$436$duration$$, $APP.$cljs$core$truth_$$($duration$jscomp$3_p__50948$$) ? $duration$jscomp$3_p__50948$$ : 0.35, $APP.$cljs$cst$744$scrollTo$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$745$y$$, $ref$jscomp$12_temp__5823__auto__$jscomp$100$$, 
      $APP.$cljs$cst$746$autoKill$$, !1], null), $APP.$cljs$cst$747$ease$$, "power2.inOut"], null))) : null;
    }
    $G__50974$$.$cljs$lang$maxFixedArity$ = 1;
    $G__50974$$.$cljs$lang$applyTo$ = function($arglist__50976_p__50948$jscomp$2$$) {
      var $ref$jscomp$14$$ = $APP.$cljs$core$first$$($arglist__50976_p__50948$jscomp$2$$);
      $arglist__50976_p__50948$jscomp$2$$ = $APP.$cljs$core$rest$$($arglist__50976_p__50948$jscomp$2$$);
      return $G__50974__delegate$$($ref$jscomp$14$$, $arglist__50976_p__50948$jscomp$2$$);
    };
    $G__50974$$.$cljs$core$IFn$_invoke$arity$variadic$ = $G__50974__delegate$$;
    return $G__50974$$;
  }(), $G__50947$$ = [];
  return $APP.$helix$hooks$raw_use_callback$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$hooks$raw_use_callback$$.$cljs$core$IFn$_invoke$arity$2$($G__50946$$, $G__50947$$) : $APP.$helix$hooks$raw_use_callback$$.call(null, $G__50946$$, $G__50947$$);
};
$amp$hooks$use_scroll_to$use_scroll_to_top$cljs$0core$0IFn$0_invoke$0arity$0variadic$$ = function() {
  var $G__50961_map__50960__$1$$ = $APP.$cljs$core$__destructure_map$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$436$duration$$, 1], null)])), $duration$jscomp$4$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$03$$($G__50961_map__50960__$1$$, $APP.$cljs$cst$436$duration$$, 0.35);
  $G__50961_map__50960__$1$$ = function() {
    function $G__50980$$($var_args$jscomp$481$$) {
      var $G__50982__i__$jscomp$434$$ = null;
      if (arguments.length > 0) {
        $G__50982__i__$jscomp$434$$ = 0;
        for (var $G__50982__a$$ = Array(arguments.length - 0); $G__50982__i__$jscomp$434$$ < $G__50982__a$$.length;) {
          $G__50982__a$$[$G__50982__i__$jscomp$434$$] = arguments[$G__50982__i__$jscomp$434$$ + 0], ++$G__50982__i__$jscomp$434$$;
        }
        $G__50982__i__$jscomp$434$$ = new $APP.$cljs$core$IndexedSeq$$($G__50982__a$$, 0, null);
      }
      return $G__50980__delegate$$.call(this, $G__50982__i__$jscomp$434$$);
    }
    function $G__50980__delegate$$() {
      $APP.$cljs$core$tap_GT_$$(new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$25$type$$, $APP.$cljs$cst$748$scroll_to_top$$, $APP.$cljs$cst$436$duration$$, $duration$jscomp$4$$], null));
      return $APP.$module$node_modules$gsap$dist$gsap$$.gsap.to(window, $APP.$cljs$core$clj__GT_js$$(new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$436$duration$$, $duration$jscomp$4$$, $APP.$cljs$cst$744$scrollTo$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$745$y$$, 0], null), $APP.$cljs$cst$747$ease$$, "power2.inOut"], null)));
    }
    $G__50980$$.$cljs$lang$maxFixedArity$ = 0;
    $G__50980$$.$cljs$lang$applyTo$ = function($_$jscomp$435_arglist__50983$$) {
      $_$jscomp$435_arglist__50983$$ = $APP.$cljs$core$seq$$($_$jscomp$435_arglist__50983$$);
      return $G__50980__delegate$$($_$jscomp$435_arglist__50983$$);
    };
    $G__50980$$.$cljs$core$IFn$_invoke$arity$variadic$ = $G__50980__delegate$$;
    return $G__50980$$;
  }();
  var $G__50962$$ = [];
  return $APP.$helix$hooks$raw_use_callback$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$hooks$raw_use_callback$$.$cljs$core$IFn$_invoke$arity$2$($G__50961_map__50960__$1$$, $G__50962$$) : $APP.$helix$hooks$raw_use_callback$$.call(null, $G__50961_map__50960__$1$$, $G__50962$$);
};
$amp$pages$budget$committee$preview$$ = function($G__70130_map__70127_props__41636__auto__$jscomp$61_vec__70124$$, $maybe_ref__41637__auto__$jscomp$61$$) {
  $G__70130_map__70127_props__41636__auto__$jscomp$61_vec__70124$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__70130_map__70127_props__41636__auto__$jscomp$61_vec__70124$$), $maybe_ref__41637__auto__$jscomp$61$$], null);
  $G__70130_map__70127_props__41636__auto__$jscomp$61_vec__70124$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__70130_map__70127_props__41636__auto__$jscomp$61_vec__70124$$, 0, null);
  $APP.$cljs$core$__destructure_map$$($G__70130_map__70127_props__41636__auto__$jscomp$61_vec__70124$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__70130_map__70127_props__41636__auto__$jscomp$61_vec__70124$$ = function() {
    return {className:"space-y-3 p-4", children:function() {
      var $G__70134$$ = function() {
        return {children:[function() {
          var $G__70138$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:"To realize an undertaking of this scale and international significance, an "};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__70138$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__70138$$);
        }(), function() {
          var $G__70143$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:"urgent fundraising program"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__70143$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__70143$$);
        }(), function() {
          var $G__70147$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:" is greatly needed."};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__70147$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__70147$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__70134$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__70134$$);
    }()};
  }();
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__70130_map__70127_props__41636__auto__$jscomp$61_vec__70124$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__70130_map__70127_props__41636__auto__$jscomp$61_vec__70124$$);
};
$amp$pages$budget$committee$details$$ = function($G__70169_map__70166_props__41636__auto__$jscomp$62_vec__70163$$, $maybe_ref__41637__auto__$jscomp$62$$) {
  $G__70169_map__70166_props__41636__auto__$jscomp$62_vec__70163$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__70169_map__70166_props__41636__auto__$jscomp$62_vec__70163$$), $maybe_ref__41637__auto__$jscomp$62$$], null);
  $G__70169_map__70166_props__41636__auto__$jscomp$62_vec__70163$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__70169_map__70166_props__41636__auto__$jscomp$62_vec__70163$$, 0, null);
  $APP.$cljs$core$__destructure_map$$($G__70169_map__70166_props__41636__auto__$jscomp$62_vec__70163$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__70169_map__70166_props__41636__auto__$jscomp$62_vec__70163$$ = function() {
    return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["p-4", $APP.$amp$styles$body_lg$$]))), children:[function() {
      var $G__70173$$ = function() {
        return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["italic text-lg text-red-300"]))), children:["*Note: As Armenia does not maintain a permanent national pavilion in Venice, the Pavilion must be realized through a rented venue—a standard and widely accepted model for many non-permanent participating nations. ", "The selected site operates at a base rental cost of approximately ", 
        function() {
          var $G__70177$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$value_currency$$), children:"$145,600"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__70177$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__70177$$);
        }(), function() {
          var $G__70181$$ = {className:"text-red-300", children:[", covering the entire six-month duration of the Exhibition, and represents a strategic and fiscally responsible choice given its immediate proximity to the Arsenale proper. ", "Comparable venues just minutes away within the Arsenale or Giardini typically begin at "]};
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__70181$$) : $APP.$helix$core$jsxs$$.call(null, "span", $G__70181$$);
        }(), function() {
          var $G__70189$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$value_currency$$), children:"$450,000 or more"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__70189$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__70189$$);
        }(), function() {
          var $G__70212$$ = {className:"text-red-300", children:[" in base rent alone—often closer to €450,000+—excluding construction, staffing, technical services, and operational expenses. ", "In this context, the Pavilion’s location offers extraordinary visibility and access at a fraction of the cost, positioning Armenia at the heart of the Biennale circuit while maintaining responsible stewardship of resources."]};
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__70212$$) : $APP.$helix$core$jsxs$$.call(null, "span", $G__70212$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__70173$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__70173$$);
    }(), function() {
      var $G__70222$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["mt-6 text-red-500 text-2xl"]))), children:"To realize an undertaking of this scale and international significance, an urgent fundraising program is greatly needed."};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__70222$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__70222$$);
    }(), function() {
      var $G__70228$$ = function() {
        return {className:"mt-6", children:[function() {
          var $G__70236$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-medium", "text-slate-900  dark:text-slate-100"]))), children:["At present we are starting with a small committee including members ", "Archbishop Hovnan Derderian, Tony Shafrazi, Tina Chakarian, Rafi Ourfalian, Khachik Khudikyan, ", "Andranik Torosyan, Aram Alajajian, and Vik Hovsepian, "]};
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__70236$$) : $APP.$helix$core$jsxs$$.call(null, "span", $G__70236$$);
        }(), function() {
          var $G__70244$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-bold", "text-rose-600   dark:text-rose-400"]))), children:"hopefully encouraging others more able to realize our goal."};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__70244$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__70244$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__70228$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__70228$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__70169_map__70166_props__41636__auto__$jscomp$62_vec__70163$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__70169_map__70166_props__41636__auto__$jscomp$62_vec__70163$$);
};
$amp$pages$budget$committee$committee_member_card$$ = function($G__70296_map__70293_map__70293__$1_props__41636__auto__$jscomp$63_vec__70290$$, $maybe_ref__41637__auto__$jscomp$63$$) {
  $G__70296_map__70293_map__70293__$1_props__41636__auto__$jscomp$63_vec__70290$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__70296_map__70293_map__70293__$1_props__41636__auto__$jscomp$63_vec__70290$$), $maybe_ref__41637__auto__$jscomp$63$$], null);
  $G__70296_map__70293_map__70293__$1_props__41636__auto__$jscomp$63_vec__70290$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__70296_map__70293_map__70293__$1_props__41636__auto__$jscomp$63_vec__70290$$, 0, null);
  $G__70296_map__70293_map__70293__$1_props__41636__auto__$jscomp$63_vec__70290$$ = $APP.$cljs$core$__destructure_map$$($G__70296_map__70293_map__70293__$1_props__41636__auto__$jscomp$63_vec__70290$$);
  var $name$jscomp$200$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__70296_map__70293_map__70293__$1_props__41636__auto__$jscomp$63_vec__70290$$, $APP.$cljs$cst$192$name$$), $role$jscomp$1$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__70296_map__70293_map__70293__$1_props__41636__auto__$jscomp$63_vec__70290$$, $APP.$cljs$cst$752$role$$), $img_src$jscomp$5$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__70296_map__70293_map__70293__$1_props__41636__auto__$jscomp$63_vec__70290$$, 
  $APP.$cljs$cst$435$img_src$$);
  $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__70296_map__70293_map__70293__$1_props__41636__auto__$jscomp$63_vec__70290$$, $APP.$cljs$cst$439$credit$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $overlay_styles$$ = $APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-mono", "bg-white/70 px-1 text-slate-500"]));
  $G__70296_map__70293_map__70293__$1_props__41636__auto__$jscomp$63_vec__70290$$ = function() {
    return {className:"w-[150px] aspect-[0.7] relative ml-2", children:function() {
      var $G__70301$$ = function() {
        return {"img-src":$img_src$jscomp$5$$, fit:"crop", "aspect-ratio":0.7, "active?":!0, children:function() {
          var $G__70309$$ = function() {
            return {className:"", children:[function() {
              var $G__70317_G__70322$jscomp$inline_3669_JSCompiler_inline_result$jscomp$inline_3668$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["italic", "text-xs"]))), children:$name$jscomp$200$$};
              $G__70317_G__70322$jscomp$inline_3669_JSCompiler_inline_result$jscomp$inline_3668$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__70317_G__70322$jscomp$inline_3669_JSCompiler_inline_result$jscomp$inline_3668$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__70317_G__70322$jscomp$inline_3669_JSCompiler_inline_result$jscomp$inline_3668$$);
              $G__70317_G__70322$jscomp$inline_3669_JSCompiler_inline_result$jscomp$inline_3668$$ = {position:$APP.$cljs$cst$701$tl$$, rotation:90, "parent-styles":$overlay_styles$$, children:$G__70317_G__70322$jscomp$inline_3669_JSCompiler_inline_result$jscomp$inline_3668$$};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$ui$overlays$caption_overlay$$, $G__70317_G__70322$jscomp$inline_3669_JSCompiler_inline_result$jscomp$inline_3668$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$ui$overlays$caption_overlay$$, $G__70317_G__70322$jscomp$inline_3669_JSCompiler_inline_result$jscomp$inline_3668$$);
            }(), function() {
              var $G__70334_G__70338$jscomp$inline_3672_JSCompiler_inline_result$jscomp$inline_3671$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["italic", "text-xs"]))), children:$role$jscomp$1$$};
              $G__70334_G__70338$jscomp$inline_3672_JSCompiler_inline_result$jscomp$inline_3671$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__70334_G__70338$jscomp$inline_3672_JSCompiler_inline_result$jscomp$inline_3671$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__70334_G__70338$jscomp$inline_3672_JSCompiler_inline_result$jscomp$inline_3671$$);
              $G__70334_G__70338$jscomp$inline_3672_JSCompiler_inline_result$jscomp$inline_3671$$ = {position:$APP.$cljs$cst$706$bl$$, "parent-styles":$overlay_styles$$, children:$G__70334_G__70338$jscomp$inline_3672_JSCompiler_inline_result$jscomp$inline_3671$$};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$ui$overlays$caption_overlay$$, $G__70334_G__70338$jscomp$inline_3672_JSCompiler_inline_result$jscomp$inline_3671$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$ui$overlays$caption_overlay$$, $G__70334_G__70338$jscomp$inline_3672_JSCompiler_inline_result$jscomp$inline_3671$$);
            }()]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__70309$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__70309$$);
        }()};
      }();
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$ui$image_overlay$lazy_image_with_overlay$$, $G__70301$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$ui$image_overlay$lazy_image_with_overlay$$, $G__70301$$);
    }()};
  }();
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__70296_map__70293_map__70293__$1_props__41636__auto__$jscomp$63_vec__70290$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__70296_map__70293_map__70293__$1_props__41636__auto__$jscomp$63_vec__70290$$);
};
$amp$pages$budget$committee$committee_gallery$$ = function($G__70427_map__70425_props__41636__auto__$jscomp$64_vec__70421$$, $maybe_ref__41637__auto__$jscomp$64$$) {
  $G__70427_map__70425_props__41636__auto__$jscomp$64_vec__70421$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__70427_map__70425_props__41636__auto__$jscomp$64_vec__70421$$), $maybe_ref__41637__auto__$jscomp$64$$], null);
  $G__70427_map__70425_props__41636__auto__$jscomp$64_vec__70421$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__70427_map__70425_props__41636__auto__$jscomp$64_vec__70421$$, 0, null);
  $APP.$cljs$core$__destructure_map$$($G__70427_map__70425_props__41636__auto__$jscomp$64_vec__70421$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__70427_map__70425_props__41636__auto__$jscomp$64_vec__70421$$ = function() {
    return {className:"p-4 w-full", children:function() {
      var $G__70431$$ = function() {
        return {children:[function() {
          var $G__70435_G__70439$jscomp$inline_3675$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$label_muted$$), children:"Committee Members"};
          $G__70435_G__70439$jscomp$inline_3675$$ = {className:"pl-4", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("h3", $G__70435_G__70439$jscomp$inline_3675$$) : $APP.$helix$core$jsx$$.call(null, "h3", $G__70435_G__70439$jscomp$inline_3675$$)};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__70435_G__70439$jscomp$inline_3675$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__70435_G__70439$jscomp$inline_3675$$);
        }(), function() {
          var $G__70444$$ = function() {
            return {className:"mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4", children:$APP.$cljs$core$map$$.$cljs$core$IFn$_invoke$arity$2$(function($name$jscomp$201_p__70448$$) {
              var $credit$jscomp$4_map__70449__$1$$ = $APP.$cljs$core$__destructure_map$$($name$jscomp$201_p__70448$$);
              $name$jscomp$201_p__70448$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($credit$jscomp$4_map__70449__$1$$, $APP.$cljs$cst$192$name$$);
              var $G__70451_G__70457$jscomp$inline_3678_JSCompiler_temp$jscomp$inline_3677_role$jscomp$2$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($credit$jscomp$4_map__70449__$1$$, $APP.$cljs$cst$752$role$$), $img_src$jscomp$6$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($credit$jscomp$4_map__70449__$1$$, $APP.$cljs$cst$435$img_src$$);
              $credit$jscomp$4_map__70449__$1$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($credit$jscomp$4_map__70449__$1$$, $APP.$cljs$cst$439$credit$$);
              $APP.$cljs$core$truth_$$($img_src$jscomp$6$$) ? ($G__70451_G__70457$jscomp$inline_3678_JSCompiler_temp$jscomp$inline_3677_role$jscomp$2$$ = {name:$name$jscomp$201_p__70448$$, role:$G__70451_G__70457$jscomp$inline_3678_JSCompiler_temp$jscomp$inline_3677_role$jscomp$2$$, "img-src":$img_src$jscomp$6$$, credit:$credit$jscomp$4_map__70449__$1$$}, $G__70451_G__70457$jscomp$inline_3678_JSCompiler_temp$jscomp$inline_3677_role$jscomp$2$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? 
              $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$pages$budget$committee$committee_member_card$$, $G__70451_G__70457$jscomp$inline_3678_JSCompiler_temp$jscomp$inline_3677_role$jscomp$2$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$budget$committee$committee_member_card$$, $G__70451_G__70457$jscomp$inline_3678_JSCompiler_temp$jscomp$inline_3677_role$jscomp$2$$)) : $G__70451_G__70457$jscomp$inline_3678_JSCompiler_temp$jscomp$inline_3677_role$jscomp$2$$ = null;
              $G__70451_G__70457$jscomp$inline_3678_JSCompiler_temp$jscomp$inline_3677_role$jscomp$2$$ = {children:$G__70451_G__70457$jscomp$inline_3678_JSCompiler_temp$jscomp$inline_3677_role$jscomp$2$$};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$("div", $G__70451_G__70457$jscomp$inline_3678_JSCompiler_temp$jscomp$inline_3677_role$jscomp$2$$, $name$jscomp$201_p__70448$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__70451_G__70457$jscomp$inline_3678_JSCompiler_temp$jscomp$inline_3677_role$jscomp$2$$, $name$jscomp$201_p__70448$$);
            }, $amp$pages$budget$committee$committee_members$$)};
          }();
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__70444$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__70444$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__70431$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__70431$$);
    }()};
  }();
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__70427_map__70425_props__41636__auto__$jscomp$64_vec__70421$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__70427_map__70425_props__41636__auto__$jscomp$64_vec__70421$$);
};
$amp$pages$budget$committee$committee$$ = function($G__70469_map__70466_map__70466__$1_props__41636__auto__$jscomp$65_vec__70463$$, $maybe_ref__41637__auto__$jscomp$65$$) {
  $G__70469_map__70466_map__70466__$1_props__41636__auto__$jscomp$65_vec__70463$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__70469_map__70466_map__70466__$1_props__41636__auto__$jscomp$65_vec__70463$$), $maybe_ref__41637__auto__$jscomp$65$$], null);
  $G__70469_map__70466_map__70466__$1_props__41636__auto__$jscomp$65_vec__70463$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__70469_map__70466_map__70466__$1_props__41636__auto__$jscomp$65_vec__70463$$, 0, null);
  $G__70469_map__70466_map__70466__$1_props__41636__auto__$jscomp$65_vec__70463$$ = $APP.$cljs$core$__destructure_map$$($G__70469_map__70466_map__70466__$1_props__41636__auto__$jscomp$65_vec__70463$$);
  var $id$jscomp$84$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__70469_map__70466_map__70466__$1_props__41636__auto__$jscomp$65_vec__70463$$, $APP.$cljs$cst$200$id$$), $subtitle$jscomp$3$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__70469_map__70466_map__70466__$1_props__41636__auto__$jscomp$65_vec__70463$$, $APP.$cljs$cst$724$subtitle$$), $title$jscomp$22$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__70469_map__70466_map__70466__$1_props__41636__auto__$jscomp$65_vec__70463$$, 
  $APP.$cljs$cst$378$title$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__70469_map__70466_map__70466__$1_props__41636__auto__$jscomp$65_vec__70463$$ = function() {
    return {id:$id$jscomp$84$$, className:"space-y-4", children:[function() {
      var $G__70473$$ = {idx:5, "section-hint":$subtitle$jscomp$3$$, title:$title$jscomp$22$$, "expand-button-label":"Read more", "preview-text":$amp$pages$budget$committee$preview$$, "full-text":$amp$pages$budget$committee$details$$};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$ui$expandable_text$expandable_text_area_2$$, $G__70473$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$ui$expandable_text$expandable_text_area_2$$, $G__70473$$);
    }(), function() {
      var $G__70477$$ = {children:$amp$pages$budget$committee$committee_members$$};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$pages$budget$committee$committee_gallery$$, $G__70477$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$budget$committee$committee_gallery$$, $G__70477$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("section", $G__70469_map__70466_map__70466__$1_props__41636__auto__$jscomp$65_vec__70463$$) : $APP.$helix$core$jsxs$$.call(null, "section", $G__70469_map__70466_map__70466__$1_props__41636__auto__$jscomp$65_vec__70463$$);
};
$amp$pages$budget$table$format_currency$$ = function($amount$$) {
  return "$" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$(Math.round($amount$$).toLocaleString("en-US"));
};
$amp$pages$budget$table$sub_total_all_sections$$ = function($cost_data$$) {
  return $APP.$cljs$core$reduce$cljs$0core$0IFn$0_invoke$0arity$02$$($APP.$cljs$core$_PLUS_$$, $APP.$cljs$core$map$$.$cljs$core$IFn$_invoke$arity$2$(function($p1__70167_SHARP__tax_rate$jscomp$inline_2043$$) {
    var $item_details$jscomp$inline_2041_sub_total$jscomp$inline_2042$$ = $cljs$cst$776$details$$.$cljs$core$IFn$_invoke$arity$1$($p1__70167_SHARP__tax_rate$jscomp$inline_2043$$);
    $item_details$jscomp$inline_2041_sub_total$jscomp$inline_2042$$ = $APP.$cljs$core$reduce$cljs$0core$0IFn$0_invoke$0arity$02$$($APP.$cljs$core$_PLUS_$$, $APP.$cljs$core$map$$.$cljs$core$IFn$_invoke$arity$2$($cljs$cst$775$amount$$, $item_details$jscomp$inline_2041_sub_total$jscomp$inline_2042$$));
    $p1__70167_SHARP__tax_rate$jscomp$inline_2043$$ = $cljs$cst$777$rate$$.$cljs$core$IFn$_invoke$arity$1$($cljs$cst$778$tax$$.$cljs$core$IFn$_invoke$arity$1$($p1__70167_SHARP__tax_rate$jscomp$inline_2043$$));
    return ($p1__70167_SHARP__tax_rate$jscomp$inline_2043$$ > 0 ? $p1__70167_SHARP__tax_rate$jscomp$inline_2043$$ * $item_details$jscomp$inline_2041_sub_total$jscomp$inline_2042$$ : 0) + $item_details$jscomp$inline_2041_sub_total$jscomp$inline_2042$$;
  }, $cost_data$$));
};
$amp$pages$budget$table$total_section$$ = function($G__70200_cost_data$jscomp$1_map__70198_map__70198__$1_props__41636__auto__$jscomp$66_vec__70195$$, $maybe_ref__41637__auto__$jscomp$66$$) {
  $G__70200_cost_data$jscomp$1_map__70198_map__70198__$1_props__41636__auto__$jscomp$66_vec__70195$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__70200_cost_data$jscomp$1_map__70198_map__70198__$1_props__41636__auto__$jscomp$66_vec__70195$$), $maybe_ref__41637__auto__$jscomp$66$$], null);
  $G__70200_cost_data$jscomp$1_map__70198_map__70198__$1_props__41636__auto__$jscomp$66_vec__70195$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__70200_cost_data$jscomp$1_map__70198_map__70198__$1_props__41636__auto__$jscomp$66_vec__70195$$, 0, null);
  $G__70200_cost_data$jscomp$1_map__70198_map__70198__$1_props__41636__auto__$jscomp$66_vec__70195$$ = $APP.$cljs$core$__destructure_map$$($G__70200_cost_data$jscomp$1_map__70198_map__70198__$1_props__41636__auto__$jscomp$66_vec__70195$$);
  $G__70200_cost_data$jscomp$1_map__70198_map__70198__$1_props__41636__auto__$jscomp$66_vec__70195$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__70200_cost_data$jscomp$1_map__70198_map__70198__$1_props__41636__auto__$jscomp$66_vec__70195$$, $cljs$cst$779$cost_data$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $sub_total$jscomp$1$$ = $amp$pages$budget$table$sub_total_all_sections$$($G__70200_cost_data$jscomp$1_map__70198_map__70198__$1_props__41636__auto__$jscomp$66_vec__70195$$), $grand_total$$ = $sub_total$jscomp$1$$ + 66821;
  $G__70200_cost_data$jscomp$1_map__70198_map__70198__$1_props__41636__auto__$jscomp$66_vec__70195$$ = function() {
    return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["flex flex-col", "font-mono"]))), children:[function() {
      var $G__70204$$ = function() {
        return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["bg-white        dark:bg-slate-900", "text-slate-900  dark:text-slate-100", "flex items-baseline px-4 py-2 border-t-2", "border-pink-500/70 dark:border-pink-500/70"]))), children:[function() {
          var $G__70208$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["text-sm", "uppercase", "tracking-wider", "text-slate-600  dark:text-slate-400", "flex-1 min-w-0"]))), children:"Sub total"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("h3", $G__70208$$) : $APP.$helix$core$jsx$$.call(null, "h3", $G__70208$$);
        }(), function() {
          var $G__70216_G__70220$jscomp$inline_3681$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-semibold", "text-slate-700  dark:text-slate-300"]))), children:$amp$pages$budget$table$format_currency$$($sub_total$jscomp$1$$)};
          $G__70216_G__70220$jscomp$inline_3681$$ = {className:"flex items-baseline justify-end shrink-0 ml-2", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__70216_G__70220$jscomp$inline_3681$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__70216_G__70220$jscomp$inline_3681$$)};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__70216_G__70220$jscomp$inline_3681$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__70216_G__70220$jscomp$inline_3681$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("li", $G__70204$$) : $APP.$helix$core$jsxs$$.call(null, "li", $G__70204$$);
    }(), function() {
      var $G__70230$$ = function() {
        return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["bg-slate-100/60 dark:bg-slate-800/60", "text-slate-900  dark:text-slate-100", "flex items-baseline px-4 py-2"]))), children:[function() {
          var $G__70240$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["text-sm", "uppercase", "tracking-wider", "text-slate-600  dark:text-slate-400", "flex-1 min-w-0"]))), children:"Contingency 5%"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("h3", $G__70240$$) : $APP.$helix$core$jsx$$.call(null, "h3", $G__70240$$);
        }(), function() {
          var $G__70246_G__70252$jscomp$inline_3684$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-semibold", "text-slate-700  dark:text-slate-300"]))), children:$amp$pages$budget$table$format_currency$$(66821)};
          $G__70246_G__70252$jscomp$inline_3684$$ = {className:"flex items-baseline justify-end shrink-0 ml-2", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__70246_G__70252$jscomp$inline_3684$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__70246_G__70252$jscomp$inline_3684$$)};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__70246_G__70252$jscomp$inline_3684$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__70246_G__70252$jscomp$inline_3684$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("li", $G__70230$$) : $APP.$helix$core$jsxs$$.call(null, "li", $G__70230$$);
    }(), function() {
      var $G__70260$$ = function() {
        return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["bg-white        dark:bg-slate-900", "text-slate-900  dark:text-slate-100", "flex items-baseline px-4 py-4 border-t border-pink-500/40"]))), children:[function() {
          var $G__70265$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-bold", "text-lg", "uppercase", "tracking-wider", "flex-1 min-w-0"]))), children:"TOTAL"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("h3", $G__70265$$) : $APP.$helix$core$jsx$$.call(null, "h3", $G__70265$$);
        }(), function() {
          var $G__70270_G__70275$jscomp$inline_3687$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$value_lg$$), children:$amp$pages$budget$table$format_currency$$($grand_total$$)};
          $G__70270_G__70275$jscomp$inline_3687$$ = {className:"flex items-baseline justify-end shrink-0 ml-2", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__70270_G__70275$jscomp$inline_3687$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__70270_G__70275$jscomp$inline_3687$$)};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__70270_G__70275$jscomp$inline_3687$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__70270_G__70275$jscomp$inline_3687$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("li", $G__70260$$) : $APP.$helix$core$jsxs$$.call(null, "li", $G__70260$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__70200_cost_data$jscomp$1_map__70198_map__70198__$1_props__41636__auto__$jscomp$66_vec__70195$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__70200_cost_data$jscomp$1_map__70198_map__70198__$1_props__41636__auto__$jscomp$66_vec__70195$$);
};
$amp$pages$budget$table$pad_two_digits$$ = function($n$jscomp$225$$) {
  return $n$jscomp$225$$ < 10 ? "0" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($n$jscomp$225$$) : "" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($n$jscomp$225$$);
};
$amp$pages$budget$table$detail_line_item$$ = function($G__70313_G__70386_map__70307_map__70307__$1_props__41636__auto__$jscomp$67_vec__70304$$, $maybe_ref__41637__auto__$jscomp$67$$) {
  $G__70313_G__70386_map__70307_map__70307__$1_props__41636__auto__$jscomp$67_vec__70304$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__70313_G__70386_map__70307_map__70307__$1_props__41636__auto__$jscomp$67_vec__70304$$), $maybe_ref__41637__auto__$jscomp$67$$], null);
  $G__70313_G__70386_map__70307_map__70307__$1_props__41636__auto__$jscomp$67_vec__70304$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__70313_G__70386_map__70307_map__70307__$1_props__41636__auto__$jscomp$67_vec__70304$$, 0, null);
  $G__70313_G__70386_map__70307_map__70307__$1_props__41636__auto__$jscomp$67_vec__70304$$ = $APP.$cljs$core$__destructure_map$$($G__70313_G__70386_map__70307_map__70307__$1_props__41636__auto__$jscomp$67_vec__70304$$);
  var $idx$jscomp$66$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__70313_G__70386_map__70307_map__70307__$1_props__41636__auto__$jscomp$67_vec__70304$$, $APP.$cljs$cst$440$idx$$), $detail$jscomp$7$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__70313_G__70386_map__70307_map__70307__$1_props__41636__auto__$jscomp$67_vec__70304$$, $APP.$cljs$cst$627$detail$$), $set_expanded_items$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__70313_G__70386_map__70307_map__70307__$1_props__41636__auto__$jscomp$67_vec__70304$$, 
  $cljs$cst$780$set_expanded_items$$), $expanded_items$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__70313_G__70386_map__70307_map__70307__$1_props__41636__auto__$jscomp$67_vec__70304$$, $cljs$cst$781$expanded_items$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $item_id$$ = "detail-item-" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($idx$jscomp$66$$), $description$jscomp$4$$ = $cljs$cst$782$description$$.$cljs$core$IFn$_invoke$arity$1$($detail$jscomp$7$$), $is_odd_detail_QMARK_$$ = !$APP.$cljs$core$even_QMARK_$$($idx$jscomp$66$$);
  if ($APP.$cljs$core$truth_$$($description$jscomp$4$$)) {
    return $G__70313_G__70386_map__70307_map__70307__$1_props__41636__auto__$jscomp$67_vec__70304$$ = function() {
      return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["cursor-pointer overflow-hidden", "font-mono", $is_odd_detail_QMARK_$$ ? "bg-slate-100/60 dark:bg-slate-800/60" : null]))), onClick:function() {
        function $G__70318$$($prev$jscomp$8$$) {
          return $APP.$cljs$core$truth_$$($prev$jscomp$8$$.$cljs$core$IFn$_invoke$arity$1$ ? $prev$jscomp$8$$.$cljs$core$IFn$_invoke$arity$1$($item_id$$) : $prev$jscomp$8$$.call(null, $item_id$$)) ? $APP.$cljs$core$disj$$.$cljs$core$IFn$_invoke$arity$2$($prev$jscomp$8$$, $item_id$$) : $APP.$cljs$core$conj$$.$cljs$core$IFn$_invoke$arity$2$($prev$jscomp$8$$, $item_id$$);
        }
        return $set_expanded_items$$.$cljs$core$IFn$_invoke$arity$1$ ? $set_expanded_items$$.$cljs$core$IFn$_invoke$arity$1$($G__70318$$) : $set_expanded_items$$.call(null, $G__70318$$);
      }, children:[function() {
        var $G__70324$$ = function() {
          return {className:"px-8 py-2 flex justify-between items-center", children:[function() {
            var $G__70330$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["text-[11px]", "text-slate-400  dark:text-slate-600", "mr-4"]))), children:"" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($amp$pages$budget$table$pad_two_digits$$($idx$jscomp$66$$ + 1)) + "."};
            return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__70330$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__70330$$);
          }(), function() {
            var $G__70340_JSCompiler_temp_const$jscomp$inline_3854$$ = $APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["justify-start flex-1 flex items-center", "text-sm", "text-slate-700  dark:text-slate-300"])));
            var $JSCompiler_temp_const$jscomp$inline_3855$$ = $APP.$cljs$cst$378$title$$.$cljs$core$IFn$_invoke$arity$1$($detail$jscomp$7$$);
            var $G__70346$jscomp$inline_3857_JSCompiler_inline_result$jscomp$inline_3856_JSCompiler_temp_const$jscomp$inline_3858$$ = $APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["w-4 h-4 ml-2", "text-slate-400  dark:text-slate-600"])));
            var $G__70350$jscomp$inline_3860_JSCompiler_inline_result$jscomp$inline_3859$$ = {};
            $G__70350$jscomp$inline_3860_JSCompiler_inline_result$jscomp$inline_3859$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$ui$icons$InformationCircle$$, $G__70350$jscomp$inline_3860_JSCompiler_inline_result$jscomp$inline_3859$$) : $APP.$helix$core$jsx$$.call(null, $amp$ui$icons$InformationCircle$$, $G__70350$jscomp$inline_3860_JSCompiler_inline_result$jscomp$inline_3859$$);
            $G__70346$jscomp$inline_3857_JSCompiler_inline_result$jscomp$inline_3856_JSCompiler_temp_const$jscomp$inline_3858$$ = {className:$G__70346$jscomp$inline_3857_JSCompiler_inline_result$jscomp$inline_3856_JSCompiler_temp_const$jscomp$inline_3858$$, children:$G__70350$jscomp$inline_3860_JSCompiler_inline_result$jscomp$inline_3859$$};
            $G__70346$jscomp$inline_3857_JSCompiler_inline_result$jscomp$inline_3856_JSCompiler_temp_const$jscomp$inline_3858$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__70346$jscomp$inline_3857_JSCompiler_inline_result$jscomp$inline_3856_JSCompiler_temp_const$jscomp$inline_3858$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__70346$jscomp$inline_3857_JSCompiler_inline_result$jscomp$inline_3856_JSCompiler_temp_const$jscomp$inline_3858$$);
            $G__70340_JSCompiler_temp_const$jscomp$inline_3854$$ = {className:$G__70340_JSCompiler_temp_const$jscomp$inline_3854$$, children:[$JSCompiler_temp_const$jscomp$inline_3855$$, $G__70346$jscomp$inline_3857_JSCompiler_inline_result$jscomp$inline_3856_JSCompiler_temp_const$jscomp$inline_3858$$]};
            return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__70340_JSCompiler_temp_const$jscomp$inline_3854$$) : $APP.$helix$core$jsxs$$.call(null, "span", $G__70340_JSCompiler_temp_const$jscomp$inline_3854$$);
          }(), function() {
            var $G__70353$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$value_sm$$), children:$amp$pages$budget$table$format_currency$$($cljs$cst$775$amount$$.$cljs$core$IFn$_invoke$arity$1$($detail$jscomp$7$$))};
            return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__70353$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__70353$$);
          }()]};
        }();
        return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__70324$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__70324$$);
      }(), $APP.$cljs$core$truth_$$($expanded_items$$.$cljs$core$IFn$_invoke$arity$1$ ? $expanded_items$$.$cljs$core$IFn$_invoke$arity$1$($item_id$$) : $expanded_items$$.call(null, $item_id$$)) ? function() {
        var $G__70358_G__70363$jscomp$inline_3943_G__70367$jscomp$inline_3944_JSCompiler_temp_const$jscomp$inline_3945$$ = $APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_sm$$, "bg-slate-100/60 dark:bg-slate-800/60"])));
        var $G__70371$jscomp$inline_3947_JSCompiler_inline_result$jscomp$inline_3946$$ = {className:"px-6 py-4", children:$description$jscomp$4$$};
        $G__70371$jscomp$inline_3947_JSCompiler_inline_result$jscomp$inline_3946$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__70371$jscomp$inline_3947_JSCompiler_inline_result$jscomp$inline_3946$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__70371$jscomp$inline_3947_JSCompiler_inline_result$jscomp$inline_3946$$);
        $G__70358_G__70363$jscomp$inline_3943_G__70367$jscomp$inline_3944_JSCompiler_temp_const$jscomp$inline_3945$$ = {className:$G__70358_G__70363$jscomp$inline_3943_G__70367$jscomp$inline_3944_JSCompiler_temp_const$jscomp$inline_3945$$, children:$G__70371$jscomp$inline_3947_JSCompiler_inline_result$jscomp$inline_3946$$};
        $G__70358_G__70363$jscomp$inline_3943_G__70367$jscomp$inline_3944_JSCompiler_temp_const$jscomp$inline_3945$$ = {className:"", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__70358_G__70363$jscomp$inline_3943_G__70367$jscomp$inline_3944_JSCompiler_temp_const$jscomp$inline_3945$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__70358_G__70363$jscomp$inline_3943_G__70367$jscomp$inline_3944_JSCompiler_temp_const$jscomp$inline_3945$$)};
        $G__70358_G__70363$jscomp$inline_3943_G__70367$jscomp$inline_3944_JSCompiler_temp_const$jscomp$inline_3945$$ = {className:"border-l-2 border-pink-500/30", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__70358_G__70363$jscomp$inline_3943_G__70367$jscomp$inline_3944_JSCompiler_temp_const$jscomp$inline_3945$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__70358_G__70363$jscomp$inline_3943_G__70367$jscomp$inline_3944_JSCompiler_temp_const$jscomp$inline_3945$$)};
        return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__70358_G__70363$jscomp$inline_3943_G__70367$jscomp$inline_3944_JSCompiler_temp_const$jscomp$inline_3945$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__70358_G__70363$jscomp$inline_3943_G__70367$jscomp$inline_3944_JSCompiler_temp_const$jscomp$inline_3945$$);
      }() : null]};
    }(), $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("li", $G__70313_G__70386_map__70307_map__70307__$1_props__41636__auto__$jscomp$67_vec__70304$$) : $APP.$helix$core$jsxs$$.call(null, "li", $G__70313_G__70386_map__70307_map__70307__$1_props__41636__auto__$jscomp$67_vec__70304$$);
  }
  $G__70313_G__70386_map__70307_map__70307__$1_props__41636__auto__$jscomp$67_vec__70304$$ = function() {
    return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-mono", $is_odd_detail_QMARK_$$ ? "bg-slate-100/60 dark:bg-slate-800/60" : null]))), children:function() {
      var $G__70391$$ = function() {
        return {className:"px-8 py-2 flex justify-between items-center", children:[function() {
          var $G__70397$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["text-[11px]", "text-slate-400  dark:text-slate-600", "mr-4"]))), children:"" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($amp$pages$budget$table$pad_two_digits$$($idx$jscomp$66$$ + 1)) + "."};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__70397$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__70397$$);
        }(), function() {
          var $G__70404$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["justify-start flex-1", "text-sm", "text-slate-700  dark:text-slate-300"]))), children:$APP.$cljs$cst$378$title$$.$cljs$core$IFn$_invoke$arity$1$($detail$jscomp$7$$)};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__70404$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__70404$$);
        }(), function() {
          var $G__70416$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$value_sm$$), children:$amp$pages$budget$table$format_currency$$($cljs$cst$775$amount$$.$cljs$core$IFn$_invoke$arity$1$($detail$jscomp$7$$))};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__70416$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__70416$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__70391$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__70391$$);
    }()};
  }();
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("li", $G__70313_G__70386_map__70307_map__70307__$1_props__41636__auto__$jscomp$67_vec__70304$$) : $APP.$helix$core$jsx$$.call(null, "li", $G__70313_G__70386_map__70307_map__70307__$1_props__41636__auto__$jscomp$67_vec__70304$$);
};
$amp$pages$budget$table$details__GT_render_items$$ = function($G__70755_details$jscomp$4$$) {
  for (var $G__70754_items$jscomp$8$$ = $G__70755_details$jscomp$4$$, $idx$jscomp$67$$ = 0, $prev_group$$ = null, $result$jscomp$135$$ = $APP.$cljs$core$PersistentVector$EMPTY$$;;) {
    if ($APP.$cljs$core$empty_QMARK_$$($G__70754_items$jscomp$8$$)) {
      return $result$jscomp$135$$;
    }
    var $detail$jscomp$8$$ = $APP.$cljs$core$first$$($G__70754_items$jscomp$8$$), $curr_group$$ = $APP.$cljs$cst$581$group$$.$cljs$core$IFn$_invoke$arity$1$($detail$jscomp$8$$), $show_header_QMARK_$$ = function() {
      var $and__5140__auto__$jscomp$87$$ = $curr_group$$;
      return $APP.$cljs$core$truth_$$($and__5140__auto__$jscomp$87$$) ? $APP.$cljs$core$not_EQ_$cljs$0core$0IFn$0_invoke$0arity$02$$($curr_group$$, $prev_group$$) : $and__5140__auto__$jscomp$87$$;
    }();
    $G__70754_items$jscomp$8$$ = $APP.$cljs$core$rest$$($G__70754_items$jscomp$8$$);
    $G__70755_details$jscomp$4$$ = $idx$jscomp$67$$ + 1;
    var $G__70756$$ = $curr_group$$, $G__70757$$ = function() {
      var $G__70456_G__70456__$1$$ = $result$jscomp$135$$;
      $G__70456_G__70456__$1$$ = $APP.$cljs$core$truth_$$($show_header_QMARK_$$) ? $APP.$cljs$core$conj$$.$cljs$core$IFn$_invoke$arity$2$($G__70456_G__70456__$1$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$25$type$$, $APP.$cljs$cst$330$header$$, $cljs$cst$783$label$$, $curr_group$$, $APP.$cljs$cst$99$key$$, "gh-" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($idx$jscomp$67$$)], null)) : $G__70456_G__70456__$1$$;
      return $APP.$cljs$core$conj$$.$cljs$core$IFn$_invoke$arity$2$($G__70456_G__70456__$1$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$25$type$$, $APP.$cljs$cst$627$detail$$, $APP.$cljs$cst$627$detail$$, $detail$jscomp$8$$, $APP.$cljs$cst$440$idx$$, $idx$jscomp$67$$, $APP.$cljs$cst$99$key$$, "d-" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($idx$jscomp$67$$)], null));
    }();
    $idx$jscomp$67$$ = $G__70755_details$jscomp$4$$;
    $prev_group$$ = $G__70756$$;
    $result$jscomp$135$$ = $G__70757$$;
  }
};
$amp$pages$budget$table$section_line_item$$ = function($G__70485_details$jscomp$5_map__70483_map__70483__$1_props__41636__auto__$jscomp$68_vec__70480$$, $maybe_ref__41637__auto__$jscomp$68_tax_rate$jscomp$1$$) {
  $G__70485_details$jscomp$5_map__70483_map__70483__$1_props__41636__auto__$jscomp$68_vec__70480$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__70485_details$jscomp$5_map__70483_map__70483__$1_props__41636__auto__$jscomp$68_vec__70480$$), $maybe_ref__41637__auto__$jscomp$68_tax_rate$jscomp$1$$], null);
  $G__70485_details$jscomp$5_map__70483_map__70483__$1_props__41636__auto__$jscomp$68_vec__70480$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__70485_details$jscomp$5_map__70483_map__70483__$1_props__41636__auto__$jscomp$68_vec__70480$$, 0, null);
  $G__70485_details$jscomp$5_map__70483_map__70483__$1_props__41636__auto__$jscomp$68_vec__70480$$ = $APP.$cljs$core$__destructure_map$$($G__70485_details$jscomp$5_map__70483_map__70483__$1_props__41636__auto__$jscomp$68_vec__70480$$);
  var $idx$jscomp$68$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__70485_details$jscomp$5_map__70483_map__70483__$1_props__41636__auto__$jscomp$68_vec__70480$$, $APP.$cljs$cst$440$idx$$), $item$jscomp$34$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__70485_details$jscomp$5_map__70483_map__70483__$1_props__41636__auto__$jscomp$68_vec__70480$$, $cljs$cst$784$item$$), $set_expanded_items$jscomp$1$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__70485_details$jscomp$5_map__70483_map__70483__$1_props__41636__auto__$jscomp$68_vec__70480$$, 
  $cljs$cst$780$set_expanded_items$$), $expanded_items$jscomp$1$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__70485_details$jscomp$5_map__70483_map__70483__$1_props__41636__auto__$jscomp$68_vec__70480$$, $cljs$cst$781$expanded_items$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $section_ref$$ = $APP.$helix$hooks$use_ref$$("section-" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($idx$jscomp$68$$)), $scroll_to_ref$$ = $amp$hooks$use_scroll_to$use_scroll_to_ref$$(), $item_id$jscomp$1$$ = "item-" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($idx$jscomp$68$$);
  $G__70485_details$jscomp$5_map__70483_map__70483__$1_props__41636__auto__$jscomp$68_vec__70480$$ = $cljs$cst$776$details$$.$cljs$core$IFn$_invoke$arity$1$($item$jscomp$34$$);
  var $sub_total$jscomp$2$$ = $APP.$cljs$core$reduce$cljs$0core$0IFn$0_invoke$0arity$02$$($APP.$cljs$core$_PLUS_$$, $APP.$cljs$core$map$$.$cljs$core$IFn$_invoke$arity$2$($cljs$cst$775$amount$$, $G__70485_details$jscomp$5_map__70483_map__70483__$1_props__41636__auto__$jscomp$68_vec__70480$$));
  $maybe_ref__41637__auto__$jscomp$68_tax_rate$jscomp$1$$ = $cljs$cst$777$rate$$.$cljs$core$IFn$_invoke$arity$1$($cljs$cst$778$tax$$.$cljs$core$IFn$_invoke$arity$1$($item$jscomp$34$$));
  var $tax_label$$ = $cljs$cst$783$label$$.$cljs$core$IFn$_invoke$arity$1$($cljs$cst$778$tax$$.$cljs$core$IFn$_invoke$arity$1$($item$jscomp$34$$)), $tax_total$jscomp$1$$ = $sub_total$jscomp$2$$ * $maybe_ref__41637__auto__$jscomp$68_tax_rate$jscomp$1$$, $has_tax_QMARK_$jscomp$1$$ = $maybe_ref__41637__auto__$jscomp$68_tax_rate$jscomp$1$$ > 0, $total$jscomp$4$$ = $sub_total$jscomp$2$$ + $tax_total$jscomp$1$$, $is_odd$$ = !$APP.$cljs$core$even_QMARK_$$($idx$jscomp$68$$), $render_items$$ = $amp$pages$budget$table$details__GT_render_items$$($G__70485_details$jscomp$5_map__70483_map__70483__$1_props__41636__auto__$jscomp$68_vec__70480$$);
  $G__70485_details$jscomp$5_map__70483_map__70483__$1_props__41636__auto__$jscomp$68_vec__70480$$ = function() {
    return {ref:$section_ref$$, className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["overflow-hidden", "font-mono", $is_odd$$ ? "bg-white        dark:bg-slate-900" : "bg-slate-100/60 dark:bg-slate-800/60"]))), children:[function() {
      var $G__70489$$ = function() {
        return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["flex flex-wrap items-baseline px-4 py-3 gap-y-1 cursor-pointer transition-colors", "hover:bg-slate-800/50 dark:hover:bg-slate-800/50"]))), onClick:function() {
          function $G__70492$$($prev$jscomp$9$$) {
            return $APP.$cljs$core$truth_$$($prev$jscomp$9$$.$cljs$core$IFn$_invoke$arity$1$ ? $prev$jscomp$9$$.$cljs$core$IFn$_invoke$arity$1$($item_id$jscomp$1$$) : $prev$jscomp$9$$.call(null, $item_id$jscomp$1$$)) ? $APP.$cljs$core$disj$$.$cljs$core$IFn$_invoke$arity$2$($prev$jscomp$9$$, $item_id$jscomp$1$$) : $APP.$cljs$core$conj$$.$cljs$core$IFn$_invoke$arity$2$($prev$jscomp$9$$, $item_id$jscomp$1$$);
          }
          return $set_expanded_items$jscomp$1$$.$cljs$core$IFn$_invoke$arity$1$ ? $set_expanded_items$jscomp$1$$.$cljs$core$IFn$_invoke$arity$1$($G__70492$$) : $set_expanded_items$jscomp$1$$.call(null, $G__70492$$);
        }, children:[function() {
          var $G__70494$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$("font-display;font-semibold;uppercase;tracking-wide;text-slate-700  dark:text-slate-300;text-base sm:text-lg flex-1 min-w-0".split(";")))), children:"" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($idx$jscomp$68$$ + 1) + ". " + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($APP.$cljs$cst$378$title$$.$cljs$core$IFn$_invoke$arity$1$($item$jscomp$34$$))};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("h3", $G__70494$$) : $APP.$helix$core$jsx$$.call(null, "h3", $G__70494$$);
        }(), function() {
          var $G__70498$$ = function() {
            return {className:"flex items-baseline justify-end shrink-0 ml-2", children:[function() {
              var $G__70502$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-semibold", "text-indigo-600 dark:text-indigo-300", "text-sm", "sm:text-base"]))), children:$amp$pages$budget$table$format_currency$$($total$jscomp$4$$)};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__70502$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__70502$$);
            }(), function() {
              var $G__70506_JSCompiler_temp_const$jscomp$inline_3310$$ = $APP.$helix$impl$props$normalize_class$$("w-4 h-4 ml-3 transition-transform " + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$("text-slate-500  dark:text-slate-500") + " " + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($APP.$cljs$core$truth_$$($expanded_items$jscomp$1$$.$cljs$core$IFn$_invoke$arity$1$ ? $expanded_items$jscomp$1$$.$cljs$core$IFn$_invoke$arity$1$($item_id$jscomp$1$$) : $expanded_items$jscomp$1$$.call(null, 
              $item_id$jscomp$1$$)) ? "rotate-90" : null));
              var $G__70510$jscomp$inline_3312_JSCompiler_inline_result$jscomp$inline_3311$$ = {};
              $G__70510$jscomp$inline_3312_JSCompiler_inline_result$jscomp$inline_3311$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$ui$icons$ChevronRightIcon$$, $G__70510$jscomp$inline_3312_JSCompiler_inline_result$jscomp$inline_3311$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$ui$icons$ChevronRightIcon$$, $G__70510$jscomp$inline_3312_JSCompiler_inline_result$jscomp$inline_3311$$);
              $G__70506_JSCompiler_temp_const$jscomp$inline_3310$$ = {className:$G__70506_JSCompiler_temp_const$jscomp$inline_3310$$, children:$G__70510$jscomp$inline_3312_JSCompiler_inline_result$jscomp$inline_3311$$};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__70506_JSCompiler_temp_const$jscomp$inline_3310$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__70506_JSCompiler_temp_const$jscomp$inline_3310$$);
            }()]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__70498$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__70498$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__70489$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__70489$$);
    }(), $APP.$cljs$core$truth_$$($expanded_items$jscomp$1$$.$cljs$core$IFn$_invoke$arity$1$ ? $expanded_items$jscomp$1$$.$cljs$core$IFn$_invoke$arity$1$($item_id$jscomp$1$$) : $expanded_items$jscomp$1$$.call(null, $item_id$jscomp$1$$)) ? function() {
      var $G__70512$$ = function() {
        return {className:"border-l-2 border-pink-500/30", children:[function() {
          var $G__70516_JSCompiler_temp_const$jscomp$inline_3698$$ = $APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_sm$$, "bg-slate-100/60 dark:bg-slate-800/60"])));
          var $G__70520$jscomp$inline_3700_JSCompiler_inline_result$jscomp$inline_3699$$ = {className:"px-8 py-4", children:$cljs$cst$782$description$$.$cljs$core$IFn$_invoke$arity$1$($item$jscomp$34$$)};
          $G__70520$jscomp$inline_3700_JSCompiler_inline_result$jscomp$inline_3699$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__70520$jscomp$inline_3700_JSCompiler_inline_result$jscomp$inline_3699$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__70520$jscomp$inline_3700_JSCompiler_inline_result$jscomp$inline_3699$$);
          $G__70516_JSCompiler_temp_const$jscomp$inline_3698$$ = {className:$G__70516_JSCompiler_temp_const$jscomp$inline_3698$$, children:$G__70520$jscomp$inline_3700_JSCompiler_inline_result$jscomp$inline_3699$$};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__70516_JSCompiler_temp_const$jscomp$inline_3698$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__70516_JSCompiler_temp_const$jscomp$inline_3698$$);
        }(), function() {
          var $G__70524$$ = function() {
            return {children:$APP.$cljs$core$map$$.$cljs$core$IFn$_invoke$arity$2$(function($G__70530_G__70540_ri$$) {
              var $G__70527_G__70527__$1_G__70529_G__70539_JSCompiler_temp_const$jscomp$inline_3702$$ = $APP.$cljs$cst$25$type$$.$cljs$core$IFn$_invoke$arity$1$($G__70530_G__70540_ri$$);
              $G__70527_G__70527__$1_G__70529_G__70539_JSCompiler_temp_const$jscomp$inline_3702$$ = $G__70527_G__70527__$1_G__70529_G__70539_JSCompiler_temp_const$jscomp$inline_3702$$ instanceof $APP.$cljs$core$Keyword$$ ? $G__70527_G__70527__$1_G__70529_G__70539_JSCompiler_temp_const$jscomp$inline_3702$$.$fqn$ : null;
              switch($G__70527_G__70527__$1_G__70529_G__70539_JSCompiler_temp_const$jscomp$inline_3702$$) {
                case "header":
                  $G__70527_G__70527__$1_G__70529_G__70539_JSCompiler_temp_const$jscomp$inline_3702$$ = $APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$("px-8 py-2 border-b border-slate-700/40;bg-white        dark:bg-slate-900;text-pink-700/50 dark:text-pink-300/50;text-sm sm:text-base;font-semibold;uppercase;tracking-[0.15em]".split(";"))));
                  var $G__70535$jscomp$inline_3704_JSCompiler_inline_result$jscomp$inline_3703$$ = {children:$cljs$cst$783$label$$.$cljs$core$IFn$_invoke$arity$1$($G__70530_G__70540_ri$$)};
                  $G__70535$jscomp$inline_3704_JSCompiler_inline_result$jscomp$inline_3703$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__70535$jscomp$inline_3704_JSCompiler_inline_result$jscomp$inline_3703$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__70535$jscomp$inline_3704_JSCompiler_inline_result$jscomp$inline_3703$$);
                  $G__70527_G__70527__$1_G__70529_G__70539_JSCompiler_temp_const$jscomp$inline_3702$$ = {className:$G__70527_G__70527__$1_G__70529_G__70539_JSCompiler_temp_const$jscomp$inline_3702$$, children:$G__70535$jscomp$inline_3704_JSCompiler_inline_result$jscomp$inline_3703$$};
                  $G__70530_G__70540_ri$$ = $APP.$cljs$cst$99$key$$.$cljs$core$IFn$_invoke$arity$1$($G__70530_G__70540_ri$$);
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$("div", $G__70527_G__70527__$1_G__70529_G__70539_JSCompiler_temp_const$jscomp$inline_3702$$, $G__70530_G__70540_ri$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__70527_G__70527__$1_G__70529_G__70539_JSCompiler_temp_const$jscomp$inline_3702$$, $G__70530_G__70540_ri$$);
                case "detail":
                  return $G__70527_G__70527__$1_G__70529_G__70539_JSCompiler_temp_const$jscomp$inline_3702$$ = {idx:$APP.$cljs$cst$440$idx$$.$cljs$core$IFn$_invoke$arity$1$($G__70530_G__70540_ri$$), detail:$APP.$cljs$cst$627$detail$$.$cljs$core$IFn$_invoke$arity$1$($G__70530_G__70540_ri$$), "set-expanded-items":$set_expanded_items$jscomp$1$$, "expanded-items":$expanded_items$jscomp$1$$}, $G__70530_G__70540_ri$$ = $APP.$cljs$cst$99$key$$.$cljs$core$IFn$_invoke$arity$1$($G__70530_G__70540_ri$$), $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$ ? 
                  $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$($amp$pages$budget$table$detail_line_item$$, $G__70527_G__70527__$1_G__70529_G__70539_JSCompiler_temp_const$jscomp$inline_3702$$, $G__70530_G__70540_ri$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$budget$table$detail_line_item$$, $G__70527_G__70527__$1_G__70529_G__70539_JSCompiler_temp_const$jscomp$inline_3702$$, $G__70530_G__70540_ri$$);
                default:
                  throw Error("No matching clause: " + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($G__70527_G__70527__$1_G__70529_G__70539_JSCompiler_temp_const$jscomp$inline_3702$$));
              }
            }, $render_items$$)};
          }();
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("ol", $G__70524$$) : $APP.$helix$core$jsx$$.call(null, "ol", $G__70524$$);
        }(), function() {
          var $G__70544$$ = function() {
            return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["bg-white        dark:bg-slate-900", "flex flex-col border-t border-slate-200 dark:border-slate-800"]))), children:[$has_tax_QMARK_$jscomp$1$$ ? function() {
              var $G__70548$$ = function() {
                return {children:[function() {
                  var $G__70552$$ = function() {
                    return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-semibold", "text-sm", "px-8 py-2 flex"]))), children:[function() {
                      var $G__70556$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["text-[10px]", "text-slate-400  dark:text-slate-600"]))), children:"-"};
                      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__70556$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__70556$$);
                    }(), function() {
                      var $G__70560$$ = function() {
                        return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["flex justify-between ml-8 w-full", "text-slate-700  dark:text-slate-300"]))), children:[function() {
                          var $G__70564$$ = {children:"Sub total: "};
                          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__70564$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__70564$$);
                        }(), function() {
                          var $G__70568$$ = {children:$amp$pages$budget$table$format_currency$$($sub_total$jscomp$2$$)};
                          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__70568$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__70568$$);
                        }()]};
                      }();
                      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__70560$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__70560$$);
                    }()]};
                  }();
                  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__70552$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__70552$$);
                }(), function() {
                  var $G__70572$$ = function() {
                    return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-semibold", "text-sm", "px-8 py-2 flex"]))), children:[function() {
                      var $G__70576$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["text-[10px]", "text-slate-400  dark:text-slate-600"]))), children:"-"};
                      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__70576$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__70576$$);
                    }(), function() {
                      var $G__70580$$ = function() {
                        return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["flex justify-between ml-8 w-full", "text-amber-600/80 dark:text-amber-300/80"]))), children:[function() {
                          var $G__70584$$ = {children:$tax_label$$};
                          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__70584$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__70584$$);
                        }(), function() {
                          var $G__70588$$ = {children:$amp$pages$budget$table$format_currency$$($tax_total$jscomp$1$$)};
                          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__70588$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__70588$$);
                        }()]};
                      }();
                      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__70580$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__70580$$);
                    }()]};
                  }();
                  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__70572$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__70572$$);
                }()]};
              }();
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__70548$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__70548$$);
            }() : null, function() {
              var $G__70592$$ = function() {
                return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-bold", "text-base", "bg-slate-50 dark:bg-slate-950 px-8 py-4 flex border-t border-pink-500/20"]))), children:[function() {
                  var $G__70596$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["text-[10px]", "text-slate-400  dark:text-slate-600"]))), children:"-"};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__70596$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__70596$$);
                }(), function() {
                  var $G__70600$$ = function() {
                    return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["flex justify-between ml-8 w-full", "text-pink-700   dark:text-pink-300"]))), children:[function() {
                      var $G__70605$$ = {children:"Total: "};
                      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__70605$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__70605$$);
                    }(), function() {
                      var $G__70609$$ = {children:$amp$pages$budget$table$format_currency$$($total$jscomp$4$$)};
                      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__70609$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__70609$$);
                    }()]};
                  }();
                  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__70600$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__70600$$);
                }()]};
              }();
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__70592$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__70592$$);
            }(), function() {
              var $G__70613$$ = function() {
                return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$btn_text$$, "bg-slate-100/60 dark:bg-slate-800/60", "flex p-3 justify-center items-center cursor-pointer"]))), onClick:function() {
                  function $G__70616_70765$$($prev$jscomp$10$$) {
                    return $APP.$cljs$core$truth_$$($prev$jscomp$10$$.$cljs$core$IFn$_invoke$arity$1$ ? $prev$jscomp$10$$.$cljs$core$IFn$_invoke$arity$1$($item_id$jscomp$1$$) : $prev$jscomp$10$$.call(null, $item_id$jscomp$1$$)) ? $APP.$cljs$core$disj$$.$cljs$core$IFn$_invoke$arity$2$($prev$jscomp$10$$, $item_id$jscomp$1$$) : $APP.$cljs$core$conj$$.$cljs$core$IFn$_invoke$arity$2$($prev$jscomp$10$$, $item_id$jscomp$1$$);
                  }
                  $set_expanded_items$jscomp$1$$.$cljs$core$IFn$_invoke$arity$1$ ? $set_expanded_items$jscomp$1$$.$cljs$core$IFn$_invoke$arity$1$($G__70616_70765$$) : $set_expanded_items$jscomp$1$$.call(null, $G__70616_70765$$);
                  return $scroll_to_ref$$.$cljs$core$IFn$_invoke$arity$1$ ? $scroll_to_ref$$.$cljs$core$IFn$_invoke$arity$1$($section_ref$$) : $scroll_to_ref$$.call(null, $section_ref$$);
                }, children:["CLOSE SECTION", function() {
                  var $G__70618_JSCompiler_temp_const$jscomp$inline_3318$$ = $APP.$helix$impl$props$normalize_class$$("w-4 h-4 transition-transform ml-2 " + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($APP.$cljs$core$truth_$$($expanded_items$jscomp$1$$.$cljs$core$IFn$_invoke$arity$1$ ? $expanded_items$jscomp$1$$.$cljs$core$IFn$_invoke$arity$1$($item_id$jscomp$1$$) : $expanded_items$jscomp$1$$.call(null, $item_id$jscomp$1$$)) ? "-rotate-90" : null));
                  var $G__70622$jscomp$inline_3320_JSCompiler_inline_result$jscomp$inline_3319$$ = {};
                  $G__70622$jscomp$inline_3320_JSCompiler_inline_result$jscomp$inline_3319$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$ui$icons$ChevronRightIcon$$, $G__70622$jscomp$inline_3320_JSCompiler_inline_result$jscomp$inline_3319$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$ui$icons$ChevronRightIcon$$, $G__70622$jscomp$inline_3320_JSCompiler_inline_result$jscomp$inline_3319$$);
                  $G__70618_JSCompiler_temp_const$jscomp$inline_3318$$ = {className:$G__70618_JSCompiler_temp_const$jscomp$inline_3318$$, children:$G__70622$jscomp$inline_3320_JSCompiler_inline_result$jscomp$inline_3319$$};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__70618_JSCompiler_temp_const$jscomp$inline_3318$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__70618_JSCompiler_temp_const$jscomp$inline_3318$$);
                }()]};
              }();
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__70613$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__70613$$);
            }()]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__70544$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__70544$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__70512$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__70512$$);
    }() : null]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("li", $G__70485_details$jscomp$5_map__70483_map__70483__$1_props__41636__auto__$jscomp$68_vec__70480$$) : $APP.$helix$core$jsxs$$.call(null, "li", $G__70485_details$jscomp$5_map__70483_map__70483__$1_props__41636__auto__$jscomp$68_vec__70480$$);
};
$amp$pages$budget$table$budget_table$$ = function($G__70644_map__70639_map__70639__$1_props__41636__auto__$jscomp$69_vec__70636_vec__70640$$, $maybe_ref__41637__auto__$jscomp$69$$) {
  $G__70644_map__70639_map__70639__$1_props__41636__auto__$jscomp$69_vec__70636_vec__70640$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__70644_map__70639_map__70639__$1_props__41636__auto__$jscomp$69_vec__70636_vec__70640$$), $maybe_ref__41637__auto__$jscomp$69$$], null);
  $G__70644_map__70639_map__70639__$1_props__41636__auto__$jscomp$69_vec__70636_vec__70640$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__70644_map__70639_map__70639__$1_props__41636__auto__$jscomp$69_vec__70636_vec__70640$$, 0, null);
  $G__70644_map__70639_map__70639__$1_props__41636__auto__$jscomp$69_vec__70636_vec__70640$$ = $APP.$cljs$core$__destructure_map$$($G__70644_map__70639_map__70639__$1_props__41636__auto__$jscomp$69_vec__70636_vec__70640$$);
  var $cost_data$jscomp$2$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__70644_map__70639_map__70639__$1_props__41636__auto__$jscomp$69_vec__70636_vec__70640$$, $cljs$cst$779$cost_data$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__70644_map__70639_map__70639__$1_props__41636__auto__$jscomp$69_vec__70636_vec__70640$$ = $APP.$helix$hooks$use_state$$($APP.$cljs$core$PersistentHashSet$EMPTY$$);
  var $expanded_items$jscomp$2$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__70644_map__70639_map__70639__$1_props__41636__auto__$jscomp$69_vec__70636_vec__70640$$, 0, null), $set_expanded_items$jscomp$2$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__70644_map__70639_map__70639__$1_props__41636__auto__$jscomp$69_vec__70636_vec__70640$$, 1, null);
  $G__70644_map__70639_map__70639__$1_props__41636__auto__$jscomp$69_vec__70636_vec__70640$$ = function() {
    return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["w-full", "text-slate-950  dark:text-white", "font-mono"]))), children:[$APP.$cljs$core$map_indexed$cljs$0core$0IFn$0_invoke$0arity$02$$(function($G__70650_idx$jscomp$69$$, $G__70649_item$jscomp$35$$) {
      $G__70649_item$jscomp$35$$ = {idx:$G__70650_idx$jscomp$69$$, item:$G__70649_item$jscomp$35$$, "set-expanded-items":$set_expanded_items$jscomp$2$$, "expanded-items":$expanded_items$jscomp$2$$};
      $G__70650_idx$jscomp$69$$ = "" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($G__70650_idx$jscomp$69$$) + "-section";
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$($amp$pages$budget$table$section_line_item$$, $G__70649_item$jscomp$35$$, $G__70650_idx$jscomp$69$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$budget$table$section_line_item$$, $G__70649_item$jscomp$35$$, $G__70650_idx$jscomp$69$$);
    }, $cost_data$jscomp$2$$), function() {
      var $G__70656$$ = {"cost-data":$cost_data$jscomp$2$$};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$pages$budget$table$total_section$$, $G__70656$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$budget$table$total_section$$, $G__70656$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("ol", $G__70644_map__70639_map__70639__$1_props__41636__auto__$jscomp$69_vec__70636_vec__70640$$) : $APP.$helix$core$jsxs$$.call(null, "ol", $G__70644_map__70639_map__70639__$1_props__41636__auto__$jscomp$69_vec__70636_vec__70640$$);
};
$amp$pages$budget$cost_breakdown$preview$$ = function($G__70774_map__70772_props__41636__auto__$jscomp$70_vec__70769$$, $maybe_ref__41637__auto__$jscomp$70$$) {
  $G__70774_map__70772_props__41636__auto__$jscomp$70_vec__70769$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__70774_map__70772_props__41636__auto__$jscomp$70_vec__70769$$), $maybe_ref__41637__auto__$jscomp$70$$], null);
  $G__70774_map__70772_props__41636__auto__$jscomp$70_vec__70769$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__70774_map__70772_props__41636__auto__$jscomp$70_vec__70769$$, 0, null);
  $APP.$cljs$core$__destructure_map$$($G__70774_map__70772_props__41636__auto__$jscomp$70_vec__70769$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__70774_map__70772_props__41636__auto__$jscomp$70_vec__70769$$ = function() {
    return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_lg$$, "p-4"]))), children:[function() {
      var $G__70778$$ = {children:["The Armenia Pavilion at the 61st Venice Biennale is a major international cultural undertaking—", "structured to meet the standards of the most rigorous national presentations. "]};
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__70778$$) : $APP.$helix$core$jsxs$$.call(null, "span", $G__70778$$);
    }(), function() {
      var $G__70782$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:"With a total budget of approximately "};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__70782$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__70782$$);
    }(), function() {
      var $G__70786$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:" ("};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__70786$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__70786$$);
    }(), function() {
      var $G__70790$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$value_currency$$), children:"$1,6M USD"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__70790$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__70790$$);
    }(), function() {
      var $G__70794$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:"), the financial framework covers the full scope of "};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__70794$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__70794$$);
    }(), function() {
      var $G__70798$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:"production, installation, operations, communications,"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__70798$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__70798$$);
    }(), function() {
      var $G__70802$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:" and "};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__70802$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__70802$$);
    }(), function() {
      var $G__70806$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:"documentation"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__70806$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__70806$$);
    }(), function() {
      var $G__70810$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:". "};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__70810$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__70810$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__70774_map__70772_props__41636__auto__$jscomp$70_vec__70769$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__70774_map__70772_props__41636__auto__$jscomp$70_vec__70769$$);
};
$amp$pages$budget$cost_breakdown$details$$ = function($G__70882_map__70878_props__41636__auto__$jscomp$71_vec__70875$$, $maybe_ref__41637__auto__$jscomp$71$$) {
  $G__70882_map__70878_props__41636__auto__$jscomp$71_vec__70875$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__70882_map__70878_props__41636__auto__$jscomp$71_vec__70875$$), $maybe_ref__41637__auto__$jscomp$71$$], null);
  $G__70882_map__70878_props__41636__auto__$jscomp$71_vec__70875$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__70882_map__70878_props__41636__auto__$jscomp$71_vec__70875$$, 0, null);
  $APP.$cljs$core$__destructure_map$$($G__70882_map__70878_props__41636__auto__$jscomp$71_vec__70875$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__70882_map__70878_props__41636__auto__$jscomp$71_vec__70875$$ = function() {
    return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_lg$$, "p-4"]))), children:[function() {
      var $G__70888$$ = {children:["The Armenia Pavilion at the 61st Venice Biennale is a major international cultural undertaking—", "structured to meet the standards of the most rigorous national presentations. "]};
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__70888$$) : $APP.$helix$core$jsxs$$.call(null, "span", $G__70888$$);
    }(), function() {
      var $G__70898$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:"With a total budget of approximately "};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__70898$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__70898$$);
    }(), function() {
      var $G__70902$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:" ("};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__70902$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__70902$$);
    }(), function() {
      var $G__70908$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$value_currency$$), children:"$1,6M USD"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__70908$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__70908$$);
    }(), function() {
      var $G__70914$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:"), the financial framework covers the full scope of "};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__70914$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__70914$$);
    }(), function() {
      var $G__70918$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:"production, installation, operations, communications,"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__70918$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__70918$$);
    }(), function() {
      var $G__70922$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:" and "};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__70922$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__70922$$);
    }(), function() {
      var $G__70930$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:"documentation"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__70930$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__70930$$);
    }(), function() {
      var $G__70938$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:". "};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__70938$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__70938$$);
    }(), function() {
      var $G__70946$$ = {className:"block my-6", children:["As Armenia does not maintain a permanent national pavilion in Venice, a venue must be secured through rental—", "as is customary for many smaller and non-permanent participating nations. "]};
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__70946$$) : $APP.$helix$core$jsxs$$.call(null, "span", $G__70946$$);
    }(), function() {
      var $G__70952$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:"The selected site is located outside the Biennale's primary zones, enabling a significantly lower base rent—approximately "};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__70952$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__70952$$);
    }(), function() {
      var $G__70958$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$value_currency$$), children:"$145,600"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__70958$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__70958$$);
    }(), function() {
      var $G__70963$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:"—while remaining fully accredited and visible within the official Biennale structure. "};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__70963$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__70963$$);
    }(), function() {
      var $G__70971$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:"By contrast, venues within the Giardini or Arsenale—when available—typically begin at "};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__70971$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__70971$$);
    }(), function() {
      var $G__70979$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$value_currency$$), children:"$450,000"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__70979$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__70979$$);
    }(), function() {
      var $G__70984$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:" in base rent, before construction, staffing, utilities, logistics, and operating overhead. "};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__70984$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__70984$$);
    }(), function() {
      var $G__70994$$ = function() {
        return {className:"mt-6", children:[function() {
          var $G__71000$$ = {className:"mt-6", children:"Crucially, the nature of "};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__71000$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__71000$$);
        }(), function() {
          var $G__71008$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:"THE STUDIO"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__71008$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__71008$$);
        }(), function() {
          var $G__71016$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:" makes this venue choice not only strategic but essential. "};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__71016$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__71016$$);
        }(), function() {
          var $G__71022$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:"The work is conceived to be produced, refined, and evolved "};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__71022$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__71022$$);
        }(), function() {
          var $G__71037$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-semibold", "italic", "text-slate-900  dark:text-slate-100"]))), children:"on site"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__71037$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__71037$$);
        }(), function() {
          var $G__71051$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:", allowing the Pavilion to function simultaneously as exhibition space and working studio. "};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__71051$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__71051$$);
        }(), function() {
          var $G__71057$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:["This approach meets extremely tight production and installation deadlines while maintaining full artistic and technical control—", "conditions that would be far more difficult, costly, or even impossible under a traditional off-site fabrication and transport model. "]};
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__71057$$) : $APP.$helix$core$jsxs$$.call(null, "span", $G__71057$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__70994$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__70994$$);
    }(), function() {
      var $G__71082$$ = {className:"block my-6", children:"Rather than directing the majority of resources toward a single, fixed monumental installation, the artist and team have deliberately taken another route. "};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__71082$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__71082$$);
    }(), function() {
      var $G__71094$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:"By producing the work on site, the Pavilion avoids the need for a pre-fabricated "};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__71094$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__71094$$);
    }(), function() {
      var $G__71103$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-semibold", "italic", "text-slate-900  dark:text-slate-100"]))), children:"“grand object”"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__71103$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__71103$$);
    }(), function() {
      var $G__71115$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:" altogether. "};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__71115$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__71115$$);
    }(), function() {
      var $G__71120$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:"This decision reduces fabrication, crating, international shipping, and risk-related costs, while aligning more precisely with the broader conceptual goals: "};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__71120$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__71120$$);
    }(), function() {
      var $G__71130$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:"process over spectacle, presence over monumentality,"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__71130$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__71130$$);
    }(), function() {
      var $G__71139$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:" and "};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__71139$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__71139$$);
    }(), function() {
      var $G__71169$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:"sustained making over static display"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__71169$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__71169$$);
    }(), function() {
      var $G__71185$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:". "};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__71185$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__71185$$);
    }(), function() {
      var $G__71201$$ = function() {
        return {className:"my-6", children:[function() {
          var $G__71213$$ = {className:"", children:"In this sense, cost efficiency and artistic rigor are not in opposition but mutually reinforcing. "};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__71213$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__71213$$);
        }(), function() {
          var $G__71225$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:"The Pavilion's structure distributes resources across time, labor, materials, and public engagement—rather than concentrating them into a single object whose expense would be driven largely by transport and scale rather than meaning. "};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__71225$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__71225$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__71201$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__71201$$);
    }(), function() {
      var $G__71238$$ = function() {
        return {className:"block my-6", children:[function() {
          var $G__71242$$ = {className:"", children:"Despite these efficiencies, the overall cost of operating in Venice during the Biennale remains high. "};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__71242$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__71242$$);
        }(), function() {
          var $G__71252$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:"Venice's unique geography, limited infrastructure, and extraordinary demand elevate costs across all categories—logistics, storage, labor, accommodations, and technical services. "};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__71252$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__71252$$);
        }(), function() {
          var $G__71262$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:"These conditions are shared by all national pavilions and reflect the Biennale's position as the most visible international platform in contemporary art. "};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__71262$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__71262$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__71238$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__71238$$);
    }(), function() {
      var $G__71270$$ = {className:"mt-6", children:"Unlike projects that culminate at opening, this Pavilion is conceived as a"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__71270$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__71270$$);
    }(), function() {
      var $G__71280$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-semibold", "italic", "text-slate-900  dark:text-slate-100"]))), children:" seven-month operational commitment"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__71280$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__71280$$);
    }(), function() {
      var $G__71293$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:": a living environment that functions simultaneously as exhibition space, working studio, public forum, and diplomatic platform—requiring sustained staffing, materials, logistics, and institutional oversight throughout the duration of the Biennale. "};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__71293$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__71293$$);
    }(), function() {
      var $G__71303$$ = {className:"block mt-6", children:"Significant investment secures venue readiness and regulatory compliance, supports curatorial and administrative leadership, funds museum-scale fabrication and specialized craft, and addresses Venice-specific transport, storage, installation, and reverse logistics. "};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__71303$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__71303$$);
    }(), function() {
      var $G__71307$$ = function() {
        return {className:"block mt-6", children:[function() {
          var $G__71311$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:"THE STUDIO"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__71311$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__71311$$);
        }(), function() {
          var $G__71319$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:" is budgeted as an ongoing on-site operation, ensuring continuous execution, maintenance, and evolution of the work across the exhibition period—distinguishing the Pavilion from static presentations. "};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__71319$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__71319$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__71307$$) : $APP.$helix$core$jsxs$$.call(null, "span", $G__71307$$);
    }(), function() {
      var $G__71323$$ = {className:"block mt-6", children:"Public visibility and long-term legacy are strengthened through opening week programs, marketing and public relations, publication, and comprehensive film and photographic documentation—ensuring that the Pavilion's impact extends into international media, scholarship, and institutional archives. "};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__71323$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__71323$$);
    }(), function() {
      var $G__71327$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_closing$$, "block mt-6"]))), children:"A responsible contingency is included to accommodate the realities of an extended international project operating across jurisdictions, timelines, and currencies—ensuring stability, accountability, and the successful delivery of Armenia's national presentation on the world stage."};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__71327$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__71327$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__70882_map__70878_props__41636__auto__$jscomp$71_vec__70875$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__70882_map__70878_props__41636__auto__$jscomp$71_vec__70875$$);
};
$amp$pages$budget$cost_breakdown$footer$$ = function($G__71344_G__71348$jscomp$inline_3707_map__71342_props__41636__auto__$jscomp$72_vec__71339$$, $maybe_ref__41637__auto__$jscomp$72$$) {
  $G__71344_G__71348$jscomp$inline_3707_map__71342_props__41636__auto__$jscomp$72_vec__71339$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__71344_G__71348$jscomp$inline_3707_map__71342_props__41636__auto__$jscomp$72_vec__71339$$), $maybe_ref__41637__auto__$jscomp$72$$], null);
  $G__71344_G__71348$jscomp$inline_3707_map__71342_props__41636__auto__$jscomp$72_vec__71339$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__71344_G__71348$jscomp$inline_3707_map__71342_props__41636__auto__$jscomp$72_vec__71339$$, 0, null);
  $APP.$cljs$core$__destructure_map$$($G__71344_G__71348$jscomp$inline_3707_map__71342_props__41636__auto__$jscomp$72_vec__71339$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__71344_G__71348$jscomp$inline_3707_map__71342_props__41636__auto__$jscomp$72_vec__71339$$ = {"cost-data":$amp$pages$budget$cost_breakdown$cost_data$$};
  $G__71344_G__71348$jscomp$inline_3707_map__71342_props__41636__auto__$jscomp$72_vec__71339$$ = {className:"mt-12", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$pages$budget$table$budget_table$$, $G__71344_G__71348$jscomp$inline_3707_map__71342_props__41636__auto__$jscomp$72_vec__71339$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$budget$table$budget_table$$, $G__71344_G__71348$jscomp$inline_3707_map__71342_props__41636__auto__$jscomp$72_vec__71339$$)};
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__71344_G__71348$jscomp$inline_3707_map__71342_props__41636__auto__$jscomp$72_vec__71339$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__71344_G__71348$jscomp$inline_3707_map__71342_props__41636__auto__$jscomp$72_vec__71339$$);
};
$amp$pages$budget$cost_breakdown$cost_breakdown$$ = function($G__71374_id$jscomp$85_map__71370_props__41636__auto__$jscomp$73_vec__71367$$, $G__71378$jscomp$inline_3710_JSCompiler_inline_result$jscomp$inline_3709_maybe_ref__41637__auto__$jscomp$73_subtitle$jscomp$4$$) {
  $G__71374_id$jscomp$85_map__71370_props__41636__auto__$jscomp$73_vec__71367$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__71374_id$jscomp$85_map__71370_props__41636__auto__$jscomp$73_vec__71367$$), $G__71378$jscomp$inline_3710_JSCompiler_inline_result$jscomp$inline_3709_maybe_ref__41637__auto__$jscomp$73_subtitle$jscomp$4$$], null);
  $G__71374_id$jscomp$85_map__71370_props__41636__auto__$jscomp$73_vec__71367$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__71374_id$jscomp$85_map__71370_props__41636__auto__$jscomp$73_vec__71367$$, 0, null);
  var $map__71370__$1_title$jscomp$23$$ = $APP.$cljs$core$__destructure_map$$($G__71374_id$jscomp$85_map__71370_props__41636__auto__$jscomp$73_vec__71367$$);
  $G__71374_id$jscomp$85_map__71370_props__41636__auto__$jscomp$73_vec__71367$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__71370__$1_title$jscomp$23$$, $APP.$cljs$cst$200$id$$);
  $G__71378$jscomp$inline_3710_JSCompiler_inline_result$jscomp$inline_3709_maybe_ref__41637__auto__$jscomp$73_subtitle$jscomp$4$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__71370__$1_title$jscomp$23$$, $APP.$cljs$cst$724$subtitle$$);
  $map__71370__$1_title$jscomp$23$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__71370__$1_title$jscomp$23$$, $APP.$cljs$cst$378$title$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__71378$jscomp$inline_3710_JSCompiler_inline_result$jscomp$inline_3709_maybe_ref__41637__auto__$jscomp$73_subtitle$jscomp$4$$ = {idx:3, "section-hint":$G__71378$jscomp$inline_3710_JSCompiler_inline_result$jscomp$inline_3709_maybe_ref__41637__auto__$jscomp$73_subtitle$jscomp$4$$, title:$map__71370__$1_title$jscomp$23$$, "expand-button-label":"Read more", "preview-text":$amp$pages$budget$cost_breakdown$preview$$, "full-text":$amp$pages$budget$cost_breakdown$details$$, "footer-text":$amp$pages$budget$cost_breakdown$footer$$};
  $G__71378$jscomp$inline_3710_JSCompiler_inline_result$jscomp$inline_3709_maybe_ref__41637__auto__$jscomp$73_subtitle$jscomp$4$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$ui$expandable_text$expandable_text_area_2$$, $G__71378$jscomp$inline_3710_JSCompiler_inline_result$jscomp$inline_3709_maybe_ref__41637__auto__$jscomp$73_subtitle$jscomp$4$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$ui$expandable_text$expandable_text_area_2$$, 
  $G__71378$jscomp$inline_3710_JSCompiler_inline_result$jscomp$inline_3709_maybe_ref__41637__auto__$jscomp$73_subtitle$jscomp$4$$);
  $G__71374_id$jscomp$85_map__71370_props__41636__auto__$jscomp$73_vec__71367$$ = {id:$G__71374_id$jscomp$85_map__71370_props__41636__auto__$jscomp$73_vec__71367$$, children:$G__71378$jscomp$inline_3710_JSCompiler_inline_result$jscomp$inline_3709_maybe_ref__41637__auto__$jscomp$73_subtitle$jscomp$4$$};
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__71374_id$jscomp$85_map__71370_props__41636__auto__$jscomp$73_vec__71367$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__71374_id$jscomp$85_map__71370_props__41636__auto__$jscomp$73_vec__71367$$);
};
$amp$pages$budget$location$preview_text$$ = function($G__86151_props__41636__auto__$jscomp$74$$) {
  $APP.$helix$core$extract_cljs_props$$($G__86151_props__41636__auto__$jscomp$74$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__86151_props__41636__auto__$jscomp$74$$ = function() {
    return {className:"", children:["The Armenia Pavilion 2026 will be located across ", function() {
      var $G__86155$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:"two sites,"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__86155$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__86155$$);
    }(), " within the historic Arsenale of Venice. ", function() {
      var $G__86159$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:" 1. A wonderful interior grand studio"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__86159$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__86159$$);
    }(), function() {
      var $G__86164$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:" , as well 2. An important exterior public crossing to the Arsenale"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__86164$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__86164$$);
    }(), ". ", "Together these two sites will form a single spatial constellation. ", function() {
      var $G__86172$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-900  dark:text-slate-100"), children:"A place for study, a place for work, to create, share and exhibit"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__86172$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__86172$$);
    }(), function() {
      var $G__86178$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-900  dark:text-slate-100"), children:" at a public-crossing threshold"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__86178$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__86178$$);
    }(), "—each distinctly neccesary and helpful, both in concluding the final design as well as the making, viewing, and observing of the artworks presented."]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__86151_props__41636__auto__$jscomp$74$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__86151_props__41636__auto__$jscomp$74$$);
};
$amp$pages$budget$location$preview$$ = function($G__86208_G__86213$jscomp$inline_3327_map__86205_props__41636__auto__$jscomp$75_vec__86202$$, $maybe_ref__41637__auto__$jscomp$75$$) {
  $G__86208_G__86213$jscomp$inline_3327_map__86205_props__41636__auto__$jscomp$75_vec__86202$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__86208_G__86213$jscomp$inline_3327_map__86205_props__41636__auto__$jscomp$75_vec__86202$$), $maybe_ref__41637__auto__$jscomp$75$$], null);
  $G__86208_G__86213$jscomp$inline_3327_map__86205_props__41636__auto__$jscomp$75_vec__86202$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__86208_G__86213$jscomp$inline_3327_map__86205_props__41636__auto__$jscomp$75_vec__86202$$, 0, null);
  $APP.$cljs$core$__destructure_map$$($G__86208_G__86213$jscomp$inline_3327_map__86205_props__41636__auto__$jscomp$75_vec__86202$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__86208_G__86213$jscomp$inline_3327_map__86205_props__41636__auto__$jscomp$75_vec__86202$$ = {};
  $G__86208_G__86213$jscomp$inline_3327_map__86205_props__41636__auto__$jscomp$75_vec__86202$$ = {className:"p-4 mb-12", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$pages$budget$location$preview_text$$, $G__86208_G__86213$jscomp$inline_3327_map__86205_props__41636__auto__$jscomp$75_vec__86202$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$budget$location$preview_text$$, $G__86208_G__86213$jscomp$inline_3327_map__86205_props__41636__auto__$jscomp$75_vec__86202$$)};
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__86208_G__86213$jscomp$inline_3327_map__86205_props__41636__auto__$jscomp$75_vec__86202$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__86208_G__86213$jscomp$inline_3327_map__86205_props__41636__auto__$jscomp$75_vec__86202$$);
};
$amp$pages$budget$location$full_details$$ = function($G__86366_map__86364_map__86364__$1_props__41636__auto__$jscomp$76_vec__86361$$, $maybe_ref__41637__auto__$jscomp$76$$) {
  $G__86366_map__86364_map__86364__$1_props__41636__auto__$jscomp$76_vec__86361$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__86366_map__86364_map__86364__$1_props__41636__auto__$jscomp$76_vec__86361$$), $maybe_ref__41637__auto__$jscomp$76$$], null);
  $G__86366_map__86364_map__86364__$1_props__41636__auto__$jscomp$76_vec__86361$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__86366_map__86364_map__86364__$1_props__41636__auto__$jscomp$76_vec__86361$$, 0, null);
  $G__86366_map__86364_map__86364__$1_props__41636__auto__$jscomp$76_vec__86361$$ = $APP.$cljs$core$__destructure_map$$($G__86366_map__86364_map__86364__$1_props__41636__auto__$jscomp$76_vec__86361$$);
  $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__86366_map__86364_map__86364__$1_props__41636__auto__$jscomp$76_vec__86361$$, $APP.$cljs$cst$200$id$$);
  $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__86366_map__86364_map__86364__$1_props__41636__auto__$jscomp$76_vec__86361$$, $APP.$cljs$cst$724$subtitle$$);
  $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__86366_map__86364_map__86364__$1_props__41636__auto__$jscomp$76_vec__86361$$, $APP.$cljs$cst$378$title$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $is_desktop_QMARK_$jscomp$3$$ = $APP.$amp$hooks$use_media_query$use_touch_enabled$$();
  $G__86366_map__86364_map__86364__$1_props__41636__auto__$jscomp$76_vec__86361$$ = function() {
    return {className:"space-y-8", children:function() {
      var $G__86374$$ = function() {
        return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$body_lg$$), children:[function() {
          var $G__86380_G__86388$jscomp$inline_3330$$ = {};
          $G__86380_G__86388$jscomp$inline_3330$$ = {className:"p-4 mb-12", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$pages$budget$location$preview_text$$, $G__86380_G__86388$jscomp$inline_3330$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$budget$location$preview_text$$, $G__86380_G__86388$jscomp$inline_3330$$)};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__86380_G__86388$jscomp$inline_3330$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__86380_G__86388$jscomp$inline_3330$$);
        }(), function() {
          var $G__86393$$ = function() {
            return {className:"my-8", children:[function() {
              var $G__86405$$ = {dev:!1, "interactive?":$is_desktop_QMARK_$jscomp$3$$, "initial-view":new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$726$longitude$$, 12.349872, $APP.$cljs$cst$727$latitude$$, 45.436114, $APP.$cljs$cst$728$zoom$$, 16.2], null), "ant-paths":new $APP.$cljs$core$PersistentVector$$(null, 1, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [new $APP.$cljs$core$PersistentArrayMap$$(null, 7, [$APP.$cljs$cst$734$source_id$$, "directions-ant", $APP.$cljs$cst$733$url$$, 
              "/data/biennale_data.geojson", $APP.$cljs$cst$732$filter$$, new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, ["\x3d\x3d", new $APP.$cljs$core$PersistentVector$$(null, 1, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, ["geometry-type"], null), "LineString"], null), $APP.$cljs$cst$410$color$$, "#c7630b", $APP.$cljs$cst$415$width$$, 4, $APP.$cljs$cst$411$bg_opacity$$, 0.2, $APP.$cljs$cst$436$duration$$, 2], null)], null), layers:new $APP.$cljs$core$PersistentVector$$(null, 
              5, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$126$source$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$200$id$$, "biennale", $APP.$cljs$cst$733$url$$, "/data/biennale_data.geojson"], null), $APP.$cljs$cst$729$layer$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$200$id$$, "biennale-fill", $APP.$cljs$cst$25$type$$, "fill", $APP.$cljs$cst$732$filter$$, new $APP.$cljs$core$PersistentVector$$(null, 
              3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, ["\x3d\x3d", new $APP.$cljs$core$PersistentVector$$(null, 1, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, ["geometry-type"], null), "Polygon"], null), $APP.$cljs$cst$730$paint$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$757$fill_color$$, "#b91c1c", $APP.$cljs$cst$758$fill_opacity$$, 0.5], null)], null)], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$126$source$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 
              2, [$APP.$cljs$cst$200$id$$, "biennale-start", $APP.$cljs$cst$733$url$$, "/data/biennale_data.geojson"], null), $APP.$cljs$cst$729$layer$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$200$id$$, "directions-start", $APP.$cljs$cst$25$type$$, "circle", $APP.$cljs$cst$732$filter$$, new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, ["\x3d\x3d", new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, 
              ["get", "marker"], null), "start"], null), $APP.$cljs$cst$730$paint$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$759$circle_radius$$, 6, $APP.$cljs$cst$760$circle_color$$, "#0c0cd0", $APP.$cljs$cst$761$circle_stroke_width$$, 2, $APP.$cljs$cst$762$circle_stroke_color$$, "#ffffff"], null)], null)], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$126$source$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$200$id$$, "biennale-end", 
              $APP.$cljs$cst$733$url$$, "/data/biennale_data.geojson"], null), $APP.$cljs$cst$729$layer$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$200$id$$, "directions-end", $APP.$cljs$cst$25$type$$, "circle", $APP.$cljs$cst$732$filter$$, new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, ["\x3d\x3d", new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, ["get", "marker"], null), 
              "end"], null), $APP.$cljs$cst$730$paint$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$759$circle_radius$$, 6, $APP.$cljs$cst$760$circle_color$$, "#ef4444", $APP.$cljs$cst$761$circle_stroke_width$$, 2, $APP.$cljs$cst$762$circle_stroke_color$$, "#ffffff"], null)], null)], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$126$source$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$200$id$$, "biennale-points", $APP.$cljs$cst$733$url$$, 
              "/data/biennale_data.geojson"], null), $APP.$cljs$cst$729$layer$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$200$id$$, "biennale-point", $APP.$cljs$cst$25$type$$, "circle", $APP.$cljs$cst$732$filter$$, new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, ["all", new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, ["\x3d\x3d", new $APP.$cljs$core$PersistentVector$$(null, 
              1, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, ["geometry-type"], null), "Point"], null), new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, ["!", new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, ["has", "marker"], null)], null)], null), $APP.$cljs$cst$730$paint$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$759$circle_radius$$, 8, $APP.$cljs$cst$760$circle_color$$, 
              "#b91c1c", $APP.$cljs$cst$761$circle_stroke_width$$, 2, $APP.$cljs$cst$762$circle_stroke_color$$, "#ffffff"], null)], null)], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$126$source$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$200$id$$, "biennale-labels", $APP.$cljs$cst$733$url$$, "/data/biennale_data.geojson"], null), $APP.$cljs$cst$729$layer$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 5, [$APP.$cljs$cst$200$id$$, "biennale-label", 
              $APP.$cljs$cst$25$type$$, "symbol", $APP.$cljs$cst$732$filter$$, new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, ["all", new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, ["\x3d\x3d", new $APP.$cljs$core$PersistentVector$$(null, 1, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, ["geometry-type"], null), "Point"], null), new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, 
              ["!", new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, ["has", "marker"], null)], null)], null), $APP.$cljs$cst$731$layout$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$763$text_field$$, new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, ["get", "label"], null), $APP.$cljs$cst$764$text_font$$, new $APP.$cljs$core$PersistentVector$$(null, 1, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, 
              ["Source Code Pro Semibold"], null), $APP.$cljs$cst$765$text_size$$, 14, $APP.$cljs$cst$766$text_offset$$, new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [0, -1.5], null), $APP.$cljs$cst$767$text_anchor$$, "bottom", $APP.$cljs$cst$768$text_allow_overlap$$, !0], null), $APP.$cljs$cst$730$paint$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$769$text_color$$, "#be136e", $APP.$cljs$cst$770$text_halo_color$$, "#ffffff", 
              $APP.$cljs$cst$771$text_halo_width$$, 5], null)], null)], null)], null)};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$ui$map$mapbox_map$$, $G__86405$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$ui$map$mapbox_map$$, $G__86405$$);
            }(), function() {
              var $G__86433$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-mono", "text-sm", "italic", "mt-4 px-4"]))), children:"* Walking path from the crossing to the pavilion. ~8 minutes"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__86433$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__86433$$);
            }()]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__86393$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__86393$$);
        }(), function() {
          var $G__86451$$ = function() {
            return {className:$APP.$helix$impl$props$normalize_class$$("text-xl"), children:[function() {
              var $G__86463$$ = function() {
                return {className:"p-4", children:[function() {
                  var $G__86467$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$heading_section$$, "pb-4"]))), children:"TESA 41 (THE STUDIO)"};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__86467$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__86467$$);
                }(), function() {
                  var $G__86481$$ = function() {
                    return {className:"space-y-6", children:[function() {
                      var $G__86489$$ = function() {
                        return {children:[function() {
                          var $G__86499$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:"Tesa 41"};
                          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__86499$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__86499$$);
                        }(), " is the primary studio and interior exhibition space for the Armenia Pavilion 2026—", function() {
                          var $G__86509$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:"5,000 square feet"};
                          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__86509$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__86509$$);
                        }(), " (", function() {
                          var $G__86515$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:"~464 square meters"};
                          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__86515$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__86515$$);
                        }(), ") of expansive industrial volume that functions as the ", function() {
                          var $G__86519$$ = {className:$APP.$helix$impl$props$normalize_class$$("italic"), children:"operational and conceptual heart"};
                          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__86519$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__86519$$);
                        }(), " of the project."]};
                      }();
                      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__86489$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__86489$$);
                    }(), function() {
                      var $G__86526$$ = function() {
                        return {children:["Defined by scale, clarity, and architectural restraint, it is built for sustained ", function() {
                          var $G__86532$$ = {className:$APP.$helix$impl$props$normalize_class$$("font-medium"), children:"fabrication"};
                          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__86532$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__86532$$);
                        }(), ", ", function() {
                          var $G__86544$$ = {className:$APP.$helix$impl$props$normalize_class$$("font-medium"), children:"assembly"};
                          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__86544$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__86544$$);
                        }(), ", and ", function() {
                          var $G__86556$$ = {className:$APP.$helix$impl$props$normalize_class$$("font-medium"), children:"reconfiguration"};
                          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__86556$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__86556$$);
                        }(), " across the full duration of the Biennale."]};
                      }();
                      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__86526$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__86526$$);
                    }(), function() {
                      var $G__86568$$ = function() {
                        return {children:["Here, the Pavilion operates as a ", function() {
                          var $G__86574$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:"working studio"};
                          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__86574$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__86574$$);
                        }(), " rather than a static exhibition: a place of continuous ", function() {
                          var $G__86580$$ = {className:$APP.$helix$impl$props$normalize_class$$("font-medium"), children:"making"};
                          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__86580$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__86580$$);
                        }(), ", ", function() {
                          var $G__86588$$ = {className:$APP.$helix$impl$props$normalize_class$$("font-medium"), children:"stacking"};
                          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__86588$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__86588$$);
                        }(), ", ", function() {
                          var $G__86595$$ = {className:$APP.$helix$impl$props$normalize_class$$("font-medium"), children:"dismantling"};
                          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__86595$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__86595$$);
                        }(), ", and ", function() {
                          var $G__86605$$ = {className:$APP.$helix$impl$props$normalize_class$$("font-medium"), children:"rebuilding"};
                          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__86605$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__86605$$);
                        }(), ". The interior volume allows the work to expand ", function() {
                          var $G__86615$$ = {className:$APP.$helix$impl$props$normalize_class$$("font-medium"), children:"horizontally"};
                          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__86615$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__86615$$);
                        }(), " and ", function() {
                          var $G__86623$$ = {className:$APP.$helix$impl$props$normalize_class$$("font-medium"), children:"vertically"};
                          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__86623$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__86623$$);
                        }(), ", accommodating both monumental arrangements and intimate moments of material attention."]};
                      }();
                      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__86568$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__86568$$);
                    }(), function() {
                      var $G__86629$$ = function() {
                        return {className:"pt-2", children:[function() {
                          var $G__86635$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:"Tesa 41"};
                          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__86635$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__86635$$);
                        }(), " anchors the Pavilion physically and philosophically—establishing ", function() {
                          var $G__86643$$ = {className:$APP.$helix$impl$props$normalize_class$$("italic"), children:"the studio as the artwork itself"};
                          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__86643$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__86643$$);
                        }(), "."]};
                      }();
                      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__86629$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__86629$$);
                    }()]};
                  }();
                  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__86481$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__86481$$);
                }()]};
              }();
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__86463$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__86463$$);
            }(), function() {
              var $G__86659$$ = function() {
                return {className:"w-full h-full flex flex-col gap-4 mt-12", children:function() {
                  var $outer_ctx$jscomp$2$$ = $APP.$helix$hooks$use_ref$$("outer-ctx"), $G__86676_vec__86666$$ = $APP.$amp$hooks$use_intersection_observer$use_intersection_observer$$($outer_ctx$jscomp$2$$);
                  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__86676_vec__86666$$, 0, null);
                  var $is_visible_QMARK_$jscomp$4$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__86676_vec__86666$$, 1, null);
                  $G__86676_vec__86666$$ = function() {
                    return {className:"flex flex-col gap-4", ref:$outer_ctx$jscomp$2$$, children:[function() {
                      var $G__86684_G__86690$jscomp$inline_3713$$ = {"playback-id":"KaA1Jf2AusJZ966KPeZrdwJ5S53kboLO4E4fGLrgTLk", "aspect-ratio":1.77, "should-play?":$is_visible_QMARK_$jscomp$4$$, "allow-audio?":!1};
                      $G__86684_G__86690$jscomp$inline_3713$$ = {className:"w-full aspect-[16/9]", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$pages$budget$location$lazy_video$$, $G__86684_G__86690$jscomp$inline_3713$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$budget$location$lazy_video$$, $G__86684_G__86690$jscomp$inline_3713$$)};
                      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__86684_G__86690$jscomp$inline_3713$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__86684_G__86690$jscomp$inline_3713$$);
                    }(), function() {
                      var $G__86702$$ = {"enabled?":$is_visible_QMARK_$jscomp$4$$, slides:new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$435$img_src$$, "https://atd-722658831.imgix.net/tesa_41/weavy-Gemini%203%20(Nano%20Banana%20Pro)-2025-12-22%20at%2011.12.05.tif", $APP.$cljs$cst$723$aspect_ratio$$, 1.34, $APP.$cljs$cst$711$active_QMARK_$$, !0], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 
                      3, [$APP.$cljs$cst$435$img_src$$, "https://atd-722658831.imgix.net/tesa_41/weavy-Gemini%203%20(Nano%20Banana%20Pro)-2025-12-22%20at%2010.59.08.tif", $APP.$cljs$cst$723$aspect_ratio$$, 1.34, $APP.$cljs$cst$711$active_QMARK_$$, !0], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$435$img_src$$, "https://atd-722658831.imgix.net/tesa_41/weavy-Gemini%203%20(Nano%20Banana%20Pro)-2025-12-22%20at%2010.59.18.tif", $APP.$cljs$cst$723$aspect_ratio$$, 1.34, $APP.$cljs$cst$711$active_QMARK_$$, 
                      !0], null)], null)};
                      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$ui$image_gallery$lazy_image_gallery$$, $G__86702$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$ui$image_gallery$lazy_image_gallery$$, $G__86702$$);
                    }()]};
                  }();
                  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__86676_vec__86666$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__86676_vec__86666$$);
                }()};
              }();
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__86659$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__86659$$);
            }(), function() {
              var $G__86714$$ = function() {
                return {className:"mt-12", children:[function() {
                  var $G__86718$$ = function() {
                    return {className:"p-4", children:[function() {
                      var $G__86726$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$heading_section$$, "pb-4"]))), children:"CROSSING TO THE ARSENALE — PIRAEUS LION"};
                      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__86726$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__86726$$);
                    }(), function() {
                      var $G__86733$$ = function() {
                        return {className:"space-y-6", children:[function() {
                          var $G__86741$$ = function() {
                            return {children:["The outdoor artwork will be installed at the historic crossing grounds near the ", function() {
                              var $G__86749$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_bold$$), children:"Piraeus Lion"};
                              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__86749$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__86749$$);
                            }(), ", one of the most recognized landmarks marking the approach to the Arsenale. ", "Positioned at a critical pedestrian junction along the main route into the Biennale's Arsenale area, this site receives ", function() {
                              var $G__86753$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:"exceptionally high foot traffic"};
                              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__86753$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__86753$$);
                            }(), " throughout the six-month exhibition period. ", "Visitors moving between venues, crossing the bridge into the Arsenale, and navigating the surrounding waterfront naturally converge here. ", "The Armenian Pavilion lies less than a ten-minute walk from this point, making the installation both a ", function() {
                              var $G__86758$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:"threshold"};
                              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__86758$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__86758$$);
                            }(), " and a ", function() {
                              var $G__86762$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:"directional marker"};
                              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__86762$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__86762$$);
                            }(), "—an early encounter that orients audiences toward the Pavilion."]};
                          }();
                          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__86741$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__86741$$);
                        }(), function() {
                          var $G__86766$$ = function() {
                            return {children:["The placement ensures ", function() {
                              var $G__86771$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:"extraordinary visibility"};
                              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__86771$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__86771$$);
                            }(), " within a dense flow of international visitors, curators, press, and collectors. ", "The artwork, together with its identifying totem, will operate as a ", function() {
                              var $G__86775$$ = {className:$APP.$helix$impl$props$normalize_class$$("font-medium"), children:"visual anchor"};
                              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__86775$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__86775$$);
                            }(), " in an open, expansive setting framed by historic brick walls, canal frontage, and the continuous movement of people."]};
                          }();
                          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__86766$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__86766$$);
                        }(), function() {
                          var $G__86780$$ = function() {
                            return {children:["As a freestanding, architecturally scaled form, it will command attention without obstructing circulation, functioning simultaneously as ", function() {
                              var $G__86788$$ = {className:$APP.$helix$impl$props$normalize_class$$("font-semibold"), children:"sculpture"};
                              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__86788$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__86788$$);
                            }(), ", ", function() {
                              var $G__86792$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:"signal"};
                              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__86792$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__86792$$);
                            }(), ", and ", function() {
                              var $G__86800$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:"prelude"};
                              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__86800$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__86800$$);
                            }(), ". Its presence at this symbolic gateway amplifies the Pavilion's reach beyond its interior space, extending Armenia's participation into one of the most traversed and photographed corridors of the Biennale."]};
                          }();
                          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__86780$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__86780$$);
                        }()]};
                      }();
                      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__86733$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__86733$$);
                    }()]};
                  }();
                  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__86718$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__86718$$);
                }(), function() {
                  $APP.$amp$hooks$use_media_query$use_touch_enabled$$();
                  var $G__86808_G__86816$jscomp$inline_3927_outer_ctx$jscomp$inline_3925$$ = $APP.$helix$hooks$use_ref$$("outer-ctx");
                  var $G__86820$jscomp$inline_3929_JSCompiler_inline_result$jscomp$inline_3928_vec__86812$jscomp$inline_3926$$ = $APP.$amp$hooks$use_intersection_observer$use_intersection_observer$$($G__86808_G__86816$jscomp$inline_3927_outer_ctx$jscomp$inline_3925$$);
                  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__86820$jscomp$inline_3929_JSCompiler_inline_result$jscomp$inline_3928_vec__86812$jscomp$inline_3926$$, 0, null);
                  $G__86820$jscomp$inline_3929_JSCompiler_inline_result$jscomp$inline_3928_vec__86812$jscomp$inline_3926$$ = {"enabled?":$APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__86820$jscomp$inline_3929_JSCompiler_inline_result$jscomp$inline_3928_vec__86812$jscomp$inline_3926$$, 1, null), slides:new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$435$img_src$$, "https://atd-722658831.imgix.net/big_red_walkway/5.jpg", 
                  $APP.$cljs$cst$723$aspect_ratio$$, 1.82, $APP.$cljs$cst$438$caption$$, "BIG RED AT ARSENALE", $APP.$cljs$cst$439$credit$$, "Render 2026"], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$435$img_src$$, "https://atd-722658831.imgix.net/big_red_walkway/1.jpg", $APP.$cljs$cst$723$aspect_ratio$$, 1.82, $APP.$cljs$cst$438$caption$$, "BIG RED AT ARSENALE", $APP.$cljs$cst$439$credit$$, "Render 2026"], null)], null)};
                  $G__86820$jscomp$inline_3929_JSCompiler_inline_result$jscomp$inline_3928_vec__86812$jscomp$inline_3926$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$ui$image_gallery$lazy_image_gallery$$, $G__86820$jscomp$inline_3929_JSCompiler_inline_result$jscomp$inline_3928_vec__86812$jscomp$inline_3926$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$ui$image_gallery$lazy_image_gallery$$, $G__86820$jscomp$inline_3929_JSCompiler_inline_result$jscomp$inline_3928_vec__86812$jscomp$inline_3926$$);
                  $G__86808_G__86816$jscomp$inline_3927_outer_ctx$jscomp$inline_3925$$ = {className:"", ref:$G__86808_G__86816$jscomp$inline_3927_outer_ctx$jscomp$inline_3925$$, children:$G__86820$jscomp$inline_3929_JSCompiler_inline_result$jscomp$inline_3928_vec__86812$jscomp$inline_3926$$};
                  $G__86808_G__86816$jscomp$inline_3927_outer_ctx$jscomp$inline_3925$$ = {className:"w-full h-full flex flex-col gap-4 mt-12", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__86808_G__86816$jscomp$inline_3927_outer_ctx$jscomp$inline_3925$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__86808_G__86816$jscomp$inline_3927_outer_ctx$jscomp$inline_3925$$)};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__86808_G__86816$jscomp$inline_3927_outer_ctx$jscomp$inline_3925$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__86808_G__86816$jscomp$inline_3927_outer_ctx$jscomp$inline_3925$$);
                }()]};
              }();
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__86714$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__86714$$);
            }()]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__86451$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__86451$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__86374$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__86374$$);
    }()};
  }();
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__86366_map__86364_map__86364__$1_props__41636__auto__$jscomp$76_vec__86361$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__86366_map__86364_map__86364__$1_props__41636__auto__$jscomp$76_vec__86361$$);
};
$amp$pages$budget$location$location_section$$ = function($G__86831_id$jscomp$87_map__86829_props__41636__auto__$jscomp$77_vec__86826$$, $G__86835$jscomp$inline_3719_JSCompiler_inline_result$jscomp$inline_3718_maybe_ref__41637__auto__$jscomp$77_subtitle$jscomp$6$$) {
  $G__86831_id$jscomp$87_map__86829_props__41636__auto__$jscomp$77_vec__86826$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__86831_id$jscomp$87_map__86829_props__41636__auto__$jscomp$77_vec__86826$$), $G__86835$jscomp$inline_3719_JSCompiler_inline_result$jscomp$inline_3718_maybe_ref__41637__auto__$jscomp$77_subtitle$jscomp$6$$], null);
  $G__86831_id$jscomp$87_map__86829_props__41636__auto__$jscomp$77_vec__86826$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__86831_id$jscomp$87_map__86829_props__41636__auto__$jscomp$77_vec__86826$$, 0, null);
  var $map__86829__$1_title$jscomp$25$$ = $APP.$cljs$core$__destructure_map$$($G__86831_id$jscomp$87_map__86829_props__41636__auto__$jscomp$77_vec__86826$$);
  $G__86831_id$jscomp$87_map__86829_props__41636__auto__$jscomp$77_vec__86826$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__86829__$1_title$jscomp$25$$, $APP.$cljs$cst$200$id$$);
  $G__86835$jscomp$inline_3719_JSCompiler_inline_result$jscomp$inline_3718_maybe_ref__41637__auto__$jscomp$77_subtitle$jscomp$6$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__86829__$1_title$jscomp$25$$, $APP.$cljs$cst$724$subtitle$$);
  $map__86829__$1_title$jscomp$25$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__86829__$1_title$jscomp$25$$, $APP.$cljs$cst$378$title$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__86835$jscomp$inline_3719_JSCompiler_inline_result$jscomp$inline_3718_maybe_ref__41637__auto__$jscomp$77_subtitle$jscomp$6$$ = {idx:7, "section-hint":$G__86835$jscomp$inline_3719_JSCompiler_inline_result$jscomp$inline_3718_maybe_ref__41637__auto__$jscomp$77_subtitle$jscomp$6$$, title:$map__86829__$1_title$jscomp$25$$, "expand-button-label":"Expand details", "preview-text":$amp$pages$budget$location$preview$$, "full-text":$amp$pages$budget$location$full_details$$};
  $G__86835$jscomp$inline_3719_JSCompiler_inline_result$jscomp$inline_3718_maybe_ref__41637__auto__$jscomp$77_subtitle$jscomp$6$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$ui$expandable_text$expandable_text_area_2$$, $G__86835$jscomp$inline_3719_JSCompiler_inline_result$jscomp$inline_3718_maybe_ref__41637__auto__$jscomp$77_subtitle$jscomp$6$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$ui$expandable_text$expandable_text_area_2$$, 
  $G__86835$jscomp$inline_3719_JSCompiler_inline_result$jscomp$inline_3718_maybe_ref__41637__auto__$jscomp$77_subtitle$jscomp$6$$);
  $G__86831_id$jscomp$87_map__86829_props__41636__auto__$jscomp$77_vec__86826$$ = {id:$G__86831_id$jscomp$87_map__86829_props__41636__auto__$jscomp$77_vec__86826$$, children:$G__86835$jscomp$inline_3719_JSCompiler_inline_result$jscomp$inline_3718_maybe_ref__41637__auto__$jscomp$77_subtitle$jscomp$6$$};
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__86831_id$jscomp$87_map__86829_props__41636__auto__$jscomp$77_vec__86826$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__86831_id$jscomp$87_map__86829_props__41636__auto__$jscomp$77_vec__86826$$);
};
$amp$pages$budget$cash_flow$parse_date$$ = function($s$jscomp$226$$) {
  return new Date($s$jscomp$226$$);
};
$amp$pages$budget$cash_flow$date__GT_ms$$ = function($d$jscomp$149$$) {
  return $d$jscomp$149$$.getTime();
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
    return $amp$pages$budget$cash_flow$parse_date$$($cljs$cst$798$due$$.$cljs$core$IFn$_invoke$arity$1$($e$jscomp$219$$)).toLocaleString("en-US", {month:"long", year:"numeric"});
  }, $APP.$cljs$core$sort_by$cljs$0core$0IFn$0_invoke$0arity$02$$($APP.$cljs$core$comp$$.$cljs$core$IFn$_invoke$arity$3$($amp$pages$budget$cash_flow$date__GT_ms$$, $amp$pages$budget$cash_flow$parse_date$$, $cljs$cst$798$due$$), $entries$jscomp$4$$));
};
$amp$pages$budget$cash_flow$month_rollups$$ = function($entries$jscomp$5_groups_sorted$$) {
  $entries$jscomp$5_groups_sorted$$ = $APP.$cljs$core$sort_by$cljs$0core$0IFn$0_invoke$0arity$02$$($APP.$cljs$core$comp$$.$cljs$core$IFn$_invoke$arity$3$($amp$pages$budget$cash_flow$date__GT_ms$$, $amp$pages$budget$cash_flow$parse_date$$, $cljs$cst$798$due$$), $entries$jscomp$5_groups_sorted$$);
  $entries$jscomp$5_groups_sorted$$ = $amp$pages$budget$cash_flow$group_by_month$$($entries$jscomp$5_groups_sorted$$);
  return $APP.$cljs$core$mapv$cljs$0core$0IFn$0_invoke$0arity$02$$(function($group$jscomp$1$$) {
    var $d$jscomp$152$$ = $amp$pages$budget$cash_flow$parse_date$$($cljs$cst$798$due$$.$cljs$core$IFn$_invoke$arity$1$($APP.$cljs$core$first$$($group$jscomp$1$$))), $label$jscomp$9$$ = $d$jscomp$152$$.toLocaleString("en-US", {month:"short", year:"numeric"}), $total$jscomp$5$$ = $APP.$cljs$core$reduce$cljs$0core$0IFn$0_invoke$0arity$03$$($APP.$cljs$core$_PLUS_$$, 0, $APP.$cljs$core$map$$.$cljs$core$IFn$_invoke$arity$2$($cljs$cst$775$amount$$, $group$jscomp$1$$)), $paid$$ = $APP.$cljs$core$reduce$cljs$0core$0IFn$0_invoke$0arity$03$$($APP.$cljs$core$_PLUS_$$, 
    0, $APP.$cljs$core$map$$.$cljs$core$IFn$_invoke$arity$2$($cljs$cst$775$amount$$, $APP.$cljs$core$filter$cljs$0core$0IFn$0_invoke$0arity$02$$(function($p1__71834_SHARP_$$) {
      return $APP.$cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$($cljs$cst$801$paid$$, $APP.$cljs$cst$12$status$$.$cljs$core$IFn$_invoke$arity$1$($p1__71834_SHARP_$$));
    }, $group$jscomp$1$$))), $pending$jscomp$1$$ = $total$jscomp$5$$ - $paid$$, $n_items$$ = $APP.$cljs$core$count$$($group$jscomp$1$$), $n_paid$$ = $APP.$cljs$core$count$$($APP.$cljs$core$filter$cljs$0core$0IFn$0_invoke$0arity$02$$(function($p1__71835_SHARP_$$) {
      return $APP.$cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$($cljs$cst$801$paid$$, $APP.$cljs$cst$12$status$$.$cljs$core$IFn$_invoke$arity$1$($p1__71835_SHARP_$$));
    }, $group$jscomp$1$$)), $n_crit$jscomp$1$$ = $APP.$cljs$core$count$$($APP.$cljs$core$filter$cljs$0core$0IFn$0_invoke$0arity$02$$(function($p1__71838_SHARP_$$) {
      return $APP.$cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$($cljs$cst$819$critical$$, $cljs$cst$799$priority$$.$cljs$core$IFn$_invoke$arity$1$($p1__71838_SHARP_$$));
    }, $group$jscomp$1$$)), $all_paid$jscomp$1$$ = $APP.$cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$($n_paid$$, $n_items$$), $has_now$$ = function() {
      var $year$jscomp$2$$ = $d$jscomp$152$$.getFullYear(), $now$$ = new Date(), $n_year$$ = $now$$.getFullYear();
      return $APP.$cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$($d$jscomp$152$$.getMonth(), $now$$.getMonth()) && $APP.$cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$($year$jscomp$2$$, $n_year$$);
    }();
    return $APP.$cljs$core$PersistentHashMap$fromArrays$$([$cljs$cst$859$all_paid$$, $cljs$cst$860$entries$$, $APP.$cljs$cst$14$pending$$, $cljs$cst$861$n_crit$$, $APP.$cljs$cst$716$total$$, $cljs$cst$783$label$$, $cljs$cst$801$paid$$, $cljs$cst$862$n_paid$$, $cljs$cst$863$n_items$$, $cljs$cst$864$has_now$$], [$all_paid$jscomp$1$$, $group$jscomp$1$$, $pending$jscomp$1$$, $n_crit$jscomp$1$$, $total$jscomp$5$$, $label$jscomp$9$$, $paid$$, $n_paid$$, $n_items$$, $has_now$$]);
  }, $entries$jscomp$5_groups_sorted$$);
};
$amp$pages$budget$cash_flow$status_classes$$ = function($status$jscomp$10$$) {
  switch($status$jscomp$10$$ instanceof $APP.$cljs$core$Keyword$$ ? $status$jscomp$10$$.$fqn$ : null) {
    case "paid":
      return new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$cljs$cst$865$dot$$, "bg-emerald-400/20 dark:bg-emerald-300/20", $APP.$cljs$cst$403$text$$, "text-emerald-600 dark:text-emerald-300", $cljs$cst$783$label$$, "COST, PAID"], null);
    case "pending":
      return new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$cljs$cst$865$dot$$, "bg-slate-400/15 dark:bg-slate-500/15", $APP.$cljs$cst$403$text$$, "text-slate-500", $cljs$cst$783$label$$, "DUE"], null);
    default:
      return new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$cljs$cst$865$dot$$, "bg-slate-400/15 dark:bg-slate-500/15", $APP.$cljs$cst$403$text$$, "text-slate-500", $cljs$cst$783$label$$, "—"], null);
  }
};
$amp$pages$budget$cash_flow$timeline_node$$ = function($G__72017_73040_G__72026_map__71989_map__71989__$1_map__72002__$1_props__41636__auto__$jscomp$78_status$jscomp$11_vec__71986$$, $G__72018_73041_entry$jscomp$29_maybe_ref__41637__auto__$jscomp$78$$) {
  $G__72017_73040_G__72026_map__71989_map__71989__$1_map__72002__$1_props__41636__auto__$jscomp$78_status$jscomp$11_vec__71986$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__72017_73040_G__72026_map__71989_map__71989__$1_map__72002__$1_props__41636__auto__$jscomp$78_status$jscomp$11_vec__71986$$), $G__72018_73041_entry$jscomp$29_maybe_ref__41637__auto__$jscomp$78$$], null);
  $G__72017_73040_G__72026_map__71989_map__71989__$1_map__72002__$1_props__41636__auto__$jscomp$78_status$jscomp$11_vec__71986$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__72017_73040_G__72026_map__71989_map__71989__$1_map__72002__$1_props__41636__auto__$jscomp$78_status$jscomp$11_vec__71986$$, 0, null);
  $G__72017_73040_G__72026_map__71989_map__71989__$1_map__72002__$1_props__41636__auto__$jscomp$78_status$jscomp$11_vec__71986$$ = $APP.$cljs$core$__destructure_map$$($G__72017_73040_G__72026_map__71989_map__71989__$1_map__72002__$1_props__41636__auto__$jscomp$78_status$jscomp$11_vec__71986$$);
  $G__72018_73041_entry$jscomp$29_maybe_ref__41637__auto__$jscomp$78$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__72017_73040_G__72026_map__71989_map__71989__$1_map__72002__$1_props__41636__auto__$jscomp$78_status$jscomp$11_vec__71986$$, $cljs$cst$866$entry$$);
  var $idx$jscomp$70$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__72017_73040_G__72026_map__71989_map__71989__$1_map__72002__$1_props__41636__auto__$jscomp$78_status$jscomp$11_vec__71986$$, $APP.$cljs$cst$440$idx$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__72017_73040_G__72026_map__71989_map__71989__$1_map__72002__$1_props__41636__auto__$jscomp$78_status$jscomp$11_vec__71986$$ = $APP.$cljs$core$__destructure_map$$($G__72018_73041_entry$jscomp$29_maybe_ref__41637__auto__$jscomp$78$$);
  var $title$jscomp$26$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__72017_73040_G__72026_map__71989_map__71989__$1_map__72002__$1_props__41636__auto__$jscomp$78_status$jscomp$11_vec__71986$$, $APP.$cljs$cst$378$title$$), $due$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__72017_73040_G__72026_map__71989_map__71989__$1_map__72002__$1_props__41636__auto__$jscomp$78_status$jscomp$11_vec__71986$$, $cljs$cst$798$due$$), $amount$jscomp$1$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__72017_73040_G__72026_map__71989_map__71989__$1_map__72002__$1_props__41636__auto__$jscomp$78_status$jscomp$11_vec__71986$$, 
  $cljs$cst$775$amount$$), $priority$jscomp$1$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__72017_73040_G__72026_map__71989_map__71989__$1_map__72002__$1_props__41636__auto__$jscomp$78_status$jscomp$11_vec__71986$$, $cljs$cst$799$priority$$);
  $G__72017_73040_G__72026_map__71989_map__71989__$1_map__72002__$1_props__41636__auto__$jscomp$78_status$jscomp$11_vec__71986$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__72017_73040_G__72026_map__71989_map__71989__$1_map__72002__$1_props__41636__auto__$jscomp$78_status$jscomp$11_vec__71986$$, $APP.$cljs$cst$12$status$$);
  var $node_ref$$ = $APP.$helix$hooks$use_ref$$(null), $paid_QMARK_$jscomp$2$$ = $APP.$cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$($APP.$cljs$core$keyword$$.$cljs$core$IFn$_invoke$arity$1$($G__72017_73040_G__72026_map__71989_map__71989__$1_map__72002__$1_props__41636__auto__$jscomp$78_status$jscomp$11_vec__71986$$), $cljs$cst$801$paid$$), $st$jscomp$2$$ = $amp$pages$budget$cash_flow$status_classes$$($APP.$cljs$core$keyword$$.$cljs$core$IFn$_invoke$arity$1$($G__72017_73040_G__72026_map__71989_map__71989__$1_map__72002__$1_props__41636__auto__$jscomp$78_status$jscomp$11_vec__71986$$));
  $G__72017_73040_G__72026_map__71989_map__71989__$1_map__72002__$1_props__41636__auto__$jscomp$78_status$jscomp$11_vec__71986$$ = $APP.$helix$hooks$wrap_fx$$(function() {
    return $APP.$cljs$core$truth_$$($APP.$cljs$core$_deref$$($node_ref$$)) ? $APP.$module$node_modules$gsap$dist$gsap$$.gsap.fromTo($APP.$cljs$core$_deref$$($node_ref$$), {opacity:0, x:-20}, {opacity:1, x:0, duration:0.4, delay:$idx$jscomp$70$$ * 0.06, ease:"power2.out"}) : null;
  });
  $G__72018_73041_entry$jscomp$29_maybe_ref__41637__auto__$jscomp$78$$ = [];
  $APP.$helix$hooks$raw_use_effect$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$hooks$raw_use_effect$$.$cljs$core$IFn$_invoke$arity$2$($G__72017_73040_G__72026_map__71989_map__71989__$1_map__72002__$1_props__41636__auto__$jscomp$78_status$jscomp$11_vec__71986$$, $G__72018_73041_entry$jscomp$29_maybe_ref__41637__auto__$jscomp$78$$) : $APP.$helix$hooks$raw_use_effect$$.call(null, $G__72017_73040_G__72026_map__71989_map__71989__$1_map__72002__$1_props__41636__auto__$jscomp$78_status$jscomp$11_vec__71986$$, 
  $G__72018_73041_entry$jscomp$29_maybe_ref__41637__auto__$jscomp$78$$);
  $G__72017_73040_G__72026_map__71989_map__71989__$1_map__72002__$1_props__41636__auto__$jscomp$78_status$jscomp$11_vec__71986$$ = function() {
    return {ref:$node_ref$$, className:$APP.$helix$impl$props$normalize_class$$("relative flex items-stretch opacity-0 " + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($paid_QMARK_$jscomp$2$$ ? "opacity-50" : null)), children:[function() {
      var $G__72036$$ = function() {
        return {className:"relative flex flex-col items-center", style:{width:$APP.$helix$impl$props$__GT_js$$("28px"), minWidth:$APP.$helix$impl$props$__GT_js$$("28px")}, children:[function() {
          var $G__72046$$ = {className:$APP.$helix$impl$props$normalize_class$$("mt-4 h-2.5 w-2.5 rounded-full border-2 flex-shrink-0 " + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($amp$pages$budget$cash_flow$priority_dot_classes$$($APP.$cljs$core$keyword$$.$cljs$core$IFn$_invoke$arity$1$($priority$jscomp$1$$), $paid_QMARK_$jscomp$2$$)))};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__72046$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__72046$$);
        }(), function() {
          var $G__72060$$ = {className:"flex-1 border-l border-dashed border-slate-300 dark:border-slate-700"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__72060$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__72060$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__72036$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__72036$$);
    }(), function() {
      var $G__72070_G__72076$jscomp$inline_3874$$ = {className:"w-4 border-t border-dashed border-slate-300 dark:border-slate-600", style:{marginTop:$APP.$helix$impl$props$__GT_js$$("1px")}};
      $G__72070_G__72076$jscomp$inline_3874$$ = {className:"flex items-start pt-[18px]", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__72070_G__72076$jscomp$inline_3874$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__72070_G__72076$jscomp$inline_3874$$)};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__72070_G__72076$jscomp$inline_3874$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__72070_G__72076$jscomp$inline_3874$$);
    }(), function() {
      var $G__72102$$ = function() {
        return {className:"flex-1 pb-5 pt-1 pl-1", children:[function() {
          var $G__72124$$ = function() {
            return {className:"flex items-center gap-2 mb-1", children:[function() {
              var $G__72138_JSCompiler_temp_const$jscomp$3017$$ = $APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-mono", "text-[11px]", "text-slate-600  dark:text-slate-400"])));
              var $JSCompiler_inline_result$jscomp$3018_d$jscomp$inline_3339$$ = $amp$pages$budget$cash_flow$parse_date$$($due$$);
              $JSCompiler_inline_result$jscomp$3018_d$jscomp$inline_3339$$ = "" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($JSCompiler_inline_result$jscomp$3018_d$jscomp$inline_3339$$.toLocaleString("en-US", {month:"short"})) + " " + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($JSCompiler_inline_result$jscomp$3018_d$jscomp$inline_3339$$.getDate());
              $G__72138_JSCompiler_temp_const$jscomp$3017$$ = {className:$G__72138_JSCompiler_temp_const$jscomp$3017$$, children:$JSCompiler_inline_result$jscomp$3018_d$jscomp$inline_3339$$};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__72138_JSCompiler_temp_const$jscomp$3017$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__72138_JSCompiler_temp_const$jscomp$3017$$);
            }(), function() {
              var $G__72152$$ = {className:$APP.$helix$impl$props$normalize_class$$("px-1.5 py-px text-[9px] font-bold uppercase tracking-widest font-mono " + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($amp$pages$budget$cash_flow$priority_tag_bg$$($APP.$cljs$core$keyword$$.$cljs$core$IFn$_invoke$arity$1$($priority$jscomp$1$$))) + " " + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($amp$pages$budget$cash_flow$priority_tag_text$$($APP.$cljs$core$keyword$$.$cljs$core$IFn$_invoke$arity$1$($priority$jscomp$1$$)))), 
              children:$amp$pages$budget$cash_flow$priority_label$$($APP.$cljs$core$keyword$$.$cljs$core$IFn$_invoke$arity$1$($priority$jscomp$1$$))};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__72152$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__72152$$);
            }(), function() {
              var $G__72178$$ = {className:$APP.$helix$impl$props$normalize_class$$("px-1.5 py-px text-[9px] font-bold uppercase tracking-widest font-mono " + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($cljs$cst$865$dot$$.$cljs$core$IFn$_invoke$arity$1$($st$jscomp$2$$)) + " " + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($APP.$cljs$cst$403$text$$.$cljs$core$IFn$_invoke$arity$1$($st$jscomp$2$$))), children:$cljs$cst$783$label$$.$cljs$core$IFn$_invoke$arity$1$($st$jscomp$2$$)};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__72178$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__72178$$);
            }()]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__72124$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__72124$$);
        }(), function() {
          var $G__72196$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-sm leading-snug " + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($paid_QMARK_$jscomp$2$$ ? "" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$("text-slate-600  dark:text-slate-400") + " line-through" : "text-slate-700  dark:text-slate-300")), children:$title$jscomp$26$$};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__72196$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__72196$$);
        }(), function() {
          var $G__72214$$ = {className:$APP.$helix$impl$props$normalize_class$$("mt-0.5 font-mono text-base font-semibold tracking-tight " + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($amp$pages$budget$cash_flow$priority_amount_class$$($APP.$cljs$core$keyword$$.$cljs$core$IFn$_invoke$arity$1$($priority$jscomp$1$$), $paid_QMARK_$jscomp$2$$))), children:$amp$pages$budget$cash_flow$format_currency$$($amount$jscomp$1$$)};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__72214$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__72214$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__72102$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__72102$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__72017_73040_G__72026_map__71989_map__71989__$1_map__72002__$1_props__41636__auto__$jscomp$78_status$jscomp$11_vec__71986$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__72017_73040_G__72026_map__71989_map__71989__$1_map__72002__$1_props__41636__auto__$jscomp$78_status$jscomp$11_vec__71986$$);
};
$amp$pages$budget$cash_flow$now_marker$$ = function($G__72321_73042_G__72342_props__41636__auto__$jscomp$79$$) {
  $APP.$helix$core$extract_cljs_props$$($G__72321_73042_G__72342_props__41636__auto__$jscomp$79$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $ref$jscomp$21$$ = $APP.$helix$hooks$use_ref$$(null);
  $G__72321_73042_G__72342_props__41636__auto__$jscomp$79$$ = $APP.$helix$hooks$wrap_fx$$(function() {
    return $APP.$cljs$core$truth_$$($APP.$cljs$core$_deref$$($ref$jscomp$21$$)) ? $APP.$module$node_modules$gsap$dist$gsap$$.gsap.fromTo($APP.$cljs$core$_deref$$($ref$jscomp$21$$), {opacity:0, scaleX:0}, {opacity:1, scaleX:1, duration:0.6, delay:0.2, ease:"power3.out"}) : null;
  });
  var $G__72322_73043$$ = [];
  $APP.$helix$hooks$raw_use_effect$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$hooks$raw_use_effect$$.$cljs$core$IFn$_invoke$arity$2$($G__72321_73042_G__72342_props__41636__auto__$jscomp$79$$, $G__72322_73043$$) : $APP.$helix$hooks$raw_use_effect$$.call(null, $G__72321_73042_G__72342_props__41636__auto__$jscomp$79$$, $G__72322_73043$$);
  $G__72321_73042_G__72342_props__41636__auto__$jscomp$79$$ = function() {
    return {ref:$ref$jscomp$21$$, className:"flex items-center gap-2 py-3 origin-left opacity-0", children:[function() {
      var $G__72352$$ = function() {
        return {className:"relative flex items-center justify-center", style:{width:$APP.$helix$impl$props$__GT_js$$("28px"), minWidth:$APP.$helix$impl$props$__GT_js$$("28px")}, children:[function() {
          var $G__72368$$ = {className:"absolute h-5 w-5 animate-ping rounded-full bg-rose-400/30"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__72368$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__72368$$);
        }(), function() {
          var $G__72380$$ = {className:"h-2.5 w-2.5 rounded-full bg-rose-400"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__72380$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__72380$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__72352$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__72352$$);
    }(), function() {
      var $G__72396$$ = {className:"flex-1 h-px bg-rose-400/50"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__72396$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__72396$$);
    }(), function() {
      var $G__72406$$ = {className:"font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-rose-400 pr-1", children:"now"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__72406$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__72406$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__72321_73042_G__72342_props__41636__auto__$jscomp$79$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__72321_73042_G__72342_props__41636__auto__$jscomp$79$$);
};
$amp$pages$budget$cash_flow$month_header$$ = function($G__72469_73044_G__72477_map__72466_map__72466__$1_props__41636__auto__$jscomp$80_vec__72463$$, $G__72470_73045_maybe_ref__41637__auto__$jscomp$80$$) {
  $G__72469_73044_G__72477_map__72466_map__72466__$1_props__41636__auto__$jscomp$80_vec__72463$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__72469_73044_G__72477_map__72466_map__72466__$1_props__41636__auto__$jscomp$80_vec__72463$$), $G__72470_73045_maybe_ref__41637__auto__$jscomp$80$$], null);
  $G__72469_73044_G__72477_map__72466_map__72466__$1_props__41636__auto__$jscomp$80_vec__72463$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__72469_73044_G__72477_map__72466_map__72466__$1_props__41636__auto__$jscomp$80_vec__72463$$, 0, null);
  $G__72469_73044_G__72477_map__72466_map__72466__$1_props__41636__auto__$jscomp$80_vec__72463$$ = $APP.$cljs$core$__destructure_map$$($G__72469_73044_G__72477_map__72466_map__72466__$1_props__41636__auto__$jscomp$80_vec__72463$$);
  var $label$jscomp$10$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__72469_73044_G__72477_map__72466_map__72466__$1_props__41636__auto__$jscomp$80_vec__72463$$, $cljs$cst$783$label$$), $idx$jscomp$71$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__72469_73044_G__72477_map__72466_map__72466__$1_props__41636__auto__$jscomp$80_vec__72463$$, $APP.$cljs$cst$440$idx$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $ref$jscomp$22$$ = $APP.$helix$hooks$use_ref$$(null);
  $G__72469_73044_G__72477_map__72466_map__72466__$1_props__41636__auto__$jscomp$80_vec__72463$$ = $APP.$helix$hooks$wrap_fx$$(function() {
    return $APP.$cljs$core$truth_$$($APP.$cljs$core$_deref$$($ref$jscomp$22$$)) ? $APP.$module$node_modules$gsap$dist$gsap$$.gsap.fromTo($APP.$cljs$core$_deref$$($ref$jscomp$22$$), {opacity:0, y:8}, {opacity:1, y:0, duration:0.35, delay:0.1 + $idx$jscomp$71$$ * 0.05, ease:"power2.out"}) : null;
  });
  $G__72470_73045_maybe_ref__41637__auto__$jscomp$80$$ = [];
  $APP.$helix$hooks$raw_use_effect$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$hooks$raw_use_effect$$.$cljs$core$IFn$_invoke$arity$2$($G__72469_73044_G__72477_map__72466_map__72466__$1_props__41636__auto__$jscomp$80_vec__72463$$, $G__72470_73045_maybe_ref__41637__auto__$jscomp$80$$) : $APP.$helix$hooks$raw_use_effect$$.call(null, $G__72469_73044_G__72477_map__72466_map__72466__$1_props__41636__auto__$jscomp$80_vec__72463$$, $G__72470_73045_maybe_ref__41637__auto__$jscomp$80$$);
  $G__72469_73044_G__72477_map__72466_map__72466__$1_props__41636__auto__$jscomp$80_vec__72463$$ = function() {
    return {ref:$ref$jscomp$22$$, className:"flex items-center gap-3 pt-8 pb-2 opacity-0", children:[function() {
      var $G__72485$$ = {className:"h-px w-8 bg-pink-500/70"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__72485$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__72485$$);
    }(), function() {
      var $G__72494$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$("font-mono;text-[10px];font-bold;uppercase;tracking-[0.25em];text-slate-600  dark:text-slate-400".split(";")))), children:$label$jscomp$10$$};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__72494$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__72494$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__72469_73044_G__72477_map__72466_map__72466__$1_props__41636__auto__$jscomp$80_vec__72463$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__72469_73044_G__72477_map__72466_map__72466__$1_props__41636__auto__$jscomp$80_vec__72463$$);
};
$amp$pages$budget$cash_flow$month_summary_row$$ = function($G__72605_73046_G__72622_map__72595_map__72595__$1_map__72600__$1_props__41636__auto__$jscomp$81_vec__72592$$, $G__72606_73047_all_paid$jscomp$2_maybe_ref__41637__auto__$jscomp$81_rollup$$) {
  $G__72605_73046_G__72622_map__72595_map__72595__$1_map__72600__$1_props__41636__auto__$jscomp$81_vec__72592$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__72605_73046_G__72622_map__72595_map__72595__$1_map__72600__$1_props__41636__auto__$jscomp$81_vec__72592$$), $G__72606_73047_all_paid$jscomp$2_maybe_ref__41637__auto__$jscomp$81_rollup$$], null);
  $G__72605_73046_G__72622_map__72595_map__72595__$1_map__72600__$1_props__41636__auto__$jscomp$81_vec__72592$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__72605_73046_G__72622_map__72595_map__72595__$1_map__72600__$1_props__41636__auto__$jscomp$81_vec__72592$$, 0, null);
  $G__72605_73046_G__72622_map__72595_map__72595__$1_map__72600__$1_props__41636__auto__$jscomp$81_vec__72592$$ = $APP.$cljs$core$__destructure_map$$($G__72605_73046_G__72622_map__72595_map__72595__$1_map__72600__$1_props__41636__auto__$jscomp$81_vec__72592$$);
  $G__72606_73047_all_paid$jscomp$2_maybe_ref__41637__auto__$jscomp$81_rollup$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__72605_73046_G__72622_map__72595_map__72595__$1_map__72600__$1_props__41636__auto__$jscomp$81_vec__72592$$, $cljs$cst$867$rollup$$);
  var $idx$jscomp$72$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__72605_73046_G__72622_map__72595_map__72595__$1_map__72600__$1_props__41636__auto__$jscomp$81_vec__72592$$, $APP.$cljs$cst$440$idx$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__72605_73046_G__72622_map__72595_map__72595__$1_map__72600__$1_props__41636__auto__$jscomp$81_vec__72592$$ = $APP.$cljs$core$__destructure_map$$($G__72606_73047_all_paid$jscomp$2_maybe_ref__41637__auto__$jscomp$81_rollup$$);
  var $label$jscomp$11$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__72605_73046_G__72622_map__72595_map__72595__$1_map__72600__$1_props__41636__auto__$jscomp$81_vec__72592$$, $cljs$cst$783$label$$), $total$jscomp$6$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__72605_73046_G__72622_map__72595_map__72595__$1_map__72600__$1_props__41636__auto__$jscomp$81_vec__72592$$, $APP.$cljs$cst$716$total$$), $paid$jscomp$1$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__72605_73046_G__72622_map__72595_map__72595__$1_map__72600__$1_props__41636__auto__$jscomp$81_vec__72592$$, 
  $cljs$cst$801$paid$$), $pending$jscomp$2$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__72605_73046_G__72622_map__72595_map__72595__$1_map__72600__$1_props__41636__auto__$jscomp$81_vec__72592$$, $APP.$cljs$cst$14$pending$$), $n_items$jscomp$1$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__72605_73046_G__72622_map__72595_map__72595__$1_map__72600__$1_props__41636__auto__$jscomp$81_vec__72592$$, $cljs$cst$863$n_items$$), $n_crit$jscomp$2$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__72605_73046_G__72622_map__72595_map__72595__$1_map__72600__$1_props__41636__auto__$jscomp$81_vec__72592$$, 
  $cljs$cst$861$n_crit$$);
  $G__72606_73047_all_paid$jscomp$2_maybe_ref__41637__auto__$jscomp$81_rollup$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__72605_73046_G__72622_map__72595_map__72595__$1_map__72600__$1_props__41636__auto__$jscomp$81_vec__72592$$, $cljs$cst$859$all_paid$$);
  var $has_now$jscomp$1$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__72605_73046_G__72622_map__72595_map__72595__$1_map__72600__$1_props__41636__auto__$jscomp$81_vec__72592$$, $cljs$cst$864$has_now$$), $ref$jscomp$23$$ = $APP.$helix$hooks$use_ref$$(null), $cls$jscomp$2$$ = $APP.$cljs$core$truth_$$($G__72606_73047_all_paid$jscomp$2_maybe_ref__41637__auto__$jscomp$81_rollup$$) ? new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$404$border$$, "border-emerald-500 dark:border-emerald-300", 
  $cljs$cst$858$fill$$, "bg-transparent", $APP.$cljs$cst$403$text$$, "text-emerald-600 dark:text-emerald-300"], null) : $n_crit$jscomp$2$$ > 0 ? new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$404$border$$, "border-pink-600 dark:border-pink-300", $cljs$cst$858$fill$$, "bg-pink-600 dark:bg-pink-300", $APP.$cljs$cst$403$text$$, "text-pink-600 dark:text-pink-300"], null) : new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$404$border$$, "border-indigo-500 dark:border-indigo-300", 
  $cljs$cst$858$fill$$, "bg-indigo-500 dark:bg-indigo-300", $APP.$cljs$cst$403$text$$, "text-indigo-600 dark:text-indigo-300"], null);
  $G__72605_73046_G__72622_map__72595_map__72595__$1_map__72600__$1_props__41636__auto__$jscomp$81_vec__72592$$ = $APP.$helix$hooks$wrap_fx$$(function() {
    return $APP.$cljs$core$truth_$$($APP.$cljs$core$_deref$$($ref$jscomp$23$$)) ? $APP.$module$node_modules$gsap$dist$gsap$$.gsap.fromTo($APP.$cljs$core$_deref$$($ref$jscomp$23$$), {opacity:0, x:-16}, {opacity:1, x:0, duration:0.35, delay:$idx$jscomp$72$$ * 0.05, ease:"power2.out"}) : null;
  });
  $G__72606_73047_all_paid$jscomp$2_maybe_ref__41637__auto__$jscomp$81_rollup$$ = [];
  $APP.$helix$hooks$raw_use_effect$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$hooks$raw_use_effect$$.$cljs$core$IFn$_invoke$arity$2$($G__72605_73046_G__72622_map__72595_map__72595__$1_map__72600__$1_props__41636__auto__$jscomp$81_vec__72592$$, $G__72606_73047_all_paid$jscomp$2_maybe_ref__41637__auto__$jscomp$81_rollup$$) : $APP.$helix$hooks$raw_use_effect$$.call(null, $G__72605_73046_G__72622_map__72595_map__72595__$1_map__72600__$1_props__41636__auto__$jscomp$81_vec__72592$$, $G__72606_73047_all_paid$jscomp$2_maybe_ref__41637__auto__$jscomp$81_rollup$$);
  $G__72605_73046_G__72622_map__72595_map__72595__$1_map__72600__$1_props__41636__auto__$jscomp$81_vec__72592$$ = function() {
    return {ref:$ref$jscomp$23$$, className:"relative flex items-stretch opacity-0", children:[function() {
      var $G__72632$$ = function() {
        return {className:"relative flex flex-col items-center", style:{width:$APP.$helix$impl$props$__GT_js$$("28px"), minWidth:$APP.$helix$impl$props$__GT_js$$("28px")}, children:[function() {
          var $G__72639$$ = {className:$APP.$helix$impl$props$normalize_class$$("mt-4 h-2.5 w-2.5 rounded-full border-2 flex-shrink-0 " + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($APP.$cljs$cst$404$border$$.$cljs$core$IFn$_invoke$arity$1$($cls$jscomp$2$$)) + " " + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($cljs$cst$858$fill$$.$cljs$core$IFn$_invoke$arity$1$($cls$jscomp$2$$)))};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__72639$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__72639$$);
        }(), function() {
          var $G__72643$$ = {className:"flex-1 border-l border-dashed border-slate-300 dark:border-slate-700"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__72643$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__72643$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__72632$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__72632$$);
    }(), function() {
      var $G__72647_G__72651$jscomp$inline_3877$$ = {className:"w-4 border-t border-dashed border-slate-300 dark:border-slate-600", style:{marginTop:$APP.$helix$impl$props$__GT_js$$("1px")}};
      $G__72647_G__72651$jscomp$inline_3877$$ = {className:"flex items-start pt-[18px]", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__72647_G__72651$jscomp$inline_3877$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__72647_G__72651$jscomp$inline_3877$$)};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__72647_G__72651$jscomp$inline_3877$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__72647_G__72651$jscomp$inline_3877$$);
    }(), function() {
      var $G__72657$$ = function() {
        return {className:"flex-1 pb-4 pt-1 pl-1", children:[function() {
          var $G__72662$$ = function() {
            return {className:"flex items-center gap-2 mb-1", children:[function() {
              var $G__72666$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$("font-mono;text-xs;font-bold;uppercase;tracking-wider;text-slate-900  dark:text-slate-100".split(";")))), children:$label$jscomp$11$$};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__72666$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__72666$$);
            }(), function() {
              var $G__72670$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-mono", "text-[10px]", "text-slate-600  dark:text-slate-400"]))), children:"" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($n_items$jscomp$1$$) + " items"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__72670$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__72670$$);
            }(), $APP.$cljs$core$truth_$$($has_now$jscomp$1$$) ? function() {
              var $G__72674$$ = {className:"px-1.5 py-px text-[9px] font-bold uppercase tracking-widest font-mono bg-emerald-500/15 text-emerald-600 dark:bg-emerald-300/15 dark:text-emerald-300", children:"NOW"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__72674$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__72674$$);
            }() : null, $n_crit$jscomp$2$$ > 0 ? function() {
              var $G__72678$$ = {className:"px-1.5 py-px text-[9px] font-bold uppercase tracking-widest font-mono bg-pink-500/15 text-pink-600 dark:text-pink-300", children:"" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($n_crit$jscomp$2$$) + " crit"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__72678$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__72678$$);
            }() : null]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__72662$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__72662$$);
        }(), function() {
          var $G__72682$$ = function() {
            return {className:"flex items-baseline gap-3", children:[function() {
              var $G__72686$$ = {className:$APP.$helix$impl$props$normalize_class$$("font-mono text-lg font-bold tracking-tight " + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($APP.$cljs$cst$403$text$$.$cljs$core$IFn$_invoke$arity$1$($cls$jscomp$2$$))), children:$amp$pages$budget$cash_flow$format_currency$$($total$jscomp$6$$)};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__72686$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__72686$$);
            }(), $paid$jscomp$1$$ > 0 ? function() {
              var $G__72690$$ = {className:"font-mono text-[11px] text-emerald-600/60 dark:text-emerald-300/60", children:"" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($amp$pages$budget$cash_flow$format_currency$$($paid$jscomp$1$$)) + " COST, PAID"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__72690$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__72690$$);
            }() : null, $pending$jscomp$2$$ > 0 ? function() {
              var $G__72694$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-mono", "text-[11px]", "text-slate-600  dark:text-slate-400"]))), children:"" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($amp$pages$budget$cash_flow$format_currency$$($pending$jscomp$2$$)) + " due"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__72694$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__72694$$);
            }() : null]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__72682$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__72682$$);
        }(), function() {
          var $G__72699_G__72707$jscomp$inline_3880$$ = {className:"absolute left-0 top-0 h-px bg-emerald-500/50 dark:bg-emerald-300/50", style:{width:$APP.$helix$impl$props$__GT_js$$("" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($total$jscomp$6$$ > 0 ? Math.round($paid$jscomp$1$$ / $total$jscomp$6$$ * 100) : 0) + "%")}};
          $G__72699_G__72707$jscomp$inline_3880$$ = {className:"mt-1.5 h-px w-full bg-slate-200 dark:bg-slate-800 relative", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__72699_G__72707$jscomp$inline_3880$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__72699_G__72707$jscomp$inline_3880$$)};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__72699_G__72707$jscomp$inline_3880$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__72699_G__72707$jscomp$inline_3880$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__72657$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__72657$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__72605_73046_G__72622_map__72595_map__72595__$1_map__72600__$1_props__41636__auto__$jscomp$81_vec__72592$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__72605_73046_G__72622_map__72595_map__72595__$1_map__72600__$1_props__41636__auto__$jscomp$81_vec__72592$$);
};
$amp$pages$budget$cash_flow$view_toggle$$ = function($G__72720_map__72718_map__72718__$1_props__41636__auto__$jscomp$82_vec__72715$$, $maybe_ref__41637__auto__$jscomp$82$$) {
  $G__72720_map__72718_map__72718__$1_props__41636__auto__$jscomp$82_vec__72715$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__72720_map__72718_map__72718__$1_props__41636__auto__$jscomp$82_vec__72715$$), $maybe_ref__41637__auto__$jscomp$82$$], null);
  $G__72720_map__72718_map__72718__$1_props__41636__auto__$jscomp$82_vec__72715$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__72720_map__72718_map__72718__$1_props__41636__auto__$jscomp$82_vec__72715$$, 0, null);
  $G__72720_map__72718_map__72718__$1_props__41636__auto__$jscomp$82_vec__72715$$ = $APP.$cljs$core$__destructure_map$$($G__72720_map__72718_map__72718__$1_props__41636__auto__$jscomp$82_vec__72715$$);
  var $expanded_QMARK_$jscomp$2$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__72720_map__72718_map__72718__$1_props__41636__auto__$jscomp$82_vec__72715$$, $cljs$cst$868$expanded_QMARK_$$), $on_toggle$jscomp$1$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__72720_map__72718_map__72718__$1_props__41636__auto__$jscomp$82_vec__72715$$, $APP.$cljs$cst$388$on_toggle$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__72720_map__72718_map__72718__$1_props__41636__auto__$jscomp$82_vec__72715$$ = function() {
    return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$("mb-4 flex items-center gap-2;font-mono;text-[10px];font-bold;uppercase;tracking-[0.25em];text-slate-600  dark:text-slate-400;transition-colors hover:text-pink-600 dark:hover:text-pink-300".split(";")))), onClick:$on_toggle$jscomp$1$$, children:[function() {
      var $G__72730$$ = {className:"h-px w-4 bg-pink-500/50"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__72730$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__72730$$);
    }(), $APP.$cljs$core$truth_$$($expanded_QMARK_$jscomp$2$$) ? "Summary" : "Expand", function() {
      var $G__72734$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-400  dark:text-slate-600"), children:$APP.$cljs$core$truth_$$($expanded_QMARK_$jscomp$2$$) ? "▲" : "▼"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__72734$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__72734$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("button", $G__72720_map__72718_map__72718__$1_props__41636__auto__$jscomp$82_vec__72715$$) : $APP.$helix$core$jsxs$$.call(null, "button", $G__72720_map__72718_map__72718__$1_props__41636__auto__$jscomp$82_vec__72715$$);
};
$amp$pages$budget$cash_flow$summary_header$$ = function($G__72771_73048_G__72774_map__72770_map__72770__$1_props__41636__auto__$jscomp$83_vec__72767$$, $G__72772_73049_entries$jscomp$6_maybe_ref__41637__auto__$jscomp$83$$) {
  $G__72771_73048_G__72774_map__72770_map__72770__$1_props__41636__auto__$jscomp$83_vec__72767$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__72771_73048_G__72774_map__72770_map__72770__$1_props__41636__auto__$jscomp$83_vec__72767$$), $G__72772_73049_entries$jscomp$6_maybe_ref__41637__auto__$jscomp$83$$], null);
  $G__72771_73048_G__72774_map__72770_map__72770__$1_props__41636__auto__$jscomp$83_vec__72767$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__72771_73048_G__72774_map__72770_map__72770__$1_props__41636__auto__$jscomp$83_vec__72767$$, 0, null);
  $G__72771_73048_G__72774_map__72770_map__72770__$1_props__41636__auto__$jscomp$83_vec__72767$$ = $APP.$cljs$core$__destructure_map$$($G__72771_73048_G__72774_map__72770_map__72770__$1_props__41636__auto__$jscomp$83_vec__72767$$);
  $G__72772_73049_entries$jscomp$6_maybe_ref__41637__auto__$jscomp$83$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__72771_73048_G__72774_map__72770_map__72770__$1_props__41636__auto__$jscomp$83_vec__72767$$, $cljs$cst$860$entries$$);
  var $target_total$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__72771_73048_G__72774_map__72770_map__72770__$1_props__41636__auto__$jscomp$83_vec__72767$$, $cljs$cst$869$target_total$$), $funds_raised$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__72771_73048_G__72774_map__72770_map__72770__$1_props__41636__auto__$jscomp$83_vec__72767$$, $cljs$cst$795$funds_raised$$);
  $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__72771_73048_G__72774_map__72770_map__72770__$1_props__41636__auto__$jscomp$83_vec__72767$$, $cljs$cst$794$debt_raised$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $paid_sum$$ = $APP.$cljs$core$reduce$cljs$0core$0IFn$0_invoke$0arity$03$$($APP.$cljs$core$_PLUS_$$, 0, $APP.$cljs$core$map$$.$cljs$core$IFn$_invoke$arity$2$($cljs$cst$775$amount$$, $APP.$cljs$core$filter$cljs$0core$0IFn$0_invoke$0arity$02$$(function($p1__72750_SHARP_$$) {
    return $APP.$cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$($cljs$cst$801$paid$$, $APP.$cljs$core$keyword$$.$cljs$core$IFn$_invoke$arity$1$($APP.$cljs$cst$12$status$$.$cljs$core$IFn$_invoke$arity$1$($p1__72750_SHARP_$$)));
  }, $G__72772_73049_entries$jscomp$6_maybe_ref__41637__auto__$jscomp$83$$))), $pending_sum$$ = $target_total$$ - $paid_sum$$, $critical_sum$$ = $APP.$cljs$core$reduce$cljs$0core$0IFn$0_invoke$0arity$03$$($APP.$cljs$core$_PLUS_$$, 0, $APP.$cljs$core$map$$.$cljs$core$IFn$_invoke$arity$2$($cljs$cst$775$amount$$, $APP.$cljs$core$filter$cljs$0core$0IFn$0_invoke$0arity$02$$(function($p1__72753_SHARP_$$) {
    return $APP.$cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$($cljs$cst$819$critical$$, $APP.$cljs$core$keyword$$.$cljs$core$IFn$_invoke$arity$1$($cljs$cst$799$priority$$.$cljs$core$IFn$_invoke$arity$1$($p1__72753_SHARP_$$)));
  }, $G__72772_73049_entries$jscomp$6_maybe_ref__41637__auto__$jscomp$83$$))), $gap$$ = $target_total$$ - $funds_raised$$, $next_due$$ = function() {
    var $d$jscomp$153$$ = new Date();
    $d$jscomp$153$$.setDate($d$jscomp$153$$.getDate() + 7);
    return $d$jscomp$153$$;
  }(), $ref$jscomp$24$$ = $APP.$helix$hooks$use_ref$$(null);
  $G__72771_73048_G__72774_map__72770_map__72770__$1_props__41636__auto__$jscomp$83_vec__72767$$ = $APP.$helix$hooks$wrap_fx$$(function() {
    return $APP.$cljs$core$truth_$$($APP.$cljs$core$_deref$$($ref$jscomp$24$$)) ? $APP.$module$node_modules$gsap$dist$gsap$$.gsap.fromTo($APP.$cljs$core$_deref$$($ref$jscomp$24$$), {opacity:0, y:-12}, {opacity:1, y:0, duration:0.5, ease:"power2.out"}) : null;
  });
  $G__72772_73049_entries$jscomp$6_maybe_ref__41637__auto__$jscomp$83$$ = [];
  $APP.$helix$hooks$raw_use_effect$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$hooks$raw_use_effect$$.$cljs$core$IFn$_invoke$arity$2$($G__72771_73048_G__72774_map__72770_map__72770__$1_props__41636__auto__$jscomp$83_vec__72767$$, $G__72772_73049_entries$jscomp$6_maybe_ref__41637__auto__$jscomp$83$$) : $APP.$helix$hooks$raw_use_effect$$.call(null, $G__72771_73048_G__72774_map__72770_map__72770__$1_props__41636__auto__$jscomp$83_vec__72767$$, $G__72772_73049_entries$jscomp$6_maybe_ref__41637__auto__$jscomp$83$$);
  $G__72771_73048_G__72774_map__72770_map__72770__$1_props__41636__auto__$jscomp$83_vec__72767$$ = function() {
    return {ref:$ref$jscomp$24$$, className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["mb-4 pb-5 opacity-0", "border-b", "border-slate-200 dark:border-white/15"]))), children:[function() {
      var $G__72778$$ = function() {
        return {className:"mb-6 flex items-center gap-3", children:[function() {
          var $G__72782$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["w-10", "h-px bg-pink-500/70"])))};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__72782$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__72782$$);
        }(), function() {
          var $G__72786$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$eyebrow_highlight$$), children:"4. "};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__72786$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__72786$$);
        }(), function() {
          var $G__72790$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$eyebrow_midlight$$), children:"Cash Flow"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__72790$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__72790$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__72778$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__72778$$);
    }(), function() {
      var $G__72794$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-mono", "text-3xl", "font-extrabold", "tracking-tight", "text-slate-900  dark:text-slate-100"]))), children:$amp$pages$budget$cash_flow$format_currency$$($target_total$$)};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__72794$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__72794$$);
    }(), function() {
      var $G__72798$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-mono", "text-[11px] mt-0.5", "text-slate-600  dark:text-slate-400"]))), children:"target total"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__72798$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__72798$$);
    }(), function() {
      var $G__72802$$ = function() {
        return {className:"mt-4 grid grid-cols-2 gap-4", children:[function() {
          var $G__72806$$ = function() {
            return {className:"border-l-2 border-emerald-500/90 dark:border-emerald-300/90 pl-3", children:[function() {
              var $G__72810$$ = {className:"font-mono text-lg uppercase tracking-widest text-emerald-600/50 dark:text-emerald-300/50 mb-1", children:"Funds Raised"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__72810$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__72810$$);
            }(), function() {
              var $G__72814$$ = {className:"font-mono text-lg font-bold text-emerald-600 dark:text-emerald-300", children:$amp$pages$budget$cash_flow$format_currency$$($funds_raised$$)};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__72814$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__72814$$);
            }()]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__72806$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__72806$$);
        }(), function() {
          var $G__72818$$ = function() {
            return {className:"border-l-2 border-pink-500/90 dark:border-pink-300/90 pl-3", children:[function() {
              var $G__72822$$ = {className:"font-mono text-lg uppercase tracking-widest text-pink-600/50 dark:text-pink-300/50 mb-1", children:"Remaining"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__72822$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__72822$$);
            }(), function() {
              var $G__72826$$ = {className:"font-mono text-lg font-bold text-pink-600 dark:text-pink-300", children:$amp$pages$budget$cash_flow$format_currency$$($gap$$)};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__72826$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__72826$$);
            }()]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__72818$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__72818$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__72802$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__72802$$);
    }(), function() {
      var $G__72830$$ = function() {
        return {className:"mt-3 grid grid-cols-2 gap-4", children:[function() {
          var $G__72834$$ = function() {
            return {className:"border-l-2 border-emerald-500/20 dark:border-emerald-300/20 pl-3", children:[function() {
              var $G__72838$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$("font-mono;text-lg;uppercase;tracking-widest;text-slate-600  dark:text-slate-400;mb-1".split(";")))), children:"COST, PAID"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__72838$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__72838$$);
            }(), function() {
              var $G__72842$$ = {className:"font-mono text-lg font-bold text-emerald-600 dark:text-emerald-300", children:$amp$pages$budget$cash_flow$format_currency$$($paid_sum$$)};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__72842$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__72842$$);
            }()]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__72834$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__72834$$);
        }(), function() {
          var $G__72846$$ = function() {
            return {className:$APP.$helix$impl$props$normalize_class$$("border-l-2 pl-3 " + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$("border-slate-200 dark:border-white/15")), children:[function() {
              var $G__72850$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$("font-mono;text-lg;uppercase;tracking-widest;text-slate-600  dark:text-slate-400;mb-1".split(";")))), children:"Pending"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__72850$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__72850$$);
            }(), function() {
              var $G__72854$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-mono", "text-lg", "font-bold", " text-pink-600 dark:text-pink-300"]))), children:$amp$pages$budget$cash_flow$format_currency$$($pending_sum$$)};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__72854$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__72854$$);
            }()]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__72846$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__72846$$);
        }(), function() {
          var $G__72858$$ = function() {
            return {className:"border-l-2 border-pink-500/30 pl-3", children:[function() {
              var $G__72862$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$("font-mono;text-lg;uppercase;tracking-widest;text-slate-600  dark:text-slate-400;mb-1".split(";")))), children:"Critical"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__72862$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__72862$$);
            }(), function() {
              var $G__72866$$ = {className:"font-mono text-lg font-bold text-pink-600 dark:text-pink-300", children:$amp$pages$budget$cash_flow$format_currency$$($critical_sum$$)};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__72866$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__72866$$);
            }()]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__72858$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__72858$$);
        }(), function() {
          var $G__72870$$ = function() {
            return {className:"border-l-2 border-indigo-500/30 dark:border-indigo-400/30 pl-3", children:[function() {
              var $G__72874$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$("font-mono;text-lg;uppercase;tracking-widest;text-slate-600  dark:text-slate-400;mb-1".split(";")))), children:"Next Due"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__72874$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__72874$$);
            }(), function() {
              var $G__72878$$ = {className:"font-mono text-base font-bold text-indigo-600 dark:text-indigo-300", children:"" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($next_due$$.toLocaleString("en-US", {month:"short"})) + " " + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($next_due$$.getDate())};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__72878$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__72878$$);
            }()]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__72870$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__72870$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__72830$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__72830$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__72771_73048_G__72774_map__72770_map__72770__$1_props__41636__auto__$jscomp$83_vec__72767$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__72771_73048_G__72774_map__72770_map__72770__$1_props__41636__auto__$jscomp$83_vec__72767$$);
};
$amp$pages$budget$cash_flow$cash_flow$$ = function($G__72895_73050_G__72898_map__72888_map__72888__$1_props__41636__auto__$jscomp$84_vec__72885_vec__72889_vec__72892$$, $G__72896_73051_maybe_ref__41637__auto__$jscomp$84$$) {
  $G__72895_73050_G__72898_map__72888_map__72888__$1_props__41636__auto__$jscomp$84_vec__72885_vec__72889_vec__72892$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__72895_73050_G__72898_map__72888_map__72888__$1_props__41636__auto__$jscomp$84_vec__72885_vec__72889_vec__72892$$), $G__72896_73051_maybe_ref__41637__auto__$jscomp$84$$], null);
  $G__72895_73050_G__72898_map__72888_map__72888__$1_props__41636__auto__$jscomp$84_vec__72885_vec__72889_vec__72892$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__72895_73050_G__72898_map__72888_map__72888__$1_props__41636__auto__$jscomp$84_vec__72885_vec__72889_vec__72892$$, 0, null);
  $G__72895_73050_G__72898_map__72888_map__72888__$1_props__41636__auto__$jscomp$84_vec__72885_vec__72889_vec__72892$$ = $APP.$cljs$core$__destructure_map$$($G__72895_73050_G__72898_map__72888_map__72888__$1_props__41636__auto__$jscomp$84_vec__72885_vec__72889_vec__72892$$);
  var $id$jscomp$88$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__72895_73050_G__72898_map__72888_map__72888__$1_props__41636__auto__$jscomp$84_vec__72885_vec__72889_vec__72892$$, $APP.$cljs$cst$200$id$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__72895_73050_G__72898_map__72888_map__72888__$1_props__41636__auto__$jscomp$84_vec__72885_vec__72889_vec__72892$$ = $APP.$helix$hooks$use_state$$(null);
  var $error$jscomp$22$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__72895_73050_G__72898_map__72888_map__72888__$1_props__41636__auto__$jscomp$84_vec__72885_vec__72889_vec__72892$$, 0, null);
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__72895_73050_G__72898_map__72888_map__72888__$1_props__41636__auto__$jscomp$84_vec__72885_vec__72889_vec__72892$$, 1, null);
  $G__72895_73050_G__72898_map__72888_map__72888__$1_props__41636__auto__$jscomp$84_vec__72885_vec__72889_vec__72892$$ = $APP.$helix$hooks$use_state$$(!1);
  var $expanded_QMARK_$jscomp$3$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__72895_73050_G__72898_map__72888_map__72888__$1_props__41636__auto__$jscomp$84_vec__72885_vec__72889_vec__72892$$, 0, null), $set_expanded_BANG_$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__72895_73050_G__72898_map__72888_map__72888__$1_props__41636__auto__$jscomp$84_vec__72885_vec__72889_vec__72892$$, 1, null), $container_ref$jscomp$2$$ = $APP.$helix$hooks$use_ref$$(null);
  $G__72895_73050_G__72898_map__72888_map__72888__$1_props__41636__auto__$jscomp$84_vec__72885_vec__72889_vec__72892$$ = $APP.$helix$hooks$wrap_fx$$(function() {
    if ($APP.$cljs$core$truth_$$($APP.$cljs$core$truth_$$($amp$pages$budget$cash_flow$cashflow_data$$) ? $APP.$cljs$core$_deref$$($container_ref$jscomp$2$$) : $amp$pages$budget$cash_flow$cashflow_data$$)) {
      var $spine$$ = $APP.$cljs$core$_deref$$($container_ref$jscomp$2$$).querySelector(".cf-spine");
      return $APP.$cljs$core$truth_$$($spine$$) ? $APP.$module$node_modules$gsap$dist$gsap$$.gsap.fromTo($spine$$, {scaleY:0}, {scaleY:1, duration:0.8, delay:0.05, ease:"power3.out"}) : null;
    }
    return null;
  });
  $G__72896_73051_maybe_ref__41637__auto__$jscomp$84$$ = [$amp$pages$budget$cash_flow$cashflow_data$$];
  $APP.$helix$hooks$raw_use_effect$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$hooks$raw_use_effect$$.$cljs$core$IFn$_invoke$arity$2$($G__72895_73050_G__72898_map__72888_map__72888__$1_props__41636__auto__$jscomp$84_vec__72885_vec__72889_vec__72892$$, $G__72896_73051_maybe_ref__41637__auto__$jscomp$84$$) : $APP.$helix$hooks$raw_use_effect$$.call(null, $G__72895_73050_G__72898_map__72888_map__72888__$1_props__41636__auto__$jscomp$84_vec__72885_vec__72889_vec__72892$$, $G__72896_73051_maybe_ref__41637__auto__$jscomp$84$$);
  $G__72895_73050_G__72898_map__72888_map__72888__$1_props__41636__auto__$jscomp$84_vec__72885_vec__72889_vec__72892$$ = function() {
    return {id:$id$jscomp$88$$, ref:$container_ref$jscomp$2$$, className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["min-h-screen px-4 pb-8 pt-6 antialiased selection:bg-pink-500/30", "text-slate-900  dark:text-slate-100", "bg-white        dark:bg-slate-900"]))), children:$APP.$cljs$core$truth_$$($error$jscomp$22$$) ? function() {
      var $G__72902$$ = {className:"font-mono text-sm text-red-400 p-4", children:"err: " + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($error$jscomp$22$$)};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__72902$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__72902$$);
    }() : $amp$pages$budget$cash_flow$cashflow_data$$ == null ? function() {
      var $G__72906_G__72910$jscomp$inline_3728$$ = {className:"h-5 w-5 animate-spin border-2 border-slate-700 border-t-pink-400"};
      $G__72906_G__72910$jscomp$inline_3728$$ = {className:"flex items-center justify-center py-20", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__72906_G__72910$jscomp$inline_3728$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__72906_G__72910$jscomp$inline_3728$$)};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__72906_G__72910$jscomp$inline_3728$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__72906_G__72910$jscomp$inline_3728$$);
    }() : function() {
      var $G__72935_map__72913__$1_sorted$jscomp$1$$ = $APP.$cljs$core$__destructure_map$$($amp$pages$budget$cash_flow$cashflow_data$$), $cash_flow_model$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__72935_map__72913__$1_sorted$jscomp$1$$, $cljs$cst$796$cash_flow_model$$), $funds_raised$jscomp$1$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__72935_map__72913__$1_sorted$jscomp$1$$, $cljs$cst$795$funds_raised$$), $debt_raised$jscomp$1$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__72935_map__72913__$1_sorted$jscomp$1$$, 
      $cljs$cst$794$debt_raised$$), $target_total$jscomp$1$$ = $amp$pages$budget$table$sub_total_all_sections$$($amp$pages$budget$cost_breakdown$cost_data$$) + 66821, $entries_kw$$ = $APP.$cljs$core$map$$.$cljs$core$IFn$_invoke$arity$2$(function($p1__72882_SHARP_$$) {
        return $APP.$cljs$core$update$cljs$0core$0IFn$0_invoke$0arity$03$$($APP.$cljs$core$update$cljs$0core$0IFn$0_invoke$0arity$03$$($p1__72882_SHARP_$$, $cljs$cst$799$priority$$, $APP.$cljs$core$keyword$$), $APP.$cljs$cst$12$status$$, $APP.$cljs$core$keyword$$);
      }, $cash_flow_model$$);
      $G__72935_map__72913__$1_sorted$jscomp$1$$ = $APP.$cljs$core$sort_by$cljs$0core$0IFn$0_invoke$0arity$02$$($APP.$cljs$core$comp$$.$cljs$core$IFn$_invoke$arity$3$($amp$pages$budget$cash_flow$date__GT_ms$$, $amp$pages$budget$cash_flow$parse_date$$, $cljs$cst$798$due$$), $entries_kw$$);
      var $groups$jscomp$1$$ = $amp$pages$budget$cash_flow$group_by_month$$($G__72935_map__72913__$1_sorted$jscomp$1$$), $now_ms$$ = $amp$pages$budget$cash_flow$date__GT_ms$$(new Date()), $all_items$$ = function() {
        for (var $items$jscomp$9$$ = $APP.$cljs$core$atom$cljs$0core$0IFn$0_invoke$0arity$01$$($APP.$cljs$core$PersistentVector$EMPTY$$), $now_done$$ = $APP.$cljs$core$atom$cljs$0core$0IFn$0_invoke$0arity$01$$(!1), $counter$$ = $APP.$cljs$core$atom$cljs$0core$0IFn$0_invoke$0arity$01$$(0), $G__73088_seq__72914_73052_seq__72914_73086__$1_temp__5823__auto___73085$$ = $APP.$cljs$core$seq$$($groups$jscomp$1$$), $G__73089_G__73107_chunk__72915_73053_group_73092_seq__72930_73094_seq__72930_73105__$1_temp__5823__auto___73104__$1$$ = 
        null, $G__73090_G__73108_c__5673__auto___73087_chunk__72931_73095_count__72916_73054_entry_73111_month_label_73093$$ = 0, $G__73109_c__5673__auto___73106_count__72932_73096_entry_ms_73112_i__72917_73055$$ = 0;;) {
          if ($G__73109_c__5673__auto___73106_count__72932_73096_entry_ms_73112_i__72917_73055$$ < $G__73090_G__73108_c__5673__auto___73087_chunk__72931_73095_count__72916_73054_entry_73111_month_label_73093$$) {
            var $G__73071_group_73056_i__72933_73097_seq__72926_73058_seq__72926_73069__$1_temp__5823__auto___73068$$ = $G__73089_G__73107_chunk__72915_73053_group_73092_seq__72930_73094_seq__72930_73105__$1_temp__5823__auto___73104__$1$$.$cljs$core$IIndexed$_nth$arity$2$(null, $G__73109_c__5673__auto___73106_count__72932_73096_entry_ms_73112_i__72917_73055$$), $G__73072_chunk__72927_73059_entry_73075_entry_73098_month_label_73057$$ = $amp$pages$budget$cash_flow$parse_date$$($cljs$cst$798$due$$.$cljs$core$IFn$_invoke$arity$1$($APP.$cljs$core$first$$($G__73071_group_73056_i__72933_73097_seq__72926_73058_seq__72926_73069__$1_temp__5823__auto___73068$$))).toLocaleString("en-US", 
            {month:"long", year:"numeric"});
            $APP.$cljs$core$swap_BANG_$$.$cljs$core$IFn$_invoke$arity$3$($items$jscomp$9$$, $APP.$cljs$core$conj$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$25$type$$, $cljs$cst$870$month$$, $cljs$cst$783$label$$, $G__73072_chunk__72927_73059_entry_73075_entry_73098_month_label_73057$$, $APP.$cljs$cst$440$idx$$, $APP.$cljs$core$_deref$$($counter$$)], null));
            $APP.$cljs$core$swap_BANG_$$.$cljs$core$IFn$_invoke$arity$2$($counter$$, $APP.$cljs$core$inc$$);
            $G__73071_group_73056_i__72933_73097_seq__72926_73058_seq__72926_73069__$1_temp__5823__auto___73068$$ = $APP.$cljs$core$seq$$($G__73071_group_73056_i__72933_73097_seq__72926_73058_seq__72926_73069__$1_temp__5823__auto___73068$$);
            $G__73072_chunk__72927_73059_entry_73075_entry_73098_month_label_73057$$ = null;
            for (var $G__73073_c__5673__auto___73070_count__72928_73060_entry_ms_73076_entry_ms_73099$$ = 0, $i__72929_73061$$ = 0;;) {
              if ($i__72929_73061$$ < $G__73073_c__5673__auto___73070_count__72928_73060_entry_ms_73076_entry_ms_73099$$) {
                var $entry_73062$$ = $G__73072_chunk__72927_73059_entry_73075_entry_73098_month_label_73057$$.$cljs$core$IIndexed$_nth$arity$2$(null, $i__72929_73061$$), $entry_ms_73063$$ = $amp$pages$budget$cash_flow$date__GT_ms$$($amp$pages$budget$cash_flow$parse_date$$($cljs$cst$798$due$$.$cljs$core$IFn$_invoke$arity$1$($entry_73062$$)));
                $APP.$cljs$core$not$$($APP.$cljs$core$_deref$$($now_done$$)) && $entry_ms_73063$$ > $now_ms$$ && ($APP.$cljs$core$swap_BANG_$$.$cljs$core$IFn$_invoke$arity$3$($items$jscomp$9$$, $APP.$cljs$core$conj$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$25$type$$, $cljs$cst$871$now$$], null)), $APP.$cljs$core$reset_BANG_$$($now_done$$, !0));
                $APP.$cljs$core$swap_BANG_$$.$cljs$core$IFn$_invoke$arity$3$($items$jscomp$9$$, $APP.$cljs$core$conj$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$25$type$$, $cljs$cst$866$entry$$, $cljs$cst$866$entry$$, $entry_73062$$, $APP.$cljs$cst$440$idx$$, $APP.$cljs$core$_deref$$($counter$$), $cljs$cst$872$past_QMARK_$$, $APP.$cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$($cljs$cst$801$paid$$, $APP.$cljs$cst$12$status$$.$cljs$core$IFn$_invoke$arity$1$($entry_73062$$))], 
                null));
                $APP.$cljs$core$swap_BANG_$$.$cljs$core$IFn$_invoke$arity$2$($counter$$, $APP.$cljs$core$inc$$);
                $i__72929_73061$$ += 1;
              } else {
                if ($G__73071_group_73056_i__72933_73097_seq__72926_73058_seq__72926_73069__$1_temp__5823__auto___73068$$ = $APP.$cljs$core$seq$$($G__73071_group_73056_i__72933_73097_seq__72926_73058_seq__72926_73069__$1_temp__5823__auto___73068$$)) {
                  $APP.$cljs$core$chunked_seq_QMARK_$$($G__73071_group_73056_i__72933_73097_seq__72926_73058_seq__72926_73069__$1_temp__5823__auto___73068$$) ? ($G__73073_c__5673__auto___73070_count__72928_73060_entry_ms_73076_entry_ms_73099$$ = $APP.$cljs$core$_chunked_first$$($G__73071_group_73056_i__72933_73097_seq__72926_73058_seq__72926_73069__$1_temp__5823__auto___73068$$), $G__73071_group_73056_i__72933_73097_seq__72926_73058_seq__72926_73069__$1_temp__5823__auto___73068$$ = $APP.$cljs$core$_chunked_rest$$($G__73071_group_73056_i__72933_73097_seq__72926_73058_seq__72926_73069__$1_temp__5823__auto___73068$$), 
                  $G__73072_chunk__72927_73059_entry_73075_entry_73098_month_label_73057$$ = $G__73073_c__5673__auto___73070_count__72928_73060_entry_ms_73076_entry_ms_73099$$, $G__73073_c__5673__auto___73070_count__72928_73060_entry_ms_73076_entry_ms_73099$$ = $APP.$cljs$core$count$$($G__73073_c__5673__auto___73070_count__72928_73060_entry_ms_73076_entry_ms_73099$$)) : ($G__73072_chunk__72927_73059_entry_73075_entry_73098_month_label_73057$$ = $APP.$cljs$core$first$$($G__73071_group_73056_i__72933_73097_seq__72926_73058_seq__72926_73069__$1_temp__5823__auto___73068$$), 
                  $G__73073_c__5673__auto___73070_count__72928_73060_entry_ms_73076_entry_ms_73099$$ = $amp$pages$budget$cash_flow$date__GT_ms$$($amp$pages$budget$cash_flow$parse_date$$($cljs$cst$798$due$$.$cljs$core$IFn$_invoke$arity$1$($G__73072_chunk__72927_73059_entry_73075_entry_73098_month_label_73057$$))), $APP.$cljs$core$not$$($APP.$cljs$core$_deref$$($now_done$$)) && $G__73073_c__5673__auto___73070_count__72928_73060_entry_ms_73076_entry_ms_73099$$ > $now_ms$$ && ($APP.$cljs$core$swap_BANG_$$.$cljs$core$IFn$_invoke$arity$3$($items$jscomp$9$$, 
                  $APP.$cljs$core$conj$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$25$type$$, $cljs$cst$871$now$$], null)), $APP.$cljs$core$reset_BANG_$$($now_done$$, !0)), $APP.$cljs$core$swap_BANG_$$.$cljs$core$IFn$_invoke$arity$3$($items$jscomp$9$$, $APP.$cljs$core$conj$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$25$type$$, $cljs$cst$866$entry$$, $cljs$cst$866$entry$$, $G__73072_chunk__72927_73059_entry_73075_entry_73098_month_label_73057$$, $APP.$cljs$cst$440$idx$$, 
                  $APP.$cljs$core$_deref$$($counter$$), $cljs$cst$872$past_QMARK_$$, $APP.$cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$($cljs$cst$801$paid$$, $APP.$cljs$cst$12$status$$.$cljs$core$IFn$_invoke$arity$1$($G__73072_chunk__72927_73059_entry_73075_entry_73098_month_label_73057$$))], null)), $APP.$cljs$core$swap_BANG_$$.$cljs$core$IFn$_invoke$arity$2$($counter$$, $APP.$cljs$core$inc$$), $G__73071_group_73056_i__72933_73097_seq__72926_73058_seq__72926_73069__$1_temp__5823__auto___73068$$ = 
                  $APP.$cljs$core$next$$($G__73071_group_73056_i__72933_73097_seq__72926_73058_seq__72926_73069__$1_temp__5823__auto___73068$$), $G__73072_chunk__72927_73059_entry_73075_entry_73098_month_label_73057$$ = null, $G__73073_c__5673__auto___73070_count__72928_73060_entry_ms_73076_entry_ms_73099$$ = 0), $i__72929_73061$$ = 0;
                } else {
                  break;
                }
              }
            }
            $G__73109_c__5673__auto___73106_count__72932_73096_entry_ms_73112_i__72917_73055$$ += 1;
          } else {
            if ($G__73088_seq__72914_73052_seq__72914_73086__$1_temp__5823__auto___73085$$ = $APP.$cljs$core$seq$$($G__73088_seq__72914_73052_seq__72914_73086__$1_temp__5823__auto___73085$$)) {
              if ($APP.$cljs$core$chunked_seq_QMARK_$$($G__73088_seq__72914_73052_seq__72914_73086__$1_temp__5823__auto___73085$$)) {
                $G__73090_G__73108_c__5673__auto___73087_chunk__72931_73095_count__72916_73054_entry_73111_month_label_73093$$ = $APP.$cljs$core$_chunked_first$$($G__73088_seq__72914_73052_seq__72914_73086__$1_temp__5823__auto___73085$$), $G__73088_seq__72914_73052_seq__72914_73086__$1_temp__5823__auto___73085$$ = $APP.$cljs$core$_chunked_rest$$($G__73088_seq__72914_73052_seq__72914_73086__$1_temp__5823__auto___73085$$), $G__73089_G__73107_chunk__72915_73053_group_73092_seq__72930_73094_seq__72930_73105__$1_temp__5823__auto___73104__$1$$ = 
                $G__73090_G__73108_c__5673__auto___73087_chunk__72931_73095_count__72916_73054_entry_73111_month_label_73093$$, $G__73090_G__73108_c__5673__auto___73087_chunk__72931_73095_count__72916_73054_entry_73111_month_label_73093$$ = $APP.$cljs$core$count$$($G__73090_G__73108_c__5673__auto___73087_chunk__72931_73095_count__72916_73054_entry_73111_month_label_73093$$);
              } else {
                $G__73089_G__73107_chunk__72915_73053_group_73092_seq__72930_73094_seq__72930_73105__$1_temp__5823__auto___73104__$1$$ = $APP.$cljs$core$first$$($G__73088_seq__72914_73052_seq__72914_73086__$1_temp__5823__auto___73085$$);
                $G__73090_G__73108_c__5673__auto___73087_chunk__72931_73095_count__72916_73054_entry_73111_month_label_73093$$ = $amp$pages$budget$cash_flow$parse_date$$($cljs$cst$798$due$$.$cljs$core$IFn$_invoke$arity$1$($APP.$cljs$core$first$$($G__73089_G__73107_chunk__72915_73053_group_73092_seq__72930_73094_seq__72930_73105__$1_temp__5823__auto___73104__$1$$))).toLocaleString("en-US", {month:"long", year:"numeric"});
                $APP.$cljs$core$swap_BANG_$$.$cljs$core$IFn$_invoke$arity$3$($items$jscomp$9$$, $APP.$cljs$core$conj$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$25$type$$, $cljs$cst$870$month$$, $cljs$cst$783$label$$, $G__73090_G__73108_c__5673__auto___73087_chunk__72931_73095_count__72916_73054_entry_73111_month_label_73093$$, $APP.$cljs$cst$440$idx$$, $APP.$cljs$core$_deref$$($counter$$)], null));
                $APP.$cljs$core$swap_BANG_$$.$cljs$core$IFn$_invoke$arity$2$($counter$$, $APP.$cljs$core$inc$$);
                $G__73089_G__73107_chunk__72915_73053_group_73092_seq__72930_73094_seq__72930_73105__$1_temp__5823__auto___73104__$1$$ = $APP.$cljs$core$seq$$($G__73089_G__73107_chunk__72915_73053_group_73092_seq__72930_73094_seq__72930_73105__$1_temp__5823__auto___73104__$1$$);
                $G__73090_G__73108_c__5673__auto___73087_chunk__72931_73095_count__72916_73054_entry_73111_month_label_73093$$ = null;
                for ($G__73071_group_73056_i__72933_73097_seq__72926_73058_seq__72926_73069__$1_temp__5823__auto___73068$$ = $G__73109_c__5673__auto___73106_count__72932_73096_entry_ms_73112_i__72917_73055$$ = 0;;) {
                  if ($G__73071_group_73056_i__72933_73097_seq__72926_73058_seq__72926_73069__$1_temp__5823__auto___73068$$ < $G__73109_c__5673__auto___73106_count__72932_73096_entry_ms_73112_i__72917_73055$$) {
                    $G__73072_chunk__72927_73059_entry_73075_entry_73098_month_label_73057$$ = $G__73090_G__73108_c__5673__auto___73087_chunk__72931_73095_count__72916_73054_entry_73111_month_label_73093$$.$cljs$core$IIndexed$_nth$arity$2$(null, $G__73071_group_73056_i__72933_73097_seq__72926_73058_seq__72926_73069__$1_temp__5823__auto___73068$$), $G__73073_c__5673__auto___73070_count__72928_73060_entry_ms_73076_entry_ms_73099$$ = $amp$pages$budget$cash_flow$date__GT_ms$$($amp$pages$budget$cash_flow$parse_date$$($cljs$cst$798$due$$.$cljs$core$IFn$_invoke$arity$1$($G__73072_chunk__72927_73059_entry_73075_entry_73098_month_label_73057$$))), 
                    $APP.$cljs$core$not$$($APP.$cljs$core$_deref$$($now_done$$)) && $G__73073_c__5673__auto___73070_count__72928_73060_entry_ms_73076_entry_ms_73099$$ > $now_ms$$ && ($APP.$cljs$core$swap_BANG_$$.$cljs$core$IFn$_invoke$arity$3$($items$jscomp$9$$, $APP.$cljs$core$conj$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$25$type$$, $cljs$cst$871$now$$], null)), $APP.$cljs$core$reset_BANG_$$($now_done$$, !0)), $APP.$cljs$core$swap_BANG_$$.$cljs$core$IFn$_invoke$arity$3$($items$jscomp$9$$, 
                    $APP.$cljs$core$conj$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$25$type$$, $cljs$cst$866$entry$$, $cljs$cst$866$entry$$, $G__73072_chunk__72927_73059_entry_73075_entry_73098_month_label_73057$$, $APP.$cljs$cst$440$idx$$, $APP.$cljs$core$_deref$$($counter$$), $cljs$cst$872$past_QMARK_$$, $APP.$cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$($cljs$cst$801$paid$$, $APP.$cljs$cst$12$status$$.$cljs$core$IFn$_invoke$arity$1$($G__73072_chunk__72927_73059_entry_73075_entry_73098_month_label_73057$$))], 
                    null)), $APP.$cljs$core$swap_BANG_$$.$cljs$core$IFn$_invoke$arity$2$($counter$$, $APP.$cljs$core$inc$$), $G__73071_group_73056_i__72933_73097_seq__72926_73058_seq__72926_73069__$1_temp__5823__auto___73068$$ += 1;
                  } else {
                    if ($G__73089_G__73107_chunk__72915_73053_group_73092_seq__72930_73094_seq__72930_73105__$1_temp__5823__auto___73104__$1$$ = $APP.$cljs$core$seq$$($G__73089_G__73107_chunk__72915_73053_group_73092_seq__72930_73094_seq__72930_73105__$1_temp__5823__auto___73104__$1$$)) {
                      $APP.$cljs$core$chunked_seq_QMARK_$$($G__73089_G__73107_chunk__72915_73053_group_73092_seq__72930_73094_seq__72930_73105__$1_temp__5823__auto___73104__$1$$) ? ($G__73109_c__5673__auto___73106_count__72932_73096_entry_ms_73112_i__72917_73055$$ = $APP.$cljs$core$_chunked_first$$($G__73089_G__73107_chunk__72915_73053_group_73092_seq__72930_73094_seq__72930_73105__$1_temp__5823__auto___73104__$1$$), $G__73089_G__73107_chunk__72915_73053_group_73092_seq__72930_73094_seq__72930_73105__$1_temp__5823__auto___73104__$1$$ = 
                      $APP.$cljs$core$_chunked_rest$$($G__73089_G__73107_chunk__72915_73053_group_73092_seq__72930_73094_seq__72930_73105__$1_temp__5823__auto___73104__$1$$), $G__73090_G__73108_c__5673__auto___73087_chunk__72931_73095_count__72916_73054_entry_73111_month_label_73093$$ = $G__73109_c__5673__auto___73106_count__72932_73096_entry_ms_73112_i__72917_73055$$, $G__73109_c__5673__auto___73106_count__72932_73096_entry_ms_73112_i__72917_73055$$ = $APP.$cljs$core$count$$($G__73109_c__5673__auto___73106_count__72932_73096_entry_ms_73112_i__72917_73055$$)) : 
                      ($G__73090_G__73108_c__5673__auto___73087_chunk__72931_73095_count__72916_73054_entry_73111_month_label_73093$$ = $APP.$cljs$core$first$$($G__73089_G__73107_chunk__72915_73053_group_73092_seq__72930_73094_seq__72930_73105__$1_temp__5823__auto___73104__$1$$), $G__73109_c__5673__auto___73106_count__72932_73096_entry_ms_73112_i__72917_73055$$ = $amp$pages$budget$cash_flow$date__GT_ms$$($amp$pages$budget$cash_flow$parse_date$$($cljs$cst$798$due$$.$cljs$core$IFn$_invoke$arity$1$($G__73090_G__73108_c__5673__auto___73087_chunk__72931_73095_count__72916_73054_entry_73111_month_label_73093$$))), 
                      $APP.$cljs$core$not$$($APP.$cljs$core$_deref$$($now_done$$)) && $G__73109_c__5673__auto___73106_count__72932_73096_entry_ms_73112_i__72917_73055$$ > $now_ms$$ && ($APP.$cljs$core$swap_BANG_$$.$cljs$core$IFn$_invoke$arity$3$($items$jscomp$9$$, $APP.$cljs$core$conj$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$25$type$$, $cljs$cst$871$now$$], null)), $APP.$cljs$core$reset_BANG_$$($now_done$$, !0)), $APP.$cljs$core$swap_BANG_$$.$cljs$core$IFn$_invoke$arity$3$($items$jscomp$9$$, 
                      $APP.$cljs$core$conj$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$25$type$$, $cljs$cst$866$entry$$, $cljs$cst$866$entry$$, $G__73090_G__73108_c__5673__auto___73087_chunk__72931_73095_count__72916_73054_entry_73111_month_label_73093$$, $APP.$cljs$cst$440$idx$$, $APP.$cljs$core$_deref$$($counter$$), $cljs$cst$872$past_QMARK_$$, $APP.$cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$($cljs$cst$801$paid$$, $APP.$cljs$cst$12$status$$.$cljs$core$IFn$_invoke$arity$1$($G__73090_G__73108_c__5673__auto___73087_chunk__72931_73095_count__72916_73054_entry_73111_month_label_73093$$))], 
                      null)), $APP.$cljs$core$swap_BANG_$$.$cljs$core$IFn$_invoke$arity$2$($counter$$, $APP.$cljs$core$inc$$), $G__73089_G__73107_chunk__72915_73053_group_73092_seq__72930_73094_seq__72930_73105__$1_temp__5823__auto___73104__$1$$ = $APP.$cljs$core$next$$($G__73089_G__73107_chunk__72915_73053_group_73092_seq__72930_73094_seq__72930_73105__$1_temp__5823__auto___73104__$1$$), $G__73090_G__73108_c__5673__auto___73087_chunk__72931_73095_count__72916_73054_entry_73111_month_label_73093$$ = 
                      null, $G__73109_c__5673__auto___73106_count__72932_73096_entry_ms_73112_i__72917_73055$$ = 0), $G__73071_group_73056_i__72933_73097_seq__72926_73058_seq__72926_73069__$1_temp__5823__auto___73068$$ = 0;
                    } else {
                      break;
                    }
                  }
                }
                $G__73088_seq__72914_73052_seq__72914_73086__$1_temp__5823__auto___73085$$ = $APP.$cljs$core$next$$($G__73088_seq__72914_73052_seq__72914_73086__$1_temp__5823__auto___73085$$);
                $G__73089_G__73107_chunk__72915_73053_group_73092_seq__72930_73094_seq__72930_73105__$1_temp__5823__auto___73104__$1$$ = null;
                $G__73090_G__73108_c__5673__auto___73087_chunk__72931_73095_count__72916_73054_entry_73111_month_label_73093$$ = 0;
              }
              $G__73109_c__5673__auto___73106_count__72932_73096_entry_ms_73112_i__72917_73055$$ = 0;
            } else {
              break;
            }
          }
        }
        $APP.$cljs$core$not$$($APP.$cljs$core$_deref$$($now_done$$)) && $APP.$cljs$core$swap_BANG_$$.$cljs$core$IFn$_invoke$arity$3$($items$jscomp$9$$, $APP.$cljs$core$conj$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$25$type$$, $cljs$cst$871$now$$], null));
        return $APP.$cljs$core$_deref$$($items$jscomp$9$$);
      }();
      $G__72935_map__72913__$1_sorted$jscomp$1$$ = function() {
        return {children:[function() {
          var $G__72939$$ = {entries:$entries_kw$$, "target-total":$target_total$jscomp$1$$, "funds-raised":$funds_raised$jscomp$1$$, "debt-raised":$debt_raised$jscomp$1$$};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$pages$budget$cash_flow$summary_header$$, $G__72939$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$budget$cash_flow$summary_header$$, $G__72939$$);
        }(), function() {
          var $G__72943$$ = function() {
            return {"expanded?":$expanded_QMARK_$jscomp$3$$, "on-toggle":function() {
              return $set_expanded_BANG_$$.$cljs$core$IFn$_invoke$arity$1$ ? $set_expanded_BANG_$$.$cljs$core$IFn$_invoke$arity$1$($APP.$cljs$core$not$$) : $set_expanded_BANG_$$.call(null, $APP.$cljs$core$not$$);
            }};
          }();
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$pages$budget$cash_flow$view_toggle$$, $G__72943$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$budget$cash_flow$view_toggle$$, $G__72943$$);
        }(), function() {
          var $G__72947$$ = function() {
            return {className:"relative", children:[function() {
              var $G__72951$$ = {className:$APP.$helix$impl$props$normalize_class$$("cf-spine absolute left-[13px] top-0 h-full origin-top border-l border-dashed " + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$("border-slate-200 dark:border-white/15"))};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__72951$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__72951$$);
            }(), $APP.$cljs$core$truth_$$($expanded_QMARK_$jscomp$3$$) ? $APP.$cljs$core$map_indexed$cljs$0core$0IFn$0_invoke$0arity$02$$(function($G__72957_G__72961_G__72967_i$jscomp$423$$, $G__72956_G__72966_item$jscomp$36$$) {
              var $G__72954_G__72954__$1$$ = $APP.$cljs$cst$25$type$$.$cljs$core$IFn$_invoke$arity$1$($G__72956_G__72966_item$jscomp$36$$);
              $G__72954_G__72954__$1$$ = $G__72954_G__72954__$1$$ instanceof $APP.$cljs$core$Keyword$$ ? $G__72954_G__72954__$1$$.$fqn$ : null;
              switch($G__72954_G__72954__$1$$) {
                case "month":
                  return $G__72956_G__72966_item$jscomp$36$$ = {label:$cljs$cst$783$label$$.$cljs$core$IFn$_invoke$arity$1$($G__72956_G__72966_item$jscomp$36$$), idx:$APP.$cljs$cst$440$idx$$.$cljs$core$IFn$_invoke$arity$1$($G__72956_G__72966_item$jscomp$36$$)}, $G__72957_G__72961_G__72967_i$jscomp$423$$ = "m-" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($G__72957_G__72961_G__72967_i$jscomp$423$$), $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$($amp$pages$budget$cash_flow$month_header$$, 
                  $G__72956_G__72966_item$jscomp$36$$, $G__72957_G__72961_G__72967_i$jscomp$423$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$budget$cash_flow$month_header$$, $G__72956_G__72966_item$jscomp$36$$, $G__72957_G__72961_G__72967_i$jscomp$423$$);
                case "now":
                  return $G__72957_G__72961_G__72967_i$jscomp$423$$ = {}, $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$($amp$pages$budget$cash_flow$now_marker$$, $G__72957_G__72961_G__72967_i$jscomp$423$$, "now") : $APP.$helix$core$jsx$$.call(null, $amp$pages$budget$cash_flow$now_marker$$, $G__72957_G__72961_G__72967_i$jscomp$423$$, "now");
                case "entry":
                  return $G__72956_G__72966_item$jscomp$36$$ = {entry:$cljs$cst$866$entry$$.$cljs$core$IFn$_invoke$arity$1$($G__72956_G__72966_item$jscomp$36$$), idx:$APP.$cljs$cst$440$idx$$.$cljs$core$IFn$_invoke$arity$1$($G__72956_G__72966_item$jscomp$36$$), "is-past":$APP.$cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$($cljs$cst$801$paid$$, $APP.$cljs$cst$12$status$$.$cljs$core$IFn$_invoke$arity$1$($cljs$cst$866$entry$$.$cljs$core$IFn$_invoke$arity$1$($G__72956_G__72966_item$jscomp$36$$)))}, 
                  $G__72957_G__72961_G__72967_i$jscomp$423$$ = "e-" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($G__72957_G__72961_G__72967_i$jscomp$423$$), $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$($amp$pages$budget$cash_flow$timeline_node$$, $G__72956_G__72966_item$jscomp$36$$, $G__72957_G__72961_G__72967_i$jscomp$423$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$budget$cash_flow$timeline_node$$, $G__72956_G__72966_item$jscomp$36$$, 
                  $G__72957_G__72961_G__72967_i$jscomp$423$$);
                default:
                  throw Error("No matching clause: " + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($G__72954_G__72954__$1$$));
              }
            }, $all_items$$) : function() {
              var $c__5673__auto___73135_rollups_seq__72970_73122_temp__5823__auto___73133_vec__73013_73140$$ = $amp$pages$budget$cash_flow$month_rollups$$($entries_kw$$), $now_done$jscomp$1$$ = $APP.$cljs$core$atom$cljs$0core$0IFn$0_invoke$0arity$01$$(!1), $out$jscomp$15$$ = $APP.$cljs$core$atom$cljs$0core$0IFn$0_invoke$0arity$01$$($APP.$cljs$core$PersistentVector$EMPTY$$);
              $c__5673__auto___73135_rollups_seq__72970_73122_temp__5823__auto___73133_vec__73013_73140$$ = $APP.$cljs$core$seq$$($APP.$cljs$core$map_indexed$cljs$0core$0IFn$0_invoke$0arity$02$$($APP.$cljs$core$vector$$, $c__5673__auto___73135_rollups_seq__72970_73122_temp__5823__auto___73133_vec__73013_73140$$));
              for (var $G__73137_chunk__72971_73123_seq__72970_73134__$1$$ = null, $G__73138_count__72972_73124$$ = 0, $G__73136_i__72973_73125$$ = 0;;) {
                if ($G__73136_i__72973_73125$$ < $G__73138_count__72972_73124$$) {
                  var $vec__73000_73126$$ = $G__73137_chunk__72971_73123_seq__72970_73134__$1$$.$cljs$core$IIndexed$_nth$arity$2$(null, $G__73136_i__72973_73125$$), $i_73127$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($vec__73000_73126$$, 0, null), $r_73128$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($vec__73000_73126$$, 1, null);
                  $APP.$cljs$core$truth_$$(function() {
                    var $and__5140__auto__$jscomp$89$$ = $APP.$cljs$core$not$$($APP.$cljs$core$_deref$$($now_done$jscomp$1$$));
                    return $and__5140__auto__$jscomp$89$$ ? $cljs$cst$864$has_now$$.$cljs$core$IFn$_invoke$arity$1$($r_73128$$) : $and__5140__auto__$jscomp$89$$;
                  }()) && ($APP.$cljs$core$swap_BANG_$$.$cljs$core$IFn$_invoke$arity$3$($out$jscomp$15$$, $APP.$cljs$core$conj$$, function() {
                    var $G__73004$$ = {};
                    return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$($amp$pages$budget$cash_flow$now_marker$$, $G__73004$$, "now-s") : $APP.$helix$core$jsx$$.call(null, $amp$pages$budget$cash_flow$now_marker$$, $G__73004$$, "now-s");
                  }()), $APP.$cljs$core$reset_BANG_$$($now_done$jscomp$1$$, !0));
                  $APP.$cljs$core$swap_BANG_$$.$cljs$core$IFn$_invoke$arity$3$($out$jscomp$15$$, $APP.$cljs$core$conj$$, function() {
                    var $G__73009$$ = {rollup:$r_73128$$, idx:$i_73127$$}, $G__73010$$ = "sr-" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($i_73127$$);
                    return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$($amp$pages$budget$cash_flow$month_summary_row$$, $G__73009$$, $G__73010$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$budget$cash_flow$month_summary_row$$, $G__73009$$, $G__73010$$);
                  }());
                  $G__73136_i__72973_73125$$ += 1;
                } else {
                  if ($c__5673__auto___73135_rollups_seq__72970_73122_temp__5823__auto___73133_vec__73013_73140$$ = $APP.$cljs$core$seq$$($c__5673__auto___73135_rollups_seq__72970_73122_temp__5823__auto___73133_vec__73013_73140$$)) {
                    $G__73137_chunk__72971_73123_seq__72970_73134__$1$$ = $c__5673__auto___73135_rollups_seq__72970_73122_temp__5823__auto___73133_vec__73013_73140$$;
                    if ($APP.$cljs$core$chunked_seq_QMARK_$$($G__73137_chunk__72971_73123_seq__72970_73134__$1$$)) {
                      $c__5673__auto___73135_rollups_seq__72970_73122_temp__5823__auto___73133_vec__73013_73140$$ = $APP.$cljs$core$_chunked_first$$($G__73137_chunk__72971_73123_seq__72970_73134__$1$$), $G__73136_i__72973_73125$$ = $APP.$cljs$core$_chunked_rest$$($G__73137_chunk__72971_73123_seq__72970_73134__$1$$), $G__73137_chunk__72971_73123_seq__72970_73134__$1$$ = $c__5673__auto___73135_rollups_seq__72970_73122_temp__5823__auto___73133_vec__73013_73140$$, $G__73138_count__72972_73124$$ = $APP.$cljs$core$count$$($c__5673__auto___73135_rollups_seq__72970_73122_temp__5823__auto___73133_vec__73013_73140$$), 
                      $c__5673__auto___73135_rollups_seq__72970_73122_temp__5823__auto___73133_vec__73013_73140$$ = $G__73136_i__72973_73125$$;
                    } else {
                      $c__5673__auto___73135_rollups_seq__72970_73122_temp__5823__auto___73133_vec__73013_73140$$ = $APP.$cljs$core$first$$($G__73137_chunk__72971_73123_seq__72970_73134__$1$$);
                      var $i_73141$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($c__5673__auto___73135_rollups_seq__72970_73122_temp__5823__auto___73133_vec__73013_73140$$, 0, null), $r_73142$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($c__5673__auto___73135_rollups_seq__72970_73122_temp__5823__auto___73133_vec__73013_73140$$, 1, null);
                      $APP.$cljs$core$truth_$$(function() {
                        var $and__5140__auto__$jscomp$90$$ = $APP.$cljs$core$not$$($APP.$cljs$core$_deref$$($now_done$jscomp$1$$));
                        return $and__5140__auto__$jscomp$90$$ ? $cljs$cst$864$has_now$$.$cljs$core$IFn$_invoke$arity$1$($r_73142$$) : $and__5140__auto__$jscomp$90$$;
                      }()) && ($APP.$cljs$core$swap_BANG_$$.$cljs$core$IFn$_invoke$arity$3$($out$jscomp$15$$, $APP.$cljs$core$conj$$, function() {
                        var $G__73017$$ = {};
                        return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$($amp$pages$budget$cash_flow$now_marker$$, $G__73017$$, "now-s") : $APP.$helix$core$jsx$$.call(null, $amp$pages$budget$cash_flow$now_marker$$, $G__73017$$, "now-s");
                      }()), $APP.$cljs$core$reset_BANG_$$($now_done$jscomp$1$$, !0));
                      $APP.$cljs$core$swap_BANG_$$.$cljs$core$IFn$_invoke$arity$3$($out$jscomp$15$$, $APP.$cljs$core$conj$$, function() {
                        var $G__73022$$ = {rollup:$r_73142$$, idx:$i_73141$$}, $G__73023$$ = "sr-" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($i_73141$$);
                        return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$($amp$pages$budget$cash_flow$month_summary_row$$, $G__73022$$, $G__73023$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$budget$cash_flow$month_summary_row$$, $G__73022$$, $G__73023$$);
                      }());
                      $c__5673__auto___73135_rollups_seq__72970_73122_temp__5823__auto___73133_vec__73013_73140$$ = $APP.$cljs$core$next$$($G__73137_chunk__72971_73123_seq__72970_73134__$1$$);
                      $G__73137_chunk__72971_73123_seq__72970_73134__$1$$ = null;
                      $G__73138_count__72972_73124$$ = 0;
                    }
                    $G__73136_i__72973_73125$$ = 0;
                  } else {
                    break;
                  }
                }
              }
              $APP.$cljs$core$not$$($APP.$cljs$core$_deref$$($now_done$jscomp$1$$)) && $APP.$cljs$core$swap_BANG_$$.$cljs$core$IFn$_invoke$arity$3$($out$jscomp$15$$, $APP.$cljs$core$conj$$, function() {
                var $G__73027$$ = {};
                return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$($amp$pages$budget$cash_flow$now_marker$$, $G__73027$$, "now-s") : $APP.$helix$core$jsx$$.call(null, $amp$pages$budget$cash_flow$now_marker$$, $G__73027$$, "now-s");
              }());
              return $APP.$cljs$core$_deref$$($out$jscomp$15$$);
            }()]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__72947$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__72947$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__72935_map__72913__$1_sorted$jscomp$1$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__72935_map__72913__$1_sorted$jscomp$1$$);
    }()};
  }();
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__72895_73050_G__72898_map__72888_map__72888__$1_props__41636__auto__$jscomp$84_vec__72885_vec__72889_vec__72892$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__72895_73050_G__72898_map__72888_map__72888__$1_props__41636__auto__$jscomp$84_vec__72885_vec__72889_vec__72892$$);
};
$amp$pages$budget$non_profit$non_profit$$ = function($G__70821_map__70818_map__70818__$1_props__41636__auto__$jscomp$85_vec__70815$$, $maybe_ref__41637__auto__$jscomp$85$$) {
  $G__70821_map__70818_map__70818__$1_props__41636__auto__$jscomp$85_vec__70815$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__70821_map__70818_map__70818__$1_props__41636__auto__$jscomp$85_vec__70815$$), $maybe_ref__41637__auto__$jscomp$85$$], null);
  $G__70821_map__70818_map__70818__$1_props__41636__auto__$jscomp$85_vec__70815$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__70821_map__70818_map__70818__$1_props__41636__auto__$jscomp$85_vec__70815$$, 0, null);
  $G__70821_map__70818_map__70818__$1_props__41636__auto__$jscomp$85_vec__70815$$ = $APP.$cljs$core$__destructure_map$$($G__70821_map__70818_map__70818__$1_props__41636__auto__$jscomp$85_vec__70815$$);
  var $id$jscomp$89$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__70821_map__70818_map__70818__$1_props__41636__auto__$jscomp$85_vec__70815$$, $APP.$cljs$cst$200$id$$), $subtitle$jscomp$7$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__70821_map__70818_map__70818__$1_props__41636__auto__$jscomp$85_vec__70815$$, $APP.$cljs$cst$724$subtitle$$), $title$jscomp$27$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__70821_map__70818_map__70818__$1_props__41636__auto__$jscomp$85_vec__70815$$, 
  $APP.$cljs$cst$378$title$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $field_label$$ = $APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-semibold", "text-slate-600  dark:text-slate-400"])), $field_value$$ = $APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["text-right", "font-bold", "text-indigo-600 dark:text-indigo-300", "tracking-wide"]));
  $G__70821_map__70818_map__70818__$1_props__41636__auto__$jscomp$85_vec__70815$$ = function() {
    return {id:$id$jscomp$89$$, children:function() {
      var $G__70825$$ = function() {
        return {idx:8, eyebrow:$subtitle$jscomp$7$$, title:$title$jscomp$27$$, children:function() {
          var $G__70829$$ = function() {
            return {className:"space-y-8 p-4", children:[function() {
              var $G__70833$$ = function() {
                return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["text-slate-700  dark:text-slate-300", "mb-12"]))), children:[function() {
                  var $G__70837$$ = function() {
                    return {children:["The Armenia Pavilion 2026 is supported through ", function() {
                      var $G__70841$$ = {className:$APP.$helix$impl$props$normalize_class$$("font-semibold"), children:"Fallen Angels Inc."};
                      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__70841$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__70841$$);
                    }(), ", a registered ", function() {
                      var $G__70845$$ = {className:$APP.$helix$impl$props$normalize_class$$("font-semibold"), children:"501(c)(3)"};
                      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__70845$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__70845$$);
                    }(), " public non-profit organization. ", function() {
                      var $G__70849$$ = {className:$APP.$helix$impl$props$normalize_class$$("font-semibold"), children:"Contributions are tax deductible"};
                      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__70849$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__70849$$);
                    }(), " to the extent permitted by law."]};
                  }();
                  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__70837$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__70837$$);
                }(), function() {
                  var $G__70853$$ = function() {
                    return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-mono", "text-sm", "mt-6 space-y-1"]))), children:[function() {
                      var $G__70857_G__70861$jscomp$inline_3731$$ = {className:$APP.$helix$impl$props$normalize_class$$($field_label$$), children:"Organization: "};
                      $G__70857_G__70861$jscomp$inline_3731$$ = {children:[$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__70857_G__70861$jscomp$inline_3731$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__70857_G__70861$jscomp$inline_3731$$), "Fallen Angels Inc."]};
                      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__70857_G__70861$jscomp$inline_3731$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__70857_G__70861$jscomp$inline_3731$$);
                    }(), function() {
                      var $G__70865$$ = function() {
                        return {children:[function() {
                          var $G__70869$$ = {className:$APP.$helix$impl$props$normalize_class$$($field_label$$), children:"EIN: "};
                          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__70869$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__70869$$);
                        }(), function() {
                          var $G__70874$$ = {className:$APP.$helix$impl$props$normalize_class$$($field_value$$), children:"92-2395513"};
                          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__70874$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__70874$$);
                        }()]};
                      }();
                      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__70865$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__70865$$);
                    }(), function() {
                      var $G__70886$$ = function() {
                        return {children:[function() {
                          var $G__70894$$ = {className:$APP.$helix$impl$props$normalize_class$$($field_label$$), children:"Located in: "};
                          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__70894$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__70894$$);
                        }(), function() {
                          var $G__70906$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_bold$$), children:"Los Angeles, CA"};
                          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__70906$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__70906$$);
                        }()]};
                      }();
                      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__70886$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__70886$$);
                    }()]};
                  }();
                  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__70853$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__70853$$);
                }(), function() {
                  var $G__70926$$ = function() {
                    return {className:"mt-10 grid grid-cols-1 lg:grid-cols-2 gap-10", children:[function() {
                      var $G__70932$$ = function() {
                        return {children:[function() {
                          var $G__70942_JSCompiler_temp_const$jscomp$inline_3733$$ = $APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$heading_section$$, "text-slate-900  dark:text-slate-100", "mb-4"])));
                          var $G__70950$jscomp$inline_3735_JSCompiler_inline_result$jscomp$inline_3734$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-normal", "text-slate-600  dark:text-slate-400"]))), children:"Transfers"};
                          $G__70950$jscomp$inline_3735_JSCompiler_inline_result$jscomp$inline_3734$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__70950$jscomp$inline_3735_JSCompiler_inline_result$jscomp$inline_3734$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__70950$jscomp$inline_3735_JSCompiler_inline_result$jscomp$inline_3734$$);
                          $G__70942_JSCompiler_temp_const$jscomp$inline_3733$$ = {className:$G__70942_JSCompiler_temp_const$jscomp$inline_3733$$, children:["Domestic ", $G__70950$jscomp$inline_3735_JSCompiler_inline_result$jscomp$inline_3734$$]};
                          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__70942_JSCompiler_temp_const$jscomp$inline_3733$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__70942_JSCompiler_temp_const$jscomp$inline_3733$$);
                        }(), function() {
                          var $G__70965$$ = function() {
                            return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-mono", "text-sm", "space-y-3"]))), children:[function() {
                              var $G__70973$$ = function() {
                                return {className:"flex items-baseline justify-between gap-6", children:[function() {
                                  var $G__70992$$ = {className:$APP.$helix$impl$props$normalize_class$$($field_label$$), children:"Name:"};
                                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__70992$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__70992$$);
                                }(), function() {
                                  var $G__71020$$ = {className:"text-right", children:"Fallen Angels Inc."};
                                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__71020$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__71020$$);
                                }()]};
                              }();
                              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__70973$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__70973$$);
                            }(), function() {
                              var $G__71033$$ = function() {
                                return {className:"flex items-baseline justify-between gap-6", children:[function() {
                                  var $G__71041$$ = {className:$APP.$helix$impl$props$normalize_class$$($field_label$$), children:"Routing:"};
                                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__71041$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__71041$$);
                                }(), function() {
                                  var $G__71047$$ = {className:$APP.$helix$impl$props$normalize_class$$($field_value$$), children:"091311229"};
                                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__71047$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__71047$$);
                                }()]};
                              }();
                              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__71033$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__71033$$);
                            }(), function() {
                              var $G__71055$$ = function() {
                                return {className:"flex items-baseline justify-between gap-6", children:[function() {
                                  var $G__71066$$ = {className:$APP.$helix$impl$props$normalize_class$$($field_label$$), children:"Account #:"};
                                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__71066$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__71066$$);
                                }(), function() {
                                  var $G__71072$$ = {className:$APP.$helix$impl$props$normalize_class$$($field_value$$), children:"202535309341"};
                                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__71072$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__71072$$);
                                }()]};
                              }();
                              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__71055$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__71055$$);
                            }(), function() {
                              var $G__71078$$ = function() {
                                return {className:"flex items-start justify-between gap-6", children:[function() {
                                  var $G__71084$$ = {className:$APP.$helix$impl$props$normalize_class$$($field_label$$), children:"Address:"};
                                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__71084$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__71084$$);
                                }(), function() {
                                  var $G__71090$$ = function() {
                                    return {className:"text-right leading-snug", children:[function() {
                                      var $G__71097$$ = {children:"Choice Financial Group"};
                                      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__71097$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__71097$$);
                                    }(), function() {
                                      var $G__71105$$ = {children:"4501 23rd Avenue S"};
                                      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__71105$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__71105$$);
                                    }(), function() {
                                      var $G__71111$$ = {children:"Fargo, ND 58104"};
                                      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__71111$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__71111$$);
                                    }()]};
                                  }();
                                  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__71090$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__71090$$);
                                }()]};
                              }();
                              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__71078$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__71078$$);
                            }()]};
                          }();
                          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__70965$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__70965$$);
                        }()]};
                      }();
                      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__70932$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__70932$$);
                    }(), function() {
                      var $G__71122$$ = function() {
                        return {children:[function() {
                          var $G__71128_JSCompiler_temp_const$jscomp$inline_3737$$ = $APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$heading_section$$, "text-slate-900  dark:text-slate-100", "mb-4"])));
                          var $G__71137$jscomp$inline_3739_JSCompiler_inline_result$jscomp$inline_3738$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-normal", "text-slate-600  dark:text-slate-400"]))), children:"Transfers"};
                          $G__71137$jscomp$inline_3739_JSCompiler_inline_result$jscomp$inline_3738$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__71137$jscomp$inline_3739_JSCompiler_inline_result$jscomp$inline_3738$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__71137$jscomp$inline_3739_JSCompiler_inline_result$jscomp$inline_3738$$);
                          $G__71128_JSCompiler_temp_const$jscomp$inline_3737$$ = {className:$G__71128_JSCompiler_temp_const$jscomp$inline_3737$$, children:["International ", $G__71137$jscomp$inline_3739_JSCompiler_inline_result$jscomp$inline_3738$$]};
                          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__71128_JSCompiler_temp_const$jscomp$inline_3737$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__71128_JSCompiler_temp_const$jscomp$inline_3737$$);
                        }(), function() {
                          var $G__71149$$ = function() {
                            return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-mono", "text-sm", "space-y-3"]))), children:[function() {
                              var $G__71153$$ = function() {
                                return {className:"flex items-baseline justify-between gap-6", children:[function() {
                                  var $G__71161$$ = {className:$APP.$helix$impl$props$normalize_class$$($field_label$$), children:"Name:"};
                                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__71161$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__71161$$);
                                }(), function() {
                                  var $G__71173$$ = {className:"text-right", children:"Fallen Angels Inc."};
                                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__71173$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__71173$$);
                                }()]};
                              }();
                              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__71153$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__71153$$);
                            }(), function() {
                              var $G__71187$$ = function() {
                                return {className:"flex items-baseline justify-between gap-6", children:[function() {
                                  var $G__71197$$ = {className:$APP.$helix$impl$props$normalize_class$$($field_label$$), children:"SWIFT/BIC:"};
                                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__71197$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__71197$$);
                                }(), function() {
                                  var $G__71203$$ = {className:$APP.$helix$impl$props$normalize_class$$($field_value$$), children:"CHFGUS44021"};
                                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__71203$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__71203$$);
                                }()]};
                              }();
                              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__71187$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__71187$$);
                            }(), function() {
                              var $G__71221$$ = function() {
                                return {className:"flex items-baseline justify-between gap-6", children:[function() {
                                  var $G__71227$$ = {className:$APP.$helix$impl$props$normalize_class$$($field_label$$), children:"ABA/Routing:"};
                                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__71227$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__71227$$);
                                }(), function() {
                                  var $G__71233$$ = {className:$APP.$helix$impl$props$normalize_class$$($field_value$$), children:"091311229"};
                                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__71233$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__71233$$);
                                }()]};
                              }();
                              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__71221$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__71221$$);
                            }(), function() {
                              var $G__71244$$ = function() {
                                return {className:"flex items-baseline justify-between gap-6", children:[function() {
                                  var $G__71250$$ = {className:$APP.$helix$impl$props$normalize_class$$($field_label$$), children:"IBAN/Account #:"};
                                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__71250$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__71250$$);
                                }(), function() {
                                  var $G__71258$$ = {className:$APP.$helix$impl$props$normalize_class$$($field_value$$), children:"202535309341"};
                                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__71258$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__71258$$);
                                }()]};
                              }();
                              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__71244$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__71244$$);
                            }(), function() {
                              var $G__71266$$ = function() {
                                return {className:"flex items-start justify-between gap-6", children:[function() {
                                  var $G__71272$$ = {className:$APP.$helix$impl$props$normalize_class$$($field_label$$), children:"Address:"};
                                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__71272$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__71272$$);
                                }(), function() {
                                  var $G__71278$$ = function() {
                                    return {className:"text-right leading-snug", children:[function() {
                                      var $G__71284$$ = {children:"Choice Financial Group"};
                                      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__71284$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__71284$$);
                                    }(), function() {
                                      var $G__71291$$ = {children:"4501 23rd Avenue S"};
                                      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__71291$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__71291$$);
                                    }(), function() {
                                      var $G__71299$$ = {children:"Fargo, ND 58104"};
                                      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__71299$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__71299$$);
                                    }()]};
                                  }();
                                  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__71278$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__71278$$);
                                }()]};
                              }();
                              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__71266$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__71266$$);
                            }()]};
                          }();
                          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__71149$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__71149$$);
                        }()]};
                      }();
                      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__71122$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__71122$$);
                    }()]};
                  }();
                  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__70926$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__70926$$);
                }()]};
              }();
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__70833$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__70833$$);
            }(), function() {
              var $G__71313$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["text-slate-600  dark:text-slate-400", "p-4 mt-10 text-sm md:text-base"]))), children:"If you would like a receipt letter for your records, please include your name and email address with the transfer memo."};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__71313$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__71313$$);
            }()]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__70829$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__70829$$);
        }()};
      }();
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$pages$budget$section_block$section_block$$, $G__70825$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$pages$budget$section_block$section_block$$, $G__70825$$);
    }()};
  }();
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__70821_map__70818_map__70818__$1_props__41636__auto__$jscomp$85_vec__70815$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__70821_map__70818_map__70818__$1_props__41636__auto__$jscomp$85_vec__70815$$);
};
$amp$pages$budget$sponsors$logo_card$$ = function($G__71486_G__71492$jscomp$inline_3883_map__71475_name$jscomp$202_props__41636__auto__$jscomp$86_vec__71472$$, $logo_map__71475__$1_maybe_ref__41637__auto__$jscomp$86$$) {
  $G__71486_G__71492$jscomp$inline_3883_map__71475_name$jscomp$202_props__41636__auto__$jscomp$86_vec__71472$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__71486_G__71492$jscomp$inline_3883_map__71475_name$jscomp$202_props__41636__auto__$jscomp$86_vec__71472$$), $logo_map__71475__$1_maybe_ref__41637__auto__$jscomp$86$$], null);
  $G__71486_G__71492$jscomp$inline_3883_map__71475_name$jscomp$202_props__41636__auto__$jscomp$86_vec__71472$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__71486_G__71492$jscomp$inline_3883_map__71475_name$jscomp$202_props__41636__auto__$jscomp$86_vec__71472$$, 0, null);
  $logo_map__71475__$1_maybe_ref__41637__auto__$jscomp$86$$ = $APP.$cljs$core$__destructure_map$$($G__71486_G__71492$jscomp$inline_3883_map__71475_name$jscomp$202_props__41636__auto__$jscomp$86_vec__71472$$);
  $G__71486_G__71492$jscomp$inline_3883_map__71475_name$jscomp$202_props__41636__auto__$jscomp$86_vec__71472$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($logo_map__71475__$1_maybe_ref__41637__auto__$jscomp$86$$, $APP.$cljs$cst$192$name$$);
  $logo_map__71475__$1_maybe_ref__41637__auto__$jscomp$86$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($logo_map__71475__$1_maybe_ref__41637__auto__$jscomp$86$$, $cljs$cst$875$logo$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__71486_G__71492$jscomp$inline_3883_map__71475_name$jscomp$202_props__41636__auto__$jscomp$86_vec__71472$$ = {src:$logo_map__71475__$1_maybe_ref__41637__auto__$jscomp$86$$, alt:$G__71486_G__71492$jscomp$inline_3883_map__71475_name$jscomp$202_props__41636__auto__$jscomp$86_vec__71472$$, style:{height:$APP.$helix$impl$props$__GT_js$$("4rem"), width:$APP.$helix$impl$props$__GT_js$$("auto")}, className:" transition-all duration-500\n                         \n                         drop-shadow-[0_0_12px_rgba(249,168,212,0)] group-hover:drop-shadow-[0_0_20px_rgba(249,168,212,0.15)]"};
  $G__71486_G__71492$jscomp$inline_3883_map__71475_name$jscomp$202_props__41636__auto__$jscomp$86_vec__71472$$ = {className:"group py-6 px-8 transition-all duration-500 ease-out", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("img", $G__71486_G__71492$jscomp$inline_3883_map__71475_name$jscomp$202_props__41636__auto__$jscomp$86_vec__71472$$) : $APP.$helix$core$jsx$$.call(null, "img", $G__71486_G__71492$jscomp$inline_3883_map__71475_name$jscomp$202_props__41636__auto__$jscomp$86_vec__71472$$)};
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__71486_G__71492$jscomp$inline_3883_map__71475_name$jscomp$202_props__41636__auto__$jscomp$86_vec__71472$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__71486_G__71492$jscomp$inline_3883_map__71475_name$jscomp$202_props__41636__auto__$jscomp$86_vec__71472$$);
};
$amp$pages$budget$sponsors$name_item$$ = function($G__71524_map__71522_name$jscomp$203_props__41636__auto__$jscomp$87_vec__71519$$, $accent_map__71522__$1_maybe_ref__41637__auto__$jscomp$87$$) {
  $G__71524_map__71522_name$jscomp$203_props__41636__auto__$jscomp$87_vec__71519$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__71524_map__71522_name$jscomp$203_props__41636__auto__$jscomp$87_vec__71519$$), $accent_map__71522__$1_maybe_ref__41637__auto__$jscomp$87$$], null);
  $G__71524_map__71522_name$jscomp$203_props__41636__auto__$jscomp$87_vec__71519$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__71524_map__71522_name$jscomp$203_props__41636__auto__$jscomp$87_vec__71519$$, 0, null);
  $accent_map__71522__$1_maybe_ref__41637__auto__$jscomp$87$$ = $APP.$cljs$core$__destructure_map$$($G__71524_map__71522_name$jscomp$203_props__41636__auto__$jscomp$87_vec__71519$$);
  $G__71524_map__71522_name$jscomp$203_props__41636__auto__$jscomp$87_vec__71519$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($accent_map__71522__$1_maybe_ref__41637__auto__$jscomp$87$$, $APP.$cljs$cst$192$name$$);
  $accent_map__71522__$1_maybe_ref__41637__auto__$jscomp$87$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($accent_map__71522__$1_maybe_ref__41637__auto__$jscomp$87$$, $cljs$cst$879$accent$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__71524_map__71522_name$jscomp$203_props__41636__auto__$jscomp$87_vec__71519$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-mono", "text-sm", "tracking-wide", $accent_map__71522__$1_maybe_ref__41637__auto__$jscomp$87$$]))), children:$G__71524_map__71522_name$jscomp$203_props__41636__auto__$jscomp$87_vec__71519$$};
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__71524_map__71522_name$jscomp$203_props__41636__auto__$jscomp$87_vec__71519$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__71524_map__71522_name$jscomp$203_props__41636__auto__$jscomp$87_vec__71519$$);
};
$amp$pages$budget$sponsors$tier_section$$ = function($G__71539_map__71534_map__71534__$1_members$jscomp$1_props__41636__auto__$jscomp$88_vec__71531$$, $map__71535_map__71535__$1_maybe_ref__41637__auto__$jscomp$88_tier$$) {
  $G__71539_map__71534_map__71534__$1_members$jscomp$1_props__41636__auto__$jscomp$88_vec__71531$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__71539_map__71534_map__71534__$1_members$jscomp$1_props__41636__auto__$jscomp$88_vec__71531$$), $map__71535_map__71535__$1_maybe_ref__41637__auto__$jscomp$88_tier$$], null);
  $G__71539_map__71534_map__71534__$1_members$jscomp$1_props__41636__auto__$jscomp$88_vec__71531$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__71539_map__71534_map__71534__$1_members$jscomp$1_props__41636__auto__$jscomp$88_vec__71531$$, 0, null);
  $G__71539_map__71534_map__71534__$1_members$jscomp$1_props__41636__auto__$jscomp$88_vec__71531$$ = $APP.$cljs$core$__destructure_map$$($G__71539_map__71534_map__71534__$1_members$jscomp$1_props__41636__auto__$jscomp$88_vec__71531$$);
  $map__71535_map__71535__$1_maybe_ref__41637__auto__$jscomp$88_tier$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__71539_map__71534_map__71534__$1_members$jscomp$1_props__41636__auto__$jscomp$88_vec__71531$$, $cljs$cst$873$tier$$);
  $G__71539_map__71534_map__71534__$1_members$jscomp$1_props__41636__auto__$jscomp$88_vec__71531$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__71539_map__71534_map__71534__$1_members$jscomp$1_props__41636__auto__$jscomp$88_vec__71531$$, $cljs$cst$883$members$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $map__71535_map__71535__$1_maybe_ref__41637__auto__$jscomp$88_tier$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($amp$pages$budget$sponsors$tier_meta$$, $map__71535_map__71535__$1_maybe_ref__41637__auto__$jscomp$88_tier$$);
  $map__71535_map__71535__$1_maybe_ref__41637__auto__$jscomp$88_tier$$ = $APP.$cljs$core$__destructure_map$$($map__71535_map__71535__$1_maybe_ref__41637__auto__$jscomp$88_tier$$);
  var $label$jscomp$12$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__71535_map__71535__$1_maybe_ref__41637__auto__$jscomp$88_tier$$, $cljs$cst$783$label$$), $accent$jscomp$1$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__71535_map__71535__$1_maybe_ref__41637__auto__$jscomp$88_tier$$, $cljs$cst$879$accent$$), $border$jscomp$6$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__71535_map__71535__$1_maybe_ref__41637__auto__$jscomp$88_tier$$, $APP.$cljs$cst$404$border$$), 
  $with_logos$$ = $APP.$cljs$core$filter$cljs$0core$0IFn$0_invoke$0arity$02$$($cljs$cst$875$logo$$, $G__71539_map__71534_map__71534__$1_members$jscomp$1_props__41636__auto__$jscomp$88_vec__71531$$), $without_logos$$ = $APP.$cljs$core$remove$cljs$0core$0IFn$0_invoke$0arity$02$$($cljs$cst$875$logo$$, $G__71539_map__71534_map__71534__$1_members$jscomp$1_props__41636__auto__$jscomp$88_vec__71531$$);
  $G__71539_map__71534_map__71534__$1_members$jscomp$1_props__41636__auto__$jscomp$88_vec__71531$$ = function() {
    return {className:"mb-12", children:[function() {
      var $G__71543_G__71549$jscomp$inline_3744$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-mono", "text-xl", "font-bold", "uppercase", "tracking-[0.15em]", $accent$jscomp$1$$]))), children:$label$jscomp$12$$};
      $G__71543_G__71549$jscomp$inline_3744$$ = {className:"flex items-center gap-3 mb", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__71543_G__71549$jscomp$inline_3744$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__71543_G__71549$jscomp$inline_3744$$)};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__71543_G__71549$jscomp$inline_3744$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__71543_G__71549$jscomp$inline_3744$$);
    }(), $APP.$cljs$core$seq$$($with_logos$$) ? function() {
      var $G__71572$$ = function() {
        return {className:"mb-4 flex flex-col items-center", children:$APP.$cljs$core$map$$.$cljs$core$IFn$_invoke$arity$2$(function($name$jscomp$204_p__71583$$) {
          var $G__71606_logo$jscomp$1_map__71586__$1$$ = $APP.$cljs$core$__destructure_map$$($name$jscomp$204_p__71583$$);
          $name$jscomp$204_p__71583$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__71606_logo$jscomp$1_map__71586__$1$$, $APP.$cljs$cst$192$name$$);
          $G__71606_logo$jscomp$1_map__71586__$1$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__71606_logo$jscomp$1_map__71586__$1$$, $cljs$cst$875$logo$$);
          $G__71606_logo$jscomp$1_map__71586__$1$$ = {name:$name$jscomp$204_p__71583$$, logo:$G__71606_logo$jscomp$1_map__71586__$1$$};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$($amp$pages$budget$sponsors$logo_card$$, $G__71606_logo$jscomp$1_map__71586__$1$$, $name$jscomp$204_p__71583$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$budget$sponsors$logo_card$$, $G__71606_logo$jscomp$1_map__71586__$1$$, $name$jscomp$204_p__71583$$);
        }, $with_logos$$)};
      }();
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__71572$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__71572$$);
    }() : null, $APP.$cljs$core$seq$$($without_logos$$) ? function() {
      var $G__71649$$ = function() {
        return {className:"flex flex-wrap gap-x-6 gap-y-2", children:$APP.$cljs$core$map$$.$cljs$core$IFn$_invoke$arity$2$(function($map__71707__$1_name$jscomp$205_p__71686$$) {
          $map__71707__$1_name$jscomp$205_p__71686$$ = $APP.$cljs$core$__destructure_map$$($map__71707__$1_name$jscomp$205_p__71686$$);
          $map__71707__$1_name$jscomp$205_p__71686$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__71707__$1_name$jscomp$205_p__71686$$, $APP.$cljs$cst$192$name$$);
          var $G__71720_JSCompiler_temp_const$jscomp$inline_3746$$ = $APP.$helix$impl$props$normalize_class$$("border-l-2 pl-3 py-1 " + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($border$jscomp$6$$));
          var $G__71741$jscomp$inline_3748_JSCompiler_inline_result$jscomp$inline_3747$$ = {name:$map__71707__$1_name$jscomp$205_p__71686$$, accent:$accent$jscomp$1$$};
          $G__71741$jscomp$inline_3748_JSCompiler_inline_result$jscomp$inline_3747$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$pages$budget$sponsors$name_item$$, $G__71741$jscomp$inline_3748_JSCompiler_inline_result$jscomp$inline_3747$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$budget$sponsors$name_item$$, $G__71741$jscomp$inline_3748_JSCompiler_inline_result$jscomp$inline_3747$$);
          $G__71720_JSCompiler_temp_const$jscomp$inline_3746$$ = {className:$G__71720_JSCompiler_temp_const$jscomp$inline_3746$$, children:$G__71741$jscomp$inline_3748_JSCompiler_inline_result$jscomp$inline_3747$$};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$("div", $G__71720_JSCompiler_temp_const$jscomp$inline_3746$$, $map__71707__$1_name$jscomp$205_p__71686$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__71720_JSCompiler_temp_const$jscomp$inline_3746$$, $map__71707__$1_name$jscomp$205_p__71686$$);
        }, $without_logos$$)};
      }();
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__71649$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__71649$$);
    }() : null]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__71539_map__71534_map__71534__$1_members$jscomp$1_props__41636__auto__$jscomp$88_vec__71531$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__71539_map__71534_map__71534__$1_members$jscomp$1_props__41636__auto__$jscomp$88_vec__71531$$);
};
$amp$pages$budget$sponsors$sponsors_section$$ = function($G__71864_map__71846_map__71846__$1_props__41636__auto__$jscomp$89_vec__71843$$, $maybe_ref__41637__auto__$jscomp$89$$) {
  $G__71864_map__71846_map__71846__$1_props__41636__auto__$jscomp$89_vec__71843$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__71864_map__71846_map__71846__$1_props__41636__auto__$jscomp$89_vec__71843$$), $maybe_ref__41637__auto__$jscomp$89$$], null);
  $G__71864_map__71846_map__71846__$1_props__41636__auto__$jscomp$89_vec__71843$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__71864_map__71846_map__71846__$1_props__41636__auto__$jscomp$89_vec__71843$$, 0, null);
  $G__71864_map__71846_map__71846__$1_props__41636__auto__$jscomp$89_vec__71843$$ = $APP.$cljs$core$__destructure_map$$($G__71864_map__71846_map__71846__$1_props__41636__auto__$jscomp$89_vec__71843$$);
  var $id$jscomp$90$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__71864_map__71846_map__71846__$1_props__41636__auto__$jscomp$89_vec__71843$$, $APP.$cljs$cst$200$id$$), $subtitle$jscomp$8$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__71864_map__71846_map__71846__$1_props__41636__auto__$jscomp$89_vec__71843$$, $APP.$cljs$cst$724$subtitle$$), $title$jscomp$28$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__71864_map__71846_map__71846__$1_props__41636__auto__$jscomp$89_vec__71843$$, 
  $APP.$cljs$cst$378$title$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $grouped$jscomp$1$$ = $APP.$cljs$core$sort_by$cljs$0core$0IFn$0_invoke$0arity$02$$(function($p__71855$$) {
    var $tier$jscomp$1$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($p__71855$$, 0, null);
    $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($p__71855$$, 1, null);
    return $cljs$cst$880$order$$.$cljs$core$IFn$_invoke$arity$1$($APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($amp$pages$budget$sponsors$tier_meta$$, $tier$jscomp$1$$));
  }, $APP.$cljs$core$group_by$$($cljs$cst$873$tier$$, $amp$pages$budget$sponsors$sponsors$$));
  $G__71864_map__71846_map__71846__$1_props__41636__auto__$jscomp$89_vec__71843$$ = function() {
    return {id:$id$jscomp$90$$, children:function() {
      var $G__71870$$ = function() {
        return {idx:6, eyebrow:$subtitle$jscomp$8$$, title:$title$jscomp$28$$, children:function() {
          var $G__71876$$ = function() {
            return {className:"p-4 mt-6 space-y-2", children:[function() {
              var $G__71882$$ = function() {
                return {className:"mb-12", children:[function() {
                  var $G__71893$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["text-slate-700  dark:text-slate-300", "mb-8"]))), children:"At present the Armenia Pavilion 2026 "};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__71893$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__71893$$);
                }(), function() {
                  var $G__71906$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["text-rose-600   dark:text-rose-400"]))), children:"is only made possible"};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__71906$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__71906$$);
                }(), function() {
                  var $G__71929$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["text-slate-700  dark:text-slate-300", "mb-8"]))), children:" through the generosity of foundations, families, and individuals committed to helping sustaining Armenia's cultural presence on the international stage."};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__71929$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__71929$$);
                }()]};
              }();
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__71882$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__71882$$);
            }(), $APP.$cljs$core$map$$.$cljs$core$IFn$_invoke$arity$2$(function($G__71937_members$jscomp$2_p__71932$$) {
              var $G__71938_tier$jscomp$2$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__71937_members$jscomp$2_p__71932$$, 0, null);
              $G__71937_members$jscomp$2_p__71932$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__71937_members$jscomp$2_p__71932$$, 1, null);
              $G__71937_members$jscomp$2_p__71932$$ = {tier:$G__71938_tier$jscomp$2$$, members:$G__71937_members$jscomp$2_p__71932$$};
              $G__71938_tier$jscomp$2$$ = $APP.$cljs$core$name$$($G__71938_tier$jscomp$2$$);
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$($amp$pages$budget$sponsors$tier_section$$, $G__71937_members$jscomp$2_p__71932$$, $G__71938_tier$jscomp$2$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$budget$sponsors$tier_section$$, $G__71937_members$jscomp$2_p__71932$$, $G__71938_tier$jscomp$2$$);
            }, $grouped$jscomp$1$$)]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__71876$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__71876$$);
        }()};
      }();
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$pages$budget$section_block$section_block$$, $G__71870$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$pages$budget$section_block$section_block$$, $G__71870$$);
    }()};
  }();
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__71864_map__71846_map__71846__$1_props__41636__auto__$jscomp$89_vec__71843$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__71864_map__71846_map__71846__$1_props__41636__auto__$jscomp$89_vec__71843$$);
};
$amp$pages$budget$why_support$preview$$ = function($G__71477_map__71470_props__41636__auto__$jscomp$90_vec__71467$$, $maybe_ref__41637__auto__$jscomp$90$$) {
  $G__71477_map__71470_props__41636__auto__$jscomp$90_vec__71467$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__71477_map__71470_props__41636__auto__$jscomp$90_vec__71467$$), $maybe_ref__41637__auto__$jscomp$90$$], null);
  $G__71477_map__71470_props__41636__auto__$jscomp$90_vec__71467$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__71477_map__71470_props__41636__auto__$jscomp$90_vec__71467$$, 0, null);
  $APP.$cljs$core$__destructure_map$$($G__71477_map__71470_props__41636__auto__$jscomp$90_vec__71467$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__71477_map__71470_props__41636__auto__$jscomp$90_vec__71467$$ = function() {
    return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_lg$$, "p-4"]))), children:[function() {
      var $G__71482$$ = {children:'To stand on the Biennale\'s global stage is not "participation" in an art event—it is '};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__71482$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__71482$$);
    }(), function() {
      var $G__71490$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:"presence in the world's most influential cultural forum"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__71490$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__71490$$);
    }(), function() {
      var $G__71500$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:", where nations are read, remembered, and measured in real time. "};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__71500$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__71500$$);
    }(), function() {
      var $G__71504$$ = {children:"For the Republic of Armenia, a Pavilion is a sovereign act of cultural visibility: it declares that Armenia is not only a history to be mourned or a headline to be managed, but a "};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__71504$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__71504$$);
    }(), function() {
      var $G__71509$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-semibold", "italic", "text-slate-900  dark:text-slate-100"]))), children:"living intelligence"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__71509$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__71509$$);
    }(), function() {
      var $G__71513$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:"—capable of producing contemporary vision at the highest level. "};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__71513$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__71513$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__71477_map__71470_props__41636__auto__$jscomp$90_vec__71467$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__71477_map__71470_props__41636__auto__$jscomp$90_vec__71467$$);
};
$amp$pages$budget$why_support$details$$ = function($G__71560_map__71556_props__41636__auto__$jscomp$91_vec__71553$$, $maybe_ref__41637__auto__$jscomp$91$$) {
  $G__71560_map__71556_props__41636__auto__$jscomp$91_vec__71553$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__71560_map__71556_props__41636__auto__$jscomp$91_vec__71553$$), $maybe_ref__41637__auto__$jscomp$91$$], null);
  $G__71560_map__71556_props__41636__auto__$jscomp$91_vec__71553$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__71560_map__71556_props__41636__auto__$jscomp$91_vec__71553$$, 0, null);
  $APP.$cljs$core$__destructure_map$$($G__71560_map__71556_props__41636__auto__$jscomp$91_vec__71553$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__71560_map__71556_props__41636__auto__$jscomp$91_vec__71553$$ = function() {
    return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_lg$$, "p-4"]))), children:[function() {
      var $G__71564$$ = {children:'To stand on the Biennale\'s global stage is not "participation" in an art event—it is '};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__71564$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__71564$$);
    }(), function() {
      var $G__71568$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:"presence in the world's most influential cultural forum"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__71568$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__71568$$);
    }(), function() {
      var $G__71574$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:", where nations are read, remembered, and measured in real time. "};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__71574$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__71574$$);
    }(), function() {
      var $G__71580$$ = {children:"For the Republic of Armenia, a Pavilion is a sovereign act of cultural visibility: it declares that Armenia is not only a history to be mourned or a headline to be managed, but a "};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__71580$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__71580$$);
    }(), function() {
      var $G__71585$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-semibold", "italic", "text-slate-900  dark:text-slate-100"]))), children:"living intelligence"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__71585$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__71585$$);
    }(), function() {
      var $G__71590$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:"—capable of producing contemporary vision at the highest level. "};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__71590$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__71590$$);
    }(), function() {
      var $G__71595$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:"This is how nations earn stature without asking permission: by contributing meaning, not pleading for sympathy. In Venice, Armenia enters the shared conversation that curators, museums, collectors, journalists, and governments track—and what is seen there echoes for years in exhibitions, acquisitions, education, tourism, diplomacy, and philanthropic interest."};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__71595$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__71595$$);
    }(), function() {
      var $G__71599_G__71609$jscomp$inline_3751$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$em_strong$$, "text-lg"]))), children:"This is why being present matters—and what it elevates:"};
      $G__71599_G__71609$jscomp$inline_3751$$ = {className:"mt-8 mb-4", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__71599_G__71609$jscomp$inline_3751$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__71599_G__71609$jscomp$inline_3751$$)};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__71599_G__71609$jscomp$inline_3751$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__71599_G__71609$jscomp$inline_3751$$);
    }(), function() {
      var $G__71619$$ = function() {
        return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["text-slate-700  dark:text-slate-300", "space-y-4 ml-4"]))), children:[function() {
          var $G__71624_G__71630$jscomp$inline_3754$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_bold$$), children:"National dignity, made public: "};
          $G__71624_G__71630$jscomp$inline_3754$$ = {className:"", children:[$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__71624_G__71630$jscomp$inline_3754$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__71624_G__71630$jscomp$inline_3754$$), "Armenia is framed through excellence, discipline, and contemporary creativity—not solely through tragedy or geopolitics."]};
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("li", $G__71624_G__71630$jscomp$inline_3754$$) : $APP.$helix$core$jsxs$$.call(null, "li", $G__71624_G__71630$jscomp$inline_3754$$);
        }(), function() {
          var $G__71637_G__71641$jscomp$inline_3757$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_bold$$), children:"Soft power that compounds: "};
          $G__71637_G__71641$jscomp$inline_3757$$ = {className:"", children:[$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__71637_G__71641$jscomp$inline_3757$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__71637_G__71641$jscomp$inline_3757$$), "Cultural visibility becomes long-term credibility—opening doors that money or lobbying cannot."]};
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("li", $G__71637_G__71641$jscomp$inline_3757$$) : $APP.$helix$core$jsxs$$.call(null, "li", $G__71637_G__71641$jscomp$inline_3757$$);
        }(), function() {
          var $G__71651_G__71659$jscomp$inline_3760$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_bold$$), children:"Narrative control: "};
          $G__71651_G__71659$jscomp$inline_3760$$ = {className:"", children:[$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__71651_G__71659$jscomp$inline_3760$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__71651_G__71659$jscomp$inline_3760$$), "If Armenia does not author its own image, others will—and they will simplify it."]};
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("li", $G__71651_G__71659$jscomp$inline_3760$$) : $APP.$helix$core$jsxs$$.call(null, "li", $G__71651_G__71659$jscomp$inline_3760$$);
        }(), function() {
          var $G__71673_G__71681$jscomp$inline_3763$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_bold$$), children:"A platform for future generations: "};
          $G__71673_G__71681$jscomp$inline_3763$$ = {className:"", children:[$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__71673_G__71681$jscomp$inline_3763$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__71673_G__71681$jscomp$inline_3763$$), 'A serious national presence signals to Armenian artists, students, and institutions that the world stage is not "for others."']};
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("li", $G__71673_G__71681$jscomp$inline_3763$$) : $APP.$helix$core$jsxs$$.call(null, "li", $G__71673_G__71681$jscomp$inline_3763$$);
        }(), function() {
          var $G__71694_G__71698$jscomp$inline_3766$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_bold$$), children:"Diaspora cohesion: "};
          $G__71694_G__71698$jscomp$inline_3766$$ = {className:"", children:[$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__71694_G__71698$jscomp$inline_3766$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__71694_G__71698$jscomp$inline_3766$$), "A Pavilion becomes a shared achievement—an anchor event that unifies donors, families, and communities around something constructive and proud."]};
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("li", $G__71694_G__71698$jscomp$inline_3766$$) : $APP.$helix$core$jsxs$$.call(null, "li", $G__71694_G__71698$jscomp$inline_3766$$);
        }(), function() {
          var $G__71709_G__71715$jscomp$inline_3769$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_bold$$), children:"Institutional consequences: "};
          $G__71709_G__71715$jscomp$inline_3769$$ = {className:"", children:[$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__71709_G__71715$jscomp$inline_3769$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__71709_G__71715$jscomp$inline_3769$$), "Serious participation invites museum partnerships, residencies, publications, acquisitions, and recurring invitations—real infrastructure, not a momentary spotlight."]};
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("li", $G__71709_G__71715$jscomp$inline_3769$$) : $APP.$helix$core$jsxs$$.call(null, "li", $G__71709_G__71715$jscomp$inline_3769$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("ul", $G__71619$$) : $APP.$helix$core$jsxs$$.call(null, "ul", $G__71619$$);
    }(), function() {
      var $G__71723$$ = function() {
        return {className:"block mt-8", children:[function() {
          var $G__71731$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:"The opportunity cost of not partaking is brutal and silent: "};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__71731$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__71731$$);
        }(), function() {
          var $G__71737$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-semibold", "italic", "text-slate-900  dark:text-slate-100"]))), children:"invisibility"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__71737$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__71737$$);
        }(), function() {
          var $G__71743$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:". The world does not pause because a nation is under-resourced; it simply moves on, and the absence becomes a habit. In a cultural ecosystem, absence reads as incapacity. It reinforces the unfair but persistent idea that Armenia is peripheral—always reacting, never defining. "};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__71743$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__71743$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__71723$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__71723$$);
    }(), function() {
      var $G__71749$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["text-slate-700  dark:text-slate-300", "block mt-6"]))), children:'That is the long-term gap: Armenia is not always "where it should be" because it has too often been forced into survival mode—outspent, out-networked, and underrepresented in the institutions that shape global memory. '};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__71749$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__71749$$);
    }(), function() {
      var $G__71753$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["text-slate-700  dark:text-slate-300", "block mt-6"]))), children:'A donor is not "buying" a sculpture or an event; they are buying '};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__71753$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__71753$$);
    }(), function() {
      var $G__71757$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:"representation with consequences"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__71757$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__71757$$);
    }(), function() {
      var $G__71761$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:": an enduring record that Armenia showed up with seriousness, ambition, and world-class execution. The legacy is reputational and generational: a Pavilion that becomes a reference point—documented, published, archived, collected, cited—and a model that makes the next Armenian presence easier, stronger, and inevitable."};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__71761$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__71761$$);
    }(), function() {
      var $G__71765$$ = {className:"block mt-8", children:"And yes: "};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__71765$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__71765$$);
    }(), function() {
      var $G__71769$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-semibold", "italic", "text-slate-900  dark:text-slate-100"]))), children:"the cultural battle must be won"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__71769$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__71769$$);
    }(), function() {
      var $G__71776$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:"—not with aggression, but with clarity, consistency, and excellence. Culture is where nations become undeniable. It is where influence is built without violence; where history is not only remembered, but translated into future power. "};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__71776$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__71776$$);
    }(), function() {
      var $G__71780$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_closing$$, "block mt-6"]))), children:"Supporting this Pavilion is patriotism in its most practical form: it is an investment in Armenia's standing, Armenia's narrative, and Armenia's right to be seen at full scale—on equal terms—where the world is watching."};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__71780$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__71780$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__71560_map__71556_props__41636__auto__$jscomp$91_vec__71553$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__71560_map__71556_props__41636__auto__$jscomp$91_vec__71553$$);
};
$amp$pages$budget$why_support$why_support$$ = function($G__71807_id$jscomp$91_map__71800_props__41636__auto__$jscomp$92_vec__71796$$, $G__71813$jscomp$inline_3772_JSCompiler_inline_result$jscomp$inline_3771_maybe_ref__41637__auto__$jscomp$92_subtitle$jscomp$9$$) {
  $G__71807_id$jscomp$91_map__71800_props__41636__auto__$jscomp$92_vec__71796$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__71807_id$jscomp$91_map__71800_props__41636__auto__$jscomp$92_vec__71796$$), $G__71813$jscomp$inline_3772_JSCompiler_inline_result$jscomp$inline_3771_maybe_ref__41637__auto__$jscomp$92_subtitle$jscomp$9$$], null);
  $G__71807_id$jscomp$91_map__71800_props__41636__auto__$jscomp$92_vec__71796$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__71807_id$jscomp$91_map__71800_props__41636__auto__$jscomp$92_vec__71796$$, 0, null);
  var $map__71800__$1_title$jscomp$29$$ = $APP.$cljs$core$__destructure_map$$($G__71807_id$jscomp$91_map__71800_props__41636__auto__$jscomp$92_vec__71796$$);
  $G__71807_id$jscomp$91_map__71800_props__41636__auto__$jscomp$92_vec__71796$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__71800__$1_title$jscomp$29$$, $APP.$cljs$cst$200$id$$);
  $G__71813$jscomp$inline_3772_JSCompiler_inline_result$jscomp$inline_3771_maybe_ref__41637__auto__$jscomp$92_subtitle$jscomp$9$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__71800__$1_title$jscomp$29$$, $APP.$cljs$cst$724$subtitle$$);
  $map__71800__$1_title$jscomp$29$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__71800__$1_title$jscomp$29$$, $APP.$cljs$cst$378$title$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__71813$jscomp$inline_3772_JSCompiler_inline_result$jscomp$inline_3771_maybe_ref__41637__auto__$jscomp$92_subtitle$jscomp$9$$ = {idx:9, "section-hint":$G__71813$jscomp$inline_3772_JSCompiler_inline_result$jscomp$inline_3771_maybe_ref__41637__auto__$jscomp$92_subtitle$jscomp$9$$, title:$map__71800__$1_title$jscomp$29$$, "expand-button-label":"Read more", "preview-text":$amp$pages$budget$why_support$preview$$, "full-text":$amp$pages$budget$why_support$details$$};
  $G__71813$jscomp$inline_3772_JSCompiler_inline_result$jscomp$inline_3771_maybe_ref__41637__auto__$jscomp$92_subtitle$jscomp$9$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$ui$expandable_text$expandable_text_area_2$$, $G__71813$jscomp$inline_3772_JSCompiler_inline_result$jscomp$inline_3771_maybe_ref__41637__auto__$jscomp$92_subtitle$jscomp$9$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$ui$expandable_text$expandable_text_area_2$$, 
  $G__71813$jscomp$inline_3772_JSCompiler_inline_result$jscomp$inline_3771_maybe_ref__41637__auto__$jscomp$92_subtitle$jscomp$9$$);
  $G__71807_id$jscomp$91_map__71800_props__41636__auto__$jscomp$92_vec__71796$$ = {id:$G__71807_id$jscomp$91_map__71800_props__41636__auto__$jscomp$92_vec__71796$$, children:$G__71813$jscomp$inline_3772_JSCompiler_inline_result$jscomp$inline_3771_maybe_ref__41637__auto__$jscomp$92_subtitle$jscomp$9$$};
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__71807_id$jscomp$91_map__71800_props__41636__auto__$jscomp$92_vec__71796$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__71807_id$jscomp$91_map__71800_props__41636__auto__$jscomp$92_vec__71796$$);
};
$amp$nav$back_up$back_up_nav$$ = function($G__75823_is_active_QMARK_$jscomp$7_props__41636__auto__$jscomp$93_vec__75819$$) {
  $APP.$helix$core$extract_cljs_props$$($G__75823_is_active_QMARK_$jscomp$7_props__41636__auto__$jscomp$93_vec__75819$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $container_ref$jscomp$3$$ = $APP.$helix$hooks$use_ref$$("container-ref"), $button_ref$$ = $APP.$helix$hooks$use_ref$$("button-ref"), $scroll_to_top$$ = $amp$hooks$use_scroll_to$use_scroll_to_top$cljs$0core$0IFn$0_invoke$0arity$0variadic$$();
  $G__75823_is_active_QMARK_$jscomp$7_props__41636__auto__$jscomp$93_vec__75819$$ = $APP.$amp$hooks$use_scroll_trigger$use_scroll_trigger$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($container_ref$jscomp$3$$, $APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$cljs$cst$361$start$$, function() {
    return window.innerHeight - window.innerHeight / 8;
  }, $APP.$cljs$cst$390$end$$, "1000000px", $APP.$cljs$cst$392$markers_QMARK_$$, !1, $APP.$cljs$cst$393$debug_QMARK_$$, !1]));
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__75823_is_active_QMARK_$jscomp$7_props__41636__auto__$jscomp$93_vec__75819$$, 0, null);
  $G__75823_is_active_QMARK_$jscomp$7_props__41636__auto__$jscomp$93_vec__75819$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__75823_is_active_QMARK_$jscomp$7_props__41636__auto__$jscomp$93_vec__75819$$, 1, null);
  $APP.$amp$hooks$use_hover_animations$use_hover_animations$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($button_ref$$);
  $APP.$amp$hooks$use_toggle_animations$use_toggle_animations$$(new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$382$target$$, $container_ref$jscomp$3$$, $APP.$cljs$cst$396$on_to$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$745$y$$, 0, $APP.$cljs$cst$437$opacity$$, 1], null), $APP.$cljs$cst$398$off_to$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$745$y$$, -150, $APP.$cljs$cst$437$opacity$$, 0.25], null), $APP.$cljs$cst$394$is_on_QMARK_$$, 
  $G__75823_is_active_QMARK_$jscomp$7_props__41636__auto__$jscomp$93_vec__75819$$], null));
  $G__75823_is_active_QMARK_$jscomp$7_props__41636__auto__$jscomp$93_vec__75819$$ = function() {
    var $G__75827$jscomp$inline_3774_G__75831$jscomp$inline_3776_JSCompiler_inline_result$jscomp$3417_JSCompiler_inline_result$jscomp$inline_3775$$ = {};
    $G__75827$jscomp$inline_3774_G__75831$jscomp$inline_3776_JSCompiler_inline_result$jscomp$3417_JSCompiler_inline_result$jscomp$inline_3775$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$ui$icons$ArrowTurnRightUp$$, $G__75827$jscomp$inline_3774_G__75831$jscomp$inline_3776_JSCompiler_inline_result$jscomp$3417_JSCompiler_inline_result$jscomp$inline_3775$$) : $APP.$helix$core$jsx$$.call(null, $amp$ui$icons$ArrowTurnRightUp$$, 
    $G__75827$jscomp$inline_3774_G__75831$jscomp$inline_3776_JSCompiler_inline_result$jscomp$3417_JSCompiler_inline_result$jscomp$inline_3775$$);
    $G__75827$jscomp$inline_3774_G__75831$jscomp$inline_3776_JSCompiler_inline_result$jscomp$3417_JSCompiler_inline_result$jscomp$inline_3775$$ = {ref:$button_ref$$, className:"flex \n                           w-full\n                           h-full\n                           bg-pink-300\n                           opacity-90\n                           font-bold\n                           text-xl\n                           px-4\n                           white-space-no-wrap", onClick:$scroll_to_top$$, 
    children:["To Top ", $G__75827$jscomp$inline_3774_G__75831$jscomp$inline_3776_JSCompiler_inline_result$jscomp$3417_JSCompiler_inline_result$jscomp$inline_3775$$]};
    $G__75827$jscomp$inline_3774_G__75831$jscomp$inline_3776_JSCompiler_inline_result$jscomp$3417_JSCompiler_inline_result$jscomp$inline_3775$$ = $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__75827$jscomp$inline_3774_G__75831$jscomp$inline_3776_JSCompiler_inline_result$jscomp$3417_JSCompiler_inline_result$jscomp$inline_3775$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__75827$jscomp$inline_3774_G__75831$jscomp$inline_3776_JSCompiler_inline_result$jscomp$3417_JSCompiler_inline_result$jscomp$inline_3775$$);
    return {ref:$container_ref$jscomp$3$$, className:"fixed right-0 cursor-pointer z-30", children:$G__75827$jscomp$inline_3774_G__75831$jscomp$inline_3776_JSCompiler_inline_result$jscomp$3417_JSCompiler_inline_result$jscomp$inline_3775$$};
  }();
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__75823_is_active_QMARK_$jscomp$7_props__41636__auto__$jscomp$93_vec__75819$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__75823_is_active_QMARK_$jscomp$7_props__41636__auto__$jscomp$93_vec__75819$$);
};
$amp$pages$budget$footer$budget_footer$$ = function($G__75842_map__75840_props__41636__auto__$jscomp$94_vec__75837$$, $maybe_ref__41637__auto__$jscomp$94$$) {
  $G__75842_map__75840_props__41636__auto__$jscomp$94_vec__75837$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__75842_map__75840_props__41636__auto__$jscomp$94_vec__75837$$), $maybe_ref__41637__auto__$jscomp$94$$], null);
  $G__75842_map__75840_props__41636__auto__$jscomp$94_vec__75837$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__75842_map__75840_props__41636__auto__$jscomp$94_vec__75837$$, 0, null);
  $APP.$cljs$core$__destructure_map$$($G__75842_map__75840_props__41636__auto__$jscomp$94_vec__75837$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $scroll_to_id$jscomp$1$$ = $APP.$amp$hooks$use_scroll_to$use_scroll_to_id$$();
  $G__75842_map__75840_props__41636__auto__$jscomp$94_vec__75837$$ = function() {
    return {className:"relative w-full font-display mt-12", children:[function() {
      var $G__75846$$ = {className:"w-full h-px bg-gradient-to-r from-transparent via-pink-500/40 to-transparent"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__75846$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__75846$$);
    }(), function() {
      var $G__75850_G__75854$jscomp$inline_3932_G__75858$jscomp$inline_3933$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["text-xl lg:text-2xl italic font-light leading-relaxed", "text-slate-600  dark:text-slate-400"]))), children:"“Culture is where nations become undeniable. It is where influence is built without violence; where history is not only remembered, but translated into future power.”"};
      $G__75850_G__75854$jscomp$inline_3932_G__75858$jscomp$inline_3933$$ = {className:"max-w-3xl text-center", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__75850_G__75854$jscomp$inline_3932_G__75858$jscomp$inline_3933$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__75850_G__75854$jscomp$inline_3932_G__75858$jscomp$inline_3933$$)};
      $G__75850_G__75854$jscomp$inline_3932_G__75858$jscomp$inline_3933$$ = {className:"py-16 lg:py-24 px-6 flex justify-center", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("blockquote", $G__75850_G__75854$jscomp$inline_3932_G__75858$jscomp$inline_3933$$) : $APP.$helix$core$jsx$$.call(null, "blockquote", $G__75850_G__75854$jscomp$inline_3932_G__75858$jscomp$inline_3933$$)};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__75850_G__75854$jscomp$inline_3932_G__75858$jscomp$inline_3933$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__75850_G__75854$jscomp$inline_3932_G__75858$jscomp$inline_3933$$);
    }(), function() {
      var $G__75862$$ = {className:"w-full h-px bg-gradient-to-r from-transparent via-pink-500/20 to-transparent"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__75862$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__75862$$);
    }(), function() {
      var $G__75866$$ = function() {
        return {className:"py-16 lg:py-20 px-6 max-w-5xl mx-auto", children:[function() {
          var $G__75870$jscomp$1$$ = function() {
            return {className:"text-center mb-16", children:[function() {
              var $G__75874$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["text-2xl lg:text-3xl font-bold uppercase tracking-wider mb-3", "text-slate-900  dark:text-slate-100"]))), children:"Support the Pavilion"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("h2", $G__75874$$) : $APP.$helix$core$jsx$$.call(null, "h2", $G__75874$$);
            }(), function() {
              var $G__75878$jscomp$1$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["text-sm lg:text-base max-w-xl mx-auto mb-8", "text-slate-600  dark:text-slate-400"]))), children:"Your contribution directly supports Armenia’s national presentation at the 61st Venice Biennale—a sovereign act of cultural visibility on the world stage."};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__75878$jscomp$1$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__75878$jscomp$1$$);
            }(), function() {
              var $G__75882$jscomp$1$$ = function() {
                return {className:"flex justify-center gap-4 flex-wrap", children:[function() {
                  var $G__75886$$ = function() {
                    return {title:"Donate Now", "on-click":function() {
                      return window.open("https://donate.stripe.com/14A5kC6SC5RQfo4frS6Ri00", "_blank");
                    }};
                  }();
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$ui$button$main_button$$, $G__75886$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$ui$button$main_button$$, $G__75886$$);
                }(), function() {
                  var $G__75890$$ = function() {
                    return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$("font-mono;text-[11px];font-bold;uppercase;tracking-[0.25em];text-slate-600  dark:text-slate-400;hover:text-slate-900 dark:hover:text-white;border;border-slate-200 dark:border-white/15;hover:border-slate-400 dark:hover:border-slate-500;px-6 py-3;transition-colors duration-300 ease-in-out".split(";")))), 
                    onClick:function() {
                      return $scroll_to_id$jscomp$1$$.$cljs$core$IFn$_invoke$arity$1$ ? $scroll_to_id$jscomp$1$$.$cljs$core$IFn$_invoke$arity$1$("section-8") : $scroll_to_id$jscomp$1$$.call(null, "section-8");
                    }, children:"Wire Transfer Info →"};
                  }();
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("button", $G__75890$$) : $APP.$helix$core$jsx$$.call(null, "button", $G__75890$$);
                }()]};
              }();
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__75882$jscomp$1$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__75882$jscomp$1$$);
            }()]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__75870$jscomp$1$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__75870$jscomp$1$$);
        }(), function() {
          var $G__75894$jscomp$1$$ = function() {
            return {className:"grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 text-sm", children:[function() {
              var $G__75898$jscomp$1$$ = function() {
                return {className:"space-y-3", children:[function() {
                  var $G__75902$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["text-[10px] font-semibold uppercase tracking-[0.2em] mb-4", "text-pink-700/50 dark:text-pink-300/50"]))), children:"Get in Touch"};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("h3", $G__75902$$) : $APP.$helix$core$jsx$$.call(null, "h3", $G__75902$$);
                }(), function() {
                  var $G__75906$jscomp$1$$ = {href:"mailto:hello@armenianpavilion2026.org?subject\x3dLet's%20connect", className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["block transition-colors", "text-slate-700  dark:text-slate-300", "hover:text-slate-900 dark:hover:text-white"]))), children:"hello@armenianpavilion2026.org"};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("a", $G__75906$jscomp$1$$) : $APP.$helix$core$jsx$$.call(null, "a", $G__75906$jscomp$1$$);
                }(), function() {
                  var $G__75910$$ = {href:"tel:+13234041152", className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["block transition-colors", "text-slate-700  dark:text-slate-300", "hover:text-slate-900 dark:hover:text-white"]))), children:"+1 323-404-1152"};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("a", $G__75910$$) : $APP.$helix$core$jsx$$.call(null, "a", $G__75910$$);
                }()]};
              }();
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__75898$jscomp$1$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__75898$jscomp$1$$);
            }(), function() {
              var $G__75914$jscomp$1$$ = function() {
                return {className:"space-y-3", children:[function() {
                  var $G__75918$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["text-[10px] font-semibold uppercase tracking-[0.2em] mb-4", "text-pink-700/50 dark:text-pink-300/50"]))), children:"501(c)(3) Non-Profit"};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("h3", $G__75918$$) : $APP.$helix$core$jsx$$.call(null, "h3", $G__75918$$);
                }(), function() {
                  var $G__75922$jscomp$1$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:"Fallen Angels Inc."};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__75922$jscomp$1$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__75922$jscomp$1$$);
                }(), function() {
                  var $G__75926$jscomp$1$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-600  dark:text-slate-400"), children:"EIN: 92-2395513"};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__75926$jscomp$1$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__75926$jscomp$1$$);
                }(), function() {
                  var $G__75930$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-600  dark:text-slate-400"), children:"Los Angeles, CA"};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__75930$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__75930$$);
                }()]};
              }();
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__75914$jscomp$1$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__75914$jscomp$1$$);
            }(), function() {
              var $G__75934$$ = function() {
                return {className:"space-y-3", children:[function() {
                  var $G__75938$jscomp$1$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["text-[10px] font-semibold uppercase tracking-[0.2em] mb-4", "text-pink-700/50 dark:text-pink-300/50"]))), children:"Quick Links"};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("h3", $G__75938$jscomp$1$$) : $APP.$helix$core$jsx$$.call(null, "h3", $G__75938$jscomp$1$$);
                }(), function() {
                  var $G__75942$jscomp$1$$ = function() {
                    return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["block transition-colors text-left", "text-slate-700  dark:text-slate-300", "hover:text-slate-900 dark:hover:text-white"]))), onClick:function() {
                      return $scroll_to_id$jscomp$1$$.$cljs$core$IFn$_invoke$arity$1$ ? $scroll_to_id$jscomp$1$$.$cljs$core$IFn$_invoke$arity$1$("section-1") : $scroll_to_id$jscomp$1$$.call(null, "section-1");
                    }, children:"Press Release"};
                  }();
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("button", $G__75942$jscomp$1$$) : $APP.$helix$core$jsx$$.call(null, "button", $G__75942$jscomp$1$$);
                }(), function() {
                  var $G__75946$$ = function() {
                    return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["block transition-colors text-left", "text-slate-700  dark:text-slate-300", "hover:text-slate-900 dark:hover:text-white"]))), onClick:function() {
                      return $scroll_to_id$jscomp$1$$.$cljs$core$IFn$_invoke$arity$1$ ? $scroll_to_id$jscomp$1$$.$cljs$core$IFn$_invoke$arity$1$("section-3") : $scroll_to_id$jscomp$1$$.call(null, "section-3");
                    }, children:"Budget"};
                  }();
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("button", $G__75946$$) : $APP.$helix$core$jsx$$.call(null, "button", $G__75946$$);
                }(), function() {
                  var $G__75950$jscomp$1$$ = function() {
                    return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["block transition-colors text-left", "text-slate-700  dark:text-slate-300", "hover:text-slate-900 dark:hover:text-white"]))), onClick:function() {
                      return $scroll_to_id$jscomp$1$$.$cljs$core$IFn$_invoke$arity$1$ ? $scroll_to_id$jscomp$1$$.$cljs$core$IFn$_invoke$arity$1$("section-5") : $scroll_to_id$jscomp$1$$.call(null, "section-5");
                    }, children:"Committee"};
                  }();
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("button", $G__75950$jscomp$1$$) : $APP.$helix$core$jsx$$.call(null, "button", $G__75950$jscomp$1$$);
                }()]};
              }();
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__75934$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__75934$$);
            }()]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__75894$jscomp$1$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__75894$jscomp$1$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__75866$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__75866$$);
    }(), function() {
      var $G__75954$$ = {className:"w-full h-px bg-gradient-to-r from-transparent via-slate-300 dark:via-slate-700 to-transparent"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__75954$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__75954$$);
    }(), function() {
      var $G__75958$jscomp$1$$ = function() {
        return {className:"py-6 px-6 flex flex-col sm:flex-row justify-between items-center gap-3 max-w-5xl mx-auto", children:[function() {
          var $G__75962$$ = function() {
            return {className:"flex items-center gap-4", children:[function() {
              var $G__75966$jscomp$1$$ = {src:"images/graphics/61_biennale_logo_line.svg", className:"h-6 opacity-40 invert dark:invert-0"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("img", $G__75966$jscomp$1$$) : $APP.$helix$core$jsx$$.call(null, "img", $G__75966$jscomp$1$$);
            }(), function() {
              var $G__75970$jscomp$1$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["text-[10px] uppercase tracking-[0.15em] whitespace-nowrap", "text-slate-600  dark:text-slate-400"]))), children:"Armenia Pavilion · 61st Venice Biennale"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__75970$jscomp$1$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__75970$jscomp$1$$);
            }()]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__75962$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__75962$$);
        }(), function() {
          var $G__75974$$ = function() {
            return {className:"flex items-center gap-4", children:[function() {
              var $G__75978$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["text-[10px]", "text-slate-600  dark:text-slate-400"]))), children:"© 2026 AZ Studios Inc."};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__75978$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__75978$$);
            }(), function() {
              var $G__75982$jscomp$1$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["text-[10px]", "text-slate-400  dark:text-slate-600"]))), children:"v" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$("e344ee8")};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__75982$jscomp$1$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__75982$jscomp$1$$);
            }()]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__75974$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__75974$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__75958$jscomp$1$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__75958$jscomp$1$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("footer", $G__75842_map__75840_props__41636__auto__$jscomp$94_vec__75837$$) : $APP.$helix$core$jsxs$$.call(null, "footer", $G__75842_map__75840_props__41636__auto__$jscomp$94_vec__75837$$);
};
$amp$pages$budget$section$section_link$$ = function($G__86912_map__86910_map__86910__$1_props__41636__auto__$jscomp$95_vec__86907$$, $maybe_ref__41637__auto__$jscomp$95$$) {
  $G__86912_map__86910_map__86910__$1_props__41636__auto__$jscomp$95_vec__86907$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__86912_map__86910_map__86910__$1_props__41636__auto__$jscomp$95_vec__86907$$), $maybe_ref__41637__auto__$jscomp$95$$], null);
  $G__86912_map__86910_map__86910__$1_props__41636__auto__$jscomp$95_vec__86907$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__86912_map__86910_map__86910__$1_props__41636__auto__$jscomp$95_vec__86907$$, 0, null);
  $G__86912_map__86910_map__86910__$1_props__41636__auto__$jscomp$95_vec__86907$$ = $APP.$cljs$core$__destructure_map$$($G__86912_map__86910_map__86910__$1_props__41636__auto__$jscomp$95_vec__86907$$);
  var $title$jscomp$30$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__86912_map__86910_map__86910__$1_props__41636__auto__$jscomp$95_vec__86907$$, $APP.$cljs$cst$378$title$$), $anchor$jscomp$2$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__86912_map__86910_map__86910__$1_props__41636__auto__$jscomp$95_vec__86907$$, $cljs$cst$884$anchor$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $scroll_to_id$jscomp$2$$ = $APP.$amp$hooks$use_scroll_to$use_scroll_to_id$$();
  $G__86912_map__86910_map__86910__$1_props__41636__auto__$jscomp$95_vec__86907$$ = function() {
    return {onClick:function() {
      return $scroll_to_id$jscomp$2$$.$cljs$core$IFn$_invoke$arity$1$ ? $scroll_to_id$jscomp$2$$.$cljs$core$IFn$_invoke$arity$1$($anchor$jscomp$2$$) : $scroll_to_id$jscomp$2$$.call(null, $anchor$jscomp$2$$);
    }, className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$nav_link$$), children:[$title$jscomp$30$$, " ", function() {
      var $G__86916$$ = {"class":"w-4 h-4 inline-block ml-1"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$ui$icons$ChevronRightIcon$$, $G__86916$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$ui$icons$ChevronRightIcon$$, $G__86916$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("button", $G__86912_map__86910_map__86910__$1_props__41636__auto__$jscomp$95_vec__86907$$) : $APP.$helix$core$jsxs$$.call(null, "button", $G__86912_map__86910_map__86910__$1_props__41636__auto__$jscomp$95_vec__86907$$);
};
$amp$pages$budget$section$header$$ = function($G__86926_props__41636__auto__$jscomp$96$$) {
  $APP.$helix$core$extract_cljs_props$$($G__86926_props__41636__auto__$jscomp$96$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__86926_props__41636__auto__$jscomp$96$$ = function() {
    return {className:"relative", children:[function() {
      var $G__86930_G__86934$jscomp$inline_3375$$ = {};
      $G__86930_G__86934$jscomp$inline_3375$$ = {className:"absolute top-4 right-4 z-10", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$ui$theme_toggle$theme_toggle$$, $G__86930_G__86934$jscomp$inline_3375$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$ui$theme_toggle$theme_toggle$$, $G__86930_G__86934$jscomp$inline_3375$$)};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__86930_G__86934$jscomp$inline_3375$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__86930_G__86934$jscomp$inline_3375$$);
    }(), function() {
      var $G__86936_G__86940$jscomp$inline_3782$$ = {src:"images/graphics/61_biennale_logo_line.svg", className:"invert dark:invert-0"};
      $G__86936_G__86940$jscomp$inline_3782$$ = {className:"w-1/2 lg:w-1/4 lg:max-w-64 mt-4 lg:mt-8 px-4", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("img", $G__86936_G__86940$jscomp$inline_3782$$) : $APP.$helix$core$jsx$$.call(null, "img", $G__86936_G__86940$jscomp$inline_3782$$)};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__86936_G__86940$jscomp$inline_3782$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__86936_G__86940$jscomp$inline_3782$$);
    }(), function() {
      var $G__86944_G__86948$jscomp$inline_3785$$ = {translate:"no", className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["notranslate", $APP.$amp$styles$heading_page$$]))), children:"ARMENIA PAVILION, 61st INTERNATIONAL ART EXHIBITION LA BIENNALE DI VENEZIA"};
      $G__86944_G__86948$jscomp$inline_3785$$ = {className:"px-4 mt-12 lg:mt-16 max-w-4xl", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("h1", $G__86944_G__86948$jscomp$inline_3785$$) : $APP.$helix$core$jsx$$.call(null, "h1", $G__86944_G__86948$jscomp$inline_3785$$)};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__86944_G__86948$jscomp$inline_3785$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__86944_G__86948$jscomp$inline_3785$$);
    }(), function() {
      var $G__86952$$ = function() {
        return {className:"w-full px-4 mt-8", children:function() {
          var $G__86956$$ = function() {
            return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["text-slate-950  dark:text-white", "space-y-3 flex flex-col justify-start items-start"]))), children:[function() {
              var $G__86960$$ = {title:"1. Press Release", anchor:"section-1"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$pages$budget$section$section_link$$, $G__86960$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$budget$section$section_link$$, $G__86960$$);
            }(), function() {
              var $G__86964$$ = {title:"2. Overview - THE STUDIO", anchor:"section-2"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$pages$budget$section$section_link$$, $G__86964$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$budget$section$section_link$$, $G__86964$$);
            }(), function() {
              var $G__86968$$ = {title:"3. Budget", anchor:"section-3"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$pages$budget$section$section_link$$, $G__86968$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$budget$section$section_link$$, $G__86968$$);
            }(), function() {
              var $G__86972$$ = {title:"4. Cashflow", anchor:"section-4"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$pages$budget$section$section_link$$, $G__86972$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$budget$section$section_link$$, $G__86972$$);
            }(), function() {
              var $G__86976$$ = {title:"5. Committee", anchor:"section-5"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$pages$budget$section$section_link$$, $G__86976$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$budget$section$section_link$$, $G__86976$$);
            }(), function() {
              var $G__86980$$ = {title:"6. Patrons \x26 Sponsors", anchor:"section-6"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$pages$budget$section$section_link$$, $G__86980$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$budget$section$section_link$$, $G__86980$$);
            }(), function() {
              var $G__86984$$ = {title:"7. Location Details", anchor:"section-7"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$pages$budget$section$section_link$$, $G__86984$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$budget$section$section_link$$, $G__86984$$);
            }(), function() {
              var $G__86988$$ = {title:"8. Donation Info", anchor:"section-8"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$pages$budget$section$section_link$$, $G__86988$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$budget$section$section_link$$, $G__86988$$);
            }(), function() {
              var $G__86992$$ = {title:"9. Why Support", anchor:"section-9"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$pages$budget$section$section_link$$, $G__86992$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$budget$section$section_link$$, $G__86992$$);
            }()]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__86956$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__86956$$);
        }()};
      }();
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__86952$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__86952$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__86926_props__41636__auto__$jscomp$96$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__86926_props__41636__auto__$jscomp$96$$);
};
$amp$pages$budget$section$budget_section$$ = function($G__87002_props__41636__auto__$jscomp$97$$) {
  $APP.$helix$core$extract_cljs_props$$($G__87002_props__41636__auto__$jscomp$97$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__87002_props__41636__auto__$jscomp$97$$ = function() {
    return {"section-id":"budget-section", children:[function() {
      var $G__87007$$ = {};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$nav$back_up$back_up_nav$$, $G__87007$$) : $APP.$helix$core$jsx$$.call(null, $amp$nav$back_up$back_up_nav$$, $G__87007$$);
    }(), function() {
      var $G__87009$$ = function() {
        return {className:$APP.$helix$impl$props$normalize_class$$("w-full h-full " + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$("text-slate-900  dark:text-slate-100") + " grey-grad flex items-center justify-center flex-col"), children:function() {
          var $G__87013$$ = function() {
            return {className:$APP.$helix$impl$props$normalize_class$$("flex flex-col " + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$("w-full lg:w-8/12 min-w-0")), children:[function() {
              var $G__87017$$ = {};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$pages$budget$section$header$$, $G__87017$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$budget$section$header$$, $G__87017$$);
            }(), function() {
              var $G__87019$$ = {id:"section-1", idx:1, subtitle:"press", title:"press release", "show-budget-footer?":!0};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$pages$landing$press_release$press_release$$, $G__87019$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$pages$landing$press_release$press_release$$, $G__87019$$);
            }(), function() {
              var $G__87023$$ = {id:"section-2", idx:2, subtitle:"overview", title:"Armenian Pavilion - The Studio"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$pages$landing$studio$about_studio$$, $G__87023$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$pages$landing$studio$about_studio$$, $G__87023$$);
            }(), function() {
              var $G__87027$$ = {id:"section-3", subtitle:"financials", title:"budget"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$pages$budget$cost_breakdown$cost_breakdown$$, $G__87027$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$budget$cost_breakdown$cost_breakdown$$, $G__87027$$);
            }(), function() {
              var $G__87031$$ = {id:"section-4", subtitle:"financials", title:"cashflow"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$pages$budget$cash_flow$cash_flow$$, $G__87031$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$budget$cash_flow$cash_flow$$, $G__87031$$);
            }(), function() {
              var $G__87035$$ = {id:"section-5", subtitle:"team", title:"committee"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$pages$budget$committee$committee$$, $G__87035$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$budget$committee$committee$$, $G__87035$$);
            }(), function() {
              var $G__87039$$ = {id:"section-6", subtitle:"acknowledgements", title:"patrons \x26 sponsors"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$pages$budget$sponsors$sponsors_section$$, $G__87039$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$budget$sponsors$sponsors_section$$, $G__87039$$);
            }(), function() {
              var $G__87043$$ = {id:"section-7", subtitle:"venue", title:"location information"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$pages$budget$location$location_section$$, $G__87043$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$budget$location$location_section$$, $G__87043$$);
            }(), function() {
              var $G__87047$$ = {id:"section-8", subtitle:"non-profit", title:"donation information"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$pages$budget$non_profit$non_profit$$, $G__87047$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$budget$non_profit$non_profit$$, $G__87047$$);
            }(), function() {
              var $G__87051$$ = {id:"section-9", subtitle:"why it matters", title:"why support"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$pages$budget$why_support$why_support$$, $G__87051$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$budget$why_support$why_support$$, $G__87051$$);
            }(), function() {
              var $G__87055$$ = {};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$pages$budget$footer$budget_footer$$, $G__87055$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$budget$footer$budget_footer$$, $G__87055$$);
            }()]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__87013$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__87013$$);
        }()};
      }();
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__87009$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__87009$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$3$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$3$($APP.$amp$ui$section$section$$, $G__87002_props__41636__auto__$jscomp$97$$, "budget-section") : $APP.$helix$core$jsxs$$.call(null, $APP.$amp$ui$section$section$$, $G__87002_props__41636__auto__$jscomp$97$$, "budget-section");
};
$APP.$amp$pages$budget$page$budget_view$$ = function($G__87063_87072_G__87066_map__87062_map__87062__$1_props__41636__auto__$jscomp$98_vec__87059$$, $G__87064_87073_maybe_ref__41637__auto__$jscomp$98$$) {
  $G__87063_87072_G__87066_map__87062_map__87062__$1_props__41636__auto__$jscomp$98_vec__87059$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__87063_87072_G__87066_map__87062_map__87062__$1_props__41636__auto__$jscomp$98_vec__87059$$), $G__87064_87073_maybe_ref__41637__auto__$jscomp$98$$], null);
  $G__87063_87072_G__87066_map__87062_map__87062__$1_props__41636__auto__$jscomp$98_vec__87059$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__87063_87072_G__87066_map__87062_map__87062__$1_props__41636__auto__$jscomp$98_vec__87059$$, 0, null);
  $G__87063_87072_G__87066_map__87062_map__87062__$1_props__41636__auto__$jscomp$98_vec__87059$$ = $APP.$cljs$core$__destructure_map$$($G__87063_87072_G__87066_map__87062_map__87062__$1_props__41636__auto__$jscomp$98_vec__87059$$);
  var $active$jscomp$1$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__87063_87072_G__87066_map__87062_map__87062__$1_props__41636__auto__$jscomp$98_vec__87059$$, $cljs$cst$885$active$$), $intro_complete_callback$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__87063_87072_G__87066_map__87062_map__87062__$1_props__41636__auto__$jscomp$98_vec__87059$$, $cljs$cst$886$intro_complete_callback$$), $outro_complete_callback$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__87063_87072_G__87066_map__87062_map__87062__$1_props__41636__auto__$jscomp$98_vec__87059$$, 
  $cljs$cst$887$outro_complete_callback$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $comp_ref$jscomp$1$$ = $APP.$helix$hooks$use_ref$$("comp-ref");
  $G__87063_87072_G__87066_map__87062_map__87062__$1_props__41636__auto__$jscomp$98_vec__87059$$ = $APP.$helix$hooks$wrap_fx$$(function() {
    return $APP.$cljs$core$truth_$$($active$jscomp$1$$) ? $intro_complete_callback$$.$cljs$core$IFn$_invoke$arity$0$ ? $intro_complete_callback$$.$cljs$core$IFn$_invoke$arity$0$() : $intro_complete_callback$$.call(null) : $APP.$module$node_modules$gsap$dist$gsap$$.gsap.to($APP.$cljs$core$_deref$$($comp_ref$jscomp$1$$), {opacity:0, onComplete:$outro_complete_callback$$, duration:1});
  });
  $G__87064_87073_maybe_ref__41637__auto__$jscomp$98$$ = [$active$jscomp$1$$];
  $APP.$helix$hooks$raw_use_layout_effect$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$hooks$raw_use_layout_effect$$.$cljs$core$IFn$_invoke$arity$2$($G__87063_87072_G__87066_map__87062_map__87062__$1_props__41636__auto__$jscomp$98_vec__87059$$, $G__87064_87073_maybe_ref__41637__auto__$jscomp$98$$) : $APP.$helix$hooks$raw_use_layout_effect$$.call(null, $G__87063_87072_G__87066_map__87062_map__87062__$1_props__41636__auto__$jscomp$98_vec__87059$$, $G__87064_87073_maybe_ref__41637__auto__$jscomp$98$$);
  $G__87063_87072_G__87066_map__87062_map__87062__$1_props__41636__auto__$jscomp$98_vec__87059$$ = function() {
    var $G__87070$jscomp$inline_2843_JSCompiler_inline_result$jscomp$2290$$ = {};
    $G__87070$jscomp$inline_2843_JSCompiler_inline_result$jscomp$2290$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$pages$budget$section$budget_section$$, $G__87070$jscomp$inline_2843_JSCompiler_inline_result$jscomp$2290$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$budget$section$budget_section$$, $G__87070$jscomp$inline_2843_JSCompiler_inline_result$jscomp$2290$$);
    return {ref:$comp_ref$jscomp$1$$, children:$G__87070$jscomp$inline_2843_JSCompiler_inline_result$jscomp$2290$$};
  }();
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__87063_87072_G__87066_map__87062_map__87062__$1_props__41636__auto__$jscomp$98_vec__87059$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__87063_87072_G__87066_map__87062_map__87062__$1_props__41636__auto__$jscomp$98_vec__87059$$);
};
$cljs$cst$832$admin_apr_26$$ = new $APP.$cljs$core$Keyword$$(null, "admin-apr-26", "admin-apr-26", -1594649114);
$cljs$cst$846$venice_sep_26$$ = new $APP.$cljs$core$Keyword$$(null, "venice-sep-26", "venice-sep-26", 94763672);
$cljs$cst$805$venice_sep_25$$ = new $APP.$cljs$core$Keyword$$(null, "venice-sep-25", "venice-sep-25", 339442983);
$cljs$cst$824$la_feb_26$$ = new $APP.$cljs$core$Keyword$$(null, "la-feb-26", "la-feb-26", -2123365555);
$cljs$cst$834$venice_may_26$$ = new $APP.$cljs$core$Keyword$$(null, "venice-may-26", "venice-may-26", 2072857227);
$cljs$cst$887$outro_complete_callback$$ = new $APP.$cljs$core$Keyword$$(null, "outro-complete-callback", "outro-complete-callback", -1973874519);
$cljs$cst$799$priority$$ = new $APP.$cljs$core$Keyword$$(null, "priority", "priority", 1431093715);
$cljs$cst$879$accent$$ = new $APP.$cljs$core$Keyword$$(null, "accent", "accent", -1826298468);
$cljs$cst$785$venue$$ = new $APP.$cljs$core$Keyword$$(null, "venue", "venue", -731609643);
$cljs$cst$828$la_mar_26$$ = new $APP.$cljs$core$Keyword$$(null, "la-mar-26", "la-mar-26", 1380188343);
$cljs$cst$861$n_crit$$ = new $APP.$cljs$core$Keyword$$(null, "n-crit", "n-crit", 769065100);
$cljs$cst$850$admin_oct_26$$ = new $APP.$cljs$core$Keyword$$(null, "admin-oct-26", "admin-oct-26", 1040051883);
$cljs$cst$882$supporter$$ = new $APP.$cljs$core$Keyword$$(null, "supporter", "supporter", 789659821);
$cljs$cst$810$admin_oct_25$$ = new $APP.$cljs$core$Keyword$$(null, "admin-oct-25", "admin-oct-25", 1520025024);
$cljs$cst$837$venice_jun_26$$ = new $APP.$cljs$core$Keyword$$(null, "venice-jun-26", "venice-jun-26", -604048435);
$cljs$cst$864$has_now$$ = new $APP.$cljs$core$Keyword$$(null, "has-now", "has-now", 654554843);
$cljs$cst$788$the_studio$$ = new $APP.$cljs$core$Keyword$$(null, "the-studio", "the-studio", 106848628);
$cljs$cst$870$month$$ = new $APP.$cljs$core$Keyword$$(null, "month", "month", -1960248533);
$cljs$cst$881$benefactor$$ = new $APP.$cljs$core$Keyword$$(null, "benefactor", "benefactor", -1181533202);
$cljs$cst$812$la_nov_25$$ = new $APP.$cljs$core$Keyword$$(null, "la-nov-25", "la-nov-25", 245379756);
$cljs$cst$822$contingency_jan_26$$ = new $APP.$cljs$core$Keyword$$(null, "contingency-jan-26", "contingency-jan-26", 22175239);
$cljs$cst$840$venice_jul_26$$ = new $APP.$cljs$core$Keyword$$(null, "venice-jul-26", "venice-jul-26", -1607597583);
$cljs$cst$860$entries$$ = new $APP.$cljs$core$Keyword$$(null, "entries", "entries", -86943161);
$cljs$cst$859$all_paid$$ = new $APP.$cljs$core$Keyword$$(null, "all-paid", "all-paid", 366243873);
$cljs$cst$800$normal$$ = new $APP.$cljs$core$Keyword$$(null, "normal", "normal", -1519123858);
$cljs$cst$797$admin_jul_25$$ = new $APP.$cljs$core$Keyword$$(null, "admin-jul-25", "admin-jul-25", 264378453);
$cljs$cst$841$admin_jul_26$$ = new $APP.$cljs$core$Keyword$$(null, "admin-jul-26", "admin-jul-26", 149736986);
$cljs$cst$862$n_paid$$ = new $APP.$cljs$core$Keyword$$(null, "n-paid", "n-paid", -1703730024);
$cljs$cst$793$documentation$$ = new $APP.$cljs$core$Keyword$$(null, "documentation", "documentation", 1889593999);
$cljs$cst$804$contingency_aug_25$$ = new $APP.$cljs$core$Keyword$$(null, "contingency-aug-25", "contingency-aug-25", -1541402500);
$cljs$cst$845$contingency_aug_26$$ = new $APP.$cljs$core$Keyword$$(null, "contingency-aug-26", "contingency-aug-26", 1402254021);
$cljs$cst$794$debt_raised$$ = new $APP.$cljs$core$Keyword$$(null, "debt-raised", "debt-raised", -1855117742);
$cljs$cst$838$admin_jun_26$$ = new $APP.$cljs$core$Keyword$$(null, "admin-jun-26", "admin-jun-26", -541328069);
$cljs$cst$781$expanded_items$$ = new $APP.$cljs$core$Keyword$$(null, "expanded-items", "expanded-items", 749320313);
$cljs$cst$873$tier$$ = new $APP.$cljs$core$Keyword$$(null, "tier", "tier", -1071893374);
$cljs$cst$814$contingency_nov_25$$ = new $APP.$cljs$core$Keyword$$(null, "contingency-nov-25", "contingency-nov-25", 2119549379);
$cljs$cst$854$contingency_nov_26$$ = new $APP.$cljs$core$Keyword$$(null, "contingency-nov-26", "contingency-nov-26", 195578875);
$cljs$cst$783$label$$ = new $APP.$cljs$core$Keyword$$(null, "label", "label", 1718410804);
$cljs$cst$778$tax$$ = new $APP.$cljs$core$Keyword$$(null, "tax", "tax", -226525810);
$cljs$cst$886$intro_complete_callback$$ = new $APP.$cljs$core$Keyword$$(null, "intro-complete-callback", "intro-complete-callback", 1121849196);
$cljs$cst$885$active$$ = new $APP.$cljs$core$Keyword$$(null, "active", "active", 1895962068);
$cljs$cst$789$logistics$$ = new $APP.$cljs$core$Keyword$$(null, "logistics", "logistics", 712670037);
$cljs$cst$835$admin_may_26$$ = new $APP.$cljs$core$Keyword$$(null, "admin-may-26", "admin-may-26", 1889129108);
$cljs$cst$821$admin_jan_26$$ = new $APP.$cljs$core$Keyword$$(null, "admin-jan-26", "admin-jan-26", 142603763);
$cljs$cst$823$venice_feb_26$$ = new $APP.$cljs$core$Keyword$$(null, "venice-feb-26", "venice-feb-26", -1651098139);
$cljs$cst$818$venice_jan_26$$ = new $APP.$cljs$core$Keyword$$(null, "venice-jan-26", "venice-jan-26", -68766759);
$cljs$cst$863$n_items$$ = new $APP.$cljs$core$Keyword$$(null, "n-items", "n-items", -880425095);
$cljs$cst$851$contingency_oct_26$$ = new $APP.$cljs$core$Keyword$$(null, "contingency-oct-26", "contingency-oct-26", -60258419);
$cljs$cst$811$contingency_oct_25$$ = new $APP.$cljs$core$Keyword$$(null, "contingency-oct-25", "contingency-oct-25", 400053796);
$cljs$cst$829$admin_mar_26$$ = new $APP.$cljs$core$Keyword$$(null, "admin-mar-26", "admin-mar-26", -338557509);
$cljs$cst$801$paid$$ = new $APP.$cljs$core$Keyword$$(null, "paid", "paid", 1195086102);
$cljs$cst$776$details$$ = new $APP.$cljs$core$Keyword$$(null, "details", "details", 1956795411);
$cljs$cst$855$venice_dec_26$$ = new $APP.$cljs$core$Keyword$$(null, "venice-dec-26", "venice-dec-26", 1428198827);
$cljs$cst$827$venice_mar_26$$ = new $APP.$cljs$core$Keyword$$(null, "venice-mar-26", "venice-mar-26", -1280378980);
$cljs$cst$880$order$$ = new $APP.$cljs$core$Keyword$$(null, "order", "order", -1254677256);
$cljs$cst$825$admin_feb_26$$ = new $APP.$cljs$core$Keyword$$(null, "admin-feb-26", "admin-feb-26", 1788307477);
$cljs$cst$833$contingency_apr_26$$ = new $APP.$cljs$core$Keyword$$(null, "contingency-apr-26", "contingency-apr-26", -197755096);
$cljs$cst$866$entry$$ = new $APP.$cljs$core$Keyword$$(null, "entry", "entry", 505168823);
$cljs$cst$856$admin_dec_26$$ = new $APP.$cljs$core$Keyword$$(null, "admin-dec-26", "admin-dec-26", 1444073491);
$cljs$cst$816$admin_dec_25$$ = new $APP.$cljs$core$Keyword$$(null, "admin-dec-25", "admin-dec-25", 629109073);
$cljs$cst$784$item$$ = new $APP.$cljs$core$Keyword$$(null, "item", "item", 249373802);
$cljs$cst$853$admin_nov_26$$ = new $APP.$cljs$core$Keyword$$(null, "admin-nov-26", "admin-nov-26", 899776291);
$cljs$cst$813$admin_nov_25$$ = new $APP.$cljs$core$Keyword$$(null, "admin-nov-25", "admin-nov-25", -26984311);
$cljs$cst$798$due$$ = new $APP.$cljs$core$Keyword$$(null, "due", "due", -1754731313);
$cljs$cst$782$description$$ = new $APP.$cljs$core$Keyword$$(null, "description", "description", -1428560544);
$cljs$cst$819$critical$$ = new $APP.$cljs$core$Keyword$$(null, "critical", "critical", -838839117);
$cljs$cst$842$contingency_jul_26$$ = new $APP.$cljs$core$Keyword$$(null, "contingency-jul-26", "contingency-jul-26", 1067897141);
$cljs$cst$802$contingency_jul_25$$ = new $APP.$cljs$core$Keyword$$(null, "contingency-jul-25", "contingency-jul-25", -1729678391);
$cljs$cst$857$contingency_dec_26$$ = new $APP.$cljs$core$Keyword$$(null, "contingency-dec-26", "contingency-dec-26", -60155593);
$cljs$cst$817$contingency_dec_25$$ = new $APP.$cljs$core$Keyword$$(null, "contingency-dec-25", "contingency-dec-25", 1266897629);
$cljs$cst$836$contingency_may_26$$ = new $APP.$cljs$core$Keyword$$(null, "contingency-may-26", "contingency-may-26", -484422222);
$cljs$cst$839$contingency_jun_26$$ = new $APP.$cljs$core$Keyword$$(null, "contingency-jun-26", "contingency-jun-26", 28697636);
$cljs$cst$775$amount$$ = new $APP.$cljs$core$Keyword$$(null, "amount", "amount", 364489504);
$cljs$cst$872$past_QMARK_$$ = new $APP.$cljs$core$Keyword$$(null, "past?", "past?", -125779631);
$cljs$cst$796$cash_flow_model$$ = new $APP.$cljs$core$Keyword$$(null, "cash-flow-model", "cash-flow-model", -883317453);
$cljs$cst$865$dot$$ = new $APP.$cljs$core$Keyword$$(null, "dot", "dot", 1442709401);
$cljs$cst$868$expanded_QMARK_$$ = new $APP.$cljs$core$Keyword$$(null, "expanded?", "expanded?", 2055832296);
$cljs$cst$780$set_expanded_items$$ = new $APP.$cljs$core$Keyword$$(null, "set-expanded-items", "set-expanded-items", -112840979);
$cljs$cst$777$rate$$ = new $APP.$cljs$core$Keyword$$(null, "rate", "rate", -1428659698);
$cljs$cst$826$contingency_feb_26$$ = new $APP.$cljs$core$Keyword$$(null, "contingency-feb-26", "contingency-feb-26", 509692640);
$cljs$cst$791$marketing$$ = new $APP.$cljs$core$Keyword$$(null, "marketing", "marketing", 2054879774);
$cljs$cst$787$la_prod$$ = new $APP.$cljs$core$Keyword$$(null, "la-prod", "la-prod", 1444492244);
$cljs$cst$877$patron$$ = new $APP.$cljs$core$Keyword$$(null, "patron", "patron", -1174215364);
$cljs$cst$858$fill$$ = new $APP.$cljs$core$Keyword$$(null, "fill", "fill", 883462889);
$cljs$cst$795$funds_raised$$ = new $APP.$cljs$core$Keyword$$(null, "funds-raised", "funds-raised", -197009653);
$cljs$cst$848$contingency_sep_26$$ = new $APP.$cljs$core$Keyword$$(null, "contingency-sep-26", "contingency-sep-26", 479744418);
$cljs$cst$808$contingency_sep_25$$ = new $APP.$cljs$core$Keyword$$(null, "contingency-sep-25", "contingency-sep-25", -1119739004);
$cljs$cst$883$members$$ = new $APP.$cljs$core$Keyword$$(null, "members", "members", 159001018);
$cljs$cst$779$cost_data$$ = new $APP.$cljs$core$Keyword$$(null, "cost-data", "cost-data", -1991336764);
$cljs$cst$852$venice_nov_26$$ = new $APP.$cljs$core$Keyword$$(null, "venice-nov-26", "venice-nov-26", 1130078643);
$cljs$cst$867$rollup$$ = new $APP.$cljs$core$Keyword$$(null, "rollup", "rollup", -1742987157);
$cljs$cst$878$individual$$ = new $APP.$cljs$core$Keyword$$(null, "individual", "individual", -1643964808);
$cljs$cst$847$admin_sep_26$$ = new $APP.$cljs$core$Keyword$$(null, "admin-sep-26", "admin-sep-26", -700799960);
$cljs$cst$806$admin_sep_25$$ = new $APP.$cljs$core$Keyword$$(null, "admin-sep-25", "admin-sep-25", 753699567);
$cljs$cst$831$venice_apr_26$$ = new $APP.$cljs$core$Keyword$$(null, "venice-apr-26", "venice-apr-26", -1422709865);
$cljs$cst$876$institution$$ = new $APP.$cljs$core$Keyword$$(null, "institution", "institution", -70023072);
$cljs$cst$875$logo$$ = new $APP.$cljs$core$Keyword$$(null, "logo", "logo", 1237980263);
$cljs$cst$807$high$$ = new $APP.$cljs$core$Keyword$$(null, "high", "high", 2027297808);
$cljs$cst$790$opening$$ = new $APP.$cljs$core$Keyword$$(null, "opening", "opening", 450993708);
$cljs$cst$884$anchor$$ = new $APP.$cljs$core$Keyword$$(null, "anchor", "anchor", 1549638489);
$cljs$cst$786$admin$$ = new $APP.$cljs$core$Keyword$$(null, "admin", "admin", -1239101627);
$cljs$cst$830$contingency_mar_26$$ = new $APP.$cljs$core$Keyword$$(null, "contingency-mar-26", "contingency-mar-26", 1126538363);
$cljs$cst$849$venice_oct_26$$ = new $APP.$cljs$core$Keyword$$(null, "venice-oct-26", "venice-oct-26", -1699834368);
$cljs$cst$809$venice_oct_25$$ = new $APP.$cljs$core$Keyword$$(null, "venice-oct-25", "venice-oct-25", -641394196);
$cljs$cst$871$now$$ = new $APP.$cljs$core$Keyword$$(null, "now", "now", -1650525531);
$cljs$cst$843$venice_aug_26$$ = new $APP.$cljs$core$Keyword$$(null, "venice-aug-26", "venice-aug-26", 520228272);
$cljs$cst$844$admin_aug_26$$ = new $APP.$cljs$core$Keyword$$(null, "admin-aug-26", "admin-aug-26", -1522732065);
$cljs$cst$803$admin_aug_25$$ = new $APP.$cljs$core$Keyword$$(null, "admin-aug-25", "admin-aug-25", -1520609899);
$cljs$cst$874$founding_patron$$ = new $APP.$cljs$core$Keyword$$(null, "founding-patron", "founding-patron", -1158627303);
$cljs$cst$815$la_dec_25$$ = new $APP.$cljs$core$Keyword$$(null, "la-dec-25", "la-dec-25", -844494315);
$cljs$cst$820$la_jan_26$$ = new $APP.$cljs$core$Keyword$$(null, "la-jan-26", "la-jan-26", -425305268);
$cljs$cst$792$publication$$ = new $APP.$cljs$core$Keyword$$(null, "publication", "publication", -1089697399);
$cljs$cst$869$target_total$$ = new $APP.$cljs$core$Keyword$$(null, "target-total", "target-total", 158942849);
$APP.$JSCompiler_StaticMethods_beforeLoadModuleCode$$("budget-view");
var $amp$pages$budget$committee$committee_members$$ = new $APP.$cljs$core$PersistentVector$$(null, 9, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$192$name$$, "Archbishop Derderian", $APP.$cljs$cst$752$role$$, "Committee Lead", $APP.$cljs$cst$435$img_src$$, "https://atd-722658831.imgix.net/committee/hovnan.png", $APP.$cljs$cst$439$credit$$, "Courtesy of the Committee"], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, 
[$APP.$cljs$cst$192$name$$, "Tony Shafrazi", $APP.$cljs$cst$752$role$$, "Chief Curator", $APP.$cljs$cst$435$img_src$$, "https://atd-722658831.imgix.net/committee/tony.png", $APP.$cljs$cst$439$credit$$, "Courtesy of the Committee"], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$192$name$$, "Tina Chakarian", $APP.$cljs$cst$752$role$$, "Curator", $APP.$cljs$cst$435$img_src$$, "https://atd-722658831.imgix.net/committee/tina.png", $APP.$cljs$cst$439$credit$$, "Courtesy of the Committee"], 
null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$192$name$$, "Zadik Zadikian", $APP.$cljs$cst$752$role$$, "Artist", $APP.$cljs$cst$435$img_src$$, "https://atd-722658831.imgix.net/committee/zadik.png", $APP.$cljs$cst$439$credit$$, "Courtesy of the Committee"], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$192$name$$, "Rafi Ourfalian", $APP.$cljs$cst$752$role$$, "Legal Advisor", $APP.$cljs$cst$435$img_src$$, "https://atd-722658831.imgix.net/committee/rafi.png", 
$APP.$cljs$cst$439$credit$$, "Courtesy of the Committee"], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$192$name$$, "Khachik Khudikyan", $APP.$cljs$cst$752$role$$, "Logistics Advisor", $APP.$cljs$cst$435$img_src$$, "https://atd-722658831.imgix.net/committee/chris.png", $APP.$cljs$cst$439$credit$$, "Courtesy of the Committee"], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$192$name$$, "Andranik Torosyan", $APP.$cljs$cst$752$role$$, "Financial Advisor", 
$APP.$cljs$cst$435$img_src$$, "https://atd-722658831.imgix.net/committee/andy.png", $APP.$cljs$cst$439$credit$$, "Courtesy of the Committee"], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$192$name$$, "Aram Alajajian", $APP.$cljs$cst$752$role$$, "Architect", $APP.$cljs$cst$435$img_src$$, "https://atd-722658831.imgix.net/committee/aram.png", $APP.$cljs$cst$439$credit$$, "Courtesy of the Committee"], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$192$name$$, 
"Vik Hovsepian", $APP.$cljs$cst$752$role$$, "Committee Member", $APP.$cljs$cst$439$credit$$, "Courtesy of the Committee", $APP.$cljs$cst$435$img_src$$, "https://atd-722658831.imgix.net/committee/vic.png"], null)], null);
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$201$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$202$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$pages$budget$committee$preview$$, "", null, null) : (void 0).call(null, $amp$pages$budget$committee$preview$$, "", null, null)), $APP.$helix$core$register_BANG_$$($amp$pages$budget$committee$preview$$, 
"amp.pages.budget.committee/preview"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$201$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$202$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$pages$budget$committee$details$$, "", null, null) : (void 0).call(null, $amp$pages$budget$committee$details$$, "", null, null)), $APP.$helix$core$register_BANG_$$($amp$pages$budget$committee$details$$, 
"amp.pages.budget.committee/details"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$201$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$202$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$pages$budget$committee$committee_member_card$$, "", null, null) : (void 0).call(null, $amp$pages$budget$committee$committee_member_card$$, "", null, 
null)), $APP.$helix$core$register_BANG_$$($amp$pages$budget$committee$committee_member_card$$, "amp.pages.budget.committee/committee-member-card"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$201$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$202$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$pages$budget$committee$committee_gallery$$, "", null, null) : (void 0).call(null, $amp$pages$budget$committee$committee_gallery$$, "", null, null)), 
$APP.$helix$core$register_BANG_$$($amp$pages$budget$committee$committee_gallery$$, "amp.pages.budget.committee/committee-gallery"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$201$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$202$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$pages$budget$committee$committee$$, "", null, null) : (void 0).call(null, $amp$pages$budget$committee$committee$$, "", null, null)), $APP.$helix$core$register_BANG_$$($amp$pages$budget$committee$committee$$, 
"amp.pages.budget.committee/committee"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$201$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$202$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$pages$budget$table$total_section$$, "", null, null) : (void 0).call(null, $amp$pages$budget$table$total_section$$, "", null, null)), $APP.$helix$core$register_BANG_$$($amp$pages$budget$table$total_section$$, 
"amp.pages.budget.table/total-section"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$201$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$202$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$pages$budget$table$detail_line_item$$, "", null, null) : (void 0).call(null, $amp$pages$budget$table$detail_line_item$$, "", null, null)), $APP.$helix$core$register_BANG_$$($amp$pages$budget$table$detail_line_item$$, 
"amp.pages.budget.table/detail-line-item"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$201$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$202$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$pages$budget$table$section_line_item$$, '(hooks/use-ref (str "section-" idx))(use-scroll-to-ref)', null, null) : (void 0).call(null, $amp$pages$budget$table$section_line_item$$, 
'(hooks/use-ref (str "section-" idx))(use-scroll-to-ref)', null, null)), $APP.$helix$core$register_BANG_$$($amp$pages$budget$table$section_line_item$$, "amp.pages.budget.table/section-line-item"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$201$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$202$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$pages$budget$table$budget_table$$, "(hooks/use-state #{})", null, null) : (void 0).call(null, $amp$pages$budget$table$budget_table$$, "(hooks/use-state #{})", 
null, null)), $APP.$helix$core$register_BANG_$$($amp$pages$budget$table$budget_table$$, "amp.pages.budget.table/budget-table"));
var $amp$pages$budget$cost_breakdown$cost_data$$ = new $APP.$cljs$core$PersistentVector$$(null, 9, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$200$id$$, $cljs$cst$785$venue$$, $APP.$cljs$cst$378$title$$, "Venue \x26 Operations", $cljs$cst$782$description$$, "Secures and operates the Venice exhibition venue for the full Biennale period: rental, staffing, regulatory compliance, construction, lighting, taxes, and on-site overhead including team lodging and living expenses—ensuring the Pavilion is compliant, safe, and fully operational.", 
$cljs$cst$776$details$$, new $APP.$cljs$core$PersistentVector$$(null, 14, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$581$group$$, "Base", $APP.$cljs$cst$378$title$$, "Base Rent", $cljs$cst$775$amount$$, 145600, $cljs$cst$782$description$$, "Exclusive use of venue April–December 2026 for the full Biennale period."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$581$group$$, "Base", $APP.$cljs$cst$378$title$$, 
"Base Staff", $cljs$cst$775$amount$$, 50000, $cljs$cst$782$description$$, "Exhibition staff during the opening period, including security and front-of-house personnel."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$581$group$$, "Base", $APP.$cljs$cst$378$title$$, "Curatorial Mediator", $cljs$cst$775$amount$$, 25000, $cljs$cst$782$description$$, "Trained curatorial mediator providing visitor guidance, interpretation, and artwork oversight."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 
4, [$APP.$cljs$cst$581$group$$, "Base", $APP.$cljs$cst$378$title$$, "Cleaning", $cljs$cst$775$amount$$, 7000, $cljs$cst$782$description$$, "Weekly professional cleaning and periodic deep cleans for a high-traffic international exhibition."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$581$group$$, "Permitting", $APP.$cljs$cst$378$title$$, "Permits \x26 Signage", $cljs$cst$775$amount$$, 10000, $cljs$cst$782$description$$, "SCIA permits, exhibition signage approvals, and municipal permits for operational compliance in Venice."], 
null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$581$group$$, "Permitting", $APP.$cljs$cst$378$title$$, "Fire Safety Cert.", $cljs$cst$775$amount$$, 3500, $cljs$cst$782$description$$, "Mandatory fire-safety certification, inspections, and documentation required by Venetian authorities."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$581$group$$, "Permitting", $APP.$cljs$cst$378$title$$, "Liability Ins.", $cljs$cst$775$amount$$, 2500, $cljs$cst$782$description$$, 
"Public liability insurance covering visitors, staff, and third parties for the full exhibition period."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$581$group$$, "Construction", $APP.$cljs$cst$378$title$$, "Partitions \x26 Walls", $cljs$cst$775$amount$$, 9500, $cljs$cst$782$description$$, "Windows, door alterations, partitions, and minor structural adjustments to adapt the venue."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$581$group$$, 
"Construction", $APP.$cljs$cst$378$title$$, "Lighting", $cljs$cst$775$amount$$, 7500, $cljs$cst$782$description$$, "Overhead ceiling-mounted, freestanding, and supplemental exhibition lighting equipment and installation."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$581$group$$, "Taxes", $APP.$cljs$cst$378$title$$, "Signage Taxes", $cljs$cst$775$amount$$, 1500, $cljs$cst$782$description$$, "Municipal banner and signage tax for exterior and wayfinding signage during the Biennale."], 
null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$581$group$$, "Taxes", $APP.$cljs$cst$378$title$$, "VAT 22%", $cljs$cst$775$amount$$, 55E3, $cljs$cst$782$description$$, "Italian value-added tax on applicable venue services."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$581$group$$, "Overhead", $APP.$cljs$cst$378$title$$, "Team Lodging", $cljs$cst$775$amount$$, 95E3, $cljs$cst$782$description$$, "Accommodation for the Venice studio team. $125/night per head, 2 months pre-production + 10 months operations."], 
null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$581$group$$, "Overhead", $APP.$cljs$cst$378$title$$, "Per Diem", $cljs$cst$775$amount$$, 66E3, $cljs$cst$782$description$$, "Daily living expenses for the Venice-based team. $100/day per head during active operating months."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$581$group$$, "Overhead", $APP.$cljs$cst$378$title$$, "Project Insurance", $cljs$cst$775$amount$$, 5E4, $cljs$cst$782$description$$, 
"Project insurance coverage for the Venice operations period. 10 months at $5,000/month."], null)], null)], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$200$id$$, $cljs$cst$786$admin$$, $APP.$cljs$cst$378$title$$, "Administration", $cljs$cst$782$description$$, "Core leadership, project management, and operational overhead supporting curatorial direction, artist oversight, coordination, compliance, travel, and lodging—ensuring continuity across the full Biennale cycle.", 
$cljs$cst$776$details$$, new $APP.$cljs$core$PersistentVector$$(null, 6, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$581$group$$, "Staff", $APP.$cljs$cst$378$title$$, "Curators", $cljs$cst$775$amount$$, 9E4, $cljs$cst$782$description$$, "Curatorial leadership. 18 months at $5,000/month."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$581$group$$, "Staff", $APP.$cljs$cst$378$title$$, "Artist", $cljs$cst$775$amount$$, 
45E3, $cljs$cst$782$description$$, "Artist fees. 18 months at $2,500/month."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$581$group$$, "Staff", $APP.$cljs$cst$378$title$$, "Project Coordinator", $cljs$cst$775$amount$$, 45E3, $cljs$cst$782$description$$, "Project coordination. 18 months at $2,500/month."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$581$group$$, "Travel \x26 Overhead", $APP.$cljs$cst$378$title$$, "Team Travel", $cljs$cst$775$amount$$, 
49E3, $cljs$cst$782$description$$, "International and regional travel for core team during scouting, installation, opening week, and milestones."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$581$group$$, "Travel \x26 Overhead", $APP.$cljs$cst$378$title$$, "Team Lodging", $cljs$cst$775$amount$$, 7500, $cljs$cst$782$description$$, "Accommodation for core team during opening week and critical on-site periods in Venice."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 
4, [$APP.$cljs$cst$581$group$$, "Travel \x26 Overhead", $APP.$cljs$cst$378$title$$, "Misc", $cljs$cst$775$amount$$, 5500, $cljs$cst$782$description$$, "Miscellaneous administrative expenses, software, tools, and incidentals. 11 months at $500/month."], null)], null)], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$200$id$$, $cljs$cst$787$la_prod$$, $APP.$cljs$cst$378$title$$, "LA Production", $cljs$cst$782$description$$, "Los Angeles–based production: skilled labor, casting, mold-making, materials, studio overhead, and supplies—ensuring museum-grade fabrication and crating prior to shipment to Venice.", 
$cljs$cst$776$details$$, new $APP.$cljs$core$PersistentVector$$(null, 21, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$581$group$$, "Labor", $APP.$cljs$cst$378$title$$, "Lead Caster", $cljs$cst$775$amount$$, 37625, $cljs$cst$782$description$$, "Lead caster. 5 months at $7,525/month."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$581$group$$, "Labor", $APP.$cljs$cst$378$title$$, "Caster", $cljs$cst$775$amount$$, 
22500, $cljs$cst$782$description$$, "Casting professional. 5 months at $4,500/month."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$581$group$$, "Labor", $APP.$cljs$cst$378$title$$, "General Assistant", $cljs$cst$775$amount$$, 21500, $cljs$cst$782$description$$, "General production assistant. 5 months at $4,300/month."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$581$group$$, "Labor", $APP.$cljs$cst$378$title$$, "Mold Maker", $cljs$cst$775$amount$$, 
15E3, $cljs$cst$782$description$$, "Specialist mold maker. 2 months at $7,500/month."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$581$group$$, "Labor", $APP.$cljs$cst$378$title$$, "Foam Sprayer", $cljs$cst$775$amount$$, 9E3, $cljs$cst$782$description$$, "Contract foam sprayer for structural cores. 2 months at $4,500/month."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$581$group$$, "Labor", $APP.$cljs$cst$378$title$$, "Casting Asst. ×3", 
$cljs$cst$775$amount$$, 9E3, $cljs$cst$782$description$$, "3 casting assistants. 2 months at $1,500/month each."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$581$group$$, "Labor", $APP.$cljs$cst$378$title$$, "Packers ×4", $cljs$cst$775$amount$$, 14E3, $cljs$cst$782$description$$, "4 packers for crating and shipping prep. 1 month at $3,500 each."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$581$group$$, "Labor", $APP.$cljs$cst$378$title$$, 
"Crate Makers ×2", $cljs$cst$775$amount$$, 1E4, $cljs$cst$782$description$$, "2 crate makers for custom shipping crates. 1 month at $5,000 each."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$581$group$$, "Overhead", $APP.$cljs$cst$378$title$$, "Studio Rental", $cljs$cst$775$amount$$, 22500, $cljs$cst$782$description$$, "LA studio rent for fabrication. 5 months at $4,500/month."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$581$group$$, "Overhead", 
$APP.$cljs$cst$378$title$$, "Foam Space Rental", $cljs$cst$775$amount$$, 5500, $cljs$cst$782$description$$, "Additional foam production space rental. 2 months at $2,750/month."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$581$group$$, "Overhead", $APP.$cljs$cst$378$title$$, "Utilities", $cljs$cst$775$amount$$, 3E3, $cljs$cst$782$description$$, "Utilities for the LA production facility. 2 months at $1,500/month."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 
4, [$APP.$cljs$cst$581$group$$, "Materials", $APP.$cljs$cst$378$title$$, "Pigment", $cljs$cst$775$amount$$, 11500, $cljs$cst$782$description$$, "High-quality pigments integrated into plaster at casting."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$581$group$$, "Materials", $APP.$cljs$cst$378$title$$, "Honeycomb", $cljs$cst$775$amount$$, 1500, $cljs$cst$782$description$$, "Structural honeycomb material for lightweight internal reinforcement."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 
4, [$APP.$cljs$cst$581$group$$, "Materials", $APP.$cljs$cst$378$title$$, "Polymers", $cljs$cst$775$amount$$, 1500, $cljs$cst$782$description$$, "Binders and polymer materials used in finishing and protection."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$581$group$$, "Materials", $APP.$cljs$cst$378$title$$, "Foam Material", $cljs$cst$775$amount$$, 21E3, $cljs$cst$782$description$$, "Lightweight foam cores for structural integrity while minimizing shipping weight."], 
null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$581$group$$, "Materials", $APP.$cljs$cst$378$title$$, "Plaster", $cljs$cst$775$amount$$, 4500, $cljs$cst$782$description$$, "Primary casting material for all sculptural units."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$581$group$$, "Materials", $APP.$cljs$cst$378$title$$, "Supplies", $cljs$cst$775$amount$$, 10500, $cljs$cst$782$description$$, "Consumable supplies used during casting and finishing."], 
null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$581$group$$, "Materials", $APP.$cljs$cst$378$title$$, "Mold Supplies", $cljs$cst$775$amount$$, 17500, $cljs$cst$782$description$$, "Custom mold materials, CNC mother units, and fabrication aids."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$581$group$$, "Materials", $APP.$cljs$cst$378$title$$, "Crate Materials", $cljs$cst$775$amount$$, 15E3, $cljs$cst$782$description$$, "Materials for constructing custom shipping crates."], 
null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$581$group$$, "Materials", $APP.$cljs$cst$378$title$$, "Packing Supplies", $cljs$cst$775$amount$$, 5E3, $cljs$cst$782$description$$, "Packing materials for securing artwork during international transit."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$581$group$$, "Materials", $APP.$cljs$cst$378$title$$, "Misc", $cljs$cst$775$amount$$, 7500, $cljs$cst$782$description$$, "Miscellaneous production expenses. 5 months at $1,500/month."], 
null)], null)], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$200$id$$, $cljs$cst$788$the_studio$$, $APP.$cljs$cst$378$title$$, "The Studio", $cljs$cst$782$description$$, "On-site operation of THE STUDIO in Venice: staffing, installation and de-installation crews, local materials, and daily production—supporting continuous fabrication and reconfiguration throughout the Biennale.", $cljs$cst$776$details$$, new $APP.$cljs$core$PersistentVector$$(null, 15, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, 
[new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$581$group$$, "Staff", $APP.$cljs$cst$378$title$$, "Studio Asst. #1", $cljs$cst$775$amount$$, 54E3, $cljs$cst$782$description$$, "Full-time studio assistant. 9 months at $6,000/month."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$581$group$$, "Staff", $APP.$cljs$cst$378$title$$, "Studio Asst. #2", $cljs$cst$775$amount$$, 46500, $cljs$cst$782$description$$, "Studio assistant. 6 months at $6,000 + 3 months at $3,500."], 
null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$581$group$$, "Staff", $APP.$cljs$cst$378$title$$, "Studio Asst. #3", $cljs$cst$775$amount$$, 23500, $cljs$cst$782$description$$, "Studio assistant. 1 month at $6,000 + 5 months at $3,500."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$581$group$$, "Staff", $APP.$cljs$cst$378$title$$, "Studio Asst. #4", $cljs$cst$775$amount$$, 23500, $cljs$cst$782$description$$, "Studio assistant. 1 month at $6,000 + 5 months at $3,500."], 
null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$581$group$$, "Staff", $APP.$cljs$cst$378$title$$, "Studio Asst. #5", $cljs$cst$775$amount$$, 6E3, $cljs$cst$782$description$$, "Temporary studio assistant. 1 month at $6,000."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$581$group$$, "Staff", $APP.$cljs$cst$378$title$$, "Studio Asst. #6", $cljs$cst$775$amount$$, 6E3, $cljs$cst$782$description$$, "Temporary studio assistant. 1 month at $6,000."], 
null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$581$group$$, "Install / Uninstall", $APP.$cljs$cst$378$title$$, "Installers ×4", $cljs$cst$775$amount$$, 32E3, $cljs$cst$782$description$$, "4 installers for install and uninstall. 2 engagements at $4,000 each."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$581$group$$, "Install / Uninstall", $APP.$cljs$cst$378$title$$, "Crate Makers ×2", $cljs$cst$775$amount$$, 11E3, $cljs$cst$782$description$$, 
"2 crate makers for Venice de-install crating. 1 engagement at $5,500 each."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$581$group$$, "Materials", $APP.$cljs$cst$378$title$$, "Foam Material", $cljs$cst$775$amount$$, 11500, $cljs$cst$782$description$$, "Venice-sourced foam materials for ongoing on-site fabrication."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$581$group$$, "Materials", $APP.$cljs$cst$378$title$$, "Pigment", $cljs$cst$775$amount$$, 
6750, $cljs$cst$782$description$$, "Pigments for on-site casting and finishing work."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$581$group$$, "Materials", $APP.$cljs$cst$378$title$$, "Plaster", $cljs$cst$775$amount$$, 4750, $cljs$cst$782$description$$, "Plaster for on-site sculptural production."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$581$group$$, "Materials", $APP.$cljs$cst$378$title$$, "Supplies", $cljs$cst$775$amount$$, 4750, 
$cljs$cst$782$description$$, "Consumable supplies for ongoing studio activity."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$581$group$$, "Materials", $APP.$cljs$cst$378$title$$, "Crate Materials", $cljs$cst$775$amount$$, 7500, $cljs$cst$782$description$$, "Materials for crating artwork for return shipment."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$581$group$$, "Materials", $APP.$cljs$cst$378$title$$, "Packing Supplies", $cljs$cst$775$amount$$, 
2500, $cljs$cst$782$description$$, "Packing materials for securing artwork at close-out."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$581$group$$, "Materials", $APP.$cljs$cst$378$title$$, "Misc Materials", $cljs$cst$775$amount$$, 4250, $cljs$cst$782$description$$, "Miscellaneous materials and expendables for studio operations."], null)], null)], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$200$id$$, $cljs$cst$789$logistics$$, $APP.$cljs$cst$378$title$$, 
"Logistics \x26 Transport", $cljs$cst$782$description$$, "International and local transport under Biennale conditions: freight, insurance, port handling, lagoon barge transport, forklift operations, storage, and reverse logistics for return shipment.", $cljs$cst$776$details$$, new $APP.$cljs$core$PersistentVector$$(null, 17, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$581$group$$, "International Freight", $APP.$cljs$cst$378$title$$, 
"Ship LA → Venice", $cljs$cst$775$amount$$, 3E4, $cljs$cst$782$description$$, "International freight from Los Angeles to Venice for all crated artwork and materials."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$581$group$$, "International Freight", $APP.$cljs$cst$378$title$$, "Ship Venice → LA", $cljs$cst$775$amount$$, 3E4, $cljs$cst$782$description$$, "Return international freight from Venice to Los Angeles after close-out."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 
4, [$APP.$cljs$cst$581$group$$, "International Freight", $APP.$cljs$cst$378$title$$, "Transit Insurance", $cljs$cst$775$amount$$, 12E3, $cljs$cst$782$description$$, "Insurance coverage for artwork during international transit."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$581$group$$, "Install / Uninstall", $APP.$cljs$cst$378$title$$, "Installers (Venice)", $cljs$cst$775$amount$$, 7200, $cljs$cst$782$description$$, "Local Venice installation crew. 4 installers for on-site install."], 
null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$581$group$$, "Install / Uninstall", $APP.$cljs$cst$378$title$$, "Uninstallers (Venice)", $cljs$cst$775$amount$$, 9E3, $cljs$cst$782$description$$, "Local Venice de-installation crew. 5 uninstallers for close-out."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$581$group$$, "Local Transport", $APP.$cljs$cst$378$title$$, "Port Handling", $cljs$cst$775$amount$$, 2500, $cljs$cst$782$description$$, "Offloading crates at Venice port; includes terminal fees and labor."], 
null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$581$group$$, "Local Transport", $APP.$cljs$cst$378$title$$, "Barge (Port → Stor.)", $cljs$cst$775$amount$$, 3E3, $cljs$cst$782$description$$, "Lagoon barge transport for crates from port to storage facility."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$581$group$$, "Local Transport", $APP.$cljs$cst$378$title$$, "Trucking (Stor. → Venue)", $cljs$cst$775$amount$$, 1200, $cljs$cst$782$description$$, 
"Truck transport from storage depot to Biennale venue access point."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$581$group$$, "Local Transport", $APP.$cljs$cst$378$title$$, "Barge (Stor. → Venue)", $cljs$cst$775$amount$$, 3E3, $cljs$cst$782$description$$, "Barge shipping for crates/materials to venue area via Venice canals."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$581$group$$, "Local Transport", $APP.$cljs$cst$378$title$$, "Forklift \x26 Operator", 
$cljs$cst$775$amount$$, 1300, $cljs$cst$782$description$$, "Forklift + licensed operator for unloading/loading at venue. 2 days at $650/day."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$581$group$$, "Local Transport", $APP.$cljs$cst$378$title$$, "Handling Crew", $cljs$cst$775$amount$$, 500, $cljs$cst$782$description$$, "Movers for crate handling, navigation of canals and venue access."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$581$group$$, 
"Storage", $APP.$cljs$cst$378$title$$, "Short-Term Storage", $cljs$cst$775$amount$$, 1200, $cljs$cst$782$description$$, "Storage of crates between arrival and installation. 60 crates for 20 days."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$581$group$$, "Storage", $APP.$cljs$cst$378$title$$, "Empty Crate Storage", $cljs$cst$775$amount$$, 2E3, $cljs$cst$782$description$$, "Storage of empty crates during the Biennale exhibition run. 200 days."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 
4, [$APP.$cljs$cst$581$group$$, "Storage", $APP.$cljs$cst$378$title$$, "Waste Removal", $cljs$cst$775$amount$$, 1E3, $cljs$cst$782$description$$, "Removal of packing material, foam waste, and install debris."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$581$group$$, "Reverse Logistics", $APP.$cljs$cst$378$title$$, "Reverse Barge", $cljs$cst$775$amount$$, 3E3, $cljs$cst$782$description$$, "Return transport of crates/materials after uninstall."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 
4, [$APP.$cljs$cst$581$group$$, "Reverse Logistics", $APP.$cljs$cst$378$title$$, "Reverse Trucking", $cljs$cst$775$amount$$, 1200, $cljs$cst$782$description$$, "Transport of crates back to port for outbound shipping."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$581$group$$, "Reverse Logistics", $APP.$cljs$cst$378$title$$, "Reverse Port Handling", $cljs$cst$775$amount$$, 2500, $cljs$cst$782$description$$, "Terminal fees + labor for reloading outbound container."], null)], 
null)], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$200$id$$, $cljs$cst$790$opening$$, $APP.$cljs$cst$378$title$$, "Opening Week", $cljs$cst$782$description$$, "Opening reception and first public visibility of the Pavilion: hospitality, staffing, technical support, press and VIP coordination—executed during the Biennale's most compressed period.", $cljs$cst$776$details$$, new $APP.$cljs$core$PersistentVector$$(null, 11, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, 
[new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$581$group$$, "Hospitality", $APP.$cljs$cst$378$title$$, "Catering — Food", $cljs$cst$775$amount$$, 5250, $cljs$cst$782$description$$, "Passed hors d'oeuvres for opening night reception. 75 guests at $70/guest."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$581$group$$, "Hospitality", $APP.$cljs$cst$378$title$$, "Catering — Beverages", $cljs$cst$775$amount$$, 1500, $cljs$cst$782$description$$, "Prosecco, wine, and non-alcoholic drinks. 100 guests at $15/guest."], 
null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$581$group$$, "Hospitality", $APP.$cljs$cst$378$title$$, "Catering Staff", $cljs$cst$775$amount$$, 1500, $cljs$cst$782$description$$, "3–6 servers + 1 event captain for opening night."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$581$group$$, "Hospitality", $APP.$cljs$cst$378$title$$, "Rentals", $cljs$cst$775$amount$$, 1500, $cljs$cst$782$description$$, "Tables, linens, glassware; Venice incurs transport surcharges due to canals."], 
null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$581$group$$, "Event Ops", $APP.$cljs$cst$378$title$$, "Event Coordinator", $cljs$cst$775$amount$$, 1500, $cljs$cst$782$description$$, "Scheduling, setup, guest flow, liaising with pavilion staff and caterer."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$581$group$$, "Event Ops", $APP.$cljs$cst$378$title$$, "Security", $cljs$cst$775$amount$$, 800, $cljs$cst$782$description$$, "Safe capacity management at openings per Biennale requirements."], 
null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$581$group$$, "Event Ops", $APP.$cljs$cst$378$title$$, "Audio, Light \x26 Tech", $cljs$cst$775$amount$$, 1E3, $cljs$cst$782$description$$, "Small speaker system, microphone, ambient lighting reinforcement."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$581$group$$, "Event Ops", $APP.$cljs$cst$378$title$$, "Event Photography", $cljs$cst$775$amount$$, 500, $cljs$cst$782$description$$, "Opening night event photography coverage."], 
null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$581$group$$, "Event Ops", $APP.$cljs$cst$378$title$$, "Invitations", $cljs$cst$775$amount$$, 500, $cljs$cst$782$description$$, "Printing or premium digital distribution of invitations."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$581$group$$, "VIP Programs", $APP.$cljs$cst$378$title$$, "VIP Press Preview", $cljs$cst$775$amount$$, 1500, $cljs$cst$782$description$$, "Staff + scheduling for VIP/press walkthroughs during opening week."], 
null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$581$group$$, "VIP Programs", $APP.$cljs$cst$378$title$$, "VIP Water Taxi", $cljs$cst$775$amount$$, 1500, $cljs$cst$782$description$$, "Transport allowance for VIPs/officials. 8 rides at $120/ride."], null)], null)], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$200$id$$, $cljs$cst$791$marketing$$, $APP.$cljs$cst$378$title$$, "Marketing \x26 PR", $cljs$cst$782$description$$, "Visibility and communications: identity design, PR, advertising, social media, and press activity—positioning the Pavilion within the global Biennale discourse.", 
$cljs$cst$776$details$$, new $APP.$cljs$core$PersistentVector$$(null, 18, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$581$group$$, "Design", $APP.$cljs$cst$378$title$$, "Visual Identity", $cljs$cst$775$amount$$, 2500, $cljs$cst$782$description$$, "Design of pavilion identity, key visual and main poster."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$581$group$$, "Design", $APP.$cljs$cst$378$title$$, 
"Essentials Package", $cljs$cst$775$amount$$, 1500, $cljs$cst$782$description$$, "Press kit, invitations, social templates, digital ads."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$581$group$$, "Design", $APP.$cljs$cst$378$title$$, "Website \x26 Hosting", $cljs$cst$775$amount$$, 7500, $cljs$cst$782$description$$, "Design and hosting of the pavilion website."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$581$group$$, "Design", $APP.$cljs$cst$378$title$$, 
"OOH Design", $cljs$cst$775$amount$$, 1500, $cljs$cst$782$description$$, "Design for totems and out-of-home placements."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$581$group$$, "Design", $APP.$cljs$cst$378$title$$, "Exhibition Graphics", $cljs$cst$775$amount$$, 1500, $cljs$cst$782$description$$, "Entrance graphics, wall texts, wayfinding signage."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$581$group$$, "Writing", $APP.$cljs$cst$378$title$$, 
"Social Copywriting", $cljs$cst$775$amount$$, 1500, $cljs$cst$782$description$$, "Ongoing caption writing, messaging, narrative scripting."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$581$group$$, "Writing", $APP.$cljs$cst$378$title$$, "PR Writing", $cljs$cst$775$amount$$, 1500, $cljs$cst$782$description$$, "Speeches, press releases, media statements."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$581$group$$, "Advertising", $APP.$cljs$cst$378$title$$, 
"Totem Placement", $cljs$cst$775$amount$$, 8500, $cljs$cst$782$description$$, "Rental + printing + installation for Biennale duration."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$581$group$$, "Advertising", $APP.$cljs$cst$378$title$$, "Vaporetto Wraps", $cljs$cst$775$amount$$, 12500, $cljs$cst$782$description$$, "Rental + production for 2–3 vaporetto lines over Biennale duration."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$581$group$$, 
"Advertising", $APP.$cljs$cst$378$title$$, "Poster Printing", $cljs$cst$775$amount$$, 5E3, $cljs$cst$782$description$$, "250 posters at $20 each for venue and city placements."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$581$group$$, "Advertising", $APP.$cljs$cst$378$title$$, "Outdoor Posters", $cljs$cst$775$amount$$, 3E3, $cljs$cst$782$description$$, "Secondary placements across Venice — 50 posters at $60 each."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 
4, [$APP.$cljs$cst$581$group$$, "Advertising", $APP.$cljs$cst$378$title$$, "Social Media Ads", $cljs$cst$775$amount$$, 2500, $cljs$cst$782$description$$, "Instagram, Facebook, and TikTok ads for 7 months."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$581$group$$, "Advertising", $APP.$cljs$cst$378$title$$, "Social Campaign Mgmt", $cljs$cst$775$amount$$, 2500, $cljs$cst$782$description$$, "Strategy, posting, optimization, reporting."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 
4, [$APP.$cljs$cst$581$group$$, "Advertising", $APP.$cljs$cst$378$title$$, "Digital Pub Ads", $cljs$cst$775$amount$$, 2500, $cljs$cst$782$description$$, "Ads on e-flux, ArtNews, Hyperallergic, Frieze."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$581$group$$, "Advertising", $APP.$cljs$cst$378$title$$, "Print Pub Ads", $cljs$cst$775$amount$$, 5E3, $cljs$cst$782$description$$, "Artforum, Art Newspaper, and similar print publications."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 
4, [$APP.$cljs$cst$581$group$$, "PR", $APP.$cljs$cst$378$title$$, "PR — Pre-Opening", $cljs$cst$775$amount$$, 1500, $cljs$cst$782$description$$, "Press relations, writing, pitching, coordination."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$581$group$$, "PR", $APP.$cljs$cst$378$title$$, "PR — Ongoing", $cljs$cst$775$amount$$, 1500, $cljs$cst$782$description$$, "Sustained PR, press tracking, releases, interviews over 7 months."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 
4, [$APP.$cljs$cst$581$group$$, "PR", $APP.$cljs$cst$378$title$$, "Marketing Mgmt Fee", $cljs$cst$775$amount$$, 2500, $cljs$cst$782$description$$, "Overall coordination of marketing and media buys."], null)], null)], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$200$id$$, $cljs$cst$792$publication$$, $APP.$cljs$cst$378$title$$, "Publications", $cljs$cst$782$description$$, "Catalogue and printed materials: commissioned texts, design, editing, printing, totes, and stationery—ensuring long-term scholarly and institutional presence.", 
$cljs$cst$776$details$$, new $APP.$cljs$core$PersistentVector$$(null, 12, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$581$group$$, "Writing", $APP.$cljs$cst$378$title$$, "Curatorial Essay", $cljs$cst$775$amount$$, 2500, $cljs$cst$782$description$$, "Primary curatorial essay for catalogue and website."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$581$group$$, "Writing", $APP.$cljs$cst$378$title$$, 
"Catalogue Essays", $cljs$cst$775$amount$$, 4E3, $cljs$cst$782$description$$, "Commissioned essays by 4 invited writers and scholars at $1,000 each."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$581$group$$, "Catalogue", $APP.$cljs$cst$378$title$$, "Design", $cljs$cst$775$amount$$, 7500, $cljs$cst$782$description$$, "Design of exhibition catalogue (120 pages, soft cover)."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$581$group$$, "Catalogue", 
$APP.$cljs$cst$378$title$$, "Editing \x26 Layout", $cljs$cst$775$amount$$, 2500, $cljs$cst$782$description$$, "Editing and layout of copy, images, and inserts."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$581$group$$, "Catalogue", $APP.$cljs$cst$378$title$$, "Printing", $cljs$cst$775$amount$$, 12E3, $cljs$cst$782$description$$, "High-quality color printing, 120 pages. 150 copies at $80 each."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$581$group$$, 
"Catalogue", $APP.$cljs$cst$378$title$$, "Proofs \x26 Shipping", $cljs$cst$775$amount$$, 1E3, $cljs$cst$782$description$$, "Proofs, shipping, and miscellaneous printing costs."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$581$group$$, "Tote", $APP.$cljs$cst$378$title$$, "Design", $cljs$cst$775$amount$$, 2500, $cljs$cst$782$description$$, "Design of exhibition totes."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$581$group$$, "Tote", $APP.$cljs$cst$378$title$$, 
"Printing", $cljs$cst$775$amount$$, 4500, $cljs$cst$782$description$$, "High-quality silkscreen run. 300 totes at $15 each."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$581$group$$, "Tote", $APP.$cljs$cst$378$title$$, "Proofs \x26 Shipping", $cljs$cst$775$amount$$, 1E3, $cljs$cst$782$description$$, "Proofs, shipping, and miscellaneous costs for totes."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$581$group$$, "Stationery", $APP.$cljs$cst$378$title$$, 
"Design", $cljs$cst$775$amount$$, 1500, $cljs$cst$782$description$$, "Cards, postcards, flyers design."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$581$group$$, "Stationery", $APP.$cljs$cst$378$title$$, "Printing", $cljs$cst$775$amount$$, 1500, $cljs$cst$782$description$$, "300 pieces at $5 each."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$581$group$$, "Stationery", $APP.$cljs$cst$378$title$$, "Proofs \x26 Shipping", $cljs$cst$775$amount$$, 
250, $cljs$cst$782$description$$, "Proofs, shipping, and miscellaneous stationery costs."], null)], null)], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$200$id$$, $cljs$cst$793$documentation$$, $APP.$cljs$cst$378$title$$, "Documentation", $cljs$cst$782$description$$, "Comprehensive visual documentation: cinema-quality film production, photography, sound recording, editing, social media deliverables, and archiving—supporting press visibility, scholarship, and institutional legacy.", 
$cljs$cst$776$details$$, new $APP.$cljs$core$PersistentVector$$(null, 12, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$581$group$$, "Production", $APP.$cljs$cst$378$title$$, "Camera \x26 Lighting", $cljs$cst$775$amount$$, 1E4, $cljs$cst$782$description$$, "Rental package for cinema cameras, lenses, lighting, audio kits."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$581$group$$, "Production", $APP.$cljs$cst$378$title$$, 
"DPs ×2", $cljs$cst$775$amount$$, 20400, $cljs$cst$782$description$$, "Lead cinematographers for install, opening, and walkthroughs. 2 DPs × 12 days × $850/day."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$581$group$$, "Production", $APP.$cljs$cst$378$title$$, "Assistant / Gaffer", $cljs$cst$775$amount$$, 4500, $cljs$cst$782$description$$, "Lighting and camera support during shoots. 10 days at $450/day."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$581$group$$, 
"Production", $APP.$cljs$cst$378$title$$, "Sound Recording", $cljs$cst$775$amount$$, 2800, $cljs$cst$782$description$$, "Location audio capture, ambient sound, dialogue. 8 days at $350/day."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$581$group$$, "Production", $APP.$cljs$cst$378$title$$, "Photo — Install", $cljs$cst$775$amount$$, 1750, $cljs$cst$782$description$$, "High-resolution documentation during installation. 5 days at $350/day."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 
4, [$APP.$cljs$cst$581$group$$, "Production", $APP.$cljs$cst$378$title$$, "Photo — Exhibition", $cljs$cst$775$amount$$, 1800, $cljs$cst$782$description$$, "Final artwork + pavilion architecture photography. 3 days at $600/day."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$581$group$$, "Production", $APP.$cljs$cst$378$title$$, "Photo — Opening", $cljs$cst$775$amount$$, 1400, $cljs$cst$782$description$$, "Coverage for VIP events, public programs, press preview. 2 days at $700/day."], 
null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$581$group$$, "Post", $APP.$cljs$cst$378$title$$, "Film Assembly", $cljs$cst$775$amount$$, 3E3, $cljs$cst$782$description$$, "Initial cut of installation and exhibition film. 6 days at $500/day."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$581$group$$, "Post", $APP.$cljs$cst$378$title$$, "Final Cut \x26 Color", $cljs$cst$775$amount$$, 2400, $cljs$cst$782$description$$, "Professional colorist and finishing for final delivery. 4 days at $600/day."], 
null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$581$group$$, "Post", $APP.$cljs$cst$378$title$$, "Sound Edit \x26 Mix", $cljs$cst$775$amount$$, 1600, $cljs$cst$782$description$$, "Cleanup, music integration, final audio polish. 4 days at $400/day."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$581$group$$, "Post", $APP.$cljs$cst$378$title$$, "Social Deliverables", $cljs$cst$775$amount$$, 6E3, $cljs$cst$782$description$$, "Short-form clips optimized for IG/FB/TikTok. 5 days at $1,200/day."], 
null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$581$group$$, "Post", $APP.$cljs$cst$378$title$$, "Backup \x26 Archive", $cljs$cst$775$amount$$, 750, $cljs$cst$782$description$$, "Redundancy, hard drives, digital archiving of all materials."], null)], null)], null)], null);
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$201$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$202$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$pages$budget$cost_breakdown$preview$$, "", null, null) : (void 0).call(null, $amp$pages$budget$cost_breakdown$preview$$, "", null, null)), $APP.$helix$core$register_BANG_$$($amp$pages$budget$cost_breakdown$preview$$, 
"amp.pages.budget.cost-breakdown/preview"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$201$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$202$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$pages$budget$cost_breakdown$details$$, "", null, null) : (void 0).call(null, $amp$pages$budget$cost_breakdown$details$$, "", null, null)), $APP.$helix$core$register_BANG_$$($amp$pages$budget$cost_breakdown$details$$, 
"amp.pages.budget.cost-breakdown/details"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$201$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$202$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$pages$budget$cost_breakdown$footer$$, "", null, null) : (void 0).call(null, $amp$pages$budget$cost_breakdown$footer$$, "", null, null)), $APP.$helix$core$register_BANG_$$($amp$pages$budget$cost_breakdown$footer$$, 
"amp.pages.budget.cost-breakdown/footer"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$201$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$202$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$pages$budget$cost_breakdown$cost_breakdown$$, "", null, null) : (void 0).call(null, $amp$pages$budget$cost_breakdown$cost_breakdown$$, "", null, null)), 
$APP.$helix$core$register_BANG_$$($amp$pages$budget$cost_breakdown$cost_breakdown$$, "amp.pages.budget.cost-breakdown/cost-breakdown"));
var $amp$pages$budget$location$lazy_video$$ = $APP.$amp$utils$lazy_loading$lazy_component_STAR_$$(new $APP.$shadow$lazy$Loadable$$(new $APP.$cljs$core$PersistentVector$$(null, 1, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, ["video-background"], null), function() {
  return $APP.$amp$ui$video_background$video_background$$;
}));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$201$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$202$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$pages$budget$location$preview_text$$, "", null, null) : (void 0).call(null, $amp$pages$budget$location$preview_text$$, "", null, null)), $APP.$helix$core$register_BANG_$$($amp$pages$budget$location$preview_text$$, 
"amp.pages.budget.location/preview-text"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$201$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$202$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$pages$budget$location$preview$$, "", null, null) : (void 0).call(null, $amp$pages$budget$location$preview$$, "", null, null)), $APP.$helix$core$register_BANG_$$($amp$pages$budget$location$preview$$, 
"amp.pages.budget.location/preview"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$201$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$202$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$pages$budget$location$full_details$$, '(use-touch-enabled)(hooks/use-ref "outer-ctx")(use-intersection-observer outer-ctx)(use-touch-enabled)(hooks/use-ref "outer-ctx")(use-intersection-observer outer-ctx)', 
null, null) : (void 0).call(null, $amp$pages$budget$location$full_details$$, '(use-touch-enabled)(hooks/use-ref "outer-ctx")(use-intersection-observer outer-ctx)(use-touch-enabled)(hooks/use-ref "outer-ctx")(use-intersection-observer outer-ctx)', null, null)), $APP.$helix$core$register_BANG_$$($amp$pages$budget$location$full_details$$, "amp.pages.budget.location/full-details"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$201$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$202$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$pages$budget$location$location_section$$, "", null, null) : (void 0).call(null, $amp$pages$budget$location$location_section$$, "", null, null)), $APP.$helix$core$register_BANG_$$($amp$pages$budget$location$location_section$$, 
"amp.pages.budget.location/location-section"));
var $amp$pages$budget$cash_flow$cashflow_data$$ = new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$cljs$cst$794$debt_raised$$, 0, $cljs$cst$795$funds_raised$$, 175000, $cljs$cst$796$cash_flow_model$$, $APP.$cljs$core$PersistentVector$fromArray$$([new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$200$id$$, $cljs$cst$797$admin_jul_25$$, $APP.$cljs$cst$378$title$$, "Admin — Core Team (Jul)", $cljs$cst$798$due$$, "2025-07-15", $cljs$cst$775$amount$$, 10000, $cljs$cst$799$priority$$, 
$cljs$cst$800$normal$$, $APP.$cljs$cst$12$status$$, $cljs$cst$801$paid$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$200$id$$, $cljs$cst$802$contingency_jul_25$$, $APP.$cljs$cst$378$title$$, "Contingency (Jul)", $cljs$cst$798$due$$, "2025-07-20", $cljs$cst$775$amount$$, 500, $cljs$cst$799$priority$$, $cljs$cst$800$normal$$, $APP.$cljs$cst$12$status$$, $cljs$cst$801$paid$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$200$id$$, $cljs$cst$803$admin_aug_25$$, 
$APP.$cljs$cst$378$title$$, "Admin — Core Team (Aug)", $cljs$cst$798$due$$, "2025-08-15", $cljs$cst$775$amount$$, 10000, $cljs$cst$799$priority$$, $cljs$cst$800$normal$$, $APP.$cljs$cst$12$status$$, $cljs$cst$801$paid$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$200$id$$, $cljs$cst$804$contingency_aug_25$$, $APP.$cljs$cst$378$title$$, "Contingency (Aug)", $cljs$cst$798$due$$, "2025-08-20", $cljs$cst$775$amount$$, 500, $cljs$cst$799$priority$$, $cljs$cst$800$normal$$, 
$APP.$cljs$cst$12$status$$, $cljs$cst$801$paid$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$200$id$$, $cljs$cst$805$venice_sep_25$$, $APP.$cljs$cst$378$title$$, "Venice — Lodging \x26 Per Diem (Sep)", $cljs$cst$798$due$$, "2025-09-05", $cljs$cst$775$amount$$, 13000, $cljs$cst$799$priority$$, $cljs$cst$800$normal$$, $APP.$cljs$cst$12$status$$, $cljs$cst$801$paid$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$200$id$$, $cljs$cst$806$admin_sep_25$$, 
$APP.$cljs$cst$378$title$$, "Admin — Core Team + Travel (Sep)", $cljs$cst$798$due$$, "2025-09-15", $cljs$cst$775$amount$$, 20000, $cljs$cst$799$priority$$, $cljs$cst$807$high$$, $APP.$cljs$cst$12$status$$, $cljs$cst$801$paid$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$200$id$$, $cljs$cst$808$contingency_sep_25$$, $APP.$cljs$cst$378$title$$, "Contingency (Sep)", $cljs$cst$798$due$$, "2025-09-20", $cljs$cst$775$amount$$, 650, $cljs$cst$799$priority$$, $cljs$cst$800$normal$$, 
$APP.$cljs$cst$12$status$$, $cljs$cst$801$paid$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$200$id$$, $cljs$cst$809$venice_oct_25$$, $APP.$cljs$cst$378$title$$, "Venice — Lodging \x26 Per Diem (Oct)", $cljs$cst$798$due$$, "2025-10-05", $cljs$cst$775$amount$$, 13E3, $cljs$cst$799$priority$$, $cljs$cst$800$normal$$, $APP.$cljs$cst$12$status$$, $cljs$cst$801$paid$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$200$id$$, $cljs$cst$810$admin_oct_25$$, 
$APP.$cljs$cst$378$title$$, "Admin — Core Team + Travel (Oct)", $cljs$cst$798$due$$, "2025-10-15", $cljs$cst$775$amount$$, 2E4, $cljs$cst$799$priority$$, $cljs$cst$807$high$$, $APP.$cljs$cst$12$status$$, $cljs$cst$801$paid$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$200$id$$, $cljs$cst$811$contingency_oct_25$$, $APP.$cljs$cst$378$title$$, "Contingency (Oct)", $cljs$cst$798$due$$, "2025-10-20", $cljs$cst$775$amount$$, 650, $cljs$cst$799$priority$$, $cljs$cst$800$normal$$, 
$APP.$cljs$cst$12$status$$, $cljs$cst$801$paid$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$200$id$$, $cljs$cst$812$la_nov_25$$, $APP.$cljs$cst$378$title$$, "LA Production — Phase 1 Startup (Nov)", $cljs$cst$798$due$$, "2025-11-10", $cljs$cst$775$amount$$, 31325, $cljs$cst$799$priority$$, $cljs$cst$807$high$$, $APP.$cljs$cst$12$status$$, $cljs$cst$801$paid$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$200$id$$, $cljs$cst$813$admin_nov_25$$, 
$APP.$cljs$cst$378$title$$, "Admin — Core Team (Nov)", $cljs$cst$798$due$$, "2025-11-15", $cljs$cst$775$amount$$, 1E4, $cljs$cst$799$priority$$, $cljs$cst$800$normal$$, $APP.$cljs$cst$12$status$$, $cljs$cst$801$paid$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$200$id$$, $cljs$cst$814$contingency_nov_25$$, $APP.$cljs$cst$378$title$$, "Contingency (Nov)", $cljs$cst$798$due$$, "2025-11-20", $cljs$cst$775$amount$$, 1566, $cljs$cst$799$priority$$, $cljs$cst$800$normal$$, 
$APP.$cljs$cst$12$status$$, $cljs$cst$801$paid$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$200$id$$, $cljs$cst$815$la_dec_25$$, $APP.$cljs$cst$378$title$$, "LA Production — Phase 1 Continued (Dec)", $cljs$cst$798$due$$, "2025-12-10", $cljs$cst$775$amount$$, 31325, $cljs$cst$799$priority$$, $cljs$cst$807$high$$, $APP.$cljs$cst$12$status$$, $cljs$cst$801$paid$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$200$id$$, $cljs$cst$816$admin_dec_25$$, 
$APP.$cljs$cst$378$title$$, "Admin — Core Team (Dec)", $cljs$cst$798$due$$, "2025-12-15", $cljs$cst$775$amount$$, 1E4, $cljs$cst$799$priority$$, $cljs$cst$800$normal$$, $APP.$cljs$cst$12$status$$, $cljs$cst$801$paid$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$200$id$$, $cljs$cst$817$contingency_dec_25$$, $APP.$cljs$cst$378$title$$, "Contingency (Dec)", $cljs$cst$798$due$$, "2025-12-20", $cljs$cst$775$amount$$, 1566, $cljs$cst$799$priority$$, $cljs$cst$800$normal$$, 
$APP.$cljs$cst$12$status$$, $cljs$cst$801$paid$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$200$id$$, $cljs$cst$818$venice_jan_26$$, $APP.$cljs$cst$378$title$$, "Venice — Venue Tranche 1 (10%)", $cljs$cst$798$due$$, "2026-01-05", $cljs$cst$775$amount$$, 30650, $cljs$cst$799$priority$$, $cljs$cst$819$critical$$, $APP.$cljs$cst$12$status$$, $cljs$cst$801$paid$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$200$id$$, $cljs$cst$820$la_jan_26$$, 
$APP.$cljs$cst$378$title$$, "LA Production — Phase 2 (Jan)", $cljs$cst$798$due$$, "2026-01-10", $cljs$cst$775$amount$$, 30325, $cljs$cst$799$priority$$, $cljs$cst$807$high$$, $APP.$cljs$cst$12$status$$, $cljs$cst$801$paid$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$200$id$$, $cljs$cst$821$admin_jan_26$$, $APP.$cljs$cst$378$title$$, "Admin — Core Team (Jan)", $cljs$cst$798$due$$, "2026-01-15", $cljs$cst$775$amount$$, 1E4, $cljs$cst$799$priority$$, $cljs$cst$800$normal$$, 
$APP.$cljs$cst$12$status$$, $cljs$cst$801$paid$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$200$id$$, $cljs$cst$822$contingency_jan_26$$, $APP.$cljs$cst$378$title$$, "Contingency (Jan)", $cljs$cst$798$due$$, "2026-01-20", $cljs$cst$775$amount$$, 3049, $cljs$cst$799$priority$$, $cljs$cst$800$normal$$, $APP.$cljs$cst$12$status$$, $cljs$cst$801$paid$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$200$id$$, $cljs$cst$823$venice_feb_26$$, $APP.$cljs$cst$378$title$$, 
"Venice — Venue Tranche 2 + 3 (60%)", $cljs$cst$798$due$$, "2026-02-05", $cljs$cst$775$amount$$, 183900, $cljs$cst$799$priority$$, $cljs$cst$819$critical$$, $APP.$cljs$cst$12$status$$, $APP.$cljs$cst$14$pending$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$200$id$$, $cljs$cst$824$la_feb_26$$, $APP.$cljs$cst$378$title$$, "LA Production — Phase 3 (Feb)", $cljs$cst$798$due$$, "2026-02-10", $cljs$cst$775$amount$$, 74825, $cljs$cst$799$priority$$, $cljs$cst$819$critical$$, 
$APP.$cljs$cst$12$status$$, $APP.$cljs$cst$14$pending$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$200$id$$, $cljs$cst$825$admin_feb_26$$, $APP.$cljs$cst$378$title$$, "Admin — Core Team + Misc (Feb)", $cljs$cst$798$due$$, "2026-02-15", $cljs$cst$775$amount$$, 10500, $cljs$cst$799$priority$$, $cljs$cst$807$high$$, $APP.$cljs$cst$12$status$$, $APP.$cljs$cst$14$pending$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$200$id$$, $cljs$cst$826$contingency_feb_26$$, 
$APP.$cljs$cst$378$title$$, "Contingency (Feb)", $cljs$cst$798$due$$, "2026-02-20", $cljs$cst$775$amount$$, 12936, $cljs$cst$799$priority$$, $cljs$cst$800$normal$$, $APP.$cljs$cst$12$status$$, $APP.$cljs$cst$14$pending$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$200$id$$, $cljs$cst$827$venice_mar_26$$, $APP.$cljs$cst$378$title$$, "Venice — Venue Tranche 4 + Logistics (Outbound) + Setup", $cljs$cst$798$due$$, "2026-03-05", $cljs$cst$775$amount$$, 172200, $cljs$cst$799$priority$$, 
$cljs$cst$819$critical$$, $APP.$cljs$cst$12$status$$, $APP.$cljs$cst$14$pending$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$200$id$$, $cljs$cst$828$la_mar_26$$, $APP.$cljs$cst$378$title$$, "LA Production — Final Phase + Crating (Mar)", $cljs$cst$798$due$$, "2026-03-10", $cljs$cst$775$amount$$, 97325, $cljs$cst$799$priority$$, $cljs$cst$819$critical$$, $APP.$cljs$cst$12$status$$, $APP.$cljs$cst$14$pending$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, 
[$APP.$cljs$cst$200$id$$, $cljs$cst$829$admin_mar_26$$, $APP.$cljs$cst$378$title$$, "Admin — Core Team + Misc (Mar)", $cljs$cst$798$due$$, "2026-03-15", $cljs$cst$775$amount$$, 10500, $cljs$cst$799$priority$$, $cljs$cst$807$high$$, $APP.$cljs$cst$12$status$$, $APP.$cljs$cst$14$pending$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$200$id$$, $cljs$cst$830$contingency_mar_26$$, $APP.$cljs$cst$378$title$$, "Contingency (Mar)", $cljs$cst$798$due$$, "2026-03-20", $cljs$cst$775$amount$$, 
13476, $cljs$cst$799$priority$$, $cljs$cst$800$normal$$, $APP.$cljs$cst$12$status$$, $APP.$cljs$cst$14$pending$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$200$id$$, $cljs$cst$831$venice_apr_26$$, $APP.$cljs$cst$378$title$$, "Venice — Opening Month + Studio Launch + Operations", $cljs$cst$798$due$$, "2026-04-05", $cljs$cst$775$amount$$, 110267, $cljs$cst$799$priority$$, $cljs$cst$819$critical$$, $APP.$cljs$cst$12$status$$, $APP.$cljs$cst$14$pending$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 
6, [$APP.$cljs$cst$200$id$$, $cljs$cst$832$admin_apr_26$$, $APP.$cljs$cst$378$title$$, "Admin — Core Team + Travel + Lodging (Apr)", $cljs$cst$798$due$$, "2026-04-15", $cljs$cst$775$amount$$, 33E3, $cljs$cst$799$priority$$, $cljs$cst$807$high$$, $APP.$cljs$cst$12$status$$, $APP.$cljs$cst$14$pending$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$200$id$$, $cljs$cst$833$contingency_apr_26$$, $APP.$cljs$cst$378$title$$, "Contingency (Apr)", $cljs$cst$798$due$$, "2026-04-20", 
$cljs$cst$775$amount$$, 5513, $cljs$cst$799$priority$$, $cljs$cst$800$normal$$, $APP.$cljs$cst$12$status$$, $APP.$cljs$cst$14$pending$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$200$id$$, $cljs$cst$834$venice_may_26$$, $APP.$cljs$cst$378$title$$, "Venice — Studio + Operations (May)", $cljs$cst$798$due$$, "2026-05-05", $cljs$cst$775$amount$$, 53717, $cljs$cst$799$priority$$, $cljs$cst$800$normal$$, $APP.$cljs$cst$12$status$$, $APP.$cljs$cst$14$pending$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 
6, [$APP.$cljs$cst$200$id$$, $cljs$cst$835$admin_may_26$$, $APP.$cljs$cst$378$title$$, "Admin — Core Team + Misc (May)", $cljs$cst$798$due$$, "2026-05-15", $cljs$cst$775$amount$$, 10500, $cljs$cst$799$priority$$, $cljs$cst$800$normal$$, $APP.$cljs$cst$12$status$$, $APP.$cljs$cst$14$pending$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$200$id$$, $cljs$cst$836$contingency_may_26$$, $APP.$cljs$cst$378$title$$, "Contingency (May)", $cljs$cst$798$due$$, "2026-05-20", $cljs$cst$775$amount$$, 
2686, $cljs$cst$799$priority$$, $cljs$cst$800$normal$$, $APP.$cljs$cst$12$status$$, $APP.$cljs$cst$14$pending$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$200$id$$, $cljs$cst$837$venice_jun_26$$, $APP.$cljs$cst$378$title$$, "Venice — Studio + Operations + Catalogue (Jun)", $cljs$cst$798$due$$, "2026-06-05", $cljs$cst$775$amount$$, 94467, $cljs$cst$799$priority$$, $cljs$cst$807$high$$, $APP.$cljs$cst$12$status$$, $APP.$cljs$cst$14$pending$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 
6, [$APP.$cljs$cst$200$id$$, $cljs$cst$838$admin_jun_26$$, $APP.$cljs$cst$378$title$$, "Admin — Core Team + Travel + Misc (Jun)", $cljs$cst$798$due$$, "2026-06-15", $cljs$cst$775$amount$$, 12500, $cljs$cst$799$priority$$, $cljs$cst$800$normal$$, $APP.$cljs$cst$12$status$$, $APP.$cljs$cst$14$pending$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$200$id$$, $cljs$cst$839$contingency_jun_26$$, $APP.$cljs$cst$378$title$$, "Contingency (Jun)", $cljs$cst$798$due$$, "2026-06-20", 
$cljs$cst$775$amount$$, 4723, $cljs$cst$799$priority$$, $cljs$cst$800$normal$$, $APP.$cljs$cst$12$status$$, $APP.$cljs$cst$14$pending$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$200$id$$, $cljs$cst$840$venice_jul_26$$, $APP.$cljs$cst$378$title$$, "Venice — Studio + Operations (Jul)", $cljs$cst$798$due$$, "2026-07-05", $cljs$cst$775$amount$$, 53717, $cljs$cst$799$priority$$, $cljs$cst$800$normal$$, $APP.$cljs$cst$12$status$$, $APP.$cljs$cst$14$pending$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 
6, [$APP.$cljs$cst$200$id$$, $cljs$cst$841$admin_jul_26$$, $APP.$cljs$cst$378$title$$, "Admin — Core Team + Misc (Jul)", $cljs$cst$798$due$$, "2026-07-15", $cljs$cst$775$amount$$, 10500, $cljs$cst$799$priority$$, $cljs$cst$800$normal$$, $APP.$cljs$cst$12$status$$, $APP.$cljs$cst$14$pending$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$200$id$$, $cljs$cst$842$contingency_jul_26$$, $APP.$cljs$cst$378$title$$, "Contingency (Jul)", $cljs$cst$798$due$$, "2026-07-20", $cljs$cst$775$amount$$, 
2686, $cljs$cst$799$priority$$, $cljs$cst$800$normal$$, $APP.$cljs$cst$12$status$$, $APP.$cljs$cst$14$pending$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$200$id$$, $cljs$cst$843$venice_aug_26$$, $APP.$cljs$cst$378$title$$, "Venice — Studio + Operations (Aug)", $cljs$cst$798$due$$, "2026-08-05", $cljs$cst$775$amount$$, 53717, $cljs$cst$799$priority$$, $cljs$cst$800$normal$$, $APP.$cljs$cst$12$status$$, $APP.$cljs$cst$14$pending$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 
6, [$APP.$cljs$cst$200$id$$, $cljs$cst$844$admin_aug_26$$, $APP.$cljs$cst$378$title$$, "Admin — Core Team + Misc (Aug)", $cljs$cst$798$due$$, "2026-08-15", $cljs$cst$775$amount$$, 10500, $cljs$cst$799$priority$$, $cljs$cst$800$normal$$, $APP.$cljs$cst$12$status$$, $APP.$cljs$cst$14$pending$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$200$id$$, $cljs$cst$845$contingency_aug_26$$, $APP.$cljs$cst$378$title$$, "Contingency (Aug)", $cljs$cst$798$due$$, "2026-08-20", $cljs$cst$775$amount$$, 
2686, $cljs$cst$799$priority$$, $cljs$cst$800$normal$$, $APP.$cljs$cst$12$status$$, $APP.$cljs$cst$14$pending$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$200$id$$, $cljs$cst$846$venice_sep_26$$, $APP.$cljs$cst$378$title$$, "Venice — Studio + Operations (Sep)", $cljs$cst$798$due$$, "2026-09-05", $cljs$cst$775$amount$$, 53717, $cljs$cst$799$priority$$, $cljs$cst$800$normal$$, $APP.$cljs$cst$12$status$$, $APP.$cljs$cst$14$pending$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 
6, [$APP.$cljs$cst$200$id$$, $cljs$cst$847$admin_sep_26$$, $APP.$cljs$cst$378$title$$, "Admin — Core Team + Travel + Misc (Sep)", $cljs$cst$798$due$$, "2026-09-15", $cljs$cst$775$amount$$, 12500, $cljs$cst$799$priority$$, $cljs$cst$800$normal$$, $APP.$cljs$cst$12$status$$, $APP.$cljs$cst$14$pending$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$200$id$$, $cljs$cst$848$contingency_sep_26$$, $APP.$cljs$cst$378$title$$, "Contingency (Sep)", $cljs$cst$798$due$$, "2026-09-20", 
$cljs$cst$775$amount$$, 2686, $cljs$cst$799$priority$$, $cljs$cst$800$normal$$, $APP.$cljs$cst$12$status$$, $APP.$cljs$cst$14$pending$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$200$id$$, $cljs$cst$849$venice_oct_26$$, $APP.$cljs$cst$378$title$$, "Venice — Studio + Operations (Oct)", $cljs$cst$798$due$$, "2026-10-05", $cljs$cst$775$amount$$, 42217, $cljs$cst$799$priority$$, $cljs$cst$800$normal$$, $APP.$cljs$cst$12$status$$, $APP.$cljs$cst$14$pending$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 
6, [$APP.$cljs$cst$200$id$$, $cljs$cst$850$admin_oct_26$$, $APP.$cljs$cst$378$title$$, "Admin — Core Team + Misc (Oct)", $cljs$cst$798$due$$, "2026-10-15", $cljs$cst$775$amount$$, 10500, $cljs$cst$799$priority$$, $cljs$cst$800$normal$$, $APP.$cljs$cst$12$status$$, $APP.$cljs$cst$14$pending$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$200$id$$, $cljs$cst$851$contingency_oct_26$$, $APP.$cljs$cst$378$title$$, "Contingency (Oct)", $cljs$cst$798$due$$, "2026-10-20", $cljs$cst$775$amount$$, 
2111, $cljs$cst$799$priority$$, $cljs$cst$800$normal$$, $APP.$cljs$cst$12$status$$, $APP.$cljs$cst$14$pending$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$200$id$$, $cljs$cst$852$venice_nov_26$$, $APP.$cljs$cst$378$title$$, "Venice — Studio + Operations (Nov)", $cljs$cst$798$due$$, "2026-11-05", $cljs$cst$775$amount$$, 42217, $cljs$cst$799$priority$$, $cljs$cst$800$normal$$, $APP.$cljs$cst$12$status$$, $APP.$cljs$cst$14$pending$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 
6, [$APP.$cljs$cst$200$id$$, $cljs$cst$853$admin_nov_26$$, $APP.$cljs$cst$378$title$$, "Admin — Core Team + Misc (Nov)", $cljs$cst$798$due$$, "2026-11-15", $cljs$cst$775$amount$$, 10500, $cljs$cst$799$priority$$, $cljs$cst$800$normal$$, $APP.$cljs$cst$12$status$$, $APP.$cljs$cst$14$pending$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$200$id$$, $cljs$cst$854$contingency_nov_26$$, $APP.$cljs$cst$378$title$$, "Contingency (Nov)", $cljs$cst$798$due$$, "2026-11-20", $cljs$cst$775$amount$$, 
2111, $cljs$cst$799$priority$$, $cljs$cst$800$normal$$, $APP.$cljs$cst$12$status$$, $APP.$cljs$cst$14$pending$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$200$id$$, $cljs$cst$855$venice_dec_26$$, $APP.$cljs$cst$378$title$$, "Venice — Close-out + Logistics (Return)", $cljs$cst$798$due$$, "2026-12-05", $cljs$cst$775$amount$$, 134517, $cljs$cst$799$priority$$, $cljs$cst$807$high$$, $APP.$cljs$cst$12$status$$, $APP.$cljs$cst$14$pending$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 
6, [$APP.$cljs$cst$200$id$$, $cljs$cst$856$admin_dec_26$$, $APP.$cljs$cst$378$title$$, "Admin — Core Team + Travel + Misc (Dec)", $cljs$cst$798$due$$, "2026-12-15", $cljs$cst$775$amount$$, 20500, $cljs$cst$799$priority$$, $cljs$cst$807$high$$, $APP.$cljs$cst$12$status$$, $APP.$cljs$cst$14$pending$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$200$id$$, $cljs$cst$857$contingency_dec_26$$, $APP.$cljs$cst$378$title$$, "Contingency (Dec)", $cljs$cst$798$due$$, "2026-12-20", 
$cljs$cst$775$amount$$, 6726, $cljs$cst$799$priority$$, $cljs$cst$800$normal$$, $APP.$cljs$cst$12$status$$, $APP.$cljs$cst$14$pending$$], null)], !0)], null);
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$201$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$202$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$pages$budget$cash_flow$timeline_node$$, '(hooks/use-ref nil)(hooks/use-effect :once (when (clojure.core/deref node-ref) (.fromTo gsap (clojure.core/deref node-ref) {:opacity 0, :x -20} {:opacity 1, :x 0, :duration 0.4, :delay (* idx 0.06), :ease "power2.out"})))', 
null, null) : (void 0).call(null, $amp$pages$budget$cash_flow$timeline_node$$, '(hooks/use-ref nil)(hooks/use-effect :once (when (clojure.core/deref node-ref) (.fromTo gsap (clojure.core/deref node-ref) {:opacity 0, :x -20} {:opacity 1, :x 0, :duration 0.4, :delay (* idx 0.06), :ease "power2.out"})))', null, null)), $APP.$helix$core$register_BANG_$$($amp$pages$budget$cash_flow$timeline_node$$, "amp.pages.budget.cash-flow/timeline-node"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$201$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$202$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$pages$budget$cash_flow$now_marker$$, '(hooks/use-ref nil)(hooks/use-effect :once (when (clojure.core/deref ref) (.fromTo gsap (clojure.core/deref ref) {:opacity 0, :scaleX 0} {:opacity 1, :scaleX 1, :duration 0.6, :delay 0.2, :ease "power3.out"})))', 
null, null) : (void 0).call(null, $amp$pages$budget$cash_flow$now_marker$$, '(hooks/use-ref nil)(hooks/use-effect :once (when (clojure.core/deref ref) (.fromTo gsap (clojure.core/deref ref) {:opacity 0, :scaleX 0} {:opacity 1, :scaleX 1, :duration 0.6, :delay 0.2, :ease "power3.out"})))', null, null)), $APP.$helix$core$register_BANG_$$($amp$pages$budget$cash_flow$now_marker$$, "amp.pages.budget.cash-flow/now-marker"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$201$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$202$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$pages$budget$cash_flow$month_header$$, '(hooks/use-ref nil)(hooks/use-effect :once (when (clojure.core/deref ref) (.fromTo gsap (clojure.core/deref ref) {:opacity 0, :y 8} {:opacity 1, :y 0, :duration 0.35, :delay (+ 0.1 (* idx 0.05)), :ease "power2.out"})))', 
null, null) : (void 0).call(null, $amp$pages$budget$cash_flow$month_header$$, '(hooks/use-ref nil)(hooks/use-effect :once (when (clojure.core/deref ref) (.fromTo gsap (clojure.core/deref ref) {:opacity 0, :y 8} {:opacity 1, :y 0, :duration 0.35, :delay (+ 0.1 (* idx 0.05)), :ease "power2.out"})))', null, null)), $APP.$helix$core$register_BANG_$$($amp$pages$budget$cash_flow$month_header$$, "amp.pages.budget.cash-flow/month-header"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$201$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$202$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$pages$budget$cash_flow$month_summary_row$$, '(hooks/use-ref nil)(hooks/use-effect :once (when (clojure.core/deref ref) (.fromTo gsap (clojure.core/deref ref) {:opacity 0, :x -16} {:opacity 1, :x 0, :duration 0.35, :delay (* idx 0.05), :ease "power2.out"})))', 
null, null) : (void 0).call(null, $amp$pages$budget$cash_flow$month_summary_row$$, '(hooks/use-ref nil)(hooks/use-effect :once (when (clojure.core/deref ref) (.fromTo gsap (clojure.core/deref ref) {:opacity 0, :x -16} {:opacity 1, :x 0, :duration 0.35, :delay (* idx 0.05), :ease "power2.out"})))', null, null)), $APP.$helix$core$register_BANG_$$($amp$pages$budget$cash_flow$month_summary_row$$, "amp.pages.budget.cash-flow/month-summary-row"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$201$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$202$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$pages$budget$cash_flow$view_toggle$$, "", null, null) : (void 0).call(null, $amp$pages$budget$cash_flow$view_toggle$$, "", null, null)), $APP.$helix$core$register_BANG_$$($amp$pages$budget$cash_flow$view_toggle$$, 
"amp.pages.budget.cash-flow/view-toggle"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$201$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$202$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$pages$budget$cash_flow$summary_header$$, '(hooks/use-ref nil)(hooks/use-effect :once (when (clojure.core/deref ref) (.fromTo gsap (clojure.core/deref ref) {:opacity 0, :y -12} {:opacity 1, :y 0, :duration 0.5, :ease "power2.out"})))', 
null, null) : (void 0).call(null, $amp$pages$budget$cash_flow$summary_header$$, '(hooks/use-ref nil)(hooks/use-effect :once (when (clojure.core/deref ref) (.fromTo gsap (clojure.core/deref ref) {:opacity 0, :y -12} {:opacity 1, :y 0, :duration 0.5, :ease "power2.out"})))', null, null)), $APP.$helix$core$register_BANG_$$($amp$pages$budget$cash_flow$summary_header$$, "amp.pages.budget.cash-flow/summary-header"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$201$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$202$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$pages$budget$cash_flow$cash_flow$$, '(hooks/use-state nil)(hooks/use-state false)(hooks/use-ref nil)(hooks/use-effect [entries] (when (and entries (clojure.core/deref container-ref)) (let [spine (.querySelector (clojure.core/deref container-ref) ".cf-spine")] (when spine (.fromTo gsap spine {:scaleY 0} {:scaleY 1, :duration 0.8, :delay 0.05, :ease "power3.out"})))))', 
null, null) : (void 0).call(null, $amp$pages$budget$cash_flow$cash_flow$$, '(hooks/use-state nil)(hooks/use-state false)(hooks/use-ref nil)(hooks/use-effect [entries] (when (and entries (clojure.core/deref container-ref)) (let [spine (.querySelector (clojure.core/deref container-ref) ".cf-spine")] (when spine (.fromTo gsap spine {:scaleY 0} {:scaleY 1, :duration 0.8, :delay 0.05, :ease "power3.out"})))))', null, null)), $APP.$helix$core$register_BANG_$$($amp$pages$budget$cash_flow$cash_flow$$, "amp.pages.budget.cash-flow/cash-flow"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$201$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$202$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$pages$budget$non_profit$non_profit$$, "", null, null) : (void 0).call(null, $amp$pages$budget$non_profit$non_profit$$, "", null, null)), $APP.$helix$core$register_BANG_$$($amp$pages$budget$non_profit$non_profit$$, 
"amp.pages.budget.non-profit/non-profit"));
var $amp$pages$budget$sponsors$sponsors$$ = new $APP.$cljs$core$PersistentVector$$(null, 5, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$192$name$$, "Tony Shafrazi", $cljs$cst$873$tier$$, $cljs$cst$874$founding_patron$$, $cljs$cst$875$logo$$, "images/graphics/tony_shafrazi_logo_lighter.svg", $APP.$cljs$cst$25$type$$, $cljs$cst$876$institution$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$192$name$$, 
"Armenian Fund USA", $cljs$cst$873$tier$$, $cljs$cst$874$founding_patron$$, $cljs$cst$875$logo$$, "images/graphics/armenia_fund_logo.svg", $APP.$cljs$cst$25$type$$, $cljs$cst$876$institution$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$192$name$$, "Khudikyan Family", $cljs$cst$873$tier$$, $cljs$cst$877$patron$$, $APP.$cljs$cst$25$type$$, $cljs$cst$878$individual$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$192$name$$, "Ourfalian Family", 
$cljs$cst$873$tier$$, $cljs$cst$877$patron$$, $APP.$cljs$cst$25$type$$, $cljs$cst$878$individual$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$192$name$$, "Sarafyan Family", $cljs$cst$873$tier$$, $cljs$cst$877$patron$$, $APP.$cljs$cst$25$type$$, $cljs$cst$878$individual$$], null)], null), $amp$pages$budget$sponsors$tier_meta$$ = new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$cljs$cst$874$founding_patron$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$cljs$cst$783$label$$, 
"Founding Patrons", $cljs$cst$879$accent$$, "text-pink-700 dark:text-pink-300", $APP.$cljs$cst$404$border$$, "border-pink-500/30", $cljs$cst$880$order$$, 0], null), $cljs$cst$877$patron$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$cljs$cst$783$label$$, "Patrons", $cljs$cst$879$accent$$, "text-amber-700 dark:text-amber-300", $APP.$cljs$cst$404$border$$, "border-amber-500/30 dark:border-amber-300/30", $cljs$cst$880$order$$, 1], null), $cljs$cst$881$benefactor$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 
4, [$cljs$cst$783$label$$, "Benefactors", $cljs$cst$879$accent$$, "text-indigo-700 dark:text-indigo-300", $APP.$cljs$cst$404$border$$, "border-indigo-500/30 dark:border-indigo-300/30", $cljs$cst$880$order$$, 2], null), $cljs$cst$882$supporter$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$cljs$cst$783$label$$, "Supporters", $cljs$cst$879$accent$$, "text-slate-700 dark:text-slate-300", $APP.$cljs$cst$404$border$$, "border-slate-400 dark:border-slate-600", $cljs$cst$880$order$$, 3], null)], 
null);
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$201$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$202$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$pages$budget$sponsors$logo_card$$, "", null, null) : (void 0).call(null, $amp$pages$budget$sponsors$logo_card$$, "", null, null)), $APP.$helix$core$register_BANG_$$($amp$pages$budget$sponsors$logo_card$$, 
"amp.pages.budget.sponsors/logo-card"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$201$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$202$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$pages$budget$sponsors$name_item$$, "", null, null) : (void 0).call(null, $amp$pages$budget$sponsors$name_item$$, "", null, null)), $APP.$helix$core$register_BANG_$$($amp$pages$budget$sponsors$name_item$$, 
"amp.pages.budget.sponsors/name-item"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$201$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$202$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$pages$budget$sponsors$tier_section$$, "", null, null) : (void 0).call(null, $amp$pages$budget$sponsors$tier_section$$, "", null, null)), $APP.$helix$core$register_BANG_$$($amp$pages$budget$sponsors$tier_section$$, 
"amp.pages.budget.sponsors/tier-section"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$201$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$202$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$pages$budget$sponsors$sponsors_section$$, "", null, null) : (void 0).call(null, $amp$pages$budget$sponsors$sponsors_section$$, "", null, null)), $APP.$helix$core$register_BANG_$$($amp$pages$budget$sponsors$sponsors_section$$, 
"amp.pages.budget.sponsors/sponsors-section"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$201$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$202$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$pages$budget$why_support$preview$$, "", null, null) : (void 0).call(null, $amp$pages$budget$why_support$preview$$, "", null, null)), $APP.$helix$core$register_BANG_$$($amp$pages$budget$why_support$preview$$, 
"amp.pages.budget.why-support/preview"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$201$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$202$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$pages$budget$why_support$details$$, "", null, null) : (void 0).call(null, $amp$pages$budget$why_support$details$$, "", null, null)), $APP.$helix$core$register_BANG_$$($amp$pages$budget$why_support$details$$, 
"amp.pages.budget.why-support/details"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$201$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$202$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$pages$budget$why_support$why_support$$, "", null, null) : (void 0).call(null, $amp$pages$budget$why_support$why_support$$, "", null, null)), $APP.$helix$core$register_BANG_$$($amp$pages$budget$why_support$why_support$$, 
"amp.pages.budget.why-support/why-support"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$201$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$202$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$nav$back_up$back_up_nav$$, '(hooks/use-ref "container-ref")(hooks/use-ref "button-ref")(use-scroll-to-top {:duration 1})(use-scroll-trigger container-ref :start (fn [] (- (win-utils/height) (/ (win-utils/height) 8))) :end "1000000px" :markers? false :debug? false)(use-hover-animations button-ref :over {:opacity 1} :out {:opacity 0.7})(use-toggle-animations {:target container-ref, :on-to {:y 0, :opacity 1}, :off-to {:y -150, :opacity 0.25}, :is-on? is-active?})', 
null, null) : (void 0).call(null, $amp$nav$back_up$back_up_nav$$, '(hooks/use-ref "container-ref")(hooks/use-ref "button-ref")(use-scroll-to-top {:duration 1})(use-scroll-trigger container-ref :start (fn [] (- (win-utils/height) (/ (win-utils/height) 8))) :end "1000000px" :markers? false :debug? false)(use-hover-animations button-ref :over {:opacity 1} :out {:opacity 0.7})(use-toggle-animations {:target container-ref, :on-to {:y 0, :opacity 1}, :off-to {:y -150, :opacity 0.25}, :is-on? is-active?})', 
null, null)), $APP.$helix$core$register_BANG_$$($amp$nav$back_up$back_up_nav$$, "amp.nav.back-up/back-up-nav"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$201$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$202$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$pages$budget$footer$budget_footer$$, "(use-scroll-to-id)", null, null) : (void 0).call(null, $amp$pages$budget$footer$budget_footer$$, "(use-scroll-to-id)", 
null, null)), $APP.$helix$core$register_BANG_$$($amp$pages$budget$footer$budget_footer$$, "amp.pages.budget.footer/budget-footer"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$201$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$202$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$pages$budget$section$section_link$$, "(use-scroll-to-id)", null, null) : (void 0).call(null, $amp$pages$budget$section$section_link$$, "(use-scroll-to-id)", 
null, null)), $APP.$helix$core$register_BANG_$$($amp$pages$budget$section$section_link$$, "amp.pages.budget.section/section-link"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$201$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$202$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$pages$budget$section$header$$, "", null, null) : (void 0).call(null, $amp$pages$budget$section$header$$, "", null, null)), $APP.$helix$core$register_BANG_$$($amp$pages$budget$section$header$$, 
"amp.pages.budget.section/header"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$201$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$202$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$pages$budget$section$budget_section$$, "", null, null) : (void 0).call(null, $amp$pages$budget$section$budget_section$$, "", null, null)), $APP.$helix$core$register_BANG_$$($amp$pages$budget$section$budget_section$$, 
"amp.pages.budget.section/budget-section"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$201$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$202$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($APP.$amp$pages$budget$page$budget_view$$, '(hooks/use-ref "comp-ref")(hooks/use-layout-effect [active] (if active (intro-complete-callback) (.to gsap (clojure.core/deref comp-ref) {:opacity 0, :onComplete outro-complete-callback, :duration 1})))', 
null, null) : (void 0).call(null, $APP.$amp$pages$budget$page$budget_view$$, '(hooks/use-ref "comp-ref")(hooks/use-layout-effect [active] (if active (intro-complete-callback) (.to gsap (clojure.core/deref comp-ref) {:opacity 0, :onComplete outro-complete-callback, :duration 1})))', null, null)), $APP.$helix$core$register_BANG_$$($APP.$amp$pages$budget$page$budget_view$$, "amp.pages.budget.page/budget-view"));
$APP.$module$contents$shadow$loader_mm$$.$setLoaded$();

}).call(this);