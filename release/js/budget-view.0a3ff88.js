(function(){
'use strict';
var $amp$ui$icons$InformationCircle$$, $cljs$core$take_while$cljs$0core$0IFn$0_invoke$0arity$02$$, $cljs$core$partition_by$cljs$0core$0IFn$0_invoke$0arity$02$$, $amp$hooks$use_scroll_to$use_scroll_to_ref$$, $amp$pages$budget$committee$preview$$, $amp$pages$budget$committee$details$$, $amp$pages$budget$committee$committee_member_card$$, $amp$pages$budget$committee$committee_gallery$$, $amp$pages$budget$committee$committee$$, $amp$pages$budget$table$format_currency$$, $amp$pages$budget$table$sub_total_all_sections$$, 
$amp$pages$budget$table$total_section$$, $amp$pages$budget$table$pad_two_digits$$, $amp$pages$budget$table$detail_line_item$$, $amp$pages$budget$table$details__GT_render_items$$, $amp$pages$budget$table$section_line_item$$, $amp$pages$budget$table$budget_table$$, $amp$pages$budget$cost_breakdown$preview$$, $amp$pages$budget$cost_breakdown$details$$, $amp$pages$budget$cost_breakdown$footer$$, $amp$pages$budget$cost_breakdown$cost_breakdown$$, $amp$pages$budget$location$preview_text$$, $amp$pages$budget$location$preview$$, 
$amp$pages$budget$location$full_details$$, $amp$pages$budget$location$location_section$$, $amp$pages$budget$cash_flow$parse_date$$, $amp$pages$budget$cash_flow$date__GT_ms$$, $amp$pages$budget$cash_flow$format_currency$$, $amp$pages$budget$cash_flow$priority_tag_bg$$, $amp$pages$budget$cash_flow$priority_tag_text$$, $amp$pages$budget$cash_flow$priority_dot_classes$$, $amp$pages$budget$cash_flow$priority_amount_class$$, $amp$pages$budget$cash_flow$priority_label$$, $amp$pages$budget$cash_flow$group_by_month$$, 
$amp$pages$budget$cash_flow$month_rollups$$, $amp$pages$budget$cash_flow$status_classes$$, $amp$pages$budget$cash_flow$timeline_node$$, $amp$pages$budget$cash_flow$now_marker$$, $amp$pages$budget$cash_flow$month_header$$, $amp$pages$budget$cash_flow$month_summary_row$$, $amp$pages$budget$cash_flow$view_toggle$$, $amp$pages$budget$cash_flow$summary_header$$, $amp$pages$budget$cash_flow$cash_flow$$, $amp$pages$budget$non_profit$transfer_field$$, $amp$pages$budget$non_profit$transfer_card$$, $amp$pages$budget$non_profit$non_profit$$, 
$amp$pages$budget$sponsors$logo_card$$, $amp$pages$budget$sponsors$name_item$$, $amp$pages$budget$sponsors$tier_section$$, $amp$pages$budget$sponsors$sponsors_section$$, $amp$pages$budget$why_support$preview$$, $amp$pages$budget$why_support$details$$, $amp$pages$budget$why_support$why_support$$, $amp$pages$budget$section$section_link$$, $amp$pages$budget$section$header$$, $amp$pages$budget$section$budget_section$$, $cljs$cst$906$admin_apr_26$$, $cljs$cst$920$venice_sep_26$$, $cljs$cst$879$venice_sep_25$$, 
$cljs$cst$898$la_feb_26$$, $cljs$cst$908$venice_may_26$$, $cljs$cst$873$priority$$, $cljs$cst$958$accent$$, $cljs$cst$859$venue$$, $cljs$cst$902$la_mar_26$$, $cljs$cst$935$n_crit$$, $cljs$cst$924$admin_oct_26$$, $cljs$cst$961$supporter$$, $cljs$cst$884$admin_oct_25$$, $cljs$cst$911$venice_jun_26$$, $cljs$cst$938$has_now$$, $cljs$cst$862$the_studio$$, $cljs$cst$944$month$$, $cljs$cst$960$benefactor$$, $cljs$cst$886$la_nov_25$$, $cljs$cst$896$contingency_jan_26$$, $cljs$cst$914$venice_jul_26$$, $cljs$cst$934$entries$$, 
$cljs$cst$933$all_paid$$, $cljs$cst$949$fields$$, $cljs$cst$874$normal$$, $cljs$cst$871$admin_jul_25$$, $cljs$cst$915$admin_jul_26$$, $cljs$cst$936$n_paid$$, $cljs$cst$867$documentation$$, $cljs$cst$878$contingency_aug_25$$, $cljs$cst$919$contingency_aug_26$$, $cljs$cst$868$debt_raised$$, $cljs$cst$948$field_value$$, $cljs$cst$950$ein$$, $cljs$cst$912$admin_jun_26$$, $cljs$cst$856$expanded_items$$, $cljs$cst$952$tier$$, $cljs$cst$888$contingency_nov_25$$, $cljs$cst$928$contingency_nov_26$$, $cljs$cst$853$tax$$, 
$cljs$cst$863$logistics$$, $cljs$cst$909$admin_may_26$$, $cljs$cst$947$field_label$$, $cljs$cst$895$admin_jan_26$$, $cljs$cst$951$location$$, $cljs$cst$897$venice_feb_26$$, $cljs$cst$892$venice_jan_26$$, $cljs$cst$937$n_items$$, $cljs$cst$925$contingency_oct_26$$, $cljs$cst$885$contingency_oct_25$$, $cljs$cst$903$admin_mar_26$$, $cljs$cst$875$paid$$, $cljs$cst$851$details$$, $cljs$cst$929$venice_dec_26$$, $cljs$cst$901$venice_mar_26$$, $cljs$cst$959$order$$, $cljs$cst$899$admin_feb_26$$, $cljs$cst$907$contingency_apr_26$$, 
$cljs$cst$940$entry$$, $cljs$cst$930$admin_dec_26$$, $cljs$cst$890$admin_dec_25$$, $cljs$cst$858$item$$, $cljs$cst$927$admin_nov_26$$, $cljs$cst$887$admin_nov_25$$, $cljs$cst$872$due$$, $cljs$cst$857$description$$, $cljs$cst$893$critical$$, $cljs$cst$916$contingency_jul_26$$, $cljs$cst$876$contingency_jul_25$$, $cljs$cst$931$contingency_dec_26$$, $cljs$cst$891$contingency_dec_25$$, $cljs$cst$910$contingency_may_26$$, $cljs$cst$913$contingency_jun_26$$, $cljs$cst$850$amount$$, $cljs$cst$946$past_QMARK_$$, 
$cljs$cst$870$cash_flow_model$$, $cljs$cst$939$dot$$, $cljs$cst$942$expanded_QMARK_$$, $cljs$cst$855$set_expanded_items$$, $cljs$cst$852$rate$$, $cljs$cst$900$contingency_feb_26$$, $cljs$cst$865$marketing$$, $cljs$cst$861$la_prod$$, $cljs$cst$956$patron$$, $cljs$cst$932$fill$$, $cljs$cst$869$funds_raised$$, $cljs$cst$922$contingency_sep_26$$, $cljs$cst$882$contingency_sep_25$$, $cljs$cst$962$members$$, $cljs$cst$854$cost_data$$, $cljs$cst$926$venice_nov_26$$, $cljs$cst$941$rollup$$, $cljs$cst$957$individual$$, 
$cljs$cst$921$admin_sep_26$$, $cljs$cst$880$admin_sep_25$$, $cljs$cst$905$venice_apr_26$$, $cljs$cst$955$institution$$, $cljs$cst$954$logo$$, $cljs$cst$881$high$$, $cljs$cst$864$opening$$, $cljs$cst$963$anchor$$, $cljs$cst$860$admin$$, $cljs$cst$904$contingency_mar_26$$, $cljs$cst$923$venice_oct_26$$, $cljs$cst$883$venice_oct_25$$, $cljs$cst$945$now$$, $cljs$cst$917$venice_aug_26$$, $cljs$cst$918$admin_aug_26$$, $cljs$cst$877$admin_aug_25$$, $cljs$cst$953$founding_patron$$, $cljs$cst$889$la_dec_25$$, 
$cljs$cst$894$la_jan_26$$, $cljs$cst$866$publication$$, $cljs$cst$943$target_total$$;
$amp$ui$icons$InformationCircle$$ = function($G__29503_JSCompiler_temp_const$jscomp$inline_3852_class$$jscomp$24_map__29501_map__29501__$1_props__22175__auto__$jscomp$35_vec__29498$$, $G__29507$jscomp$inline_3854_JSCompiler_inline_result$jscomp$inline_3853_maybe_ref__22176__auto__$jscomp$35$$) {
  $G__29503_JSCompiler_temp_const$jscomp$inline_3852_class$$jscomp$24_map__29501_map__29501__$1_props__22175__auto__$jscomp$35_vec__29498$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__29503_JSCompiler_temp_const$jscomp$inline_3852_class$$jscomp$24_map__29501_map__29501__$1_props__22175__auto__$jscomp$35_vec__29498$$), $G__29507$jscomp$inline_3854_JSCompiler_inline_result$jscomp$inline_3853_maybe_ref__22176__auto__$jscomp$35$$], 
  null);
  $G__29503_JSCompiler_temp_const$jscomp$inline_3852_class$$jscomp$24_map__29501_map__29501__$1_props__22175__auto__$jscomp$35_vec__29498$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__29503_JSCompiler_temp_const$jscomp$inline_3852_class$$jscomp$24_map__29501_map__29501__$1_props__22175__auto__$jscomp$35_vec__29498$$, 0, null);
  $G__29503_JSCompiler_temp_const$jscomp$inline_3852_class$$jscomp$24_map__29501_map__29501__$1_props__22175__auto__$jscomp$35_vec__29498$$ = $APP.$cljs$core$__destructure_map$$($G__29503_JSCompiler_temp_const$jscomp$inline_3852_class$$jscomp$24_map__29501_map__29501__$1_props__22175__auto__$jscomp$35_vec__29498$$);
  $G__29503_JSCompiler_temp_const$jscomp$inline_3852_class$$jscomp$24_map__29501_map__29501__$1_props__22175__auto__$jscomp$35_vec__29498$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__29503_JSCompiler_temp_const$jscomp$inline_3852_class$$jscomp$24_map__29501_map__29501__$1_props__22175__auto__$jscomp$35_vec__29498$$, $APP.$cljs$cst$67$class$$);
  $G__29503_JSCompiler_temp_const$jscomp$inline_3852_class$$jscomp$24_map__29501_map__29501__$1_props__22175__auto__$jscomp$35_vec__29498$$ = $APP.$helix$impl$props$normalize_class$$($G__29503_JSCompiler_temp_const$jscomp$inline_3852_class$$jscomp$24_map__29501_map__29501__$1_props__22175__auto__$jscomp$35_vec__29498$$);
  $G__29507$jscomp$inline_3854_JSCompiler_inline_result$jscomp$inline_3853_maybe_ref__22176__auto__$jscomp$35$$ = {strokeLinecap:"round", strokeLinejoin:"round", d:"m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"};
  $G__29507$jscomp$inline_3854_JSCompiler_inline_result$jscomp$inline_3853_maybe_ref__22176__auto__$jscomp$35$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("path", $G__29507$jscomp$inline_3854_JSCompiler_inline_result$jscomp$inline_3853_maybe_ref__22176__auto__$jscomp$35$$) : $APP.$helix$core$jsx$$.call(null, "path", $G__29507$jscomp$inline_3854_JSCompiler_inline_result$jscomp$inline_3853_maybe_ref__22176__auto__$jscomp$35$$);
  $G__29503_JSCompiler_temp_const$jscomp$inline_3852_class$$jscomp$24_map__29501_map__29501__$1_props__22175__auto__$jscomp$35_vec__29498$$ = {xmlns:"http://www.w3.org/2000/svg", fill:"none", viewBox:"0 0 24 24", strokeWidth:1.5, stroke:"currentColor", className:$G__29503_JSCompiler_temp_const$jscomp$inline_3852_class$$jscomp$24_map__29501_map__29501__$1_props__22175__auto__$jscomp$35_vec__29498$$, children:$G__29507$jscomp$inline_3854_JSCompiler_inline_result$jscomp$inline_3853_maybe_ref__22176__auto__$jscomp$35$$};
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("svg", $G__29503_JSCompiler_temp_const$jscomp$inline_3852_class$$jscomp$24_map__29501_map__29501__$1_props__22175__auto__$jscomp$35_vec__29498$$) : $APP.$helix$core$jsx$$.call(null, "svg", $G__29503_JSCompiler_temp_const$jscomp$inline_3852_class$$jscomp$24_map__29501_map__29501__$1_props__22175__auto__$jscomp$35_vec__29498$$);
};
$cljs$core$take_while$cljs$0core$0IFn$0_invoke$0arity$02$$ = function($pred$jscomp$14$$, $coll$jscomp$728$$) {
  return new $APP.$cljs$core$LazySeq$$(null, function() {
    var $JSCompiler_temp$jscomp$439_temp__5823__auto__$jscomp$22$$ = $APP.$cljs$core$seq$$($coll$jscomp$728$$);
    if ($JSCompiler_temp$jscomp$439_temp__5823__auto__$jscomp$22$$) {
      var $G__21316$jscomp$inline_2223_JSCompiler_inline_result$jscomp$440$$ = $APP.$cljs$core$first$$($JSCompiler_temp$jscomp$439_temp__5823__auto__$jscomp$22$$);
      $G__21316$jscomp$inline_2223_JSCompiler_inline_result$jscomp$440$$ = $pred$jscomp$14$$.$cljs$core$IFn$_invoke$arity$1$ ? $pred$jscomp$14$$.$cljs$core$IFn$_invoke$arity$1$($G__21316$jscomp$inline_2223_JSCompiler_inline_result$jscomp$440$$) : $pred$jscomp$14$$.call(null, $G__21316$jscomp$inline_2223_JSCompiler_inline_result$jscomp$440$$);
      $JSCompiler_temp$jscomp$439_temp__5823__auto__$jscomp$22$$ = $APP.$cljs$core$truth_$$($G__21316$jscomp$inline_2223_JSCompiler_inline_result$jscomp$440$$) ? $APP.$cljs$core$cons$$($APP.$cljs$core$first$$($JSCompiler_temp$jscomp$439_temp__5823__auto__$jscomp$22$$), $cljs$core$take_while$cljs$0core$0IFn$0_invoke$0arity$02$$($pred$jscomp$14$$, $APP.$cljs$core$rest$$($JSCompiler_temp$jscomp$439_temp__5823__auto__$jscomp$22$$))) : null;
    } else {
      $JSCompiler_temp$jscomp$439_temp__5823__auto__$jscomp$22$$ = null;
    }
    return $JSCompiler_temp$jscomp$439_temp__5823__auto__$jscomp$22$$;
  }, null, null);
};
$cljs$core$partition_by$cljs$0core$0IFn$0_invoke$0arity$02$$ = function($f$jscomp$297$$, $coll$jscomp$747$$) {
  return new $APP.$cljs$core$LazySeq$$(null, function() {
    var $temp__5823__auto__$jscomp$28$$ = $APP.$cljs$core$seq$$($coll$jscomp$747$$);
    if ($temp__5823__auto__$jscomp$28$$) {
      var $fst$$ = $APP.$cljs$core$first$$($temp__5823__auto__$jscomp$28$$), $fv$$ = $f$jscomp$297$$.$cljs$core$IFn$_invoke$arity$1$ ? $f$jscomp$297$$.$cljs$core$IFn$_invoke$arity$1$($fst$$) : $f$jscomp$297$$.call(null, $fst$$), $run$$ = $APP.$cljs$core$cons$$($fst$$, $cljs$core$take_while$cljs$0core$0IFn$0_invoke$0arity$02$$(function($p1__21343_SHARP_$$) {
        return $APP.$cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$($fv$$, $f$jscomp$297$$.$cljs$core$IFn$_invoke$arity$1$ ? $f$jscomp$297$$.$cljs$core$IFn$_invoke$arity$1$($p1__21343_SHARP_$$) : $f$jscomp$297$$.call(null, $p1__21343_SHARP_$$));
      }, $APP.$cljs$core$next$$($temp__5823__auto__$jscomp$28$$)));
      return $APP.$cljs$core$cons$$($run$$, $cljs$core$partition_by$cljs$0core$0IFn$0_invoke$0arity$02$$($f$jscomp$297$$, new $APP.$cljs$core$LazySeq$$(null, function() {
        return $APP.$cljs$core$drop$cljs$0core$0IFn$0_invoke$0arity$02$$($APP.$cljs$core$count$$($run$$), $temp__5823__auto__$jscomp$28$$);
      }, null, null)));
    }
    return null;
  }, null, null);
};
$amp$hooks$use_scroll_to$use_scroll_to_ref$$ = function() {
  var $G__27169$$ = function() {
    function $G__27208$$($ref$jscomp$9$$, $var_args$jscomp$416$$) {
      var $G__27211__i_p__27171$jscomp$1$$ = null;
      if (arguments.length > 1) {
        $G__27211__i_p__27171$jscomp$1$$ = 0;
        for (var $G__27211__a$$ = Array(arguments.length - 1); $G__27211__i_p__27171$jscomp$1$$ < $G__27211__a$$.length;) {
          $G__27211__a$$[$G__27211__i_p__27171$jscomp$1$$] = arguments[$G__27211__i_p__27171$jscomp$1$$ + 1], ++$G__27211__i_p__27171$jscomp$1$$;
        }
        $G__27211__i_p__27171$jscomp$1$$ = new $APP.$cljs$core$IndexedSeq$$($G__27211__a$$, 0, null);
      }
      return $G__27208__delegate$$.call(this, $ref$jscomp$9$$, $G__27211__i_p__27171$jscomp$1$$);
    }
    function $G__27208__delegate$$($ref$jscomp$8_temp__5823__auto__$jscomp$70$$, $duration$jscomp$2_p__27171$$) {
      $duration$jscomp$2_p__27171$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($duration$jscomp$2_p__27171$$, 0, null);
      $ref$jscomp$8_temp__5823__auto__$jscomp$70$$ = $ref$jscomp$8_temp__5823__auto__$jscomp$70$$.current;
      return $APP.$cljs$core$truth_$$($ref$jscomp$8_temp__5823__auto__$jscomp$70$$) ? $APP.$module$node_modules$gsap$dist$gsap$$.gsap.to(window, $APP.$cljs$core$clj__GT_js$$(new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$411$duration$$, $APP.$cljs$core$truth_$$($duration$jscomp$2_p__27171$$) ? $duration$jscomp$2_p__27171$$ : 0.35, $APP.$cljs$cst$412$scrollTo$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$413$y$$, $ref$jscomp$8_temp__5823__auto__$jscomp$70$$, 
      $APP.$cljs$cst$414$autoKill$$, !1], null), $APP.$cljs$cst$415$ease$$, "power2.inOut"], null))) : null;
    }
    $G__27208$$.$cljs$lang$maxFixedArity$ = 1;
    $G__27208$$.$cljs$lang$applyTo$ = function($arglist__27212_p__27171$jscomp$2$$) {
      var $ref$jscomp$10$$ = $APP.$cljs$core$first$$($arglist__27212_p__27171$jscomp$2$$);
      $arglist__27212_p__27171$jscomp$2$$ = $APP.$cljs$core$rest$$($arglist__27212_p__27171$jscomp$2$$);
      return $G__27208__delegate$$($ref$jscomp$10$$, $arglist__27212_p__27171$jscomp$2$$);
    };
    $G__27208$$.$cljs$core$IFn$_invoke$arity$variadic$ = $G__27208__delegate$$;
    return $G__27208$$;
  }(), $G__27170$$ = [];
  return $APP.$helix$hooks$raw_use_callback$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$hooks$raw_use_callback$$.$cljs$core$IFn$_invoke$arity$2$($G__27169$$, $G__27170$$) : $APP.$helix$hooks$raw_use_callback$$.call(null, $G__27169$$, $G__27170$$);
};
$amp$pages$budget$committee$preview$$ = function($G__34314_map__34312_props__22175__auto__$jscomp$124_vec__34309$$, $maybe_ref__22176__auto__$jscomp$124$$) {
  $G__34314_map__34312_props__22175__auto__$jscomp$124_vec__34309$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__34314_map__34312_props__22175__auto__$jscomp$124_vec__34309$$), $maybe_ref__22176__auto__$jscomp$124$$], null);
  $G__34314_map__34312_props__22175__auto__$jscomp$124_vec__34309$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__34314_map__34312_props__22175__auto__$jscomp$124_vec__34309$$, 0, null);
  $APP.$cljs$core$__destructure_map$$($G__34314_map__34312_props__22175__auto__$jscomp$124_vec__34309$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__34314_map__34312_props__22175__auto__$jscomp$124_vec__34309$$ = function() {
    return {className:"space-y-3 p-4", children:function() {
      var $G__34318$$ = function() {
        return {children:[function() {
          var $G__34322$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:"To realize an undertaking of this scale and international significance, an "};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__34322$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__34322$$);
        }(), function() {
          var $G__34326$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:"urgent fundraising program"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__34326$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__34326$$);
        }(), function() {
          var $G__34330$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:" is greatly needed."};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__34330$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__34330$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__34318$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__34318$$);
    }()};
  }();
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__34314_map__34312_props__22175__auto__$jscomp$124_vec__34309$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__34314_map__34312_props__22175__auto__$jscomp$124_vec__34309$$);
};
$amp$pages$budget$committee$details$$ = function($G__34385_map__34383_props__22175__auto__$jscomp$125_vec__34380$$, $maybe_ref__22176__auto__$jscomp$125$$) {
  $G__34385_map__34383_props__22175__auto__$jscomp$125_vec__34380$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__34385_map__34383_props__22175__auto__$jscomp$125_vec__34380$$), $maybe_ref__22176__auto__$jscomp$125$$], null);
  $G__34385_map__34383_props__22175__auto__$jscomp$125_vec__34380$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__34385_map__34383_props__22175__auto__$jscomp$125_vec__34380$$, 0, null);
  $APP.$cljs$core$__destructure_map$$($G__34385_map__34383_props__22175__auto__$jscomp$125_vec__34380$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__34385_map__34383_props__22175__auto__$jscomp$125_vec__34380$$ = function() {
    return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["p-4", $APP.$amp$styles$body_base$$]))), children:[function() {
      var $G__34390$$ = function() {
        return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["italic", "text-amber-600  dark:text-amber-300"]))), children:["*Note: As Armenia does not maintain a permanent national pavilion in Venice, the Pavilion must be realized through a rented venue—a standard and widely accepted model for many non-permanent participating nations. ", "The selected site operates at a base rental cost of approximately ", 
        function() {
          var $G__34394$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$value_currency$$), children:"$145,600"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__34394$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__34394$$);
        }(), function() {
          var $G__34400$$ = {children:[", covering the entire six-month duration of the Exhibition, and represents a strategic and fiscally responsible choice given its immediate proximity to the Arsenale proper. ", "Comparable venues just minutes away within the Arsenale or Giardini typically begin at "]};
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__34400$$) : $APP.$helix$core$jsxs$$.call(null, "span", $G__34400$$);
        }(), function() {
          var $G__34408$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$value_currency$$), children:"$450,000 or more"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__34408$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__34408$$);
        }(), function() {
          var $G__34412$$ = {children:[" in base rent alone—often closer to €450,000+—excluding construction, staffing, technical services, and operational expenses. ", "In this context, the Pavilion’s location offers extraordinary visibility and access at a fraction of the cost, positioning Armenia at the heart of the Biennale circuit while maintaining responsible stewardship of resources."]};
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__34412$$) : $APP.$helix$core$jsxs$$.call(null, "span", $G__34412$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__34390$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__34390$$);
    }(), function() {
      var $G__34422$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["mt-6 text-2xl", "text-rose-600   dark:text-rose-400"]))), children:"To realize an undertaking of this scale and international significance, an urgent fundraising program is greatly needed."};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__34422$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__34422$$);
    }(), function() {
      var $G__34435$$ = function() {
        return {className:"mt-6", children:[function() {
          var $G__34445$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-medium", "text-slate-900  dark:text-slate-100"]))), children:["At present we are starting with a small committee including members ", "Archbishop Hovnan Derderian, Tony Shafrazi, Tina Chakarian, Rafi Ourfalian, Khachik Khudikyan, ", "Andranik Torosyan, Aram Alajajian, and Vik Hovsepian, "]};
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__34445$$) : $APP.$helix$core$jsxs$$.call(null, "span", $G__34445$$);
        }(), function() {
          var $G__34455$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-bold", "text-rose-600   dark:text-rose-400"]))), children:"hopefully encouraging others more able to realize our goal."};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__34455$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__34455$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__34435$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__34435$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__34385_map__34383_props__22175__auto__$jscomp$125_vec__34380$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__34385_map__34383_props__22175__auto__$jscomp$125_vec__34380$$);
};
$amp$pages$budget$committee$committee_member_card$$ = function($G__34523_map__34503_map__34503__$1_props__22175__auto__$jscomp$126_vec__34500$$, $maybe_ref__22176__auto__$jscomp$126$$) {
  $G__34523_map__34503_map__34503__$1_props__22175__auto__$jscomp$126_vec__34500$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__34523_map__34503_map__34503__$1_props__22175__auto__$jscomp$126_vec__34500$$), $maybe_ref__22176__auto__$jscomp$126$$], null);
  $G__34523_map__34503_map__34503__$1_props__22175__auto__$jscomp$126_vec__34500$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__34523_map__34503_map__34503__$1_props__22175__auto__$jscomp$126_vec__34500$$, 0, null);
  $G__34523_map__34503_map__34503__$1_props__22175__auto__$jscomp$126_vec__34500$$ = $APP.$cljs$core$__destructure_map$$($G__34523_map__34503_map__34503__$1_props__22175__auto__$jscomp$126_vec__34500$$);
  var $name$jscomp$197$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__34523_map__34503_map__34503__$1_props__22175__auto__$jscomp$126_vec__34500$$, $APP.$cljs$cst$165$name$$), $role$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__34523_map__34503_map__34503__$1_props__22175__auto__$jscomp$126_vec__34500$$, $APP.$cljs$cst$849$role$$), $img_src$jscomp$5$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__34523_map__34503_map__34503__$1_props__22175__auto__$jscomp$126_vec__34500$$, 
  $APP.$cljs$cst$734$img_src$$);
  $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__34523_map__34503_map__34503__$1_props__22175__auto__$jscomp$126_vec__34500$$, $APP.$cljs$cst$717$credit$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $overlay_styles$$ = $APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-mono", "bg-white/70 px-1 text-slate-500"]));
  $G__34523_map__34503_map__34503__$1_props__22175__auto__$jscomp$126_vec__34500$$ = function() {
    return {className:"w-[150px] aspect-[0.7] relative ml-2", children:function() {
      var $G__34533$$ = function() {
        return {"img-src":$img_src$jscomp$5$$, fit:"crop", "aspect-ratio":0.7, "active?":!0, children:function() {
          var $G__34542$$ = function() {
            return {className:"", children:[function() {
              var $G__34546_G__34550$jscomp$inline_4092_JSCompiler_inline_result$jscomp$inline_4091$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["italic", "text-xs"]))), children:$name$jscomp$197$$};
              $G__34546_G__34550$jscomp$inline_4092_JSCompiler_inline_result$jscomp$inline_4091$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__34546_G__34550$jscomp$inline_4092_JSCompiler_inline_result$jscomp$inline_4091$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__34546_G__34550$jscomp$inline_4092_JSCompiler_inline_result$jscomp$inline_4091$$);
              $G__34546_G__34550$jscomp$inline_4092_JSCompiler_inline_result$jscomp$inline_4091$$ = {position:$APP.$cljs$cst$706$tl$$, rotation:90, "parent-styles":$overlay_styles$$, children:$G__34546_G__34550$jscomp$inline_4092_JSCompiler_inline_result$jscomp$inline_4091$$};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$ui$overlays$caption_overlay$$, $G__34546_G__34550$jscomp$inline_4092_JSCompiler_inline_result$jscomp$inline_4091$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$ui$overlays$caption_overlay$$, $G__34546_G__34550$jscomp$inline_4092_JSCompiler_inline_result$jscomp$inline_4091$$);
            }(), function() {
              var $G__34558_G__34566$jscomp$inline_4095_JSCompiler_inline_result$jscomp$inline_4094$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["italic", "text-xs"]))), children:$role$$};
              $G__34558_G__34566$jscomp$inline_4095_JSCompiler_inline_result$jscomp$inline_4094$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__34558_G__34566$jscomp$inline_4095_JSCompiler_inline_result$jscomp$inline_4094$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__34558_G__34566$jscomp$inline_4095_JSCompiler_inline_result$jscomp$inline_4094$$);
              $G__34558_G__34566$jscomp$inline_4095_JSCompiler_inline_result$jscomp$inline_4094$$ = {position:$APP.$cljs$cst$711$bl$$, "parent-styles":$overlay_styles$$, children:$G__34558_G__34566$jscomp$inline_4095_JSCompiler_inline_result$jscomp$inline_4094$$};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$ui$overlays$caption_overlay$$, $G__34558_G__34566$jscomp$inline_4095_JSCompiler_inline_result$jscomp$inline_4094$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$ui$overlays$caption_overlay$$, $G__34558_G__34566$jscomp$inline_4095_JSCompiler_inline_result$jscomp$inline_4094$$);
            }()]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__34542$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__34542$$);
        }()};
      }();
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$ui$image_overlay$lazy_image_with_overlay$$, $G__34533$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$ui$image_overlay$lazy_image_with_overlay$$, $G__34533$$);
    }()};
  }();
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__34523_map__34503_map__34503__$1_props__22175__auto__$jscomp$126_vec__34500$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__34523_map__34503_map__34503__$1_props__22175__auto__$jscomp$126_vec__34500$$);
};
$amp$pages$budget$committee$committee_gallery$$ = function($G__34586_map__34584_props__22175__auto__$jscomp$127_vec__34581$$, $maybe_ref__22176__auto__$jscomp$127$$) {
  $G__34586_map__34584_props__22175__auto__$jscomp$127_vec__34581$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__34586_map__34584_props__22175__auto__$jscomp$127_vec__34581$$), $maybe_ref__22176__auto__$jscomp$127$$], null);
  $G__34586_map__34584_props__22175__auto__$jscomp$127_vec__34581$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__34586_map__34584_props__22175__auto__$jscomp$127_vec__34581$$, 0, null);
  $APP.$cljs$core$__destructure_map$$($G__34586_map__34584_props__22175__auto__$jscomp$127_vec__34581$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__34586_map__34584_props__22175__auto__$jscomp$127_vec__34581$$ = function() {
    return {className:"p-4 w-full", children:function() {
      var $G__34591$$ = function() {
        return {children:[function() {
          var $G__34595_G__34599$jscomp$inline_4098$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$label_muted$$), children:"Committee Members"};
          $G__34595_G__34599$jscomp$inline_4098$$ = {className:"pl-4", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("h3", $G__34595_G__34599$jscomp$inline_4098$$) : $APP.$helix$core$jsx$$.call(null, "h3", $G__34595_G__34599$jscomp$inline_4098$$)};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__34595_G__34599$jscomp$inline_4098$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__34595_G__34599$jscomp$inline_4098$$);
        }(), function() {
          var $G__34603$$ = function() {
            return {className:"mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4", children:$APP.$cljs$core$map$$.$cljs$core$IFn$_invoke$arity$2$(function($name$jscomp$198_p__34606$$) {
              var $credit$jscomp$4_map__34607__$1$$ = $APP.$cljs$core$__destructure_map$$($name$jscomp$198_p__34606$$);
              $name$jscomp$198_p__34606$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($credit$jscomp$4_map__34607__$1$$, $APP.$cljs$cst$165$name$$);
              var $G__34610_G__34615$jscomp$inline_4101_JSCompiler_temp$jscomp$inline_4100_role$jscomp$1$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($credit$jscomp$4_map__34607__$1$$, $APP.$cljs$cst$849$role$$), $img_src$jscomp$6$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($credit$jscomp$4_map__34607__$1$$, $APP.$cljs$cst$734$img_src$$);
              $credit$jscomp$4_map__34607__$1$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($credit$jscomp$4_map__34607__$1$$, $APP.$cljs$cst$717$credit$$);
              $APP.$cljs$core$truth_$$($img_src$jscomp$6$$) ? ($G__34610_G__34615$jscomp$inline_4101_JSCompiler_temp$jscomp$inline_4100_role$jscomp$1$$ = {name:$name$jscomp$198_p__34606$$, role:$G__34610_G__34615$jscomp$inline_4101_JSCompiler_temp$jscomp$inline_4100_role$jscomp$1$$, "img-src":$img_src$jscomp$6$$, credit:$credit$jscomp$4_map__34607__$1$$}, $G__34610_G__34615$jscomp$inline_4101_JSCompiler_temp$jscomp$inline_4100_role$jscomp$1$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? 
              $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$pages$budget$committee$committee_member_card$$, $G__34610_G__34615$jscomp$inline_4101_JSCompiler_temp$jscomp$inline_4100_role$jscomp$1$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$budget$committee$committee_member_card$$, $G__34610_G__34615$jscomp$inline_4101_JSCompiler_temp$jscomp$inline_4100_role$jscomp$1$$)) : $G__34610_G__34615$jscomp$inline_4101_JSCompiler_temp$jscomp$inline_4100_role$jscomp$1$$ = null;
              $G__34610_G__34615$jscomp$inline_4101_JSCompiler_temp$jscomp$inline_4100_role$jscomp$1$$ = {children:$G__34610_G__34615$jscomp$inline_4101_JSCompiler_temp$jscomp$inline_4100_role$jscomp$1$$};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$("div", $G__34610_G__34615$jscomp$inline_4101_JSCompiler_temp$jscomp$inline_4100_role$jscomp$1$$, $name$jscomp$198_p__34606$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__34610_G__34615$jscomp$inline_4101_JSCompiler_temp$jscomp$inline_4100_role$jscomp$1$$, $name$jscomp$198_p__34606$$);
            }, $amp$pages$budget$committee$committee_members$$)};
          }();
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__34603$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__34603$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__34591$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__34591$$);
    }()};
  }();
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__34586_map__34584_props__22175__auto__$jscomp$127_vec__34581$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__34586_map__34584_props__22175__auto__$jscomp$127_vec__34581$$);
};
$amp$pages$budget$committee$committee$$ = function($G__34643_map__34633_map__34633__$1_props__22175__auto__$jscomp$128_vec__34630$$, $maybe_ref__22176__auto__$jscomp$128$$) {
  $G__34643_map__34633_map__34633__$1_props__22175__auto__$jscomp$128_vec__34630$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__34643_map__34633_map__34633__$1_props__22175__auto__$jscomp$128_vec__34630$$), $maybe_ref__22176__auto__$jscomp$128$$], null);
  $G__34643_map__34633_map__34633__$1_props__22175__auto__$jscomp$128_vec__34630$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__34643_map__34633_map__34633__$1_props__22175__auto__$jscomp$128_vec__34630$$, 0, null);
  $G__34643_map__34633_map__34633__$1_props__22175__auto__$jscomp$128_vec__34630$$ = $APP.$cljs$core$__destructure_map$$($G__34643_map__34633_map__34633__$1_props__22175__auto__$jscomp$128_vec__34630$$);
  var $id$jscomp$90$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__34643_map__34633_map__34633__$1_props__22175__auto__$jscomp$128_vec__34630$$, $APP.$cljs$cst$286$id$$), $subtitle$jscomp$2$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__34643_map__34633_map__34633__$1_props__22175__auto__$jscomp$128_vec__34630$$, $APP.$cljs$cst$782$subtitle$$), $title$jscomp$29$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__34643_map__34633_map__34633__$1_props__22175__auto__$jscomp$128_vec__34630$$, 
  $APP.$cljs$cst$288$title$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__34643_map__34633_map__34633__$1_props__22175__auto__$jscomp$128_vec__34630$$ = function() {
    return {id:$id$jscomp$90$$, className:"space-y-4", children:[function() {
      var $G__34655$$ = {idx:5, "section-hint":$subtitle$jscomp$2$$, title:$title$jscomp$29$$, "expand-button-label":"Read more", "preview-text":$amp$pages$budget$committee$preview$$, "full-text":$amp$pages$budget$committee$details$$};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$ui$expandable_text$expandable_text_area_2$$, $G__34655$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$ui$expandable_text$expandable_text_area_2$$, $G__34655$$);
    }(), function() {
      var $G__34665$$ = {children:$amp$pages$budget$committee$committee_members$$};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$pages$budget$committee$committee_gallery$$, $G__34665$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$budget$committee$committee_gallery$$, $G__34665$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("section", $G__34643_map__34633_map__34633__$1_props__22175__auto__$jscomp$128_vec__34630$$) : $APP.$helix$core$jsxs$$.call(null, "section", $G__34643_map__34633_map__34633__$1_props__22175__auto__$jscomp$128_vec__34630$$);
};
$amp$pages$budget$table$format_currency$$ = function($amount$$) {
  return "$" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$(Math.round($amount$$).toLocaleString("en-US"));
};
$amp$pages$budget$table$sub_total_all_sections$$ = function($cost_data$$) {
  return $APP.$cljs$core$reduce$cljs$0core$0IFn$0_invoke$0arity$02$$($APP.$cljs$core$_PLUS_$$, $APP.$cljs$core$map$$.$cljs$core$IFn$_invoke$arity$2$(function($p1__34379_SHARP__tax_rate$jscomp$inline_2230$$) {
    var $item_details$jscomp$inline_2228_sub_total$jscomp$inline_2229$$ = $cljs$cst$851$details$$.$cljs$core$IFn$_invoke$arity$1$($p1__34379_SHARP__tax_rate$jscomp$inline_2230$$);
    $item_details$jscomp$inline_2228_sub_total$jscomp$inline_2229$$ = $APP.$cljs$core$reduce$cljs$0core$0IFn$0_invoke$0arity$02$$($APP.$cljs$core$_PLUS_$$, $APP.$cljs$core$map$$.$cljs$core$IFn$_invoke$arity$2$($cljs$cst$850$amount$$, $item_details$jscomp$inline_2228_sub_total$jscomp$inline_2229$$));
    $p1__34379_SHARP__tax_rate$jscomp$inline_2230$$ = $cljs$cst$852$rate$$.$cljs$core$IFn$_invoke$arity$1$($cljs$cst$853$tax$$.$cljs$core$IFn$_invoke$arity$1$($p1__34379_SHARP__tax_rate$jscomp$inline_2230$$));
    return ($p1__34379_SHARP__tax_rate$jscomp$inline_2230$$ > 0 ? $p1__34379_SHARP__tax_rate$jscomp$inline_2230$$ * $item_details$jscomp$inline_2228_sub_total$jscomp$inline_2229$$ : 0) + $item_details$jscomp$inline_2228_sub_total$jscomp$inline_2229$$;
  }, $cost_data$$));
};
$amp$pages$budget$table$total_section$$ = function($G__34463_cost_data$jscomp$1_map__34443_map__34443__$1_props__22175__auto__$jscomp$129_vec__34440$$, $maybe_ref__22176__auto__$jscomp$129$$) {
  $G__34463_cost_data$jscomp$1_map__34443_map__34443__$1_props__22175__auto__$jscomp$129_vec__34440$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__34463_cost_data$jscomp$1_map__34443_map__34443__$1_props__22175__auto__$jscomp$129_vec__34440$$), $maybe_ref__22176__auto__$jscomp$129$$], null);
  $G__34463_cost_data$jscomp$1_map__34443_map__34443__$1_props__22175__auto__$jscomp$129_vec__34440$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__34463_cost_data$jscomp$1_map__34443_map__34443__$1_props__22175__auto__$jscomp$129_vec__34440$$, 0, null);
  $G__34463_cost_data$jscomp$1_map__34443_map__34443__$1_props__22175__auto__$jscomp$129_vec__34440$$ = $APP.$cljs$core$__destructure_map$$($G__34463_cost_data$jscomp$1_map__34443_map__34443__$1_props__22175__auto__$jscomp$129_vec__34440$$);
  $G__34463_cost_data$jscomp$1_map__34443_map__34443__$1_props__22175__auto__$jscomp$129_vec__34440$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__34463_cost_data$jscomp$1_map__34443_map__34443__$1_props__22175__auto__$jscomp$129_vec__34440$$, $cljs$cst$854$cost_data$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $sub_total$jscomp$1$$ = $amp$pages$budget$table$sub_total_all_sections$$($G__34463_cost_data$jscomp$1_map__34443_map__34443__$1_props__22175__auto__$jscomp$129_vec__34440$$), $grand_total$$ = $sub_total$jscomp$1$$ + 66821;
  $G__34463_cost_data$jscomp$1_map__34443_map__34443__$1_props__22175__auto__$jscomp$129_vec__34440$$ = function() {
    return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["flex flex-col", "font-mono"]))), children:[function() {
      var $G__34476$$ = function() {
        return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["bg-white        dark:bg-slate-900", "text-slate-900  dark:text-slate-100", "flex items-baseline px-4 py-2 border-t-2", "border-pink-500/70 dark:border-pink-500/70"]))), children:[function() {
          var $G__34484$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["text-sm", "uppercase", "tracking-wider", "text-slate-600  dark:text-slate-400", "flex-1 min-w-0"]))), children:"Sub total"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("h3", $G__34484$$) : $APP.$helix$core$jsx$$.call(null, "h3", $G__34484$$);
        }(), function() {
          var $G__34490_G__34494$jscomp$inline_4104$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-semibold", "text-slate-700  dark:text-slate-300"]))), children:$amp$pages$budget$table$format_currency$$($sub_total$jscomp$1$$)};
          $G__34490_G__34494$jscomp$inline_4104$$ = {className:"flex items-baseline justify-end shrink-0 ml-2", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__34490_G__34494$jscomp$inline_4104$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__34490_G__34494$jscomp$inline_4104$$)};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__34490_G__34494$jscomp$inline_4104$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__34490_G__34494$jscomp$inline_4104$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("li", $G__34476$$) : $APP.$helix$core$jsxs$$.call(null, "li", $G__34476$$);
    }(), function() {
      var $G__34509$$ = function() {
        return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["bg-slate-100/60 dark:bg-slate-800/60", "text-slate-900  dark:text-slate-100", "flex items-baseline px-4 py-2"]))), children:[function() {
          var $G__34515$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["text-sm", "uppercase", "tracking-wider", "text-slate-600  dark:text-slate-400", "flex-1 min-w-0"]))), children:"Contingency 5%"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("h3", $G__34515$$) : $APP.$helix$core$jsx$$.call(null, "h3", $G__34515$$);
        }(), function() {
          var $G__34529_G__34538$jscomp$inline_4107$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-semibold", "text-slate-700  dark:text-slate-300"]))), children:$amp$pages$budget$table$format_currency$$(66821)};
          $G__34529_G__34538$jscomp$inline_4107$$ = {className:"flex items-baseline justify-end shrink-0 ml-2", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__34529_G__34538$jscomp$inline_4107$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__34529_G__34538$jscomp$inline_4107$$)};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__34529_G__34538$jscomp$inline_4107$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__34529_G__34538$jscomp$inline_4107$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("li", $G__34509$$) : $APP.$helix$core$jsxs$$.call(null, "li", $G__34509$$);
    }(), function() {
      var $G__34554$$ = function() {
        return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["bg-white        dark:bg-slate-900", "text-slate-900  dark:text-slate-100", "flex items-baseline px-4 py-4 border-t border-pink-500/40"]))), children:[function() {
          var $G__34560$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-bold", "text-lg", "uppercase", "tracking-wider", "flex-1 min-w-0"]))), children:"TOTAL"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("h3", $G__34560$$) : $APP.$helix$core$jsx$$.call(null, "h3", $G__34560$$);
        }(), function() {
          var $G__34570_G__34574$jscomp$inline_4110$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$value_lg$$), children:$amp$pages$budget$table$format_currency$$($grand_total$$)};
          $G__34570_G__34574$jscomp$inline_4110$$ = {className:"flex items-baseline justify-end shrink-0 ml-2", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__34570_G__34574$jscomp$inline_4110$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__34570_G__34574$jscomp$inline_4110$$)};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__34570_G__34574$jscomp$inline_4110$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__34570_G__34574$jscomp$inline_4110$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("li", $G__34554$$) : $APP.$helix$core$jsxs$$.call(null, "li", $G__34554$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__34463_cost_data$jscomp$1_map__34443_map__34443__$1_props__22175__auto__$jscomp$129_vec__34440$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__34463_cost_data$jscomp$1_map__34443_map__34443__$1_props__22175__auto__$jscomp$129_vec__34440$$);
};
$amp$pages$budget$table$pad_two_digits$$ = function($n$jscomp$225$$) {
  return $n$jscomp$225$$ < 10 ? "0" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($n$jscomp$225$$) : "" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($n$jscomp$225$$);
};
$amp$pages$budget$table$detail_line_item$$ = function($G__34624_G__34684_map__34619_map__34619__$1_props__22175__auto__$jscomp$130_vec__34616$$, $maybe_ref__22176__auto__$jscomp$130$$) {
  $G__34624_G__34684_map__34619_map__34619__$1_props__22175__auto__$jscomp$130_vec__34616$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__34624_G__34684_map__34619_map__34619__$1_props__22175__auto__$jscomp$130_vec__34616$$), $maybe_ref__22176__auto__$jscomp$130$$], null);
  $G__34624_G__34684_map__34619_map__34619__$1_props__22175__auto__$jscomp$130_vec__34616$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__34624_G__34684_map__34619_map__34619__$1_props__22175__auto__$jscomp$130_vec__34616$$, 0, null);
  $G__34624_G__34684_map__34619_map__34619__$1_props__22175__auto__$jscomp$130_vec__34616$$ = $APP.$cljs$core$__destructure_map$$($G__34624_G__34684_map__34619_map__34619__$1_props__22175__auto__$jscomp$130_vec__34616$$);
  var $idx$jscomp$70$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__34624_G__34684_map__34619_map__34619__$1_props__22175__auto__$jscomp$130_vec__34616$$, $APP.$cljs$cst$769$idx$$), $detail$jscomp$7$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__34624_G__34684_map__34619_map__34619__$1_props__22175__auto__$jscomp$130_vec__34616$$, $APP.$cljs$cst$636$detail$$), $set_expanded_items$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__34624_G__34684_map__34619_map__34619__$1_props__22175__auto__$jscomp$130_vec__34616$$, 
  $cljs$cst$855$set_expanded_items$$), $expanded_items$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__34624_G__34684_map__34619_map__34619__$1_props__22175__auto__$jscomp$130_vec__34616$$, $cljs$cst$856$expanded_items$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $item_id$$ = "detail-item-" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($idx$jscomp$70$$), $description$jscomp$4$$ = $cljs$cst$857$description$$.$cljs$core$IFn$_invoke$arity$1$($detail$jscomp$7$$), $is_odd_detail_QMARK_$$ = !$APP.$cljs$core$even_QMARK_$$($idx$jscomp$70$$);
  if ($APP.$cljs$core$truth_$$($description$jscomp$4$$)) {
    return $G__34624_G__34684_map__34619_map__34619__$1_props__22175__auto__$jscomp$130_vec__34616$$ = function() {
      return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["cursor-pointer overflow-hidden", "font-mono", $is_odd_detail_QMARK_$$ ? "bg-slate-100/60 dark:bg-slate-800/60" : null]))), onClick:function() {
        function $G__34628$$($prev$jscomp$11$$) {
          return $APP.$cljs$core$truth_$$($prev$jscomp$11$$.$cljs$core$IFn$_invoke$arity$1$ ? $prev$jscomp$11$$.$cljs$core$IFn$_invoke$arity$1$($item_id$$) : $prev$jscomp$11$$.call(null, $item_id$$)) ? $APP.$cljs$core$disj$$.$cljs$core$IFn$_invoke$arity$2$($prev$jscomp$11$$, $item_id$$) : $APP.$cljs$core$conj$$.$cljs$core$IFn$_invoke$arity$2$($prev$jscomp$11$$, $item_id$$);
        }
        return $set_expanded_items$$.$cljs$core$IFn$_invoke$arity$1$ ? $set_expanded_items$$.$cljs$core$IFn$_invoke$arity$1$($G__34628$$) : $set_expanded_items$$.call(null, $G__34628$$);
      }, children:[function() {
        var $G__34635$$ = function() {
          return {className:"px-8 py-2 flex justify-between items-center", children:[function() {
            var $G__34639$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["text-[11px]", "text-slate-400  dark:text-slate-600", "mr-4"]))), children:"" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($amp$pages$budget$table$pad_two_digits$$($idx$jscomp$70$$ + 1)) + "."};
            return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__34639$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__34639$$);
          }(), function() {
            var $G__34647_JSCompiler_temp_const$jscomp$inline_4341$$ = $APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["justify-start flex-1 flex items-center", "text-sm", "text-slate-700  dark:text-slate-300"])));
            var $JSCompiler_temp_const$jscomp$inline_4342$$ = $APP.$cljs$cst$288$title$$.$cljs$core$IFn$_invoke$arity$1$($detail$jscomp$7$$);
            var $G__34651$jscomp$inline_4344_JSCompiler_inline_result$jscomp$inline_4343_JSCompiler_temp_const$jscomp$inline_4345$$ = $APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["w-4 h-4 ml-2", "text-slate-400  dark:text-slate-600"])));
            var $G__34657$jscomp$inline_4347_JSCompiler_inline_result$jscomp$inline_4346$$ = {};
            $G__34657$jscomp$inline_4347_JSCompiler_inline_result$jscomp$inline_4346$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$ui$icons$InformationCircle$$, $G__34657$jscomp$inline_4347_JSCompiler_inline_result$jscomp$inline_4346$$) : $APP.$helix$core$jsx$$.call(null, $amp$ui$icons$InformationCircle$$, $G__34657$jscomp$inline_4347_JSCompiler_inline_result$jscomp$inline_4346$$);
            $G__34651$jscomp$inline_4344_JSCompiler_inline_result$jscomp$inline_4343_JSCompiler_temp_const$jscomp$inline_4345$$ = {className:$G__34651$jscomp$inline_4344_JSCompiler_inline_result$jscomp$inline_4343_JSCompiler_temp_const$jscomp$inline_4345$$, children:$G__34657$jscomp$inline_4347_JSCompiler_inline_result$jscomp$inline_4346$$};
            $G__34651$jscomp$inline_4344_JSCompiler_inline_result$jscomp$inline_4343_JSCompiler_temp_const$jscomp$inline_4345$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__34651$jscomp$inline_4344_JSCompiler_inline_result$jscomp$inline_4343_JSCompiler_temp_const$jscomp$inline_4345$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__34651$jscomp$inline_4344_JSCompiler_inline_result$jscomp$inline_4343_JSCompiler_temp_const$jscomp$inline_4345$$);
            $G__34647_JSCompiler_temp_const$jscomp$inline_4341$$ = {className:$G__34647_JSCompiler_temp_const$jscomp$inline_4341$$, children:[$JSCompiler_temp_const$jscomp$inline_4342$$, $G__34651$jscomp$inline_4344_JSCompiler_inline_result$jscomp$inline_4343_JSCompiler_temp_const$jscomp$inline_4345$$]};
            return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__34647_JSCompiler_temp_const$jscomp$inline_4341$$) : $APP.$helix$core$jsxs$$.call(null, "span", $G__34647_JSCompiler_temp_const$jscomp$inline_4341$$);
          }(), function() {
            var $G__34661$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$value_sm$$), children:$amp$pages$budget$table$format_currency$$($cljs$cst$850$amount$$.$cljs$core$IFn$_invoke$arity$1$($detail$jscomp$7$$))};
            return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__34661$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__34661$$);
          }()]};
        }();
        return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__34635$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__34635$$);
      }(), $APP.$cljs$core$truth_$$($expanded_items$$.$cljs$core$IFn$_invoke$arity$1$ ? $expanded_items$$.$cljs$core$IFn$_invoke$arity$1$($item_id$$) : $expanded_items$$.call(null, $item_id$$)) ? function() {
        var $G__34668$$ = function() {
          return {className:"border-l-2 border-pink-500/30", children:function() {
            var $G__34672_G__34676$jscomp$inline_4414_JSCompiler_temp_const$jscomp$inline_4415$$ = $APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_sm$$, "bg-slate-100/60 dark:bg-slate-800/60"])));
            var $G__34680$jscomp$inline_4417_JSCompiler_inline_result$jscomp$inline_4416$$ = {className:"px-6 py-4", children:$description$jscomp$4$$};
            $G__34680$jscomp$inline_4417_JSCompiler_inline_result$jscomp$inline_4416$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__34680$jscomp$inline_4417_JSCompiler_inline_result$jscomp$inline_4416$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__34680$jscomp$inline_4417_JSCompiler_inline_result$jscomp$inline_4416$$);
            $G__34672_G__34676$jscomp$inline_4414_JSCompiler_temp_const$jscomp$inline_4415$$ = {className:$G__34672_G__34676$jscomp$inline_4414_JSCompiler_temp_const$jscomp$inline_4415$$, children:$G__34680$jscomp$inline_4417_JSCompiler_inline_result$jscomp$inline_4416$$};
            $G__34672_G__34676$jscomp$inline_4414_JSCompiler_temp_const$jscomp$inline_4415$$ = {className:"", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__34672_G__34676$jscomp$inline_4414_JSCompiler_temp_const$jscomp$inline_4415$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__34672_G__34676$jscomp$inline_4414_JSCompiler_temp_const$jscomp$inline_4415$$)};
            return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__34672_G__34676$jscomp$inline_4414_JSCompiler_temp_const$jscomp$inline_4415$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__34672_G__34676$jscomp$inline_4414_JSCompiler_temp_const$jscomp$inline_4415$$);
          }()};
        }();
        return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__34668$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__34668$$);
      }() : null]};
    }(), $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("li", $G__34624_G__34684_map__34619_map__34619__$1_props__22175__auto__$jscomp$130_vec__34616$$) : $APP.$helix$core$jsxs$$.call(null, "li", $G__34624_G__34684_map__34619_map__34619__$1_props__22175__auto__$jscomp$130_vec__34616$$);
  }
  $G__34624_G__34684_map__34619_map__34619__$1_props__22175__auto__$jscomp$130_vec__34616$$ = function() {
    return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-mono", $is_odd_detail_QMARK_$$ ? "bg-slate-100/60 dark:bg-slate-800/60" : null]))), children:function() {
      var $G__34688$$ = function() {
        return {className:"px-8 py-2 flex justify-between items-center", children:[function() {
          var $G__34692$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["text-[11px]", "text-slate-400  dark:text-slate-600", "mr-4"]))), children:"" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($amp$pages$budget$table$pad_two_digits$$($idx$jscomp$70$$ + 1)) + "."};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__34692$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__34692$$);
        }(), function() {
          var $G__34696$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["justify-start flex-1", "text-sm", "text-slate-700  dark:text-slate-300"]))), children:$APP.$cljs$cst$288$title$$.$cljs$core$IFn$_invoke$arity$1$($detail$jscomp$7$$)};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__34696$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__34696$$);
        }(), function() {
          var $G__34700$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$value_sm$$), children:$amp$pages$budget$table$format_currency$$($cljs$cst$850$amount$$.$cljs$core$IFn$_invoke$arity$1$($detail$jscomp$7$$))};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__34700$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__34700$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__34688$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__34688$$);
    }()};
  }();
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("li", $G__34624_G__34684_map__34619_map__34619__$1_props__22175__auto__$jscomp$130_vec__34616$$) : $APP.$helix$core$jsx$$.call(null, "li", $G__34624_G__34684_map__34619_map__34619__$1_props__22175__auto__$jscomp$130_vec__34616$$);
};
$amp$pages$budget$table$details__GT_render_items$$ = function($G__35019_details$jscomp$4$$) {
  for (var $G__35018_items$jscomp$8$$ = $G__35019_details$jscomp$4$$, $idx$jscomp$71$$ = 0, $prev_group$$ = null, $result$jscomp$135$$ = $APP.$cljs$core$PersistentVector$EMPTY$$;;) {
    if ($APP.$cljs$core$empty_QMARK_$$($G__35018_items$jscomp$8$$)) {
      return $result$jscomp$135$$;
    }
    var $detail$jscomp$8$$ = $APP.$cljs$core$first$$($G__35018_items$jscomp$8$$), $curr_group$$ = $APP.$cljs$cst$589$group$$.$cljs$core$IFn$_invoke$arity$1$($detail$jscomp$8$$), $show_header_QMARK_$$ = function() {
      var $and__5140__auto__$jscomp$89$$ = $curr_group$$;
      return $APP.$cljs$core$truth_$$($and__5140__auto__$jscomp$89$$) ? $APP.$cljs$core$not_EQ_$cljs$0core$0IFn$0_invoke$0arity$02$$($curr_group$$, $prev_group$$) : $and__5140__auto__$jscomp$89$$;
    }();
    $G__35018_items$jscomp$8$$ = $APP.$cljs$core$rest$$($G__35018_items$jscomp$8$$);
    $G__35019_details$jscomp$4$$ = $idx$jscomp$71$$ + 1;
    var $G__35020$$ = $curr_group$$, $G__35021$$ = function() {
      var $G__34705_G__34705__$1$$ = $result$jscomp$135$$;
      $G__34705_G__34705__$1$$ = $APP.$cljs$core$truth_$$($show_header_QMARK_$$) ? $APP.$cljs$core$conj$$.$cljs$core$IFn$_invoke$arity$2$($G__34705_G__34705__$1$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$25$type$$, $APP.$cljs$cst$238$header$$, $APP.$cljs$cst$417$label$$, $curr_group$$, $APP.$cljs$cst$99$key$$, "gh-" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($idx$jscomp$71$$)], null)) : $G__34705_G__34705__$1$$;
      return $APP.$cljs$core$conj$$.$cljs$core$IFn$_invoke$arity$2$($G__34705_G__34705__$1$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$25$type$$, $APP.$cljs$cst$636$detail$$, $APP.$cljs$cst$636$detail$$, $detail$jscomp$8$$, $APP.$cljs$cst$769$idx$$, $idx$jscomp$71$$, $APP.$cljs$cst$99$key$$, "d-" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($idx$jscomp$71$$)], null));
    }();
    $idx$jscomp$71$$ = $G__35019_details$jscomp$4$$;
    $prev_group$$ = $G__35020$$;
    $result$jscomp$135$$ = $G__35021$$;
  }
};
$amp$pages$budget$table$section_line_item$$ = function($G__34713_details$jscomp$5_map__34711_map__34711__$1_props__22175__auto__$jscomp$131_vec__34708$$, $maybe_ref__22176__auto__$jscomp$131_tax_rate$jscomp$1$$) {
  $G__34713_details$jscomp$5_map__34711_map__34711__$1_props__22175__auto__$jscomp$131_vec__34708$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__34713_details$jscomp$5_map__34711_map__34711__$1_props__22175__auto__$jscomp$131_vec__34708$$), $maybe_ref__22176__auto__$jscomp$131_tax_rate$jscomp$1$$], null);
  $G__34713_details$jscomp$5_map__34711_map__34711__$1_props__22175__auto__$jscomp$131_vec__34708$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__34713_details$jscomp$5_map__34711_map__34711__$1_props__22175__auto__$jscomp$131_vec__34708$$, 0, null);
  $G__34713_details$jscomp$5_map__34711_map__34711__$1_props__22175__auto__$jscomp$131_vec__34708$$ = $APP.$cljs$core$__destructure_map$$($G__34713_details$jscomp$5_map__34711_map__34711__$1_props__22175__auto__$jscomp$131_vec__34708$$);
  var $idx$jscomp$72$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__34713_details$jscomp$5_map__34711_map__34711__$1_props__22175__auto__$jscomp$131_vec__34708$$, $APP.$cljs$cst$769$idx$$), $item$jscomp$38$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__34713_details$jscomp$5_map__34711_map__34711__$1_props__22175__auto__$jscomp$131_vec__34708$$, $cljs$cst$858$item$$), $set_expanded_items$jscomp$1$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__34713_details$jscomp$5_map__34711_map__34711__$1_props__22175__auto__$jscomp$131_vec__34708$$, 
  $cljs$cst$855$set_expanded_items$$), $expanded_items$jscomp$1$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__34713_details$jscomp$5_map__34711_map__34711__$1_props__22175__auto__$jscomp$131_vec__34708$$, $cljs$cst$856$expanded_items$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $section_ref$$ = $APP.$helix$hooks$use_ref$$("section-" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($idx$jscomp$72$$)), $scroll_to_ref$$ = $amp$hooks$use_scroll_to$use_scroll_to_ref$$(), $item_id$jscomp$1$$ = "item-" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($idx$jscomp$72$$);
  $G__34713_details$jscomp$5_map__34711_map__34711__$1_props__22175__auto__$jscomp$131_vec__34708$$ = $cljs$cst$851$details$$.$cljs$core$IFn$_invoke$arity$1$($item$jscomp$38$$);
  var $sub_total$jscomp$2$$ = $APP.$cljs$core$reduce$cljs$0core$0IFn$0_invoke$0arity$02$$($APP.$cljs$core$_PLUS_$$, $APP.$cljs$core$map$$.$cljs$core$IFn$_invoke$arity$2$($cljs$cst$850$amount$$, $G__34713_details$jscomp$5_map__34711_map__34711__$1_props__22175__auto__$jscomp$131_vec__34708$$));
  $maybe_ref__22176__auto__$jscomp$131_tax_rate$jscomp$1$$ = $cljs$cst$852$rate$$.$cljs$core$IFn$_invoke$arity$1$($cljs$cst$853$tax$$.$cljs$core$IFn$_invoke$arity$1$($item$jscomp$38$$));
  var $tax_label$$ = $APP.$cljs$cst$417$label$$.$cljs$core$IFn$_invoke$arity$1$($cljs$cst$853$tax$$.$cljs$core$IFn$_invoke$arity$1$($item$jscomp$38$$)), $tax_total$jscomp$1$$ = $sub_total$jscomp$2$$ * $maybe_ref__22176__auto__$jscomp$131_tax_rate$jscomp$1$$, $has_tax_QMARK_$jscomp$1$$ = $maybe_ref__22176__auto__$jscomp$131_tax_rate$jscomp$1$$ > 0, $total$jscomp$4$$ = $sub_total$jscomp$2$$ + $tax_total$jscomp$1$$, $is_odd$$ = !$APP.$cljs$core$even_QMARK_$$($idx$jscomp$72$$), $render_items$$ = $amp$pages$budget$table$details__GT_render_items$$($G__34713_details$jscomp$5_map__34711_map__34711__$1_props__22175__auto__$jscomp$131_vec__34708$$);
  $G__34713_details$jscomp$5_map__34711_map__34711__$1_props__22175__auto__$jscomp$131_vec__34708$$ = function() {
    return {ref:$section_ref$$, className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["overflow-hidden", "font-mono", $is_odd$$ ? "bg-white        dark:bg-slate-900" : "bg-slate-100/60 dark:bg-slate-800/60"]))), children:[function() {
      var $G__34717$$ = function() {
        return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["flex flex-wrap items-baseline px-4 py-3 gap-y-1 cursor-pointer transition-colors", "hover:bg-slate-800/50 dark:hover:bg-slate-800/50"]))), onClick:function() {
          function $G__34720$$($prev$jscomp$12$$) {
            return $APP.$cljs$core$truth_$$($prev$jscomp$12$$.$cljs$core$IFn$_invoke$arity$1$ ? $prev$jscomp$12$$.$cljs$core$IFn$_invoke$arity$1$($item_id$jscomp$1$$) : $prev$jscomp$12$$.call(null, $item_id$jscomp$1$$)) ? $APP.$cljs$core$disj$$.$cljs$core$IFn$_invoke$arity$2$($prev$jscomp$12$$, $item_id$jscomp$1$$) : $APP.$cljs$core$conj$$.$cljs$core$IFn$_invoke$arity$2$($prev$jscomp$12$$, $item_id$jscomp$1$$);
          }
          return $set_expanded_items$jscomp$1$$.$cljs$core$IFn$_invoke$arity$1$ ? $set_expanded_items$jscomp$1$$.$cljs$core$IFn$_invoke$arity$1$($G__34720$$) : $set_expanded_items$jscomp$1$$.call(null, $G__34720$$);
        }, children:[function() {
          var $G__34722$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$("font-display;font-semibold;uppercase;tracking-wide;text-slate-700  dark:text-slate-300;text-base sm:text-lg flex-1 min-w-0".split(";")))), children:"" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($idx$jscomp$72$$ + 1) + ". " + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($APP.$cljs$cst$288$title$$.$cljs$core$IFn$_invoke$arity$1$($item$jscomp$38$$))};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("h3", $G__34722$$) : $APP.$helix$core$jsx$$.call(null, "h3", $G__34722$$);
        }(), function() {
          var $G__34726$$ = function() {
            return {className:"flex items-baseline justify-end shrink-0 ml-2", children:[function() {
              var $G__34730$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-semibold", "text-indigo-600 dark:text-indigo-300", "text-sm", "sm:text-base"]))), children:$amp$pages$budget$table$format_currency$$($total$jscomp$4$$)};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__34730$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__34730$$);
            }(), function() {
              var $G__34734_JSCompiler_temp_const$jscomp$inline_3595$$ = $APP.$helix$impl$props$normalize_class$$("w-4 h-4 ml-3 transition-transform " + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$("text-slate-500  dark:text-slate-500") + " " + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($APP.$cljs$core$truth_$$($expanded_items$jscomp$1$$.$cljs$core$IFn$_invoke$arity$1$ ? $expanded_items$jscomp$1$$.$cljs$core$IFn$_invoke$arity$1$($item_id$jscomp$1$$) : $expanded_items$jscomp$1$$.call(null, 
              $item_id$jscomp$1$$)) ? "rotate-90" : null));
              var $G__34738$jscomp$inline_3597_JSCompiler_inline_result$jscomp$inline_3596$$ = {};
              $G__34738$jscomp$inline_3597_JSCompiler_inline_result$jscomp$inline_3596$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$ui$icons$ChevronRightIcon$$, $G__34738$jscomp$inline_3597_JSCompiler_inline_result$jscomp$inline_3596$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$ui$icons$ChevronRightIcon$$, $G__34738$jscomp$inline_3597_JSCompiler_inline_result$jscomp$inline_3596$$);
              $G__34734_JSCompiler_temp_const$jscomp$inline_3595$$ = {className:$G__34734_JSCompiler_temp_const$jscomp$inline_3595$$, children:$G__34738$jscomp$inline_3597_JSCompiler_inline_result$jscomp$inline_3596$$};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__34734_JSCompiler_temp_const$jscomp$inline_3595$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__34734_JSCompiler_temp_const$jscomp$inline_3595$$);
            }()]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__34726$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__34726$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__34717$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__34717$$);
    }(), $APP.$cljs$core$truth_$$($expanded_items$jscomp$1$$.$cljs$core$IFn$_invoke$arity$1$ ? $expanded_items$jscomp$1$$.$cljs$core$IFn$_invoke$arity$1$($item_id$jscomp$1$$) : $expanded_items$jscomp$1$$.call(null, $item_id$jscomp$1$$)) ? function() {
      var $G__34740$$ = function() {
        return {className:"border-l-2 border-pink-500/30", children:[function() {
          var $G__34744_JSCompiler_temp_const$jscomp$inline_4121$$ = $APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_sm$$, "bg-slate-100/60 dark:bg-slate-800/60"])));
          var $G__34748$jscomp$inline_4123_JSCompiler_inline_result$jscomp$inline_4122$$ = {className:"px-8 py-4", children:$cljs$cst$857$description$$.$cljs$core$IFn$_invoke$arity$1$($item$jscomp$38$$)};
          $G__34748$jscomp$inline_4123_JSCompiler_inline_result$jscomp$inline_4122$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__34748$jscomp$inline_4123_JSCompiler_inline_result$jscomp$inline_4122$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__34748$jscomp$inline_4123_JSCompiler_inline_result$jscomp$inline_4122$$);
          $G__34744_JSCompiler_temp_const$jscomp$inline_4121$$ = {className:$G__34744_JSCompiler_temp_const$jscomp$inline_4121$$, children:$G__34748$jscomp$inline_4123_JSCompiler_inline_result$jscomp$inline_4122$$};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__34744_JSCompiler_temp_const$jscomp$inline_4121$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__34744_JSCompiler_temp_const$jscomp$inline_4121$$);
        }(), function() {
          var $G__34752$$ = function() {
            return {children:$APP.$cljs$core$map$$.$cljs$core$IFn$_invoke$arity$2$(function($G__34758_G__34767_ri$$) {
              var $G__34755_G__34755__$1_G__34757_G__34766_JSCompiler_temp_const$jscomp$inline_4125$$ = $APP.$cljs$cst$25$type$$.$cljs$core$IFn$_invoke$arity$1$($G__34758_G__34767_ri$$);
              $G__34755_G__34755__$1_G__34757_G__34766_JSCompiler_temp_const$jscomp$inline_4125$$ = $G__34755_G__34755__$1_G__34757_G__34766_JSCompiler_temp_const$jscomp$inline_4125$$ instanceof $APP.$cljs$core$Keyword$$ ? $G__34755_G__34755__$1_G__34757_G__34766_JSCompiler_temp_const$jscomp$inline_4125$$.$fqn$ : null;
              switch($G__34755_G__34755__$1_G__34757_G__34766_JSCompiler_temp_const$jscomp$inline_4125$$) {
                case "header":
                  $G__34755_G__34755__$1_G__34757_G__34766_JSCompiler_temp_const$jscomp$inline_4125$$ = $APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$("px-8 py-2 border-b border-slate-700/40;bg-white        dark:bg-slate-900;text-pink-700/50 dark:text-pink-300/50;text-sm sm:text-base;font-semibold;uppercase;tracking-[0.15em]".split(";"))));
                  var $G__34762$jscomp$inline_4127_JSCompiler_inline_result$jscomp$inline_4126$$ = {children:$APP.$cljs$cst$417$label$$.$cljs$core$IFn$_invoke$arity$1$($G__34758_G__34767_ri$$)};
                  $G__34762$jscomp$inline_4127_JSCompiler_inline_result$jscomp$inline_4126$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__34762$jscomp$inline_4127_JSCompiler_inline_result$jscomp$inline_4126$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__34762$jscomp$inline_4127_JSCompiler_inline_result$jscomp$inline_4126$$);
                  $G__34755_G__34755__$1_G__34757_G__34766_JSCompiler_temp_const$jscomp$inline_4125$$ = {className:$G__34755_G__34755__$1_G__34757_G__34766_JSCompiler_temp_const$jscomp$inline_4125$$, children:$G__34762$jscomp$inline_4127_JSCompiler_inline_result$jscomp$inline_4126$$};
                  $G__34758_G__34767_ri$$ = $APP.$cljs$cst$99$key$$.$cljs$core$IFn$_invoke$arity$1$($G__34758_G__34767_ri$$);
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$("div", $G__34755_G__34755__$1_G__34757_G__34766_JSCompiler_temp_const$jscomp$inline_4125$$, $G__34758_G__34767_ri$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__34755_G__34755__$1_G__34757_G__34766_JSCompiler_temp_const$jscomp$inline_4125$$, $G__34758_G__34767_ri$$);
                case "detail":
                  return $G__34755_G__34755__$1_G__34757_G__34766_JSCompiler_temp_const$jscomp$inline_4125$$ = {idx:$APP.$cljs$cst$769$idx$$.$cljs$core$IFn$_invoke$arity$1$($G__34758_G__34767_ri$$), detail:$APP.$cljs$cst$636$detail$$.$cljs$core$IFn$_invoke$arity$1$($G__34758_G__34767_ri$$), "set-expanded-items":$set_expanded_items$jscomp$1$$, "expanded-items":$expanded_items$jscomp$1$$}, $G__34758_G__34767_ri$$ = $APP.$cljs$cst$99$key$$.$cljs$core$IFn$_invoke$arity$1$($G__34758_G__34767_ri$$), $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$ ? 
                  $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$($amp$pages$budget$table$detail_line_item$$, $G__34755_G__34755__$1_G__34757_G__34766_JSCompiler_temp_const$jscomp$inline_4125$$, $G__34758_G__34767_ri$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$budget$table$detail_line_item$$, $G__34755_G__34755__$1_G__34757_G__34766_JSCompiler_temp_const$jscomp$inline_4125$$, $G__34758_G__34767_ri$$);
                default:
                  throw Error("No matching clause: " + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($G__34755_G__34755__$1_G__34757_G__34766_JSCompiler_temp_const$jscomp$inline_4125$$));
              }
            }, $render_items$$)};
          }();
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("ol", $G__34752$$) : $APP.$helix$core$jsx$$.call(null, "ol", $G__34752$$);
        }(), function() {
          var $G__34771$$ = function() {
            return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["bg-white        dark:bg-slate-900", "flex flex-col border-t border-slate-200 dark:border-slate-800"]))), children:[$has_tax_QMARK_$jscomp$1$$ ? function() {
              var $G__34775$$ = function() {
                return {children:[function() {
                  var $G__34779$$ = function() {
                    return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-semibold", "text-sm", "px-8 py-2 flex"]))), children:[function() {
                      var $G__34783$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["text-[10px]", "text-slate-400  dark:text-slate-600"]))), children:"-"};
                      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__34783$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__34783$$);
                    }(), function() {
                      var $G__34787$$ = function() {
                        return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["flex justify-between ml-8 w-full", "text-slate-700  dark:text-slate-300"]))), children:[function() {
                          var $G__34791$$ = {children:"Sub total: "};
                          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__34791$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__34791$$);
                        }(), function() {
                          var $G__34795$$ = {children:$amp$pages$budget$table$format_currency$$($sub_total$jscomp$2$$)};
                          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__34795$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__34795$$);
                        }()]};
                      }();
                      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__34787$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__34787$$);
                    }()]};
                  }();
                  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__34779$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__34779$$);
                }(), function() {
                  var $G__34799$$ = function() {
                    return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-semibold", "text-sm", "px-8 py-2 flex"]))), children:[function() {
                      var $G__34803$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["text-[10px]", "text-slate-400  dark:text-slate-600"]))), children:"-"};
                      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__34803$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__34803$$);
                    }(), function() {
                      var $G__34807$$ = function() {
                        return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["flex justify-between ml-8 w-full", "text-amber-600/80 dark:text-amber-300/80"]))), children:[function() {
                          var $G__34811$$ = {children:$tax_label$$};
                          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__34811$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__34811$$);
                        }(), function() {
                          var $G__34815$$ = {children:$amp$pages$budget$table$format_currency$$($tax_total$jscomp$1$$)};
                          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__34815$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__34815$$);
                        }()]};
                      }();
                      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__34807$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__34807$$);
                    }()]};
                  }();
                  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__34799$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__34799$$);
                }()]};
              }();
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__34775$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__34775$$);
            }() : null, function() {
              var $G__34819$$ = function() {
                return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-bold", "text-base", "bg-slate-50 dark:bg-slate-950 px-8 py-4 flex border-t border-pink-500/20"]))), children:[function() {
                  var $G__34824$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["text-[10px]", "text-slate-400  dark:text-slate-600"]))), children:"-"};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__34824$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__34824$$);
                }(), function() {
                  var $G__34828$$ = function() {
                    return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["flex justify-between ml-8 w-full", "text-pink-700   dark:text-pink-300"]))), children:[function() {
                      var $G__34833$$ = {children:"Total: "};
                      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__34833$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__34833$$);
                    }(), function() {
                      var $G__34841$$ = {children:$amp$pages$budget$table$format_currency$$($total$jscomp$4$$)};
                      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__34841$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__34841$$);
                    }()]};
                  }();
                  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__34828$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__34828$$);
                }()]};
              }();
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__34819$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__34819$$);
            }(), function() {
              var $G__34847$$ = function() {
                return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$btn_text$$, "bg-slate-100/60 dark:bg-slate-800/60", "flex p-3 justify-center items-center cursor-pointer"]))), onClick:function() {
                  function $G__34856_35061$$($prev$jscomp$13$$) {
                    return $APP.$cljs$core$truth_$$($prev$jscomp$13$$.$cljs$core$IFn$_invoke$arity$1$ ? $prev$jscomp$13$$.$cljs$core$IFn$_invoke$arity$1$($item_id$jscomp$1$$) : $prev$jscomp$13$$.call(null, $item_id$jscomp$1$$)) ? $APP.$cljs$core$disj$$.$cljs$core$IFn$_invoke$arity$2$($prev$jscomp$13$$, $item_id$jscomp$1$$) : $APP.$cljs$core$conj$$.$cljs$core$IFn$_invoke$arity$2$($prev$jscomp$13$$, $item_id$jscomp$1$$);
                  }
                  $set_expanded_items$jscomp$1$$.$cljs$core$IFn$_invoke$arity$1$ ? $set_expanded_items$jscomp$1$$.$cljs$core$IFn$_invoke$arity$1$($G__34856_35061$$) : $set_expanded_items$jscomp$1$$.call(null, $G__34856_35061$$);
                  return $scroll_to_ref$$.$cljs$core$IFn$_invoke$arity$1$ ? $scroll_to_ref$$.$cljs$core$IFn$_invoke$arity$1$($section_ref$$) : $scroll_to_ref$$.call(null, $section_ref$$);
                }, children:["CLOSE SECTION", function() {
                  var $G__34865_JSCompiler_temp_const$jscomp$inline_3603$$ = $APP.$helix$impl$props$normalize_class$$("w-4 h-4 transition-transform ml-2 " + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($APP.$cljs$core$truth_$$($expanded_items$jscomp$1$$.$cljs$core$IFn$_invoke$arity$1$ ? $expanded_items$jscomp$1$$.$cljs$core$IFn$_invoke$arity$1$($item_id$jscomp$1$$) : $expanded_items$jscomp$1$$.call(null, $item_id$jscomp$1$$)) ? "-rotate-90" : null));
                  var $G__34873$jscomp$inline_3605_JSCompiler_inline_result$jscomp$inline_3604$$ = {};
                  $G__34873$jscomp$inline_3605_JSCompiler_inline_result$jscomp$inline_3604$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$ui$icons$ChevronRightIcon$$, $G__34873$jscomp$inline_3605_JSCompiler_inline_result$jscomp$inline_3604$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$ui$icons$ChevronRightIcon$$, $G__34873$jscomp$inline_3605_JSCompiler_inline_result$jscomp$inline_3604$$);
                  $G__34865_JSCompiler_temp_const$jscomp$inline_3603$$ = {className:$G__34865_JSCompiler_temp_const$jscomp$inline_3603$$, children:$G__34873$jscomp$inline_3605_JSCompiler_inline_result$jscomp$inline_3604$$};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__34865_JSCompiler_temp_const$jscomp$inline_3603$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__34865_JSCompiler_temp_const$jscomp$inline_3603$$);
                }()]};
              }();
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__34847$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__34847$$);
            }()]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__34771$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__34771$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__34740$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__34740$$);
    }() : null]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("li", $G__34713_details$jscomp$5_map__34711_map__34711__$1_props__22175__auto__$jscomp$131_vec__34708$$) : $APP.$helix$core$jsxs$$.call(null, "li", $G__34713_details$jscomp$5_map__34711_map__34711__$1_props__22175__auto__$jscomp$131_vec__34708$$);
};
$amp$pages$budget$table$budget_table$$ = function($G__34914_map__34903_map__34903__$1_props__22175__auto__$jscomp$132_vec__34900_vec__34909$$, $maybe_ref__22176__auto__$jscomp$132$$) {
  $G__34914_map__34903_map__34903__$1_props__22175__auto__$jscomp$132_vec__34900_vec__34909$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__34914_map__34903_map__34903__$1_props__22175__auto__$jscomp$132_vec__34900_vec__34909$$), $maybe_ref__22176__auto__$jscomp$132$$], null);
  $G__34914_map__34903_map__34903__$1_props__22175__auto__$jscomp$132_vec__34900_vec__34909$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__34914_map__34903_map__34903__$1_props__22175__auto__$jscomp$132_vec__34900_vec__34909$$, 0, null);
  $G__34914_map__34903_map__34903__$1_props__22175__auto__$jscomp$132_vec__34900_vec__34909$$ = $APP.$cljs$core$__destructure_map$$($G__34914_map__34903_map__34903__$1_props__22175__auto__$jscomp$132_vec__34900_vec__34909$$);
  var $cost_data$jscomp$2$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__34914_map__34903_map__34903__$1_props__22175__auto__$jscomp$132_vec__34900_vec__34909$$, $cljs$cst$854$cost_data$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__34914_map__34903_map__34903__$1_props__22175__auto__$jscomp$132_vec__34900_vec__34909$$ = $APP.$helix$hooks$use_state$$($APP.$cljs$core$PersistentHashSet$EMPTY$$);
  var $expanded_items$jscomp$2$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__34914_map__34903_map__34903__$1_props__22175__auto__$jscomp$132_vec__34900_vec__34909$$, 0, null), $set_expanded_items$jscomp$2$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__34914_map__34903_map__34903__$1_props__22175__auto__$jscomp$132_vec__34900_vec__34909$$, 1, null);
  $G__34914_map__34903_map__34903__$1_props__22175__auto__$jscomp$132_vec__34900_vec__34909$$ = function() {
    return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["w-full", "text-slate-950  dark:text-white", "font-mono"]))), children:[$APP.$cljs$core$map_indexed$cljs$0core$0IFn$0_invoke$0arity$02$$(function($G__34919_idx$jscomp$73$$, $G__34918_item$jscomp$39$$) {
      $G__34918_item$jscomp$39$$ = {idx:$G__34919_idx$jscomp$73$$, item:$G__34918_item$jscomp$39$$, "set-expanded-items":$set_expanded_items$jscomp$2$$, "expanded-items":$expanded_items$jscomp$2$$};
      $G__34919_idx$jscomp$73$$ = "" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($G__34919_idx$jscomp$73$$) + "-section";
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$($amp$pages$budget$table$section_line_item$$, $G__34918_item$jscomp$39$$, $G__34919_idx$jscomp$73$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$budget$table$section_line_item$$, $G__34918_item$jscomp$39$$, $G__34919_idx$jscomp$73$$);
    }, $cost_data$jscomp$2$$), function() {
      var $G__34924$$ = {"cost-data":$cost_data$jscomp$2$$};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$pages$budget$table$total_section$$, $G__34924$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$budget$table$total_section$$, $G__34924$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("ol", $G__34914_map__34903_map__34903__$1_props__22175__auto__$jscomp$132_vec__34900_vec__34909$$) : $APP.$helix$core$jsxs$$.call(null, "ol", $G__34914_map__34903_map__34903__$1_props__22175__auto__$jscomp$132_vec__34900_vec__34909$$);
};
$amp$pages$budget$cost_breakdown$preview$$ = function($G__35029_map__35027_props__22175__auto__$jscomp$133_vec__35024$$, $maybe_ref__22176__auto__$jscomp$133$$) {
  $G__35029_map__35027_props__22175__auto__$jscomp$133_vec__35024$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__35029_map__35027_props__22175__auto__$jscomp$133_vec__35024$$), $maybe_ref__22176__auto__$jscomp$133$$], null);
  $G__35029_map__35027_props__22175__auto__$jscomp$133_vec__35024$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__35029_map__35027_props__22175__auto__$jscomp$133_vec__35024$$, 0, null);
  $APP.$cljs$core$__destructure_map$$($G__35029_map__35027_props__22175__auto__$jscomp$133_vec__35024$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__35029_map__35027_props__22175__auto__$jscomp$133_vec__35024$$ = function() {
    return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_lg$$, "p-4"]))), children:[function() {
      var $G__35033$$ = {children:["The Armenia Pavilion at the 61st Venice Biennale is a major international cultural undertaking—", "structured to meet the standards of the most rigorous national presentations. "]};
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__35033$$) : $APP.$helix$core$jsxs$$.call(null, "span", $G__35033$$);
    }(), function() {
      var $G__35037$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:"With a total budget of approximately "};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__35037$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__35037$$);
    }(), function() {
      var $G__35042$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:" ("};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__35042$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__35042$$);
    }(), function() {
      var $G__35046$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$value_currency$$), children:"$1,6M USD"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__35046$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__35046$$);
    }(), function() {
      var $G__35050$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:"), the financial framework covers the full scope of "};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__35050$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__35050$$);
    }(), function() {
      var $G__35054$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:"production, installation, operations, communications,"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__35054$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__35054$$);
    }(), function() {
      var $G__35058$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:" and "};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__35058$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__35058$$);
    }(), function() {
      var $G__35063$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:"documentation"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__35063$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__35063$$);
    }(), function() {
      var $G__35067$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:". "};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__35067$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__35067$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__35029_map__35027_props__22175__auto__$jscomp$133_vec__35024$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__35029_map__35027_props__22175__auto__$jscomp$133_vec__35024$$);
};
$amp$pages$budget$cost_breakdown$details$$ = function($G__35103_map__35099_props__22175__auto__$jscomp$134_vec__35096$$, $maybe_ref__22176__auto__$jscomp$134$$) {
  $G__35103_map__35099_props__22175__auto__$jscomp$134_vec__35096$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__35103_map__35099_props__22175__auto__$jscomp$134_vec__35096$$), $maybe_ref__22176__auto__$jscomp$134$$], null);
  $G__35103_map__35099_props__22175__auto__$jscomp$134_vec__35096$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__35103_map__35099_props__22175__auto__$jscomp$134_vec__35096$$, 0, null);
  $APP.$cljs$core$__destructure_map$$($G__35103_map__35099_props__22175__auto__$jscomp$134_vec__35096$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__35103_map__35099_props__22175__auto__$jscomp$134_vec__35096$$ = function() {
    return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_lg$$, "p-4"]))), children:[function() {
      var $G__35109$$ = {children:["The Armenia Pavilion at the 61st Venice Biennale is a major international cultural undertaking—", "structured to meet the standards of the most rigorous national presentations. "]};
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__35109$$) : $APP.$helix$core$jsxs$$.call(null, "span", $G__35109$$);
    }(), function() {
      var $G__35113$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:"With a total budget of approximately "};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__35113$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__35113$$);
    }(), function() {
      var $G__35118$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:" ("};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__35118$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__35118$$);
    }(), function() {
      var $G__35122$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$value_currency$$), children:"$1,6M USD"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__35122$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__35122$$);
    }(), function() {
      var $G__35126$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:"), the financial framework covers the full scope of "};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__35126$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__35126$$);
    }(), function() {
      var $G__35130$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:"production, installation, operations, communications,"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__35130$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__35130$$);
    }(), function() {
      var $G__35135$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:" and "};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__35135$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__35135$$);
    }(), function() {
      var $G__35139$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:"documentation"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__35139$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__35139$$);
    }(), function() {
      var $G__35143$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:". "};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__35143$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__35143$$);
    }(), function() {
      var $G__35147$$ = {className:"block my-6", children:["As Armenia does not maintain a permanent national pavilion in Venice, a venue must be secured through rental—", "as is customary for many smaller and non-permanent participating nations. "]};
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__35147$$) : $APP.$helix$core$jsxs$$.call(null, "span", $G__35147$$);
    }(), function() {
      var $G__35152$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:"The selected site is located outside the Biennale's primary zones, enabling a significantly lower base rent—approximately "};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__35152$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__35152$$);
    }(), function() {
      var $G__35156$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$value_currency$$), children:"$145,600"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__35156$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__35156$$);
    }(), function() {
      var $G__35164$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:"—while remaining fully accredited and visible within the official Biennale structure. "};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__35164$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__35164$$);
    }(), function() {
      var $G__35168$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:"By contrast, venues within the Giardini or Arsenale—when available—typically begin at "};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__35168$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__35168$$);
    }(), function() {
      var $G__35173$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$value_currency$$), children:"$450,000"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__35173$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__35173$$);
    }(), function() {
      var $G__35181$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:" in base rent, before construction, staffing, utilities, logistics, and operating overhead. "};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__35181$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__35181$$);
    }(), function() {
      var $G__35189$$ = function() {
        return {className:"mt-6", children:[function() {
          var $G__35195$$ = {className:"mt-6", children:"Crucially, the nature of "};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__35195$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__35195$$);
        }(), function() {
          var $G__35201$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:"THE STUDIO"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__35201$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__35201$$);
        }(), function() {
          var $G__35205$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:" makes this venue choice not only strategic but essential. "};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__35205$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__35205$$);
        }(), function() {
          var $G__35213$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:"The work is conceived to be produced, refined, and evolved "};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__35213$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__35213$$);
        }(), function() {
          var $G__35219$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-semibold", "italic", "text-slate-900  dark:text-slate-100"]))), children:"on site"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__35219$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__35219$$);
        }(), function() {
          var $G__35232$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:", allowing the Pavilion to function simultaneously as exhibition space and working studio. "};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__35232$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__35232$$);
        }(), function() {
          var $G__35237$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:["This approach meets extremely tight production and installation deadlines while maintaining full artistic and technical control—", "conditions that would be far more difficult, costly, or even impossible under a traditional off-site fabrication and transport model. "]};
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__35237$$) : $APP.$helix$core$jsxs$$.call(null, "span", $G__35237$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__35189$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__35189$$);
    }(), function() {
      var $G__35247$$ = {className:"block my-6", children:"Rather than directing the majority of resources toward a single, fixed monumental installation, the artist and team have deliberately taken another route. "};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__35247$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__35247$$);
    }(), function() {
      var $G__35251$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:"By producing the work on site, the Pavilion avoids the need for a pre-fabricated "};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__35251$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__35251$$);
    }(), function() {
      var $G__35259$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-semibold", "italic", "text-slate-900  dark:text-slate-100"]))), children:"“grand object”"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__35259$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__35259$$);
    }(), function() {
      var $G__35263$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:" altogether. "};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__35263$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__35263$$);
    }(), function() {
      var $G__35267$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:"This decision reduces fabrication, crating, international shipping, and risk-related costs, while aligning more precisely with the broader conceptual goals: "};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__35267$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__35267$$);
    }(), function() {
      var $G__35272$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:"process over spectacle, presence over monumentality,"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__35272$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__35272$$);
    }(), function() {
      var $G__35276$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:" and "};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__35276$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__35276$$);
    }(), function() {
      var $G__35280$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:"sustained making over static display"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__35280$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__35280$$);
    }(), function() {
      var $G__35284$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:". "};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__35284$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__35284$$);
    }(), function() {
      var $G__35288$$ = function() {
        return {className:"my-6", children:[function() {
          var $G__35293$$ = {className:"", children:"In this sense, cost efficiency and artistic rigor are not in opposition but mutually reinforcing. "};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__35293$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__35293$$);
        }(), function() {
          var $G__35297$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:"The Pavilion's structure distributes resources across time, labor, materials, and public engagement—rather than concentrating them into a single object whose expense would be driven largely by transport and scale rather than meaning. "};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__35297$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__35297$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__35288$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__35288$$);
    }(), function() {
      var $G__35301$$ = function() {
        return {className:"block my-6", children:[function() {
          var $G__35305$$ = {className:"", children:"Despite these efficiencies, the overall cost of operating in Venice during the Biennale remains high. "};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__35305$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__35305$$);
        }(), function() {
          var $G__35309$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:"Venice's unique geography, limited infrastructure, and extraordinary demand elevate costs across all categories—logistics, storage, labor, accommodations, and technical services. "};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__35309$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__35309$$);
        }(), function() {
          var $G__35314$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:"These conditions are shared by all national pavilions and reflect the Biennale's position as the most visible international platform in contemporary art. "};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__35314$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__35314$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__35301$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__35301$$);
    }(), function() {
      var $G__35322$$ = {className:"mt-6", children:"Unlike projects that culminate at opening, this Pavilion is conceived as a"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__35322$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__35322$$);
    }(), function() {
      var $G__35326$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-semibold", "italic", "text-slate-900  dark:text-slate-100"]))), children:" seven-month operational commitment"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__35326$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__35326$$);
    }(), function() {
      var $G__35330$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:": a living environment that functions simultaneously as exhibition space, working studio, public forum, and diplomatic platform—requiring sustained staffing, materials, logistics, and institutional oversight throughout the duration of the Biennale. "};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__35330$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__35330$$);
    }(), function() {
      var $G__35338$$ = {className:"block mt-6", children:"Significant investment secures venue readiness and regulatory compliance, supports curatorial and administrative leadership, funds museum-scale fabrication and specialized craft, and addresses Venice-specific transport, storage, installation, and reverse logistics. "};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__35338$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__35338$$);
    }(), function() {
      var $G__35342$$ = function() {
        return {className:"block mt-6", children:[function() {
          var $G__35346$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:"THE STUDIO"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__35346$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__35346$$);
        }(), function() {
          var $G__35354$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:" is budgeted as an ongoing on-site operation, ensuring continuous execution, maintenance, and evolution of the work across the exhibition period—distinguishing the Pavilion from static presentations. "};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__35354$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__35354$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__35342$$) : $APP.$helix$core$jsxs$$.call(null, "span", $G__35342$$);
    }(), function() {
      var $G__35364$$ = {className:"block mt-6", children:"Public visibility and long-term legacy are strengthened through opening week programs, marketing and public relations, publication, and comprehensive film and photographic documentation—ensuring that the Pavilion's impact extends into international media, scholarship, and institutional archives. "};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__35364$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__35364$$);
    }(), function() {
      var $G__35374$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_closing$$, "block mt-6"]))), children:"A responsible contingency is included to accommodate the realities of an extended international project operating across jurisdictions, timelines, and currencies—ensuring stability, accountability, and the successful delivery of Armenia's national presentation on the world stage."};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__35374$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__35374$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__35103_map__35099_props__22175__auto__$jscomp$134_vec__35096$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__35103_map__35099_props__22175__auto__$jscomp$134_vec__35096$$);
};
$amp$pages$budget$cost_breakdown$footer$$ = function($G__35406_G__35410$jscomp$inline_4130_map__35399_props__22175__auto__$jscomp$135_vec__35396$$, $maybe_ref__22176__auto__$jscomp$135$$) {
  $G__35406_G__35410$jscomp$inline_4130_map__35399_props__22175__auto__$jscomp$135_vec__35396$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__35406_G__35410$jscomp$inline_4130_map__35399_props__22175__auto__$jscomp$135_vec__35396$$), $maybe_ref__22176__auto__$jscomp$135$$], null);
  $G__35406_G__35410$jscomp$inline_4130_map__35399_props__22175__auto__$jscomp$135_vec__35396$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__35406_G__35410$jscomp$inline_4130_map__35399_props__22175__auto__$jscomp$135_vec__35396$$, 0, null);
  $APP.$cljs$core$__destructure_map$$($G__35406_G__35410$jscomp$inline_4130_map__35399_props__22175__auto__$jscomp$135_vec__35396$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__35406_G__35410$jscomp$inline_4130_map__35399_props__22175__auto__$jscomp$135_vec__35396$$ = {"cost-data":$amp$pages$budget$cost_breakdown$cost_data$$};
  $G__35406_G__35410$jscomp$inline_4130_map__35399_props__22175__auto__$jscomp$135_vec__35396$$ = {className:"mt-12", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$pages$budget$table$budget_table$$, $G__35406_G__35410$jscomp$inline_4130_map__35399_props__22175__auto__$jscomp$135_vec__35396$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$budget$table$budget_table$$, $G__35406_G__35410$jscomp$inline_4130_map__35399_props__22175__auto__$jscomp$135_vec__35396$$)};
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__35406_G__35410$jscomp$inline_4130_map__35399_props__22175__auto__$jscomp$135_vec__35396$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__35406_G__35410$jscomp$inline_4130_map__35399_props__22175__auto__$jscomp$135_vec__35396$$);
};
$amp$pages$budget$cost_breakdown$cost_breakdown$$ = function($G__35422_id$jscomp$91_map__35420_props__22175__auto__$jscomp$136_vec__35417$$, $G__35426$jscomp$inline_4133_JSCompiler_inline_result$jscomp$inline_4132_maybe_ref__22176__auto__$jscomp$136_subtitle$jscomp$3$$) {
  $G__35422_id$jscomp$91_map__35420_props__22175__auto__$jscomp$136_vec__35417$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__35422_id$jscomp$91_map__35420_props__22175__auto__$jscomp$136_vec__35417$$), $G__35426$jscomp$inline_4133_JSCompiler_inline_result$jscomp$inline_4132_maybe_ref__22176__auto__$jscomp$136_subtitle$jscomp$3$$], null);
  $G__35422_id$jscomp$91_map__35420_props__22175__auto__$jscomp$136_vec__35417$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__35422_id$jscomp$91_map__35420_props__22175__auto__$jscomp$136_vec__35417$$, 0, null);
  var $map__35420__$1_title$jscomp$30$$ = $APP.$cljs$core$__destructure_map$$($G__35422_id$jscomp$91_map__35420_props__22175__auto__$jscomp$136_vec__35417$$);
  $G__35422_id$jscomp$91_map__35420_props__22175__auto__$jscomp$136_vec__35417$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__35420__$1_title$jscomp$30$$, $APP.$cljs$cst$286$id$$);
  $G__35426$jscomp$inline_4133_JSCompiler_inline_result$jscomp$inline_4132_maybe_ref__22176__auto__$jscomp$136_subtitle$jscomp$3$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__35420__$1_title$jscomp$30$$, $APP.$cljs$cst$782$subtitle$$);
  $map__35420__$1_title$jscomp$30$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__35420__$1_title$jscomp$30$$, $APP.$cljs$cst$288$title$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__35426$jscomp$inline_4133_JSCompiler_inline_result$jscomp$inline_4132_maybe_ref__22176__auto__$jscomp$136_subtitle$jscomp$3$$ = {idx:3, "section-hint":$G__35426$jscomp$inline_4133_JSCompiler_inline_result$jscomp$inline_4132_maybe_ref__22176__auto__$jscomp$136_subtitle$jscomp$3$$, title:$map__35420__$1_title$jscomp$30$$, "expand-button-label":"Read more", "preview-text":$amp$pages$budget$cost_breakdown$preview$$, "full-text":$amp$pages$budget$cost_breakdown$details$$, "footer-text":$amp$pages$budget$cost_breakdown$footer$$};
  $G__35426$jscomp$inline_4133_JSCompiler_inline_result$jscomp$inline_4132_maybe_ref__22176__auto__$jscomp$136_subtitle$jscomp$3$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$ui$expandable_text$expandable_text_area_2$$, $G__35426$jscomp$inline_4133_JSCompiler_inline_result$jscomp$inline_4132_maybe_ref__22176__auto__$jscomp$136_subtitle$jscomp$3$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$ui$expandable_text$expandable_text_area_2$$, 
  $G__35426$jscomp$inline_4133_JSCompiler_inline_result$jscomp$inline_4132_maybe_ref__22176__auto__$jscomp$136_subtitle$jscomp$3$$);
  $G__35422_id$jscomp$91_map__35420_props__22175__auto__$jscomp$136_vec__35417$$ = {id:$G__35422_id$jscomp$91_map__35420_props__22175__auto__$jscomp$136_vec__35417$$, children:$G__35426$jscomp$inline_4133_JSCompiler_inline_result$jscomp$inline_4132_maybe_ref__22176__auto__$jscomp$136_subtitle$jscomp$3$$};
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__35422_id$jscomp$91_map__35420_props__22175__auto__$jscomp$136_vec__35417$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__35422_id$jscomp$91_map__35420_props__22175__auto__$jscomp$136_vec__35417$$);
};
$amp$pages$budget$location$preview_text$$ = function($G__34340_props__22175__auto__$jscomp$137$$) {
  $APP.$helix$core$extract_cljs_props$$($G__34340_props__22175__auto__$jscomp$137$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__34340_props__22175__auto__$jscomp$137$$ = function() {
    return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$body_base$$), children:["The Armenia Pavilion 2026 will be located across ", function() {
      var $G__34344$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:"two sites,"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__34344$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__34344$$);
    }(), " within the historic Arsenale of Venice. ", function() {
      var $G__34348$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:" 1. A wonderful interior grand studio"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__34348$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__34348$$);
    }(), function() {
      var $G__34352$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:" , as well 2. An important exterior public crossing to the Arsenale"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__34352$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__34352$$);
    }(), ". ", "Together these two sites will form a single spatial constellation. ", function() {
      var $G__34356$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-900  dark:text-slate-100"), children:"A place for study, a place for work, to create, share and exhibit"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__34356$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__34356$$);
    }(), function() {
      var $G__34360$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-900  dark:text-slate-100"), children:" at a public-crossing threshold"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__34360$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__34360$$);
    }(), "—each distinctly neccesary and helpful, both in concluding the final design as well as the making, viewing, and observing of the artworks presented."]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__34340_props__22175__auto__$jscomp$137$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__34340_props__22175__auto__$jscomp$137$$);
};
$amp$pages$budget$location$preview$$ = function($G__34372_G__34376$jscomp$inline_3612_map__34370_props__22175__auto__$jscomp$138_vec__34367$$, $maybe_ref__22176__auto__$jscomp$138$$) {
  $G__34372_G__34376$jscomp$inline_3612_map__34370_props__22175__auto__$jscomp$138_vec__34367$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__34372_G__34376$jscomp$inline_3612_map__34370_props__22175__auto__$jscomp$138_vec__34367$$), $maybe_ref__22176__auto__$jscomp$138$$], null);
  $G__34372_G__34376$jscomp$inline_3612_map__34370_props__22175__auto__$jscomp$138_vec__34367$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__34372_G__34376$jscomp$inline_3612_map__34370_props__22175__auto__$jscomp$138_vec__34367$$, 0, null);
  $APP.$cljs$core$__destructure_map$$($G__34372_G__34376$jscomp$inline_3612_map__34370_props__22175__auto__$jscomp$138_vec__34367$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__34372_G__34376$jscomp$inline_3612_map__34370_props__22175__auto__$jscomp$138_vec__34367$$ = {};
  $G__34372_G__34376$jscomp$inline_3612_map__34370_props__22175__auto__$jscomp$138_vec__34367$$ = {className:"p-4 mb-12", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$pages$budget$location$preview_text$$, $G__34372_G__34376$jscomp$inline_3612_map__34370_props__22175__auto__$jscomp$138_vec__34367$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$budget$location$preview_text$$, $G__34372_G__34376$jscomp$inline_3612_map__34370_props__22175__auto__$jscomp$138_vec__34367$$)};
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__34372_G__34376$jscomp$inline_3612_map__34370_props__22175__auto__$jscomp$138_vec__34367$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__34372_G__34376$jscomp$inline_3612_map__34370_props__22175__auto__$jscomp$138_vec__34367$$);
};
$amp$pages$budget$location$full_details$$ = function($G__34416_map__34406_map__34406__$1_props__22175__auto__$jscomp$139_vec__34403$$, $maybe_ref__22176__auto__$jscomp$139$$) {
  $G__34416_map__34406_map__34406__$1_props__22175__auto__$jscomp$139_vec__34403$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__34416_map__34406_map__34406__$1_props__22175__auto__$jscomp$139_vec__34403$$), $maybe_ref__22176__auto__$jscomp$139$$], null);
  $G__34416_map__34406_map__34406__$1_props__22175__auto__$jscomp$139_vec__34403$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__34416_map__34406_map__34406__$1_props__22175__auto__$jscomp$139_vec__34403$$, 0, null);
  $G__34416_map__34406_map__34406__$1_props__22175__auto__$jscomp$139_vec__34403$$ = $APP.$cljs$core$__destructure_map$$($G__34416_map__34406_map__34406__$1_props__22175__auto__$jscomp$139_vec__34403$$);
  $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__34416_map__34406_map__34406__$1_props__22175__auto__$jscomp$139_vec__34403$$, $APP.$cljs$cst$286$id$$);
  $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__34416_map__34406_map__34406__$1_props__22175__auto__$jscomp$139_vec__34403$$, $APP.$cljs$cst$782$subtitle$$);
  $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__34416_map__34406_map__34406__$1_props__22175__auto__$jscomp$139_vec__34403$$, $APP.$cljs$cst$288$title$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $is_desktop_QMARK_$jscomp$4$$ = $APP.$amp$hooks$use_media_query$use_touch_enabled$$();
  $G__34416_map__34406_map__34406__$1_props__22175__auto__$jscomp$139_vec__34403$$ = function() {
    return {className:"space-y-8", children:function() {
      var $G__34420$$ = function() {
        return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$body_base$$), children:[function() {
          var $G__34429_G__34433$jscomp$inline_3615$$ = {};
          $G__34429_G__34433$jscomp$inline_3615$$ = {className:"p-4 mb-12", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$pages$budget$location$preview_text$$, $G__34429_G__34433$jscomp$inline_3615$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$budget$location$preview_text$$, $G__34429_G__34433$jscomp$inline_3615$$)};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__34429_G__34433$jscomp$inline_3615$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__34429_G__34433$jscomp$inline_3615$$);
        }(), function() {
          var $G__34439$$ = function() {
            return {className:"my-8", children:[function() {
              var $G__34451$$ = {dev:!1, "interactive?":$is_desktop_QMARK_$jscomp$4$$, "initial-view":$APP.$amp$pages$venue$map_config$initial_view$$, "ant-paths":$APP.$amp$pages$venue$map_config$ant_paths$$, layers:$APP.$amp$pages$venue$map_config$layers$$};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$ui$map$mapbox_map$$, $G__34451$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$ui$map$mapbox_map$$, $G__34451$$);
            }(), function() {
              var $G__34457$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-mono", "text-sm", "italic", "mt-4 px-4"]))), children:"* Walking path from the crossing to the pavilion. ~8 minutes"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__34457$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__34457$$);
            }()]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__34439$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__34439$$);
        }(), function() {
          var $G__34467$$ = function() {
            return {className:"px-4 mt-8 flex flex-col sm:flex-row gap-4", children:[function() {
              var $G__34472$$ = {href:"/visit", className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$("font-display;font-medium;inline-flex items-center gap-2;text-sm uppercase tracking-wider;text-pink-600 dark:text-pink-300;hover:text-pink-700 dark:hover:text-pink-200;transition-colors duration-200".split(";")))), children:"See the full Visitor Guide →"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("a", $G__34472$$) : $APP.$helix$core$jsx$$.call(null, "a", $G__34472$$);
            }(), function() {
              var $G__34480$$ = {href:"https://maps.app.goo.gl/XBwAbBQcj47eHyq5A", target:"_blank", rel:"noopener noreferrer", className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$("font-display;font-medium;inline-flex items-center gap-2;text-sm uppercase tracking-wider;text-slate-500  dark:text-slate-500;hover:text-pink-600 dark:hover:text-pink-300;transition-colors duration-200".split(";")))), 
              children:"Open in Maps ↗"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("a", $G__34480$$) : $APP.$helix$core$jsx$$.call(null, "a", $G__34480$$);
            }()]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__34467$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__34467$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__34420$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__34420$$);
    }()};
  }();
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__34416_map__34406_map__34406__$1_props__22175__auto__$jscomp$139_vec__34403$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__34416_map__34406_map__34406__$1_props__22175__auto__$jscomp$139_vec__34403$$);
};
$amp$pages$budget$location$location_section$$ = function($G__34513_id$jscomp$93_map__34507_props__22175__auto__$jscomp$140_vec__34504$$, $G__34521$jscomp$inline_4136_JSCompiler_inline_result$jscomp$inline_4135_maybe_ref__22176__auto__$jscomp$140_subtitle$jscomp$5$$) {
  $G__34513_id$jscomp$93_map__34507_props__22175__auto__$jscomp$140_vec__34504$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__34513_id$jscomp$93_map__34507_props__22175__auto__$jscomp$140_vec__34504$$), $G__34521$jscomp$inline_4136_JSCompiler_inline_result$jscomp$inline_4135_maybe_ref__22176__auto__$jscomp$140_subtitle$jscomp$5$$], null);
  $G__34513_id$jscomp$93_map__34507_props__22175__auto__$jscomp$140_vec__34504$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__34513_id$jscomp$93_map__34507_props__22175__auto__$jscomp$140_vec__34504$$, 0, null);
  var $map__34507__$1_title$jscomp$32$$ = $APP.$cljs$core$__destructure_map$$($G__34513_id$jscomp$93_map__34507_props__22175__auto__$jscomp$140_vec__34504$$);
  $G__34513_id$jscomp$93_map__34507_props__22175__auto__$jscomp$140_vec__34504$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__34507__$1_title$jscomp$32$$, $APP.$cljs$cst$286$id$$);
  $G__34521$jscomp$inline_4136_JSCompiler_inline_result$jscomp$inline_4135_maybe_ref__22176__auto__$jscomp$140_subtitle$jscomp$5$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__34507__$1_title$jscomp$32$$, $APP.$cljs$cst$782$subtitle$$);
  $map__34507__$1_title$jscomp$32$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__34507__$1_title$jscomp$32$$, $APP.$cljs$cst$288$title$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__34521$jscomp$inline_4136_JSCompiler_inline_result$jscomp$inline_4135_maybe_ref__22176__auto__$jscomp$140_subtitle$jscomp$5$$ = {idx:7, "section-hint":$G__34521$jscomp$inline_4136_JSCompiler_inline_result$jscomp$inline_4135_maybe_ref__22176__auto__$jscomp$140_subtitle$jscomp$5$$, title:$map__34507__$1_title$jscomp$32$$, "expand-button-label":"Expand details", "preview-text":$amp$pages$budget$location$preview$$, "full-text":$amp$pages$budget$location$full_details$$};
  $G__34521$jscomp$inline_4136_JSCompiler_inline_result$jscomp$inline_4135_maybe_ref__22176__auto__$jscomp$140_subtitle$jscomp$5$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$ui$expandable_text$expandable_text_area_2$$, $G__34521$jscomp$inline_4136_JSCompiler_inline_result$jscomp$inline_4135_maybe_ref__22176__auto__$jscomp$140_subtitle$jscomp$5$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$ui$expandable_text$expandable_text_area_2$$, 
  $G__34521$jscomp$inline_4136_JSCompiler_inline_result$jscomp$inline_4135_maybe_ref__22176__auto__$jscomp$140_subtitle$jscomp$5$$);
  $G__34513_id$jscomp$93_map__34507_props__22175__auto__$jscomp$140_vec__34504$$ = {id:$G__34513_id$jscomp$93_map__34507_props__22175__auto__$jscomp$140_vec__34504$$, children:$G__34521$jscomp$inline_4136_JSCompiler_inline_result$jscomp$inline_4135_maybe_ref__22176__auto__$jscomp$140_subtitle$jscomp$5$$};
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__34513_id$jscomp$93_map__34507_props__22175__auto__$jscomp$140_vec__34504$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__34513_id$jscomp$93_map__34507_props__22175__auto__$jscomp$140_vec__34504$$);
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
  return $cljs$core$partition_by$cljs$0core$0IFn$0_invoke$0arity$02$$(function($e$jscomp$221$$) {
    return $amp$pages$budget$cash_flow$parse_date$$($cljs$cst$872$due$$.$cljs$core$IFn$_invoke$arity$1$($e$jscomp$221$$)).toLocaleString("en-US", {month:"long", year:"numeric"});
  }, $APP.$cljs$core$sort_by$cljs$0core$0IFn$0_invoke$0arity$02$$($APP.$cljs$core$comp$$.$cljs$core$IFn$_invoke$arity$3$($amp$pages$budget$cash_flow$date__GT_ms$$, $amp$pages$budget$cash_flow$parse_date$$, $cljs$cst$872$due$$), $entries$jscomp$4$$));
};
$amp$pages$budget$cash_flow$month_rollups$$ = function($entries$jscomp$5_groups_sorted$$) {
  $entries$jscomp$5_groups_sorted$$ = $APP.$cljs$core$sort_by$cljs$0core$0IFn$0_invoke$0arity$02$$($APP.$cljs$core$comp$$.$cljs$core$IFn$_invoke$arity$3$($amp$pages$budget$cash_flow$date__GT_ms$$, $amp$pages$budget$cash_flow$parse_date$$, $cljs$cst$872$due$$), $entries$jscomp$5_groups_sorted$$);
  $entries$jscomp$5_groups_sorted$$ = $amp$pages$budget$cash_flow$group_by_month$$($entries$jscomp$5_groups_sorted$$);
  return $APP.$cljs$core$mapv$cljs$0core$0IFn$0_invoke$0arity$02$$(function($group$jscomp$1$$) {
    var $d$jscomp$154$$ = $amp$pages$budget$cash_flow$parse_date$$($cljs$cst$872$due$$.$cljs$core$IFn$_invoke$arity$1$($APP.$cljs$core$first$$($group$jscomp$1$$))), $label$jscomp$23$$ = $d$jscomp$154$$.toLocaleString("en-US", {month:"short", year:"numeric"}), $total$jscomp$5$$ = $APP.$cljs$core$reduce$cljs$0core$0IFn$0_invoke$0arity$03$$($APP.$cljs$core$_PLUS_$$, 0, $APP.$cljs$core$map$$.$cljs$core$IFn$_invoke$arity$2$($cljs$cst$850$amount$$, $group$jscomp$1$$)), $paid$$ = $APP.$cljs$core$reduce$cljs$0core$0IFn$0_invoke$0arity$03$$($APP.$cljs$core$_PLUS_$$, 
    0, $APP.$cljs$core$map$$.$cljs$core$IFn$_invoke$arity$2$($cljs$cst$850$amount$$, $APP.$cljs$core$filter$cljs$0core$0IFn$0_invoke$0arity$02$$(function($p1__35626_SHARP_$$) {
      return $APP.$cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$($cljs$cst$875$paid$$, $APP.$cljs$cst$12$status$$.$cljs$core$IFn$_invoke$arity$1$($p1__35626_SHARP_$$));
    }, $group$jscomp$1$$))), $pending$jscomp$1$$ = $total$jscomp$5$$ - $paid$$, $n_items$$ = $APP.$cljs$core$count$$($group$jscomp$1$$), $n_paid$$ = $APP.$cljs$core$count$$($APP.$cljs$core$filter$cljs$0core$0IFn$0_invoke$0arity$02$$(function($p1__35627_SHARP_$$) {
      return $APP.$cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$($cljs$cst$875$paid$$, $APP.$cljs$cst$12$status$$.$cljs$core$IFn$_invoke$arity$1$($p1__35627_SHARP_$$));
    }, $group$jscomp$1$$)), $n_crit$jscomp$1$$ = $APP.$cljs$core$count$$($APP.$cljs$core$filter$cljs$0core$0IFn$0_invoke$0arity$02$$(function($p1__35628_SHARP_$$) {
      return $APP.$cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$($cljs$cst$893$critical$$, $cljs$cst$873$priority$$.$cljs$core$IFn$_invoke$arity$1$($p1__35628_SHARP_$$));
    }, $group$jscomp$1$$)), $all_paid$jscomp$1$$ = $APP.$cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$($n_paid$$, $n_items$$), $has_now$$ = function() {
      var $year$jscomp$2$$ = $d$jscomp$154$$.getFullYear(), $now$$ = new Date(), $n_year$$ = $now$$.getFullYear();
      return $APP.$cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$($d$jscomp$154$$.getMonth(), $now$$.getMonth()) && $APP.$cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$($year$jscomp$2$$, $n_year$$);
    }();
    return $APP.$cljs$core$PersistentHashMap$fromArrays$$([$cljs$cst$933$all_paid$$, $cljs$cst$934$entries$$, $APP.$cljs$cst$14$pending$$, $cljs$cst$935$n_crit$$, $APP.$cljs$cst$736$total$$, $APP.$cljs$cst$417$label$$, $cljs$cst$875$paid$$, $cljs$cst$936$n_paid$$, $cljs$cst$937$n_items$$, $cljs$cst$938$has_now$$], [$all_paid$jscomp$1$$, $group$jscomp$1$$, $pending$jscomp$1$$, $n_crit$jscomp$1$$, $total$jscomp$5$$, $label$jscomp$23$$, $paid$$, $n_paid$$, $n_items$$, $has_now$$]);
  }, $entries$jscomp$5_groups_sorted$$);
};
$amp$pages$budget$cash_flow$status_classes$$ = function($status$jscomp$10$$) {
  switch($status$jscomp$10$$ instanceof $APP.$cljs$core$Keyword$$ ? $status$jscomp$10$$.$fqn$ : null) {
    case "paid":
      return new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$cljs$cst$939$dot$$, "bg-emerald-400/20 dark:bg-emerald-300/20", $APP.$cljs$cst$398$text$$, "text-emerald-600 dark:text-emerald-300", $APP.$cljs$cst$417$label$$, "COST, PAID"], null);
    case "pending":
      return new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$cljs$cst$939$dot$$, "bg-slate-400/15 dark:bg-slate-500/15", $APP.$cljs$cst$398$text$$, "text-slate-500", $APP.$cljs$cst$417$label$$, "DUE"], null);
    default:
      return new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$cljs$cst$939$dot$$, "bg-slate-400/15 dark:bg-slate-500/15", $APP.$cljs$cst$398$text$$, "text-slate-500", $APP.$cljs$cst$417$label$$, "—"], null);
  }
};
$amp$pages$budget$cash_flow$timeline_node$$ = function($G__35637_36290_G__35640_map__35635_map__35635__$1_map__35636__$1_props__22175__auto__$jscomp$141_status$jscomp$11_vec__35632$$, $G__35638_36291_entry$jscomp$29_maybe_ref__22176__auto__$jscomp$141$$) {
  $G__35637_36290_G__35640_map__35635_map__35635__$1_map__35636__$1_props__22175__auto__$jscomp$141_status$jscomp$11_vec__35632$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__35637_36290_G__35640_map__35635_map__35635__$1_map__35636__$1_props__22175__auto__$jscomp$141_status$jscomp$11_vec__35632$$), $G__35638_36291_entry$jscomp$29_maybe_ref__22176__auto__$jscomp$141$$], null);
  $G__35637_36290_G__35640_map__35635_map__35635__$1_map__35636__$1_props__22175__auto__$jscomp$141_status$jscomp$11_vec__35632$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__35637_36290_G__35640_map__35635_map__35635__$1_map__35636__$1_props__22175__auto__$jscomp$141_status$jscomp$11_vec__35632$$, 0, null);
  $G__35637_36290_G__35640_map__35635_map__35635__$1_map__35636__$1_props__22175__auto__$jscomp$141_status$jscomp$11_vec__35632$$ = $APP.$cljs$core$__destructure_map$$($G__35637_36290_G__35640_map__35635_map__35635__$1_map__35636__$1_props__22175__auto__$jscomp$141_status$jscomp$11_vec__35632$$);
  $G__35638_36291_entry$jscomp$29_maybe_ref__22176__auto__$jscomp$141$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__35637_36290_G__35640_map__35635_map__35635__$1_map__35636__$1_props__22175__auto__$jscomp$141_status$jscomp$11_vec__35632$$, $cljs$cst$940$entry$$);
  var $idx$jscomp$74$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__35637_36290_G__35640_map__35635_map__35635__$1_map__35636__$1_props__22175__auto__$jscomp$141_status$jscomp$11_vec__35632$$, $APP.$cljs$cst$769$idx$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__35637_36290_G__35640_map__35635_map__35635__$1_map__35636__$1_props__22175__auto__$jscomp$141_status$jscomp$11_vec__35632$$ = $APP.$cljs$core$__destructure_map$$($G__35638_36291_entry$jscomp$29_maybe_ref__22176__auto__$jscomp$141$$);
  var $title$jscomp$33$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__35637_36290_G__35640_map__35635_map__35635__$1_map__35636__$1_props__22175__auto__$jscomp$141_status$jscomp$11_vec__35632$$, $APP.$cljs$cst$288$title$$), $due$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__35637_36290_G__35640_map__35635_map__35635__$1_map__35636__$1_props__22175__auto__$jscomp$141_status$jscomp$11_vec__35632$$, $cljs$cst$872$due$$), $amount$jscomp$1$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__35637_36290_G__35640_map__35635_map__35635__$1_map__35636__$1_props__22175__auto__$jscomp$141_status$jscomp$11_vec__35632$$, 
  $cljs$cst$850$amount$$), $priority$jscomp$1$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__35637_36290_G__35640_map__35635_map__35635__$1_map__35636__$1_props__22175__auto__$jscomp$141_status$jscomp$11_vec__35632$$, $cljs$cst$873$priority$$);
  $G__35637_36290_G__35640_map__35635_map__35635__$1_map__35636__$1_props__22175__auto__$jscomp$141_status$jscomp$11_vec__35632$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__35637_36290_G__35640_map__35635_map__35635__$1_map__35636__$1_props__22175__auto__$jscomp$141_status$jscomp$11_vec__35632$$, $APP.$cljs$cst$12$status$$);
  var $node_ref$$ = $APP.$helix$hooks$use_ref$$(null), $paid_QMARK_$jscomp$2$$ = $APP.$cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$($APP.$cljs$core$keyword$$.$cljs$core$IFn$_invoke$arity$1$($G__35637_36290_G__35640_map__35635_map__35635__$1_map__35636__$1_props__22175__auto__$jscomp$141_status$jscomp$11_vec__35632$$), $cljs$cst$875$paid$$), $st$$ = $amp$pages$budget$cash_flow$status_classes$$($APP.$cljs$core$keyword$$.$cljs$core$IFn$_invoke$arity$1$($G__35637_36290_G__35640_map__35635_map__35635__$1_map__35636__$1_props__22175__auto__$jscomp$141_status$jscomp$11_vec__35632$$));
  $G__35637_36290_G__35640_map__35635_map__35635__$1_map__35636__$1_props__22175__auto__$jscomp$141_status$jscomp$11_vec__35632$$ = $APP.$helix$hooks$wrap_fx$$(function() {
    return $APP.$cljs$core$truth_$$($APP.$cljs$core$_deref$$($node_ref$$)) ? $APP.$module$node_modules$gsap$dist$gsap$$.gsap.fromTo($APP.$cljs$core$_deref$$($node_ref$$), {opacity:0, x:-20}, {opacity:1, x:0, duration:0.4, delay:$idx$jscomp$74$$ * 0.06, ease:"power2.out"}) : null;
  });
  $G__35638_36291_entry$jscomp$29_maybe_ref__22176__auto__$jscomp$141$$ = [];
  $APP.$helix$hooks$raw_use_effect$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$hooks$raw_use_effect$$.$cljs$core$IFn$_invoke$arity$2$($G__35637_36290_G__35640_map__35635_map__35635__$1_map__35636__$1_props__22175__auto__$jscomp$141_status$jscomp$11_vec__35632$$, $G__35638_36291_entry$jscomp$29_maybe_ref__22176__auto__$jscomp$141$$) : $APP.$helix$hooks$raw_use_effect$$.call(null, $G__35637_36290_G__35640_map__35635_map__35635__$1_map__35636__$1_props__22175__auto__$jscomp$141_status$jscomp$11_vec__35632$$, 
  $G__35638_36291_entry$jscomp$29_maybe_ref__22176__auto__$jscomp$141$$);
  $G__35637_36290_G__35640_map__35635_map__35635__$1_map__35636__$1_props__22175__auto__$jscomp$141_status$jscomp$11_vec__35632$$ = function() {
    return {ref:$node_ref$$, className:$APP.$helix$impl$props$normalize_class$$("relative flex items-stretch opacity-0 " + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($paid_QMARK_$jscomp$2$$ ? "opacity-50" : null)), children:[function() {
      var $G__35644$$ = function() {
        return {className:"relative flex flex-col items-center", style:{width:$APP.$helix$impl$props$__GT_js$$("28px"), minWidth:$APP.$helix$impl$props$__GT_js$$("28px")}, children:[function() {
          var $G__35650$$ = {className:$APP.$helix$impl$props$normalize_class$$("mt-4 h-2.5 w-2.5 rounded-full border-2 flex-shrink-0 " + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($amp$pages$budget$cash_flow$priority_dot_classes$$($APP.$cljs$core$keyword$$.$cljs$core$IFn$_invoke$arity$1$($priority$jscomp$1$$), $paid_QMARK_$jscomp$2$$)))};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__35650$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__35650$$);
        }(), function() {
          var $G__35654$$ = {className:"flex-1 border-l border-dashed border-slate-300 dark:border-slate-700"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__35654$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__35654$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__35644$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__35644$$);
    }(), function() {
      var $G__35658_G__35662$jscomp$inline_4355$$ = {className:"w-4 border-t border-dashed border-slate-300 dark:border-slate-600", style:{marginTop:$APP.$helix$impl$props$__GT_js$$("1px")}};
      $G__35658_G__35662$jscomp$inline_4355$$ = {className:"flex items-start pt-[18px]", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__35658_G__35662$jscomp$inline_4355$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__35658_G__35662$jscomp$inline_4355$$)};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__35658_G__35662$jscomp$inline_4355$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__35658_G__35662$jscomp$inline_4355$$);
    }(), function() {
      var $G__35668$$ = function() {
        return {className:"flex-1 pb-5 pt-1 pl-1", children:[function() {
          var $G__35672$$ = function() {
            return {className:"flex items-center gap-2 mb-1", children:[function() {
              var $G__35676_JSCompiler_temp_const$jscomp$3162$$ = $APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-mono", "text-[11px]", "text-slate-600  dark:text-slate-400"])));
              var $JSCompiler_inline_result$jscomp$3163_d$jscomp$inline_3620$$ = $amp$pages$budget$cash_flow$parse_date$$($due$$);
              $JSCompiler_inline_result$jscomp$3163_d$jscomp$inline_3620$$ = "" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($JSCompiler_inline_result$jscomp$3163_d$jscomp$inline_3620$$.toLocaleString("en-US", {month:"short"})) + " " + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($JSCompiler_inline_result$jscomp$3163_d$jscomp$inline_3620$$.getDate());
              $G__35676_JSCompiler_temp_const$jscomp$3162$$ = {className:$G__35676_JSCompiler_temp_const$jscomp$3162$$, children:$JSCompiler_inline_result$jscomp$3163_d$jscomp$inline_3620$$};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__35676_JSCompiler_temp_const$jscomp$3162$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__35676_JSCompiler_temp_const$jscomp$3162$$);
            }(), function() {
              var $G__35680$$ = {className:$APP.$helix$impl$props$normalize_class$$("px-1.5 py-px text-[9px] font-bold uppercase tracking-widest font-mono " + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($amp$pages$budget$cash_flow$priority_tag_bg$$($APP.$cljs$core$keyword$$.$cljs$core$IFn$_invoke$arity$1$($priority$jscomp$1$$))) + " " + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($amp$pages$budget$cash_flow$priority_tag_text$$($APP.$cljs$core$keyword$$.$cljs$core$IFn$_invoke$arity$1$($priority$jscomp$1$$)))), 
              children:$amp$pages$budget$cash_flow$priority_label$$($APP.$cljs$core$keyword$$.$cljs$core$IFn$_invoke$arity$1$($priority$jscomp$1$$))};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__35680$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__35680$$);
            }(), function() {
              var $G__35684$$ = {className:$APP.$helix$impl$props$normalize_class$$("px-1.5 py-px text-[9px] font-bold uppercase tracking-widest font-mono " + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($cljs$cst$939$dot$$.$cljs$core$IFn$_invoke$arity$1$($st$$)) + " " + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($APP.$cljs$cst$398$text$$.$cljs$core$IFn$_invoke$arity$1$($st$$))), children:$APP.$cljs$cst$417$label$$.$cljs$core$IFn$_invoke$arity$1$($st$$)};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__35684$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__35684$$);
            }()]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__35672$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__35672$$);
        }(), function() {
          var $G__35688$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-sm leading-snug " + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($paid_QMARK_$jscomp$2$$ ? "" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$("text-slate-600  dark:text-slate-400") + " line-through" : "text-slate-700  dark:text-slate-300")), children:$title$jscomp$33$$};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__35688$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__35688$$);
        }(), function() {
          var $G__35692$$ = {className:$APP.$helix$impl$props$normalize_class$$("mt-0.5 font-mono text-base font-semibold tracking-tight " + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($amp$pages$budget$cash_flow$priority_amount_class$$($APP.$cljs$core$keyword$$.$cljs$core$IFn$_invoke$arity$1$($priority$jscomp$1$$), $paid_QMARK_$jscomp$2$$))), children:$amp$pages$budget$cash_flow$format_currency$$($amount$jscomp$1$$)};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__35692$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__35692$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__35668$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__35668$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__35637_36290_G__35640_map__35635_map__35635__$1_map__35636__$1_props__22175__auto__$jscomp$141_status$jscomp$11_vec__35632$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__35637_36290_G__35640_map__35635_map__35635__$1_map__35636__$1_props__22175__auto__$jscomp$141_status$jscomp$11_vec__35632$$);
};
$amp$pages$budget$cash_flow$now_marker$$ = function($G__35701_36301_G__35704_props__22175__auto__$jscomp$142$$) {
  $APP.$helix$core$extract_cljs_props$$($G__35701_36301_G__35704_props__22175__auto__$jscomp$142$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $ref$jscomp$22$$ = $APP.$helix$hooks$use_ref$$(null);
  $G__35701_36301_G__35704_props__22175__auto__$jscomp$142$$ = $APP.$helix$hooks$wrap_fx$$(function() {
    return $APP.$cljs$core$truth_$$($APP.$cljs$core$_deref$$($ref$jscomp$22$$)) ? $APP.$module$node_modules$gsap$dist$gsap$$.gsap.fromTo($APP.$cljs$core$_deref$$($ref$jscomp$22$$), {opacity:0, scaleX:0}, {opacity:1, scaleX:1, duration:0.6, delay:0.2, ease:"power3.out"}) : null;
  });
  var $G__35702_36302$$ = [];
  $APP.$helix$hooks$raw_use_effect$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$hooks$raw_use_effect$$.$cljs$core$IFn$_invoke$arity$2$($G__35701_36301_G__35704_props__22175__auto__$jscomp$142$$, $G__35702_36302$$) : $APP.$helix$hooks$raw_use_effect$$.call(null, $G__35701_36301_G__35704_props__22175__auto__$jscomp$142$$, $G__35702_36302$$);
  $G__35701_36301_G__35704_props__22175__auto__$jscomp$142$$ = function() {
    return {ref:$ref$jscomp$22$$, className:"flex items-center gap-2 py-3 origin-left opacity-0", children:[function() {
      var $G__35708$$ = function() {
        return {className:"relative flex items-center justify-center", style:{width:$APP.$helix$impl$props$__GT_js$$("28px"), minWidth:$APP.$helix$impl$props$__GT_js$$("28px")}, children:[function() {
          var $G__35714$$ = {className:"absolute h-5 w-5 animate-ping rounded-full bg-rose-400/30"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__35714$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__35714$$);
        }(), function() {
          var $G__35718$$ = {className:"h-2.5 w-2.5 rounded-full bg-rose-400"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__35718$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__35718$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__35708$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__35708$$);
    }(), function() {
      var $G__35724$$ = {className:"flex-1 h-px bg-rose-400/50"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__35724$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__35724$$);
    }(), function() {
      var $G__35728$$ = {className:"font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-rose-400 pr-1", children:"now"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__35728$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__35728$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__35701_36301_G__35704_props__22175__auto__$jscomp$142$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__35701_36301_G__35704_props__22175__auto__$jscomp$142$$);
};
$amp$pages$budget$cash_flow$month_header$$ = function($G__35746_36304_G__35752_map__35739_map__35739__$1_props__22175__auto__$jscomp$143_vec__35736$$, $G__35747_36305_maybe_ref__22176__auto__$jscomp$143$$) {
  $G__35746_36304_G__35752_map__35739_map__35739__$1_props__22175__auto__$jscomp$143_vec__35736$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__35746_36304_G__35752_map__35739_map__35739__$1_props__22175__auto__$jscomp$143_vec__35736$$), $G__35747_36305_maybe_ref__22176__auto__$jscomp$143$$], null);
  $G__35746_36304_G__35752_map__35739_map__35739__$1_props__22175__auto__$jscomp$143_vec__35736$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__35746_36304_G__35752_map__35739_map__35739__$1_props__22175__auto__$jscomp$143_vec__35736$$, 0, null);
  $G__35746_36304_G__35752_map__35739_map__35739__$1_props__22175__auto__$jscomp$143_vec__35736$$ = $APP.$cljs$core$__destructure_map$$($G__35746_36304_G__35752_map__35739_map__35739__$1_props__22175__auto__$jscomp$143_vec__35736$$);
  var $label$jscomp$24$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__35746_36304_G__35752_map__35739_map__35739__$1_props__22175__auto__$jscomp$143_vec__35736$$, $APP.$cljs$cst$417$label$$), $idx$jscomp$75$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__35746_36304_G__35752_map__35739_map__35739__$1_props__22175__auto__$jscomp$143_vec__35736$$, $APP.$cljs$cst$769$idx$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $ref$jscomp$23$$ = $APP.$helix$hooks$use_ref$$(null);
  $G__35746_36304_G__35752_map__35739_map__35739__$1_props__22175__auto__$jscomp$143_vec__35736$$ = $APP.$helix$hooks$wrap_fx$$(function() {
    return $APP.$cljs$core$truth_$$($APP.$cljs$core$_deref$$($ref$jscomp$23$$)) ? $APP.$module$node_modules$gsap$dist$gsap$$.gsap.fromTo($APP.$cljs$core$_deref$$($ref$jscomp$23$$), {opacity:0, y:8}, {opacity:1, y:0, duration:0.35, delay:0.1 + $idx$jscomp$75$$ * 0.05, ease:"power2.out"}) : null;
  });
  $G__35747_36305_maybe_ref__22176__auto__$jscomp$143$$ = [];
  $APP.$helix$hooks$raw_use_effect$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$hooks$raw_use_effect$$.$cljs$core$IFn$_invoke$arity$2$($G__35746_36304_G__35752_map__35739_map__35739__$1_props__22175__auto__$jscomp$143_vec__35736$$, $G__35747_36305_maybe_ref__22176__auto__$jscomp$143$$) : $APP.$helix$hooks$raw_use_effect$$.call(null, $G__35746_36304_G__35752_map__35739_map__35739__$1_props__22175__auto__$jscomp$143_vec__35736$$, $G__35747_36305_maybe_ref__22176__auto__$jscomp$143$$);
  $G__35746_36304_G__35752_map__35739_map__35739__$1_props__22175__auto__$jscomp$143_vec__35736$$ = function() {
    return {ref:$ref$jscomp$23$$, className:"flex items-center gap-3 pt-8 pb-2 opacity-0", children:[function() {
      var $G__35756$$ = {className:"h-px w-8 bg-pink-500/70"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__35756$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__35756$$);
    }(), function() {
      var $G__35760$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$("font-mono;text-[10px];font-bold;uppercase;tracking-[0.25em];text-slate-600  dark:text-slate-400".split(";")))), children:$label$jscomp$24$$};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__35760$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__35760$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__35746_36304_G__35752_map__35739_map__35739__$1_props__22175__auto__$jscomp$143_vec__35736$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__35746_36304_G__35752_map__35739_map__35739__$1_props__22175__auto__$jscomp$143_vec__35736$$);
};
$amp$pages$budget$cash_flow$month_summary_row$$ = function($G__35777_36307_G__35780_map__35775_map__35775__$1_map__35776__$1_props__22175__auto__$jscomp$144_vec__35772$$, $G__35778_36308_all_paid$jscomp$2_maybe_ref__22176__auto__$jscomp$144_rollup$$) {
  $G__35777_36307_G__35780_map__35775_map__35775__$1_map__35776__$1_props__22175__auto__$jscomp$144_vec__35772$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__35777_36307_G__35780_map__35775_map__35775__$1_map__35776__$1_props__22175__auto__$jscomp$144_vec__35772$$), $G__35778_36308_all_paid$jscomp$2_maybe_ref__22176__auto__$jscomp$144_rollup$$], null);
  $G__35777_36307_G__35780_map__35775_map__35775__$1_map__35776__$1_props__22175__auto__$jscomp$144_vec__35772$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__35777_36307_G__35780_map__35775_map__35775__$1_map__35776__$1_props__22175__auto__$jscomp$144_vec__35772$$, 0, null);
  $G__35777_36307_G__35780_map__35775_map__35775__$1_map__35776__$1_props__22175__auto__$jscomp$144_vec__35772$$ = $APP.$cljs$core$__destructure_map$$($G__35777_36307_G__35780_map__35775_map__35775__$1_map__35776__$1_props__22175__auto__$jscomp$144_vec__35772$$);
  $G__35778_36308_all_paid$jscomp$2_maybe_ref__22176__auto__$jscomp$144_rollup$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__35777_36307_G__35780_map__35775_map__35775__$1_map__35776__$1_props__22175__auto__$jscomp$144_vec__35772$$, $cljs$cst$941$rollup$$);
  var $idx$jscomp$76$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__35777_36307_G__35780_map__35775_map__35775__$1_map__35776__$1_props__22175__auto__$jscomp$144_vec__35772$$, $APP.$cljs$cst$769$idx$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__35777_36307_G__35780_map__35775_map__35775__$1_map__35776__$1_props__22175__auto__$jscomp$144_vec__35772$$ = $APP.$cljs$core$__destructure_map$$($G__35778_36308_all_paid$jscomp$2_maybe_ref__22176__auto__$jscomp$144_rollup$$);
  var $label$jscomp$25$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__35777_36307_G__35780_map__35775_map__35775__$1_map__35776__$1_props__22175__auto__$jscomp$144_vec__35772$$, $APP.$cljs$cst$417$label$$), $total$jscomp$6$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__35777_36307_G__35780_map__35775_map__35775__$1_map__35776__$1_props__22175__auto__$jscomp$144_vec__35772$$, $APP.$cljs$cst$736$total$$), $paid$jscomp$1$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__35777_36307_G__35780_map__35775_map__35775__$1_map__35776__$1_props__22175__auto__$jscomp$144_vec__35772$$, 
  $cljs$cst$875$paid$$), $pending$jscomp$2$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__35777_36307_G__35780_map__35775_map__35775__$1_map__35776__$1_props__22175__auto__$jscomp$144_vec__35772$$, $APP.$cljs$cst$14$pending$$), $n_items$jscomp$1$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__35777_36307_G__35780_map__35775_map__35775__$1_map__35776__$1_props__22175__auto__$jscomp$144_vec__35772$$, $cljs$cst$937$n_items$$), $n_crit$jscomp$2$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__35777_36307_G__35780_map__35775_map__35775__$1_map__35776__$1_props__22175__auto__$jscomp$144_vec__35772$$, 
  $cljs$cst$935$n_crit$$);
  $G__35778_36308_all_paid$jscomp$2_maybe_ref__22176__auto__$jscomp$144_rollup$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__35777_36307_G__35780_map__35775_map__35775__$1_map__35776__$1_props__22175__auto__$jscomp$144_vec__35772$$, $cljs$cst$933$all_paid$$);
  var $has_now$jscomp$1$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__35777_36307_G__35780_map__35775_map__35775__$1_map__35776__$1_props__22175__auto__$jscomp$144_vec__35772$$, $cljs$cst$938$has_now$$), $ref$jscomp$24$$ = $APP.$helix$hooks$use_ref$$(null), $cls$jscomp$3$$ = $APP.$cljs$core$truth_$$($G__35778_36308_all_paid$jscomp$2_maybe_ref__22176__auto__$jscomp$144_rollup$$) ? new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$399$border$$, "border-emerald-500 dark:border-emerald-300", 
  $cljs$cst$932$fill$$, "bg-transparent", $APP.$cljs$cst$398$text$$, "text-emerald-600 dark:text-emerald-300"], null) : $n_crit$jscomp$2$$ > 0 ? new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$399$border$$, "border-pink-600 dark:border-pink-300", $cljs$cst$932$fill$$, "bg-pink-600 dark:bg-pink-300", $APP.$cljs$cst$398$text$$, "text-pink-600 dark:text-pink-300"], null) : new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$399$border$$, "border-indigo-500 dark:border-indigo-300", 
  $cljs$cst$932$fill$$, "bg-indigo-500 dark:bg-indigo-300", $APP.$cljs$cst$398$text$$, "text-indigo-600 dark:text-indigo-300"], null);
  $G__35777_36307_G__35780_map__35775_map__35775__$1_map__35776__$1_props__22175__auto__$jscomp$144_vec__35772$$ = $APP.$helix$hooks$wrap_fx$$(function() {
    return $APP.$cljs$core$truth_$$($APP.$cljs$core$_deref$$($ref$jscomp$24$$)) ? $APP.$module$node_modules$gsap$dist$gsap$$.gsap.fromTo($APP.$cljs$core$_deref$$($ref$jscomp$24$$), {opacity:0, x:-16}, {opacity:1, x:0, duration:0.35, delay:$idx$jscomp$76$$ * 0.05, ease:"power2.out"}) : null;
  });
  $G__35778_36308_all_paid$jscomp$2_maybe_ref__22176__auto__$jscomp$144_rollup$$ = [];
  $APP.$helix$hooks$raw_use_effect$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$hooks$raw_use_effect$$.$cljs$core$IFn$_invoke$arity$2$($G__35777_36307_G__35780_map__35775_map__35775__$1_map__35776__$1_props__22175__auto__$jscomp$144_vec__35772$$, $G__35778_36308_all_paid$jscomp$2_maybe_ref__22176__auto__$jscomp$144_rollup$$) : $APP.$helix$hooks$raw_use_effect$$.call(null, $G__35777_36307_G__35780_map__35775_map__35775__$1_map__35776__$1_props__22175__auto__$jscomp$144_vec__35772$$, $G__35778_36308_all_paid$jscomp$2_maybe_ref__22176__auto__$jscomp$144_rollup$$);
  $G__35777_36307_G__35780_map__35775_map__35775__$1_map__35776__$1_props__22175__auto__$jscomp$144_vec__35772$$ = function() {
    return {ref:$ref$jscomp$24$$, className:"relative flex items-stretch opacity-0", children:[function() {
      var $G__35784$$ = function() {
        return {className:"relative flex flex-col items-center", style:{width:$APP.$helix$impl$props$__GT_js$$("28px"), minWidth:$APP.$helix$impl$props$__GT_js$$("28px")}, children:[function() {
          var $G__35790$$ = {className:$APP.$helix$impl$props$normalize_class$$("mt-4 h-2.5 w-2.5 rounded-full border-2 flex-shrink-0 " + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($APP.$cljs$cst$399$border$$.$cljs$core$IFn$_invoke$arity$1$($cls$jscomp$3$$)) + " " + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($cljs$cst$932$fill$$.$cljs$core$IFn$_invoke$arity$1$($cls$jscomp$3$$)))};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__35790$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__35790$$);
        }(), function() {
          var $G__35794$$ = {className:"flex-1 border-l border-dashed border-slate-300 dark:border-slate-700"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__35794$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__35794$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__35784$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__35784$$);
    }(), function() {
      var $G__35798_G__35802$jscomp$inline_4358$$ = {className:"w-4 border-t border-dashed border-slate-300 dark:border-slate-600", style:{marginTop:$APP.$helix$impl$props$__GT_js$$("1px")}};
      $G__35798_G__35802$jscomp$inline_4358$$ = {className:"flex items-start pt-[18px]", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__35798_G__35802$jscomp$inline_4358$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__35798_G__35802$jscomp$inline_4358$$)};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__35798_G__35802$jscomp$inline_4358$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__35798_G__35802$jscomp$inline_4358$$);
    }(), function() {
      var $G__35808$$ = function() {
        return {className:"flex-1 pb-4 pt-1 pl-1", children:[function() {
          var $G__35812$$ = function() {
            return {className:"flex items-center gap-2 mb-1", children:[function() {
              var $G__35816$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$("font-mono;text-xs;font-bold;uppercase;tracking-wider;text-slate-900  dark:text-slate-100".split(";")))), children:$label$jscomp$25$$};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__35816$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__35816$$);
            }(), function() {
              var $G__35820$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-mono", "text-[10px]", "text-slate-600  dark:text-slate-400"]))), children:"" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($n_items$jscomp$1$$) + " items"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__35820$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__35820$$);
            }(), $APP.$cljs$core$truth_$$($has_now$jscomp$1$$) ? function() {
              var $G__35824$$ = {className:"px-1.5 py-px text-[9px] font-bold uppercase tracking-widest font-mono bg-emerald-500/15 text-emerald-600 dark:bg-emerald-300/15 dark:text-emerald-300", children:"NOW"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__35824$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__35824$$);
            }() : null, $n_crit$jscomp$2$$ > 0 ? function() {
              var $G__35828$$ = {className:"px-1.5 py-px text-[9px] font-bold uppercase tracking-widest font-mono bg-pink-500/15 text-pink-600 dark:text-pink-300", children:"" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($n_crit$jscomp$2$$) + " crit"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__35828$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__35828$$);
            }() : null]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__35812$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__35812$$);
        }(), function() {
          var $G__35832$$ = function() {
            return {className:"flex items-baseline gap-3", children:[function() {
              var $G__35836$$ = {className:$APP.$helix$impl$props$normalize_class$$("font-mono text-lg font-bold tracking-tight " + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($APP.$cljs$cst$398$text$$.$cljs$core$IFn$_invoke$arity$1$($cls$jscomp$3$$))), children:$amp$pages$budget$cash_flow$format_currency$$($total$jscomp$6$$)};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__35836$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__35836$$);
            }(), $paid$jscomp$1$$ > 0 ? function() {
              var $G__35840$$ = {className:"font-mono text-[11px] text-emerald-600/60 dark:text-emerald-300/60", children:"" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($amp$pages$budget$cash_flow$format_currency$$($paid$jscomp$1$$)) + " COST, PAID"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__35840$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__35840$$);
            }() : null, $pending$jscomp$2$$ > 0 ? function() {
              var $G__35844$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-mono", "text-[11px]", "text-slate-600  dark:text-slate-400"]))), children:"" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($amp$pages$budget$cash_flow$format_currency$$($pending$jscomp$2$$)) + " due"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__35844$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__35844$$);
            }() : null]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__35832$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__35832$$);
        }(), function() {
          var $G__35848_G__35852$jscomp$inline_4361$$ = {className:"absolute left-0 top-0 h-px bg-emerald-500/50 dark:bg-emerald-300/50", style:{width:$APP.$helix$impl$props$__GT_js$$("" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($total$jscomp$6$$ > 0 ? Math.round($paid$jscomp$1$$ / $total$jscomp$6$$ * 100) : 0) + "%")}};
          $G__35848_G__35852$jscomp$inline_4361$$ = {className:"mt-1.5 h-px w-full bg-slate-200 dark:bg-slate-800 relative", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__35848_G__35852$jscomp$inline_4361$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__35848_G__35852$jscomp$inline_4361$$)};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__35848_G__35852$jscomp$inline_4361$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__35848_G__35852$jscomp$inline_4361$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__35808$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__35808$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__35777_36307_G__35780_map__35775_map__35775__$1_map__35776__$1_props__22175__auto__$jscomp$144_vec__35772$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__35777_36307_G__35780_map__35775_map__35775__$1_map__35776__$1_props__22175__auto__$jscomp$144_vec__35772$$);
};
$amp$pages$budget$cash_flow$view_toggle$$ = function($G__35865_map__35863_map__35863__$1_props__22175__auto__$jscomp$145_vec__35860$$, $maybe_ref__22176__auto__$jscomp$145$$) {
  $G__35865_map__35863_map__35863__$1_props__22175__auto__$jscomp$145_vec__35860$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__35865_map__35863_map__35863__$1_props__22175__auto__$jscomp$145_vec__35860$$), $maybe_ref__22176__auto__$jscomp$145$$], null);
  $G__35865_map__35863_map__35863__$1_props__22175__auto__$jscomp$145_vec__35860$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__35865_map__35863_map__35863__$1_props__22175__auto__$jscomp$145_vec__35860$$, 0, null);
  $G__35865_map__35863_map__35863__$1_props__22175__auto__$jscomp$145_vec__35860$$ = $APP.$cljs$core$__destructure_map$$($G__35865_map__35863_map__35863__$1_props__22175__auto__$jscomp$145_vec__35860$$);
  var $expanded_QMARK_$jscomp$3$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__35865_map__35863_map__35863__$1_props__22175__auto__$jscomp$145_vec__35860$$, $cljs$cst$942$expanded_QMARK_$$), $on_toggle$jscomp$1$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__35865_map__35863_map__35863__$1_props__22175__auto__$jscomp$145_vec__35860$$, $APP.$cljs$cst$832$on_toggle$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__35865_map__35863_map__35863__$1_props__22175__auto__$jscomp$145_vec__35860$$ = function() {
    return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$("mb-4 flex items-center gap-2;font-mono;text-[10px];font-bold;uppercase;tracking-[0.25em];text-slate-600  dark:text-slate-400;transition-colors hover:text-pink-600 dark:hover:text-pink-300".split(";")))), onClick:$on_toggle$jscomp$1$$, children:[function() {
      var $G__35869$$ = {className:"h-px w-4 bg-pink-500/50"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__35869$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__35869$$);
    }(), $APP.$cljs$core$truth_$$($expanded_QMARK_$jscomp$3$$) ? "Summary" : "Expand", function() {
      var $G__35873$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-400  dark:text-slate-600"), children:$APP.$cljs$core$truth_$$($expanded_QMARK_$jscomp$3$$) ? "▲" : "▼"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__35873$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__35873$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("button", $G__35865_map__35863_map__35863__$1_props__22175__auto__$jscomp$145_vec__35860$$) : $APP.$helix$core$jsxs$$.call(null, "button", $G__35865_map__35863_map__35863__$1_props__22175__auto__$jscomp$145_vec__35860$$);
};
$amp$pages$budget$cash_flow$summary_header$$ = function($G__35917_36337_G__35920_map__35896_map__35896__$1_props__22175__auto__$jscomp$146_vec__35893$$, $G__35918_36338_entries$jscomp$6_maybe_ref__22176__auto__$jscomp$146$$) {
  $G__35917_36337_G__35920_map__35896_map__35896__$1_props__22175__auto__$jscomp$146_vec__35893$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__35917_36337_G__35920_map__35896_map__35896__$1_props__22175__auto__$jscomp$146_vec__35893$$), $G__35918_36338_entries$jscomp$6_maybe_ref__22176__auto__$jscomp$146$$], null);
  $G__35917_36337_G__35920_map__35896_map__35896__$1_props__22175__auto__$jscomp$146_vec__35893$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__35917_36337_G__35920_map__35896_map__35896__$1_props__22175__auto__$jscomp$146_vec__35893$$, 0, null);
  $G__35917_36337_G__35920_map__35896_map__35896__$1_props__22175__auto__$jscomp$146_vec__35893$$ = $APP.$cljs$core$__destructure_map$$($G__35917_36337_G__35920_map__35896_map__35896__$1_props__22175__auto__$jscomp$146_vec__35893$$);
  $G__35918_36338_entries$jscomp$6_maybe_ref__22176__auto__$jscomp$146$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__35917_36337_G__35920_map__35896_map__35896__$1_props__22175__auto__$jscomp$146_vec__35893$$, $cljs$cst$934$entries$$);
  var $target_total$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__35917_36337_G__35920_map__35896_map__35896__$1_props__22175__auto__$jscomp$146_vec__35893$$, $cljs$cst$943$target_total$$), $funds_raised$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__35917_36337_G__35920_map__35896_map__35896__$1_props__22175__auto__$jscomp$146_vec__35893$$, $cljs$cst$869$funds_raised$$);
  $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__35917_36337_G__35920_map__35896_map__35896__$1_props__22175__auto__$jscomp$146_vec__35893$$, $cljs$cst$868$debt_raised$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $paid_sum$$ = $APP.$cljs$core$reduce$cljs$0core$0IFn$0_invoke$0arity$03$$($APP.$cljs$core$_PLUS_$$, 0, $APP.$cljs$core$map$$.$cljs$core$IFn$_invoke$arity$2$($cljs$cst$850$amount$$, $APP.$cljs$core$filter$cljs$0core$0IFn$0_invoke$0arity$02$$(function($p1__35878_SHARP_$$) {
    return $APP.$cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$($cljs$cst$875$paid$$, $APP.$cljs$core$keyword$$.$cljs$core$IFn$_invoke$arity$1$($APP.$cljs$cst$12$status$$.$cljs$core$IFn$_invoke$arity$1$($p1__35878_SHARP_$$)));
  }, $G__35918_36338_entries$jscomp$6_maybe_ref__22176__auto__$jscomp$146$$))), $pending_sum$$ = $target_total$$ - $paid_sum$$, $critical_sum$$ = $APP.$cljs$core$reduce$cljs$0core$0IFn$0_invoke$0arity$03$$($APP.$cljs$core$_PLUS_$$, 0, $APP.$cljs$core$map$$.$cljs$core$IFn$_invoke$arity$2$($cljs$cst$850$amount$$, $APP.$cljs$core$filter$cljs$0core$0IFn$0_invoke$0arity$02$$(function($p1__35879_SHARP_$$) {
    return $APP.$cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$($cljs$cst$893$critical$$, $APP.$cljs$core$keyword$$.$cljs$core$IFn$_invoke$arity$1$($cljs$cst$873$priority$$.$cljs$core$IFn$_invoke$arity$1$($p1__35879_SHARP_$$)));
  }, $G__35918_36338_entries$jscomp$6_maybe_ref__22176__auto__$jscomp$146$$))), $gap$$ = $target_total$$ - $funds_raised$$, $next_due$$ = function() {
    var $d$jscomp$155$$ = new Date();
    $d$jscomp$155$$.setDate($d$jscomp$155$$.getDate() + 7);
    return $d$jscomp$155$$;
  }(), $ref$jscomp$25$$ = $APP.$helix$hooks$use_ref$$(null);
  $G__35917_36337_G__35920_map__35896_map__35896__$1_props__22175__auto__$jscomp$146_vec__35893$$ = $APP.$helix$hooks$wrap_fx$$(function() {
    return $APP.$cljs$core$truth_$$($APP.$cljs$core$_deref$$($ref$jscomp$25$$)) ? $APP.$module$node_modules$gsap$dist$gsap$$.gsap.fromTo($APP.$cljs$core$_deref$$($ref$jscomp$25$$), {opacity:0, y:-12}, {opacity:1, y:0, duration:0.5, ease:"power2.out"}) : null;
  });
  $G__35918_36338_entries$jscomp$6_maybe_ref__22176__auto__$jscomp$146$$ = [];
  $APP.$helix$hooks$raw_use_effect$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$hooks$raw_use_effect$$.$cljs$core$IFn$_invoke$arity$2$($G__35917_36337_G__35920_map__35896_map__35896__$1_props__22175__auto__$jscomp$146_vec__35893$$, $G__35918_36338_entries$jscomp$6_maybe_ref__22176__auto__$jscomp$146$$) : $APP.$helix$hooks$raw_use_effect$$.call(null, $G__35917_36337_G__35920_map__35896_map__35896__$1_props__22175__auto__$jscomp$146_vec__35893$$, $G__35918_36338_entries$jscomp$6_maybe_ref__22176__auto__$jscomp$146$$);
  $G__35917_36337_G__35920_map__35896_map__35896__$1_props__22175__auto__$jscomp$146_vec__35893$$ = function() {
    return {ref:$ref$jscomp$25$$, className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["mb-4 pb-5 opacity-0", "border-b", "border-slate-200 dark:border-white/15"]))), children:[function() {
      var $G__35924$$ = function() {
        return {className:"mb-6 flex items-center gap-3", children:[function() {
          var $G__35929$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["w-10", "h-px bg-pink-500/70"])))};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__35929$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__35929$$);
        }(), function() {
          var $G__35933$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$eyebrow_highlight$$), children:"4. "};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__35933$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__35933$$);
        }(), function() {
          var $G__35937$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$eyebrow_midlight$$), children:"Cash Flow"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__35937$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__35937$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__35924$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__35924$$);
    }(), function() {
      var $G__35941$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-mono", "text-3xl", "font-extrabold", "tracking-tight", "text-slate-900  dark:text-slate-100"]))), children:$amp$pages$budget$cash_flow$format_currency$$($target_total$$)};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__35941$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__35941$$);
    }(), function() {
      var $G__35945$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-mono", "text-[11px] mt-0.5", "text-slate-600  dark:text-slate-400"]))), children:"target total"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__35945$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__35945$$);
    }(), function() {
      var $G__35949$$ = function() {
        return {className:"mt-4 grid grid-cols-2 gap-4", children:[function() {
          var $G__35953$$ = function() {
            return {className:"border-l-2 border-emerald-500/90 dark:border-emerald-300/90 pl-3", children:[function() {
              var $G__35957$$ = {className:"font-mono text-lg uppercase tracking-widest text-emerald-600/50 dark:text-emerald-300/50 mb-1", children:"Funds Raised"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__35957$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__35957$$);
            }(), function() {
              var $G__35961$$ = {className:"font-mono text-lg font-bold text-emerald-600 dark:text-emerald-300", children:$amp$pages$budget$cash_flow$format_currency$$($funds_raised$$)};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__35961$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__35961$$);
            }()]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__35953$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__35953$$);
        }(), function() {
          var $G__35965$$ = function() {
            return {className:"border-l-2 border-pink-500/90 dark:border-pink-300/90 pl-3", children:[function() {
              var $G__35969$$ = {className:"font-mono text-lg uppercase tracking-widest text-pink-600/50 dark:text-pink-300/50 mb-1", children:"Remaining"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__35969$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__35969$$);
            }(), function() {
              var $G__35973$$ = {className:"font-mono text-lg font-bold text-pink-600 dark:text-pink-300", children:$amp$pages$budget$cash_flow$format_currency$$($gap$$)};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__35973$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__35973$$);
            }()]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__35965$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__35965$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__35949$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__35949$$);
    }(), function() {
      var $G__35977$$ = function() {
        return {className:"mt-3 grid grid-cols-2 gap-4", children:[function() {
          var $G__35981$$ = function() {
            return {className:"border-l-2 border-emerald-500/20 dark:border-emerald-300/20 pl-3", children:[function() {
              var $G__35985$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$("font-mono;text-lg;uppercase;tracking-widest;text-slate-600  dark:text-slate-400;mb-1".split(";")))), children:"COST, PAID"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__35985$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__35985$$);
            }(), function() {
              var $G__35989$$ = {className:"font-mono text-lg font-bold text-emerald-600 dark:text-emerald-300", children:$amp$pages$budget$cash_flow$format_currency$$($paid_sum$$)};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__35989$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__35989$$);
            }()]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__35981$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__35981$$);
        }(), function() {
          var $G__35993$$ = function() {
            return {className:$APP.$helix$impl$props$normalize_class$$("border-l-2 pl-3 " + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$("border-slate-200 dark:border-white/15")), children:[function() {
              var $G__35997$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$("font-mono;text-lg;uppercase;tracking-widest;text-slate-600  dark:text-slate-400;mb-1".split(";")))), children:"Pending"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__35997$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__35997$$);
            }(), function() {
              var $G__36001$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-mono", "text-lg", "font-bold", " text-pink-600 dark:text-pink-300"]))), children:$amp$pages$budget$cash_flow$format_currency$$($pending_sum$$)};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__36001$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__36001$$);
            }()]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__35993$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__35993$$);
        }(), function() {
          var $G__36005$$ = function() {
            return {className:"border-l-2 border-pink-500/30 pl-3", children:[function() {
              var $G__36009$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$("font-mono;text-lg;uppercase;tracking-widest;text-slate-600  dark:text-slate-400;mb-1".split(";")))), children:"Critical"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__36009$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__36009$$);
            }(), function() {
              var $G__36013$$ = {className:"font-mono text-lg font-bold text-pink-600 dark:text-pink-300", children:$amp$pages$budget$cash_flow$format_currency$$($critical_sum$$)};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__36013$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__36013$$);
            }()]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__36005$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__36005$$);
        }(), function() {
          var $G__36017$$ = function() {
            return {className:"border-l-2 border-indigo-500/30 dark:border-indigo-400/30 pl-3", children:[function() {
              var $G__36021$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$("font-mono;text-lg;uppercase;tracking-widest;text-slate-600  dark:text-slate-400;mb-1".split(";")))), children:"Next Due"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__36021$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__36021$$);
            }(), function() {
              var $G__36025$$ = {className:"font-mono text-base font-bold text-indigo-600 dark:text-indigo-300", children:"" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($next_due$$.toLocaleString("en-US", {month:"short"})) + " " + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($next_due$$.getDate())};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__36025$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__36025$$);
            }()]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__36017$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__36017$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__35977$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__35977$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__35917_36337_G__35920_map__35896_map__35896__$1_props__22175__auto__$jscomp$146_vec__35893$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__35917_36337_G__35920_map__35896_map__35896__$1_props__22175__auto__$jscomp$146_vec__35893$$);
};
$amp$pages$budget$cash_flow$cash_flow$$ = function($G__36042_36385_G__36045_map__36035_map__36035__$1_props__22175__auto__$jscomp$147_vec__36032_vec__36036_vec__36039$$, $G__36043_36386_maybe_ref__22176__auto__$jscomp$147$$) {
  $G__36042_36385_G__36045_map__36035_map__36035__$1_props__22175__auto__$jscomp$147_vec__36032_vec__36036_vec__36039$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__36042_36385_G__36045_map__36035_map__36035__$1_props__22175__auto__$jscomp$147_vec__36032_vec__36036_vec__36039$$), $G__36043_36386_maybe_ref__22176__auto__$jscomp$147$$], null);
  $G__36042_36385_G__36045_map__36035_map__36035__$1_props__22175__auto__$jscomp$147_vec__36032_vec__36036_vec__36039$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__36042_36385_G__36045_map__36035_map__36035__$1_props__22175__auto__$jscomp$147_vec__36032_vec__36036_vec__36039$$, 0, null);
  $G__36042_36385_G__36045_map__36035_map__36035__$1_props__22175__auto__$jscomp$147_vec__36032_vec__36036_vec__36039$$ = $APP.$cljs$core$__destructure_map$$($G__36042_36385_G__36045_map__36035_map__36035__$1_props__22175__auto__$jscomp$147_vec__36032_vec__36036_vec__36039$$);
  var $id$jscomp$94$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__36042_36385_G__36045_map__36035_map__36035__$1_props__22175__auto__$jscomp$147_vec__36032_vec__36036_vec__36039$$, $APP.$cljs$cst$286$id$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__36042_36385_G__36045_map__36035_map__36035__$1_props__22175__auto__$jscomp$147_vec__36032_vec__36036_vec__36039$$ = $APP.$helix$hooks$use_state$$(null);
  var $error$jscomp$22$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__36042_36385_G__36045_map__36035_map__36035__$1_props__22175__auto__$jscomp$147_vec__36032_vec__36036_vec__36039$$, 0, null);
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__36042_36385_G__36045_map__36035_map__36035__$1_props__22175__auto__$jscomp$147_vec__36032_vec__36036_vec__36039$$, 1, null);
  $G__36042_36385_G__36045_map__36035_map__36035__$1_props__22175__auto__$jscomp$147_vec__36032_vec__36036_vec__36039$$ = $APP.$helix$hooks$use_state$$(!1);
  var $expanded_QMARK_$jscomp$4$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__36042_36385_G__36045_map__36035_map__36035__$1_props__22175__auto__$jscomp$147_vec__36032_vec__36036_vec__36039$$, 0, null), $set_expanded_BANG_$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__36042_36385_G__36045_map__36035_map__36035__$1_props__22175__auto__$jscomp$147_vec__36032_vec__36036_vec__36039$$, 1, null), $container_ref$jscomp$3$$ = $APP.$helix$hooks$use_ref$$(null);
  $G__36042_36385_G__36045_map__36035_map__36035__$1_props__22175__auto__$jscomp$147_vec__36032_vec__36036_vec__36039$$ = $APP.$helix$hooks$wrap_fx$$(function() {
    if ($APP.$cljs$core$truth_$$($APP.$cljs$core$truth_$$($amp$pages$budget$cash_flow$cashflow_data$$) ? $APP.$cljs$core$_deref$$($container_ref$jscomp$3$$) : $amp$pages$budget$cash_flow$cashflow_data$$)) {
      var $spine$$ = $APP.$cljs$core$_deref$$($container_ref$jscomp$3$$).querySelector(".cf-spine");
      return $APP.$cljs$core$truth_$$($spine$$) ? $APP.$module$node_modules$gsap$dist$gsap$$.gsap.fromTo($spine$$, {scaleY:0}, {scaleY:1, duration:0.8, delay:0.05, ease:"power3.out"}) : null;
    }
    return null;
  });
  $G__36043_36386_maybe_ref__22176__auto__$jscomp$147$$ = [$amp$pages$budget$cash_flow$cashflow_data$$];
  $APP.$helix$hooks$raw_use_effect$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$hooks$raw_use_effect$$.$cljs$core$IFn$_invoke$arity$2$($G__36042_36385_G__36045_map__36035_map__36035__$1_props__22175__auto__$jscomp$147_vec__36032_vec__36036_vec__36039$$, $G__36043_36386_maybe_ref__22176__auto__$jscomp$147$$) : $APP.$helix$hooks$raw_use_effect$$.call(null, $G__36042_36385_G__36045_map__36035_map__36035__$1_props__22175__auto__$jscomp$147_vec__36032_vec__36036_vec__36039$$, $G__36043_36386_maybe_ref__22176__auto__$jscomp$147$$);
  $G__36042_36385_G__36045_map__36035_map__36035__$1_props__22175__auto__$jscomp$147_vec__36032_vec__36036_vec__36039$$ = function() {
    return {id:$id$jscomp$94$$, ref:$container_ref$jscomp$3$$, className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["min-h-screen px-4 pb-8 pt-6 antialiased selection:bg-pink-500/30", "text-slate-900  dark:text-slate-100", "bg-white        dark:bg-slate-900"]))), children:$APP.$cljs$core$truth_$$($error$jscomp$22$$) ? function() {
      var $G__36049$$ = {className:"font-mono text-sm text-red-400 p-4", children:"err: " + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($error$jscomp$22$$)};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__36049$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__36049$$);
    }() : $amp$pages$budget$cash_flow$cashflow_data$$ == null ? function() {
      var $G__36053_G__36057$jscomp$inline_4145$$ = {className:"h-5 w-5 animate-spin border-2 border-slate-700 border-t-pink-400"};
      $G__36053_G__36057$jscomp$inline_4145$$ = {className:"flex items-center justify-center py-20", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__36053_G__36057$jscomp$inline_4145$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__36053_G__36057$jscomp$inline_4145$$)};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__36053_G__36057$jscomp$inline_4145$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__36053_G__36057$jscomp$inline_4145$$);
    }() : function() {
      var $G__36088_map__36060__$1_sorted$jscomp$1$$ = $APP.$cljs$core$__destructure_map$$($amp$pages$budget$cash_flow$cashflow_data$$), $cash_flow_model$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__36088_map__36060__$1_sorted$jscomp$1$$, $cljs$cst$870$cash_flow_model$$), $funds_raised$jscomp$1$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__36088_map__36060__$1_sorted$jscomp$1$$, $cljs$cst$869$funds_raised$$), $debt_raised$jscomp$1$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__36088_map__36060__$1_sorted$jscomp$1$$, 
      $cljs$cst$868$debt_raised$$), $target_total$jscomp$1$$ = $amp$pages$budget$table$sub_total_all_sections$$($amp$pages$budget$cost_breakdown$cost_data$$) + 66821, $entries_kw$$ = $APP.$cljs$core$map$$.$cljs$core$IFn$_invoke$arity$2$(function($p1__36029_SHARP_$$) {
        return $APP.$cljs$core$update$cljs$0core$0IFn$0_invoke$0arity$03$$($APP.$cljs$core$update$cljs$0core$0IFn$0_invoke$0arity$03$$($p1__36029_SHARP_$$, $cljs$cst$873$priority$$, $APP.$cljs$core$keyword$$), $APP.$cljs$cst$12$status$$, $APP.$cljs$core$keyword$$);
      }, $cash_flow_model$$);
      $G__36088_map__36060__$1_sorted$jscomp$1$$ = $APP.$cljs$core$sort_by$cljs$0core$0IFn$0_invoke$0arity$02$$($APP.$cljs$core$comp$$.$cljs$core$IFn$_invoke$arity$3$($amp$pages$budget$cash_flow$date__GT_ms$$, $amp$pages$budget$cash_flow$parse_date$$, $cljs$cst$872$due$$), $entries_kw$$);
      var $groups$jscomp$1$$ = $amp$pages$budget$cash_flow$group_by_month$$($G__36088_map__36060__$1_sorted$jscomp$1$$), $now_ms$$ = $amp$pages$budget$cash_flow$date__GT_ms$$(new Date()), $all_items$$ = function() {
        for (var $items$jscomp$9$$ = $APP.$cljs$core$atom$cljs$0core$0IFn$0_invoke$0arity$01$$($APP.$cljs$core$PersistentVector$EMPTY$$), $now_done$$ = $APP.$cljs$core$atom$cljs$0core$0IFn$0_invoke$0arity$01$$(!1), $counter$$ = $APP.$cljs$core$atom$cljs$0core$0IFn$0_invoke$0arity$01$$(0), $G__36461_seq__36061_36400_seq__36061_36459__$1_temp__5823__auto___36458$$ = $APP.$cljs$core$seq$$($groups$jscomp$1$$), $G__36462_G__36496_chunk__36062_36401_group_36465_seq__36078_36476_seq__36078_36493__$1_temp__5823__auto___36492__$1$$ = 
        null, $G__36463_G__36497_c__5673__auto___36460_chunk__36079_36477_count__36063_36402_entry_36500_month_label_36466$$ = 0, $G__36498_c__5673__auto___36495_count__36080_36478_entry_ms_36503_i__36064_36403$$ = 0;;) {
          if ($G__36498_c__5673__auto___36495_count__36080_36478_entry_ms_36503_i__36064_36403$$ < $G__36463_G__36497_c__5673__auto___36460_chunk__36079_36477_count__36063_36402_entry_36500_month_label_36466$$) {
            var $G__36437_group_36404_i__36081_36479_seq__36073_36417_seq__36073_36432__$1_temp__5823__auto___36431$$ = $G__36462_G__36496_chunk__36062_36401_group_36465_seq__36078_36476_seq__36078_36493__$1_temp__5823__auto___36492__$1$$.$cljs$core$IIndexed$_nth$arity$2$(null, $G__36498_c__5673__auto___36495_count__36080_36478_entry_ms_36503_i__36064_36403$$), $G__36438_chunk__36074_36418_entry_36441_entry_36480_month_label_36405$$ = $amp$pages$budget$cash_flow$parse_date$$($cljs$cst$872$due$$.$cljs$core$IFn$_invoke$arity$1$($APP.$cljs$core$first$$($G__36437_group_36404_i__36081_36479_seq__36073_36417_seq__36073_36432__$1_temp__5823__auto___36431$$))).toLocaleString("en-US", 
            {month:"long", year:"numeric"});
            $APP.$cljs$core$swap_BANG_$$.$cljs$core$IFn$_invoke$arity$3$($items$jscomp$9$$, $APP.$cljs$core$conj$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$25$type$$, $cljs$cst$944$month$$, $APP.$cljs$cst$417$label$$, $G__36438_chunk__36074_36418_entry_36441_entry_36480_month_label_36405$$, $APP.$cljs$cst$769$idx$$, $APP.$cljs$core$_deref$$($counter$$)], null));
            $APP.$cljs$core$swap_BANG_$$.$cljs$core$IFn$_invoke$arity$2$($counter$$, $APP.$cljs$core$inc$$);
            $G__36437_group_36404_i__36081_36479_seq__36073_36417_seq__36073_36432__$1_temp__5823__auto___36431$$ = $APP.$cljs$core$seq$$($G__36437_group_36404_i__36081_36479_seq__36073_36417_seq__36073_36432__$1_temp__5823__auto___36431$$);
            $G__36438_chunk__36074_36418_entry_36441_entry_36480_month_label_36405$$ = null;
            for (var $G__36439_c__5673__auto___36435_count__36075_36419_entry_ms_36442_entry_ms_36481$$ = 0, $i__36076_36420$$ = 0;;) {
              if ($i__36076_36420$$ < $G__36439_c__5673__auto___36435_count__36075_36419_entry_ms_36442_entry_ms_36481$$) {
                var $entry_36423$$ = $G__36438_chunk__36074_36418_entry_36441_entry_36480_month_label_36405$$.$cljs$core$IIndexed$_nth$arity$2$(null, $i__36076_36420$$), $entry_ms_36424$$ = $amp$pages$budget$cash_flow$date__GT_ms$$($amp$pages$budget$cash_flow$parse_date$$($cljs$cst$872$due$$.$cljs$core$IFn$_invoke$arity$1$($entry_36423$$)));
                $APP.$cljs$core$not$$($APP.$cljs$core$_deref$$($now_done$$)) && $entry_ms_36424$$ > $now_ms$$ && ($APP.$cljs$core$swap_BANG_$$.$cljs$core$IFn$_invoke$arity$3$($items$jscomp$9$$, $APP.$cljs$core$conj$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$25$type$$, $cljs$cst$945$now$$], null)), $APP.$cljs$core$reset_BANG_$$($now_done$$, !0));
                $APP.$cljs$core$swap_BANG_$$.$cljs$core$IFn$_invoke$arity$3$($items$jscomp$9$$, $APP.$cljs$core$conj$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$25$type$$, $cljs$cst$940$entry$$, $cljs$cst$940$entry$$, $entry_36423$$, $APP.$cljs$cst$769$idx$$, $APP.$cljs$core$_deref$$($counter$$), $cljs$cst$946$past_QMARK_$$, $APP.$cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$($cljs$cst$875$paid$$, $APP.$cljs$cst$12$status$$.$cljs$core$IFn$_invoke$arity$1$($entry_36423$$))], 
                null));
                $APP.$cljs$core$swap_BANG_$$.$cljs$core$IFn$_invoke$arity$2$($counter$$, $APP.$cljs$core$inc$$);
                $i__36076_36420$$ += 1;
              } else {
                if ($G__36437_group_36404_i__36081_36479_seq__36073_36417_seq__36073_36432__$1_temp__5823__auto___36431$$ = $APP.$cljs$core$seq$$($G__36437_group_36404_i__36081_36479_seq__36073_36417_seq__36073_36432__$1_temp__5823__auto___36431$$)) {
                  $APP.$cljs$core$chunked_seq_QMARK_$$($G__36437_group_36404_i__36081_36479_seq__36073_36417_seq__36073_36432__$1_temp__5823__auto___36431$$) ? ($G__36439_c__5673__auto___36435_count__36075_36419_entry_ms_36442_entry_ms_36481$$ = $APP.$cljs$core$_chunked_first$$($G__36437_group_36404_i__36081_36479_seq__36073_36417_seq__36073_36432__$1_temp__5823__auto___36431$$), $G__36437_group_36404_i__36081_36479_seq__36073_36417_seq__36073_36432__$1_temp__5823__auto___36431$$ = $APP.$cljs$core$_chunked_rest$$($G__36437_group_36404_i__36081_36479_seq__36073_36417_seq__36073_36432__$1_temp__5823__auto___36431$$), 
                  $G__36438_chunk__36074_36418_entry_36441_entry_36480_month_label_36405$$ = $G__36439_c__5673__auto___36435_count__36075_36419_entry_ms_36442_entry_ms_36481$$, $G__36439_c__5673__auto___36435_count__36075_36419_entry_ms_36442_entry_ms_36481$$ = $APP.$cljs$core$count$$($G__36439_c__5673__auto___36435_count__36075_36419_entry_ms_36442_entry_ms_36481$$)) : ($G__36438_chunk__36074_36418_entry_36441_entry_36480_month_label_36405$$ = $APP.$cljs$core$first$$($G__36437_group_36404_i__36081_36479_seq__36073_36417_seq__36073_36432__$1_temp__5823__auto___36431$$), 
                  $G__36439_c__5673__auto___36435_count__36075_36419_entry_ms_36442_entry_ms_36481$$ = $amp$pages$budget$cash_flow$date__GT_ms$$($amp$pages$budget$cash_flow$parse_date$$($cljs$cst$872$due$$.$cljs$core$IFn$_invoke$arity$1$($G__36438_chunk__36074_36418_entry_36441_entry_36480_month_label_36405$$))), $APP.$cljs$core$not$$($APP.$cljs$core$_deref$$($now_done$$)) && $G__36439_c__5673__auto___36435_count__36075_36419_entry_ms_36442_entry_ms_36481$$ > $now_ms$$ && ($APP.$cljs$core$swap_BANG_$$.$cljs$core$IFn$_invoke$arity$3$($items$jscomp$9$$, 
                  $APP.$cljs$core$conj$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$25$type$$, $cljs$cst$945$now$$], null)), $APP.$cljs$core$reset_BANG_$$($now_done$$, !0)), $APP.$cljs$core$swap_BANG_$$.$cljs$core$IFn$_invoke$arity$3$($items$jscomp$9$$, $APP.$cljs$core$conj$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$25$type$$, $cljs$cst$940$entry$$, $cljs$cst$940$entry$$, $G__36438_chunk__36074_36418_entry_36441_entry_36480_month_label_36405$$, $APP.$cljs$cst$769$idx$$, 
                  $APP.$cljs$core$_deref$$($counter$$), $cljs$cst$946$past_QMARK_$$, $APP.$cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$($cljs$cst$875$paid$$, $APP.$cljs$cst$12$status$$.$cljs$core$IFn$_invoke$arity$1$($G__36438_chunk__36074_36418_entry_36441_entry_36480_month_label_36405$$))], null)), $APP.$cljs$core$swap_BANG_$$.$cljs$core$IFn$_invoke$arity$2$($counter$$, $APP.$cljs$core$inc$$), $G__36437_group_36404_i__36081_36479_seq__36073_36417_seq__36073_36432__$1_temp__5823__auto___36431$$ = 
                  $APP.$cljs$core$next$$($G__36437_group_36404_i__36081_36479_seq__36073_36417_seq__36073_36432__$1_temp__5823__auto___36431$$), $G__36438_chunk__36074_36418_entry_36441_entry_36480_month_label_36405$$ = null, $G__36439_c__5673__auto___36435_count__36075_36419_entry_ms_36442_entry_ms_36481$$ = 0), $i__36076_36420$$ = 0;
                } else {
                  break;
                }
              }
            }
            $G__36498_c__5673__auto___36495_count__36080_36478_entry_ms_36503_i__36064_36403$$ += 1;
          } else {
            if ($G__36461_seq__36061_36400_seq__36061_36459__$1_temp__5823__auto___36458$$ = $APP.$cljs$core$seq$$($G__36461_seq__36061_36400_seq__36061_36459__$1_temp__5823__auto___36458$$)) {
              if ($APP.$cljs$core$chunked_seq_QMARK_$$($G__36461_seq__36061_36400_seq__36061_36459__$1_temp__5823__auto___36458$$)) {
                $G__36463_G__36497_c__5673__auto___36460_chunk__36079_36477_count__36063_36402_entry_36500_month_label_36466$$ = $APP.$cljs$core$_chunked_first$$($G__36461_seq__36061_36400_seq__36061_36459__$1_temp__5823__auto___36458$$), $G__36461_seq__36061_36400_seq__36061_36459__$1_temp__5823__auto___36458$$ = $APP.$cljs$core$_chunked_rest$$($G__36461_seq__36061_36400_seq__36061_36459__$1_temp__5823__auto___36458$$), $G__36462_G__36496_chunk__36062_36401_group_36465_seq__36078_36476_seq__36078_36493__$1_temp__5823__auto___36492__$1$$ = 
                $G__36463_G__36497_c__5673__auto___36460_chunk__36079_36477_count__36063_36402_entry_36500_month_label_36466$$, $G__36463_G__36497_c__5673__auto___36460_chunk__36079_36477_count__36063_36402_entry_36500_month_label_36466$$ = $APP.$cljs$core$count$$($G__36463_G__36497_c__5673__auto___36460_chunk__36079_36477_count__36063_36402_entry_36500_month_label_36466$$);
              } else {
                $G__36462_G__36496_chunk__36062_36401_group_36465_seq__36078_36476_seq__36078_36493__$1_temp__5823__auto___36492__$1$$ = $APP.$cljs$core$first$$($G__36461_seq__36061_36400_seq__36061_36459__$1_temp__5823__auto___36458$$);
                $G__36463_G__36497_c__5673__auto___36460_chunk__36079_36477_count__36063_36402_entry_36500_month_label_36466$$ = $amp$pages$budget$cash_flow$parse_date$$($cljs$cst$872$due$$.$cljs$core$IFn$_invoke$arity$1$($APP.$cljs$core$first$$($G__36462_G__36496_chunk__36062_36401_group_36465_seq__36078_36476_seq__36078_36493__$1_temp__5823__auto___36492__$1$$))).toLocaleString("en-US", {month:"long", year:"numeric"});
                $APP.$cljs$core$swap_BANG_$$.$cljs$core$IFn$_invoke$arity$3$($items$jscomp$9$$, $APP.$cljs$core$conj$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$25$type$$, $cljs$cst$944$month$$, $APP.$cljs$cst$417$label$$, $G__36463_G__36497_c__5673__auto___36460_chunk__36079_36477_count__36063_36402_entry_36500_month_label_36466$$, $APP.$cljs$cst$769$idx$$, $APP.$cljs$core$_deref$$($counter$$)], null));
                $APP.$cljs$core$swap_BANG_$$.$cljs$core$IFn$_invoke$arity$2$($counter$$, $APP.$cljs$core$inc$$);
                $G__36462_G__36496_chunk__36062_36401_group_36465_seq__36078_36476_seq__36078_36493__$1_temp__5823__auto___36492__$1$$ = $APP.$cljs$core$seq$$($G__36462_G__36496_chunk__36062_36401_group_36465_seq__36078_36476_seq__36078_36493__$1_temp__5823__auto___36492__$1$$);
                $G__36463_G__36497_c__5673__auto___36460_chunk__36079_36477_count__36063_36402_entry_36500_month_label_36466$$ = null;
                for ($G__36437_group_36404_i__36081_36479_seq__36073_36417_seq__36073_36432__$1_temp__5823__auto___36431$$ = $G__36498_c__5673__auto___36495_count__36080_36478_entry_ms_36503_i__36064_36403$$ = 0;;) {
                  if ($G__36437_group_36404_i__36081_36479_seq__36073_36417_seq__36073_36432__$1_temp__5823__auto___36431$$ < $G__36498_c__5673__auto___36495_count__36080_36478_entry_ms_36503_i__36064_36403$$) {
                    $G__36438_chunk__36074_36418_entry_36441_entry_36480_month_label_36405$$ = $G__36463_G__36497_c__5673__auto___36460_chunk__36079_36477_count__36063_36402_entry_36500_month_label_36466$$.$cljs$core$IIndexed$_nth$arity$2$(null, $G__36437_group_36404_i__36081_36479_seq__36073_36417_seq__36073_36432__$1_temp__5823__auto___36431$$), $G__36439_c__5673__auto___36435_count__36075_36419_entry_ms_36442_entry_ms_36481$$ = $amp$pages$budget$cash_flow$date__GT_ms$$($amp$pages$budget$cash_flow$parse_date$$($cljs$cst$872$due$$.$cljs$core$IFn$_invoke$arity$1$($G__36438_chunk__36074_36418_entry_36441_entry_36480_month_label_36405$$))), 
                    $APP.$cljs$core$not$$($APP.$cljs$core$_deref$$($now_done$$)) && $G__36439_c__5673__auto___36435_count__36075_36419_entry_ms_36442_entry_ms_36481$$ > $now_ms$$ && ($APP.$cljs$core$swap_BANG_$$.$cljs$core$IFn$_invoke$arity$3$($items$jscomp$9$$, $APP.$cljs$core$conj$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$25$type$$, $cljs$cst$945$now$$], null)), $APP.$cljs$core$reset_BANG_$$($now_done$$, !0)), $APP.$cljs$core$swap_BANG_$$.$cljs$core$IFn$_invoke$arity$3$($items$jscomp$9$$, 
                    $APP.$cljs$core$conj$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$25$type$$, $cljs$cst$940$entry$$, $cljs$cst$940$entry$$, $G__36438_chunk__36074_36418_entry_36441_entry_36480_month_label_36405$$, $APP.$cljs$cst$769$idx$$, $APP.$cljs$core$_deref$$($counter$$), $cljs$cst$946$past_QMARK_$$, $APP.$cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$($cljs$cst$875$paid$$, $APP.$cljs$cst$12$status$$.$cljs$core$IFn$_invoke$arity$1$($G__36438_chunk__36074_36418_entry_36441_entry_36480_month_label_36405$$))], 
                    null)), $APP.$cljs$core$swap_BANG_$$.$cljs$core$IFn$_invoke$arity$2$($counter$$, $APP.$cljs$core$inc$$), $G__36437_group_36404_i__36081_36479_seq__36073_36417_seq__36073_36432__$1_temp__5823__auto___36431$$ += 1;
                  } else {
                    if ($G__36462_G__36496_chunk__36062_36401_group_36465_seq__36078_36476_seq__36078_36493__$1_temp__5823__auto___36492__$1$$ = $APP.$cljs$core$seq$$($G__36462_G__36496_chunk__36062_36401_group_36465_seq__36078_36476_seq__36078_36493__$1_temp__5823__auto___36492__$1$$)) {
                      $APP.$cljs$core$chunked_seq_QMARK_$$($G__36462_G__36496_chunk__36062_36401_group_36465_seq__36078_36476_seq__36078_36493__$1_temp__5823__auto___36492__$1$$) ? ($G__36498_c__5673__auto___36495_count__36080_36478_entry_ms_36503_i__36064_36403$$ = $APP.$cljs$core$_chunked_first$$($G__36462_G__36496_chunk__36062_36401_group_36465_seq__36078_36476_seq__36078_36493__$1_temp__5823__auto___36492__$1$$), $G__36462_G__36496_chunk__36062_36401_group_36465_seq__36078_36476_seq__36078_36493__$1_temp__5823__auto___36492__$1$$ = 
                      $APP.$cljs$core$_chunked_rest$$($G__36462_G__36496_chunk__36062_36401_group_36465_seq__36078_36476_seq__36078_36493__$1_temp__5823__auto___36492__$1$$), $G__36463_G__36497_c__5673__auto___36460_chunk__36079_36477_count__36063_36402_entry_36500_month_label_36466$$ = $G__36498_c__5673__auto___36495_count__36080_36478_entry_ms_36503_i__36064_36403$$, $G__36498_c__5673__auto___36495_count__36080_36478_entry_ms_36503_i__36064_36403$$ = $APP.$cljs$core$count$$($G__36498_c__5673__auto___36495_count__36080_36478_entry_ms_36503_i__36064_36403$$)) : 
                      ($G__36463_G__36497_c__5673__auto___36460_chunk__36079_36477_count__36063_36402_entry_36500_month_label_36466$$ = $APP.$cljs$core$first$$($G__36462_G__36496_chunk__36062_36401_group_36465_seq__36078_36476_seq__36078_36493__$1_temp__5823__auto___36492__$1$$), $G__36498_c__5673__auto___36495_count__36080_36478_entry_ms_36503_i__36064_36403$$ = $amp$pages$budget$cash_flow$date__GT_ms$$($amp$pages$budget$cash_flow$parse_date$$($cljs$cst$872$due$$.$cljs$core$IFn$_invoke$arity$1$($G__36463_G__36497_c__5673__auto___36460_chunk__36079_36477_count__36063_36402_entry_36500_month_label_36466$$))), 
                      $APP.$cljs$core$not$$($APP.$cljs$core$_deref$$($now_done$$)) && $G__36498_c__5673__auto___36495_count__36080_36478_entry_ms_36503_i__36064_36403$$ > $now_ms$$ && ($APP.$cljs$core$swap_BANG_$$.$cljs$core$IFn$_invoke$arity$3$($items$jscomp$9$$, $APP.$cljs$core$conj$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$25$type$$, $cljs$cst$945$now$$], null)), $APP.$cljs$core$reset_BANG_$$($now_done$$, !0)), $APP.$cljs$core$swap_BANG_$$.$cljs$core$IFn$_invoke$arity$3$($items$jscomp$9$$, 
                      $APP.$cljs$core$conj$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$25$type$$, $cljs$cst$940$entry$$, $cljs$cst$940$entry$$, $G__36463_G__36497_c__5673__auto___36460_chunk__36079_36477_count__36063_36402_entry_36500_month_label_36466$$, $APP.$cljs$cst$769$idx$$, $APP.$cljs$core$_deref$$($counter$$), $cljs$cst$946$past_QMARK_$$, $APP.$cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$($cljs$cst$875$paid$$, $APP.$cljs$cst$12$status$$.$cljs$core$IFn$_invoke$arity$1$($G__36463_G__36497_c__5673__auto___36460_chunk__36079_36477_count__36063_36402_entry_36500_month_label_36466$$))], 
                      null)), $APP.$cljs$core$swap_BANG_$$.$cljs$core$IFn$_invoke$arity$2$($counter$$, $APP.$cljs$core$inc$$), $G__36462_G__36496_chunk__36062_36401_group_36465_seq__36078_36476_seq__36078_36493__$1_temp__5823__auto___36492__$1$$ = $APP.$cljs$core$next$$($G__36462_G__36496_chunk__36062_36401_group_36465_seq__36078_36476_seq__36078_36493__$1_temp__5823__auto___36492__$1$$), $G__36463_G__36497_c__5673__auto___36460_chunk__36079_36477_count__36063_36402_entry_36500_month_label_36466$$ = 
                      null, $G__36498_c__5673__auto___36495_count__36080_36478_entry_ms_36503_i__36064_36403$$ = 0), $G__36437_group_36404_i__36081_36479_seq__36073_36417_seq__36073_36432__$1_temp__5823__auto___36431$$ = 0;
                    } else {
                      break;
                    }
                  }
                }
                $G__36461_seq__36061_36400_seq__36061_36459__$1_temp__5823__auto___36458$$ = $APP.$cljs$core$next$$($G__36461_seq__36061_36400_seq__36061_36459__$1_temp__5823__auto___36458$$);
                $G__36462_G__36496_chunk__36062_36401_group_36465_seq__36078_36476_seq__36078_36493__$1_temp__5823__auto___36492__$1$$ = null;
                $G__36463_G__36497_c__5673__auto___36460_chunk__36079_36477_count__36063_36402_entry_36500_month_label_36466$$ = 0;
              }
              $G__36498_c__5673__auto___36495_count__36080_36478_entry_ms_36503_i__36064_36403$$ = 0;
            } else {
              break;
            }
          }
        }
        $APP.$cljs$core$not$$($APP.$cljs$core$_deref$$($now_done$$)) && $APP.$cljs$core$swap_BANG_$$.$cljs$core$IFn$_invoke$arity$3$($items$jscomp$9$$, $APP.$cljs$core$conj$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$25$type$$, $cljs$cst$945$now$$], null));
        return $APP.$cljs$core$_deref$$($items$jscomp$9$$);
      }();
      $G__36088_map__36060__$1_sorted$jscomp$1$$ = function() {
        return {children:[function() {
          var $G__36092$$ = {entries:$entries_kw$$, "target-total":$target_total$jscomp$1$$, "funds-raised":$funds_raised$jscomp$1$$, "debt-raised":$debt_raised$jscomp$1$$};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$pages$budget$cash_flow$summary_header$$, $G__36092$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$budget$cash_flow$summary_header$$, $G__36092$$);
        }(), function() {
          var $G__36096$$ = function() {
            return {"expanded?":$expanded_QMARK_$jscomp$4$$, "on-toggle":function() {
              return $set_expanded_BANG_$$.$cljs$core$IFn$_invoke$arity$1$ ? $set_expanded_BANG_$$.$cljs$core$IFn$_invoke$arity$1$($APP.$cljs$core$not$$) : $set_expanded_BANG_$$.call(null, $APP.$cljs$core$not$$);
            }};
          }();
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$pages$budget$cash_flow$view_toggle$$, $G__36096$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$budget$cash_flow$view_toggle$$, $G__36096$$);
        }(), function() {
          var $G__36103$$ = function() {
            return {className:"relative", children:[function() {
              var $G__36107$$ = {className:$APP.$helix$impl$props$normalize_class$$("cf-spine absolute left-[13px] top-0 h-full origin-top border-l border-dashed " + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$("border-slate-200 dark:border-white/15"))};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__36107$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__36107$$);
            }(), $APP.$cljs$core$truth_$$($expanded_QMARK_$jscomp$4$$) ? $APP.$cljs$core$map_indexed$cljs$0core$0IFn$0_invoke$0arity$02$$(function($G__36117_G__36125_G__36133_i$jscomp$426$$, $G__36116_G__36132_item$jscomp$40$$) {
              var $G__36114_G__36114__$1$$ = $APP.$cljs$cst$25$type$$.$cljs$core$IFn$_invoke$arity$1$($G__36116_G__36132_item$jscomp$40$$);
              $G__36114_G__36114__$1$$ = $G__36114_G__36114__$1$$ instanceof $APP.$cljs$core$Keyword$$ ? $G__36114_G__36114__$1$$.$fqn$ : null;
              switch($G__36114_G__36114__$1$$) {
                case "month":
                  return $G__36116_G__36132_item$jscomp$40$$ = {label:$APP.$cljs$cst$417$label$$.$cljs$core$IFn$_invoke$arity$1$($G__36116_G__36132_item$jscomp$40$$), idx:$APP.$cljs$cst$769$idx$$.$cljs$core$IFn$_invoke$arity$1$($G__36116_G__36132_item$jscomp$40$$)}, $G__36117_G__36125_G__36133_i$jscomp$426$$ = "m-" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($G__36117_G__36125_G__36133_i$jscomp$426$$), $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$($amp$pages$budget$cash_flow$month_header$$, 
                  $G__36116_G__36132_item$jscomp$40$$, $G__36117_G__36125_G__36133_i$jscomp$426$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$budget$cash_flow$month_header$$, $G__36116_G__36132_item$jscomp$40$$, $G__36117_G__36125_G__36133_i$jscomp$426$$);
                case "now":
                  return $G__36117_G__36125_G__36133_i$jscomp$426$$ = {}, $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$($amp$pages$budget$cash_flow$now_marker$$, $G__36117_G__36125_G__36133_i$jscomp$426$$, "now") : $APP.$helix$core$jsx$$.call(null, $amp$pages$budget$cash_flow$now_marker$$, $G__36117_G__36125_G__36133_i$jscomp$426$$, "now");
                case "entry":
                  return $G__36116_G__36132_item$jscomp$40$$ = {entry:$cljs$cst$940$entry$$.$cljs$core$IFn$_invoke$arity$1$($G__36116_G__36132_item$jscomp$40$$), idx:$APP.$cljs$cst$769$idx$$.$cljs$core$IFn$_invoke$arity$1$($G__36116_G__36132_item$jscomp$40$$), "is-past":$APP.$cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$($cljs$cst$875$paid$$, $APP.$cljs$cst$12$status$$.$cljs$core$IFn$_invoke$arity$1$($cljs$cst$940$entry$$.$cljs$core$IFn$_invoke$arity$1$($G__36116_G__36132_item$jscomp$40$$)))}, 
                  $G__36117_G__36125_G__36133_i$jscomp$426$$ = "e-" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($G__36117_G__36125_G__36133_i$jscomp$426$$), $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$($amp$pages$budget$cash_flow$timeline_node$$, $G__36116_G__36132_item$jscomp$40$$, $G__36117_G__36125_G__36133_i$jscomp$426$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$budget$cash_flow$timeline_node$$, $G__36116_G__36132_item$jscomp$40$$, 
                  $G__36117_G__36125_G__36133_i$jscomp$426$$);
                default:
                  throw Error("No matching clause: " + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($G__36114_G__36114__$1$$));
              }
            }, $all_items$$) : function() {
              var $c__5673__auto___36550_rollups_seq__36140_36530_temp__5823__auto___36548_vec__36258_36557$$ = $amp$pages$budget$cash_flow$month_rollups$$($entries_kw$$), $now_done$jscomp$1$$ = $APP.$cljs$core$atom$cljs$0core$0IFn$0_invoke$0arity$01$$(!1), $out$jscomp$15$$ = $APP.$cljs$core$atom$cljs$0core$0IFn$0_invoke$0arity$01$$($APP.$cljs$core$PersistentVector$EMPTY$$);
              $c__5673__auto___36550_rollups_seq__36140_36530_temp__5823__auto___36548_vec__36258_36557$$ = $APP.$cljs$core$seq$$($APP.$cljs$core$map_indexed$cljs$0core$0IFn$0_invoke$0arity$02$$($APP.$cljs$core$vector$$, $c__5673__auto___36550_rollups_seq__36140_36530_temp__5823__auto___36548_vec__36258_36557$$));
              for (var $G__36552_chunk__36143_36531_seq__36140_36549__$1$$ = null, $G__36553_count__36144_36532$$ = 0, $G__36551_i__36145_36533$$ = 0;;) {
                if ($G__36551_i__36145_36533$$ < $G__36553_count__36144_36532$$) {
                  var $vec__36238_36536$$ = $G__36552_chunk__36143_36531_seq__36140_36549__$1$$.$cljs$core$IIndexed$_nth$arity$2$(null, $G__36551_i__36145_36533$$), $i_36537$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($vec__36238_36536$$, 0, null), $r_36538$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($vec__36238_36536$$, 1, null);
                  $APP.$cljs$core$truth_$$(function() {
                    var $and__5140__auto__$jscomp$91$$ = $APP.$cljs$core$not$$($APP.$cljs$core$_deref$$($now_done$jscomp$1$$));
                    return $and__5140__auto__$jscomp$91$$ ? $cljs$cst$938$has_now$$.$cljs$core$IFn$_invoke$arity$1$($r_36538$$) : $and__5140__auto__$jscomp$91$$;
                  }()) && ($APP.$cljs$core$swap_BANG_$$.$cljs$core$IFn$_invoke$arity$3$($out$jscomp$15$$, $APP.$cljs$core$conj$$, function() {
                    var $G__36246$$ = {};
                    return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$($amp$pages$budget$cash_flow$now_marker$$, $G__36246$$, "now-s") : $APP.$helix$core$jsx$$.call(null, $amp$pages$budget$cash_flow$now_marker$$, $G__36246$$, "now-s");
                  }()), $APP.$cljs$core$reset_BANG_$$($now_done$jscomp$1$$, !0));
                  $APP.$cljs$core$swap_BANG_$$.$cljs$core$IFn$_invoke$arity$3$($out$jscomp$15$$, $APP.$cljs$core$conj$$, function() {
                    var $G__36253$$ = {rollup:$r_36538$$, idx:$i_36537$$}, $G__36254$$ = "sr-" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($i_36537$$);
                    return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$($amp$pages$budget$cash_flow$month_summary_row$$, $G__36253$$, $G__36254$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$budget$cash_flow$month_summary_row$$, $G__36253$$, $G__36254$$);
                  }());
                  $G__36551_i__36145_36533$$ += 1;
                } else {
                  if ($c__5673__auto___36550_rollups_seq__36140_36530_temp__5823__auto___36548_vec__36258_36557$$ = $APP.$cljs$core$seq$$($c__5673__auto___36550_rollups_seq__36140_36530_temp__5823__auto___36548_vec__36258_36557$$)) {
                    $G__36552_chunk__36143_36531_seq__36140_36549__$1$$ = $c__5673__auto___36550_rollups_seq__36140_36530_temp__5823__auto___36548_vec__36258_36557$$;
                    if ($APP.$cljs$core$chunked_seq_QMARK_$$($G__36552_chunk__36143_36531_seq__36140_36549__$1$$)) {
                      $c__5673__auto___36550_rollups_seq__36140_36530_temp__5823__auto___36548_vec__36258_36557$$ = $APP.$cljs$core$_chunked_first$$($G__36552_chunk__36143_36531_seq__36140_36549__$1$$), $G__36551_i__36145_36533$$ = $APP.$cljs$core$_chunked_rest$$($G__36552_chunk__36143_36531_seq__36140_36549__$1$$), $G__36552_chunk__36143_36531_seq__36140_36549__$1$$ = $c__5673__auto___36550_rollups_seq__36140_36530_temp__5823__auto___36548_vec__36258_36557$$, $G__36553_count__36144_36532$$ = $APP.$cljs$core$count$$($c__5673__auto___36550_rollups_seq__36140_36530_temp__5823__auto___36548_vec__36258_36557$$), 
                      $c__5673__auto___36550_rollups_seq__36140_36530_temp__5823__auto___36548_vec__36258_36557$$ = $G__36551_i__36145_36533$$;
                    } else {
                      $c__5673__auto___36550_rollups_seq__36140_36530_temp__5823__auto___36548_vec__36258_36557$$ = $APP.$cljs$core$first$$($G__36552_chunk__36143_36531_seq__36140_36549__$1$$);
                      var $i_36558$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($c__5673__auto___36550_rollups_seq__36140_36530_temp__5823__auto___36548_vec__36258_36557$$, 0, null), $r_36559$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($c__5673__auto___36550_rollups_seq__36140_36530_temp__5823__auto___36548_vec__36258_36557$$, 1, null);
                      $APP.$cljs$core$truth_$$(function() {
                        var $and__5140__auto__$jscomp$92$$ = $APP.$cljs$core$not$$($APP.$cljs$core$_deref$$($now_done$jscomp$1$$));
                        return $and__5140__auto__$jscomp$92$$ ? $cljs$cst$938$has_now$$.$cljs$core$IFn$_invoke$arity$1$($r_36559$$) : $and__5140__auto__$jscomp$92$$;
                      }()) && ($APP.$cljs$core$swap_BANG_$$.$cljs$core$IFn$_invoke$arity$3$($out$jscomp$15$$, $APP.$cljs$core$conj$$, function() {
                        var $G__36262$$ = {};
                        return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$($amp$pages$budget$cash_flow$now_marker$$, $G__36262$$, "now-s") : $APP.$helix$core$jsx$$.call(null, $amp$pages$budget$cash_flow$now_marker$$, $G__36262$$, "now-s");
                      }()), $APP.$cljs$core$reset_BANG_$$($now_done$jscomp$1$$, !0));
                      $APP.$cljs$core$swap_BANG_$$.$cljs$core$IFn$_invoke$arity$3$($out$jscomp$15$$, $APP.$cljs$core$conj$$, function() {
                        var $G__36267$$ = {rollup:$r_36559$$, idx:$i_36558$$}, $G__36268$$ = "sr-" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($i_36558$$);
                        return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$($amp$pages$budget$cash_flow$month_summary_row$$, $G__36267$$, $G__36268$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$budget$cash_flow$month_summary_row$$, $G__36267$$, $G__36268$$);
                      }());
                      $c__5673__auto___36550_rollups_seq__36140_36530_temp__5823__auto___36548_vec__36258_36557$$ = $APP.$cljs$core$next$$($G__36552_chunk__36143_36531_seq__36140_36549__$1$$);
                      $G__36552_chunk__36143_36531_seq__36140_36549__$1$$ = null;
                      $G__36553_count__36144_36532$$ = 0;
                    }
                    $G__36551_i__36145_36533$$ = 0;
                  } else {
                    break;
                  }
                }
              }
              $APP.$cljs$core$not$$($APP.$cljs$core$_deref$$($now_done$jscomp$1$$)) && $APP.$cljs$core$swap_BANG_$$.$cljs$core$IFn$_invoke$arity$3$($out$jscomp$15$$, $APP.$cljs$core$conj$$, function() {
                var $G__36272$$ = {};
                return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$($amp$pages$budget$cash_flow$now_marker$$, $G__36272$$, "now-s") : $APP.$helix$core$jsx$$.call(null, $amp$pages$budget$cash_flow$now_marker$$, $G__36272$$, "now-s");
              }());
              return $APP.$cljs$core$_deref$$($out$jscomp$15$$);
            }()]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__36103$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__36103$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__36088_map__36060__$1_sorted$jscomp$1$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__36088_map__36060__$1_sorted$jscomp$1$$);
    }()};
  }();
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__36042_36385_G__36045_map__36035_map__36035__$1_props__22175__auto__$jscomp$147_vec__36032_vec__36036_vec__36039$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__36042_36385_G__36045_map__36035_map__36035__$1_props__22175__auto__$jscomp$147_vec__36032_vec__36036_vec__36039$$);
};
$amp$pages$budget$non_profit$transfer_field$$ = function($G__34845_map__34839_map__34839__$1_props__22175__auto__$jscomp$148_vec__34834$$, $maybe_ref__22176__auto__$jscomp$148$$) {
  $G__34845_map__34839_map__34839__$1_props__22175__auto__$jscomp$148_vec__34834$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__34845_map__34839_map__34839__$1_props__22175__auto__$jscomp$148_vec__34834$$), $maybe_ref__22176__auto__$jscomp$148$$], null);
  $G__34845_map__34839_map__34839__$1_props__22175__auto__$jscomp$148_vec__34834$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__34845_map__34839_map__34839__$1_props__22175__auto__$jscomp$148_vec__34834$$, 0, null);
  $G__34845_map__34839_map__34839__$1_props__22175__auto__$jscomp$148_vec__34834$$ = $APP.$cljs$core$__destructure_map$$($G__34845_map__34839_map__34839__$1_props__22175__auto__$jscomp$148_vec__34834$$);
  var $label$jscomp$26$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__34845_map__34839_map__34839__$1_props__22175__auto__$jscomp$148_vec__34834$$, $APP.$cljs$cst$417$label$$), $value$jscomp$326$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__34845_map__34839_map__34839__$1_props__22175__auto__$jscomp$148_vec__34834$$, $APP.$cljs$cst$119$value$$), $field_label$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__34845_map__34839_map__34839__$1_props__22175__auto__$jscomp$148_vec__34834$$, 
  $cljs$cst$947$field_label$$), $field_value$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__34845_map__34839_map__34839__$1_props__22175__auto__$jscomp$148_vec__34834$$, $cljs$cst$948$field_value$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__34845_map__34839_map__34839__$1_props__22175__auto__$jscomp$148_vec__34834$$ = function() {
    return {className:"flex items-start justify-between gap-6", children:[function() {
      var $G__34853$$ = {className:$APP.$helix$impl$props$normalize_class$$($field_label$$), children:"" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($label$jscomp$26$$) + ":"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__34853$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__34853$$);
    }(), $APP.$cljs$core$sequential_QMARK_$$($value$jscomp$326$$) ? function() {
      var $G__34858$$ = function() {
        return {className:"text-right leading-snug", children:$APP.$cljs$core$map_indexed$cljs$0core$0IFn$0_invoke$0arity$02$$(function($G__34863_idx$jscomp$77$$, $G__34862_line$jscomp$22$$) {
          $G__34862_line$jscomp$22$$ = {children:$G__34862_line$jscomp$22$$};
          $G__34863_idx$jscomp$77$$ = "" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($label$jscomp$26$$) + "-" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($G__34863_idx$jscomp$77$$);
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$("p", $G__34862_line$jscomp$22$$, $G__34863_idx$jscomp$77$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__34862_line$jscomp$22$$, $G__34863_idx$jscomp$77$$);
        }, $value$jscomp$326$$)};
      }();
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__34858$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__34858$$);
    }() : function() {
      var $G__34871$$ = {className:$APP.$helix$impl$props$normalize_class$$($field_value$$), children:$value$jscomp$326$$};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__34871$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__34871$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__34845_map__34839_map__34839__$1_props__22175__auto__$jscomp$148_vec__34834$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__34845_map__34839_map__34839__$1_props__22175__auto__$jscomp$148_vec__34834$$);
};
$amp$pages$budget$non_profit$transfer_card$$ = function($G__34886_map__34884_map__34884__$1_props__22175__auto__$jscomp$149_vec__34881$$, $maybe_ref__22176__auto__$jscomp$149$$) {
  $G__34886_map__34884_map__34884__$1_props__22175__auto__$jscomp$149_vec__34881$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__34886_map__34884_map__34884__$1_props__22175__auto__$jscomp$149_vec__34881$$), $maybe_ref__22176__auto__$jscomp$149$$], null);
  $G__34886_map__34884_map__34884__$1_props__22175__auto__$jscomp$149_vec__34881$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__34886_map__34884_map__34884__$1_props__22175__auto__$jscomp$149_vec__34881$$, 0, null);
  $G__34886_map__34884_map__34884__$1_props__22175__auto__$jscomp$149_vec__34881$$ = $APP.$cljs$core$__destructure_map$$($G__34886_map__34884_map__34884__$1_props__22175__auto__$jscomp$149_vec__34881$$);
  var $title$jscomp$34$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__34886_map__34884_map__34884__$1_props__22175__auto__$jscomp$149_vec__34881$$, $APP.$cljs$cst$288$title$$), $fields$jscomp$2$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__34886_map__34884_map__34884__$1_props__22175__auto__$jscomp$149_vec__34881$$, $cljs$cst$949$fields$$), $field_label$jscomp$1$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__34886_map__34884_map__34884__$1_props__22175__auto__$jscomp$149_vec__34881$$, 
  $cljs$cst$947$field_label$$), $field_value$jscomp$1$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__34886_map__34884_map__34884__$1_props__22175__auto__$jscomp$149_vec__34881$$, $cljs$cst$948$field_value$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__34886_map__34884_map__34884__$1_props__22175__auto__$jscomp$149_vec__34881$$ = function() {
    return {children:[function() {
      var $G__34890$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$heading_section$$, "text-slate-900  dark:text-slate-100", "mb-4"]))), children:$title$jscomp$34$$};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__34890$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__34890$$);
    }(), function() {
      var $G__34894$$ = function() {
        return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-mono", "text-sm", "space-y-3"]))), children:$APP.$cljs$core$map$$.$cljs$core$IFn$_invoke$arity$2$(function($label$jscomp$27_p__34898$$) {
          var $G__34905_map__34899__$1$$ = $APP.$cljs$core$__destructure_map$$($label$jscomp$27_p__34898$$);
          $label$jscomp$27_p__34898$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__34905_map__34899__$1$$, $APP.$cljs$cst$417$label$$);
          $G__34905_map__34899__$1$$ = {label:$APP.$cljs$cst$417$label$$.$cljs$core$IFn$_invoke$arity$1$($G__34905_map__34899__$1$$), value:$APP.$cljs$cst$119$value$$.$cljs$core$IFn$_invoke$arity$1$($G__34905_map__34899__$1$$), "field-label":$field_label$jscomp$1$$, "field-value":$field_value$jscomp$1$$};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$($amp$pages$budget$non_profit$transfer_field$$, $G__34905_map__34899__$1$$, $label$jscomp$27_p__34898$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$budget$non_profit$transfer_field$$, $G__34905_map__34899__$1$$, $label$jscomp$27_p__34898$$);
        }, $fields$jscomp$2$$)};
      }();
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__34894$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__34894$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__34886_map__34884_map__34884__$1_props__22175__auto__$jscomp$149_vec__34881$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__34886_map__34884_map__34884__$1_props__22175__auto__$jscomp$149_vec__34881$$);
};
$amp$pages$budget$non_profit$non_profit$$ = function($G__34934_map__34932_map__34932__$1_props__22175__auto__$jscomp$150_vec__34929$$, $maybe_ref__22176__auto__$jscomp$150$$) {
  $G__34934_map__34932_map__34932__$1_props__22175__auto__$jscomp$150_vec__34929$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__34934_map__34932_map__34932__$1_props__22175__auto__$jscomp$150_vec__34929$$), $maybe_ref__22176__auto__$jscomp$150$$], null);
  $G__34934_map__34932_map__34932__$1_props__22175__auto__$jscomp$150_vec__34929$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__34934_map__34932_map__34932__$1_props__22175__auto__$jscomp$150_vec__34929$$, 0, null);
  $G__34934_map__34932_map__34932__$1_props__22175__auto__$jscomp$150_vec__34929$$ = $APP.$cljs$core$__destructure_map$$($G__34934_map__34932_map__34932__$1_props__22175__auto__$jscomp$150_vec__34929$$);
  var $id$jscomp$95$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__34934_map__34932_map__34932__$1_props__22175__auto__$jscomp$150_vec__34929$$, $APP.$cljs$cst$286$id$$), $subtitle$jscomp$6$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__34934_map__34932_map__34932__$1_props__22175__auto__$jscomp$150_vec__34929$$, $APP.$cljs$cst$782$subtitle$$), $title$jscomp$35$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__34934_map__34932_map__34932__$1_props__22175__auto__$jscomp$150_vec__34929$$, 
  $APP.$cljs$cst$288$title$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $field_label$jscomp$2$$ = $APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-semibold", "text-slate-600  dark:text-slate-400"])), $field_value$jscomp$2$$ = $APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["text-right", "font-bold", "text-indigo-600 dark:text-indigo-300", "tracking-wide"]));
  $G__34934_map__34932_map__34932__$1_props__22175__auto__$jscomp$150_vec__34929$$ = function() {
    return {id:$id$jscomp$95$$, children:function() {
      var $G__34938$$ = function() {
        return {idx:8, eyebrow:$subtitle$jscomp$6$$, title:$title$jscomp$35$$, children:function() {
          var $G__34942$$ = function() {
            return {className:"space-y-8 p-4", children:[function() {
              var $G__34946$$ = function() {
                return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["text-slate-700  dark:text-slate-300", "mb-12"]))), children:[function() {
                  var $G__34950$$ = function() {
                    return {children:["The Armenia Pavilion 2026 is supported through ", function() {
                      var $G__34954$$ = {className:$APP.$helix$impl$props$normalize_class$$("font-semibold"), children:$APP.$cljs$cst$165$name$$.$cljs$core$IFn$_invoke$arity$1$($APP.$amp$data$donations$$.organization)};
                      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__34954$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__34954$$);
                    }(), ", a registered ", function() {
                      var $G__34958$$ = {className:$APP.$helix$impl$props$normalize_class$$("font-semibold"), children:$APP.$cljs$cst$12$status$$.$cljs$core$IFn$_invoke$arity$1$($APP.$amp$data$donations$$.organization)};
                      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__34958$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__34958$$);
                    }(), " public non-profit organization. ", function() {
                      var $G__34962$$ = {className:$APP.$helix$impl$props$normalize_class$$("font-semibold"), children:"Contributions are tax deductible"};
                      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__34962$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__34962$$);
                    }(), " to the extent permitted by law."]};
                  }();
                  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__34950$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__34950$$);
                }(), function() {
                  var $G__34966$$ = function() {
                    return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-mono", "text-sm", "mt-6 space-y-1"]))), children:[function() {
                      var $G__34970_G__34974$jscomp$inline_4148$$ = {className:$APP.$helix$impl$props$normalize_class$$($field_label$jscomp$2$$), children:"Organization: "};
                      $G__34970_G__34974$jscomp$inline_4148$$ = {children:[$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__34970_G__34974$jscomp$inline_4148$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__34970_G__34974$jscomp$inline_4148$$), $APP.$cljs$cst$165$name$$.$cljs$core$IFn$_invoke$arity$1$($APP.$amp$data$donations$$.organization)]};
                      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__34970_G__34974$jscomp$inline_4148$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__34970_G__34974$jscomp$inline_4148$$);
                    }(), function() {
                      var $G__34978$$ = function() {
                        return {children:[function() {
                          var $G__34982$$ = {className:$APP.$helix$impl$props$normalize_class$$($field_label$jscomp$2$$), children:"EIN: "};
                          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__34982$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__34982$$);
                        }(), function() {
                          var $G__34986$$ = {className:$APP.$helix$impl$props$normalize_class$$($field_value$jscomp$2$$), children:$cljs$cst$950$ein$$.$cljs$core$IFn$_invoke$arity$1$($APP.$amp$data$donations$$.organization)};
                          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__34986$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__34986$$);
                        }()]};
                      }();
                      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__34978$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__34978$$);
                    }(), function() {
                      var $G__34990$$ = function() {
                        return {children:[function() {
                          var $G__34994$$ = {className:$APP.$helix$impl$props$normalize_class$$($field_label$jscomp$2$$), children:"Located in: "};
                          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__34994$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__34994$$);
                        }(), function() {
                          var $G__34998$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_bold$$), children:$cljs$cst$951$location$$.$cljs$core$IFn$_invoke$arity$1$($APP.$amp$data$donations$$.organization)};
                          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__34998$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__34998$$);
                        }()]};
                      }();
                      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__34990$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__34990$$);
                    }()]};
                  }();
                  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__34966$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__34966$$);
                }(), function() {
                  var $G__35002$$ = function() {
                    return {className:"mt-10 grid grid-cols-1 lg:grid-cols-2 gap-10", children:[function() {
                      var $G__35006$$ = {title:$APP.$cljs$cst$288$title$$.$cljs$core$IFn$_invoke$arity$1$($APP.$amp$data$donations$$.$domestic_transfer$), fields:$cljs$cst$949$fields$$.$cljs$core$IFn$_invoke$arity$1$($APP.$amp$data$donations$$.$domestic_transfer$), "field-label":$field_label$jscomp$2$$, "field-value":$field_value$jscomp$2$$};
                      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$pages$budget$non_profit$transfer_card$$, $G__35006$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$budget$non_profit$transfer_card$$, $G__35006$$);
                    }(), function() {
                      var $G__35010$$ = {title:$APP.$cljs$cst$288$title$$.$cljs$core$IFn$_invoke$arity$1$($APP.$amp$data$donations$$.$international_transfer$), fields:$cljs$cst$949$fields$$.$cljs$core$IFn$_invoke$arity$1$($APP.$amp$data$donations$$.$international_transfer$), "field-label":$field_label$jscomp$2$$, "field-value":$field_value$jscomp$2$$};
                      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$pages$budget$non_profit$transfer_card$$, $G__35010$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$budget$non_profit$transfer_card$$, $G__35010$$);
                    }()]};
                  }();
                  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__35002$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__35002$$);
                }()]};
              }();
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__34946$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__34946$$);
            }(), function() {
              var $G__35014$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["text-slate-600  dark:text-slate-400", "p-4 mt-10 text-sm md:text-base"]))), children:$APP.$amp$data$donations$$.$receipt_note$};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__35014$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__35014$$);
            }()]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__34942$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__34942$$);
        }()};
      }();
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$pages$budget$section_block$section_block$$, $G__34938$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$pages$budget$section_block$section_block$$, $G__34938$$);
    }()};
  }();
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__34934_map__34932_map__34932__$1_props__22175__auto__$jscomp$150_vec__34929$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__34934_map__34932_map__34932__$1_props__22175__auto__$jscomp$150_vec__34929$$);
};
$amp$pages$budget$sponsors$logo_card$$ = function($G__35079_G__35083$jscomp$inline_4364_map__35077_name$jscomp$199_props__22175__auto__$jscomp$151_vec__35074$$, $logo_map__35077__$1_maybe_ref__22176__auto__$jscomp$151$$) {
  $G__35079_G__35083$jscomp$inline_4364_map__35077_name$jscomp$199_props__22175__auto__$jscomp$151_vec__35074$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__35079_G__35083$jscomp$inline_4364_map__35077_name$jscomp$199_props__22175__auto__$jscomp$151_vec__35074$$), $logo_map__35077__$1_maybe_ref__22176__auto__$jscomp$151$$], null);
  $G__35079_G__35083$jscomp$inline_4364_map__35077_name$jscomp$199_props__22175__auto__$jscomp$151_vec__35074$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__35079_G__35083$jscomp$inline_4364_map__35077_name$jscomp$199_props__22175__auto__$jscomp$151_vec__35074$$, 0, null);
  $logo_map__35077__$1_maybe_ref__22176__auto__$jscomp$151$$ = $APP.$cljs$core$__destructure_map$$($G__35079_G__35083$jscomp$inline_4364_map__35077_name$jscomp$199_props__22175__auto__$jscomp$151_vec__35074$$);
  $G__35079_G__35083$jscomp$inline_4364_map__35077_name$jscomp$199_props__22175__auto__$jscomp$151_vec__35074$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($logo_map__35077__$1_maybe_ref__22176__auto__$jscomp$151$$, $APP.$cljs$cst$165$name$$);
  $logo_map__35077__$1_maybe_ref__22176__auto__$jscomp$151$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($logo_map__35077__$1_maybe_ref__22176__auto__$jscomp$151$$, $cljs$cst$954$logo$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__35079_G__35083$jscomp$inline_4364_map__35077_name$jscomp$199_props__22175__auto__$jscomp$151_vec__35074$$ = {src:$logo_map__35077__$1_maybe_ref__22176__auto__$jscomp$151$$, alt:$G__35079_G__35083$jscomp$inline_4364_map__35077_name$jscomp$199_props__22175__auto__$jscomp$151_vec__35074$$, style:{height:$APP.$helix$impl$props$__GT_js$$("4rem"), width:$APP.$helix$impl$props$__GT_js$$("auto")}, className:" transition-all duration-500\n                         \n                         drop-shadow-[0_0_12px_rgba(249,168,212,0)] group-hover:drop-shadow-[0_0_20px_rgba(249,168,212,0.15)]"};
  $G__35079_G__35083$jscomp$inline_4364_map__35077_name$jscomp$199_props__22175__auto__$jscomp$151_vec__35074$$ = {className:"group py-6 px-8 transition-all duration-500 ease-out", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("img", $G__35079_G__35083$jscomp$inline_4364_map__35077_name$jscomp$199_props__22175__auto__$jscomp$151_vec__35074$$) : $APP.$helix$core$jsx$$.call(null, "img", $G__35079_G__35083$jscomp$inline_4364_map__35077_name$jscomp$199_props__22175__auto__$jscomp$151_vec__35074$$)};
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__35079_G__35083$jscomp$inline_4364_map__35077_name$jscomp$199_props__22175__auto__$jscomp$151_vec__35074$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__35079_G__35083$jscomp$inline_4364_map__35077_name$jscomp$199_props__22175__auto__$jscomp$151_vec__35074$$);
};
$amp$pages$budget$sponsors$name_item$$ = function($G__35101_map__35095_name$jscomp$200_props__22175__auto__$jscomp$152_vec__35092$$, $accent_map__35095__$1_maybe_ref__22176__auto__$jscomp$152$$) {
  $G__35101_map__35095_name$jscomp$200_props__22175__auto__$jscomp$152_vec__35092$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__35101_map__35095_name$jscomp$200_props__22175__auto__$jscomp$152_vec__35092$$), $accent_map__35095__$1_maybe_ref__22176__auto__$jscomp$152$$], null);
  $G__35101_map__35095_name$jscomp$200_props__22175__auto__$jscomp$152_vec__35092$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__35101_map__35095_name$jscomp$200_props__22175__auto__$jscomp$152_vec__35092$$, 0, null);
  $accent_map__35095__$1_maybe_ref__22176__auto__$jscomp$152$$ = $APP.$cljs$core$__destructure_map$$($G__35101_map__35095_name$jscomp$200_props__22175__auto__$jscomp$152_vec__35092$$);
  $G__35101_map__35095_name$jscomp$200_props__22175__auto__$jscomp$152_vec__35092$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($accent_map__35095__$1_maybe_ref__22176__auto__$jscomp$152$$, $APP.$cljs$cst$165$name$$);
  $accent_map__35095__$1_maybe_ref__22176__auto__$jscomp$152$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($accent_map__35095__$1_maybe_ref__22176__auto__$jscomp$152$$, $cljs$cst$958$accent$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__35101_map__35095_name$jscomp$200_props__22175__auto__$jscomp$152_vec__35092$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-mono", "text-sm", "tracking-wide", $accent_map__35095__$1_maybe_ref__22176__auto__$jscomp$152$$]))), children:$G__35101_map__35095_name$jscomp$200_props__22175__auto__$jscomp$152_vec__35092$$};
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__35101_map__35095_name$jscomp$200_props__22175__auto__$jscomp$152_vec__35092$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__35101_map__35095_name$jscomp$200_props__22175__auto__$jscomp$152_vec__35092$$);
};
$amp$pages$budget$sponsors$tier_section$$ = function($G__35177_map__35162_map__35162__$1_members$jscomp$1_props__22175__auto__$jscomp$153_vec__35159$$, $map__35169_map__35169__$1_maybe_ref__22176__auto__$jscomp$153_tier$$) {
  $G__35177_map__35162_map__35162__$1_members$jscomp$1_props__22175__auto__$jscomp$153_vec__35159$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__35177_map__35162_map__35162__$1_members$jscomp$1_props__22175__auto__$jscomp$153_vec__35159$$), $map__35169_map__35169__$1_maybe_ref__22176__auto__$jscomp$153_tier$$], null);
  $G__35177_map__35162_map__35162__$1_members$jscomp$1_props__22175__auto__$jscomp$153_vec__35159$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__35177_map__35162_map__35162__$1_members$jscomp$1_props__22175__auto__$jscomp$153_vec__35159$$, 0, null);
  $G__35177_map__35162_map__35162__$1_members$jscomp$1_props__22175__auto__$jscomp$153_vec__35159$$ = $APP.$cljs$core$__destructure_map$$($G__35177_map__35162_map__35162__$1_members$jscomp$1_props__22175__auto__$jscomp$153_vec__35159$$);
  $map__35169_map__35169__$1_maybe_ref__22176__auto__$jscomp$153_tier$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__35177_map__35162_map__35162__$1_members$jscomp$1_props__22175__auto__$jscomp$153_vec__35159$$, $cljs$cst$952$tier$$);
  $G__35177_map__35162_map__35162__$1_members$jscomp$1_props__22175__auto__$jscomp$153_vec__35159$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__35177_map__35162_map__35162__$1_members$jscomp$1_props__22175__auto__$jscomp$153_vec__35159$$, $cljs$cst$962$members$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $map__35169_map__35169__$1_maybe_ref__22176__auto__$jscomp$153_tier$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($amp$pages$budget$sponsors$tier_meta$$, $map__35169_map__35169__$1_maybe_ref__22176__auto__$jscomp$153_tier$$);
  $map__35169_map__35169__$1_maybe_ref__22176__auto__$jscomp$153_tier$$ = $APP.$cljs$core$__destructure_map$$($map__35169_map__35169__$1_maybe_ref__22176__auto__$jscomp$153_tier$$);
  var $label$jscomp$28$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__35169_map__35169__$1_maybe_ref__22176__auto__$jscomp$153_tier$$, $APP.$cljs$cst$417$label$$), $accent$jscomp$1$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__35169_map__35169__$1_maybe_ref__22176__auto__$jscomp$153_tier$$, $cljs$cst$958$accent$$), $border$jscomp$6$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__35169_map__35169__$1_maybe_ref__22176__auto__$jscomp$153_tier$$, 
  $APP.$cljs$cst$399$border$$), $with_logos$$ = $APP.$cljs$core$filter$cljs$0core$0IFn$0_invoke$0arity$02$$($cljs$cst$954$logo$$, $G__35177_map__35162_map__35162__$1_members$jscomp$1_props__22175__auto__$jscomp$153_vec__35159$$), $without_logos$$ = $APP.$cljs$core$remove$cljs$0core$0IFn$0_invoke$0arity$02$$($cljs$cst$954$logo$$, $G__35177_map__35162_map__35162__$1_members$jscomp$1_props__22175__auto__$jscomp$153_vec__35159$$);
  $G__35177_map__35162_map__35162__$1_members$jscomp$1_props__22175__auto__$jscomp$153_vec__35159$$ = function() {
    return {className:"mb-12", children:[function() {
      var $G__35185_G__35193$jscomp$inline_4153$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-mono", "text-xl", "font-bold", "uppercase", "tracking-[0.15em]", $accent$jscomp$1$$]))), children:$label$jscomp$28$$};
      $G__35185_G__35193$jscomp$inline_4153$$ = {className:"flex items-center gap-3 mb", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__35185_G__35193$jscomp$inline_4153$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__35185_G__35193$jscomp$inline_4153$$)};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__35185_G__35193$jscomp$inline_4153$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__35185_G__35193$jscomp$inline_4153$$);
    }(), $APP.$cljs$core$seq$$($with_logos$$) ? function() {
      var $G__35207$$ = function() {
        return {className:"mb-4 flex flex-col items-center", children:$APP.$cljs$core$map$$.$cljs$core$IFn$_invoke$arity$2$(function($name$jscomp$201_p__35215$$) {
          var $G__35223_logo$jscomp$1_map__35217__$1$$ = $APP.$cljs$core$__destructure_map$$($name$jscomp$201_p__35215$$);
          $name$jscomp$201_p__35215$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__35223_logo$jscomp$1_map__35217__$1$$, $APP.$cljs$cst$165$name$$);
          $G__35223_logo$jscomp$1_map__35217__$1$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__35223_logo$jscomp$1_map__35217__$1$$, $cljs$cst$954$logo$$);
          $G__35223_logo$jscomp$1_map__35217__$1$$ = {name:$name$jscomp$201_p__35215$$, logo:$G__35223_logo$jscomp$1_map__35217__$1$$};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$($amp$pages$budget$sponsors$logo_card$$, $G__35223_logo$jscomp$1_map__35217__$1$$, $name$jscomp$201_p__35215$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$budget$sponsors$logo_card$$, $G__35223_logo$jscomp$1_map__35217__$1$$, $name$jscomp$201_p__35215$$);
        }, $with_logos$$)};
      }();
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__35207$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__35207$$);
    }() : null, $APP.$cljs$core$seq$$($without_logos$$) ? function() {
      var $G__35228$$ = function() {
        return {className:"flex flex-wrap gap-x-6 gap-y-2", children:$APP.$cljs$core$map$$.$cljs$core$IFn$_invoke$arity$2$(function($map__35238__$1_name$jscomp$202_p__35235$$) {
          $map__35238__$1_name$jscomp$202_p__35235$$ = $APP.$cljs$core$__destructure_map$$($map__35238__$1_name$jscomp$202_p__35235$$);
          $map__35238__$1_name$jscomp$202_p__35235$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__35238__$1_name$jscomp$202_p__35235$$, $APP.$cljs$cst$165$name$$);
          var $G__35242_JSCompiler_temp_const$jscomp$inline_4155$$ = $APP.$helix$impl$props$normalize_class$$("border-l-2 pl-3 py-1 " + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($border$jscomp$6$$));
          var $G__35253$jscomp$inline_4157_JSCompiler_inline_result$jscomp$inline_4156$$ = {name:$map__35238__$1_name$jscomp$202_p__35235$$, accent:$accent$jscomp$1$$};
          $G__35253$jscomp$inline_4157_JSCompiler_inline_result$jscomp$inline_4156$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$pages$budget$sponsors$name_item$$, $G__35253$jscomp$inline_4157_JSCompiler_inline_result$jscomp$inline_4156$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$budget$sponsors$name_item$$, $G__35253$jscomp$inline_4157_JSCompiler_inline_result$jscomp$inline_4156$$);
          $G__35242_JSCompiler_temp_const$jscomp$inline_4155$$ = {className:$G__35242_JSCompiler_temp_const$jscomp$inline_4155$$, children:$G__35253$jscomp$inline_4157_JSCompiler_inline_result$jscomp$inline_4156$$};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$("div", $G__35242_JSCompiler_temp_const$jscomp$inline_4155$$, $map__35238__$1_name$jscomp$202_p__35235$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__35242_JSCompiler_temp_const$jscomp$inline_4155$$, $map__35238__$1_name$jscomp$202_p__35235$$);
        }, $without_logos$$)};
      }();
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__35228$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__35228$$);
    }() : null]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__35177_map__35162_map__35162__$1_members$jscomp$1_props__22175__auto__$jscomp$153_vec__35159$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__35177_map__35162_map__35162__$1_members$jscomp$1_props__22175__auto__$jscomp$153_vec__35159$$);
};
$amp$pages$budget$sponsors$sponsors_section$$ = function($G__35348_map__35320_map__35320__$1_props__22175__auto__$jscomp$154_vec__35317$$, $maybe_ref__22176__auto__$jscomp$154$$) {
  $G__35348_map__35320_map__35320__$1_props__22175__auto__$jscomp$154_vec__35317$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__35348_map__35320_map__35320__$1_props__22175__auto__$jscomp$154_vec__35317$$), $maybe_ref__22176__auto__$jscomp$154$$], null);
  $G__35348_map__35320_map__35320__$1_props__22175__auto__$jscomp$154_vec__35317$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__35348_map__35320_map__35320__$1_props__22175__auto__$jscomp$154_vec__35317$$, 0, null);
  $G__35348_map__35320_map__35320__$1_props__22175__auto__$jscomp$154_vec__35317$$ = $APP.$cljs$core$__destructure_map$$($G__35348_map__35320_map__35320__$1_props__22175__auto__$jscomp$154_vec__35317$$);
  var $id$jscomp$96$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__35348_map__35320_map__35320__$1_props__22175__auto__$jscomp$154_vec__35317$$, $APP.$cljs$cst$286$id$$), $subtitle$jscomp$7$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__35348_map__35320_map__35320__$1_props__22175__auto__$jscomp$154_vec__35317$$, $APP.$cljs$cst$782$subtitle$$), $title$jscomp$36$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__35348_map__35320_map__35320__$1_props__22175__auto__$jscomp$154_vec__35317$$, 
  $APP.$cljs$cst$288$title$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $grouped$jscomp$1$$ = $APP.$cljs$core$sort_by$cljs$0core$0IFn$0_invoke$0arity$02$$(function($p__35333$$) {
    var $tier$jscomp$1$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($p__35333$$, 0, null);
    $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($p__35333$$, 1, null);
    return $cljs$cst$959$order$$.$cljs$core$IFn$_invoke$arity$1$($APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($amp$pages$budget$sponsors$tier_meta$$, $tier$jscomp$1$$));
  }, $APP.$cljs$core$group_by$$($cljs$cst$952$tier$$, $amp$pages$budget$sponsors$sponsors$$));
  $G__35348_map__35320_map__35320__$1_props__22175__auto__$jscomp$154_vec__35317$$ = function() {
    return {id:$id$jscomp$96$$, children:function() {
      var $G__35356$$ = function() {
        return {idx:6, eyebrow:$subtitle$jscomp$7$$, title:$title$jscomp$36$$, children:function() {
          var $G__35362$$ = function() {
            return {className:"p-4 mt-6 space-y-2", children:[function() {
              var $G__35370$$ = function() {
                return {className:"mb-12", children:[function() {
                  var $G__35376$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["text-slate-700  dark:text-slate-300", "mb-8"]))), children:"At present the Armenia Pavilion 2026 "};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__35376$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__35376$$);
                }(), function() {
                  var $G__35382$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["text-rose-600   dark:text-rose-400"]))), children:"is only made possible"};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__35382$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__35382$$);
                }(), function() {
                  var $G__35387$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["text-slate-700  dark:text-slate-300", "mb-8"]))), children:" through the generosity of foundations, families, and individuals committed to helping sustaining Armenia's cultural presence on the international stage."};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__35387$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__35387$$);
                }()]};
              }();
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__35370$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__35370$$);
            }(), $APP.$cljs$core$map$$.$cljs$core$IFn$_invoke$arity$2$(function($G__35401_members$jscomp$2_p__35391$$) {
              var $G__35402_tier$jscomp$2$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__35401_members$jscomp$2_p__35391$$, 0, null);
              $G__35401_members$jscomp$2_p__35391$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__35401_members$jscomp$2_p__35391$$, 1, null);
              $G__35401_members$jscomp$2_p__35391$$ = {tier:$G__35402_tier$jscomp$2$$, members:$G__35401_members$jscomp$2_p__35391$$};
              $G__35402_tier$jscomp$2$$ = $APP.$cljs$core$name$$($G__35402_tier$jscomp$2$$);
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$($amp$pages$budget$sponsors$tier_section$$, $G__35401_members$jscomp$2_p__35391$$, $G__35402_tier$jscomp$2$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$budget$sponsors$tier_section$$, $G__35401_members$jscomp$2_p__35391$$, $G__35402_tier$jscomp$2$$);
            }, $grouped$jscomp$1$$)]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__35362$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__35362$$);
        }()};
      }();
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$pages$budget$section_block$section_block$$, $G__35356$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$pages$budget$section_block$section_block$$, $G__35356$$);
    }()};
  }();
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__35348_map__35320_map__35320__$1_props__22175__auto__$jscomp$154_vec__35317$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__35348_map__35320_map__35320__$1_props__22175__auto__$jscomp$154_vec__35317$$);
};
$amp$pages$budget$why_support$preview$$ = function($G__35437_map__35435_props__22175__auto__$jscomp$155_vec__35432$$, $maybe_ref__22176__auto__$jscomp$155$$) {
  $G__35437_map__35435_props__22175__auto__$jscomp$155_vec__35432$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__35437_map__35435_props__22175__auto__$jscomp$155_vec__35432$$), $maybe_ref__22176__auto__$jscomp$155$$], null);
  $G__35437_map__35435_props__22175__auto__$jscomp$155_vec__35432$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__35437_map__35435_props__22175__auto__$jscomp$155_vec__35432$$, 0, null);
  $APP.$cljs$core$__destructure_map$$($G__35437_map__35435_props__22175__auto__$jscomp$155_vec__35432$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__35437_map__35435_props__22175__auto__$jscomp$155_vec__35432$$ = function() {
    return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_lg$$, "p-4"]))), children:[function() {
      var $G__35441$$ = {children:'To stand on the Biennale\'s global stage is not "participation" in an art event—it is '};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__35441$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__35441$$);
    }(), function() {
      var $G__35445$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:"presence in the world's most influential cultural forum"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__35445$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__35445$$);
    }(), function() {
      var $G__35449$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:", where nations are read, remembered, and measured in real time. "};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__35449$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__35449$$);
    }(), function() {
      var $G__35453$$ = {children:"For the Republic of Armenia, a Pavilion is a sovereign act of cultural visibility: it declares that Armenia is not only a history to be mourned or a headline to be managed, but a "};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__35453$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__35453$$);
    }(), function() {
      var $G__35457$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-semibold", "italic", "text-slate-900  dark:text-slate-100"]))), children:"living intelligence"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__35457$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__35457$$);
    }(), function() {
      var $G__35461$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:"—capable of producing contemporary vision at the highest level. "};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__35461$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__35461$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__35437_map__35435_props__22175__auto__$jscomp$155_vec__35432$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__35437_map__35435_props__22175__auto__$jscomp$155_vec__35432$$);
};
$amp$pages$budget$why_support$details$$ = function($G__35472_map__35470_props__22175__auto__$jscomp$156_vec__35467$$, $maybe_ref__22176__auto__$jscomp$156$$) {
  $G__35472_map__35470_props__22175__auto__$jscomp$156_vec__35467$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__35472_map__35470_props__22175__auto__$jscomp$156_vec__35467$$), $maybe_ref__22176__auto__$jscomp$156$$], null);
  $G__35472_map__35470_props__22175__auto__$jscomp$156_vec__35467$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__35472_map__35470_props__22175__auto__$jscomp$156_vec__35467$$, 0, null);
  $APP.$cljs$core$__destructure_map$$($G__35472_map__35470_props__22175__auto__$jscomp$156_vec__35467$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__35472_map__35470_props__22175__auto__$jscomp$156_vec__35467$$ = function() {
    return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_lg$$, "p-4"]))), children:[function() {
      var $G__35476$$ = {children:'To stand on the Biennale\'s global stage is not "participation" in an art event—it is '};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__35476$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__35476$$);
    }(), function() {
      var $G__35480$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:"presence in the world's most influential cultural forum"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__35480$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__35480$$);
    }(), function() {
      var $G__35484$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:", where nations are read, remembered, and measured in real time. "};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__35484$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__35484$$);
    }(), function() {
      var $G__35488$$ = {children:"For the Republic of Armenia, a Pavilion is a sovereign act of cultural visibility: it declares that Armenia is not only a history to be mourned or a headline to be managed, but a "};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__35488$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__35488$$);
    }(), function() {
      var $G__35492$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-semibold", "italic", "text-slate-900  dark:text-slate-100"]))), children:"living intelligence"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__35492$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__35492$$);
    }(), function() {
      var $G__35496$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:"—capable of producing contemporary vision at the highest level. "};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__35496$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__35496$$);
    }(), function() {
      var $G__35500$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:"This is how nations earn stature without asking permission: by contributing meaning, not pleading for sympathy. In Venice, Armenia enters the shared conversation that curators, museums, collectors, journalists, and governments track—and what is seen there echoes for years in exhibitions, acquisitions, education, tourism, diplomacy, and philanthropic interest."};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__35500$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__35500$$);
    }(), function() {
      var $G__35504_G__35508$jscomp$inline_4160$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$em_strong$$, "text-lg"]))), children:"This is why being present matters—and what it elevates:"};
      $G__35504_G__35508$jscomp$inline_4160$$ = {className:"mt-8 mb-4", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__35504_G__35508$jscomp$inline_4160$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__35504_G__35508$jscomp$inline_4160$$)};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__35504_G__35508$jscomp$inline_4160$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__35504_G__35508$jscomp$inline_4160$$);
    }(), function() {
      var $G__35512$$ = function() {
        return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["text-slate-700  dark:text-slate-300", "space-y-5"]))), children:[function() {
          var $G__35516_G__35520$jscomp$inline_4163$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$em_bold$$, "italic"]))), children:"National dignity, made public: "};
          $G__35516_G__35520$jscomp$inline_4163$$ = {className:"", children:[$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__35516_G__35520$jscomp$inline_4163$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__35516_G__35520$jscomp$inline_4163$$), "Armenia is framed through excellence, discipline, and contemporary creativity—not solely through tragedy or geopolitics."]};
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__35516_G__35520$jscomp$inline_4163$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__35516_G__35520$jscomp$inline_4163$$);
        }(), function() {
          var $G__35524_G__35528$jscomp$inline_4166$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$em_bold$$, "italic"]))), children:"Soft power that compounds: "};
          $G__35524_G__35528$jscomp$inline_4166$$ = {className:"", children:[$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__35524_G__35528$jscomp$inline_4166$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__35524_G__35528$jscomp$inline_4166$$), "Cultural visibility becomes long-term credibility—opening doors that money or lobbying cannot."]};
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__35524_G__35528$jscomp$inline_4166$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__35524_G__35528$jscomp$inline_4166$$);
        }(), function() {
          var $G__35532_G__35536$jscomp$inline_4169$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$em_bold$$, "italic"]))), children:"Narrative control: "};
          $G__35532_G__35536$jscomp$inline_4169$$ = {className:"", children:[$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__35532_G__35536$jscomp$inline_4169$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__35532_G__35536$jscomp$inline_4169$$), "If Armenia does not author its own image, others will—and they will simplify it."]};
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__35532_G__35536$jscomp$inline_4169$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__35532_G__35536$jscomp$inline_4169$$);
        }(), function() {
          var $G__35541_G__35545$jscomp$inline_4172$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$em_bold$$, "italic"]))), children:"A platform for future generations: "};
          $G__35541_G__35545$jscomp$inline_4172$$ = {className:"", children:[$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__35541_G__35545$jscomp$inline_4172$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__35541_G__35545$jscomp$inline_4172$$), 'A serious national presence signals to Armenian artists, students, and institutions that the world stage is not "for others."']};
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__35541_G__35545$jscomp$inline_4172$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__35541_G__35545$jscomp$inline_4172$$);
        }(), function() {
          var $G__35549_G__35553$jscomp$inline_4175$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$em_bold$$, "italic"]))), children:"Diaspora cohesion: "};
          $G__35549_G__35553$jscomp$inline_4175$$ = {className:"", children:[$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__35549_G__35553$jscomp$inline_4175$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__35549_G__35553$jscomp$inline_4175$$), "A Pavilion becomes a shared achievement—an anchor event that unifies donors, families, and communities around something constructive and proud."]};
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__35549_G__35553$jscomp$inline_4175$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__35549_G__35553$jscomp$inline_4175$$);
        }(), function() {
          var $G__35557_G__35561$jscomp$inline_4178$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$em_bold$$, "italic"]))), children:"Institutional consequences: "};
          $G__35557_G__35561$jscomp$inline_4178$$ = {className:"", children:[$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__35557_G__35561$jscomp$inline_4178$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__35557_G__35561$jscomp$inline_4178$$), "Serious participation invites museum partnerships, residencies, publications, acquisitions, and recurring invitations—real infrastructure, not a momentary spotlight."]};
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__35557_G__35561$jscomp$inline_4178$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__35557_G__35561$jscomp$inline_4178$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__35512$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__35512$$);
    }(), function() {
      var $G__35565$$ = function() {
        return {className:"block mt-8", children:[function() {
          var $G__35569$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:"The opportunity cost of not partaking is brutal and silent: "};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__35569$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__35569$$);
        }(), function() {
          var $G__35573$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-semibold", "italic", "text-slate-900  dark:text-slate-100"]))), children:"invisibility"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__35573$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__35573$$);
        }(), function() {
          var $G__35578$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:". The world does not pause because a nation is under-resourced; it simply moves on, and the absence becomes a habit. In a cultural ecosystem, absence reads as incapacity. It reinforces the unfair but persistent idea that Armenia is peripheral—always reacting, never defining. "};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__35578$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__35578$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__35565$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__35565$$);
    }(), function() {
      var $G__35583$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["text-slate-700  dark:text-slate-300", "block mt-6"]))), children:'That is the long-term gap: Armenia is not always "where it should be" because it has too often been forced into survival mode—outspent, out-networked, and underrepresented in the institutions that shape global memory. '};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__35583$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__35583$$);
    }(), function() {
      var $G__35587$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["text-slate-700  dark:text-slate-300", "block mt-6"]))), children:'A donor is not "buying" a sculpture or an event; they are buying representation with consequences: an enduring record that Armenia showed up with seriousness, ambition, and world-class execution. The legacy is reputational and generational: a Pavilion that becomes a reference point—documented, published, archived, collected, cited—and a model that makes the next Armenian presence easier, stronger, and inevitable.'};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__35587$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__35587$$);
    }(), function() {
      var $G__35592$$ = {className:"block mt-8", children:"And yes: "};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__35592$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__35592$$);
    }(), function() {
      var $G__35596$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-semibold", "italic", "text-slate-900  dark:text-slate-100"]))), children:"the cultural battle must be won"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__35596$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__35596$$);
    }(), function() {
      var $G__35600$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:"—not with aggression, but with clarity, consistency, and excellence. Culture is where nations become undeniable. It is where influence is built without violence; where history is not only remembered, but translated into future power. "};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__35600$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__35600$$);
    }(), function() {
      var $G__35604$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_closing$$, "block mt-6"]))), children:"Supporting this Pavilion is patriotism in its most practical form: it is an investment in Armenia's standing, Armenia's narrative, and Armenia's right to be seen at full scale—on equal terms—where the world is watching."};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__35604$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__35604$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__35472_map__35470_props__22175__auto__$jscomp$156_vec__35467$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__35472_map__35470_props__22175__auto__$jscomp$156_vec__35467$$);
};
$amp$pages$budget$why_support$why_support$$ = function($G__35617_id$jscomp$97_map__35615_props__22175__auto__$jscomp$157_vec__35612$$, $G__35621$jscomp$inline_4181_JSCompiler_inline_result$jscomp$inline_4180_maybe_ref__22176__auto__$jscomp$157_subtitle$jscomp$8$$) {
  $G__35617_id$jscomp$97_map__35615_props__22175__auto__$jscomp$157_vec__35612$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__35617_id$jscomp$97_map__35615_props__22175__auto__$jscomp$157_vec__35612$$), $G__35621$jscomp$inline_4181_JSCompiler_inline_result$jscomp$inline_4180_maybe_ref__22176__auto__$jscomp$157_subtitle$jscomp$8$$], null);
  $G__35617_id$jscomp$97_map__35615_props__22175__auto__$jscomp$157_vec__35612$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__35617_id$jscomp$97_map__35615_props__22175__auto__$jscomp$157_vec__35612$$, 0, null);
  var $map__35615__$1_title$jscomp$37$$ = $APP.$cljs$core$__destructure_map$$($G__35617_id$jscomp$97_map__35615_props__22175__auto__$jscomp$157_vec__35612$$);
  $G__35617_id$jscomp$97_map__35615_props__22175__auto__$jscomp$157_vec__35612$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__35615__$1_title$jscomp$37$$, $APP.$cljs$cst$286$id$$);
  $G__35621$jscomp$inline_4181_JSCompiler_inline_result$jscomp$inline_4180_maybe_ref__22176__auto__$jscomp$157_subtitle$jscomp$8$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__35615__$1_title$jscomp$37$$, $APP.$cljs$cst$782$subtitle$$);
  $map__35615__$1_title$jscomp$37$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__35615__$1_title$jscomp$37$$, $APP.$cljs$cst$288$title$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__35621$jscomp$inline_4181_JSCompiler_inline_result$jscomp$inline_4180_maybe_ref__22176__auto__$jscomp$157_subtitle$jscomp$8$$ = {idx:9, "section-hint":$G__35621$jscomp$inline_4181_JSCompiler_inline_result$jscomp$inline_4180_maybe_ref__22176__auto__$jscomp$157_subtitle$jscomp$8$$, title:$map__35615__$1_title$jscomp$37$$, "expand-button-label":"Read more", "preview-text":$amp$pages$budget$why_support$preview$$, "full-text":$amp$pages$budget$why_support$details$$};
  $G__35621$jscomp$inline_4181_JSCompiler_inline_result$jscomp$inline_4180_maybe_ref__22176__auto__$jscomp$157_subtitle$jscomp$8$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$ui$expandable_text$expandable_text_area_2$$, $G__35621$jscomp$inline_4181_JSCompiler_inline_result$jscomp$inline_4180_maybe_ref__22176__auto__$jscomp$157_subtitle$jscomp$8$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$ui$expandable_text$expandable_text_area_2$$, 
  $G__35621$jscomp$inline_4181_JSCompiler_inline_result$jscomp$inline_4180_maybe_ref__22176__auto__$jscomp$157_subtitle$jscomp$8$$);
  $G__35617_id$jscomp$97_map__35615_props__22175__auto__$jscomp$157_vec__35612$$ = {id:$G__35617_id$jscomp$97_map__35615_props__22175__auto__$jscomp$157_vec__35612$$, children:$G__35621$jscomp$inline_4181_JSCompiler_inline_result$jscomp$inline_4180_maybe_ref__22176__auto__$jscomp$157_subtitle$jscomp$8$$};
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__35617_id$jscomp$97_map__35615_props__22175__auto__$jscomp$157_vec__35612$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__35617_id$jscomp$97_map__35615_props__22175__auto__$jscomp$157_vec__35612$$);
};
$amp$pages$budget$section$section_link$$ = function($G__36294_map__36292_map__36292__$1_props__22175__auto__$jscomp$158_vec__36286$$, $maybe_ref__22176__auto__$jscomp$158$$) {
  $G__36294_map__36292_map__36292__$1_props__22175__auto__$jscomp$158_vec__36286$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__36294_map__36292_map__36292__$1_props__22175__auto__$jscomp$158_vec__36286$$), $maybe_ref__22176__auto__$jscomp$158$$], null);
  $G__36294_map__36292_map__36292__$1_props__22175__auto__$jscomp$158_vec__36286$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__36294_map__36292_map__36292__$1_props__22175__auto__$jscomp$158_vec__36286$$, 0, null);
  $G__36294_map__36292_map__36292__$1_props__22175__auto__$jscomp$158_vec__36286$$ = $APP.$cljs$core$__destructure_map$$($G__36294_map__36292_map__36292__$1_props__22175__auto__$jscomp$158_vec__36286$$);
  var $title$jscomp$38$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__36294_map__36292_map__36292__$1_props__22175__auto__$jscomp$158_vec__36286$$, $APP.$cljs$cst$288$title$$), $anchor$jscomp$2$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__36294_map__36292_map__36292__$1_props__22175__auto__$jscomp$158_vec__36286$$, $cljs$cst$963$anchor$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $scroll_to_id$jscomp$3$$ = $APP.$amp$hooks$use_scroll_to$use_scroll_to_id$$();
  $G__36294_map__36292_map__36292__$1_props__22175__auto__$jscomp$158_vec__36286$$ = function() {
    return {onClick:function() {
      return $scroll_to_id$jscomp$3$$.$cljs$core$IFn$_invoke$arity$1$ ? $scroll_to_id$jscomp$3$$.$cljs$core$IFn$_invoke$arity$1$($anchor$jscomp$2$$) : $scroll_to_id$jscomp$3$$.call(null, $anchor$jscomp$2$$);
    }, className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$nav_link$$), children:[$title$jscomp$38$$, " ", function() {
      var $G__36298$$ = {"class":"w-4 h-4 inline-block ml-1"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$ui$icons$ChevronRightIcon$$, $G__36298$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$ui$icons$ChevronRightIcon$$, $G__36298$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("button", $G__36294_map__36292_map__36292__$1_props__22175__auto__$jscomp$158_vec__36286$$) : $APP.$helix$core$jsxs$$.call(null, "button", $G__36294_map__36292_map__36292__$1_props__22175__auto__$jscomp$158_vec__36286$$);
};
$amp$pages$budget$section$header$$ = function($G__36314_props__22175__auto__$jscomp$159$$) {
  $APP.$helix$core$extract_cljs_props$$($G__36314_props__22175__auto__$jscomp$159$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__36314_props__22175__auto__$jscomp$159$$ = function() {
    return {className:"relative", children:[function() {
      var $G__36318_G__36322$jscomp$inline_4184$$ = {src:"images/graphics/61_biennale_logo_line.svg", className:"invert dark:invert-0"};
      $G__36318_G__36322$jscomp$inline_4184$$ = {className:"w-1/2 lg:w-1/4 lg:max-w-64 mt-4 lg:mt-8 px-4", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("img", $G__36318_G__36322$jscomp$inline_4184$$) : $APP.$helix$core$jsx$$.call(null, "img", $G__36318_G__36322$jscomp$inline_4184$$)};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__36318_G__36322$jscomp$inline_4184$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__36318_G__36322$jscomp$inline_4184$$);
    }(), function() {
      var $G__36326_G__36330$jscomp$inline_4187$$ = {translate:"no", className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["notranslate", $APP.$amp$styles$heading_page$$]))), children:"ARMENIA PAVILION, 61st INTERNATIONAL ART EXHIBITION LA BIENNALE DI VENEZIA"};
      $G__36326_G__36330$jscomp$inline_4187$$ = {className:"px-4 mt-12 lg:mt-16 max-w-4xl", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("h1", $G__36326_G__36330$jscomp$inline_4187$$) : $APP.$helix$core$jsx$$.call(null, "h1", $G__36326_G__36330$jscomp$inline_4187$$)};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__36326_G__36330$jscomp$inline_4187$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__36326_G__36330$jscomp$inline_4187$$);
    }(), function() {
      var $G__36334$$ = function() {
        return {className:"w-full px-4 mt-8", children:function() {
          var $G__36340$$ = function() {
            return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["text-slate-950  dark:text-white", "space-y-3 flex flex-col justify-start items-start"]))), children:[function() {
              var $G__36344$$ = {title:"1. Press Release", anchor:"section-1"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$pages$budget$section$section_link$$, $G__36344$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$budget$section$section_link$$, $G__36344$$);
            }(), function() {
              var $G__36348$$ = {title:"2. Overview - THE STUDIO", anchor:"section-2"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$pages$budget$section$section_link$$, $G__36348$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$budget$section$section_link$$, $G__36348$$);
            }(), function() {
              var $G__36352$$ = {title:"3. Budget", anchor:"section-3"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$pages$budget$section$section_link$$, $G__36352$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$budget$section$section_link$$, $G__36352$$);
            }(), function() {
              var $G__36357$$ = {title:"4. Cashflow", anchor:"section-4"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$pages$budget$section$section_link$$, $G__36357$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$budget$section$section_link$$, $G__36357$$);
            }(), function() {
              var $G__36361$$ = {title:"5. Committee", anchor:"section-5"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$pages$budget$section$section_link$$, $G__36361$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$budget$section$section_link$$, $G__36361$$);
            }(), function() {
              var $G__36365$$ = {title:"6. Patrons \x26 Sponsors", anchor:"section-6"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$pages$budget$section$section_link$$, $G__36365$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$budget$section$section_link$$, $G__36365$$);
            }(), function() {
              var $G__36370$$ = {title:"7. Location Details", anchor:"section-7"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$pages$budget$section$section_link$$, $G__36370$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$budget$section$section_link$$, $G__36370$$);
            }(), function() {
              var $G__36378$$ = {title:"8. Donation Info", anchor:"section-8"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$pages$budget$section$section_link$$, $G__36378$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$budget$section$section_link$$, $G__36378$$);
            }(), function() {
              var $G__36382$$ = {title:"9. Why Support", anchor:"section-9"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$pages$budget$section$section_link$$, $G__36382$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$budget$section$section_link$$, $G__36382$$);
            }()]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__36340$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__36340$$);
        }()};
      }();
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__36334$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__36334$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__36314_props__22175__auto__$jscomp$159$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__36314_props__22175__auto__$jscomp$159$$);
};
$amp$pages$budget$section$budget_section$$ = function($G__36468_props__22175__auto__$jscomp$160$$) {
  $APP.$helix$core$extract_cljs_props$$($G__36468_props__22175__auto__$jscomp$160$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__36468_props__22175__auto__$jscomp$160$$ = function() {
    return {"section-id":"budget-section", children:function() {
      var $G__36483$$ = {children:[function() {
        var $G__36485$$ = {};
        return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$pages$budget$section$header$$, $G__36485$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$budget$section$header$$, $G__36485$$);
      }(), function() {
        var $G__36491$$ = {id:"section-1", idx:1, subtitle:"press", title:"press release", "show-budget-footer?":!0};
        return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$pages$landing$press_release$press_release$$, $G__36491$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$pages$landing$press_release$press_release$$, $G__36491$$);
      }(), function() {
        var $G__36505$$ = {id:"section-2", idx:2, subtitle:"overview", title:"Armenian Pavilion - The Studio"};
        return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$pages$landing$studio$about_studio$$, $G__36505$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$pages$landing$studio$about_studio$$, $G__36505$$);
      }(), function() {
        var $G__36517$$ = {id:"section-3", subtitle:"financials", title:"budget"};
        return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$pages$budget$cost_breakdown$cost_breakdown$$, $G__36517$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$budget$cost_breakdown$cost_breakdown$$, $G__36517$$);
      }(), function() {
        var $G__36522$$ = {id:"section-4", subtitle:"financials", title:"cashflow"};
        return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$pages$budget$cash_flow$cash_flow$$, $G__36522$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$budget$cash_flow$cash_flow$$, $G__36522$$);
      }(), function() {
        var $G__36527$$ = {id:"section-5", subtitle:"team", title:"committee"};
        return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$pages$budget$committee$committee$$, $G__36527$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$budget$committee$committee$$, $G__36527$$);
      }(), function() {
        var $G__36535$$ = {id:"section-6", subtitle:"acknowledgements", title:"patrons \x26 sponsors"};
        return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$pages$budget$sponsors$sponsors_section$$, $G__36535$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$budget$sponsors$sponsors_section$$, $G__36535$$);
      }(), function() {
        var $G__36547$$ = {id:"section-7", subtitle:"venue", title:"location information"};
        return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$pages$budget$location$location_section$$, $G__36547$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$budget$location$location_section$$, $G__36547$$);
      }(), function() {
        var $G__36561$$ = {id:"section-8", subtitle:"non-profit", title:"donation information"};
        return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$pages$budget$non_profit$non_profit$$, $G__36561$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$budget$non_profit$non_profit$$, $G__36561$$);
      }(), function() {
        var $G__36573$$ = {id:"section-9", subtitle:"why it matters", title:"why support"};
        return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$pages$budget$why_support$why_support$$, $G__36573$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$budget$why_support$why_support$$, $G__36573$$);
      }()]};
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$ui$page_shell$page_shell$$, $G__36483$$) : $APP.$helix$core$jsxs$$.call(null, $APP.$amp$ui$page_shell$page_shell$$, $G__36483$$);
    }()};
  }();
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$($APP.$amp$ui$section$section$$, $G__36468_props__22175__auto__$jscomp$160$$, "budget-section") : $APP.$helix$core$jsx$$.call(null, $APP.$amp$ui$section$section$$, $G__36468_props__22175__auto__$jscomp$160$$, "budget-section");
};
$APP.$amp$pages$budget$page$budget_view$$ = function($G__36627_G__36631$jscomp$inline_3651_props__22175__auto__$jscomp$161_vec__36623$$, $maybe_ref__22176__auto__$jscomp$161$$) {
  $G__36627_G__36631$jscomp$inline_3651_props__22175__auto__$jscomp$161_vec__36623$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__36627_G__36631$jscomp$inline_3651_props__22175__auto__$jscomp$161_vec__36623$$), $maybe_ref__22176__auto__$jscomp$161$$], null);
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__36627_G__36631$jscomp$inline_3651_props__22175__auto__$jscomp$161_vec__36623$$, 0, null);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__36627_G__36631$jscomp$inline_3651_props__22175__auto__$jscomp$161_vec__36623$$ = {};
  $G__36627_G__36631$jscomp$inline_3651_props__22175__auto__$jscomp$161_vec__36623$$ = {children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$pages$budget$section$budget_section$$, $G__36627_G__36631$jscomp$inline_3651_props__22175__auto__$jscomp$161_vec__36623$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$budget$section$budget_section$$, $G__36627_G__36631$jscomp$inline_3651_props__22175__auto__$jscomp$161_vec__36623$$)};
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__36627_G__36631$jscomp$inline_3651_props__22175__auto__$jscomp$161_vec__36623$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__36627_G__36631$jscomp$inline_3651_props__22175__auto__$jscomp$161_vec__36623$$);
};
$cljs$cst$906$admin_apr_26$$ = new $APP.$cljs$core$Keyword$$(null, "admin-apr-26", "admin-apr-26", -1594649114);
$cljs$cst$920$venice_sep_26$$ = new $APP.$cljs$core$Keyword$$(null, "venice-sep-26", "venice-sep-26", 94763672);
$cljs$cst$879$venice_sep_25$$ = new $APP.$cljs$core$Keyword$$(null, "venice-sep-25", "venice-sep-25", 339442983);
$cljs$cst$898$la_feb_26$$ = new $APP.$cljs$core$Keyword$$(null, "la-feb-26", "la-feb-26", -2123365555);
$cljs$cst$908$venice_may_26$$ = new $APP.$cljs$core$Keyword$$(null, "venice-may-26", "venice-may-26", 2072857227);
$cljs$cst$873$priority$$ = new $APP.$cljs$core$Keyword$$(null, "priority", "priority", 1431093715);
$cljs$cst$958$accent$$ = new $APP.$cljs$core$Keyword$$(null, "accent", "accent", -1826298468);
$cljs$cst$859$venue$$ = new $APP.$cljs$core$Keyword$$(null, "venue", "venue", -731609643);
$cljs$cst$902$la_mar_26$$ = new $APP.$cljs$core$Keyword$$(null, "la-mar-26", "la-mar-26", 1380188343);
$cljs$cst$935$n_crit$$ = new $APP.$cljs$core$Keyword$$(null, "n-crit", "n-crit", 769065100);
$cljs$cst$924$admin_oct_26$$ = new $APP.$cljs$core$Keyword$$(null, "admin-oct-26", "admin-oct-26", 1040051883);
$cljs$cst$961$supporter$$ = new $APP.$cljs$core$Keyword$$(null, "supporter", "supporter", 789659821);
$cljs$cst$884$admin_oct_25$$ = new $APP.$cljs$core$Keyword$$(null, "admin-oct-25", "admin-oct-25", 1520025024);
$cljs$cst$911$venice_jun_26$$ = new $APP.$cljs$core$Keyword$$(null, "venice-jun-26", "venice-jun-26", -604048435);
$cljs$cst$938$has_now$$ = new $APP.$cljs$core$Keyword$$(null, "has-now", "has-now", 654554843);
$cljs$cst$862$the_studio$$ = new $APP.$cljs$core$Keyword$$(null, "the-studio", "the-studio", 106848628);
$cljs$cst$944$month$$ = new $APP.$cljs$core$Keyword$$(null, "month", "month", -1960248533);
$cljs$cst$960$benefactor$$ = new $APP.$cljs$core$Keyword$$(null, "benefactor", "benefactor", -1181533202);
$cljs$cst$886$la_nov_25$$ = new $APP.$cljs$core$Keyword$$(null, "la-nov-25", "la-nov-25", 245379756);
$cljs$cst$896$contingency_jan_26$$ = new $APP.$cljs$core$Keyword$$(null, "contingency-jan-26", "contingency-jan-26", 22175239);
$cljs$cst$914$venice_jul_26$$ = new $APP.$cljs$core$Keyword$$(null, "venice-jul-26", "venice-jul-26", -1607597583);
$cljs$cst$934$entries$$ = new $APP.$cljs$core$Keyword$$(null, "entries", "entries", -86943161);
$cljs$cst$933$all_paid$$ = new $APP.$cljs$core$Keyword$$(null, "all-paid", "all-paid", 366243873);
$cljs$cst$949$fields$$ = new $APP.$cljs$core$Keyword$$(null, "fields", "fields", -1932066230);
$cljs$cst$874$normal$$ = new $APP.$cljs$core$Keyword$$(null, "normal", "normal", -1519123858);
$cljs$cst$871$admin_jul_25$$ = new $APP.$cljs$core$Keyword$$(null, "admin-jul-25", "admin-jul-25", 264378453);
$cljs$cst$915$admin_jul_26$$ = new $APP.$cljs$core$Keyword$$(null, "admin-jul-26", "admin-jul-26", 149736986);
$cljs$cst$936$n_paid$$ = new $APP.$cljs$core$Keyword$$(null, "n-paid", "n-paid", -1703730024);
$cljs$cst$867$documentation$$ = new $APP.$cljs$core$Keyword$$(null, "documentation", "documentation", 1889593999);
$cljs$cst$878$contingency_aug_25$$ = new $APP.$cljs$core$Keyword$$(null, "contingency-aug-25", "contingency-aug-25", -1541402500);
$cljs$cst$919$contingency_aug_26$$ = new $APP.$cljs$core$Keyword$$(null, "contingency-aug-26", "contingency-aug-26", 1402254021);
$cljs$cst$868$debt_raised$$ = new $APP.$cljs$core$Keyword$$(null, "debt-raised", "debt-raised", -1855117742);
$cljs$cst$948$field_value$$ = new $APP.$cljs$core$Keyword$$(null, "field-value", "field-value", 1917248627);
$cljs$cst$950$ein$$ = new $APP.$cljs$core$Keyword$$(null, "ein", "ein", 635658375);
$cljs$cst$912$admin_jun_26$$ = new $APP.$cljs$core$Keyword$$(null, "admin-jun-26", "admin-jun-26", -541328069);
$cljs$cst$856$expanded_items$$ = new $APP.$cljs$core$Keyword$$(null, "expanded-items", "expanded-items", 749320313);
$cljs$cst$952$tier$$ = new $APP.$cljs$core$Keyword$$(null, "tier", "tier", -1071893374);
$cljs$cst$888$contingency_nov_25$$ = new $APP.$cljs$core$Keyword$$(null, "contingency-nov-25", "contingency-nov-25", 2119549379);
$cljs$cst$928$contingency_nov_26$$ = new $APP.$cljs$core$Keyword$$(null, "contingency-nov-26", "contingency-nov-26", 195578875);
$cljs$cst$853$tax$$ = new $APP.$cljs$core$Keyword$$(null, "tax", "tax", -226525810);
$cljs$cst$863$logistics$$ = new $APP.$cljs$core$Keyword$$(null, "logistics", "logistics", 712670037);
$cljs$cst$909$admin_may_26$$ = new $APP.$cljs$core$Keyword$$(null, "admin-may-26", "admin-may-26", 1889129108);
$cljs$cst$947$field_label$$ = new $APP.$cljs$core$Keyword$$(null, "field-label", "field-label", 872823490);
$cljs$cst$895$admin_jan_26$$ = new $APP.$cljs$core$Keyword$$(null, "admin-jan-26", "admin-jan-26", 142603763);
$cljs$cst$951$location$$ = new $APP.$cljs$core$Keyword$$(null, "location", "location", 1815599388);
$cljs$cst$897$venice_feb_26$$ = new $APP.$cljs$core$Keyword$$(null, "venice-feb-26", "venice-feb-26", -1651098139);
$cljs$cst$892$venice_jan_26$$ = new $APP.$cljs$core$Keyword$$(null, "venice-jan-26", "venice-jan-26", -68766759);
$cljs$cst$937$n_items$$ = new $APP.$cljs$core$Keyword$$(null, "n-items", "n-items", -880425095);
$cljs$cst$925$contingency_oct_26$$ = new $APP.$cljs$core$Keyword$$(null, "contingency-oct-26", "contingency-oct-26", -60258419);
$cljs$cst$885$contingency_oct_25$$ = new $APP.$cljs$core$Keyword$$(null, "contingency-oct-25", "contingency-oct-25", 400053796);
$cljs$cst$903$admin_mar_26$$ = new $APP.$cljs$core$Keyword$$(null, "admin-mar-26", "admin-mar-26", -338557509);
$cljs$cst$875$paid$$ = new $APP.$cljs$core$Keyword$$(null, "paid", "paid", 1195086102);
$cljs$cst$851$details$$ = new $APP.$cljs$core$Keyword$$(null, "details", "details", 1956795411);
$cljs$cst$929$venice_dec_26$$ = new $APP.$cljs$core$Keyword$$(null, "venice-dec-26", "venice-dec-26", 1428198827);
$cljs$cst$901$venice_mar_26$$ = new $APP.$cljs$core$Keyword$$(null, "venice-mar-26", "venice-mar-26", -1280378980);
$cljs$cst$959$order$$ = new $APP.$cljs$core$Keyword$$(null, "order", "order", -1254677256);
$cljs$cst$899$admin_feb_26$$ = new $APP.$cljs$core$Keyword$$(null, "admin-feb-26", "admin-feb-26", 1788307477);
$cljs$cst$907$contingency_apr_26$$ = new $APP.$cljs$core$Keyword$$(null, "contingency-apr-26", "contingency-apr-26", -197755096);
$cljs$cst$940$entry$$ = new $APP.$cljs$core$Keyword$$(null, "entry", "entry", 505168823);
$cljs$cst$930$admin_dec_26$$ = new $APP.$cljs$core$Keyword$$(null, "admin-dec-26", "admin-dec-26", 1444073491);
$cljs$cst$890$admin_dec_25$$ = new $APP.$cljs$core$Keyword$$(null, "admin-dec-25", "admin-dec-25", 629109073);
$cljs$cst$858$item$$ = new $APP.$cljs$core$Keyword$$(null, "item", "item", 249373802);
$cljs$cst$927$admin_nov_26$$ = new $APP.$cljs$core$Keyword$$(null, "admin-nov-26", "admin-nov-26", 899776291);
$cljs$cst$887$admin_nov_25$$ = new $APP.$cljs$core$Keyword$$(null, "admin-nov-25", "admin-nov-25", -26984311);
$cljs$cst$872$due$$ = new $APP.$cljs$core$Keyword$$(null, "due", "due", -1754731313);
$cljs$cst$857$description$$ = new $APP.$cljs$core$Keyword$$(null, "description", "description", -1428560544);
$cljs$cst$893$critical$$ = new $APP.$cljs$core$Keyword$$(null, "critical", "critical", -838839117);
$cljs$cst$916$contingency_jul_26$$ = new $APP.$cljs$core$Keyword$$(null, "contingency-jul-26", "contingency-jul-26", 1067897141);
$cljs$cst$876$contingency_jul_25$$ = new $APP.$cljs$core$Keyword$$(null, "contingency-jul-25", "contingency-jul-25", -1729678391);
$cljs$cst$931$contingency_dec_26$$ = new $APP.$cljs$core$Keyword$$(null, "contingency-dec-26", "contingency-dec-26", -60155593);
$cljs$cst$891$contingency_dec_25$$ = new $APP.$cljs$core$Keyword$$(null, "contingency-dec-25", "contingency-dec-25", 1266897629);
$cljs$cst$910$contingency_may_26$$ = new $APP.$cljs$core$Keyword$$(null, "contingency-may-26", "contingency-may-26", -484422222);
$cljs$cst$913$contingency_jun_26$$ = new $APP.$cljs$core$Keyword$$(null, "contingency-jun-26", "contingency-jun-26", 28697636);
$cljs$cst$850$amount$$ = new $APP.$cljs$core$Keyword$$(null, "amount", "amount", 364489504);
$cljs$cst$946$past_QMARK_$$ = new $APP.$cljs$core$Keyword$$(null, "past?", "past?", -125779631);
$cljs$cst$870$cash_flow_model$$ = new $APP.$cljs$core$Keyword$$(null, "cash-flow-model", "cash-flow-model", -883317453);
$cljs$cst$939$dot$$ = new $APP.$cljs$core$Keyword$$(null, "dot", "dot", 1442709401);
$cljs$cst$942$expanded_QMARK_$$ = new $APP.$cljs$core$Keyword$$(null, "expanded?", "expanded?", 2055832296);
$cljs$cst$855$set_expanded_items$$ = new $APP.$cljs$core$Keyword$$(null, "set-expanded-items", "set-expanded-items", -112840979);
$cljs$cst$852$rate$$ = new $APP.$cljs$core$Keyword$$(null, "rate", "rate", -1428659698);
$cljs$cst$900$contingency_feb_26$$ = new $APP.$cljs$core$Keyword$$(null, "contingency-feb-26", "contingency-feb-26", 509692640);
$cljs$cst$865$marketing$$ = new $APP.$cljs$core$Keyword$$(null, "marketing", "marketing", 2054879774);
$cljs$cst$861$la_prod$$ = new $APP.$cljs$core$Keyword$$(null, "la-prod", "la-prod", 1444492244);
$cljs$cst$956$patron$$ = new $APP.$cljs$core$Keyword$$(null, "patron", "patron", -1174215364);
$cljs$cst$932$fill$$ = new $APP.$cljs$core$Keyword$$(null, "fill", "fill", 883462889);
$cljs$cst$869$funds_raised$$ = new $APP.$cljs$core$Keyword$$(null, "funds-raised", "funds-raised", -197009653);
$cljs$cst$922$contingency_sep_26$$ = new $APP.$cljs$core$Keyword$$(null, "contingency-sep-26", "contingency-sep-26", 479744418);
$cljs$cst$882$contingency_sep_25$$ = new $APP.$cljs$core$Keyword$$(null, "contingency-sep-25", "contingency-sep-25", -1119739004);
$cljs$cst$962$members$$ = new $APP.$cljs$core$Keyword$$(null, "members", "members", 159001018);
$cljs$cst$854$cost_data$$ = new $APP.$cljs$core$Keyword$$(null, "cost-data", "cost-data", -1991336764);
$cljs$cst$926$venice_nov_26$$ = new $APP.$cljs$core$Keyword$$(null, "venice-nov-26", "venice-nov-26", 1130078643);
$cljs$cst$941$rollup$$ = new $APP.$cljs$core$Keyword$$(null, "rollup", "rollup", -1742987157);
$cljs$cst$957$individual$$ = new $APP.$cljs$core$Keyword$$(null, "individual", "individual", -1643964808);
$cljs$cst$921$admin_sep_26$$ = new $APP.$cljs$core$Keyword$$(null, "admin-sep-26", "admin-sep-26", -700799960);
$cljs$cst$880$admin_sep_25$$ = new $APP.$cljs$core$Keyword$$(null, "admin-sep-25", "admin-sep-25", 753699567);
$cljs$cst$905$venice_apr_26$$ = new $APP.$cljs$core$Keyword$$(null, "venice-apr-26", "venice-apr-26", -1422709865);
$cljs$cst$955$institution$$ = new $APP.$cljs$core$Keyword$$(null, "institution", "institution", -70023072);
$cljs$cst$954$logo$$ = new $APP.$cljs$core$Keyword$$(null, "logo", "logo", 1237980263);
$cljs$cst$881$high$$ = new $APP.$cljs$core$Keyword$$(null, "high", "high", 2027297808);
$cljs$cst$864$opening$$ = new $APP.$cljs$core$Keyword$$(null, "opening", "opening", 450993708);
$cljs$cst$963$anchor$$ = new $APP.$cljs$core$Keyword$$(null, "anchor", "anchor", 1549638489);
$cljs$cst$860$admin$$ = new $APP.$cljs$core$Keyword$$(null, "admin", "admin", -1239101627);
$cljs$cst$904$contingency_mar_26$$ = new $APP.$cljs$core$Keyword$$(null, "contingency-mar-26", "contingency-mar-26", 1126538363);
$cljs$cst$923$venice_oct_26$$ = new $APP.$cljs$core$Keyword$$(null, "venice-oct-26", "venice-oct-26", -1699834368);
$cljs$cst$883$venice_oct_25$$ = new $APP.$cljs$core$Keyword$$(null, "venice-oct-25", "venice-oct-25", -641394196);
$cljs$cst$945$now$$ = new $APP.$cljs$core$Keyword$$(null, "now", "now", -1650525531);
$cljs$cst$917$venice_aug_26$$ = new $APP.$cljs$core$Keyword$$(null, "venice-aug-26", "venice-aug-26", 520228272);
$cljs$cst$918$admin_aug_26$$ = new $APP.$cljs$core$Keyword$$(null, "admin-aug-26", "admin-aug-26", -1522732065);
$cljs$cst$877$admin_aug_25$$ = new $APP.$cljs$core$Keyword$$(null, "admin-aug-25", "admin-aug-25", -1520609899);
$cljs$cst$953$founding_patron$$ = new $APP.$cljs$core$Keyword$$(null, "founding-patron", "founding-patron", -1158627303);
$cljs$cst$889$la_dec_25$$ = new $APP.$cljs$core$Keyword$$(null, "la-dec-25", "la-dec-25", -844494315);
$cljs$cst$894$la_jan_26$$ = new $APP.$cljs$core$Keyword$$(null, "la-jan-26", "la-jan-26", -425305268);
$cljs$cst$866$publication$$ = new $APP.$cljs$core$Keyword$$(null, "publication", "publication", -1089697399);
$cljs$cst$943$target_total$$ = new $APP.$cljs$core$Keyword$$(null, "target-total", "target-total", 158942849);
$APP.$JSCompiler_StaticMethods_beforeLoadModuleCode$$("budget-view");
var $amp$pages$budget$committee$committee_members$$ = new $APP.$cljs$core$PersistentVector$$(null, 9, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$165$name$$, "Archbishop Derderian", $APP.$cljs$cst$849$role$$, "Committee Lead", $APP.$cljs$cst$734$img_src$$, "https://atd-722658831.imgix.net/committee/hovnan.png", $APP.$cljs$cst$717$credit$$, "Courtesy of the Committee"], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, 
[$APP.$cljs$cst$165$name$$, "Tony Shafrazi", $APP.$cljs$cst$849$role$$, "Chief Curator", $APP.$cljs$cst$734$img_src$$, "https://atd-722658831.imgix.net/committee/tony.png", $APP.$cljs$cst$717$credit$$, "Courtesy of the Committee"], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$165$name$$, "Tina Chakarian", $APP.$cljs$cst$849$role$$, "Curator", $APP.$cljs$cst$734$img_src$$, "https://atd-722658831.imgix.net/committee/tina.png", $APP.$cljs$cst$717$credit$$, "Courtesy of the Committee"], 
null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$165$name$$, "Zadik Zadikian", $APP.$cljs$cst$849$role$$, "Artist", $APP.$cljs$cst$734$img_src$$, "https://atd-722658831.imgix.net/committee/zadik.png", $APP.$cljs$cst$717$credit$$, "Courtesy of the Committee"], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$165$name$$, "Rafi Ourfalian", $APP.$cljs$cst$849$role$$, "Legal Advisor", $APP.$cljs$cst$734$img_src$$, "https://atd-722658831.imgix.net/committee/rafi.png", 
$APP.$cljs$cst$717$credit$$, "Courtesy of the Committee"], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$165$name$$, "Khachik Khudikyan", $APP.$cljs$cst$849$role$$, "Logistics Advisor", $APP.$cljs$cst$734$img_src$$, "https://atd-722658831.imgix.net/committee/chris.png", $APP.$cljs$cst$717$credit$$, "Courtesy of the Committee"], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$165$name$$, "Andranik Torosyan", $APP.$cljs$cst$849$role$$, "Financial Advisor", 
$APP.$cljs$cst$734$img_src$$, "https://atd-722658831.imgix.net/committee/andy.png", $APP.$cljs$cst$717$credit$$, "Courtesy of the Committee"], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$165$name$$, "Aram Alajajian", $APP.$cljs$cst$849$role$$, "Architect", $APP.$cljs$cst$734$img_src$$, "https://atd-722658831.imgix.net/committee/aram.png", $APP.$cljs$cst$717$credit$$, "Courtesy of the Committee"], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$165$name$$, 
"Vik Hovsepian", $APP.$cljs$cst$849$role$$, "Committee Member", $APP.$cljs$cst$717$credit$$, "Courtesy of the Committee", $APP.$cljs$cst$734$img_src$$, "https://atd-722658831.imgix.net/committee/vic.png"], null)], null);
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$303$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$304$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$pages$budget$committee$preview$$, "", null, null) : (void 0).call(null, $amp$pages$budget$committee$preview$$, "", null, null)), $APP.$helix$core$register_BANG_$$($amp$pages$budget$committee$preview$$, 
"amp.pages.budget.committee/preview"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$303$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$304$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$pages$budget$committee$details$$, "", null, null) : (void 0).call(null, $amp$pages$budget$committee$details$$, "", null, null)), $APP.$helix$core$register_BANG_$$($amp$pages$budget$committee$details$$, 
"amp.pages.budget.committee/details"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$303$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$304$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$pages$budget$committee$committee_member_card$$, "", null, null) : (void 0).call(null, $amp$pages$budget$committee$committee_member_card$$, "", null, 
null)), $APP.$helix$core$register_BANG_$$($amp$pages$budget$committee$committee_member_card$$, "amp.pages.budget.committee/committee-member-card"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$303$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$304$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$pages$budget$committee$committee_gallery$$, "", null, null) : (void 0).call(null, $amp$pages$budget$committee$committee_gallery$$, "", null, null)), 
$APP.$helix$core$register_BANG_$$($amp$pages$budget$committee$committee_gallery$$, "amp.pages.budget.committee/committee-gallery"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$303$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$304$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$pages$budget$committee$committee$$, "", null, null) : (void 0).call(null, $amp$pages$budget$committee$committee$$, "", null, null)), $APP.$helix$core$register_BANG_$$($amp$pages$budget$committee$committee$$, 
"amp.pages.budget.committee/committee"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$303$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$304$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$pages$budget$table$total_section$$, "", null, null) : (void 0).call(null, $amp$pages$budget$table$total_section$$, "", null, null)), $APP.$helix$core$register_BANG_$$($amp$pages$budget$table$total_section$$, 
"amp.pages.budget.table/total-section"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$303$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$304$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$pages$budget$table$detail_line_item$$, "", null, null) : (void 0).call(null, $amp$pages$budget$table$detail_line_item$$, "", null, null)), $APP.$helix$core$register_BANG_$$($amp$pages$budget$table$detail_line_item$$, 
"amp.pages.budget.table/detail-line-item"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$303$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$304$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$pages$budget$table$section_line_item$$, '(hooks/use-ref (str "section-" idx))(use-scroll-to-ref)', null, null) : (void 0).call(null, $amp$pages$budget$table$section_line_item$$, 
'(hooks/use-ref (str "section-" idx))(use-scroll-to-ref)', null, null)), $APP.$helix$core$register_BANG_$$($amp$pages$budget$table$section_line_item$$, "amp.pages.budget.table/section-line-item"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$303$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$304$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$pages$budget$table$budget_table$$, "(hooks/use-state #{})", null, null) : (void 0).call(null, $amp$pages$budget$table$budget_table$$, "(hooks/use-state #{})", 
null, null)), $APP.$helix$core$register_BANG_$$($amp$pages$budget$table$budget_table$$, "amp.pages.budget.table/budget-table"));
var $amp$pages$budget$cost_breakdown$cost_data$$ = new $APP.$cljs$core$PersistentVector$$(null, 9, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$286$id$$, $cljs$cst$859$venue$$, $APP.$cljs$cst$288$title$$, "Venue \x26 Operations", $cljs$cst$857$description$$, "Secures and operates the Venice exhibition venue for the full Biennale period: rental, staffing, regulatory compliance, construction, lighting, taxes, and on-site overhead including team lodging and living expenses—ensuring the Pavilion is compliant, safe, and fully operational.", 
$cljs$cst$851$details$$, new $APP.$cljs$core$PersistentVector$$(null, 14, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$589$group$$, "Base", $APP.$cljs$cst$288$title$$, "Base Rent", $cljs$cst$850$amount$$, 145600, $cljs$cst$857$description$$, "Exclusive use of venue April–December 2026 for the full Biennale period."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$589$group$$, "Base", $APP.$cljs$cst$288$title$$, 
"Base Staff", $cljs$cst$850$amount$$, 50000, $cljs$cst$857$description$$, "Exhibition staff during the opening period, including security and front-of-house personnel."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$589$group$$, "Base", $APP.$cljs$cst$288$title$$, "Curatorial Mediator", $cljs$cst$850$amount$$, 25000, $cljs$cst$857$description$$, "Trained curatorial mediator providing visitor guidance, interpretation, and artwork oversight."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 
4, [$APP.$cljs$cst$589$group$$, "Base", $APP.$cljs$cst$288$title$$, "Cleaning", $cljs$cst$850$amount$$, 7000, $cljs$cst$857$description$$, "Weekly professional cleaning and periodic deep cleans for a high-traffic international exhibition."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$589$group$$, "Permitting", $APP.$cljs$cst$288$title$$, "Permits \x26 Signage", $cljs$cst$850$amount$$, 10000, $cljs$cst$857$description$$, "SCIA permits, exhibition signage approvals, and municipal permits for operational compliance in Venice."], 
null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$589$group$$, "Permitting", $APP.$cljs$cst$288$title$$, "Fire Safety Cert.", $cljs$cst$850$amount$$, 3500, $cljs$cst$857$description$$, "Mandatory fire-safety certification, inspections, and documentation required by Venetian authorities."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$589$group$$, "Permitting", $APP.$cljs$cst$288$title$$, "Liability Ins.", $cljs$cst$850$amount$$, 2500, $cljs$cst$857$description$$, 
"Public liability insurance covering visitors, staff, and third parties for the full exhibition period."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$589$group$$, "Construction", $APP.$cljs$cst$288$title$$, "Partitions \x26 Walls", $cljs$cst$850$amount$$, 9500, $cljs$cst$857$description$$, "Windows, door alterations, partitions, and minor structural adjustments to adapt the venue."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$589$group$$, 
"Construction", $APP.$cljs$cst$288$title$$, "Lighting", $cljs$cst$850$amount$$, 7500, $cljs$cst$857$description$$, "Overhead ceiling-mounted, freestanding, and supplemental exhibition lighting equipment and installation."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$589$group$$, "Taxes", $APP.$cljs$cst$288$title$$, "Signage Taxes", $cljs$cst$850$amount$$, 1500, $cljs$cst$857$description$$, "Municipal banner and signage tax for exterior and wayfinding signage during the Biennale."], 
null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$589$group$$, "Taxes", $APP.$cljs$cst$288$title$$, "VAT 22%", $cljs$cst$850$amount$$, 55E3, $cljs$cst$857$description$$, "Italian value-added tax on applicable venue services."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$589$group$$, "Overhead", $APP.$cljs$cst$288$title$$, "Team Lodging", $cljs$cst$850$amount$$, 95E3, $cljs$cst$857$description$$, "Accommodation for the Venice studio team. $125/night per head, 2 months pre-production + 10 months operations."], 
null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$589$group$$, "Overhead", $APP.$cljs$cst$288$title$$, "Per Diem", $cljs$cst$850$amount$$, 66E3, $cljs$cst$857$description$$, "Daily living expenses for the Venice-based team. $100/day per head during active operating months."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$589$group$$, "Overhead", $APP.$cljs$cst$288$title$$, "Project Insurance", $cljs$cst$850$amount$$, 5E4, $cljs$cst$857$description$$, 
"Project insurance coverage for the Venice operations period. 10 months at $5,000/month."], null)], null)], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$286$id$$, $cljs$cst$860$admin$$, $APP.$cljs$cst$288$title$$, "Administration", $cljs$cst$857$description$$, "Core leadership, project management, and operational overhead supporting curatorial direction, artist oversight, coordination, compliance, travel, and lodging—ensuring continuity across the full Biennale cycle.", 
$cljs$cst$851$details$$, new $APP.$cljs$core$PersistentVector$$(null, 6, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$589$group$$, "Staff", $APP.$cljs$cst$288$title$$, "Curators", $cljs$cst$850$amount$$, 9E4, $cljs$cst$857$description$$, "Curatorial leadership. 18 months at $5,000/month."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$589$group$$, "Staff", $APP.$cljs$cst$288$title$$, "Artist", $cljs$cst$850$amount$$, 
45E3, $cljs$cst$857$description$$, "Artist fees. 18 months at $2,500/month."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$589$group$$, "Staff", $APP.$cljs$cst$288$title$$, "Project Coordinator", $cljs$cst$850$amount$$, 45E3, $cljs$cst$857$description$$, "Project coordination. 18 months at $2,500/month."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$589$group$$, "Travel \x26 Overhead", $APP.$cljs$cst$288$title$$, "Team Travel", $cljs$cst$850$amount$$, 
49E3, $cljs$cst$857$description$$, "International and regional travel for core team during scouting, installation, opening week, and milestones."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$589$group$$, "Travel \x26 Overhead", $APP.$cljs$cst$288$title$$, "Team Lodging", $cljs$cst$850$amount$$, 7500, $cljs$cst$857$description$$, "Accommodation for core team during opening week and critical on-site periods in Venice."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 
4, [$APP.$cljs$cst$589$group$$, "Travel \x26 Overhead", $APP.$cljs$cst$288$title$$, "Misc", $cljs$cst$850$amount$$, 5500, $cljs$cst$857$description$$, "Miscellaneous administrative expenses, software, tools, and incidentals. 11 months at $500/month."], null)], null)], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$286$id$$, $cljs$cst$861$la_prod$$, $APP.$cljs$cst$288$title$$, "LA Production", $cljs$cst$857$description$$, "Los Angeles–based production: skilled labor, casting, mold-making, materials, studio overhead, and supplies—ensuring museum-grade fabrication and crating prior to shipment to Venice.", 
$cljs$cst$851$details$$, new $APP.$cljs$core$PersistentVector$$(null, 21, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$589$group$$, "Labor", $APP.$cljs$cst$288$title$$, "Lead Caster", $cljs$cst$850$amount$$, 37625, $cljs$cst$857$description$$, "Lead caster. 5 months at $7,525/month."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$589$group$$, "Labor", $APP.$cljs$cst$288$title$$, "Caster", $cljs$cst$850$amount$$, 
22500, $cljs$cst$857$description$$, "Casting professional. 5 months at $4,500/month."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$589$group$$, "Labor", $APP.$cljs$cst$288$title$$, "General Assistant", $cljs$cst$850$amount$$, 21500, $cljs$cst$857$description$$, "General production assistant. 5 months at $4,300/month."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$589$group$$, "Labor", $APP.$cljs$cst$288$title$$, "Mold Maker", $cljs$cst$850$amount$$, 
15E3, $cljs$cst$857$description$$, "Specialist mold maker. 2 months at $7,500/month."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$589$group$$, "Labor", $APP.$cljs$cst$288$title$$, "Foam Sprayer", $cljs$cst$850$amount$$, 9E3, $cljs$cst$857$description$$, "Contract foam sprayer for structural cores. 2 months at $4,500/month."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$589$group$$, "Labor", $APP.$cljs$cst$288$title$$, "Casting Asst. ×3", 
$cljs$cst$850$amount$$, 9E3, $cljs$cst$857$description$$, "3 casting assistants. 2 months at $1,500/month each."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$589$group$$, "Labor", $APP.$cljs$cst$288$title$$, "Packers ×4", $cljs$cst$850$amount$$, 14E3, $cljs$cst$857$description$$, "4 packers for crating and shipping prep. 1 month at $3,500 each."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$589$group$$, "Labor", $APP.$cljs$cst$288$title$$, 
"Crate Makers ×2", $cljs$cst$850$amount$$, 1E4, $cljs$cst$857$description$$, "2 crate makers for custom shipping crates. 1 month at $5,000 each."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$589$group$$, "Overhead", $APP.$cljs$cst$288$title$$, "Studio Rental", $cljs$cst$850$amount$$, 22500, $cljs$cst$857$description$$, "LA studio rent for fabrication. 5 months at $4,500/month."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$589$group$$, "Overhead", 
$APP.$cljs$cst$288$title$$, "Foam Space Rental", $cljs$cst$850$amount$$, 5500, $cljs$cst$857$description$$, "Additional foam production space rental. 2 months at $2,750/month."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$589$group$$, "Overhead", $APP.$cljs$cst$288$title$$, "Utilities", $cljs$cst$850$amount$$, 3E3, $cljs$cst$857$description$$, "Utilities for the LA production facility. 2 months at $1,500/month."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 
4, [$APP.$cljs$cst$589$group$$, "Materials", $APP.$cljs$cst$288$title$$, "Pigment", $cljs$cst$850$amount$$, 11500, $cljs$cst$857$description$$, "High-quality pigments integrated into plaster at casting."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$589$group$$, "Materials", $APP.$cljs$cst$288$title$$, "Honeycomb", $cljs$cst$850$amount$$, 1500, $cljs$cst$857$description$$, "Structural honeycomb material for lightweight internal reinforcement."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 
4, [$APP.$cljs$cst$589$group$$, "Materials", $APP.$cljs$cst$288$title$$, "Polymers", $cljs$cst$850$amount$$, 1500, $cljs$cst$857$description$$, "Binders and polymer materials used in finishing and protection."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$589$group$$, "Materials", $APP.$cljs$cst$288$title$$, "Foam Material", $cljs$cst$850$amount$$, 21E3, $cljs$cst$857$description$$, "Lightweight foam cores for structural integrity while minimizing shipping weight."], 
null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$589$group$$, "Materials", $APP.$cljs$cst$288$title$$, "Plaster", $cljs$cst$850$amount$$, 4500, $cljs$cst$857$description$$, "Primary casting material for all sculptural units."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$589$group$$, "Materials", $APP.$cljs$cst$288$title$$, "Supplies", $cljs$cst$850$amount$$, 10500, $cljs$cst$857$description$$, "Consumable supplies used during casting and finishing."], 
null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$589$group$$, "Materials", $APP.$cljs$cst$288$title$$, "Mold Supplies", $cljs$cst$850$amount$$, 17500, $cljs$cst$857$description$$, "Custom mold materials, CNC mother units, and fabrication aids."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$589$group$$, "Materials", $APP.$cljs$cst$288$title$$, "Crate Materials", $cljs$cst$850$amount$$, 15E3, $cljs$cst$857$description$$, "Materials for constructing custom shipping crates."], 
null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$589$group$$, "Materials", $APP.$cljs$cst$288$title$$, "Packing Supplies", $cljs$cst$850$amount$$, 5E3, $cljs$cst$857$description$$, "Packing materials for securing artwork during international transit."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$589$group$$, "Materials", $APP.$cljs$cst$288$title$$, "Misc", $cljs$cst$850$amount$$, 7500, $cljs$cst$857$description$$, "Miscellaneous production expenses. 5 months at $1,500/month."], 
null)], null)], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$286$id$$, $cljs$cst$862$the_studio$$, $APP.$cljs$cst$288$title$$, "The Studio", $cljs$cst$857$description$$, "On-site operation of THE STUDIO in Venice: staffing, installation and de-installation crews, local materials, and daily production—supporting continuous fabrication and reconfiguration throughout the Biennale.", $cljs$cst$851$details$$, new $APP.$cljs$core$PersistentVector$$(null, 15, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, 
[new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$589$group$$, "Staff", $APP.$cljs$cst$288$title$$, "Studio Asst. #1", $cljs$cst$850$amount$$, 54E3, $cljs$cst$857$description$$, "Full-time studio assistant. 9 months at $6,000/month."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$589$group$$, "Staff", $APP.$cljs$cst$288$title$$, "Studio Asst. #2", $cljs$cst$850$amount$$, 46500, $cljs$cst$857$description$$, "Studio assistant. 6 months at $6,000 + 3 months at $3,500."], 
null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$589$group$$, "Staff", $APP.$cljs$cst$288$title$$, "Studio Asst. #3", $cljs$cst$850$amount$$, 23500, $cljs$cst$857$description$$, "Studio assistant. 1 month at $6,000 + 5 months at $3,500."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$589$group$$, "Staff", $APP.$cljs$cst$288$title$$, "Studio Asst. #4", $cljs$cst$850$amount$$, 23500, $cljs$cst$857$description$$, "Studio assistant. 1 month at $6,000 + 5 months at $3,500."], 
null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$589$group$$, "Staff", $APP.$cljs$cst$288$title$$, "Studio Asst. #5", $cljs$cst$850$amount$$, 6E3, $cljs$cst$857$description$$, "Temporary studio assistant. 1 month at $6,000."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$589$group$$, "Staff", $APP.$cljs$cst$288$title$$, "Studio Asst. #6", $cljs$cst$850$amount$$, 6E3, $cljs$cst$857$description$$, "Temporary studio assistant. 1 month at $6,000."], 
null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$589$group$$, "Install / Uninstall", $APP.$cljs$cst$288$title$$, "Installers ×4", $cljs$cst$850$amount$$, 32E3, $cljs$cst$857$description$$, "4 installers for install and uninstall. 2 engagements at $4,000 each."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$589$group$$, "Install / Uninstall", $APP.$cljs$cst$288$title$$, "Crate Makers ×2", $cljs$cst$850$amount$$, 11E3, $cljs$cst$857$description$$, 
"2 crate makers for Venice de-install crating. 1 engagement at $5,500 each."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$589$group$$, "Materials", $APP.$cljs$cst$288$title$$, "Foam Material", $cljs$cst$850$amount$$, 11500, $cljs$cst$857$description$$, "Venice-sourced foam materials for ongoing on-site fabrication."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$589$group$$, "Materials", $APP.$cljs$cst$288$title$$, "Pigment", $cljs$cst$850$amount$$, 
6750, $cljs$cst$857$description$$, "Pigments for on-site casting and finishing work."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$589$group$$, "Materials", $APP.$cljs$cst$288$title$$, "Plaster", $cljs$cst$850$amount$$, 4750, $cljs$cst$857$description$$, "Plaster for on-site sculptural production."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$589$group$$, "Materials", $APP.$cljs$cst$288$title$$, "Supplies", $cljs$cst$850$amount$$, 4750, 
$cljs$cst$857$description$$, "Consumable supplies for ongoing studio activity."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$589$group$$, "Materials", $APP.$cljs$cst$288$title$$, "Crate Materials", $cljs$cst$850$amount$$, 7500, $cljs$cst$857$description$$, "Materials for crating artwork for return shipment."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$589$group$$, "Materials", $APP.$cljs$cst$288$title$$, "Packing Supplies", $cljs$cst$850$amount$$, 
2500, $cljs$cst$857$description$$, "Packing materials for securing artwork at close-out."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$589$group$$, "Materials", $APP.$cljs$cst$288$title$$, "Misc Materials", $cljs$cst$850$amount$$, 4250, $cljs$cst$857$description$$, "Miscellaneous materials and expendables for studio operations."], null)], null)], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$286$id$$, $cljs$cst$863$logistics$$, $APP.$cljs$cst$288$title$$, 
"Logistics \x26 Transport", $cljs$cst$857$description$$, "International and local transport under Biennale conditions: freight, insurance, port handling, lagoon barge transport, forklift operations, storage, and reverse logistics for return shipment.", $cljs$cst$851$details$$, new $APP.$cljs$core$PersistentVector$$(null, 17, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$589$group$$, "International Freight", $APP.$cljs$cst$288$title$$, 
"Ship LA → Venice", $cljs$cst$850$amount$$, 3E4, $cljs$cst$857$description$$, "International freight from Los Angeles to Venice for all crated artwork and materials."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$589$group$$, "International Freight", $APP.$cljs$cst$288$title$$, "Ship Venice → LA", $cljs$cst$850$amount$$, 3E4, $cljs$cst$857$description$$, "Return international freight from Venice to Los Angeles after close-out."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 
4, [$APP.$cljs$cst$589$group$$, "International Freight", $APP.$cljs$cst$288$title$$, "Transit Insurance", $cljs$cst$850$amount$$, 12E3, $cljs$cst$857$description$$, "Insurance coverage for artwork during international transit."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$589$group$$, "Install / Uninstall", $APP.$cljs$cst$288$title$$, "Installers (Venice)", $cljs$cst$850$amount$$, 7200, $cljs$cst$857$description$$, "Local Venice installation crew. 4 installers for on-site install."], 
null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$589$group$$, "Install / Uninstall", $APP.$cljs$cst$288$title$$, "Uninstallers (Venice)", $cljs$cst$850$amount$$, 9E3, $cljs$cst$857$description$$, "Local Venice de-installation crew. 5 uninstallers for close-out."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$589$group$$, "Local Transport", $APP.$cljs$cst$288$title$$, "Port Handling", $cljs$cst$850$amount$$, 2500, $cljs$cst$857$description$$, "Offloading crates at Venice port; includes terminal fees and labor."], 
null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$589$group$$, "Local Transport", $APP.$cljs$cst$288$title$$, "Barge (Port → Stor.)", $cljs$cst$850$amount$$, 3E3, $cljs$cst$857$description$$, "Lagoon barge transport for crates from port to storage facility."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$589$group$$, "Local Transport", $APP.$cljs$cst$288$title$$, "Trucking (Stor. → Venue)", $cljs$cst$850$amount$$, 1200, $cljs$cst$857$description$$, 
"Truck transport from storage depot to Biennale venue access point."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$589$group$$, "Local Transport", $APP.$cljs$cst$288$title$$, "Barge (Stor. → Venue)", $cljs$cst$850$amount$$, 3E3, $cljs$cst$857$description$$, "Barge shipping for crates/materials to venue area via Venice canals."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$589$group$$, "Local Transport", $APP.$cljs$cst$288$title$$, "Forklift \x26 Operator", 
$cljs$cst$850$amount$$, 1300, $cljs$cst$857$description$$, "Forklift + licensed operator for unloading/loading at venue. 2 days at $650/day."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$589$group$$, "Local Transport", $APP.$cljs$cst$288$title$$, "Handling Crew", $cljs$cst$850$amount$$, 500, $cljs$cst$857$description$$, "Movers for crate handling, navigation of canals and venue access."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$589$group$$, 
"Storage", $APP.$cljs$cst$288$title$$, "Short-Term Storage", $cljs$cst$850$amount$$, 1200, $cljs$cst$857$description$$, "Storage of crates between arrival and installation. 60 crates for 20 days."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$589$group$$, "Storage", $APP.$cljs$cst$288$title$$, "Empty Crate Storage", $cljs$cst$850$amount$$, 2E3, $cljs$cst$857$description$$, "Storage of empty crates during the Biennale exhibition run. 200 days."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 
4, [$APP.$cljs$cst$589$group$$, "Storage", $APP.$cljs$cst$288$title$$, "Waste Removal", $cljs$cst$850$amount$$, 1E3, $cljs$cst$857$description$$, "Removal of packing material, foam waste, and install debris."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$589$group$$, "Reverse Logistics", $APP.$cljs$cst$288$title$$, "Reverse Barge", $cljs$cst$850$amount$$, 3E3, $cljs$cst$857$description$$, "Return transport of crates/materials after uninstall."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 
4, [$APP.$cljs$cst$589$group$$, "Reverse Logistics", $APP.$cljs$cst$288$title$$, "Reverse Trucking", $cljs$cst$850$amount$$, 1200, $cljs$cst$857$description$$, "Transport of crates back to port for outbound shipping."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$589$group$$, "Reverse Logistics", $APP.$cljs$cst$288$title$$, "Reverse Port Handling", $cljs$cst$850$amount$$, 2500, $cljs$cst$857$description$$, "Terminal fees + labor for reloading outbound container."], null)], 
null)], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$286$id$$, $cljs$cst$864$opening$$, $APP.$cljs$cst$288$title$$, "Opening Week", $cljs$cst$857$description$$, "Opening reception and first public visibility of the Pavilion: hospitality, staffing, technical support, press and VIP coordination—executed during the Biennale's most compressed period.", $cljs$cst$851$details$$, new $APP.$cljs$core$PersistentVector$$(null, 11, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, 
[new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$589$group$$, "Hospitality", $APP.$cljs$cst$288$title$$, "Catering — Food", $cljs$cst$850$amount$$, 5250, $cljs$cst$857$description$$, "Passed hors d'oeuvres for opening night reception. 75 guests at $70/guest."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$589$group$$, "Hospitality", $APP.$cljs$cst$288$title$$, "Catering — Beverages", $cljs$cst$850$amount$$, 1500, $cljs$cst$857$description$$, "Prosecco, wine, and non-alcoholic drinks. 100 guests at $15/guest."], 
null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$589$group$$, "Hospitality", $APP.$cljs$cst$288$title$$, "Catering Staff", $cljs$cst$850$amount$$, 1500, $cljs$cst$857$description$$, "3–6 servers + 1 event captain for opening night."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$589$group$$, "Hospitality", $APP.$cljs$cst$288$title$$, "Rentals", $cljs$cst$850$amount$$, 1500, $cljs$cst$857$description$$, "Tables, linens, glassware; Venice incurs transport surcharges due to canals."], 
null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$589$group$$, "Event Ops", $APP.$cljs$cst$288$title$$, "Event Coordinator", $cljs$cst$850$amount$$, 1500, $cljs$cst$857$description$$, "Scheduling, setup, guest flow, liaising with pavilion staff and caterer."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$589$group$$, "Event Ops", $APP.$cljs$cst$288$title$$, "Security", $cljs$cst$850$amount$$, 800, $cljs$cst$857$description$$, "Safe capacity management at openings per Biennale requirements."], 
null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$589$group$$, "Event Ops", $APP.$cljs$cst$288$title$$, "Audio, Light \x26 Tech", $cljs$cst$850$amount$$, 1E3, $cljs$cst$857$description$$, "Small speaker system, microphone, ambient lighting reinforcement."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$589$group$$, "Event Ops", $APP.$cljs$cst$288$title$$, "Event Photography", $cljs$cst$850$amount$$, 500, $cljs$cst$857$description$$, "Opening night event photography coverage."], 
null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$589$group$$, "Event Ops", $APP.$cljs$cst$288$title$$, "Invitations", $cljs$cst$850$amount$$, 500, $cljs$cst$857$description$$, "Printing or premium digital distribution of invitations."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$589$group$$, "VIP Programs", $APP.$cljs$cst$288$title$$, "VIP Press Preview", $cljs$cst$850$amount$$, 1500, $cljs$cst$857$description$$, "Staff + scheduling for VIP/press walkthroughs during opening week."], 
null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$589$group$$, "VIP Programs", $APP.$cljs$cst$288$title$$, "VIP Water Taxi", $cljs$cst$850$amount$$, 1500, $cljs$cst$857$description$$, "Transport allowance for VIPs/officials. 8 rides at $120/ride."], null)], null)], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$286$id$$, $cljs$cst$865$marketing$$, $APP.$cljs$cst$288$title$$, "Marketing \x26 PR", $cljs$cst$857$description$$, "Visibility and communications: identity design, PR, advertising, social media, and press activity—positioning the Pavilion within the global Biennale discourse.", 
$cljs$cst$851$details$$, new $APP.$cljs$core$PersistentVector$$(null, 18, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$589$group$$, "Design", $APP.$cljs$cst$288$title$$, "Visual Identity", $cljs$cst$850$amount$$, 2500, $cljs$cst$857$description$$, "Design of pavilion identity, key visual and main poster."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$589$group$$, "Design", $APP.$cljs$cst$288$title$$, 
"Essentials Package", $cljs$cst$850$amount$$, 1500, $cljs$cst$857$description$$, "Press kit, invitations, social templates, digital ads."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$589$group$$, "Design", $APP.$cljs$cst$288$title$$, "Website \x26 Hosting", $cljs$cst$850$amount$$, 7500, $cljs$cst$857$description$$, "Design and hosting of the pavilion website."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$589$group$$, "Design", $APP.$cljs$cst$288$title$$, 
"OOH Design", $cljs$cst$850$amount$$, 1500, $cljs$cst$857$description$$, "Design for totems and out-of-home placements."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$589$group$$, "Design", $APP.$cljs$cst$288$title$$, "Exhibition Graphics", $cljs$cst$850$amount$$, 1500, $cljs$cst$857$description$$, "Entrance graphics, wall texts, wayfinding signage."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$589$group$$, "Writing", $APP.$cljs$cst$288$title$$, 
"Social Copywriting", $cljs$cst$850$amount$$, 1500, $cljs$cst$857$description$$, "Ongoing caption writing, messaging, narrative scripting."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$589$group$$, "Writing", $APP.$cljs$cst$288$title$$, "PR Writing", $cljs$cst$850$amount$$, 1500, $cljs$cst$857$description$$, "Speeches, press releases, media statements."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$589$group$$, "Advertising", $APP.$cljs$cst$288$title$$, 
"Totem Placement", $cljs$cst$850$amount$$, 8500, $cljs$cst$857$description$$, "Rental + printing + installation for Biennale duration."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$589$group$$, "Advertising", $APP.$cljs$cst$288$title$$, "Vaporetto Wraps", $cljs$cst$850$amount$$, 12500, $cljs$cst$857$description$$, "Rental + production for 2–3 vaporetto lines over Biennale duration."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$589$group$$, 
"Advertising", $APP.$cljs$cst$288$title$$, "Poster Printing", $cljs$cst$850$amount$$, 5E3, $cljs$cst$857$description$$, "250 posters at $20 each for venue and city placements."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$589$group$$, "Advertising", $APP.$cljs$cst$288$title$$, "Outdoor Posters", $cljs$cst$850$amount$$, 3E3, $cljs$cst$857$description$$, "Secondary placements across Venice — 50 posters at $60 each."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 
4, [$APP.$cljs$cst$589$group$$, "Advertising", $APP.$cljs$cst$288$title$$, "Social Media Ads", $cljs$cst$850$amount$$, 2500, $cljs$cst$857$description$$, "Instagram, Facebook, and TikTok ads for 7 months."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$589$group$$, "Advertising", $APP.$cljs$cst$288$title$$, "Social Campaign Mgmt", $cljs$cst$850$amount$$, 2500, $cljs$cst$857$description$$, "Strategy, posting, optimization, reporting."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 
4, [$APP.$cljs$cst$589$group$$, "Advertising", $APP.$cljs$cst$288$title$$, "Digital Pub Ads", $cljs$cst$850$amount$$, 2500, $cljs$cst$857$description$$, "Ads on e-flux, ArtNews, Hyperallergic, Frieze."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$589$group$$, "Advertising", $APP.$cljs$cst$288$title$$, "Print Pub Ads", $cljs$cst$850$amount$$, 5E3, $cljs$cst$857$description$$, "Artforum, Art Newspaper, and similar print publications."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 
4, [$APP.$cljs$cst$589$group$$, "PR", $APP.$cljs$cst$288$title$$, "PR — Pre-Opening", $cljs$cst$850$amount$$, 1500, $cljs$cst$857$description$$, "Press relations, writing, pitching, coordination."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$589$group$$, "PR", $APP.$cljs$cst$288$title$$, "PR — Ongoing", $cljs$cst$850$amount$$, 1500, $cljs$cst$857$description$$, "Sustained PR, press tracking, releases, interviews over 7 months."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 
4, [$APP.$cljs$cst$589$group$$, "PR", $APP.$cljs$cst$288$title$$, "Marketing Mgmt Fee", $cljs$cst$850$amount$$, 2500, $cljs$cst$857$description$$, "Overall coordination of marketing and media buys."], null)], null)], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$286$id$$, $cljs$cst$866$publication$$, $APP.$cljs$cst$288$title$$, "Publications", $cljs$cst$857$description$$, "Catalogue and printed materials: commissioned texts, design, editing, printing, totes, and stationery—ensuring long-term scholarly and institutional presence.", 
$cljs$cst$851$details$$, new $APP.$cljs$core$PersistentVector$$(null, 12, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$589$group$$, "Writing", $APP.$cljs$cst$288$title$$, "Curatorial Essay", $cljs$cst$850$amount$$, 2500, $cljs$cst$857$description$$, "Primary curatorial essay for catalogue and website."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$589$group$$, "Writing", $APP.$cljs$cst$288$title$$, 
"Catalogue Essays", $cljs$cst$850$amount$$, 4E3, $cljs$cst$857$description$$, "Commissioned essays by 4 invited writers and scholars at $1,000 each."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$589$group$$, "Catalogue", $APP.$cljs$cst$288$title$$, "Design", $cljs$cst$850$amount$$, 7500, $cljs$cst$857$description$$, "Design of exhibition catalogue (120 pages, soft cover)."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$589$group$$, "Catalogue", 
$APP.$cljs$cst$288$title$$, "Editing \x26 Layout", $cljs$cst$850$amount$$, 2500, $cljs$cst$857$description$$, "Editing and layout of copy, images, and inserts."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$589$group$$, "Catalogue", $APP.$cljs$cst$288$title$$, "Printing", $cljs$cst$850$amount$$, 12E3, $cljs$cst$857$description$$, "High-quality color printing, 120 pages. 150 copies at $80 each."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$589$group$$, 
"Catalogue", $APP.$cljs$cst$288$title$$, "Proofs \x26 Shipping", $cljs$cst$850$amount$$, 1E3, $cljs$cst$857$description$$, "Proofs, shipping, and miscellaneous printing costs."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$589$group$$, "Tote", $APP.$cljs$cst$288$title$$, "Design", $cljs$cst$850$amount$$, 2500, $cljs$cst$857$description$$, "Design of exhibition totes."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$589$group$$, "Tote", $APP.$cljs$cst$288$title$$, 
"Printing", $cljs$cst$850$amount$$, 4500, $cljs$cst$857$description$$, "High-quality silkscreen run. 300 totes at $15 each."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$589$group$$, "Tote", $APP.$cljs$cst$288$title$$, "Proofs \x26 Shipping", $cljs$cst$850$amount$$, 1E3, $cljs$cst$857$description$$, "Proofs, shipping, and miscellaneous costs for totes."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$589$group$$, "Stationery", $APP.$cljs$cst$288$title$$, 
"Design", $cljs$cst$850$amount$$, 1500, $cljs$cst$857$description$$, "Cards, postcards, flyers design."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$589$group$$, "Stationery", $APP.$cljs$cst$288$title$$, "Printing", $cljs$cst$850$amount$$, 1500, $cljs$cst$857$description$$, "300 pieces at $5 each."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$589$group$$, "Stationery", $APP.$cljs$cst$288$title$$, "Proofs \x26 Shipping", $cljs$cst$850$amount$$, 
250, $cljs$cst$857$description$$, "Proofs, shipping, and miscellaneous stationery costs."], null)], null)], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$286$id$$, $cljs$cst$867$documentation$$, $APP.$cljs$cst$288$title$$, "Documentation", $cljs$cst$857$description$$, "Comprehensive visual documentation: cinema-quality film production, photography, sound recording, editing, social media deliverables, and archiving—supporting press visibility, scholarship, and institutional legacy.", 
$cljs$cst$851$details$$, new $APP.$cljs$core$PersistentVector$$(null, 12, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$589$group$$, "Production", $APP.$cljs$cst$288$title$$, "Camera \x26 Lighting", $cljs$cst$850$amount$$, 1E4, $cljs$cst$857$description$$, "Rental package for cinema cameras, lenses, lighting, audio kits."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$589$group$$, "Production", $APP.$cljs$cst$288$title$$, 
"DPs ×2", $cljs$cst$850$amount$$, 20400, $cljs$cst$857$description$$, "Lead cinematographers for install, opening, and walkthroughs. 2 DPs × 12 days × $850/day."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$589$group$$, "Production", $APP.$cljs$cst$288$title$$, "Assistant / Gaffer", $cljs$cst$850$amount$$, 4500, $cljs$cst$857$description$$, "Lighting and camera support during shoots. 10 days at $450/day."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$589$group$$, 
"Production", $APP.$cljs$cst$288$title$$, "Sound Recording", $cljs$cst$850$amount$$, 2800, $cljs$cst$857$description$$, "Location audio capture, ambient sound, dialogue. 8 days at $350/day."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$589$group$$, "Production", $APP.$cljs$cst$288$title$$, "Photo — Install", $cljs$cst$850$amount$$, 1750, $cljs$cst$857$description$$, "High-resolution documentation during installation. 5 days at $350/day."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 
4, [$APP.$cljs$cst$589$group$$, "Production", $APP.$cljs$cst$288$title$$, "Photo — Exhibition", $cljs$cst$850$amount$$, 1800, $cljs$cst$857$description$$, "Final artwork + pavilion architecture photography. 3 days at $600/day."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$589$group$$, "Production", $APP.$cljs$cst$288$title$$, "Photo — Opening", $cljs$cst$850$amount$$, 1400, $cljs$cst$857$description$$, "Coverage for VIP events, public programs, press preview. 2 days at $700/day."], 
null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$589$group$$, "Post", $APP.$cljs$cst$288$title$$, "Film Assembly", $cljs$cst$850$amount$$, 3E3, $cljs$cst$857$description$$, "Initial cut of installation and exhibition film. 6 days at $500/day."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$589$group$$, "Post", $APP.$cljs$cst$288$title$$, "Final Cut \x26 Color", $cljs$cst$850$amount$$, 2400, $cljs$cst$857$description$$, "Professional colorist and finishing for final delivery. 4 days at $600/day."], 
null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$589$group$$, "Post", $APP.$cljs$cst$288$title$$, "Sound Edit \x26 Mix", $cljs$cst$850$amount$$, 1600, $cljs$cst$857$description$$, "Cleanup, music integration, final audio polish. 4 days at $400/day."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$589$group$$, "Post", $APP.$cljs$cst$288$title$$, "Social Deliverables", $cljs$cst$850$amount$$, 6E3, $cljs$cst$857$description$$, "Short-form clips optimized for IG/FB/TikTok. 5 days at $1,200/day."], 
null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$589$group$$, "Post", $APP.$cljs$cst$288$title$$, "Backup \x26 Archive", $cljs$cst$850$amount$$, 750, $cljs$cst$857$description$$, "Redundancy, hard drives, digital archiving of all materials."], null)], null)], null)], null);
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$303$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$304$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$pages$budget$cost_breakdown$preview$$, "", null, null) : (void 0).call(null, $amp$pages$budget$cost_breakdown$preview$$, "", null, null)), $APP.$helix$core$register_BANG_$$($amp$pages$budget$cost_breakdown$preview$$, 
"amp.pages.budget.cost-breakdown/preview"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$303$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$304$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$pages$budget$cost_breakdown$details$$, "", null, null) : (void 0).call(null, $amp$pages$budget$cost_breakdown$details$$, "", null, null)), $APP.$helix$core$register_BANG_$$($amp$pages$budget$cost_breakdown$details$$, 
"amp.pages.budget.cost-breakdown/details"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$303$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$304$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$pages$budget$cost_breakdown$footer$$, "", null, null) : (void 0).call(null, $amp$pages$budget$cost_breakdown$footer$$, "", null, null)), $APP.$helix$core$register_BANG_$$($amp$pages$budget$cost_breakdown$footer$$, 
"amp.pages.budget.cost-breakdown/footer"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$303$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$304$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$pages$budget$cost_breakdown$cost_breakdown$$, "", null, null) : (void 0).call(null, $amp$pages$budget$cost_breakdown$cost_breakdown$$, "", null, null)), 
$APP.$helix$core$register_BANG_$$($amp$pages$budget$cost_breakdown$cost_breakdown$$, "amp.pages.budget.cost-breakdown/cost-breakdown"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$303$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$304$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$pages$budget$location$preview_text$$, "", null, null) : (void 0).call(null, $amp$pages$budget$location$preview_text$$, "", null, null)), $APP.$helix$core$register_BANG_$$($amp$pages$budget$location$preview_text$$, 
"amp.pages.budget.location/preview-text"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$303$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$304$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$pages$budget$location$preview$$, "", null, null) : (void 0).call(null, $amp$pages$budget$location$preview$$, "", null, null)), $APP.$helix$core$register_BANG_$$($amp$pages$budget$location$preview$$, 
"amp.pages.budget.location/preview"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$303$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$304$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$pages$budget$location$full_details$$, "(use-touch-enabled)", null, null) : (void 0).call(null, $amp$pages$budget$location$full_details$$, "(use-touch-enabled)", 
null, null)), $APP.$helix$core$register_BANG_$$($amp$pages$budget$location$full_details$$, "amp.pages.budget.location/full-details"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$303$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$304$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$pages$budget$location$location_section$$, "", null, null) : (void 0).call(null, $amp$pages$budget$location$location_section$$, "", null, null)), $APP.$helix$core$register_BANG_$$($amp$pages$budget$location$location_section$$, 
"amp.pages.budget.location/location-section"));
var $amp$pages$budget$cash_flow$cashflow_data$$ = new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$cljs$cst$868$debt_raised$$, 0, $cljs$cst$869$funds_raised$$, 175000, $cljs$cst$870$cash_flow_model$$, $APP.$cljs$core$PersistentVector$fromArray$$([new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$286$id$$, $cljs$cst$871$admin_jul_25$$, $APP.$cljs$cst$288$title$$, "Admin — Core Team (Jul)", $cljs$cst$872$due$$, "2025-07-15", $cljs$cst$850$amount$$, 10000, $cljs$cst$873$priority$$, 
$cljs$cst$874$normal$$, $APP.$cljs$cst$12$status$$, $cljs$cst$875$paid$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$286$id$$, $cljs$cst$876$contingency_jul_25$$, $APP.$cljs$cst$288$title$$, "Contingency (Jul)", $cljs$cst$872$due$$, "2025-07-20", $cljs$cst$850$amount$$, 500, $cljs$cst$873$priority$$, $cljs$cst$874$normal$$, $APP.$cljs$cst$12$status$$, $cljs$cst$875$paid$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$286$id$$, $cljs$cst$877$admin_aug_25$$, 
$APP.$cljs$cst$288$title$$, "Admin — Core Team (Aug)", $cljs$cst$872$due$$, "2025-08-15", $cljs$cst$850$amount$$, 10000, $cljs$cst$873$priority$$, $cljs$cst$874$normal$$, $APP.$cljs$cst$12$status$$, $cljs$cst$875$paid$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$286$id$$, $cljs$cst$878$contingency_aug_25$$, $APP.$cljs$cst$288$title$$, "Contingency (Aug)", $cljs$cst$872$due$$, "2025-08-20", $cljs$cst$850$amount$$, 500, $cljs$cst$873$priority$$, $cljs$cst$874$normal$$, 
$APP.$cljs$cst$12$status$$, $cljs$cst$875$paid$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$286$id$$, $cljs$cst$879$venice_sep_25$$, $APP.$cljs$cst$288$title$$, "Venice — Lodging \x26 Per Diem (Sep)", $cljs$cst$872$due$$, "2025-09-05", $cljs$cst$850$amount$$, 13000, $cljs$cst$873$priority$$, $cljs$cst$874$normal$$, $APP.$cljs$cst$12$status$$, $cljs$cst$875$paid$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$286$id$$, $cljs$cst$880$admin_sep_25$$, 
$APP.$cljs$cst$288$title$$, "Admin — Core Team + Travel (Sep)", $cljs$cst$872$due$$, "2025-09-15", $cljs$cst$850$amount$$, 20000, $cljs$cst$873$priority$$, $cljs$cst$881$high$$, $APP.$cljs$cst$12$status$$, $cljs$cst$875$paid$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$286$id$$, $cljs$cst$882$contingency_sep_25$$, $APP.$cljs$cst$288$title$$, "Contingency (Sep)", $cljs$cst$872$due$$, "2025-09-20", $cljs$cst$850$amount$$, 650, $cljs$cst$873$priority$$, $cljs$cst$874$normal$$, 
$APP.$cljs$cst$12$status$$, $cljs$cst$875$paid$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$286$id$$, $cljs$cst$883$venice_oct_25$$, $APP.$cljs$cst$288$title$$, "Venice — Lodging \x26 Per Diem (Oct)", $cljs$cst$872$due$$, "2025-10-05", $cljs$cst$850$amount$$, 13E3, $cljs$cst$873$priority$$, $cljs$cst$874$normal$$, $APP.$cljs$cst$12$status$$, $cljs$cst$875$paid$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$286$id$$, $cljs$cst$884$admin_oct_25$$, 
$APP.$cljs$cst$288$title$$, "Admin — Core Team + Travel (Oct)", $cljs$cst$872$due$$, "2025-10-15", $cljs$cst$850$amount$$, 2E4, $cljs$cst$873$priority$$, $cljs$cst$881$high$$, $APP.$cljs$cst$12$status$$, $cljs$cst$875$paid$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$286$id$$, $cljs$cst$885$contingency_oct_25$$, $APP.$cljs$cst$288$title$$, "Contingency (Oct)", $cljs$cst$872$due$$, "2025-10-20", $cljs$cst$850$amount$$, 650, $cljs$cst$873$priority$$, $cljs$cst$874$normal$$, 
$APP.$cljs$cst$12$status$$, $cljs$cst$875$paid$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$286$id$$, $cljs$cst$886$la_nov_25$$, $APP.$cljs$cst$288$title$$, "LA Production — Phase 1 Startup (Nov)", $cljs$cst$872$due$$, "2025-11-10", $cljs$cst$850$amount$$, 31325, $cljs$cst$873$priority$$, $cljs$cst$881$high$$, $APP.$cljs$cst$12$status$$, $cljs$cst$875$paid$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$286$id$$, $cljs$cst$887$admin_nov_25$$, 
$APP.$cljs$cst$288$title$$, "Admin — Core Team (Nov)", $cljs$cst$872$due$$, "2025-11-15", $cljs$cst$850$amount$$, 1E4, $cljs$cst$873$priority$$, $cljs$cst$874$normal$$, $APP.$cljs$cst$12$status$$, $cljs$cst$875$paid$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$286$id$$, $cljs$cst$888$contingency_nov_25$$, $APP.$cljs$cst$288$title$$, "Contingency (Nov)", $cljs$cst$872$due$$, "2025-11-20", $cljs$cst$850$amount$$, 1566, $cljs$cst$873$priority$$, $cljs$cst$874$normal$$, 
$APP.$cljs$cst$12$status$$, $cljs$cst$875$paid$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$286$id$$, $cljs$cst$889$la_dec_25$$, $APP.$cljs$cst$288$title$$, "LA Production — Phase 1 Continued (Dec)", $cljs$cst$872$due$$, "2025-12-10", $cljs$cst$850$amount$$, 31325, $cljs$cst$873$priority$$, $cljs$cst$881$high$$, $APP.$cljs$cst$12$status$$, $cljs$cst$875$paid$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$286$id$$, $cljs$cst$890$admin_dec_25$$, 
$APP.$cljs$cst$288$title$$, "Admin — Core Team (Dec)", $cljs$cst$872$due$$, "2025-12-15", $cljs$cst$850$amount$$, 1E4, $cljs$cst$873$priority$$, $cljs$cst$874$normal$$, $APP.$cljs$cst$12$status$$, $cljs$cst$875$paid$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$286$id$$, $cljs$cst$891$contingency_dec_25$$, $APP.$cljs$cst$288$title$$, "Contingency (Dec)", $cljs$cst$872$due$$, "2025-12-20", $cljs$cst$850$amount$$, 1566, $cljs$cst$873$priority$$, $cljs$cst$874$normal$$, 
$APP.$cljs$cst$12$status$$, $cljs$cst$875$paid$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$286$id$$, $cljs$cst$892$venice_jan_26$$, $APP.$cljs$cst$288$title$$, "Venice — Venue Tranche 1 (10%)", $cljs$cst$872$due$$, "2026-01-05", $cljs$cst$850$amount$$, 30650, $cljs$cst$873$priority$$, $cljs$cst$893$critical$$, $APP.$cljs$cst$12$status$$, $cljs$cst$875$paid$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$286$id$$, $cljs$cst$894$la_jan_26$$, 
$APP.$cljs$cst$288$title$$, "LA Production — Phase 2 (Jan)", $cljs$cst$872$due$$, "2026-01-10", $cljs$cst$850$amount$$, 30325, $cljs$cst$873$priority$$, $cljs$cst$881$high$$, $APP.$cljs$cst$12$status$$, $cljs$cst$875$paid$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$286$id$$, $cljs$cst$895$admin_jan_26$$, $APP.$cljs$cst$288$title$$, "Admin — Core Team (Jan)", $cljs$cst$872$due$$, "2026-01-15", $cljs$cst$850$amount$$, 1E4, $cljs$cst$873$priority$$, $cljs$cst$874$normal$$, 
$APP.$cljs$cst$12$status$$, $cljs$cst$875$paid$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$286$id$$, $cljs$cst$896$contingency_jan_26$$, $APP.$cljs$cst$288$title$$, "Contingency (Jan)", $cljs$cst$872$due$$, "2026-01-20", $cljs$cst$850$amount$$, 3049, $cljs$cst$873$priority$$, $cljs$cst$874$normal$$, $APP.$cljs$cst$12$status$$, $cljs$cst$875$paid$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$286$id$$, $cljs$cst$897$venice_feb_26$$, $APP.$cljs$cst$288$title$$, 
"Venice — Venue Tranche 2 + 3 (60%)", $cljs$cst$872$due$$, "2026-02-05", $cljs$cst$850$amount$$, 183900, $cljs$cst$873$priority$$, $cljs$cst$893$critical$$, $APP.$cljs$cst$12$status$$, $APP.$cljs$cst$14$pending$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$286$id$$, $cljs$cst$898$la_feb_26$$, $APP.$cljs$cst$288$title$$, "LA Production — Phase 3 (Feb)", $cljs$cst$872$due$$, "2026-02-10", $cljs$cst$850$amount$$, 74825, $cljs$cst$873$priority$$, $cljs$cst$893$critical$$, 
$APP.$cljs$cst$12$status$$, $APP.$cljs$cst$14$pending$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$286$id$$, $cljs$cst$899$admin_feb_26$$, $APP.$cljs$cst$288$title$$, "Admin — Core Team + Misc (Feb)", $cljs$cst$872$due$$, "2026-02-15", $cljs$cst$850$amount$$, 10500, $cljs$cst$873$priority$$, $cljs$cst$881$high$$, $APP.$cljs$cst$12$status$$, $APP.$cljs$cst$14$pending$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$286$id$$, $cljs$cst$900$contingency_feb_26$$, 
$APP.$cljs$cst$288$title$$, "Contingency (Feb)", $cljs$cst$872$due$$, "2026-02-20", $cljs$cst$850$amount$$, 12936, $cljs$cst$873$priority$$, $cljs$cst$874$normal$$, $APP.$cljs$cst$12$status$$, $APP.$cljs$cst$14$pending$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$286$id$$, $cljs$cst$901$venice_mar_26$$, $APP.$cljs$cst$288$title$$, "Venice — Venue Tranche 4 + Logistics (Outbound) + Setup", $cljs$cst$872$due$$, "2026-03-05", $cljs$cst$850$amount$$, 172200, $cljs$cst$873$priority$$, 
$cljs$cst$893$critical$$, $APP.$cljs$cst$12$status$$, $APP.$cljs$cst$14$pending$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$286$id$$, $cljs$cst$902$la_mar_26$$, $APP.$cljs$cst$288$title$$, "LA Production — Final Phase + Crating (Mar)", $cljs$cst$872$due$$, "2026-03-10", $cljs$cst$850$amount$$, 97325, $cljs$cst$873$priority$$, $cljs$cst$893$critical$$, $APP.$cljs$cst$12$status$$, $APP.$cljs$cst$14$pending$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, 
[$APP.$cljs$cst$286$id$$, $cljs$cst$903$admin_mar_26$$, $APP.$cljs$cst$288$title$$, "Admin — Core Team + Misc (Mar)", $cljs$cst$872$due$$, "2026-03-15", $cljs$cst$850$amount$$, 10500, $cljs$cst$873$priority$$, $cljs$cst$881$high$$, $APP.$cljs$cst$12$status$$, $APP.$cljs$cst$14$pending$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$286$id$$, $cljs$cst$904$contingency_mar_26$$, $APP.$cljs$cst$288$title$$, "Contingency (Mar)", $cljs$cst$872$due$$, "2026-03-20", $cljs$cst$850$amount$$, 
13476, $cljs$cst$873$priority$$, $cljs$cst$874$normal$$, $APP.$cljs$cst$12$status$$, $APP.$cljs$cst$14$pending$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$286$id$$, $cljs$cst$905$venice_apr_26$$, $APP.$cljs$cst$288$title$$, "Venice — Opening Month + Studio Launch + Operations", $cljs$cst$872$due$$, "2026-04-05", $cljs$cst$850$amount$$, 110267, $cljs$cst$873$priority$$, $cljs$cst$893$critical$$, $APP.$cljs$cst$12$status$$, $APP.$cljs$cst$14$pending$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 
6, [$APP.$cljs$cst$286$id$$, $cljs$cst$906$admin_apr_26$$, $APP.$cljs$cst$288$title$$, "Admin — Core Team + Travel + Lodging (Apr)", $cljs$cst$872$due$$, "2026-04-15", $cljs$cst$850$amount$$, 33E3, $cljs$cst$873$priority$$, $cljs$cst$881$high$$, $APP.$cljs$cst$12$status$$, $APP.$cljs$cst$14$pending$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$286$id$$, $cljs$cst$907$contingency_apr_26$$, $APP.$cljs$cst$288$title$$, "Contingency (Apr)", $cljs$cst$872$due$$, "2026-04-20", 
$cljs$cst$850$amount$$, 5513, $cljs$cst$873$priority$$, $cljs$cst$874$normal$$, $APP.$cljs$cst$12$status$$, $APP.$cljs$cst$14$pending$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$286$id$$, $cljs$cst$908$venice_may_26$$, $APP.$cljs$cst$288$title$$, "Venice — Studio + Operations (May)", $cljs$cst$872$due$$, "2026-05-05", $cljs$cst$850$amount$$, 53717, $cljs$cst$873$priority$$, $cljs$cst$874$normal$$, $APP.$cljs$cst$12$status$$, $APP.$cljs$cst$14$pending$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 
6, [$APP.$cljs$cst$286$id$$, $cljs$cst$909$admin_may_26$$, $APP.$cljs$cst$288$title$$, "Admin — Core Team + Misc (May)", $cljs$cst$872$due$$, "2026-05-15", $cljs$cst$850$amount$$, 10500, $cljs$cst$873$priority$$, $cljs$cst$874$normal$$, $APP.$cljs$cst$12$status$$, $APP.$cljs$cst$14$pending$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$286$id$$, $cljs$cst$910$contingency_may_26$$, $APP.$cljs$cst$288$title$$, "Contingency (May)", $cljs$cst$872$due$$, "2026-05-20", $cljs$cst$850$amount$$, 
2686, $cljs$cst$873$priority$$, $cljs$cst$874$normal$$, $APP.$cljs$cst$12$status$$, $APP.$cljs$cst$14$pending$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$286$id$$, $cljs$cst$911$venice_jun_26$$, $APP.$cljs$cst$288$title$$, "Venice — Studio + Operations + Catalogue (Jun)", $cljs$cst$872$due$$, "2026-06-05", $cljs$cst$850$amount$$, 94467, $cljs$cst$873$priority$$, $cljs$cst$881$high$$, $APP.$cljs$cst$12$status$$, $APP.$cljs$cst$14$pending$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 
6, [$APP.$cljs$cst$286$id$$, $cljs$cst$912$admin_jun_26$$, $APP.$cljs$cst$288$title$$, "Admin — Core Team + Travel + Misc (Jun)", $cljs$cst$872$due$$, "2026-06-15", $cljs$cst$850$amount$$, 12500, $cljs$cst$873$priority$$, $cljs$cst$874$normal$$, $APP.$cljs$cst$12$status$$, $APP.$cljs$cst$14$pending$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$286$id$$, $cljs$cst$913$contingency_jun_26$$, $APP.$cljs$cst$288$title$$, "Contingency (Jun)", $cljs$cst$872$due$$, "2026-06-20", 
$cljs$cst$850$amount$$, 4723, $cljs$cst$873$priority$$, $cljs$cst$874$normal$$, $APP.$cljs$cst$12$status$$, $APP.$cljs$cst$14$pending$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$286$id$$, $cljs$cst$914$venice_jul_26$$, $APP.$cljs$cst$288$title$$, "Venice — Studio + Operations (Jul)", $cljs$cst$872$due$$, "2026-07-05", $cljs$cst$850$amount$$, 53717, $cljs$cst$873$priority$$, $cljs$cst$874$normal$$, $APP.$cljs$cst$12$status$$, $APP.$cljs$cst$14$pending$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 
6, [$APP.$cljs$cst$286$id$$, $cljs$cst$915$admin_jul_26$$, $APP.$cljs$cst$288$title$$, "Admin — Core Team + Misc (Jul)", $cljs$cst$872$due$$, "2026-07-15", $cljs$cst$850$amount$$, 10500, $cljs$cst$873$priority$$, $cljs$cst$874$normal$$, $APP.$cljs$cst$12$status$$, $APP.$cljs$cst$14$pending$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$286$id$$, $cljs$cst$916$contingency_jul_26$$, $APP.$cljs$cst$288$title$$, "Contingency (Jul)", $cljs$cst$872$due$$, "2026-07-20", $cljs$cst$850$amount$$, 
2686, $cljs$cst$873$priority$$, $cljs$cst$874$normal$$, $APP.$cljs$cst$12$status$$, $APP.$cljs$cst$14$pending$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$286$id$$, $cljs$cst$917$venice_aug_26$$, $APP.$cljs$cst$288$title$$, "Venice — Studio + Operations (Aug)", $cljs$cst$872$due$$, "2026-08-05", $cljs$cst$850$amount$$, 53717, $cljs$cst$873$priority$$, $cljs$cst$874$normal$$, $APP.$cljs$cst$12$status$$, $APP.$cljs$cst$14$pending$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 
6, [$APP.$cljs$cst$286$id$$, $cljs$cst$918$admin_aug_26$$, $APP.$cljs$cst$288$title$$, "Admin — Core Team + Misc (Aug)", $cljs$cst$872$due$$, "2026-08-15", $cljs$cst$850$amount$$, 10500, $cljs$cst$873$priority$$, $cljs$cst$874$normal$$, $APP.$cljs$cst$12$status$$, $APP.$cljs$cst$14$pending$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$286$id$$, $cljs$cst$919$contingency_aug_26$$, $APP.$cljs$cst$288$title$$, "Contingency (Aug)", $cljs$cst$872$due$$, "2026-08-20", $cljs$cst$850$amount$$, 
2686, $cljs$cst$873$priority$$, $cljs$cst$874$normal$$, $APP.$cljs$cst$12$status$$, $APP.$cljs$cst$14$pending$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$286$id$$, $cljs$cst$920$venice_sep_26$$, $APP.$cljs$cst$288$title$$, "Venice — Studio + Operations (Sep)", $cljs$cst$872$due$$, "2026-09-05", $cljs$cst$850$amount$$, 53717, $cljs$cst$873$priority$$, $cljs$cst$874$normal$$, $APP.$cljs$cst$12$status$$, $APP.$cljs$cst$14$pending$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 
6, [$APP.$cljs$cst$286$id$$, $cljs$cst$921$admin_sep_26$$, $APP.$cljs$cst$288$title$$, "Admin — Core Team + Travel + Misc (Sep)", $cljs$cst$872$due$$, "2026-09-15", $cljs$cst$850$amount$$, 12500, $cljs$cst$873$priority$$, $cljs$cst$874$normal$$, $APP.$cljs$cst$12$status$$, $APP.$cljs$cst$14$pending$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$286$id$$, $cljs$cst$922$contingency_sep_26$$, $APP.$cljs$cst$288$title$$, "Contingency (Sep)", $cljs$cst$872$due$$, "2026-09-20", 
$cljs$cst$850$amount$$, 2686, $cljs$cst$873$priority$$, $cljs$cst$874$normal$$, $APP.$cljs$cst$12$status$$, $APP.$cljs$cst$14$pending$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$286$id$$, $cljs$cst$923$venice_oct_26$$, $APP.$cljs$cst$288$title$$, "Venice — Studio + Operations (Oct)", $cljs$cst$872$due$$, "2026-10-05", $cljs$cst$850$amount$$, 42217, $cljs$cst$873$priority$$, $cljs$cst$874$normal$$, $APP.$cljs$cst$12$status$$, $APP.$cljs$cst$14$pending$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 
6, [$APP.$cljs$cst$286$id$$, $cljs$cst$924$admin_oct_26$$, $APP.$cljs$cst$288$title$$, "Admin — Core Team + Misc (Oct)", $cljs$cst$872$due$$, "2026-10-15", $cljs$cst$850$amount$$, 10500, $cljs$cst$873$priority$$, $cljs$cst$874$normal$$, $APP.$cljs$cst$12$status$$, $APP.$cljs$cst$14$pending$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$286$id$$, $cljs$cst$925$contingency_oct_26$$, $APP.$cljs$cst$288$title$$, "Contingency (Oct)", $cljs$cst$872$due$$, "2026-10-20", $cljs$cst$850$amount$$, 
2111, $cljs$cst$873$priority$$, $cljs$cst$874$normal$$, $APP.$cljs$cst$12$status$$, $APP.$cljs$cst$14$pending$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$286$id$$, $cljs$cst$926$venice_nov_26$$, $APP.$cljs$cst$288$title$$, "Venice — Studio + Operations (Nov)", $cljs$cst$872$due$$, "2026-11-05", $cljs$cst$850$amount$$, 42217, $cljs$cst$873$priority$$, $cljs$cst$874$normal$$, $APP.$cljs$cst$12$status$$, $APP.$cljs$cst$14$pending$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 
6, [$APP.$cljs$cst$286$id$$, $cljs$cst$927$admin_nov_26$$, $APP.$cljs$cst$288$title$$, "Admin — Core Team + Misc (Nov)", $cljs$cst$872$due$$, "2026-11-15", $cljs$cst$850$amount$$, 10500, $cljs$cst$873$priority$$, $cljs$cst$874$normal$$, $APP.$cljs$cst$12$status$$, $APP.$cljs$cst$14$pending$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$286$id$$, $cljs$cst$928$contingency_nov_26$$, $APP.$cljs$cst$288$title$$, "Contingency (Nov)", $cljs$cst$872$due$$, "2026-11-20", $cljs$cst$850$amount$$, 
2111, $cljs$cst$873$priority$$, $cljs$cst$874$normal$$, $APP.$cljs$cst$12$status$$, $APP.$cljs$cst$14$pending$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$286$id$$, $cljs$cst$929$venice_dec_26$$, $APP.$cljs$cst$288$title$$, "Venice — Close-out + Logistics (Return)", $cljs$cst$872$due$$, "2026-12-05", $cljs$cst$850$amount$$, 134517, $cljs$cst$873$priority$$, $cljs$cst$881$high$$, $APP.$cljs$cst$12$status$$, $APP.$cljs$cst$14$pending$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 
6, [$APP.$cljs$cst$286$id$$, $cljs$cst$930$admin_dec_26$$, $APP.$cljs$cst$288$title$$, "Admin — Core Team + Travel + Misc (Dec)", $cljs$cst$872$due$$, "2026-12-15", $cljs$cst$850$amount$$, 20500, $cljs$cst$873$priority$$, $cljs$cst$881$high$$, $APP.$cljs$cst$12$status$$, $APP.$cljs$cst$14$pending$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$286$id$$, $cljs$cst$931$contingency_dec_26$$, $APP.$cljs$cst$288$title$$, "Contingency (Dec)", $cljs$cst$872$due$$, "2026-12-20", 
$cljs$cst$850$amount$$, 6726, $cljs$cst$873$priority$$, $cljs$cst$874$normal$$, $APP.$cljs$cst$12$status$$, $APP.$cljs$cst$14$pending$$], null)], !0)], null);
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$303$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$304$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$pages$budget$cash_flow$timeline_node$$, '(hooks/use-ref nil)(hooks/use-effect :once (when (clojure.core/deref node-ref) (.fromTo gsap (clojure.core/deref node-ref) {:opacity 0, :x -20} {:opacity 1, :x 0, :duration 0.4, :delay (* idx 0.06), :ease "power2.out"})))', 
null, null) : (void 0).call(null, $amp$pages$budget$cash_flow$timeline_node$$, '(hooks/use-ref nil)(hooks/use-effect :once (when (clojure.core/deref node-ref) (.fromTo gsap (clojure.core/deref node-ref) {:opacity 0, :x -20} {:opacity 1, :x 0, :duration 0.4, :delay (* idx 0.06), :ease "power2.out"})))', null, null)), $APP.$helix$core$register_BANG_$$($amp$pages$budget$cash_flow$timeline_node$$, "amp.pages.budget.cash-flow/timeline-node"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$303$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$304$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$pages$budget$cash_flow$now_marker$$, '(hooks/use-ref nil)(hooks/use-effect :once (when (clojure.core/deref ref) (.fromTo gsap (clojure.core/deref ref) {:opacity 0, :scaleX 0} {:opacity 1, :scaleX 1, :duration 0.6, :delay 0.2, :ease "power3.out"})))', 
null, null) : (void 0).call(null, $amp$pages$budget$cash_flow$now_marker$$, '(hooks/use-ref nil)(hooks/use-effect :once (when (clojure.core/deref ref) (.fromTo gsap (clojure.core/deref ref) {:opacity 0, :scaleX 0} {:opacity 1, :scaleX 1, :duration 0.6, :delay 0.2, :ease "power3.out"})))', null, null)), $APP.$helix$core$register_BANG_$$($amp$pages$budget$cash_flow$now_marker$$, "amp.pages.budget.cash-flow/now-marker"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$303$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$304$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$pages$budget$cash_flow$month_header$$, '(hooks/use-ref nil)(hooks/use-effect :once (when (clojure.core/deref ref) (.fromTo gsap (clojure.core/deref ref) {:opacity 0, :y 8} {:opacity 1, :y 0, :duration 0.35, :delay (+ 0.1 (* idx 0.05)), :ease "power2.out"})))', 
null, null) : (void 0).call(null, $amp$pages$budget$cash_flow$month_header$$, '(hooks/use-ref nil)(hooks/use-effect :once (when (clojure.core/deref ref) (.fromTo gsap (clojure.core/deref ref) {:opacity 0, :y 8} {:opacity 1, :y 0, :duration 0.35, :delay (+ 0.1 (* idx 0.05)), :ease "power2.out"})))', null, null)), $APP.$helix$core$register_BANG_$$($amp$pages$budget$cash_flow$month_header$$, "amp.pages.budget.cash-flow/month-header"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$303$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$304$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$pages$budget$cash_flow$month_summary_row$$, '(hooks/use-ref nil)(hooks/use-effect :once (when (clojure.core/deref ref) (.fromTo gsap (clojure.core/deref ref) {:opacity 0, :x -16} {:opacity 1, :x 0, :duration 0.35, :delay (* idx 0.05), :ease "power2.out"})))', 
null, null) : (void 0).call(null, $amp$pages$budget$cash_flow$month_summary_row$$, '(hooks/use-ref nil)(hooks/use-effect :once (when (clojure.core/deref ref) (.fromTo gsap (clojure.core/deref ref) {:opacity 0, :x -16} {:opacity 1, :x 0, :duration 0.35, :delay (* idx 0.05), :ease "power2.out"})))', null, null)), $APP.$helix$core$register_BANG_$$($amp$pages$budget$cash_flow$month_summary_row$$, "amp.pages.budget.cash-flow/month-summary-row"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$303$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$304$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$pages$budget$cash_flow$view_toggle$$, "", null, null) : (void 0).call(null, $amp$pages$budget$cash_flow$view_toggle$$, "", null, null)), $APP.$helix$core$register_BANG_$$($amp$pages$budget$cash_flow$view_toggle$$, 
"amp.pages.budget.cash-flow/view-toggle"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$303$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$304$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$pages$budget$cash_flow$summary_header$$, '(hooks/use-ref nil)(hooks/use-effect :once (when (clojure.core/deref ref) (.fromTo gsap (clojure.core/deref ref) {:opacity 0, :y -12} {:opacity 1, :y 0, :duration 0.5, :ease "power2.out"})))', 
null, null) : (void 0).call(null, $amp$pages$budget$cash_flow$summary_header$$, '(hooks/use-ref nil)(hooks/use-effect :once (when (clojure.core/deref ref) (.fromTo gsap (clojure.core/deref ref) {:opacity 0, :y -12} {:opacity 1, :y 0, :duration 0.5, :ease "power2.out"})))', null, null)), $APP.$helix$core$register_BANG_$$($amp$pages$budget$cash_flow$summary_header$$, "amp.pages.budget.cash-flow/summary-header"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$303$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$304$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$pages$budget$cash_flow$cash_flow$$, '(hooks/use-state nil)(hooks/use-state false)(hooks/use-ref nil)(hooks/use-effect [entries] (when (and entries (clojure.core/deref container-ref)) (let [spine (.querySelector (clojure.core/deref container-ref) ".cf-spine")] (when spine (.fromTo gsap spine {:scaleY 0} {:scaleY 1, :duration 0.8, :delay 0.05, :ease "power3.out"})))))', 
null, null) : (void 0).call(null, $amp$pages$budget$cash_flow$cash_flow$$, '(hooks/use-state nil)(hooks/use-state false)(hooks/use-ref nil)(hooks/use-effect [entries] (when (and entries (clojure.core/deref container-ref)) (let [spine (.querySelector (clojure.core/deref container-ref) ".cf-spine")] (when spine (.fromTo gsap spine {:scaleY 0} {:scaleY 1, :duration 0.8, :delay 0.05, :ease "power3.out"})))))', null, null)), $APP.$helix$core$register_BANG_$$($amp$pages$budget$cash_flow$cash_flow$$, "amp.pages.budget.cash-flow/cash-flow"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$303$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$304$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$pages$budget$non_profit$transfer_field$$, "", null, null) : (void 0).call(null, $amp$pages$budget$non_profit$transfer_field$$, "", null, null)), $APP.$helix$core$register_BANG_$$($amp$pages$budget$non_profit$transfer_field$$, 
"amp.pages.budget.non-profit/transfer-field"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$303$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$304$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$pages$budget$non_profit$transfer_card$$, "", null, null) : (void 0).call(null, $amp$pages$budget$non_profit$transfer_card$$, "", null, null)), $APP.$helix$core$register_BANG_$$($amp$pages$budget$non_profit$transfer_card$$, 
"amp.pages.budget.non-profit/transfer-card"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$303$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$304$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$pages$budget$non_profit$non_profit$$, "", null, null) : (void 0).call(null, $amp$pages$budget$non_profit$non_profit$$, "", null, null)), $APP.$helix$core$register_BANG_$$($amp$pages$budget$non_profit$non_profit$$, 
"amp.pages.budget.non-profit/non-profit"));
var $amp$pages$budget$sponsors$sponsors$$ = new $APP.$cljs$core$PersistentVector$$(null, 5, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$165$name$$, "Tony Shafrazi", $cljs$cst$952$tier$$, $cljs$cst$953$founding_patron$$, $cljs$cst$954$logo$$, "images/graphics/tony_shafrazi_logo_lighter.svg", $APP.$cljs$cst$25$type$$, $cljs$cst$955$institution$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$165$name$$, 
"Armenian Fund USA", $cljs$cst$952$tier$$, $cljs$cst$953$founding_patron$$, $cljs$cst$954$logo$$, "images/graphics/armenia_fund_logo.svg", $APP.$cljs$cst$25$type$$, $cljs$cst$955$institution$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$165$name$$, "Khudikyan Family", $cljs$cst$952$tier$$, $cljs$cst$956$patron$$, $APP.$cljs$cst$25$type$$, $cljs$cst$957$individual$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$165$name$$, "Ourfalian Family", 
$cljs$cst$952$tier$$, $cljs$cst$956$patron$$, $APP.$cljs$cst$25$type$$, $cljs$cst$957$individual$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$165$name$$, "Sarafyan Family", $cljs$cst$952$tier$$, $cljs$cst$956$patron$$, $APP.$cljs$cst$25$type$$, $cljs$cst$957$individual$$], null)], null), $amp$pages$budget$sponsors$tier_meta$$ = new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$cljs$cst$953$founding_patron$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$417$label$$, 
"Founding Patrons", $cljs$cst$958$accent$$, "text-pink-700 dark:text-pink-300", $APP.$cljs$cst$399$border$$, "border-pink-500/30", $cljs$cst$959$order$$, 0], null), $cljs$cst$956$patron$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$417$label$$, "Patrons", $cljs$cst$958$accent$$, "text-amber-700 dark:text-amber-300", $APP.$cljs$cst$399$border$$, "border-amber-500/30 dark:border-amber-300/30", $cljs$cst$959$order$$, 1], null), $cljs$cst$960$benefactor$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 
4, [$APP.$cljs$cst$417$label$$, "Benefactors", $cljs$cst$958$accent$$, "text-indigo-700 dark:text-indigo-300", $APP.$cljs$cst$399$border$$, "border-indigo-500/30 dark:border-indigo-300/30", $cljs$cst$959$order$$, 2], null), $cljs$cst$961$supporter$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$417$label$$, "Supporters", $cljs$cst$958$accent$$, "text-slate-700 dark:text-slate-300", $APP.$cljs$cst$399$border$$, "border-slate-400 dark:border-slate-600", $cljs$cst$959$order$$, 3], 
null)], null);
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$303$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$304$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$pages$budget$sponsors$logo_card$$, "", null, null) : (void 0).call(null, $amp$pages$budget$sponsors$logo_card$$, "", null, null)), $APP.$helix$core$register_BANG_$$($amp$pages$budget$sponsors$logo_card$$, 
"amp.pages.budget.sponsors/logo-card"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$303$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$304$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$pages$budget$sponsors$name_item$$, "", null, null) : (void 0).call(null, $amp$pages$budget$sponsors$name_item$$, "", null, null)), $APP.$helix$core$register_BANG_$$($amp$pages$budget$sponsors$name_item$$, 
"amp.pages.budget.sponsors/name-item"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$303$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$304$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$pages$budget$sponsors$tier_section$$, "", null, null) : (void 0).call(null, $amp$pages$budget$sponsors$tier_section$$, "", null, null)), $APP.$helix$core$register_BANG_$$($amp$pages$budget$sponsors$tier_section$$, 
"amp.pages.budget.sponsors/tier-section"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$303$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$304$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$pages$budget$sponsors$sponsors_section$$, "", null, null) : (void 0).call(null, $amp$pages$budget$sponsors$sponsors_section$$, "", null, null)), $APP.$helix$core$register_BANG_$$($amp$pages$budget$sponsors$sponsors_section$$, 
"amp.pages.budget.sponsors/sponsors-section"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$303$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$304$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$pages$budget$why_support$preview$$, "", null, null) : (void 0).call(null, $amp$pages$budget$why_support$preview$$, "", null, null)), $APP.$helix$core$register_BANG_$$($amp$pages$budget$why_support$preview$$, 
"amp.pages.budget.why-support/preview"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$303$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$304$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$pages$budget$why_support$details$$, "", null, null) : (void 0).call(null, $amp$pages$budget$why_support$details$$, "", null, null)), $APP.$helix$core$register_BANG_$$($amp$pages$budget$why_support$details$$, 
"amp.pages.budget.why-support/details"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$303$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$304$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$pages$budget$why_support$why_support$$, "", null, null) : (void 0).call(null, $amp$pages$budget$why_support$why_support$$, "", null, null)), $APP.$helix$core$register_BANG_$$($amp$pages$budget$why_support$why_support$$, 
"amp.pages.budget.why-support/why-support"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$303$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$304$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$pages$budget$section$section_link$$, "(use-scroll-to-id)", null, null) : (void 0).call(null, $amp$pages$budget$section$section_link$$, "(use-scroll-to-id)", 
null, null)), $APP.$helix$core$register_BANG_$$($amp$pages$budget$section$section_link$$, "amp.pages.budget.section/section-link"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$303$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$304$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$pages$budget$section$header$$, "", null, null) : (void 0).call(null, $amp$pages$budget$section$header$$, "", null, null)), $APP.$helix$core$register_BANG_$$($amp$pages$budget$section$header$$, 
"amp.pages.budget.section/header"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$303$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$304$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$pages$budget$section$budget_section$$, "", null, null) : (void 0).call(null, $amp$pages$budget$section$budget_section$$, "", null, null)), $APP.$helix$core$register_BANG_$$($amp$pages$budget$section$budget_section$$, 
"amp.pages.budget.section/budget-section"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$303$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$304$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($APP.$amp$pages$budget$page$budget_view$$, "", null, null) : (void 0).call(null, $APP.$amp$pages$budget$page$budget_view$$, "", null, null)), $APP.$helix$core$register_BANG_$$($APP.$amp$pages$budget$page$budget_view$$, 
"amp.pages.budget.page/budget-view"));
$APP.$module$contents$shadow$loader_set_loaded$$();

}).call(this);