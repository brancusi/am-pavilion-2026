(function(){
'use strict';
var $amp$components$icons$InformationCircle$$, $amp$components$icons$ArrowTurnRightUp$$, $cljs$core$take_while$cljs$0core$0IFn$0_invoke$0arity$02$$, $cljs$core$partition_by$cljs$0core$0IFn$0_invoke$0arity$02$$, $amp$hooks$use_scroll_to$use_scroll_to_ref$$, $amp$hooks$use_scroll_to$use_scroll_to_top$cljs$0core$0IFn$0_invoke$0arity$0variadic$$, $amp$components$elements$budget$committe$preview$$, $amp$components$elements$budget$committe$details$$, $amp$components$elements$budget$committe$committee_member_card$$, 
$amp$components$elements$budget$committe$committee_gallery$$, $amp$components$elements$budget$committe$committee$$, $amp$components$elements$budget$budget_table$format_currency$$, $amp$components$elements$budget$budget_table$sub_total_all_sections$$, $amp$components$elements$budget$budget_table$total_section$$, $amp$components$elements$budget$budget_table$pad_two_digits$$, $amp$components$elements$budget$budget_table$detail_line_item$$, $amp$components$elements$budget$budget_table$details__GT_render_items$$, 
$amp$components$elements$budget$budget_table$section_line_item$$, $amp$components$elements$budget$budget_table$budget_table$$, $amp$components$elements$budget$cost_breakdown$preview$$, $amp$components$elements$budget$cost_breakdown$details$$, $amp$components$elements$budget$cost_breakdown$footer$$, $amp$components$elements$budget$cost_breakdown$cost_breakdown$$, $amp$components$elements$budget$location_section$preview_text$$, $amp$components$elements$budget$location_section$preview$$, $amp$components$elements$budget$location_section$full_details$$, 
$amp$components$elements$budget$location_section$location_section$$, $amp$components$elements$budget$cash_flow$parse_date$$, $amp$components$elements$budget$cash_flow$date__GT_ms$$, $amp$components$elements$budget$cash_flow$format_currency$$, $amp$components$elements$budget$cash_flow$priority_tag_bg$$, $amp$components$elements$budget$cash_flow$priority_tag_text$$, $amp$components$elements$budget$cash_flow$priority_dot_classes$$, $amp$components$elements$budget$cash_flow$priority_amount_class$$, $amp$components$elements$budget$cash_flow$priority_label$$, 
$amp$components$elements$budget$cash_flow$group_by_month$$, $amp$components$elements$budget$cash_flow$month_rollups$$, $amp$components$elements$budget$cash_flow$status_classes$$, $amp$components$elements$budget$cash_flow$timeline_node$$, $amp$components$elements$budget$cash_flow$now_marker$$, $amp$components$elements$budget$cash_flow$month_header$$, $amp$components$elements$budget$cash_flow$month_summary_row$$, $amp$components$elements$budget$cash_flow$view_toggle$$, $amp$components$elements$budget$cash_flow$summary_header$$, 
$amp$components$elements$budget$cash_flow$cash_flow$$, $amp$components$elements$budget$non_profit$non_profit$$, $amp$components$elements$budget$sponsors$logo_card$$, $amp$components$elements$budget$sponsors$name_item$$, $amp$components$elements$budget$sponsors$tier_section$$, $amp$components$elements$budget$sponsors$sponsors_section$$, $amp$components$elements$budget$why_support$preview$$, $amp$components$elements$budget$why_support$details$$, $amp$components$elements$budget$why_support$why_support$$, 
$amp$components$navs$back_up_nav$back_up_nav$$, $amp$components$sections$budget_footer$budget_footer$$, $amp$components$sections$budget_section$section_link$$, $amp$components$sections$budget_section$header$$, $amp$components$sections$budget_section$budget_section$$, $cljs$cst$861$admin_apr_26$$, $cljs$cst$875$venice_sep_26$$, $cljs$cst$834$venice_sep_25$$, $cljs$cst$853$la_feb_26$$, $cljs$cst$863$venice_may_26$$, $cljs$cst$916$outro_complete_callback$$, $cljs$cst$828$priority$$, $cljs$cst$908$accent$$, 
$cljs$cst$814$venue$$, $cljs$cst$857$la_mar_26$$, $cljs$cst$890$n_crit$$, $cljs$cst$879$admin_oct_26$$, $cljs$cst$911$supporter$$, $cljs$cst$839$admin_oct_25$$, $cljs$cst$866$venice_jun_26$$, $cljs$cst$893$has_now$$, $cljs$cst$817$the_studio$$, $cljs$cst$899$month$$, $cljs$cst$910$benefactor$$, $cljs$cst$841$la_nov_25$$, $cljs$cst$851$contingency_jan_26$$, $cljs$cst$869$venice_jul_26$$, $cljs$cst$889$entries$$, $cljs$cst$888$all_paid$$, $cljs$cst$829$normal$$, $cljs$cst$826$admin_jul_25$$, $cljs$cst$870$admin_jul_26$$, 
$cljs$cst$891$n_paid$$, $cljs$cst$822$documentation$$, $cljs$cst$833$contingency_aug_25$$, $cljs$cst$874$contingency_aug_26$$, $cljs$cst$823$debt_raised$$, $cljs$cst$867$admin_jun_26$$, $cljs$cst$810$expanded_items$$, $cljs$cst$902$tier$$, $cljs$cst$843$contingency_nov_25$$, $cljs$cst$883$contingency_nov_26$$, $cljs$cst$812$label$$, $cljs$cst$807$tax$$, $cljs$cst$915$intro_complete_callback$$, $cljs$cst$914$active$$, $cljs$cst$818$logistics$$, $cljs$cst$864$admin_may_26$$, $cljs$cst$850$admin_jan_26$$, 
$cljs$cst$852$venice_feb_26$$, $cljs$cst$847$venice_jan_26$$, $cljs$cst$892$n_items$$, $cljs$cst$880$contingency_oct_26$$, $cljs$cst$840$contingency_oct_25$$, $cljs$cst$858$admin_mar_26$$, $cljs$cst$830$paid$$, $cljs$cst$805$details$$, $cljs$cst$884$venice_dec_26$$, $cljs$cst$856$venice_mar_26$$, $cljs$cst$909$order$$, $cljs$cst$854$admin_feb_26$$, $cljs$cst$862$contingency_apr_26$$, $cljs$cst$895$entry$$, $cljs$cst$885$admin_dec_26$$, $cljs$cst$845$admin_dec_25$$, $cljs$cst$813$item$$, $cljs$cst$882$admin_nov_26$$, 
$cljs$cst$842$admin_nov_25$$, $cljs$cst$827$due$$, $cljs$cst$811$description$$, $cljs$cst$848$critical$$, $cljs$cst$871$contingency_jul_26$$, $cljs$cst$831$contingency_jul_25$$, $cljs$cst$886$contingency_dec_26$$, $cljs$cst$846$contingency_dec_25$$, $cljs$cst$865$contingency_may_26$$, $cljs$cst$868$contingency_jun_26$$, $cljs$cst$804$amount$$, $cljs$cst$901$past_QMARK_$$, $cljs$cst$825$cash_flow_model$$, $cljs$cst$894$dot$$, $cljs$cst$897$expanded_QMARK_$$, $cljs$cst$809$set_expanded_items$$, $cljs$cst$806$rate$$, 
$cljs$cst$855$contingency_feb_26$$, $cljs$cst$820$marketing$$, $cljs$cst$816$la_prod$$, $cljs$cst$906$patron$$, $cljs$cst$887$fill$$, $cljs$cst$824$funds_raised$$, $cljs$cst$877$contingency_sep_26$$, $cljs$cst$837$contingency_sep_25$$, $cljs$cst$912$members$$, $cljs$cst$808$cost_data$$, $cljs$cst$881$venice_nov_26$$, $cljs$cst$896$rollup$$, $cljs$cst$907$individual$$, $cljs$cst$876$admin_sep_26$$, $cljs$cst$835$admin_sep_25$$, $cljs$cst$860$venice_apr_26$$, $cljs$cst$905$institution$$, $cljs$cst$904$logo$$, 
$cljs$cst$836$high$$, $cljs$cst$819$opening$$, $cljs$cst$913$anchor$$, $cljs$cst$815$admin$$, $cljs$cst$859$contingency_mar_26$$, $cljs$cst$878$venice_oct_26$$, $cljs$cst$838$venice_oct_25$$, $cljs$cst$900$now$$, $cljs$cst$872$venice_aug_26$$, $cljs$cst$873$admin_aug_26$$, $cljs$cst$832$admin_aug_25$$, $cljs$cst$903$founding_patron$$, $cljs$cst$844$la_dec_25$$, $cljs$cst$849$la_jan_26$$, $cljs$cst$821$publication$$, $cljs$cst$898$target_total$$;
$amp$components$icons$InformationCircle$$ = function($G__64152_JSCompiler_temp_const$jscomp$inline_3564_class$$jscomp$12_map__64150_map__64150__$1_props__41640__auto__$jscomp$8_vec__64147$$, $G__64156$jscomp$inline_3566_JSCompiler_inline_result$jscomp$inline_3565_maybe_ref__41641__auto__$jscomp$8$$) {
  $G__64152_JSCompiler_temp_const$jscomp$inline_3564_class$$jscomp$12_map__64150_map__64150__$1_props__41640__auto__$jscomp$8_vec__64147$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__64152_JSCompiler_temp_const$jscomp$inline_3564_class$$jscomp$12_map__64150_map__64150__$1_props__41640__auto__$jscomp$8_vec__64147$$), $G__64156$jscomp$inline_3566_JSCompiler_inline_result$jscomp$inline_3565_maybe_ref__41641__auto__$jscomp$8$$], 
  null);
  $G__64152_JSCompiler_temp_const$jscomp$inline_3564_class$$jscomp$12_map__64150_map__64150__$1_props__41640__auto__$jscomp$8_vec__64147$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__64152_JSCompiler_temp_const$jscomp$inline_3564_class$$jscomp$12_map__64150_map__64150__$1_props__41640__auto__$jscomp$8_vec__64147$$, 0, null);
  $G__64152_JSCompiler_temp_const$jscomp$inline_3564_class$$jscomp$12_map__64150_map__64150__$1_props__41640__auto__$jscomp$8_vec__64147$$ = $APP.$cljs$core$__destructure_map$$($G__64152_JSCompiler_temp_const$jscomp$inline_3564_class$$jscomp$12_map__64150_map__64150__$1_props__41640__auto__$jscomp$8_vec__64147$$);
  $G__64152_JSCompiler_temp_const$jscomp$inline_3564_class$$jscomp$12_map__64150_map__64150__$1_props__41640__auto__$jscomp$8_vec__64147$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__64152_JSCompiler_temp_const$jscomp$inline_3564_class$$jscomp$12_map__64150_map__64150__$1_props__41640__auto__$jscomp$8_vec__64147$$, $APP.$cljs$cst$67$class$$);
  $G__64152_JSCompiler_temp_const$jscomp$inline_3564_class$$jscomp$12_map__64150_map__64150__$1_props__41640__auto__$jscomp$8_vec__64147$$ = $APP.$helix$impl$props$normalize_class$$($G__64152_JSCompiler_temp_const$jscomp$inline_3564_class$$jscomp$12_map__64150_map__64150__$1_props__41640__auto__$jscomp$8_vec__64147$$);
  $G__64156$jscomp$inline_3566_JSCompiler_inline_result$jscomp$inline_3565_maybe_ref__41641__auto__$jscomp$8$$ = {strokeLinecap:"round", strokeLinejoin:"round", d:"m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"};
  $G__64156$jscomp$inline_3566_JSCompiler_inline_result$jscomp$inline_3565_maybe_ref__41641__auto__$jscomp$8$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("path", $G__64156$jscomp$inline_3566_JSCompiler_inline_result$jscomp$inline_3565_maybe_ref__41641__auto__$jscomp$8$$) : $APP.$helix$core$jsx$$.call(null, "path", $G__64156$jscomp$inline_3566_JSCompiler_inline_result$jscomp$inline_3565_maybe_ref__41641__auto__$jscomp$8$$);
  $G__64152_JSCompiler_temp_const$jscomp$inline_3564_class$$jscomp$12_map__64150_map__64150__$1_props__41640__auto__$jscomp$8_vec__64147$$ = {xmlns:"http://www.w3.org/2000/svg", fill:"none", viewBox:"0 0 24 24", strokeWidth:1.5, stroke:"currentColor", className:$G__64152_JSCompiler_temp_const$jscomp$inline_3564_class$$jscomp$12_map__64150_map__64150__$1_props__41640__auto__$jscomp$8_vec__64147$$, children:$G__64156$jscomp$inline_3566_JSCompiler_inline_result$jscomp$inline_3565_maybe_ref__41641__auto__$jscomp$8$$};
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("svg", $G__64152_JSCompiler_temp_const$jscomp$inline_3564_class$$jscomp$12_map__64150_map__64150__$1_props__41640__auto__$jscomp$8_vec__64147$$) : $APP.$helix$core$jsx$$.call(null, "svg", $G__64152_JSCompiler_temp_const$jscomp$inline_3564_class$$jscomp$12_map__64150_map__64150__$1_props__41640__auto__$jscomp$8_vec__64147$$);
};
$amp$components$icons$ArrowTurnRightUp$$ = function($G__64240_props$jscomp$23_props__41640__auto__$jscomp$13_vec__64236$$, $G__64244$jscomp$inline_3575_JSCompiler_inline_result$jscomp$3468_maybe_ref__41641__auto__$jscomp$13$$) {
  $G__64240_props$jscomp$23_props__41640__auto__$jscomp$13_vec__64236$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__64240_props$jscomp$23_props__41640__auto__$jscomp$13_vec__64236$$), $G__64244$jscomp$inline_3575_JSCompiler_inline_result$jscomp$3468_maybe_ref__41641__auto__$jscomp$13$$], null);
  $G__64240_props$jscomp$23_props__41640__auto__$jscomp$13_vec__64236$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__64240_props$jscomp$23_props__41640__auto__$jscomp$13_vec__64236$$, 0, null);
  $G__64244$jscomp$inline_3575_JSCompiler_inline_result$jscomp$3468_maybe_ref__41641__auto__$jscomp$13$$ = {strokeLinecap:"round", strokeLinejoin:"round", d:"m11.99 7.5 3.75-3.75m0 0 3.75 3.75m-3.75-3.75v16.499H4.49"};
  $G__64244$jscomp$inline_3575_JSCompiler_inline_result$jscomp$3468_maybe_ref__41641__auto__$jscomp$13$$ = {xmlns:"http://www.w3.org/2000/svg", fill:"none", viewBox:"0 0 24 24", strokeWidth:1.5, stroke:"currentColor", className:"size-6", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("path", $G__64244$jscomp$inline_3575_JSCompiler_inline_result$jscomp$3468_maybe_ref__41641__auto__$jscomp$13$$) : $APP.$helix$core$jsx$$.call(null, 
  "path", $G__64244$jscomp$inline_3575_JSCompiler_inline_result$jscomp$3468_maybe_ref__41641__auto__$jscomp$13$$)};
  $G__64240_props$jscomp$23_props__41640__auto__$jscomp$13_vec__64236$$ = $APP.$helix$impl$props$merge_obj$$($G__64244$jscomp$inline_3575_JSCompiler_inline_result$jscomp$3468_maybe_ref__41641__auto__$jscomp$13$$, $APP.$helix$impl$props$_dom_props$cljs$0core$0IFn$0_invoke$0arity$01$$($G__64240_props$jscomp$23_props__41640__auto__$jscomp$13_vec__64236$$));
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("svg", $G__64240_props$jscomp$23_props__41640__auto__$jscomp$13_vec__64236$$) : $APP.$helix$core$jsx$$.call(null, "svg", $G__64240_props$jscomp$23_props__41640__auto__$jscomp$13_vec__64236$$);
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
    function $G__50974$$($ref$jscomp$13$$, $var_args$jscomp$481$$) {
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
    function $G__50974__delegate$$($ref$jscomp$12_temp__5823__auto__$jscomp$98$$, $duration$jscomp$2_p__50948$$) {
      $duration$jscomp$2_p__50948$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($duration$jscomp$2_p__50948$$, 0, null);
      $ref$jscomp$12_temp__5823__auto__$jscomp$98$$ = $ref$jscomp$12_temp__5823__auto__$jscomp$98$$.current;
      return $APP.$cljs$core$truth_$$($ref$jscomp$12_temp__5823__auto__$jscomp$98$$) ? $APP.$module$node_modules$gsap$dist$gsap$$.gsap.to(window, $APP.$cljs$core$clj__GT_js$$(new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$439$duration$$, $APP.$cljs$core$truth_$$($duration$jscomp$2_p__50948$$) ? $duration$jscomp$2_p__50948$$ : 0.35, $APP.$cljs$cst$729$scrollTo$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$730$y$$, $ref$jscomp$12_temp__5823__auto__$jscomp$98$$, 
      $APP.$cljs$cst$731$autoKill$$, !1], null), $APP.$cljs$cst$732$ease$$, "power2.inOut"], null))) : null;
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
  var $G__50961_map__50960__$1$$ = $APP.$cljs$core$__destructure_map$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$439$duration$$, 1], null)])), $duration$jscomp$3$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$03$$($G__50961_map__50960__$1$$, $APP.$cljs$cst$439$duration$$, 0.35);
  $G__50961_map__50960__$1$$ = function() {
    function $G__50980$$($var_args$jscomp$483$$) {
      var $G__50982__i__$jscomp$435$$ = null;
      if (arguments.length > 0) {
        $G__50982__i__$jscomp$435$$ = 0;
        for (var $G__50982__a$$ = Array(arguments.length - 0); $G__50982__i__$jscomp$435$$ < $G__50982__a$$.length;) {
          $G__50982__a$$[$G__50982__i__$jscomp$435$$] = arguments[$G__50982__i__$jscomp$435$$ + 0], ++$G__50982__i__$jscomp$435$$;
        }
        $G__50982__i__$jscomp$435$$ = new $APP.$cljs$core$IndexedSeq$$($G__50982__a$$, 0, null);
      }
      return $G__50980__delegate$$.call(this, $G__50982__i__$jscomp$435$$);
    }
    function $G__50980__delegate$$() {
      $APP.$cljs$core$tap_GT_$$(new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$25$type$$, $APP.$cljs$cst$733$scroll_to_top$$, $APP.$cljs$cst$439$duration$$, $duration$jscomp$3$$], null));
      return $APP.$module$node_modules$gsap$dist$gsap$$.gsap.to(window, $APP.$cljs$core$clj__GT_js$$(new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$439$duration$$, $duration$jscomp$3$$, $APP.$cljs$cst$729$scrollTo$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$730$y$$, 0], null), $APP.$cljs$cst$732$ease$$, "power2.inOut"], null)));
    }
    $G__50980$$.$cljs$lang$maxFixedArity$ = 0;
    $G__50980$$.$cljs$lang$applyTo$ = function($_$jscomp$436_arglist__50983$$) {
      $_$jscomp$436_arglist__50983$$ = $APP.$cljs$core$seq$$($_$jscomp$436_arglist__50983$$);
      return $G__50980__delegate$$($_$jscomp$436_arglist__50983$$);
    };
    $G__50980$$.$cljs$core$IFn$_invoke$arity$variadic$ = $G__50980__delegate$$;
    return $G__50980$$;
  }();
  var $G__50962$$ = [];
  return $APP.$helix$hooks$raw_use_callback$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$hooks$raw_use_callback$$.$cljs$core$IFn$_invoke$arity$2$($G__50961_map__50960__$1$$, $G__50962$$) : $APP.$helix$hooks$raw_use_callback$$.call(null, $G__50961_map__50960__$1$$, $G__50962$$);
};
$amp$components$elements$budget$committe$preview$$ = function($G__65788_map__65786_props__41640__auto__$jscomp$52_vec__65783$$, $maybe_ref__41641__auto__$jscomp$52$$) {
  $G__65788_map__65786_props__41640__auto__$jscomp$52_vec__65783$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__65788_map__65786_props__41640__auto__$jscomp$52_vec__65783$$), $maybe_ref__41641__auto__$jscomp$52$$], null);
  $G__65788_map__65786_props__41640__auto__$jscomp$52_vec__65783$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__65788_map__65786_props__41640__auto__$jscomp$52_vec__65783$$, 0, null);
  $APP.$cljs$core$__destructure_map$$($G__65788_map__65786_props__41640__auto__$jscomp$52_vec__65783$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__65788_map__65786_props__41640__auto__$jscomp$52_vec__65783$$ = function() {
    return {className:"space-y-3 p-4", children:function() {
      var $G__65794$$ = function() {
        return {children:[function() {
          var $G__65799$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:"To realize an undertaking of this scale and international significance, an "};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__65799$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__65799$$);
        }(), function() {
          var $G__65805$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:"urgent fundraising program"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__65805$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__65805$$);
        }(), function() {
          var $G__65810$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:" is greatly needed."};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__65810$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__65810$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__65794$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__65794$$);
    }()};
  }();
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__65788_map__65786_props__41640__auto__$jscomp$52_vec__65783$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__65788_map__65786_props__41640__auto__$jscomp$52_vec__65783$$);
};
$amp$components$elements$budget$committe$details$$ = function($G__65840_map__65838_props__41640__auto__$jscomp$53_vec__65835$$, $maybe_ref__41641__auto__$jscomp$53$$) {
  $G__65840_map__65838_props__41640__auto__$jscomp$53_vec__65835$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__65840_map__65838_props__41640__auto__$jscomp$53_vec__65835$$), $maybe_ref__41641__auto__$jscomp$53$$], null);
  $G__65840_map__65838_props__41640__auto__$jscomp$53_vec__65835$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__65840_map__65838_props__41640__auto__$jscomp$53_vec__65835$$, 0, null);
  $APP.$cljs$core$__destructure_map$$($G__65840_map__65838_props__41640__auto__$jscomp$53_vec__65835$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__65840_map__65838_props__41640__auto__$jscomp$53_vec__65835$$ = function() {
    return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["p-4", $APP.$amp$styles$body_lg$$]))), children:[function() {
      var $G__65844$$ = function() {
        return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["italic text-lg text-red-300"]))), children:["*Note: As Armenia does not maintain a permanent national pavilion in Venice, the Pavilion must be realized through a rented venue—a standard and widely accepted model for many non-permanent participating nations. ", "The selected site operates at a base rental cost of approximately ", 
        function() {
          var $G__65848$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$value_currency$$), children:"$145,600"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__65848$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__65848$$);
        }(), function() {
          var $G__65852$$ = {className:"text-red-300", children:[", covering the entire six-month duration of the Exhibition, and represents a strategic and fiscally responsible choice given its immediate proximity to the Arsenale proper. ", "Comparable venues just minutes away within the Arsenale or Giardini typically begin at "]};
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__65852$$) : $APP.$helix$core$jsxs$$.call(null, "span", $G__65852$$);
        }(), function() {
          var $G__65856$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$value_currency$$), children:"$450,000 or more"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__65856$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__65856$$);
        }(), function() {
          var $G__65861$$ = {className:"text-red-300", children:[" in base rent alone—often closer to €450,000+—excluding construction, staffing, technical services, and operational expenses. ", "In this context, the Pavilion’s location offers extraordinary visibility and access at a fraction of the cost, positioning Armenia at the heart of the Biennale circuit while maintaining responsible stewardship of resources."]};
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__65861$$) : $APP.$helix$core$jsxs$$.call(null, "span", $G__65861$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__65844$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__65844$$);
    }(), function() {
      var $G__65865$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["mt-6 text-red-500 text-2xl"]))), children:"To realize an undertaking of this scale and international significance, an urgent fundraising program is greatly needed."};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__65865$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__65865$$);
    }(), function() {
      var $G__65869$$ = function() {
        return {className:"mt-6", children:[function() {
          var $G__65873$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-medium", "text-slate-900  dark:text-slate-100"]))), children:["At present we are starting with a small committee including members ", "Archbishop Hovnan Derderian, Tony Shafrazi, Tina Chakarian, Rafi Ourfalian, Khachik Khudikyan, ", "Andranik Torosyan, Aram Alajajian, and Vik Hovsepian, "]};
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__65873$$) : $APP.$helix$core$jsxs$$.call(null, "span", $G__65873$$);
        }(), function() {
          var $G__65878$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-bold", "text-rose-600   dark:text-rose-400"]))), children:"hopefully encouraging others more able to realize our goal."};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__65878$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__65878$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__65869$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__65869$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__65840_map__65838_props__41640__auto__$jscomp$53_vec__65835$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__65840_map__65838_props__41640__auto__$jscomp$53_vec__65835$$);
};
$amp$components$elements$budget$committe$committee_member_card$$ = function($G__65907_map__65896_map__65896__$1_props__41640__auto__$jscomp$54_vec__65893$$, $maybe_ref__41641__auto__$jscomp$54$$) {
  $G__65907_map__65896_map__65896__$1_props__41640__auto__$jscomp$54_vec__65893$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__65907_map__65896_map__65896__$1_props__41640__auto__$jscomp$54_vec__65893$$), $maybe_ref__41641__auto__$jscomp$54$$], null);
  $G__65907_map__65896_map__65896__$1_props__41640__auto__$jscomp$54_vec__65893$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__65907_map__65896_map__65896__$1_props__41640__auto__$jscomp$54_vec__65893$$, 0, null);
  $G__65907_map__65896_map__65896__$1_props__41640__auto__$jscomp$54_vec__65893$$ = $APP.$cljs$core$__destructure_map$$($G__65907_map__65896_map__65896__$1_props__41640__auto__$jscomp$54_vec__65893$$);
  var $name$jscomp$201$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__65907_map__65896_map__65896__$1_props__41640__auto__$jscomp$54_vec__65893$$, $APP.$cljs$cst$191$name$$), $role$jscomp$2$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__65907_map__65896_map__65896__$1_props__41640__auto__$jscomp$54_vec__65893$$, $APP.$cljs$cst$775$role$$), $img_src$jscomp$7$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__65907_map__65896_map__65896__$1_props__41640__auto__$jscomp$54_vec__65893$$, 
  $APP.$cljs$cst$438$img_src$$);
  $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__65907_map__65896_map__65896__$1_props__41640__auto__$jscomp$54_vec__65893$$, $APP.$cljs$cst$442$credit$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $overlay_styles$$ = $APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-mono", "bg-white/70 px-1 text-slate-500"]));
  $G__65907_map__65896_map__65896__$1_props__41640__auto__$jscomp$54_vec__65893$$ = function() {
    return {className:"w-[150px] aspect-[0.7] relative ml-2", children:function() {
      var $G__65917$$ = function() {
        return {"img-src":$img_src$jscomp$7$$, fit:"crop", "aspect-ratio":0.7, "active?":!0, children:function() {
          var $G__65923$$ = function() {
            return {className:"", children:[function() {
              var $G__65927_G__65935$jscomp$inline_3794_JSCompiler_inline_result$jscomp$inline_3793$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["italic", "text-xs"]))), children:$name$jscomp$201$$};
              $G__65927_G__65935$jscomp$inline_3794_JSCompiler_inline_result$jscomp$inline_3793$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__65927_G__65935$jscomp$inline_3794_JSCompiler_inline_result$jscomp$inline_3793$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__65927_G__65935$jscomp$inline_3794_JSCompiler_inline_result$jscomp$inline_3793$$);
              $G__65927_G__65935$jscomp$inline_3794_JSCompiler_inline_result$jscomp$inline_3793$$ = {position:$APP.$cljs$cst$704$tl$$, rotation:90, "parent-styles":$overlay_styles$$, children:$G__65927_G__65935$jscomp$inline_3794_JSCompiler_inline_result$jscomp$inline_3793$$};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$components$ui$overlays$caption_overlay$$, $G__65927_G__65935$jscomp$inline_3794_JSCompiler_inline_result$jscomp$inline_3793$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$components$ui$overlays$caption_overlay$$, $G__65927_G__65935$jscomp$inline_3794_JSCompiler_inline_result$jscomp$inline_3793$$);
            }(), function() {
              var $G__65943_G__65951$jscomp$inline_3797_JSCompiler_inline_result$jscomp$inline_3796$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["italic", "text-xs"]))), children:$role$jscomp$2$$};
              $G__65943_G__65951$jscomp$inline_3797_JSCompiler_inline_result$jscomp$inline_3796$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__65943_G__65951$jscomp$inline_3797_JSCompiler_inline_result$jscomp$inline_3796$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__65943_G__65951$jscomp$inline_3797_JSCompiler_inline_result$jscomp$inline_3796$$);
              $G__65943_G__65951$jscomp$inline_3797_JSCompiler_inline_result$jscomp$inline_3796$$ = {position:$APP.$cljs$cst$709$bl$$, "parent-styles":$overlay_styles$$, children:$G__65943_G__65951$jscomp$inline_3797_JSCompiler_inline_result$jscomp$inline_3796$$};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$components$ui$overlays$caption_overlay$$, $G__65943_G__65951$jscomp$inline_3797_JSCompiler_inline_result$jscomp$inline_3796$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$components$ui$overlays$caption_overlay$$, $G__65943_G__65951$jscomp$inline_3797_JSCompiler_inline_result$jscomp$inline_3796$$);
            }()]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__65923$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__65923$$);
        }()};
      }();
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$components$media$lazy_image_with_overlay$lazy_image_with_overlay$$, $G__65917$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$components$media$lazy_image_with_overlay$lazy_image_with_overlay$$, $G__65917$$);
    }()};
  }();
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__65907_map__65896_map__65896__$1_props__41640__auto__$jscomp$54_vec__65893$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__65907_map__65896_map__65896__$1_props__41640__auto__$jscomp$54_vec__65893$$);
};
$amp$components$elements$budget$committe$committee_gallery$$ = function($G__65983_map__65981_props__41640__auto__$jscomp$55_vec__65978$$, $maybe_ref__41641__auto__$jscomp$55$$) {
  $G__65983_map__65981_props__41640__auto__$jscomp$55_vec__65978$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__65983_map__65981_props__41640__auto__$jscomp$55_vec__65978$$), $maybe_ref__41641__auto__$jscomp$55$$], null);
  $G__65983_map__65981_props__41640__auto__$jscomp$55_vec__65978$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__65983_map__65981_props__41640__auto__$jscomp$55_vec__65978$$, 0, null);
  $APP.$cljs$core$__destructure_map$$($G__65983_map__65981_props__41640__auto__$jscomp$55_vec__65978$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__65983_map__65981_props__41640__auto__$jscomp$55_vec__65978$$ = function() {
    return {className:"p-4 w-full", children:function() {
      var $G__65988$$ = function() {
        return {children:[function() {
          var $G__65997_G__66002$jscomp$inline_3800$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$label_muted$$), children:"Committee Members"};
          $G__65997_G__66002$jscomp$inline_3800$$ = {className:"pl-4", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("h3", $G__65997_G__66002$jscomp$inline_3800$$) : $APP.$helix$core$jsx$$.call(null, "h3", $G__65997_G__66002$jscomp$inline_3800$$)};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__65997_G__66002$jscomp$inline_3800$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__65997_G__66002$jscomp$inline_3800$$);
        }(), function() {
          var $G__66095$$ = function() {
            return {className:"mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4", children:$APP.$cljs$core$map$$.$cljs$core$IFn$_invoke$arity$2$(function($name$jscomp$202_p__66116$$) {
              var $credit$jscomp$7_map__66125__$1$$ = $APP.$cljs$core$__destructure_map$$($name$jscomp$202_p__66116$$);
              $name$jscomp$202_p__66116$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($credit$jscomp$7_map__66125__$1$$, $APP.$cljs$cst$191$name$$);
              var $G__66140_G__66160$jscomp$inline_3803_JSCompiler_temp$jscomp$inline_3802_role$jscomp$3$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($credit$jscomp$7_map__66125__$1$$, $APP.$cljs$cst$775$role$$), $img_src$jscomp$8$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($credit$jscomp$7_map__66125__$1$$, $APP.$cljs$cst$438$img_src$$);
              $credit$jscomp$7_map__66125__$1$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($credit$jscomp$7_map__66125__$1$$, $APP.$cljs$cst$442$credit$$);
              $APP.$cljs$core$truth_$$($img_src$jscomp$8$$) ? ($G__66140_G__66160$jscomp$inline_3803_JSCompiler_temp$jscomp$inline_3802_role$jscomp$3$$ = {name:$name$jscomp$202_p__66116$$, role:$G__66140_G__66160$jscomp$inline_3803_JSCompiler_temp$jscomp$inline_3802_role$jscomp$3$$, "img-src":$img_src$jscomp$8$$, credit:$credit$jscomp$7_map__66125__$1$$}, $G__66140_G__66160$jscomp$inline_3803_JSCompiler_temp$jscomp$inline_3802_role$jscomp$3$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? 
              $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$elements$budget$committe$committee_member_card$$, $G__66140_G__66160$jscomp$inline_3803_JSCompiler_temp$jscomp$inline_3802_role$jscomp$3$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$elements$budget$committe$committee_member_card$$, $G__66140_G__66160$jscomp$inline_3803_JSCompiler_temp$jscomp$inline_3802_role$jscomp$3$$)) : $G__66140_G__66160$jscomp$inline_3803_JSCompiler_temp$jscomp$inline_3802_role$jscomp$3$$ = 
              null;
              $G__66140_G__66160$jscomp$inline_3803_JSCompiler_temp$jscomp$inline_3802_role$jscomp$3$$ = {children:$G__66140_G__66160$jscomp$inline_3803_JSCompiler_temp$jscomp$inline_3802_role$jscomp$3$$};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$("div", $G__66140_G__66160$jscomp$inline_3803_JSCompiler_temp$jscomp$inline_3802_role$jscomp$3$$, $name$jscomp$202_p__66116$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__66140_G__66160$jscomp$inline_3803_JSCompiler_temp$jscomp$inline_3802_role$jscomp$3$$, $name$jscomp$202_p__66116$$);
            }, $amp$components$elements$budget$committe$committee_members$$)};
          }();
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__66095$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__66095$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__65988$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__65988$$);
    }()};
  }();
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__65983_map__65981_props__41640__auto__$jscomp$55_vec__65978$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__65983_map__65981_props__41640__auto__$jscomp$55_vec__65978$$);
};
$amp$components$elements$budget$committe$committee$$ = function($G__66196$jscomp$1_map__66194_map__66194__$1_props__41640__auto__$jscomp$56_vec__66191$$, $maybe_ref__41641__auto__$jscomp$56$$) {
  $G__66196$jscomp$1_map__66194_map__66194__$1_props__41640__auto__$jscomp$56_vec__66191$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__66196$jscomp$1_map__66194_map__66194__$1_props__41640__auto__$jscomp$56_vec__66191$$), $maybe_ref__41641__auto__$jscomp$56$$], null);
  $G__66196$jscomp$1_map__66194_map__66194__$1_props__41640__auto__$jscomp$56_vec__66191$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__66196$jscomp$1_map__66194_map__66194__$1_props__41640__auto__$jscomp$56_vec__66191$$, 0, null);
  $G__66196$jscomp$1_map__66194_map__66194__$1_props__41640__auto__$jscomp$56_vec__66191$$ = $APP.$cljs$core$__destructure_map$$($G__66196$jscomp$1_map__66194_map__66194__$1_props__41640__auto__$jscomp$56_vec__66191$$);
  var $id$jscomp$85$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__66196$jscomp$1_map__66194_map__66194__$1_props__41640__auto__$jscomp$56_vec__66191$$, $APP.$cljs$cst$200$id$$), $subtitle$jscomp$3$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__66196$jscomp$1_map__66194_map__66194__$1_props__41640__auto__$jscomp$56_vec__66191$$, $APP.$cljs$cst$727$subtitle$$), $title$jscomp$26$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__66196$jscomp$1_map__66194_map__66194__$1_props__41640__auto__$jscomp$56_vec__66191$$, 
  $APP.$cljs$cst$381$title$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__66196$jscomp$1_map__66194_map__66194__$1_props__41640__auto__$jscomp$56_vec__66191$$ = function() {
    return {id:$id$jscomp$85$$, className:"space-y-4", children:[function() {
      var $G__66200$$ = {idx:5, "section-hint":$subtitle$jscomp$3$$, title:$title$jscomp$26$$, "expand-button-label":"Read more", "preview-text":$amp$components$elements$budget$committe$preview$$, "full-text":$amp$components$elements$budget$committe$details$$};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$components$elements$expandable_text_area$expandable_text_area_2$$, $G__66200$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$components$elements$expandable_text_area$expandable_text_area_2$$, $G__66200$$);
    }(), function() {
      var $G__66205$jscomp$1$$ = {children:$amp$components$elements$budget$committe$committee_members$$};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$elements$budget$committe$committee_gallery$$, $G__66205$jscomp$1$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$elements$budget$committe$committee_gallery$$, $G__66205$jscomp$1$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("section", $G__66196$jscomp$1_map__66194_map__66194__$1_props__41640__auto__$jscomp$56_vec__66191$$) : $APP.$helix$core$jsxs$$.call(null, "section", $G__66196$jscomp$1_map__66194_map__66194__$1_props__41640__auto__$jscomp$56_vec__66191$$);
};
$amp$components$elements$budget$budget_table$format_currency$$ = function($amount$$) {
  return "$" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$(Math.round($amount$$).toLocaleString("en-US"));
};
$amp$components$elements$budget$budget_table$sub_total_all_sections$$ = function($cost_data$$) {
  return $APP.$cljs$core$reduce$cljs$0core$0IFn$0_invoke$0arity$02$$($APP.$cljs$core$_PLUS_$$, $APP.$cljs$core$map$$.$cljs$core$IFn$_invoke$arity$2$(function($p1__65859_SHARP__tax_rate$jscomp$inline_2043$$) {
    var $item_details$jscomp$inline_2041_sub_total$jscomp$inline_2042$$ = $cljs$cst$805$details$$.$cljs$core$IFn$_invoke$arity$1$($p1__65859_SHARP__tax_rate$jscomp$inline_2043$$);
    $item_details$jscomp$inline_2041_sub_total$jscomp$inline_2042$$ = $APP.$cljs$core$reduce$cljs$0core$0IFn$0_invoke$0arity$02$$($APP.$cljs$core$_PLUS_$$, $APP.$cljs$core$map$$.$cljs$core$IFn$_invoke$arity$2$($cljs$cst$804$amount$$, $item_details$jscomp$inline_2041_sub_total$jscomp$inline_2042$$));
    $p1__65859_SHARP__tax_rate$jscomp$inline_2043$$ = $cljs$cst$806$rate$$.$cljs$core$IFn$_invoke$arity$1$($cljs$cst$807$tax$$.$cljs$core$IFn$_invoke$arity$1$($p1__65859_SHARP__tax_rate$jscomp$inline_2043$$));
    return ($p1__65859_SHARP__tax_rate$jscomp$inline_2043$$ > 0 ? $p1__65859_SHARP__tax_rate$jscomp$inline_2043$$ * $item_details$jscomp$inline_2041_sub_total$jscomp$inline_2042$$ : 0) + $item_details$jscomp$inline_2041_sub_total$jscomp$inline_2042$$;
  }, $cost_data$$));
};
$amp$components$elements$budget$budget_table$total_section$$ = function($G__65890_cost_data$jscomp$1_map__65887_map__65887__$1_props__41640__auto__$jscomp$57_vec__65884$$, $maybe_ref__41641__auto__$jscomp$57$$) {
  $G__65890_cost_data$jscomp$1_map__65887_map__65887__$1_props__41640__auto__$jscomp$57_vec__65884$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__65890_cost_data$jscomp$1_map__65887_map__65887__$1_props__41640__auto__$jscomp$57_vec__65884$$), $maybe_ref__41641__auto__$jscomp$57$$], null);
  $G__65890_cost_data$jscomp$1_map__65887_map__65887__$1_props__41640__auto__$jscomp$57_vec__65884$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__65890_cost_data$jscomp$1_map__65887_map__65887__$1_props__41640__auto__$jscomp$57_vec__65884$$, 0, null);
  $G__65890_cost_data$jscomp$1_map__65887_map__65887__$1_props__41640__auto__$jscomp$57_vec__65884$$ = $APP.$cljs$core$__destructure_map$$($G__65890_cost_data$jscomp$1_map__65887_map__65887__$1_props__41640__auto__$jscomp$57_vec__65884$$);
  $G__65890_cost_data$jscomp$1_map__65887_map__65887__$1_props__41640__auto__$jscomp$57_vec__65884$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__65890_cost_data$jscomp$1_map__65887_map__65887__$1_props__41640__auto__$jscomp$57_vec__65884$$, $cljs$cst$808$cost_data$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $sub_total$jscomp$1$$ = $amp$components$elements$budget$budget_table$sub_total_all_sections$$($G__65890_cost_data$jscomp$1_map__65887_map__65887__$1_props__41640__auto__$jscomp$57_vec__65884$$), $grand_total$$ = $sub_total$jscomp$1$$ + 66821;
  $G__65890_cost_data$jscomp$1_map__65887_map__65887__$1_props__41640__auto__$jscomp$57_vec__65884$$ = function() {
    return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["flex flex-col", "font-mono"]))), children:[function() {
      var $G__65898$$ = function() {
        return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["bg-white        dark:bg-slate-900", "text-slate-900  dark:text-slate-100", "flex items-baseline px-4 py-2 border-t-2", "border-pink-500/70 dark:border-pink-500/70"]))), children:[function() {
          var $G__65903$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["text-sm", "uppercase", "tracking-wider", "text-slate-600  dark:text-slate-400", "flex-1 min-w-0"]))), children:"Sub total"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("h3", $G__65903$$) : $APP.$helix$core$jsx$$.call(null, "h3", $G__65903$$);
        }(), function() {
          var $G__65909_G__65915$jscomp$inline_3806$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-semibold", "text-slate-700  dark:text-slate-300"]))), children:$amp$components$elements$budget$budget_table$format_currency$$($sub_total$jscomp$1$$)};
          $G__65909_G__65915$jscomp$inline_3806$$ = {className:"flex items-baseline justify-end shrink-0 ml-2", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__65909_G__65915$jscomp$inline_3806$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__65909_G__65915$jscomp$inline_3806$$)};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__65909_G__65915$jscomp$inline_3806$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__65909_G__65915$jscomp$inline_3806$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("li", $G__65898$$) : $APP.$helix$core$jsxs$$.call(null, "li", $G__65898$$);
    }(), function() {
      var $G__65931$$ = function() {
        return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["bg-slate-100/60 dark:bg-slate-800/60", "text-slate-900  dark:text-slate-100", "flex items-baseline px-4 py-2"]))), children:[function() {
          var $G__65939$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["text-sm", "uppercase", "tracking-wider", "text-slate-600  dark:text-slate-400", "flex-1 min-w-0"]))), children:"Contingency 5%"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("h3", $G__65939$$) : $APP.$helix$core$jsx$$.call(null, "h3", $G__65939$$);
        }(), function() {
          var $G__65945_G__65953$jscomp$inline_3809$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-semibold", "text-slate-700  dark:text-slate-300"]))), children:$amp$components$elements$budget$budget_table$format_currency$$(66821)};
          $G__65945_G__65953$jscomp$inline_3809$$ = {className:"flex items-baseline justify-end shrink-0 ml-2", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__65945_G__65953$jscomp$inline_3809$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__65945_G__65953$jscomp$inline_3809$$)};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__65945_G__65953$jscomp$inline_3809$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__65945_G__65953$jscomp$inline_3809$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("li", $G__65931$$) : $APP.$helix$core$jsxs$$.call(null, "li", $G__65931$$);
    }(), function() {
      var $G__65959$$ = function() {
        return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["bg-white        dark:bg-slate-900", "text-slate-900  dark:text-slate-100", "flex items-baseline px-4 py-4 border-t border-pink-500/40"]))), children:[function() {
          var $G__65964$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-bold", "text-lg", "uppercase", "tracking-wider", "flex-1 min-w-0"]))), children:"TOTAL"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("h3", $G__65964$$) : $APP.$helix$core$jsx$$.call(null, "h3", $G__65964$$);
        }(), function() {
          var $G__65968_G__65972$jscomp$inline_3812$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$value_lg$$), children:$amp$components$elements$budget$budget_table$format_currency$$($grand_total$$)};
          $G__65968_G__65972$jscomp$inline_3812$$ = {className:"flex items-baseline justify-end shrink-0 ml-2", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__65968_G__65972$jscomp$inline_3812$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__65968_G__65972$jscomp$inline_3812$$)};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__65968_G__65972$jscomp$inline_3812$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__65968_G__65972$jscomp$inline_3812$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("li", $G__65959$$) : $APP.$helix$core$jsxs$$.call(null, "li", $G__65959$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__65890_cost_data$jscomp$1_map__65887_map__65887__$1_props__41640__auto__$jscomp$57_vec__65884$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__65890_cost_data$jscomp$1_map__65887_map__65887__$1_props__41640__auto__$jscomp$57_vec__65884$$);
};
$amp$components$elements$budget$budget_table$pad_two_digits$$ = function($n$jscomp$225$$) {
  return $n$jscomp$225$$ < 10 ? "0" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($n$jscomp$225$$) : "" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($n$jscomp$225$$);
};
$amp$components$elements$budget$budget_table$detail_line_item$$ = function($G__66013_G__66089_map__66009_map__66009__$1_props__41640__auto__$jscomp$58_vec__66006$$, $maybe_ref__41641__auto__$jscomp$58$$) {
  $G__66013_G__66089_map__66009_map__66009__$1_props__41640__auto__$jscomp$58_vec__66006$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__66013_G__66089_map__66009_map__66009__$1_props__41640__auto__$jscomp$58_vec__66006$$), $maybe_ref__41641__auto__$jscomp$58$$], null);
  $G__66013_G__66089_map__66009_map__66009__$1_props__41640__auto__$jscomp$58_vec__66006$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__66013_G__66089_map__66009_map__66009__$1_props__41640__auto__$jscomp$58_vec__66006$$, 0, null);
  $G__66013_G__66089_map__66009_map__66009__$1_props__41640__auto__$jscomp$58_vec__66006$$ = $APP.$cljs$core$__destructure_map$$($G__66013_G__66089_map__66009_map__66009__$1_props__41640__auto__$jscomp$58_vec__66006$$);
  var $idx$jscomp$72$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__66013_G__66089_map__66009_map__66009__$1_props__41640__auto__$jscomp$58_vec__66006$$, $APP.$cljs$cst$443$idx$$), $detail$jscomp$7$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__66013_G__66089_map__66009_map__66009__$1_props__41640__auto__$jscomp$58_vec__66006$$, $APP.$cljs$cst$630$detail$$), $set_expanded_items$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__66013_G__66089_map__66009_map__66009__$1_props__41640__auto__$jscomp$58_vec__66006$$, 
  $cljs$cst$809$set_expanded_items$$), $expanded_items$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__66013_G__66089_map__66009_map__66009__$1_props__41640__auto__$jscomp$58_vec__66006$$, $cljs$cst$810$expanded_items$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $item_id$$ = "detail-item-" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($idx$jscomp$72$$), $description$jscomp$4$$ = $cljs$cst$811$description$$.$cljs$core$IFn$_invoke$arity$1$($detail$jscomp$7$$), $is_odd_detail_QMARK_$$ = !$APP.$cljs$core$even_QMARK_$$($idx$jscomp$72$$);
  if ($APP.$cljs$core$truth_$$($description$jscomp$4$$)) {
    return $G__66013_G__66089_map__66009_map__66009__$1_props__41640__auto__$jscomp$58_vec__66006$$ = function() {
      return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["cursor-pointer overflow-hidden", "font-mono", $is_odd_detail_QMARK_$$ ? "bg-slate-100/60 dark:bg-slate-800/60" : null]))), onClick:function() {
        function $G__66016$$($prev$jscomp$8$$) {
          return $APP.$cljs$core$truth_$$($prev$jscomp$8$$.$cljs$core$IFn$_invoke$arity$1$ ? $prev$jscomp$8$$.$cljs$core$IFn$_invoke$arity$1$($item_id$$) : $prev$jscomp$8$$.call(null, $item_id$$)) ? $APP.$cljs$core$disj$$.$cljs$core$IFn$_invoke$arity$2$($prev$jscomp$8$$, $item_id$$) : $APP.$cljs$core$conj$$.$cljs$core$IFn$_invoke$arity$2$($prev$jscomp$8$$, $item_id$$);
        }
        return $set_expanded_items$$.$cljs$core$IFn$_invoke$arity$1$ ? $set_expanded_items$$.$cljs$core$IFn$_invoke$arity$1$($G__66016$$) : $set_expanded_items$$.call(null, $G__66016$$);
      }, children:[function() {
        var $G__66019$$ = function() {
          return {className:"px-8 py-2 flex justify-between items-center", children:[function() {
            var $G__66025$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["text-[11px]", "text-slate-400  dark:text-slate-600", "mr-4"]))), children:"" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($amp$components$elements$budget$budget_table$pad_two_digits$$($idx$jscomp$72$$ + 1)) + "."};
            return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__66025$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__66025$$);
          }(), function() {
            var $G__66031_JSCompiler_temp_const$jscomp$inline_4013$$ = $APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["justify-start flex-1 flex items-center", "text-sm", "text-slate-700  dark:text-slate-300"])));
            var $JSCompiler_temp_const$jscomp$inline_4014$$ = $APP.$cljs$cst$381$title$$.$cljs$core$IFn$_invoke$arity$1$($detail$jscomp$7$$);
            var $G__66037$jscomp$inline_4016_JSCompiler_inline_result$jscomp$inline_4015_JSCompiler_temp_const$jscomp$inline_4017$$ = $APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["w-4 h-4 ml-2", "text-slate-400  dark:text-slate-600"])));
            var $G__66041$jscomp$inline_4019_JSCompiler_inline_result$jscomp$inline_4018$$ = {};
            $G__66041$jscomp$inline_4019_JSCompiler_inline_result$jscomp$inline_4018$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$icons$InformationCircle$$, $G__66041$jscomp$inline_4019_JSCompiler_inline_result$jscomp$inline_4018$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$icons$InformationCircle$$, $G__66041$jscomp$inline_4019_JSCompiler_inline_result$jscomp$inline_4018$$);
            $G__66037$jscomp$inline_4016_JSCompiler_inline_result$jscomp$inline_4015_JSCompiler_temp_const$jscomp$inline_4017$$ = {className:$G__66037$jscomp$inline_4016_JSCompiler_inline_result$jscomp$inline_4015_JSCompiler_temp_const$jscomp$inline_4017$$, children:$G__66041$jscomp$inline_4019_JSCompiler_inline_result$jscomp$inline_4018$$};
            $G__66037$jscomp$inline_4016_JSCompiler_inline_result$jscomp$inline_4015_JSCompiler_temp_const$jscomp$inline_4017$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__66037$jscomp$inline_4016_JSCompiler_inline_result$jscomp$inline_4015_JSCompiler_temp_const$jscomp$inline_4017$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__66037$jscomp$inline_4016_JSCompiler_inline_result$jscomp$inline_4015_JSCompiler_temp_const$jscomp$inline_4017$$);
            $G__66031_JSCompiler_temp_const$jscomp$inline_4013$$ = {className:$G__66031_JSCompiler_temp_const$jscomp$inline_4013$$, children:[$JSCompiler_temp_const$jscomp$inline_4014$$, $G__66037$jscomp$inline_4016_JSCompiler_inline_result$jscomp$inline_4015_JSCompiler_temp_const$jscomp$inline_4017$$]};
            return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__66031_JSCompiler_temp_const$jscomp$inline_4013$$) : $APP.$helix$core$jsxs$$.call(null, "span", $G__66031_JSCompiler_temp_const$jscomp$inline_4013$$);
          }(), function() {
            var $G__66045$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$value_sm$$), children:$amp$components$elements$budget$budget_table$format_currency$$($cljs$cst$804$amount$$.$cljs$core$IFn$_invoke$arity$1$($detail$jscomp$7$$))};
            return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__66045$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__66045$$);
          }()]};
        }();
        return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__66019$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__66019$$);
      }(), $APP.$cljs$core$truth_$$($expanded_items$$.$cljs$core$IFn$_invoke$arity$1$ ? $expanded_items$$.$cljs$core$IFn$_invoke$arity$1$($item_id$$) : $expanded_items$$.call(null, $item_id$$)) ? function() {
        var $G__66057_G__66065$jscomp$inline_4130_G__66069$jscomp$inline_4131_JSCompiler_temp_const$jscomp$inline_4132$$ = $APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_sm$$, "bg-slate-100/60 dark:bg-slate-800/60"])));
        var $G__66077$jscomp$inline_4134_JSCompiler_inline_result$jscomp$inline_4133$$ = {className:"px-6 py-4", children:$description$jscomp$4$$};
        $G__66077$jscomp$inline_4134_JSCompiler_inline_result$jscomp$inline_4133$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__66077$jscomp$inline_4134_JSCompiler_inline_result$jscomp$inline_4133$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__66077$jscomp$inline_4134_JSCompiler_inline_result$jscomp$inline_4133$$);
        $G__66057_G__66065$jscomp$inline_4130_G__66069$jscomp$inline_4131_JSCompiler_temp_const$jscomp$inline_4132$$ = {className:$G__66057_G__66065$jscomp$inline_4130_G__66069$jscomp$inline_4131_JSCompiler_temp_const$jscomp$inline_4132$$, children:$G__66077$jscomp$inline_4134_JSCompiler_inline_result$jscomp$inline_4133$$};
        $G__66057_G__66065$jscomp$inline_4130_G__66069$jscomp$inline_4131_JSCompiler_temp_const$jscomp$inline_4132$$ = {className:"", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__66057_G__66065$jscomp$inline_4130_G__66069$jscomp$inline_4131_JSCompiler_temp_const$jscomp$inline_4132$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__66057_G__66065$jscomp$inline_4130_G__66069$jscomp$inline_4131_JSCompiler_temp_const$jscomp$inline_4132$$)};
        $G__66057_G__66065$jscomp$inline_4130_G__66069$jscomp$inline_4131_JSCompiler_temp_const$jscomp$inline_4132$$ = {className:"border-l-2 border-pink-500/30", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__66057_G__66065$jscomp$inline_4130_G__66069$jscomp$inline_4131_JSCompiler_temp_const$jscomp$inline_4132$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__66057_G__66065$jscomp$inline_4130_G__66069$jscomp$inline_4131_JSCompiler_temp_const$jscomp$inline_4132$$)};
        return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__66057_G__66065$jscomp$inline_4130_G__66069$jscomp$inline_4131_JSCompiler_temp_const$jscomp$inline_4132$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__66057_G__66065$jscomp$inline_4130_G__66069$jscomp$inline_4131_JSCompiler_temp_const$jscomp$inline_4132$$);
      }() : null]};
    }(), $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("li", $G__66013_G__66089_map__66009_map__66009__$1_props__41640__auto__$jscomp$58_vec__66006$$) : $APP.$helix$core$jsxs$$.call(null, "li", $G__66013_G__66089_map__66009_map__66009__$1_props__41640__auto__$jscomp$58_vec__66006$$);
  }
  $G__66013_G__66089_map__66009_map__66009__$1_props__41640__auto__$jscomp$58_vec__66006$$ = function() {
    return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-mono", $is_odd_detail_QMARK_$$ ? "bg-slate-100/60 dark:bg-slate-800/60" : null]))), children:function() {
      var $G__66097$$ = function() {
        return {className:"px-8 py-2 flex justify-between items-center", children:[function() {
          var $G__66105$jscomp$1$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["text-[11px]", "text-slate-400  dark:text-slate-600", "mr-4"]))), children:"" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($amp$components$elements$budget$budget_table$pad_two_digits$$($idx$jscomp$72$$ + 1)) + "."};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__66105$jscomp$1$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__66105$jscomp$1$$);
        }(), function() {
          var $G__66109$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["justify-start flex-1", "text-sm", "text-slate-700  dark:text-slate-300"]))), children:$APP.$cljs$cst$381$title$$.$cljs$core$IFn$_invoke$arity$1$($detail$jscomp$7$$)};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__66109$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__66109$$);
        }(), function() {
          var $G__66118$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$value_sm$$), children:$amp$components$elements$budget$budget_table$format_currency$$($cljs$cst$804$amount$$.$cljs$core$IFn$_invoke$arity$1$($detail$jscomp$7$$))};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__66118$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__66118$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__66097$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__66097$$);
    }()};
  }();
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("li", $G__66013_G__66089_map__66009_map__66009__$1_props__41640__auto__$jscomp$58_vec__66006$$) : $APP.$helix$core$jsx$$.call(null, "li", $G__66013_G__66089_map__66009_map__66009__$1_props__41640__auto__$jscomp$58_vec__66006$$);
};
$amp$components$elements$budget$budget_table$details__GT_render_items$$ = function($G__66449_details$jscomp$4$$) {
  for (var $G__66448_items$jscomp$8$$ = $G__66449_details$jscomp$4$$, $idx$jscomp$73$$ = 0, $prev_group$$ = null, $result$jscomp$136$$ = $APP.$cljs$core$PersistentVector$EMPTY$$;;) {
    if ($APP.$cljs$core$empty_QMARK_$$($G__66448_items$jscomp$8$$)) {
      return $result$jscomp$136$$;
    }
    var $detail$jscomp$8$$ = $APP.$cljs$core$first$$($G__66448_items$jscomp$8$$), $curr_group$$ = $APP.$cljs$cst$584$group$$.$cljs$core$IFn$_invoke$arity$1$($detail$jscomp$8$$), $show_header_QMARK_$$ = function() {
      var $and__5140__auto__$jscomp$89$$ = $curr_group$$;
      return $APP.$cljs$core$truth_$$($and__5140__auto__$jscomp$89$$) ? $APP.$cljs$core$not_EQ_$cljs$0core$0IFn$0_invoke$0arity$02$$($curr_group$$, $prev_group$$) : $and__5140__auto__$jscomp$89$$;
    }();
    $G__66448_items$jscomp$8$$ = $APP.$cljs$core$rest$$($G__66448_items$jscomp$8$$);
    $G__66449_details$jscomp$4$$ = $idx$jscomp$73$$ + 1;
    var $G__66450$$ = $curr_group$$, $G__66451$$ = function() {
      var $G__66169_G__66169__$1$$ = $result$jscomp$136$$;
      $G__66169_G__66169__$1$$ = $APP.$cljs$core$truth_$$($show_header_QMARK_$$) ? $APP.$cljs$core$conj$$.$cljs$core$IFn$_invoke$arity$2$($G__66169_G__66169__$1$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$25$type$$, $APP.$cljs$cst$333$header$$, $cljs$cst$812$label$$, $curr_group$$, $APP.$cljs$cst$99$key$$, "gh-" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($idx$jscomp$73$$)], null)) : $G__66169_G__66169__$1$$;
      return $APP.$cljs$core$conj$$.$cljs$core$IFn$_invoke$arity$2$($G__66169_G__66169__$1$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$25$type$$, $APP.$cljs$cst$630$detail$$, $APP.$cljs$cst$630$detail$$, $detail$jscomp$8$$, $APP.$cljs$cst$443$idx$$, $idx$jscomp$73$$, $APP.$cljs$cst$99$key$$, "d-" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($idx$jscomp$73$$)], null));
    }();
    $idx$jscomp$73$$ = $G__66449_details$jscomp$4$$;
    $prev_group$$ = $G__66450$$;
    $result$jscomp$136$$ = $G__66451$$;
  }
};
$amp$components$elements$budget$budget_table$section_line_item$$ = function($G__66223_details$jscomp$5_map__66217_map__66217__$1_props__41640__auto__$jscomp$59_vec__66214$$, $maybe_ref__41641__auto__$jscomp$59_tax_rate$jscomp$1$$) {
  $G__66223_details$jscomp$5_map__66217_map__66217__$1_props__41640__auto__$jscomp$59_vec__66214$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__66223_details$jscomp$5_map__66217_map__66217__$1_props__41640__auto__$jscomp$59_vec__66214$$), $maybe_ref__41641__auto__$jscomp$59_tax_rate$jscomp$1$$], null);
  $G__66223_details$jscomp$5_map__66217_map__66217__$1_props__41640__auto__$jscomp$59_vec__66214$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__66223_details$jscomp$5_map__66217_map__66217__$1_props__41640__auto__$jscomp$59_vec__66214$$, 0, null);
  $G__66223_details$jscomp$5_map__66217_map__66217__$1_props__41640__auto__$jscomp$59_vec__66214$$ = $APP.$cljs$core$__destructure_map$$($G__66223_details$jscomp$5_map__66217_map__66217__$1_props__41640__auto__$jscomp$59_vec__66214$$);
  var $idx$jscomp$74$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__66223_details$jscomp$5_map__66217_map__66217__$1_props__41640__auto__$jscomp$59_vec__66214$$, $APP.$cljs$cst$443$idx$$), $item$jscomp$34$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__66223_details$jscomp$5_map__66217_map__66217__$1_props__41640__auto__$jscomp$59_vec__66214$$, $cljs$cst$813$item$$), $set_expanded_items$jscomp$1$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__66223_details$jscomp$5_map__66217_map__66217__$1_props__41640__auto__$jscomp$59_vec__66214$$, 
  $cljs$cst$809$set_expanded_items$$), $expanded_items$jscomp$1$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__66223_details$jscomp$5_map__66217_map__66217__$1_props__41640__auto__$jscomp$59_vec__66214$$, $cljs$cst$810$expanded_items$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $section_ref$$ = $APP.$helix$hooks$use_ref$$("section-" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($idx$jscomp$74$$)), $scroll_to_ref$$ = $amp$hooks$use_scroll_to$use_scroll_to_ref$$(), $item_id$jscomp$1$$ = "item-" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($idx$jscomp$74$$);
  $G__66223_details$jscomp$5_map__66217_map__66217__$1_props__41640__auto__$jscomp$59_vec__66214$$ = $cljs$cst$805$details$$.$cljs$core$IFn$_invoke$arity$1$($item$jscomp$34$$);
  var $sub_total$jscomp$2$$ = $APP.$cljs$core$reduce$cljs$0core$0IFn$0_invoke$0arity$02$$($APP.$cljs$core$_PLUS_$$, $APP.$cljs$core$map$$.$cljs$core$IFn$_invoke$arity$2$($cljs$cst$804$amount$$, $G__66223_details$jscomp$5_map__66217_map__66217__$1_props__41640__auto__$jscomp$59_vec__66214$$));
  $maybe_ref__41641__auto__$jscomp$59_tax_rate$jscomp$1$$ = $cljs$cst$806$rate$$.$cljs$core$IFn$_invoke$arity$1$($cljs$cst$807$tax$$.$cljs$core$IFn$_invoke$arity$1$($item$jscomp$34$$));
  var $tax_label$$ = $cljs$cst$812$label$$.$cljs$core$IFn$_invoke$arity$1$($cljs$cst$807$tax$$.$cljs$core$IFn$_invoke$arity$1$($item$jscomp$34$$)), $tax_total$jscomp$1$$ = $sub_total$jscomp$2$$ * $maybe_ref__41641__auto__$jscomp$59_tax_rate$jscomp$1$$, $has_tax_QMARK_$jscomp$1$$ = $maybe_ref__41641__auto__$jscomp$59_tax_rate$jscomp$1$$ > 0, $total$jscomp$4$$ = $sub_total$jscomp$2$$ + $tax_total$jscomp$1$$, $is_odd$$ = !$APP.$cljs$core$even_QMARK_$$($idx$jscomp$74$$), $render_items$$ = $amp$components$elements$budget$budget_table$details__GT_render_items$$($G__66223_details$jscomp$5_map__66217_map__66217__$1_props__41640__auto__$jscomp$59_vec__66214$$);
  $G__66223_details$jscomp$5_map__66217_map__66217__$1_props__41640__auto__$jscomp$59_vec__66214$$ = function() {
    return {ref:$section_ref$$, className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["overflow-hidden", "font-mono", $is_odd$$ ? "bg-white        dark:bg-slate-900" : "bg-slate-100/60 dark:bg-slate-800/60"]))), children:[function() {
      var $G__66227$$ = function() {
        return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["flex flex-wrap items-baseline px-4 py-3 gap-y-1 cursor-pointer transition-colors", "hover:bg-slate-800/50 dark:hover:bg-slate-800/50"]))), onClick:function() {
          function $G__66230$jscomp$1$$($prev$jscomp$9$$) {
            return $APP.$cljs$core$truth_$$($prev$jscomp$9$$.$cljs$core$IFn$_invoke$arity$1$ ? $prev$jscomp$9$$.$cljs$core$IFn$_invoke$arity$1$($item_id$jscomp$1$$) : $prev$jscomp$9$$.call(null, $item_id$jscomp$1$$)) ? $APP.$cljs$core$disj$$.$cljs$core$IFn$_invoke$arity$2$($prev$jscomp$9$$, $item_id$jscomp$1$$) : $APP.$cljs$core$conj$$.$cljs$core$IFn$_invoke$arity$2$($prev$jscomp$9$$, $item_id$jscomp$1$$);
          }
          return $set_expanded_items$jscomp$1$$.$cljs$core$IFn$_invoke$arity$1$ ? $set_expanded_items$jscomp$1$$.$cljs$core$IFn$_invoke$arity$1$($G__66230$jscomp$1$$) : $set_expanded_items$jscomp$1$$.call(null, $G__66230$jscomp$1$$);
        }, children:[function() {
          var $G__66232$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$("font-display;font-semibold;uppercase;tracking-wide;text-slate-700  dark:text-slate-300;text-base sm:text-lg flex-1 min-w-0".split(";")))), children:"" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($idx$jscomp$74$$ + 1) + ". " + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($APP.$cljs$cst$381$title$$.$cljs$core$IFn$_invoke$arity$1$($item$jscomp$34$$))};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("h3", $G__66232$$) : $APP.$helix$core$jsx$$.call(null, "h3", $G__66232$$);
        }(), function() {
          var $G__66236$jscomp$1$$ = function() {
            return {className:"flex items-baseline justify-end shrink-0 ml-2", children:[function() {
              var $G__66240$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-semibold", "text-indigo-600 dark:text-indigo-300", "text-sm", "sm:text-base"]))), children:$amp$components$elements$budget$budget_table$format_currency$$($total$jscomp$4$$)};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__66240$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__66240$$);
            }(), function() {
              var $G__66244_JSCompiler_temp_const$jscomp$inline_3372$$ = $APP.$helix$impl$props$normalize_class$$("w-4 h-4 ml-3 transition-transform " + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$("text-slate-500  dark:text-slate-500") + " " + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($APP.$cljs$core$truth_$$($expanded_items$jscomp$1$$.$cljs$core$IFn$_invoke$arity$1$ ? $expanded_items$jscomp$1$$.$cljs$core$IFn$_invoke$arity$1$($item_id$jscomp$1$$) : $expanded_items$jscomp$1$$.call(null, 
              $item_id$jscomp$1$$)) ? "rotate-90" : null));
              var $G__66248$jscomp$inline_3374_JSCompiler_inline_result$jscomp$inline_3373$$ = {};
              $G__66248$jscomp$inline_3374_JSCompiler_inline_result$jscomp$inline_3373$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$components$icons$ChevronRightIcon$$, $G__66248$jscomp$inline_3374_JSCompiler_inline_result$jscomp$inline_3373$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$components$icons$ChevronRightIcon$$, $G__66248$jscomp$inline_3374_JSCompiler_inline_result$jscomp$inline_3373$$);
              $G__66244_JSCompiler_temp_const$jscomp$inline_3372$$ = {className:$G__66244_JSCompiler_temp_const$jscomp$inline_3372$$, children:$G__66248$jscomp$inline_3374_JSCompiler_inline_result$jscomp$inline_3373$$};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__66244_JSCompiler_temp_const$jscomp$inline_3372$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__66244_JSCompiler_temp_const$jscomp$inline_3372$$);
            }()]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__66236$jscomp$1$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__66236$jscomp$1$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__66227$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__66227$$);
    }(), $APP.$cljs$core$truth_$$($expanded_items$jscomp$1$$.$cljs$core$IFn$_invoke$arity$1$ ? $expanded_items$jscomp$1$$.$cljs$core$IFn$_invoke$arity$1$($item_id$jscomp$1$$) : $expanded_items$jscomp$1$$.call(null, $item_id$jscomp$1$$)) ? function() {
      var $G__66250$$ = function() {
        return {className:"border-l-2 border-pink-500/30", children:[function() {
          var $G__66254_JSCompiler_temp_const$jscomp$inline_3823$$ = $APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_sm$$, "bg-slate-100/60 dark:bg-slate-800/60"])));
          var $G__66258$jscomp$inline_3825_JSCompiler_inline_result$jscomp$inline_3824$$ = {className:"px-8 py-4", children:$cljs$cst$811$description$$.$cljs$core$IFn$_invoke$arity$1$($item$jscomp$34$$)};
          $G__66258$jscomp$inline_3825_JSCompiler_inline_result$jscomp$inline_3824$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__66258$jscomp$inline_3825_JSCompiler_inline_result$jscomp$inline_3824$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__66258$jscomp$inline_3825_JSCompiler_inline_result$jscomp$inline_3824$$);
          $G__66254_JSCompiler_temp_const$jscomp$inline_3823$$ = {className:$G__66254_JSCompiler_temp_const$jscomp$inline_3823$$, children:$G__66258$jscomp$inline_3825_JSCompiler_inline_result$jscomp$inline_3824$$};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__66254_JSCompiler_temp_const$jscomp$inline_3823$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__66254_JSCompiler_temp_const$jscomp$inline_3823$$);
        }(), function() {
          var $G__66262$$ = function() {
            return {children:$APP.$cljs$core$map$$.$cljs$core$IFn$_invoke$arity$2$(function($G__66268_G__66277_ri$$) {
              var $G__66265_G__66265__$1_G__66267_G__66276_JSCompiler_temp_const$jscomp$inline_3827$$ = $APP.$cljs$cst$25$type$$.$cljs$core$IFn$_invoke$arity$1$($G__66268_G__66277_ri$$);
              $G__66265_G__66265__$1_G__66267_G__66276_JSCompiler_temp_const$jscomp$inline_3827$$ = $G__66265_G__66265__$1_G__66267_G__66276_JSCompiler_temp_const$jscomp$inline_3827$$ instanceof $APP.$cljs$core$Keyword$$ ? $G__66265_G__66265__$1_G__66267_G__66276_JSCompiler_temp_const$jscomp$inline_3827$$.$fqn$ : null;
              switch($G__66265_G__66265__$1_G__66267_G__66276_JSCompiler_temp_const$jscomp$inline_3827$$) {
                case "header":
                  $G__66265_G__66265__$1_G__66267_G__66276_JSCompiler_temp_const$jscomp$inline_3827$$ = $APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$("px-8 py-2 border-b border-slate-700/40;bg-white        dark:bg-slate-900;text-pink-700/50 dark:text-pink-300/50;text-sm sm:text-base;font-semibold;uppercase;tracking-[0.15em]".split(";"))));
                  var $G__66272$jscomp$inline_3829_JSCompiler_inline_result$jscomp$inline_3828$$ = {children:$cljs$cst$812$label$$.$cljs$core$IFn$_invoke$arity$1$($G__66268_G__66277_ri$$)};
                  $G__66272$jscomp$inline_3829_JSCompiler_inline_result$jscomp$inline_3828$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__66272$jscomp$inline_3829_JSCompiler_inline_result$jscomp$inline_3828$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__66272$jscomp$inline_3829_JSCompiler_inline_result$jscomp$inline_3828$$);
                  $G__66265_G__66265__$1_G__66267_G__66276_JSCompiler_temp_const$jscomp$inline_3827$$ = {className:$G__66265_G__66265__$1_G__66267_G__66276_JSCompiler_temp_const$jscomp$inline_3827$$, children:$G__66272$jscomp$inline_3829_JSCompiler_inline_result$jscomp$inline_3828$$};
                  $G__66268_G__66277_ri$$ = $APP.$cljs$cst$99$key$$.$cljs$core$IFn$_invoke$arity$1$($G__66268_G__66277_ri$$);
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$("div", $G__66265_G__66265__$1_G__66267_G__66276_JSCompiler_temp_const$jscomp$inline_3827$$, $G__66268_G__66277_ri$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__66265_G__66265__$1_G__66267_G__66276_JSCompiler_temp_const$jscomp$inline_3827$$, $G__66268_G__66277_ri$$);
                case "detail":
                  return $G__66265_G__66265__$1_G__66267_G__66276_JSCompiler_temp_const$jscomp$inline_3827$$ = {idx:$APP.$cljs$cst$443$idx$$.$cljs$core$IFn$_invoke$arity$1$($G__66268_G__66277_ri$$), detail:$APP.$cljs$cst$630$detail$$.$cljs$core$IFn$_invoke$arity$1$($G__66268_G__66277_ri$$), "set-expanded-items":$set_expanded_items$jscomp$1$$, "expanded-items":$expanded_items$jscomp$1$$}, $G__66268_G__66277_ri$$ = $APP.$cljs$cst$99$key$$.$cljs$core$IFn$_invoke$arity$1$($G__66268_G__66277_ri$$), $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$ ? 
                  $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$($amp$components$elements$budget$budget_table$detail_line_item$$, $G__66265_G__66265__$1_G__66267_G__66276_JSCompiler_temp_const$jscomp$inline_3827$$, $G__66268_G__66277_ri$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$elements$budget$budget_table$detail_line_item$$, $G__66265_G__66265__$1_G__66267_G__66276_JSCompiler_temp_const$jscomp$inline_3827$$, $G__66268_G__66277_ri$$);
                default:
                  throw Error("No matching clause: " + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($G__66265_G__66265__$1_G__66267_G__66276_JSCompiler_temp_const$jscomp$inline_3827$$));
              }
            }, $render_items$$)};
          }();
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("ol", $G__66262$$) : $APP.$helix$core$jsx$$.call(null, "ol", $G__66262$$);
        }(), function() {
          var $G__66281$$ = function() {
            return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["bg-white        dark:bg-slate-900", "flex flex-col border-t border-slate-200 dark:border-slate-800"]))), children:[$has_tax_QMARK_$jscomp$1$$ ? function() {
              var $G__66285$$ = function() {
                return {children:[function() {
                  var $G__66289$$ = function() {
                    return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-semibold", "text-sm", "px-8 py-2 flex"]))), children:[function() {
                      var $G__66293$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["text-[10px]", "text-slate-400  dark:text-slate-600"]))), children:"-"};
                      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__66293$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__66293$$);
                    }(), function() {
                      var $G__66297$jscomp$1$$ = function() {
                        return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["flex justify-between ml-8 w-full", "text-slate-700  dark:text-slate-300"]))), children:[function() {
                          var $G__66301$jscomp$1$$ = {children:"Sub total: "};
                          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__66301$jscomp$1$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__66301$jscomp$1$$);
                        }(), function() {
                          var $G__66305$$ = {children:$amp$components$elements$budget$budget_table$format_currency$$($sub_total$jscomp$2$$)};
                          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__66305$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__66305$$);
                        }()]};
                      }();
                      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__66297$jscomp$1$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__66297$jscomp$1$$);
                    }()]};
                  }();
                  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__66289$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__66289$$);
                }(), function() {
                  var $G__66309$jscomp$1$$ = function() {
                    return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-semibold", "text-sm", "px-8 py-2 flex"]))), children:[function() {
                      var $G__66313$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["text-[10px]", "text-slate-400  dark:text-slate-600"]))), children:"-"};
                      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__66313$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__66313$$);
                    }(), function() {
                      var $G__66317$jscomp$1$$ = function() {
                        return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["flex justify-between ml-8 w-full", "text-amber-600/80 dark:text-amber-300/80"]))), children:[function() {
                          var $G__66321$$ = {children:$tax_label$$};
                          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__66321$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__66321$$);
                        }(), function() {
                          var $G__66325$jscomp$1$$ = {children:$amp$components$elements$budget$budget_table$format_currency$$($tax_total$jscomp$1$$)};
                          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__66325$jscomp$1$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__66325$jscomp$1$$);
                        }()]};
                      }();
                      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__66317$jscomp$1$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__66317$jscomp$1$$);
                    }()]};
                  }();
                  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__66309$jscomp$1$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__66309$jscomp$1$$);
                }()]};
              }();
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__66285$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__66285$$);
            }() : null, function() {
              var $G__66329$$ = function() {
                return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-bold", "text-base", "bg-slate-50 dark:bg-slate-950 px-8 py-4 flex border-t border-pink-500/20"]))), children:[function() {
                  var $G__66333$jscomp$1$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["text-[10px]", "text-slate-400  dark:text-slate-600"]))), children:"-"};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__66333$jscomp$1$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__66333$jscomp$1$$);
                }(), function() {
                  var $G__66337$$ = function() {
                    return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["flex justify-between ml-8 w-full", "text-pink-700   dark:text-pink-300"]))), children:[function() {
                      var $G__66341$$ = {children:"Total: "};
                      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__66341$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__66341$$);
                    }(), function() {
                      var $G__66345$jscomp$1$$ = {children:$amp$components$elements$budget$budget_table$format_currency$$($total$jscomp$4$$)};
                      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__66345$jscomp$1$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__66345$jscomp$1$$);
                    }()]};
                  }();
                  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__66337$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__66337$$);
                }()]};
              }();
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__66329$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__66329$$);
            }(), function() {
              var $G__66349$jscomp$1$$ = function() {
                return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$btn_text$$, "bg-slate-100/60 dark:bg-slate-800/60", "flex p-3 justify-center items-center cursor-pointer"]))), onClick:function() {
                  function $G__66352_66486$$($prev$jscomp$10$$) {
                    return $APP.$cljs$core$truth_$$($prev$jscomp$10$$.$cljs$core$IFn$_invoke$arity$1$ ? $prev$jscomp$10$$.$cljs$core$IFn$_invoke$arity$1$($item_id$jscomp$1$$) : $prev$jscomp$10$$.call(null, $item_id$jscomp$1$$)) ? $APP.$cljs$core$disj$$.$cljs$core$IFn$_invoke$arity$2$($prev$jscomp$10$$, $item_id$jscomp$1$$) : $APP.$cljs$core$conj$$.$cljs$core$IFn$_invoke$arity$2$($prev$jscomp$10$$, $item_id$jscomp$1$$);
                  }
                  $set_expanded_items$jscomp$1$$.$cljs$core$IFn$_invoke$arity$1$ ? $set_expanded_items$jscomp$1$$.$cljs$core$IFn$_invoke$arity$1$($G__66352_66486$$) : $set_expanded_items$jscomp$1$$.call(null, $G__66352_66486$$);
                  return $scroll_to_ref$$.$cljs$core$IFn$_invoke$arity$1$ ? $scroll_to_ref$$.$cljs$core$IFn$_invoke$arity$1$($section_ref$$) : $scroll_to_ref$$.call(null, $section_ref$$);
                }, children:["CLOSE SECTION", function() {
                  var $G__66354$jscomp$1_JSCompiler_temp_const$jscomp$inline_3380$$ = $APP.$helix$impl$props$normalize_class$$("w-4 h-4 transition-transform ml-2 " + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($APP.$cljs$core$truth_$$($expanded_items$jscomp$1$$.$cljs$core$IFn$_invoke$arity$1$ ? $expanded_items$jscomp$1$$.$cljs$core$IFn$_invoke$arity$1$($item_id$jscomp$1$$) : $expanded_items$jscomp$1$$.call(null, $item_id$jscomp$1$$)) ? "-rotate-90" : null));
                  var $G__66358$jscomp$inline_3382_JSCompiler_inline_result$jscomp$inline_3381$$ = {};
                  $G__66358$jscomp$inline_3382_JSCompiler_inline_result$jscomp$inline_3381$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$components$icons$ChevronRightIcon$$, $G__66358$jscomp$inline_3382_JSCompiler_inline_result$jscomp$inline_3381$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$components$icons$ChevronRightIcon$$, $G__66358$jscomp$inline_3382_JSCompiler_inline_result$jscomp$inline_3381$$);
                  $G__66354$jscomp$1_JSCompiler_temp_const$jscomp$inline_3380$$ = {className:$G__66354$jscomp$1_JSCompiler_temp_const$jscomp$inline_3380$$, children:$G__66358$jscomp$inline_3382_JSCompiler_inline_result$jscomp$inline_3381$$};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__66354$jscomp$1_JSCompiler_temp_const$jscomp$inline_3380$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__66354$jscomp$1_JSCompiler_temp_const$jscomp$inline_3380$$);
                }()]};
              }();
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__66349$jscomp$1$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__66349$jscomp$1$$);
            }()]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__66281$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__66281$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__66250$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__66250$$);
    }() : null]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("li", $G__66223_details$jscomp$5_map__66217_map__66217__$1_props__41640__auto__$jscomp$59_vec__66214$$) : $APP.$helix$core$jsxs$$.call(null, "li", $G__66223_details$jscomp$5_map__66217_map__66217__$1_props__41640__auto__$jscomp$59_vec__66214$$);
};
$amp$components$elements$budget$budget_table$budget_table$$ = function($G__66384$jscomp$1_map__66371_map__66371__$1_props__41640__auto__$jscomp$60_vec__66368_vec__66380$$, $maybe_ref__41641__auto__$jscomp$60$$) {
  $G__66384$jscomp$1_map__66371_map__66371__$1_props__41640__auto__$jscomp$60_vec__66368_vec__66380$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__66384$jscomp$1_map__66371_map__66371__$1_props__41640__auto__$jscomp$60_vec__66368_vec__66380$$), $maybe_ref__41641__auto__$jscomp$60$$], null);
  $G__66384$jscomp$1_map__66371_map__66371__$1_props__41640__auto__$jscomp$60_vec__66368_vec__66380$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__66384$jscomp$1_map__66371_map__66371__$1_props__41640__auto__$jscomp$60_vec__66368_vec__66380$$, 0, null);
  $G__66384$jscomp$1_map__66371_map__66371__$1_props__41640__auto__$jscomp$60_vec__66368_vec__66380$$ = $APP.$cljs$core$__destructure_map$$($G__66384$jscomp$1_map__66371_map__66371__$1_props__41640__auto__$jscomp$60_vec__66368_vec__66380$$);
  var $cost_data$jscomp$2$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__66384$jscomp$1_map__66371_map__66371__$1_props__41640__auto__$jscomp$60_vec__66368_vec__66380$$, $cljs$cst$808$cost_data$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__66384$jscomp$1_map__66371_map__66371__$1_props__41640__auto__$jscomp$60_vec__66368_vec__66380$$ = $APP.$helix$hooks$use_state$$($APP.$cljs$core$PersistentHashSet$EMPTY$$);
  var $expanded_items$jscomp$2$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__66384$jscomp$1_map__66371_map__66371__$1_props__41640__auto__$jscomp$60_vec__66368_vec__66380$$, 0, null), $set_expanded_items$jscomp$2$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__66384$jscomp$1_map__66371_map__66371__$1_props__41640__auto__$jscomp$60_vec__66368_vec__66380$$, 1, null);
  $G__66384$jscomp$1_map__66371_map__66371__$1_props__41640__auto__$jscomp$60_vec__66368_vec__66380$$ = function() {
    return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["w-full", "text-slate-950  dark:text-white", "font-mono"]))), children:[$APP.$cljs$core$map_indexed$cljs$0core$0IFn$0_invoke$0arity$02$$(function($G__66389_idx$jscomp$75$$, $G__66388_item$jscomp$35$$) {
      $G__66388_item$jscomp$35$$ = {idx:$G__66389_idx$jscomp$75$$, item:$G__66388_item$jscomp$35$$, "set-expanded-items":$set_expanded_items$jscomp$2$$, "expanded-items":$expanded_items$jscomp$2$$};
      $G__66389_idx$jscomp$75$$ = "" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($G__66389_idx$jscomp$75$$) + "-section";
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$($amp$components$elements$budget$budget_table$section_line_item$$, $G__66388_item$jscomp$35$$, $G__66389_idx$jscomp$75$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$elements$budget$budget_table$section_line_item$$, $G__66388_item$jscomp$35$$, $G__66389_idx$jscomp$75$$);
    }, $cost_data$jscomp$2$$), function() {
      var $G__66396$jscomp$1$$ = {"cost-data":$cost_data$jscomp$2$$};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$elements$budget$budget_table$total_section$$, $G__66396$jscomp$1$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$elements$budget$budget_table$total_section$$, $G__66396$jscomp$1$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("ol", $G__66384$jscomp$1_map__66371_map__66371__$1_props__41640__auto__$jscomp$60_vec__66368_vec__66380$$) : $APP.$helix$core$jsxs$$.call(null, "ol", $G__66384$jscomp$1_map__66371_map__66371__$1_props__41640__auto__$jscomp$60_vec__66368_vec__66380$$);
};
$amp$components$elements$budget$cost_breakdown$preview$$ = function($G__66599_map__66597_props__41640__auto__$jscomp$61_vec__66594$$, $maybe_ref__41641__auto__$jscomp$61$$) {
  $G__66599_map__66597_props__41640__auto__$jscomp$61_vec__66594$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__66599_map__66597_props__41640__auto__$jscomp$61_vec__66594$$), $maybe_ref__41641__auto__$jscomp$61$$], null);
  $G__66599_map__66597_props__41640__auto__$jscomp$61_vec__66594$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__66599_map__66597_props__41640__auto__$jscomp$61_vec__66594$$, 0, null);
  $APP.$cljs$core$__destructure_map$$($G__66599_map__66597_props__41640__auto__$jscomp$61_vec__66594$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__66599_map__66597_props__41640__auto__$jscomp$61_vec__66594$$ = function() {
    return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_lg$$, "p-4"]))), children:[function() {
      var $G__66603$$ = {children:["The Armenia Pavilion at the 61st Venice Biennale is a major international cultural undertaking—", "structured to meet the standards of the most rigorous national presentations. "]};
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__66603$$) : $APP.$helix$core$jsxs$$.call(null, "span", $G__66603$$);
    }(), function() {
      var $G__66607$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:"With a total budget of approximately "};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__66607$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__66607$$);
    }(), function() {
      var $G__66611$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:" ("};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__66611$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__66611$$);
    }(), function() {
      var $G__66615$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$value_currency$$), children:"$1,6M USD"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__66615$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__66615$$);
    }(), function() {
      var $G__66620$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:"), the financial framework covers the full scope of "};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__66620$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__66620$$);
    }(), function() {
      var $G__66624$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:"production, installation, operations, communications,"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__66624$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__66624$$);
    }(), function() {
      var $G__66628$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:" and "};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__66628$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__66628$$);
    }(), function() {
      var $G__66632$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:"documentation"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__66632$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__66632$$);
    }(), function() {
      var $G__66636$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:". "};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__66636$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__66636$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__66599_map__66597_props__41640__auto__$jscomp$61_vec__66594$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__66599_map__66597_props__41640__auto__$jscomp$61_vec__66594$$);
};
$amp$components$elements$budget$cost_breakdown$details$$ = function($G__66788_map__66777_props__41640__auto__$jscomp$62_vec__66774$$, $maybe_ref__41641__auto__$jscomp$62$$) {
  $G__66788_map__66777_props__41640__auto__$jscomp$62_vec__66774$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__66788_map__66777_props__41640__auto__$jscomp$62_vec__66774$$), $maybe_ref__41641__auto__$jscomp$62$$], null);
  $G__66788_map__66777_props__41640__auto__$jscomp$62_vec__66774$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__66788_map__66777_props__41640__auto__$jscomp$62_vec__66774$$, 0, null);
  $APP.$cljs$core$__destructure_map$$($G__66788_map__66777_props__41640__auto__$jscomp$62_vec__66774$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__66788_map__66777_props__41640__auto__$jscomp$62_vec__66774$$ = function() {
    return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_lg$$, "p-4"]))), children:[function() {
      var $G__66804$$ = {children:["The Armenia Pavilion at the 61st Venice Biennale is a major international cultural undertaking—", "structured to meet the standards of the most rigorous national presentations. "]};
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__66804$$) : $APP.$helix$core$jsxs$$.call(null, "span", $G__66804$$);
    }(), function() {
      var $G__66812$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:"With a total budget of approximately "};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__66812$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__66812$$);
    }(), function() {
      var $G__66826$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:" ("};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__66826$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__66826$$);
    }(), function() {
      var $G__66833$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$value_currency$$), children:"$1,6M USD"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__66833$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__66833$$);
    }(), function() {
      var $G__66845$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:"), the financial framework covers the full scope of "};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__66845$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__66845$$);
    }(), function() {
      var $G__66864$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:"production, installation, operations, communications,"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__66864$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__66864$$);
    }(), function() {
      var $G__66890$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:" and "};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__66890$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__66890$$);
    }(), function() {
      var $G__66914$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:"documentation"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__66914$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__66914$$);
    }(), function() {
      var $G__66939$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:". "};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__66939$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__66939$$);
    }(), function() {
      var $G__66953$$ = {className:"block my-6", children:["As Armenia does not maintain a permanent national pavilion in Venice, a venue must be secured through rental—", "as is customary for many smaller and non-permanent participating nations. "]};
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__66953$$) : $APP.$helix$core$jsxs$$.call(null, "span", $G__66953$$);
    }(), function() {
      var $G__66964$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:"The selected site is located outside the Biennale's primary zones, enabling a significantly lower base rent—approximately "};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__66964$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__66964$$);
    }(), function() {
      var $G__66972$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$value_currency$$), children:"$145,600"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__66972$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__66972$$);
    }(), function() {
      var $G__66980$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:"—while remaining fully accredited and visible within the official Biennale structure. "};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__66980$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__66980$$);
    }(), function() {
      var $G__66986$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:"By contrast, venues within the Giardini or Arsenale—when available—typically begin at "};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__66986$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__66986$$);
    }(), function() {
      var $G__66992$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$value_currency$$), children:"$450,000"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__66992$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__66992$$);
    }(), function() {
      var $G__67000$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:" in base rent, before construction, staffing, utilities, logistics, and operating overhead. "};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__67000$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__67000$$);
    }(), function() {
      var $G__67004$$ = function() {
        return {className:"mt-6", children:[function() {
          var $G__67010$$ = {className:"mt-6", children:"Crucially, the nature of "};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__67010$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__67010$$);
        }(), function() {
          var $G__67018$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:"THE STUDIO"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__67018$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__67018$$);
        }(), function() {
          var $G__67024$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:" makes this venue choice not only strategic but essential. "};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__67024$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__67024$$);
        }(), function() {
          var $G__67029$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:"The work is conceived to be produced, refined, and evolved "};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__67029$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__67029$$);
        }(), function() {
          var $G__67033$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-semibold", "italic", "text-slate-900  dark:text-slate-100"]))), children:"on site"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__67033$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__67033$$);
        }(), function() {
          var $G__67037$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:", allowing the Pavilion to function simultaneously as exhibition space and working studio. "};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__67037$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__67037$$);
        }(), function() {
          var $G__67041$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:["This approach meets extremely tight production and installation deadlines while maintaining full artistic and technical control—", "conditions that would be far more difficult, costly, or even impossible under a traditional off-site fabrication and transport model. "]};
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__67041$$) : $APP.$helix$core$jsxs$$.call(null, "span", $G__67041$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__67004$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__67004$$);
    }(), function() {
      var $G__67047$$ = {className:"block my-6", children:"Rather than directing the majority of resources toward a single, fixed monumental installation, the artist and team have deliberately taken another route. "};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__67047$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__67047$$);
    }(), function() {
      var $G__67055$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:"By producing the work on site, the Pavilion avoids the need for a pre-fabricated "};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__67055$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__67055$$);
    }(), function() {
      var $G__67059$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-semibold", "italic", "text-slate-900  dark:text-slate-100"]))), children:"“grand object”"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__67059$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__67059$$);
    }(), function() {
      var $G__67071$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:" altogether. "};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__67071$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__67071$$);
    }(), function() {
      var $G__67080$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:"This decision reduces fabrication, crating, international shipping, and risk-related costs, while aligning more precisely with the broader conceptual goals: "};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__67080$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__67080$$);
    }(), function() {
      var $G__67090$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:"process over spectacle, presence over monumentality,"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__67090$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__67090$$);
    }(), function() {
      var $G__67096$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:" and "};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__67096$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__67096$$);
    }(), function() {
      var $G__67104$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:"sustained making over static display"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__67104$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__67104$$);
    }(), function() {
      var $G__67112$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:". "};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__67112$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__67112$$);
    }(), function() {
      var $G__67124$$ = function() {
        return {className:"my-6", children:[function() {
          var $G__67128$$ = {className:"", children:"In this sense, cost efficiency and artistic rigor are not in opposition but mutually reinforcing. "};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__67128$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__67128$$);
        }(), function() {
          var $G__67136$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:"The Pavilion's structure distributes resources across time, labor, materials, and public engagement—rather than concentrating them into a single object whose expense would be driven largely by transport and scale rather than meaning. "};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__67136$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__67136$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__67124$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__67124$$);
    }(), function() {
      var $G__67146$$ = function() {
        return {className:"block my-6", children:[function() {
          var $G__67152$$ = {className:"", children:"Despite these efficiencies, the overall cost of operating in Venice during the Biennale remains high. "};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__67152$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__67152$$);
        }(), function() {
          var $G__67158$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:"Venice's unique geography, limited infrastructure, and extraordinary demand elevate costs across all categories—logistics, storage, labor, accommodations, and technical services. "};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__67158$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__67158$$);
        }(), function() {
          var $G__67164$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:"These conditions are shared by all national pavilions and reflect the Biennale's position as the most visible international platform in contemporary art. "};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__67164$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__67164$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__67146$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__67146$$);
    }(), function() {
      var $G__67170$$ = {className:"mt-6", children:"Unlike projects that culminate at opening, this Pavilion is conceived as a"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__67170$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__67170$$);
    }(), function() {
      var $G__67180$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-semibold", "italic", "text-slate-900  dark:text-slate-100"]))), children:" seven-month operational commitment"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__67180$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__67180$$);
    }(), function() {
      var $G__67188$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:": a living environment that functions simultaneously as exhibition space, working studio, public forum, and diplomatic platform—requiring sustained staffing, materials, logistics, and institutional oversight throughout the duration of the Biennale. "};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__67188$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__67188$$);
    }(), function() {
      var $G__67196$$ = {className:"block mt-6", children:"Significant investment secures venue readiness and regulatory compliance, supports curatorial and administrative leadership, funds museum-scale fabrication and specialized craft, and addresses Venice-specific transport, storage, installation, and reverse logistics. "};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__67196$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__67196$$);
    }(), function() {
      var $G__67204$$ = function() {
        return {className:"block mt-6", children:[function() {
          var $G__67208$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:"THE STUDIO"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__67208$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__67208$$);
        }(), function() {
          var $G__67216$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:" is budgeted as an ongoing on-site operation, ensuring continuous execution, maintenance, and evolution of the work across the exhibition period—distinguishing the Pavilion from static presentations. "};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__67216$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__67216$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__67204$$) : $APP.$helix$core$jsxs$$.call(null, "span", $G__67204$$);
    }(), function() {
      var $G__67226$$ = {className:"block mt-6", children:"Public visibility and long-term legacy are strengthened through opening week programs, marketing and public relations, publication, and comprehensive film and photographic documentation—ensuring that the Pavilion's impact extends into international media, scholarship, and institutional archives. "};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__67226$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__67226$$);
    }(), function() {
      var $G__67232$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_closing$$, "block mt-6"]))), children:"A responsible contingency is included to accommodate the realities of an extended international project operating across jurisdictions, timelines, and currencies—ensuring stability, accountability, and the successful delivery of Armenia's national presentation on the world stage."};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__67232$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__67232$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__66788_map__66777_props__41640__auto__$jscomp$62_vec__66774$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__66788_map__66777_props__41640__auto__$jscomp$62_vec__66774$$);
};
$amp$components$elements$budget$cost_breakdown$footer$$ = function($G__67302_G__67310$jscomp$inline_3832_map__67296_props__41640__auto__$jscomp$63_vec__67293$$, $maybe_ref__41641__auto__$jscomp$63$$) {
  $G__67302_G__67310$jscomp$inline_3832_map__67296_props__41640__auto__$jscomp$63_vec__67293$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__67302_G__67310$jscomp$inline_3832_map__67296_props__41640__auto__$jscomp$63_vec__67293$$), $maybe_ref__41641__auto__$jscomp$63$$], null);
  $G__67302_G__67310$jscomp$inline_3832_map__67296_props__41640__auto__$jscomp$63_vec__67293$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__67302_G__67310$jscomp$inline_3832_map__67296_props__41640__auto__$jscomp$63_vec__67293$$, 0, null);
  $APP.$cljs$core$__destructure_map$$($G__67302_G__67310$jscomp$inline_3832_map__67296_props__41640__auto__$jscomp$63_vec__67293$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__67302_G__67310$jscomp$inline_3832_map__67296_props__41640__auto__$jscomp$63_vec__67293$$ = {"cost-data":$amp$components$elements$budget$cost_breakdown$cost_data$$};
  $G__67302_G__67310$jscomp$inline_3832_map__67296_props__41640__auto__$jscomp$63_vec__67293$$ = {className:"mt-12", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$elements$budget$budget_table$budget_table$$, $G__67302_G__67310$jscomp$inline_3832_map__67296_props__41640__auto__$jscomp$63_vec__67293$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$elements$budget$budget_table$budget_table$$, $G__67302_G__67310$jscomp$inline_3832_map__67296_props__41640__auto__$jscomp$63_vec__67293$$)};
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__67302_G__67310$jscomp$inline_3832_map__67296_props__41640__auto__$jscomp$63_vec__67293$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__67302_G__67310$jscomp$inline_3832_map__67296_props__41640__auto__$jscomp$63_vec__67293$$);
};
$amp$components$elements$budget$cost_breakdown$cost_breakdown$$ = function($G__67406_id$jscomp$86_map__67386_props__41640__auto__$jscomp$64_vec__67383$$, $G__67417$jscomp$inline_3835_JSCompiler_inline_result$jscomp$inline_3834_maybe_ref__41641__auto__$jscomp$64_subtitle$jscomp$4$$) {
  $G__67406_id$jscomp$86_map__67386_props__41640__auto__$jscomp$64_vec__67383$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__67406_id$jscomp$86_map__67386_props__41640__auto__$jscomp$64_vec__67383$$), $G__67417$jscomp$inline_3835_JSCompiler_inline_result$jscomp$inline_3834_maybe_ref__41641__auto__$jscomp$64_subtitle$jscomp$4$$], null);
  $G__67406_id$jscomp$86_map__67386_props__41640__auto__$jscomp$64_vec__67383$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__67406_id$jscomp$86_map__67386_props__41640__auto__$jscomp$64_vec__67383$$, 0, null);
  var $map__67386__$1_title$jscomp$27$$ = $APP.$cljs$core$__destructure_map$$($G__67406_id$jscomp$86_map__67386_props__41640__auto__$jscomp$64_vec__67383$$);
  $G__67406_id$jscomp$86_map__67386_props__41640__auto__$jscomp$64_vec__67383$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__67386__$1_title$jscomp$27$$, $APP.$cljs$cst$200$id$$);
  $G__67417$jscomp$inline_3835_JSCompiler_inline_result$jscomp$inline_3834_maybe_ref__41641__auto__$jscomp$64_subtitle$jscomp$4$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__67386__$1_title$jscomp$27$$, $APP.$cljs$cst$727$subtitle$$);
  $map__67386__$1_title$jscomp$27$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__67386__$1_title$jscomp$27$$, $APP.$cljs$cst$381$title$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__67417$jscomp$inline_3835_JSCompiler_inline_result$jscomp$inline_3834_maybe_ref__41641__auto__$jscomp$64_subtitle$jscomp$4$$ = {idx:3, "section-hint":$G__67417$jscomp$inline_3835_JSCompiler_inline_result$jscomp$inline_3834_maybe_ref__41641__auto__$jscomp$64_subtitle$jscomp$4$$, title:$map__67386__$1_title$jscomp$27$$, "expand-button-label":"Read more", "preview-text":$amp$components$elements$budget$cost_breakdown$preview$$, "full-text":$amp$components$elements$budget$cost_breakdown$details$$, 
  "footer-text":$amp$components$elements$budget$cost_breakdown$footer$$};
  $G__67417$jscomp$inline_3835_JSCompiler_inline_result$jscomp$inline_3834_maybe_ref__41641__auto__$jscomp$64_subtitle$jscomp$4$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$components$elements$expandable_text_area$expandable_text_area_2$$, $G__67417$jscomp$inline_3835_JSCompiler_inline_result$jscomp$inline_3834_maybe_ref__41641__auto__$jscomp$64_subtitle$jscomp$4$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$components$elements$expandable_text_area$expandable_text_area_2$$, 
  $G__67417$jscomp$inline_3835_JSCompiler_inline_result$jscomp$inline_3834_maybe_ref__41641__auto__$jscomp$64_subtitle$jscomp$4$$);
  $G__67406_id$jscomp$86_map__67386_props__41640__auto__$jscomp$64_vec__67383$$ = {id:$G__67406_id$jscomp$86_map__67386_props__41640__auto__$jscomp$64_vec__67383$$, children:$G__67417$jscomp$inline_3835_JSCompiler_inline_result$jscomp$inline_3834_maybe_ref__41641__auto__$jscomp$64_subtitle$jscomp$4$$};
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__67406_id$jscomp$86_map__67386_props__41640__auto__$jscomp$64_vec__67383$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__67406_id$jscomp$86_map__67386_props__41640__auto__$jscomp$64_vec__67383$$);
};
$amp$components$elements$budget$location_section$preview_text$$ = function($G__66712_props__41640__auto__$jscomp$65$$) {
  $APP.$helix$core$extract_cljs_props$$($G__66712_props__41640__auto__$jscomp$65$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__66712_props__41640__auto__$jscomp$65$$ = function() {
    return {className:"", children:["The Armenia Pavilion 2026 will be located across ", function() {
      var $G__66723$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:"two sites,"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__66723$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__66723$$);
    }(), " within the historic Arsenale of Venice. ", function() {
      var $G__66727$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:" 1. A wonderful interior grand studio"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__66727$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__66727$$);
    }(), function() {
      var $G__66735$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:" , as well 2. An important exterior public crossing to the Arsenale"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__66735$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__66735$$);
    }(), ". ", "Together these two sites will form a single spatial constellation. ", function() {
      var $G__66798$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-900  dark:text-slate-100"), children:"A place for study, a place for work, to create, share and exhibit"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__66798$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__66798$$);
    }(), function() {
      var $G__66843$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-900  dark:text-slate-100"), children:" at a public-crossing threshold"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__66843$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__66843$$);
    }(), "—each distinctly neccesary and helpful, both in concluding the final design as well as the making, viewing, and observing of the artworks presented."]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__66712_props__41640__auto__$jscomp$65$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__66712_props__41640__auto__$jscomp$65$$);
};
$amp$components$elements$budget$location_section$preview$$ = function($G__66970_G__66978$jscomp$inline_3389_map__66962_props__41640__auto__$jscomp$66_vec__66959$$, $maybe_ref__41641__auto__$jscomp$66$$) {
  $G__66970_G__66978$jscomp$inline_3389_map__66962_props__41640__auto__$jscomp$66_vec__66959$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__66970_G__66978$jscomp$inline_3389_map__66962_props__41640__auto__$jscomp$66_vec__66959$$), $maybe_ref__41641__auto__$jscomp$66$$], null);
  $G__66970_G__66978$jscomp$inline_3389_map__66962_props__41640__auto__$jscomp$66_vec__66959$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__66970_G__66978$jscomp$inline_3389_map__66962_props__41640__auto__$jscomp$66_vec__66959$$, 0, null);
  $APP.$cljs$core$__destructure_map$$($G__66970_G__66978$jscomp$inline_3389_map__66962_props__41640__auto__$jscomp$66_vec__66959$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__66970_G__66978$jscomp$inline_3389_map__66962_props__41640__auto__$jscomp$66_vec__66959$$ = {};
  $G__66970_G__66978$jscomp$inline_3389_map__66962_props__41640__auto__$jscomp$66_vec__66959$$ = {className:"p-4 mb-12", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$elements$budget$location_section$preview_text$$, $G__66970_G__66978$jscomp$inline_3389_map__66962_props__41640__auto__$jscomp$66_vec__66959$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$elements$budget$location_section$preview_text$$, 
  $G__66970_G__66978$jscomp$inline_3389_map__66962_props__41640__auto__$jscomp$66_vec__66959$$)};
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__66970_G__66978$jscomp$inline_3389_map__66962_props__41640__auto__$jscomp$66_vec__66959$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__66970_G__66978$jscomp$inline_3389_map__66962_props__41640__auto__$jscomp$66_vec__66959$$);
};
$amp$components$elements$budget$location_section$full_details$$ = function($G__67644_map__67638_map__67638__$1_props__41640__auto__$jscomp$67_vec__67635$$, $maybe_ref__41641__auto__$jscomp$67$$) {
  $G__67644_map__67638_map__67638__$1_props__41640__auto__$jscomp$67_vec__67635$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__67644_map__67638_map__67638__$1_props__41640__auto__$jscomp$67_vec__67635$$), $maybe_ref__41641__auto__$jscomp$67$$], null);
  $G__67644_map__67638_map__67638__$1_props__41640__auto__$jscomp$67_vec__67635$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__67644_map__67638_map__67638__$1_props__41640__auto__$jscomp$67_vec__67635$$, 0, null);
  $G__67644_map__67638_map__67638__$1_props__41640__auto__$jscomp$67_vec__67635$$ = $APP.$cljs$core$__destructure_map$$($G__67644_map__67638_map__67638__$1_props__41640__auto__$jscomp$67_vec__67635$$);
  $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__67644_map__67638_map__67638__$1_props__41640__auto__$jscomp$67_vec__67635$$, $APP.$cljs$cst$200$id$$);
  $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__67644_map__67638_map__67638__$1_props__41640__auto__$jscomp$67_vec__67635$$, $APP.$cljs$cst$727$subtitle$$);
  $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__67644_map__67638_map__67638__$1_props__41640__auto__$jscomp$67_vec__67635$$, $APP.$cljs$cst$381$title$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $is_desktop_QMARK_$jscomp$7$$ = $APP.$amp$hooks$use_media_query$use_touch_enabled$$();
  $G__67644_map__67638_map__67638__$1_props__41640__auto__$jscomp$67_vec__67635$$ = function() {
    return {className:"space-y-8", children:function() {
      var $G__67648$$ = function() {
        return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$body_lg$$), children:[function() {
          var $G__67656_G__67663$jscomp$inline_3392$$ = {};
          $G__67656_G__67663$jscomp$inline_3392$$ = {className:"p-4 mb-12", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$elements$budget$location_section$preview_text$$, $G__67656_G__67663$jscomp$inline_3392$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$elements$budget$location_section$preview_text$$, $G__67656_G__67663$jscomp$inline_3392$$)};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__67656_G__67663$jscomp$inline_3392$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__67656_G__67663$jscomp$inline_3392$$);
        }(), function() {
          var $G__67671$$ = function() {
            return {className:"my-8", children:[function() {
              var $G__67677$$ = {dev:!1, "interactive?":$is_desktop_QMARK_$jscomp$7$$, "initial-view":new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$734$longitude$$, 12.349872, $APP.$cljs$cst$735$latitude$$, 45.436114, $APP.$cljs$cst$736$zoom$$, 16.2], null), "ant-paths":new $APP.$cljs$core$PersistentVector$$(null, 1, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [new $APP.$cljs$core$PersistentArrayMap$$(null, 7, [$APP.$cljs$cst$742$source_id$$, "directions-ant", $APP.$cljs$cst$741$url$$, 
              "/data/biennale_data.geojson", $APP.$cljs$cst$740$filter$$, new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, ["\x3d\x3d", new $APP.$cljs$core$PersistentVector$$(null, 1, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, ["geometry-type"], null), "LineString"], null), $APP.$cljs$cst$413$color$$, "#c7630b", $APP.$cljs$cst$418$width$$, 4, $APP.$cljs$cst$414$bg_opacity$$, 0.2, $APP.$cljs$cst$439$duration$$, 2], null)], null), layers:new $APP.$cljs$core$PersistentVector$$(null, 
              5, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$127$source$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$200$id$$, "biennale", $APP.$cljs$cst$741$url$$, "/data/biennale_data.geojson"], null), $APP.$cljs$cst$737$layer$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$200$id$$, "biennale-fill", $APP.$cljs$cst$25$type$$, "fill", $APP.$cljs$cst$740$filter$$, new $APP.$cljs$core$PersistentVector$$(null, 
              3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, ["\x3d\x3d", new $APP.$cljs$core$PersistentVector$$(null, 1, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, ["geometry-type"], null), "Polygon"], null), $APP.$cljs$cst$738$paint$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$780$fill_color$$, "#b91c1c", $APP.$cljs$cst$781$fill_opacity$$, 0.5], null)], null)], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$127$source$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 
              2, [$APP.$cljs$cst$200$id$$, "biennale-start", $APP.$cljs$cst$741$url$$, "/data/biennale_data.geojson"], null), $APP.$cljs$cst$737$layer$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$200$id$$, "directions-start", $APP.$cljs$cst$25$type$$, "circle", $APP.$cljs$cst$740$filter$$, new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, ["\x3d\x3d", new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, 
              ["get", "marker"], null), "start"], null), $APP.$cljs$cst$738$paint$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$782$circle_radius$$, 6, $APP.$cljs$cst$783$circle_color$$, "#0c0cd0", $APP.$cljs$cst$784$circle_stroke_width$$, 2, $APP.$cljs$cst$785$circle_stroke_color$$, "#ffffff"], null)], null)], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$127$source$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$200$id$$, "biennale-end", 
              $APP.$cljs$cst$741$url$$, "/data/biennale_data.geojson"], null), $APP.$cljs$cst$737$layer$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$200$id$$, "directions-end", $APP.$cljs$cst$25$type$$, "circle", $APP.$cljs$cst$740$filter$$, new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, ["\x3d\x3d", new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, ["get", "marker"], null), 
              "end"], null), $APP.$cljs$cst$738$paint$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$782$circle_radius$$, 6, $APP.$cljs$cst$783$circle_color$$, "#ef4444", $APP.$cljs$cst$784$circle_stroke_width$$, 2, $APP.$cljs$cst$785$circle_stroke_color$$, "#ffffff"], null)], null)], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$127$source$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$200$id$$, "biennale-points", $APP.$cljs$cst$741$url$$, 
              "/data/biennale_data.geojson"], null), $APP.$cljs$cst$737$layer$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$200$id$$, "biennale-point", $APP.$cljs$cst$25$type$$, "circle", $APP.$cljs$cst$740$filter$$, new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, ["all", new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, ["\x3d\x3d", new $APP.$cljs$core$PersistentVector$$(null, 
              1, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, ["geometry-type"], null), "Point"], null), new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, ["!", new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, ["has", "marker"], null)], null)], null), $APP.$cljs$cst$738$paint$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$782$circle_radius$$, 8, $APP.$cljs$cst$783$circle_color$$, 
              "#b91c1c", $APP.$cljs$cst$784$circle_stroke_width$$, 2, $APP.$cljs$cst$785$circle_stroke_color$$, "#ffffff"], null)], null)], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$127$source$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$200$id$$, "biennale-labels", $APP.$cljs$cst$741$url$$, "/data/biennale_data.geojson"], null), $APP.$cljs$cst$737$layer$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 5, [$APP.$cljs$cst$200$id$$, "biennale-label", 
              $APP.$cljs$cst$25$type$$, "symbol", $APP.$cljs$cst$740$filter$$, new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, ["all", new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, ["\x3d\x3d", new $APP.$cljs$core$PersistentVector$$(null, 1, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, ["geometry-type"], null), "Point"], null), new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, 
              ["!", new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, ["has", "marker"], null)], null)], null), $APP.$cljs$cst$739$layout$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$786$text_field$$, new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, ["get", "label"], null), $APP.$cljs$cst$787$text_font$$, new $APP.$cljs$core$PersistentVector$$(null, 1, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, 
              ["Source Code Pro Semibold"], null), $APP.$cljs$cst$788$text_size$$, 14, $APP.$cljs$cst$789$text_offset$$, new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [0, -1.5], null), $APP.$cljs$cst$790$text_anchor$$, "bottom", $APP.$cljs$cst$791$text_allow_overlap$$, !0], null), $APP.$cljs$cst$738$paint$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$792$text_color$$, "#be136e", $APP.$cljs$cst$793$text_halo_color$$, "#ffffff", 
              $APP.$cljs$cst$794$text_halo_width$$, 5], null)], null)], null)], null)};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$components$maps$mapbox_map$mapbox_map$$, $G__67677$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$components$maps$mapbox_map$mapbox_map$$, $G__67677$$);
            }(), function() {
              var $G__67683$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-mono", "text-sm", "italic", "mt-4 px-4"]))), children:"* Walking path from the crossing to the pavilion. ~8 minutes"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__67683$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__67683$$);
            }()]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__67671$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__67671$$);
        }(), function() {
          var $G__67688$$ = function() {
            return {className:$APP.$helix$impl$props$normalize_class$$("text-xl"), children:[function() {
              var $G__67692$$ = function() {
                return {className:"p-4", children:[function() {
                  var $G__67697$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$heading_section$$, "pb-4"]))), children:"TESA 41 (THE STUDIO)"};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__67697$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__67697$$);
                }(), function() {
                  var $G__67705$$ = function() {
                    return {className:"space-y-6", children:[function() {
                      var $G__67709$$ = function() {
                        return {children:[function() {
                          var $G__67715$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:"Tesa 41"};
                          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__67715$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__67715$$);
                        }(), " is the primary studio and interior exhibition space for the Armenia Pavilion 2026—", function() {
                          var $G__67726$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:"5,000 square feet"};
                          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__67726$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__67726$$);
                        }(), " (", function() {
                          var $G__67734$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:"~464 square meters"};
                          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__67734$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__67734$$);
                        }(), ") of expansive industrial volume that functions as the ", function() {
                          var $G__67739$$ = {className:$APP.$helix$impl$props$normalize_class$$("italic"), children:"operational and conceptual heart"};
                          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__67739$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__67739$$);
                        }(), " of the project."]};
                      }();
                      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__67709$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__67709$$);
                    }(), function() {
                      var $G__67751$$ = function() {
                        return {children:["Defined by scale, clarity, and architectural restraint, it is built for sustained ", function() {
                          var $G__67757$$ = {className:$APP.$helix$impl$props$normalize_class$$("font-medium"), children:"fabrication"};
                          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__67757$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__67757$$);
                        }(), ", ", function() {
                          var $G__67763$$ = {className:$APP.$helix$impl$props$normalize_class$$("font-medium"), children:"assembly"};
                          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__67763$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__67763$$);
                        }(), ", and ", function() {
                          var $G__67773$$ = {className:$APP.$helix$impl$props$normalize_class$$("font-medium"), children:"reconfiguration"};
                          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__67773$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__67773$$);
                        }(), " across the full duration of the Biennale."]};
                      }();
                      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__67751$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__67751$$);
                    }(), function() {
                      var $G__67779$$ = function() {
                        return {children:["Here, the Pavilion operates as a ", function() {
                          var $G__67785$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:"working studio"};
                          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__67785$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__67785$$);
                        }(), " rather than a static exhibition: a place of continuous ", function() {
                          var $G__67797$$ = {className:$APP.$helix$impl$props$normalize_class$$("font-medium"), children:"making"};
                          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__67797$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__67797$$);
                        }(), ", ", function() {
                          var $G__67811$$ = {className:$APP.$helix$impl$props$normalize_class$$("font-medium"), children:"stacking"};
                          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__67811$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__67811$$);
                        }(), ", ", function() {
                          var $G__67817$$ = {className:$APP.$helix$impl$props$normalize_class$$("font-medium"), children:"dismantling"};
                          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__67817$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__67817$$);
                        }(), ", and ", function() {
                          var $G__67828$$ = {className:$APP.$helix$impl$props$normalize_class$$("font-medium"), children:"rebuilding"};
                          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__67828$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__67828$$);
                        }(), ". The interior volume allows the work to expand ", function() {
                          var $G__67834$$ = {className:$APP.$helix$impl$props$normalize_class$$("font-medium"), children:"horizontally"};
                          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__67834$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__67834$$);
                        }(), " and ", function() {
                          var $G__67838$$ = {className:$APP.$helix$impl$props$normalize_class$$("font-medium"), children:"vertically"};
                          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__67838$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__67838$$);
                        }(), ", accommodating both monumental arrangements and intimate moments of material attention."]};
                      }();
                      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__67779$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__67779$$);
                    }(), function() {
                      var $G__67842$$ = function() {
                        return {className:"pt-2", children:[function() {
                          var $G__67846$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:"Tesa 41"};
                          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__67846$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__67846$$);
                        }(), " anchors the Pavilion physically and philosophically—establishing ", function() {
                          var $G__67851$$ = {className:$APP.$helix$impl$props$normalize_class$$("italic"), children:"the studio as the artwork itself"};
                          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__67851$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__67851$$);
                        }(), "."]};
                      }();
                      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__67842$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__67842$$);
                    }()]};
                  }();
                  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__67705$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__67705$$);
                }()]};
              }();
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__67692$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__67692$$);
            }(), function() {
              var $G__67855$$ = function() {
                return {className:"w-full h-full flex flex-col gap-4 mt-12", children:function() {
                  var $outer_ctx$jscomp$9$$ = $APP.$helix$hooks$use_ref$$("outer-ctx"), $G__67862_vec__67858$$ = $APP.$amp$hooks$use_intersection_observer$use_intersection_observer$$($outer_ctx$jscomp$9$$);
                  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__67862_vec__67858$$, 0, null);
                  var $is_visible_QMARK_$jscomp$9$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__67862_vec__67858$$, 1, null);
                  $G__67862_vec__67858$$ = function() {
                    return {className:"flex flex-col gap-4", ref:$outer_ctx$jscomp$9$$, children:[function() {
                      var $G__67866_G__67870$jscomp$inline_3838$$ = {"playback-id":"KaA1Jf2AusJZ966KPeZrdwJ5S53kboLO4E4fGLrgTLk", "aspect-ratio":1.77, "should-play?":$is_visible_QMARK_$jscomp$9$$, "allow-audio?":!1};
                      $G__67866_G__67870$jscomp$inline_3838$$ = {className:"w-full aspect-[16/9]", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$elements$budget$location_section$lazy_video$$, $G__67866_G__67870$jscomp$inline_3838$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$elements$budget$location_section$lazy_video$$, $G__67866_G__67870$jscomp$inline_3838$$)};
                      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__67866_G__67870$jscomp$inline_3838$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__67866_G__67870$jscomp$inline_3838$$);
                    }(), function() {
                      var $G__67874$$ = {"enabled?":$is_visible_QMARK_$jscomp$9$$, slides:new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$438$img_src$$, "https://atd-722658831.imgix.net/tesa_41/weavy-Gemini%203%20(Nano%20Banana%20Pro)-2025-12-22%20at%2011.12.05.tif", $APP.$cljs$cst$726$aspect_ratio$$, 1.34, $APP.$cljs$cst$714$active_QMARK_$$, !0], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 
                      3, [$APP.$cljs$cst$438$img_src$$, "https://atd-722658831.imgix.net/tesa_41/weavy-Gemini%203%20(Nano%20Banana%20Pro)-2025-12-22%20at%2010.59.08.tif", $APP.$cljs$cst$726$aspect_ratio$$, 1.34, $APP.$cljs$cst$714$active_QMARK_$$, !0], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$438$img_src$$, "https://atd-722658831.imgix.net/tesa_41/weavy-Gemini%203%20(Nano%20Banana%20Pro)-2025-12-22%20at%2010.59.18.tif", $APP.$cljs$cst$726$aspect_ratio$$, 1.34, $APP.$cljs$cst$714$active_QMARK_$$, 
                      !0], null)], null)};
                      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$components$media$lazy_image_gallery$lazy_image_gallery$$, $G__67874$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$components$media$lazy_image_gallery$lazy_image_gallery$$, $G__67874$$);
                    }()]};
                  }();
                  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__67862_vec__67858$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__67862_vec__67858$$);
                }()};
              }();
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__67855$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__67855$$);
            }(), function() {
              var $G__67878$$ = function() {
                return {className:"mt-12", children:[function() {
                  var $G__67882$$ = function() {
                    return {className:"p-4", children:[function() {
                      var $G__67886$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$heading_section$$, "pb-4"]))), children:"CROSSING TO THE ARSENALE — PIRAEUS LION"};
                      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__67886$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__67886$$);
                    }(), function() {
                      var $G__67890$$ = function() {
                        return {className:"space-y-6", children:[function() {
                          var $G__67894$$ = function() {
                            return {children:["The outdoor artwork will be installed at the historic crossing grounds near the ", function() {
                              var $G__67898$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_bold$$), children:"Piraeus Lion"};
                              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__67898$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__67898$$);
                            }(), ", one of the most recognized landmarks marking the approach to the Arsenale. ", "Positioned at a critical pedestrian junction along the main route into the Biennale's Arsenale area, this site receives ", function() {
                              var $G__67902$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:"exceptionally high foot traffic"};
                              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__67902$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__67902$$);
                            }(), " throughout the six-month exhibition period. ", "Visitors moving between venues, crossing the bridge into the Arsenale, and navigating the surrounding waterfront naturally converge here. ", "The Armenian Pavilion lies less than a ten-minute walk from this point, making the installation both a ", function() {
                              var $G__67906$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:"threshold"};
                              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__67906$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__67906$$);
                            }(), " and a ", function() {
                              var $G__67910$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:"directional marker"};
                              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__67910$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__67910$$);
                            }(), "—an early encounter that orients audiences toward the Pavilion."]};
                          }();
                          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__67894$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__67894$$);
                        }(), function() {
                          var $G__67914$$ = function() {
                            return {children:["The placement ensures ", function() {
                              var $G__67918$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:"extraordinary visibility"};
                              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__67918$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__67918$$);
                            }(), " within a dense flow of international visitors, curators, press, and collectors. ", "The artwork, together with its identifying totem, will operate as a ", function() {
                              var $G__67922$$ = {className:$APP.$helix$impl$props$normalize_class$$("font-medium"), children:"visual anchor"};
                              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__67922$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__67922$$);
                            }(), " in an open, expansive setting framed by historic brick walls, canal frontage, and the continuous movement of people."]};
                          }();
                          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__67914$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__67914$$);
                        }(), function() {
                          var $G__67926$$ = function() {
                            return {children:["As a freestanding, architecturally scaled form, it will command attention without obstructing circulation, functioning simultaneously as ", function() {
                              var $G__67930$$ = {className:$APP.$helix$impl$props$normalize_class$$("font-semibold"), children:"sculpture"};
                              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__67930$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__67930$$);
                            }(), ", ", function() {
                              var $G__67934$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:"signal"};
                              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__67934$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__67934$$);
                            }(), ", and ", function() {
                              var $G__67938$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:"prelude"};
                              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__67938$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__67938$$);
                            }(), ". Its presence at this symbolic gateway amplifies the Pavilion's reach beyond its interior space, extending Armenia's participation into one of the most traversed and photographed corridors of the Biennale."]};
                          }();
                          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__67926$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__67926$$);
                        }()]};
                      }();
                      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__67890$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__67890$$);
                    }()]};
                  }();
                  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__67882$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__67882$$);
                }(), function() {
                  $APP.$amp$hooks$use_media_query$use_touch_enabled$$();
                  var $G__67942_G__67949$jscomp$inline_4114_outer_ctx$jscomp$inline_4112$$ = $APP.$helix$hooks$use_ref$$("outer-ctx");
                  var $G__67953$jscomp$inline_4116_JSCompiler_inline_result$jscomp$inline_4115_vec__67945$jscomp$inline_4113$$ = $APP.$amp$hooks$use_intersection_observer$use_intersection_observer$$($G__67942_G__67949$jscomp$inline_4114_outer_ctx$jscomp$inline_4112$$);
                  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__67953$jscomp$inline_4116_JSCompiler_inline_result$jscomp$inline_4115_vec__67945$jscomp$inline_4113$$, 0, null);
                  $G__67953$jscomp$inline_4116_JSCompiler_inline_result$jscomp$inline_4115_vec__67945$jscomp$inline_4113$$ = {"enabled?":$APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__67953$jscomp$inline_4116_JSCompiler_inline_result$jscomp$inline_4115_vec__67945$jscomp$inline_4113$$, 1, null), slides:new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$438$img_src$$, "https://atd-722658831.imgix.net/big_red_walkway/5.jpg", 
                  $APP.$cljs$cst$726$aspect_ratio$$, 1.82, $APP.$cljs$cst$441$caption$$, "BIG RED AT ARSENALE", $APP.$cljs$cst$442$credit$$, "Render 2026"], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$438$img_src$$, "https://atd-722658831.imgix.net/big_red_walkway/1.jpg", $APP.$cljs$cst$726$aspect_ratio$$, 1.82, $APP.$cljs$cst$441$caption$$, "BIG RED AT ARSENALE", $APP.$cljs$cst$442$credit$$, "Render 2026"], null)], null)};
                  $G__67953$jscomp$inline_4116_JSCompiler_inline_result$jscomp$inline_4115_vec__67945$jscomp$inline_4113$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$components$media$lazy_image_gallery$lazy_image_gallery$$, $G__67953$jscomp$inline_4116_JSCompiler_inline_result$jscomp$inline_4115_vec__67945$jscomp$inline_4113$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$components$media$lazy_image_gallery$lazy_image_gallery$$, 
                  $G__67953$jscomp$inline_4116_JSCompiler_inline_result$jscomp$inline_4115_vec__67945$jscomp$inline_4113$$);
                  $G__67942_G__67949$jscomp$inline_4114_outer_ctx$jscomp$inline_4112$$ = {className:"", ref:$G__67942_G__67949$jscomp$inline_4114_outer_ctx$jscomp$inline_4112$$, children:$G__67953$jscomp$inline_4116_JSCompiler_inline_result$jscomp$inline_4115_vec__67945$jscomp$inline_4113$$};
                  $G__67942_G__67949$jscomp$inline_4114_outer_ctx$jscomp$inline_4112$$ = {className:"w-full h-full flex flex-col gap-4 mt-12", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__67942_G__67949$jscomp$inline_4114_outer_ctx$jscomp$inline_4112$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__67942_G__67949$jscomp$inline_4114_outer_ctx$jscomp$inline_4112$$)};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__67942_G__67949$jscomp$inline_4114_outer_ctx$jscomp$inline_4112$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__67942_G__67949$jscomp$inline_4114_outer_ctx$jscomp$inline_4112$$);
                }()]};
              }();
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__67878$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__67878$$);
            }()]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__67688$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__67688$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__67648$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__67648$$);
    }()};
  }();
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__67644_map__67638_map__67638__$1_props__41640__auto__$jscomp$67_vec__67635$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__67644_map__67638_map__67638__$1_props__41640__auto__$jscomp$67_vec__67635$$);
};
$amp$components$elements$budget$location_section$location_section$$ = function($G__67964_id$jscomp$88_map__67962_props__41640__auto__$jscomp$68_vec__67959$$, $G__67968$jscomp$inline_3844_JSCompiler_inline_result$jscomp$inline_3843_maybe_ref__41641__auto__$jscomp$68_subtitle$jscomp$6$$) {
  $G__67964_id$jscomp$88_map__67962_props__41640__auto__$jscomp$68_vec__67959$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__67964_id$jscomp$88_map__67962_props__41640__auto__$jscomp$68_vec__67959$$), $G__67968$jscomp$inline_3844_JSCompiler_inline_result$jscomp$inline_3843_maybe_ref__41641__auto__$jscomp$68_subtitle$jscomp$6$$], null);
  $G__67964_id$jscomp$88_map__67962_props__41640__auto__$jscomp$68_vec__67959$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__67964_id$jscomp$88_map__67962_props__41640__auto__$jscomp$68_vec__67959$$, 0, null);
  var $map__67962__$1_title$jscomp$29$$ = $APP.$cljs$core$__destructure_map$$($G__67964_id$jscomp$88_map__67962_props__41640__auto__$jscomp$68_vec__67959$$);
  $G__67964_id$jscomp$88_map__67962_props__41640__auto__$jscomp$68_vec__67959$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__67962__$1_title$jscomp$29$$, $APP.$cljs$cst$200$id$$);
  $G__67968$jscomp$inline_3844_JSCompiler_inline_result$jscomp$inline_3843_maybe_ref__41641__auto__$jscomp$68_subtitle$jscomp$6$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__67962__$1_title$jscomp$29$$, $APP.$cljs$cst$727$subtitle$$);
  $map__67962__$1_title$jscomp$29$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__67962__$1_title$jscomp$29$$, $APP.$cljs$cst$381$title$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__67968$jscomp$inline_3844_JSCompiler_inline_result$jscomp$inline_3843_maybe_ref__41641__auto__$jscomp$68_subtitle$jscomp$6$$ = {idx:7, "section-hint":$G__67968$jscomp$inline_3844_JSCompiler_inline_result$jscomp$inline_3843_maybe_ref__41641__auto__$jscomp$68_subtitle$jscomp$6$$, title:$map__67962__$1_title$jscomp$29$$, "expand-button-label":"Expand details", "preview-text":$amp$components$elements$budget$location_section$preview$$, "full-text":$amp$components$elements$budget$location_section$full_details$$};
  $G__67968$jscomp$inline_3844_JSCompiler_inline_result$jscomp$inline_3843_maybe_ref__41641__auto__$jscomp$68_subtitle$jscomp$6$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$components$elements$expandable_text_area$expandable_text_area_2$$, $G__67968$jscomp$inline_3844_JSCompiler_inline_result$jscomp$inline_3843_maybe_ref__41641__auto__$jscomp$68_subtitle$jscomp$6$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$components$elements$expandable_text_area$expandable_text_area_2$$, 
  $G__67968$jscomp$inline_3844_JSCompiler_inline_result$jscomp$inline_3843_maybe_ref__41641__auto__$jscomp$68_subtitle$jscomp$6$$);
  $G__67964_id$jscomp$88_map__67962_props__41640__auto__$jscomp$68_vec__67959$$ = {id:$G__67964_id$jscomp$88_map__67962_props__41640__auto__$jscomp$68_vec__67959$$, children:$G__67968$jscomp$inline_3844_JSCompiler_inline_result$jscomp$inline_3843_maybe_ref__41641__auto__$jscomp$68_subtitle$jscomp$6$$};
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__67964_id$jscomp$88_map__67962_props__41640__auto__$jscomp$68_vec__67959$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__67964_id$jscomp$88_map__67962_props__41640__auto__$jscomp$68_vec__67959$$);
};
$amp$components$elements$budget$cash_flow$parse_date$$ = function($s$jscomp$226$$) {
  return new Date($s$jscomp$226$$);
};
$amp$components$elements$budget$cash_flow$date__GT_ms$$ = function($d$jscomp$149$$) {
  return $d$jscomp$149$$.getTime();
};
$amp$components$elements$budget$cash_flow$format_currency$$ = function($n$jscomp$226$$) {
  return $n$jscomp$226$$.toLocaleString("en-US", {style:"currency", currency:"USD", maximumFractionDigits:0});
};
$amp$components$elements$budget$cash_flow$priority_tag_bg$$ = function($p$jscomp$90$$) {
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
$amp$components$elements$budget$cash_flow$priority_tag_text$$ = function($p$jscomp$91$$) {
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
$amp$components$elements$budget$cash_flow$priority_dot_classes$$ = function($p$jscomp$92$$, $fill_paid_QMARK_$$) {
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
$amp$components$elements$budget$cash_flow$priority_amount_class$$ = function($p$jscomp$93$$, $paid_QMARK_$jscomp$1$$) {
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
$amp$components$elements$budget$cash_flow$priority_label$$ = function($p$jscomp$94$$) {
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
$amp$components$elements$budget$cash_flow$group_by_month$$ = function($entries$jscomp$4$$) {
  return $cljs$core$partition_by$cljs$0core$0IFn$0_invoke$0arity$02$$(function($e$jscomp$220$$) {
    return $amp$components$elements$budget$cash_flow$parse_date$$($cljs$cst$827$due$$.$cljs$core$IFn$_invoke$arity$1$($e$jscomp$220$$)).toLocaleString("en-US", {month:"long", year:"numeric"});
  }, $APP.$cljs$core$sort_by$cljs$0core$0IFn$0_invoke$0arity$02$$($APP.$cljs$core$comp$$.$cljs$core$IFn$_invoke$arity$3$($amp$components$elements$budget$cash_flow$date__GT_ms$$, $amp$components$elements$budget$cash_flow$parse_date$$, $cljs$cst$827$due$$), $entries$jscomp$4$$));
};
$amp$components$elements$budget$cash_flow$month_rollups$$ = function($entries$jscomp$5_groups_sorted$$) {
  $entries$jscomp$5_groups_sorted$$ = $APP.$cljs$core$sort_by$cljs$0core$0IFn$0_invoke$0arity$02$$($APP.$cljs$core$comp$$.$cljs$core$IFn$_invoke$arity$3$($amp$components$elements$budget$cash_flow$date__GT_ms$$, $amp$components$elements$budget$cash_flow$parse_date$$, $cljs$cst$827$due$$), $entries$jscomp$5_groups_sorted$$);
  $entries$jscomp$5_groups_sorted$$ = $amp$components$elements$budget$cash_flow$group_by_month$$($entries$jscomp$5_groups_sorted$$);
  return $APP.$cljs$core$mapv$cljs$0core$0IFn$0_invoke$0arity$02$$(function($group$jscomp$1$$) {
    var $d$jscomp$152$$ = $amp$components$elements$budget$cash_flow$parse_date$$($cljs$cst$827$due$$.$cljs$core$IFn$_invoke$arity$1$($APP.$cljs$core$first$$($group$jscomp$1$$))), $label$jscomp$9$$ = $d$jscomp$152$$.toLocaleString("en-US", {month:"short", year:"numeric"}), $total$jscomp$5$$ = $APP.$cljs$core$reduce$cljs$0core$0IFn$0_invoke$0arity$03$$($APP.$cljs$core$_PLUS_$$, 0, $APP.$cljs$core$map$$.$cljs$core$IFn$_invoke$arity$2$($cljs$cst$804$amount$$, $group$jscomp$1$$)), $paid$$ = $APP.$cljs$core$reduce$cljs$0core$0IFn$0_invoke$0arity$03$$($APP.$cljs$core$_PLUS_$$, 
    0, $APP.$cljs$core$map$$.$cljs$core$IFn$_invoke$arity$2$($cljs$cst$804$amount$$, $APP.$cljs$core$filter$cljs$0core$0IFn$0_invoke$0arity$02$$(function($p1__68087_SHARP_$$) {
      return $APP.$cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$($cljs$cst$830$paid$$, $APP.$cljs$cst$12$status$$.$cljs$core$IFn$_invoke$arity$1$($p1__68087_SHARP_$$));
    }, $group$jscomp$1$$))), $pending$jscomp$1$$ = $total$jscomp$5$$ - $paid$$, $n_items$$ = $APP.$cljs$core$count$$($group$jscomp$1$$), $n_paid$$ = $APP.$cljs$core$count$$($APP.$cljs$core$filter$cljs$0core$0IFn$0_invoke$0arity$02$$(function($p1__68088_SHARP_$$) {
      return $APP.$cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$($cljs$cst$830$paid$$, $APP.$cljs$cst$12$status$$.$cljs$core$IFn$_invoke$arity$1$($p1__68088_SHARP_$$));
    }, $group$jscomp$1$$)), $n_crit$jscomp$1$$ = $APP.$cljs$core$count$$($APP.$cljs$core$filter$cljs$0core$0IFn$0_invoke$0arity$02$$(function($p1__68089_SHARP_$$) {
      return $APP.$cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$($cljs$cst$848$critical$$, $cljs$cst$828$priority$$.$cljs$core$IFn$_invoke$arity$1$($p1__68089_SHARP_$$));
    }, $group$jscomp$1$$)), $all_paid$jscomp$1$$ = $APP.$cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$($n_paid$$, $n_items$$), $has_now$$ = function() {
      var $year$jscomp$2$$ = $d$jscomp$152$$.getFullYear(), $now$$ = new Date(), $n_year$$ = $now$$.getFullYear();
      return $APP.$cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$($d$jscomp$152$$.getMonth(), $now$$.getMonth()) && $APP.$cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$($year$jscomp$2$$, $n_year$$);
    }();
    return $APP.$cljs$core$PersistentHashMap$fromArrays$$([$cljs$cst$888$all_paid$$, $cljs$cst$889$entries$$, $APP.$cljs$cst$14$pending$$, $cljs$cst$890$n_crit$$, $APP.$cljs$cst$719$total$$, $cljs$cst$812$label$$, $cljs$cst$830$paid$$, $cljs$cst$891$n_paid$$, $cljs$cst$892$n_items$$, $cljs$cst$893$has_now$$], [$all_paid$jscomp$1$$, $group$jscomp$1$$, $pending$jscomp$1$$, $n_crit$jscomp$1$$, $total$jscomp$5$$, $label$jscomp$9$$, $paid$$, $n_paid$$, $n_items$$, $has_now$$]);
  }, $entries$jscomp$5_groups_sorted$$);
};
$amp$components$elements$budget$cash_flow$status_classes$$ = function($status$jscomp$10$$) {
  switch($status$jscomp$10$$ instanceof $APP.$cljs$core$Keyword$$ ? $status$jscomp$10$$.$fqn$ : null) {
    case "paid":
      return new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$cljs$cst$894$dot$$, "bg-emerald-400/20 dark:bg-emerald-300/20", $APP.$cljs$cst$406$text$$, "text-emerald-600 dark:text-emerald-300", $cljs$cst$812$label$$, "COST, PAID"], null);
    case "pending":
      return new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$cljs$cst$894$dot$$, "bg-slate-400/15 dark:bg-slate-500/15", $APP.$cljs$cst$406$text$$, "text-slate-500", $cljs$cst$812$label$$, "DUE"], null);
    default:
      return new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$cljs$cst$894$dot$$, "bg-slate-400/15 dark:bg-slate-500/15", $APP.$cljs$cst$406$text$$, "text-slate-500", $cljs$cst$812$label$$, "—"], null);
  }
};
$amp$components$elements$budget$cash_flow$timeline_node$$ = function($G__68111_68675_G__68114_map__68109_map__68109__$1_map__68110__$1_props__41640__auto__$jscomp$69_status$jscomp$11_vec__68106$$, $G__68112_68676_entry$jscomp$29_maybe_ref__41641__auto__$jscomp$69$$) {
  $G__68111_68675_G__68114_map__68109_map__68109__$1_map__68110__$1_props__41640__auto__$jscomp$69_status$jscomp$11_vec__68106$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__68111_68675_G__68114_map__68109_map__68109__$1_map__68110__$1_props__41640__auto__$jscomp$69_status$jscomp$11_vec__68106$$), $G__68112_68676_entry$jscomp$29_maybe_ref__41641__auto__$jscomp$69$$], null);
  $G__68111_68675_G__68114_map__68109_map__68109__$1_map__68110__$1_props__41640__auto__$jscomp$69_status$jscomp$11_vec__68106$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__68111_68675_G__68114_map__68109_map__68109__$1_map__68110__$1_props__41640__auto__$jscomp$69_status$jscomp$11_vec__68106$$, 0, null);
  $G__68111_68675_G__68114_map__68109_map__68109__$1_map__68110__$1_props__41640__auto__$jscomp$69_status$jscomp$11_vec__68106$$ = $APP.$cljs$core$__destructure_map$$($G__68111_68675_G__68114_map__68109_map__68109__$1_map__68110__$1_props__41640__auto__$jscomp$69_status$jscomp$11_vec__68106$$);
  $G__68112_68676_entry$jscomp$29_maybe_ref__41641__auto__$jscomp$69$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__68111_68675_G__68114_map__68109_map__68109__$1_map__68110__$1_props__41640__auto__$jscomp$69_status$jscomp$11_vec__68106$$, $cljs$cst$895$entry$$);
  var $idx$jscomp$76$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__68111_68675_G__68114_map__68109_map__68109__$1_map__68110__$1_props__41640__auto__$jscomp$69_status$jscomp$11_vec__68106$$, $APP.$cljs$cst$443$idx$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__68111_68675_G__68114_map__68109_map__68109__$1_map__68110__$1_props__41640__auto__$jscomp$69_status$jscomp$11_vec__68106$$ = $APP.$cljs$core$__destructure_map$$($G__68112_68676_entry$jscomp$29_maybe_ref__41641__auto__$jscomp$69$$);
  var $title$jscomp$30$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__68111_68675_G__68114_map__68109_map__68109__$1_map__68110__$1_props__41640__auto__$jscomp$69_status$jscomp$11_vec__68106$$, $APP.$cljs$cst$381$title$$), $due$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__68111_68675_G__68114_map__68109_map__68109__$1_map__68110__$1_props__41640__auto__$jscomp$69_status$jscomp$11_vec__68106$$, $cljs$cst$827$due$$), $amount$jscomp$1$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__68111_68675_G__68114_map__68109_map__68109__$1_map__68110__$1_props__41640__auto__$jscomp$69_status$jscomp$11_vec__68106$$, 
  $cljs$cst$804$amount$$), $priority$jscomp$1$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__68111_68675_G__68114_map__68109_map__68109__$1_map__68110__$1_props__41640__auto__$jscomp$69_status$jscomp$11_vec__68106$$, $cljs$cst$828$priority$$);
  $G__68111_68675_G__68114_map__68109_map__68109__$1_map__68110__$1_props__41640__auto__$jscomp$69_status$jscomp$11_vec__68106$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__68111_68675_G__68114_map__68109_map__68109__$1_map__68110__$1_props__41640__auto__$jscomp$69_status$jscomp$11_vec__68106$$, $APP.$cljs$cst$12$status$$);
  var $node_ref$$ = $APP.$helix$hooks$use_ref$$(null), $paid_QMARK_$jscomp$2$$ = $APP.$cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$($APP.$cljs$core$keyword$$.$cljs$core$IFn$_invoke$arity$1$($G__68111_68675_G__68114_map__68109_map__68109__$1_map__68110__$1_props__41640__auto__$jscomp$69_status$jscomp$11_vec__68106$$), $cljs$cst$830$paid$$), $st$jscomp$2$$ = $amp$components$elements$budget$cash_flow$status_classes$$($APP.$cljs$core$keyword$$.$cljs$core$IFn$_invoke$arity$1$($G__68111_68675_G__68114_map__68109_map__68109__$1_map__68110__$1_props__41640__auto__$jscomp$69_status$jscomp$11_vec__68106$$));
  $G__68111_68675_G__68114_map__68109_map__68109__$1_map__68110__$1_props__41640__auto__$jscomp$69_status$jscomp$11_vec__68106$$ = $APP.$helix$hooks$wrap_fx$$(function() {
    return $APP.$cljs$core$truth_$$($APP.$cljs$core$_deref$$($node_ref$$)) ? $APP.$module$node_modules$gsap$dist$gsap$$.gsap.fromTo($APP.$cljs$core$_deref$$($node_ref$$), {opacity:0, x:-20}, {opacity:1, x:0, duration:0.4, delay:$idx$jscomp$76$$ * 0.06, ease:"power2.out"}) : null;
  });
  $G__68112_68676_entry$jscomp$29_maybe_ref__41641__auto__$jscomp$69$$ = [];
  $APP.$helix$hooks$raw_use_effect$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$hooks$raw_use_effect$$.$cljs$core$IFn$_invoke$arity$2$($G__68111_68675_G__68114_map__68109_map__68109__$1_map__68110__$1_props__41640__auto__$jscomp$69_status$jscomp$11_vec__68106$$, $G__68112_68676_entry$jscomp$29_maybe_ref__41641__auto__$jscomp$69$$) : $APP.$helix$hooks$raw_use_effect$$.call(null, $G__68111_68675_G__68114_map__68109_map__68109__$1_map__68110__$1_props__41640__auto__$jscomp$69_status$jscomp$11_vec__68106$$, 
  $G__68112_68676_entry$jscomp$29_maybe_ref__41641__auto__$jscomp$69$$);
  $G__68111_68675_G__68114_map__68109_map__68109__$1_map__68110__$1_props__41640__auto__$jscomp$69_status$jscomp$11_vec__68106$$ = function() {
    return {ref:$node_ref$$, className:$APP.$helix$impl$props$normalize_class$$("relative flex items-stretch opacity-0 " + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($paid_QMARK_$jscomp$2$$ ? "opacity-50" : null)), children:[function() {
      var $G__68118$$ = function() {
        return {className:"relative flex flex-col items-center", style:{width:$APP.$helix$impl$props$__GT_js$$("28px"), minWidth:$APP.$helix$impl$props$__GT_js$$("28px")}, children:[function() {
          var $G__68124$$ = {className:$APP.$helix$impl$props$normalize_class$$("mt-4 h-2.5 w-2.5 rounded-full border-2 flex-shrink-0 " + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($amp$components$elements$budget$cash_flow$priority_dot_classes$$($APP.$cljs$core$keyword$$.$cljs$core$IFn$_invoke$arity$1$($priority$jscomp$1$$), $paid_QMARK_$jscomp$2$$)))};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__68124$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__68124$$);
        }(), function() {
          var $G__68128$$ = {className:"flex-1 border-l border-dashed border-slate-300 dark:border-slate-700"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__68128$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__68128$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__68118$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__68118$$);
    }(), function() {
      var $G__68132_G__68136$jscomp$inline_4033$$ = {className:"w-4 border-t border-dashed border-slate-300 dark:border-slate-600", style:{marginTop:$APP.$helix$impl$props$__GT_js$$("1px")}};
      $G__68132_G__68136$jscomp$inline_4033$$ = {className:"flex items-start pt-[18px]", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__68132_G__68136$jscomp$inline_4033$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__68132_G__68136$jscomp$inline_4033$$)};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__68132_G__68136$jscomp$inline_4033$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__68132_G__68136$jscomp$inline_4033$$);
    }(), function() {
      var $G__68142$$ = function() {
        return {className:"flex-1 pb-5 pt-1 pl-1", children:[function() {
          var $G__68146$$ = function() {
            return {className:"flex items-center gap-2 mb-1", children:[function() {
              var $G__68150_JSCompiler_temp_const$jscomp$3037$$ = $APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-mono", "text-[11px]", "text-slate-600  dark:text-slate-400"])));
              var $JSCompiler_inline_result$jscomp$3038_d$jscomp$inline_3401$$ = $amp$components$elements$budget$cash_flow$parse_date$$($due$$);
              $JSCompiler_inline_result$jscomp$3038_d$jscomp$inline_3401$$ = "" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($JSCompiler_inline_result$jscomp$3038_d$jscomp$inline_3401$$.toLocaleString("en-US", {month:"short"})) + " " + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($JSCompiler_inline_result$jscomp$3038_d$jscomp$inline_3401$$.getDate());
              $G__68150_JSCompiler_temp_const$jscomp$3037$$ = {className:$G__68150_JSCompiler_temp_const$jscomp$3037$$, children:$JSCompiler_inline_result$jscomp$3038_d$jscomp$inline_3401$$};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__68150_JSCompiler_temp_const$jscomp$3037$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__68150_JSCompiler_temp_const$jscomp$3037$$);
            }(), function() {
              var $G__68154$$ = {className:$APP.$helix$impl$props$normalize_class$$("px-1.5 py-px text-[9px] font-bold uppercase tracking-widest font-mono " + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($amp$components$elements$budget$cash_flow$priority_tag_bg$$($APP.$cljs$core$keyword$$.$cljs$core$IFn$_invoke$arity$1$($priority$jscomp$1$$))) + " " + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($amp$components$elements$budget$cash_flow$priority_tag_text$$($APP.$cljs$core$keyword$$.$cljs$core$IFn$_invoke$arity$1$($priority$jscomp$1$$)))), 
              children:$amp$components$elements$budget$cash_flow$priority_label$$($APP.$cljs$core$keyword$$.$cljs$core$IFn$_invoke$arity$1$($priority$jscomp$1$$))};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__68154$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__68154$$);
            }(), function() {
              var $G__68158$$ = {className:$APP.$helix$impl$props$normalize_class$$("px-1.5 py-px text-[9px] font-bold uppercase tracking-widest font-mono " + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($cljs$cst$894$dot$$.$cljs$core$IFn$_invoke$arity$1$($st$jscomp$2$$)) + " " + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($APP.$cljs$cst$406$text$$.$cljs$core$IFn$_invoke$arity$1$($st$jscomp$2$$))), children:$cljs$cst$812$label$$.$cljs$core$IFn$_invoke$arity$1$($st$jscomp$2$$)};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__68158$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__68158$$);
            }()]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__68146$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__68146$$);
        }(), function() {
          var $G__68162$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-sm leading-snug " + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($paid_QMARK_$jscomp$2$$ ? "" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$("text-slate-600  dark:text-slate-400") + " line-through" : "text-slate-700  dark:text-slate-300")), children:$title$jscomp$30$$};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__68162$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__68162$$);
        }(), function() {
          var $G__68166$$ = {className:$APP.$helix$impl$props$normalize_class$$("mt-0.5 font-mono text-base font-semibold tracking-tight " + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($amp$components$elements$budget$cash_flow$priority_amount_class$$($APP.$cljs$core$keyword$$.$cljs$core$IFn$_invoke$arity$1$($priority$jscomp$1$$), $paid_QMARK_$jscomp$2$$))), children:$amp$components$elements$budget$cash_flow$format_currency$$($amount$jscomp$1$$)};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__68166$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__68166$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__68142$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__68142$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__68111_68675_G__68114_map__68109_map__68109__$1_map__68110__$1_props__41640__auto__$jscomp$69_status$jscomp$11_vec__68106$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__68111_68675_G__68114_map__68109_map__68109__$1_map__68110__$1_props__41640__auto__$jscomp$69_status$jscomp$11_vec__68106$$);
};
$amp$components$elements$budget$cash_flow$now_marker$$ = function($G__68175_68677_G__68178_props__41640__auto__$jscomp$70$$) {
  $APP.$helix$core$extract_cljs_props$$($G__68175_68677_G__68178_props__41640__auto__$jscomp$70$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $ref$jscomp$22$$ = $APP.$helix$hooks$use_ref$$(null);
  $G__68175_68677_G__68178_props__41640__auto__$jscomp$70$$ = $APP.$helix$hooks$wrap_fx$$(function() {
    return $APP.$cljs$core$truth_$$($APP.$cljs$core$_deref$$($ref$jscomp$22$$)) ? $APP.$module$node_modules$gsap$dist$gsap$$.gsap.fromTo($APP.$cljs$core$_deref$$($ref$jscomp$22$$), {opacity:0, scaleX:0}, {opacity:1, scaleX:1, duration:0.6, delay:0.2, ease:"power3.out"}) : null;
  });
  var $G__68176_68678$$ = [];
  $APP.$helix$hooks$raw_use_effect$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$hooks$raw_use_effect$$.$cljs$core$IFn$_invoke$arity$2$($G__68175_68677_G__68178_props__41640__auto__$jscomp$70$$, $G__68176_68678$$) : $APP.$helix$hooks$raw_use_effect$$.call(null, $G__68175_68677_G__68178_props__41640__auto__$jscomp$70$$, $G__68176_68678$$);
  $G__68175_68677_G__68178_props__41640__auto__$jscomp$70$$ = function() {
    return {ref:$ref$jscomp$22$$, className:"flex items-center gap-2 py-3 origin-left opacity-0", children:[function() {
      var $G__68182$$ = function() {
        return {className:"relative flex items-center justify-center", style:{width:$APP.$helix$impl$props$__GT_js$$("28px"), minWidth:$APP.$helix$impl$props$__GT_js$$("28px")}, children:[function() {
          var $G__68188$$ = {className:"absolute h-5 w-5 animate-ping rounded-full bg-rose-400/30"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__68188$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__68188$$);
        }(), function() {
          var $G__68192$$ = {className:"h-2.5 w-2.5 rounded-full bg-rose-400"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__68192$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__68192$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__68182$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__68182$$);
    }(), function() {
      var $G__68196$$ = {className:"flex-1 h-px bg-rose-400/50"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__68196$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__68196$$);
    }(), function() {
      var $G__68200$$ = {className:"font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-rose-400 pr-1", children:"now"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__68200$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__68200$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__68175_68677_G__68178_props__41640__auto__$jscomp$70$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__68175_68677_G__68178_props__41640__auto__$jscomp$70$$);
};
$amp$components$elements$budget$cash_flow$month_header$$ = function($G__68210_68687_G__68213_map__68209_map__68209__$1_props__41640__auto__$jscomp$71_vec__68206$$, $G__68211_68688_maybe_ref__41641__auto__$jscomp$71$$) {
  $G__68210_68687_G__68213_map__68209_map__68209__$1_props__41640__auto__$jscomp$71_vec__68206$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__68210_68687_G__68213_map__68209_map__68209__$1_props__41640__auto__$jscomp$71_vec__68206$$), $G__68211_68688_maybe_ref__41641__auto__$jscomp$71$$], null);
  $G__68210_68687_G__68213_map__68209_map__68209__$1_props__41640__auto__$jscomp$71_vec__68206$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__68210_68687_G__68213_map__68209_map__68209__$1_props__41640__auto__$jscomp$71_vec__68206$$, 0, null);
  $G__68210_68687_G__68213_map__68209_map__68209__$1_props__41640__auto__$jscomp$71_vec__68206$$ = $APP.$cljs$core$__destructure_map$$($G__68210_68687_G__68213_map__68209_map__68209__$1_props__41640__auto__$jscomp$71_vec__68206$$);
  var $label$jscomp$10$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__68210_68687_G__68213_map__68209_map__68209__$1_props__41640__auto__$jscomp$71_vec__68206$$, $cljs$cst$812$label$$), $idx$jscomp$77$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__68210_68687_G__68213_map__68209_map__68209__$1_props__41640__auto__$jscomp$71_vec__68206$$, $APP.$cljs$cst$443$idx$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $ref$jscomp$23$$ = $APP.$helix$hooks$use_ref$$(null);
  $G__68210_68687_G__68213_map__68209_map__68209__$1_props__41640__auto__$jscomp$71_vec__68206$$ = $APP.$helix$hooks$wrap_fx$$(function() {
    return $APP.$cljs$core$truth_$$($APP.$cljs$core$_deref$$($ref$jscomp$23$$)) ? $APP.$module$node_modules$gsap$dist$gsap$$.gsap.fromTo($APP.$cljs$core$_deref$$($ref$jscomp$23$$), {opacity:0, y:8}, {opacity:1, y:0, duration:0.35, delay:0.1 + $idx$jscomp$77$$ * 0.05, ease:"power2.out"}) : null;
  });
  $G__68211_68688_maybe_ref__41641__auto__$jscomp$71$$ = [];
  $APP.$helix$hooks$raw_use_effect$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$hooks$raw_use_effect$$.$cljs$core$IFn$_invoke$arity$2$($G__68210_68687_G__68213_map__68209_map__68209__$1_props__41640__auto__$jscomp$71_vec__68206$$, $G__68211_68688_maybe_ref__41641__auto__$jscomp$71$$) : $APP.$helix$hooks$raw_use_effect$$.call(null, $G__68210_68687_G__68213_map__68209_map__68209__$1_props__41640__auto__$jscomp$71_vec__68206$$, $G__68211_68688_maybe_ref__41641__auto__$jscomp$71$$);
  $G__68210_68687_G__68213_map__68209_map__68209__$1_props__41640__auto__$jscomp$71_vec__68206$$ = function() {
    return {ref:$ref$jscomp$23$$, className:"flex items-center gap-3 pt-8 pb-2 opacity-0", children:[function() {
      var $G__68217$$ = {className:"h-px w-8 bg-pink-500/70"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__68217$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__68217$$);
    }(), function() {
      var $G__68221$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$("font-mono;text-[10px];font-bold;uppercase;tracking-[0.25em];text-slate-600  dark:text-slate-400".split(";")))), children:$label$jscomp$10$$};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__68221$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__68221$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__68210_68687_G__68213_map__68209_map__68209__$1_props__41640__auto__$jscomp$71_vec__68206$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__68210_68687_G__68213_map__68209_map__68209__$1_props__41640__auto__$jscomp$71_vec__68206$$);
};
$amp$components$elements$budget$cash_flow$month_summary_row$$ = function($G__68240_68697_G__68247_map__68234_map__68234__$1_map__68236__$1_props__41640__auto__$jscomp$72_vec__68231$$, $G__68241_68698_all_paid$jscomp$2_maybe_ref__41641__auto__$jscomp$72_rollup$$) {
  $G__68240_68697_G__68247_map__68234_map__68234__$1_map__68236__$1_props__41640__auto__$jscomp$72_vec__68231$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__68240_68697_G__68247_map__68234_map__68234__$1_map__68236__$1_props__41640__auto__$jscomp$72_vec__68231$$), $G__68241_68698_all_paid$jscomp$2_maybe_ref__41641__auto__$jscomp$72_rollup$$], null);
  $G__68240_68697_G__68247_map__68234_map__68234__$1_map__68236__$1_props__41640__auto__$jscomp$72_vec__68231$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__68240_68697_G__68247_map__68234_map__68234__$1_map__68236__$1_props__41640__auto__$jscomp$72_vec__68231$$, 0, null);
  $G__68240_68697_G__68247_map__68234_map__68234__$1_map__68236__$1_props__41640__auto__$jscomp$72_vec__68231$$ = $APP.$cljs$core$__destructure_map$$($G__68240_68697_G__68247_map__68234_map__68234__$1_map__68236__$1_props__41640__auto__$jscomp$72_vec__68231$$);
  $G__68241_68698_all_paid$jscomp$2_maybe_ref__41641__auto__$jscomp$72_rollup$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__68240_68697_G__68247_map__68234_map__68234__$1_map__68236__$1_props__41640__auto__$jscomp$72_vec__68231$$, $cljs$cst$896$rollup$$);
  var $idx$jscomp$78$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__68240_68697_G__68247_map__68234_map__68234__$1_map__68236__$1_props__41640__auto__$jscomp$72_vec__68231$$, $APP.$cljs$cst$443$idx$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__68240_68697_G__68247_map__68234_map__68234__$1_map__68236__$1_props__41640__auto__$jscomp$72_vec__68231$$ = $APP.$cljs$core$__destructure_map$$($G__68241_68698_all_paid$jscomp$2_maybe_ref__41641__auto__$jscomp$72_rollup$$);
  var $label$jscomp$11$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__68240_68697_G__68247_map__68234_map__68234__$1_map__68236__$1_props__41640__auto__$jscomp$72_vec__68231$$, $cljs$cst$812$label$$), $total$jscomp$6$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__68240_68697_G__68247_map__68234_map__68234__$1_map__68236__$1_props__41640__auto__$jscomp$72_vec__68231$$, $APP.$cljs$cst$719$total$$), $paid$jscomp$1$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__68240_68697_G__68247_map__68234_map__68234__$1_map__68236__$1_props__41640__auto__$jscomp$72_vec__68231$$, 
  $cljs$cst$830$paid$$), $pending$jscomp$2$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__68240_68697_G__68247_map__68234_map__68234__$1_map__68236__$1_props__41640__auto__$jscomp$72_vec__68231$$, $APP.$cljs$cst$14$pending$$), $n_items$jscomp$1$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__68240_68697_G__68247_map__68234_map__68234__$1_map__68236__$1_props__41640__auto__$jscomp$72_vec__68231$$, $cljs$cst$892$n_items$$), $n_crit$jscomp$2$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__68240_68697_G__68247_map__68234_map__68234__$1_map__68236__$1_props__41640__auto__$jscomp$72_vec__68231$$, 
  $cljs$cst$890$n_crit$$);
  $G__68241_68698_all_paid$jscomp$2_maybe_ref__41641__auto__$jscomp$72_rollup$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__68240_68697_G__68247_map__68234_map__68234__$1_map__68236__$1_props__41640__auto__$jscomp$72_vec__68231$$, $cljs$cst$888$all_paid$$);
  var $has_now$jscomp$1$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__68240_68697_G__68247_map__68234_map__68234__$1_map__68236__$1_props__41640__auto__$jscomp$72_vec__68231$$, $cljs$cst$893$has_now$$), $ref$jscomp$24$$ = $APP.$helix$hooks$use_ref$$(null), $cls$jscomp$2$$ = $APP.$cljs$core$truth_$$($G__68241_68698_all_paid$jscomp$2_maybe_ref__41641__auto__$jscomp$72_rollup$$) ? new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$407$border$$, "border-emerald-500 dark:border-emerald-300", 
  $cljs$cst$887$fill$$, "bg-transparent", $APP.$cljs$cst$406$text$$, "text-emerald-600 dark:text-emerald-300"], null) : $n_crit$jscomp$2$$ > 0 ? new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$407$border$$, "border-pink-600 dark:border-pink-300", $cljs$cst$887$fill$$, "bg-pink-600 dark:bg-pink-300", $APP.$cljs$cst$406$text$$, "text-pink-600 dark:text-pink-300"], null) : new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$407$border$$, "border-indigo-500 dark:border-indigo-300", 
  $cljs$cst$887$fill$$, "bg-indigo-500 dark:bg-indigo-300", $APP.$cljs$cst$406$text$$, "text-indigo-600 dark:text-indigo-300"], null);
  $G__68240_68697_G__68247_map__68234_map__68234__$1_map__68236__$1_props__41640__auto__$jscomp$72_vec__68231$$ = $APP.$helix$hooks$wrap_fx$$(function() {
    return $APP.$cljs$core$truth_$$($APP.$cljs$core$_deref$$($ref$jscomp$24$$)) ? $APP.$module$node_modules$gsap$dist$gsap$$.gsap.fromTo($APP.$cljs$core$_deref$$($ref$jscomp$24$$), {opacity:0, x:-16}, {opacity:1, x:0, duration:0.35, delay:$idx$jscomp$78$$ * 0.05, ease:"power2.out"}) : null;
  });
  $G__68241_68698_all_paid$jscomp$2_maybe_ref__41641__auto__$jscomp$72_rollup$$ = [];
  $APP.$helix$hooks$raw_use_effect$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$hooks$raw_use_effect$$.$cljs$core$IFn$_invoke$arity$2$($G__68240_68697_G__68247_map__68234_map__68234__$1_map__68236__$1_props__41640__auto__$jscomp$72_vec__68231$$, $G__68241_68698_all_paid$jscomp$2_maybe_ref__41641__auto__$jscomp$72_rollup$$) : $APP.$helix$hooks$raw_use_effect$$.call(null, $G__68240_68697_G__68247_map__68234_map__68234__$1_map__68236__$1_props__41640__auto__$jscomp$72_vec__68231$$, $G__68241_68698_all_paid$jscomp$2_maybe_ref__41641__auto__$jscomp$72_rollup$$);
  $G__68240_68697_G__68247_map__68234_map__68234__$1_map__68236__$1_props__41640__auto__$jscomp$72_vec__68231$$ = function() {
    return {ref:$ref$jscomp$24$$, className:"relative flex items-stretch opacity-0", children:[function() {
      var $G__68251$$ = function() {
        return {className:"relative flex flex-col items-center", style:{width:$APP.$helix$impl$props$__GT_js$$("28px"), minWidth:$APP.$helix$impl$props$__GT_js$$("28px")}, children:[function() {
          var $G__68259$$ = {className:$APP.$helix$impl$props$normalize_class$$("mt-4 h-2.5 w-2.5 rounded-full border-2 flex-shrink-0 " + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($APP.$cljs$cst$407$border$$.$cljs$core$IFn$_invoke$arity$1$($cls$jscomp$2$$)) + " " + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($cljs$cst$887$fill$$.$cljs$core$IFn$_invoke$arity$1$($cls$jscomp$2$$)))};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__68259$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__68259$$);
        }(), function() {
          var $G__68263$$ = {className:"flex-1 border-l border-dashed border-slate-300 dark:border-slate-700"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__68263$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__68263$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__68251$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__68251$$);
    }(), function() {
      var $G__68267_G__68271$jscomp$inline_4036$$ = {className:"w-4 border-t border-dashed border-slate-300 dark:border-slate-600", style:{marginTop:$APP.$helix$impl$props$__GT_js$$("1px")}};
      $G__68267_G__68271$jscomp$inline_4036$$ = {className:"flex items-start pt-[18px]", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__68267_G__68271$jscomp$inline_4036$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__68267_G__68271$jscomp$inline_4036$$)};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__68267_G__68271$jscomp$inline_4036$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__68267_G__68271$jscomp$inline_4036$$);
    }(), function() {
      var $G__68277$$ = function() {
        return {className:"flex-1 pb-4 pt-1 pl-1", children:[function() {
          var $G__68282$$ = function() {
            return {className:"flex items-center gap-2 mb-1", children:[function() {
              var $G__68286$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$("font-mono;text-xs;font-bold;uppercase;tracking-wider;text-slate-900  dark:text-slate-100".split(";")))), children:$label$jscomp$11$$};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__68286$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__68286$$);
            }(), function() {
              var $G__68290$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-mono", "text-[10px]", "text-slate-600  dark:text-slate-400"]))), children:"" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($n_items$jscomp$1$$) + " items"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__68290$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__68290$$);
            }(), $APP.$cljs$core$truth_$$($has_now$jscomp$1$$) ? function() {
              var $G__68294$$ = {className:"px-1.5 py-px text-[9px] font-bold uppercase tracking-widest font-mono bg-emerald-500/15 text-emerald-600 dark:bg-emerald-300/15 dark:text-emerald-300", children:"NOW"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__68294$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__68294$$);
            }() : null, $n_crit$jscomp$2$$ > 0 ? function() {
              var $G__68298$$ = {className:"px-1.5 py-px text-[9px] font-bold uppercase tracking-widest font-mono bg-pink-500/15 text-pink-600 dark:text-pink-300", children:"" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($n_crit$jscomp$2$$) + " crit"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__68298$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__68298$$);
            }() : null]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__68282$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__68282$$);
        }(), function() {
          var $G__68303$$ = function() {
            return {className:"flex items-baseline gap-3", children:[function() {
              var $G__68310$$ = {className:$APP.$helix$impl$props$normalize_class$$("font-mono text-lg font-bold tracking-tight " + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($APP.$cljs$cst$406$text$$.$cljs$core$IFn$_invoke$arity$1$($cls$jscomp$2$$))), children:$amp$components$elements$budget$cash_flow$format_currency$$($total$jscomp$6$$)};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__68310$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__68310$$);
            }(), $paid$jscomp$1$$ > 0 ? function() {
              var $G__68320$$ = {className:"font-mono text-[11px] text-emerald-600/60 dark:text-emerald-300/60", children:"" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($amp$components$elements$budget$cash_flow$format_currency$$($paid$jscomp$1$$)) + " COST, PAID"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__68320$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__68320$$);
            }() : null, $pending$jscomp$2$$ > 0 ? function() {
              var $G__68324$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-mono", "text-[11px]", "text-slate-600  dark:text-slate-400"]))), children:"" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($amp$components$elements$budget$cash_flow$format_currency$$($pending$jscomp$2$$)) + " due"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__68324$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__68324$$);
            }() : null]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__68303$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__68303$$);
        }(), function() {
          var $G__68330_G__68334$jscomp$inline_4039$$ = {className:"absolute left-0 top-0 h-px bg-emerald-500/50 dark:bg-emerald-300/50", style:{width:$APP.$helix$impl$props$__GT_js$$("" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($total$jscomp$6$$ > 0 ? Math.round($paid$jscomp$1$$ / $total$jscomp$6$$ * 100) : 0) + "%")}};
          $G__68330_G__68334$jscomp$inline_4039$$ = {className:"mt-1.5 h-px w-full bg-slate-200 dark:bg-slate-800 relative", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__68330_G__68334$jscomp$inline_4039$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__68330_G__68334$jscomp$inline_4039$$)};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__68330_G__68334$jscomp$inline_4039$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__68330_G__68334$jscomp$inline_4039$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__68277$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__68277$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__68240_68697_G__68247_map__68234_map__68234__$1_map__68236__$1_props__41640__auto__$jscomp$72_vec__68231$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__68240_68697_G__68247_map__68234_map__68234__$1_map__68236__$1_props__41640__auto__$jscomp$72_vec__68231$$);
};
$amp$components$elements$budget$cash_flow$view_toggle$$ = function($G__68379_map__68374_map__68374__$1_props__41640__auto__$jscomp$73_vec__68371$$, $maybe_ref__41641__auto__$jscomp$73$$) {
  $G__68379_map__68374_map__68374__$1_props__41640__auto__$jscomp$73_vec__68371$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__68379_map__68374_map__68374__$1_props__41640__auto__$jscomp$73_vec__68371$$), $maybe_ref__41641__auto__$jscomp$73$$], null);
  $G__68379_map__68374_map__68374__$1_props__41640__auto__$jscomp$73_vec__68371$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__68379_map__68374_map__68374__$1_props__41640__auto__$jscomp$73_vec__68371$$, 0, null);
  $G__68379_map__68374_map__68374__$1_props__41640__auto__$jscomp$73_vec__68371$$ = $APP.$cljs$core$__destructure_map$$($G__68379_map__68374_map__68374__$1_props__41640__auto__$jscomp$73_vec__68371$$);
  var $expanded_QMARK_$jscomp$2$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__68379_map__68374_map__68374__$1_props__41640__auto__$jscomp$73_vec__68371$$, $cljs$cst$897$expanded_QMARK_$$), $on_toggle$jscomp$1$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__68379_map__68374_map__68374__$1_props__41640__auto__$jscomp$73_vec__68371$$, $APP.$cljs$cst$388$on_toggle$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__68379_map__68374_map__68374__$1_props__41640__auto__$jscomp$73_vec__68371$$ = function() {
    return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$("mb-4 flex items-center gap-2;font-mono;text-[10px];font-bold;uppercase;tracking-[0.25em];text-slate-600  dark:text-slate-400;transition-colors hover:text-pink-600 dark:hover:text-pink-300".split(";")))), onClick:$on_toggle$jscomp$1$$, children:[function() {
      var $G__68383$$ = {className:"h-px w-4 bg-pink-500/50"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__68383$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__68383$$);
    }(), $APP.$cljs$core$truth_$$($expanded_QMARK_$jscomp$2$$) ? "Summary" : "Expand", function() {
      var $G__68387$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-400  dark:text-slate-600"), children:$APP.$cljs$core$truth_$$($expanded_QMARK_$jscomp$2$$) ? "▲" : "▼"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__68387$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__68387$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("button", $G__68379_map__68374_map__68374__$1_props__41640__auto__$jscomp$73_vec__68371$$) : $APP.$helix$core$jsxs$$.call(null, "button", $G__68379_map__68374_map__68374__$1_props__41640__auto__$jscomp$73_vec__68371$$);
};
$amp$components$elements$budget$cash_flow$summary_header$$ = function($G__68406_68773_G__68409_map__68399_map__68399__$1_props__41640__auto__$jscomp$74_vec__68396$$, $G__68407_68774_entries$jscomp$6_maybe_ref__41641__auto__$jscomp$74$$) {
  $G__68406_68773_G__68409_map__68399_map__68399__$1_props__41640__auto__$jscomp$74_vec__68396$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__68406_68773_G__68409_map__68399_map__68399__$1_props__41640__auto__$jscomp$74_vec__68396$$), $G__68407_68774_entries$jscomp$6_maybe_ref__41641__auto__$jscomp$74$$], null);
  $G__68406_68773_G__68409_map__68399_map__68399__$1_props__41640__auto__$jscomp$74_vec__68396$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__68406_68773_G__68409_map__68399_map__68399__$1_props__41640__auto__$jscomp$74_vec__68396$$, 0, null);
  $G__68406_68773_G__68409_map__68399_map__68399__$1_props__41640__auto__$jscomp$74_vec__68396$$ = $APP.$cljs$core$__destructure_map$$($G__68406_68773_G__68409_map__68399_map__68399__$1_props__41640__auto__$jscomp$74_vec__68396$$);
  $G__68407_68774_entries$jscomp$6_maybe_ref__41641__auto__$jscomp$74$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__68406_68773_G__68409_map__68399_map__68399__$1_props__41640__auto__$jscomp$74_vec__68396$$, $cljs$cst$889$entries$$);
  var $target_total$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__68406_68773_G__68409_map__68399_map__68399__$1_props__41640__auto__$jscomp$74_vec__68396$$, $cljs$cst$898$target_total$$), $funds_raised$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__68406_68773_G__68409_map__68399_map__68399__$1_props__41640__auto__$jscomp$74_vec__68396$$, $cljs$cst$824$funds_raised$$);
  $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__68406_68773_G__68409_map__68399_map__68399__$1_props__41640__auto__$jscomp$74_vec__68396$$, $cljs$cst$823$debt_raised$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $paid_sum$$ = $APP.$cljs$core$reduce$cljs$0core$0IFn$0_invoke$0arity$03$$($APP.$cljs$core$_PLUS_$$, 0, $APP.$cljs$core$map$$.$cljs$core$IFn$_invoke$arity$2$($cljs$cst$804$amount$$, $APP.$cljs$core$filter$cljs$0core$0IFn$0_invoke$0arity$02$$(function($p1__68391_SHARP_$$) {
    return $APP.$cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$($cljs$cst$830$paid$$, $APP.$cljs$core$keyword$$.$cljs$core$IFn$_invoke$arity$1$($APP.$cljs$cst$12$status$$.$cljs$core$IFn$_invoke$arity$1$($p1__68391_SHARP_$$)));
  }, $G__68407_68774_entries$jscomp$6_maybe_ref__41641__auto__$jscomp$74$$))), $pending_sum$$ = $target_total$$ - $paid_sum$$, $critical_sum$$ = $APP.$cljs$core$reduce$cljs$0core$0IFn$0_invoke$0arity$03$$($APP.$cljs$core$_PLUS_$$, 0, $APP.$cljs$core$map$$.$cljs$core$IFn$_invoke$arity$2$($cljs$cst$804$amount$$, $APP.$cljs$core$filter$cljs$0core$0IFn$0_invoke$0arity$02$$(function($p1__68392_SHARP_$$) {
    return $APP.$cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$($cljs$cst$848$critical$$, $APP.$cljs$core$keyword$$.$cljs$core$IFn$_invoke$arity$1$($cljs$cst$828$priority$$.$cljs$core$IFn$_invoke$arity$1$($p1__68392_SHARP_$$)));
  }, $G__68407_68774_entries$jscomp$6_maybe_ref__41641__auto__$jscomp$74$$))), $gap$$ = $target_total$$ - $funds_raised$$, $next_due$$ = function() {
    var $d$jscomp$153$$ = new Date();
    $d$jscomp$153$$.setDate($d$jscomp$153$$.getDate() + 7);
    return $d$jscomp$153$$;
  }(), $ref$jscomp$25$$ = $APP.$helix$hooks$use_ref$$(null);
  $G__68406_68773_G__68409_map__68399_map__68399__$1_props__41640__auto__$jscomp$74_vec__68396$$ = $APP.$helix$hooks$wrap_fx$$(function() {
    return $APP.$cljs$core$truth_$$($APP.$cljs$core$_deref$$($ref$jscomp$25$$)) ? $APP.$module$node_modules$gsap$dist$gsap$$.gsap.fromTo($APP.$cljs$core$_deref$$($ref$jscomp$25$$), {opacity:0, y:-12}, {opacity:1, y:0, duration:0.5, ease:"power2.out"}) : null;
  });
  $G__68407_68774_entries$jscomp$6_maybe_ref__41641__auto__$jscomp$74$$ = [];
  $APP.$helix$hooks$raw_use_effect$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$hooks$raw_use_effect$$.$cljs$core$IFn$_invoke$arity$2$($G__68406_68773_G__68409_map__68399_map__68399__$1_props__41640__auto__$jscomp$74_vec__68396$$, $G__68407_68774_entries$jscomp$6_maybe_ref__41641__auto__$jscomp$74$$) : $APP.$helix$hooks$raw_use_effect$$.call(null, $G__68406_68773_G__68409_map__68399_map__68399__$1_props__41640__auto__$jscomp$74_vec__68396$$, $G__68407_68774_entries$jscomp$6_maybe_ref__41641__auto__$jscomp$74$$);
  $G__68406_68773_G__68409_map__68399_map__68399__$1_props__41640__auto__$jscomp$74_vec__68396$$ = function() {
    return {ref:$ref$jscomp$25$$, className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["mb-4 pb-5 opacity-0", "border-b", "border-slate-200 dark:border-white/15"]))), children:[function() {
      var $G__68413$$ = function() {
        return {className:"mb-6 flex items-center gap-3", children:[function() {
          var $G__68417$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["w-10", "h-px bg-pink-500/70"])))};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__68417$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__68417$$);
        }(), function() {
          var $G__68421$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$eyebrow_highlight$$), children:"4. "};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__68421$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__68421$$);
        }(), function() {
          var $G__68425$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$eyebrow_midlight$$), children:"Cash Flow"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__68425$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__68425$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__68413$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__68413$$);
    }(), function() {
      var $G__68429$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-mono", "text-3xl", "font-extrabold", "tracking-tight", "text-slate-900  dark:text-slate-100"]))), children:$amp$components$elements$budget$cash_flow$format_currency$$($target_total$$)};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__68429$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__68429$$);
    }(), function() {
      var $G__68433$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-mono", "text-[11px] mt-0.5", "text-slate-600  dark:text-slate-400"]))), children:"target total"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__68433$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__68433$$);
    }(), function() {
      var $G__68437$$ = function() {
        return {className:"mt-4 grid grid-cols-2 gap-4", children:[function() {
          var $G__68441$$ = function() {
            return {className:"border-l-2 border-emerald-500/90 dark:border-emerald-300/90 pl-3", children:[function() {
              var $G__68445$$ = {className:"font-mono text-lg uppercase tracking-widest text-emerald-600/50 dark:text-emerald-300/50 mb-1", children:"Funds Raised"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__68445$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__68445$$);
            }(), function() {
              var $G__68449$$ = {className:"font-mono text-lg font-bold text-emerald-600 dark:text-emerald-300", children:$amp$components$elements$budget$cash_flow$format_currency$$($funds_raised$$)};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__68449$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__68449$$);
            }()]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__68441$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__68441$$);
        }(), function() {
          var $G__68453$$ = function() {
            return {className:"border-l-2 border-pink-500/90 dark:border-pink-300/90 pl-3", children:[function() {
              var $G__68457$$ = {className:"font-mono text-lg uppercase tracking-widest text-pink-600/50 dark:text-pink-300/50 mb-1", children:"Remaining"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__68457$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__68457$$);
            }(), function() {
              var $G__68461$$ = {className:"font-mono text-lg font-bold text-pink-600 dark:text-pink-300", children:$amp$components$elements$budget$cash_flow$format_currency$$($gap$$)};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__68461$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__68461$$);
            }()]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__68453$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__68453$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__68437$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__68437$$);
    }(), function() {
      var $G__68465$$ = function() {
        return {className:"mt-3 grid grid-cols-2 gap-4", children:[function() {
          var $G__68469$$ = function() {
            return {className:"border-l-2 border-emerald-500/20 dark:border-emerald-300/20 pl-3", children:[function() {
              var $G__68473$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$("font-mono;text-lg;uppercase;tracking-widest;text-slate-600  dark:text-slate-400;mb-1".split(";")))), children:"COST, PAID"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__68473$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__68473$$);
            }(), function() {
              var $G__68477$$ = {className:"font-mono text-lg font-bold text-emerald-600 dark:text-emerald-300", children:$amp$components$elements$budget$cash_flow$format_currency$$($paid_sum$$)};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__68477$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__68477$$);
            }()]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__68469$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__68469$$);
        }(), function() {
          var $G__68481$$ = function() {
            return {className:$APP.$helix$impl$props$normalize_class$$("border-l-2 pl-3 " + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$("border-slate-200 dark:border-white/15")), children:[function() {
              var $G__68485$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$("font-mono;text-lg;uppercase;tracking-widest;text-slate-600  dark:text-slate-400;mb-1".split(";")))), children:"Pending"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__68485$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__68485$$);
            }(), function() {
              var $G__68489$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-mono", "text-lg", "font-bold", " text-pink-600 dark:text-pink-300"]))), children:$amp$components$elements$budget$cash_flow$format_currency$$($pending_sum$$)};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__68489$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__68489$$);
            }()]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__68481$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__68481$$);
        }(), function() {
          var $G__68493$$ = function() {
            return {className:"border-l-2 border-pink-500/30 pl-3", children:[function() {
              var $G__68497$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$("font-mono;text-lg;uppercase;tracking-widest;text-slate-600  dark:text-slate-400;mb-1".split(";")))), children:"Critical"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__68497$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__68497$$);
            }(), function() {
              var $G__68501$$ = {className:"font-mono text-lg font-bold text-pink-600 dark:text-pink-300", children:$amp$components$elements$budget$cash_flow$format_currency$$($critical_sum$$)};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__68501$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__68501$$);
            }()]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__68493$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__68493$$);
        }(), function() {
          var $G__68505$$ = function() {
            return {className:"border-l-2 border-indigo-500/30 dark:border-indigo-400/30 pl-3", children:[function() {
              var $G__68509$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$("font-mono;text-lg;uppercase;tracking-widest;text-slate-600  dark:text-slate-400;mb-1".split(";")))), children:"Next Due"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__68509$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__68509$$);
            }(), function() {
              var $G__68513$$ = {className:"font-mono text-base font-bold text-indigo-600 dark:text-indigo-300", children:"" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($next_due$$.toLocaleString("en-US", {month:"short"})) + " " + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($next_due$$.getDate())};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__68513$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__68513$$);
            }()]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__68505$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__68505$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__68465$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__68465$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__68406_68773_G__68409_map__68399_map__68399__$1_props__41640__auto__$jscomp$74_vec__68396$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__68406_68773_G__68409_map__68399_map__68399__$1_props__41640__auto__$jscomp$74_vec__68396$$);
};
$amp$components$elements$budget$cash_flow$cash_flow$$ = function($G__68530_68818_G__68533_map__68523_map__68523__$1_props__41640__auto__$jscomp$75_vec__68520_vec__68524_vec__68527$$, $G__68531_68819_maybe_ref__41641__auto__$jscomp$75$$) {
  $G__68530_68818_G__68533_map__68523_map__68523__$1_props__41640__auto__$jscomp$75_vec__68520_vec__68524_vec__68527$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__68530_68818_G__68533_map__68523_map__68523__$1_props__41640__auto__$jscomp$75_vec__68520_vec__68524_vec__68527$$), $G__68531_68819_maybe_ref__41641__auto__$jscomp$75$$], null);
  $G__68530_68818_G__68533_map__68523_map__68523__$1_props__41640__auto__$jscomp$75_vec__68520_vec__68524_vec__68527$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__68530_68818_G__68533_map__68523_map__68523__$1_props__41640__auto__$jscomp$75_vec__68520_vec__68524_vec__68527$$, 0, null);
  $G__68530_68818_G__68533_map__68523_map__68523__$1_props__41640__auto__$jscomp$75_vec__68520_vec__68524_vec__68527$$ = $APP.$cljs$core$__destructure_map$$($G__68530_68818_G__68533_map__68523_map__68523__$1_props__41640__auto__$jscomp$75_vec__68520_vec__68524_vec__68527$$);
  var $id$jscomp$89$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__68530_68818_G__68533_map__68523_map__68523__$1_props__41640__auto__$jscomp$75_vec__68520_vec__68524_vec__68527$$, $APP.$cljs$cst$200$id$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__68530_68818_G__68533_map__68523_map__68523__$1_props__41640__auto__$jscomp$75_vec__68520_vec__68524_vec__68527$$ = $APP.$helix$hooks$use_state$$(null);
  var $error$jscomp$22$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__68530_68818_G__68533_map__68523_map__68523__$1_props__41640__auto__$jscomp$75_vec__68520_vec__68524_vec__68527$$, 0, null);
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__68530_68818_G__68533_map__68523_map__68523__$1_props__41640__auto__$jscomp$75_vec__68520_vec__68524_vec__68527$$, 1, null);
  $G__68530_68818_G__68533_map__68523_map__68523__$1_props__41640__auto__$jscomp$75_vec__68520_vec__68524_vec__68527$$ = $APP.$helix$hooks$use_state$$(!1);
  var $expanded_QMARK_$jscomp$3$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__68530_68818_G__68533_map__68523_map__68523__$1_props__41640__auto__$jscomp$75_vec__68520_vec__68524_vec__68527$$, 0, null), $set_expanded_BANG_$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__68530_68818_G__68533_map__68523_map__68523__$1_props__41640__auto__$jscomp$75_vec__68520_vec__68524_vec__68527$$, 1, null), $container_ref$jscomp$2$$ = $APP.$helix$hooks$use_ref$$(null);
  $G__68530_68818_G__68533_map__68523_map__68523__$1_props__41640__auto__$jscomp$75_vec__68520_vec__68524_vec__68527$$ = $APP.$helix$hooks$wrap_fx$$(function() {
    if ($APP.$cljs$core$truth_$$($APP.$cljs$core$truth_$$($amp$components$elements$budget$cash_flow$cashflow_data$$) ? $APP.$cljs$core$_deref$$($container_ref$jscomp$2$$) : $amp$components$elements$budget$cash_flow$cashflow_data$$)) {
      var $spine$$ = $APP.$cljs$core$_deref$$($container_ref$jscomp$2$$).querySelector(".cf-spine");
      return $APP.$cljs$core$truth_$$($spine$$) ? $APP.$module$node_modules$gsap$dist$gsap$$.gsap.fromTo($spine$$, {scaleY:0}, {scaleY:1, duration:0.8, delay:0.05, ease:"power3.out"}) : null;
    }
    return null;
  });
  $G__68531_68819_maybe_ref__41641__auto__$jscomp$75$$ = [$amp$components$elements$budget$cash_flow$cashflow_data$$];
  $APP.$helix$hooks$raw_use_effect$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$hooks$raw_use_effect$$.$cljs$core$IFn$_invoke$arity$2$($G__68530_68818_G__68533_map__68523_map__68523__$1_props__41640__auto__$jscomp$75_vec__68520_vec__68524_vec__68527$$, $G__68531_68819_maybe_ref__41641__auto__$jscomp$75$$) : $APP.$helix$hooks$raw_use_effect$$.call(null, $G__68530_68818_G__68533_map__68523_map__68523__$1_props__41640__auto__$jscomp$75_vec__68520_vec__68524_vec__68527$$, $G__68531_68819_maybe_ref__41641__auto__$jscomp$75$$);
  $G__68530_68818_G__68533_map__68523_map__68523__$1_props__41640__auto__$jscomp$75_vec__68520_vec__68524_vec__68527$$ = function() {
    return {id:$id$jscomp$89$$, ref:$container_ref$jscomp$2$$, className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["min-h-screen px-4 pb-8 pt-6 antialiased selection:bg-pink-500/30", "text-slate-900  dark:text-slate-100", "bg-white        dark:bg-slate-900"]))), children:$APP.$cljs$core$truth_$$($error$jscomp$22$$) ? function() {
      var $G__68537$$ = {className:"font-mono text-sm text-red-400 p-4", children:"err: " + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($error$jscomp$22$$)};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__68537$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__68537$$);
    }() : $amp$components$elements$budget$cash_flow$cashflow_data$$ == null ? function() {
      var $G__68541_G__68545$jscomp$inline_3853$$ = {className:"h-5 w-5 animate-spin border-2 border-slate-700 border-t-pink-400"};
      $G__68541_G__68545$jscomp$inline_3853$$ = {className:"flex items-center justify-center py-20", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__68541_G__68545$jscomp$inline_3853$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__68541_G__68545$jscomp$inline_3853$$)};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__68541_G__68545$jscomp$inline_3853$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__68541_G__68545$jscomp$inline_3853$$);
    }() : function() {
      var $G__68570_map__68548__$1_sorted$jscomp$1$$ = $APP.$cljs$core$__destructure_map$$($amp$components$elements$budget$cash_flow$cashflow_data$$), $cash_flow_model$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__68570_map__68548__$1_sorted$jscomp$1$$, $cljs$cst$825$cash_flow_model$$), $funds_raised$jscomp$1$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__68570_map__68548__$1_sorted$jscomp$1$$, $cljs$cst$824$funds_raised$$), $debt_raised$jscomp$1$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__68570_map__68548__$1_sorted$jscomp$1$$, 
      $cljs$cst$823$debt_raised$$), $target_total$jscomp$1$$ = $amp$components$elements$budget$budget_table$sub_total_all_sections$$($amp$components$elements$budget$cost_breakdown$cost_data$$) + 66821, $entries_kw$$ = $APP.$cljs$core$map$$.$cljs$core$IFn$_invoke$arity$2$(function($p1__68517_SHARP_$$) {
        return $APP.$cljs$core$update$cljs$0core$0IFn$0_invoke$0arity$03$$($APP.$cljs$core$update$cljs$0core$0IFn$0_invoke$0arity$03$$($p1__68517_SHARP_$$, $cljs$cst$828$priority$$, $APP.$cljs$core$keyword$$), $APP.$cljs$cst$12$status$$, $APP.$cljs$core$keyword$$);
      }, $cash_flow_model$$);
      $G__68570_map__68548__$1_sorted$jscomp$1$$ = $APP.$cljs$core$sort_by$cljs$0core$0IFn$0_invoke$0arity$02$$($APP.$cljs$core$comp$$.$cljs$core$IFn$_invoke$arity$3$($amp$components$elements$budget$cash_flow$date__GT_ms$$, $amp$components$elements$budget$cash_flow$parse_date$$, $cljs$cst$827$due$$), $entries_kw$$);
      var $groups$jscomp$1$$ = $amp$components$elements$budget$cash_flow$group_by_month$$($G__68570_map__68548__$1_sorted$jscomp$1$$), $now_ms$$ = $amp$components$elements$budget$cash_flow$date__GT_ms$$(new Date()), $all_items$$ = function() {
        for (var $items$jscomp$9$$ = $APP.$cljs$core$atom$cljs$0core$0IFn$0_invoke$0arity$01$$($APP.$cljs$core$PersistentVector$EMPTY$$), $now_done$$ = $APP.$cljs$core$atom$cljs$0core$0IFn$0_invoke$0arity$01$$(!1), $counter$$ = $APP.$cljs$core$atom$cljs$0core$0IFn$0_invoke$0arity$01$$(0), $G__68875_seq__68549_68839_seq__68549_68873__$1_temp__5823__auto___68872$$ = $APP.$cljs$core$seq$$($groups$jscomp$1$$), $G__68876_G__68894_chunk__68550_68840_group_68879_seq__68565_68881_seq__68565_68892__$1_temp__5823__auto___68891__$1$$ = 
        null, $G__68877_G__68895_c__5673__auto___68874_chunk__68566_68882_count__68551_68841_entry_68898_month_label_68880$$ = 0, $G__68896_c__5673__auto___68893_count__68567_68883_entry_ms_68899_i__68552_68842$$ = 0;;) {
          if ($G__68896_c__5673__auto___68893_count__68567_68883_entry_ms_68899_i__68552_68842$$ < $G__68877_G__68895_c__5673__auto___68874_chunk__68566_68882_count__68551_68841_entry_68898_month_label_68880$$) {
            var $G__68858_group_68843_i__68568_68884_seq__68561_68845_seq__68561_68856__$1_temp__5823__auto___68855$$ = $G__68876_G__68894_chunk__68550_68840_group_68879_seq__68565_68881_seq__68565_68892__$1_temp__5823__auto___68891__$1$$.$cljs$core$IIndexed$_nth$arity$2$(null, $G__68896_c__5673__auto___68893_count__68567_68883_entry_ms_68899_i__68552_68842$$), $G__68859_chunk__68562_68846_entry_68862_entry_68885_month_label_68844$$ = $amp$components$elements$budget$cash_flow$parse_date$$($cljs$cst$827$due$$.$cljs$core$IFn$_invoke$arity$1$($APP.$cljs$core$first$$($G__68858_group_68843_i__68568_68884_seq__68561_68845_seq__68561_68856__$1_temp__5823__auto___68855$$))).toLocaleString("en-US", 
            {month:"long", year:"numeric"});
            $APP.$cljs$core$swap_BANG_$$.$cljs$core$IFn$_invoke$arity$3$($items$jscomp$9$$, $APP.$cljs$core$conj$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$25$type$$, $cljs$cst$899$month$$, $cljs$cst$812$label$$, $G__68859_chunk__68562_68846_entry_68862_entry_68885_month_label_68844$$, $APP.$cljs$cst$443$idx$$, $APP.$cljs$core$_deref$$($counter$$)], null));
            $APP.$cljs$core$swap_BANG_$$.$cljs$core$IFn$_invoke$arity$2$($counter$$, $APP.$cljs$core$inc$$);
            $G__68858_group_68843_i__68568_68884_seq__68561_68845_seq__68561_68856__$1_temp__5823__auto___68855$$ = $APP.$cljs$core$seq$$($G__68858_group_68843_i__68568_68884_seq__68561_68845_seq__68561_68856__$1_temp__5823__auto___68855$$);
            $G__68859_chunk__68562_68846_entry_68862_entry_68885_month_label_68844$$ = null;
            for (var $G__68860_c__5673__auto___68857_count__68563_68847_entry_ms_68863_entry_ms_68886$$ = 0, $i__68564_68848$$ = 0;;) {
              if ($i__68564_68848$$ < $G__68860_c__5673__auto___68857_count__68563_68847_entry_ms_68863_entry_ms_68886$$) {
                var $entry_68849$$ = $G__68859_chunk__68562_68846_entry_68862_entry_68885_month_label_68844$$.$cljs$core$IIndexed$_nth$arity$2$(null, $i__68564_68848$$), $entry_ms_68850$$ = $amp$components$elements$budget$cash_flow$date__GT_ms$$($amp$components$elements$budget$cash_flow$parse_date$$($cljs$cst$827$due$$.$cljs$core$IFn$_invoke$arity$1$($entry_68849$$)));
                $APP.$cljs$core$not$$($APP.$cljs$core$_deref$$($now_done$$)) && $entry_ms_68850$$ > $now_ms$$ && ($APP.$cljs$core$swap_BANG_$$.$cljs$core$IFn$_invoke$arity$3$($items$jscomp$9$$, $APP.$cljs$core$conj$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$25$type$$, $cljs$cst$900$now$$], null)), $APP.$cljs$core$reset_BANG_$$($now_done$$, !0));
                $APP.$cljs$core$swap_BANG_$$.$cljs$core$IFn$_invoke$arity$3$($items$jscomp$9$$, $APP.$cljs$core$conj$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$25$type$$, $cljs$cst$895$entry$$, $cljs$cst$895$entry$$, $entry_68849$$, $APP.$cljs$cst$443$idx$$, $APP.$cljs$core$_deref$$($counter$$), $cljs$cst$901$past_QMARK_$$, $APP.$cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$($cljs$cst$830$paid$$, $APP.$cljs$cst$12$status$$.$cljs$core$IFn$_invoke$arity$1$($entry_68849$$))], 
                null));
                $APP.$cljs$core$swap_BANG_$$.$cljs$core$IFn$_invoke$arity$2$($counter$$, $APP.$cljs$core$inc$$);
                $i__68564_68848$$ += 1;
              } else {
                if ($G__68858_group_68843_i__68568_68884_seq__68561_68845_seq__68561_68856__$1_temp__5823__auto___68855$$ = $APP.$cljs$core$seq$$($G__68858_group_68843_i__68568_68884_seq__68561_68845_seq__68561_68856__$1_temp__5823__auto___68855$$)) {
                  $APP.$cljs$core$chunked_seq_QMARK_$$($G__68858_group_68843_i__68568_68884_seq__68561_68845_seq__68561_68856__$1_temp__5823__auto___68855$$) ? ($G__68860_c__5673__auto___68857_count__68563_68847_entry_ms_68863_entry_ms_68886$$ = $APP.$cljs$core$_chunked_first$$($G__68858_group_68843_i__68568_68884_seq__68561_68845_seq__68561_68856__$1_temp__5823__auto___68855$$), $G__68858_group_68843_i__68568_68884_seq__68561_68845_seq__68561_68856__$1_temp__5823__auto___68855$$ = $APP.$cljs$core$_chunked_rest$$($G__68858_group_68843_i__68568_68884_seq__68561_68845_seq__68561_68856__$1_temp__5823__auto___68855$$), 
                  $G__68859_chunk__68562_68846_entry_68862_entry_68885_month_label_68844$$ = $G__68860_c__5673__auto___68857_count__68563_68847_entry_ms_68863_entry_ms_68886$$, $G__68860_c__5673__auto___68857_count__68563_68847_entry_ms_68863_entry_ms_68886$$ = $APP.$cljs$core$count$$($G__68860_c__5673__auto___68857_count__68563_68847_entry_ms_68863_entry_ms_68886$$)) : ($G__68859_chunk__68562_68846_entry_68862_entry_68885_month_label_68844$$ = $APP.$cljs$core$first$$($G__68858_group_68843_i__68568_68884_seq__68561_68845_seq__68561_68856__$1_temp__5823__auto___68855$$), 
                  $G__68860_c__5673__auto___68857_count__68563_68847_entry_ms_68863_entry_ms_68886$$ = $amp$components$elements$budget$cash_flow$date__GT_ms$$($amp$components$elements$budget$cash_flow$parse_date$$($cljs$cst$827$due$$.$cljs$core$IFn$_invoke$arity$1$($G__68859_chunk__68562_68846_entry_68862_entry_68885_month_label_68844$$))), $APP.$cljs$core$not$$($APP.$cljs$core$_deref$$($now_done$$)) && $G__68860_c__5673__auto___68857_count__68563_68847_entry_ms_68863_entry_ms_68886$$ > $now_ms$$ && 
                  ($APP.$cljs$core$swap_BANG_$$.$cljs$core$IFn$_invoke$arity$3$($items$jscomp$9$$, $APP.$cljs$core$conj$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$25$type$$, $cljs$cst$900$now$$], null)), $APP.$cljs$core$reset_BANG_$$($now_done$$, !0)), $APP.$cljs$core$swap_BANG_$$.$cljs$core$IFn$_invoke$arity$3$($items$jscomp$9$$, $APP.$cljs$core$conj$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$25$type$$, $cljs$cst$895$entry$$, $cljs$cst$895$entry$$, 
                  $G__68859_chunk__68562_68846_entry_68862_entry_68885_month_label_68844$$, $APP.$cljs$cst$443$idx$$, $APP.$cljs$core$_deref$$($counter$$), $cljs$cst$901$past_QMARK_$$, $APP.$cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$($cljs$cst$830$paid$$, $APP.$cljs$cst$12$status$$.$cljs$core$IFn$_invoke$arity$1$($G__68859_chunk__68562_68846_entry_68862_entry_68885_month_label_68844$$))], null)), $APP.$cljs$core$swap_BANG_$$.$cljs$core$IFn$_invoke$arity$2$($counter$$, $APP.$cljs$core$inc$$), 
                  $G__68858_group_68843_i__68568_68884_seq__68561_68845_seq__68561_68856__$1_temp__5823__auto___68855$$ = $APP.$cljs$core$next$$($G__68858_group_68843_i__68568_68884_seq__68561_68845_seq__68561_68856__$1_temp__5823__auto___68855$$), $G__68859_chunk__68562_68846_entry_68862_entry_68885_month_label_68844$$ = null, $G__68860_c__5673__auto___68857_count__68563_68847_entry_ms_68863_entry_ms_68886$$ = 0), $i__68564_68848$$ = 0;
                } else {
                  break;
                }
              }
            }
            $G__68896_c__5673__auto___68893_count__68567_68883_entry_ms_68899_i__68552_68842$$ += 1;
          } else {
            if ($G__68875_seq__68549_68839_seq__68549_68873__$1_temp__5823__auto___68872$$ = $APP.$cljs$core$seq$$($G__68875_seq__68549_68839_seq__68549_68873__$1_temp__5823__auto___68872$$)) {
              if ($APP.$cljs$core$chunked_seq_QMARK_$$($G__68875_seq__68549_68839_seq__68549_68873__$1_temp__5823__auto___68872$$)) {
                $G__68877_G__68895_c__5673__auto___68874_chunk__68566_68882_count__68551_68841_entry_68898_month_label_68880$$ = $APP.$cljs$core$_chunked_first$$($G__68875_seq__68549_68839_seq__68549_68873__$1_temp__5823__auto___68872$$), $G__68875_seq__68549_68839_seq__68549_68873__$1_temp__5823__auto___68872$$ = $APP.$cljs$core$_chunked_rest$$($G__68875_seq__68549_68839_seq__68549_68873__$1_temp__5823__auto___68872$$), $G__68876_G__68894_chunk__68550_68840_group_68879_seq__68565_68881_seq__68565_68892__$1_temp__5823__auto___68891__$1$$ = 
                $G__68877_G__68895_c__5673__auto___68874_chunk__68566_68882_count__68551_68841_entry_68898_month_label_68880$$, $G__68877_G__68895_c__5673__auto___68874_chunk__68566_68882_count__68551_68841_entry_68898_month_label_68880$$ = $APP.$cljs$core$count$$($G__68877_G__68895_c__5673__auto___68874_chunk__68566_68882_count__68551_68841_entry_68898_month_label_68880$$);
              } else {
                $G__68876_G__68894_chunk__68550_68840_group_68879_seq__68565_68881_seq__68565_68892__$1_temp__5823__auto___68891__$1$$ = $APP.$cljs$core$first$$($G__68875_seq__68549_68839_seq__68549_68873__$1_temp__5823__auto___68872$$);
                $G__68877_G__68895_c__5673__auto___68874_chunk__68566_68882_count__68551_68841_entry_68898_month_label_68880$$ = $amp$components$elements$budget$cash_flow$parse_date$$($cljs$cst$827$due$$.$cljs$core$IFn$_invoke$arity$1$($APP.$cljs$core$first$$($G__68876_G__68894_chunk__68550_68840_group_68879_seq__68565_68881_seq__68565_68892__$1_temp__5823__auto___68891__$1$$))).toLocaleString("en-US", {month:"long", year:"numeric"});
                $APP.$cljs$core$swap_BANG_$$.$cljs$core$IFn$_invoke$arity$3$($items$jscomp$9$$, $APP.$cljs$core$conj$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$25$type$$, $cljs$cst$899$month$$, $cljs$cst$812$label$$, $G__68877_G__68895_c__5673__auto___68874_chunk__68566_68882_count__68551_68841_entry_68898_month_label_68880$$, $APP.$cljs$cst$443$idx$$, $APP.$cljs$core$_deref$$($counter$$)], null));
                $APP.$cljs$core$swap_BANG_$$.$cljs$core$IFn$_invoke$arity$2$($counter$$, $APP.$cljs$core$inc$$);
                $G__68876_G__68894_chunk__68550_68840_group_68879_seq__68565_68881_seq__68565_68892__$1_temp__5823__auto___68891__$1$$ = $APP.$cljs$core$seq$$($G__68876_G__68894_chunk__68550_68840_group_68879_seq__68565_68881_seq__68565_68892__$1_temp__5823__auto___68891__$1$$);
                $G__68877_G__68895_c__5673__auto___68874_chunk__68566_68882_count__68551_68841_entry_68898_month_label_68880$$ = null;
                for ($G__68858_group_68843_i__68568_68884_seq__68561_68845_seq__68561_68856__$1_temp__5823__auto___68855$$ = $G__68896_c__5673__auto___68893_count__68567_68883_entry_ms_68899_i__68552_68842$$ = 0;;) {
                  if ($G__68858_group_68843_i__68568_68884_seq__68561_68845_seq__68561_68856__$1_temp__5823__auto___68855$$ < $G__68896_c__5673__auto___68893_count__68567_68883_entry_ms_68899_i__68552_68842$$) {
                    $G__68859_chunk__68562_68846_entry_68862_entry_68885_month_label_68844$$ = $G__68877_G__68895_c__5673__auto___68874_chunk__68566_68882_count__68551_68841_entry_68898_month_label_68880$$.$cljs$core$IIndexed$_nth$arity$2$(null, $G__68858_group_68843_i__68568_68884_seq__68561_68845_seq__68561_68856__$1_temp__5823__auto___68855$$), $G__68860_c__5673__auto___68857_count__68563_68847_entry_ms_68863_entry_ms_68886$$ = $amp$components$elements$budget$cash_flow$date__GT_ms$$($amp$components$elements$budget$cash_flow$parse_date$$($cljs$cst$827$due$$.$cljs$core$IFn$_invoke$arity$1$($G__68859_chunk__68562_68846_entry_68862_entry_68885_month_label_68844$$))), 
                    $APP.$cljs$core$not$$($APP.$cljs$core$_deref$$($now_done$$)) && $G__68860_c__5673__auto___68857_count__68563_68847_entry_ms_68863_entry_ms_68886$$ > $now_ms$$ && ($APP.$cljs$core$swap_BANG_$$.$cljs$core$IFn$_invoke$arity$3$($items$jscomp$9$$, $APP.$cljs$core$conj$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$25$type$$, $cljs$cst$900$now$$], null)), $APP.$cljs$core$reset_BANG_$$($now_done$$, !0)), $APP.$cljs$core$swap_BANG_$$.$cljs$core$IFn$_invoke$arity$3$($items$jscomp$9$$, 
                    $APP.$cljs$core$conj$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$25$type$$, $cljs$cst$895$entry$$, $cljs$cst$895$entry$$, $G__68859_chunk__68562_68846_entry_68862_entry_68885_month_label_68844$$, $APP.$cljs$cst$443$idx$$, $APP.$cljs$core$_deref$$($counter$$), $cljs$cst$901$past_QMARK_$$, $APP.$cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$($cljs$cst$830$paid$$, $APP.$cljs$cst$12$status$$.$cljs$core$IFn$_invoke$arity$1$($G__68859_chunk__68562_68846_entry_68862_entry_68885_month_label_68844$$))], 
                    null)), $APP.$cljs$core$swap_BANG_$$.$cljs$core$IFn$_invoke$arity$2$($counter$$, $APP.$cljs$core$inc$$), $G__68858_group_68843_i__68568_68884_seq__68561_68845_seq__68561_68856__$1_temp__5823__auto___68855$$ += 1;
                  } else {
                    if ($G__68876_G__68894_chunk__68550_68840_group_68879_seq__68565_68881_seq__68565_68892__$1_temp__5823__auto___68891__$1$$ = $APP.$cljs$core$seq$$($G__68876_G__68894_chunk__68550_68840_group_68879_seq__68565_68881_seq__68565_68892__$1_temp__5823__auto___68891__$1$$)) {
                      $APP.$cljs$core$chunked_seq_QMARK_$$($G__68876_G__68894_chunk__68550_68840_group_68879_seq__68565_68881_seq__68565_68892__$1_temp__5823__auto___68891__$1$$) ? ($G__68896_c__5673__auto___68893_count__68567_68883_entry_ms_68899_i__68552_68842$$ = $APP.$cljs$core$_chunked_first$$($G__68876_G__68894_chunk__68550_68840_group_68879_seq__68565_68881_seq__68565_68892__$1_temp__5823__auto___68891__$1$$), $G__68876_G__68894_chunk__68550_68840_group_68879_seq__68565_68881_seq__68565_68892__$1_temp__5823__auto___68891__$1$$ = 
                      $APP.$cljs$core$_chunked_rest$$($G__68876_G__68894_chunk__68550_68840_group_68879_seq__68565_68881_seq__68565_68892__$1_temp__5823__auto___68891__$1$$), $G__68877_G__68895_c__5673__auto___68874_chunk__68566_68882_count__68551_68841_entry_68898_month_label_68880$$ = $G__68896_c__5673__auto___68893_count__68567_68883_entry_ms_68899_i__68552_68842$$, $G__68896_c__5673__auto___68893_count__68567_68883_entry_ms_68899_i__68552_68842$$ = $APP.$cljs$core$count$$($G__68896_c__5673__auto___68893_count__68567_68883_entry_ms_68899_i__68552_68842$$)) : 
                      ($G__68877_G__68895_c__5673__auto___68874_chunk__68566_68882_count__68551_68841_entry_68898_month_label_68880$$ = $APP.$cljs$core$first$$($G__68876_G__68894_chunk__68550_68840_group_68879_seq__68565_68881_seq__68565_68892__$1_temp__5823__auto___68891__$1$$), $G__68896_c__5673__auto___68893_count__68567_68883_entry_ms_68899_i__68552_68842$$ = $amp$components$elements$budget$cash_flow$date__GT_ms$$($amp$components$elements$budget$cash_flow$parse_date$$($cljs$cst$827$due$$.$cljs$core$IFn$_invoke$arity$1$($G__68877_G__68895_c__5673__auto___68874_chunk__68566_68882_count__68551_68841_entry_68898_month_label_68880$$))), 
                      $APP.$cljs$core$not$$($APP.$cljs$core$_deref$$($now_done$$)) && $G__68896_c__5673__auto___68893_count__68567_68883_entry_ms_68899_i__68552_68842$$ > $now_ms$$ && ($APP.$cljs$core$swap_BANG_$$.$cljs$core$IFn$_invoke$arity$3$($items$jscomp$9$$, $APP.$cljs$core$conj$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$25$type$$, $cljs$cst$900$now$$], null)), $APP.$cljs$core$reset_BANG_$$($now_done$$, !0)), $APP.$cljs$core$swap_BANG_$$.$cljs$core$IFn$_invoke$arity$3$($items$jscomp$9$$, 
                      $APP.$cljs$core$conj$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$25$type$$, $cljs$cst$895$entry$$, $cljs$cst$895$entry$$, $G__68877_G__68895_c__5673__auto___68874_chunk__68566_68882_count__68551_68841_entry_68898_month_label_68880$$, $APP.$cljs$cst$443$idx$$, $APP.$cljs$core$_deref$$($counter$$), $cljs$cst$901$past_QMARK_$$, $APP.$cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$($cljs$cst$830$paid$$, $APP.$cljs$cst$12$status$$.$cljs$core$IFn$_invoke$arity$1$($G__68877_G__68895_c__5673__auto___68874_chunk__68566_68882_count__68551_68841_entry_68898_month_label_68880$$))], 
                      null)), $APP.$cljs$core$swap_BANG_$$.$cljs$core$IFn$_invoke$arity$2$($counter$$, $APP.$cljs$core$inc$$), $G__68876_G__68894_chunk__68550_68840_group_68879_seq__68565_68881_seq__68565_68892__$1_temp__5823__auto___68891__$1$$ = $APP.$cljs$core$next$$($G__68876_G__68894_chunk__68550_68840_group_68879_seq__68565_68881_seq__68565_68892__$1_temp__5823__auto___68891__$1$$), $G__68877_G__68895_c__5673__auto___68874_chunk__68566_68882_count__68551_68841_entry_68898_month_label_68880$$ = 
                      null, $G__68896_c__5673__auto___68893_count__68567_68883_entry_ms_68899_i__68552_68842$$ = 0), $G__68858_group_68843_i__68568_68884_seq__68561_68845_seq__68561_68856__$1_temp__5823__auto___68855$$ = 0;
                    } else {
                      break;
                    }
                  }
                }
                $G__68875_seq__68549_68839_seq__68549_68873__$1_temp__5823__auto___68872$$ = $APP.$cljs$core$next$$($G__68875_seq__68549_68839_seq__68549_68873__$1_temp__5823__auto___68872$$);
                $G__68876_G__68894_chunk__68550_68840_group_68879_seq__68565_68881_seq__68565_68892__$1_temp__5823__auto___68891__$1$$ = null;
                $G__68877_G__68895_c__5673__auto___68874_chunk__68566_68882_count__68551_68841_entry_68898_month_label_68880$$ = 0;
              }
              $G__68896_c__5673__auto___68893_count__68567_68883_entry_ms_68899_i__68552_68842$$ = 0;
            } else {
              break;
            }
          }
        }
        $APP.$cljs$core$not$$($APP.$cljs$core$_deref$$($now_done$$)) && $APP.$cljs$core$swap_BANG_$$.$cljs$core$IFn$_invoke$arity$3$($items$jscomp$9$$, $APP.$cljs$core$conj$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$25$type$$, $cljs$cst$900$now$$], null));
        return $APP.$cljs$core$_deref$$($items$jscomp$9$$);
      }();
      $G__68570_map__68548__$1_sorted$jscomp$1$$ = function() {
        return {children:[function() {
          var $G__68574$$ = {entries:$entries_kw$$, "target-total":$target_total$jscomp$1$$, "funds-raised":$funds_raised$jscomp$1$$, "debt-raised":$debt_raised$jscomp$1$$};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$elements$budget$cash_flow$summary_header$$, $G__68574$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$elements$budget$cash_flow$summary_header$$, $G__68574$$);
        }(), function() {
          var $G__68578$$ = function() {
            return {"expanded?":$expanded_QMARK_$jscomp$3$$, "on-toggle":function() {
              return $set_expanded_BANG_$$.$cljs$core$IFn$_invoke$arity$1$ ? $set_expanded_BANG_$$.$cljs$core$IFn$_invoke$arity$1$($APP.$cljs$core$not$$) : $set_expanded_BANG_$$.call(null, $APP.$cljs$core$not$$);
            }};
          }();
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$elements$budget$cash_flow$view_toggle$$, $G__68578$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$elements$budget$cash_flow$view_toggle$$, $G__68578$$);
        }(), function() {
          var $G__68582$$ = function() {
            return {className:"relative", children:[function() {
              var $G__68586$$ = {className:$APP.$helix$impl$props$normalize_class$$("cf-spine absolute left-[13px] top-0 h-full origin-top border-l border-dashed " + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$("border-slate-200 dark:border-white/15"))};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__68586$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__68586$$);
            }(), $APP.$cljs$core$truth_$$($expanded_QMARK_$jscomp$3$$) ? $APP.$cljs$core$map_indexed$cljs$0core$0IFn$0_invoke$0arity$02$$(function($G__68592_G__68596_G__68602_i$jscomp$423$$, $G__68591_G__68601_item$jscomp$36$$) {
              var $G__68589_G__68589__$1$$ = $APP.$cljs$cst$25$type$$.$cljs$core$IFn$_invoke$arity$1$($G__68591_G__68601_item$jscomp$36$$);
              $G__68589_G__68589__$1$$ = $G__68589_G__68589__$1$$ instanceof $APP.$cljs$core$Keyword$$ ? $G__68589_G__68589__$1$$.$fqn$ : null;
              switch($G__68589_G__68589__$1$$) {
                case "month":
                  return $G__68591_G__68601_item$jscomp$36$$ = {label:$cljs$cst$812$label$$.$cljs$core$IFn$_invoke$arity$1$($G__68591_G__68601_item$jscomp$36$$), idx:$APP.$cljs$cst$443$idx$$.$cljs$core$IFn$_invoke$arity$1$($G__68591_G__68601_item$jscomp$36$$)}, $G__68592_G__68596_G__68602_i$jscomp$423$$ = "m-" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($G__68592_G__68596_G__68602_i$jscomp$423$$), $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$($amp$components$elements$budget$cash_flow$month_header$$, 
                  $G__68591_G__68601_item$jscomp$36$$, $G__68592_G__68596_G__68602_i$jscomp$423$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$elements$budget$cash_flow$month_header$$, $G__68591_G__68601_item$jscomp$36$$, $G__68592_G__68596_G__68602_i$jscomp$423$$);
                case "now":
                  return $G__68592_G__68596_G__68602_i$jscomp$423$$ = {}, $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$($amp$components$elements$budget$cash_flow$now_marker$$, $G__68592_G__68596_G__68602_i$jscomp$423$$, "now") : $APP.$helix$core$jsx$$.call(null, $amp$components$elements$budget$cash_flow$now_marker$$, $G__68592_G__68596_G__68602_i$jscomp$423$$, "now");
                case "entry":
                  return $G__68591_G__68601_item$jscomp$36$$ = {entry:$cljs$cst$895$entry$$.$cljs$core$IFn$_invoke$arity$1$($G__68591_G__68601_item$jscomp$36$$), idx:$APP.$cljs$cst$443$idx$$.$cljs$core$IFn$_invoke$arity$1$($G__68591_G__68601_item$jscomp$36$$), "is-past":$APP.$cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$($cljs$cst$830$paid$$, $APP.$cljs$cst$12$status$$.$cljs$core$IFn$_invoke$arity$1$($cljs$cst$895$entry$$.$cljs$core$IFn$_invoke$arity$1$($G__68591_G__68601_item$jscomp$36$$)))}, 
                  $G__68592_G__68596_G__68602_i$jscomp$423$$ = "e-" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($G__68592_G__68596_G__68602_i$jscomp$423$$), $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$($amp$components$elements$budget$cash_flow$timeline_node$$, $G__68591_G__68601_item$jscomp$36$$, $G__68592_G__68596_G__68602_i$jscomp$423$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$elements$budget$cash_flow$timeline_node$$, 
                  $G__68591_G__68601_item$jscomp$36$$, $G__68592_G__68596_G__68602_i$jscomp$423$$);
                default:
                  throw Error("No matching clause: " + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($G__68589_G__68589__$1$$));
              }
            }, $all_items$$) : function() {
              var $c__5673__auto___68922_rollups_seq__68605_68909_temp__5823__auto___68920_vec__68648_68927$$ = $amp$components$elements$budget$cash_flow$month_rollups$$($entries_kw$$), $now_done$jscomp$1$$ = $APP.$cljs$core$atom$cljs$0core$0IFn$0_invoke$0arity$01$$(!1), $out$jscomp$16$$ = $APP.$cljs$core$atom$cljs$0core$0IFn$0_invoke$0arity$01$$($APP.$cljs$core$PersistentVector$EMPTY$$);
              $c__5673__auto___68922_rollups_seq__68605_68909_temp__5823__auto___68920_vec__68648_68927$$ = $APP.$cljs$core$seq$$($APP.$cljs$core$map_indexed$cljs$0core$0IFn$0_invoke$0arity$02$$($APP.$cljs$core$vector$$, $c__5673__auto___68922_rollups_seq__68605_68909_temp__5823__auto___68920_vec__68648_68927$$));
              for (var $G__68924_chunk__68606_68910_seq__68605_68921__$1$$ = null, $G__68925_count__68607_68911$$ = 0, $G__68923_i__68608_68912$$ = 0;;) {
                if ($G__68923_i__68608_68912$$ < $G__68925_count__68607_68911$$) {
                  var $vec__68635_68913$$ = $G__68924_chunk__68606_68910_seq__68605_68921__$1$$.$cljs$core$IIndexed$_nth$arity$2$(null, $G__68923_i__68608_68912$$), $i_68914$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($vec__68635_68913$$, 0, null), $r_68915$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($vec__68635_68913$$, 1, null);
                  $APP.$cljs$core$truth_$$(function() {
                    var $and__5140__auto__$jscomp$91$$ = $APP.$cljs$core$not$$($APP.$cljs$core$_deref$$($now_done$jscomp$1$$));
                    return $and__5140__auto__$jscomp$91$$ ? $cljs$cst$893$has_now$$.$cljs$core$IFn$_invoke$arity$1$($r_68915$$) : $and__5140__auto__$jscomp$91$$;
                  }()) && ($APP.$cljs$core$swap_BANG_$$.$cljs$core$IFn$_invoke$arity$3$($out$jscomp$16$$, $APP.$cljs$core$conj$$, function() {
                    var $G__68639$$ = {};
                    return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$($amp$components$elements$budget$cash_flow$now_marker$$, $G__68639$$, "now-s") : $APP.$helix$core$jsx$$.call(null, $amp$components$elements$budget$cash_flow$now_marker$$, $G__68639$$, "now-s");
                  }()), $APP.$cljs$core$reset_BANG_$$($now_done$jscomp$1$$, !0));
                  $APP.$cljs$core$swap_BANG_$$.$cljs$core$IFn$_invoke$arity$3$($out$jscomp$16$$, $APP.$cljs$core$conj$$, function() {
                    var $G__68644$$ = {rollup:$r_68915$$, idx:$i_68914$$}, $G__68645$$ = "sr-" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($i_68914$$);
                    return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$($amp$components$elements$budget$cash_flow$month_summary_row$$, $G__68644$$, $G__68645$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$elements$budget$cash_flow$month_summary_row$$, $G__68644$$, $G__68645$$);
                  }());
                  $G__68923_i__68608_68912$$ += 1;
                } else {
                  if ($c__5673__auto___68922_rollups_seq__68605_68909_temp__5823__auto___68920_vec__68648_68927$$ = $APP.$cljs$core$seq$$($c__5673__auto___68922_rollups_seq__68605_68909_temp__5823__auto___68920_vec__68648_68927$$)) {
                    $G__68924_chunk__68606_68910_seq__68605_68921__$1$$ = $c__5673__auto___68922_rollups_seq__68605_68909_temp__5823__auto___68920_vec__68648_68927$$;
                    if ($APP.$cljs$core$chunked_seq_QMARK_$$($G__68924_chunk__68606_68910_seq__68605_68921__$1$$)) {
                      $c__5673__auto___68922_rollups_seq__68605_68909_temp__5823__auto___68920_vec__68648_68927$$ = $APP.$cljs$core$_chunked_first$$($G__68924_chunk__68606_68910_seq__68605_68921__$1$$), $G__68923_i__68608_68912$$ = $APP.$cljs$core$_chunked_rest$$($G__68924_chunk__68606_68910_seq__68605_68921__$1$$), $G__68924_chunk__68606_68910_seq__68605_68921__$1$$ = $c__5673__auto___68922_rollups_seq__68605_68909_temp__5823__auto___68920_vec__68648_68927$$, $G__68925_count__68607_68911$$ = $APP.$cljs$core$count$$($c__5673__auto___68922_rollups_seq__68605_68909_temp__5823__auto___68920_vec__68648_68927$$), 
                      $c__5673__auto___68922_rollups_seq__68605_68909_temp__5823__auto___68920_vec__68648_68927$$ = $G__68923_i__68608_68912$$;
                    } else {
                      $c__5673__auto___68922_rollups_seq__68605_68909_temp__5823__auto___68920_vec__68648_68927$$ = $APP.$cljs$core$first$$($G__68924_chunk__68606_68910_seq__68605_68921__$1$$);
                      var $i_68928$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($c__5673__auto___68922_rollups_seq__68605_68909_temp__5823__auto___68920_vec__68648_68927$$, 0, null), $r_68929$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($c__5673__auto___68922_rollups_seq__68605_68909_temp__5823__auto___68920_vec__68648_68927$$, 1, null);
                      $APP.$cljs$core$truth_$$(function() {
                        var $and__5140__auto__$jscomp$92$$ = $APP.$cljs$core$not$$($APP.$cljs$core$_deref$$($now_done$jscomp$1$$));
                        return $and__5140__auto__$jscomp$92$$ ? $cljs$cst$893$has_now$$.$cljs$core$IFn$_invoke$arity$1$($r_68929$$) : $and__5140__auto__$jscomp$92$$;
                      }()) && ($APP.$cljs$core$swap_BANG_$$.$cljs$core$IFn$_invoke$arity$3$($out$jscomp$16$$, $APP.$cljs$core$conj$$, function() {
                        var $G__68652$$ = {};
                        return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$($amp$components$elements$budget$cash_flow$now_marker$$, $G__68652$$, "now-s") : $APP.$helix$core$jsx$$.call(null, $amp$components$elements$budget$cash_flow$now_marker$$, $G__68652$$, "now-s");
                      }()), $APP.$cljs$core$reset_BANG_$$($now_done$jscomp$1$$, !0));
                      $APP.$cljs$core$swap_BANG_$$.$cljs$core$IFn$_invoke$arity$3$($out$jscomp$16$$, $APP.$cljs$core$conj$$, function() {
                        var $G__68657$$ = {rollup:$r_68929$$, idx:$i_68928$$}, $G__68658$$ = "sr-" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($i_68928$$);
                        return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$($amp$components$elements$budget$cash_flow$month_summary_row$$, $G__68657$$, $G__68658$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$elements$budget$cash_flow$month_summary_row$$, $G__68657$$, $G__68658$$);
                      }());
                      $c__5673__auto___68922_rollups_seq__68605_68909_temp__5823__auto___68920_vec__68648_68927$$ = $APP.$cljs$core$next$$($G__68924_chunk__68606_68910_seq__68605_68921__$1$$);
                      $G__68924_chunk__68606_68910_seq__68605_68921__$1$$ = null;
                      $G__68925_count__68607_68911$$ = 0;
                    }
                    $G__68923_i__68608_68912$$ = 0;
                  } else {
                    break;
                  }
                }
              }
              $APP.$cljs$core$not$$($APP.$cljs$core$_deref$$($now_done$jscomp$1$$)) && $APP.$cljs$core$swap_BANG_$$.$cljs$core$IFn$_invoke$arity$3$($out$jscomp$16$$, $APP.$cljs$core$conj$$, function() {
                var $G__68662$$ = {};
                return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$($amp$components$elements$budget$cash_flow$now_marker$$, $G__68662$$, "now-s") : $APP.$helix$core$jsx$$.call(null, $amp$components$elements$budget$cash_flow$now_marker$$, $G__68662$$, "now-s");
              }());
              return $APP.$cljs$core$_deref$$($out$jscomp$16$$);
            }()]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__68582$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__68582$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__68570_map__68548__$1_sorted$jscomp$1$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__68570_map__68548__$1_sorted$jscomp$1$$);
    }()};
  }();
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__68530_68818_G__68533_map__68523_map__68523__$1_props__41640__auto__$jscomp$75_vec__68520_vec__68524_vec__68527$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__68530_68818_G__68533_map__68523_map__68523__$1_props__41640__auto__$jscomp$75_vec__68520_vec__68524_vec__68527$$);
};
$amp$components$elements$budget$non_profit$non_profit$$ = function($G__67208$jscomp$1_map__67194_map__67194__$1_props__41634__auto__$jscomp$24_vec__67191$$, $maybe_ref__41635__auto__$jscomp$24$$) {
  $G__67208$jscomp$1_map__67194_map__67194__$1_props__41634__auto__$jscomp$24_vec__67191$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__67208$jscomp$1_map__67194_map__67194__$1_props__41634__auto__$jscomp$24_vec__67191$$), $maybe_ref__41635__auto__$jscomp$24$$], null);
  $G__67208$jscomp$1_map__67194_map__67194__$1_props__41634__auto__$jscomp$24_vec__67191$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__67208$jscomp$1_map__67194_map__67194__$1_props__41634__auto__$jscomp$24_vec__67191$$, 0, null);
  $G__67208$jscomp$1_map__67194_map__67194__$1_props__41634__auto__$jscomp$24_vec__67191$$ = $APP.$cljs$core$__destructure_map$$($G__67208$jscomp$1_map__67194_map__67194__$1_props__41634__auto__$jscomp$24_vec__67191$$);
  var $id$jscomp$90$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__67208$jscomp$1_map__67194_map__67194__$1_props__41634__auto__$jscomp$24_vec__67191$$, $APP.$cljs$cst$200$id$$), $subtitle$jscomp$7$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__67208$jscomp$1_map__67194_map__67194__$1_props__41634__auto__$jscomp$24_vec__67191$$, $APP.$cljs$cst$727$subtitle$$), $title$jscomp$31$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__67208$jscomp$1_map__67194_map__67194__$1_props__41634__auto__$jscomp$24_vec__67191$$, 
  $APP.$cljs$cst$381$title$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $field_label$$ = $APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-semibold", "text-slate-600  dark:text-slate-400"])), $field_value$$ = $APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["text-right", "font-bold", "text-indigo-600 dark:text-indigo-300", "tracking-wide"]));
  $G__67208$jscomp$1_map__67194_map__67194__$1_props__41634__auto__$jscomp$24_vec__67191$$ = function() {
    return {id:$id$jscomp$90$$, children:function() {
      var $G__67216$jscomp$1$$ = function() {
        return {idx:8, eyebrow:$subtitle$jscomp$7$$, title:$title$jscomp$31$$, children:function() {
          var $G__67222$$ = function() {
            return {className:"space-y-8 p-4", children:[function() {
              var $G__67230$$ = function() {
                return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["text-slate-700  dark:text-slate-300", "mb-12"]))), children:[function() {
                  var $G__67238$$ = function() {
                    return {children:["The Armenia Pavilion 2026 is supported through ", function() {
                      var $G__67246$$ = {className:$APP.$helix$impl$props$normalize_class$$("font-semibold"), children:"Fallen Angels Inc."};
                      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__67246$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__67246$$);
                    }(), ", a registered ", function() {
                      var $G__67250$$ = {className:$APP.$helix$impl$props$normalize_class$$("font-semibold"), children:"501(c)(3)"};
                      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__67250$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__67250$$);
                    }(), " public non-profit organization. ", function() {
                      var $G__67261$$ = {className:$APP.$helix$impl$props$normalize_class$$("font-semibold"), children:"Contributions are tax deductible"};
                      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__67261$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__67261$$);
                    }(), " to the extent permitted by law."]};
                  }();
                  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__67238$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__67238$$);
                }(), function() {
                  var $G__67269$$ = function() {
                    return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-mono", "text-sm", "mt-6 space-y-1"]))), children:[function() {
                      var $G__67277_G__67285$jscomp$inline_3856$$ = {className:$APP.$helix$impl$props$normalize_class$$($field_label$$), children:"Organization: "};
                      $G__67277_G__67285$jscomp$inline_3856$$ = {children:[$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__67277_G__67285$jscomp$inline_3856$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__67277_G__67285$jscomp$inline_3856$$), "Fallen Angels Inc."]};
                      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__67277_G__67285$jscomp$inline_3856$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__67277_G__67285$jscomp$inline_3856$$);
                    }(), function() {
                      var $G__67293$$ = function() {
                        return {children:[function() {
                          var $G__67297$$ = {className:$APP.$helix$impl$props$normalize_class$$($field_label$$), children:"EIN: "};
                          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__67297$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__67297$$);
                        }(), function() {
                          var $G__67307$jscomp$1$$ = {className:$APP.$helix$impl$props$normalize_class$$($field_value$$), children:"92-2395513"};
                          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__67307$jscomp$1$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__67307$jscomp$1$$);
                        }()]};
                      }();
                      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__67293$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__67293$$);
                    }(), function() {
                      var $G__67317$$ = function() {
                        return {children:[function() {
                          var $G__67324$$ = {className:$APP.$helix$impl$props$normalize_class$$($field_label$$), children:"Located in: "};
                          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__67324$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__67324$$);
                        }(), function() {
                          var $G__67338$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_bold$$), children:"Los Angeles, CA"};
                          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__67338$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__67338$$);
                        }()]};
                      }();
                      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__67317$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__67317$$);
                    }()]};
                  }();
                  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__67269$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__67269$$);
                }(), function() {
                  var $G__67348$jscomp$1$$ = function() {
                    return {className:"mt-10 grid grid-cols-1 lg:grid-cols-2 gap-10", children:[function() {
                      var $G__67356$$ = function() {
                        return {children:[function() {
                          var $G__67362_JSCompiler_temp_const$jscomp$inline_3858$$ = $APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$heading_section$$, "text-slate-900  dark:text-slate-100", "mb-4"])));
                          var $G__67368$jscomp$inline_3860_JSCompiler_inline_result$jscomp$inline_3859$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-normal", "text-slate-600  dark:text-slate-400"]))), children:"Transfers"};
                          $G__67368$jscomp$inline_3860_JSCompiler_inline_result$jscomp$inline_3859$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__67368$jscomp$inline_3860_JSCompiler_inline_result$jscomp$inline_3859$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__67368$jscomp$inline_3860_JSCompiler_inline_result$jscomp$inline_3859$$);
                          $G__67362_JSCompiler_temp_const$jscomp$inline_3858$$ = {className:$G__67362_JSCompiler_temp_const$jscomp$inline_3858$$, children:["Domestic ", $G__67368$jscomp$inline_3860_JSCompiler_inline_result$jscomp$inline_3859$$]};
                          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__67362_JSCompiler_temp_const$jscomp$inline_3858$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__67362_JSCompiler_temp_const$jscomp$inline_3858$$);
                        }(), function() {
                          var $G__67382$$ = function() {
                            return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-mono", "text-sm", "space-y-3"]))), children:[function() {
                              var $G__67388$$ = function() {
                                return {className:"flex items-baseline justify-between gap-6", children:[function() {
                                  var $G__67394$jscomp$1$$ = {className:$APP.$helix$impl$props$normalize_class$$($field_label$$), children:"Name:"};
                                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__67394$jscomp$1$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__67394$jscomp$1$$);
                                }(), function() {
                                  var $G__67402$$ = {className:"text-right", children:"Fallen Angels Inc."};
                                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__67402$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__67402$$);
                                }()]};
                              }();
                              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__67388$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__67388$$);
                            }(), function() {
                              var $G__67412$$ = function() {
                                return {className:"flex items-baseline justify-between gap-6", children:[function() {
                                  var $G__67418$jscomp$1$$ = {className:$APP.$helix$impl$props$normalize_class$$($field_label$$), children:"Routing:"};
                                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__67418$jscomp$1$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__67418$jscomp$1$$);
                                }(), function() {
                                  var $G__67426$$ = {className:$APP.$helix$impl$props$normalize_class$$($field_value$$), children:"091311229"};
                                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__67426$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__67426$$);
                                }()]};
                              }();
                              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__67412$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__67412$$);
                            }(), function() {
                              var $G__67436$jscomp$1$$ = function() {
                                return {className:"flex items-baseline justify-between gap-6", children:[function() {
                                  var $G__67442$$ = {className:$APP.$helix$impl$props$normalize_class$$($field_label$$), children:"Account #:"};
                                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__67442$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__67442$$);
                                }(), function() {
                                  var $G__67450$jscomp$1$$ = {className:$APP.$helix$impl$props$normalize_class$$($field_value$$), children:"202535309341"};
                                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__67450$jscomp$1$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__67450$jscomp$1$$);
                                }()]};
                              }();
                              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__67436$jscomp$1$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__67436$jscomp$1$$);
                            }(), function() {
                              var $G__67458$jscomp$1$$ = function() {
                                return {className:"flex items-start justify-between gap-6", children:[function() {
                                  var $G__67510$jscomp$1$$ = {className:$APP.$helix$impl$props$normalize_class$$($field_label$$), children:"Address:"};
                                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__67510$jscomp$1$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__67510$jscomp$1$$);
                                }(), function() {
                                  var $G__67531$$ = function() {
                                    return {className:"text-right leading-snug", children:[function() {
                                      var $G__67543$$ = {children:"Choice Financial Group"};
                                      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__67543$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__67543$$);
                                    }(), function() {
                                      var $G__67560$$ = {children:"4501 23rd Avenue S"};
                                      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__67560$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__67560$$);
                                    }(), function() {
                                      var $G__67577$jscomp$1$$ = {children:"Fargo, ND 58104"};
                                      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__67577$jscomp$1$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__67577$jscomp$1$$);
                                    }()]};
                                  }();
                                  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__67531$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__67531$$);
                                }()]};
                              }();
                              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__67458$jscomp$1$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__67458$jscomp$1$$);
                            }()]};
                          }();
                          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__67382$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__67382$$);
                        }()]};
                      }();
                      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__67356$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__67356$$);
                    }(), function() {
                      var $G__67616$$ = function() {
                        return {children:[function() {
                          var $G__67632$jscomp$1_JSCompiler_temp_const$jscomp$inline_3862$$ = $APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$heading_section$$, "text-slate-900  dark:text-slate-100", "mb-4"])));
                          var $G__67648$jscomp$inline_3864_JSCompiler_inline_result$jscomp$inline_3863$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-normal", "text-slate-600  dark:text-slate-400"]))), children:"Transfers"};
                          $G__67648$jscomp$inline_3864_JSCompiler_inline_result$jscomp$inline_3863$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__67648$jscomp$inline_3864_JSCompiler_inline_result$jscomp$inline_3863$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__67648$jscomp$inline_3864_JSCompiler_inline_result$jscomp$inline_3863$$);
                          $G__67632$jscomp$1_JSCompiler_temp_const$jscomp$inline_3862$$ = {className:$G__67632$jscomp$1_JSCompiler_temp_const$jscomp$inline_3862$$, children:["International ", $G__67648$jscomp$inline_3864_JSCompiler_inline_result$jscomp$inline_3863$$]};
                          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__67632$jscomp$1_JSCompiler_temp_const$jscomp$inline_3862$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__67632$jscomp$1_JSCompiler_temp_const$jscomp$inline_3862$$);
                        }(), function() {
                          var $G__67661$$ = function() {
                            return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-mono", "text-sm", "space-y-3"]))), children:[function() {
                              var $G__67673$$ = function() {
                                return {className:"flex items-baseline justify-between gap-6", children:[function() {
                                  var $G__67683$jscomp$1$$ = {className:$APP.$helix$impl$props$normalize_class$$($field_label$$), children:"Name:"};
                                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__67683$jscomp$1$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__67683$jscomp$1$$);
                                }(), function() {
                                  var $G__67691$jscomp$1$$ = {className:"text-right", children:"Fallen Angels Inc."};
                                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__67691$jscomp$1$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__67691$jscomp$1$$);
                                }()]};
                              }();
                              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__67673$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__67673$$);
                            }(), function() {
                              var $G__67700$$ = function() {
                                return {className:"flex items-baseline justify-between gap-6", children:[function() {
                                  var $G__67707$$ = {className:$APP.$helix$impl$props$normalize_class$$($field_label$$), children:"SWIFT/BIC:"};
                                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__67707$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__67707$$);
                                }(), function() {
                                  var $G__67717$$ = {className:$APP.$helix$impl$props$normalize_class$$($field_value$$), children:"CHFGUS44021"};
                                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__67717$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__67717$$);
                                }()]};
                              }();
                              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__67700$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__67700$$);
                            }(), function() {
                              var $G__67729$$ = function() {
                                return {className:"flex items-baseline justify-between gap-6", children:[function() {
                                  var $G__67736$$ = {className:$APP.$helix$impl$props$normalize_class$$($field_label$$), children:"ABA/Routing:"};
                                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__67736$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__67736$$);
                                }(), function() {
                                  var $G__67745$$ = {className:$APP.$helix$impl$props$normalize_class$$($field_value$$), children:"091311229"};
                                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__67745$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__67745$$);
                                }()]};
                              }();
                              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__67729$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__67729$$);
                            }(), function() {
                              var $G__67763$jscomp$1$$ = function() {
                                return {className:"flex items-baseline justify-between gap-6", children:[function() {
                                  var $G__67767$$ = {className:$APP.$helix$impl$props$normalize_class$$($field_label$$), children:"IBAN/Account #:"};
                                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__67767$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__67767$$);
                                }(), function() {
                                  var $G__67776$jscomp$1$$ = {className:$APP.$helix$impl$props$normalize_class$$($field_value$$), children:"202535309341"};
                                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__67776$jscomp$1$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__67776$jscomp$1$$);
                                }()]};
                              }();
                              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__67763$jscomp$1$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__67763$jscomp$1$$);
                            }(), function() {
                              var $G__67784$jscomp$1$$ = function() {
                                return {className:"flex items-start justify-between gap-6", children:[function() {
                                  var $G__67790$$ = {className:$APP.$helix$impl$props$normalize_class$$($field_label$$), children:"Address:"};
                                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__67790$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__67790$$);
                                }(), function() {
                                  var $G__67794$$ = function() {
                                    return {className:"text-right leading-snug", children:[function() {
                                      var $G__67801$$ = {children:"Choice Financial Group"};
                                      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__67801$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__67801$$);
                                    }(), function() {
                                      var $G__67811$jscomp$1$$ = {children:"4501 23rd Avenue S"};
                                      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__67811$jscomp$1$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__67811$jscomp$1$$);
                                    }(), function() {
                                      var $G__67817$jscomp$1$$ = {children:"Fargo, ND 58104"};
                                      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__67817$jscomp$1$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__67817$jscomp$1$$);
                                    }()]};
                                  }();
                                  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__67794$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__67794$$);
                                }()]};
                              }();
                              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__67784$jscomp$1$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__67784$jscomp$1$$);
                            }()]};
                          }();
                          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__67661$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__67661$$);
                        }()]};
                      }();
                      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__67616$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__67616$$);
                    }()]};
                  }();
                  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__67348$jscomp$1$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__67348$jscomp$1$$);
                }()]};
              }();
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__67230$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__67230$$);
            }(), function() {
              var $G__67828$jscomp$1$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["text-slate-600  dark:text-slate-400", "p-4 mt-10 text-sm md:text-base"]))), children:"If you would like a receipt letter for your records, please include your name and email address with the transfer memo."};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__67828$jscomp$1$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__67828$jscomp$1$$);
            }()]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__67222$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__67222$$);
        }()};
      }();
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$components$elements$budget$section_block$section_block$$, $G__67216$jscomp$1$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$components$elements$budget$section_block$section_block$$, $G__67216$jscomp$1$$);
    }()};
  }();
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__67208$jscomp$1_map__67194_map__67194__$1_props__41634__auto__$jscomp$24_vec__67191$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__67208$jscomp$1_map__67194_map__67194__$1_props__41634__auto__$jscomp$24_vec__67191$$);
};
$amp$components$elements$budget$sponsors$logo_card$$ = function($G__67610$jscomp$1_G__67628$jscomp$inline_4042_map__67574_name$jscomp$203_props__41634__auto__$jscomp$25_vec__67569$$, $logo_map__67574__$1_maybe_ref__41635__auto__$jscomp$25$$) {
  $G__67610$jscomp$1_G__67628$jscomp$inline_4042_map__67574_name$jscomp$203_props__41634__auto__$jscomp$25_vec__67569$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__67610$jscomp$1_G__67628$jscomp$inline_4042_map__67574_name$jscomp$203_props__41634__auto__$jscomp$25_vec__67569$$), $logo_map__67574__$1_maybe_ref__41635__auto__$jscomp$25$$], null);
  $G__67610$jscomp$1_G__67628$jscomp$inline_4042_map__67574_name$jscomp$203_props__41634__auto__$jscomp$25_vec__67569$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__67610$jscomp$1_G__67628$jscomp$inline_4042_map__67574_name$jscomp$203_props__41634__auto__$jscomp$25_vec__67569$$, 0, null);
  $logo_map__67574__$1_maybe_ref__41635__auto__$jscomp$25$$ = $APP.$cljs$core$__destructure_map$$($G__67610$jscomp$1_G__67628$jscomp$inline_4042_map__67574_name$jscomp$203_props__41634__auto__$jscomp$25_vec__67569$$);
  $G__67610$jscomp$1_G__67628$jscomp$inline_4042_map__67574_name$jscomp$203_props__41634__auto__$jscomp$25_vec__67569$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($logo_map__67574__$1_maybe_ref__41635__auto__$jscomp$25$$, $APP.$cljs$cst$191$name$$);
  $logo_map__67574__$1_maybe_ref__41635__auto__$jscomp$25$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($logo_map__67574__$1_maybe_ref__41635__auto__$jscomp$25$$, $cljs$cst$904$logo$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__67610$jscomp$1_G__67628$jscomp$inline_4042_map__67574_name$jscomp$203_props__41634__auto__$jscomp$25_vec__67569$$ = {src:$logo_map__67574__$1_maybe_ref__41635__auto__$jscomp$25$$, alt:$G__67610$jscomp$1_G__67628$jscomp$inline_4042_map__67574_name$jscomp$203_props__41634__auto__$jscomp$25_vec__67569$$, style:{height:$APP.$helix$impl$props$__GT_js$$("4rem"), width:$APP.$helix$impl$props$__GT_js$$("auto")}, className:" transition-all duration-500\n                         \n                         drop-shadow-[0_0_12px_rgba(249,168,212,0)] group-hover:drop-shadow-[0_0_20px_rgba(249,168,212,0.15)]"};
  $G__67610$jscomp$1_G__67628$jscomp$inline_4042_map__67574_name$jscomp$203_props__41634__auto__$jscomp$25_vec__67569$$ = {className:"group py-6 px-8 transition-all duration-500 ease-out", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("img", $G__67610$jscomp$1_G__67628$jscomp$inline_4042_map__67574_name$jscomp$203_props__41634__auto__$jscomp$25_vec__67569$$) : $APP.$helix$core$jsx$$.call(null, "img", $G__67610$jscomp$1_G__67628$jscomp$inline_4042_map__67574_name$jscomp$203_props__41634__auto__$jscomp$25_vec__67569$$)};
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__67610$jscomp$1_G__67628$jscomp$inline_4042_map__67574_name$jscomp$203_props__41634__auto__$jscomp$25_vec__67569$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__67610$jscomp$1_G__67628$jscomp$inline_4042_map__67574_name$jscomp$203_props__41634__auto__$jscomp$25_vec__67569$$);
};
$amp$components$elements$budget$sponsors$name_item$$ = function($G__67797$jscomp$1_map__67757_name$jscomp$204_props__41634__auto__$jscomp$26_vec__67754$$, $accent_map__67757__$1_maybe_ref__41635__auto__$jscomp$26$$) {
  $G__67797$jscomp$1_map__67757_name$jscomp$204_props__41634__auto__$jscomp$26_vec__67754$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__67797$jscomp$1_map__67757_name$jscomp$204_props__41634__auto__$jscomp$26_vec__67754$$), $accent_map__67757__$1_maybe_ref__41635__auto__$jscomp$26$$], null);
  $G__67797$jscomp$1_map__67757_name$jscomp$204_props__41634__auto__$jscomp$26_vec__67754$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__67797$jscomp$1_map__67757_name$jscomp$204_props__41634__auto__$jscomp$26_vec__67754$$, 0, null);
  $accent_map__67757__$1_maybe_ref__41635__auto__$jscomp$26$$ = $APP.$cljs$core$__destructure_map$$($G__67797$jscomp$1_map__67757_name$jscomp$204_props__41634__auto__$jscomp$26_vec__67754$$);
  $G__67797$jscomp$1_map__67757_name$jscomp$204_props__41634__auto__$jscomp$26_vec__67754$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($accent_map__67757__$1_maybe_ref__41635__auto__$jscomp$26$$, $APP.$cljs$cst$191$name$$);
  $accent_map__67757__$1_maybe_ref__41635__auto__$jscomp$26$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($accent_map__67757__$1_maybe_ref__41635__auto__$jscomp$26$$, $cljs$cst$908$accent$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__67797$jscomp$1_map__67757_name$jscomp$204_props__41634__auto__$jscomp$26_vec__67754$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-mono", "text-sm", "tracking-wide", $accent_map__67757__$1_maybe_ref__41635__auto__$jscomp$26$$]))), children:$G__67797$jscomp$1_map__67757_name$jscomp$204_props__41634__auto__$jscomp$26_vec__67754$$};
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__67797$jscomp$1_map__67757_name$jscomp$204_props__41634__auto__$jscomp$26_vec__67754$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__67797$jscomp$1_map__67757_name$jscomp$204_props__41634__auto__$jscomp$26_vec__67754$$);
};
$amp$components$elements$budget$sponsors$tier_section$$ = function($G__67857_map__67853_map__67853__$1_members$jscomp$1_props__41634__auto__$jscomp$27_vec__67850$$, $map__67855_map__67855__$1_maybe_ref__41635__auto__$jscomp$27_tier$$) {
  $G__67857_map__67853_map__67853__$1_members$jscomp$1_props__41634__auto__$jscomp$27_vec__67850$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__67857_map__67853_map__67853__$1_members$jscomp$1_props__41634__auto__$jscomp$27_vec__67850$$), $map__67855_map__67855__$1_maybe_ref__41635__auto__$jscomp$27_tier$$], null);
  $G__67857_map__67853_map__67853__$1_members$jscomp$1_props__41634__auto__$jscomp$27_vec__67850$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__67857_map__67853_map__67853__$1_members$jscomp$1_props__41634__auto__$jscomp$27_vec__67850$$, 0, null);
  $G__67857_map__67853_map__67853__$1_members$jscomp$1_props__41634__auto__$jscomp$27_vec__67850$$ = $APP.$cljs$core$__destructure_map$$($G__67857_map__67853_map__67853__$1_members$jscomp$1_props__41634__auto__$jscomp$27_vec__67850$$);
  $map__67855_map__67855__$1_maybe_ref__41635__auto__$jscomp$27_tier$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__67857_map__67853_map__67853__$1_members$jscomp$1_props__41634__auto__$jscomp$27_vec__67850$$, $cljs$cst$902$tier$$);
  $G__67857_map__67853_map__67853__$1_members$jscomp$1_props__41634__auto__$jscomp$27_vec__67850$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__67857_map__67853_map__67853__$1_members$jscomp$1_props__41634__auto__$jscomp$27_vec__67850$$, $cljs$cst$912$members$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $map__67855_map__67855__$1_maybe_ref__41635__auto__$jscomp$27_tier$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($amp$components$elements$budget$sponsors$tier_meta$$, $map__67855_map__67855__$1_maybe_ref__41635__auto__$jscomp$27_tier$$);
  $map__67855_map__67855__$1_maybe_ref__41635__auto__$jscomp$27_tier$$ = $APP.$cljs$core$__destructure_map$$($map__67855_map__67855__$1_maybe_ref__41635__auto__$jscomp$27_tier$$);
  var $label$jscomp$12$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__67855_map__67855__$1_maybe_ref__41635__auto__$jscomp$27_tier$$, $cljs$cst$812$label$$), $accent$jscomp$1$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__67855_map__67855__$1_maybe_ref__41635__auto__$jscomp$27_tier$$, $cljs$cst$908$accent$$), $border$jscomp$6$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__67855_map__67855__$1_maybe_ref__41635__auto__$jscomp$27_tier$$, $APP.$cljs$cst$407$border$$), 
  $with_logos$$ = $APP.$cljs$core$filter$cljs$0core$0IFn$0_invoke$0arity$02$$($cljs$cst$904$logo$$, $G__67857_map__67853_map__67853__$1_members$jscomp$1_props__41634__auto__$jscomp$27_vec__67850$$), $without_logos$$ = $APP.$cljs$core$remove$cljs$0core$0IFn$0_invoke$0arity$02$$($cljs$cst$904$logo$$, $G__67857_map__67853_map__67853__$1_members$jscomp$1_props__41634__auto__$jscomp$27_vec__67850$$);
  $G__67857_map__67853_map__67853__$1_members$jscomp$1_props__41634__auto__$jscomp$27_vec__67850$$ = function() {
    return {className:"mb-12", children:[function() {
      var $G__67861$jscomp$1_G__67866$jscomp$inline_3869$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-mono", "text-xl", "font-bold", "uppercase", "tracking-[0.15em]", $accent$jscomp$1$$]))), children:$label$jscomp$12$$};
      $G__67861$jscomp$1_G__67866$jscomp$inline_3869$$ = {className:"flex items-center gap-3 mb", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__67861$jscomp$1_G__67866$jscomp$inline_3869$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__67861$jscomp$1_G__67866$jscomp$inline_3869$$)};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__67861$jscomp$1_G__67866$jscomp$inline_3869$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__67861$jscomp$1_G__67866$jscomp$inline_3869$$);
    }(), $APP.$cljs$core$seq$$($with_logos$$) ? function() {
      var $G__67898$jscomp$1$$ = function() {
        return {className:"mb-4 flex flex-col items-center", children:$APP.$cljs$core$map$$.$cljs$core$IFn$_invoke$arity$2$(function($name$jscomp$205_p__67908$$) {
          var $G__67922$jscomp$1_logo$jscomp$1_map__67910__$1$$ = $APP.$cljs$core$__destructure_map$$($name$jscomp$205_p__67908$$);
          $name$jscomp$205_p__67908$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__67922$jscomp$1_logo$jscomp$1_map__67910__$1$$, $APP.$cljs$cst$191$name$$);
          $G__67922$jscomp$1_logo$jscomp$1_map__67910__$1$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__67922$jscomp$1_logo$jscomp$1_map__67910__$1$$, $cljs$cst$904$logo$$);
          $G__67922$jscomp$1_logo$jscomp$1_map__67910__$1$$ = {name:$name$jscomp$205_p__67908$$, logo:$G__67922$jscomp$1_logo$jscomp$1_map__67910__$1$$};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$($amp$components$elements$budget$sponsors$logo_card$$, $G__67922$jscomp$1_logo$jscomp$1_map__67910__$1$$, $name$jscomp$205_p__67908$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$elements$budget$sponsors$logo_card$$, $G__67922$jscomp$1_logo$jscomp$1_map__67910__$1$$, $name$jscomp$205_p__67908$$);
        }, $with_logos$$)};
      }();
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__67898$jscomp$1$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__67898$jscomp$1$$);
    }() : null, $APP.$cljs$core$seq$$($without_logos$$) ? function() {
      var $G__67943$$ = function() {
        return {className:"flex flex-wrap gap-x-6 gap-y-2", children:$APP.$cljs$core$map$$.$cljs$core$IFn$_invoke$arity$2$(function($map__67961__$1_name$jscomp$206_p__67952$$) {
          $map__67961__$1_name$jscomp$206_p__67952$$ = $APP.$cljs$core$__destructure_map$$($map__67961__$1_name$jscomp$206_p__67952$$);
          $map__67961__$1_name$jscomp$206_p__67952$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__67961__$1_name$jscomp$206_p__67952$$, $APP.$cljs$cst$191$name$$);
          var $G__67969_JSCompiler_temp_const$jscomp$inline_3871$$ = $APP.$helix$impl$props$normalize_class$$("border-l-2 pl-3 py-1 " + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($border$jscomp$6$$));
          var $G__67980$jscomp$inline_3873_JSCompiler_inline_result$jscomp$inline_3872$$ = {name:$map__67961__$1_name$jscomp$206_p__67952$$, accent:$accent$jscomp$1$$};
          $G__67980$jscomp$inline_3873_JSCompiler_inline_result$jscomp$inline_3872$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$elements$budget$sponsors$name_item$$, $G__67980$jscomp$inline_3873_JSCompiler_inline_result$jscomp$inline_3872$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$elements$budget$sponsors$name_item$$, $G__67980$jscomp$inline_3873_JSCompiler_inline_result$jscomp$inline_3872$$);
          $G__67969_JSCompiler_temp_const$jscomp$inline_3871$$ = {className:$G__67969_JSCompiler_temp_const$jscomp$inline_3871$$, children:$G__67980$jscomp$inline_3873_JSCompiler_inline_result$jscomp$inline_3872$$};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$("div", $G__67969_JSCompiler_temp_const$jscomp$inline_3871$$, $map__67961__$1_name$jscomp$206_p__67952$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__67969_JSCompiler_temp_const$jscomp$inline_3871$$, $map__67961__$1_name$jscomp$206_p__67952$$);
        }, $without_logos$$)};
      }();
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__67943$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__67943$$);
    }() : null]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__67857_map__67853_map__67853__$1_members$jscomp$1_props__41634__auto__$jscomp$27_vec__67850$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__67857_map__67853_map__67853__$1_members$jscomp$1_props__41634__auto__$jscomp$27_vec__67850$$);
};
$amp$components$elements$budget$sponsors$sponsors_section$$ = function($G__68156_map__68034_map__68034__$1_props__41634__auto__$jscomp$28_vec__68029$$, $maybe_ref__41635__auto__$jscomp$28$$) {
  $G__68156_map__68034_map__68034__$1_props__41634__auto__$jscomp$28_vec__68029$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__68156_map__68034_map__68034__$1_props__41634__auto__$jscomp$28_vec__68029$$), $maybe_ref__41635__auto__$jscomp$28$$], null);
  $G__68156_map__68034_map__68034__$1_props__41634__auto__$jscomp$28_vec__68029$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__68156_map__68034_map__68034__$1_props__41634__auto__$jscomp$28_vec__68029$$, 0, null);
  $G__68156_map__68034_map__68034__$1_props__41634__auto__$jscomp$28_vec__68029$$ = $APP.$cljs$core$__destructure_map$$($G__68156_map__68034_map__68034__$1_props__41634__auto__$jscomp$28_vec__68029$$);
  var $id$jscomp$91$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__68156_map__68034_map__68034__$1_props__41634__auto__$jscomp$28_vec__68029$$, $APP.$cljs$cst$200$id$$), $subtitle$jscomp$8$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__68156_map__68034_map__68034__$1_props__41634__auto__$jscomp$28_vec__68029$$, $APP.$cljs$cst$727$subtitle$$), $title$jscomp$32$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__68156_map__68034_map__68034__$1_props__41634__auto__$jscomp$28_vec__68029$$, 
  $APP.$cljs$cst$381$title$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $grouped$jscomp$1$$ = $APP.$cljs$core$sort_by$cljs$0core$0IFn$0_invoke$0arity$02$$(function($p__68107$$) {
    var $tier$jscomp$1$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($p__68107$$, 0, null);
    $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($p__68107$$, 1, null);
    return $cljs$cst$909$order$$.$cljs$core$IFn$_invoke$arity$1$($APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($amp$components$elements$budget$sponsors$tier_meta$$, $tier$jscomp$1$$));
  }, $APP.$cljs$core$group_by$$($cljs$cst$902$tier$$, $amp$components$elements$budget$sponsors$sponsors$$));
  $G__68156_map__68034_map__68034__$1_props__41634__auto__$jscomp$28_vec__68029$$ = function() {
    return {id:$id$jscomp$91$$, children:function() {
      var $G__68182$jscomp$1$$ = function() {
        return {idx:6, eyebrow:$subtitle$jscomp$8$$, title:$title$jscomp$32$$, children:function() {
          var $G__68200$jscomp$1$$ = function() {
            return {className:"p-4 mt-6 space-y-2", children:[function() {
              var $G__68210$$ = function() {
                return {className:"mb-12", children:[function() {
                  var $G__68214$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["text-slate-700  dark:text-slate-300", "mb-8"]))), children:"At present the Armenia Pavilion 2026 "};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__68214$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__68214$$);
                }(), function() {
                  var $G__68218$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["text-rose-600   dark:text-rose-400"]))), children:"is only made possible"};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__68218$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__68218$$);
                }(), function() {
                  var $G__68222$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["text-slate-700  dark:text-slate-300", "mb-8"]))), children:" through the generosity of foundations, families, and individuals committed to helping sustaining Armenia's cultural presence on the international stage."};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__68222$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__68222$$);
                }()]};
              }();
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__68210$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__68210$$);
            }(), $APP.$cljs$core$map$$.$cljs$core$IFn$_invoke$arity$2$(function($G__68236_members$jscomp$2_p__68229$$) {
              var $G__68237_tier$jscomp$2$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__68236_members$jscomp$2_p__68229$$, 0, null);
              $G__68236_members$jscomp$2_p__68229$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__68236_members$jscomp$2_p__68229$$, 1, null);
              $G__68236_members$jscomp$2_p__68229$$ = {tier:$G__68237_tier$jscomp$2$$, members:$G__68236_members$jscomp$2_p__68229$$};
              $G__68237_tier$jscomp$2$$ = $APP.$cljs$core$name$$($G__68237_tier$jscomp$2$$);
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$($amp$components$elements$budget$sponsors$tier_section$$, $G__68236_members$jscomp$2_p__68229$$, $G__68237_tier$jscomp$2$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$elements$budget$sponsors$tier_section$$, $G__68236_members$jscomp$2_p__68229$$, $G__68237_tier$jscomp$2$$);
            }, $grouped$jscomp$1$$)]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__68200$jscomp$1$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__68200$jscomp$1$$);
        }()};
      }();
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$components$elements$budget$section_block$section_block$$, $G__68182$jscomp$1$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$components$elements$budget$section_block$section_block$$, $G__68182$jscomp$1$$);
    }()};
  }();
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__68156_map__68034_map__68034__$1_props__41634__auto__$jscomp$28_vec__68029$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__68156_map__68034_map__68034__$1_props__41634__auto__$jscomp$28_vec__68029$$);
};
$amp$components$elements$budget$why_support$preview$$ = function($G__66563_map__66561_props__41640__auto__$jscomp$76_vec__66558$$, $maybe_ref__41641__auto__$jscomp$76$$) {
  $G__66563_map__66561_props__41640__auto__$jscomp$76_vec__66558$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__66563_map__66561_props__41640__auto__$jscomp$76_vec__66558$$), $maybe_ref__41641__auto__$jscomp$76$$], null);
  $G__66563_map__66561_props__41640__auto__$jscomp$76_vec__66558$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__66563_map__66561_props__41640__auto__$jscomp$76_vec__66558$$, 0, null);
  $APP.$cljs$core$__destructure_map$$($G__66563_map__66561_props__41640__auto__$jscomp$76_vec__66558$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__66563_map__66561_props__41640__auto__$jscomp$76_vec__66558$$ = function() {
    return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_lg$$, "p-4"]))), children:[function() {
      var $G__66567$$ = {children:'To stand on the Biennale\'s global stage is not "participation" in an art event—it is '};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__66567$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__66567$$);
    }(), function() {
      var $G__66572$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:"presence in the world's most influential cultural forum"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__66572$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__66572$$);
    }(), function() {
      var $G__66577$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:", where nations are read, remembered, and measured in real time. "};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__66577$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__66577$$);
    }(), function() {
      var $G__66581$$ = {children:"For the Republic of Armenia, a Pavilion is a sovereign act of cultural visibility: it declares that Armenia is not only a history to be mourned or a headline to be managed, but a "};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__66581$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__66581$$);
    }(), function() {
      var $G__66585$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-semibold", "italic", "text-slate-900  dark:text-slate-100"]))), children:"living intelligence"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__66585$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__66585$$);
    }(), function() {
      var $G__66589$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:"—capable of producing contemporary vision at the highest level. "};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__66589$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__66589$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__66563_map__66561_props__41640__auto__$jscomp$76_vec__66558$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__66563_map__66561_props__41640__auto__$jscomp$76_vec__66558$$);
};
$amp$components$elements$budget$why_support$details$$ = function($G__66674_map__66672_props__41640__auto__$jscomp$77_vec__66669$$, $maybe_ref__41641__auto__$jscomp$77$$) {
  $G__66674_map__66672_props__41640__auto__$jscomp$77_vec__66669$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__66674_map__66672_props__41640__auto__$jscomp$77_vec__66669$$), $maybe_ref__41641__auto__$jscomp$77$$], null);
  $G__66674_map__66672_props__41640__auto__$jscomp$77_vec__66669$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__66674_map__66672_props__41640__auto__$jscomp$77_vec__66669$$, 0, null);
  $APP.$cljs$core$__destructure_map$$($G__66674_map__66672_props__41640__auto__$jscomp$77_vec__66669$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__66674_map__66672_props__41640__auto__$jscomp$77_vec__66669$$ = function() {
    return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_lg$$, "p-4"]))), children:[function() {
      var $G__66678$$ = {children:'To stand on the Biennale\'s global stage is not "participation" in an art event—it is '};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__66678$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__66678$$);
    }(), function() {
      var $G__66682$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:"presence in the world's most influential cultural forum"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__66682$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__66682$$);
    }(), function() {
      var $G__66686$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:", where nations are read, remembered, and measured in real time. "};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__66686$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__66686$$);
    }(), function() {
      var $G__66690$$ = {children:"For the Republic of Armenia, a Pavilion is a sovereign act of cultural visibility: it declares that Armenia is not only a history to be mourned or a headline to be managed, but a "};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__66690$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__66690$$);
    }(), function() {
      var $G__66694$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-semibold", "italic", "text-slate-900  dark:text-slate-100"]))), children:"living intelligence"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__66694$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__66694$$);
    }(), function() {
      var $G__66698$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:"—capable of producing contemporary vision at the highest level. "};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__66698$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__66698$$);
    }(), function() {
      var $G__66703$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:"This is how nations earn stature without asking permission: by contributing meaning, not pleading for sympathy. In Venice, Armenia enters the shared conversation that curators, museums, collectors, journalists, and governments track—and what is seen there echoes for years in exhibitions, acquisitions, education, tourism, diplomacy, and philanthropic interest."};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__66703$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__66703$$);
    }(), function() {
      var $G__66710_G__66718$jscomp$inline_3876$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$em_strong$$, "text-lg"]))), children:"This is why being present matters—and what it elevates:"};
      $G__66710_G__66718$jscomp$inline_3876$$ = {className:"mt-8 mb-4", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__66710_G__66718$jscomp$inline_3876$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__66710_G__66718$jscomp$inline_3876$$)};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__66710_G__66718$jscomp$inline_3876$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__66710_G__66718$jscomp$inline_3876$$);
    }(), function() {
      var $G__66729$$ = function() {
        return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["text-slate-700  dark:text-slate-300", "space-y-4 ml-4"]))), children:[function() {
          var $G__66737_G__66741$jscomp$inline_3879$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_bold$$), children:"National dignity, made public: "};
          $G__66737_G__66741$jscomp$inline_3879$$ = {className:"", children:[$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__66737_G__66741$jscomp$inline_3879$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__66737_G__66741$jscomp$inline_3879$$), "Armenia is framed through excellence, discipline, and contemporary creativity—not solely through tragedy or geopolitics."]};
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("li", $G__66737_G__66741$jscomp$inline_3879$$) : $APP.$helix$core$jsxs$$.call(null, "li", $G__66737_G__66741$jscomp$inline_3879$$);
        }(), function() {
          var $G__66746_G__66756$jscomp$inline_3882$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_bold$$), children:"Soft power that compounds: "};
          $G__66746_G__66756$jscomp$inline_3882$$ = {className:"", children:[$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__66746_G__66756$jscomp$inline_3882$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__66746_G__66756$jscomp$inline_3882$$), "Cultural visibility becomes long-term credibility—opening doors that money or lobbying cannot."]};
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("li", $G__66746_G__66756$jscomp$inline_3882$$) : $APP.$helix$core$jsxs$$.call(null, "li", $G__66746_G__66756$jscomp$inline_3882$$);
        }(), function() {
          var $G__66765_G__66771$jscomp$inline_3885$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_bold$$), children:"Narrative control: "};
          $G__66765_G__66771$jscomp$inline_3885$$ = {className:"", children:[$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__66765_G__66771$jscomp$inline_3885$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__66765_G__66771$jscomp$inline_3885$$), "If Armenia does not author its own image, others will—and they will simplify it."]};
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("li", $G__66765_G__66771$jscomp$inline_3885$$) : $APP.$helix$core$jsxs$$.call(null, "li", $G__66765_G__66771$jscomp$inline_3885$$);
        }(), function() {
          var $G__66786_G__66794$jscomp$inline_3888$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_bold$$), children:"A platform for future generations: "};
          $G__66786_G__66794$jscomp$inline_3888$$ = {className:"", children:[$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__66786_G__66794$jscomp$inline_3888$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__66786_G__66794$jscomp$inline_3888$$), 'A serious national presence signals to Armenian artists, students, and institutions that the world stage is not "for others."']};
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("li", $G__66786_G__66794$jscomp$inline_3888$$) : $APP.$helix$core$jsxs$$.call(null, "li", $G__66786_G__66794$jscomp$inline_3888$$);
        }(), function() {
          var $G__66815_G__66822$jscomp$inline_3891$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_bold$$), children:"Diaspora cohesion: "};
          $G__66815_G__66822$jscomp$inline_3891$$ = {className:"", children:[$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__66815_G__66822$jscomp$inline_3891$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__66815_G__66822$jscomp$inline_3891$$), "A Pavilion becomes a shared achievement—an anchor event that unifies donors, families, and communities around something constructive and proud."]};
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("li", $G__66815_G__66822$jscomp$inline_3891$$) : $APP.$helix$core$jsxs$$.call(null, "li", $G__66815_G__66822$jscomp$inline_3891$$);
        }(), function() {
          var $G__66831_G__66839$jscomp$inline_3894$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_bold$$), children:"Institutional consequences: "};
          $G__66831_G__66839$jscomp$inline_3894$$ = {className:"", children:[$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__66831_G__66839$jscomp$inline_3894$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__66831_G__66839$jscomp$inline_3894$$), "Serious participation invites museum partnerships, residencies, publications, acquisitions, and recurring invitations—real infrastructure, not a momentary spotlight."]};
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("li", $G__66831_G__66839$jscomp$inline_3894$$) : $APP.$helix$core$jsxs$$.call(null, "li", $G__66831_G__66839$jscomp$inline_3894$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("ul", $G__66729$$) : $APP.$helix$core$jsxs$$.call(null, "ul", $G__66729$$);
    }(), function() {
      var $G__66849$$ = function() {
        return {className:"block mt-8", children:[function() {
          var $G__66855$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:"The opportunity cost of not partaking is brutal and silent: "};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__66855$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__66855$$);
        }(), function() {
          var $G__66860$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-semibold", "italic", "text-slate-900  dark:text-slate-100"]))), children:"invisibility"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__66860$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__66860$$);
        }(), function() {
          var $G__66870$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:". The world does not pause because a nation is under-resourced; it simply moves on, and the absence becomes a habit. In a cultural ecosystem, absence reads as incapacity. It reinforces the unfair but persistent idea that Armenia is peripheral—always reacting, never defining. "};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__66870$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__66870$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__66849$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__66849$$);
    }(), function() {
      var $G__66881$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["text-slate-700  dark:text-slate-300", "block mt-6"]))), children:'That is the long-term gap: Armenia is not always "where it should be" because it has too often been forced into survival mode—outspent, out-networked, and underrepresented in the institutions that shape global memory. '};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__66881$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__66881$$);
    }(), function() {
      var $G__66892$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["text-slate-700  dark:text-slate-300", "block mt-6"]))), children:'A donor is not "buying" a sculpture or an event; they are buying '};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__66892$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__66892$$);
    }(), function() {
      var $G__66904$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:"representation with consequences"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__66904$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__66904$$);
    }(), function() {
      var $G__66912$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:": an enduring record that Armenia showed up with seriousness, ambition, and world-class execution. The legacy is reputational and generational: a Pavilion that becomes a reference point—documented, published, archived, collected, cited—and a model that makes the next Armenian presence easier, stronger, and inevitable."};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__66912$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__66912$$);
    }(), function() {
      var $G__66925$$ = {className:"block mt-8", children:"And yes: "};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__66925$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__66925$$);
    }(), function() {
      var $G__66931$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-semibold", "italic", "text-slate-900  dark:text-slate-100"]))), children:"the cultural battle must be won"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__66931$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__66931$$);
    }(), function() {
      var $G__66942$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:"—not with aggression, but with clarity, consistency, and excellence. Culture is where nations become undeniable. It is where influence is built without violence; where history is not only remembered, but translated into future power. "};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__66942$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__66942$$);
    }(), function() {
      var $G__66948$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_closing$$, "block mt-6"]))), children:"Supporting this Pavilion is patriotism in its most practical form: it is an investment in Armenia's standing, Armenia's narrative, and Armenia's right to be seen at full scale—on equal terms—where the world is watching."};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__66948$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__66948$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__66674_map__66672_props__41640__auto__$jscomp$77_vec__66669$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__66674_map__66672_props__41640__auto__$jscomp$77_vec__66669$$);
};
$amp$components$elements$budget$why_support$why_support$$ = function($G__67008_id$jscomp$92_map__66998_props__41640__auto__$jscomp$78_vec__66995$$, $G__67016$jscomp$inline_3897_JSCompiler_inline_result$jscomp$inline_3896_maybe_ref__41641__auto__$jscomp$78_subtitle$jscomp$9$$) {
  $G__67008_id$jscomp$92_map__66998_props__41640__auto__$jscomp$78_vec__66995$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__67008_id$jscomp$92_map__66998_props__41640__auto__$jscomp$78_vec__66995$$), $G__67016$jscomp$inline_3897_JSCompiler_inline_result$jscomp$inline_3896_maybe_ref__41641__auto__$jscomp$78_subtitle$jscomp$9$$], null);
  $G__67008_id$jscomp$92_map__66998_props__41640__auto__$jscomp$78_vec__66995$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__67008_id$jscomp$92_map__66998_props__41640__auto__$jscomp$78_vec__66995$$, 0, null);
  var $map__66998__$1_title$jscomp$33$$ = $APP.$cljs$core$__destructure_map$$($G__67008_id$jscomp$92_map__66998_props__41640__auto__$jscomp$78_vec__66995$$);
  $G__67008_id$jscomp$92_map__66998_props__41640__auto__$jscomp$78_vec__66995$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__66998__$1_title$jscomp$33$$, $APP.$cljs$cst$200$id$$);
  $G__67016$jscomp$inline_3897_JSCompiler_inline_result$jscomp$inline_3896_maybe_ref__41641__auto__$jscomp$78_subtitle$jscomp$9$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__66998__$1_title$jscomp$33$$, $APP.$cljs$cst$727$subtitle$$);
  $map__66998__$1_title$jscomp$33$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__66998__$1_title$jscomp$33$$, $APP.$cljs$cst$381$title$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__67016$jscomp$inline_3897_JSCompiler_inline_result$jscomp$inline_3896_maybe_ref__41641__auto__$jscomp$78_subtitle$jscomp$9$$ = {idx:9, "section-hint":$G__67016$jscomp$inline_3897_JSCompiler_inline_result$jscomp$inline_3896_maybe_ref__41641__auto__$jscomp$78_subtitle$jscomp$9$$, title:$map__66998__$1_title$jscomp$33$$, "expand-button-label":"Read more", "preview-text":$amp$components$elements$budget$why_support$preview$$, "full-text":$amp$components$elements$budget$why_support$details$$};
  $G__67016$jscomp$inline_3897_JSCompiler_inline_result$jscomp$inline_3896_maybe_ref__41641__auto__$jscomp$78_subtitle$jscomp$9$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$components$elements$expandable_text_area$expandable_text_area_2$$, $G__67016$jscomp$inline_3897_JSCompiler_inline_result$jscomp$inline_3896_maybe_ref__41641__auto__$jscomp$78_subtitle$jscomp$9$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$components$elements$expandable_text_area$expandable_text_area_2$$, 
  $G__67016$jscomp$inline_3897_JSCompiler_inline_result$jscomp$inline_3896_maybe_ref__41641__auto__$jscomp$78_subtitle$jscomp$9$$);
  $G__67008_id$jscomp$92_map__66998_props__41640__auto__$jscomp$78_vec__66995$$ = {id:$G__67008_id$jscomp$92_map__66998_props__41640__auto__$jscomp$78_vec__66995$$, children:$G__67016$jscomp$inline_3897_JSCompiler_inline_result$jscomp$inline_3896_maybe_ref__41641__auto__$jscomp$78_subtitle$jscomp$9$$};
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__67008_id$jscomp$92_map__66998_props__41640__auto__$jscomp$78_vec__66995$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__67008_id$jscomp$92_map__66998_props__41640__auto__$jscomp$78_vec__66995$$);
};
$amp$components$navs$back_up_nav$back_up_nav$$ = function($G__66655_is_active_QMARK_$jscomp$13_props__41640__auto__$jscomp$79_vec__66651$$) {
  $APP.$helix$core$extract_cljs_props$$($G__66655_is_active_QMARK_$jscomp$13_props__41640__auto__$jscomp$79_vec__66651$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $container_ref$jscomp$3$$ = $APP.$helix$hooks$use_ref$$("container-ref"), $button_ref$$ = $APP.$helix$hooks$use_ref$$("button-ref"), $scroll_to_top$$ = $amp$hooks$use_scroll_to$use_scroll_to_top$cljs$0core$0IFn$0_invoke$0arity$0variadic$$();
  $G__66655_is_active_QMARK_$jscomp$13_props__41640__auto__$jscomp$79_vec__66651$$ = $APP.$amp$hooks$use_scroll_trigger$use_scroll_trigger$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($container_ref$jscomp$3$$, $APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$cljs$cst$364$start$$, function() {
    return window.innerHeight - window.innerHeight / 8;
  }, $APP.$cljs$cst$390$end$$, "1000000px", $APP.$cljs$cst$392$markers_QMARK_$$, !1, $APP.$cljs$cst$393$debug_QMARK_$$, !1]));
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__66655_is_active_QMARK_$jscomp$13_props__41640__auto__$jscomp$79_vec__66651$$, 0, null);
  $G__66655_is_active_QMARK_$jscomp$13_props__41640__auto__$jscomp$79_vec__66651$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__66655_is_active_QMARK_$jscomp$13_props__41640__auto__$jscomp$79_vec__66651$$, 1, null);
  $APP.$amp$hooks$use_hover_animations$use_hover_animations$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($button_ref$$, $APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$cljs$cst$69$over$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$440$opacity$$, 1], null), $APP.$cljs$cst$396$out$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$440$opacity$$, 0.7], null)]));
  $APP.$amp$hooks$use_toggle_animations$use_toggle_animations$$(new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$394$target$$, $container_ref$jscomp$3$$, $APP.$cljs$cst$399$on_to$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$730$y$$, 0, $APP.$cljs$cst$440$opacity$$, 1], null), $APP.$cljs$cst$401$off_to$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$730$y$$, -150, $APP.$cljs$cst$440$opacity$$, 0.25], null), $APP.$cljs$cst$397$is_on_QMARK_$$, 
  $G__66655_is_active_QMARK_$jscomp$13_props__41640__auto__$jscomp$79_vec__66651$$], null));
  $G__66655_is_active_QMARK_$jscomp$13_props__41640__auto__$jscomp$79_vec__66651$$ = function() {
    var $G__66659$jscomp$inline_3899_G__66663$jscomp$inline_3901_JSCompiler_inline_result$jscomp$3482_JSCompiler_inline_result$jscomp$inline_3900$$ = {};
    $G__66659$jscomp$inline_3899_G__66663$jscomp$inline_3901_JSCompiler_inline_result$jscomp$3482_JSCompiler_inline_result$jscomp$inline_3900$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$icons$ArrowTurnRightUp$$, $G__66659$jscomp$inline_3899_G__66663$jscomp$inline_3901_JSCompiler_inline_result$jscomp$3482_JSCompiler_inline_result$jscomp$inline_3900$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$icons$ArrowTurnRightUp$$, 
    $G__66659$jscomp$inline_3899_G__66663$jscomp$inline_3901_JSCompiler_inline_result$jscomp$3482_JSCompiler_inline_result$jscomp$inline_3900$$);
    $G__66659$jscomp$inline_3899_G__66663$jscomp$inline_3901_JSCompiler_inline_result$jscomp$3482_JSCompiler_inline_result$jscomp$inline_3900$$ = {ref:$button_ref$$, className:"flex \n                           w-full\n                           h-full\n                           bg-pink-300\n                           opacity-90\n                           font-bold\n                           text-xl\n                           px-4\n                           white-space-no-wrap", onClick:$scroll_to_top$$, 
    children:["To Top ", $G__66659$jscomp$inline_3899_G__66663$jscomp$inline_3901_JSCompiler_inline_result$jscomp$3482_JSCompiler_inline_result$jscomp$inline_3900$$]};
    $G__66659$jscomp$inline_3899_G__66663$jscomp$inline_3901_JSCompiler_inline_result$jscomp$3482_JSCompiler_inline_result$jscomp$inline_3900$$ = $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__66659$jscomp$inline_3899_G__66663$jscomp$inline_3901_JSCompiler_inline_result$jscomp$3482_JSCompiler_inline_result$jscomp$inline_3900$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__66659$jscomp$inline_3899_G__66663$jscomp$inline_3901_JSCompiler_inline_result$jscomp$3482_JSCompiler_inline_result$jscomp$inline_3900$$);
    return {ref:$container_ref$jscomp$3$$, className:"fixed right-0 cursor-pointer z-30", children:$G__66659$jscomp$inline_3899_G__66663$jscomp$inline_3901_JSCompiler_inline_result$jscomp$3482_JSCompiler_inline_result$jscomp$inline_3900$$};
  }();
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__66655_is_active_QMARK_$jscomp$13_props__41640__auto__$jscomp$79_vec__66651$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__66655_is_active_QMARK_$jscomp$13_props__41640__auto__$jscomp$79_vec__66651$$);
};
$amp$components$sections$budget_footer$budget_footer$$ = function($G__67063_map__67053_props__41640__auto__$jscomp$80_vec__67050$$, $maybe_ref__41641__auto__$jscomp$80$$) {
  $G__67063_map__67053_props__41640__auto__$jscomp$80_vec__67050$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__67063_map__67053_props__41640__auto__$jscomp$80_vec__67050$$), $maybe_ref__41641__auto__$jscomp$80$$], null);
  $G__67063_map__67053_props__41640__auto__$jscomp$80_vec__67050$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__67063_map__67053_props__41640__auto__$jscomp$80_vec__67050$$, 0, null);
  $APP.$cljs$core$__destructure_map$$($G__67063_map__67053_props__41640__auto__$jscomp$80_vec__67050$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $scroll_to_id$jscomp$2$$ = $APP.$amp$hooks$use_scroll_to$use_scroll_to_id$$();
  $G__67063_map__67053_props__41640__auto__$jscomp$80_vec__67050$$ = function() {
    return {className:"relative w-full font-display mt-12", children:[function() {
      var $G__67067$$ = {className:"w-full h-px bg-gradient-to-r from-transparent via-pink-500/40 to-transparent"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__67067$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__67067$$);
    }(), function() {
      var $G__67076_G__67082$jscomp$inline_4119_G__67088$jscomp$inline_4120$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["text-xl lg:text-2xl italic font-light leading-relaxed", "text-slate-600  dark:text-slate-400"]))), children:"“Culture is where nations become undeniable. It is where influence is built without violence; where history is not only remembered, but translated into future power.”"};
      $G__67076_G__67082$jscomp$inline_4119_G__67088$jscomp$inline_4120$$ = {className:"max-w-3xl text-center", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__67076_G__67082$jscomp$inline_4119_G__67088$jscomp$inline_4120$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__67076_G__67082$jscomp$inline_4119_G__67088$jscomp$inline_4120$$)};
      $G__67076_G__67082$jscomp$inline_4119_G__67088$jscomp$inline_4120$$ = {className:"py-16 lg:py-24 px-6 flex justify-center", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("blockquote", $G__67076_G__67082$jscomp$inline_4119_G__67088$jscomp$inline_4120$$) : $APP.$helix$core$jsx$$.call(null, "blockquote", $G__67076_G__67082$jscomp$inline_4119_G__67088$jscomp$inline_4120$$)};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__67076_G__67082$jscomp$inline_4119_G__67088$jscomp$inline_4120$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__67076_G__67082$jscomp$inline_4119_G__67088$jscomp$inline_4120$$);
    }(), function() {
      var $G__67100$$ = {className:"w-full h-px bg-gradient-to-r from-transparent via-pink-500/20 to-transparent"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__67100$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__67100$$);
    }(), function() {
      var $G__67108$$ = function() {
        return {className:"py-16 lg:py-20 px-6 max-w-5xl mx-auto", children:[function() {
          var $G__67114$$ = function() {
            return {className:"text-center mb-16", children:[function() {
              var $G__67120$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["text-2xl lg:text-3xl font-bold uppercase tracking-wider mb-3", "text-slate-900  dark:text-slate-100"]))), children:"Support the Pavilion"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("h2", $G__67120$$) : $APP.$helix$core$jsx$$.call(null, "h2", $G__67120$$);
            }(), function() {
              var $G__67130$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["text-sm lg:text-base max-w-xl mx-auto mb-8", "text-slate-600  dark:text-slate-400"]))), children:"Your contribution directly supports Armenia’s national presentation at the 61st Venice Biennale—a sovereign act of cultural visibility on the world stage."};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__67130$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__67130$$);
            }(), function() {
              var $G__67140$$ = function() {
                return {className:"flex justify-center gap-4 flex-wrap", children:[function() {
                  var $G__67144$$ = function() {
                    return {title:"Donate Now", "on-click":function() {
                      return window.open("https://donate.stripe.com/14A5kC6SC5RQfo4frS6Ri00", "_blank");
                    }};
                  }();
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$components$ui$main_button$main_button$$, $G__67144$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$components$ui$main_button$main_button$$, $G__67144$$);
                }(), function() {
                  var $G__67156$$ = function() {
                    return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$("font-mono;text-[11px];font-bold;uppercase;tracking-[0.25em];text-slate-600  dark:text-slate-400;hover:text-slate-900 dark:hover:text-white;border;border-slate-200 dark:border-white/15;hover:border-slate-400 dark:hover:border-slate-500;px-6 py-3;transition-colors duration-300 ease-in-out".split(";")))), 
                    onClick:function() {
                      return $scroll_to_id$jscomp$2$$.$cljs$core$IFn$_invoke$arity$1$ ? $scroll_to_id$jscomp$2$$.$cljs$core$IFn$_invoke$arity$1$("section-8") : $scroll_to_id$jscomp$2$$.call(null, "section-8");
                    }, children:"Wire Transfer Info →"};
                  }();
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("button", $G__67156$$) : $APP.$helix$core$jsx$$.call(null, "button", $G__67156$$);
                }()]};
              }();
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__67140$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__67140$$);
            }()]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__67114$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__67114$$);
        }(), function() {
          var $G__67168$$ = function() {
            return {className:"grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 text-sm", children:[function() {
              var $G__67176$$ = function() {
                return {className:"space-y-3", children:[function() {
                  var $G__67182$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["text-[10px] font-semibold uppercase tracking-[0.2em] mb-4", "text-pink-700/50 dark:text-pink-300/50"]))), children:"Get in Touch"};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("h3", $G__67182$$) : $APP.$helix$core$jsx$$.call(null, "h3", $G__67182$$);
                }(), function() {
                  var $G__67190$$ = {href:"mailto:hello@armenianpavilion2026.org?subject\x3dLet's%20connect", className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["block transition-colors", "text-slate-700  dark:text-slate-300", "hover:text-slate-900 dark:hover:text-white"]))), children:"hello@armenianpavilion2026.org"};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("a", $G__67190$$) : $APP.$helix$core$jsx$$.call(null, "a", $G__67190$$);
                }(), function() {
                  var $G__67200$$ = {href:"tel:+13234041152", className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["block transition-colors", "text-slate-700  dark:text-slate-300", "hover:text-slate-900 dark:hover:text-white"]))), children:"+1 323-404-1152"};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("a", $G__67200$$) : $APP.$helix$core$jsx$$.call(null, "a", $G__67200$$);
                }()]};
              }();
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__67176$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__67176$$);
            }(), function() {
              var $G__67212$$ = function() {
                return {className:"space-y-3", children:[function() {
                  var $G__67218$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["text-[10px] font-semibold uppercase tracking-[0.2em] mb-4", "text-pink-700/50 dark:text-pink-300/50"]))), children:"501(c)(3) Non-Profit"};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("h3", $G__67218$$) : $APP.$helix$core$jsx$$.call(null, "h3", $G__67218$$);
                }(), function() {
                  var $G__67224$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:"Fallen Angels Inc."};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__67224$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__67224$$);
                }(), function() {
                  var $G__67234$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-600  dark:text-slate-400"), children:"EIN: 92-2395513"};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__67234$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__67234$$);
                }(), function() {
                  var $G__67241$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-600  dark:text-slate-400"), children:"Los Angeles, CA"};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__67241$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__67241$$);
                }()]};
              }();
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__67212$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__67212$$);
            }(), function() {
              var $G__67250$jscomp$1$$ = function() {
                return {className:"space-y-3", children:[function() {
                  var $G__67258$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["text-[10px] font-semibold uppercase tracking-[0.2em] mb-4", "text-pink-700/50 dark:text-pink-300/50"]))), children:"Quick Links"};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("h3", $G__67258$$) : $APP.$helix$core$jsx$$.call(null, "h3", $G__67258$$);
                }(), function() {
                  var $G__67270$$ = function() {
                    return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["block transition-colors text-left", "text-slate-700  dark:text-slate-300", "hover:text-slate-900 dark:hover:text-white"]))), onClick:function() {
                      return $scroll_to_id$jscomp$2$$.$cljs$core$IFn$_invoke$arity$1$ ? $scroll_to_id$jscomp$2$$.$cljs$core$IFn$_invoke$arity$1$("section-1") : $scroll_to_id$jscomp$2$$.call(null, "section-1");
                    }, children:"Press Release"};
                  }();
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("button", $G__67270$$) : $APP.$helix$core$jsx$$.call(null, "button", $G__67270$$);
                }(), function() {
                  var $G__67281$$ = function() {
                    return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["block transition-colors text-left", "text-slate-700  dark:text-slate-300", "hover:text-slate-900 dark:hover:text-white"]))), onClick:function() {
                      return $scroll_to_id$jscomp$2$$.$cljs$core$IFn$_invoke$arity$1$ ? $scroll_to_id$jscomp$2$$.$cljs$core$IFn$_invoke$arity$1$("section-3") : $scroll_to_id$jscomp$2$$.call(null, "section-3");
                    }, children:"Budget"};
                  }();
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("button", $G__67281$$) : $APP.$helix$core$jsx$$.call(null, "button", $G__67281$$);
                }(), function() {
                  var $G__67292$jscomp$1$$ = function() {
                    return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["block transition-colors text-left", "text-slate-700  dark:text-slate-300", "hover:text-slate-900 dark:hover:text-white"]))), onClick:function() {
                      return $scroll_to_id$jscomp$2$$.$cljs$core$IFn$_invoke$arity$1$ ? $scroll_to_id$jscomp$2$$.$cljs$core$IFn$_invoke$arity$1$("section-5") : $scroll_to_id$jscomp$2$$.call(null, "section-5");
                    }, children:"Committee"};
                  }();
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("button", $G__67292$jscomp$1$$) : $APP.$helix$core$jsx$$.call(null, "button", $G__67292$jscomp$1$$);
                }()]};
              }();
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__67250$jscomp$1$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__67250$jscomp$1$$);
            }()]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__67168$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__67168$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__67108$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__67108$$);
    }(), function() {
      var $G__67314$$ = {className:"w-full h-px bg-gradient-to-r from-transparent via-slate-300 dark:via-slate-700 to-transparent"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__67314$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__67314$$);
    }(), function() {
      var $G__67320$$ = function() {
        return {className:"py-6 px-6 flex flex-col sm:flex-row justify-between items-center gap-3 max-w-5xl mx-auto", children:[function() {
          var $G__67325$$ = function() {
            return {className:"flex items-center gap-4", children:[function() {
              var $G__67334$$ = {src:"images/graphics/61_biennale_logo_line.svg", className:"h-6 opacity-40 invert dark:invert-0"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("img", $G__67334$$) : $APP.$helix$core$jsx$$.call(null, "img", $G__67334$$);
            }(), function() {
              var $G__67338$jscomp$1$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["text-[10px] uppercase tracking-[0.15em] whitespace-nowrap", "text-slate-600  dark:text-slate-400"]))), children:"Armenia Pavilion · 61st Venice Biennale"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__67338$jscomp$1$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__67338$jscomp$1$$);
            }()]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__67325$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__67325$$);
        }(), function() {
          var $G__67357$$ = function() {
            return {className:"flex items-center gap-4", children:[function() {
              var $G__67363$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["text-[10px]", "text-slate-600  dark:text-slate-400"]))), children:"© 2026 AZ Studios Inc."};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__67363$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__67363$$);
            }(), function() {
              var $G__67376$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["text-[10px]", "text-slate-400  dark:text-slate-600"]))), children:"v" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$("ae4c213")};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__67376$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__67376$$);
            }()]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__67357$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__67357$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__67320$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__67320$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("footer", $G__67063_map__67053_props__41640__auto__$jscomp$80_vec__67050$$) : $APP.$helix$core$jsxs$$.call(null, "footer", $G__67063_map__67053_props__41640__auto__$jscomp$80_vec__67050$$);
};
$amp$components$sections$budget_section$section_link$$ = function($G__68686_map__68684_map__68684__$1_props__41640__auto__$jscomp$81_vec__68681$$, $maybe_ref__41641__auto__$jscomp$81$$) {
  $G__68686_map__68684_map__68684__$1_props__41640__auto__$jscomp$81_vec__68681$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__68686_map__68684_map__68684__$1_props__41640__auto__$jscomp$81_vec__68681$$), $maybe_ref__41641__auto__$jscomp$81$$], null);
  $G__68686_map__68684_map__68684__$1_props__41640__auto__$jscomp$81_vec__68681$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__68686_map__68684_map__68684__$1_props__41640__auto__$jscomp$81_vec__68681$$, 0, null);
  $G__68686_map__68684_map__68684__$1_props__41640__auto__$jscomp$81_vec__68681$$ = $APP.$cljs$core$__destructure_map$$($G__68686_map__68684_map__68684__$1_props__41640__auto__$jscomp$81_vec__68681$$);
  var $title$jscomp$34$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__68686_map__68684_map__68684__$1_props__41640__auto__$jscomp$81_vec__68681$$, $APP.$cljs$cst$381$title$$), $anchor$jscomp$2$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__68686_map__68684_map__68684__$1_props__41640__auto__$jscomp$81_vec__68681$$, $cljs$cst$913$anchor$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $scroll_to_id$jscomp$3$$ = $APP.$amp$hooks$use_scroll_to$use_scroll_to_id$$();
  $G__68686_map__68684_map__68684__$1_props__41640__auto__$jscomp$81_vec__68681$$ = function() {
    return {onClick:function() {
      return $scroll_to_id$jscomp$3$$.$cljs$core$IFn$_invoke$arity$1$ ? $scroll_to_id$jscomp$3$$.$cljs$core$IFn$_invoke$arity$1$($anchor$jscomp$2$$) : $scroll_to_id$jscomp$3$$.call(null, $anchor$jscomp$2$$);
    }, className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$nav_link$$), children:[$title$jscomp$34$$, " ", function() {
      var $G__68692$$ = {"class":"w-4 h-4 inline-block ml-1"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$components$icons$ChevronRightIcon$$, $G__68692$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$components$icons$ChevronRightIcon$$, $G__68692$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("button", $G__68686_map__68684_map__68684__$1_props__41640__auto__$jscomp$81_vec__68681$$) : $APP.$helix$core$jsxs$$.call(null, "button", $G__68686_map__68684_map__68684__$1_props__41640__auto__$jscomp$81_vec__68681$$);
};
$amp$components$sections$budget_section$header$$ = function($G__68704_props__41640__auto__$jscomp$82$$) {
  $APP.$helix$core$extract_cljs_props$$($G__68704_props__41640__auto__$jscomp$82$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__68704_props__41640__auto__$jscomp$82$$ = function() {
    return {className:"relative", children:[function() {
      var $G__68708_G__68712$jscomp$inline_3437$$ = {};
      $G__68708_G__68712$jscomp$inline_3437$$ = {className:"absolute top-4 right-4 z-10", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$components$ui$theme_toggle$theme_toggle$$, $G__68708_G__68712$jscomp$inline_3437$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$components$ui$theme_toggle$theme_toggle$$, $G__68708_G__68712$jscomp$inline_3437$$)};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__68708_G__68712$jscomp$inline_3437$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__68708_G__68712$jscomp$inline_3437$$);
    }(), function() {
      var $G__68714_G__68718$jscomp$inline_3907$$ = {src:"images/graphics/61_biennale_logo_line.svg", className:"invert dark:invert-0"};
      $G__68714_G__68718$jscomp$inline_3907$$ = {className:"w-1/2 lg:w-1/4 lg:max-w-64 mt-4 lg:mt-8 px-4", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("img", $G__68714_G__68718$jscomp$inline_3907$$) : $APP.$helix$core$jsx$$.call(null, "img", $G__68714_G__68718$jscomp$inline_3907$$)};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__68714_G__68718$jscomp$inline_3907$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__68714_G__68718$jscomp$inline_3907$$);
    }(), function() {
      var $G__68722_G__68726$jscomp$inline_3910$$ = {translate:"no", className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["notranslate", $APP.$amp$styles$heading_page$$]))), children:"ARMENIA PAVILION, 61st INTERNATIONAL ART EXHIBITION LA BIENNALE DI VENEZIA"};
      $G__68722_G__68726$jscomp$inline_3910$$ = {className:"px-4 mt-12 lg:mt-16 max-w-4xl", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("h1", $G__68722_G__68726$jscomp$inline_3910$$) : $APP.$helix$core$jsx$$.call(null, "h1", $G__68722_G__68726$jscomp$inline_3910$$)};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__68722_G__68726$jscomp$inline_3910$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__68722_G__68726$jscomp$inline_3910$$);
    }(), function() {
      var $G__68730$$ = function() {
        return {className:"w-full px-4 mt-8", children:function() {
          var $G__68734$$ = function() {
            return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["text-slate-950  dark:text-white", "space-y-3 flex flex-col justify-start items-start"]))), children:[function() {
              var $G__68738$$ = {title:"1. Press Release", anchor:"section-1"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$sections$budget_section$section_link$$, $G__68738$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$sections$budget_section$section_link$$, $G__68738$$);
            }(), function() {
              var $G__68742$$ = {title:"2. Overview - THE STUDIO", anchor:"section-2"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$sections$budget_section$section_link$$, $G__68742$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$sections$budget_section$section_link$$, $G__68742$$);
            }(), function() {
              var $G__68746$$ = {title:"3. Budget", anchor:"section-3"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$sections$budget_section$section_link$$, $G__68746$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$sections$budget_section$section_link$$, $G__68746$$);
            }(), function() {
              var $G__68750$$ = {title:"4. Cashflow", anchor:"section-4"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$sections$budget_section$section_link$$, $G__68750$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$sections$budget_section$section_link$$, $G__68750$$);
            }(), function() {
              var $G__68754$$ = {title:"5. Committee", anchor:"section-5"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$sections$budget_section$section_link$$, $G__68754$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$sections$budget_section$section_link$$, $G__68754$$);
            }(), function() {
              var $G__68758$$ = {title:"6. Patrons \x26 Sponsors", anchor:"section-6"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$sections$budget_section$section_link$$, $G__68758$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$sections$budget_section$section_link$$, $G__68758$$);
            }(), function() {
              var $G__68762$$ = {title:"7. Location Details", anchor:"section-7"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$sections$budget_section$section_link$$, $G__68762$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$sections$budget_section$section_link$$, $G__68762$$);
            }(), function() {
              var $G__68766$$ = {title:"8. Donation Info", anchor:"section-8"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$sections$budget_section$section_link$$, $G__68766$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$sections$budget_section$section_link$$, $G__68766$$);
            }(), function() {
              var $G__68770$$ = {title:"9. Why Support", anchor:"section-9"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$sections$budget_section$section_link$$, $G__68770$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$sections$budget_section$section_link$$, $G__68770$$);
            }()]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__68734$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__68734$$);
        }()};
      }();
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__68730$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__68730$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__68704_props__41640__auto__$jscomp$82$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__68704_props__41640__auto__$jscomp$82$$);
};
$amp$components$sections$budget_section$budget_section$$ = function($G__68782_props__41640__auto__$jscomp$83$$) {
  $APP.$helix$core$extract_cljs_props$$($G__68782_props__41640__auto__$jscomp$83$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__68782_props__41640__auto__$jscomp$83$$ = function() {
    return {"section-id":"budget-section", children:[function() {
      var $G__68787$$ = {};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$navs$back_up_nav$back_up_nav$$, $G__68787$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$navs$back_up_nav$back_up_nav$$, $G__68787$$);
    }(), function() {
      var $G__68789$$ = function() {
        return {className:$APP.$helix$impl$props$normalize_class$$("w-full h-full " + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$("text-slate-900  dark:text-slate-100") + " grey-grad flex items-center justify-center flex-col"), children:function() {
          var $G__68793$$ = function() {
            return {className:$APP.$helix$impl$props$normalize_class$$("flex flex-col " + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$("w-full lg:w-8/12 min-w-0")), children:[function() {
              var $G__68797$$ = {};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$sections$budget_section$header$$, $G__68797$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$sections$budget_section$header$$, $G__68797$$);
            }(), function() {
              var $G__68799$$ = {id:"section-1", idx:1, subtitle:"press", title:"press release", "show-budget-footer?":!0};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$components$sections$press_release$press_release$$, $G__68799$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$components$sections$press_release$press_release$$, $G__68799$$);
            }(), function() {
              var $G__68803$$ = {id:"section-2", idx:2, subtitle:"overview", title:"Armenian Pavilion - The Studio"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$components$sections$about_studio$about_studio$$, $G__68803$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$components$sections$about_studio$about_studio$$, $G__68803$$);
            }(), function() {
              var $G__68807$$ = {id:"section-3", subtitle:"financials", title:"budget"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$elements$budget$cost_breakdown$cost_breakdown$$, $G__68807$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$elements$budget$cost_breakdown$cost_breakdown$$, $G__68807$$);
            }(), function() {
              var $G__68811$$ = {id:"section-4", subtitle:"financials", title:"cashflow"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$elements$budget$cash_flow$cash_flow$$, $G__68811$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$elements$budget$cash_flow$cash_flow$$, $G__68811$$);
            }(), function() {
              var $G__68815$$ = {id:"section-5", subtitle:"team", title:"committee"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$elements$budget$committe$committee$$, $G__68815$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$elements$budget$committe$committee$$, $G__68815$$);
            }(), function() {
              var $G__68821$$ = {id:"section-6", subtitle:"acknowledgements", title:"patrons \x26 sponsors"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$elements$budget$sponsors$sponsors_section$$, $G__68821$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$elements$budget$sponsors$sponsors_section$$, $G__68821$$);
            }(), function() {
              var $G__68825$$ = {id:"section-7", subtitle:"venue", title:"location information"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$elements$budget$location_section$location_section$$, $G__68825$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$elements$budget$location_section$location_section$$, $G__68825$$);
            }(), function() {
              var $G__68829$$ = {id:"section-8", subtitle:"non-profit", title:"donation information"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$elements$budget$non_profit$non_profit$$, $G__68829$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$elements$budget$non_profit$non_profit$$, $G__68829$$);
            }(), function() {
              var $G__68833$$ = {id:"section-9", subtitle:"why it matters", title:"why support"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$elements$budget$why_support$why_support$$, $G__68833$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$elements$budget$why_support$why_support$$, $G__68833$$);
            }(), function() {
              var $G__68837$$ = {};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$sections$budget_footer$budget_footer$$, $G__68837$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$sections$budget_footer$budget_footer$$, $G__68837$$);
            }()]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__68793$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__68793$$);
        }()};
      }();
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__68789$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__68789$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$3$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$3$($APP.$amp$components$section$section$$, $G__68782_props__41640__auto__$jscomp$83$$, "budget-section") : $APP.$helix$core$jsxs$$.call(null, $APP.$amp$components$section$section$$, $G__68782_props__41640__auto__$jscomp$83$$, "budget-section");
};
$APP.$amp$views$budget_view$budget_view$$ = function($G__68940_68949_G__68943_map__68939_map__68939__$1_props__41640__auto__$jscomp$84_vec__68936$$, $G__68941_68950_maybe_ref__41641__auto__$jscomp$84$$) {
  $G__68940_68949_G__68943_map__68939_map__68939__$1_props__41640__auto__$jscomp$84_vec__68936$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__68940_68949_G__68943_map__68939_map__68939__$1_props__41640__auto__$jscomp$84_vec__68936$$), $G__68941_68950_maybe_ref__41641__auto__$jscomp$84$$], null);
  $G__68940_68949_G__68943_map__68939_map__68939__$1_props__41640__auto__$jscomp$84_vec__68936$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__68940_68949_G__68943_map__68939_map__68939__$1_props__41640__auto__$jscomp$84_vec__68936$$, 0, null);
  $G__68940_68949_G__68943_map__68939_map__68939__$1_props__41640__auto__$jscomp$84_vec__68936$$ = $APP.$cljs$core$__destructure_map$$($G__68940_68949_G__68943_map__68939_map__68939__$1_props__41640__auto__$jscomp$84_vec__68936$$);
  var $active$jscomp$1$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__68940_68949_G__68943_map__68939_map__68939__$1_props__41640__auto__$jscomp$84_vec__68936$$, $cljs$cst$914$active$$), $intro_complete_callback$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__68940_68949_G__68943_map__68939_map__68939__$1_props__41640__auto__$jscomp$84_vec__68936$$, $cljs$cst$915$intro_complete_callback$$), $outro_complete_callback$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__68940_68949_G__68943_map__68939_map__68939__$1_props__41640__auto__$jscomp$84_vec__68936$$, 
  $cljs$cst$916$outro_complete_callback$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $comp_ref$jscomp$2$$ = $APP.$helix$hooks$use_ref$$("comp-ref");
  $G__68940_68949_G__68943_map__68939_map__68939__$1_props__41640__auto__$jscomp$84_vec__68936$$ = $APP.$helix$hooks$wrap_fx$$(function() {
    return $APP.$cljs$core$truth_$$($active$jscomp$1$$) ? $intro_complete_callback$$.$cljs$core$IFn$_invoke$arity$0$ ? $intro_complete_callback$$.$cljs$core$IFn$_invoke$arity$0$() : $intro_complete_callback$$.call(null) : $APP.$module$node_modules$gsap$dist$gsap$$.gsap.to($APP.$cljs$core$_deref$$($comp_ref$jscomp$2$$), {opacity:0, onComplete:$outro_complete_callback$$, duration:1});
  });
  $G__68941_68950_maybe_ref__41641__auto__$jscomp$84$$ = [$active$jscomp$1$$];
  $APP.$helix$hooks$raw_use_layout_effect$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$hooks$raw_use_layout_effect$$.$cljs$core$IFn$_invoke$arity$2$($G__68940_68949_G__68943_map__68939_map__68939__$1_props__41640__auto__$jscomp$84_vec__68936$$, $G__68941_68950_maybe_ref__41641__auto__$jscomp$84$$) : $APP.$helix$hooks$raw_use_layout_effect$$.call(null, $G__68940_68949_G__68943_map__68939_map__68939__$1_props__41640__auto__$jscomp$84_vec__68936$$, $G__68941_68950_maybe_ref__41641__auto__$jscomp$84$$);
  $G__68940_68949_G__68943_map__68939_map__68939__$1_props__41640__auto__$jscomp$84_vec__68936$$ = function() {
    var $G__68947$jscomp$inline_2843_JSCompiler_inline_result$jscomp$2290$$ = {};
    $G__68947$jscomp$inline_2843_JSCompiler_inline_result$jscomp$2290$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$sections$budget_section$budget_section$$, $G__68947$jscomp$inline_2843_JSCompiler_inline_result$jscomp$2290$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$sections$budget_section$budget_section$$, $G__68947$jscomp$inline_2843_JSCompiler_inline_result$jscomp$2290$$);
    return {ref:$comp_ref$jscomp$2$$, children:$G__68947$jscomp$inline_2843_JSCompiler_inline_result$jscomp$2290$$};
  }();
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__68940_68949_G__68943_map__68939_map__68939__$1_props__41640__auto__$jscomp$84_vec__68936$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__68940_68949_G__68943_map__68939_map__68939__$1_props__41640__auto__$jscomp$84_vec__68936$$);
};
$cljs$cst$861$admin_apr_26$$ = new $APP.$cljs$core$Keyword$$(null, "admin-apr-26", "admin-apr-26", -1594649114);
$cljs$cst$875$venice_sep_26$$ = new $APP.$cljs$core$Keyword$$(null, "venice-sep-26", "venice-sep-26", 94763672);
$cljs$cst$834$venice_sep_25$$ = new $APP.$cljs$core$Keyword$$(null, "venice-sep-25", "venice-sep-25", 339442983);
$cljs$cst$853$la_feb_26$$ = new $APP.$cljs$core$Keyword$$(null, "la-feb-26", "la-feb-26", -2123365555);
$cljs$cst$863$venice_may_26$$ = new $APP.$cljs$core$Keyword$$(null, "venice-may-26", "venice-may-26", 2072857227);
$cljs$cst$916$outro_complete_callback$$ = new $APP.$cljs$core$Keyword$$(null, "outro-complete-callback", "outro-complete-callback", -1973874519);
$cljs$cst$828$priority$$ = new $APP.$cljs$core$Keyword$$(null, "priority", "priority", 1431093715);
$cljs$cst$908$accent$$ = new $APP.$cljs$core$Keyword$$(null, "accent", "accent", -1826298468);
$cljs$cst$814$venue$$ = new $APP.$cljs$core$Keyword$$(null, "venue", "venue", -731609643);
$cljs$cst$857$la_mar_26$$ = new $APP.$cljs$core$Keyword$$(null, "la-mar-26", "la-mar-26", 1380188343);
$cljs$cst$890$n_crit$$ = new $APP.$cljs$core$Keyword$$(null, "n-crit", "n-crit", 769065100);
$cljs$cst$879$admin_oct_26$$ = new $APP.$cljs$core$Keyword$$(null, "admin-oct-26", "admin-oct-26", 1040051883);
$cljs$cst$911$supporter$$ = new $APP.$cljs$core$Keyword$$(null, "supporter", "supporter", 789659821);
$cljs$cst$839$admin_oct_25$$ = new $APP.$cljs$core$Keyword$$(null, "admin-oct-25", "admin-oct-25", 1520025024);
$cljs$cst$866$venice_jun_26$$ = new $APP.$cljs$core$Keyword$$(null, "venice-jun-26", "venice-jun-26", -604048435);
$cljs$cst$893$has_now$$ = new $APP.$cljs$core$Keyword$$(null, "has-now", "has-now", 654554843);
$cljs$cst$817$the_studio$$ = new $APP.$cljs$core$Keyword$$(null, "the-studio", "the-studio", 106848628);
$cljs$cst$899$month$$ = new $APP.$cljs$core$Keyword$$(null, "month", "month", -1960248533);
$cljs$cst$910$benefactor$$ = new $APP.$cljs$core$Keyword$$(null, "benefactor", "benefactor", -1181533202);
$cljs$cst$841$la_nov_25$$ = new $APP.$cljs$core$Keyword$$(null, "la-nov-25", "la-nov-25", 245379756);
$cljs$cst$851$contingency_jan_26$$ = new $APP.$cljs$core$Keyword$$(null, "contingency-jan-26", "contingency-jan-26", 22175239);
$cljs$cst$869$venice_jul_26$$ = new $APP.$cljs$core$Keyword$$(null, "venice-jul-26", "venice-jul-26", -1607597583);
$cljs$cst$889$entries$$ = new $APP.$cljs$core$Keyword$$(null, "entries", "entries", -86943161);
$cljs$cst$888$all_paid$$ = new $APP.$cljs$core$Keyword$$(null, "all-paid", "all-paid", 366243873);
$cljs$cst$829$normal$$ = new $APP.$cljs$core$Keyword$$(null, "normal", "normal", -1519123858);
$cljs$cst$826$admin_jul_25$$ = new $APP.$cljs$core$Keyword$$(null, "admin-jul-25", "admin-jul-25", 264378453);
$cljs$cst$870$admin_jul_26$$ = new $APP.$cljs$core$Keyword$$(null, "admin-jul-26", "admin-jul-26", 149736986);
$cljs$cst$891$n_paid$$ = new $APP.$cljs$core$Keyword$$(null, "n-paid", "n-paid", -1703730024);
$cljs$cst$822$documentation$$ = new $APP.$cljs$core$Keyword$$(null, "documentation", "documentation", 1889593999);
$cljs$cst$833$contingency_aug_25$$ = new $APP.$cljs$core$Keyword$$(null, "contingency-aug-25", "contingency-aug-25", -1541402500);
$cljs$cst$874$contingency_aug_26$$ = new $APP.$cljs$core$Keyword$$(null, "contingency-aug-26", "contingency-aug-26", 1402254021);
$cljs$cst$823$debt_raised$$ = new $APP.$cljs$core$Keyword$$(null, "debt-raised", "debt-raised", -1855117742);
$cljs$cst$867$admin_jun_26$$ = new $APP.$cljs$core$Keyword$$(null, "admin-jun-26", "admin-jun-26", -541328069);
$cljs$cst$810$expanded_items$$ = new $APP.$cljs$core$Keyword$$(null, "expanded-items", "expanded-items", 749320313);
$cljs$cst$902$tier$$ = new $APP.$cljs$core$Keyword$$(null, "tier", "tier", -1071893374);
$cljs$cst$843$contingency_nov_25$$ = new $APP.$cljs$core$Keyword$$(null, "contingency-nov-25", "contingency-nov-25", 2119549379);
$cljs$cst$883$contingency_nov_26$$ = new $APP.$cljs$core$Keyword$$(null, "contingency-nov-26", "contingency-nov-26", 195578875);
$cljs$cst$812$label$$ = new $APP.$cljs$core$Keyword$$(null, "label", "label", 1718410804);
$cljs$cst$807$tax$$ = new $APP.$cljs$core$Keyword$$(null, "tax", "tax", -226525810);
$cljs$cst$915$intro_complete_callback$$ = new $APP.$cljs$core$Keyword$$(null, "intro-complete-callback", "intro-complete-callback", 1121849196);
$cljs$cst$914$active$$ = new $APP.$cljs$core$Keyword$$(null, "active", "active", 1895962068);
$cljs$cst$818$logistics$$ = new $APP.$cljs$core$Keyword$$(null, "logistics", "logistics", 712670037);
$cljs$cst$864$admin_may_26$$ = new $APP.$cljs$core$Keyword$$(null, "admin-may-26", "admin-may-26", 1889129108);
$cljs$cst$850$admin_jan_26$$ = new $APP.$cljs$core$Keyword$$(null, "admin-jan-26", "admin-jan-26", 142603763);
$cljs$cst$852$venice_feb_26$$ = new $APP.$cljs$core$Keyword$$(null, "venice-feb-26", "venice-feb-26", -1651098139);
$cljs$cst$847$venice_jan_26$$ = new $APP.$cljs$core$Keyword$$(null, "venice-jan-26", "venice-jan-26", -68766759);
$cljs$cst$892$n_items$$ = new $APP.$cljs$core$Keyword$$(null, "n-items", "n-items", -880425095);
$cljs$cst$880$contingency_oct_26$$ = new $APP.$cljs$core$Keyword$$(null, "contingency-oct-26", "contingency-oct-26", -60258419);
$cljs$cst$840$contingency_oct_25$$ = new $APP.$cljs$core$Keyword$$(null, "contingency-oct-25", "contingency-oct-25", 400053796);
$cljs$cst$858$admin_mar_26$$ = new $APP.$cljs$core$Keyword$$(null, "admin-mar-26", "admin-mar-26", -338557509);
$cljs$cst$830$paid$$ = new $APP.$cljs$core$Keyword$$(null, "paid", "paid", 1195086102);
$cljs$cst$805$details$$ = new $APP.$cljs$core$Keyword$$(null, "details", "details", 1956795411);
$cljs$cst$884$venice_dec_26$$ = new $APP.$cljs$core$Keyword$$(null, "venice-dec-26", "venice-dec-26", 1428198827);
$cljs$cst$856$venice_mar_26$$ = new $APP.$cljs$core$Keyword$$(null, "venice-mar-26", "venice-mar-26", -1280378980);
$cljs$cst$909$order$$ = new $APP.$cljs$core$Keyword$$(null, "order", "order", -1254677256);
$cljs$cst$854$admin_feb_26$$ = new $APP.$cljs$core$Keyword$$(null, "admin-feb-26", "admin-feb-26", 1788307477);
$cljs$cst$862$contingency_apr_26$$ = new $APP.$cljs$core$Keyword$$(null, "contingency-apr-26", "contingency-apr-26", -197755096);
$cljs$cst$895$entry$$ = new $APP.$cljs$core$Keyword$$(null, "entry", "entry", 505168823);
$cljs$cst$885$admin_dec_26$$ = new $APP.$cljs$core$Keyword$$(null, "admin-dec-26", "admin-dec-26", 1444073491);
$cljs$cst$845$admin_dec_25$$ = new $APP.$cljs$core$Keyword$$(null, "admin-dec-25", "admin-dec-25", 629109073);
$cljs$cst$813$item$$ = new $APP.$cljs$core$Keyword$$(null, "item", "item", 249373802);
$cljs$cst$882$admin_nov_26$$ = new $APP.$cljs$core$Keyword$$(null, "admin-nov-26", "admin-nov-26", 899776291);
$cljs$cst$842$admin_nov_25$$ = new $APP.$cljs$core$Keyword$$(null, "admin-nov-25", "admin-nov-25", -26984311);
$cljs$cst$827$due$$ = new $APP.$cljs$core$Keyword$$(null, "due", "due", -1754731313);
$cljs$cst$811$description$$ = new $APP.$cljs$core$Keyword$$(null, "description", "description", -1428560544);
$cljs$cst$848$critical$$ = new $APP.$cljs$core$Keyword$$(null, "critical", "critical", -838839117);
$cljs$cst$871$contingency_jul_26$$ = new $APP.$cljs$core$Keyword$$(null, "contingency-jul-26", "contingency-jul-26", 1067897141);
$cljs$cst$831$contingency_jul_25$$ = new $APP.$cljs$core$Keyword$$(null, "contingency-jul-25", "contingency-jul-25", -1729678391);
$cljs$cst$886$contingency_dec_26$$ = new $APP.$cljs$core$Keyword$$(null, "contingency-dec-26", "contingency-dec-26", -60155593);
$cljs$cst$846$contingency_dec_25$$ = new $APP.$cljs$core$Keyword$$(null, "contingency-dec-25", "contingency-dec-25", 1266897629);
$cljs$cst$865$contingency_may_26$$ = new $APP.$cljs$core$Keyword$$(null, "contingency-may-26", "contingency-may-26", -484422222);
$cljs$cst$868$contingency_jun_26$$ = new $APP.$cljs$core$Keyword$$(null, "contingency-jun-26", "contingency-jun-26", 28697636);
$cljs$cst$804$amount$$ = new $APP.$cljs$core$Keyword$$(null, "amount", "amount", 364489504);
$cljs$cst$901$past_QMARK_$$ = new $APP.$cljs$core$Keyword$$(null, "past?", "past?", -125779631);
$cljs$cst$825$cash_flow_model$$ = new $APP.$cljs$core$Keyword$$(null, "cash-flow-model", "cash-flow-model", -883317453);
$cljs$cst$894$dot$$ = new $APP.$cljs$core$Keyword$$(null, "dot", "dot", 1442709401);
$cljs$cst$897$expanded_QMARK_$$ = new $APP.$cljs$core$Keyword$$(null, "expanded?", "expanded?", 2055832296);
$cljs$cst$809$set_expanded_items$$ = new $APP.$cljs$core$Keyword$$(null, "set-expanded-items", "set-expanded-items", -112840979);
$cljs$cst$806$rate$$ = new $APP.$cljs$core$Keyword$$(null, "rate", "rate", -1428659698);
$cljs$cst$855$contingency_feb_26$$ = new $APP.$cljs$core$Keyword$$(null, "contingency-feb-26", "contingency-feb-26", 509692640);
$cljs$cst$820$marketing$$ = new $APP.$cljs$core$Keyword$$(null, "marketing", "marketing", 2054879774);
$cljs$cst$816$la_prod$$ = new $APP.$cljs$core$Keyword$$(null, "la-prod", "la-prod", 1444492244);
$cljs$cst$906$patron$$ = new $APP.$cljs$core$Keyword$$(null, "patron", "patron", -1174215364);
$cljs$cst$887$fill$$ = new $APP.$cljs$core$Keyword$$(null, "fill", "fill", 883462889);
$cljs$cst$824$funds_raised$$ = new $APP.$cljs$core$Keyword$$(null, "funds-raised", "funds-raised", -197009653);
$cljs$cst$877$contingency_sep_26$$ = new $APP.$cljs$core$Keyword$$(null, "contingency-sep-26", "contingency-sep-26", 479744418);
$cljs$cst$837$contingency_sep_25$$ = new $APP.$cljs$core$Keyword$$(null, "contingency-sep-25", "contingency-sep-25", -1119739004);
$cljs$cst$912$members$$ = new $APP.$cljs$core$Keyword$$(null, "members", "members", 159001018);
$cljs$cst$808$cost_data$$ = new $APP.$cljs$core$Keyword$$(null, "cost-data", "cost-data", -1991336764);
$cljs$cst$881$venice_nov_26$$ = new $APP.$cljs$core$Keyword$$(null, "venice-nov-26", "venice-nov-26", 1130078643);
$cljs$cst$896$rollup$$ = new $APP.$cljs$core$Keyword$$(null, "rollup", "rollup", -1742987157);
$cljs$cst$907$individual$$ = new $APP.$cljs$core$Keyword$$(null, "individual", "individual", -1643964808);
$cljs$cst$876$admin_sep_26$$ = new $APP.$cljs$core$Keyword$$(null, "admin-sep-26", "admin-sep-26", -700799960);
$cljs$cst$835$admin_sep_25$$ = new $APP.$cljs$core$Keyword$$(null, "admin-sep-25", "admin-sep-25", 753699567);
$cljs$cst$860$venice_apr_26$$ = new $APP.$cljs$core$Keyword$$(null, "venice-apr-26", "venice-apr-26", -1422709865);
$cljs$cst$905$institution$$ = new $APP.$cljs$core$Keyword$$(null, "institution", "institution", -70023072);
$cljs$cst$904$logo$$ = new $APP.$cljs$core$Keyword$$(null, "logo", "logo", 1237980263);
$cljs$cst$836$high$$ = new $APP.$cljs$core$Keyword$$(null, "high", "high", 2027297808);
$cljs$cst$819$opening$$ = new $APP.$cljs$core$Keyword$$(null, "opening", "opening", 450993708);
$cljs$cst$913$anchor$$ = new $APP.$cljs$core$Keyword$$(null, "anchor", "anchor", 1549638489);
$cljs$cst$815$admin$$ = new $APP.$cljs$core$Keyword$$(null, "admin", "admin", -1239101627);
$cljs$cst$859$contingency_mar_26$$ = new $APP.$cljs$core$Keyword$$(null, "contingency-mar-26", "contingency-mar-26", 1126538363);
$cljs$cst$878$venice_oct_26$$ = new $APP.$cljs$core$Keyword$$(null, "venice-oct-26", "venice-oct-26", -1699834368);
$cljs$cst$838$venice_oct_25$$ = new $APP.$cljs$core$Keyword$$(null, "venice-oct-25", "venice-oct-25", -641394196);
$cljs$cst$900$now$$ = new $APP.$cljs$core$Keyword$$(null, "now", "now", -1650525531);
$cljs$cst$872$venice_aug_26$$ = new $APP.$cljs$core$Keyword$$(null, "venice-aug-26", "venice-aug-26", 520228272);
$cljs$cst$873$admin_aug_26$$ = new $APP.$cljs$core$Keyword$$(null, "admin-aug-26", "admin-aug-26", -1522732065);
$cljs$cst$832$admin_aug_25$$ = new $APP.$cljs$core$Keyword$$(null, "admin-aug-25", "admin-aug-25", -1520609899);
$cljs$cst$903$founding_patron$$ = new $APP.$cljs$core$Keyword$$(null, "founding-patron", "founding-patron", -1158627303);
$cljs$cst$844$la_dec_25$$ = new $APP.$cljs$core$Keyword$$(null, "la-dec-25", "la-dec-25", -844494315);
$cljs$cst$849$la_jan_26$$ = new $APP.$cljs$core$Keyword$$(null, "la-jan-26", "la-jan-26", -425305268);
$cljs$cst$821$publication$$ = new $APP.$cljs$core$Keyword$$(null, "publication", "publication", -1089697399);
$cljs$cst$898$target_total$$ = new $APP.$cljs$core$Keyword$$(null, "target-total", "target-total", 158942849);
$APP.$JSCompiler_StaticMethods_beforeLoadModuleCode$$("budget-view");
var $amp$components$elements$budget$committe$committee_members$$ = new $APP.$cljs$core$PersistentVector$$(null, 9, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$191$name$$, "Archbishop Derderian", $APP.$cljs$cst$775$role$$, "Committee Lead", $APP.$cljs$cst$438$img_src$$, "https://atd-722658831.imgix.net/committee/hovnan.png", $APP.$cljs$cst$442$credit$$, "Courtesy of the Committee"], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 
4, [$APP.$cljs$cst$191$name$$, "Tony Shafrazi", $APP.$cljs$cst$775$role$$, "Chief Curator", $APP.$cljs$cst$438$img_src$$, "https://atd-722658831.imgix.net/committee/tony.png", $APP.$cljs$cst$442$credit$$, "Courtesy of the Committee"], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$191$name$$, "Tina Chakarian", $APP.$cljs$cst$775$role$$, "Curator", $APP.$cljs$cst$438$img_src$$, "https://atd-722658831.imgix.net/committee/tina.png", $APP.$cljs$cst$442$credit$$, "Courtesy of the Committee"], 
null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$191$name$$, "Zadik Zadikian", $APP.$cljs$cst$775$role$$, "Artist", $APP.$cljs$cst$438$img_src$$, "https://atd-722658831.imgix.net/committee/zadik.png", $APP.$cljs$cst$442$credit$$, "Courtesy of the Committee"], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$191$name$$, "Rafi Ourfalian", $APP.$cljs$cst$775$role$$, "Legal Advisor", $APP.$cljs$cst$438$img_src$$, "https://atd-722658831.imgix.net/committee/rafi.png", 
$APP.$cljs$cst$442$credit$$, "Courtesy of the Committee"], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$191$name$$, "Khachik Khudikyan", $APP.$cljs$cst$775$role$$, "Logistics Advisor", $APP.$cljs$cst$438$img_src$$, "https://atd-722658831.imgix.net/committee/chris.png", $APP.$cljs$cst$442$credit$$, "Courtesy of the Committee"], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$191$name$$, "Andranik Torosyan", $APP.$cljs$cst$775$role$$, "Financial Advisor", 
$APP.$cljs$cst$438$img_src$$, "https://atd-722658831.imgix.net/committee/andy.png", $APP.$cljs$cst$442$credit$$, "Courtesy of the Committee"], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$191$name$$, "Aram Alajajian", $APP.$cljs$cst$775$role$$, "Architect", $APP.$cljs$cst$438$img_src$$, "https://atd-722658831.imgix.net/committee/aram.png", $APP.$cljs$cst$442$credit$$, "Courtesy of the Committee"], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$191$name$$, 
"Vik Hovsepian", $APP.$cljs$cst$775$role$$, "Committee Member", $APP.$cljs$cst$442$credit$$, "Courtesy of the Committee", $APP.$cljs$cst$438$img_src$$, "https://atd-722658831.imgix.net/committee/vic.png"], null)], null);
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$201$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$202$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$components$elements$budget$committe$preview$$, "", null, null) : (void 0).call(null, $amp$components$elements$budget$committe$preview$$, "", null, 
null)), $APP.$helix$core$register_BANG_$$($amp$components$elements$budget$committe$preview$$, "amp.components.elements.budget.committe/preview"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$201$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$202$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$components$elements$budget$committe$details$$, "", null, null) : (void 0).call(null, $amp$components$elements$budget$committe$details$$, "", null, 
null)), $APP.$helix$core$register_BANG_$$($amp$components$elements$budget$committe$details$$, "amp.components.elements.budget.committe/details"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$201$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$202$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$components$elements$budget$committe$committee_member_card$$, "", null, null) : (void 0).call(null, $amp$components$elements$budget$committe$committee_member_card$$, 
"", null, null)), $APP.$helix$core$register_BANG_$$($amp$components$elements$budget$committe$committee_member_card$$, "amp.components.elements.budget.committe/committee-member-card"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$201$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$202$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$components$elements$budget$committe$committee_gallery$$, "", null, null) : (void 0).call(null, $amp$components$elements$budget$committe$committee_gallery$$, 
"", null, null)), $APP.$helix$core$register_BANG_$$($amp$components$elements$budget$committe$committee_gallery$$, "amp.components.elements.budget.committe/committee-gallery"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$201$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$202$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$components$elements$budget$committe$committee$$, "", null, null) : (void 0).call(null, $amp$components$elements$budget$committe$committee$$, "", null, 
null)), $APP.$helix$core$register_BANG_$$($amp$components$elements$budget$committe$committee$$, "amp.components.elements.budget.committe/committee"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$201$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$202$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$components$elements$budget$budget_table$total_section$$, "", null, null) : (void 0).call(null, $amp$components$elements$budget$budget_table$total_section$$, 
"", null, null)), $APP.$helix$core$register_BANG_$$($amp$components$elements$budget$budget_table$total_section$$, "amp.components.elements.budget.budget-table/total-section"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$201$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$202$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$components$elements$budget$budget_table$detail_line_item$$, "", null, null) : (void 0).call(null, $amp$components$elements$budget$budget_table$detail_line_item$$, 
"", null, null)), $APP.$helix$core$register_BANG_$$($amp$components$elements$budget$budget_table$detail_line_item$$, "amp.components.elements.budget.budget-table/detail-line-item"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$201$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$202$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$components$elements$budget$budget_table$section_line_item$$, '(hooks/use-ref (str "section-" idx))(use-scroll-to-ref)', null, null) : (void 0).call(null, 
$amp$components$elements$budget$budget_table$section_line_item$$, '(hooks/use-ref (str "section-" idx))(use-scroll-to-ref)', null, null)), $APP.$helix$core$register_BANG_$$($amp$components$elements$budget$budget_table$section_line_item$$, "amp.components.elements.budget.budget-table/section-line-item"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$201$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$202$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$components$elements$budget$budget_table$budget_table$$, "(hooks/use-state #{})", null, null) : (void 0).call(null, $amp$components$elements$budget$budget_table$budget_table$$, 
"(hooks/use-state #{})", null, null)), $APP.$helix$core$register_BANG_$$($amp$components$elements$budget$budget_table$budget_table$$, "amp.components.elements.budget.budget-table/budget-table"));
var $amp$components$elements$budget$cost_breakdown$cost_data$$ = new $APP.$cljs$core$PersistentVector$$(null, 9, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$200$id$$, $cljs$cst$814$venue$$, $APP.$cljs$cst$381$title$$, "Venue \x26 Operations", $cljs$cst$811$description$$, "Secures and operates the Venice exhibition venue for the full Biennale period: rental, staffing, regulatory compliance, construction, lighting, taxes, and on-site overhead including team lodging and living expenses—ensuring the Pavilion is compliant, safe, and fully operational.", 
$cljs$cst$805$details$$, new $APP.$cljs$core$PersistentVector$$(null, 14, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Base", $APP.$cljs$cst$381$title$$, "Base Rent", $cljs$cst$804$amount$$, 145600, $cljs$cst$811$description$$, "Exclusive use of venue April–December 2026 for the full Biennale period."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Base", $APP.$cljs$cst$381$title$$, 
"Base Staff", $cljs$cst$804$amount$$, 50000, $cljs$cst$811$description$$, "Exhibition staff during the opening period, including security and front-of-house personnel."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Base", $APP.$cljs$cst$381$title$$, "Curatorial Mediator", $cljs$cst$804$amount$$, 25000, $cljs$cst$811$description$$, "Trained curatorial mediator providing visitor guidance, interpretation, and artwork oversight."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 
4, [$APP.$cljs$cst$584$group$$, "Base", $APP.$cljs$cst$381$title$$, "Cleaning", $cljs$cst$804$amount$$, 7000, $cljs$cst$811$description$$, "Weekly professional cleaning and periodic deep cleans for a high-traffic international exhibition."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Permitting", $APP.$cljs$cst$381$title$$, "Permits \x26 Signage", $cljs$cst$804$amount$$, 10000, $cljs$cst$811$description$$, "SCIA permits, exhibition signage approvals, and municipal permits for operational compliance in Venice."], 
null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Permitting", $APP.$cljs$cst$381$title$$, "Fire Safety Cert.", $cljs$cst$804$amount$$, 3500, $cljs$cst$811$description$$, "Mandatory fire-safety certification, inspections, and documentation required by Venetian authorities."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Permitting", $APP.$cljs$cst$381$title$$, "Liability Ins.", $cljs$cst$804$amount$$, 2500, $cljs$cst$811$description$$, 
"Public liability insurance covering visitors, staff, and third parties for the full exhibition period."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Construction", $APP.$cljs$cst$381$title$$, "Partitions \x26 Walls", $cljs$cst$804$amount$$, 9500, $cljs$cst$811$description$$, "Windows, door alterations, partitions, and minor structural adjustments to adapt the venue."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, 
"Construction", $APP.$cljs$cst$381$title$$, "Lighting", $cljs$cst$804$amount$$, 7500, $cljs$cst$811$description$$, "Overhead ceiling-mounted, freestanding, and supplemental exhibition lighting equipment and installation."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Taxes", $APP.$cljs$cst$381$title$$, "Signage Taxes", $cljs$cst$804$amount$$, 1500, $cljs$cst$811$description$$, "Municipal banner and signage tax for exterior and wayfinding signage during the Biennale."], 
null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Taxes", $APP.$cljs$cst$381$title$$, "VAT 22%", $cljs$cst$804$amount$$, 55E3, $cljs$cst$811$description$$, "Italian value-added tax on applicable venue services."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Overhead", $APP.$cljs$cst$381$title$$, "Team Lodging", $cljs$cst$804$amount$$, 95E3, $cljs$cst$811$description$$, "Accommodation for the Venice studio team. $125/night per head, 2 months pre-production + 10 months operations."], 
null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Overhead", $APP.$cljs$cst$381$title$$, "Per Diem", $cljs$cst$804$amount$$, 66E3, $cljs$cst$811$description$$, "Daily living expenses for the Venice-based team. $100/day per head during active operating months."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Overhead", $APP.$cljs$cst$381$title$$, "Project Insurance", $cljs$cst$804$amount$$, 5E4, $cljs$cst$811$description$$, 
"Project insurance coverage for the Venice operations period. 10 months at $5,000/month."], null)], null)], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$200$id$$, $cljs$cst$815$admin$$, $APP.$cljs$cst$381$title$$, "Administration", $cljs$cst$811$description$$, "Core leadership, project management, and operational overhead supporting curatorial direction, artist oversight, coordination, compliance, travel, and lodging—ensuring continuity across the full Biennale cycle.", 
$cljs$cst$805$details$$, new $APP.$cljs$core$PersistentVector$$(null, 6, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Staff", $APP.$cljs$cst$381$title$$, "Curators", $cljs$cst$804$amount$$, 9E4, $cljs$cst$811$description$$, "Curatorial leadership. 18 months at $5,000/month."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Staff", $APP.$cljs$cst$381$title$$, "Artist", $cljs$cst$804$amount$$, 
45E3, $cljs$cst$811$description$$, "Artist fees. 18 months at $2,500/month."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Staff", $APP.$cljs$cst$381$title$$, "Project Coordinator", $cljs$cst$804$amount$$, 45E3, $cljs$cst$811$description$$, "Project coordination. 18 months at $2,500/month."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Travel \x26 Overhead", $APP.$cljs$cst$381$title$$, "Team Travel", $cljs$cst$804$amount$$, 
49E3, $cljs$cst$811$description$$, "International and regional travel for core team during scouting, installation, opening week, and milestones."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Travel \x26 Overhead", $APP.$cljs$cst$381$title$$, "Team Lodging", $cljs$cst$804$amount$$, 7500, $cljs$cst$811$description$$, "Accommodation for core team during opening week and critical on-site periods in Venice."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 
4, [$APP.$cljs$cst$584$group$$, "Travel \x26 Overhead", $APP.$cljs$cst$381$title$$, "Misc", $cljs$cst$804$amount$$, 5500, $cljs$cst$811$description$$, "Miscellaneous administrative expenses, software, tools, and incidentals. 11 months at $500/month."], null)], null)], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$200$id$$, $cljs$cst$816$la_prod$$, $APP.$cljs$cst$381$title$$, "LA Production", $cljs$cst$811$description$$, "Los Angeles–based production: skilled labor, casting, mold-making, materials, studio overhead, and supplies—ensuring museum-grade fabrication and crating prior to shipment to Venice.", 
$cljs$cst$805$details$$, new $APP.$cljs$core$PersistentVector$$(null, 21, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Labor", $APP.$cljs$cst$381$title$$, "Lead Caster", $cljs$cst$804$amount$$, 37625, $cljs$cst$811$description$$, "Lead caster. 5 months at $7,525/month."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Labor", $APP.$cljs$cst$381$title$$, "Caster", $cljs$cst$804$amount$$, 
22500, $cljs$cst$811$description$$, "Casting professional. 5 months at $4,500/month."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Labor", $APP.$cljs$cst$381$title$$, "General Assistant", $cljs$cst$804$amount$$, 21500, $cljs$cst$811$description$$, "General production assistant. 5 months at $4,300/month."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Labor", $APP.$cljs$cst$381$title$$, "Mold Maker", $cljs$cst$804$amount$$, 
15E3, $cljs$cst$811$description$$, "Specialist mold maker. 2 months at $7,500/month."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Labor", $APP.$cljs$cst$381$title$$, "Foam Sprayer", $cljs$cst$804$amount$$, 9E3, $cljs$cst$811$description$$, "Contract foam sprayer for structural cores. 2 months at $4,500/month."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Labor", $APP.$cljs$cst$381$title$$, "Casting Asst. ×3", 
$cljs$cst$804$amount$$, 9E3, $cljs$cst$811$description$$, "3 casting assistants. 2 months at $1,500/month each."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Labor", $APP.$cljs$cst$381$title$$, "Packers ×4", $cljs$cst$804$amount$$, 14E3, $cljs$cst$811$description$$, "4 packers for crating and shipping prep. 1 month at $3,500 each."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Labor", $APP.$cljs$cst$381$title$$, 
"Crate Makers ×2", $cljs$cst$804$amount$$, 1E4, $cljs$cst$811$description$$, "2 crate makers for custom shipping crates. 1 month at $5,000 each."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Overhead", $APP.$cljs$cst$381$title$$, "Studio Rental", $cljs$cst$804$amount$$, 22500, $cljs$cst$811$description$$, "LA studio rent for fabrication. 5 months at $4,500/month."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Overhead", 
$APP.$cljs$cst$381$title$$, "Foam Space Rental", $cljs$cst$804$amount$$, 5500, $cljs$cst$811$description$$, "Additional foam production space rental. 2 months at $2,750/month."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Overhead", $APP.$cljs$cst$381$title$$, "Utilities", $cljs$cst$804$amount$$, 3E3, $cljs$cst$811$description$$, "Utilities for the LA production facility. 2 months at $1,500/month."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 
4, [$APP.$cljs$cst$584$group$$, "Materials", $APP.$cljs$cst$381$title$$, "Pigment", $cljs$cst$804$amount$$, 11500, $cljs$cst$811$description$$, "High-quality pigments integrated into plaster at casting."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Materials", $APP.$cljs$cst$381$title$$, "Honeycomb", $cljs$cst$804$amount$$, 1500, $cljs$cst$811$description$$, "Structural honeycomb material for lightweight internal reinforcement."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 
4, [$APP.$cljs$cst$584$group$$, "Materials", $APP.$cljs$cst$381$title$$, "Polymers", $cljs$cst$804$amount$$, 1500, $cljs$cst$811$description$$, "Binders and polymer materials used in finishing and protection."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Materials", $APP.$cljs$cst$381$title$$, "Foam Material", $cljs$cst$804$amount$$, 21E3, $cljs$cst$811$description$$, "Lightweight foam cores for structural integrity while minimizing shipping weight."], 
null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Materials", $APP.$cljs$cst$381$title$$, "Plaster", $cljs$cst$804$amount$$, 4500, $cljs$cst$811$description$$, "Primary casting material for all sculptural units."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Materials", $APP.$cljs$cst$381$title$$, "Supplies", $cljs$cst$804$amount$$, 10500, $cljs$cst$811$description$$, "Consumable supplies used during casting and finishing."], 
null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Materials", $APP.$cljs$cst$381$title$$, "Mold Supplies", $cljs$cst$804$amount$$, 17500, $cljs$cst$811$description$$, "Custom mold materials, CNC mother units, and fabrication aids."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Materials", $APP.$cljs$cst$381$title$$, "Crate Materials", $cljs$cst$804$amount$$, 15E3, $cljs$cst$811$description$$, "Materials for constructing custom shipping crates."], 
null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Materials", $APP.$cljs$cst$381$title$$, "Packing Supplies", $cljs$cst$804$amount$$, 5E3, $cljs$cst$811$description$$, "Packing materials for securing artwork during international transit."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Materials", $APP.$cljs$cst$381$title$$, "Misc", $cljs$cst$804$amount$$, 7500, $cljs$cst$811$description$$, "Miscellaneous production expenses. 5 months at $1,500/month."], 
null)], null)], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$200$id$$, $cljs$cst$817$the_studio$$, $APP.$cljs$cst$381$title$$, "The Studio", $cljs$cst$811$description$$, "On-site operation of THE STUDIO in Venice: staffing, installation and de-installation crews, local materials, and daily production—supporting continuous fabrication and reconfiguration throughout the Biennale.", $cljs$cst$805$details$$, new $APP.$cljs$core$PersistentVector$$(null, 15, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, 
[new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Staff", $APP.$cljs$cst$381$title$$, "Studio Asst. #1", $cljs$cst$804$amount$$, 54E3, $cljs$cst$811$description$$, "Full-time studio assistant. 9 months at $6,000/month."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Staff", $APP.$cljs$cst$381$title$$, "Studio Asst. #2", $cljs$cst$804$amount$$, 46500, $cljs$cst$811$description$$, "Studio assistant. 6 months at $6,000 + 3 months at $3,500."], 
null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Staff", $APP.$cljs$cst$381$title$$, "Studio Asst. #3", $cljs$cst$804$amount$$, 23500, $cljs$cst$811$description$$, "Studio assistant. 1 month at $6,000 + 5 months at $3,500."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Staff", $APP.$cljs$cst$381$title$$, "Studio Asst. #4", $cljs$cst$804$amount$$, 23500, $cljs$cst$811$description$$, "Studio assistant. 1 month at $6,000 + 5 months at $3,500."], 
null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Staff", $APP.$cljs$cst$381$title$$, "Studio Asst. #5", $cljs$cst$804$amount$$, 6E3, $cljs$cst$811$description$$, "Temporary studio assistant. 1 month at $6,000."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Staff", $APP.$cljs$cst$381$title$$, "Studio Asst. #6", $cljs$cst$804$amount$$, 6E3, $cljs$cst$811$description$$, "Temporary studio assistant. 1 month at $6,000."], 
null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Install / Uninstall", $APP.$cljs$cst$381$title$$, "Installers ×4", $cljs$cst$804$amount$$, 32E3, $cljs$cst$811$description$$, "4 installers for install and uninstall. 2 engagements at $4,000 each."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Install / Uninstall", $APP.$cljs$cst$381$title$$, "Crate Makers ×2", $cljs$cst$804$amount$$, 11E3, $cljs$cst$811$description$$, 
"2 crate makers for Venice de-install crating. 1 engagement at $5,500 each."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Materials", $APP.$cljs$cst$381$title$$, "Foam Material", $cljs$cst$804$amount$$, 11500, $cljs$cst$811$description$$, "Venice-sourced foam materials for ongoing on-site fabrication."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Materials", $APP.$cljs$cst$381$title$$, "Pigment", $cljs$cst$804$amount$$, 
6750, $cljs$cst$811$description$$, "Pigments for on-site casting and finishing work."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Materials", $APP.$cljs$cst$381$title$$, "Plaster", $cljs$cst$804$amount$$, 4750, $cljs$cst$811$description$$, "Plaster for on-site sculptural production."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Materials", $APP.$cljs$cst$381$title$$, "Supplies", $cljs$cst$804$amount$$, 4750, 
$cljs$cst$811$description$$, "Consumable supplies for ongoing studio activity."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Materials", $APP.$cljs$cst$381$title$$, "Crate Materials", $cljs$cst$804$amount$$, 7500, $cljs$cst$811$description$$, "Materials for crating artwork for return shipment."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Materials", $APP.$cljs$cst$381$title$$, "Packing Supplies", $cljs$cst$804$amount$$, 
2500, $cljs$cst$811$description$$, "Packing materials for securing artwork at close-out."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Materials", $APP.$cljs$cst$381$title$$, "Misc Materials", $cljs$cst$804$amount$$, 4250, $cljs$cst$811$description$$, "Miscellaneous materials and expendables for studio operations."], null)], null)], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$200$id$$, $cljs$cst$818$logistics$$, $APP.$cljs$cst$381$title$$, 
"Logistics \x26 Transport", $cljs$cst$811$description$$, "International and local transport under Biennale conditions: freight, insurance, port handling, lagoon barge transport, forklift operations, storage, and reverse logistics for return shipment.", $cljs$cst$805$details$$, new $APP.$cljs$core$PersistentVector$$(null, 17, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "International Freight", $APP.$cljs$cst$381$title$$, 
"Ship LA → Venice", $cljs$cst$804$amount$$, 3E4, $cljs$cst$811$description$$, "International freight from Los Angeles to Venice for all crated artwork and materials."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "International Freight", $APP.$cljs$cst$381$title$$, "Ship Venice → LA", $cljs$cst$804$amount$$, 3E4, $cljs$cst$811$description$$, "Return international freight from Venice to Los Angeles after close-out."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 
4, [$APP.$cljs$cst$584$group$$, "International Freight", $APP.$cljs$cst$381$title$$, "Transit Insurance", $cljs$cst$804$amount$$, 12E3, $cljs$cst$811$description$$, "Insurance coverage for artwork during international transit."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Install / Uninstall", $APP.$cljs$cst$381$title$$, "Installers (Venice)", $cljs$cst$804$amount$$, 7200, $cljs$cst$811$description$$, "Local Venice installation crew. 4 installers for on-site install."], 
null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Install / Uninstall", $APP.$cljs$cst$381$title$$, "Uninstallers (Venice)", $cljs$cst$804$amount$$, 9E3, $cljs$cst$811$description$$, "Local Venice de-installation crew. 5 uninstallers for close-out."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Local Transport", $APP.$cljs$cst$381$title$$, "Port Handling", $cljs$cst$804$amount$$, 2500, $cljs$cst$811$description$$, "Offloading crates at Venice port; includes terminal fees and labor."], 
null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Local Transport", $APP.$cljs$cst$381$title$$, "Barge (Port → Stor.)", $cljs$cst$804$amount$$, 3E3, $cljs$cst$811$description$$, "Lagoon barge transport for crates from port to storage facility."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Local Transport", $APP.$cljs$cst$381$title$$, "Trucking (Stor. → Venue)", $cljs$cst$804$amount$$, 1200, $cljs$cst$811$description$$, 
"Truck transport from storage depot to Biennale venue access point."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Local Transport", $APP.$cljs$cst$381$title$$, "Barge (Stor. → Venue)", $cljs$cst$804$amount$$, 3E3, $cljs$cst$811$description$$, "Barge shipping for crates/materials to venue area via Venice canals."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Local Transport", $APP.$cljs$cst$381$title$$, "Forklift \x26 Operator", 
$cljs$cst$804$amount$$, 1300, $cljs$cst$811$description$$, "Forklift + licensed operator for unloading/loading at venue. 2 days at $650/day."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Local Transport", $APP.$cljs$cst$381$title$$, "Handling Crew", $cljs$cst$804$amount$$, 500, $cljs$cst$811$description$$, "Movers for crate handling, navigation of canals and venue access."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, 
"Storage", $APP.$cljs$cst$381$title$$, "Short-Term Storage", $cljs$cst$804$amount$$, 1200, $cljs$cst$811$description$$, "Storage of crates between arrival and installation. 60 crates for 20 days."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Storage", $APP.$cljs$cst$381$title$$, "Empty Crate Storage", $cljs$cst$804$amount$$, 2E3, $cljs$cst$811$description$$, "Storage of empty crates during the Biennale exhibition run. 200 days."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 
4, [$APP.$cljs$cst$584$group$$, "Storage", $APP.$cljs$cst$381$title$$, "Waste Removal", $cljs$cst$804$amount$$, 1E3, $cljs$cst$811$description$$, "Removal of packing material, foam waste, and install debris."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Reverse Logistics", $APP.$cljs$cst$381$title$$, "Reverse Barge", $cljs$cst$804$amount$$, 3E3, $cljs$cst$811$description$$, "Return transport of crates/materials after uninstall."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 
4, [$APP.$cljs$cst$584$group$$, "Reverse Logistics", $APP.$cljs$cst$381$title$$, "Reverse Trucking", $cljs$cst$804$amount$$, 1200, $cljs$cst$811$description$$, "Transport of crates back to port for outbound shipping."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Reverse Logistics", $APP.$cljs$cst$381$title$$, "Reverse Port Handling", $cljs$cst$804$amount$$, 2500, $cljs$cst$811$description$$, "Terminal fees + labor for reloading outbound container."], null)], 
null)], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$200$id$$, $cljs$cst$819$opening$$, $APP.$cljs$cst$381$title$$, "Opening Week", $cljs$cst$811$description$$, "Opening reception and first public visibility of the Pavilion: hospitality, staffing, technical support, press and VIP coordination—executed during the Biennale's most compressed period.", $cljs$cst$805$details$$, new $APP.$cljs$core$PersistentVector$$(null, 11, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, 
[new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Hospitality", $APP.$cljs$cst$381$title$$, "Catering — Food", $cljs$cst$804$amount$$, 5250, $cljs$cst$811$description$$, "Passed hors d'oeuvres for opening night reception. 75 guests at $70/guest."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Hospitality", $APP.$cljs$cst$381$title$$, "Catering — Beverages", $cljs$cst$804$amount$$, 1500, $cljs$cst$811$description$$, "Prosecco, wine, and non-alcoholic drinks. 100 guests at $15/guest."], 
null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Hospitality", $APP.$cljs$cst$381$title$$, "Catering Staff", $cljs$cst$804$amount$$, 1500, $cljs$cst$811$description$$, "3–6 servers + 1 event captain for opening night."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Hospitality", $APP.$cljs$cst$381$title$$, "Rentals", $cljs$cst$804$amount$$, 1500, $cljs$cst$811$description$$, "Tables, linens, glassware; Venice incurs transport surcharges due to canals."], 
null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Event Ops", $APP.$cljs$cst$381$title$$, "Event Coordinator", $cljs$cst$804$amount$$, 1500, $cljs$cst$811$description$$, "Scheduling, setup, guest flow, liaising with pavilion staff and caterer."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Event Ops", $APP.$cljs$cst$381$title$$, "Security", $cljs$cst$804$amount$$, 800, $cljs$cst$811$description$$, "Safe capacity management at openings per Biennale requirements."], 
null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Event Ops", $APP.$cljs$cst$381$title$$, "Audio, Light \x26 Tech", $cljs$cst$804$amount$$, 1E3, $cljs$cst$811$description$$, "Small speaker system, microphone, ambient lighting reinforcement."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Event Ops", $APP.$cljs$cst$381$title$$, "Event Photography", $cljs$cst$804$amount$$, 500, $cljs$cst$811$description$$, "Opening night event photography coverage."], 
null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Event Ops", $APP.$cljs$cst$381$title$$, "Invitations", $cljs$cst$804$amount$$, 500, $cljs$cst$811$description$$, "Printing or premium digital distribution of invitations."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "VIP Programs", $APP.$cljs$cst$381$title$$, "VIP Press Preview", $cljs$cst$804$amount$$, 1500, $cljs$cst$811$description$$, "Staff + scheduling for VIP/press walkthroughs during opening week."], 
null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "VIP Programs", $APP.$cljs$cst$381$title$$, "VIP Water Taxi", $cljs$cst$804$amount$$, 1500, $cljs$cst$811$description$$, "Transport allowance for VIPs/officials. 8 rides at $120/ride."], null)], null)], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$200$id$$, $cljs$cst$820$marketing$$, $APP.$cljs$cst$381$title$$, "Marketing \x26 PR", $cljs$cst$811$description$$, "Visibility and communications: identity design, PR, advertising, social media, and press activity—positioning the Pavilion within the global Biennale discourse.", 
$cljs$cst$805$details$$, new $APP.$cljs$core$PersistentVector$$(null, 18, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Design", $APP.$cljs$cst$381$title$$, "Visual Identity", $cljs$cst$804$amount$$, 2500, $cljs$cst$811$description$$, "Design of pavilion identity, key visual and main poster."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Design", $APP.$cljs$cst$381$title$$, 
"Essentials Package", $cljs$cst$804$amount$$, 1500, $cljs$cst$811$description$$, "Press kit, invitations, social templates, digital ads."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Design", $APP.$cljs$cst$381$title$$, "Website \x26 Hosting", $cljs$cst$804$amount$$, 7500, $cljs$cst$811$description$$, "Design and hosting of the pavilion website."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Design", $APP.$cljs$cst$381$title$$, 
"OOH Design", $cljs$cst$804$amount$$, 1500, $cljs$cst$811$description$$, "Design for totems and out-of-home placements."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Design", $APP.$cljs$cst$381$title$$, "Exhibition Graphics", $cljs$cst$804$amount$$, 1500, $cljs$cst$811$description$$, "Entrance graphics, wall texts, wayfinding signage."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Writing", $APP.$cljs$cst$381$title$$, 
"Social Copywriting", $cljs$cst$804$amount$$, 1500, $cljs$cst$811$description$$, "Ongoing caption writing, messaging, narrative scripting."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Writing", $APP.$cljs$cst$381$title$$, "PR Writing", $cljs$cst$804$amount$$, 1500, $cljs$cst$811$description$$, "Speeches, press releases, media statements."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Advertising", $APP.$cljs$cst$381$title$$, 
"Totem Placement", $cljs$cst$804$amount$$, 8500, $cljs$cst$811$description$$, "Rental + printing + installation for Biennale duration."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Advertising", $APP.$cljs$cst$381$title$$, "Vaporetto Wraps", $cljs$cst$804$amount$$, 12500, $cljs$cst$811$description$$, "Rental + production for 2–3 vaporetto lines over Biennale duration."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, 
"Advertising", $APP.$cljs$cst$381$title$$, "Poster Printing", $cljs$cst$804$amount$$, 5E3, $cljs$cst$811$description$$, "250 posters at $20 each for venue and city placements."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Advertising", $APP.$cljs$cst$381$title$$, "Outdoor Posters", $cljs$cst$804$amount$$, 3E3, $cljs$cst$811$description$$, "Secondary placements across Venice — 50 posters at $60 each."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 
4, [$APP.$cljs$cst$584$group$$, "Advertising", $APP.$cljs$cst$381$title$$, "Social Media Ads", $cljs$cst$804$amount$$, 2500, $cljs$cst$811$description$$, "Instagram, Facebook, and TikTok ads for 7 months."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Advertising", $APP.$cljs$cst$381$title$$, "Social Campaign Mgmt", $cljs$cst$804$amount$$, 2500, $cljs$cst$811$description$$, "Strategy, posting, optimization, reporting."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 
4, [$APP.$cljs$cst$584$group$$, "Advertising", $APP.$cljs$cst$381$title$$, "Digital Pub Ads", $cljs$cst$804$amount$$, 2500, $cljs$cst$811$description$$, "Ads on e-flux, ArtNews, Hyperallergic, Frieze."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Advertising", $APP.$cljs$cst$381$title$$, "Print Pub Ads", $cljs$cst$804$amount$$, 5E3, $cljs$cst$811$description$$, "Artforum, Art Newspaper, and similar print publications."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 
4, [$APP.$cljs$cst$584$group$$, "PR", $APP.$cljs$cst$381$title$$, "PR — Pre-Opening", $cljs$cst$804$amount$$, 1500, $cljs$cst$811$description$$, "Press relations, writing, pitching, coordination."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "PR", $APP.$cljs$cst$381$title$$, "PR — Ongoing", $cljs$cst$804$amount$$, 1500, $cljs$cst$811$description$$, "Sustained PR, press tracking, releases, interviews over 7 months."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 
4, [$APP.$cljs$cst$584$group$$, "PR", $APP.$cljs$cst$381$title$$, "Marketing Mgmt Fee", $cljs$cst$804$amount$$, 2500, $cljs$cst$811$description$$, "Overall coordination of marketing and media buys."], null)], null)], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$200$id$$, $cljs$cst$821$publication$$, $APP.$cljs$cst$381$title$$, "Publications", $cljs$cst$811$description$$, "Catalogue and printed materials: commissioned texts, design, editing, printing, totes, and stationery—ensuring long-term scholarly and institutional presence.", 
$cljs$cst$805$details$$, new $APP.$cljs$core$PersistentVector$$(null, 12, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Writing", $APP.$cljs$cst$381$title$$, "Curatorial Essay", $cljs$cst$804$amount$$, 2500, $cljs$cst$811$description$$, "Primary curatorial essay for catalogue and website."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Writing", $APP.$cljs$cst$381$title$$, 
"Catalogue Essays", $cljs$cst$804$amount$$, 4E3, $cljs$cst$811$description$$, "Commissioned essays by 4 invited writers and scholars at $1,000 each."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Catalogue", $APP.$cljs$cst$381$title$$, "Design", $cljs$cst$804$amount$$, 7500, $cljs$cst$811$description$$, "Design of exhibition catalogue (120 pages, soft cover)."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Catalogue", 
$APP.$cljs$cst$381$title$$, "Editing \x26 Layout", $cljs$cst$804$amount$$, 2500, $cljs$cst$811$description$$, "Editing and layout of copy, images, and inserts."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Catalogue", $APP.$cljs$cst$381$title$$, "Printing", $cljs$cst$804$amount$$, 12E3, $cljs$cst$811$description$$, "High-quality color printing, 120 pages. 150 copies at $80 each."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, 
"Catalogue", $APP.$cljs$cst$381$title$$, "Proofs \x26 Shipping", $cljs$cst$804$amount$$, 1E3, $cljs$cst$811$description$$, "Proofs, shipping, and miscellaneous printing costs."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Tote", $APP.$cljs$cst$381$title$$, "Design", $cljs$cst$804$amount$$, 2500, $cljs$cst$811$description$$, "Design of exhibition totes."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Tote", $APP.$cljs$cst$381$title$$, 
"Printing", $cljs$cst$804$amount$$, 4500, $cljs$cst$811$description$$, "High-quality silkscreen run. 300 totes at $15 each."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Tote", $APP.$cljs$cst$381$title$$, "Proofs \x26 Shipping", $cljs$cst$804$amount$$, 1E3, $cljs$cst$811$description$$, "Proofs, shipping, and miscellaneous costs for totes."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Stationery", $APP.$cljs$cst$381$title$$, 
"Design", $cljs$cst$804$amount$$, 1500, $cljs$cst$811$description$$, "Cards, postcards, flyers design."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Stationery", $APP.$cljs$cst$381$title$$, "Printing", $cljs$cst$804$amount$$, 1500, $cljs$cst$811$description$$, "300 pieces at $5 each."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Stationery", $APP.$cljs$cst$381$title$$, "Proofs \x26 Shipping", $cljs$cst$804$amount$$, 
250, $cljs$cst$811$description$$, "Proofs, shipping, and miscellaneous stationery costs."], null)], null)], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$200$id$$, $cljs$cst$822$documentation$$, $APP.$cljs$cst$381$title$$, "Documentation", $cljs$cst$811$description$$, "Comprehensive visual documentation: cinema-quality film production, photography, sound recording, editing, social media deliverables, and archiving—supporting press visibility, scholarship, and institutional legacy.", 
$cljs$cst$805$details$$, new $APP.$cljs$core$PersistentVector$$(null, 12, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Production", $APP.$cljs$cst$381$title$$, "Camera \x26 Lighting", $cljs$cst$804$amount$$, 1E4, $cljs$cst$811$description$$, "Rental package for cinema cameras, lenses, lighting, audio kits."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Production", $APP.$cljs$cst$381$title$$, 
"DPs ×2", $cljs$cst$804$amount$$, 20400, $cljs$cst$811$description$$, "Lead cinematographers for install, opening, and walkthroughs. 2 DPs × 12 days × $850/day."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Production", $APP.$cljs$cst$381$title$$, "Assistant / Gaffer", $cljs$cst$804$amount$$, 4500, $cljs$cst$811$description$$, "Lighting and camera support during shoots. 10 days at $450/day."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, 
"Production", $APP.$cljs$cst$381$title$$, "Sound Recording", $cljs$cst$804$amount$$, 2800, $cljs$cst$811$description$$, "Location audio capture, ambient sound, dialogue. 8 days at $350/day."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Production", $APP.$cljs$cst$381$title$$, "Photo — Install", $cljs$cst$804$amount$$, 1750, $cljs$cst$811$description$$, "High-resolution documentation during installation. 5 days at $350/day."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 
4, [$APP.$cljs$cst$584$group$$, "Production", $APP.$cljs$cst$381$title$$, "Photo — Exhibition", $cljs$cst$804$amount$$, 1800, $cljs$cst$811$description$$, "Final artwork + pavilion architecture photography. 3 days at $600/day."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Production", $APP.$cljs$cst$381$title$$, "Photo — Opening", $cljs$cst$804$amount$$, 1400, $cljs$cst$811$description$$, "Coverage for VIP events, public programs, press preview. 2 days at $700/day."], 
null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Post", $APP.$cljs$cst$381$title$$, "Film Assembly", $cljs$cst$804$amount$$, 3E3, $cljs$cst$811$description$$, "Initial cut of installation and exhibition film. 6 days at $500/day."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Post", $APP.$cljs$cst$381$title$$, "Final Cut \x26 Color", $cljs$cst$804$amount$$, 2400, $cljs$cst$811$description$$, "Professional colorist and finishing for final delivery. 4 days at $600/day."], 
null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Post", $APP.$cljs$cst$381$title$$, "Sound Edit \x26 Mix", $cljs$cst$804$amount$$, 1600, $cljs$cst$811$description$$, "Cleanup, music integration, final audio polish. 4 days at $400/day."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Post", $APP.$cljs$cst$381$title$$, "Social Deliverables", $cljs$cst$804$amount$$, 6E3, $cljs$cst$811$description$$, "Short-form clips optimized for IG/FB/TikTok. 5 days at $1,200/day."], 
null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Post", $APP.$cljs$cst$381$title$$, "Backup \x26 Archive", $cljs$cst$804$amount$$, 750, $cljs$cst$811$description$$, "Redundancy, hard drives, digital archiving of all materials."], null)], null)], null)], null);
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$201$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$202$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$components$elements$budget$cost_breakdown$preview$$, "", null, null) : (void 0).call(null, $amp$components$elements$budget$cost_breakdown$preview$$, 
"", null, null)), $APP.$helix$core$register_BANG_$$($amp$components$elements$budget$cost_breakdown$preview$$, "amp.components.elements.budget.cost-breakdown/preview"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$201$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$202$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$components$elements$budget$cost_breakdown$details$$, "", null, null) : (void 0).call(null, $amp$components$elements$budget$cost_breakdown$details$$, 
"", null, null)), $APP.$helix$core$register_BANG_$$($amp$components$elements$budget$cost_breakdown$details$$, "amp.components.elements.budget.cost-breakdown/details"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$201$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$202$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$components$elements$budget$cost_breakdown$footer$$, "", null, null) : (void 0).call(null, $amp$components$elements$budget$cost_breakdown$footer$$, 
"", null, null)), $APP.$helix$core$register_BANG_$$($amp$components$elements$budget$cost_breakdown$footer$$, "amp.components.elements.budget.cost-breakdown/footer"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$201$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$202$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$components$elements$budget$cost_breakdown$cost_breakdown$$, "", null, null) : (void 0).call(null, $amp$components$elements$budget$cost_breakdown$cost_breakdown$$, 
"", null, null)), $APP.$helix$core$register_BANG_$$($amp$components$elements$budget$cost_breakdown$cost_breakdown$$, "amp.components.elements.budget.cost-breakdown/cost-breakdown"));
var $amp$components$elements$budget$location_section$lazy_video$$ = $APP.$amp$utils$lazy_loading$lazy_component_STAR_$$(new $APP.$shadow$lazy$Loadable$$(new $APP.$cljs$core$PersistentVector$$(null, 1, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, ["video-background"], null), function() {
  return $APP.$amp$components$elements$video_background$video_background$$;
}));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$201$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$202$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$components$elements$budget$location_section$preview_text$$, "", null, null) : (void 0).call(null, $amp$components$elements$budget$location_section$preview_text$$, 
"", null, null)), $APP.$helix$core$register_BANG_$$($amp$components$elements$budget$location_section$preview_text$$, "amp.components.elements.budget.location-section/preview-text"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$201$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$202$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$components$elements$budget$location_section$preview$$, "", null, null) : (void 0).call(null, $amp$components$elements$budget$location_section$preview$$, 
"", null, null)), $APP.$helix$core$register_BANG_$$($amp$components$elements$budget$location_section$preview$$, "amp.components.elements.budget.location-section/preview"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$201$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$202$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$components$elements$budget$location_section$full_details$$, '(use-touch-enabled)(hooks/use-ref "outer-ctx")(use-intersection-observer outer-ctx)(use-touch-enabled)(hooks/use-ref "outer-ctx")(use-intersection-observer outer-ctx)', 
null, null) : (void 0).call(null, $amp$components$elements$budget$location_section$full_details$$, '(use-touch-enabled)(hooks/use-ref "outer-ctx")(use-intersection-observer outer-ctx)(use-touch-enabled)(hooks/use-ref "outer-ctx")(use-intersection-observer outer-ctx)', null, null)), $APP.$helix$core$register_BANG_$$($amp$components$elements$budget$location_section$full_details$$, "amp.components.elements.budget.location-section/full-details"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$201$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$202$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$components$elements$budget$location_section$location_section$$, "", null, null) : (void 0).call(null, $amp$components$elements$budget$location_section$location_section$$, 
"", null, null)), $APP.$helix$core$register_BANG_$$($amp$components$elements$budget$location_section$location_section$$, "amp.components.elements.budget.location-section/location-section"));
var $amp$components$elements$budget$cash_flow$cashflow_data$$ = new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$cljs$cst$823$debt_raised$$, 0, $cljs$cst$824$funds_raised$$, 175000, $cljs$cst$825$cash_flow_model$$, $APP.$cljs$core$PersistentVector$fromArray$$([new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$200$id$$, $cljs$cst$826$admin_jul_25$$, $APP.$cljs$cst$381$title$$, "Admin — Core Team (Jul)", $cljs$cst$827$due$$, "2025-07-15", $cljs$cst$804$amount$$, 10000, $cljs$cst$828$priority$$, 
$cljs$cst$829$normal$$, $APP.$cljs$cst$12$status$$, $cljs$cst$830$paid$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$200$id$$, $cljs$cst$831$contingency_jul_25$$, $APP.$cljs$cst$381$title$$, "Contingency (Jul)", $cljs$cst$827$due$$, "2025-07-20", $cljs$cst$804$amount$$, 500, $cljs$cst$828$priority$$, $cljs$cst$829$normal$$, $APP.$cljs$cst$12$status$$, $cljs$cst$830$paid$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$200$id$$, $cljs$cst$832$admin_aug_25$$, 
$APP.$cljs$cst$381$title$$, "Admin — Core Team (Aug)", $cljs$cst$827$due$$, "2025-08-15", $cljs$cst$804$amount$$, 10000, $cljs$cst$828$priority$$, $cljs$cst$829$normal$$, $APP.$cljs$cst$12$status$$, $cljs$cst$830$paid$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$200$id$$, $cljs$cst$833$contingency_aug_25$$, $APP.$cljs$cst$381$title$$, "Contingency (Aug)", $cljs$cst$827$due$$, "2025-08-20", $cljs$cst$804$amount$$, 500, $cljs$cst$828$priority$$, $cljs$cst$829$normal$$, 
$APP.$cljs$cst$12$status$$, $cljs$cst$830$paid$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$200$id$$, $cljs$cst$834$venice_sep_25$$, $APP.$cljs$cst$381$title$$, "Venice — Lodging \x26 Per Diem (Sep)", $cljs$cst$827$due$$, "2025-09-05", $cljs$cst$804$amount$$, 13000, $cljs$cst$828$priority$$, $cljs$cst$829$normal$$, $APP.$cljs$cst$12$status$$, $cljs$cst$830$paid$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$200$id$$, $cljs$cst$835$admin_sep_25$$, 
$APP.$cljs$cst$381$title$$, "Admin — Core Team + Travel (Sep)", $cljs$cst$827$due$$, "2025-09-15", $cljs$cst$804$amount$$, 20000, $cljs$cst$828$priority$$, $cljs$cst$836$high$$, $APP.$cljs$cst$12$status$$, $cljs$cst$830$paid$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$200$id$$, $cljs$cst$837$contingency_sep_25$$, $APP.$cljs$cst$381$title$$, "Contingency (Sep)", $cljs$cst$827$due$$, "2025-09-20", $cljs$cst$804$amount$$, 650, $cljs$cst$828$priority$$, $cljs$cst$829$normal$$, 
$APP.$cljs$cst$12$status$$, $cljs$cst$830$paid$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$200$id$$, $cljs$cst$838$venice_oct_25$$, $APP.$cljs$cst$381$title$$, "Venice — Lodging \x26 Per Diem (Oct)", $cljs$cst$827$due$$, "2025-10-05", $cljs$cst$804$amount$$, 13E3, $cljs$cst$828$priority$$, $cljs$cst$829$normal$$, $APP.$cljs$cst$12$status$$, $cljs$cst$830$paid$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$200$id$$, $cljs$cst$839$admin_oct_25$$, 
$APP.$cljs$cst$381$title$$, "Admin — Core Team + Travel (Oct)", $cljs$cst$827$due$$, "2025-10-15", $cljs$cst$804$amount$$, 2E4, $cljs$cst$828$priority$$, $cljs$cst$836$high$$, $APP.$cljs$cst$12$status$$, $cljs$cst$830$paid$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$200$id$$, $cljs$cst$840$contingency_oct_25$$, $APP.$cljs$cst$381$title$$, "Contingency (Oct)", $cljs$cst$827$due$$, "2025-10-20", $cljs$cst$804$amount$$, 650, $cljs$cst$828$priority$$, $cljs$cst$829$normal$$, 
$APP.$cljs$cst$12$status$$, $cljs$cst$830$paid$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$200$id$$, $cljs$cst$841$la_nov_25$$, $APP.$cljs$cst$381$title$$, "LA Production — Phase 1 Startup (Nov)", $cljs$cst$827$due$$, "2025-11-10", $cljs$cst$804$amount$$, 31325, $cljs$cst$828$priority$$, $cljs$cst$836$high$$, $APP.$cljs$cst$12$status$$, $cljs$cst$830$paid$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$200$id$$, $cljs$cst$842$admin_nov_25$$, 
$APP.$cljs$cst$381$title$$, "Admin — Core Team (Nov)", $cljs$cst$827$due$$, "2025-11-15", $cljs$cst$804$amount$$, 1E4, $cljs$cst$828$priority$$, $cljs$cst$829$normal$$, $APP.$cljs$cst$12$status$$, $cljs$cst$830$paid$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$200$id$$, $cljs$cst$843$contingency_nov_25$$, $APP.$cljs$cst$381$title$$, "Contingency (Nov)", $cljs$cst$827$due$$, "2025-11-20", $cljs$cst$804$amount$$, 1566, $cljs$cst$828$priority$$, $cljs$cst$829$normal$$, 
$APP.$cljs$cst$12$status$$, $cljs$cst$830$paid$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$200$id$$, $cljs$cst$844$la_dec_25$$, $APP.$cljs$cst$381$title$$, "LA Production — Phase 1 Continued (Dec)", $cljs$cst$827$due$$, "2025-12-10", $cljs$cst$804$amount$$, 31325, $cljs$cst$828$priority$$, $cljs$cst$836$high$$, $APP.$cljs$cst$12$status$$, $cljs$cst$830$paid$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$200$id$$, $cljs$cst$845$admin_dec_25$$, 
$APP.$cljs$cst$381$title$$, "Admin — Core Team (Dec)", $cljs$cst$827$due$$, "2025-12-15", $cljs$cst$804$amount$$, 1E4, $cljs$cst$828$priority$$, $cljs$cst$829$normal$$, $APP.$cljs$cst$12$status$$, $cljs$cst$830$paid$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$200$id$$, $cljs$cst$846$contingency_dec_25$$, $APP.$cljs$cst$381$title$$, "Contingency (Dec)", $cljs$cst$827$due$$, "2025-12-20", $cljs$cst$804$amount$$, 1566, $cljs$cst$828$priority$$, $cljs$cst$829$normal$$, 
$APP.$cljs$cst$12$status$$, $cljs$cst$830$paid$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$200$id$$, $cljs$cst$847$venice_jan_26$$, $APP.$cljs$cst$381$title$$, "Venice — Venue Tranche 1 (10%)", $cljs$cst$827$due$$, "2026-01-05", $cljs$cst$804$amount$$, 30650, $cljs$cst$828$priority$$, $cljs$cst$848$critical$$, $APP.$cljs$cst$12$status$$, $cljs$cst$830$paid$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$200$id$$, $cljs$cst$849$la_jan_26$$, 
$APP.$cljs$cst$381$title$$, "LA Production — Phase 2 (Jan)", $cljs$cst$827$due$$, "2026-01-10", $cljs$cst$804$amount$$, 30325, $cljs$cst$828$priority$$, $cljs$cst$836$high$$, $APP.$cljs$cst$12$status$$, $cljs$cst$830$paid$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$200$id$$, $cljs$cst$850$admin_jan_26$$, $APP.$cljs$cst$381$title$$, "Admin — Core Team (Jan)", $cljs$cst$827$due$$, "2026-01-15", $cljs$cst$804$amount$$, 1E4, $cljs$cst$828$priority$$, $cljs$cst$829$normal$$, 
$APP.$cljs$cst$12$status$$, $cljs$cst$830$paid$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$200$id$$, $cljs$cst$851$contingency_jan_26$$, $APP.$cljs$cst$381$title$$, "Contingency (Jan)", $cljs$cst$827$due$$, "2026-01-20", $cljs$cst$804$amount$$, 3049, $cljs$cst$828$priority$$, $cljs$cst$829$normal$$, $APP.$cljs$cst$12$status$$, $cljs$cst$830$paid$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$200$id$$, $cljs$cst$852$venice_feb_26$$, $APP.$cljs$cst$381$title$$, 
"Venice — Venue Tranche 2 + 3 (60%)", $cljs$cst$827$due$$, "2026-02-05", $cljs$cst$804$amount$$, 183900, $cljs$cst$828$priority$$, $cljs$cst$848$critical$$, $APP.$cljs$cst$12$status$$, $APP.$cljs$cst$14$pending$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$200$id$$, $cljs$cst$853$la_feb_26$$, $APP.$cljs$cst$381$title$$, "LA Production — Phase 3 (Feb)", $cljs$cst$827$due$$, "2026-02-10", $cljs$cst$804$amount$$, 74825, $cljs$cst$828$priority$$, $cljs$cst$848$critical$$, 
$APP.$cljs$cst$12$status$$, $APP.$cljs$cst$14$pending$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$200$id$$, $cljs$cst$854$admin_feb_26$$, $APP.$cljs$cst$381$title$$, "Admin — Core Team + Misc (Feb)", $cljs$cst$827$due$$, "2026-02-15", $cljs$cst$804$amount$$, 10500, $cljs$cst$828$priority$$, $cljs$cst$836$high$$, $APP.$cljs$cst$12$status$$, $APP.$cljs$cst$14$pending$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$200$id$$, $cljs$cst$855$contingency_feb_26$$, 
$APP.$cljs$cst$381$title$$, "Contingency (Feb)", $cljs$cst$827$due$$, "2026-02-20", $cljs$cst$804$amount$$, 12936, $cljs$cst$828$priority$$, $cljs$cst$829$normal$$, $APP.$cljs$cst$12$status$$, $APP.$cljs$cst$14$pending$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$200$id$$, $cljs$cst$856$venice_mar_26$$, $APP.$cljs$cst$381$title$$, "Venice — Venue Tranche 4 + Logistics (Outbound) + Setup", $cljs$cst$827$due$$, "2026-03-05", $cljs$cst$804$amount$$, 172200, $cljs$cst$828$priority$$, 
$cljs$cst$848$critical$$, $APP.$cljs$cst$12$status$$, $APP.$cljs$cst$14$pending$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$200$id$$, $cljs$cst$857$la_mar_26$$, $APP.$cljs$cst$381$title$$, "LA Production — Final Phase + Crating (Mar)", $cljs$cst$827$due$$, "2026-03-10", $cljs$cst$804$amount$$, 97325, $cljs$cst$828$priority$$, $cljs$cst$848$critical$$, $APP.$cljs$cst$12$status$$, $APP.$cljs$cst$14$pending$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, 
[$APP.$cljs$cst$200$id$$, $cljs$cst$858$admin_mar_26$$, $APP.$cljs$cst$381$title$$, "Admin — Core Team + Misc (Mar)", $cljs$cst$827$due$$, "2026-03-15", $cljs$cst$804$amount$$, 10500, $cljs$cst$828$priority$$, $cljs$cst$836$high$$, $APP.$cljs$cst$12$status$$, $APP.$cljs$cst$14$pending$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$200$id$$, $cljs$cst$859$contingency_mar_26$$, $APP.$cljs$cst$381$title$$, "Contingency (Mar)", $cljs$cst$827$due$$, "2026-03-20", $cljs$cst$804$amount$$, 
13476, $cljs$cst$828$priority$$, $cljs$cst$829$normal$$, $APP.$cljs$cst$12$status$$, $APP.$cljs$cst$14$pending$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$200$id$$, $cljs$cst$860$venice_apr_26$$, $APP.$cljs$cst$381$title$$, "Venice — Opening Month + Studio Launch + Operations", $cljs$cst$827$due$$, "2026-04-05", $cljs$cst$804$amount$$, 110267, $cljs$cst$828$priority$$, $cljs$cst$848$critical$$, $APP.$cljs$cst$12$status$$, $APP.$cljs$cst$14$pending$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 
6, [$APP.$cljs$cst$200$id$$, $cljs$cst$861$admin_apr_26$$, $APP.$cljs$cst$381$title$$, "Admin — Core Team + Travel + Lodging (Apr)", $cljs$cst$827$due$$, "2026-04-15", $cljs$cst$804$amount$$, 33E3, $cljs$cst$828$priority$$, $cljs$cst$836$high$$, $APP.$cljs$cst$12$status$$, $APP.$cljs$cst$14$pending$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$200$id$$, $cljs$cst$862$contingency_apr_26$$, $APP.$cljs$cst$381$title$$, "Contingency (Apr)", $cljs$cst$827$due$$, "2026-04-20", 
$cljs$cst$804$amount$$, 5513, $cljs$cst$828$priority$$, $cljs$cst$829$normal$$, $APP.$cljs$cst$12$status$$, $APP.$cljs$cst$14$pending$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$200$id$$, $cljs$cst$863$venice_may_26$$, $APP.$cljs$cst$381$title$$, "Venice — Studio + Operations (May)", $cljs$cst$827$due$$, "2026-05-05", $cljs$cst$804$amount$$, 53717, $cljs$cst$828$priority$$, $cljs$cst$829$normal$$, $APP.$cljs$cst$12$status$$, $APP.$cljs$cst$14$pending$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 
6, [$APP.$cljs$cst$200$id$$, $cljs$cst$864$admin_may_26$$, $APP.$cljs$cst$381$title$$, "Admin — Core Team + Misc (May)", $cljs$cst$827$due$$, "2026-05-15", $cljs$cst$804$amount$$, 10500, $cljs$cst$828$priority$$, $cljs$cst$829$normal$$, $APP.$cljs$cst$12$status$$, $APP.$cljs$cst$14$pending$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$200$id$$, $cljs$cst$865$contingency_may_26$$, $APP.$cljs$cst$381$title$$, "Contingency (May)", $cljs$cst$827$due$$, "2026-05-20", $cljs$cst$804$amount$$, 
2686, $cljs$cst$828$priority$$, $cljs$cst$829$normal$$, $APP.$cljs$cst$12$status$$, $APP.$cljs$cst$14$pending$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$200$id$$, $cljs$cst$866$venice_jun_26$$, $APP.$cljs$cst$381$title$$, "Venice — Studio + Operations + Catalogue (Jun)", $cljs$cst$827$due$$, "2026-06-05", $cljs$cst$804$amount$$, 94467, $cljs$cst$828$priority$$, $cljs$cst$836$high$$, $APP.$cljs$cst$12$status$$, $APP.$cljs$cst$14$pending$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 
6, [$APP.$cljs$cst$200$id$$, $cljs$cst$867$admin_jun_26$$, $APP.$cljs$cst$381$title$$, "Admin — Core Team + Travel + Misc (Jun)", $cljs$cst$827$due$$, "2026-06-15", $cljs$cst$804$amount$$, 12500, $cljs$cst$828$priority$$, $cljs$cst$829$normal$$, $APP.$cljs$cst$12$status$$, $APP.$cljs$cst$14$pending$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$200$id$$, $cljs$cst$868$contingency_jun_26$$, $APP.$cljs$cst$381$title$$, "Contingency (Jun)", $cljs$cst$827$due$$, "2026-06-20", 
$cljs$cst$804$amount$$, 4723, $cljs$cst$828$priority$$, $cljs$cst$829$normal$$, $APP.$cljs$cst$12$status$$, $APP.$cljs$cst$14$pending$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$200$id$$, $cljs$cst$869$venice_jul_26$$, $APP.$cljs$cst$381$title$$, "Venice — Studio + Operations (Jul)", $cljs$cst$827$due$$, "2026-07-05", $cljs$cst$804$amount$$, 53717, $cljs$cst$828$priority$$, $cljs$cst$829$normal$$, $APP.$cljs$cst$12$status$$, $APP.$cljs$cst$14$pending$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 
6, [$APP.$cljs$cst$200$id$$, $cljs$cst$870$admin_jul_26$$, $APP.$cljs$cst$381$title$$, "Admin — Core Team + Misc (Jul)", $cljs$cst$827$due$$, "2026-07-15", $cljs$cst$804$amount$$, 10500, $cljs$cst$828$priority$$, $cljs$cst$829$normal$$, $APP.$cljs$cst$12$status$$, $APP.$cljs$cst$14$pending$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$200$id$$, $cljs$cst$871$contingency_jul_26$$, $APP.$cljs$cst$381$title$$, "Contingency (Jul)", $cljs$cst$827$due$$, "2026-07-20", $cljs$cst$804$amount$$, 
2686, $cljs$cst$828$priority$$, $cljs$cst$829$normal$$, $APP.$cljs$cst$12$status$$, $APP.$cljs$cst$14$pending$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$200$id$$, $cljs$cst$872$venice_aug_26$$, $APP.$cljs$cst$381$title$$, "Venice — Studio + Operations (Aug)", $cljs$cst$827$due$$, "2026-08-05", $cljs$cst$804$amount$$, 53717, $cljs$cst$828$priority$$, $cljs$cst$829$normal$$, $APP.$cljs$cst$12$status$$, $APP.$cljs$cst$14$pending$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 
6, [$APP.$cljs$cst$200$id$$, $cljs$cst$873$admin_aug_26$$, $APP.$cljs$cst$381$title$$, "Admin — Core Team + Misc (Aug)", $cljs$cst$827$due$$, "2026-08-15", $cljs$cst$804$amount$$, 10500, $cljs$cst$828$priority$$, $cljs$cst$829$normal$$, $APP.$cljs$cst$12$status$$, $APP.$cljs$cst$14$pending$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$200$id$$, $cljs$cst$874$contingency_aug_26$$, $APP.$cljs$cst$381$title$$, "Contingency (Aug)", $cljs$cst$827$due$$, "2026-08-20", $cljs$cst$804$amount$$, 
2686, $cljs$cst$828$priority$$, $cljs$cst$829$normal$$, $APP.$cljs$cst$12$status$$, $APP.$cljs$cst$14$pending$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$200$id$$, $cljs$cst$875$venice_sep_26$$, $APP.$cljs$cst$381$title$$, "Venice — Studio + Operations (Sep)", $cljs$cst$827$due$$, "2026-09-05", $cljs$cst$804$amount$$, 53717, $cljs$cst$828$priority$$, $cljs$cst$829$normal$$, $APP.$cljs$cst$12$status$$, $APP.$cljs$cst$14$pending$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 
6, [$APP.$cljs$cst$200$id$$, $cljs$cst$876$admin_sep_26$$, $APP.$cljs$cst$381$title$$, "Admin — Core Team + Travel + Misc (Sep)", $cljs$cst$827$due$$, "2026-09-15", $cljs$cst$804$amount$$, 12500, $cljs$cst$828$priority$$, $cljs$cst$829$normal$$, $APP.$cljs$cst$12$status$$, $APP.$cljs$cst$14$pending$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$200$id$$, $cljs$cst$877$contingency_sep_26$$, $APP.$cljs$cst$381$title$$, "Contingency (Sep)", $cljs$cst$827$due$$, "2026-09-20", 
$cljs$cst$804$amount$$, 2686, $cljs$cst$828$priority$$, $cljs$cst$829$normal$$, $APP.$cljs$cst$12$status$$, $APP.$cljs$cst$14$pending$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$200$id$$, $cljs$cst$878$venice_oct_26$$, $APP.$cljs$cst$381$title$$, "Venice — Studio + Operations (Oct)", $cljs$cst$827$due$$, "2026-10-05", $cljs$cst$804$amount$$, 42217, $cljs$cst$828$priority$$, $cljs$cst$829$normal$$, $APP.$cljs$cst$12$status$$, $APP.$cljs$cst$14$pending$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 
6, [$APP.$cljs$cst$200$id$$, $cljs$cst$879$admin_oct_26$$, $APP.$cljs$cst$381$title$$, "Admin — Core Team + Misc (Oct)", $cljs$cst$827$due$$, "2026-10-15", $cljs$cst$804$amount$$, 10500, $cljs$cst$828$priority$$, $cljs$cst$829$normal$$, $APP.$cljs$cst$12$status$$, $APP.$cljs$cst$14$pending$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$200$id$$, $cljs$cst$880$contingency_oct_26$$, $APP.$cljs$cst$381$title$$, "Contingency (Oct)", $cljs$cst$827$due$$, "2026-10-20", $cljs$cst$804$amount$$, 
2111, $cljs$cst$828$priority$$, $cljs$cst$829$normal$$, $APP.$cljs$cst$12$status$$, $APP.$cljs$cst$14$pending$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$200$id$$, $cljs$cst$881$venice_nov_26$$, $APP.$cljs$cst$381$title$$, "Venice — Studio + Operations (Nov)", $cljs$cst$827$due$$, "2026-11-05", $cljs$cst$804$amount$$, 42217, $cljs$cst$828$priority$$, $cljs$cst$829$normal$$, $APP.$cljs$cst$12$status$$, $APP.$cljs$cst$14$pending$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 
6, [$APP.$cljs$cst$200$id$$, $cljs$cst$882$admin_nov_26$$, $APP.$cljs$cst$381$title$$, "Admin — Core Team + Misc (Nov)", $cljs$cst$827$due$$, "2026-11-15", $cljs$cst$804$amount$$, 10500, $cljs$cst$828$priority$$, $cljs$cst$829$normal$$, $APP.$cljs$cst$12$status$$, $APP.$cljs$cst$14$pending$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$200$id$$, $cljs$cst$883$contingency_nov_26$$, $APP.$cljs$cst$381$title$$, "Contingency (Nov)", $cljs$cst$827$due$$, "2026-11-20", $cljs$cst$804$amount$$, 
2111, $cljs$cst$828$priority$$, $cljs$cst$829$normal$$, $APP.$cljs$cst$12$status$$, $APP.$cljs$cst$14$pending$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$200$id$$, $cljs$cst$884$venice_dec_26$$, $APP.$cljs$cst$381$title$$, "Venice — Close-out + Logistics (Return)", $cljs$cst$827$due$$, "2026-12-05", $cljs$cst$804$amount$$, 134517, $cljs$cst$828$priority$$, $cljs$cst$836$high$$, $APP.$cljs$cst$12$status$$, $APP.$cljs$cst$14$pending$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 
6, [$APP.$cljs$cst$200$id$$, $cljs$cst$885$admin_dec_26$$, $APP.$cljs$cst$381$title$$, "Admin — Core Team + Travel + Misc (Dec)", $cljs$cst$827$due$$, "2026-12-15", $cljs$cst$804$amount$$, 20500, $cljs$cst$828$priority$$, $cljs$cst$836$high$$, $APP.$cljs$cst$12$status$$, $APP.$cljs$cst$14$pending$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$200$id$$, $cljs$cst$886$contingency_dec_26$$, $APP.$cljs$cst$381$title$$, "Contingency (Dec)", $cljs$cst$827$due$$, "2026-12-20", 
$cljs$cst$804$amount$$, 6726, $cljs$cst$828$priority$$, $cljs$cst$829$normal$$, $APP.$cljs$cst$12$status$$, $APP.$cljs$cst$14$pending$$], null)], !0)], null);
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$201$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$202$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$components$elements$budget$cash_flow$timeline_node$$, '(hooks/use-ref nil)(hooks/use-effect :once (when (clojure.core/deref node-ref) (.fromTo gsap (clojure.core/deref node-ref) {:opacity 0, :x -20} {:opacity 1, :x 0, :duration 0.4, :delay (* idx 0.06), :ease "power2.out"})))', 
null, null) : (void 0).call(null, $amp$components$elements$budget$cash_flow$timeline_node$$, '(hooks/use-ref nil)(hooks/use-effect :once (when (clojure.core/deref node-ref) (.fromTo gsap (clojure.core/deref node-ref) {:opacity 0, :x -20} {:opacity 1, :x 0, :duration 0.4, :delay (* idx 0.06), :ease "power2.out"})))', null, null)), $APP.$helix$core$register_BANG_$$($amp$components$elements$budget$cash_flow$timeline_node$$, "amp.components.elements.budget.cash-flow/timeline-node"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$201$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$202$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$components$elements$budget$cash_flow$now_marker$$, '(hooks/use-ref nil)(hooks/use-effect :once (when (clojure.core/deref ref) (.fromTo gsap (clojure.core/deref ref) {:opacity 0, :scaleX 0} {:opacity 1, :scaleX 1, :duration 0.6, :delay 0.2, :ease "power3.out"})))', 
null, null) : (void 0).call(null, $amp$components$elements$budget$cash_flow$now_marker$$, '(hooks/use-ref nil)(hooks/use-effect :once (when (clojure.core/deref ref) (.fromTo gsap (clojure.core/deref ref) {:opacity 0, :scaleX 0} {:opacity 1, :scaleX 1, :duration 0.6, :delay 0.2, :ease "power3.out"})))', null, null)), $APP.$helix$core$register_BANG_$$($amp$components$elements$budget$cash_flow$now_marker$$, "amp.components.elements.budget.cash-flow/now-marker"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$201$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$202$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$components$elements$budget$cash_flow$month_header$$, '(hooks/use-ref nil)(hooks/use-effect :once (when (clojure.core/deref ref) (.fromTo gsap (clojure.core/deref ref) {:opacity 0, :y 8} {:opacity 1, :y 0, :duration 0.35, :delay (+ 0.1 (* idx 0.05)), :ease "power2.out"})))', 
null, null) : (void 0).call(null, $amp$components$elements$budget$cash_flow$month_header$$, '(hooks/use-ref nil)(hooks/use-effect :once (when (clojure.core/deref ref) (.fromTo gsap (clojure.core/deref ref) {:opacity 0, :y 8} {:opacity 1, :y 0, :duration 0.35, :delay (+ 0.1 (* idx 0.05)), :ease "power2.out"})))', null, null)), $APP.$helix$core$register_BANG_$$($amp$components$elements$budget$cash_flow$month_header$$, "amp.components.elements.budget.cash-flow/month-header"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$201$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$202$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$components$elements$budget$cash_flow$month_summary_row$$, '(hooks/use-ref nil)(hooks/use-effect :once (when (clojure.core/deref ref) (.fromTo gsap (clojure.core/deref ref) {:opacity 0, :x -16} {:opacity 1, :x 0, :duration 0.35, :delay (* idx 0.05), :ease "power2.out"})))', 
null, null) : (void 0).call(null, $amp$components$elements$budget$cash_flow$month_summary_row$$, '(hooks/use-ref nil)(hooks/use-effect :once (when (clojure.core/deref ref) (.fromTo gsap (clojure.core/deref ref) {:opacity 0, :x -16} {:opacity 1, :x 0, :duration 0.35, :delay (* idx 0.05), :ease "power2.out"})))', null, null)), $APP.$helix$core$register_BANG_$$($amp$components$elements$budget$cash_flow$month_summary_row$$, "amp.components.elements.budget.cash-flow/month-summary-row"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$201$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$202$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$components$elements$budget$cash_flow$view_toggle$$, "", null, null) : (void 0).call(null, $amp$components$elements$budget$cash_flow$view_toggle$$, 
"", null, null)), $APP.$helix$core$register_BANG_$$($amp$components$elements$budget$cash_flow$view_toggle$$, "amp.components.elements.budget.cash-flow/view-toggle"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$201$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$202$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$components$elements$budget$cash_flow$summary_header$$, '(hooks/use-ref nil)(hooks/use-effect :once (when (clojure.core/deref ref) (.fromTo gsap (clojure.core/deref ref) {:opacity 0, :y -12} {:opacity 1, :y 0, :duration 0.5, :ease "power2.out"})))', 
null, null) : (void 0).call(null, $amp$components$elements$budget$cash_flow$summary_header$$, '(hooks/use-ref nil)(hooks/use-effect :once (when (clojure.core/deref ref) (.fromTo gsap (clojure.core/deref ref) {:opacity 0, :y -12} {:opacity 1, :y 0, :duration 0.5, :ease "power2.out"})))', null, null)), $APP.$helix$core$register_BANG_$$($amp$components$elements$budget$cash_flow$summary_header$$, "amp.components.elements.budget.cash-flow/summary-header"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$201$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$202$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$components$elements$budget$cash_flow$cash_flow$$, '(hooks/use-state nil)(hooks/use-state false)(hooks/use-ref nil)(hooks/use-effect [entries] (when (and entries (clojure.core/deref container-ref)) (let [spine (.querySelector (clojure.core/deref container-ref) ".cf-spine")] (when spine (.fromTo gsap spine {:scaleY 0} {:scaleY 1, :duration 0.8, :delay 0.05, :ease "power3.out"})))))', 
null, null) : (void 0).call(null, $amp$components$elements$budget$cash_flow$cash_flow$$, '(hooks/use-state nil)(hooks/use-state false)(hooks/use-ref nil)(hooks/use-effect [entries] (when (and entries (clojure.core/deref container-ref)) (let [spine (.querySelector (clojure.core/deref container-ref) ".cf-spine")] (when spine (.fromTo gsap spine {:scaleY 0} {:scaleY 1, :duration 0.8, :delay 0.05, :ease "power3.out"})))))', null, null)), $APP.$helix$core$register_BANG_$$($amp$components$elements$budget$cash_flow$cash_flow$$, 
"amp.components.elements.budget.cash-flow/cash-flow"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$201$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$202$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$components$elements$budget$non_profit$non_profit$$, "", null, null) : (void 0).call(null, $amp$components$elements$budget$non_profit$non_profit$$, 
"", null, null)), $APP.$helix$core$register_BANG_$$($amp$components$elements$budget$non_profit$non_profit$$, "amp.components.elements.budget.non-profit/non-profit"));
var $amp$components$elements$budget$sponsors$sponsors$$ = new $APP.$cljs$core$PersistentVector$$(null, 5, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$191$name$$, "Tony Shafrazi", $cljs$cst$902$tier$$, $cljs$cst$903$founding_patron$$, $cljs$cst$904$logo$$, "images/graphics/tony_shafrazi_logo_lighter.svg", $APP.$cljs$cst$25$type$$, $cljs$cst$905$institution$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$191$name$$, 
"Armenian Fund USA", $cljs$cst$902$tier$$, $cljs$cst$903$founding_patron$$, $cljs$cst$904$logo$$, "images/graphics/armenia_fund_logo.svg", $APP.$cljs$cst$25$type$$, $cljs$cst$905$institution$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$191$name$$, "Khudikyan Family", $cljs$cst$902$tier$$, $cljs$cst$906$patron$$, $APP.$cljs$cst$25$type$$, $cljs$cst$907$individual$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$191$name$$, "Ourfalian Family", 
$cljs$cst$902$tier$$, $cljs$cst$906$patron$$, $APP.$cljs$cst$25$type$$, $cljs$cst$907$individual$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$191$name$$, "Sarafyan Family", $cljs$cst$902$tier$$, $cljs$cst$906$patron$$, $APP.$cljs$cst$25$type$$, $cljs$cst$907$individual$$], null)], null), $amp$components$elements$budget$sponsors$tier_meta$$ = new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$cljs$cst$903$founding_patron$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 
4, [$cljs$cst$812$label$$, "Founding Patrons", $cljs$cst$908$accent$$, "text-pink-700 dark:text-pink-300", $APP.$cljs$cst$407$border$$, "border-pink-500/30", $cljs$cst$909$order$$, 0], null), $cljs$cst$906$patron$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$cljs$cst$812$label$$, "Patrons", $cljs$cst$908$accent$$, "text-amber-700 dark:text-amber-300", $APP.$cljs$cst$407$border$$, "border-amber-500/30 dark:border-amber-300/30", $cljs$cst$909$order$$, 1], null), $cljs$cst$910$benefactor$$, 
new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$cljs$cst$812$label$$, "Benefactors", $cljs$cst$908$accent$$, "text-indigo-700 dark:text-indigo-300", $APP.$cljs$cst$407$border$$, "border-indigo-500/30 dark:border-indigo-300/30", $cljs$cst$909$order$$, 2], null), $cljs$cst$911$supporter$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$cljs$cst$812$label$$, "Supporters", $cljs$cst$908$accent$$, "text-slate-700 dark:text-slate-300", $APP.$cljs$cst$407$border$$, "border-slate-400 dark:border-slate-600", 
$cljs$cst$909$order$$, 3], null)], null);
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$201$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$202$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$components$elements$budget$sponsors$logo_card$$, "", null, null) : (void 0).call(null, $amp$components$elements$budget$sponsors$logo_card$$, "", null, 
null)), $APP.$helix$core$register_BANG_$$($amp$components$elements$budget$sponsors$logo_card$$, "amp.components.elements.budget.sponsors/logo-card"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$201$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$202$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$components$elements$budget$sponsors$name_item$$, "", null, null) : (void 0).call(null, $amp$components$elements$budget$sponsors$name_item$$, "", null, 
null)), $APP.$helix$core$register_BANG_$$($amp$components$elements$budget$sponsors$name_item$$, "amp.components.elements.budget.sponsors/name-item"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$201$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$202$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$components$elements$budget$sponsors$tier_section$$, "", null, null) : (void 0).call(null, $amp$components$elements$budget$sponsors$tier_section$$, 
"", null, null)), $APP.$helix$core$register_BANG_$$($amp$components$elements$budget$sponsors$tier_section$$, "amp.components.elements.budget.sponsors/tier-section"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$201$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$202$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$components$elements$budget$sponsors$sponsors_section$$, "", null, null) : (void 0).call(null, $amp$components$elements$budget$sponsors$sponsors_section$$, 
"", null, null)), $APP.$helix$core$register_BANG_$$($amp$components$elements$budget$sponsors$sponsors_section$$, "amp.components.elements.budget.sponsors/sponsors-section"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$201$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$202$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$components$elements$budget$why_support$preview$$, "", null, null) : (void 0).call(null, $amp$components$elements$budget$why_support$preview$$, "", 
null, null)), $APP.$helix$core$register_BANG_$$($amp$components$elements$budget$why_support$preview$$, "amp.components.elements.budget.why-support/preview"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$201$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$202$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$components$elements$budget$why_support$details$$, "", null, null) : (void 0).call(null, $amp$components$elements$budget$why_support$details$$, "", 
null, null)), $APP.$helix$core$register_BANG_$$($amp$components$elements$budget$why_support$details$$, "amp.components.elements.budget.why-support/details"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$201$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$202$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$components$elements$budget$why_support$why_support$$, "", null, null) : (void 0).call(null, $amp$components$elements$budget$why_support$why_support$$, 
"", null, null)), $APP.$helix$core$register_BANG_$$($amp$components$elements$budget$why_support$why_support$$, "amp.components.elements.budget.why-support/why-support"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$201$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$202$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$components$navs$back_up_nav$back_up_nav$$, '(hooks/use-ref "container-ref")(hooks/use-ref "button-ref")(use-scroll-to-top {:duration 1})(use-scroll-trigger container-ref :start (fn [] (- (win-utils/height) (/ (win-utils/height) 8))) :end "1000000px" :markers? false :debug? false)(use-hover-animations button-ref :over {:opacity 1} :out {:opacity 0.7})(use-toggle-animations {:target container-ref, :on-to {:y 0, :opacity 1}, :off-to {:y -150, :opacity 0.25}, :is-on? is-active?})', 
null, null) : (void 0).call(null, $amp$components$navs$back_up_nav$back_up_nav$$, '(hooks/use-ref "container-ref")(hooks/use-ref "button-ref")(use-scroll-to-top {:duration 1})(use-scroll-trigger container-ref :start (fn [] (- (win-utils/height) (/ (win-utils/height) 8))) :end "1000000px" :markers? false :debug? false)(use-hover-animations button-ref :over {:opacity 1} :out {:opacity 0.7})(use-toggle-animations {:target container-ref, :on-to {:y 0, :opacity 1}, :off-to {:y -150, :opacity 0.25}, :is-on? is-active?})', 
null, null)), $APP.$helix$core$register_BANG_$$($amp$components$navs$back_up_nav$back_up_nav$$, "amp.components.navs.back-up-nav/back-up-nav"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$201$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$202$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$components$sections$budget_footer$budget_footer$$, "(use-scroll-to-id)", null, null) : (void 0).call(null, $amp$components$sections$budget_footer$budget_footer$$, 
"(use-scroll-to-id)", null, null)), $APP.$helix$core$register_BANG_$$($amp$components$sections$budget_footer$budget_footer$$, "amp.components.sections.budget-footer/budget-footer"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$201$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$202$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$components$sections$budget_section$section_link$$, "(use-scroll-to-id)", null, null) : (void 0).call(null, $amp$components$sections$budget_section$section_link$$, 
"(use-scroll-to-id)", null, null)), $APP.$helix$core$register_BANG_$$($amp$components$sections$budget_section$section_link$$, "amp.components.sections.budget-section/section-link"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$201$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$202$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$components$sections$budget_section$header$$, "", null, null) : (void 0).call(null, $amp$components$sections$budget_section$header$$, "", null, null)), 
$APP.$helix$core$register_BANG_$$($amp$components$sections$budget_section$header$$, "amp.components.sections.budget-section/header"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$201$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$202$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$components$sections$budget_section$budget_section$$, "", null, null) : (void 0).call(null, $amp$components$sections$budget_section$budget_section$$, 
"", null, null)), $APP.$helix$core$register_BANG_$$($amp$components$sections$budget_section$budget_section$$, "amp.components.sections.budget-section/budget-section"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$201$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$202$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($APP.$amp$views$budget_view$budget_view$$, '(hooks/use-ref "comp-ref")(hooks/use-layout-effect [active] (if active (intro-complete-callback) (.to gsap (clojure.core/deref comp-ref) {:opacity 0, :onComplete outro-complete-callback, :duration 1})))', 
null, null) : (void 0).call(null, $APP.$amp$views$budget_view$budget_view$$, '(hooks/use-ref "comp-ref")(hooks/use-layout-effect [active] (if active (intro-complete-callback) (.to gsap (clojure.core/deref comp-ref) {:opacity 0, :onComplete outro-complete-callback, :duration 1})))', null, null)), $APP.$helix$core$register_BANG_$$($APP.$amp$views$budget_view$budget_view$$, "amp.views.budget-view/budget-view"));
$APP.$module$contents$shadow$loader_mm$$.$setLoaded$();

}).call(this);