"use strict";
(self["webpackChunkjsonlang"] = self["webpackChunkjsonlang"] || []).push([[4602],{

/***/ 9604:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ZP": () => (/* reexport */ es_Editor)
});

// UNUSED EXPORTS: DiffEditor, loader, useMonaco

;// CONCATENATED MODULE: ./node_modules/@monaco-editor/loader/lib/es/_virtual/_rollupPluginBabelHelpers.js
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}



;// CONCATENATED MODULE: ./node_modules/state-local/lib/es/state-local.js
function state_local_defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function state_local_ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function state_local_objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      state_local_ownKeys(Object(source), true).forEach(function (key) {
        state_local_defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      state_local_ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function compose() {
  for (var _len = arguments.length, fns = new Array(_len), _key = 0; _key < _len; _key++) {
    fns[_key] = arguments[_key];
  }

  return function (x) {
    return fns.reduceRight(function (y, f) {
      return f(y);
    }, x);
  };
}

function curry(fn) {
  return function curried() {
    var _this = this;

    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return args.length >= fn.length ? fn.apply(this, args) : function () {
      for (var _len3 = arguments.length, nextArgs = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        nextArgs[_key3] = arguments[_key3];
      }

      return curried.apply(_this, [].concat(args, nextArgs));
    };
  };
}

function isObject(value) {
  return {}.toString.call(value).includes('Object');
}

function isEmpty(obj) {
  return !Object.keys(obj).length;
}

function isFunction(value) {
  return typeof value === 'function';
}

function state_local_hasOwnProperty(object, property) {
  return Object.prototype.hasOwnProperty.call(object, property);
}

function validateChanges(initial, changes) {
  if (!isObject(changes)) errorHandler('changeType');
  if (Object.keys(changes).some(function (field) {
    return !state_local_hasOwnProperty(initial, field);
  })) errorHandler('changeField');
  return changes;
}

function validateSelector(selector) {
  if (!isFunction(selector)) errorHandler('selectorType');
}

function validateHandler(handler) {
  if (!(isFunction(handler) || isObject(handler))) errorHandler('handlerType');
  if (isObject(handler) && Object.values(handler).some(function (_handler) {
    return !isFunction(_handler);
  })) errorHandler('handlersType');
}

function validateInitial(initial) {
  if (!initial) errorHandler('initialIsRequired');
  if (!isObject(initial)) errorHandler('initialType');
  if (isEmpty(initial)) errorHandler('initialContent');
}

function throwError(errorMessages, type) {
  throw new Error(errorMessages[type] || errorMessages["default"]);
}

var errorMessages = {
  initialIsRequired: 'initial state is required',
  initialType: 'initial state should be an object',
  initialContent: 'initial state shouldn\'t be an empty object',
  handlerType: 'handler should be an object or a function',
  handlersType: 'all handlers should be a functions',
  selectorType: 'selector should be a function',
  changeType: 'provided value of changes should be an object',
  changeField: 'it seams you want to change a field in the state which is not specified in the "initial" state',
  "default": 'an unknown error accured in `state-local` package'
};
var errorHandler = curry(throwError)(errorMessages);
var validators = {
  changes: validateChanges,
  selector: validateSelector,
  handler: validateHandler,
  initial: validateInitial
};

function create(initial) {
  var handler = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  validators.initial(initial);
  validators.handler(handler);
  var state = {
    current: initial
  };
  var didUpdate = curry(didStateUpdate)(state, handler);
  var update = curry(updateState)(state);
  var validate = curry(validators.changes)(initial);
  var getChanges = curry(extractChanges)(state);

  function getState() {
    var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function (state) {
      return state;
    };
    validators.selector(selector);
    return selector(state.current);
  }

  function setState(causedChanges) {
    compose(didUpdate, update, validate, getChanges)(causedChanges);
  }

  return [getState, setState];
}

function extractChanges(state, causedChanges) {
  return isFunction(causedChanges) ? causedChanges(state.current) : causedChanges;
}

function updateState(state, changes) {
  state.current = state_local_objectSpread2(state_local_objectSpread2({}, state.current), changes);
  return changes;
}

function didStateUpdate(state, handler, changes) {
  isFunction(handler) ? handler(state.current) : Object.keys(changes).forEach(function (field) {
    var _handler$field;

    return (_handler$field = handler[field]) === null || _handler$field === void 0 ? void 0 : _handler$field.call(handler, state.current[field]);
  });
  return changes;
}

var index = {
  create: create
};

/* harmony default export */ const state_local = (index);

;// CONCATENATED MODULE: ./node_modules/@monaco-editor/loader/lib/es/config/index.js
var config = {
  paths: {
    vs: 'https://cdn.jsdelivr.net/npm/monaco-editor@0.33.0/min/vs'
  }
};

/* harmony default export */ const es_config = (config);

;// CONCATENATED MODULE: ./node_modules/@monaco-editor/loader/lib/es/utils/curry.js
function curry_curry(fn) {
  return function curried() {
    var _this = this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return args.length >= fn.length ? fn.apply(this, args) : function () {
      for (var _len2 = arguments.length, nextArgs = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        nextArgs[_key2] = arguments[_key2];
      }

      return curried.apply(_this, [].concat(args, nextArgs));
    };
  };
}

/* harmony default export */ const utils_curry = (curry_curry);

;// CONCATENATED MODULE: ./node_modules/@monaco-editor/loader/lib/es/utils/isObject.js
function isObject_isObject(value) {
  return {}.toString.call(value).includes('Object');
}

/* harmony default export */ const utils_isObject = (isObject_isObject);

;// CONCATENATED MODULE: ./node_modules/@monaco-editor/loader/lib/es/validators/index.js



/**
 * validates the configuration object and informs about deprecation
 * @param {Object} config - the configuration object 
 * @return {Object} config - the validated configuration object
 */

function validateConfig(config) {
  if (!config) validators_errorHandler('configIsRequired');
  if (!utils_isObject(config)) validators_errorHandler('configType');

  if (config.urls) {
    informAboutDeprecation();
    return {
      paths: {
        vs: config.urls.monacoBase
      }
    };
  }

  return config;
}
/**
 * logs deprecation message
 */


function informAboutDeprecation() {
  console.warn(validators_errorMessages.deprecation);
}

function validators_throwError(errorMessages, type) {
  throw new Error(errorMessages[type] || errorMessages["default"]);
}

var validators_errorMessages = {
  configIsRequired: 'the configuration object is required',
  configType: 'the configuration object should be an object',
  "default": 'an unknown error accured in `@monaco-editor/loader` package',
  deprecation: "Deprecation warning!\n    You are using deprecated way of configuration.\n\n    Instead of using\n      monaco.config({ urls: { monacoBase: '...' } })\n    use\n      monaco.config({ paths: { vs: '...' } })\n\n    For more please check the link https://github.com/suren-atoyan/monaco-loader#config\n  "
};
var validators_errorHandler = utils_curry(validators_throwError)(validators_errorMessages);
var validators_validators = {
  config: validateConfig
};

/* harmony default export */ const es_validators = (validators_validators);


;// CONCATENATED MODULE: ./node_modules/@monaco-editor/loader/lib/es/utils/compose.js
var compose_compose = function compose() {
  for (var _len = arguments.length, fns = new Array(_len), _key = 0; _key < _len; _key++) {
    fns[_key] = arguments[_key];
  }

  return function (x) {
    return fns.reduceRight(function (y, f) {
      return f(y);
    }, x);
  };
};

/* harmony default export */ const utils_compose = (compose_compose);

;// CONCATENATED MODULE: ./node_modules/@monaco-editor/loader/lib/es/utils/deepMerge.js


function merge(target, source) {
  Object.keys(source).forEach(function (key) {
    if (source[key] instanceof Object) {
      if (target[key]) {
        Object.assign(source[key], merge(target[key], source[key]));
      }
    }
  });
  return _objectSpread2(_objectSpread2({}, target), source);
}

/* harmony default export */ const deepMerge = (merge);

;// CONCATENATED MODULE: ./node_modules/@monaco-editor/loader/lib/es/utils/makeCancelable.js
// The source (has been changed) is https://github.com/facebook/react/issues/5465#issuecomment-157888325
var CANCELATION_MESSAGE = {
  type: 'cancelation',
  msg: 'operation is manually canceled'
};

function makeCancelable(promise) {
  var hasCanceled_ = false;
  var wrappedPromise = new Promise(function (resolve, reject) {
    promise.then(function (val) {
      return hasCanceled_ ? reject(CANCELATION_MESSAGE) : resolve(val);
    });
    promise["catch"](reject);
  });
  return wrappedPromise.cancel = function () {
    return hasCanceled_ = true;
  }, wrappedPromise;
}

/* harmony default export */ const utils_makeCancelable = (makeCancelable);


;// CONCATENATED MODULE: ./node_modules/@monaco-editor/loader/lib/es/loader/index.js








/** the local state of the module */

var _state$create = state_local.create({
  config: es_config,
  isInitialized: false,
  resolve: null,
  reject: null,
  monaco: null
}),
    _state$create2 = _slicedToArray(_state$create, 2),
    getState = _state$create2[0],
    setState = _state$create2[1];
/**
 * set the loader configuration
 * @param {Object} config - the configuration object
 */


function loader_config(globalConfig) {
  var _validators$config = es_validators.config(globalConfig),
      monaco = _validators$config.monaco,
      config = _objectWithoutProperties(_validators$config, ["monaco"]);

  setState(function (state) {
    return {
      config: deepMerge(state.config, config),
      monaco: monaco
    };
  });
}
/**
 * handles the initialization of the monaco-editor
 * @return {Promise} - returns an instance of monaco (with a cancelable promise)
 */


function init() {
  var state = getState(function (_ref) {
    var monaco = _ref.monaco,
        isInitialized = _ref.isInitialized,
        resolve = _ref.resolve;
    return {
      monaco: monaco,
      isInitialized: isInitialized,
      resolve: resolve
    };
  });

  if (!state.isInitialized) {
    setState({
      isInitialized: true
    });

    if (state.monaco) {
      state.resolve(state.monaco);
      return utils_makeCancelable(wrapperPromise);
    }

    if (window.monaco && window.monaco.editor) {
      storeMonacoInstance(window.monaco);
      state.resolve(window.monaco);
      return utils_makeCancelable(wrapperPromise);
    }

    utils_compose(injectScripts, getMonacoLoaderScript)(configureLoader);
  }

  return utils_makeCancelable(wrapperPromise);
}
/**
 * injects provided scripts into the document.body
 * @param {Object} script - an HTML script element
 * @return {Object} - the injected HTML script element
 */


function injectScripts(script) {
  return document.body.appendChild(script);
}
/**
 * creates an HTML script element with/without provided src
 * @param {string} [src] - the source path of the script
 * @return {Object} - the created HTML script element
 */


function createScript(src) {
  var script = document.createElement('script');
  return src && (script.src = src), script;
}
/**
 * creates an HTML script element with the monaco loader src
 * @return {Object} - the created HTML script element
 */


function getMonacoLoaderScript(configureLoader) {
  var state = getState(function (_ref2) {
    var config = _ref2.config,
        reject = _ref2.reject;
    return {
      config: config,
      reject: reject
    };
  });
  var loaderScript = createScript("".concat(state.config.paths.vs, "/loader.js"));

  loaderScript.onload = function () {
    return configureLoader();
  };

  loaderScript.onerror = state.reject;
  return loaderScript;
}
/**
 * configures the monaco loader
 */


function configureLoader() {
  var state = getState(function (_ref3) {
    var config = _ref3.config,
        resolve = _ref3.resolve,
        reject = _ref3.reject;
    return {
      config: config,
      resolve: resolve,
      reject: reject
    };
  });
  var require = window.require;

  require.config(state.config);

  require(['vs/editor/editor.main'], function (monaco) {
    storeMonacoInstance(monaco);
    state.resolve(monaco);
  }, function (error) {
    state.reject(error);
  });
}
/**
 * store monaco instance in local state
 */


function storeMonacoInstance(monaco) {
  if (!getState().monaco) {
    setState({
      monaco: monaco
    });
  }
}
/**
 * internal helper function
 * extracts stored monaco instance
 * @return {Object|null} - the monaco instance
 */


function __getMonacoInstance() {
  return getState(function (_ref4) {
    var monaco = _ref4.monaco;
    return monaco;
  });
}

var wrapperPromise = new Promise(function (resolve, reject) {
  return setState({
    resolve: resolve,
    reject: reject
  });
});
var loader_loader = {
  config: loader_config,
  init: init,
  __getMonacoInstance: __getMonacoInstance
};

/* harmony default export */ const es_loader = (loader_loader);

;// CONCATENATED MODULE: ./node_modules/@monaco-editor/loader/lib/es/index.js



// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(5697);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
;// CONCATENATED MODULE: ./node_modules/@monaco-editor/react/lib/es/_virtual/_rollupPluginBabelHelpers.js
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}



;// CONCATENATED MODULE: ./node_modules/@monaco-editor/react/lib/es/Loading/Loading.js


const loadingStyles = {
  display: 'flex',
  height: '100%',
  width: '100%',
  justifyContent: 'center',
  alignItems: 'center'
};

function Loading({
  content
}) {
  return /*#__PURE__*/react.createElement("div", {
    style: loadingStyles
  }, content);
}

/* harmony default export */ const Loading_Loading = (Loading);

;// CONCATENATED MODULE: ./node_modules/@monaco-editor/react/lib/es/MonacoContainer/styles.js
const styles = {
  wrapper: {
    display: 'flex',
    position: 'relative',
    textAlign: 'initial'
  },
  fullWidth: {
    width: '100%'
  },
  hide: {
    display: 'none'
  }
};

/* harmony default export */ const MonacoContainer_styles = (styles);

;// CONCATENATED MODULE: ./node_modules/@monaco-editor/react/lib/es/MonacoContainer/MonacoContainer.js






// one of the reasons why we use a separate prop for passing ref instead of using forwardref

function MonacoContainer({
  width,
  height,
  isEditorReady,
  loading,
  _ref,
  className,
  wrapperProps
}) {
  return /*#__PURE__*/react.createElement("section", _extends({
    style: { ...MonacoContainer_styles.wrapper,
      width,
      height
    }
  }, wrapperProps), !isEditorReady && /*#__PURE__*/react.createElement(Loading_Loading, {
    content: loading
  }), /*#__PURE__*/react.createElement("div", {
    ref: _ref,
    style: { ...MonacoContainer_styles.fullWidth,
      ...(!isEditorReady && MonacoContainer_styles.hide)
    },
    className: className
  }));
}

MonacoContainer.propTypes = {
  width: prop_types_default().oneOfType([(prop_types_default()).number, (prop_types_default()).string]).isRequired,
  height: prop_types_default().oneOfType([(prop_types_default()).number, (prop_types_default()).string]).isRequired,
  loading: prop_types_default().oneOfType([(prop_types_default()).element, (prop_types_default()).string]).isRequired,
  isEditorReady: (prop_types_default()).bool.isRequired,
  className: (prop_types_default()).string,
  wrapperProps: (prop_types_default()).object
};

/* harmony default export */ const MonacoContainer_MonacoContainer = (MonacoContainer);

;// CONCATENATED MODULE: ./node_modules/@monaco-editor/react/lib/es/MonacoContainer/index.js



var es_MonacoContainer_MonacoContainer = /*#__PURE__*/(0,react.memo)(MonacoContainer_MonacoContainer);

/* harmony default export */ const es_MonacoContainer = (es_MonacoContainer_MonacoContainer);

;// CONCATENATED MODULE: ./node_modules/@monaco-editor/react/lib/es/hooks/useMount/index.js


function useMount_useMount(effect) {
  (0,react.useEffect)(effect, []);
}

/* harmony default export */ const hooks_useMount = (useMount_useMount);

;// CONCATENATED MODULE: ./node_modules/@monaco-editor/react/lib/es/hooks/useUpdate/index.js


function useUpdate(effect, deps, applyChanges = true) {
  const isInitialMount = (0,react.useRef)(true);
  (0,react.useEffect)(isInitialMount.current || !applyChanges ? () => {
    isInitialMount.current = false;
  } : effect, deps);
}

/* harmony default export */ const hooks_useUpdate = (useUpdate);

;// CONCATENATED MODULE: ./node_modules/@monaco-editor/react/lib/es/utils/index.js
function noop() {}

function getOrCreateModel(monaco, value, language, path) {
  return getModel(monaco, path) || createModel(monaco, value, language, path);
}

function getModel(monaco, path) {
  return monaco.editor.getModel(createModelUri(monaco, path));
}

function createModel(monaco, value, language, path) {
  return monaco.editor.createModel(value, language, path && createModelUri(monaco, path));
}

function createModelUri(monaco, path) {
  return monaco.Uri.parse(path);
}

function isUndefined(input) {
  return input === undefined;
}



;// CONCATENATED MODULE: ./node_modules/@monaco-editor/react/lib/es/DiffEditor/DiffEditor.js








function DiffEditor({
  original,
  modified,
  language,
  originalLanguage,
  modifiedLanguage,

  /* === */
  originalModelPath,
  modifiedModelPath,
  keepCurrentOriginalModel,
  keepCurrentModifiedModel,
  theme,
  loading,
  options,

  /* === */
  height,
  width,
  className,
  wrapperProps,

  /* === */
  beforeMount,
  onMount
}) {
  const [isEditorReady, setIsEditorReady] = (0,react.useState)(false);
  const [isMonacoMounting, setIsMonacoMounting] = (0,react.useState)(true);
  const editorRef = (0,react.useRef)(null);
  const monacoRef = (0,react.useRef)(null);
  const containerRef = (0,react.useRef)(null);
  const onMountRef = (0,react.useRef)(onMount);
  const beforeMountRef = (0,react.useRef)(beforeMount);
  hooks_useMount(() => {
    const cancelable = es_loader.init();
    cancelable.then(monaco => (monacoRef.current = monaco) && setIsMonacoMounting(false)).catch(error => (error === null || error === void 0 ? void 0 : error.type) !== 'cancelation' && console.error('Monaco initialization: error:', error));
    return () => editorRef.current ? disposeEditor() : cancelable.cancel();
  });
  hooks_useUpdate(() => {
    const modifiedEditor = editorRef.current.getModifiedEditor();

    if (modifiedEditor.getOption(monacoRef.current.editor.EditorOption.readOnly)) {
      modifiedEditor.setValue(modified);
    } else {
      if (modified !== modifiedEditor.getValue()) {
        modifiedEditor.executeEdits('', [{
          range: modifiedEditor.getModel().getFullModelRange(),
          text: modified,
          forceMoveMarkers: true
        }]);
        modifiedEditor.pushUndoStop();
      }
    }
  }, [modified], isEditorReady);
  hooks_useUpdate(() => {
    editorRef.current.getModel().original.setValue(original);
  }, [original], isEditorReady);
  hooks_useUpdate(() => {
    const {
      original,
      modified
    } = editorRef.current.getModel();
    monacoRef.current.editor.setModelLanguage(original, originalLanguage || language);
    monacoRef.current.editor.setModelLanguage(modified, modifiedLanguage || language);
  }, [language, originalLanguage, modifiedLanguage], isEditorReady);
  hooks_useUpdate(() => {
    monacoRef.current.editor.setTheme(theme);
  }, [theme], isEditorReady);
  hooks_useUpdate(() => {
    editorRef.current.updateOptions(options);
  }, [options], isEditorReady);
  const setModels = (0,react.useCallback)(() => {
    beforeMountRef.current(monacoRef.current);
    const originalModel = getOrCreateModel(monacoRef.current, original, originalLanguage || language, originalModelPath);
    const modifiedModel = getOrCreateModel(monacoRef.current, modified, modifiedLanguage || language, modifiedModelPath);
    editorRef.current.setModel({
      original: originalModel,
      modified: modifiedModel
    });
  }, [language, modified, modifiedLanguage, original, originalLanguage, originalModelPath, modifiedModelPath]);
  const createEditor = (0,react.useCallback)(() => {
    editorRef.current = monacoRef.current.editor.createDiffEditor(containerRef.current, {
      automaticLayout: true,
      ...options
    });
    setModels();
    monacoRef.current.editor.setTheme(theme);
    setIsEditorReady(true);
  }, [options, theme, setModels]);
  (0,react.useEffect)(() => {
    if (isEditorReady) {
      onMountRef.current(editorRef.current, monacoRef.current);
    }
  }, [isEditorReady]);
  (0,react.useEffect)(() => {
    !isMonacoMounting && !isEditorReady && createEditor();
  }, [isMonacoMounting, isEditorReady, createEditor]);

  function disposeEditor() {
    const models = editorRef.current.getModel();

    if (!keepCurrentOriginalModel) {
      var _models$original;

      (_models$original = models.original) === null || _models$original === void 0 ? void 0 : _models$original.dispose();
    }

    if (!keepCurrentModifiedModel) {
      var _models$modified;

      (_models$modified = models.modified) === null || _models$modified === void 0 ? void 0 : _models$modified.dispose();
    }

    editorRef.current.dispose();
  }

  return /*#__PURE__*/react.createElement(es_MonacoContainer, {
    width: width,
    height: height,
    isEditorReady: isEditorReady,
    loading: loading,
    _ref: containerRef,
    className: className,
    wrapperProps: wrapperProps
  });
}

DiffEditor.propTypes = {
  original: (prop_types_default()).string,
  modified: (prop_types_default()).string,
  language: (prop_types_default()).string,
  originalLanguage: (prop_types_default()).string,
  modifiedLanguage: (prop_types_default()).string,

  /* === */
  originalModelPath: (prop_types_default()).string,
  modifiedModelPath: (prop_types_default()).string,
  keepCurrentOriginalModel: (prop_types_default()).bool,
  keepCurrentModifiedModel: (prop_types_default()).bool,
  theme: (prop_types_default()).string,
  loading: prop_types_default().oneOfType([(prop_types_default()).element, (prop_types_default()).string]),
  options: (prop_types_default()).object,

  /* === */
  width: prop_types_default().oneOfType([(prop_types_default()).number, (prop_types_default()).string]),
  height: prop_types_default().oneOfType([(prop_types_default()).number, (prop_types_default()).string]),
  className: (prop_types_default()).string,
  wrapperProps: (prop_types_default()).object,

  /* === */
  beforeMount: (prop_types_default()).func,
  onMount: (prop_types_default()).func
};
DiffEditor.defaultProps = {
  theme: 'light',
  loading: 'Loading...',
  options: {},
  keepCurrentOriginalModel: false,
  keepCurrentModifiedModel: false,

  /* === */
  width: '100%',
  height: '100%',
  wrapperProps: {},

  /* === */
  beforeMount: noop,
  onMount: noop
};

/* harmony default export */ const DiffEditor_DiffEditor = (DiffEditor);

;// CONCATENATED MODULE: ./node_modules/@monaco-editor/react/lib/es/DiffEditor/index.js



var DiffEditor_index = /*#__PURE__*/(0,react.memo)(DiffEditor_DiffEditor);

/* harmony default export */ const es_DiffEditor = ((/* unused pure expression or super */ null && (DiffEditor_index)));

;// CONCATENATED MODULE: ./node_modules/@monaco-editor/react/lib/es/hooks/useMonaco/index.js




function useMonaco() {
  const [monaco, setMonaco] = useState(loader.__getMonacoInstance());
  useMount(() => {
    let cancelable;

    if (!monaco) {
      cancelable = loader.init();
      cancelable.then(monaco => {
        setMonaco(monaco);
      });
    }

    return () => {
      var _cancelable;

      return (_cancelable = cancelable) === null || _cancelable === void 0 ? void 0 : _cancelable.cancel();
    };
  });
  return monaco;
}

/* harmony default export */ const hooks_useMonaco = ((/* unused pure expression or super */ null && (useMonaco)));

;// CONCATENATED MODULE: ./node_modules/@monaco-editor/react/lib/es/hooks/usePrevious/index.js


function usePrevious(value) {
  const ref = (0,react.useRef)();
  (0,react.useEffect)(() => {
    ref.current = value;
  }, [value]);
  return ref.current;
}

/* harmony default export */ const hooks_usePrevious = (usePrevious);

;// CONCATENATED MODULE: ./node_modules/@monaco-editor/react/lib/es/Editor/Editor.js









const viewStates = new Map();

function Editor({
  defaultValue,
  defaultLanguage,
  defaultPath,
  value,
  language,
  path,

  /* === */
  theme,
  line,
  loading,
  options,
  overrideServices,
  saveViewState,
  keepCurrentModel,

  /* === */
  width,
  height,
  className,
  wrapperProps,

  /* === */
  beforeMount,
  onMount,
  onChange,
  onValidate
}) {
  const [isEditorReady, setIsEditorReady] = (0,react.useState)(false);
  const [isMonacoMounting, setIsMonacoMounting] = (0,react.useState)(true);
  const monacoRef = (0,react.useRef)(null);
  const editorRef = (0,react.useRef)(null);
  const containerRef = (0,react.useRef)(null);
  const onMountRef = (0,react.useRef)(onMount);
  const beforeMountRef = (0,react.useRef)(beforeMount);
  const subscriptionRef = (0,react.useRef)(null);
  const valueRef = (0,react.useRef)(value);
  const previousPath = hooks_usePrevious(path);
  const preventCreation = (0,react.useRef)(false);
  hooks_useMount(() => {
    const cancelable = es_loader.init();
    cancelable.then(monaco => (monacoRef.current = monaco) && setIsMonacoMounting(false)).catch(error => (error === null || error === void 0 ? void 0 : error.type) !== 'cancelation' && console.error('Monaco initialization: error:', error));
    return () => editorRef.current ? disposeEditor() : cancelable.cancel();
  });
  hooks_useUpdate(() => {
    const model = getOrCreateModel(monacoRef.current, defaultValue || value, defaultLanguage || language, path);

    if (model !== editorRef.current.getModel()) {
      saveViewState && viewStates.set(previousPath, editorRef.current.saveViewState());
      editorRef.current.setModel(model);
      saveViewState && editorRef.current.restoreViewState(viewStates.get(path));
    }
  }, [path], isEditorReady);
  hooks_useUpdate(() => {
    editorRef.current.updateOptions(options);
  }, [options], isEditorReady);
  hooks_useUpdate(() => {
    if (editorRef.current.getOption(monacoRef.current.editor.EditorOption.readOnly)) {
      editorRef.current.setValue(value);
    } else {
      if (value !== editorRef.current.getValue()) {
        editorRef.current.executeEdits('', [{
          range: editorRef.current.getModel().getFullModelRange(),
          text: value,
          forceMoveMarkers: true
        }]);
        editorRef.current.pushUndoStop();
      }
    }
  }, [value], isEditorReady);
  hooks_useUpdate(() => {
    monacoRef.current.editor.setModelLanguage(editorRef.current.getModel(), language);
  }, [language], isEditorReady);
  hooks_useUpdate(() => {
    // reason for undefined check: https://github.com/suren-atoyan/monaco-react/pull/188
    if (!isUndefined(line)) {
      editorRef.current.revealLine(line);
    }
  }, [line], isEditorReady);
  hooks_useUpdate(() => {
    monacoRef.current.editor.setTheme(theme);
  }, [theme], isEditorReady);
  const createEditor = (0,react.useCallback)(() => {
    if (!preventCreation.current) {
      beforeMountRef.current(monacoRef.current);
      const autoCreatedModelPath = path || defaultPath;
      const defaultModel = getOrCreateModel(monacoRef.current, value || defaultValue, defaultLanguage || language, autoCreatedModelPath);
      editorRef.current = monacoRef.current.editor.create(containerRef.current, {
        model: defaultModel,
        automaticLayout: true,
        ...options
      }, overrideServices);
      saveViewState && editorRef.current.restoreViewState(viewStates.get(autoCreatedModelPath));
      monacoRef.current.editor.setTheme(theme);
      setIsEditorReady(true);
      preventCreation.current = true;
    }
  }, [defaultValue, defaultLanguage, defaultPath, value, language, path, options, overrideServices, saveViewState, theme]);
  (0,react.useEffect)(() => {
    if (isEditorReady) {
      onMountRef.current(editorRef.current, monacoRef.current);
    }
  }, [isEditorReady]);
  (0,react.useEffect)(() => {
    !isMonacoMounting && !isEditorReady && createEditor();
  }, [isMonacoMounting, isEditorReady, createEditor]); // subscription
  // to avoid unnecessary updates (attach - dispose listener) in subscription

  valueRef.current = value; // onChange

  (0,react.useEffect)(() => {
    if (isEditorReady && onChange) {
      var _subscriptionRef$curr, _editorRef$current;

      (_subscriptionRef$curr = subscriptionRef.current) === null || _subscriptionRef$curr === void 0 ? void 0 : _subscriptionRef$curr.dispose();
      subscriptionRef.current = (_editorRef$current = editorRef.current) === null || _editorRef$current === void 0 ? void 0 : _editorRef$current.onDidChangeModelContent(event => {
        onChange(editorRef.current.getValue(), event);
      });
    }
  }, [isEditorReady, onChange]); // onValidate

  (0,react.useEffect)(() => {
    if (isEditorReady) {
      const changeMarkersListener = monacoRef.current.editor.onDidChangeMarkers(uris => {
        var _editorRef$current$ge;

        const editorUri = (_editorRef$current$ge = editorRef.current.getModel()) === null || _editorRef$current$ge === void 0 ? void 0 : _editorRef$current$ge.uri;

        if (editorUri) {
          const currentEditorHasMarkerChanges = uris.find(uri => uri.path === editorUri.path);

          if (currentEditorHasMarkerChanges) {
            const markers = monacoRef.current.editor.getModelMarkers({
              resource: editorUri
            });
            onValidate === null || onValidate === void 0 ? void 0 : onValidate(markers);
          }
        }
      });
      return () => {
        changeMarkersListener === null || changeMarkersListener === void 0 ? void 0 : changeMarkersListener.dispose();
      };
    }
  }, [isEditorReady, onValidate]);

  function disposeEditor() {
    var _subscriptionRef$curr2;

    (_subscriptionRef$curr2 = subscriptionRef.current) === null || _subscriptionRef$curr2 === void 0 ? void 0 : _subscriptionRef$curr2.dispose();

    if (keepCurrentModel) {
      saveViewState && viewStates.set(path, editorRef.current.saveViewState());
    } else {
      var _editorRef$current$ge2;

      (_editorRef$current$ge2 = editorRef.current.getModel()) === null || _editorRef$current$ge2 === void 0 ? void 0 : _editorRef$current$ge2.dispose();
    }

    editorRef.current.dispose();
  }

  return /*#__PURE__*/react.createElement(es_MonacoContainer, {
    width: width,
    height: height,
    isEditorReady: isEditorReady,
    loading: loading,
    _ref: containerRef,
    className: className,
    wrapperProps: wrapperProps
  });
}

Editor.propTypes = {
  defaultValue: (prop_types_default()).string,
  defaultPath: (prop_types_default()).string,
  defaultLanguage: (prop_types_default()).string,
  value: (prop_types_default()).string,
  language: (prop_types_default()).string,
  path: (prop_types_default()).string,

  /* === */
  theme: (prop_types_default()).string,
  line: (prop_types_default()).number,
  loading: prop_types_default().oneOfType([(prop_types_default()).element, (prop_types_default()).string]),
  options: (prop_types_default()).object,
  overrideServices: (prop_types_default()).object,
  saveViewState: (prop_types_default()).bool,
  keepCurrentModel: (prop_types_default()).bool,

  /* === */
  width: prop_types_default().oneOfType([(prop_types_default()).number, (prop_types_default()).string]),
  height: prop_types_default().oneOfType([(prop_types_default()).number, (prop_types_default()).string]),
  className: (prop_types_default()).string,
  wrapperProps: (prop_types_default()).object,

  /* === */
  beforeMount: (prop_types_default()).func,
  onMount: (prop_types_default()).func,
  onChange: (prop_types_default()).func,
  onValidate: (prop_types_default()).func
};
Editor.defaultProps = {
  theme: 'light',
  loading: 'Loading...',
  options: {},
  overrideServices: {},
  saveViewState: true,
  keepCurrentModel: false,

  /* === */
  width: '100%',
  height: '100%',
  wrapperProps: {},

  /* === */
  beforeMount: noop,
  onMount: noop,
  onValidate: noop
};

/* harmony default export */ const Editor_Editor = (Editor);

;// CONCATENATED MODULE: ./node_modules/@monaco-editor/react/lib/es/Editor/index.js



var Editor_index = /*#__PURE__*/(0,react.memo)(Editor_Editor);

/* harmony default export */ const es_Editor = (Editor_index);

;// CONCATENATED MODULE: ./node_modules/@monaco-editor/react/lib/es/index.js






/***/ }),

/***/ 4923:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
exports.__esModule = true;
exports.JsonLang = void 0;
var core_1 = __webpack_require__(267);
var rule_1 = __webpack_require__(9457);
var JsonLang = /** @class */ (function (_super) {
    __extends(JsonLang, _super);
    function JsonLang() {
        var _this = _super.call(this) || this;
        _this.registerBuiltinRules = function () {
            var mathRules = _this.mathRules.getRules();
            var logicalRules = _this.logicalRules.getRules();
            var objectRules = _this.objectRules.getRules();
            var arrayRules = _this.arrayRules.getRules();
            _this.registerMany(new Map(__spreadArray(__spreadArray(__spreadArray(__spreadArray([], __read(mathRules), false), __read(logicalRules), false), __read(objectRules), false), __read(arrayRules), false)));
        };
        _this.mathRules = new rule_1.MathRules();
        _this.logicalRules = new rule_1.LogicalRules();
        _this.objectRules = new rule_1.ObjectRules();
        _this.arrayRules = new rule_1.ArrayRules();
        _this.registerBuiltinRules();
        return _this;
    }
    return JsonLang;
}(core_1.RuleCore));
exports.JsonLang = JsonLang;
//# sourceMappingURL=app.js.map

/***/ }),

/***/ 7259:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
exports.__esModule = true;
__exportStar(__webpack_require__(4923), exports);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 4965:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
exports.__esModule = true;
exports.RuleCore = void 0;
var core_types_1 = __webpack_require__(1055);
var RuleCore = /** @class */ (function () {
    function RuleCore() {
        var _this = this;
        /**
         * @param {Rules} rules - Map of Rules.
         * @returns {void}
         * @description to extend JsonLang by a Map() of rules the "Map key" is RuleIdentifier and the "Map value" is the Sync/Async RuleHandler
        */
        this.registerMany = function (rules, group) {
            rules.forEach(function (value, key) { return _this.registerOne(__assign({ group: group }, key), value); });
        };
        /**
         * @param {RuleIdentifier} ruleIdentifier
         * @param {RuleHandler} RuleHandler.
         * @returns {void}
         * @description to extend JsonLang by adding one Sync/Async Rule
        */
        this.registerOne = function (ruleIdentifier, ruleHandler) {
            _this.rules.set(ruleIdentifier.name, ruleHandler);
            _this.ruleIds.add(ruleIdentifier);
            if (ruleIdentifier.shortcut)
                _this.rules.set(ruleIdentifier.shortcut, ruleHandler);
        };
        /**
         * @returns {RuleIdentifier[]}
         * @description Get rules identifiers
        */
        this.getRulesIds = function () { return __spreadArray([], __read(_this.ruleIds), false); };
        this.createRunContext = function (outputs, data) {
            var run = function (scopedData) {
                var localData = scopedData;
                var innerRun = function (jsonLang) {
                    if (!_this.isRule(jsonLang))
                        return jsonLang;
                    var _a = _this.getRuleParams(jsonLang), ruleHandler = _a.ruleHandler, rule = _a.rule, _b = _a.inputs, inputs = _b === void 0 ? [] : _b, output = _a.output;
                    var resolvedInputs = _this.resolveRuleInputs(inputs, ruleHandler, innerRun, run);
                    resolvedInputs = _this.getAllInputs(rule, resolvedInputs, outputs, data, localData);
                    var result = ruleHandler.apply(void 0, __spreadArray([], __read(resolvedInputs), false));
                    if (output)
                        _this.setOutputValue(output, result, outputs);
                    return result;
                };
                return innerRun;
            };
            return run;
        };
        this.createAsyncRunContext = function (outputs, syncRun, data) {
            var run = function (scopedData) {
                var localData = scopedData;
                var innerRun = function (jsonLang) { return __awaiter(_this, void 0, void 0, function () {
                    var _a, ruleHandler, rule, _b, inputs, output, resolvedInputs, result, error_1;
                    return __generator(this, function (_c) {
                        switch (_c.label) {
                            case 0:
                                if (!this.isRule(jsonLang))
                                    return [2 /*return*/, jsonLang];
                                _a = this.getRuleParams(jsonLang), ruleHandler = _a.ruleHandler, rule = _a.rule, _b = _a.inputs, inputs = _b === void 0 ? [] : _b, output = _a.output;
                                _c.label = 1;
                            case 1:
                                _c.trys.push([1, 4, , 5]);
                                return [4 /*yield*/, this.resolveRuleAsyncInputs(inputs, ruleHandler, innerRun, syncRun, run)];
                            case 2:
                                resolvedInputs = _c.sent();
                                resolvedInputs = this.getAllInputs(rule, resolvedInputs, outputs, data, localData);
                                return [4 /*yield*/, ruleHandler.apply(void 0, __spreadArray([], __read(resolvedInputs), false))];
                            case 3:
                                result = _c.sent();
                                if (output)
                                    this.setOutputValue(output, result, outputs);
                                return [2 /*return*/, result];
                            case 4:
                                error_1 = _c.sent();
                                throw Error("Failed to Run \"".concat(rule, "\" cause of ").concat(error_1));
                            case 5: return [2 /*return*/];
                        }
                    });
                }); };
                return innerRun;
            };
            return run;
        };
        this.resolveRuleInputs = function (inputs, ruleHandler, run, runner) {
            var innerRules = _this.getHandlerInnerRules(ruleHandler);
            var resolvedInputs = inputs.map(function (input, i) {
                return _this.isRule(input) && !innerRules.rules.includes(i) ? run(input) : input;
            });
            if (innerRules.runner)
                resolvedInputs.splice(innerRules.runner, 0, runner);
            return resolvedInputs;
        };
        this.resolveRuleAsyncInputs = function (inputs, ruleHandler, run, runner, asyncRunner) { return __awaiter(_this, void 0, void 0, function () {
            var innerRules, resolvedInputs, i, input, result, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        innerRules = this.getHandlerInnerRules(ruleHandler);
                        resolvedInputs = [];
                        i = 0;
                        _b.label = 1;
                    case 1:
                        if (!(i < inputs.length)) return [3 /*break*/, 6];
                        input = inputs[i];
                        if (!(this.isRule(input) && !innerRules.rules.includes(i))) return [3 /*break*/, 3];
                        return [4 /*yield*/, run(input)];
                    case 2:
                        _a = _b.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        _a = input;
                        _b.label = 4;
                    case 4:
                        result = _a;
                        resolvedInputs.push(result);
                        _b.label = 5;
                    case 5:
                        i++;
                        return [3 /*break*/, 1];
                    case 6:
                        if (innerRules.runner)
                            resolvedInputs.splice(innerRules.runner, 0, runner);
                        if (innerRules.asyncRunner)
                            resolvedInputs.splice(innerRules.asyncRunner, 0, asyncRunner);
                        return [2 /*return*/, resolvedInputs];
                }
            });
        }); };
        this.getHandlerInnerRules = function (ruleHandler) {
            var innerRules = { runner: null, asyncRunner: null, rules: [] };
            _this.getHandlerArgs(ruleHandler).forEach(function (arg, i) {
                if (arg === '$runner') {
                    innerRules.runner = i;
                }
                else if (arg === '$asyncRunner') {
                    innerRules.asyncRunner = i;
                }
                else if (arg.startsWith('$rule')) {
                    innerRules.rules.push(i);
                }
            });
            return innerRules;
        };
        this.getHandlerArgs = function (ruleHandler) {
            var _a, _b, _c, _d;
            return ((_d = (_c = (_b = (_a = ruleHandler
                .toString()) === null || _a === void 0 ? void 0 : _a.match(/\((.*?)\)/)) === null || _b === void 0 ? void 0 : _b[1]) === null || _c === void 0 ? void 0 : _c.split(',')) === null || _d === void 0 ? void 0 : _d.map(function (i) { return i.trim(); })) || [];
        };
        this.isRule = function (data) { return (data && typeof data === 'object' && data[core_types_1.RuleParams.Rule]); };
        this.setOutputValue = function (out, value, outputs) {
            outputs.set(out, value);
        };
        this.getOutputValue = function (varName, outputs) {
            var outputValue = outputs.get(varName);
            if (!outputValue)
                throw Error("The \"".concat(varName, "\" output value is not exist"));
            return outputValue;
        };
        this.getDate = function (data) {
            if (!data)
                throw Error('There is no data passed');
            return data;
        };
        this.rules = new Map();
        this.ruleIds = new Set();
        this.registerOne({ name: core_types_1.CoreRules.Var, group: 'Core' }, this.getOutputValue);
        this.registerOne({ name: core_types_1.CoreRules.Data, group: 'Core' }, this.getDate);
    }
    /**
     * @param {IJsonLangParams} jsonLang
     * @param {Object} data.
     * @returns {RuleResult}
     * @description is the `Sync` version of jsonLang, use it to run all builtin rules and any extended `Sync` Rules
    */
    RuleCore.prototype.execute = function (rules, data) {
        var outputs = new Map();
        var run = this.createRunContext(outputs, data);
        return run()(rules);
    };
    /**
     * @param {IJsonLangParams} jsonLang
     * @param {Object} data.
     * @returns {Promise<RuleResult>}
     * @description is the `Async` version of jsonLang, use it to run all builtin rules and any extended `Sync/Async` Rules
    */
    RuleCore.prototype.executeAsync = function (rules, data) {
        var outputs = new Map();
        var syncRun = this.createRunContext(outputs, data);
        var run = this.createAsyncRunContext(outputs, syncRun, data);
        return run()(rules);
    };
    RuleCore.prototype.getAllInputs = function (rule, inputs, outputs, data, scopedData) {
        var params = inputs;
        if (rule === core_types_1.CoreRules.Var) {
            params = [inputs === null || inputs === void 0 ? void 0 : inputs[0], outputs];
        }
        else if (rule === core_types_1.CoreRules.Data) {
            params = (inputs === null || inputs === void 0 ? void 0 : inputs[0]) === 'Local' ? [scopedData] : [data];
        }
        return params;
    };
    RuleCore.prototype.getRuleParams = function (jsonLang) {
        var rule = jsonLang[core_types_1.RuleParams.Rule];
        var inputs = jsonLang[core_types_1.RuleParams.Input];
        var output = jsonLang[core_types_1.RuleParams.Output];
        if (!Array.isArray(inputs))
            throw new Error('Invalid Rule, $I must be an array');
        var ruleHandler = this.rules.get(rule);
        if (!ruleHandler)
            throw Error("The \"".concat(rule, "\" Rule is not exist"));
        return { ruleHandler: ruleHandler, rule: rule, inputs: inputs, output: output };
    };
    return RuleCore;
}());
exports.RuleCore = RuleCore;
//# sourceMappingURL=core.js.map

/***/ }),

/***/ 1055:
/***/ ((__unused_webpack_module, exports) => {


exports.__esModule = true;
exports.DataScope = exports.CoreRules = exports.RuleParams = void 0;
var RuleParams;
(function (RuleParams) {
    RuleParams["Rule"] = "$R";
    RuleParams["Input"] = "$I";
    RuleParams["Output"] = "$O";
})(RuleParams = exports.RuleParams || (exports.RuleParams = {}));
;
var CoreRules;
(function (CoreRules) {
    CoreRules["Var"] = "Var";
    CoreRules["Data"] = "Data";
})(CoreRules = exports.CoreRules || (exports.CoreRules = {}));
var DataScope;
(function (DataScope) {
    DataScope["Global"] = "Global";
    DataScope["Local"] = "Local";
})(DataScope = exports.DataScope || (exports.DataScope = {}));
;
//# sourceMappingURL=core.types.js.map

/***/ }),

/***/ 267:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
exports.__esModule = true;
__exportStar(__webpack_require__(4965), exports);
__exportStar(__webpack_require__(1055), exports);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 3157:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
exports.__esModule = true;
__exportStar(__webpack_require__(7259), exports);
__exportStar(__webpack_require__(1055), exports);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 7167:
/***/ (function(__unused_webpack_module, exports) {


var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
exports.__esModule = true;
exports.ArrayRules = void 0;
var ArrayRules = /** @class */ (function () {
    function ArrayRules() {
        var _this = this;
        this.register = function () {
            _this.rules.set({ name: 'All', group: 'Array/Collections' }, _this.all);
            _this.rules.set({ name: 'Map', group: 'Array/Collections' }, _this.map);
            _this.rules.set({ name: 'Filter', group: 'Array/Collections' }, _this.filter);
            _this.rules.set({ name: 'Flatten', group: 'Array/Collections' }, _this.flatten);
            _this.rules.set({ name: 'Foreach', group: 'Array/Collections' }, _this.foreach);
        };
        this.all = function () {
            var inputs = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                inputs[_i] = arguments[_i];
            }
            return __spreadArray([], __read(inputs), false).map(function (input) { return input; });
        };
        this.filter = function (elements, $rule, $runner) {
            return Array.isArray(elements) ? elements.filter(function (ele) { return $runner(ele)($rule); }) : [];
        };
        this.foreach = function (elements, $rule, $runner) {
            if (!Array.isArray(elements))
                return false;
            elements.forEach(function (ele) { return $runner(ele)($rule); });
            return true;
        };
        this.map = function (elements, $rule, $runner) {
            return Array.isArray(elements) ? elements.map(function (ele) { return $runner(ele)($rule); }) : [];
        };
        this.flatten = function (elements, lvl) {
            return Array.isArray(elements) ? elements.flat(lvl) : [];
        };
        this.rules = new Map();
        this.register();
    }
    ArrayRules.prototype.getRules = function () {
        return this.rules;
    };
    return ArrayRules;
}());
exports.ArrayRules = ArrayRules;
//# sourceMappingURL=array.js.map

/***/ }),

/***/ 9457:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
exports.__esModule = true;
__exportStar(__webpack_require__(8398), exports);
__exportStar(__webpack_require__(5054), exports);
__exportStar(__webpack_require__(6858), exports);
__exportStar(__webpack_require__(7167), exports);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 8398:
/***/ (function(__unused_webpack_module, exports) {


var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
exports.__esModule = true;
exports.LogicalRules = void 0;
var LogicalRules = /** @class */ (function () {
    function LogicalRules() {
        var _this = this;
        this.register = function () {
            _this.rules.set({ name: 'And', shortcut: '&&', group: 'Logical' }, _this.and);
            _this.rules.set({ name: 'Or', shortcut: '||', group: 'Logical' }, _this.or);
            _this.rules.set({ name: 'Equal', shortcut: '==', group: 'Logical' }, _this.equal);
            _this.rules.set({ name: 'NotEqual', shortcut: '!=', group: 'Logical' }, _this.notEqual);
            _this.rules.set({ name: 'Not', shortcut: '!', group: 'Logical' }, _this.not);
            _this.rules.set({ name: 'GreaterThan', shortcut: '>', group: 'Logical' }, _this.greaterThan);
            _this.rules.set({ name: 'LessThan', shortcut: '<', group: 'Logical' }, _this.lessThan);
            _this.rules.set({ name: 'GreaterThanOrEqual', shortcut: '>=', group: 'Logical' }, _this.greaterThanOrEqual);
            _this.rules.set({ name: 'LessThanOrEqual', shortcut: '<=', group: 'Logical' }, _this.lessThanOrEqual);
            _this.rules.set({ name: 'If', group: 'Logical' }, _this["if"]);
        };
        this.areSameType = function () {
            var inputs = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                inputs[_i] = arguments[_i];
            }
            return __spreadArray([], __read(inputs), false).slice(1).every(function (i) { return typeof i === typeof inputs[0]; });
        };
        this.hasObjects = function () {
            var inputs = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                inputs[_i] = arguments[_i];
            }
            return __spreadArray([], __read(inputs), false).some(function (i) { return typeof i === 'object'; });
        };
        this.castToString = function () {
            var inputs = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                inputs[_i] = arguments[_i];
            }
            return __spreadArray([], __read(inputs), false).map(function (i) { return typeof i === 'string' ? i : JSON.stringify(i); });
        };
        this.jsonParse = function () {
            var inputs = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                inputs[_i] = arguments[_i];
            }
            return __spreadArray([], __read(inputs), false).map(function (i) {
                if (typeof i === 'string') {
                    try {
                        var result = JSON.parse(i);
                        return result;
                    }
                    catch (_a) {
                        return undefined;
                    }
                }
                else {
                    return i;
                }
            });
        };
        this.and = function () {
            var inputs = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                inputs[_i] = arguments[_i];
            }
            return __spreadArray([], __read(inputs), false).every(function (input) { return input; });
        };
        this.or = function () {
            var inputs = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                inputs[_i] = arguments[_i];
            }
            return __spreadArray([], __read(inputs), false).some(function (input) { return input; });
        };
        this.equal = function (lhs, rhs) {
            if (!_this.areSameType(lhs, rhs) || _this.hasObjects(lhs, rhs)) {
                var _a = __read(_this.castToString(lhs, rhs), 2), stringLHS = _a[0], stringRHS = _a[1];
                return stringLHS === stringRHS;
            }
            else {
                return lhs === rhs;
            }
        };
        this.notEqual = function (lhs, rhs) {
            if (!_this.areSameType(lhs, rhs) || _this.hasObjects(lhs, rhs)) {
                var _a = __read(_this.castToString(lhs, rhs), 2), stringLHS = _a[0], stringRHS = _a[1];
                return stringLHS !== stringRHS;
            }
            else {
                return lhs !== rhs;
            }
        };
        this.not = function (value) {
            return !value;
        };
        this.greaterThan = function (lhs, rhs) {
            if (_this.hasObjects(lhs, rhs))
                return false;
            var _a = __read(_this.jsonParse(lhs, rhs), 2), parsedLHS = _a[0], parsedRHS = _a[1];
            return _this.areSameType(parsedLHS, parsedRHS) ? parsedLHS > parsedRHS : false;
        };
        this.lessThan = function (lhs, rhs) {
            if (_this.hasObjects(lhs, rhs))
                return false;
            var _a = __read(_this.jsonParse(lhs, rhs), 2), parsedLHS = _a[0], parsedRHS = _a[1];
            return _this.areSameType(parsedLHS, parsedRHS) ? parsedLHS < parsedRHS : false;
        };
        this.greaterThanOrEqual = function (lhs, rhs) {
            if (_this.hasObjects(lhs, rhs))
                return false;
            var _a = __read(_this.jsonParse(lhs, rhs), 2), parsedLHS = _a[0], parsedRHS = _a[1];
            return _this.areSameType(parsedLHS, parsedRHS) ? parsedLHS >= parsedRHS : false;
        };
        this.lessThanOrEqual = function (lhs, rhs) {
            if (_this.hasObjects(lhs, rhs))
                return false;
            var _a = __read(_this.jsonParse(lhs, rhs), 2), parsedLHS = _a[0], parsedRHS = _a[1];
            return _this.areSameType(parsedLHS, parsedRHS) ? parsedLHS <= parsedRHS : false;
        };
        this["if"] = function ($rule_condition, $rule_then, $rule_else, $runner) {
            if (!$runner)
                return false;
            return $runner()($rule_condition) ? $runner()($rule_then) : $runner()($rule_else);
        };
        this.rules = new Map();
        this.register();
    }
    LogicalRules.prototype.getRules = function () {
        return this.rules;
    };
    return LogicalRules;
}());
exports.LogicalRules = LogicalRules;
//# sourceMappingURL=logical.js.map

/***/ }),

/***/ 5054:
/***/ (function(__unused_webpack_module, exports) {


var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
exports.__esModule = true;
exports.MathRules = void 0;
var MathRules = /** @class */ (function () {
    function MathRules() {
        var _this = this;
        this.register = function () {
            _this.rules.set({ name: 'IsNumber', group: 'Math' }, _this.isNumber);
            _this.rules.set({ name: 'Sum', shortcut: '+', group: 'Math' }, _this.sum);
            _this.rules.set({ name: 'Subtract', shortcut: '-', group: 'Math' }, _this.subtract);
            _this.rules.set({ name: 'Multiply', shortcut: '*', group: 'Math' }, _this.multiply);
            _this.rules.set({ name: 'Divide', shortcut: '/', group: 'Math' }, _this.divide);
            _this.rules.set({ name: 'Min', group: 'Math' }, _this.min);
            _this.rules.set({ name: 'Max', group: 'Math' }, _this.max);
        };
        this.isNumber = function (inputs) {
            return inputs.every(function (i) { return typeof i === 'number'; });
        };
        this.hasNoZero = function (inputs) {
            return inputs.every(function (i) { return i !== 0; });
        };
        this.sum = function () {
            var inputs = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                inputs[_i] = arguments[_i];
            }
            var arrayOfInputs = __spreadArray([], __read(inputs), false);
            return _this.isNumber(arrayOfInputs) ? arrayOfInputs.reduce(function (a, b) { return a + b; }) : 0;
        };
        this.subtract = function () {
            var inputs = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                inputs[_i] = arguments[_i];
            }
            var arrayOfInputs = __spreadArray([], __read(inputs), false);
            return _this.isNumber(arrayOfInputs) ? arrayOfInputs.reduce(function (a, b) { return a - b; }) : 0;
        };
        this.multiply = function () {
            var inputs = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                inputs[_i] = arguments[_i];
            }
            var arrayOfInputs = __spreadArray([], __read(inputs), false);
            return _this.isNumber(arrayOfInputs) ? arrayOfInputs.reduce(function (a, b) { return a * b; }) : 0;
        };
        this.divide = function () {
            var inputs = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                inputs[_i] = arguments[_i];
            }
            var arrayOfInputs = __spreadArray([], __read(inputs), false);
            return _this.isNumber(arrayOfInputs) && _this.hasNoZero(arrayOfInputs.slice(1)) ? arrayOfInputs.reduce(function (a, b) { return a / b; }) : 0;
        };
        this.min = function () {
            var inputs = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                inputs[_i] = arguments[_i];
            }
            var arrayOfInputs = __spreadArray([], __read(inputs), false);
            return _this.isNumber(arrayOfInputs) ? Math.min.apply(Math, __spreadArray([], __read(inputs), false)) : null;
        };
        this.max = function () {
            var inputs = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                inputs[_i] = arguments[_i];
            }
            var arrayOfInputs = __spreadArray([], __read(inputs), false);
            return _this.isNumber(arrayOfInputs) ? Math.max.apply(Math, __spreadArray([], __read(inputs), false)) : null;
        };
        this.rules = new Map();
        this.register();
    }
    MathRules.prototype.getRules = function () {
        return this.rules;
    };
    return MathRules;
}());
exports.MathRules = MathRules;
//# sourceMappingURL=math.js.map

/***/ }),

/***/ 6858:
/***/ ((__unused_webpack_module, exports) => {


exports.__esModule = true;
exports.ObjectRules = void 0;
var ObjectRules = /** @class */ (function () {
    function ObjectRules() {
        var _this = this;
        this.register = function () {
            _this.rules.set({ name: 'Get', group: 'Object' }, _this.get);
            _this.rules.set({ name: 'Set', group: 'Object' }, _this.set);
            _this.rules.set({ name: 'Update', group: 'Object' }, _this.update);
            _this.rules.set({ name: 'Delete', group: 'Object' }, _this["delete"]);
        };
        this.isArrayOfPaths = function (path) {
            if (!Array.isArray(path))
                return false;
            return path.every(function (p) { return typeof p === 'string'; });
        };
        this.baseGet = function (pathProps, data) {
            var property = pathProps.shift();
            if (!property || data[property] === undefined)
                return undefined;
            return pathProps.length === 0 ? (property === '*' ? data : data[property]) : _this.baseGet(pathProps, data[property]);
        };
        this.baseSet = function (pathProps, data, value, upsert) {
            if (upsert === void 0) { upsert = false; }
            var lastKeyIndex = pathProps.length - 1;
            for (var i = 0; i < lastKeyIndex; ++i) {
                var property = pathProps[i];
                if (!(property in data)) {
                    data[property] = {};
                }
                data = data[property];
            }
            data[pathProps[lastKeyIndex]] = value;
            return true;
        };
        this.baseUpdate = function (pathProps, data, value) {
            var property = pathProps.shift();
            if (!property || data[property] === undefined)
                return false;
            if (pathProps.length === 0) {
                data[property] = value;
                return true;
            }
            else {
                return _this.baseUpdate(pathProps, data[property], value);
            }
        };
        this.baseDelete = function (pathProps, data) {
            var property = pathProps.shift();
            if (!property || data[property] === undefined)
                return false;
            if (pathProps.length === 0) {
                delete data[property];
                return true;
            }
            else {
                return _this.baseDelete(pathProps, data[property]);
            }
        };
        this.set = function (path, value, data) {
            var pathProps = _this.getPath(path);
            return data && pathProps && value ? _this.baseSet(pathProps, data, value, true) : false;
        };
        this.get = function (path, defaultValue, data) {
            var pathProps = _this.getPath(path);
            // defaultValue = defaultValue || 'invalidPath';
            var result = data && pathProps ? _this.baseGet(pathProps, data) : undefined;
            return result === undefined ? defaultValue : result;
        };
        this.update = function (path, value, data) {
            var pathProps = _this.getPath(path);
            return data && pathProps && value ? _this.baseUpdate(pathProps, data, value) : false;
        };
        this["delete"] = function (path, data) {
            var pathProps = _this.getPath(path);
            return data && pathProps ? _this.baseDelete(pathProps, data) : false;
        };
        this.arrayEleNumRegex = /^\[([0-9]+)\]/;
        this.rules = new Map();
        this.register();
    }
    ObjectRules.prototype.getRules = function () {
        return this.rules;
    };
    ObjectRules.prototype.getPath = function (path) {
        var pathProps = path;
        if (typeof path === 'string')
            pathProps = path.split('.');
        return this.isArrayOfPaths(pathProps) && pathProps.length > 0 ? pathProps : undefined;
    };
    return ObjectRules;
}());
exports.ObjectRules = ObjectRules;
//# sourceMappingURL=object.js.map

/***/ })

}]);