(function(){
'use strict';
var $cljs$core$re_find$$, $amp$components$icons$DocumentIcon$$, $amp$components$icons$CollapseIcon$$, $amp$components$icons$ExpandIcon$$, $cljs$core$char$0$$, $cljs$core$add_watch$$, $cljs$core$take_nth$cljs$0core$0IFn$0_invoke$0arity$02$$, $cljs$core$frequencies$$, $cljs$tools$reader$impl$utils$whitespace_QMARK_$$, $cljs$tools$reader$impl$utils$numeric_QMARK_$$, $cljs$tools$reader$impl$utils$namespace_keys$$, $cljs$tools$reader$impl$utils$char_code$$, $cljs$tools$reader$reader_types$read_char$$, 
$cljs$tools$reader$reader_types$peek_char$$, $cljs$tools$reader$reader_types$unread$$, $cljs$tools$reader$reader_types$get_line_number$$, $cljs$tools$reader$reader_types$get_column_number$$, $cljs$tools$reader$reader_types$get_file_name$$, $cljs$tools$reader$reader_types$StringReader$$, $cljs$tools$reader$reader_types$PushbackReader$$, $cljs$tools$reader$reader_types$indexing_reader_QMARK_$$, $cljs$tools$reader$impl$inspect$inspect$cljs$0core$0IFn$0_invoke$0arity$01$$, $cljs$tools$reader$impl$errors$throw_ex$cljs$0core$0IFn$0_invoke$0arity$0variadic$$, 
$cljs$tools$reader$impl$errors$reader_error$cljs$0core$0IFn$0_invoke$0arity$0variadic$$, $cljs$tools$reader$impl$errors$illegal_arg_error$cljs$0core$0IFn$0_invoke$0arity$0variadic$$, $cljs$tools$reader$impl$errors$eof_error$cljs$0core$0IFn$0_invoke$0arity$0variadic$$, $cljs$tools$reader$impl$errors$throw_odd_map$$, $cljs$tools$reader$impl$errors$throw_invalid$$, $cljs$tools$reader$impl$errors$throw_bad_char$$, $cljs$tools$reader$impl$errors$throw_eof_reading$cljs$0core$0IFn$0_invoke$0arity$0variadic$$, 
$cljs$tools$reader$impl$errors$throw_invalid_unicode_digit$$, $cljs$tools$reader$impl$errors$throw_bad_octal_number$$, $cljs$tools$reader$impl$errors$duplicate_keys_error$$, $cljs$tools$reader$impl$errors$throw_dup_keys$$, $cljs$tools$reader$impl$commons$read_past$$, $cljs$tools$reader$impl$commons$matches_QMARK_$$, $cljs$tools$reader$impl$commons$match_number$$, $cljs$tools$reader$impl$commons$parse_symbol$$, $cljs$tools$reader$impl$commons$throwing_reader$$, $cljs$tools$reader$edn$not_constituent_QMARK_$$, 
$cljs$tools$reader$edn$read_unmatched_delimiter$$, $cljs$tools$reader$edn$read_unicode_char$cljs$0core$0IFn$0_invoke$0arity$04$$, $cljs$tools$reader$edn$starting_line_col_info$$, $cljs$tools$reader$edn$macro_terminating_QMARK_$$, $cljs$tools$reader$edn$read_token$cljs$0core$0IFn$0_invoke$0arity$04$$, $cljs$tools$reader$edn$read_dispatch$$, $cljs$tools$reader$edn$read_unicode_char$cljs$0core$0IFn$0_invoke$0arity$05$$, $cljs$tools$reader$edn$read_char_STAR_$$, $cljs$tools$reader$edn$read_delimited$$, 
$cljs$tools$reader$edn$read_list$$, $cljs$tools$reader$edn$read_vector$$, $cljs$tools$reader$edn$read_map$$, $cljs$tools$reader$edn$read_number$$, $cljs$tools$reader$edn$escape_char$$, $cljs$tools$reader$edn$read_string_STAR_$$, $cljs$tools$reader$edn$read_symbol$$, $cljs$tools$reader$edn$read_keyword$$, $cljs$tools$reader$edn$read_meta$$, $cljs$tools$reader$edn$read_set$$, $cljs$tools$reader$edn$read_discard$$, $cljs$tools$reader$edn$read_namespaced_map$$, $cljs$tools$reader$edn$read_symbolic_value$$, 
$cljs$tools$reader$edn$macros$$, $cljs$tools$reader$edn$dispatch_macros$$, $cljs$tools$reader$edn$read_tagged$$, $cljs$tools$reader$edn$read$$, $cljs$tools$reader$edn$read$cljs$0core$0IFn$0_invoke$0arity$02$$, $cljs$tools$reader$edn$read$cljs$0core$0IFn$0_invoke$0arity$04$$, $amp$services$firebase$listen_to_edn$cljs$0core$0IFn$0_invoke$0arity$03$$, $amp$components$threejs$scene$setup_scene_BANG_$$, $amp$components$threejs$geometry$fmt_dim$$, $amp$components$threejs$geometry$extract_parts_list$$, 
$amp$components$threejs$geometry$calculate_total_dimensions$$, $amp$components$threejs$copy_link_button$can_share_QMARK_$$, $amp$components$threejs$copy_link_button$copy_link_button$$, $amp$components$threejs$mockup_footer$mockup_footer$$, $amp$components$threejs$mockup_hud$hud_header$$, $amp$components$threejs$mockup_hud$mockup_hud$$, $amp$components$threejs$parts_panel$parts_panel$$, $amp$components$threejs$selection_info_bar$selection_info_bar$$, $amp$hooks$use_atom_state$use_atom_state$$, $amp$views$mockup_view$root$$, 
$amp$views$mockup_view$display_firebase_data$$, $cljs$tools$reader$impl$utils$ws_rx$$;
$cljs$core$re_find$$ = function($matches$jscomp$3_re$jscomp$4$$, $s$jscomp$126$$) {
  if (typeof $s$jscomp$126$$ === "string") {
    return $matches$jscomp$3_re$jscomp$4$$ = $matches$jscomp$3_re$jscomp$4$$.exec($s$jscomp$126$$), $matches$jscomp$3_re$jscomp$4$$ == null ? null : $matches$jscomp$3_re$jscomp$4$$.length === 1 ? $matches$jscomp$3_re$jscomp$4$$[0] : $APP.$cljs$core$vec$$($matches$jscomp$3_re$jscomp$4$$);
  }
  throw new TypeError("re-find must match against a string.");
};
$amp$components$icons$DocumentIcon$$ = function($G__64057_JSCompiler_temp_const$jscomp$inline_3552_class$$jscomp$8_map__64054_map__64054__$1_props__41640__auto__$jscomp$4_vec__64051$$, $G__64062$jscomp$inline_3554_JSCompiler_inline_result$jscomp$inline_3553_maybe_ref__41641__auto__$jscomp$4$$) {
  $G__64057_JSCompiler_temp_const$jscomp$inline_3552_class$$jscomp$8_map__64054_map__64054__$1_props__41640__auto__$jscomp$4_vec__64051$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__64057_JSCompiler_temp_const$jscomp$inline_3552_class$$jscomp$8_map__64054_map__64054__$1_props__41640__auto__$jscomp$4_vec__64051$$), $G__64062$jscomp$inline_3554_JSCompiler_inline_result$jscomp$inline_3553_maybe_ref__41641__auto__$jscomp$4$$], 
  null);
  $G__64057_JSCompiler_temp_const$jscomp$inline_3552_class$$jscomp$8_map__64054_map__64054__$1_props__41640__auto__$jscomp$4_vec__64051$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__64057_JSCompiler_temp_const$jscomp$inline_3552_class$$jscomp$8_map__64054_map__64054__$1_props__41640__auto__$jscomp$4_vec__64051$$, 0, null);
  $G__64057_JSCompiler_temp_const$jscomp$inline_3552_class$$jscomp$8_map__64054_map__64054__$1_props__41640__auto__$jscomp$4_vec__64051$$ = $APP.$cljs$core$__destructure_map$$($G__64057_JSCompiler_temp_const$jscomp$inline_3552_class$$jscomp$8_map__64054_map__64054__$1_props__41640__auto__$jscomp$4_vec__64051$$);
  $G__64057_JSCompiler_temp_const$jscomp$inline_3552_class$$jscomp$8_map__64054_map__64054__$1_props__41640__auto__$jscomp$4_vec__64051$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__64057_JSCompiler_temp_const$jscomp$inline_3552_class$$jscomp$8_map__64054_map__64054__$1_props__41640__auto__$jscomp$4_vec__64051$$, $APP.$cljs$cst$67$class$$);
  $G__64057_JSCompiler_temp_const$jscomp$inline_3552_class$$jscomp$8_map__64054_map__64054__$1_props__41640__auto__$jscomp$4_vec__64051$$ = $APP.$helix$impl$props$normalize_class$$($G__64057_JSCompiler_temp_const$jscomp$inline_3552_class$$jscomp$8_map__64054_map__64054__$1_props__41640__auto__$jscomp$4_vec__64051$$);
  $G__64062$jscomp$inline_3554_JSCompiler_inline_result$jscomp$inline_3553_maybe_ref__41641__auto__$jscomp$4$$ = {strokeLinecap:"round", strokeLinejoin:"round", d:"M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5A3.375 3.375 0 0 0 6.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0 0 15 2.25h-1.5a2.251 2.251 0 0 0-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 0 0-9-9Z"};
  $G__64062$jscomp$inline_3554_JSCompiler_inline_result$jscomp$inline_3553_maybe_ref__41641__auto__$jscomp$4$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("path", $G__64062$jscomp$inline_3554_JSCompiler_inline_result$jscomp$inline_3553_maybe_ref__41641__auto__$jscomp$4$$) : $APP.$helix$core$jsx$$.call(null, "path", $G__64062$jscomp$inline_3554_JSCompiler_inline_result$jscomp$inline_3553_maybe_ref__41641__auto__$jscomp$4$$);
  $G__64057_JSCompiler_temp_const$jscomp$inline_3552_class$$jscomp$8_map__64054_map__64054__$1_props__41640__auto__$jscomp$4_vec__64051$$ = {xmlns:"http://www.w3.org/2000/svg", fill:"none", viewBox:"0 0 24 24", strokeWidth:1.5, stroke:"currentColor", className:$G__64057_JSCompiler_temp_const$jscomp$inline_3552_class$$jscomp$8_map__64054_map__64054__$1_props__41640__auto__$jscomp$4_vec__64051$$, children:$G__64062$jscomp$inline_3554_JSCompiler_inline_result$jscomp$inline_3553_maybe_ref__41641__auto__$jscomp$4$$};
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("svg", $G__64057_JSCompiler_temp_const$jscomp$inline_3552_class$$jscomp$8_map__64054_map__64054__$1_props__41640__auto__$jscomp$4_vec__64051$$) : $APP.$helix$core$jsx$$.call(null, "svg", $G__64057_JSCompiler_temp_const$jscomp$inline_3552_class$$jscomp$8_map__64054_map__64054__$1_props__41640__auto__$jscomp$4_vec__64051$$);
};
$amp$components$icons$CollapseIcon$$ = function($G__64079_JSCompiler_temp_const$jscomp$inline_3556_class$$jscomp$9_map__64076_map__64076__$1_props__41640__auto__$jscomp$5_vec__64073$$, $G__64084$jscomp$inline_3558_JSCompiler_inline_result$jscomp$inline_3557_maybe_ref__41641__auto__$jscomp$5$$) {
  $G__64079_JSCompiler_temp_const$jscomp$inline_3556_class$$jscomp$9_map__64076_map__64076__$1_props__41640__auto__$jscomp$5_vec__64073$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__64079_JSCompiler_temp_const$jscomp$inline_3556_class$$jscomp$9_map__64076_map__64076__$1_props__41640__auto__$jscomp$5_vec__64073$$), $G__64084$jscomp$inline_3558_JSCompiler_inline_result$jscomp$inline_3557_maybe_ref__41641__auto__$jscomp$5$$], 
  null);
  $G__64079_JSCompiler_temp_const$jscomp$inline_3556_class$$jscomp$9_map__64076_map__64076__$1_props__41640__auto__$jscomp$5_vec__64073$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__64079_JSCompiler_temp_const$jscomp$inline_3556_class$$jscomp$9_map__64076_map__64076__$1_props__41640__auto__$jscomp$5_vec__64073$$, 0, null);
  $G__64079_JSCompiler_temp_const$jscomp$inline_3556_class$$jscomp$9_map__64076_map__64076__$1_props__41640__auto__$jscomp$5_vec__64073$$ = $APP.$cljs$core$__destructure_map$$($G__64079_JSCompiler_temp_const$jscomp$inline_3556_class$$jscomp$9_map__64076_map__64076__$1_props__41640__auto__$jscomp$5_vec__64073$$);
  $G__64079_JSCompiler_temp_const$jscomp$inline_3556_class$$jscomp$9_map__64076_map__64076__$1_props__41640__auto__$jscomp$5_vec__64073$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__64079_JSCompiler_temp_const$jscomp$inline_3556_class$$jscomp$9_map__64076_map__64076__$1_props__41640__auto__$jscomp$5_vec__64073$$, $APP.$cljs$cst$67$class$$);
  $G__64079_JSCompiler_temp_const$jscomp$inline_3556_class$$jscomp$9_map__64076_map__64076__$1_props__41640__auto__$jscomp$5_vec__64073$$ = $APP.$helix$impl$props$normalize_class$$($G__64079_JSCompiler_temp_const$jscomp$inline_3556_class$$jscomp$9_map__64076_map__64076__$1_props__41640__auto__$jscomp$5_vec__64073$$);
  $G__64084$jscomp$inline_3558_JSCompiler_inline_result$jscomp$inline_3557_maybe_ref__41641__auto__$jscomp$5$$ = {strokeLinecap:"round", strokeLinejoin:"round", d:"M9 9V4.5M9 9H4.5M9 9 3.75 3.75M9 15v4.5M9 15H4.5M9 15l-5.25 5.25M15 9h4.5M15 9V4.5M15 9l5.25-5.25M15 15h4.5M15 15v4.5m0-4.5 5.25 5.25"};
  $G__64084$jscomp$inline_3558_JSCompiler_inline_result$jscomp$inline_3557_maybe_ref__41641__auto__$jscomp$5$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("path", $G__64084$jscomp$inline_3558_JSCompiler_inline_result$jscomp$inline_3557_maybe_ref__41641__auto__$jscomp$5$$) : $APP.$helix$core$jsx$$.call(null, "path", $G__64084$jscomp$inline_3558_JSCompiler_inline_result$jscomp$inline_3557_maybe_ref__41641__auto__$jscomp$5$$);
  $G__64079_JSCompiler_temp_const$jscomp$inline_3556_class$$jscomp$9_map__64076_map__64076__$1_props__41640__auto__$jscomp$5_vec__64073$$ = {xmlns:"http://www.w3.org/2000/svg", fill:"none", viewBox:"0 0 24 24", strokeWidth:1.5, stroke:"currentColor", className:$G__64079_JSCompiler_temp_const$jscomp$inline_3556_class$$jscomp$9_map__64076_map__64076__$1_props__41640__auto__$jscomp$5_vec__64073$$, children:$G__64084$jscomp$inline_3558_JSCompiler_inline_result$jscomp$inline_3557_maybe_ref__41641__auto__$jscomp$5$$};
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("svg", $G__64079_JSCompiler_temp_const$jscomp$inline_3556_class$$jscomp$9_map__64076_map__64076__$1_props__41640__auto__$jscomp$5_vec__64073$$) : $APP.$helix$core$jsx$$.call(null, "svg", $G__64079_JSCompiler_temp_const$jscomp$inline_3556_class$$jscomp$9_map__64076_map__64076__$1_props__41640__auto__$jscomp$5_vec__64073$$);
};
$amp$components$icons$ExpandIcon$$ = function($G__64109_JSCompiler_temp_const$jscomp$inline_3560_class$$jscomp$10_map__64107_map__64107__$1_props__41640__auto__$jscomp$6_vec__64104$$, $G__64113$jscomp$inline_3562_JSCompiler_inline_result$jscomp$inline_3561_maybe_ref__41641__auto__$jscomp$6$$) {
  $G__64109_JSCompiler_temp_const$jscomp$inline_3560_class$$jscomp$10_map__64107_map__64107__$1_props__41640__auto__$jscomp$6_vec__64104$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__64109_JSCompiler_temp_const$jscomp$inline_3560_class$$jscomp$10_map__64107_map__64107__$1_props__41640__auto__$jscomp$6_vec__64104$$), $G__64113$jscomp$inline_3562_JSCompiler_inline_result$jscomp$inline_3561_maybe_ref__41641__auto__$jscomp$6$$], 
  null);
  $G__64109_JSCompiler_temp_const$jscomp$inline_3560_class$$jscomp$10_map__64107_map__64107__$1_props__41640__auto__$jscomp$6_vec__64104$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__64109_JSCompiler_temp_const$jscomp$inline_3560_class$$jscomp$10_map__64107_map__64107__$1_props__41640__auto__$jscomp$6_vec__64104$$, 0, null);
  $G__64109_JSCompiler_temp_const$jscomp$inline_3560_class$$jscomp$10_map__64107_map__64107__$1_props__41640__auto__$jscomp$6_vec__64104$$ = $APP.$cljs$core$__destructure_map$$($G__64109_JSCompiler_temp_const$jscomp$inline_3560_class$$jscomp$10_map__64107_map__64107__$1_props__41640__auto__$jscomp$6_vec__64104$$);
  $G__64109_JSCompiler_temp_const$jscomp$inline_3560_class$$jscomp$10_map__64107_map__64107__$1_props__41640__auto__$jscomp$6_vec__64104$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__64109_JSCompiler_temp_const$jscomp$inline_3560_class$$jscomp$10_map__64107_map__64107__$1_props__41640__auto__$jscomp$6_vec__64104$$, $APP.$cljs$cst$67$class$$);
  $G__64109_JSCompiler_temp_const$jscomp$inline_3560_class$$jscomp$10_map__64107_map__64107__$1_props__41640__auto__$jscomp$6_vec__64104$$ = $APP.$helix$impl$props$normalize_class$$($G__64109_JSCompiler_temp_const$jscomp$inline_3560_class$$jscomp$10_map__64107_map__64107__$1_props__41640__auto__$jscomp$6_vec__64104$$);
  $G__64113$jscomp$inline_3562_JSCompiler_inline_result$jscomp$inline_3561_maybe_ref__41641__auto__$jscomp$6$$ = {strokeLinecap:"round", strokeLinejoin:"round", d:"M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15"};
  $G__64113$jscomp$inline_3562_JSCompiler_inline_result$jscomp$inline_3561_maybe_ref__41641__auto__$jscomp$6$$ = $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("path", $G__64113$jscomp$inline_3562_JSCompiler_inline_result$jscomp$inline_3561_maybe_ref__41641__auto__$jscomp$6$$) : $APP.$helix$core$jsx$$.call(null, "path", $G__64113$jscomp$inline_3562_JSCompiler_inline_result$jscomp$inline_3561_maybe_ref__41641__auto__$jscomp$6$$);
  $G__64109_JSCompiler_temp_const$jscomp$inline_3560_class$$jscomp$10_map__64107_map__64107__$1_props__41640__auto__$jscomp$6_vec__64104$$ = {xmlns:"http://www.w3.org/2000/svg", fill:"none", viewBox:"0 0 24 24", strokeWidth:1.5, stroke:"currentColor", className:$G__64109_JSCompiler_temp_const$jscomp$inline_3560_class$$jscomp$10_map__64107_map__64107__$1_props__41640__auto__$jscomp$6_vec__64104$$, children:$G__64113$jscomp$inline_3562_JSCompiler_inline_result$jscomp$inline_3561_maybe_ref__41641__auto__$jscomp$6$$};
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("svg", $G__64109_JSCompiler_temp_const$jscomp$inline_3560_class$$jscomp$10_map__64107_map__64107__$1_props__41640__auto__$jscomp$6_vec__64104$$) : $APP.$helix$core$jsx$$.call(null, "svg", $G__64109_JSCompiler_temp_const$jscomp$inline_3560_class$$jscomp$10_map__64107_map__64107__$1_props__41640__auto__$jscomp$6_vec__64104$$);
};
$cljs$core$char$0$$ = function($x$jscomp$233$$) {
  if (typeof $x$jscomp$233$$ === "number") {
    return String.fromCharCode($x$jscomp$233$$);
  }
  if (typeof $x$jscomp$233$$ === "string" && $x$jscomp$233$$.length === 1) {
    return $x$jscomp$233$$;
  }
  throw Error("Argument to char must be a character or number");
};
$cljs$core$add_watch$$ = function($iref$jscomp$4$$, $key$jscomp$189$$, $f$jscomp$305$$) {
  $APP.$cljs$core$_add_watch$$($iref$jscomp$4$$, $key$jscomp$189$$, $f$jscomp$305$$);
};
$cljs$core$take_nth$cljs$0core$0IFn$0_invoke$0arity$02$$ = function($n$jscomp$157$$, $coll$jscomp$745$$) {
  return new $APP.$cljs$core$LazySeq$$(null, function() {
    var $temp__5823__auto__$jscomp$27$$ = $APP.$cljs$core$seq$$($coll$jscomp$745$$);
    return $temp__5823__auto__$jscomp$27$$ ? $APP.$cljs$core$cons$$($APP.$cljs$core$first$$($temp__5823__auto__$jscomp$27$$), $cljs$core$take_nth$cljs$0core$0IFn$0_invoke$0arity$02$$($n$jscomp$157$$, $APP.$cljs$core$drop$cljs$0core$0IFn$0_invoke$0arity$02$$($n$jscomp$157$$, $temp__5823__auto__$jscomp$27$$))) : null;
  }, null, null);
};
$cljs$core$frequencies$$ = function($coll$jscomp$748$$) {
  return $APP.$cljs$core$persistent_BANG_$$($APP.$cljs$core$reduce$cljs$0core$0IFn$0_invoke$0arity$03$$(function($counts$$, $x$jscomp$600$$) {
    return $APP.$cljs$core$assoc_BANG_$$.$cljs$core$IFn$_invoke$arity$3$($counts$$, $x$jscomp$600$$, $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$03$$($counts$$, $x$jscomp$600$$, 0) + 1);
  }, $APP.$cljs$core$_as_transient$$($APP.$cljs$core$PersistentArrayMap$EMPTY$$), $coll$jscomp$748$$));
};
$cljs$tools$reader$impl$utils$whitespace_QMARK_$$ = function($ch$jscomp$7$$) {
  return $ch$jscomp$7$$ == null ? null : $ch$jscomp$7$$ === "," ? !0 : $cljs$tools$reader$impl$utils$ws_rx$$.test($ch$jscomp$7$$);
};
$cljs$tools$reader$impl$utils$numeric_QMARK_$$ = function($ch$jscomp$8$$) {
  return $ch$jscomp$8$$ == null ? null : !/[^0-9]/.test($ch$jscomp$8$$);
};
$cljs$tools$reader$impl$utils$namespace_keys$$ = function($ns$jscomp$16$$, $keys$jscomp$18$$) {
  return function $cljs$tools$reader$impl$utils$namespace_keys_$_iter__48160$$($s__48161$$) {
    return new $APP.$cljs$core$LazySeq$$(null, function() {
      for (;;) {
        var $s__48161__$2_temp__5823__auto__$jscomp$40$$ = $APP.$cljs$core$seq$$($s__48161$$);
        if ($s__48161__$2_temp__5823__auto__$jscomp$40$$) {
          if ($APP.$cljs$core$chunked_seq_QMARK_$$($s__48161__$2_temp__5823__auto__$jscomp$40$$)) {
            var $c__5626__auto__$$ = $APP.$cljs$core$_chunked_first$$($s__48161__$2_temp__5823__auto__$jscomp$40$$), $size__5627__auto__$$ = $APP.$cljs$core$count$$($c__5626__auto__$$), $b__48163$$ = $APP.$cljs$core$chunk_buffer$$($size__5627__auto__$$);
            return function() {
              for (var $i__48162$$ = 0;;) {
                if ($i__48162$$ < $size__5627__auto__$$) {
                  var $JSCompiler_temp$jscomp$411_key$jscomp$205$$ = $APP.$cljs$core$_nth$$($c__5626__auto__$$, $i__48162$$), $JSCompiler_temp_const$jscomp$410$$ = $b__48163$$;
                  if ($JSCompiler_temp$jscomp$411_key$jscomp$205$$ instanceof $APP.$cljs$core$Symbol$$ || $JSCompiler_temp$jscomp$411_key$jscomp$205$$ instanceof $APP.$cljs$core$Keyword$$) {
                    var $key_name$jscomp$inline_2068_vec__48169$jscomp$inline_2066$$ = $APP.$cljs$core$juxt$cljs$0core$0IFn$0_invoke$0arity$02$$($APP.$cljs$core$namespace$$, $APP.$cljs$core$name$$)($JSCompiler_temp$jscomp$411_key$jscomp$205$$), $key_ns$jscomp$inline_2067$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($key_name$jscomp$inline_2068_vec__48169$jscomp$inline_2066$$, 0, null);
                    $key_name$jscomp$inline_2068_vec__48169$jscomp$inline_2066$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($key_name$jscomp$inline_2068_vec__48169$jscomp$inline_2066$$, 1, null);
                    var $__GT_key$jscomp$inline_2069$$ = $JSCompiler_temp$jscomp$411_key$jscomp$205$$ instanceof $APP.$cljs$core$Symbol$$ ? $APP.$cljs$core$symbol$$ : $APP.$cljs$core$keyword$$;
                    $JSCompiler_temp$jscomp$411_key$jscomp$205$$ = $key_ns$jscomp$inline_2067$$ == null ? $__GT_key$jscomp$inline_2069$$.$cljs$core$IFn$_invoke$arity$2$ ? $__GT_key$jscomp$inline_2069$$.$cljs$core$IFn$_invoke$arity$2$($ns$jscomp$16$$, $key_name$jscomp$inline_2068_vec__48169$jscomp$inline_2066$$) : $__GT_key$jscomp$inline_2069$$.call(null, $ns$jscomp$16$$, $key_name$jscomp$inline_2068_vec__48169$jscomp$inline_2066$$) : $APP.$cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$("_", $key_ns$jscomp$inline_2067$$) ? 
                    $__GT_key$jscomp$inline_2069$$.$cljs$core$IFn$_invoke$arity$1$ ? $__GT_key$jscomp$inline_2069$$.$cljs$core$IFn$_invoke$arity$1$($key_name$jscomp$inline_2068_vec__48169$jscomp$inline_2066$$) : $__GT_key$jscomp$inline_2069$$.call(null, $key_name$jscomp$inline_2068_vec__48169$jscomp$inline_2066$$) : $JSCompiler_temp$jscomp$411_key$jscomp$205$$;
                  }
                  $JSCompiler_temp_const$jscomp$410$$.add($JSCompiler_temp$jscomp$411_key$jscomp$205$$);
                  $i__48162$$ += 1;
                } else {
                  return !0;
                }
              }
            }() ? $APP.$cljs$core$chunk_cons$$($APP.$cljs$core$chunk$$($b__48163$$), $cljs$tools$reader$impl$utils$namespace_keys_$_iter__48160$$($APP.$cljs$core$_chunked_rest$$($s__48161__$2_temp__5823__auto__$jscomp$40$$))) : $APP.$cljs$core$chunk_cons$$($APP.$cljs$core$chunk$$($b__48163$$), null);
          }
          var $key$jscomp$204$$ = $APP.$cljs$core$first$$($s__48161__$2_temp__5823__auto__$jscomp$40$$);
          return $APP.$cljs$core$cons$$($key$jscomp$204$$ instanceof $APP.$cljs$core$Symbol$$ || $key$jscomp$204$$ instanceof $APP.$cljs$core$Keyword$$ ? function() {
            var $key_name$jscomp$1_vec__48172$$ = $APP.$cljs$core$juxt$cljs$0core$0IFn$0_invoke$0arity$02$$($APP.$cljs$core$namespace$$, $APP.$cljs$core$name$$)($key$jscomp$204$$), $key_ns$jscomp$1$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($key_name$jscomp$1_vec__48172$$, 0, null);
            $key_name$jscomp$1_vec__48172$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($key_name$jscomp$1_vec__48172$$, 1, null);
            var $__GT_key$jscomp$1$$ = $key$jscomp$204$$ instanceof $APP.$cljs$core$Symbol$$ ? $APP.$cljs$core$symbol$$ : $APP.$cljs$core$keyword$$;
            return $key_ns$jscomp$1$$ == null ? $__GT_key$jscomp$1$$.$cljs$core$IFn$_invoke$arity$2$ ? $__GT_key$jscomp$1$$.$cljs$core$IFn$_invoke$arity$2$($ns$jscomp$16$$, $key_name$jscomp$1_vec__48172$$) : $__GT_key$jscomp$1$$.call(null, $ns$jscomp$16$$, $key_name$jscomp$1_vec__48172$$) : $APP.$cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$("_", $key_ns$jscomp$1$$) ? $__GT_key$jscomp$1$$.$cljs$core$IFn$_invoke$arity$1$ ? $__GT_key$jscomp$1$$.$cljs$core$IFn$_invoke$arity$1$($key_name$jscomp$1_vec__48172$$) : 
            $__GT_key$jscomp$1$$.call(null, $key_name$jscomp$1_vec__48172$$) : $key$jscomp$204$$;
          }() : $key$jscomp$204$$, $cljs$tools$reader$impl$utils$namespace_keys_$_iter__48160$$($APP.$cljs$core$rest$$($s__48161__$2_temp__5823__auto__$jscomp$40$$)));
        }
        return null;
      }
    }, null, null);
  }($keys$jscomp$18$$);
};
$cljs$tools$reader$impl$utils$char_code$$ = function($ch$jscomp$9_code$jscomp$3$$, $base$jscomp$8$$) {
  $ch$jscomp$9_code$jscomp$3$$ = parseInt($ch$jscomp$9_code$jscomp$3$$, $base$jscomp$8$$);
  return $APP.$cljs$core$truth_$$(isNaN($ch$jscomp$9_code$jscomp$3$$)) ? -1 : $ch$jscomp$9_code$jscomp$3$$;
};
$cljs$tools$reader$reader_types$read_char$$ = function($JSCompiler_temp$jscomp$412_reader$jscomp$1$$) {
  if ($JSCompiler_temp$jscomp$412_reader$jscomp$1$$ != null && $JSCompiler_temp$jscomp$412_reader$jscomp$1$$.$cljs$tools$reader$reader_types$Reader$read_char$arity$1$ != null) {
    $JSCompiler_temp$jscomp$412_reader$jscomp$1$$ = $JSCompiler_temp$jscomp$412_reader$jscomp$1$$.$cljs$tools$reader$reader_types$Reader$read_char$arity$1$($JSCompiler_temp$jscomp$412_reader$jscomp$1$$);
  } else {
    var $m__5497__auto__$jscomp$inline_2073_m__5499__auto__$jscomp$inline_2072$$ = $cljs$tools$reader$reader_types$read_char$$[$APP.$goog$typeOf$$($JSCompiler_temp$jscomp$412_reader$jscomp$1$$ == null ? null : $JSCompiler_temp$jscomp$412_reader$jscomp$1$$)];
    if ($m__5497__auto__$jscomp$inline_2073_m__5499__auto__$jscomp$inline_2072$$ != null) {
      $JSCompiler_temp$jscomp$412_reader$jscomp$1$$ = $m__5497__auto__$jscomp$inline_2073_m__5499__auto__$jscomp$inline_2072$$.$cljs$core$IFn$_invoke$arity$1$ ? $m__5497__auto__$jscomp$inline_2073_m__5499__auto__$jscomp$inline_2072$$.$cljs$core$IFn$_invoke$arity$1$($JSCompiler_temp$jscomp$412_reader$jscomp$1$$) : $m__5497__auto__$jscomp$inline_2073_m__5499__auto__$jscomp$inline_2072$$.call(null, $JSCompiler_temp$jscomp$412_reader$jscomp$1$$);
    } else {
      if ($m__5497__auto__$jscomp$inline_2073_m__5499__auto__$jscomp$inline_2072$$ = $cljs$tools$reader$reader_types$read_char$$._, $m__5497__auto__$jscomp$inline_2073_m__5499__auto__$jscomp$inline_2072$$ != null) {
        $JSCompiler_temp$jscomp$412_reader$jscomp$1$$ = $m__5497__auto__$jscomp$inline_2073_m__5499__auto__$jscomp$inline_2072$$.$cljs$core$IFn$_invoke$arity$1$ ? $m__5497__auto__$jscomp$inline_2073_m__5499__auto__$jscomp$inline_2072$$.$cljs$core$IFn$_invoke$arity$1$($JSCompiler_temp$jscomp$412_reader$jscomp$1$$) : $m__5497__auto__$jscomp$inline_2073_m__5499__auto__$jscomp$inline_2072$$.call(null, $JSCompiler_temp$jscomp$412_reader$jscomp$1$$);
      } else {
        throw $APP.$cljs$core$missing_protocol$$("Reader.read-char", $JSCompiler_temp$jscomp$412_reader$jscomp$1$$);
      }
    }
  }
  return $JSCompiler_temp$jscomp$412_reader$jscomp$1$$;
};
$cljs$tools$reader$reader_types$peek_char$$ = function($JSCompiler_temp$jscomp$413_reader$jscomp$3$$) {
  if ($JSCompiler_temp$jscomp$413_reader$jscomp$3$$ != null && $JSCompiler_temp$jscomp$413_reader$jscomp$3$$.$cljs$tools$reader$reader_types$Reader$peek_char$arity$1$ != null) {
    $JSCompiler_temp$jscomp$413_reader$jscomp$3$$ = $JSCompiler_temp$jscomp$413_reader$jscomp$3$$.$cljs$tools$reader$reader_types$Reader$peek_char$arity$1$($JSCompiler_temp$jscomp$413_reader$jscomp$3$$);
  } else {
    var $m__5497__auto__$jscomp$inline_2077_m__5499__auto__$jscomp$inline_2076$$ = $cljs$tools$reader$reader_types$peek_char$$[$APP.$goog$typeOf$$($JSCompiler_temp$jscomp$413_reader$jscomp$3$$ == null ? null : $JSCompiler_temp$jscomp$413_reader$jscomp$3$$)];
    if ($m__5497__auto__$jscomp$inline_2077_m__5499__auto__$jscomp$inline_2076$$ != null) {
      $JSCompiler_temp$jscomp$413_reader$jscomp$3$$ = $m__5497__auto__$jscomp$inline_2077_m__5499__auto__$jscomp$inline_2076$$.$cljs$core$IFn$_invoke$arity$1$ ? $m__5497__auto__$jscomp$inline_2077_m__5499__auto__$jscomp$inline_2076$$.$cljs$core$IFn$_invoke$arity$1$($JSCompiler_temp$jscomp$413_reader$jscomp$3$$) : $m__5497__auto__$jscomp$inline_2077_m__5499__auto__$jscomp$inline_2076$$.call(null, $JSCompiler_temp$jscomp$413_reader$jscomp$3$$);
    } else {
      if ($m__5497__auto__$jscomp$inline_2077_m__5499__auto__$jscomp$inline_2076$$ = $cljs$tools$reader$reader_types$peek_char$$._, $m__5497__auto__$jscomp$inline_2077_m__5499__auto__$jscomp$inline_2076$$ != null) {
        $JSCompiler_temp$jscomp$413_reader$jscomp$3$$ = $m__5497__auto__$jscomp$inline_2077_m__5499__auto__$jscomp$inline_2076$$.$cljs$core$IFn$_invoke$arity$1$ ? $m__5497__auto__$jscomp$inline_2077_m__5499__auto__$jscomp$inline_2076$$.$cljs$core$IFn$_invoke$arity$1$($JSCompiler_temp$jscomp$413_reader$jscomp$3$$) : $m__5497__auto__$jscomp$inline_2077_m__5499__auto__$jscomp$inline_2076$$.call(null, $JSCompiler_temp$jscomp$413_reader$jscomp$3$$);
      } else {
        throw $APP.$cljs$core$missing_protocol$$("Reader.peek-char", $JSCompiler_temp$jscomp$413_reader$jscomp$3$$);
      }
    }
  }
  return $JSCompiler_temp$jscomp$413_reader$jscomp$3$$;
};
$cljs$tools$reader$reader_types$unread$$ = function($reader$jscomp$5$$, $ch$jscomp$11$$) {
  if ($reader$jscomp$5$$ != null && $reader$jscomp$5$$.$cljs$tools$reader$reader_types$IPushbackReader$unread$arity$2$ != null) {
    $reader$jscomp$5$$.$cljs$tools$reader$reader_types$IPushbackReader$unread$arity$2$($reader$jscomp$5$$, $ch$jscomp$11$$);
  } else {
    var $m__5497__auto__$jscomp$inline_2082_m__5499__auto__$jscomp$inline_2081$$ = $cljs$tools$reader$reader_types$unread$$[$APP.$goog$typeOf$$($reader$jscomp$5$$ == null ? null : $reader$jscomp$5$$)];
    if ($m__5497__auto__$jscomp$inline_2082_m__5499__auto__$jscomp$inline_2081$$ != null) {
      $m__5497__auto__$jscomp$inline_2082_m__5499__auto__$jscomp$inline_2081$$.$cljs$core$IFn$_invoke$arity$2$ ? $m__5497__auto__$jscomp$inline_2082_m__5499__auto__$jscomp$inline_2081$$.$cljs$core$IFn$_invoke$arity$2$($reader$jscomp$5$$, $ch$jscomp$11$$) : $m__5497__auto__$jscomp$inline_2082_m__5499__auto__$jscomp$inline_2081$$.call(null, $reader$jscomp$5$$, $ch$jscomp$11$$);
    } else {
      if ($m__5497__auto__$jscomp$inline_2082_m__5499__auto__$jscomp$inline_2081$$ = $cljs$tools$reader$reader_types$unread$$._, $m__5497__auto__$jscomp$inline_2082_m__5499__auto__$jscomp$inline_2081$$ != null) {
        $m__5497__auto__$jscomp$inline_2082_m__5499__auto__$jscomp$inline_2081$$.$cljs$core$IFn$_invoke$arity$2$ ? $m__5497__auto__$jscomp$inline_2082_m__5499__auto__$jscomp$inline_2081$$.$cljs$core$IFn$_invoke$arity$2$($reader$jscomp$5$$, $ch$jscomp$11$$) : $m__5497__auto__$jscomp$inline_2082_m__5499__auto__$jscomp$inline_2081$$.call(null, $reader$jscomp$5$$, $ch$jscomp$11$$);
      } else {
        throw $APP.$cljs$core$missing_protocol$$("IPushbackReader.unread", $reader$jscomp$5$$);
      }
    }
  }
};
$cljs$tools$reader$reader_types$get_line_number$$ = function($JSCompiler_temp$jscomp$415_reader$jscomp$7$$) {
  if ($JSCompiler_temp$jscomp$415_reader$jscomp$7$$ != null && $JSCompiler_temp$jscomp$415_reader$jscomp$7$$.$cljs$tools$reader$reader_types$IndexingReader$get_line_number$arity$1$ != null) {
    $JSCompiler_temp$jscomp$415_reader$jscomp$7$$ = $JSCompiler_temp$jscomp$415_reader$jscomp$7$$.$cljs$tools$reader$reader_types$IndexingReader$get_line_number$arity$1$($JSCompiler_temp$jscomp$415_reader$jscomp$7$$);
  } else {
    var $m__5497__auto__$jscomp$inline_2086_m__5499__auto__$jscomp$inline_2085$$ = $cljs$tools$reader$reader_types$get_line_number$$[$APP.$goog$typeOf$$($JSCompiler_temp$jscomp$415_reader$jscomp$7$$ == null ? null : $JSCompiler_temp$jscomp$415_reader$jscomp$7$$)];
    if ($m__5497__auto__$jscomp$inline_2086_m__5499__auto__$jscomp$inline_2085$$ != null) {
      $JSCompiler_temp$jscomp$415_reader$jscomp$7$$ = $m__5497__auto__$jscomp$inline_2086_m__5499__auto__$jscomp$inline_2085$$.$cljs$core$IFn$_invoke$arity$1$ ? $m__5497__auto__$jscomp$inline_2086_m__5499__auto__$jscomp$inline_2085$$.$cljs$core$IFn$_invoke$arity$1$($JSCompiler_temp$jscomp$415_reader$jscomp$7$$) : $m__5497__auto__$jscomp$inline_2086_m__5499__auto__$jscomp$inline_2085$$.call(null, $JSCompiler_temp$jscomp$415_reader$jscomp$7$$);
    } else {
      if ($m__5497__auto__$jscomp$inline_2086_m__5499__auto__$jscomp$inline_2085$$ = $cljs$tools$reader$reader_types$get_line_number$$._, $m__5497__auto__$jscomp$inline_2086_m__5499__auto__$jscomp$inline_2085$$ != null) {
        $JSCompiler_temp$jscomp$415_reader$jscomp$7$$ = $m__5497__auto__$jscomp$inline_2086_m__5499__auto__$jscomp$inline_2085$$.$cljs$core$IFn$_invoke$arity$1$ ? $m__5497__auto__$jscomp$inline_2086_m__5499__auto__$jscomp$inline_2085$$.$cljs$core$IFn$_invoke$arity$1$($JSCompiler_temp$jscomp$415_reader$jscomp$7$$) : $m__5497__auto__$jscomp$inline_2086_m__5499__auto__$jscomp$inline_2085$$.call(null, $JSCompiler_temp$jscomp$415_reader$jscomp$7$$);
      } else {
        throw $APP.$cljs$core$missing_protocol$$("IndexingReader.get-line-number", $JSCompiler_temp$jscomp$415_reader$jscomp$7$$);
      }
    }
  }
  return $JSCompiler_temp$jscomp$415_reader$jscomp$7$$;
};
$cljs$tools$reader$reader_types$get_column_number$$ = function($JSCompiler_temp$jscomp$416_reader$jscomp$9$$) {
  if ($JSCompiler_temp$jscomp$416_reader$jscomp$9$$ != null && $JSCompiler_temp$jscomp$416_reader$jscomp$9$$.$cljs$tools$reader$reader_types$IndexingReader$get_column_number$arity$1$ != null) {
    $JSCompiler_temp$jscomp$416_reader$jscomp$9$$ = $JSCompiler_temp$jscomp$416_reader$jscomp$9$$.$cljs$tools$reader$reader_types$IndexingReader$get_column_number$arity$1$($JSCompiler_temp$jscomp$416_reader$jscomp$9$$);
  } else {
    var $m__5497__auto__$jscomp$inline_2090_m__5499__auto__$jscomp$inline_2089$$ = $cljs$tools$reader$reader_types$get_column_number$$[$APP.$goog$typeOf$$($JSCompiler_temp$jscomp$416_reader$jscomp$9$$ == null ? null : $JSCompiler_temp$jscomp$416_reader$jscomp$9$$)];
    if ($m__5497__auto__$jscomp$inline_2090_m__5499__auto__$jscomp$inline_2089$$ != null) {
      $JSCompiler_temp$jscomp$416_reader$jscomp$9$$ = $m__5497__auto__$jscomp$inline_2090_m__5499__auto__$jscomp$inline_2089$$.$cljs$core$IFn$_invoke$arity$1$ ? $m__5497__auto__$jscomp$inline_2090_m__5499__auto__$jscomp$inline_2089$$.$cljs$core$IFn$_invoke$arity$1$($JSCompiler_temp$jscomp$416_reader$jscomp$9$$) : $m__5497__auto__$jscomp$inline_2090_m__5499__auto__$jscomp$inline_2089$$.call(null, $JSCompiler_temp$jscomp$416_reader$jscomp$9$$);
    } else {
      if ($m__5497__auto__$jscomp$inline_2090_m__5499__auto__$jscomp$inline_2089$$ = $cljs$tools$reader$reader_types$get_column_number$$._, $m__5497__auto__$jscomp$inline_2090_m__5499__auto__$jscomp$inline_2089$$ != null) {
        $JSCompiler_temp$jscomp$416_reader$jscomp$9$$ = $m__5497__auto__$jscomp$inline_2090_m__5499__auto__$jscomp$inline_2089$$.$cljs$core$IFn$_invoke$arity$1$ ? $m__5497__auto__$jscomp$inline_2090_m__5499__auto__$jscomp$inline_2089$$.$cljs$core$IFn$_invoke$arity$1$($JSCompiler_temp$jscomp$416_reader$jscomp$9$$) : $m__5497__auto__$jscomp$inline_2090_m__5499__auto__$jscomp$inline_2089$$.call(null, $JSCompiler_temp$jscomp$416_reader$jscomp$9$$);
      } else {
        throw $APP.$cljs$core$missing_protocol$$("IndexingReader.get-column-number", $JSCompiler_temp$jscomp$416_reader$jscomp$9$$);
      }
    }
  }
  return $JSCompiler_temp$jscomp$416_reader$jscomp$9$$;
};
$cljs$tools$reader$reader_types$get_file_name$$ = function($JSCompiler_temp$jscomp$417_reader$jscomp$11$$) {
  if ($JSCompiler_temp$jscomp$417_reader$jscomp$11$$ != null && $JSCompiler_temp$jscomp$417_reader$jscomp$11$$.$cljs$tools$reader$reader_types$IndexingReader$get_file_name$arity$1$ != null) {
    $JSCompiler_temp$jscomp$417_reader$jscomp$11$$ = $JSCompiler_temp$jscomp$417_reader$jscomp$11$$.$cljs$tools$reader$reader_types$IndexingReader$get_file_name$arity$1$($JSCompiler_temp$jscomp$417_reader$jscomp$11$$);
  } else {
    var $m__5497__auto__$jscomp$inline_2094_m__5499__auto__$jscomp$inline_2093$$ = $cljs$tools$reader$reader_types$get_file_name$$[$APP.$goog$typeOf$$($JSCompiler_temp$jscomp$417_reader$jscomp$11$$ == null ? null : $JSCompiler_temp$jscomp$417_reader$jscomp$11$$)];
    if ($m__5497__auto__$jscomp$inline_2094_m__5499__auto__$jscomp$inline_2093$$ != null) {
      $JSCompiler_temp$jscomp$417_reader$jscomp$11$$ = $m__5497__auto__$jscomp$inline_2094_m__5499__auto__$jscomp$inline_2093$$.$cljs$core$IFn$_invoke$arity$1$ ? $m__5497__auto__$jscomp$inline_2094_m__5499__auto__$jscomp$inline_2093$$.$cljs$core$IFn$_invoke$arity$1$($JSCompiler_temp$jscomp$417_reader$jscomp$11$$) : $m__5497__auto__$jscomp$inline_2094_m__5499__auto__$jscomp$inline_2093$$.call(null, $JSCompiler_temp$jscomp$417_reader$jscomp$11$$);
    } else {
      if ($m__5497__auto__$jscomp$inline_2094_m__5499__auto__$jscomp$inline_2093$$ = $cljs$tools$reader$reader_types$get_file_name$$._, $m__5497__auto__$jscomp$inline_2094_m__5499__auto__$jscomp$inline_2093$$ != null) {
        $JSCompiler_temp$jscomp$417_reader$jscomp$11$$ = $m__5497__auto__$jscomp$inline_2094_m__5499__auto__$jscomp$inline_2093$$.$cljs$core$IFn$_invoke$arity$1$ ? $m__5497__auto__$jscomp$inline_2094_m__5499__auto__$jscomp$inline_2093$$.$cljs$core$IFn$_invoke$arity$1$($JSCompiler_temp$jscomp$417_reader$jscomp$11$$) : $m__5497__auto__$jscomp$inline_2094_m__5499__auto__$jscomp$inline_2093$$.call(null, $JSCompiler_temp$jscomp$417_reader$jscomp$11$$);
      } else {
        throw $APP.$cljs$core$missing_protocol$$("IndexingReader.get-file-name", $JSCompiler_temp$jscomp$417_reader$jscomp$11$$);
      }
    }
  }
  return $JSCompiler_temp$jscomp$417_reader$jscomp$11$$;
};
$cljs$tools$reader$reader_types$StringReader$$ = function($s$jscomp$167$$, $s_len$$) {
  this.s = $s$jscomp$167$$;
  this.$s_len$ = $s_len$$;
  this.$s_pos$ = 0;
};
$cljs$tools$reader$reader_types$PushbackReader$$ = function($rdr$$) {
  a: {
    var $a$jscomp$inline_3444_buf$jscomp$9$$ = Array(1);
    if ($APP.$cljs$core$seq_QMARK_$$(null)) {
      for (var $G__49154$jscomp$inline_3447_i$jscomp$inline_3445_i_49157$jscomp$inline_3449$$ = 0, $G__49155$jscomp$inline_3448_s__$1$jscomp$inline_3446$$ = $APP.$cljs$core$seq$$(null);;) {
        if ($G__49155$jscomp$inline_3448_s__$1$jscomp$inline_3446$$ && $G__49154$jscomp$inline_3447_i$jscomp$inline_3445_i_49157$jscomp$inline_3449$$ < 1) {
          $a$jscomp$inline_3444_buf$jscomp$9$$[$G__49154$jscomp$inline_3447_i$jscomp$inline_3445_i_49157$jscomp$inline_3449$$] = $APP.$cljs$core$first$$($G__49155$jscomp$inline_3448_s__$1$jscomp$inline_3446$$), $G__49154$jscomp$inline_3447_i$jscomp$inline_3445_i_49157$jscomp$inline_3449$$ += 1, $G__49155$jscomp$inline_3448_s__$1$jscomp$inline_3446$$ = $APP.$cljs$core$next$$($G__49155$jscomp$inline_3448_s__$1$jscomp$inline_3446$$);
        } else {
          break a;
        }
      }
      $a$jscomp$inline_3444_buf$jscomp$9$$ = void 0;
    } else {
      for ($G__49154$jscomp$inline_3447_i$jscomp$inline_3445_i_49157$jscomp$inline_3449$$ = 0;;) {
        if ($G__49154$jscomp$inline_3447_i$jscomp$inline_3445_i_49157$jscomp$inline_3449$$ < 1) {
          $a$jscomp$inline_3444_buf$jscomp$9$$[$G__49154$jscomp$inline_3447_i$jscomp$inline_3445_i_49157$jscomp$inline_3449$$] = null, $G__49154$jscomp$inline_3447_i$jscomp$inline_3445_i_49157$jscomp$inline_3449$$ += 1;
        } else {
          break;
        }
      }
    }
  }
  this.$rdr$ = $rdr$$;
  this.buf = $a$jscomp$inline_3444_buf$jscomp$9$$;
  this.$buf_pos$ = this.$buf_len$ = 1;
};
$cljs$tools$reader$reader_types$indexing_reader_QMARK_$$ = function($rdr$jscomp$7$$) {
  return $rdr$jscomp$7$$ != null ? $APP.$cljs$core$PROTOCOL_SENTINEL$$ === $rdr$jscomp$7$$.$cljs$tools$reader$reader_types$IndexingReader$$ ? !0 : !1 : !1;
};
$cljs$tools$reader$impl$inspect$inspect$cljs$0core$0IFn$0_invoke$0arity$01$$ = function($x$jscomp$729$$) {
  return $APP.$cljs$tools$reader$impl$inspect$inspect_STAR_$$.$cljs$core$IFn$_invoke$arity$2$(!1, $x$jscomp$729$$);
};
$cljs$tools$reader$impl$errors$throw_ex$cljs$0core$0IFn$0_invoke$0arity$0variadic$$ = function($details$jscomp$2_rdr$jscomp$12$$, $details$jscomp$inline_2853_ex_type$jscomp$1_line$jscomp$12_msg2$$, $full_msg_msg$jscomp$18$$) {
  $details$jscomp$inline_2853_ex_type$jscomp$1_line$jscomp$12_msg2$$ = new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$25$type$$, $APP.$cljs$cst$138$reader_exception$$, $APP.$cljs$cst$139$ex_kind$$, $details$jscomp$inline_2853_ex_type$jscomp$1_line$jscomp$12_msg2$$], null);
  $details$jscomp$2_rdr$jscomp$12$$ = $cljs$tools$reader$reader_types$indexing_reader_QMARK_$$($details$jscomp$2_rdr$jscomp$12$$) ? $APP.$cljs$core$assoc$$.$cljs$core$IFn$_invoke$arity$variadic$($details$jscomp$inline_2853_ex_type$jscomp$1_line$jscomp$12_msg2$$, $APP.$cljs$cst$140$file$$, $cljs$tools$reader$reader_types$get_file_name$$($details$jscomp$2_rdr$jscomp$12$$), $APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$cljs$cst$141$line$$, $cljs$tools$reader$reader_types$get_line_number$$($details$jscomp$2_rdr$jscomp$12$$), 
  $APP.$cljs$cst$142$col$$, $cljs$tools$reader$reader_types$get_column_number$$($details$jscomp$2_rdr$jscomp$12$$)])) : $details$jscomp$inline_2853_ex_type$jscomp$1_line$jscomp$12_msg2$$;
  var $file$jscomp$1_msg1$$ = $APP.$cljs$cst$140$file$$.$cljs$core$IFn$_invoke$arity$1$($details$jscomp$2_rdr$jscomp$12$$);
  $details$jscomp$inline_2853_ex_type$jscomp$1_line$jscomp$12_msg2$$ = $APP.$cljs$cst$141$line$$.$cljs$core$IFn$_invoke$arity$1$($details$jscomp$2_rdr$jscomp$12$$);
  var $col$jscomp$17$$ = $APP.$cljs$cst$142$col$$.$cljs$core$IFn$_invoke$arity$1$($details$jscomp$2_rdr$jscomp$12$$);
  $file$jscomp$1_msg1$$ = $APP.$cljs$core$truth_$$($file$jscomp$1_msg1$$) ? "" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($file$jscomp$1_msg1$$) + " " : null;
  $details$jscomp$inline_2853_ex_type$jscomp$1_line$jscomp$12_msg2$$ = $APP.$cljs$core$truth_$$($details$jscomp$inline_2853_ex_type$jscomp$1_line$jscomp$12_msg2$$) ? "[line " + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($details$jscomp$inline_2853_ex_type$jscomp$1_line$jscomp$12_msg2$$) + ", col " + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($col$jscomp$17$$) + "]" : null;
  $full_msg_msg$jscomp$18$$ = $APP.$cljs$core$apply$$.$cljs$core$IFn$_invoke$arity$5$($APP.$cljs$core$str$$, $file$jscomp$1_msg1$$, $details$jscomp$inline_2853_ex_type$jscomp$1_line$jscomp$12_msg2$$, $APP.$cljs$core$truth_$$($APP.$cljs$core$truth_$$($file$jscomp$1_msg1$$) ? $file$jscomp$1_msg1$$ : $details$jscomp$inline_2853_ex_type$jscomp$1_line$jscomp$12_msg2$$) ? " " : null, $full_msg_msg$jscomp$18$$);
  throw $APP.$cljs$core$ex_info$cljs$0core$0IFn$0_invoke$0arity$02$$($full_msg_msg$jscomp$18$$, $details$jscomp$2_rdr$jscomp$12$$);
};
$cljs$tools$reader$impl$errors$reader_error$cljs$0core$0IFn$0_invoke$0arity$0variadic$$ = function($rdr$jscomp$13$$, $msgs$$) {
  return $cljs$tools$reader$impl$errors$throw_ex$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($rdr$jscomp$13$$, $APP.$cljs$cst$143$reader_error$$, $APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$cljs$core$apply$$.$cljs$core$IFn$_invoke$arity$2$($APP.$cljs$core$str$$, $msgs$$)]));
};
$cljs$tools$reader$impl$errors$illegal_arg_error$cljs$0core$0IFn$0_invoke$0arity$0variadic$$ = function($rdr$jscomp$14$$, $msgs$jscomp$1$$) {
  return $cljs$tools$reader$impl$errors$throw_ex$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($rdr$jscomp$14$$, $APP.$cljs$cst$144$illegal_argument$$, $APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$cljs$core$apply$$.$cljs$core$IFn$_invoke$arity$2$($APP.$cljs$core$str$$, $msgs$jscomp$1$$)]));
};
$cljs$tools$reader$impl$errors$eof_error$cljs$0core$0IFn$0_invoke$0arity$0variadic$$ = function($rdr$jscomp$15$$, $msgs$jscomp$2$$) {
  return $cljs$tools$reader$impl$errors$throw_ex$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($rdr$jscomp$15$$, $APP.$cljs$cst$145$eof$$, $APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$cljs$core$apply$$.$cljs$core$IFn$_invoke$arity$2$($APP.$cljs$core$str$$, $msgs$jscomp$2$$)]));
};
$cljs$tools$reader$impl$errors$throw_odd_map$$ = function($rdr$jscomp$18$$, $line$jscomp$15$$, $col$jscomp$18$$, $elements$jscomp$2$$) {
  $cljs$tools$reader$impl$errors$reader_error$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($rdr$jscomp$18$$, $APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["The map literal starting with ", $cljs$tools$reader$impl$inspect$inspect$cljs$0core$0IFn$0_invoke$0arity$01$$($APP.$cljs$core$first$$($elements$jscomp$2$$)), $APP.$cljs$core$truth_$$($line$jscomp$15$$) ? " on line " + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($line$jscomp$15$$) + " column " + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($col$jscomp$18$$) : 
  null, " contains ", $APP.$cljs$core$count$$($elements$jscomp$2$$), " form(s). Map literals must contain an even number of forms."]));
};
$cljs$tools$reader$impl$errors$throw_invalid$$ = function($rdr$jscomp$22$$, $kind$jscomp$6$$, $token$jscomp$12$$) {
  return $cljs$tools$reader$impl$errors$reader_error$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($rdr$jscomp$22$$, $APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["Invalid ", $APP.$cljs$core$name$$($kind$jscomp$6$$), ": ", $token$jscomp$12$$, "."]));
};
$cljs$tools$reader$impl$errors$throw_bad_char$$ = function($rdr$jscomp$24$$, $kind$jscomp$8$$, $ch$jscomp$19$$) {
  return $cljs$tools$reader$impl$errors$reader_error$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($rdr$jscomp$24$$, $APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["Invalid character: ", $ch$jscomp$19$$, " found while reading ", $APP.$cljs$core$name$$($kind$jscomp$8$$), "."]));
};
$cljs$tools$reader$impl$errors$throw_eof_reading$cljs$0core$0IFn$0_invoke$0arity$0variadic$$ = function($rdr$jscomp$27$$, $start$jscomp$173$$) {
  a: {
    var $G__48324__$1$jscomp$inline_2096_init$jscomp$55$$ = $APP.$cljs$cst$132$string$$ instanceof $APP.$cljs$core$Keyword$$ ? $APP.$cljs$cst$132$string$$.$fqn$ : null;
    switch($G__48324__$1$jscomp$inline_2096_init$jscomp$55$$) {
      case "regex":
        $G__48324__$1$jscomp$inline_2096_init$jscomp$55$$ = '#"';
        break a;
      case "string":
        $G__48324__$1$jscomp$inline_2096_init$jscomp$55$$ = '"';
        break a;
      default:
        throw Error("No matching clause: " + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($G__48324__$1$jscomp$inline_2096_init$jscomp$55$$));
    }
  }
  return $cljs$tools$reader$impl$errors$eof_error$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($rdr$jscomp$27$$, $APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["Unexpected EOF reading ", $APP.$cljs$core$name$$($APP.$cljs$cst$132$string$$), " starting ", $APP.$cljs$core$apply$$.$cljs$core$IFn$_invoke$arity$3$($APP.$cljs$core$str$$, $G__48324__$1$jscomp$inline_2096_init$jscomp$55$$, $start$jscomp$173$$), "."]));
};
$cljs$tools$reader$impl$errors$throw_invalid_unicode_digit$$ = function($rdr$jscomp$30$$, $ch$jscomp$22$$) {
  return $cljs$tools$reader$impl$errors$illegal_arg_error$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($rdr$jscomp$30$$, $APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["Invalid digit ", $ch$jscomp$22$$, " in unicode character."]));
};
$cljs$tools$reader$impl$errors$throw_bad_octal_number$$ = function($rdr$jscomp$34$$) {
  return $cljs$tools$reader$impl$errors$reader_error$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($rdr$jscomp$34$$, $APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["Octal escape sequence must be in range [0, 377]."]));
};
$cljs$tools$reader$impl$errors$duplicate_keys_error$$ = function($msg$jscomp$19$$, $coll$jscomp$1004_dups$$) {
  $coll$jscomp$1004_dups$$ = function($seq$$) {
    return function $cljs$tools$reader$impl$errors$duplicate_keys_error_$_duplicates_$_iter__48348$$($s__48349$$) {
      return new $APP.$cljs$core$LazySeq$$(null, function() {
        for (var $s__48349__$1_s__48349__$2_temp__5823__auto__$jscomp$45$$ = $s__48349$$;;) {
          if ($s__48349__$1_s__48349__$2_temp__5823__auto__$jscomp$45$$ = $APP.$cljs$core$seq$$($s__48349__$1_s__48349__$2_temp__5823__auto__$jscomp$45$$)) {
            if ($APP.$cljs$core$chunked_seq_QMARK_$$($s__48349__$1_s__48349__$2_temp__5823__auto__$jscomp$45$$)) {
              var $JSCompiler_inline_result$jscomp$422_c__5626__auto__$jscomp$1_id$jscomp$59$$ = $APP.$cljs$core$_chunked_first$$($s__48349__$1_s__48349__$2_temp__5823__auto__$jscomp$45$$), $size__5627__auto__$jscomp$1$$ = $APP.$cljs$core$count$$($JSCompiler_inline_result$jscomp$422_c__5626__auto__$jscomp$1_id$jscomp$59$$), $b__48351_vec__48367$$ = $APP.$cljs$core$chunk_buffer$$($size__5627__auto__$jscomp$1$$);
              a: {
                for (var $i__48350$jscomp$inline_2098$$ = 0;;) {
                  if ($i__48350$jscomp$inline_2098$$ < $size__5627__auto__$jscomp$1$$) {
                    var $vec__48360$jscomp$inline_2099$$ = $APP.$cljs$core$_nth$$($JSCompiler_inline_result$jscomp$422_c__5626__auto__$jscomp$1_id$jscomp$59$$, $i__48350$jscomp$inline_2098$$), $id$jscomp$inline_2100$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($vec__48360$jscomp$inline_2099$$, 0, null);
                    $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($vec__48360$jscomp$inline_2099$$, 1, null) > 1 && $b__48351_vec__48367$$.add($id$jscomp$inline_2100$$);
                    $i__48350$jscomp$inline_2098$$ += 1;
                  } else {
                    $JSCompiler_inline_result$jscomp$422_c__5626__auto__$jscomp$1_id$jscomp$59$$ = !0;
                    break a;
                  }
                }
                $JSCompiler_inline_result$jscomp$422_c__5626__auto__$jscomp$1_id$jscomp$59$$ = void 0;
              }
              return $JSCompiler_inline_result$jscomp$422_c__5626__auto__$jscomp$1_id$jscomp$59$$ ? $APP.$cljs$core$chunk_cons$$($APP.$cljs$core$chunk$$($b__48351_vec__48367$$), $cljs$tools$reader$impl$errors$duplicate_keys_error_$_duplicates_$_iter__48348$$($APP.$cljs$core$_chunked_rest$$($s__48349__$1_s__48349__$2_temp__5823__auto__$jscomp$45$$))) : $APP.$cljs$core$chunk_cons$$($APP.$cljs$core$chunk$$($b__48351_vec__48367$$), null);
            }
            $b__48351_vec__48367$$ = $APP.$cljs$core$first$$($s__48349__$1_s__48349__$2_temp__5823__auto__$jscomp$45$$);
            $JSCompiler_inline_result$jscomp$422_c__5626__auto__$jscomp$1_id$jscomp$59$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($b__48351_vec__48367$$, 0, null);
            if ($APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($b__48351_vec__48367$$, 1, null) > 1) {
              return $APP.$cljs$core$cons$$($JSCompiler_inline_result$jscomp$422_c__5626__auto__$jscomp$1_id$jscomp$59$$, $cljs$tools$reader$impl$errors$duplicate_keys_error_$_duplicates_$_iter__48348$$($APP.$cljs$core$rest$$($s__48349__$1_s__48349__$2_temp__5823__auto__$jscomp$45$$)));
            }
            $s__48349__$1_s__48349__$2_temp__5823__auto__$jscomp$45$$ = $APP.$cljs$core$rest$$($s__48349__$1_s__48349__$2_temp__5823__auto__$jscomp$45$$);
          } else {
            return null;
          }
        }
      }, null, null);
    }($cljs$core$frequencies$$($seq$$));
  }($coll$jscomp$1004_dups$$);
  return $APP.$cljs$core$apply$$.$cljs$core$IFn$_invoke$arity$5$($APP.$cljs$core$str$$, $msg$jscomp$19$$, $APP.$cljs$core$count$$($coll$jscomp$1004_dups$$) > 1 ? "s" : null, ": ", $APP.$cljs$core$drop$cljs$0core$0IFn$0_invoke$0arity$02$$(1, $APP.$cljs$core$interleave$$.$cljs$core$IFn$_invoke$arity$2$($APP.$cljs$core$repeat$cljs$0core$0IFn$0_invoke$0arity$01$$(", "), $coll$jscomp$1004_dups$$)));
};
$cljs$tools$reader$impl$errors$throw_dup_keys$$ = function($rdr$jscomp$46$$, $JSCompiler_inline_result$jscomp$409_kind$jscomp$10_s$jscomp$inline_2102$$, $ks$jscomp$18$$) {
  var $JSCompiler_temp_const$jscomp$408$$ = $APP.$cljs$core$str$$, $JSCompiler_temp_const$jscomp$407$$ = $JSCompiler_temp_const$jscomp$408$$.$cljs$core$IFn$_invoke$arity$1$;
  $JSCompiler_inline_result$jscomp$409_kind$jscomp$10_s$jscomp$inline_2102$$ = $APP.$cljs$core$name$$($JSCompiler_inline_result$jscomp$409_kind$jscomp$10_s$jscomp$inline_2102$$);
  $JSCompiler_inline_result$jscomp$409_kind$jscomp$10_s$jscomp$inline_2102$$ = String($JSCompiler_inline_result$jscomp$409_kind$jscomp$10_s$jscomp$inline_2102$$.charAt(0)).toUpperCase() + String($JSCompiler_inline_result$jscomp$409_kind$jscomp$10_s$jscomp$inline_2102$$.slice(1)).toLowerCase();
  $cljs$tools$reader$impl$errors$reader_error$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($rdr$jscomp$46$$, $APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$cljs$tools$reader$impl$errors$duplicate_keys_error$$("" + $JSCompiler_temp_const$jscomp$407$$.call($JSCompiler_temp_const$jscomp$408$$, $JSCompiler_inline_result$jscomp$409_kind$jscomp$10_s$jscomp$inline_2102$$) + " literal contains duplicate key", $ks$jscomp$18$$)]));
};
$cljs$tools$reader$impl$commons$read_past$$ = function($rdr$jscomp$48$$) {
  for (var $ch$jscomp$24$$ = $rdr$jscomp$48$$.$cljs$tools$reader$reader_types$Reader$read_char$arity$1$(null);;) {
    if ($cljs$tools$reader$impl$utils$whitespace_QMARK_$$.$cljs$core$IFn$_invoke$arity$1$ ? $cljs$tools$reader$impl$utils$whitespace_QMARK_$$.$cljs$core$IFn$_invoke$arity$1$($ch$jscomp$24$$) : $cljs$tools$reader$impl$utils$whitespace_QMARK_$$.call(null, $ch$jscomp$24$$)) {
      $ch$jscomp$24$$ = $rdr$jscomp$48$$.$cljs$tools$reader$reader_types$Reader$read_char$arity$1$(null);
    } else {
      return $ch$jscomp$24$$;
    }
  }
};
$cljs$tools$reader$impl$commons$matches_QMARK_$$ = function($pattern$jscomp$6_vec__48434$$, $s$jscomp$176$$) {
  $pattern$jscomp$6_vec__48434$$ = $cljs$core$re_find$$($pattern$jscomp$6_vec__48434$$, $s$jscomp$176$$);
  return $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($pattern$jscomp$6_vec__48434$$, 0, null) === $s$jscomp$176$$;
};
$cljs$tools$reader$impl$commons$match_number$$ = function($JSCompiler_temp$jscomp$425_JSCompiler_temp$jscomp$426_JSCompiler_temp$jscomp$427_bn__$1$jscomp$inline_2110_negate_QMARK_$jscomp$inline_2106_numerator$jscomp$inline_2117_numerator__$1$jscomp$inline_2119_s$jscomp$177$$) {
  if ($cljs$tools$reader$impl$commons$matches_QMARK_$$($cljs$tools$reader$impl$commons$int_pattern$$, $JSCompiler_temp$jscomp$425_JSCompiler_temp$jscomp$426_JSCompiler_temp$jscomp$427_bn__$1$jscomp$inline_2110_negate_QMARK_$jscomp$inline_2106_numerator$jscomp$inline_2117_numerator__$1$jscomp$inline_2119_s$jscomp$177$$)) {
    var $a$jscomp$inline_2107_bn$jscomp$inline_2109_denominator$jscomp$inline_2118_m$jscomp$inline_2105_m$jscomp$inline_2113_m$jscomp$inline_2116$$ = $APP.$cljs$core$vec$$($cljs$core$re_find$$($cljs$tools$reader$impl$commons$int_pattern$$, $JSCompiler_temp$jscomp$425_JSCompiler_temp$jscomp$426_JSCompiler_temp$jscomp$427_bn__$1$jscomp$inline_2110_negate_QMARK_$jscomp$inline_2106_numerator$jscomp$inline_2117_numerator__$1$jscomp$inline_2119_s$jscomp$177$$));
    if (($a$jscomp$inline_2107_bn$jscomp$inline_2109_denominator$jscomp$inline_2118_m$jscomp$inline_2105_m$jscomp$inline_2113_m$jscomp$inline_2116$$.$cljs$core$IFn$_invoke$arity$1$ ? $a$jscomp$inline_2107_bn$jscomp$inline_2109_denominator$jscomp$inline_2118_m$jscomp$inline_2105_m$jscomp$inline_2113_m$jscomp$inline_2116$$.$cljs$core$IFn$_invoke$arity$1$(2) : $a$jscomp$inline_2107_bn$jscomp$inline_2109_denominator$jscomp$inline_2118_m$jscomp$inline_2105_m$jscomp$inline_2113_m$jscomp$inline_2116$$.call(null, 
    2)) != null) {
      $JSCompiler_temp$jscomp$425_JSCompiler_temp$jscomp$426_JSCompiler_temp$jscomp$427_bn__$1$jscomp$inline_2110_negate_QMARK_$jscomp$inline_2106_numerator$jscomp$inline_2117_numerator__$1$jscomp$inline_2119_s$jscomp$177$$ = 0;
    } else {
      $JSCompiler_temp$jscomp$425_JSCompiler_temp$jscomp$426_JSCompiler_temp$jscomp$427_bn__$1$jscomp$inline_2110_negate_QMARK_$jscomp$inline_2106_numerator$jscomp$inline_2117_numerator__$1$jscomp$inline_2119_s$jscomp$177$$ = "-" === ($a$jscomp$inline_2107_bn$jscomp$inline_2109_denominator$jscomp$inline_2118_m$jscomp$inline_2105_m$jscomp$inline_2113_m$jscomp$inline_2116$$.$cljs$core$IFn$_invoke$arity$1$ ? $a$jscomp$inline_2107_bn$jscomp$inline_2109_denominator$jscomp$inline_2118_m$jscomp$inline_2105_m$jscomp$inline_2113_m$jscomp$inline_2116$$.$cljs$core$IFn$_invoke$arity$1$(1) : 
      $a$jscomp$inline_2107_bn$jscomp$inline_2109_denominator$jscomp$inline_2118_m$jscomp$inline_2105_m$jscomp$inline_2113_m$jscomp$inline_2116$$.call(null, 1));
      $a$jscomp$inline_2107_bn$jscomp$inline_2109_denominator$jscomp$inline_2118_m$jscomp$inline_2105_m$jscomp$inline_2113_m$jscomp$inline_2116$$ = ($a$jscomp$inline_2107_bn$jscomp$inline_2109_denominator$jscomp$inline_2118_m$jscomp$inline_2105_m$jscomp$inline_2113_m$jscomp$inline_2116$$.$cljs$core$IFn$_invoke$arity$1$ ? $a$jscomp$inline_2107_bn$jscomp$inline_2109_denominator$jscomp$inline_2118_m$jscomp$inline_2105_m$jscomp$inline_2113_m$jscomp$inline_2116$$.$cljs$core$IFn$_invoke$arity$1$(3) : $a$jscomp$inline_2107_bn$jscomp$inline_2109_denominator$jscomp$inline_2118_m$jscomp$inline_2105_m$jscomp$inline_2113_m$jscomp$inline_2116$$.call(null, 
      3)) != null ? new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$a$jscomp$inline_2107_bn$jscomp$inline_2109_denominator$jscomp$inline_2118_m$jscomp$inline_2105_m$jscomp$inline_2113_m$jscomp$inline_2116$$.$cljs$core$IFn$_invoke$arity$1$ ? $a$jscomp$inline_2107_bn$jscomp$inline_2109_denominator$jscomp$inline_2118_m$jscomp$inline_2105_m$jscomp$inline_2113_m$jscomp$inline_2116$$.$cljs$core$IFn$_invoke$arity$1$(3) : $a$jscomp$inline_2107_bn$jscomp$inline_2109_denominator$jscomp$inline_2118_m$jscomp$inline_2105_m$jscomp$inline_2113_m$jscomp$inline_2116$$.call(null, 
      3), 10], null) : ($a$jscomp$inline_2107_bn$jscomp$inline_2109_denominator$jscomp$inline_2118_m$jscomp$inline_2105_m$jscomp$inline_2113_m$jscomp$inline_2116$$.$cljs$core$IFn$_invoke$arity$1$ ? $a$jscomp$inline_2107_bn$jscomp$inline_2109_denominator$jscomp$inline_2118_m$jscomp$inline_2105_m$jscomp$inline_2113_m$jscomp$inline_2116$$.$cljs$core$IFn$_invoke$arity$1$(4) : $a$jscomp$inline_2107_bn$jscomp$inline_2109_denominator$jscomp$inline_2118_m$jscomp$inline_2105_m$jscomp$inline_2113_m$jscomp$inline_2116$$.call(null, 
      4)) != null ? new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$a$jscomp$inline_2107_bn$jscomp$inline_2109_denominator$jscomp$inline_2118_m$jscomp$inline_2105_m$jscomp$inline_2113_m$jscomp$inline_2116$$.$cljs$core$IFn$_invoke$arity$1$ ? $a$jscomp$inline_2107_bn$jscomp$inline_2109_denominator$jscomp$inline_2118_m$jscomp$inline_2105_m$jscomp$inline_2113_m$jscomp$inline_2116$$.$cljs$core$IFn$_invoke$arity$1$(4) : $a$jscomp$inline_2107_bn$jscomp$inline_2109_denominator$jscomp$inline_2118_m$jscomp$inline_2105_m$jscomp$inline_2113_m$jscomp$inline_2116$$.call(null, 
      4), 16], null) : ($a$jscomp$inline_2107_bn$jscomp$inline_2109_denominator$jscomp$inline_2118_m$jscomp$inline_2105_m$jscomp$inline_2113_m$jscomp$inline_2116$$.$cljs$core$IFn$_invoke$arity$1$ ? $a$jscomp$inline_2107_bn$jscomp$inline_2109_denominator$jscomp$inline_2118_m$jscomp$inline_2105_m$jscomp$inline_2113_m$jscomp$inline_2116$$.$cljs$core$IFn$_invoke$arity$1$(5) : $a$jscomp$inline_2107_bn$jscomp$inline_2109_denominator$jscomp$inline_2118_m$jscomp$inline_2105_m$jscomp$inline_2113_m$jscomp$inline_2116$$.call(null, 
      5)) != null ? new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$a$jscomp$inline_2107_bn$jscomp$inline_2109_denominator$jscomp$inline_2118_m$jscomp$inline_2105_m$jscomp$inline_2113_m$jscomp$inline_2116$$.$cljs$core$IFn$_invoke$arity$1$ ? $a$jscomp$inline_2107_bn$jscomp$inline_2109_denominator$jscomp$inline_2118_m$jscomp$inline_2105_m$jscomp$inline_2113_m$jscomp$inline_2116$$.$cljs$core$IFn$_invoke$arity$1$(5) : $a$jscomp$inline_2107_bn$jscomp$inline_2109_denominator$jscomp$inline_2118_m$jscomp$inline_2105_m$jscomp$inline_2113_m$jscomp$inline_2116$$.call(null, 
      5), 8], null) : ($a$jscomp$inline_2107_bn$jscomp$inline_2109_denominator$jscomp$inline_2118_m$jscomp$inline_2105_m$jscomp$inline_2113_m$jscomp$inline_2116$$.$cljs$core$IFn$_invoke$arity$1$ ? $a$jscomp$inline_2107_bn$jscomp$inline_2109_denominator$jscomp$inline_2118_m$jscomp$inline_2105_m$jscomp$inline_2113_m$jscomp$inline_2116$$.$cljs$core$IFn$_invoke$arity$1$(7) : $a$jscomp$inline_2107_bn$jscomp$inline_2109_denominator$jscomp$inline_2118_m$jscomp$inline_2105_m$jscomp$inline_2113_m$jscomp$inline_2116$$.call(null, 
      7)) != null ? new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$a$jscomp$inline_2107_bn$jscomp$inline_2109_denominator$jscomp$inline_2118_m$jscomp$inline_2105_m$jscomp$inline_2113_m$jscomp$inline_2116$$.$cljs$core$IFn$_invoke$arity$1$ ? $a$jscomp$inline_2107_bn$jscomp$inline_2109_denominator$jscomp$inline_2118_m$jscomp$inline_2105_m$jscomp$inline_2113_m$jscomp$inline_2116$$.$cljs$core$IFn$_invoke$arity$1$(7) : $a$jscomp$inline_2107_bn$jscomp$inline_2109_denominator$jscomp$inline_2118_m$jscomp$inline_2105_m$jscomp$inline_2113_m$jscomp$inline_2116$$.call(null, 
      7), parseInt($a$jscomp$inline_2107_bn$jscomp$inline_2109_denominator$jscomp$inline_2118_m$jscomp$inline_2105_m$jscomp$inline_2113_m$jscomp$inline_2116$$.$cljs$core$IFn$_invoke$arity$1$ ? $a$jscomp$inline_2107_bn$jscomp$inline_2109_denominator$jscomp$inline_2118_m$jscomp$inline_2105_m$jscomp$inline_2113_m$jscomp$inline_2116$$.$cljs$core$IFn$_invoke$arity$1$(6) : $a$jscomp$inline_2107_bn$jscomp$inline_2109_denominator$jscomp$inline_2118_m$jscomp$inline_2105_m$jscomp$inline_2113_m$jscomp$inline_2116$$.call(null, 
      6))], null) : new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [null, null], null);
      var $n$jscomp$inline_2108$$ = $a$jscomp$inline_2107_bn$jscomp$inline_2109_denominator$jscomp$inline_2118_m$jscomp$inline_2105_m$jscomp$inline_2113_m$jscomp$inline_2116$$.$cljs$core$IFn$_invoke$arity$1$ ? $a$jscomp$inline_2107_bn$jscomp$inline_2109_denominator$jscomp$inline_2118_m$jscomp$inline_2105_m$jscomp$inline_2113_m$jscomp$inline_2116$$.$cljs$core$IFn$_invoke$arity$1$(0) : $a$jscomp$inline_2107_bn$jscomp$inline_2109_denominator$jscomp$inline_2118_m$jscomp$inline_2105_m$jscomp$inline_2113_m$jscomp$inline_2116$$.call(null, 
      0);
      $n$jscomp$inline_2108$$ == null ? $JSCompiler_temp$jscomp$425_JSCompiler_temp$jscomp$426_JSCompiler_temp$jscomp$427_bn__$1$jscomp$inline_2110_negate_QMARK_$jscomp$inline_2106_numerator$jscomp$inline_2117_numerator__$1$jscomp$inline_2119_s$jscomp$177$$ = null : ($a$jscomp$inline_2107_bn$jscomp$inline_2109_denominator$jscomp$inline_2118_m$jscomp$inline_2105_m$jscomp$inline_2113_m$jscomp$inline_2116$$ = parseInt($n$jscomp$inline_2108$$, $a$jscomp$inline_2107_bn$jscomp$inline_2109_denominator$jscomp$inline_2118_m$jscomp$inline_2105_m$jscomp$inline_2113_m$jscomp$inline_2116$$.$cljs$core$IFn$_invoke$arity$1$ ? 
      $a$jscomp$inline_2107_bn$jscomp$inline_2109_denominator$jscomp$inline_2118_m$jscomp$inline_2105_m$jscomp$inline_2113_m$jscomp$inline_2116$$.$cljs$core$IFn$_invoke$arity$1$(1) : $a$jscomp$inline_2107_bn$jscomp$inline_2109_denominator$jscomp$inline_2118_m$jscomp$inline_2105_m$jscomp$inline_2113_m$jscomp$inline_2116$$.call(null, 1)), $JSCompiler_temp$jscomp$425_JSCompiler_temp$jscomp$426_JSCompiler_temp$jscomp$427_bn__$1$jscomp$inline_2110_negate_QMARK_$jscomp$inline_2106_numerator$jscomp$inline_2117_numerator__$1$jscomp$inline_2119_s$jscomp$177$$ = 
      $JSCompiler_temp$jscomp$425_JSCompiler_temp$jscomp$426_JSCompiler_temp$jscomp$427_bn__$1$jscomp$inline_2110_negate_QMARK_$jscomp$inline_2106_numerator$jscomp$inline_2117_numerator__$1$jscomp$inline_2119_s$jscomp$177$$ ? -1 * $a$jscomp$inline_2107_bn$jscomp$inline_2109_denominator$jscomp$inline_2118_m$jscomp$inline_2105_m$jscomp$inline_2113_m$jscomp$inline_2116$$ : $a$jscomp$inline_2107_bn$jscomp$inline_2109_denominator$jscomp$inline_2118_m$jscomp$inline_2105_m$jscomp$inline_2113_m$jscomp$inline_2116$$, 
      $JSCompiler_temp$jscomp$425_JSCompiler_temp$jscomp$426_JSCompiler_temp$jscomp$427_bn__$1$jscomp$inline_2110_negate_QMARK_$jscomp$inline_2106_numerator$jscomp$inline_2117_numerator__$1$jscomp$inline_2119_s$jscomp$177$$ = $APP.$cljs$core$truth_$$(isNaN($JSCompiler_temp$jscomp$425_JSCompiler_temp$jscomp$426_JSCompiler_temp$jscomp$427_bn__$1$jscomp$inline_2110_negate_QMARK_$jscomp$inline_2106_numerator$jscomp$inline_2117_numerator__$1$jscomp$inline_2119_s$jscomp$177$$)) ? null : $JSCompiler_temp$jscomp$425_JSCompiler_temp$jscomp$426_JSCompiler_temp$jscomp$427_bn__$1$jscomp$inline_2110_negate_QMARK_$jscomp$inline_2106_numerator$jscomp$inline_2117_numerator__$1$jscomp$inline_2119_s$jscomp$177$$);
    }
  } else {
    $cljs$tools$reader$impl$commons$matches_QMARK_$$($cljs$tools$reader$impl$commons$float_pattern$$, $JSCompiler_temp$jscomp$425_JSCompiler_temp$jscomp$426_JSCompiler_temp$jscomp$427_bn__$1$jscomp$inline_2110_negate_QMARK_$jscomp$inline_2106_numerator$jscomp$inline_2117_numerator__$1$jscomp$inline_2119_s$jscomp$177$$) ? ($a$jscomp$inline_2107_bn$jscomp$inline_2109_denominator$jscomp$inline_2118_m$jscomp$inline_2105_m$jscomp$inline_2113_m$jscomp$inline_2116$$ = $APP.$cljs$core$vec$$($cljs$core$re_find$$($cljs$tools$reader$impl$commons$float_pattern$$, 
    $JSCompiler_temp$jscomp$425_JSCompiler_temp$jscomp$426_JSCompiler_temp$jscomp$427_bn__$1$jscomp$inline_2110_negate_QMARK_$jscomp$inline_2106_numerator$jscomp$inline_2117_numerator__$1$jscomp$inline_2119_s$jscomp$177$$)), $JSCompiler_temp$jscomp$425_JSCompiler_temp$jscomp$426_JSCompiler_temp$jscomp$427_bn__$1$jscomp$inline_2110_negate_QMARK_$jscomp$inline_2106_numerator$jscomp$inline_2117_numerator__$1$jscomp$inline_2119_s$jscomp$177$$ = ($a$jscomp$inline_2107_bn$jscomp$inline_2109_denominator$jscomp$inline_2118_m$jscomp$inline_2105_m$jscomp$inline_2113_m$jscomp$inline_2116$$.$cljs$core$IFn$_invoke$arity$1$ ? 
    $a$jscomp$inline_2107_bn$jscomp$inline_2109_denominator$jscomp$inline_2118_m$jscomp$inline_2105_m$jscomp$inline_2113_m$jscomp$inline_2116$$.$cljs$core$IFn$_invoke$arity$1$(4) : $a$jscomp$inline_2107_bn$jscomp$inline_2109_denominator$jscomp$inline_2118_m$jscomp$inline_2105_m$jscomp$inline_2113_m$jscomp$inline_2116$$.call(null, 4)) != null ? parseFloat($a$jscomp$inline_2107_bn$jscomp$inline_2109_denominator$jscomp$inline_2118_m$jscomp$inline_2105_m$jscomp$inline_2113_m$jscomp$inline_2116$$.$cljs$core$IFn$_invoke$arity$1$ ? 
    $a$jscomp$inline_2107_bn$jscomp$inline_2109_denominator$jscomp$inline_2118_m$jscomp$inline_2105_m$jscomp$inline_2113_m$jscomp$inline_2116$$.$cljs$core$IFn$_invoke$arity$1$(1) : $a$jscomp$inline_2107_bn$jscomp$inline_2109_denominator$jscomp$inline_2118_m$jscomp$inline_2105_m$jscomp$inline_2113_m$jscomp$inline_2116$$.call(null, 1)) : parseFloat($JSCompiler_temp$jscomp$425_JSCompiler_temp$jscomp$426_JSCompiler_temp$jscomp$427_bn__$1$jscomp$inline_2110_negate_QMARK_$jscomp$inline_2106_numerator$jscomp$inline_2117_numerator__$1$jscomp$inline_2119_s$jscomp$177$$)) : 
    $cljs$tools$reader$impl$commons$matches_QMARK_$$($cljs$tools$reader$impl$commons$ratio_pattern$$, $JSCompiler_temp$jscomp$425_JSCompiler_temp$jscomp$426_JSCompiler_temp$jscomp$427_bn__$1$jscomp$inline_2110_negate_QMARK_$jscomp$inline_2106_numerator$jscomp$inline_2117_numerator__$1$jscomp$inline_2119_s$jscomp$177$$) ? ($a$jscomp$inline_2107_bn$jscomp$inline_2109_denominator$jscomp$inline_2118_m$jscomp$inline_2105_m$jscomp$inline_2113_m$jscomp$inline_2116$$ = $APP.$cljs$core$vec$$($cljs$core$re_find$$($cljs$tools$reader$impl$commons$ratio_pattern$$, 
    $JSCompiler_temp$jscomp$425_JSCompiler_temp$jscomp$426_JSCompiler_temp$jscomp$427_bn__$1$jscomp$inline_2110_negate_QMARK_$jscomp$inline_2106_numerator$jscomp$inline_2117_numerator__$1$jscomp$inline_2119_s$jscomp$177$$)), $JSCompiler_temp$jscomp$425_JSCompiler_temp$jscomp$426_JSCompiler_temp$jscomp$427_bn__$1$jscomp$inline_2110_negate_QMARK_$jscomp$inline_2106_numerator$jscomp$inline_2117_numerator__$1$jscomp$inline_2119_s$jscomp$177$$ = $a$jscomp$inline_2107_bn$jscomp$inline_2109_denominator$jscomp$inline_2118_m$jscomp$inline_2105_m$jscomp$inline_2113_m$jscomp$inline_2116$$.$cljs$core$IFn$_invoke$arity$1$ ? 
    $a$jscomp$inline_2107_bn$jscomp$inline_2109_denominator$jscomp$inline_2118_m$jscomp$inline_2105_m$jscomp$inline_2113_m$jscomp$inline_2116$$.$cljs$core$IFn$_invoke$arity$1$(1) : $a$jscomp$inline_2107_bn$jscomp$inline_2109_denominator$jscomp$inline_2118_m$jscomp$inline_2105_m$jscomp$inline_2113_m$jscomp$inline_2116$$.call(null, 1), $a$jscomp$inline_2107_bn$jscomp$inline_2109_denominator$jscomp$inline_2118_m$jscomp$inline_2105_m$jscomp$inline_2113_m$jscomp$inline_2116$$ = $a$jscomp$inline_2107_bn$jscomp$inline_2109_denominator$jscomp$inline_2118_m$jscomp$inline_2105_m$jscomp$inline_2113_m$jscomp$inline_2116$$.$cljs$core$IFn$_invoke$arity$1$ ? 
    $a$jscomp$inline_2107_bn$jscomp$inline_2109_denominator$jscomp$inline_2118_m$jscomp$inline_2105_m$jscomp$inline_2113_m$jscomp$inline_2116$$.$cljs$core$IFn$_invoke$arity$1$(2) : $a$jscomp$inline_2107_bn$jscomp$inline_2109_denominator$jscomp$inline_2118_m$jscomp$inline_2105_m$jscomp$inline_2113_m$jscomp$inline_2116$$.call(null, 2), $JSCompiler_temp$jscomp$425_JSCompiler_temp$jscomp$426_JSCompiler_temp$jscomp$427_bn__$1$jscomp$inline_2110_negate_QMARK_$jscomp$inline_2106_numerator$jscomp$inline_2117_numerator__$1$jscomp$inline_2119_s$jscomp$177$$ = 
    $APP.$cljs$core$truth_$$($cljs$core$re_find$$(/^\+/, $JSCompiler_temp$jscomp$425_JSCompiler_temp$jscomp$426_JSCompiler_temp$jscomp$427_bn__$1$jscomp$inline_2110_negate_QMARK_$jscomp$inline_2106_numerator$jscomp$inline_2117_numerator__$1$jscomp$inline_2119_s$jscomp$177$$)) ? $JSCompiler_temp$jscomp$425_JSCompiler_temp$jscomp$426_JSCompiler_temp$jscomp$427_bn__$1$jscomp$inline_2110_negate_QMARK_$jscomp$inline_2106_numerator$jscomp$inline_2117_numerator__$1$jscomp$inline_2119_s$jscomp$177$$.substring(1) : 
    $JSCompiler_temp$jscomp$425_JSCompiler_temp$jscomp$426_JSCompiler_temp$jscomp$427_bn__$1$jscomp$inline_2110_negate_QMARK_$jscomp$inline_2106_numerator$jscomp$inline_2117_numerator__$1$jscomp$inline_2119_s$jscomp$177$$, $JSCompiler_temp$jscomp$425_JSCompiler_temp$jscomp$426_JSCompiler_temp$jscomp$427_bn__$1$jscomp$inline_2110_negate_QMARK_$jscomp$inline_2106_numerator$jscomp$inline_2117_numerator__$1$jscomp$inline_2119_s$jscomp$177$$ = parseInt($JSCompiler_temp$jscomp$425_JSCompiler_temp$jscomp$426_JSCompiler_temp$jscomp$427_bn__$1$jscomp$inline_2110_negate_QMARK_$jscomp$inline_2106_numerator$jscomp$inline_2117_numerator__$1$jscomp$inline_2119_s$jscomp$177$$) / 
    parseInt($a$jscomp$inline_2107_bn$jscomp$inline_2109_denominator$jscomp$inline_2118_m$jscomp$inline_2105_m$jscomp$inline_2113_m$jscomp$inline_2116$$)) : $JSCompiler_temp$jscomp$425_JSCompiler_temp$jscomp$426_JSCompiler_temp$jscomp$427_bn__$1$jscomp$inline_2110_negate_QMARK_$jscomp$inline_2106_numerator$jscomp$inline_2117_numerator__$1$jscomp$inline_2119_s$jscomp$177$$ = null;
  }
  return $JSCompiler_temp$jscomp$425_JSCompiler_temp$jscomp$426_JSCompiler_temp$jscomp$427_bn__$1$jscomp$inline_2110_negate_QMARK_$jscomp$inline_2106_numerator$jscomp$inline_2117_numerator__$1$jscomp$inline_2119_s$jscomp$177$$;
};
$cljs$tools$reader$impl$commons$parse_symbol$$ = function($sym$jscomp$13_token$jscomp$18$$) {
  if ("" === $sym$jscomp$13_token$jscomp$18$$ || /:$/.test($sym$jscomp$13_token$jscomp$18$$) === !0 || /^::/.test($sym$jscomp$13_token$jscomp$18$$) === !0) {
    return null;
  }
  var $ns_idx_ns_idx__$1$$ = $sym$jscomp$13_token$jscomp$18$$.indexOf("/"), $ns$jscomp$17$$ = $ns_idx_ns_idx__$1$$ > 0 ? $sym$jscomp$13_token$jscomp$18$$.substring(0, $ns_idx_ns_idx__$1$$) : null;
  if ($ns$jscomp$17$$ != null) {
    $ns_idx_ns_idx__$1$$ += 1;
    if ($ns_idx_ns_idx__$1$$ === $APP.$cljs$core$count$$($sym$jscomp$13_token$jscomp$18$$)) {
      return null;
    }
    $sym$jscomp$13_token$jscomp$18$$ = $sym$jscomp$13_token$jscomp$18$$.substring($ns_idx_ns_idx__$1$$);
    return $cljs$tools$reader$impl$utils$numeric_QMARK_$$($APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$02$$($sym$jscomp$13_token$jscomp$18$$, 0)) || "" === $sym$jscomp$13_token$jscomp$18$$ || /:$/.test($ns$jscomp$17$$) !== !1 || $sym$jscomp$13_token$jscomp$18$$ !== "/" && -1 !== $sym$jscomp$13_token$jscomp$18$$.indexOf("/") ? null : new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$ns$jscomp$17$$, $sym$jscomp$13_token$jscomp$18$$], null);
  }
  return $sym$jscomp$13_token$jscomp$18$$ === "/" || -1 === $sym$jscomp$13_token$jscomp$18$$.indexOf("/") ? new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [null, $sym$jscomp$13_token$jscomp$18$$], null) : null;
};
$cljs$tools$reader$impl$commons$throwing_reader$$ = function() {
  return function() {
    function $G__48495$$($rdr$jscomp$51$$, $var_args$jscomp$361$$) {
      var $G__48498__i__$jscomp$225$$ = null;
      if (arguments.length > 1) {
        $G__48498__i__$jscomp$225$$ = 0;
        for (var $G__48498__a$$ = Array(arguments.length - 1); $G__48498__i__$jscomp$225$$ < $G__48498__a$$.length;) {
          $G__48498__a$$[$G__48498__i__$jscomp$225$$] = arguments[$G__48498__i__$jscomp$225$$ + 1], ++$G__48498__i__$jscomp$225$$;
        }
        $G__48498__i__$jscomp$225$$ = new $APP.$cljs$core$IndexedSeq$$($G__48498__a$$, 0, null);
      }
      return $G__48495__delegate$$.call(this, $rdr$jscomp$51$$, $G__48498__i__$jscomp$225$$);
    }
    function $G__48495__delegate$$($rdr$jscomp$50$$) {
      return $cljs$tools$reader$impl$errors$reader_error$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($rdr$jscomp$50$$, $APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["Unreadable form"]));
    }
    $G__48495$$.$cljs$lang$maxFixedArity$ = 1;
    $G__48495$$.$cljs$lang$applyTo$ = function($_$jscomp$226_arglist__48499$$) {
      var $rdr$jscomp$52$$ = $APP.$cljs$core$first$$($_$jscomp$226_arglist__48499$$);
      $_$jscomp$226_arglist__48499$$ = $APP.$cljs$core$rest$$($_$jscomp$226_arglist__48499$$);
      return $G__48495__delegate$$($rdr$jscomp$52$$, $_$jscomp$226_arglist__48499$$);
    };
    $G__48495$$.$cljs$core$IFn$_invoke$arity$variadic$ = $G__48495__delegate$$;
    return $G__48495$$;
  }();
};
$cljs$tools$reader$edn$not_constituent_QMARK_$$ = function($ch$jscomp$45$$) {
  return "@" === $ch$jscomp$45$$ || "`" === $ch$jscomp$45$$ || "~" === $ch$jscomp$45$$;
};
$cljs$tools$reader$edn$read_unmatched_delimiter$$ = function($rdr$jscomp$92$$, $ch$jscomp$48$$) {
  return $cljs$tools$reader$impl$errors$reader_error$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($rdr$jscomp$92$$, $APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["Unmatched delimiter ", $ch$jscomp$48$$, "."]));
};
$cljs$tools$reader$edn$read_unicode_char$cljs$0core$0IFn$0_invoke$0arity$04$$ = function($token$jscomp$25$$, $l$jscomp$76_length$jscomp$29$$, $base$jscomp$13_ch$jscomp$inline_2126$$) {
  $l$jscomp$76_length$jscomp$29$$ = 1 + $l$jscomp$76_length$jscomp$29$$;
  if ($APP.$cljs$core$count$$($token$jscomp$25$$) !== $l$jscomp$76_length$jscomp$29$$) {
    throw $cljs$tools$reader$impl$errors$illegal_arg_error$cljs$0core$0IFn$0_invoke$0arity$0variadic$$(null, $APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["Invalid unicode literal: \\", $token$jscomp$25$$, "."]));
  }
  for (var $i$jscomp$369$$ = 1, $G__49330_uc$jscomp$3$$ = 0;;) {
    if ($i$jscomp$369$$ === $l$jscomp$76_length$jscomp$29$$) {
      return String.fromCharCode($G__49330_uc$jscomp$3$$);
    }
    var $d$jscomp$115$$ = $cljs$tools$reader$impl$utils$char_code$$($APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$02$$($token$jscomp$25$$, $i$jscomp$369$$), $base$jscomp$13_ch$jscomp$inline_2126$$);
    if ($d$jscomp$115$$ === -1) {
      return $base$jscomp$13_ch$jscomp$inline_2126$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$02$$($token$jscomp$25$$, $i$jscomp$369$$), $cljs$tools$reader$impl$errors$illegal_arg_error$cljs$0core$0IFn$0_invoke$0arity$0variadic$$(null, $APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["Invalid digit ", $base$jscomp$13_ch$jscomp$inline_2126$$, " in unicode character \\", $token$jscomp$25$$, "."]));
    }
    $G__49330_uc$jscomp$3$$ = $d$jscomp$115$$ + $G__49330_uc$jscomp$3$$ * $base$jscomp$13_ch$jscomp$inline_2126$$;
    $i$jscomp$369$$ += 1;
  }
};
$cljs$tools$reader$edn$starting_line_col_info$$ = function($rdr$jscomp$95$$) {
  return $cljs$tools$reader$reader_types$indexing_reader_QMARK_$$($rdr$jscomp$95$$) ? new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$tools$reader$reader_types$get_line_number$$($rdr$jscomp$95$$), ($cljs$tools$reader$reader_types$get_column_number$$($rdr$jscomp$95$$) | 0) - 1 | 0], null) : null;
};
$cljs$tools$reader$edn$macro_terminating_QMARK_$$ = function($ch$jscomp$44$$) {
  var $and__5140__auto__$jscomp$45_and__5140__auto____$1$jscomp$17_and__5140__auto____$2$jscomp$6$$ = "#" !== $ch$jscomp$44$$;
  return $and__5140__auto__$jscomp$45_and__5140__auto____$1$jscomp$17_and__5140__auto____$2$jscomp$6$$ ? ($and__5140__auto__$jscomp$45_and__5140__auto____$1$jscomp$17_and__5140__auto____$2$jscomp$6$$ = "'" !== $ch$jscomp$44$$) ? ($and__5140__auto__$jscomp$45_and__5140__auto____$1$jscomp$17_and__5140__auto____$2$jscomp$6$$ = ":" !== $ch$jscomp$44$$) ? $cljs$tools$reader$edn$macros$$.$cljs$core$IFn$_invoke$arity$1$ ? $cljs$tools$reader$edn$macros$$.$cljs$core$IFn$_invoke$arity$1$($ch$jscomp$44$$) : 
  $cljs$tools$reader$edn$macros$$.call(null, $ch$jscomp$44$$) : $and__5140__auto__$jscomp$45_and__5140__auto____$1$jscomp$17_and__5140__auto____$2$jscomp$6$$ : $and__5140__auto__$jscomp$45_and__5140__auto____$1$jscomp$17_and__5140__auto____$2$jscomp$6$$ : $and__5140__auto__$jscomp$45_and__5140__auto____$1$jscomp$17_and__5140__auto____$2$jscomp$6$$;
};
$cljs$tools$reader$edn$read_token$cljs$0core$0IFn$0_invoke$0arity$04$$ = function($rdr$jscomp$90$$, $kind$jscomp$15$$, $G__49311_ch$jscomp$46_initch$jscomp$8$$, $G__49112$jscomp$inline_2860_G__49310_sb$jscomp$25_validate_leading_QMARK_$$) {
  if ($APP.$cljs$core$not$$($G__49311_ch$jscomp$46_initch$jscomp$8$$)) {
    return $cljs$tools$reader$impl$errors$eof_error$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($rdr$jscomp$90$$, $APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["Unexpected EOF while reading start of ", $APP.$cljs$core$name$$($kind$jscomp$15$$), "."]));
  }
  if ($APP.$cljs$core$truth_$$($APP.$cljs$core$truth_$$($G__49112$jscomp$inline_2860_G__49310_sb$jscomp$25_validate_leading_QMARK_$$) ? $cljs$tools$reader$edn$not_constituent_QMARK_$$($G__49311_ch$jscomp$46_initch$jscomp$8$$) : $G__49112$jscomp$inline_2860_G__49310_sb$jscomp$25_validate_leading_QMARK_$$)) {
    return $cljs$tools$reader$impl$errors$throw_bad_char$$($rdr$jscomp$90$$, $kind$jscomp$15$$, $G__49311_ch$jscomp$46_initch$jscomp$8$$);
  }
  for ($G__49112$jscomp$inline_2860_G__49310_sb$jscomp$25_validate_leading_QMARK_$$ = new $APP.$goog$string$StringBuffer$$();;) {
    if ($cljs$tools$reader$impl$utils$whitespace_QMARK_$$($G__49311_ch$jscomp$46_initch$jscomp$8$$) || $cljs$tools$reader$edn$macro_terminating_QMARK_$$($G__49311_ch$jscomp$46_initch$jscomp$8$$) || $G__49311_ch$jscomp$46_initch$jscomp$8$$ == null) {
      return $G__49311_ch$jscomp$46_initch$jscomp$8$$ != null && $cljs$tools$reader$reader_types$unread$$($rdr$jscomp$90$$, $G__49311_ch$jscomp$46_initch$jscomp$8$$), "" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($G__49112$jscomp$inline_2860_G__49310_sb$jscomp$25_validate_leading_QMARK_$$);
    }
    if ($cljs$tools$reader$edn$not_constituent_QMARK_$$($G__49311_ch$jscomp$46_initch$jscomp$8$$)) {
      return $cljs$tools$reader$impl$errors$throw_bad_char$$($rdr$jscomp$90$$, $kind$jscomp$15$$, $G__49311_ch$jscomp$46_initch$jscomp$8$$);
    }
    $G__49112$jscomp$inline_2860_G__49310_sb$jscomp$25_validate_leading_QMARK_$$.append($G__49311_ch$jscomp$46_initch$jscomp$8$$);
    $G__49311_ch$jscomp$46_initch$jscomp$8$$ = $cljs$tools$reader$reader_types$read_char$$($rdr$jscomp$90$$);
  }
};
$cljs$tools$reader$edn$read_dispatch$$ = function($rdr$jscomp$91$$, $_$jscomp$242_temp__5821__auto__$jscomp$30$$, $opts$jscomp$108$$) {
  $_$jscomp$242_temp__5821__auto__$jscomp$30$$ = $cljs$tools$reader$reader_types$read_char$$($rdr$jscomp$91$$);
  if ($APP.$cljs$core$truth_$$($_$jscomp$242_temp__5821__auto__$jscomp$30$$)) {
    var $temp__5821__auto____$1$jscomp$5$$ = $cljs$tools$reader$edn$dispatch_macros$$.$cljs$core$IFn$_invoke$arity$1$ ? $cljs$tools$reader$edn$dispatch_macros$$.$cljs$core$IFn$_invoke$arity$1$($_$jscomp$242_temp__5821__auto__$jscomp$30$$) : $cljs$tools$reader$edn$dispatch_macros$$.call(null, $_$jscomp$242_temp__5821__auto__$jscomp$30$$);
    if ($APP.$cljs$core$truth_$$($temp__5821__auto____$1$jscomp$5$$)) {
      return $temp__5821__auto____$1$jscomp$5$$.$cljs$core$IFn$_invoke$arity$3$ ? $temp__5821__auto____$1$jscomp$5$$.$cljs$core$IFn$_invoke$arity$3$($rdr$jscomp$91$$, $_$jscomp$242_temp__5821__auto__$jscomp$30$$, $opts$jscomp$108$$) : $temp__5821__auto____$1$jscomp$5$$.call(null, $rdr$jscomp$91$$, $_$jscomp$242_temp__5821__auto__$jscomp$30$$, $opts$jscomp$108$$);
    }
    $cljs$tools$reader$reader_types$unread$$($rdr$jscomp$91$$, $_$jscomp$242_temp__5821__auto__$jscomp$30$$);
    return $cljs$tools$reader$edn$read_tagged$$.$cljs$core$IFn$_invoke$arity$3$ ? $cljs$tools$reader$edn$read_tagged$$.$cljs$core$IFn$_invoke$arity$3$($rdr$jscomp$91$$, $_$jscomp$242_temp__5821__auto__$jscomp$30$$, $opts$jscomp$108$$) : $cljs$tools$reader$edn$read_tagged$$.call(null, $rdr$jscomp$91$$, $_$jscomp$242_temp__5821__auto__$jscomp$30$$, $opts$jscomp$108$$);
  }
  return $cljs$tools$reader$impl$errors$eof_error$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($rdr$jscomp$91$$, $APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["Unexpected EOF while reading dispatch character."]));
};
$cljs$tools$reader$edn$read_unicode_char$cljs$0core$0IFn$0_invoke$0arity$05$$ = function($rdr$jscomp$93$$, $initch$jscomp$9$$, $base$jscomp$14$$, $length$jscomp$30$$, $exact_QMARK_$jscomp$1$$) {
  for (var $i$jscomp$370$$ = 1, $G__49345_uc$jscomp$4$$ = $cljs$tools$reader$impl$utils$char_code$$($initch$jscomp$9$$, $base$jscomp$14$$);;) {
    if ($G__49345_uc$jscomp$4$$ === -1) {
      return $cljs$tools$reader$impl$errors$throw_invalid_unicode_digit$$($rdr$jscomp$93$$, $initch$jscomp$9$$);
    }
    if ($i$jscomp$370$$ !== $length$jscomp$30$$) {
      var $ch$jscomp$49$$ = $cljs$tools$reader$reader_types$peek_char$$($rdr$jscomp$93$$);
      var $JSCompiler_inline_result$jscomp$428_d$jscomp$116_or__5142__auto__$jscomp$inline_2131_or__5142__auto____$1$jscomp$inline_2132$$ = $cljs$tools$reader$impl$utils$whitespace_QMARK_$$($ch$jscomp$49$$);
      $JSCompiler_inline_result$jscomp$428_d$jscomp$116_or__5142__auto__$jscomp$inline_2131_or__5142__auto____$1$jscomp$inline_2132$$ || ($JSCompiler_inline_result$jscomp$428_d$jscomp$116_or__5142__auto__$jscomp$inline_2131_or__5142__auto____$1$jscomp$inline_2132$$ = $cljs$tools$reader$edn$macros$$.$cljs$core$IFn$_invoke$arity$1$ ? $cljs$tools$reader$edn$macros$$.$cljs$core$IFn$_invoke$arity$1$($ch$jscomp$49$$) : $cljs$tools$reader$edn$macros$$.call(null, $ch$jscomp$49$$), $JSCompiler_inline_result$jscomp$428_d$jscomp$116_or__5142__auto__$jscomp$inline_2131_or__5142__auto____$1$jscomp$inline_2132$$ = 
      $APP.$cljs$core$truth_$$($JSCompiler_inline_result$jscomp$428_d$jscomp$116_or__5142__auto__$jscomp$inline_2131_or__5142__auto____$1$jscomp$inline_2132$$) ? $JSCompiler_inline_result$jscomp$428_d$jscomp$116_or__5142__auto__$jscomp$inline_2131_or__5142__auto____$1$jscomp$inline_2132$$ : $ch$jscomp$49$$ == null);
      if ($APP.$cljs$core$truth_$$($JSCompiler_inline_result$jscomp$428_d$jscomp$116_or__5142__auto__$jscomp$inline_2131_or__5142__auto____$1$jscomp$inline_2132$$)) {
        return $APP.$cljs$core$truth_$$($exact_QMARK_$jscomp$1$$) ? $cljs$tools$reader$impl$errors$illegal_arg_error$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($rdr$jscomp$93$$, $APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["Invalid unicode literal. Unicode literals should be ", $length$jscomp$30$$, "characters long. ", "Value supplied is ", $i$jscomp$370$$, " characters long."])) : String.fromCharCode($G__49345_uc$jscomp$4$$);
      }
      $JSCompiler_inline_result$jscomp$428_d$jscomp$116_or__5142__auto__$jscomp$inline_2131_or__5142__auto____$1$jscomp$inline_2132$$ = $cljs$tools$reader$impl$utils$char_code$$($ch$jscomp$49$$, $base$jscomp$14$$);
      $cljs$tools$reader$reader_types$read_char$$($rdr$jscomp$93$$);
      if ($JSCompiler_inline_result$jscomp$428_d$jscomp$116_or__5142__auto__$jscomp$inline_2131_or__5142__auto____$1$jscomp$inline_2132$$ === -1) {
        return $cljs$tools$reader$impl$errors$throw_invalid_unicode_digit$$($rdr$jscomp$93$$, $ch$jscomp$49$$);
      }
      $G__49345_uc$jscomp$4$$ = $JSCompiler_inline_result$jscomp$428_d$jscomp$116_or__5142__auto__$jscomp$inline_2131_or__5142__auto____$1$jscomp$inline_2132$$ + $G__49345_uc$jscomp$4$$ * $base$jscomp$14$$;
      $i$jscomp$370$$ += 1;
    } else {
      return String.fromCharCode($G__49345_uc$jscomp$4$$);
    }
  }
};
$cljs$tools$reader$edn$read_char_STAR_$$ = function($JSCompiler_temp$jscomp$420_rdr$jscomp$94$$) {
  var $c$jscomp$149_ch$jscomp$50_token$jscomp$26_token$jscomp$inline_2135_uc$jscomp$5$$ = $cljs$tools$reader$reader_types$read_char$$($JSCompiler_temp$jscomp$420_rdr$jscomp$94$$);
  if ($c$jscomp$149_ch$jscomp$50_token$jscomp$26_token$jscomp$inline_2135_uc$jscomp$5$$ != null) {
    $c$jscomp$149_ch$jscomp$50_token$jscomp$26_token$jscomp$inline_2135_uc$jscomp$5$$ = $cljs$tools$reader$edn$macro_terminating_QMARK_$$($c$jscomp$149_ch$jscomp$50_token$jscomp$26_token$jscomp$inline_2135_uc$jscomp$5$$) || $cljs$tools$reader$edn$not_constituent_QMARK_$$($c$jscomp$149_ch$jscomp$50_token$jscomp$26_token$jscomp$inline_2135_uc$jscomp$5$$) || $cljs$tools$reader$impl$utils$whitespace_QMARK_$$($c$jscomp$149_ch$jscomp$50_token$jscomp$26_token$jscomp$inline_2135_uc$jscomp$5$$) ? "" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($c$jscomp$149_ch$jscomp$50_token$jscomp$26_token$jscomp$inline_2135_uc$jscomp$5$$) : 
    $cljs$tools$reader$edn$read_token$cljs$0core$0IFn$0_invoke$0arity$04$$($JSCompiler_temp$jscomp$420_rdr$jscomp$94$$, $APP.$cljs$cst$147$character$$, $c$jscomp$149_ch$jscomp$50_token$jscomp$26_token$jscomp$inline_2135_uc$jscomp$5$$, !1);
    var $ic$jscomp$1_len$jscomp$68_token_len$jscomp$1$$ = $c$jscomp$149_ch$jscomp$50_token$jscomp$26_token$jscomp$inline_2135_uc$jscomp$5$$.length;
    if (1 === $ic$jscomp$1_len$jscomp$68_token_len$jscomp$1$$) {
      return $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$02$$($c$jscomp$149_ch$jscomp$50_token$jscomp$26_token$jscomp$inline_2135_uc$jscomp$5$$, 0);
    }
    if ($c$jscomp$149_ch$jscomp$50_token$jscomp$26_token$jscomp$inline_2135_uc$jscomp$5$$ === "newline") {
      return "\n";
    }
    if ($c$jscomp$149_ch$jscomp$50_token$jscomp$26_token$jscomp$inline_2135_uc$jscomp$5$$ === "space") {
      return " ";
    }
    if ($c$jscomp$149_ch$jscomp$50_token$jscomp$26_token$jscomp$inline_2135_uc$jscomp$5$$ === "tab") {
      return "\t";
    }
    if ($c$jscomp$149_ch$jscomp$50_token$jscomp$26_token$jscomp$inline_2135_uc$jscomp$5$$ === "backspace") {
      return "\b";
    }
    if ($c$jscomp$149_ch$jscomp$50_token$jscomp$26_token$jscomp$inline_2135_uc$jscomp$5$$ === "formfeed") {
      return "\f";
    }
    if ($c$jscomp$149_ch$jscomp$50_token$jscomp$26_token$jscomp$inline_2135_uc$jscomp$5$$ === "return") {
      return "\r";
    }
    if ($APP.$cljs$core$truth_$$($c$jscomp$149_ch$jscomp$50_token$jscomp$26_token$jscomp$inline_2135_uc$jscomp$5$$.lastIndexOf("u", 0) == 0)) {
      return $c$jscomp$149_ch$jscomp$50_token$jscomp$26_token$jscomp$inline_2135_uc$jscomp$5$$ = $cljs$tools$reader$edn$read_unicode_char$cljs$0core$0IFn$0_invoke$0arity$04$$($c$jscomp$149_ch$jscomp$50_token$jscomp$26_token$jscomp$inline_2135_uc$jscomp$5$$, 4, 16), $ic$jscomp$1_len$jscomp$68_token_len$jscomp$1$$ = $c$jscomp$149_ch$jscomp$50_token$jscomp$26_token$jscomp$inline_2135_uc$jscomp$5$$.charCodeAt(), $ic$jscomp$1_len$jscomp$68_token_len$jscomp$1$$ > 55295 && $ic$jscomp$1_len$jscomp$68_token_len$jscomp$1$$ < 
      57344 ? ($c$jscomp$149_ch$jscomp$50_token$jscomp$26_token$jscomp$inline_2135_uc$jscomp$5$$ = $ic$jscomp$1_len$jscomp$68_token_len$jscomp$1$$.toString(16), $JSCompiler_temp$jscomp$420_rdr$jscomp$94$$ = $cljs$tools$reader$impl$errors$reader_error$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($JSCompiler_temp$jscomp$420_rdr$jscomp$94$$, $APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["Invalid character literal \\u", $c$jscomp$149_ch$jscomp$50_token$jscomp$26_token$jscomp$inline_2135_uc$jscomp$5$$, 
      "."]))) : $JSCompiler_temp$jscomp$420_rdr$jscomp$94$$ = $c$jscomp$149_ch$jscomp$50_token$jscomp$26_token$jscomp$inline_2135_uc$jscomp$5$$, $JSCompiler_temp$jscomp$420_rdr$jscomp$94$$;
    }
    if ($APP.$cljs$core$truth_$$($c$jscomp$149_ch$jscomp$50_token$jscomp$26_token$jscomp$inline_2135_uc$jscomp$5$$.lastIndexOf("o", 0) == 0)) {
      --$ic$jscomp$1_len$jscomp$68_token_len$jscomp$1$$;
      if ($ic$jscomp$1_len$jscomp$68_token_len$jscomp$1$$ > 3) {
        return $cljs$tools$reader$impl$errors$reader_error$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($JSCompiler_temp$jscomp$420_rdr$jscomp$94$$, $APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["Invalid octal escape sequence in a character literal: ", $c$jscomp$149_ch$jscomp$50_token$jscomp$26_token$jscomp$inline_2135_uc$jscomp$5$$, ". Octal escape sequences must be 3 or fewer digits."]));
      }
      $c$jscomp$149_ch$jscomp$50_token$jscomp$26_token$jscomp$inline_2135_uc$jscomp$5$$ = $cljs$tools$reader$edn$read_unicode_char$cljs$0core$0IFn$0_invoke$0arity$04$$($c$jscomp$149_ch$jscomp$50_token$jscomp$26_token$jscomp$inline_2135_uc$jscomp$5$$, $ic$jscomp$1_len$jscomp$68_token_len$jscomp$1$$, 8);
      return ($c$jscomp$149_ch$jscomp$50_token$jscomp$26_token$jscomp$inline_2135_uc$jscomp$5$$ | 0) > 255 ? $cljs$tools$reader$impl$errors$throw_bad_octal_number$$($JSCompiler_temp$jscomp$420_rdr$jscomp$94$$) : $c$jscomp$149_ch$jscomp$50_token$jscomp$26_token$jscomp$inline_2135_uc$jscomp$5$$;
    }
    return $cljs$tools$reader$impl$errors$reader_error$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($JSCompiler_temp$jscomp$420_rdr$jscomp$94$$, $APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["Unsupported character: ", $c$jscomp$149_ch$jscomp$50_token$jscomp$26_token$jscomp$inline_2135_uc$jscomp$5$$, "."]));
  }
  return $cljs$tools$reader$impl$errors$eof_error$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($JSCompiler_temp$jscomp$420_rdr$jscomp$94$$, $APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["Unexpected EOF while reading character."]));
};
$cljs$tools$reader$edn$read_delimited$$ = function($kind$jscomp$16$$, $delim$jscomp$2_delim__$1$jscomp$1$$, $rdr$jscomp$96$$, $opts$jscomp$111$$) {
  var $start_column$jscomp$6_vec__49210$$ = $cljs$tools$reader$edn$starting_line_col_info$$($rdr$jscomp$96$$), $start_line$jscomp$6$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($start_column$jscomp$6_vec__49210$$, 0, null);
  $start_column$jscomp$6_vec__49210$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($start_column$jscomp$6_vec__49210$$, 1, null);
  $delim$jscomp$2_delim__$1$jscomp$1$$ = $delim$jscomp$2_delim__$1$jscomp$1$$ == null ? null : $cljs$core$char$0$$($delim$jscomp$2_delim__$1$jscomp$1$$);
  for (var $a$jscomp$215$$ = $APP.$cljs$core$_as_transient$$($APP.$cljs$core$PersistentVector$EMPTY$$);;) {
    var $ch$jscomp$51_mret_o$jscomp$152$$ = $cljs$tools$reader$impl$commons$read_past$$($rdr$jscomp$96$$);
    if (!$APP.$cljs$core$truth_$$($ch$jscomp$51_mret_o$jscomp$152$$)) {
      var $macrofn_rdr$jscomp$inline_3451_temp__5821__auto__$jscomp$31$$ = $rdr$jscomp$96$$, $kind$jscomp$inline_3452$$ = $kind$jscomp$16$$, $line$jscomp$inline_3453$$ = $start_line$jscomp$6$$, $column$jscomp$inline_3454$$ = $start_column$jscomp$6_vec__49210$$, $n$jscomp$inline_3455$$ = $APP.$cljs$core$count$$($a$jscomp$215$$);
      $cljs$tools$reader$impl$errors$eof_error$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($macrofn_rdr$jscomp$inline_3451_temp__5821__auto__$jscomp$31$$, $APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["Unexpected EOF while reading ", $APP.$cljs$core$truth_$$($n$jscomp$inline_3455$$) ? "item " + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($n$jscomp$inline_3455$$) + " of " : null, $APP.$cljs$core$name$$($kind$jscomp$inline_3452$$), $APP.$cljs$core$truth_$$($line$jscomp$inline_3453$$) ? 
      ", starting at line " + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($line$jscomp$inline_3453$$) + " and column " + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($column$jscomp$inline_3454$$) : null, "."]));
    }
    if ($APP.$cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$($delim$jscomp$2_delim__$1$jscomp$1$$, $ch$jscomp$51_mret_o$jscomp$152$$ == null ? null : $cljs$core$char$0$$($ch$jscomp$51_mret_o$jscomp$152$$))) {
      return $APP.$cljs$core$_persistent_BANG_$$($a$jscomp$215$$);
    }
    $macrofn_rdr$jscomp$inline_3451_temp__5821__auto__$jscomp$31$$ = $cljs$tools$reader$edn$macros$$.$cljs$core$IFn$_invoke$arity$1$ ? $cljs$tools$reader$edn$macros$$.$cljs$core$IFn$_invoke$arity$1$($ch$jscomp$51_mret_o$jscomp$152$$) : $cljs$tools$reader$edn$macros$$.call(null, $ch$jscomp$51_mret_o$jscomp$152$$);
    $APP.$cljs$core$truth_$$($macrofn_rdr$jscomp$inline_3451_temp__5821__auto__$jscomp$31$$) ? ($ch$jscomp$51_mret_o$jscomp$152$$ = $macrofn_rdr$jscomp$inline_3451_temp__5821__auto__$jscomp$31$$.$cljs$core$IFn$_invoke$arity$3$ ? $macrofn_rdr$jscomp$inline_3451_temp__5821__auto__$jscomp$31$$.$cljs$core$IFn$_invoke$arity$3$($rdr$jscomp$96$$, $ch$jscomp$51_mret_o$jscomp$152$$, $opts$jscomp$111$$) : $macrofn_rdr$jscomp$inline_3451_temp__5821__auto__$jscomp$31$$.call(null, $rdr$jscomp$96$$, $ch$jscomp$51_mret_o$jscomp$152$$, 
    $opts$jscomp$111$$), $a$jscomp$215$$ = $ch$jscomp$51_mret_o$jscomp$152$$ !== $rdr$jscomp$96$$ ? $APP.$cljs$core$conj_BANG_$$.$cljs$core$IFn$_invoke$arity$2$($a$jscomp$215$$, $ch$jscomp$51_mret_o$jscomp$152$$) : $a$jscomp$215$$) : ($cljs$tools$reader$reader_types$unread$$($rdr$jscomp$96$$, $ch$jscomp$51_mret_o$jscomp$152$$), $ch$jscomp$51_mret_o$jscomp$152$$ = $cljs$tools$reader$edn$read$cljs$0core$0IFn$0_invoke$0arity$04$$ ? $cljs$tools$reader$edn$read$cljs$0core$0IFn$0_invoke$0arity$04$$($rdr$jscomp$96$$, 
    !0, null, $opts$jscomp$111$$) : $cljs$tools$reader$edn$read$$.call(null, $rdr$jscomp$96$$, !0, null, $opts$jscomp$111$$), $a$jscomp$215$$ = $ch$jscomp$51_mret_o$jscomp$152$$ !== $rdr$jscomp$96$$ ? $APP.$cljs$core$conj_BANG_$$.$cljs$core$IFn$_invoke$arity$2$($a$jscomp$215$$, $ch$jscomp$51_mret_o$jscomp$152$$) : $a$jscomp$215$$);
  }
};
$cljs$tools$reader$edn$read_list$$ = function($rdr$jscomp$97_the_list$jscomp$1$$, $_$jscomp$243$$, $opts$jscomp$112$$) {
  $rdr$jscomp$97_the_list$jscomp$1$$ = $cljs$tools$reader$edn$read_delimited$$($APP.$cljs$cst$135$list$$, ")", $rdr$jscomp$97_the_list$jscomp$1$$, $opts$jscomp$112$$);
  return $APP.$cljs$core$empty_QMARK_$$($rdr$jscomp$97_the_list$jscomp$1$$) ? $APP.$cljs$core$List$EMPTY$$ : $APP.$cljs$core$apply$$.$cljs$core$IFn$_invoke$arity$2$($APP.$cljs$core$list$$, $rdr$jscomp$97_the_list$jscomp$1$$);
};
$cljs$tools$reader$edn$read_vector$$ = function($rdr$jscomp$98$$, $_$jscomp$244$$, $opts$jscomp$113$$) {
  return $cljs$tools$reader$edn$read_delimited$$($APP.$cljs$cst$134$vector$$, "]", $rdr$jscomp$98$$, $opts$jscomp$113$$);
};
$cljs$tools$reader$edn$read_map$$ = function($JSCompiler_temp$jscomp$406_arr__$1$jscomp$inline_2140_arr__$2$jscomp$inline_2870_rdr$jscomp$99$$, $_$jscomp$245_len$jscomp$inline_2141_start_line$jscomp$7$$, $G__50771$jscomp$inline_2144_opts$jscomp$114_the_map$jscomp$1$$) {
  var $i$jscomp$inline_2142_start_column$jscomp$7_vec__49221$$ = $cljs$tools$reader$edn$starting_line_col_info$$($JSCompiler_temp$jscomp$406_arr__$1$jscomp$inline_2140_arr__$2$jscomp$inline_2870_rdr$jscomp$99$$);
  $_$jscomp$245_len$jscomp$inline_2141_start_line$jscomp$7$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($i$jscomp$inline_2142_start_column$jscomp$7_vec__49221$$, 0, null);
  $i$jscomp$inline_2142_start_column$jscomp$7_vec__49221$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($i$jscomp$inline_2142_start_column$jscomp$7_vec__49221$$, 1, null);
  $G__50771$jscomp$inline_2144_opts$jscomp$114_the_map$jscomp$1$$ = $cljs$tools$reader$edn$read_delimited$$($APP.$cljs$cst$136$map$$, "}", $JSCompiler_temp$jscomp$406_arr__$1$jscomp$inline_2140_arr__$2$jscomp$inline_2870_rdr$jscomp$99$$, $G__50771$jscomp$inline_2144_opts$jscomp$114_the_map$jscomp$1$$);
  var $G__50772$jscomp$inline_2145_map_count$jscomp$1_ret$jscomp$inline_2143$$ = $APP.$cljs$core$count$$($G__50771$jscomp$inline_2144_opts$jscomp$114_the_map$jscomp$1$$), $ks$jscomp$20$$ = $cljs$core$take_nth$cljs$0core$0IFn$0_invoke$0arity$02$$(2, $G__50771$jscomp$inline_2144_opts$jscomp$114_the_map$jscomp$1$$), $key_set$jscomp$1$$ = $APP.$cljs$core$set$$($ks$jscomp$20$$);
  !$APP.$cljs$core$even_QMARK_$$($G__50772$jscomp$inline_2145_map_count$jscomp$1_ret$jscomp$inline_2143$$) && $cljs$tools$reader$impl$errors$throw_odd_map$$($JSCompiler_temp$jscomp$406_arr__$1$jscomp$inline_2140_arr__$2$jscomp$inline_2870_rdr$jscomp$99$$, $_$jscomp$245_len$jscomp$inline_2141_start_line$jscomp$7$$, $i$jscomp$inline_2142_start_column$jscomp$7_vec__49221$$, $G__50771$jscomp$inline_2144_opts$jscomp$114_the_map$jscomp$1$$);
  $APP.$cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$($APP.$cljs$core$count$$($key_set$jscomp$1$$), $APP.$cljs$core$count$$($ks$jscomp$20$$)) || $cljs$tools$reader$impl$errors$throw_dup_keys$$($JSCompiler_temp$jscomp$406_arr__$1$jscomp$inline_2140_arr__$2$jscomp$inline_2870_rdr$jscomp$99$$, $APP.$cljs$cst$136$map$$, $ks$jscomp$20$$);
  if ($G__50772$jscomp$inline_2145_map_count$jscomp$1_ret$jscomp$inline_2143$$ <= 2 * $APP.$cljs$core$PersistentArrayMap$HASHMAP_THRESHOLD$$) {
    $JSCompiler_temp$jscomp$406_arr__$1$jscomp$inline_2140_arr__$2$jscomp$inline_2870_rdr$jscomp$99$$ = $APP.$cljs$core$to_array$$($G__50771$jscomp$inline_2144_opts$jscomp$114_the_map$jscomp$1$$), $JSCompiler_temp$jscomp$406_arr__$1$jscomp$inline_2140_arr__$2$jscomp$inline_2870_rdr$jscomp$99$$ = new $APP.$cljs$core$PersistentArrayMap$$(null, $JSCompiler_temp$jscomp$406_arr__$1$jscomp$inline_2140_arr__$2$jscomp$inline_2870_rdr$jscomp$99$$.length / 2, $JSCompiler_temp$jscomp$406_arr__$1$jscomp$inline_2140_arr__$2$jscomp$inline_2870_rdr$jscomp$99$$, 
    null);
  } else {
    a: {
      $JSCompiler_temp$jscomp$406_arr__$1$jscomp$inline_2140_arr__$2$jscomp$inline_2870_rdr$jscomp$99$$ = $APP.$cljs$core$to_array$$($G__50771$jscomp$inline_2144_opts$jscomp$114_the_map$jscomp$1$$);
      $_$jscomp$245_len$jscomp$inline_2141_start_line$jscomp$7$$ = $JSCompiler_temp$jscomp$406_arr__$1$jscomp$inline_2140_arr__$2$jscomp$inline_2870_rdr$jscomp$99$$.length;
      $i$jscomp$inline_2142_start_column$jscomp$7_vec__49221$$ = 0;
      for ($G__50772$jscomp$inline_2145_map_count$jscomp$1_ret$jscomp$inline_2143$$ = $APP.$cljs$core$_as_transient$$($APP.$cljs$core$PersistentHashMap$EMPTY$$);;) {
        if ($i$jscomp$inline_2142_start_column$jscomp$7_vec__49221$$ < $_$jscomp$245_len$jscomp$inline_2141_start_line$jscomp$7$$) {
          $G__50771$jscomp$inline_2144_opts$jscomp$114_the_map$jscomp$1$$ = $i$jscomp$inline_2142_start_column$jscomp$7_vec__49221$$ + 2, $G__50772$jscomp$inline_2145_map_count$jscomp$1_ret$jscomp$inline_2143$$ = $APP.$cljs$core$_assoc_BANG_$$($G__50772$jscomp$inline_2145_map_count$jscomp$1_ret$jscomp$inline_2143$$, $JSCompiler_temp$jscomp$406_arr__$1$jscomp$inline_2140_arr__$2$jscomp$inline_2870_rdr$jscomp$99$$[$i$jscomp$inline_2142_start_column$jscomp$7_vec__49221$$], $JSCompiler_temp$jscomp$406_arr__$1$jscomp$inline_2140_arr__$2$jscomp$inline_2870_rdr$jscomp$99$$[$i$jscomp$inline_2142_start_column$jscomp$7_vec__49221$$ + 
          1]), $i$jscomp$inline_2142_start_column$jscomp$7_vec__49221$$ = $G__50771$jscomp$inline_2144_opts$jscomp$114_the_map$jscomp$1$$;
        } else {
          $JSCompiler_temp$jscomp$406_arr__$1$jscomp$inline_2140_arr__$2$jscomp$inline_2870_rdr$jscomp$99$$ = $APP.$cljs$core$_persistent_BANG_$$($G__50772$jscomp$inline_2145_map_count$jscomp$1_ret$jscomp$inline_2143$$);
          break a;
        }
      }
      $JSCompiler_temp$jscomp$406_arr__$1$jscomp$inline_2140_arr__$2$jscomp$inline_2870_rdr$jscomp$99$$ = void 0;
    }
  }
  return $JSCompiler_temp$jscomp$406_arr__$1$jscomp$inline_2140_arr__$2$jscomp$inline_2870_rdr$jscomp$99$$;
};
$cljs$tools$reader$edn$read_number$$ = function($rdr$jscomp$100$$, $initch$jscomp$10$$) {
  for (var $sb$jscomp$26$$ = function() {
    var $G__49228$$ = new $APP.$goog$string$StringBuffer$$();
    $G__49228$$.append($initch$jscomp$10$$);
    return $G__49228$$;
  }(), $ch$jscomp$52$$ = $cljs$tools$reader$reader_types$read_char$$($rdr$jscomp$100$$);;) {
    if ($APP.$cljs$core$truth_$$(function() {
      var $or__5142__auto__$jscomp$65_or__5142__auto____$1$jscomp$19$$ = $cljs$tools$reader$impl$utils$whitespace_QMARK_$$($ch$jscomp$52$$);
      if ($or__5142__auto__$jscomp$65_or__5142__auto____$1$jscomp$19$$) {
        return $or__5142__auto__$jscomp$65_or__5142__auto____$1$jscomp$19$$;
      }
      $or__5142__auto__$jscomp$65_or__5142__auto____$1$jscomp$19$$ = $cljs$tools$reader$edn$macros$$.$cljs$core$IFn$_invoke$arity$1$ ? $cljs$tools$reader$edn$macros$$.$cljs$core$IFn$_invoke$arity$1$($ch$jscomp$52$$) : $cljs$tools$reader$edn$macros$$.call(null, $ch$jscomp$52$$);
      return $APP.$cljs$core$truth_$$($or__5142__auto__$jscomp$65_or__5142__auto____$1$jscomp$19$$) ? $or__5142__auto__$jscomp$65_or__5142__auto____$1$jscomp$19$$ : $ch$jscomp$52$$ == null;
    }())) {
      var $G__49381_s$jscomp$187$$ = "" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($sb$jscomp$26$$);
      $ch$jscomp$52$$ != null && $cljs$tools$reader$reader_types$unread$$($rdr$jscomp$100$$, $ch$jscomp$52$$);
      var $G__49382_or__5142__auto__$jscomp$64$$ = $cljs$tools$reader$impl$commons$match_number$$($G__49381_s$jscomp$187$$);
      return $APP.$cljs$core$truth_$$($G__49382_or__5142__auto__$jscomp$64$$) ? $G__49382_or__5142__auto__$jscomp$64$$ : $cljs$tools$reader$impl$errors$reader_error$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($rdr$jscomp$100$$, $APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["Invalid number: ", $G__49381_s$jscomp$187$$, "."]));
    }
    $G__49381_s$jscomp$187$$ = function() {
      var $G__49229$$ = $sb$jscomp$26$$;
      $G__49229$$.append($ch$jscomp$52$$);
      return $G__49229$$;
    }();
    $G__49382_or__5142__auto__$jscomp$64$$ = $cljs$tools$reader$reader_types$read_char$$($rdr$jscomp$100$$);
    $sb$jscomp$26$$ = $G__49381_s$jscomp$187$$;
    $ch$jscomp$52$$ = $G__49382_or__5142__auto__$jscomp$64$$;
  }
};
$cljs$tools$reader$edn$escape_char$$ = function($rdr$jscomp$101$$) {
  var $ch$jscomp$53_ch__$1$jscomp$5$$ = $cljs$tools$reader$reader_types$read_char$$($rdr$jscomp$101$$);
  switch($ch$jscomp$53_ch__$1$jscomp$5$$) {
    case "t":
      return "\t";
    case "r":
      return "\r";
    case "n":
      return "\n";
    case "\\":
      return "\\";
    case '"':
      return '"';
    case "b":
      return "\b";
    case "f":
      return "\f";
    case "u":
      return $ch$jscomp$53_ch__$1$jscomp$5$$ = $cljs$tools$reader$reader_types$read_char$$($rdr$jscomp$101$$), -1 === parseInt($ch$jscomp$53_ch__$1$jscomp$5$$ | 0, 16) ? $cljs$tools$reader$impl$errors$reader_error$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($rdr$jscomp$101$$, $APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["Invalid unicode escape: \\u", $ch$jscomp$53_ch__$1$jscomp$5$$, "."])) : $cljs$tools$reader$edn$read_unicode_char$cljs$0core$0IFn$0_invoke$0arity$05$$($rdr$jscomp$101$$, 
      $ch$jscomp$53_ch__$1$jscomp$5$$, 16, 4, !0);
    default:
      return $cljs$tools$reader$impl$utils$numeric_QMARK_$$($ch$jscomp$53_ch__$1$jscomp$5$$) ? ($ch$jscomp$53_ch__$1$jscomp$5$$ = $cljs$tools$reader$edn$read_unicode_char$cljs$0core$0IFn$0_invoke$0arity$05$$($rdr$jscomp$101$$, $ch$jscomp$53_ch__$1$jscomp$5$$, 8, 3, !1), ($ch$jscomp$53_ch__$1$jscomp$5$$ | 0) > 255 ? $cljs$tools$reader$impl$errors$throw_bad_octal_number$$($rdr$jscomp$101$$) : $ch$jscomp$53_ch__$1$jscomp$5$$) : $cljs$tools$reader$impl$errors$reader_error$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($rdr$jscomp$101$$, 
      $APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["Unsupported escape character: \\", $ch$jscomp$53_ch__$1$jscomp$5$$, "."]));
  }
};
$cljs$tools$reader$edn$read_string_STAR_$$ = function($rdr$jscomp$102$$) {
  for (var $sb$jscomp$28$$ = new $APP.$goog$string$StringBuffer$$(), $ch$jscomp$54$$ = $cljs$tools$reader$reader_types$read_char$$($rdr$jscomp$102$$);;) {
    var $G__49231_G__49390_G__49394$$ = $ch$jscomp$54$$;
    if ($APP.$cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$(null, $G__49231_G__49390_G__49394$$)) {
      return $cljs$tools$reader$impl$errors$throw_eof_reading$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($rdr$jscomp$102$$, $APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(['"', $sb$jscomp$28$$]));
    }
    if ($APP.$cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$("\\", $G__49231_G__49390_G__49394$$)) {
      $G__49231_G__49390_G__49394$$ = function() {
        var $G__49232$$ = $sb$jscomp$28$$;
        $G__49232$$.append($cljs$tools$reader$edn$escape_char$$($rdr$jscomp$102$$));
        return $G__49232$$;
      }();
      var $G__49391_G__49395$$ = $cljs$tools$reader$reader_types$read_char$$($rdr$jscomp$102$$);
      $sb$jscomp$28$$ = $G__49231_G__49390_G__49394$$;
      $ch$jscomp$54$$ = $G__49391_G__49395$$;
    } else {
      if ($APP.$cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$('"', $G__49231_G__49390_G__49394$$)) {
        return "" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($sb$jscomp$28$$);
      }
      $G__49231_G__49390_G__49394$$ = function() {
        var $G__49233$$ = $sb$jscomp$28$$;
        $G__49233$$.append($ch$jscomp$54$$);
        return $G__49233$$;
      }();
      $G__49391_G__49395$$ = $cljs$tools$reader$reader_types$read_char$$($rdr$jscomp$102$$);
      $sb$jscomp$28$$ = $G__49231_G__49390_G__49394$$;
      $ch$jscomp$54$$ = $G__49391_G__49395$$;
    }
  }
};
$cljs$tools$reader$edn$read_symbol$$ = function($rdr$jscomp$103$$, $initch$jscomp$11_temp__5823__auto__$jscomp$52$$) {
  $initch$jscomp$11_temp__5823__auto__$jscomp$52$$ = $cljs$tools$reader$edn$read_token$cljs$0core$0IFn$0_invoke$0arity$04$$($rdr$jscomp$103$$, $APP.$cljs$cst$151$symbol$$, $initch$jscomp$11_temp__5823__auto__$jscomp$52$$, !0);
  if ($APP.$cljs$core$truth_$$($initch$jscomp$11_temp__5823__auto__$jscomp$52$$)) {
    switch($initch$jscomp$11_temp__5823__auto__$jscomp$52$$) {
      case "nil":
        return null;
      case "true":
        return !0;
      case "false":
        return !1;
      case "/":
        return $APP.$cljs$cst$152$_SLASH_$$;
      default:
        var $or__5142__auto__$jscomp$66_temp__5823__auto____$1$jscomp$inline_2147$$ = $cljs$tools$reader$impl$commons$parse_symbol$$($initch$jscomp$11_temp__5823__auto__$jscomp$52$$);
        $or__5142__auto__$jscomp$66_temp__5823__auto____$1$jscomp$inline_2147$$ = $APP.$cljs$core$truth_$$($or__5142__auto__$jscomp$66_temp__5823__auto____$1$jscomp$inline_2147$$) ? $APP.$cljs$core$symbol$$.$cljs$core$IFn$_invoke$arity$2$($or__5142__auto__$jscomp$66_temp__5823__auto____$1$jscomp$inline_2147$$.$cljs$core$IFn$_invoke$arity$1$ ? $or__5142__auto__$jscomp$66_temp__5823__auto____$1$jscomp$inline_2147$$.$cljs$core$IFn$_invoke$arity$1$(0) : $or__5142__auto__$jscomp$66_temp__5823__auto____$1$jscomp$inline_2147$$.call(null, 
        0), $or__5142__auto__$jscomp$66_temp__5823__auto____$1$jscomp$inline_2147$$.$cljs$core$IFn$_invoke$arity$1$ ? $or__5142__auto__$jscomp$66_temp__5823__auto____$1$jscomp$inline_2147$$.$cljs$core$IFn$_invoke$arity$1$(1) : $or__5142__auto__$jscomp$66_temp__5823__auto____$1$jscomp$inline_2147$$.call(null, 1)) : null;
        return $APP.$cljs$core$truth_$$($or__5142__auto__$jscomp$66_temp__5823__auto____$1$jscomp$inline_2147$$) ? $or__5142__auto__$jscomp$66_temp__5823__auto____$1$jscomp$inline_2147$$ : $cljs$tools$reader$impl$errors$throw_invalid$$($rdr$jscomp$103$$, $APP.$cljs$cst$151$symbol$$, $initch$jscomp$11_temp__5823__auto__$jscomp$52$$);
    }
  } else {
    return null;
  }
};
$cljs$tools$reader$edn$read_keyword$$ = function($reader$jscomp$42$$) {
  var $ch$jscomp$55_token$jscomp$28$$ = $cljs$tools$reader$reader_types$read_char$$($reader$jscomp$42$$);
  if ($cljs$tools$reader$impl$utils$whitespace_QMARK_$$($ch$jscomp$55_token$jscomp$28$$)) {
    return $cljs$tools$reader$impl$errors$reader_error$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($reader$jscomp$42$$, $APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["A single colon is not a valid keyword."]));
  }
  $ch$jscomp$55_token$jscomp$28$$ = $cljs$tools$reader$edn$read_token$cljs$0core$0IFn$0_invoke$0arity$04$$($reader$jscomp$42$$, $APP.$cljs$cst$153$keyword$$, $ch$jscomp$55_token$jscomp$28$$, !0);
  var $name$jscomp$137_s$jscomp$188$$ = $cljs$tools$reader$impl$commons$parse_symbol$$($ch$jscomp$55_token$jscomp$28$$);
  if ($APP.$cljs$core$truth_$$($APP.$cljs$core$truth_$$($name$jscomp$137_s$jscomp$188$$) ? -1 === $ch$jscomp$55_token$jscomp$28$$.indexOf("::") : $name$jscomp$137_s$jscomp$188$$)) {
    var $ns$jscomp$21$$ = $name$jscomp$137_s$jscomp$188$$.$cljs$core$IFn$_invoke$arity$1$ ? $name$jscomp$137_s$jscomp$188$$.$cljs$core$IFn$_invoke$arity$1$(0) : $name$jscomp$137_s$jscomp$188$$.call(null, 0);
    $name$jscomp$137_s$jscomp$188$$ = $name$jscomp$137_s$jscomp$188$$.$cljs$core$IFn$_invoke$arity$1$ ? $name$jscomp$137_s$jscomp$188$$.$cljs$core$IFn$_invoke$arity$1$(1) : $name$jscomp$137_s$jscomp$188$$.call(null, 1);
    return ":" === $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$02$$($ch$jscomp$55_token$jscomp$28$$, 0) ? $cljs$tools$reader$impl$errors$throw_invalid$$($reader$jscomp$42$$, $APP.$cljs$cst$153$keyword$$, "" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$(":") + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($ch$jscomp$55_token$jscomp$28$$)) : $APP.$cljs$core$keyword$$.$cljs$core$IFn$_invoke$arity$2$($ns$jscomp$21$$, $name$jscomp$137_s$jscomp$188$$);
  }
  return $cljs$tools$reader$impl$errors$throw_invalid$$($reader$jscomp$42$$, $APP.$cljs$cst$153$keyword$$, "" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$(":") + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($ch$jscomp$55_token$jscomp$28$$));
};
$cljs$tools$reader$edn$read_meta$$ = function($rdr$jscomp$105$$, $_$jscomp$248_f$jscomp$inline_2149_m$jscomp$91$$, $o$jscomp$153_opts$jscomp$119$$) {
  $_$jscomp$248_f$jscomp$inline_2149_m$jscomp$91$$ = $cljs$tools$reader$edn$read$cljs$0core$0IFn$0_invoke$0arity$04$$ ? $cljs$tools$reader$edn$read$cljs$0core$0IFn$0_invoke$0arity$04$$($rdr$jscomp$105$$, !0, null, $o$jscomp$153_opts$jscomp$119$$) : $cljs$tools$reader$edn$read$$.call(null, $rdr$jscomp$105$$, !0, null, $o$jscomp$153_opts$jscomp$119$$);
  $_$jscomp$248_f$jscomp$inline_2149_m$jscomp$91$$ = $_$jscomp$248_f$jscomp$inline_2149_m$jscomp$91$$ instanceof $APP.$cljs$core$Keyword$$ ? $APP.$cljs$core$PersistentArrayMap$createAsIfByAssoc$$([$_$jscomp$248_f$jscomp$inline_2149_m$jscomp$91$$, !0]) : $_$jscomp$248_f$jscomp$inline_2149_m$jscomp$91$$ instanceof $APP.$cljs$core$Symbol$$ ? new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $_$jscomp$248_f$jscomp$inline_2149_m$jscomp$91$$], null) : typeof $_$jscomp$248_f$jscomp$inline_2149_m$jscomp$91$$ === 
  "string" ? new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $_$jscomp$248_f$jscomp$inline_2149_m$jscomp$91$$], null) : $APP.$cljs$core$vector_QMARK_$$($_$jscomp$248_f$jscomp$inline_2149_m$jscomp$91$$) ? new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$111$param_tags$$, $_$jscomp$248_f$jscomp$inline_2149_m$jscomp$91$$], null) : $_$jscomp$248_f$jscomp$inline_2149_m$jscomp$91$$;
  $APP.$cljs$core$map_QMARK_$$($_$jscomp$248_f$jscomp$inline_2149_m$jscomp$91$$) || $cljs$tools$reader$impl$errors$reader_error$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($rdr$jscomp$105$$, $APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["Metadata cannot be ", $cljs$tools$reader$impl$inspect$inspect$cljs$0core$0IFn$0_invoke$0arity$01$$($_$jscomp$248_f$jscomp$inline_2149_m$jscomp$91$$), ". Metadata must be a Symbol, Keyword, String, Map or Vector."]));
  $o$jscomp$153_opts$jscomp$119$$ = $cljs$tools$reader$edn$read$cljs$0core$0IFn$0_invoke$0arity$04$$ ? $cljs$tools$reader$edn$read$cljs$0core$0IFn$0_invoke$0arity$04$$($rdr$jscomp$105$$, !0, null, $o$jscomp$153_opts$jscomp$119$$) : $cljs$tools$reader$edn$read$$.call(null, $rdr$jscomp$105$$, !0, null, $o$jscomp$153_opts$jscomp$119$$);
  return $o$jscomp$153_opts$jscomp$119$$ != null && ($o$jscomp$153_opts$jscomp$119$$.$cljs$lang$protocol_mask$partition0$$ & 131072 || $APP.$cljs$core$PROTOCOL_SENTINEL$$ === $o$jscomp$153_opts$jscomp$119$$.$cljs$core$IMeta$$) ? $APP.$cljs$core$with_meta$$($o$jscomp$153_opts$jscomp$119$$, $APP.$cljs$core$merge$$.$cljs$core$IFn$_invoke$arity$variadic$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$cljs$core$meta$$($o$jscomp$153_opts$jscomp$119$$), $_$jscomp$248_f$jscomp$inline_2149_m$jscomp$91$$]))) : 
  $cljs$tools$reader$impl$errors$reader_error$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($rdr$jscomp$105$$, $APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["Metadata can not be applied to ", $cljs$tools$reader$impl$inspect$inspect$cljs$0core$0IFn$0_invoke$0arity$01$$($o$jscomp$153_opts$jscomp$119$$), ". ", "Metadata can only be applied to IMetas."]));
};
$cljs$tools$reader$edn$read_set$$ = function($rdr$jscomp$106$$, $_$jscomp$249_coll$jscomp$1008$$, $opts$jscomp$120_the_set$jscomp$1$$) {
  $_$jscomp$249_coll$jscomp$1008$$ = $cljs$tools$reader$edn$read_delimited$$($APP.$cljs$cst$137$set$$, "}", $rdr$jscomp$106$$, $opts$jscomp$120_the_set$jscomp$1$$);
  $opts$jscomp$120_the_set$jscomp$1$$ = $APP.$cljs$core$set$$($_$jscomp$249_coll$jscomp$1008$$);
  $APP.$cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$($APP.$cljs$core$count$$($_$jscomp$249_coll$jscomp$1008$$), $APP.$cljs$core$count$$($opts$jscomp$120_the_set$jscomp$1$$)) || $cljs$tools$reader$impl$errors$throw_dup_keys$$($rdr$jscomp$106$$, $APP.$cljs$cst$137$set$$, $_$jscomp$249_coll$jscomp$1008$$);
  return $opts$jscomp$120_the_set$jscomp$1$$;
};
$cljs$tools$reader$edn$read_discard$$ = function($rdr$jscomp$107$$) {
  $cljs$tools$reader$edn$read$cljs$0core$0IFn$0_invoke$0arity$04$$ ? $cljs$tools$reader$edn$read$cljs$0core$0IFn$0_invoke$0arity$04$$($rdr$jscomp$107$$, !0, null, !0) : $cljs$tools$reader$edn$read$$.call(null, $rdr$jscomp$107$$, !0, null, !0);
  return $rdr$jscomp$107$$;
};
$cljs$tools$reader$edn$read_namespaced_map$$ = function($rdr$jscomp$108$$, $_$jscomp$251_initch$jscomp$inline_2874_keys$jscomp$20_n$jscomp$inline_2880_token$jscomp$29$$, $items$jscomp$7_opts$jscomp$122_vals$jscomp$9$$) {
  $_$jscomp$251_initch$jscomp$inline_2874_keys$jscomp$20_n$jscomp$inline_2880_token$jscomp$29$$ = $cljs$tools$reader$reader_types$read_char$$($rdr$jscomp$108$$);
  $_$jscomp$251_initch$jscomp$inline_2874_keys$jscomp$20_n$jscomp$inline_2880_token$jscomp$29$$ = $cljs$tools$reader$edn$read_token$cljs$0core$0IFn$0_invoke$0arity$04$$($rdr$jscomp$108$$, $APP.$cljs$cst$179$namespaced_map$$, $_$jscomp$251_initch$jscomp$inline_2874_keys$jscomp$20_n$jscomp$inline_2880_token$jscomp$29$$, !0);
  var $G__49251__$1$jscomp$inline_2154_b$jscomp$inline_2878$$ = $_$jscomp$251_initch$jscomp$inline_2874_keys$jscomp$20_n$jscomp$inline_2880_token$jscomp$29$$ == null ? null : $cljs$tools$reader$impl$commons$parse_symbol$$($_$jscomp$251_initch$jscomp$inline_2874_keys$jscomp$20_n$jscomp$inline_2880_token$jscomp$29$$);
  if ($G__49251__$1$jscomp$inline_2154_b$jscomp$inline_2878$$ == null) {
    var $JSCompiler_temp$jscomp$2292_a$jscomp$inline_2877_temp__5821__auto__$jscomp$32$$ = null;
  } else {
    $JSCompiler_temp$jscomp$2292_a$jscomp$inline_2877_temp__5821__auto__$jscomp$32$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__49251__$1$jscomp$inline_2154_b$jscomp$inline_2878$$, 0, null), $G__49251__$1$jscomp$inline_2154_b$jscomp$inline_2878$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__49251__$1$jscomp$inline_2154_b$jscomp$inline_2878$$, 1, null), $JSCompiler_temp$jscomp$2292_a$jscomp$inline_2877_temp__5821__auto__$jscomp$32$$ = $APP.$cljs$core$truth_$$($JSCompiler_temp$jscomp$2292_a$jscomp$inline_2877_temp__5821__auto__$jscomp$32$$) ? 
    null : $G__49251__$1$jscomp$inline_2154_b$jscomp$inline_2878$$;
  }
  return $APP.$cljs$core$truth_$$($JSCompiler_temp$jscomp$2292_a$jscomp$inline_2877_temp__5821__auto__$jscomp$32$$) ? $cljs$tools$reader$impl$commons$read_past$$($rdr$jscomp$108$$) === "{" ? ($items$jscomp$7_opts$jscomp$122_vals$jscomp$9$$ = $cljs$tools$reader$edn$read_delimited$$($APP.$cljs$cst$179$namespaced_map$$, "}", $rdr$jscomp$108$$, $items$jscomp$7_opts$jscomp$122_vals$jscomp$9$$), $_$jscomp$251_initch$jscomp$inline_2874_keys$jscomp$20_n$jscomp$inline_2880_token$jscomp$29$$ = $APP.$cljs$core$count$$($items$jscomp$7_opts$jscomp$122_vals$jscomp$9$$), 
  !$APP.$cljs$core$even_QMARK_$$($_$jscomp$251_initch$jscomp$inline_2874_keys$jscomp$20_n$jscomp$inline_2880_token$jscomp$29$$) && $cljs$tools$reader$impl$errors$throw_odd_map$$($rdr$jscomp$108$$, null, null, $items$jscomp$7_opts$jscomp$122_vals$jscomp$9$$), $_$jscomp$251_initch$jscomp$inline_2874_keys$jscomp$20_n$jscomp$inline_2880_token$jscomp$29$$ = $cljs$tools$reader$impl$utils$namespace_keys$$("" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($JSCompiler_temp$jscomp$2292_a$jscomp$inline_2877_temp__5821__auto__$jscomp$32$$), 
  $cljs$core$take_nth$cljs$0core$0IFn$0_invoke$0arity$02$$(2, $items$jscomp$7_opts$jscomp$122_vals$jscomp$9$$)), $items$jscomp$7_opts$jscomp$122_vals$jscomp$9$$ = $cljs$core$take_nth$cljs$0core$0IFn$0_invoke$0arity$02$$(2, $APP.$cljs$core$rest$$($items$jscomp$7_opts$jscomp$122_vals$jscomp$9$$)), $APP.$cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$($APP.$cljs$core$count$$($APP.$cljs$core$set$$($_$jscomp$251_initch$jscomp$inline_2874_keys$jscomp$20_n$jscomp$inline_2880_token$jscomp$29$$)), $APP.$cljs$core$count$$($_$jscomp$251_initch$jscomp$inline_2874_keys$jscomp$20_n$jscomp$inline_2880_token$jscomp$29$$)) || 
  $cljs$tools$reader$impl$errors$throw_dup_keys$$($rdr$jscomp$108$$, $APP.$cljs$cst$179$namespaced_map$$, $_$jscomp$251_initch$jscomp$inline_2874_keys$jscomp$20_n$jscomp$inline_2880_token$jscomp$29$$), $APP.$cljs$core$zipmap$$($_$jscomp$251_initch$jscomp$inline_2874_keys$jscomp$20_n$jscomp$inline_2880_token$jscomp$29$$, $items$jscomp$7_opts$jscomp$122_vals$jscomp$9$$)) : $cljs$tools$reader$impl$errors$reader_error$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($rdr$jscomp$108$$, $APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["Namespaced map with namespace ", 
  $_$jscomp$251_initch$jscomp$inline_2874_keys$jscomp$20_n$jscomp$inline_2880_token$jscomp$29$$, " does not specify a map."])) : $cljs$tools$reader$impl$errors$reader_error$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($rdr$jscomp$108$$, $APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["Invalid value used as namespace in namespaced map: ", $_$jscomp$251_initch$jscomp$inline_2874_keys$jscomp$20_n$jscomp$inline_2880_token$jscomp$29$$, "."]));
};
$cljs$tools$reader$edn$read_symbolic_value$$ = function($rdr$jscomp$109$$, $_$jscomp$252_sym$jscomp$22$$, $opts$jscomp$123$$) {
  $_$jscomp$252_sym$jscomp$22$$ = $cljs$tools$reader$edn$read$cljs$0core$0IFn$0_invoke$0arity$04$$ ? $cljs$tools$reader$edn$read$cljs$0core$0IFn$0_invoke$0arity$04$$($rdr$jscomp$109$$, !0, null, $opts$jscomp$123$$) : $cljs$tools$reader$edn$read$$.call(null, $rdr$jscomp$109$$, !0, null, $opts$jscomp$123$$);
  return $APP.$cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$($APP.$cljs$cst$154$NaN$$, $_$jscomp$252_sym$jscomp$22$$) ? Number.NaN : $APP.$cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$($APP.$cljs$cst$155$_Inf$$, $_$jscomp$252_sym$jscomp$22$$) ? Number.NEGATIVE_INFINITY : $APP.$cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$($APP.$cljs$cst$156$Inf$$, $_$jscomp$252_sym$jscomp$22$$) ? Number.POSITIVE_INFINITY : $cljs$tools$reader$impl$errors$reader_error$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($rdr$jscomp$109$$, 
  $APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["Invalid token: ##" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($_$jscomp$252_sym$jscomp$22$$)]));
};
$cljs$tools$reader$edn$macros$$ = function($ch$jscomp$57$$) {
  switch($ch$jscomp$57$$) {
    case '"':
      return $cljs$tools$reader$edn$read_string_STAR_$$;
    case ":":
      return $cljs$tools$reader$edn$read_keyword$$;
    case ";":
      return $cljs$tools$reader$impl$commons$read_comment$$;
    case "^":
      return $cljs$tools$reader$edn$read_meta$$;
    case "(":
      return $cljs$tools$reader$edn$read_list$$;
    case ")":
      return $cljs$tools$reader$edn$read_unmatched_delimiter$$;
    case "[":
      return $cljs$tools$reader$edn$read_vector$$;
    case "]":
      return $cljs$tools$reader$edn$read_unmatched_delimiter$$;
    case "{":
      return $cljs$tools$reader$edn$read_map$$;
    case "}":
      return $cljs$tools$reader$edn$read_unmatched_delimiter$$;
    case "\\":
      return $cljs$tools$reader$edn$read_char_STAR_$$;
    case "#":
      return $cljs$tools$reader$edn$read_dispatch$$;
    default:
      return null;
  }
};
$cljs$tools$reader$edn$dispatch_macros$$ = function($ch$jscomp$58$$) {
  switch($ch$jscomp$58$$) {
    case "^":
      return $cljs$tools$reader$edn$read_meta$$;
    case "{":
      return $cljs$tools$reader$edn$read_set$$;
    case "\x3c":
      return $cljs$tools$reader$impl$commons$throwing_reader$$();
    case "!":
      return $cljs$tools$reader$impl$commons$read_comment$$;
    case "_":
      return $cljs$tools$reader$edn$read_discard$$;
    case ":":
      return $cljs$tools$reader$edn$read_namespaced_map$$;
    case "#":
      return $cljs$tools$reader$edn$read_symbolic_value$$;
    default:
      return null;
  }
};
$cljs$tools$reader$edn$read_tagged$$ = function($rdr$jscomp$110$$, $initch$jscomp$13_tag$jscomp$20$$, $opts$jscomp$124_temp__5821__auto____$1$jscomp$6$$) {
  $initch$jscomp$13_tag$jscomp$20$$ = $cljs$tools$reader$edn$read$cljs$0core$0IFn$0_invoke$0arity$04$$ ? $cljs$tools$reader$edn$read$cljs$0core$0IFn$0_invoke$0arity$04$$($rdr$jscomp$110$$, !0, null, $opts$jscomp$124_temp__5821__auto____$1$jscomp$6$$) : $cljs$tools$reader$edn$read$$.call(null, $rdr$jscomp$110$$, !0, null, $opts$jscomp$124_temp__5821__auto____$1$jscomp$6$$);
  var $object$jscomp$12$$ = $cljs$tools$reader$edn$read$cljs$0core$0IFn$0_invoke$0arity$04$$ ? $cljs$tools$reader$edn$read$cljs$0core$0IFn$0_invoke$0arity$04$$($rdr$jscomp$110$$, !0, null, $opts$jscomp$124_temp__5821__auto____$1$jscomp$6$$) : $cljs$tools$reader$edn$read$$.call(null, $rdr$jscomp$110$$, !0, null, $opts$jscomp$124_temp__5821__auto____$1$jscomp$6$$);
  $initch$jscomp$13_tag$jscomp$20$$ instanceof $APP.$cljs$core$Symbol$$ || $cljs$tools$reader$impl$errors$reader_error$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($rdr$jscomp$110$$, $APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["Invalid reader tag: ", $cljs$tools$reader$impl$inspect$inspect$cljs$0core$0IFn$0_invoke$0arity$01$$("Reader tag must be a symbol"), ". Reader tags must be symbols."]));
  var $or__5142__auto__$jscomp$inline_2156_temp__5821__auto__$jscomp$33$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($APP.$cljs$cst$182$readers$$.$cljs$core$IFn$_invoke$arity$1$($opts$jscomp$124_temp__5821__auto____$1$jscomp$6$$), $initch$jscomp$13_tag$jscomp$20$$);
  $or__5142__auto__$jscomp$inline_2156_temp__5821__auto__$jscomp$33$$ = $APP.$cljs$core$truth_$$($or__5142__auto__$jscomp$inline_2156_temp__5821__auto__$jscomp$33$$) ? $or__5142__auto__$jscomp$inline_2156_temp__5821__auto__$jscomp$33$$ : $APP.$cljs$tools$reader$default_data_readers$$.$cljs$core$IFn$_invoke$arity$1$ ? $APP.$cljs$tools$reader$default_data_readers$$.$cljs$core$IFn$_invoke$arity$1$($initch$jscomp$13_tag$jscomp$20$$) : $APP.$cljs$tools$reader$default_data_readers$$.call(null, $initch$jscomp$13_tag$jscomp$20$$);
  if ($APP.$cljs$core$truth_$$($or__5142__auto__$jscomp$inline_2156_temp__5821__auto__$jscomp$33$$)) {
    return $or__5142__auto__$jscomp$inline_2156_temp__5821__auto__$jscomp$33$$.$cljs$core$IFn$_invoke$arity$1$ ? $or__5142__auto__$jscomp$inline_2156_temp__5821__auto__$jscomp$33$$.$cljs$core$IFn$_invoke$arity$1$($object$jscomp$12$$) : $or__5142__auto__$jscomp$inline_2156_temp__5821__auto__$jscomp$33$$.call(null, $object$jscomp$12$$);
  }
  $opts$jscomp$124_temp__5821__auto____$1$jscomp$6$$ = $APP.$cljs$cst$105$default$$.$cljs$core$IFn$_invoke$arity$1$($opts$jscomp$124_temp__5821__auto____$1$jscomp$6$$);
  return $APP.$cljs$core$truth_$$($opts$jscomp$124_temp__5821__auto____$1$jscomp$6$$) ? $opts$jscomp$124_temp__5821__auto____$1$jscomp$6$$.$cljs$core$IFn$_invoke$arity$2$ ? $opts$jscomp$124_temp__5821__auto____$1$jscomp$6$$.$cljs$core$IFn$_invoke$arity$2$($initch$jscomp$13_tag$jscomp$20$$, $object$jscomp$12$$) : $opts$jscomp$124_temp__5821__auto____$1$jscomp$6$$.call(null, $initch$jscomp$13_tag$jscomp$20$$, $object$jscomp$12$$) : $cljs$tools$reader$impl$errors$reader_error$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($rdr$jscomp$110$$, 
  $APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["No reader function for tag ", $cljs$tools$reader$impl$inspect$inspect$cljs$0core$0IFn$0_invoke$0arity$01$$($initch$jscomp$13_tag$jscomp$20$$), "."]));
};
$cljs$tools$reader$edn$read$$ = function($var_args$jscomp$369$$) {
  switch(arguments.length) {
    case 1:
      return $cljs$tools$reader$edn$read$cljs$0core$0IFn$0_invoke$0arity$02$$($APP.$cljs$core$PersistentArrayMap$EMPTY$$, arguments[0]);
    case 2:
      return $cljs$tools$reader$edn$read$cljs$0core$0IFn$0_invoke$0arity$02$$(arguments[0], arguments[1]);
    case 4:
      return $cljs$tools$reader$edn$read$cljs$0core$0IFn$0_invoke$0arity$04$$(arguments[0], arguments[1], arguments[2], arguments[3]);
    default:
      throw Error(["Invalid arity: ", arguments.length].join(""));
  }
};
$cljs$tools$reader$edn$read$cljs$0core$0IFn$0_invoke$0arity$02$$ = function($map__49274__$1_p__49273$$, $reader$jscomp$44$$) {
  $map__49274__$1_p__49273$$ = $APP.$cljs$core$__destructure_map$$($map__49274__$1_p__49273$$);
  var $eof$jscomp$1$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__49274__$1_p__49273$$, $APP.$cljs$cst$145$eof$$), $eof_error_QMARK_$jscomp$5$$ = !$APP.$cljs$core$contains_QMARK_$$($map__49274__$1_p__49273$$, $APP.$cljs$cst$145$eof$$);
  return $cljs$tools$reader$edn$read$cljs$0core$0IFn$0_invoke$0arity$04$$($reader$jscomp$44$$, $eof_error_QMARK_$jscomp$5$$, $eof$jscomp$1$$, $map__49274__$1_p__49273$$);
};
$cljs$tools$reader$edn$read$cljs$0core$0IFn$0_invoke$0arity$04$$ = function($data$jscomp$inline_2162_data$jscomp$inline_2166_reader$jscomp$45$$, $eof_error_QMARK_$jscomp$6_msg$jscomp$inline_2161_msg$jscomp$inline_2165_rdr$jscomp$inline_2158$$, $d$jscomp$118_eof$jscomp$2$$, $opts$jscomp$126$$) {
  try {
    for (;;) {
      var $ch$jscomp$59$$ = $cljs$tools$reader$reader_types$read_char$$($data$jscomp$inline_2162_data$jscomp$inline_2166_reader$jscomp$45$$);
      if (!$cljs$tools$reader$impl$utils$whitespace_QMARK_$$($ch$jscomp$59$$)) {
        if ($ch$jscomp$59$$ == null) {
          if ($APP.$cljs$core$truth_$$($eof_error_QMARK_$jscomp$6_msg$jscomp$inline_2161_msg$jscomp$inline_2165_rdr$jscomp$inline_2158$$)) {
            $eof_error_QMARK_$jscomp$6_msg$jscomp$inline_2161_msg$jscomp$inline_2165_rdr$jscomp$inline_2158$$ = $data$jscomp$inline_2162_data$jscomp$inline_2166_reader$jscomp$45$$;
            var $JSCompiler_temp$jscomp$423_e$jscomp$181$$ = $APP.$cljs$core$truth_$$(null) ? $cljs$tools$reader$impl$errors$eof_error$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($eof_error_QMARK_$jscomp$6_msg$jscomp$inline_2161_msg$jscomp$inline_2165_rdr$jscomp$inline_2158$$, $APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["EOF while reading, starting at line ", null, "."])) : $cljs$tools$reader$impl$errors$eof_error$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($eof_error_QMARK_$jscomp$6_msg$jscomp$inline_2161_msg$jscomp$inline_2165_rdr$jscomp$inline_2158$$, 
            $APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["EOF while reading."]));
          } else {
            $JSCompiler_temp$jscomp$423_e$jscomp$181$$ = $d$jscomp$118_eof$jscomp$2$$;
          }
          return $JSCompiler_temp$jscomp$423_e$jscomp$181$$;
        }
        if ($cljs$tools$reader$impl$utils$numeric_QMARK_$$($ch$jscomp$59$$) || ("+" === $ch$jscomp$59$$ || "-" === $ch$jscomp$59$$) && $cljs$tools$reader$impl$utils$numeric_QMARK_$$($data$jscomp$inline_2162_data$jscomp$inline_2166_reader$jscomp$45$$.$cljs$tools$reader$reader_types$Reader$peek_char$arity$1$(null))) {
          return $cljs$tools$reader$edn$read_number$$($data$jscomp$inline_2162_data$jscomp$inline_2166_reader$jscomp$45$$, $ch$jscomp$59$$);
        }
        var $f$jscomp$388$$ = $cljs$tools$reader$edn$macros$$($ch$jscomp$59$$);
        if ($APP.$cljs$core$truth_$$($f$jscomp$388$$)) {
          var $res$jscomp$21$$ = $f$jscomp$388$$.$cljs$core$IFn$_invoke$arity$3$ ? $f$jscomp$388$$.$cljs$core$IFn$_invoke$arity$3$($data$jscomp$inline_2162_data$jscomp$inline_2166_reader$jscomp$45$$, $ch$jscomp$59$$, $opts$jscomp$126$$) : $f$jscomp$388$$.call(null, $data$jscomp$inline_2162_data$jscomp$inline_2166_reader$jscomp$45$$, $ch$jscomp$59$$, $opts$jscomp$126$$);
          if ($res$jscomp$21$$ === $data$jscomp$inline_2162_data$jscomp$inline_2166_reader$jscomp$45$$) {
            continue;
          } else {
            return $res$jscomp$21$$;
          }
        } else {
          return $cljs$tools$reader$edn$read_symbol$$($data$jscomp$inline_2162_data$jscomp$inline_2166_reader$jscomp$45$$, $ch$jscomp$59$$);
        }
        break;
      }
    }
  } catch ($e49275$$) {
    if ($e49275$$ instanceof Error) {
      $JSCompiler_temp$jscomp$423_e$jscomp$181$$ = $e49275$$;
      if ($JSCompiler_temp$jscomp$423_e$jscomp$181$$ instanceof $APP.$cljs$core$ExceptionInfo$$) {
        $d$jscomp$118_eof$jscomp$2$$ = $JSCompiler_temp$jscomp$423_e$jscomp$181$$ instanceof $APP.$cljs$core$ExceptionInfo$$ ? $JSCompiler_temp$jscomp$423_e$jscomp$181$$.data : null;
        if ($APP.$cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$($APP.$cljs$cst$138$reader_exception$$, $APP.$cljs$cst$25$type$$.$cljs$core$IFn$_invoke$arity$1$($d$jscomp$118_eof$jscomp$2$$))) {
          throw $JSCompiler_temp$jscomp$423_e$jscomp$181$$;
        }
        $eof_error_QMARK_$jscomp$6_msg$jscomp$inline_2161_msg$jscomp$inline_2165_rdr$jscomp$inline_2158$$ = $JSCompiler_temp$jscomp$423_e$jscomp$181$$.message;
        $data$jscomp$inline_2162_data$jscomp$inline_2166_reader$jscomp$45$$ = $APP.$cljs$core$merge$$.$cljs$core$IFn$_invoke$arity$variadic$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$25$type$$, $APP.$cljs$cst$138$reader_exception$$], null), $d$jscomp$118_eof$jscomp$2$$, $cljs$tools$reader$reader_types$indexing_reader_QMARK_$$($data$jscomp$inline_2162_data$jscomp$inline_2166_reader$jscomp$45$$) ? new $APP.$cljs$core$PersistentArrayMap$$(null, 
        3, [$APP.$cljs$cst$141$line$$, $cljs$tools$reader$reader_types$get_line_number$$($data$jscomp$inline_2162_data$jscomp$inline_2166_reader$jscomp$45$$), $APP.$cljs$cst$148$column$$, $cljs$tools$reader$reader_types$get_column_number$$($data$jscomp$inline_2162_data$jscomp$inline_2166_reader$jscomp$45$$), $APP.$cljs$cst$140$file$$, $cljs$tools$reader$reader_types$get_file_name$$($data$jscomp$inline_2162_data$jscomp$inline_2166_reader$jscomp$45$$)], null) : null]));
        throw new $APP.$cljs$core$ExceptionInfo$$($eof_error_QMARK_$jscomp$6_msg$jscomp$inline_2161_msg$jscomp$inline_2165_rdr$jscomp$inline_2158$$, $data$jscomp$inline_2162_data$jscomp$inline_2166_reader$jscomp$45$$, $JSCompiler_temp$jscomp$423_e$jscomp$181$$);
      }
      $eof_error_QMARK_$jscomp$6_msg$jscomp$inline_2161_msg$jscomp$inline_2165_rdr$jscomp$inline_2158$$ = $JSCompiler_temp$jscomp$423_e$jscomp$181$$.message;
      $data$jscomp$inline_2162_data$jscomp$inline_2166_reader$jscomp$45$$ = $APP.$cljs$core$merge$$.$cljs$core$IFn$_invoke$arity$variadic$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$25$type$$, $APP.$cljs$cst$138$reader_exception$$], null), $cljs$tools$reader$reader_types$indexing_reader_QMARK_$$($data$jscomp$inline_2162_data$jscomp$inline_2166_reader$jscomp$45$$) ? new $APP.$cljs$core$PersistentArrayMap$$(null, 
      3, [$APP.$cljs$cst$141$line$$, $cljs$tools$reader$reader_types$get_line_number$$($data$jscomp$inline_2162_data$jscomp$inline_2166_reader$jscomp$45$$), $APP.$cljs$cst$148$column$$, $cljs$tools$reader$reader_types$get_column_number$$($data$jscomp$inline_2162_data$jscomp$inline_2166_reader$jscomp$45$$), $APP.$cljs$cst$140$file$$, $cljs$tools$reader$reader_types$get_file_name$$($data$jscomp$inline_2162_data$jscomp$inline_2166_reader$jscomp$45$$)], null) : null]));
      throw new $APP.$cljs$core$ExceptionInfo$$($eof_error_QMARK_$jscomp$6_msg$jscomp$inline_2161_msg$jscomp$inline_2165_rdr$jscomp$inline_2158$$, $data$jscomp$inline_2162_data$jscomp$inline_2166_reader$jscomp$45$$, $JSCompiler_temp$jscomp$423_e$jscomp$181$$);
    }
    throw $e49275$$;
  }
};
$amp$services$firebase$listen_to_edn$cljs$0core$0IFn$0_invoke$0arity$03$$ = function($path$jscomp$31$$) {
  function $callback$jscomp$84$$($G__49676_JSCompiler_temp$jscomp$2294_snapshot$jscomp$3_val$jscomp$132$$) {
    $G__49676_JSCompiler_temp$jscomp$2294_snapshot$jscomp$3_val$jscomp$132$$ = $G__49676_JSCompiler_temp$jscomp$2294_snapshot$jscomp$3_val$jscomp$132$$.val();
    if (typeof $G__49676_JSCompiler_temp$jscomp$2294_snapshot$jscomp$3_val$jscomp$132$$ === "string") {
      var $opts$jscomp$inline_2884$$ = new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$182$readers$$, $APP.$cljs$core$_deref$$($APP.$cljs$reader$_STAR_tag_table_STAR_$$), $APP.$cljs$cst$105$default$$, $APP.$cljs$core$_deref$$($APP.$cljs$reader$_STAR_default_data_reader_fn_STAR_$$), $APP.$cljs$cst$145$eof$$, null], null);
      $G__49676_JSCompiler_temp$jscomp$2294_snapshot$jscomp$3_val$jscomp$132$$ = $APP.$cljs$core$truth_$$($APP.$cljs$core$truth_$$($G__49676_JSCompiler_temp$jscomp$2294_snapshot$jscomp$3_val$jscomp$132$$) ? $APP.$cljs$core$not_EQ_$cljs$0core$0IFn$0_invoke$0arity$02$$($G__49676_JSCompiler_temp$jscomp$2294_snapshot$jscomp$3_val$jscomp$132$$, "") : $G__49676_JSCompiler_temp$jscomp$2294_snapshot$jscomp$3_val$jscomp$132$$) ? $cljs$tools$reader$edn$read$cljs$0core$0IFn$0_invoke$0arity$02$$($opts$jscomp$inline_2884$$, 
      new $cljs$tools$reader$reader_types$PushbackReader$$(new $cljs$tools$reader$reader_types$StringReader$$($G__49676_JSCompiler_temp$jscomp$2294_snapshot$jscomp$3_val$jscomp$132$$, $APP.$cljs$core$count$$($G__49676_JSCompiler_temp$jscomp$2294_snapshot$jscomp$3_val$jscomp$132$$)))) : null;
    } else {
      $G__49676_JSCompiler_temp$jscomp$2294_snapshot$jscomp$3_val$jscomp$132$$ = null;
    }
    return $on_value$jscomp$3$$.$cljs$core$IFn$_invoke$arity$1$ ? $on_value$jscomp$3$$.$cljs$core$IFn$_invoke$arity$1$($G__49676_JSCompiler_temp$jscomp$2294_snapshot$jscomp$3_val$jscomp$132$$) : $on_value$jscomp$3$$.call(null, $G__49676_JSCompiler_temp$jscomp$2294_snapshot$jscomp$3_val$jscomp$132$$);
  }
  var $on_value$jscomp$3$$ = $amp$views$mockup_view$display_firebase_data$$, $db_ref$jscomp$1$$ = $APP.$module$node_modules$firebase$database$dist$index_cjs$$.ref($APP.$amp$services$firebase$db$$, $path$jscomp$31$$);
  if ($APP.$cljs$core$truth_$$(null)) {
    $APP.$module$node_modules$firebase$database$dist$index_cjs$$.onValue($db_ref$jscomp$1$$, $callback$jscomp$84$$, null);
  } else {
    $APP.$module$node_modules$firebase$database$dist$index_cjs$$.onValue($db_ref$jscomp$1$$, $callback$jscomp$84$$);
  }
  return function() {
    return $APP.$module$node_modules$firebase$database$dist$index_cjs$$.off($db_ref$jscomp$1$$);
  };
};
$amp$components$threejs$scene$setup_scene_BANG_$$ = function($container_map__65319_65629__$1_scene_65524_state_65525_target_65631_temp__5823__auto___65625$$) {
  function $pointerup_fn_65535$$($event$jscomp$10_intersects$jscomp$1_obj$jscomp$194_scene_obj$$) {
    var $dy$jscomp$6_sy$jscomp$8_temp__5823__auto__$jscomp$84_world_pos$$ = $APP.$cljs$core$_deref$$($click_start_65533$$);
    if ($APP.$cljs$core$truth_$$($dy$jscomp$6_sy$jscomp$8_temp__5823__auto__$jscomp$84_world_pos$$)) {
      var $block_info$jscomp$1_dx$jscomp$6_rect$jscomp$4_sx$jscomp$9$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($dy$jscomp$6_sy$jscomp$8_temp__5823__auto__$jscomp$84_world_pos$$, 0, null);
      $dy$jscomp$6_sy$jscomp$8_temp__5823__auto__$jscomp$84_world_pos$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($dy$jscomp$6_sy$jscomp$8_temp__5823__auto__$jscomp$84_world_pos$$, 1, null);
      $APP.$cljs$core$reset_BANG_$$($click_start_65533$$, null);
      $block_info$jscomp$1_dx$jscomp$6_rect$jscomp$4_sx$jscomp$9$$ = $event$jscomp$10_intersects$jscomp$1_obj$jscomp$194_scene_obj$$.clientX - $block_info$jscomp$1_dx$jscomp$6_rect$jscomp$4_sx$jscomp$9$$;
      $dy$jscomp$6_sy$jscomp$8_temp__5823__auto__$jscomp$84_world_pos$$ = $event$jscomp$10_intersects$jscomp$1_obj$jscomp$194_scene_obj$$.clientY - $dy$jscomp$6_sy$jscomp$8_temp__5823__auto__$jscomp$84_world_pos$$;
      if ($block_info$jscomp$1_dx$jscomp$6_rect$jscomp$4_sx$jscomp$9$$ * $block_info$jscomp$1_dx$jscomp$6_rect$jscomp$4_sx$jscomp$9$$ + $dy$jscomp$6_sy$jscomp$8_temp__5823__auto__$jscomp$84_world_pos$$ * $dy$jscomp$6_sy$jscomp$8_temp__5823__auto__$jscomp$84_world_pos$$ < 25) {
        return $block_info$jscomp$1_dx$jscomp$6_rect$jscomp$4_sx$jscomp$9$$ = $canvas$jscomp$6$$.getBoundingClientRect(), $mouse_65530$$.x = ($event$jscomp$10_intersects$jscomp$1_obj$jscomp$194_scene_obj$$.clientX - $block_info$jscomp$1_dx$jscomp$6_rect$jscomp$4_sx$jscomp$9$$.left) / $block_info$jscomp$1_dx$jscomp$6_rect$jscomp$4_sx$jscomp$9$$.width * 2 - 1, $mouse_65530$$.y = 1 - ($event$jscomp$10_intersects$jscomp$1_obj$jscomp$194_scene_obj$$.clientY - $block_info$jscomp$1_dx$jscomp$6_rect$jscomp$4_sx$jscomp$9$$.top) / 
        $block_info$jscomp$1_dx$jscomp$6_rect$jscomp$4_sx$jscomp$9$$.height * 2, $raycaster_65529$$.setFromCamera($mouse_65530$$, $camera$jscomp$6$$), $event$jscomp$10_intersects$jscomp$1_obj$jscomp$194_scene_obj$$ = $APP.$cljs$cst$654$threejs_scene$$.$cljs$core$IFn$_invoke$arity$1$($ctx$jscomp$13$$), $event$jscomp$10_intersects$jscomp$1_obj$jscomp$194_scene_obj$$ = $raycaster_65529$$.intersectObject($event$jscomp$10_intersects$jscomp$1_obj$jscomp$194_scene_obj$$, !0), $event$jscomp$10_intersects$jscomp$1_obj$jscomp$194_scene_obj$$.length > 
        0 && ($event$jscomp$10_intersects$jscomp$1_obj$jscomp$194_scene_obj$$ = $event$jscomp$10_intersects$jscomp$1_obj$jscomp$194_scene_obj$$[0].object, $block_info$jscomp$1_dx$jscomp$6_rect$jscomp$4_sx$jscomp$9$$ = $event$jscomp$10_intersects$jscomp$1_obj$jscomp$194_scene_obj$$.userData.blockInfo, $APP.$cljs$core$truth_$$($block_info$jscomp$1_dx$jscomp$6_rect$jscomp$4_sx$jscomp$9$$)) ? ($dy$jscomp$6_sy$jscomp$8_temp__5823__auto__$jscomp$84_world_pos$$ = new $APP.$module$node_modules$three$build$three_cjs$$.Vector3(), 
        $event$jscomp$10_intersects$jscomp$1_obj$jscomp$194_scene_obj$$.getWorldPosition($dy$jscomp$6_sy$jscomp$8_temp__5823__auto__$jscomp$84_world_pos$$), $APP.$cljs$core$reset_BANG_$$($APP.$cljs$cst$685$selected_block$$.$cljs$core$IFn$_invoke$arity$1$($atoms$$), new $APP.$cljs$core$PersistentArrayMap$$(null, 7, [$APP.$cljs$cst$461$dims$$, $APP.$cljs$core$js__GT_clj$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($block_info$jscomp$1_dx$jscomp$6_rect$jscomp$4_sx$jscomp$9$$.dims, $APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$cljs$cst$21$keywordize_keys$$, 
        !1])), $APP.$cljs$cst$462$note$$, $block_info$jscomp$1_dx$jscomp$6_rect$jscomp$4_sx$jscomp$9$$.note, $APP.$cljs$cst$413$color$$, $block_info$jscomp$1_dx$jscomp$6_rect$jscomp$4_sx$jscomp$9$$.color, $APP.$cljs$cst$686$world_position$$, new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$dy$jscomp$6_sy$jscomp$8_temp__5823__auto__$jscomp$84_world_pos$$.x, $dy$jscomp$6_sy$jscomp$8_temp__5823__auto__$jscomp$84_world_pos$$.y, $dy$jscomp$6_sy$jscomp$8_temp__5823__auto__$jscomp$84_world_pos$$.z], 
        null), $APP.$cljs$cst$418$width$$, $event$jscomp$10_intersects$jscomp$1_obj$jscomp$194_scene_obj$$.geometry.parameters.width, $APP.$cljs$cst$419$height$$, $event$jscomp$10_intersects$jscomp$1_obj$jscomp$194_scene_obj$$.geometry.parameters.height, $APP.$cljs$cst$456$depth$$, $event$jscomp$10_intersects$jscomp$1_obj$jscomp$194_scene_obj$$.geometry.parameters.depth], null))) : $APP.$cljs$core$reset_BANG_$$($APP.$cljs$cst$685$selected_block$$.$cljs$core$IFn$_invoke$arity$1$($atoms$$), null);
      }
    }
    return null;
  }
  function $pointerdown_fn_65534$$($event$jscomp$9$$) {
    return $APP.$cljs$core$reset_BANG_$$($click_start_65533$$, new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$event$jscomp$9$$.clientX, $event$jscomp$9$$.clientY], null));
  }
  function $dblclick_fn_65532$$($event$jscomp$8_intersects_scene$jscomp$18$$) {
    var $rect$jscomp$3$$ = $canvas$jscomp$6$$.getBoundingClientRect();
    $mouse_65530$$.x = ($event$jscomp$8_intersects_scene$jscomp$18$$.clientX - $rect$jscomp$3$$.left) / $rect$jscomp$3$$.width * 2 - 1;
    $mouse_65530$$.y = 1 - ($event$jscomp$8_intersects_scene$jscomp$18$$.clientY - $rect$jscomp$3$$.top) / $rect$jscomp$3$$.height * 2;
    $raycaster_65529$$.setFromCamera($mouse_65530$$, $camera$jscomp$6$$);
    $event$jscomp$8_intersects_scene$jscomp$18$$ = $APP.$cljs$cst$654$threejs_scene$$.$cljs$core$IFn$_invoke$arity$1$($ctx$jscomp$13$$);
    $event$jscomp$8_intersects_scene$jscomp$18$$ = $raycaster_65529$$.intersectObject($event$jscomp$8_intersects_scene$jscomp$18$$, !0);
    return $event$jscomp$8_intersects_scene$jscomp$18$$.length > 0 ? ($controls_65528$$.target.copy($event$jscomp$8_intersects_scene$jscomp$18$$[0].point), $controls_65528$$.update()) : null;
  }
  function $resize_fn$$() {
    var $width$jscomp$38$$ = window.innerWidth, $height$jscomp$37$$ = window.innerHeight;
    $renderer$jscomp$8$$.setSize($width$jscomp$38$$, $height$jscomp$37$$, !0);
    $camera$jscomp$6$$.aspect = $width$jscomp$38$$ / $height$jscomp$37$$;
    return $camera$jscomp$6$$.updateProjectionMatrix();
  }
  var $atoms$$ = $amp$views$mockup_view$scene_atoms$$, $cam_pos_65635_entity_types$jscomp$2_map__65313__$1$$ = $APP.$cljs$core$__destructure_map$$(new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$681$root_fn$$, $amp$views$mockup_view$root$$, $APP.$cljs$cst$666$entity_types$$, $APP.$amp$components$threejs$objects$custom_entity_types$$], null)), $position_65630_root_fn$jscomp$7_temp__5823__auto___65642__$1_z_65639$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($cam_pos_65635_entity_types$jscomp$2_map__65313__$1$$, 
  $APP.$cljs$cst$681$root_fn$$);
  $cam_pos_65635_entity_types$jscomp$2_map__65313__$1$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($cam_pos_65635_entity_types$jscomp$2_map__65313__$1$$, $APP.$cljs$cst$666$entity_types$$);
  var $sky_state$jscomp$3$$ = $APP.$cljs$core$atom$cljs$0core$0IFn$0_invoke$0arity$01$$(null), $ctx$jscomp$13$$ = $APP.$threeagent$core$render$cljs$0core$0IFn$0_invoke$0arity$03$$($position_65630_root_fn$jscomp$7_temp__5823__auto___65642__$1_z_65639$$, $container_map__65319_65629__$1_scene_65524_state_65525_target_65631_temp__5823__auto___65625$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$682$antialias$$, !0, $APP.$cljs$cst$665$shadow_map$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 
  2, [$APP.$cljs$cst$662$enabled$$, !0, $APP.$cljs$cst$25$type$$, $APP.$module$node_modules$three$build$three_cjs$$.PCFSoftShadowMap], null), $APP.$cljs$cst$666$entity_types$$, $cam_pos_65635_entity_types$jscomp$2_map__65313__$1$$, $APP.$cljs$cst$663$on_before_render$$, function() {
    var $temp__5823__auto__$jscomp$83_temp__5823__auto___65516_temp__5823__auto___65520$$ = $APP.$cljs$core$deref$$($APP.$cljs$cst$683$controls$$.$cljs$core$IFn$_invoke$arity$1$($atoms$$));
    $APP.$cljs$core$truth_$$($temp__5823__auto__$jscomp$83_temp__5823__auto___65516_temp__5823__auto___65520$$) && $temp__5823__auto__$jscomp$83_temp__5823__auto___65516_temp__5823__auto___65520$$.update();
    $temp__5823__auto__$jscomp$83_temp__5823__auto___65516_temp__5823__auto___65520$$ = $APP.$cljs$core$deref$$($APP.$cljs$cst$550$context$$.$cljs$core$IFn$_invoke$arity$1$($atoms$$));
    $APP.$cljs$core$truth_$$($temp__5823__auto__$jscomp$83_temp__5823__auto___65516_temp__5823__auto___65520$$) && $APP.$amp$components$threejs$objects$configure_shadow_camera_BANG_$$($APP.$cljs$cst$654$threejs_scene$$.$cljs$core$IFn$_invoke$arity$1$($temp__5823__auto__$jscomp$83_temp__5823__auto___65516_temp__5823__auto___65520$$));
    $temp__5823__auto__$jscomp$83_temp__5823__auto___65516_temp__5823__auto___65520$$ = $APP.$cljs$core$deref$$($APP.$cljs$cst$550$context$$.$cljs$core$IFn$_invoke$arity$1$($atoms$$));
    return $APP.$cljs$core$truth_$$($temp__5823__auto__$jscomp$83_temp__5823__auto___65516_temp__5823__auto___65520$$) ? $APP.$amp$components$threejs$scene$animate_sun_BANG_$$($APP.$cljs$core$_deref$$($sky_state$jscomp$3$$), $APP.$cljs$cst$654$threejs_scene$$.$cljs$core$IFn$_invoke$arity$1$($temp__5823__auto__$jscomp$83_temp__5823__auto___65516_temp__5823__auto___65520$$)) : null;
  }], null)), $renderer$jscomp$8$$ = $APP.$cljs$cst$653$threejs_renderer$$.$cljs$core$IFn$_invoke$arity$1$($ctx$jscomp$13$$), $camera$jscomp$6$$ = $APP.$cljs$cst$655$threejs_default_camera$$.$cljs$core$IFn$_invoke$arity$1$($ctx$jscomp$13$$), $canvas$jscomp$6$$ = $APP.$cljs$cst$656$canvas$$.$cljs$core$IFn$_invoke$arity$1$($ctx$jscomp$13$$);
  $container_map__65319_65629__$1_scene_65524_state_65525_target_65631_temp__5823__auto___65625$$ = $APP.$cljs$cst$654$threejs_scene$$.$cljs$core$IFn$_invoke$arity$1$($ctx$jscomp$13$$);
  $container_map__65319_65629__$1_scene_65524_state_65525_target_65631_temp__5823__auto___65625$$ = $APP.$amp$components$threejs$scene$setup_sky_BANG_$$($container_map__65319_65629__$1_scene_65524_state_65525_target_65631_temp__5823__auto___65625$$);
  $APP.$cljs$core$reset_BANG_$$($sky_state$jscomp$3$$, $container_map__65319_65629__$1_scene_65524_state_65525_target_65631_temp__5823__auto___65625$$);
  $APP.$amp$components$threejs$scene$setup_renderer_defaults_BANG_$$($renderer$jscomp$8$$, $camera$jscomp$6$$, $APP.$cljs$core$_deref$$($sky_state$jscomp$3$$));
  $camera$jscomp$6$$.position.set(100, 100, 100);
  $resize_fn$$();
  window.addEventListener("resize", $resize_fn$$);
  $APP.$cljs$core$reset_BANG_$$($APP.$cljs$cst$684$resize_fn$$.$cljs$core$IFn$_invoke$arity$1$($atoms$$), $resize_fn$$);
  var $controls_65528$$ = new $APP.$module$node_modules$three$examples$jsm$controls$OrbitControls$$.OrbitControls($camera$jscomp$6$$, $canvas$jscomp$6$$), $raycaster_65529$$ = new $APP.$module$node_modules$three$build$three_cjs$$.Raycaster(), $mouse_65530$$ = new $APP.$module$node_modules$three$build$three_cjs$$.Vector2();
  $controls_65528$$.enableDamping = !0;
  $controls_65528$$.dampingFactor = 0.05;
  $controls_65528$$.enabled = !0;
  $controls_65528$$.enablePan = !0;
  $controls_65528$$.screenSpacePanning = !0;
  $controls_65528$$.target.set(0, 0, -4);
  $controls_65528$$.update();
  var $click_start_65533$$ = $APP.$cljs$core$atom$cljs$0core$0IFn$0_invoke$0arity$01$$(null);
  $canvas$jscomp$6$$.addEventListener("dblclick", $dblclick_fn_65532$$);
  $canvas$jscomp$6$$.addEventListener("pointerdown", $pointerdown_fn_65534$$);
  $canvas$jscomp$6$$.addEventListener("pointerup", $pointerup_fn_65535$$);
  $APP.$cljs$core$reset_BANG_$$($APP.$cljs$cst$687$canvas_listeners$$.$cljs$core$IFn$_invoke$arity$1$($atoms$$), new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$656$canvas$$, $canvas$jscomp$6$$, $APP.$cljs$cst$688$dblclick$$, $dblclick_fn_65532$$, $APP.$cljs$cst$689$pointerdown$$, $pointerdown_fn_65534$$, $APP.$cljs$cst$690$pointerup$$, $pointerup_fn_65535$$], null));
  $APP.$cljs$core$reset_BANG_$$($APP.$cljs$cst$683$controls$$.$cljs$core$IFn$_invoke$arity$1$($atoms$$), $controls_65528$$);
  $APP.$cljs$core$reset_BANG_$$($APP.$cljs$cst$550$context$$.$cljs$core$IFn$_invoke$arity$1$($atoms$$), $ctx$jscomp$13$$);
  $container_map__65319_65629__$1_scene_65524_state_65525_target_65631_temp__5823__auto___65625$$ = $APP.$cljs$core$deref$$($APP.$cljs$cst$691$camera_state$$.$cljs$core$IFn$_invoke$arity$1$($atoms$$));
  if ($APP.$cljs$core$truth_$$($container_map__65319_65629__$1_scene_65524_state_65525_target_65631_temp__5823__auto___65625$$) && ($container_map__65319_65629__$1_scene_65524_state_65525_target_65631_temp__5823__auto___65625$$ = $APP.$cljs$core$__destructure_map$$($container_map__65319_65629__$1_scene_65524_state_65525_target_65631_temp__5823__auto___65625$$), $position_65630_root_fn$jscomp$7_temp__5823__auto___65642__$1_z_65639$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($container_map__65319_65629__$1_scene_65524_state_65525_target_65631_temp__5823__auto___65625$$, 
  $APP.$cljs$cst$455$position$$), $container_map__65319_65629__$1_scene_65524_state_65525_target_65631_temp__5823__auto___65625$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($container_map__65319_65629__$1_scene_65524_state_65525_target_65631_temp__5823__auto___65625$$, $APP.$cljs$cst$394$target$$), $APP.$cljs$core$truth_$$($position_65630_root_fn$jscomp$7_temp__5823__auto___65642__$1_z_65639$$))) {
    $cam_pos_65635_entity_types$jscomp$2_map__65313__$1$$ = $APP.$cljs$cst$655$threejs_default_camera$$.$cljs$core$IFn$_invoke$arity$1$($ctx$jscomp$13$$).position;
    var $x_65637$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($position_65630_root_fn$jscomp$7_temp__5823__auto___65642__$1_z_65639$$, 0, null), $y_65638$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($position_65630_root_fn$jscomp$7_temp__5823__auto___65642__$1_z_65639$$, 1, null);
    $position_65630_root_fn$jscomp$7_temp__5823__auto___65642__$1_z_65639$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($position_65630_root_fn$jscomp$7_temp__5823__auto___65642__$1_z_65639$$, 2, null);
    $cam_pos_65635_entity_types$jscomp$2_map__65313__$1$$.set($x_65637$$, $y_65638$$, $position_65630_root_fn$jscomp$7_temp__5823__auto___65642__$1_z_65639$$);
    $position_65630_root_fn$jscomp$7_temp__5823__auto___65642__$1_z_65639$$ = $APP.$cljs$core$deref$$($APP.$cljs$cst$683$controls$$.$cljs$core$IFn$_invoke$arity$1$($atoms$$));
    $APP.$cljs$core$truth_$$($position_65630_root_fn$jscomp$7_temp__5823__auto___65642__$1_z_65639$$) && ($APP.$cljs$core$truth_$$($container_map__65319_65629__$1_scene_65524_state_65525_target_65631_temp__5823__auto___65625$$) && $position_65630_root_fn$jscomp$7_temp__5823__auto___65642__$1_z_65639$$.target.set($APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$02$$($container_map__65319_65629__$1_scene_65524_state_65525_target_65631_temp__5823__auto___65625$$, 0), $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$02$$($container_map__65319_65629__$1_scene_65524_state_65525_target_65631_temp__5823__auto___65625$$, 
    1), $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$02$$($container_map__65319_65629__$1_scene_65524_state_65525_target_65631_temp__5823__auto___65625$$, 2)), $position_65630_root_fn$jscomp$7_temp__5823__auto___65642__$1_z_65639$$.update());
  }
};
$amp$components$threejs$geometry$fmt_dim$$ = function($n$jscomp$222$$) {
  return $n$jscomp$222$$ === Math.floor($n$jscomp$222$$) ? "" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($n$jscomp$222$$ | 0) : $n$jscomp$222$$.toFixed(1);
};
$amp$components$threejs$geometry$extract_parts_list$$ = function($all_parts_mockup_data_temp__5823__auto__$jscomp$90$$) {
  $all_parts_mockup_data_temp__5823__auto__$jscomp$90$$ = $APP.$cljs$cst$28$data$$.$cljs$core$IFn$_invoke$arity$1$($all_parts_mockup_data_temp__5823__auto__$jscomp$90$$);
  if ($APP.$cljs$core$truth_$$($all_parts_mockup_data_temp__5823__auto__$jscomp$90$$)) {
    $all_parts_mockup_data_temp__5823__auto__$jscomp$90$$ = $amp$components$threejs$geometry$collect_all_dims$$($all_parts_mockup_data_temp__5823__auto__$jscomp$90$$);
    var $grouped$$ = $cljs$core$frequencies$$($all_parts_mockup_data_temp__5823__auto__$jscomp$90$$);
    return $APP.$cljs$core$sort_by$cljs$0core$0IFn$0_invoke$0arity$02$$(function($dims$jscomp$4_map__55210__$1_p__55209$$) {
      $dims$jscomp$4_map__55210__$1_p__55209$$ = $APP.$cljs$core$__destructure_map$$($dims$jscomp$4_map__55210__$1_p__55209$$);
      $dims$jscomp$4_map__55210__$1_p__55209$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($dims$jscomp$4_map__55210__$1_p__55209$$, $APP.$cljs$cst$461$dims$$);
      return new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [-$APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$02$$($dims$jscomp$4_map__55210__$1_p__55209$$, 2), -$APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$02$$($dims$jscomp$4_map__55210__$1_p__55209$$, 0), -$APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$02$$($dims$jscomp$4_map__55210__$1_p__55209$$, 1)], null);
    }, function() {
      return function $amp$components$threejs$geometry$extract_parts_list_$_iter__55194$$($s__55195$$) {
        return new $APP.$cljs$core$LazySeq$$(null, function() {
          for (;;) {
            var $s__55195__$2_temp__5823__auto____$1$jscomp$4$$ = $APP.$cljs$core$seq$$($s__55195$$);
            if ($s__55195__$2_temp__5823__auto____$1$jscomp$4$$) {
              if ($APP.$cljs$core$chunked_seq_QMARK_$$($s__55195__$2_temp__5823__auto____$1$jscomp$4$$)) {
                var $JSCompiler_inline_result$jscomp$434_c__5626__auto__$jscomp$14_qty_vec__55206$$ = $APP.$cljs$core$_chunked_first$$($s__55195__$2_temp__5823__auto____$1$jscomp$4$$), $size__5627__auto__$jscomp$14$$ = $APP.$cljs$core$count$$($JSCompiler_inline_result$jscomp$434_c__5626__auto__$jscomp$14_qty_vec__55206$$), $b__55197_dims$jscomp$2$$ = $APP.$cljs$core$chunk_buffer$$($size__5627__auto__$jscomp$14$$);
                a: {
                  for (var $i__55196$jscomp$inline_2173$$ = 0;;) {
                    if ($i__55196$jscomp$inline_2173$$ < $size__5627__auto__$jscomp$14$$) {
                      var $qty$jscomp$inline_2176_vec__55198$jscomp$inline_2174$$ = $APP.$cljs$core$_nth$$($JSCompiler_inline_result$jscomp$434_c__5626__auto__$jscomp$14_qty_vec__55206$$, $i__55196$jscomp$inline_2173$$), $dims$jscomp$inline_2175$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($qty$jscomp$inline_2176_vec__55198$jscomp$inline_2174$$, 0, null);
                      $qty$jscomp$inline_2176_vec__55198$jscomp$inline_2174$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($qty$jscomp$inline_2176_vec__55198$jscomp$inline_2174$$, 1, null);
                      $b__55197_dims$jscomp$2$$.add(new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$461$dims$$, $dims$jscomp$inline_2175$$, $APP.$cljs$cst$694$qty$$, $qty$jscomp$inline_2176_vec__55198$jscomp$inline_2174$$], null));
                      $i__55196$jscomp$inline_2173$$ += 1;
                    } else {
                      $JSCompiler_inline_result$jscomp$434_c__5626__auto__$jscomp$14_qty_vec__55206$$ = !0;
                      break a;
                    }
                  }
                  $JSCompiler_inline_result$jscomp$434_c__5626__auto__$jscomp$14_qty_vec__55206$$ = void 0;
                }
                return $JSCompiler_inline_result$jscomp$434_c__5626__auto__$jscomp$14_qty_vec__55206$$ ? $APP.$cljs$core$chunk_cons$$($APP.$cljs$core$chunk$$($b__55197_dims$jscomp$2$$), $amp$components$threejs$geometry$extract_parts_list_$_iter__55194$$($APP.$cljs$core$_chunked_rest$$($s__55195__$2_temp__5823__auto____$1$jscomp$4$$))) : $APP.$cljs$core$chunk_cons$$($APP.$cljs$core$chunk$$($b__55197_dims$jscomp$2$$), null);
              }
              $JSCompiler_inline_result$jscomp$434_c__5626__auto__$jscomp$14_qty_vec__55206$$ = $APP.$cljs$core$first$$($s__55195__$2_temp__5823__auto____$1$jscomp$4$$);
              $b__55197_dims$jscomp$2$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($JSCompiler_inline_result$jscomp$434_c__5626__auto__$jscomp$14_qty_vec__55206$$, 0, null);
              $JSCompiler_inline_result$jscomp$434_c__5626__auto__$jscomp$14_qty_vec__55206$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($JSCompiler_inline_result$jscomp$434_c__5626__auto__$jscomp$14_qty_vec__55206$$, 1, null);
              return $APP.$cljs$core$cons$$(new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$461$dims$$, $b__55197_dims$jscomp$2$$, $APP.$cljs$cst$694$qty$$, $JSCompiler_inline_result$jscomp$434_c__5626__auto__$jscomp$14_qty_vec__55206$$], null), $amp$components$threejs$geometry$extract_parts_list_$_iter__55194$$($APP.$cljs$core$rest$$($s__55195__$2_temp__5823__auto____$1$jscomp$4$$)));
            }
            return null;
          }
        }, null, null);
      }($grouped$$);
    }());
  }
  return null;
};
$amp$components$threejs$geometry$calculate_total_dimensions$$ = function($mockup_data$jscomp$1_total_w$$) {
  var $temp__5823__auto__$jscomp$91$$ = $APP.$cljs$cst$28$data$$.$cljs$core$IFn$_invoke$arity$1$($mockup_data$jscomp$1_total_w$$);
  if ($APP.$cljs$core$truth_$$($temp__5823__auto__$jscomp$91$$) && $APP.$cljs$core$seq$$($temp__5823__auto__$jscomp$91$$)) {
    var $all_dims_total_d$$ = $amp$components$threejs$geometry$collect_all_dims$$($temp__5823__auto__$jscomp$91$$);
    $mockup_data$jscomp$1_total_w$$ = $APP.$cljs$core$seq$$($all_dims_total_d$$) ? $APP.$cljs$core$apply$$.$cljs$core$IFn$_invoke$arity$2$($APP.$cljs$core$max$$, $APP.$cljs$core$map$$.$cljs$core$IFn$_invoke$arity$2$(function($p1__55211_SHARP_$$) {
      return $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$02$$($p1__55211_SHARP_$$, 0);
    }, $all_dims_total_d$$)) : null;
    $all_dims_total_d$$ = $APP.$cljs$core$seq$$($all_dims_total_d$$) ? $APP.$cljs$core$apply$$.$cljs$core$IFn$_invoke$arity$2$($APP.$cljs$core$max$$, $APP.$cljs$core$map$$.$cljs$core$IFn$_invoke$arity$2$(function($p1__55212_SHARP_$$) {
      return $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$02$$($p1__55212_SHARP_$$, 2);
    }, $all_dims_total_d$$)) : null;
    var $total_h$$ = $APP.$cljs$core$reduce$cljs$0core$0IFn$0_invoke$0arity$03$$($APP.$cljs$core$_PLUS_$$, 0.0, function() {
      return function $amp$components$threejs$geometry$calculate_total_dimensions_$_iter__55217$$($s__55218$$) {
        return new $APP.$cljs$core$LazySeq$$(null, function() {
          for (var $s__55218__$1_s__55218__$2_temp__5823__auto____$1$jscomp$5$$ = $s__55218$$;;) {
            if ($s__55218__$1_s__55218__$2_temp__5823__auto____$1$jscomp$5$$ = $APP.$cljs$core$seq$$($s__55218__$1_s__55218__$2_temp__5823__auto____$1$jscomp$5$$)) {
              if ($APP.$cljs$core$chunked_seq_QMARK_$$($s__55218__$1_s__55218__$2_temp__5823__auto____$1$jscomp$5$$)) {
                var $JSCompiler_inline_result$jscomp$435_c__5626__auto__$jscomp$15$$ = $APP.$cljs$core$_chunked_first$$($s__55218__$1_s__55218__$2_temp__5823__auto____$1$jscomp$5$$), $size__5627__auto__$jscomp$15$$ = $APP.$cljs$core$count$$($JSCompiler_inline_result$jscomp$435_c__5626__auto__$jscomp$15$$), $b__55220_level$jscomp$42$$ = $APP.$cljs$core$chunk_buffer$$($size__5627__auto__$jscomp$15$$);
                a: {
                  for (var $i__55219$jscomp$inline_2178$$ = 0;;) {
                    if ($i__55219$jscomp$inline_2178$$ < $size__5627__auto__$jscomp$15$$) {
                      var $level$jscomp$inline_2179_x$jscomp$inline_2891$$ = $APP.$cljs$core$_nth$$($JSCompiler_inline_result$jscomp$435_c__5626__auto__$jscomp$15$$, $i__55219$jscomp$inline_2178$$);
                      if ($APP.$cljs$core$seq$$($APP.$cljs$cst$693$layers$$.$cljs$core$IFn$_invoke$arity$1$($level$jscomp$inline_2179_x$jscomp$inline_2891$$))) {
                        var $b$jscomp$inline_2890$$ = $b__55220_level$jscomp$42$$;
                        $level$jscomp$inline_2179_x$jscomp$inline_2891$$ = $APP.$amp$components$threejs$geometry$total_level_height$$($APP.$cljs$cst$693$layers$$.$cljs$core$IFn$_invoke$arity$1$($level$jscomp$inline_2179_x$jscomp$inline_2891$$));
                        $b$jscomp$inline_2890$$.add($level$jscomp$inline_2179_x$jscomp$inline_2891$$);
                      }
                      $i__55219$jscomp$inline_2178$$ += 1;
                    } else {
                      $JSCompiler_inline_result$jscomp$435_c__5626__auto__$jscomp$15$$ = !0;
                      break a;
                    }
                  }
                  $JSCompiler_inline_result$jscomp$435_c__5626__auto__$jscomp$15$$ = void 0;
                }
                return $JSCompiler_inline_result$jscomp$435_c__5626__auto__$jscomp$15$$ ? $APP.$cljs$core$chunk_cons$$($APP.$cljs$core$chunk$$($b__55220_level$jscomp$42$$), $amp$components$threejs$geometry$calculate_total_dimensions_$_iter__55217$$($APP.$cljs$core$_chunked_rest$$($s__55218__$1_s__55218__$2_temp__5823__auto____$1$jscomp$5$$))) : $APP.$cljs$core$chunk_cons$$($APP.$cljs$core$chunk$$($b__55220_level$jscomp$42$$), null);
              }
              $b__55220_level$jscomp$42$$ = $APP.$cljs$core$first$$($s__55218__$1_s__55218__$2_temp__5823__auto____$1$jscomp$5$$);
              if ($APP.$cljs$core$seq$$($APP.$cljs$cst$693$layers$$.$cljs$core$IFn$_invoke$arity$1$($b__55220_level$jscomp$42$$))) {
                return $APP.$cljs$core$cons$$($APP.$amp$components$threejs$geometry$total_level_height$$($APP.$cljs$cst$693$layers$$.$cljs$core$IFn$_invoke$arity$1$($b__55220_level$jscomp$42$$)), $amp$components$threejs$geometry$calculate_total_dimensions_$_iter__55217$$($APP.$cljs$core$rest$$($s__55218__$1_s__55218__$2_temp__5823__auto____$1$jscomp$5$$)));
              }
              $s__55218__$1_s__55218__$2_temp__5823__auto____$1$jscomp$5$$ = $APP.$cljs$core$rest$$($s__55218__$1_s__55218__$2_temp__5823__auto____$1$jscomp$5$$);
            } else {
              return null;
            }
          }
        }, null, null);
      }($temp__5823__auto__$jscomp$91$$);
    }());
    return $APP.$cljs$core$truth_$$($APP.$cljs$core$truth_$$($mockup_data$jscomp$1_total_w$$) ? $all_dims_total_d$$ : $mockup_data$jscomp$1_total_w$$) ? new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$418$width$$, $mockup_data$jscomp$1_total_w$$, $APP.$cljs$cst$419$height$$, $total_h$$, $APP.$cljs$cst$695$length$$, $all_dims_total_d$$], null) : null;
  }
  return null;
};
$amp$components$threejs$copy_link_button$can_share_QMARK_$$ = function() {
  return typeof navigator !== "undefined" && $APP.$cljs$core$fn_QMARK_$$(navigator.share);
};
$amp$components$threejs$copy_link_button$copy_link_button$$ = function($G__67755_map__67732_map__67732__$1_piece_id_props__41640__auto__$jscomp$85_vec__67729$$, $maybe_ref__41641__auto__$jscomp$85_vec__67743$$) {
  $G__67755_map__67732_map__67732__$1_piece_id_props__41640__auto__$jscomp$85_vec__67729$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__67755_map__67732_map__67732__$1_piece_id_props__41640__auto__$jscomp$85_vec__67729$$), $maybe_ref__41641__auto__$jscomp$85_vec__67743$$], null);
  $G__67755_map__67732_map__67732__$1_piece_id_props__41640__auto__$jscomp$85_vec__67729$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__67755_map__67732_map__67732__$1_piece_id_props__41640__auto__$jscomp$85_vec__67729$$, 0, null);
  $G__67755_map__67732_map__67732__$1_piece_id_props__41640__auto__$jscomp$85_vec__67729$$ = $APP.$cljs$core$__destructure_map$$($G__67755_map__67732_map__67732__$1_piece_id_props__41640__auto__$jscomp$85_vec__67729$$);
  $G__67755_map__67732_map__67732__$1_piece_id_props__41640__auto__$jscomp$85_vec__67729$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__67755_map__67732_map__67732__$1_piece_id_props__41640__auto__$jscomp$85_vec__67729$$, $cljs$cst$917$piece_id$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $maybe_ref__41641__auto__$jscomp$85_vec__67743$$ = $APP.$helix$hooks$use_state$$(!1);
  var $copied_QMARK_$jscomp$1$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($maybe_ref__41641__auto__$jscomp$85_vec__67743$$, 0, null), $set_copied_BANG_$jscomp$1$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($maybe_ref__41641__auto__$jscomp$85_vec__67743$$, 1, null), $url$jscomp$78$$ = "https://armenianpavilion2026.org/mockups?piece\x3d" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($G__67755_map__67732_map__67732__$1_piece_id_props__41640__auto__$jscomp$85_vec__67729$$);
  $G__67755_map__67732_map__67732__$1_piece_id_props__41640__auto__$jscomp$85_vec__67729$$ = function() {
    return {className:$APP.$helix$impl$props$normalize_class$$("z-20 fixed top-0 right-0 m-2 p-2 rounded bg-white/40 border-2 border-slate-800 hover:bg-white/60 transition-colors"), title:$amp$components$threejs$copy_link_button$can_share_QMARK_$$() ? "Share link" : "Copy link to clipboard", onClick:function() {
      return $amp$components$threejs$copy_link_button$can_share_QMARK_$$() ? navigator.share({title:"Armenian Pavilion 2026", url:$url$jscomp$78$$}).catch(function() {
        return null;
      }) : navigator.clipboard.writeText($url$jscomp$78$$).then(function() {
        $set_copied_BANG_$jscomp$1$$.$cljs$core$IFn$_invoke$arity$1$ ? $set_copied_BANG_$jscomp$1$$.$cljs$core$IFn$_invoke$arity$1$(!0) : $set_copied_BANG_$jscomp$1$$.call(null, !0);
        return setTimeout(function() {
          return $set_copied_BANG_$jscomp$1$$.$cljs$core$IFn$_invoke$arity$1$ ? $set_copied_BANG_$jscomp$1$$.$cljs$core$IFn$_invoke$arity$1$(!1) : $set_copied_BANG_$jscomp$1$$.call(null, !1);
        }, 2000);
      });
    }, children:$APP.$cljs$core$truth_$$($copied_QMARK_$jscomp$1$$) ? function() {
      var $G__67791$$ = {className:"text-xs font-mono text-slate-800", children:"Copied!"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__67791$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__67791$$);
    }() : function() {
      var $G__67805$$ = {"class":"w-5 h-5 text-slate-800"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$icons$DocumentIcon$$, $G__67805$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$icons$DocumentIcon$$, $G__67805$$);
    }()};
  }();
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("button", $G__67755_map__67732_map__67732__$1_piece_id_props__41640__auto__$jscomp$85_vec__67729$$) : $APP.$helix$core$jsx$$.call(null, "button", $G__67755_map__67732_map__67732__$1_piece_id_props__41640__auto__$jscomp$85_vec__67729$$);
};
$amp$components$threejs$mockup_footer$mockup_footer$$ = function($G__286291_G__286295$jscomp$inline_3913_props__41675__auto__$jscomp$4_vec__286287$$, $maybe_ref__41676__auto__$jscomp$4$$) {
  $G__286291_G__286295$jscomp$inline_3913_props__41675__auto__$jscomp$4_vec__286287$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__286291_G__286295$jscomp$inline_3913_props__41675__auto__$jscomp$4_vec__286287$$), $maybe_ref__41676__auto__$jscomp$4$$], null);
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__286291_G__286295$jscomp$inline_3913_props__41675__auto__$jscomp$4_vec__286287$$, 0, null);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__286291_G__286295$jscomp$inline_3913_props__41675__auto__$jscomp$4_vec__286287$$ = {className:"text-xs font-mono", children:"© Armenian Pavilion Venice Biennale Arte 2026"};
  $G__286291_G__286295$jscomp$inline_3913_props__41675__auto__$jscomp$4_vec__286287$$ = {className:"z-20 fixed bottom-0 left-0 right-0 py-2 px-4", children:$APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__286291_G__286295$jscomp$inline_3913_props__41675__auto__$jscomp$4_vec__286287$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__286291_G__286295$jscomp$inline_3913_props__41675__auto__$jscomp$4_vec__286287$$)};
  return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("footer", $G__286291_G__286295$jscomp$inline_3913_props__41675__auto__$jscomp$4_vec__286287$$) : $APP.$helix$core$jsx$$.call(null, "footer", $G__286291_G__286295$jscomp$inline_3913_props__41675__auto__$jscomp$4_vec__286287$$);
};
$amp$components$threejs$mockup_hud$hud_header$$ = function($G__68046_map__68043_map__68043__$1_props__41640__auto__$jscomp$86_vec__68040$$, $maybe_ref__41641__auto__$jscomp$86$$) {
  $G__68046_map__68043_map__68043__$1_props__41640__auto__$jscomp$86_vec__68040$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__68046_map__68043_map__68043__$1_props__41640__auto__$jscomp$86_vec__68040$$), $maybe_ref__41641__auto__$jscomp$86$$], null);
  $G__68046_map__68043_map__68043__$1_props__41640__auto__$jscomp$86_vec__68040$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__68046_map__68043_map__68043__$1_props__41640__auto__$jscomp$86_vec__68040$$, 0, null);
  $G__68046_map__68043_map__68043__$1_props__41640__auto__$jscomp$86_vec__68040$$ = $APP.$cljs$core$__destructure_map$$($G__68046_map__68043_map__68043__$1_props__41640__auto__$jscomp$86_vec__68040$$);
  var $title$jscomp$35$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__68046_map__68043_map__68043__$1_props__41640__auto__$jscomp$86_vec__68040$$, $APP.$cljs$cst$381$title$$), $on_toggle$jscomp$2$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__68046_map__68043_map__68043__$1_props__41640__auto__$jscomp$86_vec__68040$$, $APP.$cljs$cst$388$on_toggle$$), $hud_open_QMARK_$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__68046_map__68043_map__68043__$1_props__41640__auto__$jscomp$86_vec__68040$$, 
  $cljs$cst$918$hud_open_QMARK_$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__68046_map__68043_map__68043__$1_props__41640__auto__$jscomp$86_vec__68040$$ = function() {
    return {className:"flex items-center cursor-pointer select-none", onClick:$on_toggle$jscomp$2$$, children:[function() {
      var $G__68049$$ = $APP.$cljs$core$truth_$$($hud_open_QMARK_$$) ? $amp$components$icons$CollapseIcon$$ : $amp$components$icons$ExpandIcon$$, $G__68050$$ = {"class":"w-5 h-5 text-slate-800 mr-4"};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($G__68049$$, $G__68050$$) : $APP.$helix$core$jsx$$.call(null, $G__68049$$, $G__68050$$);
    }(), function() {
      var $G__68055$$ = {className:"text-md font-mono font-bold", children:$title$jscomp$35$$};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__68055$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__68055$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__68046_map__68043_map__68043__$1_props__41640__auto__$jscomp$86_vec__68040$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__68046_map__68043_map__68043__$1_props__41640__auto__$jscomp$86_vec__68040$$);
};
$amp$components$threejs$mockup_hud$mockup_hud$$ = function($G__68071_map__68068_map__68068__$1_props__41640__auto__$jscomp$87_vec__68065$$, $maybe_ref__41641__auto__$jscomp$87$$) {
  $G__68071_map__68068_map__68068__$1_props__41640__auto__$jscomp$87_vec__68065$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__68071_map__68068_map__68068__$1_props__41640__auto__$jscomp$87_vec__68065$$), $maybe_ref__41641__auto__$jscomp$87$$], null);
  $G__68071_map__68068_map__68068__$1_props__41640__auto__$jscomp$87_vec__68065$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__68071_map__68068_map__68068__$1_props__41640__auto__$jscomp$87_vec__68065$$, 0, null);
  $G__68071_map__68068_map__68068__$1_props__41640__auto__$jscomp$87_vec__68065$$ = $APP.$cljs$core$__destructure_map$$($G__68071_map__68068_map__68068__$1_props__41640__auto__$jscomp$87_vec__68065$$);
  var $on_toggle_hud$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__68071_map__68068_map__68068__$1_props__41640__auto__$jscomp$87_vec__68065$$, $cljs$cst$919$on_toggle_hud$$), $on_toggle_wireframe$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__68071_map__68068_map__68068__$1_props__41640__auto__$jscomp$87_vec__68065$$, $cljs$cst$920$on_toggle_wireframe$$), $on_toggle_ground$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__68071_map__68068_map__68068__$1_props__41640__auto__$jscomp$87_vec__68065$$, 
  $cljs$cst$921$on_toggle_ground$$), $ground_plane_QMARK_$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__68071_map__68068_map__68068__$1_props__41640__auto__$jscomp$87_vec__68065$$, $cljs$cst$922$ground_plane_QMARK_$$), $wireframe_QMARK_$jscomp$3$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__68071_map__68068_map__68068__$1_props__41640__auto__$jscomp$87_vec__68065$$, $APP.$cljs$cst$700$wireframe_QMARK_$$), $on_toggle_parts_panel$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__68071_map__68068_map__68068__$1_props__41640__auto__$jscomp$87_vec__68065$$, 
  $cljs$cst$923$on_toggle_parts_panel$$), $title$jscomp$36$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__68071_map__68068_map__68068__$1_props__41640__auto__$jscomp$87_vec__68065$$, $APP.$cljs$cst$381$title$$), $mockup_data$jscomp$4$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__68071_map__68068_map__68068__$1_props__41640__auto__$jscomp$87_vec__68065$$, $cljs$cst$924$mockup_data$$), $hud_open_QMARK_$jscomp$1$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__68071_map__68068_map__68068__$1_props__41640__auto__$jscomp$87_vec__68065$$, 
  $cljs$cst$918$hud_open_QMARK_$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__68071_map__68068_map__68068__$1_props__41640__auto__$jscomp$87_vec__68065$$ = function() {
    return {className:"z-20 flex flex-col gap-2 absolute bg-white/40 px-4 py-2 border-slate-800 border-4 m-2", children:[function() {
      var $G__68075$$ = {"on-toggle":$on_toggle_hud$$, title:$APP.$cljs$core$truth_$$($title$jscomp$36$$) ? $title$jscomp$36$$ : "Untitled", "hud-open?":$hud_open_QMARK_$jscomp$1$$};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$threejs$mockup_hud$hud_header$$, $G__68075$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$threejs$mockup_hud$hud_header$$, $G__68075$$);
    }(), $APP.$cljs$core$truth_$$($hud_open_QMARK_$jscomp$1$$) ? function() {
      var $G__68079$$ = function() {
        return {className:"flex flex-col gap-2", children:[function() {
          var $G__68084_temp__5823__auto__$jscomp$104_width$jscomp$44$$ = $amp$components$threejs$geometry$calculate_total_dimensions$$($mockup_data$jscomp$4$$);
          if ($APP.$cljs$core$truth_$$($G__68084_temp__5823__auto__$jscomp$104_width$jscomp$44$$)) {
            var $length$jscomp$32_map__68082__$1$$ = $APP.$cljs$core$__destructure_map$$($G__68084_temp__5823__auto__$jscomp$104_width$jscomp$44$$);
            $G__68084_temp__5823__auto__$jscomp$104_width$jscomp$44$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($length$jscomp$32_map__68082__$1$$, $APP.$cljs$cst$418$width$$);
            var $height$jscomp$42$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($length$jscomp$32_map__68082__$1$$, $APP.$cljs$cst$419$height$$);
            $length$jscomp$32_map__68082__$1$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($length$jscomp$32_map__68082__$1$$, $APP.$cljs$cst$695$length$$);
            $G__68084_temp__5823__auto__$jscomp$104_width$jscomp$44$$ = {className:"text-xs font-mono text-slate-700", children:"" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($amp$components$threejs$geometry$fmt_dim$$($length$jscomp$32_map__68082__$1$$)) + '"(L) × ' + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($amp$components$threejs$geometry$fmt_dim$$($G__68084_temp__5823__auto__$jscomp$104_width$jscomp$44$$)) + '"(W) × ' + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($amp$components$threejs$geometry$fmt_dim$$($height$jscomp$42$$)) + 
            '"(H)'};
            return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__68084_temp__5823__auto__$jscomp$104_width$jscomp$44$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__68084_temp__5823__auto__$jscomp$104_width$jscomp$44$$);
          }
          return null;
        }(), function() {
          var $G__68091$$ = {className:"px-3 py-1 bg-slate-800 text-white text-sm font-mono rounded hover:bg-slate-700 transition-colors", onClick:$on_toggle_wireframe$$, children:$APP.$cljs$core$truth_$$($wireframe_QMARK_$jscomp$3$$) ? "Solid" : "Lines"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("button", $G__68091$$) : $APP.$helix$core$jsx$$.call(null, "button", $G__68091$$);
        }(), function() {
          var $G__68095$$ = {className:"px-3 py-1 bg-slate-800 text-white text-sm font-mono rounded hover:bg-slate-700 transition-colors", onClick:$on_toggle_ground$$, children:$APP.$cljs$core$truth_$$($ground_plane_QMARK_$$) ? "Hide Ground" : "Show Ground"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("button", $G__68095$$) : $APP.$helix$core$jsx$$.call(null, "button", $G__68095$$);
        }(), function() {
          var $G__68099$$ = {className:"px-3 py-1 bg-slate-800 text-white text-sm font-mono rounded hover:bg-slate-700 transition-colors", onClick:$on_toggle_parts_panel$$, children:"Parts List"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("button", $G__68099$$) : $APP.$helix$core$jsx$$.call(null, "button", $G__68099$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__68079$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__68079$$);
    }() : null]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__68071_map__68068_map__68068__$1_props__41640__auto__$jscomp$87_vec__68065$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__68071_map__68068_map__68068__$1_props__41640__auto__$jscomp$87_vec__68065$$);
};
$amp$components$threejs$parts_panel$parts_panel$$ = function($G__286577_map__286569_map__286569__$1_props__41675__auto__$jscomp$5_vec__286566$$, $maybe_ref__41676__auto__$jscomp$5$$) {
  $G__286577_map__286569_map__286569__$1_props__41675__auto__$jscomp$5_vec__286566$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__286577_map__286569_map__286569__$1_props__41675__auto__$jscomp$5_vec__286566$$), $maybe_ref__41676__auto__$jscomp$5$$], null);
  $G__286577_map__286569_map__286569__$1_props__41675__auto__$jscomp$5_vec__286566$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__286577_map__286569_map__286569__$1_props__41675__auto__$jscomp$5_vec__286566$$, 0, null);
  $G__286577_map__286569_map__286569__$1_props__41675__auto__$jscomp$5_vec__286566$$ = $APP.$cljs$core$__destructure_map$$($G__286577_map__286569_map__286569__$1_props__41675__auto__$jscomp$5_vec__286566$$);
  var $open_QMARK_$jscomp$3$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__286577_map__286569_map__286569__$1_props__41675__auto__$jscomp$5_vec__286566$$, $APP.$cljs$cst$323$open_QMARK_$$), $mockup_data$jscomp$5$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__286577_map__286569_map__286569__$1_props__41675__auto__$jscomp$5_vec__286566$$, $cljs$cst$924$mockup_data$$), $on_close$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__286577_map__286569_map__286569__$1_props__41675__auto__$jscomp$5_vec__286566$$, 
  $cljs$cst$925$on_close$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__286577_map__286569_map__286569__$1_props__41675__auto__$jscomp$5_vec__286566$$ = function() {
    return {className:$APP.$helix$impl$props$normalize_class$$("z-30 fixed top-0 right-0 h-full bg-white border-l-4 border-slate-800 shadow-lg transition-transform duration-300 ease-in-out " + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($APP.$cljs$core$truth_$$($open_QMARK_$jscomp$3$$) ? "translate-x-0" : "translate-x-full")), style:{width:$APP.$helix$impl$props$__GT_js$$("360px")}, children:[function() {
      var $G__286589$$ = function() {
        return {className:"flex justify-between items-center px-4 py-3 border-b-2 border-slate-300", children:[function() {
          var $G__286593$$ = {className:"text-lg font-bold font-mono", children:"Parts List"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("h2", $G__286593$$) : $APP.$helix$core$jsx$$.call(null, "h2", $G__286593$$);
        }(), function() {
          var $G__286599$$ = {className:"text-2xl font-bold text-slate-600 hover:text-slate-800", onClick:$on_close$$, children:"×"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("button", $G__286599$$) : $APP.$helix$core$jsx$$.call(null, "button", $G__286599$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__286589$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__286589$$);
    }(), function() {
      var $G__286605$$ = function() {
        return {className:"p-4 overflow-y-auto", style:{height:$APP.$helix$impl$props$__GT_js$$("calc(100% - 60px)")}, children:function() {
          var $temp__5821__auto__$jscomp$65$$ = $amp$components$threejs$geometry$extract_parts_list$$($mockup_data$jscomp$5$$);
          if ($APP.$cljs$core$truth_$$($temp__5821__auto__$jscomp$65$$)) {
            var $G__286617_G__286644$$ = function() {
              return {className:"list-decimal list-inside space-y-2 font-mono text-sm", children:$APP.$cljs$core$map_indexed$cljs$0core$0IFn$0_invoke$0arity$02$$(function($idx$jscomp$79$$, $G__286630_map__286621__$1_p__286620$$) {
                $G__286630_map__286621__$1_p__286620$$ = $APP.$cljs$core$__destructure_map$$($G__286630_map__286621__$1_p__286620$$);
                var $dims$jscomp$7$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__286630_map__286621__$1_p__286620$$, $APP.$cljs$cst$461$dims$$), $qty$jscomp$2$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__286630_map__286621__$1_p__286620$$, $APP.$cljs$cst$694$qty$$), $w$jscomp$30$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($dims$jscomp$7$$, 0, null), $h$jscomp$117$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($dims$jscomp$7$$, 
                1, null), $d$jscomp$156$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($dims$jscomp$7$$, 2, null);
                $G__286630_map__286621__$1_p__286620$$ = function() {
                  return {className:"py-1 border-b border-slate-200", children:[function() {
                    var $G__286635$$ = {className:"font-bold", children:"" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($qty$jscomp$2$$) + "x "};
                    return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__286635$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__286635$$);
                  }(), function() {
                    var $G__286639$$ = {children:"" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($amp$components$threejs$geometry$fmt_dim$$($d$jscomp$156$$)) + '"(L) × ' + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($amp$components$threejs$geometry$fmt_dim$$($w$jscomp$30$$)) + '"(W) × ' + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($amp$components$threejs$geometry$fmt_dim$$($h$jscomp$117$$)) + '"(H)'};
                    return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__286639$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__286639$$);
                  }()]};
                }();
                return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$3$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$3$("li", $G__286630_map__286621__$1_p__286620$$, $idx$jscomp$79$$) : $APP.$helix$core$jsxs$$.call(null, "li", $G__286630_map__286621__$1_p__286620$$, $idx$jscomp$79$$);
              }, $temp__5821__auto__$jscomp$65$$)};
            }();
            return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("ol", $G__286617_G__286644$$) : $APP.$helix$core$jsx$$.call(null, "ol", $G__286617_G__286644$$);
          }
          $G__286617_G__286644$$ = {className:"text-slate-500 italic", children:"No parts data available"};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("p", $G__286617_G__286644$$) : $APP.$helix$core$jsx$$.call(null, "p", $G__286617_G__286644$$);
        }()};
      }();
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__286605$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__286605$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__286577_map__286569_map__286569__$1_props__41675__auto__$jscomp$5_vec__286566$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__286577_map__286569_map__286569__$1_props__41675__auto__$jscomp$5_vec__286566$$);
};
$amp$components$threejs$selection_info_bar$selection_info_bar$$ = function($G__287151_map__287141_map__287141__$1_props__41675__auto__$jscomp$6_vec__287138$$, $maybe_ref__41676__auto__$jscomp$6$$) {
  $G__287151_map__287141_map__287141__$1_props__41675__auto__$jscomp$6_vec__287138$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__287151_map__287141_map__287141__$1_props__41675__auto__$jscomp$6_vec__287138$$), $maybe_ref__41676__auto__$jscomp$6$$], null);
  $G__287151_map__287141_map__287141__$1_props__41675__auto__$jscomp$6_vec__287138$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__287151_map__287141_map__287141__$1_props__41675__auto__$jscomp$6_vec__287138$$, 0, null);
  $G__287151_map__287141_map__287141__$1_props__41675__auto__$jscomp$6_vec__287138$$ = $APP.$cljs$core$__destructure_map$$($G__287151_map__287141_map__287141__$1_props__41675__auto__$jscomp$6_vec__287138$$);
  var $selection$jscomp$1$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($G__287151_map__287141_map__287141__$1_props__41675__auto__$jscomp$6_vec__287138$$, $APP.$cljs$cst$702$selection$$);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  return $APP.$cljs$core$truth_$$($selection$jscomp$1$$) ? ($G__287151_map__287141_map__287141__$1_props__41675__auto__$jscomp$6_vec__287138$$ = function() {
    return {className:"z-20 fixed bottom-8 left-1/2 bg-white/90 border-2 border-slate-800 px-4 py-2 rounded shadow-lg font-mono", style:{transform:$APP.$helix$impl$props$__GT_js$$("translateX(-50%)"), maxWidth:$APP.$helix$impl$props$__GT_js$$("calc(100vw - 1rem)")}, children:[function() {
      var $G__287160$$ = function() {
        return {className:"flex items-center gap-3 whitespace-nowrap", children:[function() {
          var $G__287164$$ = {className:"w-4 h-4 rounded-sm border border-slate-400 flex-shrink-0", style:{backgroundColor:$APP.$helix$impl$props$__GT_js$$($APP.$cljs$cst$413$color$$.$cljs$core$IFn$_invoke$arity$1$($selection$jscomp$1$$))}};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__287164$$) : $APP.$helix$core$jsx$$.call(null, "div", $G__287164$$);
        }(), function() {
          var $d$jscomp$inline_3463_vec__287174$jscomp$inline_3460$$ = $APP.$cljs$cst$461$dims$$.$cljs$core$IFn$_invoke$arity$1$($selection$jscomp$1$$);
          var $G__287170_w$jscomp$inline_3461$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($d$jscomp$inline_3463_vec__287174$jscomp$inline_3460$$, 0, null);
          var $h$jscomp$inline_3462$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($d$jscomp$inline_3463_vec__287174$jscomp$inline_3460$$, 1, null);
          $d$jscomp$inline_3463_vec__287174$jscomp$inline_3460$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($d$jscomp$inline_3463_vec__287174$jscomp$inline_3460$$, 2, null);
          $G__287170_w$jscomp$inline_3461$$ = {className:"text-xs sm:text-sm font-bold", children:"" + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($amp$components$threejs$geometry$fmt_dim$$($d$jscomp$inline_3463_vec__287174$jscomp$inline_3460$$)) + '"(L) × ' + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($amp$components$threejs$geometry$fmt_dim$$($G__287170_w$jscomp$inline_3461$$)) + '"(W) × ' + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($amp$components$threejs$geometry$fmt_dim$$($h$jscomp$inline_3462$$)) + 
          '"(H)'};
          return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__287170_w$jscomp$inline_3461$$) : $APP.$helix$core$jsx$$.call(null, "span", $G__287170_w$jscomp$inline_3461$$);
        }()]};
      }();
      return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__287160$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__287160$$);
    }(), function() {
      var $G__287178_temp__5823__auto__$jscomp$105$$ = $APP.$cljs$cst$462$note$$.$cljs$core$IFn$_invoke$arity$1$($selection$jscomp$1$$);
      return $APP.$cljs$core$truth_$$($G__287178_temp__5823__auto__$jscomp$105$$) ? ($G__287178_temp__5823__auto__$jscomp$105$$ = {className:"text-xs sm:text-sm text-slate-600 italic", children:"Notes: " + $APP.$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($G__287178_temp__5823__auto__$jscomp$105$$)}, $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("span", $G__287178_temp__5823__auto__$jscomp$105$$) : $APP.$helix$core$jsx$$.call(null, 
      "span", $G__287178_temp__5823__auto__$jscomp$105$$)) : null;
    }()]};
  }(), $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__287151_map__287141_map__287141__$1_props__41675__auto__$jscomp$6_vec__287138$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__287151_map__287141_map__287141__$1_props__41675__auto__$jscomp$6_vec__287138$$)) : null;
};
$amp$hooks$use_atom_state$use_atom_state$$ = function($atom_ref$$) {
  var $G__55534_55540_vec__55531$$ = $APP.$helix$hooks$use_state$$(function() {
    return $APP.$cljs$core$_deref$$($atom_ref$$);
  }), $value$jscomp$325$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__55534_55540_vec__55531$$, 0, null), $set_value_BANG_$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__55534_55540_vec__55531$$, 1, null);
  $G__55534_55540_vec__55531$$ = $APP.$helix$hooks$wrap_fx$$(function() {
    var $k$jscomp$362$$ = $APP.$cljs$core$gensym$cljs$0core$0IFn$0_invoke$0arity$01$$("atom-sync"), $G__55536_55542$$ = $APP.$cljs$core$_deref$$($atom_ref$$);
    $set_value_BANG_$$.$cljs$core$IFn$_invoke$arity$1$ ? $set_value_BANG_$$.$cljs$core$IFn$_invoke$arity$1$($G__55536_55542$$) : $set_value_BANG_$$.call(null, $G__55536_55542$$);
    $cljs$core$add_watch$$($atom_ref$$, $k$jscomp$362$$, function($_$jscomp$458$$, $___$1$jscomp$226$$, $___$2$jscomp$50$$, $new_val$$) {
      return $set_value_BANG_$$.$cljs$core$IFn$_invoke$arity$1$ ? $set_value_BANG_$$.$cljs$core$IFn$_invoke$arity$1$($new_val$$) : $set_value_BANG_$$.call(null, $new_val$$);
    });
    return function() {
      $APP.$cljs$core$_remove_watch$$($atom_ref$$, $k$jscomp$362$$);
      return $atom_ref$$;
    };
  });
  var $G__55535_55541$$ = [$atom_ref$$];
  $APP.$helix$hooks$raw_use_effect$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$hooks$raw_use_effect$$.$cljs$core$IFn$_invoke$arity$2$($G__55534_55540_vec__55531$$, $G__55535_55541$$) : $APP.$helix$hooks$raw_use_effect$$.call(null, $G__55534_55540_vec__55531$$, $G__55535_55541$$);
  return $value$jscomp$325$$;
};
$amp$views$mockup_view$root$$ = function() {
  var $data$jscomp$144_temp__5821__auto__$jscomp$66$$ = $APP.$cljs$core$_deref$$($amp$views$mockup_view$scene_override_atom$$);
  if ($APP.$cljs$core$truth_$$($data$jscomp$144_temp__5821__auto__$jscomp$66$$)) {
    return $data$jscomp$144_temp__5821__auto__$jscomp$66$$;
  }
  $data$jscomp$144_temp__5821__auto__$jscomp$66$$ = $APP.$cljs$core$_deref$$($amp$views$mockup_view$mockup_data_atom$$);
  var $G__68227_wireframe_QMARK_$jscomp$4$$ = $APP.$cljs$core$_deref$$($amp$views$mockup_view$wireframe_atom$$), $show_ground_QMARK_$jscomp$2$$ = $APP.$cljs$core$_deref$$($amp$views$mockup_view$ground_plane_atom$$), $selection$jscomp$3$$ = $APP.$cljs$core$_deref$$($amp$views$mockup_view$selected_block_atom$$);
  if ($APP.$cljs$core$truth_$$($data$jscomp$144_temp__5821__auto__$jscomp$66$$)) {
    var $JSCompiler_temp_const$jscomp$437_renderer_fn$jscomp$1$$ = $APP.$cljs$core$keyword$$.$cljs$core$IFn$_invoke$arity$1$, $or__5142__auto__$jscomp$inline_2191_renderer_key$$ = $cljs$cst$929$renderer$$.$cljs$core$IFn$_invoke$arity$1$($data$jscomp$144_temp__5821__auto__$jscomp$66$$);
    $or__5142__auto__$jscomp$inline_2191_renderer_key$$ = $JSCompiler_temp_const$jscomp$437_renderer_fn$jscomp$1$$.call($APP.$cljs$core$keyword$$, $APP.$cljs$core$truth_$$($or__5142__auto__$jscomp$inline_2191_renderer_key$$) ? $or__5142__auto__$jscomp$inline_2191_renderer_key$$ : $cljs$cst$927$simple_stack_formation$$);
    $JSCompiler_temp_const$jscomp$437_renderer_fn$jscomp$1$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($APP.$cljs$core$_deref$$($amp$views$mockup_view$renderer_registry$$), $or__5142__auto__$jscomp$inline_2191_renderer_key$$);
    if ($APP.$cljs$core$truth_$$($JSCompiler_temp_const$jscomp$437_renderer_fn$jscomp$1$$)) {
      return $G__68227_wireframe_QMARK_$jscomp$4$$ = new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$700$wireframe_QMARK_$$, $G__68227_wireframe_QMARK_$jscomp$4$$, $APP.$cljs$cst$701$show_ground_QMARK_$$, $show_ground_QMARK_$jscomp$2$$, $APP.$cljs$cst$702$selection$$, $selection$jscomp$3$$], null), $JSCompiler_temp_const$jscomp$437_renderer_fn$jscomp$1$$.$cljs$core$IFn$_invoke$arity$2$ ? $JSCompiler_temp_const$jscomp$437_renderer_fn$jscomp$1$$.$cljs$core$IFn$_invoke$arity$2$($data$jscomp$144_temp__5821__auto__$jscomp$66$$, 
      $G__68227_wireframe_QMARK_$jscomp$4$$) : $JSCompiler_temp_const$jscomp$437_renderer_fn$jscomp$1$$.call(null, $data$jscomp$144_temp__5821__auto__$jscomp$66$$, $G__68227_wireframe_QMARK_$jscomp$4$$);
    }
    console.warn("Unknown renderer:", $APP.$cljs$core$pr_str_with_opts$$($APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$or__5142__auto__$jscomp$inline_2191_renderer_key$$])));
  }
  return new $APP.$cljs$core$PersistentVector$$(null, 1, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$553$object$$], null);
};
$amp$views$mockup_view$display_firebase_data$$ = function($JSCompiler_inline_result$jscomp$440_atoms$jscomp$inline_2900_map__68255__$1_p__68242$jscomp$inline_2193_p__68252_temp__5823__auto____$1$jscomp$inline_2909_z$jscomp$inline_2197$$) {
  $JSCompiler_inline_result$jscomp$440_atoms$jscomp$inline_2900_map__68255__$1_p__68242$jscomp$inline_2193_p__68252_temp__5823__auto____$1$jscomp$inline_2909_z$jscomp$inline_2197$$ = $APP.$cljs$core$__destructure_map$$($JSCompiler_inline_result$jscomp$440_atoms$jscomp$inline_2900_map__68255__$1_p__68242$jscomp$inline_2193_p__68252_temp__5823__auto____$1$jscomp$inline_2909_z$jscomp$inline_2197$$);
  var $camera$jscomp$10_x$jscomp$inline_2195_x$jscomp$inline_2901$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($JSCompiler_inline_result$jscomp$440_atoms$jscomp$inline_2900_map__68255__$1_p__68242$jscomp$inline_2193_p__68252_temp__5823__auto____$1$jscomp$inline_2909_z$jscomp$inline_2197$$, $APP.$cljs$cst$568$camera$$);
  $APP.$cljs$core$reset_BANG_$$($amp$views$mockup_view$scene_override_atom$$, null);
  $APP.$cljs$core$reset_BANG_$$($amp$views$mockup_view$mockup_data_atom$$, $JSCompiler_inline_result$jscomp$440_atoms$jscomp$inline_2900_map__68255__$1_p__68242$jscomp$inline_2193_p__68252_temp__5823__auto____$1$jscomp$inline_2909_z$jscomp$inline_2197$$);
  $JSCompiler_inline_result$jscomp$440_atoms$jscomp$inline_2900_map__68255__$1_p__68242$jscomp$inline_2193_p__68252_temp__5823__auto____$1$jscomp$inline_2909_z$jscomp$inline_2197$$ = $APP.$cljs$cst$455$position$$.$cljs$core$IFn$_invoke$arity$1$($camera$jscomp$10_x$jscomp$inline_2195_x$jscomp$inline_2901$$);
  var $map__65412__$1$jscomp$inline_2904_opts$jscomp$inline_2194_target$jscomp$inline_2905$$ = new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$394$target$$, $APP.$cljs$cst$394$target$$.$cljs$core$IFn$_invoke$arity$1$($camera$jscomp$10_x$jscomp$inline_2195_x$jscomp$inline_2901$$)], null);
  $camera$jscomp$10_x$jscomp$inline_2195_x$jscomp$inline_2901$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($JSCompiler_inline_result$jscomp$440_atoms$jscomp$inline_2900_map__68255__$1_p__68242$jscomp$inline_2193_p__68252_temp__5823__auto____$1$jscomp$inline_2909_z$jscomp$inline_2197$$, 0, null);
  var $y$jscomp$inline_2196_y$jscomp$inline_2902$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($JSCompiler_inline_result$jscomp$440_atoms$jscomp$inline_2900_map__68255__$1_p__68242$jscomp$inline_2193_p__68252_temp__5823__auto____$1$jscomp$inline_2909_z$jscomp$inline_2197$$, 1, null);
  $JSCompiler_inline_result$jscomp$440_atoms$jscomp$inline_2900_map__68255__$1_p__68242$jscomp$inline_2193_p__68252_temp__5823__auto____$1$jscomp$inline_2909_z$jscomp$inline_2197$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($JSCompiler_inline_result$jscomp$440_atoms$jscomp$inline_2900_map__68255__$1_p__68242$jscomp$inline_2193_p__68252_temp__5823__auto____$1$jscomp$inline_2909_z$jscomp$inline_2197$$, 2, null);
  a: {
    var $p__65407$jscomp$inline_2898_z$jscomp$inline_2903$$ = new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$camera$jscomp$10_x$jscomp$inline_2195_x$jscomp$inline_2901$$, $y$jscomp$inline_2196_y$jscomp$inline_2902$$, $JSCompiler_inline_result$jscomp$440_atoms$jscomp$inline_2900_map__68255__$1_p__68242$jscomp$inline_2193_p__68252_temp__5823__auto____$1$jscomp$inline_2909_z$jscomp$inline_2197$$], null);
    $JSCompiler_inline_result$jscomp$440_atoms$jscomp$inline_2900_map__68255__$1_p__68242$jscomp$inline_2193_p__68252_temp__5823__auto____$1$jscomp$inline_2909_z$jscomp$inline_2197$$ = $amp$views$mockup_view$scene_atoms$$;
    $camera$jscomp$10_x$jscomp$inline_2195_x$jscomp$inline_2901$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($p__65407$jscomp$inline_2898_z$jscomp$inline_2903$$, 0, null);
    $y$jscomp$inline_2196_y$jscomp$inline_2902$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($p__65407$jscomp$inline_2898_z$jscomp$inline_2903$$, 1, null);
    $p__65407$jscomp$inline_2898_z$jscomp$inline_2903$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($p__65407$jscomp$inline_2898_z$jscomp$inline_2903$$, 2, null);
    $map__65412__$1$jscomp$inline_2904_opts$jscomp$inline_2194_target$jscomp$inline_2905$$ = $APP.$cljs$core$__destructure_map$$($map__65412__$1$jscomp$inline_2904_opts$jscomp$inline_2194_target$jscomp$inline_2905$$);
    $map__65412__$1$jscomp$inline_2904_opts$jscomp$inline_2194_target$jscomp$inline_2905$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__65412__$1$jscomp$inline_2904_opts$jscomp$inline_2194_target$jscomp$inline_2905$$, $APP.$cljs$cst$394$target$$);
    var $new_state$jscomp$inline_2906_temp__5823__auto__$jscomp$inline_2908$$ = new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$455$position$$, new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$camera$jscomp$10_x$jscomp$inline_2195_x$jscomp$inline_2901$$, $y$jscomp$inline_2196_y$jscomp$inline_2902$$, $p__65407$jscomp$inline_2898_z$jscomp$inline_2903$$], null), $APP.$cljs$cst$394$target$$, $map__65412__$1$jscomp$inline_2904_opts$jscomp$inline_2194_target$jscomp$inline_2905$$], 
    null), $old_state$jscomp$inline_2907$$ = $APP.$cljs$core$deref$$($APP.$cljs$cst$691$camera_state$$.$cljs$core$IFn$_invoke$arity$1$($JSCompiler_inline_result$jscomp$440_atoms$jscomp$inline_2900_map__68255__$1_p__68242$jscomp$inline_2193_p__68252_temp__5823__auto____$1$jscomp$inline_2909_z$jscomp$inline_2197$$));
    if ($APP.$cljs$core$not_EQ_$cljs$0core$0IFn$0_invoke$0arity$02$$($new_state$jscomp$inline_2906_temp__5823__auto__$jscomp$inline_2908$$, $old_state$jscomp$inline_2907$$) && ($APP.$cljs$core$reset_BANG_$$($APP.$cljs$cst$691$camera_state$$.$cljs$core$IFn$_invoke$arity$1$($JSCompiler_inline_result$jscomp$440_atoms$jscomp$inline_2900_map__68255__$1_p__68242$jscomp$inline_2193_p__68252_temp__5823__auto____$1$jscomp$inline_2909_z$jscomp$inline_2197$$), $new_state$jscomp$inline_2906_temp__5823__auto__$jscomp$inline_2908$$), 
    $new_state$jscomp$inline_2906_temp__5823__auto__$jscomp$inline_2908$$ = $APP.$cljs$core$deref$$($APP.$cljs$cst$550$context$$.$cljs$core$IFn$_invoke$arity$1$($JSCompiler_inline_result$jscomp$440_atoms$jscomp$inline_2900_map__68255__$1_p__68242$jscomp$inline_2193_p__68252_temp__5823__auto____$1$jscomp$inline_2909_z$jscomp$inline_2197$$)), $APP.$cljs$core$truth_$$($new_state$jscomp$inline_2906_temp__5823__auto__$jscomp$inline_2908$$) && ($APP.$cljs$cst$655$threejs_default_camera$$.$cljs$core$IFn$_invoke$arity$1$($new_state$jscomp$inline_2906_temp__5823__auto__$jscomp$inline_2908$$).position.set($camera$jscomp$10_x$jscomp$inline_2195_x$jscomp$inline_2901$$, 
    $y$jscomp$inline_2196_y$jscomp$inline_2902$$, $p__65407$jscomp$inline_2898_z$jscomp$inline_2903$$), $JSCompiler_inline_result$jscomp$440_atoms$jscomp$inline_2900_map__68255__$1_p__68242$jscomp$inline_2193_p__68252_temp__5823__auto____$1$jscomp$inline_2909_z$jscomp$inline_2197$$ = $APP.$cljs$core$deref$$($APP.$cljs$cst$683$controls$$.$cljs$core$IFn$_invoke$arity$1$($JSCompiler_inline_result$jscomp$440_atoms$jscomp$inline_2900_map__68255__$1_p__68242$jscomp$inline_2193_p__68252_temp__5823__auto____$1$jscomp$inline_2909_z$jscomp$inline_2197$$)), 
    $APP.$cljs$core$truth_$$($JSCompiler_inline_result$jscomp$440_atoms$jscomp$inline_2900_map__68255__$1_p__68242$jscomp$inline_2193_p__68252_temp__5823__auto____$1$jscomp$inline_2909_z$jscomp$inline_2197$$)))) {
      $APP.$cljs$core$truth_$$($map__65412__$1$jscomp$inline_2904_opts$jscomp$inline_2194_target$jscomp$inline_2905$$) && $JSCompiler_inline_result$jscomp$440_atoms$jscomp$inline_2900_map__68255__$1_p__68242$jscomp$inline_2193_p__68252_temp__5823__auto____$1$jscomp$inline_2909_z$jscomp$inline_2197$$.target.set($APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$02$$($map__65412__$1$jscomp$inline_2904_opts$jscomp$inline_2194_target$jscomp$inline_2905$$, 0), $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$02$$($map__65412__$1$jscomp$inline_2904_opts$jscomp$inline_2194_target$jscomp$inline_2905$$, 
      1), $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$02$$($map__65412__$1$jscomp$inline_2904_opts$jscomp$inline_2194_target$jscomp$inline_2905$$, 2));
      $JSCompiler_inline_result$jscomp$440_atoms$jscomp$inline_2900_map__68255__$1_p__68242$jscomp$inline_2193_p__68252_temp__5823__auto____$1$jscomp$inline_2909_z$jscomp$inline_2197$$ = $JSCompiler_inline_result$jscomp$440_atoms$jscomp$inline_2900_map__68255__$1_p__68242$jscomp$inline_2193_p__68252_temp__5823__auto____$1$jscomp$inline_2909_z$jscomp$inline_2197$$.update();
      break a;
    }
    $JSCompiler_inline_result$jscomp$440_atoms$jscomp$inline_2900_map__68255__$1_p__68242$jscomp$inline_2193_p__68252_temp__5823__auto____$1$jscomp$inline_2909_z$jscomp$inline_2197$$ = null;
  }
  return $JSCompiler_inline_result$jscomp$440_atoms$jscomp$inline_2900_map__68255__$1_p__68242$jscomp$inline_2193_p__68252_temp__5823__auto____$1$jscomp$inline_2909_z$jscomp$inline_2197$$;
};
$APP.$amp$views$mockup_view$mockup_view$$ = function($G__68327_68400_G__68339_68404_G__68342_props__41640__auto__$jscomp$88_vec__68304_vec__68313_vec__68316$$, $G__68328_68401_G__68340_68405_maybe_ref__41641__auto__$jscomp$88_state$jscomp$28$$) {
  $G__68327_68400_G__68339_68404_G__68342_props__41640__auto__$jscomp$88_vec__68304_vec__68313_vec__68316$$ = new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$helix$core$extract_cljs_props$$($G__68327_68400_G__68339_68404_G__68342_props__41640__auto__$jscomp$88_vec__68304_vec__68313_vec__68316$$), $G__68328_68401_G__68340_68405_maybe_ref__41641__auto__$jscomp$88_state$jscomp$28$$], null);
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__68327_68400_G__68339_68404_G__68342_props__41640__auto__$jscomp$88_vec__68304_vec__68313_vec__68316$$, 0, null);
  $APP.$cljs$core$truth_$$(!1) && $APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$0$ ? (void 0).$cljs$core$IFn$_invoke$arity$0$() : (void 0).call(null));
  $G__68327_68400_G__68339_68404_G__68342_props__41640__auto__$jscomp$88_vec__68304_vec__68313_vec__68316$$ = $APP.$amp$providers$main_provider$use_main_state$$();
  $G__68328_68401_G__68340_68405_maybe_ref__41641__auto__$jscomp$88_state$jscomp$28$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__68327_68400_G__68339_68404_G__68342_props__41640__auto__$jscomp$88_vec__68304_vec__68313_vec__68316$$, 0, null);
  $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__68327_68400_G__68339_68404_G__68342_props__41640__auto__$jscomp$88_vec__68304_vec__68313_vec__68316$$, 1, null);
  var $piece_id$jscomp$1$$ = $APP.$cljs$core$get_in$cljs$0core$0IFn$0_invoke$0arity$02$$($G__68328_68401_G__68340_68405_maybe_ref__41641__auto__$jscomp$88_state$jscomp$28$$, new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$197$current_route$$, $APP.$cljs$cst$329$query_params$$, $cljs$cst$930$piece$$], null)), $container_ref$jscomp$4$$ = $APP.$helix$hooks$use_ref$$(null), $wireframe_QMARK_$jscomp$5$$ = $amp$hooks$use_atom_state$use_atom_state$$($amp$views$mockup_view$wireframe_atom$$), 
  $ground_plane_QMARK_$jscomp$1$$ = $amp$hooks$use_atom_state$use_atom_state$$($amp$views$mockup_view$ground_plane_atom$$), $panel_open_QMARK_$$ = $amp$hooks$use_atom_state$use_atom_state$$($amp$views$mockup_view$parts_panel_atom$$);
  $G__68327_68400_G__68339_68404_G__68342_props__41640__auto__$jscomp$88_vec__68304_vec__68313_vec__68316$$ = $APP.$helix$hooks$use_state$$(!0);
  var $hud_open_QMARK_$jscomp$2$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__68327_68400_G__68339_68404_G__68342_props__41640__auto__$jscomp$88_vec__68304_vec__68313_vec__68316$$, 0, null), $set_hud_open_BANG_$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__68327_68400_G__68339_68404_G__68342_props__41640__auto__$jscomp$88_vec__68304_vec__68313_vec__68316$$, 1, null), $mockup_data$jscomp$9$$ = $amp$hooks$use_atom_state$use_atom_state$$($amp$views$mockup_view$mockup_data_atom$$), 
  $selected_block$$ = $amp$hooks$use_atom_state$use_atom_state$$($amp$views$mockup_view$selected_block_atom$$);
  $G__68327_68400_G__68339_68404_G__68342_props__41640__auto__$jscomp$88_vec__68304_vec__68313_vec__68316$$ = $APP.$helix$hooks$wrap_fx$$(function() {
    var $temp__5823__auto___68402$$ = $APP.$cljs$core$_deref$$($container_ref$jscomp$4$$);
    $APP.$cljs$core$truth_$$($temp__5823__auto___68402$$) && ($APP.$cljs$core$reset_BANG_$$($amp$views$mockup_view$container_atom$$, $temp__5823__auto___68402$$), $APP.$cljs$core$truth_$$($APP.$cljs$core$_deref$$($amp$views$mockup_view$context_atom$$)) || $amp$components$threejs$scene$setup_scene_BANG_$$($temp__5823__auto___68402$$));
  });
  $G__68328_68401_G__68340_68405_maybe_ref__41641__auto__$jscomp$88_state$jscomp$28$$ = [];
  $APP.$helix$hooks$raw_use_layout_effect$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$hooks$raw_use_layout_effect$$.$cljs$core$IFn$_invoke$arity$2$($G__68327_68400_G__68339_68404_G__68342_props__41640__auto__$jscomp$88_vec__68304_vec__68313_vec__68316$$, $G__68328_68401_G__68340_68405_maybe_ref__41641__auto__$jscomp$88_state$jscomp$28$$) : $APP.$helix$hooks$raw_use_layout_effect$$.call(null, $G__68327_68400_G__68339_68404_G__68342_props__41640__auto__$jscomp$88_vec__68304_vec__68313_vec__68316$$, 
  $G__68328_68401_G__68340_68405_maybe_ref__41641__auto__$jscomp$88_state$jscomp$28$$);
  $G__68327_68400_G__68339_68404_G__68342_props__41640__auto__$jscomp$88_vec__68304_vec__68313_vec__68316$$ = $APP.$helix$hooks$wrap_fx$$(function() {
    return $amp$services$firebase$listen_to_edn$cljs$0core$0IFn$0_invoke$0arity$03$$($piece_id$jscomp$1$$);
  });
  $G__68328_68401_G__68340_68405_maybe_ref__41641__auto__$jscomp$88_state$jscomp$28$$ = [$piece_id$jscomp$1$$];
  $APP.$helix$hooks$raw_use_effect$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$hooks$raw_use_effect$$.$cljs$core$IFn$_invoke$arity$2$($G__68327_68400_G__68339_68404_G__68342_props__41640__auto__$jscomp$88_vec__68304_vec__68313_vec__68316$$, $G__68328_68401_G__68340_68405_maybe_ref__41641__auto__$jscomp$88_state$jscomp$28$$) : $APP.$helix$hooks$raw_use_effect$$.call(null, $G__68327_68400_G__68339_68404_G__68342_props__41640__auto__$jscomp$88_vec__68304_vec__68313_vec__68316$$, $G__68328_68401_G__68340_68405_maybe_ref__41641__auto__$jscomp$88_state$jscomp$28$$);
  $G__68327_68400_G__68339_68404_G__68342_props__41640__auto__$jscomp$88_vec__68304_vec__68313_vec__68316$$ = function() {
    return {className:"relative w-screen h-screen", children:[function() {
      var $G__68346$$ = {className:"fixed inset-0 z-10", style:{touchAction:$APP.$helix$impl$props$__GT_js$$("none")}, ref:$container_ref$jscomp$4$$};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$("canvas", $G__68346$$) : $APP.$helix$core$jsx$$.call(null, "canvas", $G__68346$$);
    }(), function() {
      var $G__68353$$ = function() {
        return {"on-toggle-hud":function() {
          var $G__68356$$ = $APP.$cljs$core$not$$($hud_open_QMARK_$jscomp$2$$);
          return $set_hud_open_BANG_$$.$cljs$core$IFn$_invoke$arity$1$ ? $set_hud_open_BANG_$$.$cljs$core$IFn$_invoke$arity$1$($G__68356$$) : $set_hud_open_BANG_$$.call(null, $G__68356$$);
        }, "on-toggle-ground":function() {
          return $APP.$cljs$core$swap_BANG_$$.$cljs$core$IFn$_invoke$arity$2$($amp$views$mockup_view$ground_plane_atom$$, $APP.$cljs$core$not$$);
        }, "wireframe?":$wireframe_QMARK_$jscomp$5$$, title:function() {
          var $or__5142__auto__$jscomp$267$$ = $APP.$cljs$cst$191$name$$.$cljs$core$IFn$_invoke$arity$1$($mockup_data$jscomp$9$$);
          return $APP.$cljs$core$truth_$$($or__5142__auto__$jscomp$267$$) ? $or__5142__auto__$jscomp$267$$ : "Untitled";
        }(), "on-toggle-parts-panel":function() {
          return $APP.$cljs$core$swap_BANG_$$.$cljs$core$IFn$_invoke$arity$2$($amp$views$mockup_view$parts_panel_atom$$, $APP.$cljs$core$not$$);
        }, "mockup-data":$mockup_data$jscomp$9$$, "on-toggle-wireframe":function() {
          return $APP.$cljs$core$swap_BANG_$$.$cljs$core$IFn$_invoke$arity$2$($amp$views$mockup_view$wireframe_atom$$, $APP.$cljs$core$not$$);
        }, "ground-plane?":$ground_plane_QMARK_$jscomp$1$$, "hud-open?":$hud_open_QMARK_$jscomp$2$$};
      }();
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$threejs$mockup_hud$mockup_hud$$, $G__68353$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$threejs$mockup_hud$mockup_hud$$, $G__68353$$);
    }(), function() {
      var $G__68359$$ = {"piece-id":$piece_id$jscomp$1$$};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$threejs$copy_link_button$copy_link_button$$, $G__68359$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$threejs$copy_link_button$copy_link_button$$, $G__68359$$);
    }(), function() {
      var $G__68363$$ = function() {
        return {"open?":$panel_open_QMARK_$$, "mockup-data":$mockup_data$jscomp$9$$, "on-close":function() {
          return $APP.$cljs$core$swap_BANG_$$.$cljs$core$IFn$_invoke$arity$2$($amp$views$mockup_view$parts_panel_atom$$, $APP.$cljs$core$not$$);
        }};
      }();
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$threejs$parts_panel$parts_panel$$, $G__68363$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$threejs$parts_panel$parts_panel$$, $G__68363$$);
    }(), function() {
      var $G__68368$$ = {selection:$selected_block$$};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$threejs$selection_info_bar$selection_info_bar$$, $G__68368$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$threejs$selection_info_bar$selection_info_bar$$, $G__68368$$);
    }(), function() {
      var $G__68376$$ = {};
      return $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsx$$.$cljs$core$IFn$_invoke$arity$2$($amp$components$threejs$mockup_footer$mockup_footer$$, $G__68376$$) : $APP.$helix$core$jsx$$.call(null, $amp$components$threejs$mockup_footer$mockup_footer$$, $G__68376$$);
    }()]};
  }();
  return $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$ ? $APP.$helix$core$jsxs$$.$cljs$core$IFn$_invoke$arity$2$("div", $G__68327_68400_G__68339_68404_G__68342_props__41640__auto__$jscomp$88_vec__68304_vec__68313_vec__68316$$) : $APP.$helix$core$jsxs$$.call(null, "div", $G__68327_68400_G__68339_68404_G__68342_props__41640__auto__$jscomp$88_vec__68304_vec__68313_vec__68316$$);
};
$cljs$tools$reader$impl$utils$ws_rx$$ = /[\s]/;
$cljs$tools$reader$reader_types$StringReader$$.prototype.$cljs$tools$reader$reader_types$Reader$read_char$arity$1$ = function() {
  if (this.$s_len$ > this.$s_pos$) {
    var $r$jscomp$34$$ = this.s.charAt(this.$s_pos$);
    this.$s_pos$ += 1;
    return $r$jscomp$34$$;
  }
  return null;
};
$cljs$tools$reader$reader_types$StringReader$$.prototype.$cljs$tools$reader$reader_types$Reader$peek_char$arity$1$ = function() {
  return this.$s_len$ > this.$s_pos$ ? this.s.charAt(this.$s_pos$) : null;
};
$cljs$tools$reader$reader_types$PushbackReader$$.prototype.$cljs$tools$reader$reader_types$Reader$read_char$arity$1$ = function() {
  var $c$jscomp$144$$ = this.$buf_pos$ < this.$buf_len$ ? this.buf[this.$buf_pos$] : this.$rdr$.$cljs$tools$reader$reader_types$Reader$read_char$arity$1$(null);
  this.$buf_pos$ < this.$buf_len$ && (this.$buf_pos$ += 1);
  return $c$jscomp$144$$ == null ? null : $cljs$core$char$0$$($c$jscomp$144$$);
};
$cljs$tools$reader$reader_types$PushbackReader$$.prototype.$cljs$tools$reader$reader_types$Reader$peek_char$arity$1$ = function() {
  var $c$jscomp$145$$ = this.$buf_pos$ < this.$buf_len$ ? this.buf[this.$buf_pos$] : this.$rdr$.$cljs$tools$reader$reader_types$Reader$peek_char$arity$1$(null);
  return $c$jscomp$145$$ == null ? null : $cljs$core$char$0$$($c$jscomp$145$$);
};
$cljs$tools$reader$reader_types$PushbackReader$$.prototype.$cljs$tools$reader$reader_types$IPushbackReader$unread$arity$2$ = function($reader$jscomp$18$$, $ch$jscomp$12$$) {
  if ($APP.$cljs$core$truth_$$($ch$jscomp$12$$)) {
    if (this.$buf_pos$ === 0) {
      throw Error("Pushback buffer is full");
    }
    --this.$buf_pos$;
    return this.buf[this.$buf_pos$] = $ch$jscomp$12$$;
  }
  return null;
};
var $cljs$tools$reader$impl$commons$int_pattern$$ = /^([-+]?)(?:(0)|([1-9][0-9]*)|0[xX]([0-9A-Fa-f]+)|0([0-7]+)|([1-9][0-9]?)[rR]([0-9A-Za-z]+)|0[0-9]+)(N)?$/, $cljs$tools$reader$impl$commons$ratio_pattern$$ = /([-+]?[0-9]+)\/([0-9]+)/, $cljs$tools$reader$impl$commons$float_pattern$$ = /([-+]?[0-9]+(\.[0-9]*)?([eE][-+]?[0-9]+)?)(M)?/, $cljs$tools$reader$impl$commons$read_comment$$ = function $cljs$tools$reader$impl$commons$read_comment$$($var_args$jscomp$360$$) {
  for (var $args__5882__auto__$jscomp$33_argseq__5883__auto__$jscomp$33$$ = [], $len__5876__auto___48487$$ = arguments.length, $i__5877__auto___48488$$ = 0;;) {
    if ($i__5877__auto___48488$$ < $len__5876__auto___48487$$) {
      $args__5882__auto__$jscomp$33_argseq__5883__auto__$jscomp$33$$.push(arguments[$i__5877__auto___48488$$]), $i__5877__auto___48488$$ += 1;
    } else {
      break;
    }
  }
  $args__5882__auto__$jscomp$33_argseq__5883__auto__$jscomp$33$$ = 1 < $args__5882__auto__$jscomp$33_argseq__5883__auto__$jscomp$33$$.length ? new $APP.$cljs$core$IndexedSeq$$($args__5882__auto__$jscomp$33_argseq__5883__auto__$jscomp$33$$.slice(1), 0, null) : null;
  return $cljs$tools$reader$impl$commons$read_comment$$.$cljs$core$IFn$_invoke$arity$variadic$(arguments[0], $args__5882__auto__$jscomp$33_argseq__5883__auto__$jscomp$33$$);
};
$cljs$tools$reader$impl$commons$read_comment$$.$cljs$core$IFn$_invoke$arity$variadic$ = function($rdr$jscomp$49$$) {
  for (;;) {
    var $c$jscomp$inline_2858$$ = $rdr$jscomp$49$$.$cljs$tools$reader$reader_types$Reader$read_char$arity$1$(null);
    if ("\n" === $c$jscomp$inline_2858$$ || "\n" === $c$jscomp$inline_2858$$ || $c$jscomp$inline_2858$$ == null) {
      break;
    }
  }
  return $rdr$jscomp$49$$;
};
$cljs$tools$reader$impl$commons$read_comment$$.$cljs$lang$maxFixedArity$ = 1;
$cljs$tools$reader$impl$commons$read_comment$$.$cljs$lang$applyTo$ = function($seq48448_seq48448__$1$$) {
  var $G__48450$$ = $APP.$cljs$core$first$$($seq48448_seq48448__$1$$);
  $seq48448_seq48448__$1$$ = $APP.$cljs$core$next$$($seq48448_seq48448__$1$$);
  return this.$cljs$core$IFn$_invoke$arity$variadic$($G__48450$$, $seq48448_seq48448__$1$$);
};
var $amp$components$threejs$geometry$collect_all_dims$$ = function $amp$components$threejs$geometry$collect_all_dims$$($data$jscomp$137$$) {
  return $APP.$cljs$core$seq$$($data$jscomp$137$$) ? $APP.$cljs$core$mapcat$cljs$0core$0IFn$0_invoke$0arity$0variadic$$(function($level$jscomp$41$$) {
    return $APP.$cljs$core$mapcat$cljs$0core$0IFn$0_invoke$0arity$0variadic$$(function($layer_group$jscomp$1$$) {
      return $APP.$cljs$core$mapcat$cljs$0core$0IFn$0_invoke$0arity$0variadic$$(function($G__55187$jscomp$inline_2171_JSCompiler_temp$jscomp$433_box$jscomp$2$$) {
        var $JSCompiler_temp_const$jscomp$431$$ = $APP.$cljs$core$concat$$.$cljs$core$IFn$_invoke$arity$2$, $JSCompiler_temp_const$jscomp$430$$ = $APP.$cljs$core$truth_$$($APP.$cljs$cst$461$dims$$.$cljs$core$IFn$_invoke$arity$1$($G__55187$jscomp$inline_2171_JSCompiler_temp$jscomp$433_box$jscomp$2$$)) ? new $APP.$cljs$core$PersistentVector$$(null, 1, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$461$dims$$.$cljs$core$IFn$_invoke$arity$1$($G__55187$jscomp$inline_2171_JSCompiler_temp$jscomp$433_box$jscomp$2$$)], 
        null) : null;
        $APP.$cljs$core$seq$$($APP.$cljs$cst$693$layers$$.$cljs$core$IFn$_invoke$arity$1$($G__55187$jscomp$inline_2171_JSCompiler_temp$jscomp$433_box$jscomp$2$$)) ? ($G__55187$jscomp$inline_2171_JSCompiler_temp$jscomp$433_box$jscomp$2$$ = new $APP.$cljs$core$PersistentVector$$(null, 1, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$693$layers$$, $APP.$cljs$cst$693$layers$$.$cljs$core$IFn$_invoke$arity$1$($G__55187$jscomp$inline_2171_JSCompiler_temp$jscomp$433_box$jscomp$2$$)], 
        null)], null), $G__55187$jscomp$inline_2171_JSCompiler_temp$jscomp$433_box$jscomp$2$$ = $amp$components$threejs$geometry$collect_all_dims$$.$cljs$core$IFn$_invoke$arity$1$ ? $amp$components$threejs$geometry$collect_all_dims$$.$cljs$core$IFn$_invoke$arity$1$($G__55187$jscomp$inline_2171_JSCompiler_temp$jscomp$433_box$jscomp$2$$) : $amp$components$threejs$geometry$collect_all_dims$$.call(null, $G__55187$jscomp$inline_2171_JSCompiler_temp$jscomp$433_box$jscomp$2$$)) : $G__55187$jscomp$inline_2171_JSCompiler_temp$jscomp$433_box$jscomp$2$$ = 
        null;
        return $JSCompiler_temp_const$jscomp$431$$.call($APP.$cljs$core$concat$$, $JSCompiler_temp_const$jscomp$430$$, $G__55187$jscomp$inline_2171_JSCompiler_temp$jscomp$433_box$jscomp$2$$);
      }, $APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$layer_group$jscomp$1$$]));
    }, $APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$APP.$cljs$cst$693$layers$$.$cljs$core$IFn$_invoke$arity$1$($level$jscomp$41$$)]));
  }, $APP.$cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$data$jscomp$137$$])) : null;
}, $cljs$cst$928$manual_formation$$ = new $APP.$cljs$core$Keyword$$(null, "manual-formation", "manual-formation", -1776741151), $cljs$cst$920$on_toggle_wireframe$$ = new $APP.$cljs$core$Keyword$$(null, "on-toggle-wireframe", "on-toggle-wireframe", -1682901729), $cljs$cst$919$on_toggle_hud$$ = new $APP.$cljs$core$Keyword$$(null, "on-toggle-hud", "on-toggle-hud", -860657154), $cljs$cst$929$renderer$$ = new $APP.$cljs$core$Keyword$$(null, "renderer", "renderer", 336841071), $cljs$cst$926$scene_graph$$ = 
new $APP.$cljs$core$Keyword$$(null, "scene-graph", "scene-graph", 1988288549), $cljs$cst$917$piece_id$$ = new $APP.$cljs$core$Keyword$$(null, "piece-id", "piece-id", 2023769230), $cljs$cst$924$mockup_data$$ = new $APP.$cljs$core$Keyword$$(null, "mockup-data", "mockup-data", 801751600), $cljs$cst$922$ground_plane_QMARK_$$ = new $APP.$cljs$core$Keyword$$(null, "ground-plane?", "ground-plane?", 1078596712), $cljs$cst$927$simple_stack_formation$$ = new $APP.$cljs$core$Keyword$$(null, "simple-stack-formation", 
"simple-stack-formation", 390387319), $cljs$cst$923$on_toggle_parts_panel$$ = new $APP.$cljs$core$Keyword$$(null, "on-toggle-parts-panel", "on-toggle-parts-panel", -1845929907), $cljs$cst$925$on_close$$ = new $APP.$cljs$core$Keyword$$(null, "on-close", "on-close", -761178394), $cljs$cst$918$hud_open_QMARK_$$ = new $APP.$cljs$core$Keyword$$(null, "hud-open?", "hud-open?", 146648018), $cljs$cst$921$on_toggle_ground$$ = new $APP.$cljs$core$Keyword$$(null, "on-toggle-ground", "on-toggle-ground", 1181161987), 
$cljs$cst$930$piece$$ = new $APP.$cljs$core$Keyword$$(null, "piece", "piece", 1396691784);
$APP.$JSCompiler_StaticMethods_beforeLoadModuleCode$$("mockup-view");
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$201$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$202$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$components$threejs$copy_link_button$copy_link_button$$, "(hooks/use-state false)", null, null) : (void 0).call(null, $amp$components$threejs$copy_link_button$copy_link_button$$, 
"(hooks/use-state false)", null, null)), $APP.$helix$core$register_BANG_$$($amp$components$threejs$copy_link_button$copy_link_button$$, "amp.components.threejs.copy-link-button/copy-link-button"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$201$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$202$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$components$threejs$mockup_footer$mockup_footer$$, "", null, null) : (void 0).call(null, $amp$components$threejs$mockup_footer$mockup_footer$$, "", 
null, null)), $APP.$helix$core$register_BANG_$$($amp$components$threejs$mockup_footer$mockup_footer$$, "amp.components.threejs.mockup-footer/mockup-footer"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$201$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$202$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$components$threejs$mockup_hud$hud_header$$, "", null, null) : (void 0).call(null, $amp$components$threejs$mockup_hud$hud_header$$, "", null, null)), 
$APP.$helix$core$register_BANG_$$($amp$components$threejs$mockup_hud$hud_header$$, "amp.components.threejs.mockup-hud/hud-header"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$201$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$202$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$components$threejs$mockup_hud$mockup_hud$$, "", null, null) : (void 0).call(null, $amp$components$threejs$mockup_hud$mockup_hud$$, "", null, null)), 
$APP.$helix$core$register_BANG_$$($amp$components$threejs$mockup_hud$mockup_hud$$, "amp.components.threejs.mockup-hud/mockup-hud"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$201$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$202$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$components$threejs$parts_panel$parts_panel$$, "", null, null) : (void 0).call(null, $amp$components$threejs$parts_panel$parts_panel$$, "", null, null)), 
$APP.$helix$core$register_BANG_$$($amp$components$threejs$parts_panel$parts_panel$$, "amp.components.threejs.parts-panel/parts-panel"));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$201$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$202$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($amp$components$threejs$selection_info_bar$selection_info_bar$$, "", null, null) : (void 0).call(null, $amp$components$threejs$selection_info_bar$selection_info_bar$$, 
"", null, null)), $APP.$helix$core$register_BANG_$$($amp$components$threejs$selection_info_bar$selection_info_bar$$, "amp.components.threejs.selection-info-bar/selection-info-bar"));
var $amp$components$threejs$renderers$manual_formation$render$$ = function $amp$components$threejs$renderers$manual_formation$render$$($var_args$jscomp$488$$) {
  switch(arguments.length) {
    case 1:
      return $amp$components$threejs$renderers$manual_formation$render$$.$cljs$core$IFn$_invoke$arity$1$(arguments[0]);
    case 2:
      return $amp$components$threejs$renderers$manual_formation$render$$.$cljs$core$IFn$_invoke$arity$2$(arguments[0], arguments[1]);
    default:
      throw Error(["Invalid arity: ", arguments.length].join(""));
  }
};
$amp$components$threejs$renderers$manual_formation$render$$.$cljs$core$IFn$_invoke$arity$1$ = function($mockup_data$jscomp$6$$) {
  return $amp$components$threejs$renderers$manual_formation$render$$.$cljs$core$IFn$_invoke$arity$2$($mockup_data$jscomp$6$$, $APP.$cljs$core$PersistentArrayMap$EMPTY$$);
};
$amp$components$threejs$renderers$manual_formation$render$$.$cljs$core$IFn$_invoke$arity$2$ = function($mockup_data$jscomp$7$$, $G__24889_p__24857_show_ground_QMARK_$jscomp$1$$) {
  var $map__24858__$1_scene_graph$$ = $APP.$cljs$core$__destructure_map$$($G__24889_p__24857_show_ground_QMARK_$jscomp$1$$);
  $G__24889_p__24857_show_ground_QMARK_$jscomp$1$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$03$$($map__24858__$1_scene_graph$$, $APP.$cljs$cst$701$show_ground_QMARK_$$, !0);
  var $selection$jscomp$2$$ = $APP.$cljs$core$get$cljs$0core$0IFn$0_invoke$0arity$02$$($map__24858__$1_scene_graph$$, $APP.$cljs$cst$702$selection$$);
  $APP.$cljs$core$tap_GT_$$("manual babay");
  $map__24858__$1_scene_graph$$ = $cljs$cst$926$scene_graph$$.$cljs$core$IFn$_invoke$arity$1$($mockup_data$jscomp$7$$);
  var $lighting$jscomp$1_selection_outline$jscomp$1$$ = $APP.$cljs$cst$703$lighting$$.$cljs$core$IFn$_invoke$arity$1$($mockup_data$jscomp$7$$), $pz_vec__24860$$ = function() {
    var $or__5142__auto__$jscomp$263$$ = $APP.$cljs$cst$455$position$$.$cljs$core$IFn$_invoke$arity$1$($mockup_data$jscomp$7$$);
    return $APP.$cljs$core$truth_$$($or__5142__auto__$jscomp$263$$) ? $or__5142__auto__$jscomp$263$$ : new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [0, 0, -4], null);
  }(), $px$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($pz_vec__24860$$, 0, null), $py$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($pz_vec__24860$$, 1, null);
  $pz_vec__24860$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($pz_vec__24860$$, 2, null);
  var $lights$jscomp$1$$ = $APP.$cljs$core$truth_$$($lighting$jscomp$1_selection_outline$jscomp$1$$) ? $lighting$jscomp$1_selection_outline$jscomp$1$$ : new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$597$ambient_light$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$612$intensity$$, 0.7], null)], null), new $APP.$cljs$core$PersistentVector$$(null, 
  2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$583$directional_light$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 3, [$APP.$cljs$cst$459$cast_shadow$$, !0, $APP.$cljs$cst$455$position$$, new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [80, 120, 60], null), $APP.$cljs$cst$612$intensity$$, 1.5], null)], null)], null);
  $lighting$jscomp$1_selection_outline$jscomp$1$$ = $APP.$cljs$core$truth_$$($selection$jscomp$2$$) ? function() {
    var $vec__24877_wz$jscomp$1$$ = $APP.$cljs$cst$686$world_position$$.$cljs$core$IFn$_invoke$arity$1$($selection$jscomp$2$$), $wx$jscomp$1$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($vec__24877_wz$jscomp$1$$, 0, null), $wy$jscomp$1$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($vec__24877_wz$jscomp$1$$, 1, null);
    $vec__24877_wz$jscomp$1$$ = $APP.$cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($vec__24877_wz$jscomp$1$$, 2, null);
    return new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$476$edge_box$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$455$position$$, new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$wx$jscomp$1$$, $wy$jscomp$1$$, $vec__24877_wz$jscomp$1$$ + 4], null), $APP.$cljs$cst$418$width$$, 1.02 * $APP.$cljs$cst$418$width$$.$cljs$core$IFn$_invoke$arity$1$($selection$jscomp$2$$), 
    $APP.$cljs$cst$419$height$$, 1.02 * $APP.$cljs$cst$419$height$$.$cljs$core$IFn$_invoke$arity$1$($selection$jscomp$2$$), $APP.$cljs$cst$456$depth$$, 1.02 * $APP.$cljs$cst$456$depth$$.$cljs$core$IFn$_invoke$arity$1$($selection$jscomp$2$$), $APP.$cljs$cst$457$outline_color$$, 48340, $APP.$cljs$cst$458$line_width$$, 4], null)], null);
  }() : null;
  $G__24889_p__24857_show_ground_QMARK_$jscomp$1$$ = $APP.$cljs$core$into$$.$cljs$core$IFn$_invoke$arity$2$($APP.$cljs$core$into$$.$cljs$core$IFn$_invoke$arity$2$(new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$553$object$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$455$position$$, new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$px$$, $py$$, $pz_vec__24860$$], 
  null)], null)], null), $APP.$cljs$core$conj$$.$cljs$core$IFn$_invoke$arity$2$($APP.$cljs$core$vec$$($lights$jscomp$1$$), new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$553$object$$, $APP.$cljs$core$PersistentArrayMap$EMPTY$$, $APP.$cljs$core$truth_$$($G__24889_p__24857_show_ground_QMARK_$jscomp$1$$) ? new $APP.$cljs$core$PersistentVector$$(null, 2, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [$APP.$cljs$cst$478$ground_plane$$, 
  new $APP.$cljs$core$PersistentArrayMap$$(null, 4, [$APP.$cljs$cst$455$position$$, new $APP.$cljs$core$PersistentVector$$(null, 3, 5, $APP.$cljs$core$PersistentVector$EMPTY_NODE$$, [0, 0, 0], null), $APP.$cljs$cst$418$width$$, 500, $APP.$cljs$cst$456$depth$$, 500, $APP.$cljs$cst$463$square_size$$, 12], null)], null) : null], null))), $APP.$cljs$core$truth_$$($map__24858__$1_scene_graph$$) ? $map__24858__$1_scene_graph$$ : $APP.$cljs$core$PersistentVector$EMPTY$$);
  return $APP.$cljs$core$truth_$$($lighting$jscomp$1_selection_outline$jscomp$1$$) ? $APP.$cljs$core$conj$$.$cljs$core$IFn$_invoke$arity$2$($G__24889_p__24857_show_ground_QMARK_$jscomp$1$$, $lighting$jscomp$1_selection_outline$jscomp$1$$) : $G__24889_p__24857_show_ground_QMARK_$jscomp$1$$;
};
$amp$components$threejs$renderers$manual_formation$render$$.$cljs$lang$maxFixedArity$ = 2;
var $amp$views$mockup_view$controls_atom$$ = $APP.$cljs$core$atom$cljs$0core$0IFn$0_invoke$0arity$01$$(null), $amp$views$mockup_view$context_atom$$ = $APP.$cljs$core$atom$cljs$0core$0IFn$0_invoke$0arity$01$$(null), $amp$views$mockup_view$resize_fn_atom$$ = $APP.$cljs$core$atom$cljs$0core$0IFn$0_invoke$0arity$01$$(null), $amp$views$mockup_view$container_atom$$ = $APP.$cljs$core$atom$cljs$0core$0IFn$0_invoke$0arity$01$$(null), $amp$views$mockup_view$canvas_listeners_atom$$ = $APP.$cljs$core$atom$cljs$0core$0IFn$0_invoke$0arity$01$$(null), 
$amp$views$mockup_view$wireframe_atom$$ = $APP.$reagent$ratom$atom$$.$cljs$core$IFn$_invoke$arity$1$ ? $APP.$reagent$ratom$atom$$.$cljs$core$IFn$_invoke$arity$1$(!1) : $APP.$reagent$ratom$atom$$.call(null, !1), $amp$views$mockup_view$ground_plane_atom$$ = $APP.$reagent$ratom$atom$$.$cljs$core$IFn$_invoke$arity$1$ ? $APP.$reagent$ratom$atom$$.$cljs$core$IFn$_invoke$arity$1$(!0) : $APP.$reagent$ratom$atom$$.call(null, !0), $amp$views$mockup_view$parts_panel_atom$$ = $APP.$cljs$core$atom$cljs$0core$0IFn$0_invoke$0arity$01$$(!1), 
$amp$views$mockup_view$mockup_data_atom$$ = $APP.$reagent$ratom$atom$$.$cljs$core$IFn$_invoke$arity$1$ ? $APP.$reagent$ratom$atom$$.$cljs$core$IFn$_invoke$arity$1$(null) : $APP.$reagent$ratom$atom$$.call(null, null), $amp$views$mockup_view$camera_state_atom$$ = $APP.$cljs$core$atom$cljs$0core$0IFn$0_invoke$0arity$01$$(new $APP.$cljs$core$PersistentArrayMap$$(null, 2, [$APP.$cljs$cst$455$position$$, null, $APP.$cljs$cst$394$target$$, null], null)), $amp$views$mockup_view$selected_block_atom$$ = $APP.$reagent$ratom$atom$$.$cljs$core$IFn$_invoke$arity$1$ ? 
$APP.$reagent$ratom$atom$$.$cljs$core$IFn$_invoke$arity$1$(null) : $APP.$reagent$ratom$atom$$.call(null, null), $amp$views$mockup_view$scene_atoms$$ = new $APP.$cljs$core$PersistentArrayMap$$(null, 6, [$APP.$cljs$cst$683$controls$$, $amp$views$mockup_view$controls_atom$$, $APP.$cljs$cst$550$context$$, $amp$views$mockup_view$context_atom$$, $APP.$cljs$cst$684$resize_fn$$, $amp$views$mockup_view$resize_fn_atom$$, $APP.$cljs$cst$687$canvas_listeners$$, $amp$views$mockup_view$canvas_listeners_atom$$, 
$APP.$cljs$cst$685$selected_block$$, $amp$views$mockup_view$selected_block_atom$$, $APP.$cljs$cst$691$camera_state$$, $amp$views$mockup_view$camera_state_atom$$], null), $amp$views$mockup_view$scene_override_atom$$ = $APP.$reagent$ratom$atom$$.$cljs$core$IFn$_invoke$arity$1$ ? $APP.$reagent$ratom$atom$$.$cljs$core$IFn$_invoke$arity$1$(null) : $APP.$reagent$ratom$atom$$.call(null, null), $amp$views$mockup_view$renderer_registry$$ = $APP.$cljs$core$atom$cljs$0core$0IFn$0_invoke$0arity$01$$(new $APP.$cljs$core$PersistentArrayMap$$(null, 
2, [$cljs$cst$927$simple_stack_formation$$, $APP.$amp$components$threejs$renderers$simple_stack_formation$render$$, $cljs$cst$928$manual_formation$$, $amp$components$threejs$renderers$manual_formation$render$$], null));
$APP.$cljs$core$truth_$$($APP.$cljs$core$with_meta$$($APP.$cljs$cst$201$goog_SLASH_DEBUG$$, new $APP.$cljs$core$PersistentArrayMap$$(null, 1, [$APP.$cljs$cst$66$tag$$, $APP.$cljs$cst$202$clojure_DOT_core_SLASH_boolean$$], null))) && ($APP.$cljs$core$truth_$$() && ((void 0).$cljs$core$IFn$_invoke$arity$4$ ? (void 0).$cljs$core$IFn$_invoke$arity$4$($APP.$amp$views$mockup_view$mockup_view$$, "(use-main-state)(hooks/use-ref nil)(use-atom-state wireframe-atom)(use-atom-state ground-plane-atom)(use-atom-state parts-panel-atom)(hooks/use-state true)(use-atom-state mockup-data-atom)(use-atom-state selected-block-atom)(hooks/use-layout-effect [] (when-let [container (clojure.core/deref container-ref)] (reset! container-atom container) (when-not (clojure.core/deref context-atom) (setup-scene! container))) js/undefined)(hooks/use-effect [piece-id] (listen-to-edn piece-id display-firebase-data))", 
null, null) : (void 0).call(null, $APP.$amp$views$mockup_view$mockup_view$$, "(use-main-state)(hooks/use-ref nil)(use-atom-state wireframe-atom)(use-atom-state ground-plane-atom)(use-atom-state parts-panel-atom)(hooks/use-state true)(use-atom-state mockup-data-atom)(use-atom-state selected-block-atom)(hooks/use-layout-effect [] (when-let [container (clojure.core/deref container-ref)] (reset! container-atom container) (when-not (clojure.core/deref context-atom) (setup-scene! container))) js/undefined)(hooks/use-effect [piece-id] (listen-to-edn piece-id display-firebase-data))", 
null, null)), $APP.$helix$core$register_BANG_$$($APP.$amp$views$mockup_view$mockup_view$$, "amp.views.mockup-view/mockup-view"));
$APP.$module$contents$shadow$loader_mm$$.$setLoaded$();

}).call(this);