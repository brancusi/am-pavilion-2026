(function(){
'use strict';
var $amp$ui$icons$InformationCircle$$, $cljs$core$take_while$cljs$0core$0IFn$0_invoke$0arity$02$$, $cljs$core$partition_by$cljs$0core$0IFn$0_invoke$0arity$02$$, $amp$hooks$use_scroll_to$use_scroll_to_ref$$, $amp$pages$budget$committee$preview$$, $amp$pages$budget$committee$details$$, $amp$pages$budget$committee$committee_member_card$$, $amp$pages$budget$committee$committee_gallery$$, $amp$pages$budget$committee$committee$$, $amp$pages$budget$table$format_currency$$, $amp$pages$budget$table$sub_total_all_sections$$, 
$amp$pages$budget$table$total_section$$, $amp$pages$budget$table$pad_two_digits$$, $amp$pages$budget$table$detail_line_item$$, $amp$pages$budget$table$details__GT_render_items$$, $amp$pages$budget$table$section_line_item$$, $amp$pages$budget$table$budget_table$$, $amp$pages$budget$cost_breakdown$preview$$, $amp$pages$budget$cost_breakdown$details$$, $amp$pages$budget$cost_breakdown$footer$$, $amp$pages$budget$cost_breakdown$cost_breakdown$$, $amp$pages$budget$location$preview_text$$, $amp$pages$budget$location$preview$$, 
$amp$pages$budget$location$full_details$$, $amp$pages$budget$location$location_section$$, $amp$pages$budget$cash_flow$parse_date$$, $amp$pages$budget$cash_flow$date__GT_ms$$, $amp$pages$budget$cash_flow$format_currency$$, $amp$pages$budget$cash_flow$priority_tag_bg$$, $amp$pages$budget$cash_flow$priority_tag_text$$, $amp$pages$budget$cash_flow$priority_dot_classes$$, $amp$pages$budget$cash_flow$priority_amount_class$$, $amp$pages$budget$cash_flow$priority_label$$, $amp$pages$budget$cash_flow$group_by_month$$, 
$amp$pages$budget$cash_flow$month_rollups$$, $amp$pages$budget$cash_flow$status_classes$$, $amp$pages$budget$cash_flow$timeline_node$$, $amp$pages$budget$cash_flow$now_marker$$, $amp$pages$budget$cash_flow$month_header$$, $amp$pages$budget$cash_flow$month_summary_row$$, $amp$pages$budget$cash_flow$view_toggle$$, $amp$pages$budget$cash_flow$summary_header$$, $amp$pages$budget$cash_flow$cash_flow$$, $amp$pages$budget$non_profit$transfer_field$$, $amp$pages$budget$non_profit$transfer_card$$, $amp$pages$budget$non_profit$non_profit$$, 
$amp$pages$budget$sponsors$logo_card$$, $amp$pages$budget$sponsors$name_item$$, $amp$pages$budget$sponsors$tier_section$$, $amp$pages$budget$sponsors$sponsors_section$$, $amp$pages$budget$why_support$preview$$, $amp$pages$budget$why_support$details$$, $amp$pages$budget$why_support$why_support$$, $amp$pages$budget$section$section_link$$, $amp$pages$budget$section$header$$, $amp$pages$budget$section$budget_section$$, $cljs$cst$876$admin_apr_26$$, $cljs$cst$890$venice_sep_26$$, $cljs$cst$849$venice_sep_25$$, 
$cljs$cst$868$la_feb_26$$, $cljs$cst$878$venice_may_26$$, $cljs$cst$843$priority$$, $cljs$cst$928$accent$$, $cljs$cst$829$venue$$, $cljs$cst$872$la_mar_26$$, $cljs$cst$905$n_crit$$, $cljs$cst$894$admin_oct_26$$, $cljs$cst$931$supporter$$, $cljs$cst$854$admin_oct_25$$, $cljs$cst$881$venice_jun_26$$, $cljs$cst$908$has_now$$, $cljs$cst$832$the_studio$$, $cljs$cst$914$month$$, $cljs$cst$930$benefactor$$, $cljs$cst$856$la_nov_25$$, $cljs$cst$866$contingency_jan_26$$, $cljs$cst$884$venice_jul_26$$, $cljs$cst$904$entries$$, 
$cljs$cst$903$all_paid$$, $cljs$cst$919$fields$$, $cljs$cst$844$normal$$, $cljs$cst$841$admin_jul_25$$, $cljs$cst$885$admin_jul_26$$, $cljs$cst$906$n_paid$$, $cljs$cst$837$documentation$$, $cljs$cst$848$contingency_aug_25$$, $cljs$cst$889$contingency_aug_26$$, $cljs$cst$838$debt_raised$$, $cljs$cst$918$field_value$$, $cljs$cst$920$ein$$, $cljs$cst$882$admin_jun_26$$, $cljs$cst$826$expanded_items$$, $cljs$cst$922$tier$$, $cljs$cst$858$contingency_nov_25$$, $cljs$cst$898$contingency_nov_26$$, $cljs$cst$823$tax$$, 
$cljs$cst$833$logistics$$, $cljs$cst$879$admin_may_26$$, $cljs$cst$917$field_label$$, $cljs$cst$865$admin_jan_26$$, $cljs$cst$921$location$$, $cljs$cst$867$venice_feb_26$$, $cljs$cst$862$venice_jan_26$$, $cljs$cst$907$n_items$$, $cljs$cst$895$contingency_oct_26$$, $cljs$cst$855$contingency_oct_25$$, $cljs$cst$873$admin_mar_26$$, $cljs$cst$845$paid$$, $cljs$cst$821$details$$, $cljs$cst$899$venice_dec_26$$, $cljs$cst$871$venice_mar_26$$, $cljs$cst$929$order$$, $cljs$cst$869$admin_feb_26$$, $cljs$cst$877$contingency_apr_26$$, 
$cljs$cst$910$entry$$, $cljs$cst$900$admin_dec_26$$, $cljs$cst$860$admin_dec_25$$, $cljs$cst$828$item$$, $cljs$cst$897$admin_nov_26$$, $cljs$cst$857$admin_nov_25$$, $cljs$cst$842$due$$, $cljs$cst$827$description$$, $cljs$cst$863$critical$$, $cljs$cst$886$contingency_jul_26$$, $cljs$cst$846$contingency_jul_25$$, $cljs$cst$901$contingency_dec_26$$, $cljs$cst$861$contingency_dec_25$$, $cljs$cst$880$contingency_may_26$$, $cljs$cst$883$contingency_jun_26$$, $cljs$cst$820$amount$$, $cljs$cst$916$past_QMARK_$$, 
$cljs$cst$840$cash_flow_model$$, $cljs$cst$909$dot$$, $cljs$cst$912$expanded_QMARK_$$, $cljs$cst$825$set_expanded_items$$, $cljs$cst$822$rate$$, $cljs$cst$870$contingency_feb_26$$, $cljs$cst$835$marketing$$, $cljs$cst$831$la_prod$$, $cljs$cst$926$patron$$, $cljs$cst$902$fill$$, $cljs$cst$839$funds_raised$$, $cljs$cst$892$contingency_sep_26$$, $cljs$cst$852$contingency_sep_25$$, $cljs$cst$932$members$$, $cljs$cst$824$cost_data$$, $cljs$cst$896$venice_nov_26$$, $cljs$cst$911$rollup$$, $cljs$cst$927$individual$$, 
$cljs$cst$891$admin_sep_26$$, $cljs$cst$850$admin_sep_25$$, $cljs$cst$875$venice_apr_26$$, $cljs$cst$925$institution$$, $cljs$cst$924$logo$$, $cljs$cst$851$high$$, $cljs$cst$834$opening$$, $cljs$cst$933$anchor$$, $cljs$cst$830$admin$$, $cljs$cst$874$contingency_mar_26$$, $cljs$cst$893$venice_oct_26$$, $cljs$cst$853$venice_oct_25$$, $cljs$cst$915$now$$, $cljs$cst$887$venice_aug_26$$, $cljs$cst$888$admin_aug_26$$, $cljs$cst$847$admin_aug_25$$, $cljs$cst$923$founding_patron$$, $cljs$cst$859$la_dec_25$$, 
$cljs$cst$864$la_jan_26$$, $cljs$cst$836$publication$$, $cljs$cst$913$target_total$$;
$amp$ui$icons$InformationCircle$$ = function($G__52439_JSCompiler_temp_const$jscomp$inline_3837_class$$jscomp$24_map__52437_map__52437__$1_props__41652__auto__$jscomp$5_vec__52434$$, $G__52443$jscomp$inline_3839_JSCompiler_inline_result$jscomp$inline_3838_maybe_ref__41653__auto__$jscomp$5$$) {
  $G__52439_JSCompiler_temp_const$jscomp$inline_3837_class$$jscomp$24_map__52437_map__52437__$1_props__41652__auto__$jscomp$5_vec__52434$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__52439_JSCompiler_temp_const$jscomp$inline_3837_class$$jscomp$24_map__52437_map__52437__$1_props__41652__auto__$jscomp$5_vec__52434$$), $G__52443$jscomp$inline_3839_JSCompiler_inline_result$jscomp$inline_3838_maybe_ref__41653__auto__$jscomp$5$$], 
  null);
  $G__52439_JSCompiler_temp_const$jscomp$inline_3837_class$$jscomp$24_map__52437_map__52437__$1_props__41652__auto__$jscomp$5_vec__52434$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__52439_JSCompiler_temp_const$jscomp$inline_3837_class$$jscomp$24_map__52437_map__52437__$1_props__41652__auto__$jscomp$5_vec__52434$$, 0, null);
  $G__52439_JSCompiler_temp_const$jscomp$inline_3837_class$$jscomp$24_map__52437_map__52437__$1_props__41652__auto__$jscomp$5_vec__52434$$ = $APP.$cljs$core$__destructure_map$$($G__52439_JSCompiler_temp_const$jscomp$inline_3837_class$$jscomp$24_map__52437_map__52437__$1_props__41652__auto__$jscomp$5_vec__52434$$);
  $G__52439_JSCompiler_temp_const$jscomp$inline_3837_class$$jscomp$24_map__52437_map__52437__$1_props__41652__auto__$jscomp$5_vec__52434$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__52439_JSCompiler_temp_const$jscomp$inline_3837_class$$jscomp$24_map__52437_map__52437__$1_props__41652__auto__$jscomp$5_vec__52434$$, $APP.$cljs$cst$67$class$$);
  $G__52439_JSCompiler_temp_const$jscomp$inline_3837_class$$jscomp$24_map__52437_map__52437__$1_props__41652__auto__$jscomp$5_vec__52434$$ = $APP.$helix$impl$props$normalize_class$$($G__52439_JSCompiler_temp_const$jscomp$inline_3837_class$$jscomp$24_map__52437_map__52437__$1_props__41652__auto__$jscomp$5_vec__52434$$);
  $G__52443$jscomp$inline_3839_JSCompiler_inline_result$jscomp$inline_3838_maybe_ref__41653__auto__$jscomp$5$$ = {strokeLinecap:"round", strokeLinejoin:"round", d:"m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"};
  $G__52443$jscomp$inline_3839_JSCompiler_inline_result$jscomp$inline_3838_maybe_ref__41653__auto__$jscomp$5$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("path", $G__52443$jscomp$inline_3839_JSCompiler_inline_result$jscomp$inline_3838_maybe_ref__41653__auto__$jscomp$5$$) : $APP.$helix$core$jsx$$.call(null, "path", $G__52443$jscomp$inline_3839_JSCompiler_inline_result$jscomp$inline_3838_maybe_ref__41653__auto__$jscomp$5$$);
  $G__52439_JSCompiler_temp_const$jscomp$inline_3837_class$$jscomp$24_map__52437_map__52437__$1_props__41652__auto__$jscomp$5_vec__52434$$ = {xmlns:"http://www.w3.org/2000/svg", fill:"none", viewBox:"0 0 24 24", strokeWidth:1.5, stroke:"currentColor", className:$G__52439_JSCompiler_temp_const$jscomp$inline_3837_class$$jscomp$24_map__52437_map__52437__$1_props__41652__auto__$jscomp$5_vec__52434$$, children:$G__52443$jscomp$inline_3839_JSCompiler_inline_result$jscomp$inline_3838_maybe_ref__41653__auto__$jscomp$5$$};
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("svg", $G__52439_JSCompiler_temp_const$jscomp$inline_3837_class$$jscomp$24_map__52437_map__52437__$1_props__41652__auto__$jscomp$5_vec__52434$$) : $APP.$helix$core$jsx$$.call(null, "svg", $G__52439_JSCompiler_temp_const$jscomp$inline_3837_class$$jscomp$24_map__52437_map__52437__$1_props__41652__auto__$jscomp$5_vec__52434$$);
};
$cljs$core$take_while$cljs$0core$0IFn$0_invoke$0arity$02$$ = function($pred$jscomp$14$$, $coll$jscomp$728$$) {
  return new $APP.$cljs$core$LazySeq$$(null, function() {
    var $JSCompiler_temp$jscomp$439_temp__5823__auto__$jscomp$22$$ = $APP.$cljs$core$seq$$($coll$jscomp$728$$);
    if ($JSCompiler_temp$jscomp$439_temp__5823__auto__$jscomp$22$$) {
      var $G__47638$jscomp$inline_2221_JSCompiler_inline_result$jscomp$440$$ = $APP.$cljs$core$first$$($JSCompiler_temp$jscomp$439_temp__5823__auto__$jscomp$22$$);
      $G__47638$jscomp$inline_2221_JSCompiler_inline_result$jscomp$440$$ = $pred$jscomp$14$$.$cljs$core$IFn$_invoke$arity$1$ ? $pred$jscomp$14$$.$cljs$core$IFn$_invoke$arity$1$($G__47638$jscomp$inline_2221_JSCompiler_inline_result$jscomp$440$$) : $pred$jscomp$14$$.call(null, $G__47638$jscomp$inline_2221_JSCompiler_inline_result$jscomp$440$$);
      $JSCompiler_temp$jscomp$439_temp__5823__auto__$jscomp$22$$ = $APP.$cljs$core$truth_$$($G__47638$jscomp$inline_2221_JSCompiler_inline_result$jscomp$440$$) ? $APP.$cljs$core$cons$$($APP.$cljs$core$first$$($JSCompiler_temp$jscomp$439_temp__5823__auto__$jscomp$22$$), $cljs$core$take_while$cljs$0core$0IFn$0_invoke$0arity$02$$($pred$jscomp$14$$, $APP.$cljs$core$rest$$($JSCompiler_temp$jscomp$439_temp__5823__auto__$jscomp$22$$))) : null;
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
    function $G__50974__delegate$$($ref$jscomp$8_temp__5823__auto__$jscomp$70$$, $duration$jscomp$2_p__50948$$) {
      $duration$jscomp$2_p__50948$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($duration$jscomp$2_p__50948$$, 0, null);
      $ref$jscomp$8_temp__5823__auto__$jscomp$70$$ = $ref$jscomp$8_temp__5823__auto__$jscomp$70$$.current;
      return $APP.$cljs$core$truth_$$($ref$jscomp$8_temp__5823__auto__$jscomp$70$$) ? $APP.$module$node_modules$gsap$dist$gsap$$.gsap.to(window, $APP.$cljs$core$clj__GT_js$$(new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$409$duration$$, $APP.$cljs$core$truth_$$($duration$jscomp$2_p__50948$$) ? $duration$jscomp$2_p__50948$$ : 0.35, $APP.$cljs$cst$410$scrollTo$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$411$y$$, $ref$jscomp$8_temp__5823__auto__$jscomp$70$$, 
      $APP.$cljs$cst$412$autoKill$$, !1], null), $APP.$cljs$cst$413$ease$$, "power2.inOut"], null))) : null;
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
$amp$pages$budget$committee$preview$$ = function($G__266599_map__266588_props__41575__auto__$jscomp$9_vec__266585$$, $maybe_ref__41576__auto__$jscomp$9$$) {
  $G__266599_map__266588_props__41575__auto__$jscomp$9_vec__266585$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__266599_map__266588_props__41575__auto__$jscomp$9_vec__266585$$), $maybe_ref__41576__auto__$jscomp$9$$], null);
  $G__266599_map__266588_props__41575__auto__$jscomp$9_vec__266585$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__266599_map__266588_props__41575__auto__$jscomp$9_vec__266585$$, 0, null);
  $APP.$cljs$core$__destructure_map$$($G__266599_map__266588_props__41575__auto__$jscomp$9_vec__266585$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__266599_map__266588_props__41575__auto__$jscomp$9_vec__266585$$ = function() {
    return {className:"space-y-3 p-4", children:function() {
      var $G__266609$$ = function() {
        return {children:[function() {
          var $G__266637$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:"To realize an undertaking of this scale and international significance, an "};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__266637$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__266637$$);
        }(), function() {
          var $G__266668$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:"urgent fundraising program"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__266668$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__266668$$);
        }(), function() {
          var $G__266674$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:" is greatly needed."};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__266674$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__266674$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__266609$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__266609$$);
    }()};
  }();
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__266599_map__266588_props__41575__auto__$jscomp$9_vec__266585$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__266599_map__266588_props__41575__auto__$jscomp$9_vec__266585$$);
};
$amp$pages$budget$committee$details$$ = function($G__266705_map__266697_props__41575__auto__$jscomp$10_vec__266694$$, $maybe_ref__41576__auto__$jscomp$10$$) {
  $G__266705_map__266697_props__41575__auto__$jscomp$10_vec__266694$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__266705_map__266697_props__41575__auto__$jscomp$10_vec__266694$$), $maybe_ref__41576__auto__$jscomp$10$$], null);
  $G__266705_map__266697_props__41575__auto__$jscomp$10_vec__266694$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__266705_map__266697_props__41575__auto__$jscomp$10_vec__266694$$, 0, null);
  $APP.$cljs$core$__destructure_map$$($G__266705_map__266697_props__41575__auto__$jscomp$10_vec__266694$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__266705_map__266697_props__41575__auto__$jscomp$10_vec__266694$$ = function() {
    return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["p-4", $APP.$amp$styles$body_base$$]))), children:[function() {
      var $G__266715$$ = function() {
        return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["italic", "text-amber-600  dark:text-amber-300"]))), children:["*Note: As Armenia does not maintain a permanent national pavilion in Venice, the Pavilion must be realized through a rented venue—a standard and widely accepted model for many non-permanent participating nations. ", "The selected site operates at a base rental cost of approximately ", 
        function() {
          var $G__266723$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$value_currency$$), children:"$145,600"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__266723$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__266723$$);
        }(), function() {
          var $G__266749$$ = {children:[", covering the entire six-month duration of the Exhibition, and represents a strategic and fiscally responsible choice given its immediate proximity to the Arsenale proper. ", "Comparable venues just minutes away within the Arsenale or Giardini typically begin at "]};
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__266749$$) : $APP.$helix$core$jsxs$$.call(null, "span", $G__266749$$);
        }(), function() {
          var $G__266767$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$value_currency$$), children:"$450,000 or more"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__266767$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__266767$$);
        }(), function() {
          var $G__266781$$ = {children:[" in base rent alone—often closer to €450,000+—excluding construction, staffing, technical services, and operational expenses. ", "In this context, the Pavilion’s location offers extraordinary visibility and access at a fraction of the cost, positioning Armenia at the heart of the Biennale circuit while maintaining responsible stewardship of resources."]};
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__266781$$) : $APP.$helix$core$jsxs$$.call(null, "span", $G__266781$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__266715$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__266715$$);
    }(), function() {
      var $G__266795$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["mt-6 text-2xl", "text-rose-600   dark:text-rose-400"]))), children:"To realize an undertaking of this scale and international significance, an urgent fundraising program is greatly needed."};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__266795$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__266795$$);
    }(), function() {
      var $G__266811$$ = function() {
        return {className:"mt-6", children:[function() {
          var $G__266819$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-medium", "text-slate-900  dark:text-slate-100"]))), children:["At present we are starting with a small committee including members ", "Archbishop Hovnan Derderian, Tony Shafrazi, Tina Chakarian, Rafi Ourfalian, Khachik Khudikyan, ", "Andranik Torosyan, Aram Alajajian, and Vik Hovsepian, "]};
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__266819$$) : $APP.$helix$core$jsxs$$.call(null, "span", $G__266819$$);
        }(), function() {
          var $G__266839$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-bold", "text-rose-600   dark:text-rose-400"]))), children:"hopefully encouraging others more able to realize our goal."};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__266839$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__266839$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__266811$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__266811$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__266705_map__266697_props__41575__auto__$jscomp$10_vec__266694$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__266705_map__266697_props__41575__auto__$jscomp$10_vec__266694$$);
};
$amp$pages$budget$committee$committee_member_card$$ = function($G__266876_map__266865_map__266865__$1_props__41575__auto__$jscomp$11_vec__266862$$, $maybe_ref__41576__auto__$jscomp$11$$) {
  $G__266876_map__266865_map__266865__$1_props__41575__auto__$jscomp$11_vec__266862$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__266876_map__266865_map__266865__$1_props__41575__auto__$jscomp$11_vec__266862$$), $maybe_ref__41576__auto__$jscomp$11$$], null);
  $G__266876_map__266865_map__266865__$1_props__41575__auto__$jscomp$11_vec__266862$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__266876_map__266865_map__266865__$1_props__41575__auto__$jscomp$11_vec__266862$$, 0, null);
  $G__266876_map__266865_map__266865__$1_props__41575__auto__$jscomp$11_vec__266862$$ = $APP.$cljs$core$__destructure_map$$($G__266876_map__266865_map__266865__$1_props__41575__auto__$jscomp$11_vec__266862$$);
  var $name$jscomp$197$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__266876_map__266865_map__266865__$1_props__41575__auto__$jscomp$11_vec__266862$$, $APP.$cljs$cst$165$name$$), $role$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__266876_map__266865_map__266865__$1_props__41575__auto__$jscomp$11_vec__266862$$, $APP.$cljs$cst$819$role$$), $img_src$jscomp$5$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__266876_map__266865_map__266865__$1_props__41575__auto__$jscomp$11_vec__266862$$, 
  $APP.$cljs$cst$730$img_src$$);
  $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__266876_map__266865_map__266865__$1_props__41575__auto__$jscomp$11_vec__266862$$, $APP.$cljs$cst$713$credit$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $overlay_styles$$ = $APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-mono", "bg-white/70 px-1 text-slate-500"]));
  $G__266876_map__266865_map__266865__$1_props__41575__auto__$jscomp$11_vec__266862$$ = function() {
    return {className:"w-[150px] aspect-[0.7] relative ml-2", children:function() {
      var $G__266880$$ = function() {
        return {"img-src":$img_src$jscomp$5$$, fit:"crop", "aspect-ratio":0.7, "active?":!0, children:function() {
          var $G__266884$$ = function() {
            return {className:"", children:[function() {
              var $G__266888_G__266901$jscomp$inline_4069_JSCompiler_inline_result$jscomp$inline_4068$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["italic", "text-xs"]))), children:$name$jscomp$197$$};
              $G__266888_G__266901$jscomp$inline_4069_JSCompiler_inline_result$jscomp$inline_4068$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__266888_G__266901$jscomp$inline_4069_JSCompiler_inline_result$jscomp$inline_4068$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__266888_G__266901$jscomp$inline_4069_JSCompiler_inline_result$jscomp$inline_4068$$);
              $G__266888_G__266901$jscomp$inline_4069_JSCompiler_inline_result$jscomp$inline_4068$$ = {position:$APP.$cljs$cst$702$tl$$, rotation:90, "parent-styles":$overlay_styles$$, children:$G__266888_G__266901$jscomp$inline_4069_JSCompiler_inline_result$jscomp$inline_4068$$};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$ui$overlays$caption_overlay$$, $G__266888_G__266901$jscomp$inline_4069_JSCompiler_inline_result$jscomp$inline_4068$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$ui$overlays$caption_overlay$$, $G__266888_G__266901$jscomp$inline_4069_JSCompiler_inline_result$jscomp$inline_4068$$);
            }(), function() {
              var $G__266920_G__266929$jscomp$inline_4072_JSCompiler_inline_result$jscomp$inline_4071$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["italic", "text-xs"]))), children:$role$$};
              $G__266920_G__266929$jscomp$inline_4072_JSCompiler_inline_result$jscomp$inline_4071$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__266920_G__266929$jscomp$inline_4072_JSCompiler_inline_result$jscomp$inline_4071$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__266920_G__266929$jscomp$inline_4072_JSCompiler_inline_result$jscomp$inline_4071$$);
              $G__266920_G__266929$jscomp$inline_4072_JSCompiler_inline_result$jscomp$inline_4071$$ = {position:$APP.$cljs$cst$707$bl$$, "parent-styles":$overlay_styles$$, children:$G__266920_G__266929$jscomp$inline_4072_JSCompiler_inline_result$jscomp$inline_4071$$};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$ui$overlays$caption_overlay$$, $G__266920_G__266929$jscomp$inline_4072_JSCompiler_inline_result$jscomp$inline_4071$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$ui$overlays$caption_overlay$$, $G__266920_G__266929$jscomp$inline_4072_JSCompiler_inline_result$jscomp$inline_4071$$);
            }()]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__266884$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__266884$$);
        }()};
      }();
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$ui$image_overlay$lazy_image_with_overlay$$, $G__266880$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$ui$image_overlay$lazy_image_with_overlay$$, $G__266880$$);
    }()};
  }();
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__266876_map__266865_map__266865__$1_props__41575__auto__$jscomp$11_vec__266862$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__266876_map__266865_map__266865__$1_props__41575__auto__$jscomp$11_vec__266862$$);
};
$amp$pages$budget$committee$committee_gallery$$ = function($G__267022_map__267012_props__41575__auto__$jscomp$12_vec__267009$$, $maybe_ref__41576__auto__$jscomp$12$$) {
  $G__267022_map__267012_props__41575__auto__$jscomp$12_vec__267009$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__267022_map__267012_props__41575__auto__$jscomp$12_vec__267009$$), $maybe_ref__41576__auto__$jscomp$12$$], null);
  $G__267022_map__267012_props__41575__auto__$jscomp$12_vec__267009$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__267022_map__267012_props__41575__auto__$jscomp$12_vec__267009$$, 0, null);
  $APP.$cljs$core$__destructure_map$$($G__267022_map__267012_props__41575__auto__$jscomp$12_vec__267009$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__267022_map__267012_props__41575__auto__$jscomp$12_vec__267009$$ = function() {
    return {className:"p-4 w-full", children:function() {
      var $G__267026$$ = function() {
        return {children:[function() {
          var $G__267032_G__267036$jscomp$inline_4075$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$label_muted$$), children:"Committee Members"};
          $G__267032_G__267036$jscomp$inline_4075$$ = {className:"pl-4", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("h3", $G__267032_G__267036$jscomp$inline_4075$$) : $APP.$helix$core$jsx$$.call(null, "h3", $G__267032_G__267036$jscomp$inline_4075$$)};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__267032_G__267036$jscomp$inline_4075$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__267032_G__267036$jscomp$inline_4075$$);
        }(), function() {
          var $G__267046$$ = function() {
            return {className:"mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4", children:$APP.$cljs$core$map$$.$cljs$core$IFn$_invoke$arity$2$(function($name$jscomp$198_p__267066$$) {
              var $credit$jscomp$4_map__267069__$1$$ = $APP.$cljs$core$__destructure_map$$($name$jscomp$198_p__267066$$);
              $name$jscomp$198_p__267066$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($credit$jscomp$4_map__267069__$1$$, $APP.$cljs$cst$165$name$$);
              var $G__267087_G__267104$jscomp$inline_4078_JSCompiler_temp$jscomp$inline_4077_role$jscomp$1$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($credit$jscomp$4_map__267069__$1$$, $APP.$cljs$cst$819$role$$), $img_src$jscomp$6$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($credit$jscomp$4_map__267069__$1$$, $APP.$cljs$cst$730$img_src$$);
              $credit$jscomp$4_map__267069__$1$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($credit$jscomp$4_map__267069__$1$$, $APP.$cljs$cst$713$credit$$);
              $APP.$cljs$core$truth_$$($img_src$jscomp$6$$) ? ($G__267087_G__267104$jscomp$inline_4078_JSCompiler_temp$jscomp$inline_4077_role$jscomp$1$$ = {name:$name$jscomp$198_p__267066$$, role:$G__267087_G__267104$jscomp$inline_4078_JSCompiler_temp$jscomp$inline_4077_role$jscomp$1$$, "img-src":$img_src$jscomp$6$$, credit:$credit$jscomp$4_map__267069__$1$$}, $G__267087_G__267104$jscomp$inline_4078_JSCompiler_temp$jscomp$inline_4077_role$jscomp$1$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? 
              $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$pages$budget$committee$committee_member_card$$, $G__267087_G__267104$jscomp$inline_4078_JSCompiler_temp$jscomp$inline_4077_role$jscomp$1$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$budget$committee$committee_member_card$$, $G__267087_G__267104$jscomp$inline_4078_JSCompiler_temp$jscomp$inline_4077_role$jscomp$1$$)) : $G__267087_G__267104$jscomp$inline_4078_JSCompiler_temp$jscomp$inline_4077_role$jscomp$1$$ = null;
              $G__267087_G__267104$jscomp$inline_4078_JSCompiler_temp$jscomp$inline_4077_role$jscomp$1$$ = {children:$G__267087_G__267104$jscomp$inline_4078_JSCompiler_temp$jscomp$inline_4077_role$jscomp$1$$};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$("div", $G__267087_G__267104$jscomp$inline_4078_JSCompiler_temp$jscomp$inline_4077_role$jscomp$1$$, $name$jscomp$198_p__267066$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__267087_G__267104$jscomp$inline_4078_JSCompiler_temp$jscomp$inline_4077_role$jscomp$1$$, $name$jscomp$198_p__267066$$);
            }, $amp$pages$budget$committee$committee_members$$)};
          }();
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__267046$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__267046$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__267026$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__267026$$);
    }()};
  }();
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__267022_map__267012_props__41575__auto__$jscomp$12_vec__267009$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__267022_map__267012_props__41575__auto__$jscomp$12_vec__267009$$);
};
$amp$pages$budget$committee$committee$$ = function($G__267145_map__267123_map__267123__$1_props__41575__auto__$jscomp$13_vec__267120$$, $maybe_ref__41576__auto__$jscomp$13$$) {
  $G__267145_map__267123_map__267123__$1_props__41575__auto__$jscomp$13_vec__267120$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__267145_map__267123_map__267123__$1_props__41575__auto__$jscomp$13_vec__267120$$), $maybe_ref__41576__auto__$jscomp$13$$], null);
  $G__267145_map__267123_map__267123__$1_props__41575__auto__$jscomp$13_vec__267120$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__267145_map__267123_map__267123__$1_props__41575__auto__$jscomp$13_vec__267120$$, 0, null);
  $G__267145_map__267123_map__267123__$1_props__41575__auto__$jscomp$13_vec__267120$$ = $APP.$cljs$core$__destructure_map$$($G__267145_map__267123_map__267123__$1_props__41575__auto__$jscomp$13_vec__267120$$);
  var $id$jscomp$90$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__267145_map__267123_map__267123__$1_props__41575__auto__$jscomp$13_vec__267120$$, $APP.$cljs$cst$286$id$$), $subtitle$jscomp$2$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__267145_map__267123_map__267123__$1_props__41575__auto__$jscomp$13_vec__267120$$, $APP.$cljs$cst$769$subtitle$$), $title$jscomp$29$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__267145_map__267123_map__267123__$1_props__41575__auto__$jscomp$13_vec__267120$$, 
  $APP.$cljs$cst$288$title$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__267145_map__267123_map__267123__$1_props__41575__auto__$jscomp$13_vec__267120$$ = function() {
    return {id:$id$jscomp$90$$, className:"space-y-4", children:[function() {
      var $G__267157$$ = {idx:5, "section-hint":$subtitle$jscomp$2$$, title:$title$jscomp$29$$, "expand-button-label":"Read more", "preview-text":$amp$pages$budget$committee$preview$$, "full-text":$amp$pages$budget$committee$details$$};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$ui$expandable_text$expandable_text_area_2$$, $G__267157$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$ui$expandable_text$expandable_text_area_2$$, $G__267157$$);
    }(), function() {
      var $G__267180$$ = {children:$amp$pages$budget$committee$committee_members$$};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$pages$budget$committee$committee_gallery$$, $G__267180$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$budget$committee$committee_gallery$$, $G__267180$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("section", $G__267145_map__267123_map__267123__$1_props__41575__auto__$jscomp$13_vec__267120$$) : $APP.$helix$core$jsxs$$.call(null, "section", $G__267145_map__267123_map__267123__$1_props__41575__auto__$jscomp$13_vec__267120$$);
};
$amp$pages$budget$table$format_currency$$ = function($amount$$) {
  return "$" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$(Math.round($amount$$).toLocaleString("en-US"));
};
$amp$pages$budget$table$sub_total_all_sections$$ = function($cost_data$$) {
  return $APP.$cljs$core$reduce$cljs$0core$0IFn$0_invoke$0arity$02$$($APP.$cljs$core$_PLUS_$$, $APP.$cljs$core$map$$.$cljs$core$IFn$_invoke$arity$2$(function($p1__267281_SHARP__tax_rate$jscomp$inline_2228$$) {
    var $item_details$jscomp$inline_2226_sub_total$jscomp$inline_2227$$ = $cljs$cst$821$details$$.$cljs$core$IFn$_invoke$arity$1$($p1__267281_SHARP__tax_rate$jscomp$inline_2228$$);
    $item_details$jscomp$inline_2226_sub_total$jscomp$inline_2227$$ = $APP.$cljs$core$reduce$cljs$0core$0IFn$0_invoke$0arity$02$$($APP.$cljs$core$_PLUS_$$, $APP.$cljs$core$map$$.$cljs$core$IFn$_invoke$arity$2$($cljs$cst$820$amount$$, $item_details$jscomp$inline_2226_sub_total$jscomp$inline_2227$$));
    $p1__267281_SHARP__tax_rate$jscomp$inline_2228$$ = $cljs$cst$822$rate$$.$cljs$core$IFn$_invoke$arity$1$($cljs$cst$823$tax$$.$cljs$core$IFn$_invoke$arity$1$($p1__267281_SHARP__tax_rate$jscomp$inline_2228$$));
    return ($p1__267281_SHARP__tax_rate$jscomp$inline_2228$$ > 0 ? $p1__267281_SHARP__tax_rate$jscomp$inline_2228$$ * $item_details$jscomp$inline_2226_sub_total$jscomp$inline_2227$$ : 0) + $item_details$jscomp$inline_2226_sub_total$jscomp$inline_2227$$;
  }, $cost_data$$));
};
$amp$pages$budget$table$total_section$$ = function($G__267320_cost_data$jscomp$1_map__267306_map__267306__$1_props__41575__auto__$jscomp$14_vec__267303$$, $maybe_ref__41576__auto__$jscomp$14$$) {
  $G__267320_cost_data$jscomp$1_map__267306_map__267306__$1_props__41575__auto__$jscomp$14_vec__267303$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__267320_cost_data$jscomp$1_map__267306_map__267306__$1_props__41575__auto__$jscomp$14_vec__267303$$), $maybe_ref__41576__auto__$jscomp$14$$], null);
  $G__267320_cost_data$jscomp$1_map__267306_map__267306__$1_props__41575__auto__$jscomp$14_vec__267303$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__267320_cost_data$jscomp$1_map__267306_map__267306__$1_props__41575__auto__$jscomp$14_vec__267303$$, 0, null);
  $G__267320_cost_data$jscomp$1_map__267306_map__267306__$1_props__41575__auto__$jscomp$14_vec__267303$$ = $APP.$cljs$core$__destructure_map$$($G__267320_cost_data$jscomp$1_map__267306_map__267306__$1_props__41575__auto__$jscomp$14_vec__267303$$);
  $G__267320_cost_data$jscomp$1_map__267306_map__267306__$1_props__41575__auto__$jscomp$14_vec__267303$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__267320_cost_data$jscomp$1_map__267306_map__267306__$1_props__41575__auto__$jscomp$14_vec__267303$$, $cljs$cst$824$cost_data$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $sub_total$jscomp$1$$ = $amp$pages$budget$table$sub_total_all_sections$$($G__267320_cost_data$jscomp$1_map__267306_map__267306__$1_props__41575__auto__$jscomp$14_vec__267303$$), $grand_total$$ = $sub_total$jscomp$1$$ + 66821;
  $G__267320_cost_data$jscomp$1_map__267306_map__267306__$1_props__41575__auto__$jscomp$14_vec__267303$$ = function() {
    return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["flex flex-col", "font-mono"]))), children:[function() {
      var $G__267332$$ = function() {
        return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["bg-white        dark:bg-slate-900", "text-slate-900  dark:text-slate-100", "flex items-baseline px-4 py-2 border-t-2", "border-pink-500/70 dark:border-pink-500/70"]))), children:[function() {
          var $G__267338$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["text-sm", "uppercase", "tracking-wider", "text-slate-600  dark:text-slate-400", "flex-1 min-w-0"]))), children:"Sub total"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("h3", $G__267338$$) : $APP.$helix$core$jsx$$.call(null, "h3", $G__267338$$);
        }(), function() {
          var $G__267342_G__267346$jscomp$inline_4081$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-semibold", "text-slate-700  dark:text-slate-300"]))), children:$amp$pages$budget$table$format_currency$$($sub_total$jscomp$1$$)};
          $G__267342_G__267346$jscomp$inline_4081$$ = {className:"flex items-baseline justify-end shrink-0 ml-2", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__267342_G__267346$jscomp$inline_4081$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__267342_G__267346$jscomp$inline_4081$$)};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__267342_G__267346$jscomp$inline_4081$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__267342_G__267346$jscomp$inline_4081$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("li", $G__267332$$) : $APP.$helix$core$jsxs$$.call(null, "li", $G__267332$$);
    }(), function() {
      var $G__267352$$ = function() {
        return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["bg-slate-100/60 dark:bg-slate-800/60", "text-slate-900  dark:text-slate-100", "flex items-baseline px-4 py-2"]))), children:[function() {
          var $G__267356$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["text-sm", "uppercase", "tracking-wider", "text-slate-600  dark:text-slate-400", "flex-1 min-w-0"]))), children:"Contingency 5%"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("h3", $G__267356$$) : $APP.$helix$core$jsx$$.call(null, "h3", $G__267356$$);
        }(), function() {
          var $G__267361_G__267366$jscomp$inline_4084$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-semibold", "text-slate-700  dark:text-slate-300"]))), children:$amp$pages$budget$table$format_currency$$(66821)};
          $G__267361_G__267366$jscomp$inline_4084$$ = {className:"flex items-baseline justify-end shrink-0 ml-2", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__267361_G__267366$jscomp$inline_4084$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__267361_G__267366$jscomp$inline_4084$$)};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__267361_G__267366$jscomp$inline_4084$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__267361_G__267366$jscomp$inline_4084$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("li", $G__267352$$) : $APP.$helix$core$jsxs$$.call(null, "li", $G__267352$$);
    }(), function() {
      var $G__267375$$ = function() {
        return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["bg-white        dark:bg-slate-900", "text-slate-900  dark:text-slate-100", "flex items-baseline px-4 py-4 border-t border-pink-500/40"]))), children:[function() {
          var $G__267379$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-bold", "text-lg", "uppercase", "tracking-wider", "flex-1 min-w-0"]))), children:"TOTAL"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("h3", $G__267379$$) : $APP.$helix$core$jsx$$.call(null, "h3", $G__267379$$);
        }(), function() {
          var $G__267406_G__267425$jscomp$inline_4087$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$value_lg$$), children:$amp$pages$budget$table$format_currency$$($grand_total$$)};
          $G__267406_G__267425$jscomp$inline_4087$$ = {className:"flex items-baseline justify-end shrink-0 ml-2", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__267406_G__267425$jscomp$inline_4087$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__267406_G__267425$jscomp$inline_4087$$)};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__267406_G__267425$jscomp$inline_4087$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__267406_G__267425$jscomp$inline_4087$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("li", $G__267375$$) : $APP.$helix$core$jsxs$$.call(null, "li", $G__267375$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__267320_cost_data$jscomp$1_map__267306_map__267306__$1_props__41575__auto__$jscomp$14_vec__267303$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__267320_cost_data$jscomp$1_map__267306_map__267306__$1_props__41575__auto__$jscomp$14_vec__267303$$);
};
$amp$pages$budget$table$pad_two_digits$$ = function($n$jscomp$225$$) {
  return $n$jscomp$225$$ < 10 ? "0" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($n$jscomp$225$$) : "" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($n$jscomp$225$$);
};
$amp$pages$budget$table$detail_line_item$$ = function($G__267516_G__267610_map__267478_map__267478__$1_props__41575__auto__$jscomp$15_vec__267475$$, $maybe_ref__41576__auto__$jscomp$15$$) {
  $G__267516_G__267610_map__267478_map__267478__$1_props__41575__auto__$jscomp$15_vec__267475$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__267516_G__267610_map__267478_map__267478__$1_props__41575__auto__$jscomp$15_vec__267475$$), $maybe_ref__41576__auto__$jscomp$15$$], null);
  $G__267516_G__267610_map__267478_map__267478__$1_props__41575__auto__$jscomp$15_vec__267475$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__267516_G__267610_map__267478_map__267478__$1_props__41575__auto__$jscomp$15_vec__267475$$, 0, null);
  $G__267516_G__267610_map__267478_map__267478__$1_props__41575__auto__$jscomp$15_vec__267475$$ = $APP.$cljs$core$__destructure_map$$($G__267516_G__267610_map__267478_map__267478__$1_props__41575__auto__$jscomp$15_vec__267475$$);
  var $idx$jscomp$70$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__267516_G__267610_map__267478_map__267478__$1_props__41575__auto__$jscomp$15_vec__267475$$, $APP.$cljs$cst$756$idx$$), $detail$jscomp$7$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__267516_G__267610_map__267478_map__267478__$1_props__41575__auto__$jscomp$15_vec__267475$$, $APP.$cljs$cst$631$detail$$), $set_expanded_items$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__267516_G__267610_map__267478_map__267478__$1_props__41575__auto__$jscomp$15_vec__267475$$, 
  $cljs$cst$825$set_expanded_items$$), $expanded_items$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__267516_G__267610_map__267478_map__267478__$1_props__41575__auto__$jscomp$15_vec__267475$$, $cljs$cst$826$expanded_items$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $item_id$$ = "detail-item-" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($idx$jscomp$70$$), $description$jscomp$4$$ = $cljs$cst$827$description$$.$cljs$core$IFn$_invoke$arity$1$($detail$jscomp$7$$), $is_odd_detail_QMARK_$$ = !$APP.$cljs$core$even_QMARK_$$($idx$jscomp$70$$);
  if ($APP.$cljs$core$truth_$$($description$jscomp$4$$)) {
    return $G__267516_G__267610_map__267478_map__267478__$1_props__41575__auto__$jscomp$15_vec__267475$$ = function() {
      return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["cursor-pointer overflow-hidden", "font-mono", $is_odd_detail_QMARK_$$ ? "bg-slate-100/60 dark:bg-slate-800/60" : null]))), onClick:function() {
        function $G__267531$$($prev$jscomp$11$$) {
          return $APP.$cljs$core$truth_$$($prev$jscomp$11$$.$cljs$core$IFn$_invoke$arity$1$ ? $prev$jscomp$11$$.$cljs$core$IFn$_invoke$arity$1$($item_id$$) : $prev$jscomp$11$$.call(null, $item_id$$)) ? $APP.$cljs$core$disj$$.$cljs$core$IFn$_invoke$arity$2$($prev$jscomp$11$$, $item_id$$) : $APP.$cljs$core$conj$$.$cljs$core$IFn$_invoke$arity$2$($prev$jscomp$11$$, $item_id$$);
        }
        return $set_expanded_items$$.$cljs$core$IFn$_invoke$arity$1$ ? $set_expanded_items$$.$cljs$core$IFn$_invoke$arity$1$($G__267531$$) : $set_expanded_items$$.call(null, $G__267531$$);
      }, children:[function() {
        var $G__267549$$ = function() {
          return {className:"px-8 py-2 flex justify-between items-center", children:[function() {
            var $G__267557$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["text-[11px]", "text-slate-400  dark:text-slate-600", "mr-4"]))), children:"" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($amp$pages$budget$table$pad_two_digits$$($idx$jscomp$70$$ + 1)) + "."};
            return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__267557$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__267557$$);
          }(), function() {
            var $G__267565_JSCompiler_temp_const$jscomp$inline_4315$$ = $APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["justify-start flex-1 flex items-center", "text-sm", "text-slate-700  dark:text-slate-300"])));
            var $JSCompiler_temp_const$jscomp$inline_4316$$ = $APP.$cljs$cst$288$title$$.$cljs$core$IFn$_invoke$arity$1$($detail$jscomp$7$$);
            var $G__267569$jscomp$inline_4318_JSCompiler_inline_result$jscomp$inline_4317_JSCompiler_temp_const$jscomp$inline_4319$$ = $APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["w-4 h-4 ml-2", "text-slate-400  dark:text-slate-600"])));
            var $G__267573$jscomp$inline_4321_JSCompiler_inline_result$jscomp$inline_4320$$ = {};
            $G__267573$jscomp$inline_4321_JSCompiler_inline_result$jscomp$inline_4320$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$ui$icons$InformationCircle$$, $G__267573$jscomp$inline_4321_JSCompiler_inline_result$jscomp$inline_4320$$) : $APP.$helix$core$jsx$$.call(null, $amp$ui$icons$InformationCircle$$, $G__267573$jscomp$inline_4321_JSCompiler_inline_result$jscomp$inline_4320$$);
            $G__267569$jscomp$inline_4318_JSCompiler_inline_result$jscomp$inline_4317_JSCompiler_temp_const$jscomp$inline_4319$$ = {className:$G__267569$jscomp$inline_4318_JSCompiler_inline_result$jscomp$inline_4317_JSCompiler_temp_const$jscomp$inline_4319$$, children:$G__267573$jscomp$inline_4321_JSCompiler_inline_result$jscomp$inline_4320$$};
            $G__267569$jscomp$inline_4318_JSCompiler_inline_result$jscomp$inline_4317_JSCompiler_temp_const$jscomp$inline_4319$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__267569$jscomp$inline_4318_JSCompiler_inline_result$jscomp$inline_4317_JSCompiler_temp_const$jscomp$inline_4319$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__267569$jscomp$inline_4318_JSCompiler_inline_result$jscomp$inline_4317_JSCompiler_temp_const$jscomp$inline_4319$$);
            $G__267565_JSCompiler_temp_const$jscomp$inline_4315$$ = {className:$G__267565_JSCompiler_temp_const$jscomp$inline_4315$$, children:[$JSCompiler_temp_const$jscomp$inline_4316$$, $G__267569$jscomp$inline_4318_JSCompiler_inline_result$jscomp$inline_4317_JSCompiler_temp_const$jscomp$inline_4319$$]};
            return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__267565_JSCompiler_temp_const$jscomp$inline_4315$$) : $APP.$helix$core$jsxs$$.call(null, "span", $G__267565_JSCompiler_temp_const$jscomp$inline_4315$$);
          }(), function() {
            var $G__267577$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$value_sm$$), children:$amp$pages$budget$table$format_currency$$($cljs$cst$820$amount$$.$cljs$core$IFn$_invoke$arity$1$($detail$jscomp$7$$))};
            return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__267577$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__267577$$);
          }()]};
        }();
        return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__267549$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__267549$$);
      }(), $APP.$cljs$core$truth_$$($expanded_items$$.$cljs$core$IFn$_invoke$arity$1$ ? $expanded_items$$.$cljs$core$IFn$_invoke$arity$1$($item_id$$) : $expanded_items$$.call(null, $item_id$$)) ? function() {
        var $G__267586$$ = function() {
          return {className:"border-l-2 border-pink-500/30", children:function() {
            var $G__267592_G__267596$jscomp$inline_4388_JSCompiler_temp_const$jscomp$inline_4389$$ = $APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_sm$$, "bg-slate-100/60 dark:bg-slate-800/60"])));
            var $G__267600$jscomp$inline_4391_JSCompiler_inline_result$jscomp$inline_4390$$ = {className:"px-6 py-4", children:$description$jscomp$4$$};
            $G__267600$jscomp$inline_4391_JSCompiler_inline_result$jscomp$inline_4390$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__267600$jscomp$inline_4391_JSCompiler_inline_result$jscomp$inline_4390$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__267600$jscomp$inline_4391_JSCompiler_inline_result$jscomp$inline_4390$$);
            $G__267592_G__267596$jscomp$inline_4388_JSCompiler_temp_const$jscomp$inline_4389$$ = {className:$G__267592_G__267596$jscomp$inline_4388_JSCompiler_temp_const$jscomp$inline_4389$$, children:$G__267600$jscomp$inline_4391_JSCompiler_inline_result$jscomp$inline_4390$$};
            $G__267592_G__267596$jscomp$inline_4388_JSCompiler_temp_const$jscomp$inline_4389$$ = {className:"", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__267592_G__267596$jscomp$inline_4388_JSCompiler_temp_const$jscomp$inline_4389$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__267592_G__267596$jscomp$inline_4388_JSCompiler_temp_const$jscomp$inline_4389$$)};
            return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__267592_G__267596$jscomp$inline_4388_JSCompiler_temp_const$jscomp$inline_4389$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__267592_G__267596$jscomp$inline_4388_JSCompiler_temp_const$jscomp$inline_4389$$);
          }()};
        }();
        return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__267586$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__267586$$);
      }() : null]};
    }(), $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("li", $G__267516_G__267610_map__267478_map__267478__$1_props__41575__auto__$jscomp$15_vec__267475$$) : $APP.$helix$core$jsxs$$.call(null, "li", $G__267516_G__267610_map__267478_map__267478__$1_props__41575__auto__$jscomp$15_vec__267475$$);
  }
  $G__267516_G__267610_map__267478_map__267478__$1_props__41575__auto__$jscomp$15_vec__267475$$ = function() {
    return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-mono", $is_odd_detail_QMARK_$$ ? "bg-slate-100/60 dark:bg-slate-800/60" : null]))), children:function() {
      var $G__267616$$ = function() {
        return {className:"px-8 py-2 flex justify-between items-center", children:[function() {
          var $G__267620$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["text-[11px]", "text-slate-400  dark:text-slate-600", "mr-4"]))), children:"" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($amp$pages$budget$table$pad_two_digits$$($idx$jscomp$70$$ + 1)) + "."};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__267620$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__267620$$);
        }(), function() {
          var $G__267624$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["justify-start flex-1", "text-sm", "text-slate-700  dark:text-slate-300"]))), children:$APP.$cljs$cst$288$title$$.$cljs$core$IFn$_invoke$arity$1$($detail$jscomp$7$$)};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__267624$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__267624$$);
        }(), function() {
          var $G__267633$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$value_sm$$), children:$amp$pages$budget$table$format_currency$$($cljs$cst$820$amount$$.$cljs$core$IFn$_invoke$arity$1$($detail$jscomp$7$$))};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__267633$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__267633$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__267616$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__267616$$);
    }()};
  }();
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("li", $G__267516_G__267610_map__267478_map__267478__$1_props__41575__auto__$jscomp$15_vec__267475$$) : $APP.$helix$core$jsx$$.call(null, "li", $G__267516_G__267610_map__267478_map__267478__$1_props__41575__auto__$jscomp$15_vec__267475$$);
};
$amp$pages$budget$table$details__GT_render_items$$ = function($G__268205_details$jscomp$4$$) {
  for (var $G__268204_items$jscomp$8$$ = $G__268205_details$jscomp$4$$, $idx$jscomp$71$$ = 0, $prev_group$$ = null, $result$jscomp$135$$ = $APP.$cljs$core$PersistentVector$EMPTY$$;;) {
    if ($APP.$cljs$core$empty_QMARK_$$($G__268204_items$jscomp$8$$)) {
      return $result$jscomp$135$$;
    }
    var $detail$jscomp$8$$ = $APP.$cljs$core$first$$($G__268204_items$jscomp$8$$), $curr_group$$ = $APP.$cljs$cst$584$group$$.$cljs$core$IFn$_invoke$arity$1$($detail$jscomp$8$$), $show_header_QMARK_$$ = function() {
      var $and__5140__auto__$jscomp$89$$ = $curr_group$$;
      return $APP.$cljs$core$truth_$$($and__5140__auto__$jscomp$89$$) ? $APP.$cljs$core$not_EQ_$cljs$0core$0IFn$0_invoke$0arity$02$$($curr_group$$, $prev_group$$) : $and__5140__auto__$jscomp$89$$;
    }();
    $G__268204_items$jscomp$8$$ = $APP.$cljs$core$rest$$($G__268204_items$jscomp$8$$);
    $G__268205_details$jscomp$4$$ = $idx$jscomp$71$$ + 1;
    var $G__268206$$ = $curr_group$$, $G__268207$$ = function() {
      var $G__267691_G__267691__$1$$ = $result$jscomp$135$$;
      $G__267691_G__267691__$1$$ = $APP.$cljs$core$truth_$$($show_header_QMARK_$$) ? $APP.$cljs$core$conj$$.$cljs$core$IFn$_invoke$arity$2$($G__267691_G__267691__$1$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$25$type$$, $APP.$cljs$cst$238$header$$, $APP.$cljs$cst$415$label$$, $curr_group$$, $APP.$cljs$cst$99$key$$, "gh-" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($idx$jscomp$71$$)], null)) : $G__267691_G__267691__$1$$;
      return $APP.$cljs$core$conj$$.$cljs$core$IFn$_invoke$arity$2$($G__267691_G__267691__$1$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$25$type$$, $APP.$cljs$cst$631$detail$$, $APP.$cljs$cst$631$detail$$, $detail$jscomp$8$$, $APP.$cljs$cst$756$idx$$, $idx$jscomp$71$$, $APP.$cljs$cst$99$key$$, "d-" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($idx$jscomp$71$$)], null));
    }();
    $idx$jscomp$71$$ = $G__268205_details$jscomp$4$$;
    $prev_group$$ = $G__268206$$;
    $result$jscomp$135$$ = $G__268207$$;
  }
};
$amp$pages$budget$table$section_line_item$$ = function($G__267772_details$jscomp$5_map__267764_map__267764__$1_props__41575__auto__$jscomp$16_vec__267761$$, $maybe_ref__41576__auto__$jscomp$16_tax_rate$jscomp$1$$) {
  $G__267772_details$jscomp$5_map__267764_map__267764__$1_props__41575__auto__$jscomp$16_vec__267761$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__267772_details$jscomp$5_map__267764_map__267764__$1_props__41575__auto__$jscomp$16_vec__267761$$), $maybe_ref__41576__auto__$jscomp$16_tax_rate$jscomp$1$$], null);
  $G__267772_details$jscomp$5_map__267764_map__267764__$1_props__41575__auto__$jscomp$16_vec__267761$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__267772_details$jscomp$5_map__267764_map__267764__$1_props__41575__auto__$jscomp$16_vec__267761$$, 0, null);
  $G__267772_details$jscomp$5_map__267764_map__267764__$1_props__41575__auto__$jscomp$16_vec__267761$$ = $APP.$cljs$core$__destructure_map$$($G__267772_details$jscomp$5_map__267764_map__267764__$1_props__41575__auto__$jscomp$16_vec__267761$$);
  var $idx$jscomp$72$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__267772_details$jscomp$5_map__267764_map__267764__$1_props__41575__auto__$jscomp$16_vec__267761$$, $APP.$cljs$cst$756$idx$$), $item$jscomp$38$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__267772_details$jscomp$5_map__267764_map__267764__$1_props__41575__auto__$jscomp$16_vec__267761$$, $cljs$cst$828$item$$), $set_expanded_items$jscomp$1$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__267772_details$jscomp$5_map__267764_map__267764__$1_props__41575__auto__$jscomp$16_vec__267761$$, 
  $cljs$cst$825$set_expanded_items$$), $expanded_items$jscomp$1$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__267772_details$jscomp$5_map__267764_map__267764__$1_props__41575__auto__$jscomp$16_vec__267761$$, $cljs$cst$826$expanded_items$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $section_ref$$ = $APP.$helix$hooks$use_ref$$("section-" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($idx$jscomp$72$$)), $scroll_to_ref$$ = $amp$hooks$use_scroll_to$use_scroll_to_ref$$(), $item_id$jscomp$1$$ = "item-" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($idx$jscomp$72$$);
  $G__267772_details$jscomp$5_map__267764_map__267764__$1_props__41575__auto__$jscomp$16_vec__267761$$ = $cljs$cst$821$details$$.$cljs$core$IFn$_invoke$arity$1$($item$jscomp$38$$);
  var $sub_total$jscomp$2$$ = $APP.$cljs$core$reduce$cljs$0core$0IFn$0_invoke$0arity$02$$($APP.$cljs$core$_PLUS_$$, $APP.$cljs$core$map$$.$cljs$core$IFn$_invoke$arity$2$($cljs$cst$820$amount$$, $G__267772_details$jscomp$5_map__267764_map__267764__$1_props__41575__auto__$jscomp$16_vec__267761$$));
  $maybe_ref__41576__auto__$jscomp$16_tax_rate$jscomp$1$$ = $cljs$cst$822$rate$$.$cljs$core$IFn$_invoke$arity$1$($cljs$cst$823$tax$$.$cljs$core$IFn$_invoke$arity$1$($item$jscomp$38$$));
  var $tax_label$$ = $APP.$cljs$cst$415$label$$.$cljs$core$IFn$_invoke$arity$1$($cljs$cst$823$tax$$.$cljs$core$IFn$_invoke$arity$1$($item$jscomp$38$$)), $tax_total$jscomp$1$$ = $sub_total$jscomp$2$$ * $maybe_ref__41576__auto__$jscomp$16_tax_rate$jscomp$1$$, $has_tax_QMARK_$jscomp$1$$ = $maybe_ref__41576__auto__$jscomp$16_tax_rate$jscomp$1$$ > 0, $total$jscomp$4$$ = $sub_total$jscomp$2$$ + $tax_total$jscomp$1$$, $is_odd$$ = !$APP.$cljs$core$even_QMARK_$$($idx$jscomp$72$$), $render_items$$ = $amp$pages$budget$table$details__GT_render_items$$($G__267772_details$jscomp$5_map__267764_map__267764__$1_props__41575__auto__$jscomp$16_vec__267761$$);
  $G__267772_details$jscomp$5_map__267764_map__267764__$1_props__41575__auto__$jscomp$16_vec__267761$$ = function() {
    return {ref:$section_ref$$, className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["overflow-hidden", "font-mono", $is_odd$$ ? "bg-white        dark:bg-slate-900" : "bg-slate-100/60 dark:bg-slate-800/60"]))), children:[function() {
      var $G__267776$$ = function() {
        return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["flex flex-wrap items-baseline px-4 py-3 gap-y-1 cursor-pointer transition-colors", "hover:bg-slate-800/50 dark:hover:bg-slate-800/50"]))), onClick:function() {
          function $G__267783$$($prev$jscomp$12$$) {
            return $APP.$cljs$core$truth_$$($prev$jscomp$12$$.$cljs$core$IFn$_invoke$arity$1$ ? $prev$jscomp$12$$.$cljs$core$IFn$_invoke$arity$1$($item_id$jscomp$1$$) : $prev$jscomp$12$$.call(null, $item_id$jscomp$1$$)) ? $APP.$cljs$core$disj$$.$cljs$core$IFn$_invoke$arity$2$($prev$jscomp$12$$, $item_id$jscomp$1$$) : $APP.$cljs$core$conj$$.$cljs$core$IFn$_invoke$arity$2$($prev$jscomp$12$$, $item_id$jscomp$1$$);
          }
          return $set_expanded_items$jscomp$1$$.$cljs$core$IFn$_invoke$arity$1$ ? $set_expanded_items$jscomp$1$$.$cljs$core$IFn$_invoke$arity$1$($G__267783$$) : $set_expanded_items$jscomp$1$$.call(null, $G__267783$$);
        }, children:[function() {
          var $G__267793$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$("font-display;font-semibold;uppercase;tracking-wide;text-slate-700  dark:text-slate-300;text-base sm:text-lg flex-1 min-w-0".split(";")))), children:"" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($idx$jscomp$72$$ + 1) + ". " + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($APP.$cljs$cst$288$title$$.$cljs$core$IFn$_invoke$arity$1$($item$jscomp$38$$))};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("h3", $G__267793$$) : $APP.$helix$core$jsx$$.call(null, "h3", $G__267793$$);
        }(), function() {
          var $G__267803$$ = function() {
            return {className:"flex items-baseline justify-end shrink-0 ml-2", children:[function() {
              var $G__267812$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-semibold", "text-indigo-600 dark:text-indigo-300", "text-sm", "sm:text-base"]))), children:$amp$pages$budget$table$format_currency$$($total$jscomp$4$$)};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__267812$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__267812$$);
            }(), function() {
              var $G__267828_JSCompiler_temp_const$jscomp$inline_3582$$ = $APP.$helix$impl$props$normalize_class$$("w-4 h-4 ml-3 transition-transform " + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$("text-slate-500  dark:text-slate-500") + " " + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($APP.$cljs$core$truth_$$($expanded_items$jscomp$1$$.$cljs$core$IFn$_invoke$arity$1$ ? $expanded_items$jscomp$1$$.$cljs$core$IFn$_invoke$arity$1$($item_id$jscomp$1$$) : $expanded_items$jscomp$1$$.call(null, 
              $item_id$jscomp$1$$)) ? "rotate-90" : null));
              var $G__267834$jscomp$inline_3584_JSCompiler_inline_result$jscomp$inline_3583$$ = {};
              $G__267834$jscomp$inline_3584_JSCompiler_inline_result$jscomp$inline_3583$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$ui$icons$ChevronRightIcon$$, $G__267834$jscomp$inline_3584_JSCompiler_inline_result$jscomp$inline_3583$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$ui$icons$ChevronRightIcon$$, $G__267834$jscomp$inline_3584_JSCompiler_inline_result$jscomp$inline_3583$$);
              $G__267828_JSCompiler_temp_const$jscomp$inline_3582$$ = {className:$G__267828_JSCompiler_temp_const$jscomp$inline_3582$$, children:$G__267834$jscomp$inline_3584_JSCompiler_inline_result$jscomp$inline_3583$$};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__267828_JSCompiler_temp_const$jscomp$inline_3582$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__267828_JSCompiler_temp_const$jscomp$inline_3582$$);
            }()]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__267803$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__267803$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__267776$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__267776$$);
    }(), $APP.$cljs$core$truth_$$($expanded_items$jscomp$1$$.$cljs$core$IFn$_invoke$arity$1$ ? $expanded_items$jscomp$1$$.$cljs$core$IFn$_invoke$arity$1$($item_id$jscomp$1$$) : $expanded_items$jscomp$1$$.call(null, $item_id$jscomp$1$$)) ? function() {
      var $G__267840$$ = function() {
        return {className:"border-l-2 border-pink-500/30", children:[function() {
          var $G__267846_JSCompiler_temp_const$jscomp$inline_4098$$ = $APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_sm$$, "bg-slate-100/60 dark:bg-slate-800/60"])));
          var $G__267855$jscomp$inline_4100_JSCompiler_inline_result$jscomp$inline_4099$$ = {className:"px-8 py-4", children:$cljs$cst$827$description$$.$cljs$core$IFn$_invoke$arity$1$($item$jscomp$38$$)};
          $G__267855$jscomp$inline_4100_JSCompiler_inline_result$jscomp$inline_4099$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__267855$jscomp$inline_4100_JSCompiler_inline_result$jscomp$inline_4099$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__267855$jscomp$inline_4100_JSCompiler_inline_result$jscomp$inline_4099$$);
          $G__267846_JSCompiler_temp_const$jscomp$inline_4098$$ = {className:$G__267846_JSCompiler_temp_const$jscomp$inline_4098$$, children:$G__267855$jscomp$inline_4100_JSCompiler_inline_result$jscomp$inline_4099$$};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__267846_JSCompiler_temp_const$jscomp$inline_4098$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__267846_JSCompiler_temp_const$jscomp$inline_4098$$);
        }(), function() {
          var $G__267861$$ = function() {
            return {children:$APP.$cljs$core$map$$.$cljs$core$IFn$_invoke$arity$2$(function($G__267880_G__267889_ri$$) {
              var $G__267868_G__267868__$1_G__267879_G__267888_JSCompiler_temp_const$jscomp$inline_4102$$ = $APP.$cljs$cst$25$type$$.$cljs$core$IFn$_invoke$arity$1$($G__267880_G__267889_ri$$);
              $G__267868_G__267868__$1_G__267879_G__267888_JSCompiler_temp_const$jscomp$inline_4102$$ = $G__267868_G__267868__$1_G__267879_G__267888_JSCompiler_temp_const$jscomp$inline_4102$$ instanceof $APP.$cljs$core$Keyword$$ ? $G__267868_G__267868__$1_G__267879_G__267888_JSCompiler_temp_const$jscomp$inline_4102$$.$fqn$ : null;
              switch($G__267868_G__267868__$1_G__267879_G__267888_JSCompiler_temp_const$jscomp$inline_4102$$) {
                case "header":
                  $G__267868_G__267868__$1_G__267879_G__267888_JSCompiler_temp_const$jscomp$inline_4102$$ = $APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$("px-8 py-2 border-b border-slate-700/40;bg-white        dark:bg-slate-900;text-pink-700/50 dark:text-pink-300/50;text-sm sm:text-base;font-semibold;uppercase;tracking-[0.15em]".split(";"))));
                  var $G__267884$jscomp$inline_4104_JSCompiler_inline_result$jscomp$inline_4103$$ = {children:$APP.$cljs$cst$415$label$$.$cljs$core$IFn$_invoke$arity$1$($G__267880_G__267889_ri$$)};
                  $G__267884$jscomp$inline_4104_JSCompiler_inline_result$jscomp$inline_4103$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__267884$jscomp$inline_4104_JSCompiler_inline_result$jscomp$inline_4103$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__267884$jscomp$inline_4104_JSCompiler_inline_result$jscomp$inline_4103$$);
                  $G__267868_G__267868__$1_G__267879_G__267888_JSCompiler_temp_const$jscomp$inline_4102$$ = {className:$G__267868_G__267868__$1_G__267879_G__267888_JSCompiler_temp_const$jscomp$inline_4102$$, children:$G__267884$jscomp$inline_4104_JSCompiler_inline_result$jscomp$inline_4103$$};
                  $G__267880_G__267889_ri$$ = $APP.$cljs$cst$99$key$$.$cljs$core$IFn$_invoke$arity$1$($G__267880_G__267889_ri$$);
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$("div", $G__267868_G__267868__$1_G__267879_G__267888_JSCompiler_temp_const$jscomp$inline_4102$$, $G__267880_G__267889_ri$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__267868_G__267868__$1_G__267879_G__267888_JSCompiler_temp_const$jscomp$inline_4102$$, $G__267880_G__267889_ri$$);
                case "detail":
                  return $G__267868_G__267868__$1_G__267879_G__267888_JSCompiler_temp_const$jscomp$inline_4102$$ = {idx:$APP.$cljs$cst$756$idx$$.$cljs$core$IFn$_invoke$arity$1$($G__267880_G__267889_ri$$), detail:$APP.$cljs$cst$631$detail$$.$cljs$core$IFn$_invoke$arity$1$($G__267880_G__267889_ri$$), "set-expanded-items":$set_expanded_items$jscomp$1$$, "expanded-items":$expanded_items$jscomp$1$$}, $G__267880_G__267889_ri$$ = $APP.$cljs$cst$99$key$$.$cljs$core$IFn$_invoke$arity$1$($G__267880_G__267889_ri$$), 
                  $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$($amp$pages$budget$table$detail_line_item$$, $G__267868_G__267868__$1_G__267879_G__267888_JSCompiler_temp_const$jscomp$inline_4102$$, $G__267880_G__267889_ri$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$budget$table$detail_line_item$$, $G__267868_G__267868__$1_G__267879_G__267888_JSCompiler_temp_const$jscomp$inline_4102$$, $G__267880_G__267889_ri$$);
                default:
                  throw Error("No matching clause: " + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($G__267868_G__267868__$1_G__267879_G__267888_JSCompiler_temp_const$jscomp$inline_4102$$));
              }
            }, $render_items$$)};
          }();
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("ol", $G__267861$$) : $APP.$helix$core$jsx$$.call(null, "ol", $G__267861$$);
        }(), function() {
          var $G__267898$$ = function() {
            return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["bg-white        dark:bg-slate-900", "flex flex-col border-t border-slate-200 dark:border-slate-800"]))), children:[$has_tax_QMARK_$jscomp$1$$ ? function() {
              var $G__267903$$ = function() {
                return {children:[function() {
                  var $G__267907$$ = function() {
                    return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-semibold", "text-sm", "px-8 py-2 flex"]))), children:[function() {
                      var $G__267911$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["text-[10px]", "text-slate-400  dark:text-slate-600"]))), children:"-"};
                      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__267911$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__267911$$);
                    }(), function() {
                      var $G__267915$$ = function() {
                        return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["flex justify-between ml-8 w-full", "text-slate-700  dark:text-slate-300"]))), children:[function() {
                          var $G__267919$$ = {children:"Sub total: "};
                          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__267919$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__267919$$);
                        }(), function() {
                          var $G__267923$$ = {children:$amp$pages$budget$table$format_currency$$($sub_total$jscomp$2$$)};
                          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__267923$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__267923$$);
                        }()]};
                      }();
                      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__267915$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__267915$$);
                    }()]};
                  }();
                  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__267907$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__267907$$);
                }(), function() {
                  var $G__267927$$ = function() {
                    return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-semibold", "text-sm", "px-8 py-2 flex"]))), children:[function() {
                      var $G__267931$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["text-[10px]", "text-slate-400  dark:text-slate-600"]))), children:"-"};
                      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__267931$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__267931$$);
                    }(), function() {
                      var $G__267935$$ = function() {
                        return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["flex justify-between ml-8 w-full", "text-amber-600/80 dark:text-amber-300/80"]))), children:[function() {
                          var $G__267940$$ = {children:$tax_label$$};
                          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__267940$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__267940$$);
                        }(), function() {
                          var $G__267947$$ = {children:$amp$pages$budget$table$format_currency$$($tax_total$jscomp$1$$)};
                          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__267947$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__267947$$);
                        }()]};
                      }();
                      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__267935$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__267935$$);
                    }()]};
                  }();
                  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__267927$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__267927$$);
                }()]};
              }();
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__267903$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__267903$$);
            }() : null, function() {
              var $G__267951$$ = function() {
                return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-bold", "text-base", "bg-slate-50 dark:bg-slate-950 px-8 py-4 flex border-t border-pink-500/20"]))), children:[function() {
                  var $G__267957$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["text-[10px]", "text-slate-400  dark:text-slate-600"]))), children:"-"};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__267957$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__267957$$);
                }(), function() {
                  var $G__267963$$ = function() {
                    return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["flex justify-between ml-8 w-full", "text-pink-700   dark:text-pink-300"]))), children:[function() {
                      var $G__267975$$ = {children:"Total: "};
                      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__267975$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__267975$$);
                    }(), function() {
                      var $G__267984$$ = {children:$amp$pages$budget$table$format_currency$$($total$jscomp$4$$)};
                      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__267984$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__267984$$);
                    }()]};
                  }();
                  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__267963$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__267963$$);
                }()]};
              }();
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__267951$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__267951$$);
            }(), function() {
              var $G__268020$$ = function() {
                return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$btn_text$$, "bg-slate-100/60 dark:bg-slate-800/60", "flex p-3 justify-center items-center cursor-pointer"]))), onClick:function() {
                  function $G__268031_268209$$($prev$jscomp$13$$) {
                    return $APP.$cljs$core$truth_$$($prev$jscomp$13$$.$cljs$core$IFn$_invoke$arity$1$ ? $prev$jscomp$13$$.$cljs$core$IFn$_invoke$arity$1$($item_id$jscomp$1$$) : $prev$jscomp$13$$.call(null, $item_id$jscomp$1$$)) ? $APP.$cljs$core$disj$$.$cljs$core$IFn$_invoke$arity$2$($prev$jscomp$13$$, $item_id$jscomp$1$$) : $APP.$cljs$core$conj$$.$cljs$core$IFn$_invoke$arity$2$($prev$jscomp$13$$, $item_id$jscomp$1$$);
                  }
                  $set_expanded_items$jscomp$1$$.$cljs$core$IFn$_invoke$arity$1$ ? $set_expanded_items$jscomp$1$$.$cljs$core$IFn$_invoke$arity$1$($G__268031_268209$$) : $set_expanded_items$jscomp$1$$.call(null, $G__268031_268209$$);
                  return $scroll_to_ref$$.$cljs$core$IFn$_invoke$arity$1$ ? $scroll_to_ref$$.$cljs$core$IFn$_invoke$arity$1$($section_ref$$) : $scroll_to_ref$$.call(null, $section_ref$$);
                }, children:["CLOSE SECTION", function() {
                  var $G__268037_JSCompiler_temp_const$jscomp$inline_3590$$ = $APP.$helix$impl$props$normalize_class$$("w-4 h-4 transition-transform ml-2 " + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($APP.$cljs$core$truth_$$($expanded_items$jscomp$1$$.$cljs$core$IFn$_invoke$arity$1$ ? $expanded_items$jscomp$1$$.$cljs$core$IFn$_invoke$arity$1$($item_id$jscomp$1$$) : $expanded_items$jscomp$1$$.call(null, $item_id$jscomp$1$$)) ? "-rotate-90" : null));
                  var $G__268043$jscomp$inline_3592_JSCompiler_inline_result$jscomp$inline_3591$$ = {};
                  $G__268043$jscomp$inline_3592_JSCompiler_inline_result$jscomp$inline_3591$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$ui$icons$ChevronRightIcon$$, $G__268043$jscomp$inline_3592_JSCompiler_inline_result$jscomp$inline_3591$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$ui$icons$ChevronRightIcon$$, $G__268043$jscomp$inline_3592_JSCompiler_inline_result$jscomp$inline_3591$$);
                  $G__268037_JSCompiler_temp_const$jscomp$inline_3590$$ = {className:$G__268037_JSCompiler_temp_const$jscomp$inline_3590$$, children:$G__268043$jscomp$inline_3592_JSCompiler_inline_result$jscomp$inline_3591$$};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__268037_JSCompiler_temp_const$jscomp$inline_3590$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__268037_JSCompiler_temp_const$jscomp$inline_3590$$);
                }()]};
              }();
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__268020$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__268020$$);
            }()]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__267898$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__267898$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__267840$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__267840$$);
    }() : null]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("li", $G__267772_details$jscomp$5_map__267764_map__267764__$1_props__41575__auto__$jscomp$16_vec__267761$$) : $APP.$helix$core$jsxs$$.call(null, "li", $G__267772_details$jscomp$5_map__267764_map__267764__$1_props__41575__auto__$jscomp$16_vec__267761$$);
};
$amp$pages$budget$table$budget_table$$ = function($G__268091_map__268082_map__268082__$1_props__41575__auto__$jscomp$17_vec__268079_vec__268083$$, $maybe_ref__41576__auto__$jscomp$17$$) {
  $G__268091_map__268082_map__268082__$1_props__41575__auto__$jscomp$17_vec__268079_vec__268083$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__268091_map__268082_map__268082__$1_props__41575__auto__$jscomp$17_vec__268079_vec__268083$$), $maybe_ref__41576__auto__$jscomp$17$$], null);
  $G__268091_map__268082_map__268082__$1_props__41575__auto__$jscomp$17_vec__268079_vec__268083$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__268091_map__268082_map__268082__$1_props__41575__auto__$jscomp$17_vec__268079_vec__268083$$, 0, null);
  $G__268091_map__268082_map__268082__$1_props__41575__auto__$jscomp$17_vec__268079_vec__268083$$ = $APP.$cljs$core$__destructure_map$$($G__268091_map__268082_map__268082__$1_props__41575__auto__$jscomp$17_vec__268079_vec__268083$$);
  var $cost_data$jscomp$2$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__268091_map__268082_map__268082__$1_props__41575__auto__$jscomp$17_vec__268079_vec__268083$$, $cljs$cst$824$cost_data$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__268091_map__268082_map__268082__$1_props__41575__auto__$jscomp$17_vec__268079_vec__268083$$ = $APP.$helix$hooks$use_state$$($APP.$cljs$core$PersistentHashSet$EMPTY$$);
  var $expanded_items$jscomp$2$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__268091_map__268082_map__268082__$1_props__41575__auto__$jscomp$17_vec__268079_vec__268083$$, 0, null), $set_expanded_items$jscomp$2$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__268091_map__268082_map__268082__$1_props__41575__auto__$jscomp$17_vec__268079_vec__268083$$, 1, null);
  $G__268091_map__268082_map__268082__$1_props__41575__auto__$jscomp$17_vec__268079_vec__268083$$ = function() {
    return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["w-full", "text-slate-950  dark:text-white", "font-mono"]))), children:[$APP.$cljs$core$map_indexed$cljs$0core$0IFn$0_invoke$0arity$02$$(function($G__268102_idx$jscomp$73$$, $G__268101_item$jscomp$39$$) {
      $G__268101_item$jscomp$39$$ = {idx:$G__268102_idx$jscomp$73$$, item:$G__268101_item$jscomp$39$$, "set-expanded-items":$set_expanded_items$jscomp$2$$, "expanded-items":$expanded_items$jscomp$2$$};
      $G__268102_idx$jscomp$73$$ = "" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($G__268102_idx$jscomp$73$$) + "-section";
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$($amp$pages$budget$table$section_line_item$$, $G__268101_item$jscomp$39$$, $G__268102_idx$jscomp$73$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$budget$table$section_line_item$$, $G__268101_item$jscomp$39$$, $G__268102_idx$jscomp$73$$);
    }, $cost_data$jscomp$2$$), function() {
      var $G__268130$$ = {"cost-data":$cost_data$jscomp$2$$};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$pages$budget$table$total_section$$, $G__268130$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$budget$table$total_section$$, $G__268130$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("ol", $G__268091_map__268082_map__268082__$1_props__41575__auto__$jscomp$17_vec__268079_vec__268083$$) : $APP.$helix$core$jsxs$$.call(null, "ol", $G__268091_map__268082_map__268082__$1_props__41575__auto__$jscomp$17_vec__268079_vec__268083$$);
};
$amp$pages$budget$cost_breakdown$preview$$ = function($G__268217_map__268215_props__41575__auto__$jscomp$18_vec__268212$$, $maybe_ref__41576__auto__$jscomp$18$$) {
  $G__268217_map__268215_props__41575__auto__$jscomp$18_vec__268212$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__268217_map__268215_props__41575__auto__$jscomp$18_vec__268212$$), $maybe_ref__41576__auto__$jscomp$18$$], null);
  $G__268217_map__268215_props__41575__auto__$jscomp$18_vec__268212$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__268217_map__268215_props__41575__auto__$jscomp$18_vec__268212$$, 0, null);
  $APP.$cljs$core$__destructure_map$$($G__268217_map__268215_props__41575__auto__$jscomp$18_vec__268212$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__268217_map__268215_props__41575__auto__$jscomp$18_vec__268212$$ = function() {
    return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_lg$$, "p-4"]))), children:[function() {
      var $G__268221$$ = {children:["The Armenia Pavilion at the 61st Venice Biennale is a major international cultural undertaking—", "structured to meet the standards of the most rigorous national presentations. "]};
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__268221$$) : $APP.$helix$core$jsxs$$.call(null, "span", $G__268221$$);
    }(), function() {
      var $G__268225$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:"With a total budget of approximately "};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__268225$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__268225$$);
    }(), function() {
      var $G__268229$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:" ("};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__268229$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__268229$$);
    }(), function() {
      var $G__268233$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$value_currency$$), children:"$1,6M USD"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__268233$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__268233$$);
    }(), function() {
      var $G__268237$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:"), the financial framework covers the full scope of "};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__268237$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__268237$$);
    }(), function() {
      var $G__268241$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:"production, installation, operations, communications,"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__268241$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__268241$$);
    }(), function() {
      var $G__268245$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:" and "};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__268245$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__268245$$);
    }(), function() {
      var $G__268249$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:"documentation"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__268249$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__268249$$);
    }(), function() {
      var $G__268253$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:". "};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__268253$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__268253$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__268217_map__268215_props__41575__auto__$jscomp$18_vec__268212$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__268217_map__268215_props__41575__auto__$jscomp$18_vec__268212$$);
};
$amp$pages$budget$cost_breakdown$details$$ = function($G__268264_map__268262_props__41575__auto__$jscomp$19_vec__268259$$, $maybe_ref__41576__auto__$jscomp$19$$) {
  $G__268264_map__268262_props__41575__auto__$jscomp$19_vec__268259$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__268264_map__268262_props__41575__auto__$jscomp$19_vec__268259$$), $maybe_ref__41576__auto__$jscomp$19$$], null);
  $G__268264_map__268262_props__41575__auto__$jscomp$19_vec__268259$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__268264_map__268262_props__41575__auto__$jscomp$19_vec__268259$$, 0, null);
  $APP.$cljs$core$__destructure_map$$($G__268264_map__268262_props__41575__auto__$jscomp$19_vec__268259$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__268264_map__268262_props__41575__auto__$jscomp$19_vec__268259$$ = function() {
    return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_lg$$, "p-4"]))), children:[function() {
      var $G__268268$$ = {children:["The Armenia Pavilion at the 61st Venice Biennale is a major international cultural undertaking—", "structured to meet the standards of the most rigorous national presentations. "]};
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__268268$$) : $APP.$helix$core$jsxs$$.call(null, "span", $G__268268$$);
    }(), function() {
      var $G__268272$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:"With a total budget of approximately "};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__268272$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__268272$$);
    }(), function() {
      var $G__268276$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:" ("};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__268276$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__268276$$);
    }(), function() {
      var $G__268280$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$value_currency$$), children:"$1,6M USD"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__268280$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__268280$$);
    }(), function() {
      var $G__268284$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:"), the financial framework covers the full scope of "};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__268284$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__268284$$);
    }(), function() {
      var $G__268288$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:"production, installation, operations, communications,"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__268288$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__268288$$);
    }(), function() {
      var $G__268292$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:" and "};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__268292$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__268292$$);
    }(), function() {
      var $G__268296$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:"documentation"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__268296$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__268296$$);
    }(), function() {
      var $G__268300$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:". "};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__268300$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__268300$$);
    }(), function() {
      var $G__268305$$ = {className:"block my-6", children:["As Armenia does not maintain a permanent national pavilion in Venice, a venue must be secured through rental—", "as is customary for many smaller and non-permanent participating nations. "]};
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__268305$$) : $APP.$helix$core$jsxs$$.call(null, "span", $G__268305$$);
    }(), function() {
      var $G__268309$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:"The selected site is located outside the Biennale's primary zones, enabling a significantly lower base rent—approximately "};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__268309$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__268309$$);
    }(), function() {
      var $G__268313$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$value_currency$$), children:"$145,600"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__268313$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__268313$$);
    }(), function() {
      var $G__268317$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:"—while remaining fully accredited and visible within the official Biennale structure. "};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__268317$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__268317$$);
    }(), function() {
      var $G__268321$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:"By contrast, venues within the Giardini or Arsenale—when available—typically begin at "};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__268321$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__268321$$);
    }(), function() {
      var $G__268325$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$value_currency$$), children:"$450,000"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__268325$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__268325$$);
    }(), function() {
      var $G__268329$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:" in base rent, before construction, staffing, utilities, logistics, and operating overhead. "};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__268329$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__268329$$);
    }(), function() {
      var $G__268334$$ = function() {
        return {className:"mt-6", children:[function() {
          var $G__268338$$ = {className:"mt-6", children:"Crucially, the nature of "};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__268338$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__268338$$);
        }(), function() {
          var $G__268342$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:"THE STUDIO"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__268342$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__268342$$);
        }(), function() {
          var $G__268347$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:" makes this venue choice not only strategic but essential. "};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__268347$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__268347$$);
        }(), function() {
          var $G__268351$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:"The work is conceived to be produced, refined, and evolved "};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__268351$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__268351$$);
        }(), function() {
          var $G__268355$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-semibold", "italic", "text-slate-900  dark:text-slate-100"]))), children:"on site"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__268355$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__268355$$);
        }(), function() {
          var $G__268363$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:", allowing the Pavilion to function simultaneously as exhibition space and working studio. "};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__268363$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__268363$$);
        }(), function() {
          var $G__268367$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:["This approach meets extremely tight production and installation deadlines while maintaining full artistic and technical control—", "conditions that would be far more difficult, costly, or even impossible under a traditional off-site fabrication and transport model. "]};
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__268367$$) : $APP.$helix$core$jsxs$$.call(null, "span", $G__268367$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__268334$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__268334$$);
    }(), function() {
      var $G__268374$$ = {className:"block my-6", children:"Rather than directing the majority of resources toward a single, fixed monumental installation, the artist and team have deliberately taken another route. "};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__268374$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__268374$$);
    }(), function() {
      var $G__268393$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:"By producing the work on site, the Pavilion avoids the need for a pre-fabricated "};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__268393$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__268393$$);
    }(), function() {
      var $G__268409$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-semibold", "italic", "text-slate-900  dark:text-slate-100"]))), children:"“grand object”"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__268409$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__268409$$);
    }(), function() {
      var $G__268421$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:" altogether. "};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__268421$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__268421$$);
    }(), function() {
      var $G__268435$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:"This decision reduces fabrication, crating, international shipping, and risk-related costs, while aligning more precisely with the broader conceptual goals: "};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__268435$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__268435$$);
    }(), function() {
      var $G__268447$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:"process over spectacle, presence over monumentality,"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__268447$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__268447$$);
    }(), function() {
      var $G__268461$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:" and "};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__268461$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__268461$$);
    }(), function() {
      var $G__268471$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:"sustained making over static display"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__268471$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__268471$$);
    }(), function() {
      var $G__268479$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:". "};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__268479$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__268479$$);
    }(), function() {
      var $G__268483$$ = function() {
        return {className:"my-6", children:[function() {
          var $G__268487$$ = {className:"", children:"In this sense, cost efficiency and artistic rigor are not in opposition but mutually reinforcing. "};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__268487$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__268487$$);
        }(), function() {
          var $G__268493$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:"The Pavilion's structure distributes resources across time, labor, materials, and public engagement—rather than concentrating them into a single object whose expense would be driven largely by transport and scale rather than meaning. "};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__268493$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__268493$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__268483$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__268483$$);
    }(), function() {
      var $G__268529$$ = function() {
        return {className:"block my-6", children:[function() {
          var $G__268555$$ = {className:"", children:"Despite these efficiencies, the overall cost of operating in Venice during the Biennale remains high. "};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__268555$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__268555$$);
        }(), function() {
          var $G__268581$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:"Venice's unique geography, limited infrastructure, and extraordinary demand elevate costs across all categories—logistics, storage, labor, accommodations, and technical services. "};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__268581$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__268581$$);
        }(), function() {
          var $G__268587$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:"These conditions are shared by all national pavilions and reflect the Biennale's position as the most visible international platform in contemporary art. "};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__268587$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__268587$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__268529$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__268529$$);
    }(), function() {
      var $G__268591$$ = {className:"mt-6", children:"Unlike projects that culminate at opening, this Pavilion is conceived as a"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__268591$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__268591$$);
    }(), function() {
      var $G__268595$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-semibold", "italic", "text-slate-900  dark:text-slate-100"]))), children:" seven-month operational commitment"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__268595$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__268595$$);
    }(), function() {
      var $G__268599$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:": a living environment that functions simultaneously as exhibition space, working studio, public forum, and diplomatic platform—requiring sustained staffing, materials, logistics, and institutional oversight throughout the duration of the Biennale. "};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__268599$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__268599$$);
    }(), function() {
      var $G__268604$$ = {className:"block mt-6", children:"Significant investment secures venue readiness and regulatory compliance, supports curatorial and administrative leadership, funds museum-scale fabrication and specialized craft, and addresses Venice-specific transport, storage, installation, and reverse logistics. "};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__268604$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__268604$$);
    }(), function() {
      var $G__268610$$ = function() {
        return {className:"block mt-6", children:[function() {
          var $G__268614$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:"THE STUDIO"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__268614$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__268614$$);
        }(), function() {
          var $G__268618$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:" is budgeted as an ongoing on-site operation, ensuring continuous execution, maintenance, and evolution of the work across the exhibition period—distinguishing the Pavilion from static presentations. "};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__268618$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__268618$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__268610$$) : $APP.$helix$core$jsxs$$.call(null, "span", $G__268610$$);
    }(), function() {
      var $G__268622$$ = {className:"block mt-6", children:"Public visibility and long-term legacy are strengthened through opening week programs, marketing and public relations, publication, and comprehensive film and photographic documentation—ensuring that the Pavilion's impact extends into international media, scholarship, and institutional archives. "};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__268622$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__268622$$);
    }(), function() {
      var $G__268626$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_closing$$, "block mt-6"]))), children:"A responsible contingency is included to accommodate the realities of an extended international project operating across jurisdictions, timelines, and currencies—ensuring stability, accountability, and the successful delivery of Armenia's national presentation on the world stage."};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__268626$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__268626$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__268264_map__268262_props__41575__auto__$jscomp$19_vec__268259$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__268264_map__268262_props__41575__auto__$jscomp$19_vec__268259$$);
};
$amp$pages$budget$cost_breakdown$footer$$ = function($G__268650_G__268655$jscomp$inline_4107_map__268648_props__41575__auto__$jscomp$20_vec__268645$$, $maybe_ref__41576__auto__$jscomp$20$$) {
  $G__268650_G__268655$jscomp$inline_4107_map__268648_props__41575__auto__$jscomp$20_vec__268645$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__268650_G__268655$jscomp$inline_4107_map__268648_props__41575__auto__$jscomp$20_vec__268645$$), $maybe_ref__41576__auto__$jscomp$20$$], null);
  $G__268650_G__268655$jscomp$inline_4107_map__268648_props__41575__auto__$jscomp$20_vec__268645$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__268650_G__268655$jscomp$inline_4107_map__268648_props__41575__auto__$jscomp$20_vec__268645$$, 0, null);
  $APP.$cljs$core$__destructure_map$$($G__268650_G__268655$jscomp$inline_4107_map__268648_props__41575__auto__$jscomp$20_vec__268645$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__268650_G__268655$jscomp$inline_4107_map__268648_props__41575__auto__$jscomp$20_vec__268645$$ = {"cost-data":$amp$pages$budget$cost_breakdown$cost_data$$};
  $G__268650_G__268655$jscomp$inline_4107_map__268648_props__41575__auto__$jscomp$20_vec__268645$$ = {className:"mt-12", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$pages$budget$table$budget_table$$, $G__268650_G__268655$jscomp$inline_4107_map__268648_props__41575__auto__$jscomp$20_vec__268645$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$budget$table$budget_table$$, $G__268650_G__268655$jscomp$inline_4107_map__268648_props__41575__auto__$jscomp$20_vec__268645$$)};
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__268650_G__268655$jscomp$inline_4107_map__268648_props__41575__auto__$jscomp$20_vec__268645$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__268650_G__268655$jscomp$inline_4107_map__268648_props__41575__auto__$jscomp$20_vec__268645$$);
};
$amp$pages$budget$cost_breakdown$cost_breakdown$$ = function($G__268666_id$jscomp$91_map__268664_props__41575__auto__$jscomp$21_vec__268661$$, $G__268670$jscomp$inline_4110_JSCompiler_inline_result$jscomp$inline_4109_maybe_ref__41576__auto__$jscomp$21_subtitle$jscomp$3$$) {
  $G__268666_id$jscomp$91_map__268664_props__41575__auto__$jscomp$21_vec__268661$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__268666_id$jscomp$91_map__268664_props__41575__auto__$jscomp$21_vec__268661$$), $G__268670$jscomp$inline_4110_JSCompiler_inline_result$jscomp$inline_4109_maybe_ref__41576__auto__$jscomp$21_subtitle$jscomp$3$$], null);
  $G__268666_id$jscomp$91_map__268664_props__41575__auto__$jscomp$21_vec__268661$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__268666_id$jscomp$91_map__268664_props__41575__auto__$jscomp$21_vec__268661$$, 0, null);
  var $map__268664__$1_title$jscomp$30$$ = $APP.$cljs$core$__destructure_map$$($G__268666_id$jscomp$91_map__268664_props__41575__auto__$jscomp$21_vec__268661$$);
  $G__268666_id$jscomp$91_map__268664_props__41575__auto__$jscomp$21_vec__268661$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__268664__$1_title$jscomp$30$$, $APP.$cljs$cst$286$id$$);
  $G__268670$jscomp$inline_4110_JSCompiler_inline_result$jscomp$inline_4109_maybe_ref__41576__auto__$jscomp$21_subtitle$jscomp$3$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__268664__$1_title$jscomp$30$$, $APP.$cljs$cst$769$subtitle$$);
  $map__268664__$1_title$jscomp$30$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__268664__$1_title$jscomp$30$$, $APP.$cljs$cst$288$title$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__268670$jscomp$inline_4110_JSCompiler_inline_result$jscomp$inline_4109_maybe_ref__41576__auto__$jscomp$21_subtitle$jscomp$3$$ = {idx:3, "section-hint":$G__268670$jscomp$inline_4110_JSCompiler_inline_result$jscomp$inline_4109_maybe_ref__41576__auto__$jscomp$21_subtitle$jscomp$3$$, title:$map__268664__$1_title$jscomp$30$$, "expand-button-label":"Read more", "preview-text":$amp$pages$budget$cost_breakdown$preview$$, "full-text":$amp$pages$budget$cost_breakdown$details$$, "footer-text":$amp$pages$budget$cost_breakdown$footer$$};
  $G__268670$jscomp$inline_4110_JSCompiler_inline_result$jscomp$inline_4109_maybe_ref__41576__auto__$jscomp$21_subtitle$jscomp$3$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$ui$expandable_text$expandable_text_area_2$$, $G__268670$jscomp$inline_4110_JSCompiler_inline_result$jscomp$inline_4109_maybe_ref__41576__auto__$jscomp$21_subtitle$jscomp$3$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$ui$expandable_text$expandable_text_area_2$$, 
  $G__268670$jscomp$inline_4110_JSCompiler_inline_result$jscomp$inline_4109_maybe_ref__41576__auto__$jscomp$21_subtitle$jscomp$3$$);
  $G__268666_id$jscomp$91_map__268664_props__41575__auto__$jscomp$21_vec__268661$$ = {id:$G__268666_id$jscomp$91_map__268664_props__41575__auto__$jscomp$21_vec__268661$$, children:$G__268670$jscomp$inline_4110_JSCompiler_inline_result$jscomp$inline_4109_maybe_ref__41576__auto__$jscomp$21_subtitle$jscomp$3$$};
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__268666_id$jscomp$91_map__268664_props__41575__auto__$jscomp$21_vec__268661$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__268666_id$jscomp$91_map__268664_props__41575__auto__$jscomp$21_vec__268661$$);
};
$amp$pages$budget$location$preview_text$$ = function($G__47275_props__41658__auto__$jscomp$7$$) {
  $APP.$helix$core$extract_cljs_props$$($G__47275_props__41658__auto__$jscomp$7$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__47275_props__41658__auto__$jscomp$7$$ = function() {
    return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$body_base$$), children:["The Armenia Pavilion 2026 will be located across ", function() {
      var $G__47279$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:"two sites,"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__47279$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__47279$$);
    }(), " within the historic Arsenale of Venice. ", function() {
      var $G__47283$jscomp$2$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:" 1. A wonderful interior grand studio"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__47283$jscomp$2$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__47283$jscomp$2$$);
    }(), function() {
      var $G__47287$jscomp$1$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:" , as well 2. An important exterior public crossing to the Arsenale"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__47287$jscomp$1$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__47287$jscomp$1$$);
    }(), ". ", "Together these two sites will form a single spatial constellation. ", function() {
      var $G__47291$jscomp$1$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-900  dark:text-slate-100"), children:"A place for study, a place for work, to create, share and exhibit"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__47291$jscomp$1$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__47291$jscomp$1$$);
    }(), function() {
      var $G__47295$jscomp$2$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-900  dark:text-slate-100"), children:" at a public-crossing threshold"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__47295$jscomp$2$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__47295$jscomp$2$$);
    }(), "—each distinctly neccesary and helpful, both in concluding the final design as well as the making, viewing, and observing of the artworks presented."]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__47275_props__41658__auto__$jscomp$7$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__47275_props__41658__auto__$jscomp$7$$);
};
$amp$pages$budget$location$preview$$ = function($G__47306$jscomp$1_G__47310$jscomp$inline_3599_map__47304_props__41658__auto__$jscomp$8_vec__47301$$, $maybe_ref__41659__auto__$jscomp$8$$) {
  $G__47306$jscomp$1_G__47310$jscomp$inline_3599_map__47304_props__41658__auto__$jscomp$8_vec__47301$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__47306$jscomp$1_G__47310$jscomp$inline_3599_map__47304_props__41658__auto__$jscomp$8_vec__47301$$), $maybe_ref__41659__auto__$jscomp$8$$], null);
  $G__47306$jscomp$1_G__47310$jscomp$inline_3599_map__47304_props__41658__auto__$jscomp$8_vec__47301$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__47306$jscomp$1_G__47310$jscomp$inline_3599_map__47304_props__41658__auto__$jscomp$8_vec__47301$$, 0, null);
  $APP.$cljs$core$__destructure_map$$($G__47306$jscomp$1_G__47310$jscomp$inline_3599_map__47304_props__41658__auto__$jscomp$8_vec__47301$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__47306$jscomp$1_G__47310$jscomp$inline_3599_map__47304_props__41658__auto__$jscomp$8_vec__47301$$ = {};
  $G__47306$jscomp$1_G__47310$jscomp$inline_3599_map__47304_props__41658__auto__$jscomp$8_vec__47301$$ = {className:"p-4 mb-12", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$pages$budget$location$preview_text$$, $G__47306$jscomp$1_G__47310$jscomp$inline_3599_map__47304_props__41658__auto__$jscomp$8_vec__47301$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$budget$location$preview_text$$, $G__47306$jscomp$1_G__47310$jscomp$inline_3599_map__47304_props__41658__auto__$jscomp$8_vec__47301$$)};
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__47306$jscomp$1_G__47310$jscomp$inline_3599_map__47304_props__41658__auto__$jscomp$8_vec__47301$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__47306$jscomp$1_G__47310$jscomp$inline_3599_map__47304_props__41658__auto__$jscomp$8_vec__47301$$);
};
$amp$pages$budget$location$full_details$$ = function($G__47319$jscomp$1_map__47317_map__47317__$1_props__41658__auto__$jscomp$9_vec__47314$$, $maybe_ref__41659__auto__$jscomp$9$$) {
  $G__47319$jscomp$1_map__47317_map__47317__$1_props__41658__auto__$jscomp$9_vec__47314$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__47319$jscomp$1_map__47317_map__47317__$1_props__41658__auto__$jscomp$9_vec__47314$$), $maybe_ref__41659__auto__$jscomp$9$$], null);
  $G__47319$jscomp$1_map__47317_map__47317__$1_props__41658__auto__$jscomp$9_vec__47314$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__47319$jscomp$1_map__47317_map__47317__$1_props__41658__auto__$jscomp$9_vec__47314$$, 0, null);
  $G__47319$jscomp$1_map__47317_map__47317__$1_props__41658__auto__$jscomp$9_vec__47314$$ = $APP.$cljs$core$__destructure_map$$($G__47319$jscomp$1_map__47317_map__47317__$1_props__41658__auto__$jscomp$9_vec__47314$$);
  $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__47319$jscomp$1_map__47317_map__47317__$1_props__41658__auto__$jscomp$9_vec__47314$$, $APP.$cljs$cst$286$id$$);
  $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__47319$jscomp$1_map__47317_map__47317__$1_props__41658__auto__$jscomp$9_vec__47314$$, $APP.$cljs$cst$769$subtitle$$);
  $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__47319$jscomp$1_map__47317_map__47317__$1_props__41658__auto__$jscomp$9_vec__47314$$, $APP.$cljs$cst$288$title$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $is_desktop_QMARK_$jscomp$3$$ = $APP.$amp$hooks$use_media_query$use_touch_enabled$$();
  $G__47319$jscomp$1_map__47317_map__47317__$1_props__41658__auto__$jscomp$9_vec__47314$$ = function() {
    return {className:"space-y-8", children:function() {
      var $G__47323$jscomp$1$$ = function() {
        return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$body_base$$), children:[function() {
          var $G__47327$jscomp$1_G__47331$jscomp$inline_3602$$ = {};
          $G__47327$jscomp$1_G__47331$jscomp$inline_3602$$ = {className:"p-4 mb-12", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$pages$budget$location$preview_text$$, $G__47327$jscomp$1_G__47331$jscomp$inline_3602$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$budget$location$preview_text$$, $G__47327$jscomp$1_G__47331$jscomp$inline_3602$$)};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__47327$jscomp$1_G__47331$jscomp$inline_3602$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__47327$jscomp$1_G__47331$jscomp$inline_3602$$);
        }(), function() {
          var $G__47333$jscomp$1$$ = function() {
            return {className:"my-8", children:[function() {
              var $G__47337$jscomp$1$$ = {dev:!1, "interactive?":$is_desktop_QMARK_$jscomp$3$$, "initial-view":$APP.$amp$pages$venue$map_config$initial_view$$, "ant-paths":$APP.$amp$pages$venue$map_config$ant_paths$$, layers:$APP.$amp$pages$venue$map_config$layers$$};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$ui$map$mapbox_map$$, $G__47337$jscomp$1$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$ui$map$mapbox_map$$, $G__47337$jscomp$1$$);
            }(), function() {
              var $G__47341$jscomp$1$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-mono", "text-sm", "italic", "mt-4 px-4"]))), children:"* Walking path from the crossing to the pavilion. ~8 minutes"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__47341$jscomp$1$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__47341$jscomp$1$$);
            }()]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__47333$jscomp$1$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__47333$jscomp$1$$);
        }(), function() {
          var $G__47345$jscomp$1$$ = function() {
            return {className:"px-4 mt-8 flex flex-col sm:flex-row gap-4", children:[function() {
              var $G__47349$jscomp$1$$ = {href:"/visit", className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$("font-display;font-medium;inline-flex items-center gap-2;text-sm uppercase tracking-wider;text-pink-600 dark:text-pink-300;hover:text-pink-700 dark:hover:text-pink-200;transition-colors duration-200".split(";")))), children:"See the full Visitor Guide →"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("a", $G__47349$jscomp$1$$) : $APP.$helix$core$jsx$$.call(null, "a", $G__47349$jscomp$1$$);
            }(), function() {
              var $G__47353$$ = {href:"https://maps.app.goo.gl/XBwAbBQcj47eHyq5A", target:"_blank", rel:"noopener noreferrer", className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$("font-display;font-medium;inline-flex items-center gap-2;text-sm uppercase tracking-wider;text-slate-500  dark:text-slate-500;hover:text-pink-600 dark:hover:text-pink-300;transition-colors duration-200".split(";")))), 
              children:"Open in Maps ↗"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("a", $G__47353$$) : $APP.$helix$core$jsx$$.call(null, "a", $G__47353$$);
            }()]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__47345$jscomp$1$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__47345$jscomp$1$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__47323$jscomp$1$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__47323$jscomp$1$$);
    }()};
  }();
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__47319$jscomp$1_map__47317_map__47317__$1_props__41658__auto__$jscomp$9_vec__47314$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__47319$jscomp$1_map__47317_map__47317__$1_props__41658__auto__$jscomp$9_vec__47314$$);
};
$amp$pages$budget$location$location_section$$ = function($G__47364_id$jscomp$93_map__47362_props__41658__auto__$jscomp$10_vec__47359$$, $G__47368$jscomp$inline_4113_JSCompiler_inline_result$jscomp$inline_4112_maybe_ref__41659__auto__$jscomp$10_subtitle$jscomp$5$$) {
  $G__47364_id$jscomp$93_map__47362_props__41658__auto__$jscomp$10_vec__47359$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__47364_id$jscomp$93_map__47362_props__41658__auto__$jscomp$10_vec__47359$$), $G__47368$jscomp$inline_4113_JSCompiler_inline_result$jscomp$inline_4112_maybe_ref__41659__auto__$jscomp$10_subtitle$jscomp$5$$], null);
  $G__47364_id$jscomp$93_map__47362_props__41658__auto__$jscomp$10_vec__47359$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__47364_id$jscomp$93_map__47362_props__41658__auto__$jscomp$10_vec__47359$$, 0, null);
  var $map__47362__$1_title$jscomp$32$$ = $APP.$cljs$core$__destructure_map$$($G__47364_id$jscomp$93_map__47362_props__41658__auto__$jscomp$10_vec__47359$$);
  $G__47364_id$jscomp$93_map__47362_props__41658__auto__$jscomp$10_vec__47359$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__47362__$1_title$jscomp$32$$, $APP.$cljs$cst$286$id$$);
  $G__47368$jscomp$inline_4113_JSCompiler_inline_result$jscomp$inline_4112_maybe_ref__41659__auto__$jscomp$10_subtitle$jscomp$5$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__47362__$1_title$jscomp$32$$, $APP.$cljs$cst$769$subtitle$$);
  $map__47362__$1_title$jscomp$32$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__47362__$1_title$jscomp$32$$, $APP.$cljs$cst$288$title$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__47368$jscomp$inline_4113_JSCompiler_inline_result$jscomp$inline_4112_maybe_ref__41659__auto__$jscomp$10_subtitle$jscomp$5$$ = {idx:7, "section-hint":$G__47368$jscomp$inline_4113_JSCompiler_inline_result$jscomp$inline_4112_maybe_ref__41659__auto__$jscomp$10_subtitle$jscomp$5$$, title:$map__47362__$1_title$jscomp$32$$, "expand-button-label":"Expand details", "preview-text":$amp$pages$budget$location$preview$$, "full-text":$amp$pages$budget$location$full_details$$};
  $G__47368$jscomp$inline_4113_JSCompiler_inline_result$jscomp$inline_4112_maybe_ref__41659__auto__$jscomp$10_subtitle$jscomp$5$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$ui$expandable_text$expandable_text_area_2$$, $G__47368$jscomp$inline_4113_JSCompiler_inline_result$jscomp$inline_4112_maybe_ref__41659__auto__$jscomp$10_subtitle$jscomp$5$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$ui$expandable_text$expandable_text_area_2$$, 
  $G__47368$jscomp$inline_4113_JSCompiler_inline_result$jscomp$inline_4112_maybe_ref__41659__auto__$jscomp$10_subtitle$jscomp$5$$);
  $G__47364_id$jscomp$93_map__47362_props__41658__auto__$jscomp$10_vec__47359$$ = {id:$G__47364_id$jscomp$93_map__47362_props__41658__auto__$jscomp$10_vec__47359$$, children:$G__47368$jscomp$inline_4113_JSCompiler_inline_result$jscomp$inline_4112_maybe_ref__41659__auto__$jscomp$10_subtitle$jscomp$5$$};
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__47364_id$jscomp$93_map__47362_props__41658__auto__$jscomp$10_vec__47359$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__47364_id$jscomp$93_map__47362_props__41658__auto__$jscomp$10_vec__47359$$);
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
  return $cljs$core$partition_by$cljs$0core$0IFn$0_invoke$0arity$02$$(function($e$jscomp$220$$) {
    return $amp$pages$budget$cash_flow$parse_date$$($cljs$cst$842$due$$.$cljs$core$IFn$_invoke$arity$1$($e$jscomp$220$$)).toLocaleString("en-US", {month:"long", year:"numeric"});
  }, $APP.$cljs$core$sort_by$cljs$0core$0IFn$0_invoke$0arity$02$$($APP.$cljs$core$comp$$.$cljs$core$IFn$_invoke$arity$3$($amp$pages$budget$cash_flow$date__GT_ms$$, $amp$pages$budget$cash_flow$parse_date$$, $cljs$cst$842$due$$), $entries$jscomp$4$$));
};
$amp$pages$budget$cash_flow$month_rollups$$ = function($entries$jscomp$5_groups_sorted$$) {
  $entries$jscomp$5_groups_sorted$$ = $APP.$cljs$core$sort_by$cljs$0core$0IFn$0_invoke$0arity$02$$($APP.$cljs$core$comp$$.$cljs$core$IFn$_invoke$arity$3$($amp$pages$budget$cash_flow$date__GT_ms$$, $amp$pages$budget$cash_flow$parse_date$$, $cljs$cst$842$due$$), $entries$jscomp$5_groups_sorted$$);
  $entries$jscomp$5_groups_sorted$$ = $amp$pages$budget$cash_flow$group_by_month$$($entries$jscomp$5_groups_sorted$$);
  return $APP.$cljs$core$mapv$cljs$0core$0IFn$0_invoke$0arity$02$$(function($group$jscomp$1$$) {
    var $d$jscomp$154$$ = $amp$pages$budget$cash_flow$parse_date$$($cljs$cst$842$due$$.$cljs$core$IFn$_invoke$arity$1$($APP.$cljs$core$first$$($group$jscomp$1$$))), $label$jscomp$21$$ = $d$jscomp$154$$.toLocaleString("en-US", {month:"short", year:"numeric"}), $total$jscomp$5$$ = $APP.$cljs$core$reduce$cljs$0core$0IFn$0_invoke$0arity$03$$($APP.$cljs$core$_PLUS_$$, 0, $APP.$cljs$core$map$$.$cljs$core$IFn$_invoke$arity$2$($cljs$cst$820$amount$$, $group$jscomp$1$$)), $paid$$ = $APP.$cljs$core$reduce$cljs$0core$0IFn$0_invoke$0arity$03$$($APP.$cljs$core$_PLUS_$$, 
    0, $APP.$cljs$core$map$$.$cljs$core$IFn$_invoke$arity$2$($cljs$cst$820$amount$$, $APP.$cljs$core$filter$cljs$0core$0IFn$0_invoke$0arity$02$$(function($p1__268693_SHARP_$$) {
      return $APP.$cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$($cljs$cst$845$paid$$, $APP.$cljs$cst$12$status$$.$cljs$core$IFn$_invoke$arity$1$($p1__268693_SHARP_$$));
    }, $group$jscomp$1$$))), $pending$jscomp$1$$ = $total$jscomp$5$$ - $paid$$, $n_items$$ = $APP.$cljs$core$count$$($group$jscomp$1$$), $n_paid$$ = $APP.$cljs$core$count$$($APP.$cljs$core$filter$cljs$0core$0IFn$0_invoke$0arity$02$$(function($p1__268694_SHARP_$$) {
      return $APP.$cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$($cljs$cst$845$paid$$, $APP.$cljs$cst$12$status$$.$cljs$core$IFn$_invoke$arity$1$($p1__268694_SHARP_$$));
    }, $group$jscomp$1$$)), $n_crit$jscomp$1$$ = $APP.$cljs$core$count$$($APP.$cljs$core$filter$cljs$0core$0IFn$0_invoke$0arity$02$$(function($p1__268695_SHARP_$$) {
      return $APP.$cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$($cljs$cst$863$critical$$, $cljs$cst$843$priority$$.$cljs$core$IFn$_invoke$arity$1$($p1__268695_SHARP_$$));
    }, $group$jscomp$1$$)), $all_paid$jscomp$1$$ = $APP.$cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$($n_paid$$, $n_items$$), $has_now$$ = function() {
      var $year$jscomp$2$$ = $d$jscomp$154$$.getFullYear(), $now$$ = new Date(), $n_year$$ = $now$$.getFullYear();
      return $APP.$cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$($d$jscomp$154$$.getMonth(), $now$$.getMonth()) && $APP.$cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$($year$jscomp$2$$, $n_year$$);
    }();
    return $APP.$cljs$core$PersistentHashMap$fromArrays$$([$cljs$cst$903$all_paid$$, $cljs$cst$904$entries$$, $APP.$cljs$cst$14$pending$$, $cljs$cst$905$n_crit$$, $APP.$cljs$cst$732$total$$, $APP.$cljs$cst$415$label$$, $cljs$cst$845$paid$$, $cljs$cst$906$n_paid$$, $cljs$cst$907$n_items$$, $cljs$cst$908$has_now$$], [$all_paid$jscomp$1$$, $group$jscomp$1$$, $pending$jscomp$1$$, $n_crit$jscomp$1$$, $total$jscomp$5$$, $label$jscomp$21$$, $paid$$, $n_paid$$, $n_items$$, $has_now$$]);
  }, $entries$jscomp$5_groups_sorted$$);
};
$amp$pages$budget$cash_flow$status_classes$$ = function($status$jscomp$10$$) {
  switch($status$jscomp$10$$ instanceof $APP.$cljs$core$Keyword$$ ? $status$jscomp$10$$.$fqn$ : null) {
    case "paid":
      return new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$cljs$cst$909$dot$$, "bg-emerald-400/20 dark:bg-emerald-300/20", $APP.$cljs$cst$396$text$$, "text-emerald-600 dark:text-emerald-300", $APP.$cljs$cst$415$label$$, "COST, PAID"], null);
    case "pending":
      return new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$cljs$cst$909$dot$$, "bg-slate-400/15 dark:bg-slate-500/15", $APP.$cljs$cst$396$text$$, "text-slate-500", $APP.$cljs$cst$415$label$$, "DUE"], null);
    default:
      return new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$cljs$cst$909$dot$$, "bg-slate-400/15 dark:bg-slate-500/15", $APP.$cljs$cst$396$text$$, "text-slate-500", $APP.$cljs$cst$415$label$$, "—"], null);
  }
};
$amp$pages$budget$cash_flow$timeline_node$$ = function($G__268832_269882_G__268846_map__268824_map__268824__$1_map__268827__$1_props__41575__auto__$jscomp$22_status$jscomp$11_vec__268821$$, $G__268833_269883_entry$jscomp$29_maybe_ref__41576__auto__$jscomp$22$$) {
  $G__268832_269882_G__268846_map__268824_map__268824__$1_map__268827__$1_props__41575__auto__$jscomp$22_status$jscomp$11_vec__268821$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__268832_269882_G__268846_map__268824_map__268824__$1_map__268827__$1_props__41575__auto__$jscomp$22_status$jscomp$11_vec__268821$$), $G__268833_269883_entry$jscomp$29_maybe_ref__41576__auto__$jscomp$22$$], null);
  $G__268832_269882_G__268846_map__268824_map__268824__$1_map__268827__$1_props__41575__auto__$jscomp$22_status$jscomp$11_vec__268821$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__268832_269882_G__268846_map__268824_map__268824__$1_map__268827__$1_props__41575__auto__$jscomp$22_status$jscomp$11_vec__268821$$, 0, null);
  $G__268832_269882_G__268846_map__268824_map__268824__$1_map__268827__$1_props__41575__auto__$jscomp$22_status$jscomp$11_vec__268821$$ = $APP.$cljs$core$__destructure_map$$($G__268832_269882_G__268846_map__268824_map__268824__$1_map__268827__$1_props__41575__auto__$jscomp$22_status$jscomp$11_vec__268821$$);
  $G__268833_269883_entry$jscomp$29_maybe_ref__41576__auto__$jscomp$22$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__268832_269882_G__268846_map__268824_map__268824__$1_map__268827__$1_props__41575__auto__$jscomp$22_status$jscomp$11_vec__268821$$, $cljs$cst$910$entry$$);
  var $idx$jscomp$74$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__268832_269882_G__268846_map__268824_map__268824__$1_map__268827__$1_props__41575__auto__$jscomp$22_status$jscomp$11_vec__268821$$, $APP.$cljs$cst$756$idx$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__268832_269882_G__268846_map__268824_map__268824__$1_map__268827__$1_props__41575__auto__$jscomp$22_status$jscomp$11_vec__268821$$ = $APP.$cljs$core$__destructure_map$$($G__268833_269883_entry$jscomp$29_maybe_ref__41576__auto__$jscomp$22$$);
  var $title$jscomp$33$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__268832_269882_G__268846_map__268824_map__268824__$1_map__268827__$1_props__41575__auto__$jscomp$22_status$jscomp$11_vec__268821$$, $APP.$cljs$cst$288$title$$), $due$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__268832_269882_G__268846_map__268824_map__268824__$1_map__268827__$1_props__41575__auto__$jscomp$22_status$jscomp$11_vec__268821$$, $cljs$cst$842$due$$), $amount$jscomp$1$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__268832_269882_G__268846_map__268824_map__268824__$1_map__268827__$1_props__41575__auto__$jscomp$22_status$jscomp$11_vec__268821$$, 
  $cljs$cst$820$amount$$), $priority$jscomp$1$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__268832_269882_G__268846_map__268824_map__268824__$1_map__268827__$1_props__41575__auto__$jscomp$22_status$jscomp$11_vec__268821$$, $cljs$cst$843$priority$$);
  $G__268832_269882_G__268846_map__268824_map__268824__$1_map__268827__$1_props__41575__auto__$jscomp$22_status$jscomp$11_vec__268821$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__268832_269882_G__268846_map__268824_map__268824__$1_map__268827__$1_props__41575__auto__$jscomp$22_status$jscomp$11_vec__268821$$, $APP.$cljs$cst$12$status$$);
  var $node_ref$$ = $APP.$helix$hooks$use_ref$$(null), $paid_QMARK_$jscomp$2$$ = $APP.$cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$($APP.$cljs$core$keyword$$.$cljs$core$IFn$_invoke$arity$1$($G__268832_269882_G__268846_map__268824_map__268824__$1_map__268827__$1_props__41575__auto__$jscomp$22_status$jscomp$11_vec__268821$$), $cljs$cst$845$paid$$), $st$$ = $amp$pages$budget$cash_flow$status_classes$$($APP.$cljs$core$keyword$$.$cljs$core$IFn$_invoke$arity$1$($G__268832_269882_G__268846_map__268824_map__268824__$1_map__268827__$1_props__41575__auto__$jscomp$22_status$jscomp$11_vec__268821$$));
  $G__268832_269882_G__268846_map__268824_map__268824__$1_map__268827__$1_props__41575__auto__$jscomp$22_status$jscomp$11_vec__268821$$ = $APP.$helix$hooks$wrap_fx$$(function() {
    return $APP.$cljs$core$truth_$$($APP.$cljs$core$_deref$$($node_ref$$)) ? $APP.$module$node_modules$gsap$dist$gsap$$.gsap.fromTo($APP.$cljs$core$_deref$$($node_ref$$), {opacity:0, x:-20}, {opacity:1, x:0, duration:0.4, delay:$idx$jscomp$74$$ * 0.06, ease:"power2.out"}) : null;
  });
  $G__268833_269883_entry$jscomp$29_maybe_ref__41576__auto__$jscomp$22$$ = [];
  $APP.$helix$hooks$raw_use_effect$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$hooks$raw_use_effect$$.$cljs$core$IFn$_invoke$arity$2$($G__268832_269882_G__268846_map__268824_map__268824__$1_map__268827__$1_props__41575__auto__$jscomp$22_status$jscomp$11_vec__268821$$, $G__268833_269883_entry$jscomp$29_maybe_ref__41576__auto__$jscomp$22$$) : $APP.$helix$hooks$raw_use_effect$$.call(null, $G__268832_269882_G__268846_map__268824_map__268824__$1_map__268827__$1_props__41575__auto__$jscomp$22_status$jscomp$11_vec__268821$$, 
  $G__268833_269883_entry$jscomp$29_maybe_ref__41576__auto__$jscomp$22$$);
  $G__268832_269882_G__268846_map__268824_map__268824__$1_map__268827__$1_props__41575__auto__$jscomp$22_status$jscomp$11_vec__268821$$ = function() {
    return {ref:$node_ref$$, className:$APP.$helix$impl$props$normalize_class$$("relative flex items-stretch opacity-0 " + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($paid_QMARK_$jscomp$2$$ ? "opacity-50" : null)), children:[function() {
      var $G__268856$$ = function() {
        return {className:"relative flex flex-col items-center", style:{width:$APP.$helix$impl$props$__GT_js$$("28px"), minWidth:$APP.$helix$impl$props$__GT_js$$("28px")}, children:[function() {
          var $G__268865$$ = {className:$APP.$helix$impl$props$normalize_class$$("mt-4 h-2.5 w-2.5 rounded-full border-2 flex-shrink-0 " + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($amp$pages$budget$cash_flow$priority_dot_classes$$($APP.$cljs$core$keyword$$.$cljs$core$IFn$_invoke$arity$1$($priority$jscomp$1$$), $paid_QMARK_$jscomp$2$$)))};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__268865$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__268865$$);
        }(), function() {
          var $G__268885$$ = {className:"flex-1 border-l border-dashed border-slate-300 dark:border-slate-700"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__268885$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__268885$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__268856$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__268856$$);
    }(), function() {
      var $G__268895_G__268901$jscomp$inline_4329$$ = {className:"w-4 border-t border-dashed border-slate-300 dark:border-slate-600", style:{marginTop:$APP.$helix$impl$props$__GT_js$$("1px")}};
      $G__268895_G__268901$jscomp$inline_4329$$ = {className:"flex items-start pt-[18px]", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__268895_G__268901$jscomp$inline_4329$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__268895_G__268901$jscomp$inline_4329$$)};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__268895_G__268901$jscomp$inline_4329$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__268895_G__268901$jscomp$inline_4329$$);
    }(), function() {
      var $G__268917$$ = function() {
        return {className:"flex-1 pb-5 pt-1 pl-1", children:[function() {
          var $G__268923$$ = function() {
            return {className:"flex items-center gap-2 mb-1", children:[function() {
              var $G__268931_JSCompiler_temp_const$jscomp$3154$$ = $APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-mono", "text-[11px]", "text-slate-600  dark:text-slate-400"])));
              var $JSCompiler_inline_result$jscomp$3155_d$jscomp$inline_3607$$ = $amp$pages$budget$cash_flow$parse_date$$($due$$);
              $JSCompiler_inline_result$jscomp$3155_d$jscomp$inline_3607$$ = "" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($JSCompiler_inline_result$jscomp$3155_d$jscomp$inline_3607$$.toLocaleString("en-US", {month:"short"})) + " " + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($JSCompiler_inline_result$jscomp$3155_d$jscomp$inline_3607$$.getDate());
              $G__268931_JSCompiler_temp_const$jscomp$3154$$ = {className:$G__268931_JSCompiler_temp_const$jscomp$3154$$, children:$JSCompiler_inline_result$jscomp$3155_d$jscomp$inline_3607$$};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__268931_JSCompiler_temp_const$jscomp$3154$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__268931_JSCompiler_temp_const$jscomp$3154$$);
            }(), function() {
              var $G__268943$$ = {className:$APP.$helix$impl$props$normalize_class$$("px-1.5 py-px text-[9px] font-bold uppercase tracking-widest font-mono " + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($amp$pages$budget$cash_flow$priority_tag_bg$$($APP.$cljs$core$keyword$$.$cljs$core$IFn$_invoke$arity$1$($priority$jscomp$1$$))) + " " + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($amp$pages$budget$cash_flow$priority_tag_text$$($APP.$cljs$core$keyword$$.$cljs$core$IFn$_invoke$arity$1$($priority$jscomp$1$$)))), 
              children:$amp$pages$budget$cash_flow$priority_label$$($APP.$cljs$core$keyword$$.$cljs$core$IFn$_invoke$arity$1$($priority$jscomp$1$$))};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__268943$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__268943$$);
            }(), function() {
              var $G__268958$$ = {className:$APP.$helix$impl$props$normalize_class$$("px-1.5 py-px text-[9px] font-bold uppercase tracking-widest font-mono " + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($cljs$cst$909$dot$$.$cljs$core$IFn$_invoke$arity$1$($st$$)) + " " + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($APP.$cljs$cst$396$text$$.$cljs$core$IFn$_invoke$arity$1$($st$$))), children:$APP.$cljs$cst$415$label$$.$cljs$core$IFn$_invoke$arity$1$($st$$)};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__268958$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__268958$$);
            }()]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__268923$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__268923$$);
        }(), function() {
          var $G__268970$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-sm leading-snug " + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($paid_QMARK_$jscomp$2$$ ? "" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$("text-slate-600  dark:text-slate-400") + " line-through" : "text-slate-700  dark:text-slate-300")), children:$title$jscomp$33$$};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__268970$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__268970$$);
        }(), function() {
          var $G__268986$$ = {className:$APP.$helix$impl$props$normalize_class$$("mt-0.5 font-mono text-base font-semibold tracking-tight " + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($amp$pages$budget$cash_flow$priority_amount_class$$($APP.$cljs$core$keyword$$.$cljs$core$IFn$_invoke$arity$1$($priority$jscomp$1$$), $paid_QMARK_$jscomp$2$$))), children:$amp$pages$budget$cash_flow$format_currency$$($amount$jscomp$1$$)};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__268986$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__268986$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__268917$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__268917$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__268832_269882_G__268846_map__268824_map__268824__$1_map__268827__$1_props__41575__auto__$jscomp$22_status$jscomp$11_vec__268821$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__268832_269882_G__268846_map__268824_map__268824__$1_map__268827__$1_props__41575__auto__$jscomp$22_status$jscomp$11_vec__268821$$);
};
$amp$pages$budget$cash_flow$now_marker$$ = function($G__269078_269894_G__269099_props__41575__auto__$jscomp$23$$) {
  $APP.$helix$core$extract_cljs_props$$($G__269078_269894_G__269099_props__41575__auto__$jscomp$23$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $ref$jscomp$22$$ = $APP.$helix$hooks$use_ref$$(null);
  $G__269078_269894_G__269099_props__41575__auto__$jscomp$23$$ = $APP.$helix$hooks$wrap_fx$$(function() {
    return $APP.$cljs$core$truth_$$($APP.$cljs$core$_deref$$($ref$jscomp$22$$)) ? $APP.$module$node_modules$gsap$dist$gsap$$.gsap.fromTo($APP.$cljs$core$_deref$$($ref$jscomp$22$$), {opacity:0, scaleX:0}, {opacity:1, scaleX:1, duration:0.6, delay:0.2, ease:"power3.out"}) : null;
  });
  var $G__269079_269895$$ = [];
  $APP.$helix$hooks$raw_use_effect$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$hooks$raw_use_effect$$.$cljs$core$IFn$_invoke$arity$2$($G__269078_269894_G__269099_props__41575__auto__$jscomp$23$$, $G__269079_269895$$) : $APP.$helix$hooks$raw_use_effect$$.call(null, $G__269078_269894_G__269099_props__41575__auto__$jscomp$23$$, $G__269079_269895$$);
  $G__269078_269894_G__269099_props__41575__auto__$jscomp$23$$ = function() {
    return {ref:$ref$jscomp$22$$, className:"flex items-center gap-2 py-3 origin-left opacity-0", children:[function() {
      var $G__269111$$ = function() {
        return {className:"relative flex items-center justify-center", style:{width:$APP.$helix$impl$props$__GT_js$$("28px"), minWidth:$APP.$helix$impl$props$__GT_js$$("28px")}, children:[function() {
          var $G__269118$$ = {className:"absolute h-5 w-5 animate-ping rounded-full bg-rose-400/30"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__269118$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__269118$$);
        }(), function() {
          var $G__269123$$ = {className:"h-2.5 w-2.5 rounded-full bg-rose-400"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__269123$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__269123$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__269111$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__269111$$);
    }(), function() {
      var $G__269127$$ = {className:"flex-1 h-px bg-rose-400/50"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__269127$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__269127$$);
    }(), function() {
      var $G__269132$$ = {className:"font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-rose-400 pr-1", children:"now"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__269132$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__269132$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__269078_269894_G__269099_props__41575__auto__$jscomp$23$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__269078_269894_G__269099_props__41575__auto__$jscomp$23$$);
};
$amp$pages$budget$cash_flow$month_header$$ = function($G__269172_269920_G__269179_map__269167_map__269167__$1_props__41575__auto__$jscomp$24_vec__269160$$, $G__269173_269921_maybe_ref__41576__auto__$jscomp$24$$) {
  $G__269172_269920_G__269179_map__269167_map__269167__$1_props__41575__auto__$jscomp$24_vec__269160$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__269172_269920_G__269179_map__269167_map__269167__$1_props__41575__auto__$jscomp$24_vec__269160$$), $G__269173_269921_maybe_ref__41576__auto__$jscomp$24$$], null);
  $G__269172_269920_G__269179_map__269167_map__269167__$1_props__41575__auto__$jscomp$24_vec__269160$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__269172_269920_G__269179_map__269167_map__269167__$1_props__41575__auto__$jscomp$24_vec__269160$$, 0, null);
  $G__269172_269920_G__269179_map__269167_map__269167__$1_props__41575__auto__$jscomp$24_vec__269160$$ = $APP.$cljs$core$__destructure_map$$($G__269172_269920_G__269179_map__269167_map__269167__$1_props__41575__auto__$jscomp$24_vec__269160$$);
  var $label$jscomp$22$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__269172_269920_G__269179_map__269167_map__269167__$1_props__41575__auto__$jscomp$24_vec__269160$$, $APP.$cljs$cst$415$label$$), $idx$jscomp$75$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__269172_269920_G__269179_map__269167_map__269167__$1_props__41575__auto__$jscomp$24_vec__269160$$, $APP.$cljs$cst$756$idx$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $ref$jscomp$23$$ = $APP.$helix$hooks$use_ref$$(null);
  $G__269172_269920_G__269179_map__269167_map__269167__$1_props__41575__auto__$jscomp$24_vec__269160$$ = $APP.$helix$hooks$wrap_fx$$(function() {
    return $APP.$cljs$core$truth_$$($APP.$cljs$core$_deref$$($ref$jscomp$23$$)) ? $APP.$module$node_modules$gsap$dist$gsap$$.gsap.fromTo($APP.$cljs$core$_deref$$($ref$jscomp$23$$), {opacity:0, y:8}, {opacity:1, y:0, duration:0.35, delay:0.1 + $idx$jscomp$75$$ * 0.05, ease:"power2.out"}) : null;
  });
  $G__269173_269921_maybe_ref__41576__auto__$jscomp$24$$ = [];
  $APP.$helix$hooks$raw_use_effect$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$hooks$raw_use_effect$$.$cljs$core$IFn$_invoke$arity$2$($G__269172_269920_G__269179_map__269167_map__269167__$1_props__41575__auto__$jscomp$24_vec__269160$$, $G__269173_269921_maybe_ref__41576__auto__$jscomp$24$$) : $APP.$helix$hooks$raw_use_effect$$.call(null, $G__269172_269920_G__269179_map__269167_map__269167__$1_props__41575__auto__$jscomp$24_vec__269160$$, $G__269173_269921_maybe_ref__41576__auto__$jscomp$24$$);
  $G__269172_269920_G__269179_map__269167_map__269167__$1_props__41575__auto__$jscomp$24_vec__269160$$ = function() {
    return {ref:$ref$jscomp$23$$, className:"flex items-center gap-3 pt-8 pb-2 opacity-0", children:[function() {
      var $G__269185$$ = {className:"h-px w-8 bg-pink-500/70"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__269185$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__269185$$);
    }(), function() {
      var $G__269191$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$("font-mono;text-[10px];font-bold;uppercase;tracking-[0.25em];text-slate-600  dark:text-slate-400".split(";")))), children:$label$jscomp$22$$};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__269191$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__269191$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__269172_269920_G__269179_map__269167_map__269167__$1_props__41575__auto__$jscomp$24_vec__269160$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__269172_269920_G__269179_map__269167_map__269167__$1_props__41575__auto__$jscomp$24_vec__269160$$);
};
$amp$pages$budget$cash_flow$month_summary_row$$ = function($G__269204_269962_G__269207_map__269202_map__269202__$1_map__269203__$1_props__41575__auto__$jscomp$25_vec__269199$$, $G__269205_269963_all_paid$jscomp$2_maybe_ref__41576__auto__$jscomp$25_rollup$$) {
  $G__269204_269962_G__269207_map__269202_map__269202__$1_map__269203__$1_props__41575__auto__$jscomp$25_vec__269199$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__269204_269962_G__269207_map__269202_map__269202__$1_map__269203__$1_props__41575__auto__$jscomp$25_vec__269199$$), $G__269205_269963_all_paid$jscomp$2_maybe_ref__41576__auto__$jscomp$25_rollup$$], null);
  $G__269204_269962_G__269207_map__269202_map__269202__$1_map__269203__$1_props__41575__auto__$jscomp$25_vec__269199$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__269204_269962_G__269207_map__269202_map__269202__$1_map__269203__$1_props__41575__auto__$jscomp$25_vec__269199$$, 0, null);
  $G__269204_269962_G__269207_map__269202_map__269202__$1_map__269203__$1_props__41575__auto__$jscomp$25_vec__269199$$ = $APP.$cljs$core$__destructure_map$$($G__269204_269962_G__269207_map__269202_map__269202__$1_map__269203__$1_props__41575__auto__$jscomp$25_vec__269199$$);
  $G__269205_269963_all_paid$jscomp$2_maybe_ref__41576__auto__$jscomp$25_rollup$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__269204_269962_G__269207_map__269202_map__269202__$1_map__269203__$1_props__41575__auto__$jscomp$25_vec__269199$$, $cljs$cst$911$rollup$$);
  var $idx$jscomp$76$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__269204_269962_G__269207_map__269202_map__269202__$1_map__269203__$1_props__41575__auto__$jscomp$25_vec__269199$$, $APP.$cljs$cst$756$idx$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__269204_269962_G__269207_map__269202_map__269202__$1_map__269203__$1_props__41575__auto__$jscomp$25_vec__269199$$ = $APP.$cljs$core$__destructure_map$$($G__269205_269963_all_paid$jscomp$2_maybe_ref__41576__auto__$jscomp$25_rollup$$);
  var $label$jscomp$23$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__269204_269962_G__269207_map__269202_map__269202__$1_map__269203__$1_props__41575__auto__$jscomp$25_vec__269199$$, $APP.$cljs$cst$415$label$$), $total$jscomp$6$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__269204_269962_G__269207_map__269202_map__269202__$1_map__269203__$1_props__41575__auto__$jscomp$25_vec__269199$$, $APP.$cljs$cst$732$total$$), $paid$jscomp$1$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__269204_269962_G__269207_map__269202_map__269202__$1_map__269203__$1_props__41575__auto__$jscomp$25_vec__269199$$, 
  $cljs$cst$845$paid$$), $pending$jscomp$2$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__269204_269962_G__269207_map__269202_map__269202__$1_map__269203__$1_props__41575__auto__$jscomp$25_vec__269199$$, $APP.$cljs$cst$14$pending$$), $n_items$jscomp$1$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__269204_269962_G__269207_map__269202_map__269202__$1_map__269203__$1_props__41575__auto__$jscomp$25_vec__269199$$, $cljs$cst$907$n_items$$), $n_crit$jscomp$2$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__269204_269962_G__269207_map__269202_map__269202__$1_map__269203__$1_props__41575__auto__$jscomp$25_vec__269199$$, 
  $cljs$cst$905$n_crit$$);
  $G__269205_269963_all_paid$jscomp$2_maybe_ref__41576__auto__$jscomp$25_rollup$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__269204_269962_G__269207_map__269202_map__269202__$1_map__269203__$1_props__41575__auto__$jscomp$25_vec__269199$$, $cljs$cst$903$all_paid$$);
  var $has_now$jscomp$1$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__269204_269962_G__269207_map__269202_map__269202__$1_map__269203__$1_props__41575__auto__$jscomp$25_vec__269199$$, $cljs$cst$908$has_now$$), $ref$jscomp$24$$ = $APP.$helix$hooks$use_ref$$(null), $cls$jscomp$2$$ = $APP.$cljs$core$truth_$$($G__269205_269963_all_paid$jscomp$2_maybe_ref__41576__auto__$jscomp$25_rollup$$) ? new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$397$border$$, "border-emerald-500 dark:border-emerald-300", 
  $cljs$cst$902$fill$$, "bg-transparent", $APP.$cljs$cst$396$text$$, "text-emerald-600 dark:text-emerald-300"], null) : $n_crit$jscomp$2$$ > 0 ? new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$397$border$$, "border-pink-600 dark:border-pink-300", $cljs$cst$902$fill$$, "bg-pink-600 dark:bg-pink-300", $APP.$cljs$cst$396$text$$, "text-pink-600 dark:text-pink-300"], null) : new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$397$border$$, "border-indigo-500 dark:border-indigo-300", 
  $cljs$cst$902$fill$$, "bg-indigo-500 dark:bg-indigo-300", $APP.$cljs$cst$396$text$$, "text-indigo-600 dark:text-indigo-300"], null);
  $G__269204_269962_G__269207_map__269202_map__269202__$1_map__269203__$1_props__41575__auto__$jscomp$25_vec__269199$$ = $APP.$helix$hooks$wrap_fx$$(function() {
    return $APP.$cljs$core$truth_$$($APP.$cljs$core$_deref$$($ref$jscomp$24$$)) ? $APP.$module$node_modules$gsap$dist$gsap$$.gsap.fromTo($APP.$cljs$core$_deref$$($ref$jscomp$24$$), {opacity:0, x:-16}, {opacity:1, x:0, duration:0.35, delay:$idx$jscomp$76$$ * 0.05, ease:"power2.out"}) : null;
  });
  $G__269205_269963_all_paid$jscomp$2_maybe_ref__41576__auto__$jscomp$25_rollup$$ = [];
  $APP.$helix$hooks$raw_use_effect$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$hooks$raw_use_effect$$.$cljs$core$IFn$_invoke$arity$2$($G__269204_269962_G__269207_map__269202_map__269202__$1_map__269203__$1_props__41575__auto__$jscomp$25_vec__269199$$, $G__269205_269963_all_paid$jscomp$2_maybe_ref__41576__auto__$jscomp$25_rollup$$) : $APP.$helix$hooks$raw_use_effect$$.call(null, $G__269204_269962_G__269207_map__269202_map__269202__$1_map__269203__$1_props__41575__auto__$jscomp$25_vec__269199$$, 
  $G__269205_269963_all_paid$jscomp$2_maybe_ref__41576__auto__$jscomp$25_rollup$$);
  $G__269204_269962_G__269207_map__269202_map__269202__$1_map__269203__$1_props__41575__auto__$jscomp$25_vec__269199$$ = function() {
    return {ref:$ref$jscomp$24$$, className:"relative flex items-stretch opacity-0", children:[function() {
      var $G__269211$$ = function() {
        return {className:"relative flex flex-col items-center", style:{width:$APP.$helix$impl$props$__GT_js$$("28px"), minWidth:$APP.$helix$impl$props$__GT_js$$("28px")}, children:[function() {
          var $G__269217$$ = {className:$APP.$helix$impl$props$normalize_class$$("mt-4 h-2.5 w-2.5 rounded-full border-2 flex-shrink-0 " + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($APP.$cljs$cst$397$border$$.$cljs$core$IFn$_invoke$arity$1$($cls$jscomp$2$$)) + " " + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($cljs$cst$902$fill$$.$cljs$core$IFn$_invoke$arity$1$($cls$jscomp$2$$)))};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__269217$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__269217$$);
        }(), function() {
          var $G__269221$$ = {className:"flex-1 border-l border-dashed border-slate-300 dark:border-slate-700"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__269221$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__269221$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__269211$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__269211$$);
    }(), function() {
      var $G__269225_G__269229$jscomp$inline_4332$$ = {className:"w-4 border-t border-dashed border-slate-300 dark:border-slate-600", style:{marginTop:$APP.$helix$impl$props$__GT_js$$("1px")}};
      $G__269225_G__269229$jscomp$inline_4332$$ = {className:"flex items-start pt-[18px]", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__269225_G__269229$jscomp$inline_4332$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__269225_G__269229$jscomp$inline_4332$$)};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__269225_G__269229$jscomp$inline_4332$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__269225_G__269229$jscomp$inline_4332$$);
    }(), function() {
      var $G__269235$$ = function() {
        return {className:"flex-1 pb-4 pt-1 pl-1", children:[function() {
          var $G__269239$$ = function() {
            return {className:"flex items-center gap-2 mb-1", children:[function() {
              var $G__269243$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$("font-mono;text-xs;font-bold;uppercase;tracking-wider;text-slate-900  dark:text-slate-100".split(";")))), children:$label$jscomp$23$$};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__269243$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__269243$$);
            }(), function() {
              var $G__269247$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-mono", "text-[10px]", "text-slate-600  dark:text-slate-400"]))), children:"" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($n_items$jscomp$1$$) + " items"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__269247$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__269247$$);
            }(), $APP.$cljs$core$truth_$$($has_now$jscomp$1$$) ? function() {
              var $G__269251$$ = {className:"px-1.5 py-px text-[9px] font-bold uppercase tracking-widest font-mono bg-emerald-500/15 text-emerald-600 dark:bg-emerald-300/15 dark:text-emerald-300", children:"NOW"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__269251$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__269251$$);
            }() : null, $n_crit$jscomp$2$$ > 0 ? function() {
              var $G__269255$$ = {className:"px-1.5 py-px text-[9px] font-bold uppercase tracking-widest font-mono bg-pink-500/15 text-pink-600 dark:text-pink-300", children:"" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($n_crit$jscomp$2$$) + " crit"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__269255$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__269255$$);
            }() : null]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__269239$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__269239$$);
        }(), function() {
          var $G__269259$$ = function() {
            return {className:"flex items-baseline gap-3", children:[function() {
              var $G__269263$$ = {className:$APP.$helix$impl$props$normalize_class$$("font-mono text-lg font-bold tracking-tight " + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($APP.$cljs$cst$396$text$$.$cljs$core$IFn$_invoke$arity$1$($cls$jscomp$2$$))), children:$amp$pages$budget$cash_flow$format_currency$$($total$jscomp$6$$)};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__269263$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__269263$$);
            }(), $paid$jscomp$1$$ > 0 ? function() {
              var $G__269267$$ = {className:"font-mono text-[11px] text-emerald-600/60 dark:text-emerald-300/60", children:"" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($amp$pages$budget$cash_flow$format_currency$$($paid$jscomp$1$$)) + " COST, PAID"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__269267$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__269267$$);
            }() : null, $pending$jscomp$2$$ > 0 ? function() {
              var $G__269271$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-mono", "text-[11px]", "text-slate-600  dark:text-slate-400"]))), children:"" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($amp$pages$budget$cash_flow$format_currency$$($pending$jscomp$2$$)) + " due"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__269271$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__269271$$);
            }() : null]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__269259$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__269259$$);
        }(), function() {
          var $G__269275_G__269279$jscomp$inline_4335$$ = {className:"absolute left-0 top-0 h-px bg-emerald-500/50 dark:bg-emerald-300/50", style:{width:$APP.$helix$impl$props$__GT_js$$("" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($total$jscomp$6$$ > 0 ? Math.round($paid$jscomp$1$$ / $total$jscomp$6$$ * 100) : 0) + "%")}};
          $G__269275_G__269279$jscomp$inline_4335$$ = {className:"mt-1.5 h-px w-full bg-slate-200 dark:bg-slate-800 relative", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__269275_G__269279$jscomp$inline_4335$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__269275_G__269279$jscomp$inline_4335$$)};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__269275_G__269279$jscomp$inline_4335$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__269275_G__269279$jscomp$inline_4335$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__269235$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__269235$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__269204_269962_G__269207_map__269202_map__269202__$1_map__269203__$1_props__41575__auto__$jscomp$25_vec__269199$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__269204_269962_G__269207_map__269202_map__269202__$1_map__269203__$1_props__41575__auto__$jscomp$25_vec__269199$$);
};
$amp$pages$budget$cash_flow$view_toggle$$ = function($G__269400_map__269378_map__269378__$1_props__41575__auto__$jscomp$26_vec__269375$$, $maybe_ref__41576__auto__$jscomp$26$$) {
  $G__269400_map__269378_map__269378__$1_props__41575__auto__$jscomp$26_vec__269375$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__269400_map__269378_map__269378__$1_props__41575__auto__$jscomp$26_vec__269375$$), $maybe_ref__41576__auto__$jscomp$26$$], null);
  $G__269400_map__269378_map__269378__$1_props__41575__auto__$jscomp$26_vec__269375$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__269400_map__269378_map__269378__$1_props__41575__auto__$jscomp$26_vec__269375$$, 0, null);
  $G__269400_map__269378_map__269378__$1_props__41575__auto__$jscomp$26_vec__269375$$ = $APP.$cljs$core$__destructure_map$$($G__269400_map__269378_map__269378__$1_props__41575__auto__$jscomp$26_vec__269375$$);
  var $expanded_QMARK_$jscomp$3$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__269400_map__269378_map__269378__$1_props__41575__auto__$jscomp$26_vec__269375$$, $cljs$cst$912$expanded_QMARK_$$), $on_toggle$jscomp$1$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__269400_map__269378_map__269378__$1_props__41575__auto__$jscomp$26_vec__269375$$, $APP.$cljs$cst$802$on_toggle$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__269400_map__269378_map__269378__$1_props__41575__auto__$jscomp$26_vec__269375$$ = function() {
    return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$("mb-4 flex items-center gap-2;font-mono;text-[10px];font-bold;uppercase;tracking-[0.25em];text-slate-600  dark:text-slate-400;transition-colors hover:text-pink-600 dark:hover:text-pink-300".split(";")))), onClick:$on_toggle$jscomp$1$$, children:[function() {
      var $G__269412$$ = {className:"h-px w-4 bg-pink-500/50"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__269412$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__269412$$);
    }(), $APP.$cljs$core$truth_$$($expanded_QMARK_$jscomp$3$$) ? "Summary" : "Expand", function() {
      var $G__269422$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-400  dark:text-slate-600"), children:$APP.$cljs$core$truth_$$($expanded_QMARK_$jscomp$3$$) ? "▲" : "▼"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__269422$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__269422$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("button", $G__269400_map__269378_map__269378__$1_props__41575__auto__$jscomp$26_vec__269375$$) : $APP.$helix$core$jsxs$$.call(null, "button", $G__269400_map__269378_map__269378__$1_props__41575__auto__$jscomp$26_vec__269375$$);
};
$amp$pages$budget$cash_flow$summary_header$$ = function($G__269548_270020_G__269552_map__269539_map__269539__$1_props__41575__auto__$jscomp$27_vec__269536$$, $G__269549_270021_entries$jscomp$6_maybe_ref__41576__auto__$jscomp$27$$) {
  $G__269548_270020_G__269552_map__269539_map__269539__$1_props__41575__auto__$jscomp$27_vec__269536$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__269548_270020_G__269552_map__269539_map__269539__$1_props__41575__auto__$jscomp$27_vec__269536$$), $G__269549_270021_entries$jscomp$6_maybe_ref__41576__auto__$jscomp$27$$], null);
  $G__269548_270020_G__269552_map__269539_map__269539__$1_props__41575__auto__$jscomp$27_vec__269536$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__269548_270020_G__269552_map__269539_map__269539__$1_props__41575__auto__$jscomp$27_vec__269536$$, 0, null);
  $G__269548_270020_G__269552_map__269539_map__269539__$1_props__41575__auto__$jscomp$27_vec__269536$$ = $APP.$cljs$core$__destructure_map$$($G__269548_270020_G__269552_map__269539_map__269539__$1_props__41575__auto__$jscomp$27_vec__269536$$);
  $G__269549_270021_entries$jscomp$6_maybe_ref__41576__auto__$jscomp$27$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__269548_270020_G__269552_map__269539_map__269539__$1_props__41575__auto__$jscomp$27_vec__269536$$, $cljs$cst$904$entries$$);
  var $target_total$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__269548_270020_G__269552_map__269539_map__269539__$1_props__41575__auto__$jscomp$27_vec__269536$$, $cljs$cst$913$target_total$$), $funds_raised$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__269548_270020_G__269552_map__269539_map__269539__$1_props__41575__auto__$jscomp$27_vec__269536$$, $cljs$cst$839$funds_raised$$);
  $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__269548_270020_G__269552_map__269539_map__269539__$1_props__41575__auto__$jscomp$27_vec__269536$$, $cljs$cst$838$debt_raised$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $paid_sum$$ = $APP.$cljs$core$reduce$cljs$0core$0IFn$0_invoke$0arity$03$$($APP.$cljs$core$_PLUS_$$, 0, $APP.$cljs$core$map$$.$cljs$core$IFn$_invoke$arity$2$($cljs$cst$820$amount$$, $APP.$cljs$core$filter$cljs$0core$0IFn$0_invoke$0arity$02$$(function($p1__269448_SHARP_$$) {
    return $APP.$cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$($cljs$cst$845$paid$$, $APP.$cljs$core$keyword$$.$cljs$core$IFn$_invoke$arity$1$($APP.$cljs$cst$12$status$$.$cljs$core$IFn$_invoke$arity$1$($p1__269448_SHARP_$$)));
  }, $G__269549_270021_entries$jscomp$6_maybe_ref__41576__auto__$jscomp$27$$))), $pending_sum$$ = $target_total$$ - $paid_sum$$, $critical_sum$$ = $APP.$cljs$core$reduce$cljs$0core$0IFn$0_invoke$0arity$03$$($APP.$cljs$core$_PLUS_$$, 0, $APP.$cljs$core$map$$.$cljs$core$IFn$_invoke$arity$2$($cljs$cst$820$amount$$, $APP.$cljs$core$filter$cljs$0core$0IFn$0_invoke$0arity$02$$(function($p1__269459_SHARP_$$) {
    return $APP.$cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$($cljs$cst$863$critical$$, $APP.$cljs$core$keyword$$.$cljs$core$IFn$_invoke$arity$1$($cljs$cst$843$priority$$.$cljs$core$IFn$_invoke$arity$1$($p1__269459_SHARP_$$)));
  }, $G__269549_270021_entries$jscomp$6_maybe_ref__41576__auto__$jscomp$27$$))), $gap$$ = $target_total$$ - $funds_raised$$, $next_due$$ = function() {
    var $d$jscomp$155$$ = new Date();
    $d$jscomp$155$$.setDate($d$jscomp$155$$.getDate() + 7);
    return $d$jscomp$155$$;
  }(), $ref$jscomp$25$$ = $APP.$helix$hooks$use_ref$$(null);
  $G__269548_270020_G__269552_map__269539_map__269539__$1_props__41575__auto__$jscomp$27_vec__269536$$ = $APP.$helix$hooks$wrap_fx$$(function() {
    return $APP.$cljs$core$truth_$$($APP.$cljs$core$_deref$$($ref$jscomp$25$$)) ? $APP.$module$node_modules$gsap$dist$gsap$$.gsap.fromTo($APP.$cljs$core$_deref$$($ref$jscomp$25$$), {opacity:0, y:-12}, {opacity:1, y:0, duration:0.5, ease:"power2.out"}) : null;
  });
  $G__269549_270021_entries$jscomp$6_maybe_ref__41576__auto__$jscomp$27$$ = [];
  $APP.$helix$hooks$raw_use_effect$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$hooks$raw_use_effect$$.$cljs$core$IFn$_invoke$arity$2$($G__269548_270020_G__269552_map__269539_map__269539__$1_props__41575__auto__$jscomp$27_vec__269536$$, $G__269549_270021_entries$jscomp$6_maybe_ref__41576__auto__$jscomp$27$$) : $APP.$helix$hooks$raw_use_effect$$.call(null, $G__269548_270020_G__269552_map__269539_map__269539__$1_props__41575__auto__$jscomp$27_vec__269536$$, $G__269549_270021_entries$jscomp$6_maybe_ref__41576__auto__$jscomp$27$$);
  $G__269548_270020_G__269552_map__269539_map__269539__$1_props__41575__auto__$jscomp$27_vec__269536$$ = function() {
    return {ref:$ref$jscomp$25$$, className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["mb-4 pb-5 opacity-0", "border-b", "border-slate-200 dark:border-white/15"]))), children:[function() {
      var $G__269556$$ = function() {
        return {className:"mb-6 flex items-center gap-3", children:[function() {
          var $G__269560$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["w-10", "h-px bg-pink-500/70"])))};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__269560$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__269560$$);
        }(), function() {
          var $G__269564$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$eyebrow_highlight$$), children:"4. "};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__269564$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__269564$$);
        }(), function() {
          var $G__269568$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$eyebrow_midlight$$), children:"Cash Flow"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__269568$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__269568$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__269556$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__269556$$);
    }(), function() {
      var $G__269572$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-mono", "text-3xl", "font-extrabold", "tracking-tight", "text-slate-900  dark:text-slate-100"]))), children:$amp$pages$budget$cash_flow$format_currency$$($target_total$$)};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__269572$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__269572$$);
    }(), function() {
      var $G__269576$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-mono", "text-[11px] mt-0.5", "text-slate-600  dark:text-slate-400"]))), children:"target total"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__269576$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__269576$$);
    }(), function() {
      var $G__269580$$ = function() {
        return {className:"mt-4 grid grid-cols-2 gap-4", children:[function() {
          var $G__269584$$ = function() {
            return {className:"border-l-2 border-emerald-500/90 dark:border-emerald-300/90 pl-3", children:[function() {
              var $G__269588$$ = {className:"font-mono text-lg uppercase tracking-widest text-emerald-600/50 dark:text-emerald-300/50 mb-1", children:"Funds Raised"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__269588$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__269588$$);
            }(), function() {
              var $G__269592$$ = {className:"font-mono text-lg font-bold text-emerald-600 dark:text-emerald-300", children:$amp$pages$budget$cash_flow$format_currency$$($funds_raised$$)};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__269592$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__269592$$);
            }()]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__269584$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__269584$$);
        }(), function() {
          var $G__269596$$ = function() {
            return {className:"border-l-2 border-pink-500/90 dark:border-pink-300/90 pl-3", children:[function() {
              var $G__269600$$ = {className:"font-mono text-lg uppercase tracking-widest text-pink-600/50 dark:text-pink-300/50 mb-1", children:"Remaining"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__269600$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__269600$$);
            }(), function() {
              var $G__269604$$ = {className:"font-mono text-lg font-bold text-pink-600 dark:text-pink-300", children:$amp$pages$budget$cash_flow$format_currency$$($gap$$)};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__269604$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__269604$$);
            }()]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__269596$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__269596$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__269580$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__269580$$);
    }(), function() {
      var $G__269608$$ = function() {
        return {className:"mt-3 grid grid-cols-2 gap-4", children:[function() {
          var $G__269612$$ = function() {
            return {className:"border-l-2 border-emerald-500/20 dark:border-emerald-300/20 pl-3", children:[function() {
              var $G__269616$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$("font-mono;text-lg;uppercase;tracking-widest;text-slate-600  dark:text-slate-400;mb-1".split(";")))), children:"COST, PAID"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__269616$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__269616$$);
            }(), function() {
              var $G__269620$$ = {className:"font-mono text-lg font-bold text-emerald-600 dark:text-emerald-300", children:$amp$pages$budget$cash_flow$format_currency$$($paid_sum$$)};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__269620$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__269620$$);
            }()]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__269612$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__269612$$);
        }(), function() {
          var $G__269624$$ = function() {
            return {className:$APP.$helix$impl$props$normalize_class$$("border-l-2 pl-3 " + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$("border-slate-200 dark:border-white/15")), children:[function() {
              var $G__269628$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$("font-mono;text-lg;uppercase;tracking-widest;text-slate-600  dark:text-slate-400;mb-1".split(";")))), children:"Pending"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__269628$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__269628$$);
            }(), function() {
              var $G__269632$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-mono", "text-lg", "font-bold", " text-pink-600 dark:text-pink-300"]))), children:$amp$pages$budget$cash_flow$format_currency$$($pending_sum$$)};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__269632$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__269632$$);
            }()]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__269624$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__269624$$);
        }(), function() {
          var $G__269636$$ = function() {
            return {className:"border-l-2 border-pink-500/30 pl-3", children:[function() {
              var $G__269640$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$("font-mono;text-lg;uppercase;tracking-widest;text-slate-600  dark:text-slate-400;mb-1".split(";")))), children:"Critical"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__269640$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__269640$$);
            }(), function() {
              var $G__269644$$ = {className:"font-mono text-lg font-bold text-pink-600 dark:text-pink-300", children:$amp$pages$budget$cash_flow$format_currency$$($critical_sum$$)};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__269644$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__269644$$);
            }()]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__269636$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__269636$$);
        }(), function() {
          var $G__269648$$ = function() {
            return {className:"border-l-2 border-indigo-500/30 dark:border-indigo-400/30 pl-3", children:[function() {
              var $G__269652$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$("font-mono;text-lg;uppercase;tracking-widest;text-slate-600  dark:text-slate-400;mb-1".split(";")))), children:"Next Due"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__269652$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__269652$$);
            }(), function() {
              var $G__269656$$ = {className:"font-mono text-base font-bold text-indigo-600 dark:text-indigo-300", children:"" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($next_due$$.toLocaleString("en-US", {month:"short"})) + " " + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($next_due$$.getDate())};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__269656$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__269656$$);
            }()]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__269648$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__269648$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__269608$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__269608$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__269548_270020_G__269552_map__269539_map__269539__$1_props__41575__auto__$jscomp$27_vec__269536$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__269548_270020_G__269552_map__269539_map__269539__$1_props__41575__auto__$jscomp$27_vec__269536$$);
};
$amp$pages$budget$cash_flow$cash_flow$$ = function($G__269689_270022_G__269717_map__269671_map__269671__$1_props__41575__auto__$jscomp$28_vec__269665_vec__269676_vec__269679$$, $G__269690_270023_maybe_ref__41576__auto__$jscomp$28$$) {
  $G__269689_270022_G__269717_map__269671_map__269671__$1_props__41575__auto__$jscomp$28_vec__269665_vec__269676_vec__269679$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__269689_270022_G__269717_map__269671_map__269671__$1_props__41575__auto__$jscomp$28_vec__269665_vec__269676_vec__269679$$), $G__269690_270023_maybe_ref__41576__auto__$jscomp$28$$], null);
  $G__269689_270022_G__269717_map__269671_map__269671__$1_props__41575__auto__$jscomp$28_vec__269665_vec__269676_vec__269679$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__269689_270022_G__269717_map__269671_map__269671__$1_props__41575__auto__$jscomp$28_vec__269665_vec__269676_vec__269679$$, 0, null);
  $G__269689_270022_G__269717_map__269671_map__269671__$1_props__41575__auto__$jscomp$28_vec__269665_vec__269676_vec__269679$$ = $APP.$cljs$core$__destructure_map$$($G__269689_270022_G__269717_map__269671_map__269671__$1_props__41575__auto__$jscomp$28_vec__269665_vec__269676_vec__269679$$);
  var $id$jscomp$94$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__269689_270022_G__269717_map__269671_map__269671__$1_props__41575__auto__$jscomp$28_vec__269665_vec__269676_vec__269679$$, $APP.$cljs$cst$286$id$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__269689_270022_G__269717_map__269671_map__269671__$1_props__41575__auto__$jscomp$28_vec__269665_vec__269676_vec__269679$$ = $APP.$helix$hooks$use_state$$(null);
  var $error$jscomp$22$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__269689_270022_G__269717_map__269671_map__269671__$1_props__41575__auto__$jscomp$28_vec__269665_vec__269676_vec__269679$$, 0, null);
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__269689_270022_G__269717_map__269671_map__269671__$1_props__41575__auto__$jscomp$28_vec__269665_vec__269676_vec__269679$$, 1, null);
  $G__269689_270022_G__269717_map__269671_map__269671__$1_props__41575__auto__$jscomp$28_vec__269665_vec__269676_vec__269679$$ = $APP.$helix$hooks$use_state$$(!1);
  var $expanded_QMARK_$jscomp$4$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__269689_270022_G__269717_map__269671_map__269671__$1_props__41575__auto__$jscomp$28_vec__269665_vec__269676_vec__269679$$, 0, null), $set_expanded_BANG_$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__269689_270022_G__269717_map__269671_map__269671__$1_props__41575__auto__$jscomp$28_vec__269665_vec__269676_vec__269679$$, 1, null), $container_ref$jscomp$3$$ = $APP.$helix$hooks$use_ref$$(null);
  $G__269689_270022_G__269717_map__269671_map__269671__$1_props__41575__auto__$jscomp$28_vec__269665_vec__269676_vec__269679$$ = $APP.$helix$hooks$wrap_fx$$(function() {
    if ($APP.$cljs$core$truth_$$($APP.$cljs$core$truth_$$($amp$pages$budget$cash_flow$cashflow_data$$) ? $APP.$cljs$core$_deref$$($container_ref$jscomp$3$$) : $amp$pages$budget$cash_flow$cashflow_data$$)) {
      var $spine$$ = $APP.$cljs$core$_deref$$($container_ref$jscomp$3$$).querySelector(".cf-spine");
      return $APP.$cljs$core$truth_$$($spine$$) ? $APP.$module$node_modules$gsap$dist$gsap$$.gsap.fromTo($spine$$, {scaleY:0}, {scaleY:1, duration:0.8, delay:0.05, ease:"power3.out"}) : null;
    }
    return null;
  });
  $G__269690_270023_maybe_ref__41576__auto__$jscomp$28$$ = [$amp$pages$budget$cash_flow$cashflow_data$$];
  $APP.$helix$hooks$raw_use_effect$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$hooks$raw_use_effect$$.$cljs$core$IFn$_invoke$arity$2$($G__269689_270022_G__269717_map__269671_map__269671__$1_props__41575__auto__$jscomp$28_vec__269665_vec__269676_vec__269679$$, $G__269690_270023_maybe_ref__41576__auto__$jscomp$28$$) : $APP.$helix$hooks$raw_use_effect$$.call(null, $G__269689_270022_G__269717_map__269671_map__269671__$1_props__41575__auto__$jscomp$28_vec__269665_vec__269676_vec__269679$$, $G__269690_270023_maybe_ref__41576__auto__$jscomp$28$$);
  $G__269689_270022_G__269717_map__269671_map__269671__$1_props__41575__auto__$jscomp$28_vec__269665_vec__269676_vec__269679$$ = function() {
    return {id:$id$jscomp$94$$, ref:$container_ref$jscomp$3$$, className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["min-h-screen px-4 pb-8 pt-6 antialiased selection:bg-pink-500/30", "text-slate-900  dark:text-slate-100", "bg-white        dark:bg-slate-900"]))), children:$APP.$cljs$core$truth_$$($error$jscomp$22$$) ? function() {
      var $G__269727$$ = {className:"font-mono text-sm text-red-400 p-4", children:"err: " + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($error$jscomp$22$$)};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__269727$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__269727$$);
    }() : $amp$pages$budget$cash_flow$cashflow_data$$ == null ? function() {
      var $G__269741_G__269745$jscomp$inline_4122$$ = {className:"h-5 w-5 animate-spin border-2 border-slate-700 border-t-pink-400"};
      $G__269741_G__269745$jscomp$inline_4122$$ = {className:"flex items-center justify-center py-20", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__269741_G__269745$jscomp$inline_4122$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__269741_G__269745$jscomp$inline_4122$$)};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__269741_G__269745$jscomp$inline_4122$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__269741_G__269745$jscomp$inline_4122$$);
    }() : function() {
      var $G__269771_map__269749__$1_sorted$jscomp$1$$ = $APP.$cljs$core$__destructure_map$$($amp$pages$budget$cash_flow$cashflow_data$$), $cash_flow_model$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__269771_map__269749__$1_sorted$jscomp$1$$, $cljs$cst$840$cash_flow_model$$), $funds_raised$jscomp$1$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__269771_map__269749__$1_sorted$jscomp$1$$, $cljs$cst$839$funds_raised$$), $debt_raised$jscomp$1$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__269771_map__269749__$1_sorted$jscomp$1$$, 
      $cljs$cst$838$debt_raised$$), $target_total$jscomp$1$$ = $amp$pages$budget$table$sub_total_all_sections$$($amp$pages$budget$cost_breakdown$cost_data$$) + 66821, $entries_kw$$ = $APP.$cljs$core$map$$.$cljs$core$IFn$_invoke$arity$2$(function($p1__269660_SHARP_$$) {
        return $APP.$cljs$core$update$cljs$0core$0IFn$0_invoke$0arity$03$$($APP.$cljs$core$update$cljs$0core$0IFn$0_invoke$0arity$03$$($p1__269660_SHARP_$$, $cljs$cst$843$priority$$, $APP.$cljs$core$keyword$$), $APP.$cljs$cst$12$status$$, $APP.$cljs$core$keyword$$);
      }, $cash_flow_model$$);
      $G__269771_map__269749__$1_sorted$jscomp$1$$ = $APP.$cljs$core$sort_by$cljs$0core$0IFn$0_invoke$0arity$02$$($APP.$cljs$core$comp$$.$cljs$core$IFn$_invoke$arity$3$($amp$pages$budget$cash_flow$date__GT_ms$$, $amp$pages$budget$cash_flow$parse_date$$, $cljs$cst$842$due$$), $entries_kw$$);
      var $groups$jscomp$1$$ = $amp$pages$budget$cash_flow$group_by_month$$($G__269771_map__269749__$1_sorted$jscomp$1$$), $now_ms$$ = $amp$pages$budget$cash_flow$date__GT_ms$$(new Date()), $all_items$$ = function() {
        for (var $items$jscomp$9$$ = $APP.$cljs$core$atom$cljs$0core$0IFn$0_invoke$0arity$01$$($APP.$cljs$core$PersistentVector$EMPTY$$), $now_done$$ = $APP.$cljs$core$atom$cljs$0core$0IFn$0_invoke$0arity$01$$(!1), $counter$$ = $APP.$cljs$core$atom$cljs$0core$0IFn$0_invoke$0arity$01$$(0), $G__270072_seq__269750_270031_seq__269750_270070__$1_temp__5823__auto___270069$$ = $APP.$cljs$core$seq$$($groups$jscomp$1$$), $G__270073_G__270091_chunk__269751_270032_group_270076_seq__269766_270078_seq__269766_270089__$1_temp__5823__auto___270088__$1$$ = 
        null, $G__270074_G__270092_c__5673__auto___270071_chunk__269767_270079_count__269752_270033_entry_270095_month_label_270077$$ = 0, $G__270093_c__5673__auto___270090_count__269768_270080_entry_ms_270096_i__269753_270034$$ = 0;;) {
          if ($G__270093_c__5673__auto___270090_count__269768_270080_entry_ms_270096_i__269753_270034$$ < $G__270074_G__270092_c__5673__auto___270071_chunk__269767_270079_count__269752_270033_entry_270095_month_label_270077$$) {
            var $G__270055_group_270039_i__269769_270081_seq__269762_270042_seq__269762_270053__$1_temp__5823__auto___270052$$ = $G__270073_G__270091_chunk__269751_270032_group_270076_seq__269766_270078_seq__269766_270089__$1_temp__5823__auto___270088__$1$$.$cljs$core$IIndexed$_nth$arity$2$(null, $G__270093_c__5673__auto___270090_count__269768_270080_entry_ms_270096_i__269753_270034$$), $G__270056_chunk__269763_270043_entry_270059_entry_270082_month_label_270040$$ = $amp$pages$budget$cash_flow$parse_date$$($cljs$cst$842$due$$.$cljs$core$IFn$_invoke$arity$1$($APP.$cljs$core$first$$($G__270055_group_270039_i__269769_270081_seq__269762_270042_seq__269762_270053__$1_temp__5823__auto___270052$$))).toLocaleString("en-US", 
            {month:"long", year:"numeric"});
            $APP.$cljs$core$swap_BANG_$$.$cljs$core$IFn$_invoke$arity$3$($items$jscomp$9$$, $APP.$cljs$core$conj$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$25$type$$, $cljs$cst$914$month$$, $APP.$cljs$cst$415$label$$, $G__270056_chunk__269763_270043_entry_270059_entry_270082_month_label_270040$$, $APP.$cljs$cst$756$idx$$, $APP.$cljs$core$_deref$$($counter$$)], null));
            $APP.$cljs$core$swap_BANG_$$.$cljs$core$IFn$_invoke$arity$2$($counter$$, $APP.$cljs$core$inc$$);
            $G__270055_group_270039_i__269769_270081_seq__269762_270042_seq__269762_270053__$1_temp__5823__auto___270052$$ = $APP.$cljs$core$seq$$($G__270055_group_270039_i__269769_270081_seq__269762_270042_seq__269762_270053__$1_temp__5823__auto___270052$$);
            $G__270056_chunk__269763_270043_entry_270059_entry_270082_month_label_270040$$ = null;
            for (var $G__270057_c__5673__auto___270054_count__269764_270044_entry_ms_270060_entry_ms_270083$$ = 0, $i__269765_270045$$ = 0;;) {
              if ($i__269765_270045$$ < $G__270057_c__5673__auto___270054_count__269764_270044_entry_ms_270060_entry_ms_270083$$) {
                var $entry_270046$$ = $G__270056_chunk__269763_270043_entry_270059_entry_270082_month_label_270040$$.$cljs$core$IIndexed$_nth$arity$2$(null, $i__269765_270045$$), $entry_ms_270047$$ = $amp$pages$budget$cash_flow$date__GT_ms$$($amp$pages$budget$cash_flow$parse_date$$($cljs$cst$842$due$$.$cljs$core$IFn$_invoke$arity$1$($entry_270046$$)));
                $APP.$cljs$core$not$$($APP.$cljs$core$_deref$$($now_done$$)) && $entry_ms_270047$$ > $now_ms$$ && ($APP.$cljs$core$swap_BANG_$$.$cljs$core$IFn$_invoke$arity$3$($items$jscomp$9$$, $APP.$cljs$core$conj$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$25$type$$, $cljs$cst$915$now$$], null)), $APP.$cljs$core$reset_BANG_$$($now_done$$, !0));
                $APP.$cljs$core$swap_BANG_$$.$cljs$core$IFn$_invoke$arity$3$($items$jscomp$9$$, $APP.$cljs$core$conj$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$25$type$$, $cljs$cst$910$entry$$, $cljs$cst$910$entry$$, $entry_270046$$, $APP.$cljs$cst$756$idx$$, $APP.$cljs$core$_deref$$($counter$$), $cljs$cst$916$past_QMARK_$$, $APP.$cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$($cljs$cst$845$paid$$, $APP.$cljs$cst$12$status$$.$cljs$core$IFn$_invoke$arity$1$($entry_270046$$))], 
                null));
                $APP.$cljs$core$swap_BANG_$$.$cljs$core$IFn$_invoke$arity$2$($counter$$, $APP.$cljs$core$inc$$);
                $i__269765_270045$$ += 1;
              } else {
                if ($G__270055_group_270039_i__269769_270081_seq__269762_270042_seq__269762_270053__$1_temp__5823__auto___270052$$ = $APP.$cljs$core$seq$$($G__270055_group_270039_i__269769_270081_seq__269762_270042_seq__269762_270053__$1_temp__5823__auto___270052$$)) {
                  $APP.$cljs$core$chunked_seq_QMARK_$$($G__270055_group_270039_i__269769_270081_seq__269762_270042_seq__269762_270053__$1_temp__5823__auto___270052$$) ? ($G__270057_c__5673__auto___270054_count__269764_270044_entry_ms_270060_entry_ms_270083$$ = $APP.$cljs$core$_chunked_first$$($G__270055_group_270039_i__269769_270081_seq__269762_270042_seq__269762_270053__$1_temp__5823__auto___270052$$), $G__270055_group_270039_i__269769_270081_seq__269762_270042_seq__269762_270053__$1_temp__5823__auto___270052$$ = 
                  $APP.$cljs$core$_chunked_rest$$($G__270055_group_270039_i__269769_270081_seq__269762_270042_seq__269762_270053__$1_temp__5823__auto___270052$$), $G__270056_chunk__269763_270043_entry_270059_entry_270082_month_label_270040$$ = $G__270057_c__5673__auto___270054_count__269764_270044_entry_ms_270060_entry_ms_270083$$, $G__270057_c__5673__auto___270054_count__269764_270044_entry_ms_270060_entry_ms_270083$$ = $APP.$cljs$core$count$$($G__270057_c__5673__auto___270054_count__269764_270044_entry_ms_270060_entry_ms_270083$$)) : 
                  ($G__270056_chunk__269763_270043_entry_270059_entry_270082_month_label_270040$$ = $APP.$cljs$core$first$$($G__270055_group_270039_i__269769_270081_seq__269762_270042_seq__269762_270053__$1_temp__5823__auto___270052$$), $G__270057_c__5673__auto___270054_count__269764_270044_entry_ms_270060_entry_ms_270083$$ = $amp$pages$budget$cash_flow$date__GT_ms$$($amp$pages$budget$cash_flow$parse_date$$($cljs$cst$842$due$$.$cljs$core$IFn$_invoke$arity$1$($G__270056_chunk__269763_270043_entry_270059_entry_270082_month_label_270040$$))), 
                  $APP.$cljs$core$not$$($APP.$cljs$core$_deref$$($now_done$$)) && $G__270057_c__5673__auto___270054_count__269764_270044_entry_ms_270060_entry_ms_270083$$ > $now_ms$$ && ($APP.$cljs$core$swap_BANG_$$.$cljs$core$IFn$_invoke$arity$3$($items$jscomp$9$$, $APP.$cljs$core$conj$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$25$type$$, $cljs$cst$915$now$$], null)), $APP.$cljs$core$reset_BANG_$$($now_done$$, !0)), $APP.$cljs$core$swap_BANG_$$.$cljs$core$IFn$_invoke$arity$3$($items$jscomp$9$$, 
                  $APP.$cljs$core$conj$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$25$type$$, $cljs$cst$910$entry$$, $cljs$cst$910$entry$$, $G__270056_chunk__269763_270043_entry_270059_entry_270082_month_label_270040$$, $APP.$cljs$cst$756$idx$$, $APP.$cljs$core$_deref$$($counter$$), $cljs$cst$916$past_QMARK_$$, $APP.$cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$($cljs$cst$845$paid$$, $APP.$cljs$cst$12$status$$.$cljs$core$IFn$_invoke$arity$1$($G__270056_chunk__269763_270043_entry_270059_entry_270082_month_label_270040$$))], 
                  null)), $APP.$cljs$core$swap_BANG_$$.$cljs$core$IFn$_invoke$arity$2$($counter$$, $APP.$cljs$core$inc$$), $G__270055_group_270039_i__269769_270081_seq__269762_270042_seq__269762_270053__$1_temp__5823__auto___270052$$ = $APP.$cljs$core$next$$($G__270055_group_270039_i__269769_270081_seq__269762_270042_seq__269762_270053__$1_temp__5823__auto___270052$$), $G__270056_chunk__269763_270043_entry_270059_entry_270082_month_label_270040$$ = null, $G__270057_c__5673__auto___270054_count__269764_270044_entry_ms_270060_entry_ms_270083$$ = 
                  0), $i__269765_270045$$ = 0;
                } else {
                  break;
                }
              }
            }
            $G__270093_c__5673__auto___270090_count__269768_270080_entry_ms_270096_i__269753_270034$$ += 1;
          } else {
            if ($G__270072_seq__269750_270031_seq__269750_270070__$1_temp__5823__auto___270069$$ = $APP.$cljs$core$seq$$($G__270072_seq__269750_270031_seq__269750_270070__$1_temp__5823__auto___270069$$)) {
              if ($APP.$cljs$core$chunked_seq_QMARK_$$($G__270072_seq__269750_270031_seq__269750_270070__$1_temp__5823__auto___270069$$)) {
                $G__270074_G__270092_c__5673__auto___270071_chunk__269767_270079_count__269752_270033_entry_270095_month_label_270077$$ = $APP.$cljs$core$_chunked_first$$($G__270072_seq__269750_270031_seq__269750_270070__$1_temp__5823__auto___270069$$), $G__270072_seq__269750_270031_seq__269750_270070__$1_temp__5823__auto___270069$$ = $APP.$cljs$core$_chunked_rest$$($G__270072_seq__269750_270031_seq__269750_270070__$1_temp__5823__auto___270069$$), $G__270073_G__270091_chunk__269751_270032_group_270076_seq__269766_270078_seq__269766_270089__$1_temp__5823__auto___270088__$1$$ = 
                $G__270074_G__270092_c__5673__auto___270071_chunk__269767_270079_count__269752_270033_entry_270095_month_label_270077$$, $G__270074_G__270092_c__5673__auto___270071_chunk__269767_270079_count__269752_270033_entry_270095_month_label_270077$$ = $APP.$cljs$core$count$$($G__270074_G__270092_c__5673__auto___270071_chunk__269767_270079_count__269752_270033_entry_270095_month_label_270077$$);
              } else {
                $G__270073_G__270091_chunk__269751_270032_group_270076_seq__269766_270078_seq__269766_270089__$1_temp__5823__auto___270088__$1$$ = $APP.$cljs$core$first$$($G__270072_seq__269750_270031_seq__269750_270070__$1_temp__5823__auto___270069$$);
                $G__270074_G__270092_c__5673__auto___270071_chunk__269767_270079_count__269752_270033_entry_270095_month_label_270077$$ = $amp$pages$budget$cash_flow$parse_date$$($cljs$cst$842$due$$.$cljs$core$IFn$_invoke$arity$1$($APP.$cljs$core$first$$($G__270073_G__270091_chunk__269751_270032_group_270076_seq__269766_270078_seq__269766_270089__$1_temp__5823__auto___270088__$1$$))).toLocaleString("en-US", {month:"long", year:"numeric"});
                $APP.$cljs$core$swap_BANG_$$.$cljs$core$IFn$_invoke$arity$3$($items$jscomp$9$$, $APP.$cljs$core$conj$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$25$type$$, $cljs$cst$914$month$$, $APP.$cljs$cst$415$label$$, $G__270074_G__270092_c__5673__auto___270071_chunk__269767_270079_count__269752_270033_entry_270095_month_label_270077$$, $APP.$cljs$cst$756$idx$$, $APP.$cljs$core$_deref$$($counter$$)], null));
                $APP.$cljs$core$swap_BANG_$$.$cljs$core$IFn$_invoke$arity$2$($counter$$, $APP.$cljs$core$inc$$);
                $G__270073_G__270091_chunk__269751_270032_group_270076_seq__269766_270078_seq__269766_270089__$1_temp__5823__auto___270088__$1$$ = $APP.$cljs$core$seq$$($G__270073_G__270091_chunk__269751_270032_group_270076_seq__269766_270078_seq__269766_270089__$1_temp__5823__auto___270088__$1$$);
                $G__270074_G__270092_c__5673__auto___270071_chunk__269767_270079_count__269752_270033_entry_270095_month_label_270077$$ = null;
                for ($G__270055_group_270039_i__269769_270081_seq__269762_270042_seq__269762_270053__$1_temp__5823__auto___270052$$ = $G__270093_c__5673__auto___270090_count__269768_270080_entry_ms_270096_i__269753_270034$$ = 0;;) {
                  if ($G__270055_group_270039_i__269769_270081_seq__269762_270042_seq__269762_270053__$1_temp__5823__auto___270052$$ < $G__270093_c__5673__auto___270090_count__269768_270080_entry_ms_270096_i__269753_270034$$) {
                    $G__270056_chunk__269763_270043_entry_270059_entry_270082_month_label_270040$$ = $G__270074_G__270092_c__5673__auto___270071_chunk__269767_270079_count__269752_270033_entry_270095_month_label_270077$$.$cljs$core$IIndexed$_nth$arity$2$(null, $G__270055_group_270039_i__269769_270081_seq__269762_270042_seq__269762_270053__$1_temp__5823__auto___270052$$), $G__270057_c__5673__auto___270054_count__269764_270044_entry_ms_270060_entry_ms_270083$$ = $amp$pages$budget$cash_flow$date__GT_ms$$($amp$pages$budget$cash_flow$parse_date$$($cljs$cst$842$due$$.$cljs$core$IFn$_invoke$arity$1$($G__270056_chunk__269763_270043_entry_270059_entry_270082_month_label_270040$$))), 
                    $APP.$cljs$core$not$$($APP.$cljs$core$_deref$$($now_done$$)) && $G__270057_c__5673__auto___270054_count__269764_270044_entry_ms_270060_entry_ms_270083$$ > $now_ms$$ && ($APP.$cljs$core$swap_BANG_$$.$cljs$core$IFn$_invoke$arity$3$($items$jscomp$9$$, $APP.$cljs$core$conj$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$25$type$$, $cljs$cst$915$now$$], null)), $APP.$cljs$core$reset_BANG_$$($now_done$$, !0)), $APP.$cljs$core$swap_BANG_$$.$cljs$core$IFn$_invoke$arity$3$($items$jscomp$9$$, 
                    $APP.$cljs$core$conj$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$25$type$$, $cljs$cst$910$entry$$, $cljs$cst$910$entry$$, $G__270056_chunk__269763_270043_entry_270059_entry_270082_month_label_270040$$, $APP.$cljs$cst$756$idx$$, $APP.$cljs$core$_deref$$($counter$$), $cljs$cst$916$past_QMARK_$$, $APP.$cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$($cljs$cst$845$paid$$, $APP.$cljs$cst$12$status$$.$cljs$core$IFn$_invoke$arity$1$($G__270056_chunk__269763_270043_entry_270059_entry_270082_month_label_270040$$))], 
                    null)), $APP.$cljs$core$swap_BANG_$$.$cljs$core$IFn$_invoke$arity$2$($counter$$, $APP.$cljs$core$inc$$), $G__270055_group_270039_i__269769_270081_seq__269762_270042_seq__269762_270053__$1_temp__5823__auto___270052$$ += 1;
                  } else {
                    if ($G__270073_G__270091_chunk__269751_270032_group_270076_seq__269766_270078_seq__269766_270089__$1_temp__5823__auto___270088__$1$$ = $APP.$cljs$core$seq$$($G__270073_G__270091_chunk__269751_270032_group_270076_seq__269766_270078_seq__269766_270089__$1_temp__5823__auto___270088__$1$$)) {
                      $APP.$cljs$core$chunked_seq_QMARK_$$($G__270073_G__270091_chunk__269751_270032_group_270076_seq__269766_270078_seq__269766_270089__$1_temp__5823__auto___270088__$1$$) ? ($G__270093_c__5673__auto___270090_count__269768_270080_entry_ms_270096_i__269753_270034$$ = $APP.$cljs$core$_chunked_first$$($G__270073_G__270091_chunk__269751_270032_group_270076_seq__269766_270078_seq__269766_270089__$1_temp__5823__auto___270088__$1$$), $G__270073_G__270091_chunk__269751_270032_group_270076_seq__269766_270078_seq__269766_270089__$1_temp__5823__auto___270088__$1$$ = 
                      $APP.$cljs$core$_chunked_rest$$($G__270073_G__270091_chunk__269751_270032_group_270076_seq__269766_270078_seq__269766_270089__$1_temp__5823__auto___270088__$1$$), $G__270074_G__270092_c__5673__auto___270071_chunk__269767_270079_count__269752_270033_entry_270095_month_label_270077$$ = $G__270093_c__5673__auto___270090_count__269768_270080_entry_ms_270096_i__269753_270034$$, $G__270093_c__5673__auto___270090_count__269768_270080_entry_ms_270096_i__269753_270034$$ = $APP.$cljs$core$count$$($G__270093_c__5673__auto___270090_count__269768_270080_entry_ms_270096_i__269753_270034$$)) : 
                      ($G__270074_G__270092_c__5673__auto___270071_chunk__269767_270079_count__269752_270033_entry_270095_month_label_270077$$ = $APP.$cljs$core$first$$($G__270073_G__270091_chunk__269751_270032_group_270076_seq__269766_270078_seq__269766_270089__$1_temp__5823__auto___270088__$1$$), $G__270093_c__5673__auto___270090_count__269768_270080_entry_ms_270096_i__269753_270034$$ = $amp$pages$budget$cash_flow$date__GT_ms$$($amp$pages$budget$cash_flow$parse_date$$($cljs$cst$842$due$$.$cljs$core$IFn$_invoke$arity$1$($G__270074_G__270092_c__5673__auto___270071_chunk__269767_270079_count__269752_270033_entry_270095_month_label_270077$$))), 
                      $APP.$cljs$core$not$$($APP.$cljs$core$_deref$$($now_done$$)) && $G__270093_c__5673__auto___270090_count__269768_270080_entry_ms_270096_i__269753_270034$$ > $now_ms$$ && ($APP.$cljs$core$swap_BANG_$$.$cljs$core$IFn$_invoke$arity$3$($items$jscomp$9$$, $APP.$cljs$core$conj$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$25$type$$, $cljs$cst$915$now$$], null)), $APP.$cljs$core$reset_BANG_$$($now_done$$, !0)), $APP.$cljs$core$swap_BANG_$$.$cljs$core$IFn$_invoke$arity$3$($items$jscomp$9$$, 
                      $APP.$cljs$core$conj$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$25$type$$, $cljs$cst$910$entry$$, $cljs$cst$910$entry$$, $G__270074_G__270092_c__5673__auto___270071_chunk__269767_270079_count__269752_270033_entry_270095_month_label_270077$$, $APP.$cljs$cst$756$idx$$, $APP.$cljs$core$_deref$$($counter$$), $cljs$cst$916$past_QMARK_$$, $APP.$cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$($cljs$cst$845$paid$$, $APP.$cljs$cst$12$status$$.$cljs$core$IFn$_invoke$arity$1$($G__270074_G__270092_c__5673__auto___270071_chunk__269767_270079_count__269752_270033_entry_270095_month_label_270077$$))], 
                      null)), $APP.$cljs$core$swap_BANG_$$.$cljs$core$IFn$_invoke$arity$2$($counter$$, $APP.$cljs$core$inc$$), $G__270073_G__270091_chunk__269751_270032_group_270076_seq__269766_270078_seq__269766_270089__$1_temp__5823__auto___270088__$1$$ = $APP.$cljs$core$next$$($G__270073_G__270091_chunk__269751_270032_group_270076_seq__269766_270078_seq__269766_270089__$1_temp__5823__auto___270088__$1$$), $G__270074_G__270092_c__5673__auto___270071_chunk__269767_270079_count__269752_270033_entry_270095_month_label_270077$$ = 
                      null, $G__270093_c__5673__auto___270090_count__269768_270080_entry_ms_270096_i__269753_270034$$ = 0), $G__270055_group_270039_i__269769_270081_seq__269762_270042_seq__269762_270053__$1_temp__5823__auto___270052$$ = 0;
                    } else {
                      break;
                    }
                  }
                }
                $G__270072_seq__269750_270031_seq__269750_270070__$1_temp__5823__auto___270069$$ = $APP.$cljs$core$next$$($G__270072_seq__269750_270031_seq__269750_270070__$1_temp__5823__auto___270069$$);
                $G__270073_G__270091_chunk__269751_270032_group_270076_seq__269766_270078_seq__269766_270089__$1_temp__5823__auto___270088__$1$$ = null;
                $G__270074_G__270092_c__5673__auto___270071_chunk__269767_270079_count__269752_270033_entry_270095_month_label_270077$$ = 0;
              }
              $G__270093_c__5673__auto___270090_count__269768_270080_entry_ms_270096_i__269753_270034$$ = 0;
            } else {
              break;
            }
          }
        }
        $APP.$cljs$core$not$$($APP.$cljs$core$_deref$$($now_done$$)) && $APP.$cljs$core$swap_BANG_$$.$cljs$core$IFn$_invoke$arity$3$($items$jscomp$9$$, $APP.$cljs$core$conj$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$25$type$$, $cljs$cst$915$now$$], null));
        return $APP.$cljs$core$_deref$$($items$jscomp$9$$);
      }();
      $G__269771_map__269749__$1_sorted$jscomp$1$$ = function() {
        return {children:[function() {
          var $G__269775$$ = {entries:$entries_kw$$, "target-total":$target_total$jscomp$1$$, "funds-raised":$funds_raised$jscomp$1$$, "debt-raised":$debt_raised$jscomp$1$$};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$pages$budget$cash_flow$summary_header$$, $G__269775$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$budget$cash_flow$summary_header$$, $G__269775$$);
        }(), function() {
          var $G__269779$$ = function() {
            return {"expanded?":$expanded_QMARK_$jscomp$4$$, "on-toggle":function() {
              return $set_expanded_BANG_$$.$cljs$core$IFn$_invoke$arity$1$ ? $set_expanded_BANG_$$.$cljs$core$IFn$_invoke$arity$1$($APP.$cljs$core$not$$) : $set_expanded_BANG_$$.call(null, $APP.$cljs$core$not$$);
            }};
          }();
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$pages$budget$cash_flow$view_toggle$$, $G__269779$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$budget$cash_flow$view_toggle$$, $G__269779$$);
        }(), function() {
          var $G__269783$$ = function() {
            return {className:"relative", children:[function() {
              var $G__269787$$ = {className:$APP.$helix$impl$props$normalize_class$$("cf-spine absolute left-[13px] top-0 h-full origin-top border-l border-dashed " + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$("border-slate-200 dark:border-white/15"))};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__269787$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__269787$$);
            }(), $APP.$cljs$core$truth_$$($expanded_QMARK_$jscomp$4$$) ? $APP.$cljs$core$map_indexed$cljs$0core$0IFn$0_invoke$0arity$02$$(function($G__269793_G__269797_G__269803_i$jscomp$425$$, $G__269792_G__269802_item$jscomp$40$$) {
              var $G__269790_G__269790__$1$$ = $APP.$cljs$cst$25$type$$.$cljs$core$IFn$_invoke$arity$1$($G__269792_G__269802_item$jscomp$40$$);
              $G__269790_G__269790__$1$$ = $G__269790_G__269790__$1$$ instanceof $APP.$cljs$core$Keyword$$ ? $G__269790_G__269790__$1$$.$fqn$ : null;
              switch($G__269790_G__269790__$1$$) {
                case "month":
                  return $G__269792_G__269802_item$jscomp$40$$ = {label:$APP.$cljs$cst$415$label$$.$cljs$core$IFn$_invoke$arity$1$($G__269792_G__269802_item$jscomp$40$$), idx:$APP.$cljs$cst$756$idx$$.$cljs$core$IFn$_invoke$arity$1$($G__269792_G__269802_item$jscomp$40$$)}, $G__269793_G__269797_G__269803_i$jscomp$425$$ = "m-" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($G__269793_G__269797_G__269803_i$jscomp$425$$), $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$($amp$pages$budget$cash_flow$month_header$$, 
                  $G__269792_G__269802_item$jscomp$40$$, $G__269793_G__269797_G__269803_i$jscomp$425$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$budget$cash_flow$month_header$$, $G__269792_G__269802_item$jscomp$40$$, $G__269793_G__269797_G__269803_i$jscomp$425$$);
                case "now":
                  return $G__269793_G__269797_G__269803_i$jscomp$425$$ = {}, $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$($amp$pages$budget$cash_flow$now_marker$$, $G__269793_G__269797_G__269803_i$jscomp$425$$, "now") : $APP.$helix$core$jsx$$.call(null, $amp$pages$budget$cash_flow$now_marker$$, $G__269793_G__269797_G__269803_i$jscomp$425$$, "now");
                case "entry":
                  return $G__269792_G__269802_item$jscomp$40$$ = {entry:$cljs$cst$910$entry$$.$cljs$core$IFn$_invoke$arity$1$($G__269792_G__269802_item$jscomp$40$$), idx:$APP.$cljs$cst$756$idx$$.$cljs$core$IFn$_invoke$arity$1$($G__269792_G__269802_item$jscomp$40$$), "is-past":$APP.$cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$($cljs$cst$845$paid$$, $APP.$cljs$cst$12$status$$.$cljs$core$IFn$_invoke$arity$1$($cljs$cst$910$entry$$.$cljs$core$IFn$_invoke$arity$1$($G__269792_G__269802_item$jscomp$40$$)))}, 
                  $G__269793_G__269797_G__269803_i$jscomp$425$$ = "e-" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($G__269793_G__269797_G__269803_i$jscomp$425$$), $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$($amp$pages$budget$cash_flow$timeline_node$$, $G__269792_G__269802_item$jscomp$40$$, $G__269793_G__269797_G__269803_i$jscomp$425$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$budget$cash_flow$timeline_node$$, $G__269792_G__269802_item$jscomp$40$$, 
                  $G__269793_G__269797_G__269803_i$jscomp$425$$);
                default:
                  throw Error("No matching clause: " + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($G__269790_G__269790__$1$$));
              }
            }, $all_items$$) : function() {
              var $c__5673__auto___270119_rollups_seq__269806_270106_temp__5823__auto___270117_vec__269849_270124$$ = $amp$pages$budget$cash_flow$month_rollups$$($entries_kw$$), $now_done$jscomp$1$$ = $APP.$cljs$core$atom$cljs$0core$0IFn$0_invoke$0arity$01$$(!1), $out$jscomp$15$$ = $APP.$cljs$core$atom$cljs$0core$0IFn$0_invoke$0arity$01$$($APP.$cljs$core$PersistentVector$EMPTY$$);
              $c__5673__auto___270119_rollups_seq__269806_270106_temp__5823__auto___270117_vec__269849_270124$$ = $APP.$cljs$core$seq$$($APP.$cljs$core$map_indexed$cljs$0core$0IFn$0_invoke$0arity$02$$($APP.$cljs$core$vector$$, $c__5673__auto___270119_rollups_seq__269806_270106_temp__5823__auto___270117_vec__269849_270124$$));
              for (var $G__270121_chunk__269807_270107_seq__269806_270118__$1$$ = null, $G__270122_count__269808_270108$$ = 0, $G__270120_i__269809_270109$$ = 0;;) {
                if ($G__270120_i__269809_270109$$ < $G__270122_count__269808_270108$$) {
                  var $vec__269836_270110$$ = $G__270121_chunk__269807_270107_seq__269806_270118__$1$$.$cljs$core$IIndexed$_nth$arity$2$(null, $G__270120_i__269809_270109$$), $i_270111$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($vec__269836_270110$$, 0, null), $r_270112$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($vec__269836_270110$$, 1, null);
                  $APP.$cljs$core$truth_$$(function() {
                    var $and__5140__auto__$jscomp$91$$ = $APP.$cljs$core$not$$($APP.$cljs$core$_deref$$($now_done$jscomp$1$$));
                    return $and__5140__auto__$jscomp$91$$ ? $cljs$cst$908$has_now$$.$cljs$core$IFn$_invoke$arity$1$($r_270112$$) : $and__5140__auto__$jscomp$91$$;
                  }()) && ($APP.$cljs$core$swap_BANG_$$.$cljs$core$IFn$_invoke$arity$3$($out$jscomp$15$$, $APP.$cljs$core$conj$$, function() {
                    var $G__269840$$ = {};
                    return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$($amp$pages$budget$cash_flow$now_marker$$, $G__269840$$, "now-s") : $APP.$helix$core$jsx$$.call(null, $amp$pages$budget$cash_flow$now_marker$$, $G__269840$$, "now-s");
                  }()), $APP.$cljs$core$reset_BANG_$$($now_done$jscomp$1$$, !0));
                  $APP.$cljs$core$swap_BANG_$$.$cljs$core$IFn$_invoke$arity$3$($out$jscomp$15$$, $APP.$cljs$core$conj$$, function() {
                    var $G__269845$$ = {rollup:$r_270112$$, idx:$i_270111$$}, $G__269846$$ = "sr-" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($i_270111$$);
                    return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$($amp$pages$budget$cash_flow$month_summary_row$$, $G__269845$$, $G__269846$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$budget$cash_flow$month_summary_row$$, $G__269845$$, $G__269846$$);
                  }());
                  $G__270120_i__269809_270109$$ += 1;
                } else {
                  if ($c__5673__auto___270119_rollups_seq__269806_270106_temp__5823__auto___270117_vec__269849_270124$$ = $APP.$cljs$core$seq$$($c__5673__auto___270119_rollups_seq__269806_270106_temp__5823__auto___270117_vec__269849_270124$$)) {
                    $G__270121_chunk__269807_270107_seq__269806_270118__$1$$ = $c__5673__auto___270119_rollups_seq__269806_270106_temp__5823__auto___270117_vec__269849_270124$$;
                    if ($APP.$cljs$core$chunked_seq_QMARK_$$($G__270121_chunk__269807_270107_seq__269806_270118__$1$$)) {
                      $c__5673__auto___270119_rollups_seq__269806_270106_temp__5823__auto___270117_vec__269849_270124$$ = $APP.$cljs$core$_chunked_first$$($G__270121_chunk__269807_270107_seq__269806_270118__$1$$), $G__270120_i__269809_270109$$ = $APP.$cljs$core$_chunked_rest$$($G__270121_chunk__269807_270107_seq__269806_270118__$1$$), $G__270121_chunk__269807_270107_seq__269806_270118__$1$$ = $c__5673__auto___270119_rollups_seq__269806_270106_temp__5823__auto___270117_vec__269849_270124$$, $G__270122_count__269808_270108$$ = 
                      $APP.$cljs$core$count$$($c__5673__auto___270119_rollups_seq__269806_270106_temp__5823__auto___270117_vec__269849_270124$$), $c__5673__auto___270119_rollups_seq__269806_270106_temp__5823__auto___270117_vec__269849_270124$$ = $G__270120_i__269809_270109$$;
                    } else {
                      $c__5673__auto___270119_rollups_seq__269806_270106_temp__5823__auto___270117_vec__269849_270124$$ = $APP.$cljs$core$first$$($G__270121_chunk__269807_270107_seq__269806_270118__$1$$);
                      var $i_270125$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($c__5673__auto___270119_rollups_seq__269806_270106_temp__5823__auto___270117_vec__269849_270124$$, 0, null), $r_270126$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($c__5673__auto___270119_rollups_seq__269806_270106_temp__5823__auto___270117_vec__269849_270124$$, 1, null);
                      $APP.$cljs$core$truth_$$(function() {
                        var $and__5140__auto__$jscomp$92$$ = $APP.$cljs$core$not$$($APP.$cljs$core$_deref$$($now_done$jscomp$1$$));
                        return $and__5140__auto__$jscomp$92$$ ? $cljs$cst$908$has_now$$.$cljs$core$IFn$_invoke$arity$1$($r_270126$$) : $and__5140__auto__$jscomp$92$$;
                      }()) && ($APP.$cljs$core$swap_BANG_$$.$cljs$core$IFn$_invoke$arity$3$($out$jscomp$15$$, $APP.$cljs$core$conj$$, function() {
                        var $G__269853$$ = {};
                        return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$($amp$pages$budget$cash_flow$now_marker$$, $G__269853$$, "now-s") : $APP.$helix$core$jsx$$.call(null, $amp$pages$budget$cash_flow$now_marker$$, $G__269853$$, "now-s");
                      }()), $APP.$cljs$core$reset_BANG_$$($now_done$jscomp$1$$, !0));
                      $APP.$cljs$core$swap_BANG_$$.$cljs$core$IFn$_invoke$arity$3$($out$jscomp$15$$, $APP.$cljs$core$conj$$, function() {
                        var $G__269858$$ = {rollup:$r_270126$$, idx:$i_270125$$}, $G__269859$$ = "sr-" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($i_270125$$);
                        return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$($amp$pages$budget$cash_flow$month_summary_row$$, $G__269858$$, $G__269859$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$budget$cash_flow$month_summary_row$$, $G__269858$$, $G__269859$$);
                      }());
                      $c__5673__auto___270119_rollups_seq__269806_270106_temp__5823__auto___270117_vec__269849_270124$$ = $APP.$cljs$core$next$$($G__270121_chunk__269807_270107_seq__269806_270118__$1$$);
                      $G__270121_chunk__269807_270107_seq__269806_270118__$1$$ = null;
                      $G__270122_count__269808_270108$$ = 0;
                    }
                    $G__270120_i__269809_270109$$ = 0;
                  } else {
                    break;
                  }
                }
              }
              $APP.$cljs$core$not$$($APP.$cljs$core$_deref$$($now_done$jscomp$1$$)) && $APP.$cljs$core$swap_BANG_$$.$cljs$core$IFn$_invoke$arity$3$($out$jscomp$15$$, $APP.$cljs$core$conj$$, function() {
                var $G__269863$$ = {};
                return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$($amp$pages$budget$cash_flow$now_marker$$, $G__269863$$, "now-s") : $APP.$helix$core$jsx$$.call(null, $amp$pages$budget$cash_flow$now_marker$$, $G__269863$$, "now-s");
              }());
              return $APP.$cljs$core$_deref$$($out$jscomp$15$$);
            }()]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__269783$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__269783$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__269771_map__269749__$1_sorted$jscomp$1$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__269771_map__269749__$1_sorted$jscomp$1$$);
    }()};
  }();
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__269689_270022_G__269717_map__269671_map__269671__$1_props__41575__auto__$jscomp$28_vec__269665_vec__269676_vec__269679$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__269689_270022_G__269717_map__269671_map__269671__$1_props__41575__auto__$jscomp$28_vec__269665_vec__269676_vec__269679$$);
};
$amp$pages$budget$non_profit$transfer_field$$ = function($G__40217_map__40215_map__40215__$1_props__34324__auto__$jscomp$20_vec__40212$$, $maybe_ref__34325__auto__$jscomp$20$$) {
  $G__40217_map__40215_map__40215__$1_props__34324__auto__$jscomp$20_vec__40212$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__40217_map__40215_map__40215__$1_props__34324__auto__$jscomp$20_vec__40212$$), $maybe_ref__34325__auto__$jscomp$20$$], null);
  $G__40217_map__40215_map__40215__$1_props__34324__auto__$jscomp$20_vec__40212$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__40217_map__40215_map__40215__$1_props__34324__auto__$jscomp$20_vec__40212$$, 0, null);
  $G__40217_map__40215_map__40215__$1_props__34324__auto__$jscomp$20_vec__40212$$ = $APP.$cljs$core$__destructure_map$$($G__40217_map__40215_map__40215__$1_props__34324__auto__$jscomp$20_vec__40212$$);
  var $label$jscomp$24$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__40217_map__40215_map__40215__$1_props__34324__auto__$jscomp$20_vec__40212$$, $APP.$cljs$cst$415$label$$), $value$jscomp$326$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__40217_map__40215_map__40215__$1_props__34324__auto__$jscomp$20_vec__40212$$, $APP.$cljs$cst$119$value$$), $field_label$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__40217_map__40215_map__40215__$1_props__34324__auto__$jscomp$20_vec__40212$$, 
  $cljs$cst$917$field_label$$), $field_value$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__40217_map__40215_map__40215__$1_props__34324__auto__$jscomp$20_vec__40212$$, $cljs$cst$918$field_value$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__40217_map__40215_map__40215__$1_props__34324__auto__$jscomp$20_vec__40212$$ = function() {
    return {className:"flex items-start justify-between gap-6", children:[function() {
      var $G__40221$$ = {className:$APP.$helix$impl$props$normalize_class$$($field_label$$), children:"" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($label$jscomp$24$$) + ":"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__40221$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__40221$$);
    }(), $APP.$cljs$core$sequential_QMARK_$$($value$jscomp$326$$) ? function() {
      var $G__40225$$ = function() {
        return {className:"text-right leading-snug", children:$APP.$cljs$core$map_indexed$cljs$0core$0IFn$0_invoke$0arity$02$$(function($G__40230_idx$jscomp$77$$, $G__40229_line$jscomp$22$$) {
          $G__40229_line$jscomp$22$$ = {children:$G__40229_line$jscomp$22$$};
          $G__40230_idx$jscomp$77$$ = "" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($label$jscomp$24$$) + "-" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($G__40230_idx$jscomp$77$$);
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$("p", $G__40229_line$jscomp$22$$, $G__40230_idx$jscomp$77$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__40229_line$jscomp$22$$, $G__40230_idx$jscomp$77$$);
        }, $value$jscomp$326$$)};
      }();
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__40225$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__40225$$);
    }() : function() {
      var $G__40234$$ = {className:$APP.$helix$impl$props$normalize_class$$($field_value$$), children:$value$jscomp$326$$};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__40234$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__40234$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__40217_map__40215_map__40215__$1_props__34324__auto__$jscomp$20_vec__40212$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__40217_map__40215_map__40215__$1_props__34324__auto__$jscomp$20_vec__40212$$);
};
$amp$pages$budget$non_profit$transfer_card$$ = function($G__40245_map__40243_map__40243__$1_props__34324__auto__$jscomp$21_vec__40240$$, $maybe_ref__34325__auto__$jscomp$21$$) {
  $G__40245_map__40243_map__40243__$1_props__34324__auto__$jscomp$21_vec__40240$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__40245_map__40243_map__40243__$1_props__34324__auto__$jscomp$21_vec__40240$$), $maybe_ref__34325__auto__$jscomp$21$$], null);
  $G__40245_map__40243_map__40243__$1_props__34324__auto__$jscomp$21_vec__40240$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__40245_map__40243_map__40243__$1_props__34324__auto__$jscomp$21_vec__40240$$, 0, null);
  $G__40245_map__40243_map__40243__$1_props__34324__auto__$jscomp$21_vec__40240$$ = $APP.$cljs$core$__destructure_map$$($G__40245_map__40243_map__40243__$1_props__34324__auto__$jscomp$21_vec__40240$$);
  var $title$jscomp$34$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__40245_map__40243_map__40243__$1_props__34324__auto__$jscomp$21_vec__40240$$, $APP.$cljs$cst$288$title$$), $fields$jscomp$2$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__40245_map__40243_map__40243__$1_props__34324__auto__$jscomp$21_vec__40240$$, $cljs$cst$919$fields$$), $field_label$jscomp$1$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__40245_map__40243_map__40243__$1_props__34324__auto__$jscomp$21_vec__40240$$, 
  $cljs$cst$917$field_label$$), $field_value$jscomp$1$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__40245_map__40243_map__40243__$1_props__34324__auto__$jscomp$21_vec__40240$$, $cljs$cst$918$field_value$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__40245_map__40243_map__40243__$1_props__34324__auto__$jscomp$21_vec__40240$$ = function() {
    return {children:[function() {
      var $G__40249$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$heading_section$$, "text-slate-900  dark:text-slate-100", "mb-4"]))), children:$title$jscomp$34$$};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__40249$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__40249$$);
    }(), function() {
      var $G__40253$$ = function() {
        return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-mono", "text-sm", "space-y-3"]))), children:$APP.$cljs$core$map$$.$cljs$core$IFn$_invoke$arity$2$(function($label$jscomp$25_p__40256$$) {
          var $G__40259_map__40257__$1$$ = $APP.$cljs$core$__destructure_map$$($label$jscomp$25_p__40256$$);
          $label$jscomp$25_p__40256$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__40259_map__40257__$1$$, $APP.$cljs$cst$415$label$$);
          $G__40259_map__40257__$1$$ = {label:$APP.$cljs$cst$415$label$$.$cljs$core$IFn$_invoke$arity$1$($G__40259_map__40257__$1$$), value:$APP.$cljs$cst$119$value$$.$cljs$core$IFn$_invoke$arity$1$($G__40259_map__40257__$1$$), "field-label":$field_label$jscomp$1$$, "field-value":$field_value$jscomp$1$$};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$($amp$pages$budget$non_profit$transfer_field$$, $G__40259_map__40257__$1$$, $label$jscomp$25_p__40256$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$budget$non_profit$transfer_field$$, $G__40259_map__40257__$1$$, $label$jscomp$25_p__40256$$);
        }, $fields$jscomp$2$$)};
      }();
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__40253$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__40253$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__40245_map__40243_map__40243__$1_props__34324__auto__$jscomp$21_vec__40240$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__40245_map__40243_map__40243__$1_props__34324__auto__$jscomp$21_vec__40240$$);
};
$amp$pages$budget$non_profit$non_profit$$ = function($G__40271_map__40269_map__40269__$1_props__34324__auto__$jscomp$22_vec__40266$$, $maybe_ref__34325__auto__$jscomp$22$$) {
  $G__40271_map__40269_map__40269__$1_props__34324__auto__$jscomp$22_vec__40266$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__40271_map__40269_map__40269__$1_props__34324__auto__$jscomp$22_vec__40266$$), $maybe_ref__34325__auto__$jscomp$22$$], null);
  $G__40271_map__40269_map__40269__$1_props__34324__auto__$jscomp$22_vec__40266$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__40271_map__40269_map__40269__$1_props__34324__auto__$jscomp$22_vec__40266$$, 0, null);
  $G__40271_map__40269_map__40269__$1_props__34324__auto__$jscomp$22_vec__40266$$ = $APP.$cljs$core$__destructure_map$$($G__40271_map__40269_map__40269__$1_props__34324__auto__$jscomp$22_vec__40266$$);
  var $id$jscomp$95$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__40271_map__40269_map__40269__$1_props__34324__auto__$jscomp$22_vec__40266$$, $APP.$cljs$cst$286$id$$), $subtitle$jscomp$6$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__40271_map__40269_map__40269__$1_props__34324__auto__$jscomp$22_vec__40266$$, $APP.$cljs$cst$769$subtitle$$), $title$jscomp$35$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__40271_map__40269_map__40269__$1_props__34324__auto__$jscomp$22_vec__40266$$, 
  $APP.$cljs$cst$288$title$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $field_label$jscomp$2$$ = $APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-semibold", "text-slate-600  dark:text-slate-400"])), $field_value$jscomp$2$$ = $APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["text-right", "font-bold", "text-indigo-600 dark:text-indigo-300", "tracking-wide"]));
  $G__40271_map__40269_map__40269__$1_props__34324__auto__$jscomp$22_vec__40266$$ = function() {
    return {id:$id$jscomp$95$$, children:function() {
      var $G__40275$$ = function() {
        return {idx:8, eyebrow:$subtitle$jscomp$6$$, title:$title$jscomp$35$$, children:function() {
          var $G__40279$$ = function() {
            return {className:"space-y-8 p-4", children:[function() {
              var $G__40283$$ = function() {
                return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["text-slate-700  dark:text-slate-300", "mb-12"]))), children:[function() {
                  var $G__40287$$ = function() {
                    return {children:["The Armenia Pavilion 2026 is supported through ", function() {
                      var $G__40291$$ = {className:$APP.$helix$impl$props$normalize_class$$("font-semibold"), children:$APP.$cljs$cst$165$name$$.$cljs$core$IFn$_invoke$arity$1$($APP.$amp$data$donations$$.organization)};
                      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__40291$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__40291$$);
                    }(), ", a registered ", function() {
                      var $G__40295$$ = {className:$APP.$helix$impl$props$normalize_class$$("font-semibold"), children:$APP.$cljs$cst$12$status$$.$cljs$core$IFn$_invoke$arity$1$($APP.$amp$data$donations$$.organization)};
                      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__40295$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__40295$$);
                    }(), " public non-profit organization. ", function() {
                      var $G__40299$$ = {className:$APP.$helix$impl$props$normalize_class$$("font-semibold"), children:"Contributions are tax deductible"};
                      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__40299$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__40299$$);
                    }(), " to the extent permitted by law."]};
                  }();
                  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__40287$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__40287$$);
                }(), function() {
                  var $G__40303$$ = function() {
                    return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-mono", "text-sm", "mt-6 space-y-1"]))), children:[function() {
                      var $G__40307_G__40311$jscomp$inline_4125$$ = {className:$APP.$helix$impl$props$normalize_class$$($field_label$jscomp$2$$), children:"Organization: "};
                      $G__40307_G__40311$jscomp$inline_4125$$ = {children:[$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__40307_G__40311$jscomp$inline_4125$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__40307_G__40311$jscomp$inline_4125$$), $APP.$cljs$cst$165$name$$.$cljs$core$IFn$_invoke$arity$1$($APP.$amp$data$donations$$.organization)]};
                      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__40307_G__40311$jscomp$inline_4125$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__40307_G__40311$jscomp$inline_4125$$);
                    }(), function() {
                      var $G__40315$$ = function() {
                        return {children:[function() {
                          var $G__40319$$ = {className:$APP.$helix$impl$props$normalize_class$$($field_label$jscomp$2$$), children:"EIN: "};
                          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__40319$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__40319$$);
                        }(), function() {
                          var $G__40323$$ = {className:$APP.$helix$impl$props$normalize_class$$($field_value$jscomp$2$$), children:$cljs$cst$920$ein$$.$cljs$core$IFn$_invoke$arity$1$($APP.$amp$data$donations$$.organization)};
                          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__40323$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__40323$$);
                        }()]};
                      }();
                      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__40315$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__40315$$);
                    }(), function() {
                      var $G__40327$$ = function() {
                        return {children:[function() {
                          var $G__40331$$ = {className:$APP.$helix$impl$props$normalize_class$$($field_label$jscomp$2$$), children:"Located in: "};
                          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__40331$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__40331$$);
                        }(), function() {
                          var $G__40335$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_bold$$), children:$cljs$cst$921$location$$.$cljs$core$IFn$_invoke$arity$1$($APP.$amp$data$donations$$.organization)};
                          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__40335$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__40335$$);
                        }()]};
                      }();
                      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__40327$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__40327$$);
                    }()]};
                  }();
                  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__40303$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__40303$$);
                }(), function() {
                  var $G__40339$$ = function() {
                    return {className:"mt-10 grid grid-cols-1 lg:grid-cols-2 gap-10", children:[function() {
                      var $G__40343$$ = {title:$APP.$cljs$cst$288$title$$.$cljs$core$IFn$_invoke$arity$1$($APP.$amp$data$donations$$.$domestic_transfer$), fields:$cljs$cst$919$fields$$.$cljs$core$IFn$_invoke$arity$1$($APP.$amp$data$donations$$.$domestic_transfer$), "field-label":$field_label$jscomp$2$$, "field-value":$field_value$jscomp$2$$};
                      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$pages$budget$non_profit$transfer_card$$, $G__40343$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$budget$non_profit$transfer_card$$, $G__40343$$);
                    }(), function() {
                      var $G__40347$$ = {title:$APP.$cljs$cst$288$title$$.$cljs$core$IFn$_invoke$arity$1$($APP.$amp$data$donations$$.$international_transfer$), fields:$cljs$cst$919$fields$$.$cljs$core$IFn$_invoke$arity$1$($APP.$amp$data$donations$$.$international_transfer$), "field-label":$field_label$jscomp$2$$, "field-value":$field_value$jscomp$2$$};
                      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$pages$budget$non_profit$transfer_card$$, $G__40347$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$budget$non_profit$transfer_card$$, $G__40347$$);
                    }()]};
                  }();
                  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__40339$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__40339$$);
                }()]};
              }();
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__40283$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__40283$$);
            }(), function() {
              var $G__40351$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["text-slate-600  dark:text-slate-400", "p-4 mt-10 text-sm md:text-base"]))), children:$APP.$amp$data$donations$$.$receipt_note$};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__40351$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__40351$$);
            }()]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__40279$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__40279$$);
        }()};
      }();
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$pages$budget$section_block$section_block$$, $G__40275$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$pages$budget$section_block$section_block$$, $G__40275$$);
    }()};
  }();
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__40271_map__40269_map__40269__$1_props__34324__auto__$jscomp$22_vec__40266$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__40271_map__40269_map__40269__$1_props__34324__auto__$jscomp$22_vec__40266$$);
};
$amp$pages$budget$sponsors$logo_card$$ = function($G__267543_G__267547$jscomp$inline_4338_map__267541_name$jscomp$199_props__41575__auto__$jscomp$29_vec__267536$$, $logo_map__267541__$1_maybe_ref__41576__auto__$jscomp$29$$) {
  $G__267543_G__267547$jscomp$inline_4338_map__267541_name$jscomp$199_props__41575__auto__$jscomp$29_vec__267536$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__267543_G__267547$jscomp$inline_4338_map__267541_name$jscomp$199_props__41575__auto__$jscomp$29_vec__267536$$), $logo_map__267541__$1_maybe_ref__41576__auto__$jscomp$29$$], null);
  $G__267543_G__267547$jscomp$inline_4338_map__267541_name$jscomp$199_props__41575__auto__$jscomp$29_vec__267536$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__267543_G__267547$jscomp$inline_4338_map__267541_name$jscomp$199_props__41575__auto__$jscomp$29_vec__267536$$, 0, null);
  $logo_map__267541__$1_maybe_ref__41576__auto__$jscomp$29$$ = $APP.$cljs$core$__destructure_map$$($G__267543_G__267547$jscomp$inline_4338_map__267541_name$jscomp$199_props__41575__auto__$jscomp$29_vec__267536$$);
  $G__267543_G__267547$jscomp$inline_4338_map__267541_name$jscomp$199_props__41575__auto__$jscomp$29_vec__267536$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($logo_map__267541__$1_maybe_ref__41576__auto__$jscomp$29$$, $APP.$cljs$cst$165$name$$);
  $logo_map__267541__$1_maybe_ref__41576__auto__$jscomp$29$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($logo_map__267541__$1_maybe_ref__41576__auto__$jscomp$29$$, $cljs$cst$924$logo$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__267543_G__267547$jscomp$inline_4338_map__267541_name$jscomp$199_props__41575__auto__$jscomp$29_vec__267536$$ = {src:$logo_map__267541__$1_maybe_ref__41576__auto__$jscomp$29$$, alt:$G__267543_G__267547$jscomp$inline_4338_map__267541_name$jscomp$199_props__41575__auto__$jscomp$29_vec__267536$$, style:{height:$APP.$helix$impl$props$__GT_js$$("4rem"), width:$APP.$helix$impl$props$__GT_js$$("auto")}, className:" transition-all duration-500\n                         \n                         drop-shadow-[0_0_12px_rgba(249,168,212,0)] group-hover:drop-shadow-[0_0_20px_rgba(249,168,212,0.15)]"};
  $G__267543_G__267547$jscomp$inline_4338_map__267541_name$jscomp$199_props__41575__auto__$jscomp$29_vec__267536$$ = {className:"group py-6 px-8 transition-all duration-500 ease-out", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("img", $G__267543_G__267547$jscomp$inline_4338_map__267541_name$jscomp$199_props__41575__auto__$jscomp$29_vec__267536$$) : $APP.$helix$core$jsx$$.call(null, "img", $G__267543_G__267547$jscomp$inline_4338_map__267541_name$jscomp$199_props__41575__auto__$jscomp$29_vec__267536$$)};
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__267543_G__267547$jscomp$inline_4338_map__267541_name$jscomp$199_props__41575__auto__$jscomp$29_vec__267536$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__267543_G__267547$jscomp$inline_4338_map__267541_name$jscomp$199_props__41575__auto__$jscomp$29_vec__267536$$);
};
$amp$pages$budget$sponsors$name_item$$ = function($G__267671_map__267657_name$jscomp$200_props__41575__auto__$jscomp$30_vec__267654$$, $accent_map__267657__$1_maybe_ref__41576__auto__$jscomp$30$$) {
  $G__267671_map__267657_name$jscomp$200_props__41575__auto__$jscomp$30_vec__267654$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__267671_map__267657_name$jscomp$200_props__41575__auto__$jscomp$30_vec__267654$$), $accent_map__267657__$1_maybe_ref__41576__auto__$jscomp$30$$], null);
  $G__267671_map__267657_name$jscomp$200_props__41575__auto__$jscomp$30_vec__267654$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__267671_map__267657_name$jscomp$200_props__41575__auto__$jscomp$30_vec__267654$$, 0, null);
  $accent_map__267657__$1_maybe_ref__41576__auto__$jscomp$30$$ = $APP.$cljs$core$__destructure_map$$($G__267671_map__267657_name$jscomp$200_props__41575__auto__$jscomp$30_vec__267654$$);
  $G__267671_map__267657_name$jscomp$200_props__41575__auto__$jscomp$30_vec__267654$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($accent_map__267657__$1_maybe_ref__41576__auto__$jscomp$30$$, $APP.$cljs$cst$165$name$$);
  $accent_map__267657__$1_maybe_ref__41576__auto__$jscomp$30$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($accent_map__267657__$1_maybe_ref__41576__auto__$jscomp$30$$, $cljs$cst$928$accent$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__267671_map__267657_name$jscomp$200_props__41575__auto__$jscomp$30_vec__267654$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-mono", "text-sm", "tracking-wide", $accent_map__267657__$1_maybe_ref__41576__auto__$jscomp$30$$]))), children:$G__267671_map__267657_name$jscomp$200_props__41575__auto__$jscomp$30_vec__267654$$};
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__267671_map__267657_name$jscomp$200_props__41575__auto__$jscomp$30_vec__267654$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__267671_map__267657_name$jscomp$200_props__41575__auto__$jscomp$30_vec__267654$$);
};
$amp$pages$budget$sponsors$tier_section$$ = function($G__267755_map__267737_map__267737__$1_members$jscomp$1_props__41575__auto__$jscomp$31_vec__267734$$, $map__267752_map__267752__$1_maybe_ref__41576__auto__$jscomp$31_tier$$) {
  $G__267755_map__267737_map__267737__$1_members$jscomp$1_props__41575__auto__$jscomp$31_vec__267734$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__267755_map__267737_map__267737__$1_members$jscomp$1_props__41575__auto__$jscomp$31_vec__267734$$), $map__267752_map__267752__$1_maybe_ref__41576__auto__$jscomp$31_tier$$], null);
  $G__267755_map__267737_map__267737__$1_members$jscomp$1_props__41575__auto__$jscomp$31_vec__267734$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__267755_map__267737_map__267737__$1_members$jscomp$1_props__41575__auto__$jscomp$31_vec__267734$$, 0, null);
  $G__267755_map__267737_map__267737__$1_members$jscomp$1_props__41575__auto__$jscomp$31_vec__267734$$ = $APP.$cljs$core$__destructure_map$$($G__267755_map__267737_map__267737__$1_members$jscomp$1_props__41575__auto__$jscomp$31_vec__267734$$);
  $map__267752_map__267752__$1_maybe_ref__41576__auto__$jscomp$31_tier$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__267755_map__267737_map__267737__$1_members$jscomp$1_props__41575__auto__$jscomp$31_vec__267734$$, $cljs$cst$922$tier$$);
  $G__267755_map__267737_map__267737__$1_members$jscomp$1_props__41575__auto__$jscomp$31_vec__267734$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__267755_map__267737_map__267737__$1_members$jscomp$1_props__41575__auto__$jscomp$31_vec__267734$$, $cljs$cst$932$members$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $map__267752_map__267752__$1_maybe_ref__41576__auto__$jscomp$31_tier$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($amp$pages$budget$sponsors$tier_meta$$, $map__267752_map__267752__$1_maybe_ref__41576__auto__$jscomp$31_tier$$);
  $map__267752_map__267752__$1_maybe_ref__41576__auto__$jscomp$31_tier$$ = $APP.$cljs$core$__destructure_map$$($map__267752_map__267752__$1_maybe_ref__41576__auto__$jscomp$31_tier$$);
  var $label$jscomp$26$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__267752_map__267752__$1_maybe_ref__41576__auto__$jscomp$31_tier$$, $APP.$cljs$cst$415$label$$), $accent$jscomp$1$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__267752_map__267752__$1_maybe_ref__41576__auto__$jscomp$31_tier$$, $cljs$cst$928$accent$$), $border$jscomp$6$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__267752_map__267752__$1_maybe_ref__41576__auto__$jscomp$31_tier$$, 
  $APP.$cljs$cst$397$border$$), $with_logos$$ = $APP.$cljs$core$filter$cljs$0core$0IFn$0_invoke$0arity$02$$($cljs$cst$924$logo$$, $G__267755_map__267737_map__267737__$1_members$jscomp$1_props__41575__auto__$jscomp$31_vec__267734$$), $without_logos$$ = $APP.$cljs$core$remove$cljs$0core$0IFn$0_invoke$0arity$02$$($cljs$cst$924$logo$$, $G__267755_map__267737_map__267737__$1_members$jscomp$1_props__41575__auto__$jscomp$31_vec__267734$$);
  $G__267755_map__267737_map__267737__$1_members$jscomp$1_props__41575__auto__$jscomp$31_vec__267734$$ = function() {
    return {className:"mb-12", children:[function() {
      var $G__267760_G__267768$jscomp$inline_4130$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-mono", "text-xl", "font-bold", "uppercase", "tracking-[0.15em]", $accent$jscomp$1$$]))), children:$label$jscomp$26$$};
      $G__267760_G__267768$jscomp$inline_4130$$ = {className:"flex items-center gap-3 mb", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__267760_G__267768$jscomp$inline_4130$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__267760_G__267768$jscomp$inline_4130$$)};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__267760_G__267768$jscomp$inline_4130$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__267760_G__267768$jscomp$inline_4130$$);
    }(), $APP.$cljs$core$seq$$($with_logos$$) ? function() {
      var $G__267778$$ = function() {
        return {className:"mb-4 flex flex-col items-center", children:$APP.$cljs$core$map$$.$cljs$core$IFn$_invoke$arity$2$(function($name$jscomp$201_p__267784$$) {
          var $G__267788_logo$jscomp$1_map__267785__$1$$ = $APP.$cljs$core$__destructure_map$$($name$jscomp$201_p__267784$$);
          $name$jscomp$201_p__267784$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__267788_logo$jscomp$1_map__267785__$1$$, $APP.$cljs$cst$165$name$$);
          $G__267788_logo$jscomp$1_map__267785__$1$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__267788_logo$jscomp$1_map__267785__$1$$, $cljs$cst$924$logo$$);
          $G__267788_logo$jscomp$1_map__267785__$1$$ = {name:$name$jscomp$201_p__267784$$, logo:$G__267788_logo$jscomp$1_map__267785__$1$$};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$($amp$pages$budget$sponsors$logo_card$$, $G__267788_logo$jscomp$1_map__267785__$1$$, $name$jscomp$201_p__267784$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$budget$sponsors$logo_card$$, $G__267788_logo$jscomp$1_map__267785__$1$$, $name$jscomp$201_p__267784$$);
        }, $with_logos$$)};
      }();
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__267778$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__267778$$);
    }() : null, $APP.$cljs$core$seq$$($without_logos$$) ? function() {
      var $G__267797$$ = function() {
        return {className:"flex flex-wrap gap-x-6 gap-y-2", children:$APP.$cljs$core$map$$.$cljs$core$IFn$_invoke$arity$2$(function($map__267801__$1_name$jscomp$202_p__267800$$) {
          $map__267801__$1_name$jscomp$202_p__267800$$ = $APP.$cljs$core$__destructure_map$$($map__267801__$1_name$jscomp$202_p__267800$$);
          $map__267801__$1_name$jscomp$202_p__267800$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__267801__$1_name$jscomp$202_p__267800$$, $APP.$cljs$cst$165$name$$);
          var $G__267805_JSCompiler_temp_const$jscomp$inline_4132$$ = $APP.$helix$impl$props$normalize_class$$("border-l-2 pl-3 py-1 " + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($border$jscomp$6$$));
          var $G__267821$jscomp$inline_4134_JSCompiler_inline_result$jscomp$inline_4133$$ = {name:$map__267801__$1_name$jscomp$202_p__267800$$, accent:$accent$jscomp$1$$};
          $G__267821$jscomp$inline_4134_JSCompiler_inline_result$jscomp$inline_4133$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$pages$budget$sponsors$name_item$$, $G__267821$jscomp$inline_4134_JSCompiler_inline_result$jscomp$inline_4133$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$budget$sponsors$name_item$$, $G__267821$jscomp$inline_4134_JSCompiler_inline_result$jscomp$inline_4133$$);
          $G__267805_JSCompiler_temp_const$jscomp$inline_4132$$ = {className:$G__267805_JSCompiler_temp_const$jscomp$inline_4132$$, children:$G__267821$jscomp$inline_4134_JSCompiler_inline_result$jscomp$inline_4133$$};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$("div", $G__267805_JSCompiler_temp_const$jscomp$inline_4132$$, $map__267801__$1_name$jscomp$202_p__267800$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__267805_JSCompiler_temp_const$jscomp$inline_4132$$, $map__267801__$1_name$jscomp$202_p__267800$$);
        }, $without_logos$$)};
      }();
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__267797$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__267797$$);
    }() : null]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__267755_map__267737_map__267737__$1_members$jscomp$1_props__41575__auto__$jscomp$31_vec__267734$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__267755_map__267737_map__267737__$1_members$jscomp$1_props__41575__auto__$jscomp$31_vec__267734$$);
};
$amp$pages$budget$sponsors$sponsors_section$$ = function($G__267955_map__267896_map__267896__$1_props__41575__auto__$jscomp$32_vec__267893$$, $maybe_ref__41576__auto__$jscomp$32$$) {
  $G__267955_map__267896_map__267896__$1_props__41575__auto__$jscomp$32_vec__267893$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__267955_map__267896_map__267896__$1_props__41575__auto__$jscomp$32_vec__267893$$), $maybe_ref__41576__auto__$jscomp$32$$], null);
  $G__267955_map__267896_map__267896__$1_props__41575__auto__$jscomp$32_vec__267893$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__267955_map__267896_map__267896__$1_props__41575__auto__$jscomp$32_vec__267893$$, 0, null);
  $G__267955_map__267896_map__267896__$1_props__41575__auto__$jscomp$32_vec__267893$$ = $APP.$cljs$core$__destructure_map$$($G__267955_map__267896_map__267896__$1_props__41575__auto__$jscomp$32_vec__267893$$);
  var $id$jscomp$96$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__267955_map__267896_map__267896__$1_props__41575__auto__$jscomp$32_vec__267893$$, $APP.$cljs$cst$286$id$$), $subtitle$jscomp$7$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__267955_map__267896_map__267896__$1_props__41575__auto__$jscomp$32_vec__267893$$, $APP.$cljs$cst$769$subtitle$$), $title$jscomp$36$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__267955_map__267896_map__267896__$1_props__41575__auto__$jscomp$32_vec__267893$$, 
  $APP.$cljs$cst$288$title$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $grouped$jscomp$1$$ = $APP.$cljs$core$sort_by$cljs$0core$0IFn$0_invoke$0arity$02$$(function($p__267938$$) {
    var $tier$jscomp$1$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($p__267938$$, 0, null);
    $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($p__267938$$, 1, null);
    return $cljs$cst$929$order$$.$cljs$core$IFn$_invoke$arity$1$($APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($amp$pages$budget$sponsors$tier_meta$$, $tier$jscomp$1$$));
  }, $APP.$cljs$core$group_by$$($cljs$cst$922$tier$$, $amp$pages$budget$sponsors$sponsors$$));
  $G__267955_map__267896_map__267896__$1_props__41575__auto__$jscomp$32_vec__267893$$ = function() {
    return {id:$id$jscomp$96$$, children:function() {
      var $G__267965$$ = function() {
        return {idx:6, eyebrow:$subtitle$jscomp$7$$, title:$title$jscomp$36$$, children:function() {
          var $G__267971$$ = function() {
            return {className:"p-4 mt-6 space-y-2", children:[function() {
              var $G__267990$$ = function() {
                return {className:"mb-12", children:[function() {
                  var $G__267994$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["text-slate-700  dark:text-slate-300", "mb-8"]))), children:"At present the Armenia Pavilion 2026 "};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__267994$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__267994$$);
                }(), function() {
                  var $G__268002$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["text-rose-600   dark:text-rose-400"]))), children:"is only made possible"};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__268002$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__268002$$);
                }(), function() {
                  var $G__268016$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["text-slate-700  dark:text-slate-300", "mb-8"]))), children:" through the generosity of foundations, families, and individuals committed to helping sustaining Armenia's cultural presence on the international stage."};
                  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__268016$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__268016$$);
                }()]};
              }();
              return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__267990$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__267990$$);
            }(), $APP.$cljs$core$map$$.$cljs$core$IFn$_invoke$arity$2$(function($G__268065_members$jscomp$2_p__268058$$) {
              var $G__268066_tier$jscomp$2$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__268065_members$jscomp$2_p__268058$$, 0, null);
              $G__268065_members$jscomp$2_p__268058$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__268065_members$jscomp$2_p__268058$$, 1, null);
              $G__268065_members$jscomp$2_p__268058$$ = {tier:$G__268066_tier$jscomp$2$$, members:$G__268065_members$jscomp$2_p__268058$$};
              $G__268066_tier$jscomp$2$$ = $APP.$cljs$core$name$$($G__268066_tier$jscomp$2$$);
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$($amp$pages$budget$sponsors$tier_section$$, $G__268065_members$jscomp$2_p__268058$$, $G__268066_tier$jscomp$2$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$budget$sponsors$tier_section$$, $G__268065_members$jscomp$2_p__268058$$, $G__268066_tier$jscomp$2$$);
            }, $grouped$jscomp$1$$)]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__267971$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__267971$$);
        }()};
      }();
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$pages$budget$section_block$section_block$$, $G__267965$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$pages$budget$section_block$section_block$$, $G__267965$$);
    }()};
  }();
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__267955_map__267896_map__267896__$1_props__41575__auto__$jscomp$32_vec__267893$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__267955_map__267896_map__267896__$1_props__41575__auto__$jscomp$32_vec__267893$$);
};
$amp$pages$budget$why_support$preview$$ = function($G__55175_map__55173_props__41658__auto__$jscomp$11_vec__55170$$, $maybe_ref__41659__auto__$jscomp$11$$) {
  $G__55175_map__55173_props__41658__auto__$jscomp$11_vec__55170$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__55175_map__55173_props__41658__auto__$jscomp$11_vec__55170$$), $maybe_ref__41659__auto__$jscomp$11$$], null);
  $G__55175_map__55173_props__41658__auto__$jscomp$11_vec__55170$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__55175_map__55173_props__41658__auto__$jscomp$11_vec__55170$$, 0, null);
  $APP.$cljs$core$__destructure_map$$($G__55175_map__55173_props__41658__auto__$jscomp$11_vec__55170$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__55175_map__55173_props__41658__auto__$jscomp$11_vec__55170$$ = function() {
    return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_lg$$, "p-4"]))), children:[function() {
      var $G__55179$$ = {children:'To stand on the Biennale\'s global stage is not "participation" in an art event—it is '};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__55179$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__55179$$);
    }(), function() {
      var $G__55183$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:"presence in the world's most influential cultural forum"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__55183$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__55183$$);
    }(), function() {
      var $G__55187$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:", where nations are read, remembered, and measured in real time. "};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__55187$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__55187$$);
    }(), function() {
      var $G__55191$$ = {children:"For the Republic of Armenia, a Pavilion is a sovereign act of cultural visibility: it declares that Armenia is not only a history to be mourned or a headline to be managed, but a "};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__55191$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__55191$$);
    }(), function() {
      var $G__55195$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-semibold", "italic", "text-slate-900  dark:text-slate-100"]))), children:"living intelligence"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__55195$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__55195$$);
    }(), function() {
      var $G__55199$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:"—capable of producing contemporary vision at the highest level. "};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__55199$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__55199$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__55175_map__55173_props__41658__auto__$jscomp$11_vec__55170$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__55175_map__55173_props__41658__auto__$jscomp$11_vec__55170$$);
};
$amp$pages$budget$why_support$details$$ = function($G__55236_map__55233_props__41658__auto__$jscomp$12_vec__55230$$, $maybe_ref__41659__auto__$jscomp$12$$) {
  $G__55236_map__55233_props__41658__auto__$jscomp$12_vec__55230$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__55236_map__55233_props__41658__auto__$jscomp$12_vec__55230$$), $maybe_ref__41659__auto__$jscomp$12$$], null);
  $G__55236_map__55233_props__41658__auto__$jscomp$12_vec__55230$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__55236_map__55233_props__41658__auto__$jscomp$12_vec__55230$$, 0, null);
  $APP.$cljs$core$__destructure_map$$($G__55236_map__55233_props__41658__auto__$jscomp$12_vec__55230$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__55236_map__55233_props__41658__auto__$jscomp$12_vec__55230$$ = function() {
    return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_lg$$, "p-4"]))), children:[function() {
      var $G__55240$$ = {children:'To stand on the Biennale\'s global stage is not "participation" in an art event—it is '};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__55240$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__55240$$);
    }(), function() {
      var $G__55244$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:"presence in the world's most influential cultural forum"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__55244$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__55244$$);
    }(), function() {
      var $G__55249$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:", where nations are read, remembered, and measured in real time. "};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__55249$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__55249$$);
    }(), function() {
      var $G__55253$$ = {children:"For the Republic of Armenia, a Pavilion is a sovereign act of cultural visibility: it declares that Armenia is not only a history to be mourned or a headline to be managed, but a "};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__55253$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__55253$$);
    }(), function() {
      var $G__55257$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-semibold", "italic", "text-slate-900  dark:text-slate-100"]))), children:"living intelligence"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__55257$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__55257$$);
    }(), function() {
      var $G__55262$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:"—capable of producing contemporary vision at the highest level. "};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__55262$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__55262$$);
    }(), function() {
      var $G__55266$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:"This is how nations earn stature without asking permission: by contributing meaning, not pleading for sympathy. In Venice, Armenia enters the shared conversation that curators, museums, collectors, journalists, and governments track—and what is seen there echoes for years in exhibitions, acquisitions, education, tourism, diplomacy, and philanthropic interest."};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__55266$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__55266$$);
    }(), function() {
      var $G__55274_G__55278$jscomp$inline_4137$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$em_strong$$, "text-lg"]))), children:"This is why being present matters—and what it elevates:"};
      $G__55274_G__55278$jscomp$inline_4137$$ = {className:"mt-8 mb-4", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__55274_G__55278$jscomp$inline_4137$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__55274_G__55278$jscomp$inline_4137$$)};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__55274_G__55278$jscomp$inline_4137$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__55274_G__55278$jscomp$inline_4137$$);
    }(), function() {
      var $G__55286$$ = function() {
        return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["text-slate-700  dark:text-slate-300", "space-y-5"]))), children:[function() {
          var $G__55294_G__55300$jscomp$inline_4140$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$em_bold$$, "italic"]))), children:"National dignity, made public: "};
          $G__55294_G__55300$jscomp$inline_4140$$ = {className:"", children:[$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__55294_G__55300$jscomp$inline_4140$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__55294_G__55300$jscomp$inline_4140$$), "Armenia is framed through excellence, discipline, and contemporary creativity—not solely through tragedy or geopolitics."]};
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__55294_G__55300$jscomp$inline_4140$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__55294_G__55300$jscomp$inline_4140$$);
        }(), function() {
          var $G__55308_G__55316$jscomp$inline_4143$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$em_bold$$, "italic"]))), children:"Soft power that compounds: "};
          $G__55308_G__55316$jscomp$inline_4143$$ = {className:"", children:[$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__55308_G__55316$jscomp$inline_4143$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__55308_G__55316$jscomp$inline_4143$$), "Cultural visibility becomes long-term credibility—opening doors that money or lobbying cannot."]};
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__55308_G__55316$jscomp$inline_4143$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__55308_G__55316$jscomp$inline_4143$$);
        }(), function() {
          var $G__55326_G__55332$jscomp$inline_4146$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$em_bold$$, "italic"]))), children:"Narrative control: "};
          $G__55326_G__55332$jscomp$inline_4146$$ = {className:"", children:[$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__55326_G__55332$jscomp$inline_4146$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__55326_G__55332$jscomp$inline_4146$$), "If Armenia does not author its own image, others will—and they will simplify it."]};
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__55326_G__55332$jscomp$inline_4146$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__55326_G__55332$jscomp$inline_4146$$);
        }(), function() {
          var $G__55340_G__55348$jscomp$inline_4149$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$em_bold$$, "italic"]))), children:"A platform for future generations: "};
          $G__55340_G__55348$jscomp$inline_4149$$ = {className:"", children:[$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__55340_G__55348$jscomp$inline_4149$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__55340_G__55348$jscomp$inline_4149$$), 'A serious national presence signals to Armenian artists, students, and institutions that the world stage is not "for others."']};
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__55340_G__55348$jscomp$inline_4149$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__55340_G__55348$jscomp$inline_4149$$);
        }(), function() {
          var $G__55360_G__55368$jscomp$inline_4152$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$em_bold$$, "italic"]))), children:"Diaspora cohesion: "};
          $G__55360_G__55368$jscomp$inline_4152$$ = {className:"", children:[$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__55360_G__55368$jscomp$inline_4152$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__55360_G__55368$jscomp$inline_4152$$), "A Pavilion becomes a shared achievement—an anchor event that unifies donors, families, and communities around something constructive and proud."]};
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__55360_G__55368$jscomp$inline_4152$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__55360_G__55368$jscomp$inline_4152$$);
        }(), function() {
          var $G__55380_G__55388$jscomp$inline_4155$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$em_bold$$, "italic"]))), children:"Institutional consequences: "};
          $G__55380_G__55388$jscomp$inline_4155$$ = {className:"", children:[$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__55380_G__55388$jscomp$inline_4155$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__55380_G__55388$jscomp$inline_4155$$), "Serious participation invites museum partnerships, residencies, publications, acquisitions, and recurring invitations—real infrastructure, not a momentary spotlight."]};
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__55380_G__55388$jscomp$inline_4155$$) : $APP.$helix$core$jsxs$$.call(null, "p", $G__55380_G__55388$jscomp$inline_4155$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__55286$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__55286$$);
    }(), function() {
      var $G__55392$$ = function() {
        return {className:"block mt-8", children:[function() {
          var $G__55397$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$em_strong$$), children:"The opportunity cost of not partaking is brutal and silent: "};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__55397$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__55397$$);
        }(), function() {
          var $G__55401$jscomp$1$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-semibold", "italic", "text-slate-900  dark:text-slate-100"]))), children:"invisibility"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__55401$jscomp$1$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__55401$jscomp$1$$);
        }(), function() {
          var $G__55405$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:". The world does not pause because a nation is under-resourced; it simply moves on, and the absence becomes a habit. In a cultural ecosystem, absence reads as incapacity. It reinforces the unfair but persistent idea that Armenia is peripheral—always reacting, never defining. "};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__55405$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__55405$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__55392$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__55392$$);
    }(), function() {
      var $G__55409$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["text-slate-700  dark:text-slate-300", "block mt-6"]))), children:'That is the long-term gap: Armenia is not always "where it should be" because it has too often been forced into survival mode—outspent, out-networked, and underrepresented in the institutions that shape global memory. '};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__55409$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__55409$$);
    }(), function() {
      var $G__55413$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["text-slate-700  dark:text-slate-300", "block mt-6"]))), children:'A donor is not "buying" a sculpture or an event; they are buying representation with consequences: an enduring record that Armenia showed up with seriousness, ambition, and world-class execution. The legacy is reputational and generational: a Pavilion that becomes a reference point—documented, published, archived, collected, cited—and a model that makes the next Armenian presence easier, stronger, and inevitable.'};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__55413$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__55413$$);
    }(), function() {
      var $G__55418$$ = {className:"block mt-8", children:"And yes: "};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__55418$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__55418$$);
    }(), function() {
      var $G__55422$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["font-semibold", "italic", "text-slate-900  dark:text-slate-100"]))), children:"the cultural battle must be won"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__55422$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__55422$$);
    }(), function() {
      var $G__55426$$ = {className:$APP.$helix$impl$props$normalize_class$$("text-slate-700  dark:text-slate-300"), children:"—not with aggression, but with clarity, consistency, and excellence. Culture is where nations become undeniable. It is where influence is built without violence; where history is not only remembered, but translated into future power. "};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__55426$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__55426$$);
    }(), function() {
      var $G__55430$$ = {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$amp$styles$body_closing$$, "block mt-6"]))), children:"Supporting this Pavilion is patriotism in its most practical form: it is an investment in Armenia's standing, Armenia's narrative, and Armenia's right to be seen at full scale—on equal terms—where the world is watching."};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__55430$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__55430$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__55236_map__55233_props__41658__auto__$jscomp$12_vec__55230$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__55236_map__55233_props__41658__auto__$jscomp$12_vec__55230$$);
};
$amp$pages$budget$why_support$why_support$$ = function($G__55442_id$jscomp$97_map__55439_props__41658__auto__$jscomp$13_vec__55436$$, $G__55450$jscomp$inline_4158_JSCompiler_inline_result$jscomp$inline_4157_maybe_ref__41659__auto__$jscomp$13_subtitle$jscomp$8$$) {
  $G__55442_id$jscomp$97_map__55439_props__41658__auto__$jscomp$13_vec__55436$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__55442_id$jscomp$97_map__55439_props__41658__auto__$jscomp$13_vec__55436$$), $G__55450$jscomp$inline_4158_JSCompiler_inline_result$jscomp$inline_4157_maybe_ref__41659__auto__$jscomp$13_subtitle$jscomp$8$$], null);
  $G__55442_id$jscomp$97_map__55439_props__41658__auto__$jscomp$13_vec__55436$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__55442_id$jscomp$97_map__55439_props__41658__auto__$jscomp$13_vec__55436$$, 0, null);
  var $map__55439__$1_title$jscomp$37$$ = $APP.$cljs$core$__destructure_map$$($G__55442_id$jscomp$97_map__55439_props__41658__auto__$jscomp$13_vec__55436$$);
  $G__55442_id$jscomp$97_map__55439_props__41658__auto__$jscomp$13_vec__55436$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__55439__$1_title$jscomp$37$$, $APP.$cljs$cst$286$id$$);
  $G__55450$jscomp$inline_4158_JSCompiler_inline_result$jscomp$inline_4157_maybe_ref__41659__auto__$jscomp$13_subtitle$jscomp$8$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__55439__$1_title$jscomp$37$$, $APP.$cljs$cst$769$subtitle$$);
  $map__55439__$1_title$jscomp$37$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__55439__$1_title$jscomp$37$$, $APP.$cljs$cst$288$title$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__55450$jscomp$inline_4158_JSCompiler_inline_result$jscomp$inline_4157_maybe_ref__41659__auto__$jscomp$13_subtitle$jscomp$8$$ = {idx:9, "section-hint":$G__55450$jscomp$inline_4158_JSCompiler_inline_result$jscomp$inline_4157_maybe_ref__41659__auto__$jscomp$13_subtitle$jscomp$8$$, title:$map__55439__$1_title$jscomp$37$$, "expand-button-label":"Read more", "preview-text":$amp$pages$budget$why_support$preview$$, "full-text":$amp$pages$budget$why_support$details$$};
  $G__55450$jscomp$inline_4158_JSCompiler_inline_result$jscomp$inline_4157_maybe_ref__41659__auto__$jscomp$13_subtitle$jscomp$8$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$ui$expandable_text$expandable_text_area_2$$, $G__55450$jscomp$inline_4158_JSCompiler_inline_result$jscomp$inline_4157_maybe_ref__41659__auto__$jscomp$13_subtitle$jscomp$8$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$ui$expandable_text$expandable_text_area_2$$, 
  $G__55450$jscomp$inline_4158_JSCompiler_inline_result$jscomp$inline_4157_maybe_ref__41659__auto__$jscomp$13_subtitle$jscomp$8$$);
  $G__55442_id$jscomp$97_map__55439_props__41658__auto__$jscomp$13_vec__55436$$ = {id:$G__55442_id$jscomp$97_map__55439_props__41658__auto__$jscomp$13_vec__55436$$, children:$G__55450$jscomp$inline_4158_JSCompiler_inline_result$jscomp$inline_4157_maybe_ref__41659__auto__$jscomp$13_subtitle$jscomp$8$$};
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__55442_id$jscomp$97_map__55439_props__41658__auto__$jscomp$13_vec__55436$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__55442_id$jscomp$97_map__55439_props__41658__auto__$jscomp$13_vec__55436$$);
};
$amp$pages$budget$section$section_link$$ = function($G__45684_map__45682_map__45682__$1_props__41911__auto__$jscomp$3_vec__45679$$, $maybe_ref__41912__auto__$jscomp$3$$) {
  $G__45684_map__45682_map__45682__$1_props__41911__auto__$jscomp$3_vec__45679$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__45684_map__45682_map__45682__$1_props__41911__auto__$jscomp$3_vec__45679$$), $maybe_ref__41912__auto__$jscomp$3$$], null);
  $G__45684_map__45682_map__45682__$1_props__41911__auto__$jscomp$3_vec__45679$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__45684_map__45682_map__45682__$1_props__41911__auto__$jscomp$3_vec__45679$$, 0, null);
  $G__45684_map__45682_map__45682__$1_props__41911__auto__$jscomp$3_vec__45679$$ = $APP.$cljs$core$__destructure_map$$($G__45684_map__45682_map__45682__$1_props__41911__auto__$jscomp$3_vec__45679$$);
  var $title$jscomp$38$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__45684_map__45682_map__45682__$1_props__41911__auto__$jscomp$3_vec__45679$$, $APP.$cljs$cst$288$title$$), $anchor$jscomp$2$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__45684_map__45682_map__45682__$1_props__41911__auto__$jscomp$3_vec__45679$$, $cljs$cst$933$anchor$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  var $scroll_to_id$jscomp$3$$ = $APP.$amp$hooks$use_scroll_to$use_scroll_to_id$$();
  $G__45684_map__45682_map__45682__$1_props__41911__auto__$jscomp$3_vec__45679$$ = function() {
    return {onClick:function() {
      return $scroll_to_id$jscomp$3$$.$cljs$core$IFn$_invoke$arity$1$ ? $scroll_to_id$jscomp$3$$.$cljs$core$IFn$_invoke$arity$1$($anchor$jscomp$2$$) : $scroll_to_id$jscomp$3$$.call(null, $anchor$jscomp$2$$);
    }, className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$nav_link$$), children:[$title$jscomp$38$$, " ", function() {
      var $G__45688$$ = {"class":"w-4 h-4 inline-block ml-1"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$ui$icons$ChevronRightIcon$$, $G__45688$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$ui$icons$ChevronRightIcon$$, $G__45688$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("button", $G__45684_map__45682_map__45682__$1_props__41911__auto__$jscomp$3_vec__45679$$) : $APP.$helix$core$jsxs$$.call(null, "button", $G__45684_map__45682_map__45682__$1_props__41911__auto__$jscomp$3_vec__45679$$);
};
$amp$pages$budget$section$header$$ = function($G__45698_props__41911__auto__$jscomp$4$$) {
  $APP.$helix$core$extract_cljs_props$$($G__45698_props__41911__auto__$jscomp$4$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__45698_props__41911__auto__$jscomp$4$$ = function() {
    return {className:"relative", children:[function() {
      var $G__45702_G__45706$jscomp$inline_4161$$ = {src:"images/graphics/61_biennale_logo_line.svg", className:"invert dark:invert-0"};
      $G__45702_G__45706$jscomp$inline_4161$$ = {className:"w-1/2 lg:w-1/4 lg:max-w-64 mt-4 lg:mt-8 px-4", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("img", $G__45702_G__45706$jscomp$inline_4161$$) : $APP.$helix$core$jsx$$.call(null, "img", $G__45702_G__45706$jscomp$inline_4161$$)};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__45702_G__45706$jscomp$inline_4161$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__45702_G__45706$jscomp$inline_4161$$);
    }(), function() {
      var $G__45710_G__45714$jscomp$inline_4164$$ = {translate:"no", className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["notranslate", $APP.$amp$styles$heading_page$$]))), children:"ARMENIA PAVILION, 61st INTERNATIONAL ART EXHIBITION LA BIENNALE DI VENEZIA"};
      $G__45710_G__45714$jscomp$inline_4164$$ = {className:"px-4 mt-12 lg:mt-16 max-w-4xl", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("h1", $G__45710_G__45714$jscomp$inline_4164$$) : $APP.$helix$core$jsx$$.call(null, "h1", $G__45710_G__45714$jscomp$inline_4164$$)};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__45710_G__45714$jscomp$inline_4164$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__45710_G__45714$jscomp$inline_4164$$);
    }(), function() {
      var $G__45718$$ = function() {
        return {className:"w-full px-4 mt-8", children:function() {
          var $G__45722$$ = function() {
            return {className:$APP.$helix$impl$props$normalize_class$$($APP.$amp$styles$cx$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["text-slate-950  dark:text-white", "space-y-3 flex flex-col justify-start items-start"]))), children:[function() {
              var $G__45726$$ = {title:"1. Press Release", anchor:"section-1"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$pages$budget$section$section_link$$, $G__45726$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$budget$section$section_link$$, $G__45726$$);
            }(), function() {
              var $G__45730$$ = {title:"2. Overview - THE STUDIO", anchor:"section-2"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$pages$budget$section$section_link$$, $G__45730$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$budget$section$section_link$$, $G__45730$$);
            }(), function() {
              var $G__45734$$ = {title:"3. Budget", anchor:"section-3"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$pages$budget$section$section_link$$, $G__45734$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$budget$section$section_link$$, $G__45734$$);
            }(), function() {
              var $G__45738$$ = {title:"4. Cashflow", anchor:"section-4"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$pages$budget$section$section_link$$, $G__45738$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$budget$section$section_link$$, $G__45738$$);
            }(), function() {
              var $G__45742$$ = {title:"5. Committee", anchor:"section-5"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$pages$budget$section$section_link$$, $G__45742$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$budget$section$section_link$$, $G__45742$$);
            }(), function() {
              var $G__45746$$ = {title:"6. Patrons \x26 Sponsors", anchor:"section-6"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$pages$budget$section$section_link$$, $G__45746$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$budget$section$section_link$$, $G__45746$$);
            }(), function() {
              var $G__45750$$ = {title:"7. Location Details", anchor:"section-7"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$pages$budget$section$section_link$$, $G__45750$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$budget$section$section_link$$, $G__45750$$);
            }(), function() {
              var $G__45754$$ = {title:"8. Donation Info", anchor:"section-8"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$pages$budget$section$section_link$$, $G__45754$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$budget$section$section_link$$, $G__45754$$);
            }(), function() {
              var $G__45758$$ = {title:"9. Why Support", anchor:"section-9"};
              return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$pages$budget$section$section_link$$, $G__45758$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$budget$section$section_link$$, $G__45758$$);
            }()]};
          }();
          return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__45722$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__45722$$);
        }()};
      }();
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__45718$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__45718$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__45698_props__41911__auto__$jscomp$4$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__45698_props__41911__auto__$jscomp$4$$);
};
$amp$pages$budget$section$budget_section$$ = function($G__45768_props__41911__auto__$jscomp$5$$) {
  $APP.$helix$core$extract_cljs_props$$($G__45768_props__41911__auto__$jscomp$5$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__45768_props__41911__auto__$jscomp$5$$ = function() {
    return {"section-id":"budget-section", children:function() {
      var $G__45773$$ = {children:[function() {
        var $G__45775$$ = {};
        return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$pages$budget$section$header$$, $G__45775$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$budget$section$header$$, $G__45775$$);
      }(), function() {
        var $G__45777$$ = {id:"section-1", idx:1, subtitle:"press", title:"press release", "show-budget-footer?":!0};
        return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$pages$landing$press_release$press_release$$, $G__45777$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$pages$landing$press_release$press_release$$, $G__45777$$);
      }(), function() {
        var $G__45781$$ = {id:"section-2", idx:2, subtitle:"overview", title:"Armenian Pavilion - The Studio"};
        return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$pages$landing$studio$about_studio$$, $G__45781$$) : $APP.$helix$core$jsx$$.call(null, $APP.$amp$pages$landing$studio$about_studio$$, $G__45781$$);
      }(), function() {
        var $G__45785$$ = {id:"section-3", subtitle:"financials", title:"budget"};
        return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$pages$budget$cost_breakdown$cost_breakdown$$, $G__45785$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$budget$cost_breakdown$cost_breakdown$$, $G__45785$$);
      }(), function() {
        var $G__45789$$ = {id:"section-4", subtitle:"financials", title:"cashflow"};
        return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$pages$budget$cash_flow$cash_flow$$, $G__45789$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$budget$cash_flow$cash_flow$$, $G__45789$$);
      }(), function() {
        var $G__45793$$ = {id:"section-5", subtitle:"team", title:"committee"};
        return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$pages$budget$committee$committee$$, $G__45793$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$budget$committee$committee$$, $G__45793$$);
      }(), function() {
        var $G__45797$$ = {id:"section-6", subtitle:"acknowledgements", title:"patrons \x26 sponsors"};
        return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$pages$budget$sponsors$sponsors_section$$, $G__45797$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$budget$sponsors$sponsors_section$$, $G__45797$$);
      }(), function() {
        var $G__45801$$ = {id:"section-7", subtitle:"venue", title:"location information"};
        return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$pages$budget$location$location_section$$, $G__45801$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$budget$location$location_section$$, $G__45801$$);
      }(), function() {
        var $G__45805$$ = {id:"section-8", subtitle:"non-profit", title:"donation information"};
        return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$pages$budget$non_profit$non_profit$$, $G__45805$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$budget$non_profit$non_profit$$, $G__45805$$);
      }(), function() {
        var $G__45809$$ = {id:"section-9", subtitle:"why it matters", title:"why support"};
        return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$pages$budget$why_support$why_support$$, $G__45809$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$budget$why_support$why_support$$, $G__45809$$);
      }()]};
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$($APP.$amp$ui$page_shell$page_shell$$, $G__45773$$) : $APP.$helix$core$jsxs$$.call(null, $APP.$amp$ui$page_shell$page_shell$$, $G__45773$$);
    }()};
  }();
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$3$($APP.$amp$ui$section$section$$, $G__45768_props__41911__auto__$jscomp$5$$, "budget-section") : $APP.$helix$core$jsx$$.call(null, $APP.$amp$ui$section$section$$, $G__45768_props__41911__auto__$jscomp$5$$, "budget-section");
};
$APP.$amp$pages$budget$page$budget_view$$ = function($G__45819_G__45823$jscomp$inline_3638_props__41911__auto__$jscomp$6_vec__45815$$, $maybe_ref__41912__auto__$jscomp$6$$) {
  $G__45819_G__45823$jscomp$inline_3638_props__41911__auto__$jscomp$6_vec__45815$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__45819_G__45823$jscomp$inline_3638_props__41911__auto__$jscomp$6_vec__45815$$), $maybe_ref__41912__auto__$jscomp$6$$], null);
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__45819_G__45823$jscomp$inline_3638_props__41911__auto__$jscomp$6_vec__45815$$, 0, null);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__45819_G__45823$jscomp$inline_3638_props__41911__auto__$jscomp$6_vec__45815$$ = {};
  $G__45819_G__45823$jscomp$inline_3638_props__41911__auto__$jscomp$6_vec__45815$$ = {children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$pages$budget$section$budget_section$$, $G__45819_G__45823$jscomp$inline_3638_props__41911__auto__$jscomp$6_vec__45815$$) : $APP.$helix$core$jsx$$.call(null, $amp$pages$budget$section$budget_section$$, $G__45819_G__45823$jscomp$inline_3638_props__41911__auto__$jscomp$6_vec__45815$$)};
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__45819_G__45823$jscomp$inline_3638_props__41911__auto__$jscomp$6_vec__45815$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__45819_G__45823$jscomp$inline_3638_props__41911__auto__$jscomp$6_vec__45815$$);
};
$cljs$cst$876$admin_apr_26$$ = new $APP.$cljs$core$Keyword$$(null, "admin-apr-26", "admin-apr-26", -1594649114);
$cljs$cst$890$venice_sep_26$$ = new $APP.$cljs$core$Keyword$$(null, "venice-sep-26", "venice-sep-26", 94763672);
$cljs$cst$849$venice_sep_25$$ = new $APP.$cljs$core$Keyword$$(null, "venice-sep-25", "venice-sep-25", 339442983);
$cljs$cst$868$la_feb_26$$ = new $APP.$cljs$core$Keyword$$(null, "la-feb-26", "la-feb-26", -2123365555);
$cljs$cst$878$venice_may_26$$ = new $APP.$cljs$core$Keyword$$(null, "venice-may-26", "venice-may-26", 2072857227);
$cljs$cst$843$priority$$ = new $APP.$cljs$core$Keyword$$(null, "priority", "priority", 1431093715);
$cljs$cst$928$accent$$ = new $APP.$cljs$core$Keyword$$(null, "accent", "accent", -1826298468);
$cljs$cst$829$venue$$ = new $APP.$cljs$core$Keyword$$(null, "venue", "venue", -731609643);
$cljs$cst$872$la_mar_26$$ = new $APP.$cljs$core$Keyword$$(null, "la-mar-26", "la-mar-26", 1380188343);
$cljs$cst$905$n_crit$$ = new $APP.$cljs$core$Keyword$$(null, "n-crit", "n-crit", 769065100);
$cljs$cst$894$admin_oct_26$$ = new $APP.$cljs$core$Keyword$$(null, "admin-oct-26", "admin-oct-26", 1040051883);
$cljs$cst$931$supporter$$ = new $APP.$cljs$core$Keyword$$(null, "supporter", "supporter", 789659821);
$cljs$cst$854$admin_oct_25$$ = new $APP.$cljs$core$Keyword$$(null, "admin-oct-25", "admin-oct-25", 1520025024);
$cljs$cst$881$venice_jun_26$$ = new $APP.$cljs$core$Keyword$$(null, "venice-jun-26", "venice-jun-26", -604048435);
$cljs$cst$908$has_now$$ = new $APP.$cljs$core$Keyword$$(null, "has-now", "has-now", 654554843);
$cljs$cst$832$the_studio$$ = new $APP.$cljs$core$Keyword$$(null, "the-studio", "the-studio", 106848628);
$cljs$cst$914$month$$ = new $APP.$cljs$core$Keyword$$(null, "month", "month", -1960248533);
$cljs$cst$930$benefactor$$ = new $APP.$cljs$core$Keyword$$(null, "benefactor", "benefactor", -1181533202);
$cljs$cst$856$la_nov_25$$ = new $APP.$cljs$core$Keyword$$(null, "la-nov-25", "la-nov-25", 245379756);
$cljs$cst$866$contingency_jan_26$$ = new $APP.$cljs$core$Keyword$$(null, "contingency-jan-26", "contingency-jan-26", 22175239);
$cljs$cst$884$venice_jul_26$$ = new $APP.$cljs$core$Keyword$$(null, "venice-jul-26", "venice-jul-26", -1607597583);
$cljs$cst$904$entries$$ = new $APP.$cljs$core$Keyword$$(null, "entries", "entries", -86943161);
$cljs$cst$903$all_paid$$ = new $APP.$cljs$core$Keyword$$(null, "all-paid", "all-paid", 366243873);
$cljs$cst$919$fields$$ = new $APP.$cljs$core$Keyword$$(null, "fields", "fields", -1932066230);
$cljs$cst$844$normal$$ = new $APP.$cljs$core$Keyword$$(null, "normal", "normal", -1519123858);
$cljs$cst$841$admin_jul_25$$ = new $APP.$cljs$core$Keyword$$(null, "admin-jul-25", "admin-jul-25", 264378453);
$cljs$cst$885$admin_jul_26$$ = new $APP.$cljs$core$Keyword$$(null, "admin-jul-26", "admin-jul-26", 149736986);
$cljs$cst$906$n_paid$$ = new $APP.$cljs$core$Keyword$$(null, "n-paid", "n-paid", -1703730024);
$cljs$cst$837$documentation$$ = new $APP.$cljs$core$Keyword$$(null, "documentation", "documentation", 1889593999);
$cljs$cst$848$contingency_aug_25$$ = new $APP.$cljs$core$Keyword$$(null, "contingency-aug-25", "contingency-aug-25", -1541402500);
$cljs$cst$889$contingency_aug_26$$ = new $APP.$cljs$core$Keyword$$(null, "contingency-aug-26", "contingency-aug-26", 1402254021);
$cljs$cst$838$debt_raised$$ = new $APP.$cljs$core$Keyword$$(null, "debt-raised", "debt-raised", -1855117742);
$cljs$cst$918$field_value$$ = new $APP.$cljs$core$Keyword$$(null, "field-value", "field-value", 1917248627);
$cljs$cst$920$ein$$ = new $APP.$cljs$core$Keyword$$(null, "ein", "ein", 635658375);
$cljs$cst$882$admin_jun_26$$ = new $APP.$cljs$core$Keyword$$(null, "admin-jun-26", "admin-jun-26", -541328069);
$cljs$cst$826$expanded_items$$ = new $APP.$cljs$core$Keyword$$(null, "expanded-items", "expanded-items", 749320313);
$cljs$cst$922$tier$$ = new $APP.$cljs$core$Keyword$$(null, "tier", "tier", -1071893374);
$cljs$cst$858$contingency_nov_25$$ = new $APP.$cljs$core$Keyword$$(null, "contingency-nov-25", "contingency-nov-25", 2119549379);
$cljs$cst$898$contingency_nov_26$$ = new $APP.$cljs$core$Keyword$$(null, "contingency-nov-26", "contingency-nov-26", 195578875);
$cljs$cst$823$tax$$ = new $APP.$cljs$core$Keyword$$(null, "tax", "tax", -226525810);
$cljs$cst$833$logistics$$ = new $APP.$cljs$core$Keyword$$(null, "logistics", "logistics", 712670037);
$cljs$cst$879$admin_may_26$$ = new $APP.$cljs$core$Keyword$$(null, "admin-may-26", "admin-may-26", 1889129108);
$cljs$cst$917$field_label$$ = new $APP.$cljs$core$Keyword$$(null, "field-label", "field-label", 872823490);
$cljs$cst$865$admin_jan_26$$ = new $APP.$cljs$core$Keyword$$(null, "admin-jan-26", "admin-jan-26", 142603763);
$cljs$cst$921$location$$ = new $APP.$cljs$core$Keyword$$(null, "location", "location", 1815599388);
$cljs$cst$867$venice_feb_26$$ = new $APP.$cljs$core$Keyword$$(null, "venice-feb-26", "venice-feb-26", -1651098139);
$cljs$cst$862$venice_jan_26$$ = new $APP.$cljs$core$Keyword$$(null, "venice-jan-26", "venice-jan-26", -68766759);
$cljs$cst$907$n_items$$ = new $APP.$cljs$core$Keyword$$(null, "n-items", "n-items", -880425095);
$cljs$cst$895$contingency_oct_26$$ = new $APP.$cljs$core$Keyword$$(null, "contingency-oct-26", "contingency-oct-26", -60258419);
$cljs$cst$855$contingency_oct_25$$ = new $APP.$cljs$core$Keyword$$(null, "contingency-oct-25", "contingency-oct-25", 400053796);
$cljs$cst$873$admin_mar_26$$ = new $APP.$cljs$core$Keyword$$(null, "admin-mar-26", "admin-mar-26", -338557509);
$cljs$cst$845$paid$$ = new $APP.$cljs$core$Keyword$$(null, "paid", "paid", 1195086102);
$cljs$cst$821$details$$ = new $APP.$cljs$core$Keyword$$(null, "details", "details", 1956795411);
$cljs$cst$899$venice_dec_26$$ = new $APP.$cljs$core$Keyword$$(null, "venice-dec-26", "venice-dec-26", 1428198827);
$cljs$cst$871$venice_mar_26$$ = new $APP.$cljs$core$Keyword$$(null, "venice-mar-26", "venice-mar-26", -1280378980);
$cljs$cst$929$order$$ = new $APP.$cljs$core$Keyword$$(null, "order", "order", -1254677256);
$cljs$cst$869$admin_feb_26$$ = new $APP.$cljs$core$Keyword$$(null, "admin-feb-26", "admin-feb-26", 1788307477);
$cljs$cst$877$contingency_apr_26$$ = new $APP.$cljs$core$Keyword$$(null, "contingency-apr-26", "contingency-apr-26", -197755096);
$cljs$cst$910$entry$$ = new $APP.$cljs$core$Keyword$$(null, "entry", "entry", 505168823);
$cljs$cst$900$admin_dec_26$$ = new $APP.$cljs$core$Keyword$$(null, "admin-dec-26", "admin-dec-26", 1444073491);
$cljs$cst$860$admin_dec_25$$ = new $APP.$cljs$core$Keyword$$(null, "admin-dec-25", "admin-dec-25", 629109073);
$cljs$cst$828$item$$ = new $APP.$cljs$core$Keyword$$(null, "item", "item", 249373802);
$cljs$cst$897$admin_nov_26$$ = new $APP.$cljs$core$Keyword$$(null, "admin-nov-26", "admin-nov-26", 899776291);
$cljs$cst$857$admin_nov_25$$ = new $APP.$cljs$core$Keyword$$(null, "admin-nov-25", "admin-nov-25", -26984311);
$cljs$cst$842$due$$ = new $APP.$cljs$core$Keyword$$(null, "due", "due", -1754731313);
$cljs$cst$827$description$$ = new $APP.$cljs$core$Keyword$$(null, "description", "description", -1428560544);
$cljs$cst$863$critical$$ = new $APP.$cljs$core$Keyword$$(null, "critical", "critical", -838839117);
$cljs$cst$886$contingency_jul_26$$ = new $APP.$cljs$core$Keyword$$(null, "contingency-jul-26", "contingency-jul-26", 1067897141);
$cljs$cst$846$contingency_jul_25$$ = new $APP.$cljs$core$Keyword$$(null, "contingency-jul-25", "contingency-jul-25", -1729678391);
$cljs$cst$901$contingency_dec_26$$ = new $APP.$cljs$core$Keyword$$(null, "contingency-dec-26", "contingency-dec-26", -60155593);
$cljs$cst$861$contingency_dec_25$$ = new $APP.$cljs$core$Keyword$$(null, "contingency-dec-25", "contingency-dec-25", 1266897629);
$cljs$cst$880$contingency_may_26$$ = new $APP.$cljs$core$Keyword$$(null, "contingency-may-26", "contingency-may-26", -484422222);
$cljs$cst$883$contingency_jun_26$$ = new $APP.$cljs$core$Keyword$$(null, "contingency-jun-26", "contingency-jun-26", 28697636);
$cljs$cst$820$amount$$ = new $APP.$cljs$core$Keyword$$(null, "amount", "amount", 364489504);
$cljs$cst$916$past_QMARK_$$ = new $APP.$cljs$core$Keyword$$(null, "past?", "past?", -125779631);
$cljs$cst$840$cash_flow_model$$ = new $APP.$cljs$core$Keyword$$(null, "cash-flow-model", "cash-flow-model", -883317453);
$cljs$cst$909$dot$$ = new $APP.$cljs$core$Keyword$$(null, "dot", "dot", 1442709401);
$cljs$cst$912$expanded_QMARK_$$ = new $APP.$cljs$core$Keyword$$(null, "expanded?", "expanded?", 2055832296);
$cljs$cst$825$set_expanded_items$$ = new $APP.$cljs$core$Keyword$$(null, "set-expanded-items", "set-expanded-items", -112840979);
$cljs$cst$822$rate$$ = new $APP.$cljs$core$Keyword$$(null, "rate", "rate", -1428659698);
$cljs$cst$870$contingency_feb_26$$ = new $APP.$cljs$core$Keyword$$(null, "contingency-feb-26", "contingency-feb-26", 509692640);
$cljs$cst$835$marketing$$ = new $APP.$cljs$core$Keyword$$(null, "marketing", "marketing", 2054879774);
$cljs$cst$831$la_prod$$ = new $APP.$cljs$core$Keyword$$(null, "la-prod", "la-prod", 1444492244);
$cljs$cst$926$patron$$ = new $APP.$cljs$core$Keyword$$(null, "patron", "patron", -1174215364);
$cljs$cst$902$fill$$ = new $APP.$cljs$core$Keyword$$(null, "fill", "fill", 883462889);
$cljs$cst$839$funds_raised$$ = new $APP.$cljs$core$Keyword$$(null, "funds-raised", "funds-raised", -197009653);
$cljs$cst$892$contingency_sep_26$$ = new $APP.$cljs$core$Keyword$$(null, "contingency-sep-26", "contingency-sep-26", 479744418);
$cljs$cst$852$contingency_sep_25$$ = new $APP.$cljs$core$Keyword$$(null, "contingency-sep-25", "contingency-sep-25", -1119739004);
$cljs$cst$932$members$$ = new $APP.$cljs$core$Keyword$$(null, "members", "members", 159001018);
$cljs$cst$824$cost_data$$ = new $APP.$cljs$core$Keyword$$(null, "cost-data", "cost-data", -1991336764);
$cljs$cst$896$venice_nov_26$$ = new $APP.$cljs$core$Keyword$$(null, "venice-nov-26", "venice-nov-26", 1130078643);
$cljs$cst$911$rollup$$ = new $APP.$cljs$core$Keyword$$(null, "rollup", "rollup", -1742987157);
$cljs$cst$927$individual$$ = new $APP.$cljs$core$Keyword$$(null, "individual", "individual", -1643964808);
$cljs$cst$891$admin_sep_26$$ = new $APP.$cljs$core$Keyword$$(null, "admin-sep-26", "admin-sep-26", -700799960);
$cljs$cst$850$admin_sep_25$$ = new $APP.$cljs$core$Keyword$$(null, "admin-sep-25", "admin-sep-25", 753699567);
$cljs$cst$875$venice_apr_26$$ = new $APP.$cljs$core$Keyword$$(null, "venice-apr-26", "venice-apr-26", -1422709865);
$cljs$cst$925$institution$$ = new $APP.$cljs$core$Keyword$$(null, "institution", "institution", -70023072);
$cljs$cst$924$logo$$ = new $APP.$cljs$core$Keyword$$(null, "logo", "logo", 1237980263);
$cljs$cst$851$high$$ = new $APP.$cljs$core$Keyword$$(null, "high", "high", 2027297808);
$cljs$cst$834$opening$$ = new $APP.$cljs$core$Keyword$$(null, "opening", "opening", 450993708);
$cljs$cst$933$anchor$$ = new $APP.$cljs$core$Keyword$$(null, "anchor", "anchor", 1549638489);
$cljs$cst$830$admin$$ = new $APP.$cljs$core$Keyword$$(null, "admin", "admin", -1239101627);
$cljs$cst$874$contingency_mar_26$$ = new $APP.$cljs$core$Keyword$$(null, "contingency-mar-26", "contingency-mar-26", 1126538363);
$cljs$cst$893$venice_oct_26$$ = new $APP.$cljs$core$Keyword$$(null, "venice-oct-26", "venice-oct-26", -1699834368);
$cljs$cst$853$venice_oct_25$$ = new $APP.$cljs$core$Keyword$$(null, "venice-oct-25", "venice-oct-25", -641394196);
$cljs$cst$915$now$$ = new $APP.$cljs$core$Keyword$$(null, "now", "now", -1650525531);
$cljs$cst$887$venice_aug_26$$ = new $APP.$cljs$core$Keyword$$(null, "venice-aug-26", "venice-aug-26", 520228272);
$cljs$cst$888$admin_aug_26$$ = new $APP.$cljs$core$Keyword$$(null, "admin-aug-26", "admin-aug-26", -1522732065);
$cljs$cst$847$admin_aug_25$$ = new $APP.$cljs$core$Keyword$$(null, "admin-aug-25", "admin-aug-25", -1520609899);
$cljs$cst$923$founding_patron$$ = new $APP.$cljs$core$Keyword$$(null, "founding-patron", "founding-patron", -1158627303);
$cljs$cst$859$la_dec_25$$ = new $APP.$cljs$core$Keyword$$(null, "la-dec-25", "la-dec-25", -844494315);
$cljs$cst$864$la_jan_26$$ = new $APP.$cljs$core$Keyword$$(null, "la-jan-26", "la-jan-26", -425305268);
$cljs$cst$836$publication$$ = new $APP.$cljs$core$Keyword$$(null, "publication", "publication", -1089697399);
$cljs$cst$913$target_total$$ = new $APP.$cljs$core$Keyword$$(null, "target-total", "target-total", 158942849);
$APP.$JSCompiler_StaticMethods_beforeLoadModuleCode$$("budget-view");
var $amp$pages$budget$committee$committee_members$$ = new $APP.$cljs$core$PersistentVector$$(null, 9, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$165$name$$, "Archbishop Derderian", $APP.$cljs$cst$819$role$$, "Committee Lead", $APP.$cljs$cst$730$img_src$$, "https://atd-722658831.imgix.net/committee/hovnan.png", $APP.$cljs$cst$713$credit$$, "Courtesy of the Committee"], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, 
[$APP.$cljs$cst$165$name$$, "Tony Shafrazi", $APP.$cljs$cst$819$role$$, "Chief Curator", $APP.$cljs$cst$730$img_src$$, "https://atd-722658831.imgix.net/committee/tony.png", $APP.$cljs$cst$713$credit$$, "Courtesy of the Committee"], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$165$name$$, "Tina Chakarian", $APP.$cljs$cst$819$role$$, "Curator", $APP.$cljs$cst$730$img_src$$, "https://atd-722658831.imgix.net/committee/tina.png", $APP.$cljs$cst$713$credit$$, "Courtesy of the Committee"], 
null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$165$name$$, "Zadik Zadikian", $APP.$cljs$cst$819$role$$, "Artist", $APP.$cljs$cst$730$img_src$$, "https://atd-722658831.imgix.net/committee/zadik.png", $APP.$cljs$cst$713$credit$$, "Courtesy of the Committee"], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$165$name$$, "Rafi Ourfalian", $APP.$cljs$cst$819$role$$, "Legal Advisor", $APP.$cljs$cst$730$img_src$$, "https://atd-722658831.imgix.net/committee/rafi.png", 
$APP.$cljs$cst$713$credit$$, "Courtesy of the Committee"], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$165$name$$, "Khachik Khudikyan", $APP.$cljs$cst$819$role$$, "Logistics Advisor", $APP.$cljs$cst$730$img_src$$, "https://atd-722658831.imgix.net/committee/chris.png", $APP.$cljs$cst$713$credit$$, "Courtesy of the Committee"], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$165$name$$, "Andranik Torosyan", $APP.$cljs$cst$819$role$$, "Financial Advisor", 
$APP.$cljs$cst$730$img_src$$, "https://atd-722658831.imgix.net/committee/andy.png", $APP.$cljs$cst$713$credit$$, "Courtesy of the Committee"], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$165$name$$, "Aram Alajajian", $APP.$cljs$cst$819$role$$, "Architect", $APP.$cljs$cst$730$img_src$$, "https://atd-722658831.imgix.net/committee/aram.png", $APP.$cljs$cst$713$credit$$, "Courtesy of the Committee"], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$165$name$$, 
"Vik Hovsepian", $APP.$cljs$cst$819$role$$, "Committee Member", $APP.$cljs$cst$713$credit$$, "Courtesy of the Committee", $APP.$cljs$cst$730$img_src$$, "https://atd-722658831.imgix.net/committee/vic.png"], null)], null);
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$301$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$302$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$pages$budget$committee$preview$$, "", null, null) : (void 0).call(null, $amp$pages$budget$committee$preview$$, "", null, null)), $APP.$helix$core$register_BANG_$$($amp$pages$budget$committee$preview$$, 
"amp.pages.budget.committee/preview"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$301$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$302$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$pages$budget$committee$details$$, "", null, null) : (void 0).call(null, $amp$pages$budget$committee$details$$, "", null, null)), $APP.$helix$core$register_BANG_$$($amp$pages$budget$committee$details$$, 
"amp.pages.budget.committee/details"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$301$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$302$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$pages$budget$committee$committee_member_card$$, "", null, null) : (void 0).call(null, $amp$pages$budget$committee$committee_member_card$$, "", null, 
null)), $APP.$helix$core$register_BANG_$$($amp$pages$budget$committee$committee_member_card$$, "amp.pages.budget.committee/committee-member-card"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$301$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$302$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$pages$budget$committee$committee_gallery$$, "", null, null) : (void 0).call(null, $amp$pages$budget$committee$committee_gallery$$, "", null, null)), 
$APP.$helix$core$register_BANG_$$($amp$pages$budget$committee$committee_gallery$$, "amp.pages.budget.committee/committee-gallery"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$301$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$302$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$pages$budget$committee$committee$$, "", null, null) : (void 0).call(null, $amp$pages$budget$committee$committee$$, "", null, null)), $APP.$helix$core$register_BANG_$$($amp$pages$budget$committee$committee$$, 
"amp.pages.budget.committee/committee"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$301$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$302$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$pages$budget$table$total_section$$, "", null, null) : (void 0).call(null, $amp$pages$budget$table$total_section$$, "", null, null)), $APP.$helix$core$register_BANG_$$($amp$pages$budget$table$total_section$$, 
"amp.pages.budget.table/total-section"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$301$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$302$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$pages$budget$table$detail_line_item$$, "", null, null) : (void 0).call(null, $amp$pages$budget$table$detail_line_item$$, "", null, null)), $APP.$helix$core$register_BANG_$$($amp$pages$budget$table$detail_line_item$$, 
"amp.pages.budget.table/detail-line-item"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$301$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$302$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$pages$budget$table$section_line_item$$, '(hooks/use-ref (str "section-" idx))(use-scroll-to-ref)', null, null) : (void 0).call(null, $amp$pages$budget$table$section_line_item$$, 
'(hooks/use-ref (str "section-" idx))(use-scroll-to-ref)', null, null)), $APP.$helix$core$register_BANG_$$($amp$pages$budget$table$section_line_item$$, "amp.pages.budget.table/section-line-item"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$301$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$302$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$pages$budget$table$budget_table$$, "(hooks/use-state #{})", null, null) : (void 0).call(null, $amp$pages$budget$table$budget_table$$, "(hooks/use-state #{})", 
null, null)), $APP.$helix$core$register_BANG_$$($amp$pages$budget$table$budget_table$$, "amp.pages.budget.table/budget-table"));
var $amp$pages$budget$cost_breakdown$cost_data$$ = new $APP.$cljs$core$PersistentVector$$(null, 9, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$286$id$$, $cljs$cst$829$venue$$, $APP.$cljs$cst$288$title$$, "Venue \x26 Operations", $cljs$cst$827$description$$, "Secures and operates the Venice exhibition venue for the full Biennale period: rental, staffing, regulatory compliance, construction, lighting, taxes, and on-site overhead including team lodging and living expenses—ensuring the Pavilion is compliant, safe, and fully operational.", 
$cljs$cst$821$details$$, new $APP.$cljs$core$PersistentVector$$(null, 14, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Base", $APP.$cljs$cst$288$title$$, "Base Rent", $cljs$cst$820$amount$$, 145600, $cljs$cst$827$description$$, "Exclusive use of venue April–December 2026 for the full Biennale period."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Base", $APP.$cljs$cst$288$title$$, 
"Base Staff", $cljs$cst$820$amount$$, 50000, $cljs$cst$827$description$$, "Exhibition staff during the opening period, including security and front-of-house personnel."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Base", $APP.$cljs$cst$288$title$$, "Curatorial Mediator", $cljs$cst$820$amount$$, 25000, $cljs$cst$827$description$$, "Trained curatorial mediator providing visitor guidance, interpretation, and artwork oversight."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 
4, [$APP.$cljs$cst$584$group$$, "Base", $APP.$cljs$cst$288$title$$, "Cleaning", $cljs$cst$820$amount$$, 7000, $cljs$cst$827$description$$, "Weekly professional cleaning and periodic deep cleans for a high-traffic international exhibition."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Permitting", $APP.$cljs$cst$288$title$$, "Permits \x26 Signage", $cljs$cst$820$amount$$, 10000, $cljs$cst$827$description$$, "SCIA permits, exhibition signage approvals, and municipal permits for operational compliance in Venice."], 
null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Permitting", $APP.$cljs$cst$288$title$$, "Fire Safety Cert.", $cljs$cst$820$amount$$, 3500, $cljs$cst$827$description$$, "Mandatory fire-safety certification, inspections, and documentation required by Venetian authorities."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Permitting", $APP.$cljs$cst$288$title$$, "Liability Ins.", $cljs$cst$820$amount$$, 2500, $cljs$cst$827$description$$, 
"Public liability insurance covering visitors, staff, and third parties for the full exhibition period."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Construction", $APP.$cljs$cst$288$title$$, "Partitions \x26 Walls", $cljs$cst$820$amount$$, 9500, $cljs$cst$827$description$$, "Windows, door alterations, partitions, and minor structural adjustments to adapt the venue."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, 
"Construction", $APP.$cljs$cst$288$title$$, "Lighting", $cljs$cst$820$amount$$, 7500, $cljs$cst$827$description$$, "Overhead ceiling-mounted, freestanding, and supplemental exhibition lighting equipment and installation."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Taxes", $APP.$cljs$cst$288$title$$, "Signage Taxes", $cljs$cst$820$amount$$, 1500, $cljs$cst$827$description$$, "Municipal banner and signage tax for exterior and wayfinding signage during the Biennale."], 
null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Taxes", $APP.$cljs$cst$288$title$$, "VAT 22%", $cljs$cst$820$amount$$, 55E3, $cljs$cst$827$description$$, "Italian value-added tax on applicable venue services."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Overhead", $APP.$cljs$cst$288$title$$, "Team Lodging", $cljs$cst$820$amount$$, 95E3, $cljs$cst$827$description$$, "Accommodation for the Venice studio team. $125/night per head, 2 months pre-production + 10 months operations."], 
null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Overhead", $APP.$cljs$cst$288$title$$, "Per Diem", $cljs$cst$820$amount$$, 66E3, $cljs$cst$827$description$$, "Daily living expenses for the Venice-based team. $100/day per head during active operating months."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Overhead", $APP.$cljs$cst$288$title$$, "Project Insurance", $cljs$cst$820$amount$$, 5E4, $cljs$cst$827$description$$, 
"Project insurance coverage for the Venice operations period. 10 months at $5,000/month."], null)], null)], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$286$id$$, $cljs$cst$830$admin$$, $APP.$cljs$cst$288$title$$, "Administration", $cljs$cst$827$description$$, "Core leadership, project management, and operational overhead supporting curatorial direction, artist oversight, coordination, compliance, travel, and lodging—ensuring continuity across the full Biennale cycle.", 
$cljs$cst$821$details$$, new $APP.$cljs$core$PersistentVector$$(null, 6, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Staff", $APP.$cljs$cst$288$title$$, "Curators", $cljs$cst$820$amount$$, 9E4, $cljs$cst$827$description$$, "Curatorial leadership. 18 months at $5,000/month."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Staff", $APP.$cljs$cst$288$title$$, "Artist", $cljs$cst$820$amount$$, 
45E3, $cljs$cst$827$description$$, "Artist fees. 18 months at $2,500/month."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Staff", $APP.$cljs$cst$288$title$$, "Project Coordinator", $cljs$cst$820$amount$$, 45E3, $cljs$cst$827$description$$, "Project coordination. 18 months at $2,500/month."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Travel \x26 Overhead", $APP.$cljs$cst$288$title$$, "Team Travel", $cljs$cst$820$amount$$, 
49E3, $cljs$cst$827$description$$, "International and regional travel for core team during scouting, installation, opening week, and milestones."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Travel \x26 Overhead", $APP.$cljs$cst$288$title$$, "Team Lodging", $cljs$cst$820$amount$$, 7500, $cljs$cst$827$description$$, "Accommodation for core team during opening week and critical on-site periods in Venice."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 
4, [$APP.$cljs$cst$584$group$$, "Travel \x26 Overhead", $APP.$cljs$cst$288$title$$, "Misc", $cljs$cst$820$amount$$, 5500, $cljs$cst$827$description$$, "Miscellaneous administrative expenses, software, tools, and incidentals. 11 months at $500/month."], null)], null)], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$286$id$$, $cljs$cst$831$la_prod$$, $APP.$cljs$cst$288$title$$, "LA Production", $cljs$cst$827$description$$, "Los Angeles–based production: skilled labor, casting, mold-making, materials, studio overhead, and supplies—ensuring museum-grade fabrication and crating prior to shipment to Venice.", 
$cljs$cst$821$details$$, new $APP.$cljs$core$PersistentVector$$(null, 21, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Labor", $APP.$cljs$cst$288$title$$, "Lead Caster", $cljs$cst$820$amount$$, 37625, $cljs$cst$827$description$$, "Lead caster. 5 months at $7,525/month."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Labor", $APP.$cljs$cst$288$title$$, "Caster", $cljs$cst$820$amount$$, 
22500, $cljs$cst$827$description$$, "Casting professional. 5 months at $4,500/month."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Labor", $APP.$cljs$cst$288$title$$, "General Assistant", $cljs$cst$820$amount$$, 21500, $cljs$cst$827$description$$, "General production assistant. 5 months at $4,300/month."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Labor", $APP.$cljs$cst$288$title$$, "Mold Maker", $cljs$cst$820$amount$$, 
15E3, $cljs$cst$827$description$$, "Specialist mold maker. 2 months at $7,500/month."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Labor", $APP.$cljs$cst$288$title$$, "Foam Sprayer", $cljs$cst$820$amount$$, 9E3, $cljs$cst$827$description$$, "Contract foam sprayer for structural cores. 2 months at $4,500/month."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Labor", $APP.$cljs$cst$288$title$$, "Casting Asst. ×3", 
$cljs$cst$820$amount$$, 9E3, $cljs$cst$827$description$$, "3 casting assistants. 2 months at $1,500/month each."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Labor", $APP.$cljs$cst$288$title$$, "Packers ×4", $cljs$cst$820$amount$$, 14E3, $cljs$cst$827$description$$, "4 packers for crating and shipping prep. 1 month at $3,500 each."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Labor", $APP.$cljs$cst$288$title$$, 
"Crate Makers ×2", $cljs$cst$820$amount$$, 1E4, $cljs$cst$827$description$$, "2 crate makers for custom shipping crates. 1 month at $5,000 each."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Overhead", $APP.$cljs$cst$288$title$$, "Studio Rental", $cljs$cst$820$amount$$, 22500, $cljs$cst$827$description$$, "LA studio rent for fabrication. 5 months at $4,500/month."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Overhead", 
$APP.$cljs$cst$288$title$$, "Foam Space Rental", $cljs$cst$820$amount$$, 5500, $cljs$cst$827$description$$, "Additional foam production space rental. 2 months at $2,750/month."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Overhead", $APP.$cljs$cst$288$title$$, "Utilities", $cljs$cst$820$amount$$, 3E3, $cljs$cst$827$description$$, "Utilities for the LA production facility. 2 months at $1,500/month."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 
4, [$APP.$cljs$cst$584$group$$, "Materials", $APP.$cljs$cst$288$title$$, "Pigment", $cljs$cst$820$amount$$, 11500, $cljs$cst$827$description$$, "High-quality pigments integrated into plaster at casting."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Materials", $APP.$cljs$cst$288$title$$, "Honeycomb", $cljs$cst$820$amount$$, 1500, $cljs$cst$827$description$$, "Structural honeycomb material for lightweight internal reinforcement."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 
4, [$APP.$cljs$cst$584$group$$, "Materials", $APP.$cljs$cst$288$title$$, "Polymers", $cljs$cst$820$amount$$, 1500, $cljs$cst$827$description$$, "Binders and polymer materials used in finishing and protection."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Materials", $APP.$cljs$cst$288$title$$, "Foam Material", $cljs$cst$820$amount$$, 21E3, $cljs$cst$827$description$$, "Lightweight foam cores for structural integrity while minimizing shipping weight."], 
null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Materials", $APP.$cljs$cst$288$title$$, "Plaster", $cljs$cst$820$amount$$, 4500, $cljs$cst$827$description$$, "Primary casting material for all sculptural units."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Materials", $APP.$cljs$cst$288$title$$, "Supplies", $cljs$cst$820$amount$$, 10500, $cljs$cst$827$description$$, "Consumable supplies used during casting and finishing."], 
null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Materials", $APP.$cljs$cst$288$title$$, "Mold Supplies", $cljs$cst$820$amount$$, 17500, $cljs$cst$827$description$$, "Custom mold materials, CNC mother units, and fabrication aids."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Materials", $APP.$cljs$cst$288$title$$, "Crate Materials", $cljs$cst$820$amount$$, 15E3, $cljs$cst$827$description$$, "Materials for constructing custom shipping crates."], 
null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Materials", $APP.$cljs$cst$288$title$$, "Packing Supplies", $cljs$cst$820$amount$$, 5E3, $cljs$cst$827$description$$, "Packing materials for securing artwork during international transit."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Materials", $APP.$cljs$cst$288$title$$, "Misc", $cljs$cst$820$amount$$, 7500, $cljs$cst$827$description$$, "Miscellaneous production expenses. 5 months at $1,500/month."], 
null)], null)], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$286$id$$, $cljs$cst$832$the_studio$$, $APP.$cljs$cst$288$title$$, "The Studio", $cljs$cst$827$description$$, "On-site operation of THE STUDIO in Venice: staffing, installation and de-installation crews, local materials, and daily production—supporting continuous fabrication and reconfiguration throughout the Biennale.", $cljs$cst$821$details$$, new $APP.$cljs$core$PersistentVector$$(null, 15, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, 
[new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Staff", $APP.$cljs$cst$288$title$$, "Studio Asst. #1", $cljs$cst$820$amount$$, 54E3, $cljs$cst$827$description$$, "Full-time studio assistant. 9 months at $6,000/month."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Staff", $APP.$cljs$cst$288$title$$, "Studio Asst. #2", $cljs$cst$820$amount$$, 46500, $cljs$cst$827$description$$, "Studio assistant. 6 months at $6,000 + 3 months at $3,500."], 
null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Staff", $APP.$cljs$cst$288$title$$, "Studio Asst. #3", $cljs$cst$820$amount$$, 23500, $cljs$cst$827$description$$, "Studio assistant. 1 month at $6,000 + 5 months at $3,500."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Staff", $APP.$cljs$cst$288$title$$, "Studio Asst. #4", $cljs$cst$820$amount$$, 23500, $cljs$cst$827$description$$, "Studio assistant. 1 month at $6,000 + 5 months at $3,500."], 
null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Staff", $APP.$cljs$cst$288$title$$, "Studio Asst. #5", $cljs$cst$820$amount$$, 6E3, $cljs$cst$827$description$$, "Temporary studio assistant. 1 month at $6,000."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Staff", $APP.$cljs$cst$288$title$$, "Studio Asst. #6", $cljs$cst$820$amount$$, 6E3, $cljs$cst$827$description$$, "Temporary studio assistant. 1 month at $6,000."], 
null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Install / Uninstall", $APP.$cljs$cst$288$title$$, "Installers ×4", $cljs$cst$820$amount$$, 32E3, $cljs$cst$827$description$$, "4 installers for install and uninstall. 2 engagements at $4,000 each."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Install / Uninstall", $APP.$cljs$cst$288$title$$, "Crate Makers ×2", $cljs$cst$820$amount$$, 11E3, $cljs$cst$827$description$$, 
"2 crate makers for Venice de-install crating. 1 engagement at $5,500 each."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Materials", $APP.$cljs$cst$288$title$$, "Foam Material", $cljs$cst$820$amount$$, 11500, $cljs$cst$827$description$$, "Venice-sourced foam materials for ongoing on-site fabrication."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Materials", $APP.$cljs$cst$288$title$$, "Pigment", $cljs$cst$820$amount$$, 
6750, $cljs$cst$827$description$$, "Pigments for on-site casting and finishing work."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Materials", $APP.$cljs$cst$288$title$$, "Plaster", $cljs$cst$820$amount$$, 4750, $cljs$cst$827$description$$, "Plaster for on-site sculptural production."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Materials", $APP.$cljs$cst$288$title$$, "Supplies", $cljs$cst$820$amount$$, 4750, 
$cljs$cst$827$description$$, "Consumable supplies for ongoing studio activity."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Materials", $APP.$cljs$cst$288$title$$, "Crate Materials", $cljs$cst$820$amount$$, 7500, $cljs$cst$827$description$$, "Materials for crating artwork for return shipment."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Materials", $APP.$cljs$cst$288$title$$, "Packing Supplies", $cljs$cst$820$amount$$, 
2500, $cljs$cst$827$description$$, "Packing materials for securing artwork at close-out."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Materials", $APP.$cljs$cst$288$title$$, "Misc Materials", $cljs$cst$820$amount$$, 4250, $cljs$cst$827$description$$, "Miscellaneous materials and expendables for studio operations."], null)], null)], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$286$id$$, $cljs$cst$833$logistics$$, $APP.$cljs$cst$288$title$$, 
"Logistics \x26 Transport", $cljs$cst$827$description$$, "International and local transport under Biennale conditions: freight, insurance, port handling, lagoon barge transport, forklift operations, storage, and reverse logistics for return shipment.", $cljs$cst$821$details$$, new $APP.$cljs$core$PersistentVector$$(null, 17, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "International Freight", $APP.$cljs$cst$288$title$$, 
"Ship LA → Venice", $cljs$cst$820$amount$$, 3E4, $cljs$cst$827$description$$, "International freight from Los Angeles to Venice for all crated artwork and materials."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "International Freight", $APP.$cljs$cst$288$title$$, "Ship Venice → LA", $cljs$cst$820$amount$$, 3E4, $cljs$cst$827$description$$, "Return international freight from Venice to Los Angeles after close-out."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 
4, [$APP.$cljs$cst$584$group$$, "International Freight", $APP.$cljs$cst$288$title$$, "Transit Insurance", $cljs$cst$820$amount$$, 12E3, $cljs$cst$827$description$$, "Insurance coverage for artwork during international transit."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Install / Uninstall", $APP.$cljs$cst$288$title$$, "Installers (Venice)", $cljs$cst$820$amount$$, 7200, $cljs$cst$827$description$$, "Local Venice installation crew. 4 installers for on-site install."], 
null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Install / Uninstall", $APP.$cljs$cst$288$title$$, "Uninstallers (Venice)", $cljs$cst$820$amount$$, 9E3, $cljs$cst$827$description$$, "Local Venice de-installation crew. 5 uninstallers for close-out."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Local Transport", $APP.$cljs$cst$288$title$$, "Port Handling", $cljs$cst$820$amount$$, 2500, $cljs$cst$827$description$$, "Offloading crates at Venice port; includes terminal fees and labor."], 
null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Local Transport", $APP.$cljs$cst$288$title$$, "Barge (Port → Stor.)", $cljs$cst$820$amount$$, 3E3, $cljs$cst$827$description$$, "Lagoon barge transport for crates from port to storage facility."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Local Transport", $APP.$cljs$cst$288$title$$, "Trucking (Stor. → Venue)", $cljs$cst$820$amount$$, 1200, $cljs$cst$827$description$$, 
"Truck transport from storage depot to Biennale venue access point."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Local Transport", $APP.$cljs$cst$288$title$$, "Barge (Stor. → Venue)", $cljs$cst$820$amount$$, 3E3, $cljs$cst$827$description$$, "Barge shipping for crates/materials to venue area via Venice canals."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Local Transport", $APP.$cljs$cst$288$title$$, "Forklift \x26 Operator", 
$cljs$cst$820$amount$$, 1300, $cljs$cst$827$description$$, "Forklift + licensed operator for unloading/loading at venue. 2 days at $650/day."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Local Transport", $APP.$cljs$cst$288$title$$, "Handling Crew", $cljs$cst$820$amount$$, 500, $cljs$cst$827$description$$, "Movers for crate handling, navigation of canals and venue access."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, 
"Storage", $APP.$cljs$cst$288$title$$, "Short-Term Storage", $cljs$cst$820$amount$$, 1200, $cljs$cst$827$description$$, "Storage of crates between arrival and installation. 60 crates for 20 days."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Storage", $APP.$cljs$cst$288$title$$, "Empty Crate Storage", $cljs$cst$820$amount$$, 2E3, $cljs$cst$827$description$$, "Storage of empty crates during the Biennale exhibition run. 200 days."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 
4, [$APP.$cljs$cst$584$group$$, "Storage", $APP.$cljs$cst$288$title$$, "Waste Removal", $cljs$cst$820$amount$$, 1E3, $cljs$cst$827$description$$, "Removal of packing material, foam waste, and install debris."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Reverse Logistics", $APP.$cljs$cst$288$title$$, "Reverse Barge", $cljs$cst$820$amount$$, 3E3, $cljs$cst$827$description$$, "Return transport of crates/materials after uninstall."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 
4, [$APP.$cljs$cst$584$group$$, "Reverse Logistics", $APP.$cljs$cst$288$title$$, "Reverse Trucking", $cljs$cst$820$amount$$, 1200, $cljs$cst$827$description$$, "Transport of crates back to port for outbound shipping."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Reverse Logistics", $APP.$cljs$cst$288$title$$, "Reverse Port Handling", $cljs$cst$820$amount$$, 2500, $cljs$cst$827$description$$, "Terminal fees + labor for reloading outbound container."], null)], 
null)], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$286$id$$, $cljs$cst$834$opening$$, $APP.$cljs$cst$288$title$$, "Opening Week", $cljs$cst$827$description$$, "Opening reception and first public visibility of the Pavilion: hospitality, staffing, technical support, press and VIP coordination—executed during the Biennale's most compressed period.", $cljs$cst$821$details$$, new $APP.$cljs$core$PersistentVector$$(null, 11, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, 
[new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Hospitality", $APP.$cljs$cst$288$title$$, "Catering — Food", $cljs$cst$820$amount$$, 5250, $cljs$cst$827$description$$, "Passed hors d'oeuvres for opening night reception. 75 guests at $70/guest."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Hospitality", $APP.$cljs$cst$288$title$$, "Catering — Beverages", $cljs$cst$820$amount$$, 1500, $cljs$cst$827$description$$, "Prosecco, wine, and non-alcoholic drinks. 100 guests at $15/guest."], 
null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Hospitality", $APP.$cljs$cst$288$title$$, "Catering Staff", $cljs$cst$820$amount$$, 1500, $cljs$cst$827$description$$, "3–6 servers + 1 event captain for opening night."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Hospitality", $APP.$cljs$cst$288$title$$, "Rentals", $cljs$cst$820$amount$$, 1500, $cljs$cst$827$description$$, "Tables, linens, glassware; Venice incurs transport surcharges due to canals."], 
null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Event Ops", $APP.$cljs$cst$288$title$$, "Event Coordinator", $cljs$cst$820$amount$$, 1500, $cljs$cst$827$description$$, "Scheduling, setup, guest flow, liaising with pavilion staff and caterer."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Event Ops", $APP.$cljs$cst$288$title$$, "Security", $cljs$cst$820$amount$$, 800, $cljs$cst$827$description$$, "Safe capacity management at openings per Biennale requirements."], 
null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Event Ops", $APP.$cljs$cst$288$title$$, "Audio, Light \x26 Tech", $cljs$cst$820$amount$$, 1E3, $cljs$cst$827$description$$, "Small speaker system, microphone, ambient lighting reinforcement."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Event Ops", $APP.$cljs$cst$288$title$$, "Event Photography", $cljs$cst$820$amount$$, 500, $cljs$cst$827$description$$, "Opening night event photography coverage."], 
null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Event Ops", $APP.$cljs$cst$288$title$$, "Invitations", $cljs$cst$820$amount$$, 500, $cljs$cst$827$description$$, "Printing or premium digital distribution of invitations."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "VIP Programs", $APP.$cljs$cst$288$title$$, "VIP Press Preview", $cljs$cst$820$amount$$, 1500, $cljs$cst$827$description$$, "Staff + scheduling for VIP/press walkthroughs during opening week."], 
null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "VIP Programs", $APP.$cljs$cst$288$title$$, "VIP Water Taxi", $cljs$cst$820$amount$$, 1500, $cljs$cst$827$description$$, "Transport allowance for VIPs/officials. 8 rides at $120/ride."], null)], null)], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$286$id$$, $cljs$cst$835$marketing$$, $APP.$cljs$cst$288$title$$, "Marketing \x26 PR", $cljs$cst$827$description$$, "Visibility and communications: identity design, PR, advertising, social media, and press activity—positioning the Pavilion within the global Biennale discourse.", 
$cljs$cst$821$details$$, new $APP.$cljs$core$PersistentVector$$(null, 18, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Design", $APP.$cljs$cst$288$title$$, "Visual Identity", $cljs$cst$820$amount$$, 2500, $cljs$cst$827$description$$, "Design of pavilion identity, key visual and main poster."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Design", $APP.$cljs$cst$288$title$$, 
"Essentials Package", $cljs$cst$820$amount$$, 1500, $cljs$cst$827$description$$, "Press kit, invitations, social templates, digital ads."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Design", $APP.$cljs$cst$288$title$$, "Website \x26 Hosting", $cljs$cst$820$amount$$, 7500, $cljs$cst$827$description$$, "Design and hosting of the pavilion website."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Design", $APP.$cljs$cst$288$title$$, 
"OOH Design", $cljs$cst$820$amount$$, 1500, $cljs$cst$827$description$$, "Design for totems and out-of-home placements."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Design", $APP.$cljs$cst$288$title$$, "Exhibition Graphics", $cljs$cst$820$amount$$, 1500, $cljs$cst$827$description$$, "Entrance graphics, wall texts, wayfinding signage."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Writing", $APP.$cljs$cst$288$title$$, 
"Social Copywriting", $cljs$cst$820$amount$$, 1500, $cljs$cst$827$description$$, "Ongoing caption writing, messaging, narrative scripting."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Writing", $APP.$cljs$cst$288$title$$, "PR Writing", $cljs$cst$820$amount$$, 1500, $cljs$cst$827$description$$, "Speeches, press releases, media statements."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Advertising", $APP.$cljs$cst$288$title$$, 
"Totem Placement", $cljs$cst$820$amount$$, 8500, $cljs$cst$827$description$$, "Rental + printing + installation for Biennale duration."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Advertising", $APP.$cljs$cst$288$title$$, "Vaporetto Wraps", $cljs$cst$820$amount$$, 12500, $cljs$cst$827$description$$, "Rental + production for 2–3 vaporetto lines over Biennale duration."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, 
"Advertising", $APP.$cljs$cst$288$title$$, "Poster Printing", $cljs$cst$820$amount$$, 5E3, $cljs$cst$827$description$$, "250 posters at $20 each for venue and city placements."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Advertising", $APP.$cljs$cst$288$title$$, "Outdoor Posters", $cljs$cst$820$amount$$, 3E3, $cljs$cst$827$description$$, "Secondary placements across Venice — 50 posters at $60 each."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 
4, [$APP.$cljs$cst$584$group$$, "Advertising", $APP.$cljs$cst$288$title$$, "Social Media Ads", $cljs$cst$820$amount$$, 2500, $cljs$cst$827$description$$, "Instagram, Facebook, and TikTok ads for 7 months."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Advertising", $APP.$cljs$cst$288$title$$, "Social Campaign Mgmt", $cljs$cst$820$amount$$, 2500, $cljs$cst$827$description$$, "Strategy, posting, optimization, reporting."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 
4, [$APP.$cljs$cst$584$group$$, "Advertising", $APP.$cljs$cst$288$title$$, "Digital Pub Ads", $cljs$cst$820$amount$$, 2500, $cljs$cst$827$description$$, "Ads on e-flux, ArtNews, Hyperallergic, Frieze."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Advertising", $APP.$cljs$cst$288$title$$, "Print Pub Ads", $cljs$cst$820$amount$$, 5E3, $cljs$cst$827$description$$, "Artforum, Art Newspaper, and similar print publications."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 
4, [$APP.$cljs$cst$584$group$$, "PR", $APP.$cljs$cst$288$title$$, "PR — Pre-Opening", $cljs$cst$820$amount$$, 1500, $cljs$cst$827$description$$, "Press relations, writing, pitching, coordination."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "PR", $APP.$cljs$cst$288$title$$, "PR — Ongoing", $cljs$cst$820$amount$$, 1500, $cljs$cst$827$description$$, "Sustained PR, press tracking, releases, interviews over 7 months."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 
4, [$APP.$cljs$cst$584$group$$, "PR", $APP.$cljs$cst$288$title$$, "Marketing Mgmt Fee", $cljs$cst$820$amount$$, 2500, $cljs$cst$827$description$$, "Overall coordination of marketing and media buys."], null)], null)], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$286$id$$, $cljs$cst$836$publication$$, $APP.$cljs$cst$288$title$$, "Publications", $cljs$cst$827$description$$, "Catalogue and printed materials: commissioned texts, design, editing, printing, totes, and stationery—ensuring long-term scholarly and institutional presence.", 
$cljs$cst$821$details$$, new $APP.$cljs$core$PersistentVector$$(null, 12, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Writing", $APP.$cljs$cst$288$title$$, "Curatorial Essay", $cljs$cst$820$amount$$, 2500, $cljs$cst$827$description$$, "Primary curatorial essay for catalogue and website."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Writing", $APP.$cljs$cst$288$title$$, 
"Catalogue Essays", $cljs$cst$820$amount$$, 4E3, $cljs$cst$827$description$$, "Commissioned essays by 4 invited writers and scholars at $1,000 each."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Catalogue", $APP.$cljs$cst$288$title$$, "Design", $cljs$cst$820$amount$$, 7500, $cljs$cst$827$description$$, "Design of exhibition catalogue (120 pages, soft cover)."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Catalogue", 
$APP.$cljs$cst$288$title$$, "Editing \x26 Layout", $cljs$cst$820$amount$$, 2500, $cljs$cst$827$description$$, "Editing and layout of copy, images, and inserts."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Catalogue", $APP.$cljs$cst$288$title$$, "Printing", $cljs$cst$820$amount$$, 12E3, $cljs$cst$827$description$$, "High-quality color printing, 120 pages. 150 copies at $80 each."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, 
"Catalogue", $APP.$cljs$cst$288$title$$, "Proofs \x26 Shipping", $cljs$cst$820$amount$$, 1E3, $cljs$cst$827$description$$, "Proofs, shipping, and miscellaneous printing costs."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Tote", $APP.$cljs$cst$288$title$$, "Design", $cljs$cst$820$amount$$, 2500, $cljs$cst$827$description$$, "Design of exhibition totes."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Tote", $APP.$cljs$cst$288$title$$, 
"Printing", $cljs$cst$820$amount$$, 4500, $cljs$cst$827$description$$, "High-quality silkscreen run. 300 totes at $15 each."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Tote", $APP.$cljs$cst$288$title$$, "Proofs \x26 Shipping", $cljs$cst$820$amount$$, 1E3, $cljs$cst$827$description$$, "Proofs, shipping, and miscellaneous costs for totes."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Stationery", $APP.$cljs$cst$288$title$$, 
"Design", $cljs$cst$820$amount$$, 1500, $cljs$cst$827$description$$, "Cards, postcards, flyers design."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Stationery", $APP.$cljs$cst$288$title$$, "Printing", $cljs$cst$820$amount$$, 1500, $cljs$cst$827$description$$, "300 pieces at $5 each."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Stationery", $APP.$cljs$cst$288$title$$, "Proofs \x26 Shipping", $cljs$cst$820$amount$$, 
250, $cljs$cst$827$description$$, "Proofs, shipping, and miscellaneous stationery costs."], null)], null)], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$286$id$$, $cljs$cst$837$documentation$$, $APP.$cljs$cst$288$title$$, "Documentation", $cljs$cst$827$description$$, "Comprehensive visual documentation: cinema-quality film production, photography, sound recording, editing, social media deliverables, and archiving—supporting press visibility, scholarship, and institutional legacy.", 
$cljs$cst$821$details$$, new $APP.$cljs$core$PersistentVector$$(null, 12, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Production", $APP.$cljs$cst$288$title$$, "Camera \x26 Lighting", $cljs$cst$820$amount$$, 1E4, $cljs$cst$827$description$$, "Rental package for cinema cameras, lenses, lighting, audio kits."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Production", $APP.$cljs$cst$288$title$$, 
"DPs ×2", $cljs$cst$820$amount$$, 20400, $cljs$cst$827$description$$, "Lead cinematographers for install, opening, and walkthroughs. 2 DPs × 12 days × $850/day."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Production", $APP.$cljs$cst$288$title$$, "Assistant / Gaffer", $cljs$cst$820$amount$$, 4500, $cljs$cst$827$description$$, "Lighting and camera support during shoots. 10 days at $450/day."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, 
"Production", $APP.$cljs$cst$288$title$$, "Sound Recording", $cljs$cst$820$amount$$, 2800, $cljs$cst$827$description$$, "Location audio capture, ambient sound, dialogue. 8 days at $350/day."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Production", $APP.$cljs$cst$288$title$$, "Photo — Install", $cljs$cst$820$amount$$, 1750, $cljs$cst$827$description$$, "High-resolution documentation during installation. 5 days at $350/day."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 
4, [$APP.$cljs$cst$584$group$$, "Production", $APP.$cljs$cst$288$title$$, "Photo — Exhibition", $cljs$cst$820$amount$$, 1800, $cljs$cst$827$description$$, "Final artwork + pavilion architecture photography. 3 days at $600/day."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Production", $APP.$cljs$cst$288$title$$, "Photo — Opening", $cljs$cst$820$amount$$, 1400, $cljs$cst$827$description$$, "Coverage for VIP events, public programs, press preview. 2 days at $700/day."], 
null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Post", $APP.$cljs$cst$288$title$$, "Film Assembly", $cljs$cst$820$amount$$, 3E3, $cljs$cst$827$description$$, "Initial cut of installation and exhibition film. 6 days at $500/day."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Post", $APP.$cljs$cst$288$title$$, "Final Cut \x26 Color", $cljs$cst$820$amount$$, 2400, $cljs$cst$827$description$$, "Professional colorist and finishing for final delivery. 4 days at $600/day."], 
null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Post", $APP.$cljs$cst$288$title$$, "Sound Edit \x26 Mix", $cljs$cst$820$amount$$, 1600, $cljs$cst$827$description$$, "Cleanup, music integration, final audio polish. 4 days at $400/day."], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Post", $APP.$cljs$cst$288$title$$, "Social Deliverables", $cljs$cst$820$amount$$, 6E3, $cljs$cst$827$description$$, "Short-form clips optimized for IG/FB/TikTok. 5 days at $1,200/day."], 
null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$584$group$$, "Post", $APP.$cljs$cst$288$title$$, "Backup \x26 Archive", $cljs$cst$820$amount$$, 750, $cljs$cst$827$description$$, "Redundancy, hard drives, digital archiving of all materials."], null)], null)], null)], null);
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$301$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$302$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$pages$budget$cost_breakdown$preview$$, "", null, null) : (void 0).call(null, $amp$pages$budget$cost_breakdown$preview$$, "", null, null)), $APP.$helix$core$register_BANG_$$($amp$pages$budget$cost_breakdown$preview$$, 
"amp.pages.budget.cost-breakdown/preview"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$301$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$302$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$pages$budget$cost_breakdown$details$$, "", null, null) : (void 0).call(null, $amp$pages$budget$cost_breakdown$details$$, "", null, null)), $APP.$helix$core$register_BANG_$$($amp$pages$budget$cost_breakdown$details$$, 
"amp.pages.budget.cost-breakdown/details"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$301$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$302$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$pages$budget$cost_breakdown$footer$$, "", null, null) : (void 0).call(null, $amp$pages$budget$cost_breakdown$footer$$, "", null, null)), $APP.$helix$core$register_BANG_$$($amp$pages$budget$cost_breakdown$footer$$, 
"amp.pages.budget.cost-breakdown/footer"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$301$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$302$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$pages$budget$cost_breakdown$cost_breakdown$$, "", null, null) : (void 0).call(null, $amp$pages$budget$cost_breakdown$cost_breakdown$$, "", null, null)), 
$APP.$helix$core$register_BANG_$$($amp$pages$budget$cost_breakdown$cost_breakdown$$, "amp.pages.budget.cost-breakdown/cost-breakdown"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$301$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$302$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$pages$budget$location$preview_text$$, "", null, null) : (void 0).call(null, $amp$pages$budget$location$preview_text$$, "", null, null)), $APP.$helix$core$register_BANG_$$($amp$pages$budget$location$preview_text$$, 
"amp.pages.budget.location/preview-text"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$301$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$302$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$pages$budget$location$preview$$, "", null, null) : (void 0).call(null, $amp$pages$budget$location$preview$$, "", null, null)), $APP.$helix$core$register_BANG_$$($amp$pages$budget$location$preview$$, 
"amp.pages.budget.location/preview"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$301$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$302$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$pages$budget$location$full_details$$, "(use-touch-enabled)", null, null) : (void 0).call(null, $amp$pages$budget$location$full_details$$, "(use-touch-enabled)", 
null, null)), $APP.$helix$core$register_BANG_$$($amp$pages$budget$location$full_details$$, "amp.pages.budget.location/full-details"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$301$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$302$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$pages$budget$location$location_section$$, "", null, null) : (void 0).call(null, $amp$pages$budget$location$location_section$$, "", null, null)), $APP.$helix$core$register_BANG_$$($amp$pages$budget$location$location_section$$, 
"amp.pages.budget.location/location-section"));
var $amp$pages$budget$cash_flow$cashflow_data$$ = new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$cljs$cst$838$debt_raised$$, 0, $cljs$cst$839$funds_raised$$, 175000, $cljs$cst$840$cash_flow_model$$, $APP.$cljs$core$PersistentVector$fromArray$$([new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$286$id$$, $cljs$cst$841$admin_jul_25$$, $APP.$cljs$cst$288$title$$, "Admin — Core Team (Jul)", $cljs$cst$842$due$$, "2025-07-15", $cljs$cst$820$amount$$, 10000, $cljs$cst$843$priority$$, 
$cljs$cst$844$normal$$, $APP.$cljs$cst$12$status$$, $cljs$cst$845$paid$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$286$id$$, $cljs$cst$846$contingency_jul_25$$, $APP.$cljs$cst$288$title$$, "Contingency (Jul)", $cljs$cst$842$due$$, "2025-07-20", $cljs$cst$820$amount$$, 500, $cljs$cst$843$priority$$, $cljs$cst$844$normal$$, $APP.$cljs$cst$12$status$$, $cljs$cst$845$paid$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$286$id$$, $cljs$cst$847$admin_aug_25$$, 
$APP.$cljs$cst$288$title$$, "Admin — Core Team (Aug)", $cljs$cst$842$due$$, "2025-08-15", $cljs$cst$820$amount$$, 10000, $cljs$cst$843$priority$$, $cljs$cst$844$normal$$, $APP.$cljs$cst$12$status$$, $cljs$cst$845$paid$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$286$id$$, $cljs$cst$848$contingency_aug_25$$, $APP.$cljs$cst$288$title$$, "Contingency (Aug)", $cljs$cst$842$due$$, "2025-08-20", $cljs$cst$820$amount$$, 500, $cljs$cst$843$priority$$, $cljs$cst$844$normal$$, 
$APP.$cljs$cst$12$status$$, $cljs$cst$845$paid$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$286$id$$, $cljs$cst$849$venice_sep_25$$, $APP.$cljs$cst$288$title$$, "Venice — Lodging \x26 Per Diem (Sep)", $cljs$cst$842$due$$, "2025-09-05", $cljs$cst$820$amount$$, 13000, $cljs$cst$843$priority$$, $cljs$cst$844$normal$$, $APP.$cljs$cst$12$status$$, $cljs$cst$845$paid$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$286$id$$, $cljs$cst$850$admin_sep_25$$, 
$APP.$cljs$cst$288$title$$, "Admin — Core Team + Travel (Sep)", $cljs$cst$842$due$$, "2025-09-15", $cljs$cst$820$amount$$, 20000, $cljs$cst$843$priority$$, $cljs$cst$851$high$$, $APP.$cljs$cst$12$status$$, $cljs$cst$845$paid$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$286$id$$, $cljs$cst$852$contingency_sep_25$$, $APP.$cljs$cst$288$title$$, "Contingency (Sep)", $cljs$cst$842$due$$, "2025-09-20", $cljs$cst$820$amount$$, 650, $cljs$cst$843$priority$$, $cljs$cst$844$normal$$, 
$APP.$cljs$cst$12$status$$, $cljs$cst$845$paid$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$286$id$$, $cljs$cst$853$venice_oct_25$$, $APP.$cljs$cst$288$title$$, "Venice — Lodging \x26 Per Diem (Oct)", $cljs$cst$842$due$$, "2025-10-05", $cljs$cst$820$amount$$, 13E3, $cljs$cst$843$priority$$, $cljs$cst$844$normal$$, $APP.$cljs$cst$12$status$$, $cljs$cst$845$paid$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$286$id$$, $cljs$cst$854$admin_oct_25$$, 
$APP.$cljs$cst$288$title$$, "Admin — Core Team + Travel (Oct)", $cljs$cst$842$due$$, "2025-10-15", $cljs$cst$820$amount$$, 2E4, $cljs$cst$843$priority$$, $cljs$cst$851$high$$, $APP.$cljs$cst$12$status$$, $cljs$cst$845$paid$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$286$id$$, $cljs$cst$855$contingency_oct_25$$, $APP.$cljs$cst$288$title$$, "Contingency (Oct)", $cljs$cst$842$due$$, "2025-10-20", $cljs$cst$820$amount$$, 650, $cljs$cst$843$priority$$, $cljs$cst$844$normal$$, 
$APP.$cljs$cst$12$status$$, $cljs$cst$845$paid$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$286$id$$, $cljs$cst$856$la_nov_25$$, $APP.$cljs$cst$288$title$$, "LA Production — Phase 1 Startup (Nov)", $cljs$cst$842$due$$, "2025-11-10", $cljs$cst$820$amount$$, 31325, $cljs$cst$843$priority$$, $cljs$cst$851$high$$, $APP.$cljs$cst$12$status$$, $cljs$cst$845$paid$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$286$id$$, $cljs$cst$857$admin_nov_25$$, 
$APP.$cljs$cst$288$title$$, "Admin — Core Team (Nov)", $cljs$cst$842$due$$, "2025-11-15", $cljs$cst$820$amount$$, 1E4, $cljs$cst$843$priority$$, $cljs$cst$844$normal$$, $APP.$cljs$cst$12$status$$, $cljs$cst$845$paid$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$286$id$$, $cljs$cst$858$contingency_nov_25$$, $APP.$cljs$cst$288$title$$, "Contingency (Nov)", $cljs$cst$842$due$$, "2025-11-20", $cljs$cst$820$amount$$, 1566, $cljs$cst$843$priority$$, $cljs$cst$844$normal$$, 
$APP.$cljs$cst$12$status$$, $cljs$cst$845$paid$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$286$id$$, $cljs$cst$859$la_dec_25$$, $APP.$cljs$cst$288$title$$, "LA Production — Phase 1 Continued (Dec)", $cljs$cst$842$due$$, "2025-12-10", $cljs$cst$820$amount$$, 31325, $cljs$cst$843$priority$$, $cljs$cst$851$high$$, $APP.$cljs$cst$12$status$$, $cljs$cst$845$paid$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$286$id$$, $cljs$cst$860$admin_dec_25$$, 
$APP.$cljs$cst$288$title$$, "Admin — Core Team (Dec)", $cljs$cst$842$due$$, "2025-12-15", $cljs$cst$820$amount$$, 1E4, $cljs$cst$843$priority$$, $cljs$cst$844$normal$$, $APP.$cljs$cst$12$status$$, $cljs$cst$845$paid$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$286$id$$, $cljs$cst$861$contingency_dec_25$$, $APP.$cljs$cst$288$title$$, "Contingency (Dec)", $cljs$cst$842$due$$, "2025-12-20", $cljs$cst$820$amount$$, 1566, $cljs$cst$843$priority$$, $cljs$cst$844$normal$$, 
$APP.$cljs$cst$12$status$$, $cljs$cst$845$paid$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$286$id$$, $cljs$cst$862$venice_jan_26$$, $APP.$cljs$cst$288$title$$, "Venice — Venue Tranche 1 (10%)", $cljs$cst$842$due$$, "2026-01-05", $cljs$cst$820$amount$$, 30650, $cljs$cst$843$priority$$, $cljs$cst$863$critical$$, $APP.$cljs$cst$12$status$$, $cljs$cst$845$paid$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$286$id$$, $cljs$cst$864$la_jan_26$$, 
$APP.$cljs$cst$288$title$$, "LA Production — Phase 2 (Jan)", $cljs$cst$842$due$$, "2026-01-10", $cljs$cst$820$amount$$, 30325, $cljs$cst$843$priority$$, $cljs$cst$851$high$$, $APP.$cljs$cst$12$status$$, $cljs$cst$845$paid$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$286$id$$, $cljs$cst$865$admin_jan_26$$, $APP.$cljs$cst$288$title$$, "Admin — Core Team (Jan)", $cljs$cst$842$due$$, "2026-01-15", $cljs$cst$820$amount$$, 1E4, $cljs$cst$843$priority$$, $cljs$cst$844$normal$$, 
$APP.$cljs$cst$12$status$$, $cljs$cst$845$paid$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$286$id$$, $cljs$cst$866$contingency_jan_26$$, $APP.$cljs$cst$288$title$$, "Contingency (Jan)", $cljs$cst$842$due$$, "2026-01-20", $cljs$cst$820$amount$$, 3049, $cljs$cst$843$priority$$, $cljs$cst$844$normal$$, $APP.$cljs$cst$12$status$$, $cljs$cst$845$paid$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$286$id$$, $cljs$cst$867$venice_feb_26$$, $APP.$cljs$cst$288$title$$, 
"Venice — Venue Tranche 2 + 3 (60%)", $cljs$cst$842$due$$, "2026-02-05", $cljs$cst$820$amount$$, 183900, $cljs$cst$843$priority$$, $cljs$cst$863$critical$$, $APP.$cljs$cst$12$status$$, $APP.$cljs$cst$14$pending$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$286$id$$, $cljs$cst$868$la_feb_26$$, $APP.$cljs$cst$288$title$$, "LA Production — Phase 3 (Feb)", $cljs$cst$842$due$$, "2026-02-10", $cljs$cst$820$amount$$, 74825, $cljs$cst$843$priority$$, $cljs$cst$863$critical$$, 
$APP.$cljs$cst$12$status$$, $APP.$cljs$cst$14$pending$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$286$id$$, $cljs$cst$869$admin_feb_26$$, $APP.$cljs$cst$288$title$$, "Admin — Core Team + Misc (Feb)", $cljs$cst$842$due$$, "2026-02-15", $cljs$cst$820$amount$$, 10500, $cljs$cst$843$priority$$, $cljs$cst$851$high$$, $APP.$cljs$cst$12$status$$, $APP.$cljs$cst$14$pending$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$286$id$$, $cljs$cst$870$contingency_feb_26$$, 
$APP.$cljs$cst$288$title$$, "Contingency (Feb)", $cljs$cst$842$due$$, "2026-02-20", $cljs$cst$820$amount$$, 12936, $cljs$cst$843$priority$$, $cljs$cst$844$normal$$, $APP.$cljs$cst$12$status$$, $APP.$cljs$cst$14$pending$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$286$id$$, $cljs$cst$871$venice_mar_26$$, $APP.$cljs$cst$288$title$$, "Venice — Venue Tranche 4 + Logistics (Outbound) + Setup", $cljs$cst$842$due$$, "2026-03-05", $cljs$cst$820$amount$$, 172200, $cljs$cst$843$priority$$, 
$cljs$cst$863$critical$$, $APP.$cljs$cst$12$status$$, $APP.$cljs$cst$14$pending$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$286$id$$, $cljs$cst$872$la_mar_26$$, $APP.$cljs$cst$288$title$$, "LA Production — Final Phase + Crating (Mar)", $cljs$cst$842$due$$, "2026-03-10", $cljs$cst$820$amount$$, 97325, $cljs$cst$843$priority$$, $cljs$cst$863$critical$$, $APP.$cljs$cst$12$status$$, $APP.$cljs$cst$14$pending$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, 
[$APP.$cljs$cst$286$id$$, $cljs$cst$873$admin_mar_26$$, $APP.$cljs$cst$288$title$$, "Admin — Core Team + Misc (Mar)", $cljs$cst$842$due$$, "2026-03-15", $cljs$cst$820$amount$$, 10500, $cljs$cst$843$priority$$, $cljs$cst$851$high$$, $APP.$cljs$cst$12$status$$, $APP.$cljs$cst$14$pending$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$286$id$$, $cljs$cst$874$contingency_mar_26$$, $APP.$cljs$cst$288$title$$, "Contingency (Mar)", $cljs$cst$842$due$$, "2026-03-20", $cljs$cst$820$amount$$, 
13476, $cljs$cst$843$priority$$, $cljs$cst$844$normal$$, $APP.$cljs$cst$12$status$$, $APP.$cljs$cst$14$pending$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$286$id$$, $cljs$cst$875$venice_apr_26$$, $APP.$cljs$cst$288$title$$, "Venice — Opening Month + Studio Launch + Operations", $cljs$cst$842$due$$, "2026-04-05", $cljs$cst$820$amount$$, 110267, $cljs$cst$843$priority$$, $cljs$cst$863$critical$$, $APP.$cljs$cst$12$status$$, $APP.$cljs$cst$14$pending$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 
6, [$APP.$cljs$cst$286$id$$, $cljs$cst$876$admin_apr_26$$, $APP.$cljs$cst$288$title$$, "Admin — Core Team + Travel + Lodging (Apr)", $cljs$cst$842$due$$, "2026-04-15", $cljs$cst$820$amount$$, 33E3, $cljs$cst$843$priority$$, $cljs$cst$851$high$$, $APP.$cljs$cst$12$status$$, $APP.$cljs$cst$14$pending$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$286$id$$, $cljs$cst$877$contingency_apr_26$$, $APP.$cljs$cst$288$title$$, "Contingency (Apr)", $cljs$cst$842$due$$, "2026-04-20", 
$cljs$cst$820$amount$$, 5513, $cljs$cst$843$priority$$, $cljs$cst$844$normal$$, $APP.$cljs$cst$12$status$$, $APP.$cljs$cst$14$pending$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$286$id$$, $cljs$cst$878$venice_may_26$$, $APP.$cljs$cst$288$title$$, "Venice — Studio + Operations (May)", $cljs$cst$842$due$$, "2026-05-05", $cljs$cst$820$amount$$, 53717, $cljs$cst$843$priority$$, $cljs$cst$844$normal$$, $APP.$cljs$cst$12$status$$, $APP.$cljs$cst$14$pending$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 
6, [$APP.$cljs$cst$286$id$$, $cljs$cst$879$admin_may_26$$, $APP.$cljs$cst$288$title$$, "Admin — Core Team + Misc (May)", $cljs$cst$842$due$$, "2026-05-15", $cljs$cst$820$amount$$, 10500, $cljs$cst$843$priority$$, $cljs$cst$844$normal$$, $APP.$cljs$cst$12$status$$, $APP.$cljs$cst$14$pending$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$286$id$$, $cljs$cst$880$contingency_may_26$$, $APP.$cljs$cst$288$title$$, "Contingency (May)", $cljs$cst$842$due$$, "2026-05-20", $cljs$cst$820$amount$$, 
2686, $cljs$cst$843$priority$$, $cljs$cst$844$normal$$, $APP.$cljs$cst$12$status$$, $APP.$cljs$cst$14$pending$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$286$id$$, $cljs$cst$881$venice_jun_26$$, $APP.$cljs$cst$288$title$$, "Venice — Studio + Operations + Catalogue (Jun)", $cljs$cst$842$due$$, "2026-06-05", $cljs$cst$820$amount$$, 94467, $cljs$cst$843$priority$$, $cljs$cst$851$high$$, $APP.$cljs$cst$12$status$$, $APP.$cljs$cst$14$pending$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 
6, [$APP.$cljs$cst$286$id$$, $cljs$cst$882$admin_jun_26$$, $APP.$cljs$cst$288$title$$, "Admin — Core Team + Travel + Misc (Jun)", $cljs$cst$842$due$$, "2026-06-15", $cljs$cst$820$amount$$, 12500, $cljs$cst$843$priority$$, $cljs$cst$844$normal$$, $APP.$cljs$cst$12$status$$, $APP.$cljs$cst$14$pending$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$286$id$$, $cljs$cst$883$contingency_jun_26$$, $APP.$cljs$cst$288$title$$, "Contingency (Jun)", $cljs$cst$842$due$$, "2026-06-20", 
$cljs$cst$820$amount$$, 4723, $cljs$cst$843$priority$$, $cljs$cst$844$normal$$, $APP.$cljs$cst$12$status$$, $APP.$cljs$cst$14$pending$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$286$id$$, $cljs$cst$884$venice_jul_26$$, $APP.$cljs$cst$288$title$$, "Venice — Studio + Operations (Jul)", $cljs$cst$842$due$$, "2026-07-05", $cljs$cst$820$amount$$, 53717, $cljs$cst$843$priority$$, $cljs$cst$844$normal$$, $APP.$cljs$cst$12$status$$, $APP.$cljs$cst$14$pending$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 
6, [$APP.$cljs$cst$286$id$$, $cljs$cst$885$admin_jul_26$$, $APP.$cljs$cst$288$title$$, "Admin — Core Team + Misc (Jul)", $cljs$cst$842$due$$, "2026-07-15", $cljs$cst$820$amount$$, 10500, $cljs$cst$843$priority$$, $cljs$cst$844$normal$$, $APP.$cljs$cst$12$status$$, $APP.$cljs$cst$14$pending$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$286$id$$, $cljs$cst$886$contingency_jul_26$$, $APP.$cljs$cst$288$title$$, "Contingency (Jul)", $cljs$cst$842$due$$, "2026-07-20", $cljs$cst$820$amount$$, 
2686, $cljs$cst$843$priority$$, $cljs$cst$844$normal$$, $APP.$cljs$cst$12$status$$, $APP.$cljs$cst$14$pending$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$286$id$$, $cljs$cst$887$venice_aug_26$$, $APP.$cljs$cst$288$title$$, "Venice — Studio + Operations (Aug)", $cljs$cst$842$due$$, "2026-08-05", $cljs$cst$820$amount$$, 53717, $cljs$cst$843$priority$$, $cljs$cst$844$normal$$, $APP.$cljs$cst$12$status$$, $APP.$cljs$cst$14$pending$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 
6, [$APP.$cljs$cst$286$id$$, $cljs$cst$888$admin_aug_26$$, $APP.$cljs$cst$288$title$$, "Admin — Core Team + Misc (Aug)", $cljs$cst$842$due$$, "2026-08-15", $cljs$cst$820$amount$$, 10500, $cljs$cst$843$priority$$, $cljs$cst$844$normal$$, $APP.$cljs$cst$12$status$$, $APP.$cljs$cst$14$pending$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$286$id$$, $cljs$cst$889$contingency_aug_26$$, $APP.$cljs$cst$288$title$$, "Contingency (Aug)", $cljs$cst$842$due$$, "2026-08-20", $cljs$cst$820$amount$$, 
2686, $cljs$cst$843$priority$$, $cljs$cst$844$normal$$, $APP.$cljs$cst$12$status$$, $APP.$cljs$cst$14$pending$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$286$id$$, $cljs$cst$890$venice_sep_26$$, $APP.$cljs$cst$288$title$$, "Venice — Studio + Operations (Sep)", $cljs$cst$842$due$$, "2026-09-05", $cljs$cst$820$amount$$, 53717, $cljs$cst$843$priority$$, $cljs$cst$844$normal$$, $APP.$cljs$cst$12$status$$, $APP.$cljs$cst$14$pending$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 
6, [$APP.$cljs$cst$286$id$$, $cljs$cst$891$admin_sep_26$$, $APP.$cljs$cst$288$title$$, "Admin — Core Team + Travel + Misc (Sep)", $cljs$cst$842$due$$, "2026-09-15", $cljs$cst$820$amount$$, 12500, $cljs$cst$843$priority$$, $cljs$cst$844$normal$$, $APP.$cljs$cst$12$status$$, $APP.$cljs$cst$14$pending$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$286$id$$, $cljs$cst$892$contingency_sep_26$$, $APP.$cljs$cst$288$title$$, "Contingency (Sep)", $cljs$cst$842$due$$, "2026-09-20", 
$cljs$cst$820$amount$$, 2686, $cljs$cst$843$priority$$, $cljs$cst$844$normal$$, $APP.$cljs$cst$12$status$$, $APP.$cljs$cst$14$pending$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$286$id$$, $cljs$cst$893$venice_oct_26$$, $APP.$cljs$cst$288$title$$, "Venice — Studio + Operations (Oct)", $cljs$cst$842$due$$, "2026-10-05", $cljs$cst$820$amount$$, 42217, $cljs$cst$843$priority$$, $cljs$cst$844$normal$$, $APP.$cljs$cst$12$status$$, $APP.$cljs$cst$14$pending$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 
6, [$APP.$cljs$cst$286$id$$, $cljs$cst$894$admin_oct_26$$, $APP.$cljs$cst$288$title$$, "Admin — Core Team + Misc (Oct)", $cljs$cst$842$due$$, "2026-10-15", $cljs$cst$820$amount$$, 10500, $cljs$cst$843$priority$$, $cljs$cst$844$normal$$, $APP.$cljs$cst$12$status$$, $APP.$cljs$cst$14$pending$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$286$id$$, $cljs$cst$895$contingency_oct_26$$, $APP.$cljs$cst$288$title$$, "Contingency (Oct)", $cljs$cst$842$due$$, "2026-10-20", $cljs$cst$820$amount$$, 
2111, $cljs$cst$843$priority$$, $cljs$cst$844$normal$$, $APP.$cljs$cst$12$status$$, $APP.$cljs$cst$14$pending$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$286$id$$, $cljs$cst$896$venice_nov_26$$, $APP.$cljs$cst$288$title$$, "Venice — Studio + Operations (Nov)", $cljs$cst$842$due$$, "2026-11-05", $cljs$cst$820$amount$$, 42217, $cljs$cst$843$priority$$, $cljs$cst$844$normal$$, $APP.$cljs$cst$12$status$$, $APP.$cljs$cst$14$pending$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 
6, [$APP.$cljs$cst$286$id$$, $cljs$cst$897$admin_nov_26$$, $APP.$cljs$cst$288$title$$, "Admin — Core Team + Misc (Nov)", $cljs$cst$842$due$$, "2026-11-15", $cljs$cst$820$amount$$, 10500, $cljs$cst$843$priority$$, $cljs$cst$844$normal$$, $APP.$cljs$cst$12$status$$, $APP.$cljs$cst$14$pending$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$286$id$$, $cljs$cst$898$contingency_nov_26$$, $APP.$cljs$cst$288$title$$, "Contingency (Nov)", $cljs$cst$842$due$$, "2026-11-20", $cljs$cst$820$amount$$, 
2111, $cljs$cst$843$priority$$, $cljs$cst$844$normal$$, $APP.$cljs$cst$12$status$$, $APP.$cljs$cst$14$pending$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$286$id$$, $cljs$cst$899$venice_dec_26$$, $APP.$cljs$cst$288$title$$, "Venice — Close-out + Logistics (Return)", $cljs$cst$842$due$$, "2026-12-05", $cljs$cst$820$amount$$, 134517, $cljs$cst$843$priority$$, $cljs$cst$851$high$$, $APP.$cljs$cst$12$status$$, $APP.$cljs$cst$14$pending$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 
6, [$APP.$cljs$cst$286$id$$, $cljs$cst$900$admin_dec_26$$, $APP.$cljs$cst$288$title$$, "Admin — Core Team + Travel + Misc (Dec)", $cljs$cst$842$due$$, "2026-12-15", $cljs$cst$820$amount$$, 20500, $cljs$cst$843$priority$$, $cljs$cst$851$high$$, $APP.$cljs$cst$12$status$$, $APP.$cljs$cst$14$pending$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$286$id$$, $cljs$cst$901$contingency_dec_26$$, $APP.$cljs$cst$288$title$$, "Contingency (Dec)", $cljs$cst$842$due$$, "2026-12-20", 
$cljs$cst$820$amount$$, 6726, $cljs$cst$843$priority$$, $cljs$cst$844$normal$$, $APP.$cljs$cst$12$status$$, $APP.$cljs$cst$14$pending$$], null)], !0)], null);
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$301$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$302$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$pages$budget$cash_flow$timeline_node$$, '(hooks/use-ref nil)(hooks/use-effect :once (when (clojure.core/deref node-ref) (.fromTo gsap (clojure.core/deref node-ref) {:opacity 0, :x -20} {:opacity 1, :x 0, :duration 0.4, :delay (* idx 0.06), :ease "power2.out"})))', 
null, null) : (void 0).call(null, $amp$pages$budget$cash_flow$timeline_node$$, '(hooks/use-ref nil)(hooks/use-effect :once (when (clojure.core/deref node-ref) (.fromTo gsap (clojure.core/deref node-ref) {:opacity 0, :x -20} {:opacity 1, :x 0, :duration 0.4, :delay (* idx 0.06), :ease "power2.out"})))', null, null)), $APP.$helix$core$register_BANG_$$($amp$pages$budget$cash_flow$timeline_node$$, "amp.pages.budget.cash-flow/timeline-node"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$301$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$302$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$pages$budget$cash_flow$now_marker$$, '(hooks/use-ref nil)(hooks/use-effect :once (when (clojure.core/deref ref) (.fromTo gsap (clojure.core/deref ref) {:opacity 0, :scaleX 0} {:opacity 1, :scaleX 1, :duration 0.6, :delay 0.2, :ease "power3.out"})))', 
null, null) : (void 0).call(null, $amp$pages$budget$cash_flow$now_marker$$, '(hooks/use-ref nil)(hooks/use-effect :once (when (clojure.core/deref ref) (.fromTo gsap (clojure.core/deref ref) {:opacity 0, :scaleX 0} {:opacity 1, :scaleX 1, :duration 0.6, :delay 0.2, :ease "power3.out"})))', null, null)), $APP.$helix$core$register_BANG_$$($amp$pages$budget$cash_flow$now_marker$$, "amp.pages.budget.cash-flow/now-marker"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$301$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$302$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$pages$budget$cash_flow$month_header$$, '(hooks/use-ref nil)(hooks/use-effect :once (when (clojure.core/deref ref) (.fromTo gsap (clojure.core/deref ref) {:opacity 0, :y 8} {:opacity 1, :y 0, :duration 0.35, :delay (+ 0.1 (* idx 0.05)), :ease "power2.out"})))', 
null, null) : (void 0).call(null, $amp$pages$budget$cash_flow$month_header$$, '(hooks/use-ref nil)(hooks/use-effect :once (when (clojure.core/deref ref) (.fromTo gsap (clojure.core/deref ref) {:opacity 0, :y 8} {:opacity 1, :y 0, :duration 0.35, :delay (+ 0.1 (* idx 0.05)), :ease "power2.out"})))', null, null)), $APP.$helix$core$register_BANG_$$($amp$pages$budget$cash_flow$month_header$$, "amp.pages.budget.cash-flow/month-header"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$301$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$302$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$pages$budget$cash_flow$month_summary_row$$, '(hooks/use-ref nil)(hooks/use-effect :once (when (clojure.core/deref ref) (.fromTo gsap (clojure.core/deref ref) {:opacity 0, :x -16} {:opacity 1, :x 0, :duration 0.35, :delay (* idx 0.05), :ease "power2.out"})))', 
null, null) : (void 0).call(null, $amp$pages$budget$cash_flow$month_summary_row$$, '(hooks/use-ref nil)(hooks/use-effect :once (when (clojure.core/deref ref) (.fromTo gsap (clojure.core/deref ref) {:opacity 0, :x -16} {:opacity 1, :x 0, :duration 0.35, :delay (* idx 0.05), :ease "power2.out"})))', null, null)), $APP.$helix$core$register_BANG_$$($amp$pages$budget$cash_flow$month_summary_row$$, "amp.pages.budget.cash-flow/month-summary-row"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$301$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$302$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$pages$budget$cash_flow$view_toggle$$, "", null, null) : (void 0).call(null, $amp$pages$budget$cash_flow$view_toggle$$, "", null, null)), $APP.$helix$core$register_BANG_$$($amp$pages$budget$cash_flow$view_toggle$$, 
"amp.pages.budget.cash-flow/view-toggle"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$301$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$302$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$pages$budget$cash_flow$summary_header$$, '(hooks/use-ref nil)(hooks/use-effect :once (when (clojure.core/deref ref) (.fromTo gsap (clojure.core/deref ref) {:opacity 0, :y -12} {:opacity 1, :y 0, :duration 0.5, :ease "power2.out"})))', 
null, null) : (void 0).call(null, $amp$pages$budget$cash_flow$summary_header$$, '(hooks/use-ref nil)(hooks/use-effect :once (when (clojure.core/deref ref) (.fromTo gsap (clojure.core/deref ref) {:opacity 0, :y -12} {:opacity 1, :y 0, :duration 0.5, :ease "power2.out"})))', null, null)), $APP.$helix$core$register_BANG_$$($amp$pages$budget$cash_flow$summary_header$$, "amp.pages.budget.cash-flow/summary-header"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$301$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$302$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$pages$budget$cash_flow$cash_flow$$, '(hooks/use-state nil)(hooks/use-state false)(hooks/use-ref nil)(hooks/use-effect [entries] (when (and entries (clojure.core/deref container-ref)) (let [spine (.querySelector (clojure.core/deref container-ref) ".cf-spine")] (when spine (.fromTo gsap spine {:scaleY 0} {:scaleY 1, :duration 0.8, :delay 0.05, :ease "power3.out"})))))', 
null, null) : (void 0).call(null, $amp$pages$budget$cash_flow$cash_flow$$, '(hooks/use-state nil)(hooks/use-state false)(hooks/use-ref nil)(hooks/use-effect [entries] (when (and entries (clojure.core/deref container-ref)) (let [spine (.querySelector (clojure.core/deref container-ref) ".cf-spine")] (when spine (.fromTo gsap spine {:scaleY 0} {:scaleY 1, :duration 0.8, :delay 0.05, :ease "power3.out"})))))', null, null)), $APP.$helix$core$register_BANG_$$($amp$pages$budget$cash_flow$cash_flow$$, "amp.pages.budget.cash-flow/cash-flow"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$301$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$302$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$pages$budget$non_profit$transfer_field$$, "", null, null) : (void 0).call(null, $amp$pages$budget$non_profit$transfer_field$$, "", null, null)), $APP.$helix$core$register_BANG_$$($amp$pages$budget$non_profit$transfer_field$$, 
"amp.pages.budget.non-profit/transfer-field"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$301$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$302$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$pages$budget$non_profit$transfer_card$$, "", null, null) : (void 0).call(null, $amp$pages$budget$non_profit$transfer_card$$, "", null, null)), $APP.$helix$core$register_BANG_$$($amp$pages$budget$non_profit$transfer_card$$, 
"amp.pages.budget.non-profit/transfer-card"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$301$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$302$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$pages$budget$non_profit$non_profit$$, "", null, null) : (void 0).call(null, $amp$pages$budget$non_profit$non_profit$$, "", null, null)), $APP.$helix$core$register_BANG_$$($amp$pages$budget$non_profit$non_profit$$, 
"amp.pages.budget.non-profit/non-profit"));
var $amp$pages$budget$sponsors$sponsors$$ = new $APP.$cljs$core$PersistentVector$$(null, 5, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$165$name$$, "Tony Shafrazi", $cljs$cst$922$tier$$, $cljs$cst$923$founding_patron$$, $cljs$cst$924$logo$$, "images/graphics/tony_shafrazi_logo_lighter.svg", $APP.$cljs$cst$25$type$$, $cljs$cst$925$institution$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$165$name$$, 
"Armenian Fund USA", $cljs$cst$922$tier$$, $cljs$cst$923$founding_patron$$, $cljs$cst$924$logo$$, "images/graphics/armenia_fund_logo.svg", $APP.$cljs$cst$25$type$$, $cljs$cst$925$institution$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$165$name$$, "Khudikyan Family", $cljs$cst$922$tier$$, $cljs$cst$926$patron$$, $APP.$cljs$cst$25$type$$, $cljs$cst$927$individual$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$165$name$$, "Ourfalian Family", 
$cljs$cst$922$tier$$, $cljs$cst$926$patron$$, $APP.$cljs$cst$25$type$$, $cljs$cst$927$individual$$], null), new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$165$name$$, "Sarafyan Family", $cljs$cst$922$tier$$, $cljs$cst$926$patron$$, $APP.$cljs$cst$25$type$$, $cljs$cst$927$individual$$], null)], null), $amp$pages$budget$sponsors$tier_meta$$ = new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$cljs$cst$923$founding_patron$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$415$label$$, 
"Founding Patrons", $cljs$cst$928$accent$$, "text-pink-700 dark:text-pink-300", $APP.$cljs$cst$397$border$$, "border-pink-500/30", $cljs$cst$929$order$$, 0], null), $cljs$cst$926$patron$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$415$label$$, "Patrons", $cljs$cst$928$accent$$, "text-amber-700 dark:text-amber-300", $APP.$cljs$cst$397$border$$, "border-amber-500/30 dark:border-amber-300/30", $cljs$cst$929$order$$, 1], null), $cljs$cst$930$benefactor$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 
4, [$APP.$cljs$cst$415$label$$, "Benefactors", $cljs$cst$928$accent$$, "text-indigo-700 dark:text-indigo-300", $APP.$cljs$cst$397$border$$, "border-indigo-500/30 dark:border-indigo-300/30", $cljs$cst$929$order$$, 2], null), $cljs$cst$931$supporter$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$415$label$$, "Supporters", $cljs$cst$928$accent$$, "text-slate-700 dark:text-slate-300", $APP.$cljs$cst$397$border$$, "border-slate-400 dark:border-slate-600", $cljs$cst$929$order$$, 3], 
null)], null);
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$301$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$302$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$pages$budget$sponsors$logo_card$$, "", null, null) : (void 0).call(null, $amp$pages$budget$sponsors$logo_card$$, "", null, null)), $APP.$helix$core$register_BANG_$$($amp$pages$budget$sponsors$logo_card$$, 
"amp.pages.budget.sponsors/logo-card"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$301$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$302$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$pages$budget$sponsors$name_item$$, "", null, null) : (void 0).call(null, $amp$pages$budget$sponsors$name_item$$, "", null, null)), $APP.$helix$core$register_BANG_$$($amp$pages$budget$sponsors$name_item$$, 
"amp.pages.budget.sponsors/name-item"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$301$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$302$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$pages$budget$sponsors$tier_section$$, "", null, null) : (void 0).call(null, $amp$pages$budget$sponsors$tier_section$$, "", null, null)), $APP.$helix$core$register_BANG_$$($amp$pages$budget$sponsors$tier_section$$, 
"amp.pages.budget.sponsors/tier-section"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$301$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$302$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$pages$budget$sponsors$sponsors_section$$, "", null, null) : (void 0).call(null, $amp$pages$budget$sponsors$sponsors_section$$, "", null, null)), $APP.$helix$core$register_BANG_$$($amp$pages$budget$sponsors$sponsors_section$$, 
"amp.pages.budget.sponsors/sponsors-section"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$301$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$302$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$pages$budget$why_support$preview$$, "", null, null) : (void 0).call(null, $amp$pages$budget$why_support$preview$$, "", null, null)), $APP.$helix$core$register_BANG_$$($amp$pages$budget$why_support$preview$$, 
"amp.pages.budget.why-support/preview"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$301$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$302$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$pages$budget$why_support$details$$, "", null, null) : (void 0).call(null, $amp$pages$budget$why_support$details$$, "", null, null)), $APP.$helix$core$register_BANG_$$($amp$pages$budget$why_support$details$$, 
"amp.pages.budget.why-support/details"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$301$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$302$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$pages$budget$why_support$why_support$$, "", null, null) : (void 0).call(null, $amp$pages$budget$why_support$why_support$$, "", null, null)), $APP.$helix$core$register_BANG_$$($amp$pages$budget$why_support$why_support$$, 
"amp.pages.budget.why-support/why-support"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$301$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$302$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$pages$budget$section$section_link$$, "(use-scroll-to-id)", null, null) : (void 0).call(null, $amp$pages$budget$section$section_link$$, "(use-scroll-to-id)", 
null, null)), $APP.$helix$core$register_BANG_$$($amp$pages$budget$section$section_link$$, "amp.pages.budget.section/section-link"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$301$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$302$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$pages$budget$section$header$$, "", null, null) : (void 0).call(null, $amp$pages$budget$section$header$$, "", null, null)), $APP.$helix$core$register_BANG_$$($amp$pages$budget$section$header$$, 
"amp.pages.budget.section/header"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$301$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$302$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$pages$budget$section$budget_section$$, "", null, null) : (void 0).call(null, $amp$pages$budget$section$budget_section$$, "", null, null)), $APP.$helix$core$register_BANG_$$($amp$pages$budget$section$budget_section$$, 
"amp.pages.budget.section/budget-section"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$301$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$302$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($APP.$amp$pages$budget$page$budget_view$$, "", null, null) : (void 0).call(null, $APP.$amp$pages$budget$page$budget_view$$, "", null, null)), $APP.$helix$core$register_BANG_$$($APP.$amp$pages$budget$page$budget_view$$, 
"amp.pages.budget.page/budget-view"));
$APP.$module$contents$shadow$loader_set_loaded$$();

}).call(this);