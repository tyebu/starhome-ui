(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[26],{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/dashboard/TestWork.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/dashboard/TestWork.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'TestWork',\n  data: function data() {\n    return {\n      visible: false,\n      visible2: false\n    };\n  },\n  created: function created() {\n    this.form = this.$form.createForm(this);\n    this.form2 = this.$form.createForm(this);\n  },\n  methods: {\n    handleCloseCurrentTab: function handleCloseCurrentTab() {\n      this.$multiTab.closeCurrentPage(); // or this.$multiTab.close()\n    },\n    handleOpenTab: function handleOpenTab() {\n      this.$multiTab.open('/features/task');\n    },\n    handleOpenLoading: function handleOpenLoading() {\n      var _this = this;\n\n      this.$nextTick(function () {\n        console.log('this', this);\n        console.log('this.$refs.tInput', this.$refs.tInput);\n      });\n      this.$loading.show();\n      setTimeout(function () {\n        _this.$loading.hide();\n      }, 5000);\n    },\n    handleOpenLoadingCustomTip: function handleOpenLoadingCustomTip() {\n      var _this2 = this;\n\n      this.$loading.show({\n        tip: '自定义提示语'\n      });\n      setTimeout(function () {\n        _this2.$loading.hide();\n      }, 5000);\n    },\n    // confirm\n    confirm: function confirm(e) {\n      var _this3 = this;\n\n      e.stopPropagation();\n      var path = this.$route.path;\n      this.form.validateFields(function (err, values) {\n        if (!err) {\n          _this3.$multiTab.rename(path, values.tabName);\n\n          _this3.visible = false;\n        }\n      });\n    },\n    cancel: function cancel() {\n      this.visible = false;\n    },\n    confirm2: function confirm2(e) {\n      var _this4 = this;\n\n      e.stopPropagation();\n      this.form2.validateFields(function (err, values) {\n        if (!err) {\n          _this4.$multiTab.rename(values.tabKey, values.tabName);\n\n          _this4.visible2 = false;\n        }\n      });\n    }\n  }\n});\n\n//# sourceURL=webpack:///./src/views/dashboard/TestWork.vue?./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"7592d975-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/dashboard/TestWork.vue?vue&type=template&id=6b137c98&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7592d975-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/dashboard/TestWork.vue?vue&type=template&id=6b137c98&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\n    \"div\",\n    [\n      _c(\"h2\", [_vm._v(\"本页面内容均为测试功能，暂不提供稳定性保证\")]),\n      _c(\"a-divider\"),\n      _c(\n        \"div\",\n        { staticClass: \"multi-tab-test\" },\n        [\n          _c(\"h4\", [_vm._v(\"多标签组件测试功能\")]),\n          _c(\n            \"a-button\",\n            {\n              staticStyle: { \"margin-right\": \"16px\" },\n              on: { click: _vm.handleCloseCurrentTab }\n            },\n            [_vm._v(\"关闭当前页\")]\n          ),\n          _c(\n            \"a-button\",\n            {\n              staticStyle: { \"margin-right\": \"16px\" },\n              on: { click: _vm.handleOpenTab }\n            },\n            [_vm._v(\"打开 任务列表\")]\n          ),\n          _c(\n            \"a-popconfirm\",\n            {\n              attrs: {\n                visible: _vm.visible,\n                okText: \"确定\",\n                cancelText: \"取消\"\n              },\n              on: { confirm: _vm.confirm, cancel: _vm.cancel },\n              scopedSlots: _vm._u([\n                {\n                  key: \"title\",\n                  fn: function() {\n                    return [\n                      _c(\n                        \"div\",\n                        [\n                          _c(\n                            \"a-form\",\n                            { attrs: { form: _vm.form, layout: \"inline\" } },\n                            [\n                              _c(\n                                \"a-form-item\",\n                                { attrs: { label: \"自定义名称\" } },\n                                [\n                                  _c(\"a-input\", {\n                                    directives: [\n                                      {\n                                        name: \"decorator\",\n                                        rawName: \"v-decorator\",\n                                        value: [\n                                          \"tabName\",\n                                          {\n                                            rules: [\n                                              {\n                                                required: true,\n                                                message: \"请输入新的 Tab 名称\"\n                                              }\n                                            ]\n                                          }\n                                        ],\n                                        expression:\n                                          \"['tabName', {rules: [{required: true, message: '请输入新的 Tab 名称'}]}]\"\n                                      }\n                                    ]\n                                  })\n                                ],\n                                1\n                              )\n                            ],\n                            1\n                          )\n                        ],\n                        1\n                      )\n                    ]\n                  },\n                  proxy: true\n                }\n              ])\n            },\n            [\n              _c(\n                \"a-button\",\n                {\n                  staticStyle: { \"margin-right\": \"16px\" },\n                  on: {\n                    click: function() {\n                      return (_vm.visible = !_vm.visible)\n                    }\n                  }\n                },\n                [_vm._v(\"修改当前 Tab 名称\")]\n              )\n            ],\n            1\n          ),\n          _c(\n            \"a-popconfirm\",\n            {\n              attrs: {\n                visible: _vm.visible2,\n                okText: \"确定\",\n                cancelText: \"取消\"\n              },\n              on: {\n                confirm: _vm.confirm2,\n                cancel: function() {\n                  return (_vm.visible2 = false)\n                }\n              },\n              scopedSlots: _vm._u([\n                {\n                  key: \"title\",\n                  fn: function() {\n                    return [\n                      _c(\n                        \"div\",\n                        [\n                          _c(\"p\", [\n                            _vm._v(\"页面 KEY 是由页面的路由 \"),\n                            _c(\"code\", [_vm._v(\"path\")]),\n                            _vm._v(\" 决定的\")\n                          ]),\n                          _c(\"p\", [\n                            _vm._v(\n                              \"如果要修改某一个页面标题，该页面必须已经被打开在 Tab 栏\"\n                            )\n                          ]),\n                          _c(\"p\", [\n                            _vm._v(\n                              \"后期可以考虑优化到编程式 Tab 栏，就可以没有这种限制\"\n                            )\n                          ]),\n                          _c(\n                            \"a-form\",\n                            { attrs: { form: _vm.form2, layout: \"inline\" } },\n                            [\n                              _c(\n                                \"a-form-item\",\n                                { attrs: { label: \"页面KEY\" } },\n                                [\n                                  _c(\"a-input\", {\n                                    directives: [\n                                      {\n                                        name: \"decorator\",\n                                        rawName: \"v-decorator\",\n                                        value: [\n                                          \"tabKey\",\n                                          {\n                                            initialValue: \"/dashboard/workplace\"\n                                          }\n                                        ],\n                                        expression:\n                                          \"['tabKey', { initialValue: '/dashboard/workplace' }]\"\n                                      }\n                                    ]\n                                  })\n                                ],\n                                1\n                              ),\n                              _c(\n                                \"a-form-item\",\n                                { attrs: { label: \"自定义名称\" } },\n                                [\n                                  _c(\"a-input\", {\n                                    directives: [\n                                      {\n                                        name: \"decorator\",\n                                        rawName: \"v-decorator\",\n                                        value: [\n                                          \"tabName\",\n                                          {\n                                            rules: [\n                                              {\n                                                required: true,\n                                                message: \"请输入新的 Tab 名称\"\n                                              }\n                                            ]\n                                          }\n                                        ],\n                                        expression:\n                                          \"['tabName', {rules: [{required: true, message: '请输入新的 Tab 名称'}]}]\"\n                                      }\n                                    ]\n                                  })\n                                ],\n                                1\n                              )\n                            ],\n                            1\n                          )\n                        ],\n                        1\n                      )\n                    ]\n                  },\n                  proxy: true\n                }\n              ])\n            },\n            [\n              _c(\n                \"a-button\",\n                {\n                  on: {\n                    click: function() {\n                      return (_vm.visible2 = !_vm.visible2)\n                    }\n                  }\n                },\n                [_vm._v(\"修改某一个 Tab 名称\")]\n              )\n            ],\n            1\n          )\n        ],\n        1\n      ),\n      _c(\"a-divider\"),\n      _c(\n        \"div\",\n        { staticClass: \"page-loading-test\" },\n        [\n          _c(\"h4\", [_vm._v(\"全局遮罩测试\")]),\n          _c(\n            \"a-button\",\n            {\n              staticStyle: { \"margin-right\": \"16px\" },\n              on: { click: _vm.handleOpenLoading }\n            },\n            [_vm._v(\"打开遮罩(5s 自动关闭)\")]\n          ),\n          _c(\"a-button\", { on: { click: _vm.handleOpenLoadingCustomTip } }, [\n            _vm._v(\"打开遮罩(自定义提示语)\")\n          ])\n        ],\n        1\n      )\n    ],\n    1\n  )\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./src/views/dashboard/TestWork.vue?./node_modules/cache-loader/dist/cjs.js?%7B%22cacheDirectory%22:%22node_modules/.cache/vue-loader%22,%22cacheIdentifier%22:%227592d975-vue-loader-template%22%7D!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./src/views/dashboard/TestWork.vue":
/*!******************************************!*\
  !*** ./src/views/dashboard/TestWork.vue ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _TestWork_vue_vue_type_template_id_6b137c98_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TestWork.vue?vue&type=template&id=6b137c98&scoped=true& */ \"./src/views/dashboard/TestWork.vue?vue&type=template&id=6b137c98&scoped=true&\");\n/* harmony import */ var _TestWork_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TestWork.vue?vue&type=script&lang=js& */ \"./src/views/dashboard/TestWork.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _TestWork_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _TestWork_vue_vue_type_template_id_6b137c98_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _TestWork_vue_vue_type_template_id_6b137c98_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"6b137c98\",\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/views/dashboard/TestWork.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./src/views/dashboard/TestWork.vue?");

/***/ }),

/***/ "./src/views/dashboard/TestWork.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./src/views/dashboard/TestWork.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TestWork_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js??ref--12-0!../../../node_modules/babel-loader/lib!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./TestWork.vue?vue&type=script&lang=js& */ \"./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/dashboard/TestWork.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TestWork_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./src/views/dashboard/TestWork.vue?");

/***/ }),

/***/ "./src/views/dashboard/TestWork.vue?vue&type=template&id=6b137c98&scoped=true&":
/*!*************************************************************************************!*\
  !*** ./src/views/dashboard/TestWork.vue?vue&type=template&id=6b137c98&scoped=true& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _cache_loader_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_7592d975_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TestWork_vue_vue_type_template_id_6b137c98_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!cache-loader?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"7592d975-vue-loader-template\"}!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./TestWork.vue?vue&type=template&id=6b137c98&scoped=true& */ \"./node_modules/cache-loader/dist/cjs.js?{\\\"cacheDirectory\\\":\\\"node_modules/.cache/vue-loader\\\",\\\"cacheIdentifier\\\":\\\"7592d975-vue-loader-template\\\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/dashboard/TestWork.vue?vue&type=template&id=6b137c98&scoped=true&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _cache_loader_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_7592d975_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TestWork_vue_vue_type_template_id_6b137c98_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _cache_loader_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_7592d975_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TestWork_vue_vue_type_template_id_6b137c98_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./src/views/dashboard/TestWork.vue?");

/***/ })

}]);