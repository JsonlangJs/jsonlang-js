"use strict";
(self["webpackChunkjsonlang"] = self["webpackChunkjsonlang"] || []).push([[2858],{

/***/ 3905:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Zo": () => (/* binding */ MDXProvider),
/* harmony export */   "kt": () => (/* binding */ createElement)
/* harmony export */ });
/* unused harmony exports MDXContext, useMDXComponents, withMDXComponents */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);


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

var isFunction = function isFunction(obj) {
  return typeof obj === 'function';
};

var MDXContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext({});
var withMDXComponents = function withMDXComponents(Component) {
  return function (props) {
    var allComponents = useMDXComponents(props.components);
    return /*#__PURE__*/React.createElement(Component, _extends({}, props, {
      components: allComponents
    }));
  };
};
var useMDXComponents = function useMDXComponents(components) {
  var contextComponents = react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);
  var allComponents = contextComponents;

  if (components) {
    allComponents = isFunction(components) ? components(contextComponents) : _objectSpread2(_objectSpread2({}, contextComponents), components);
  }

  return allComponents;
};
var MDXProvider = function MDXProvider(props) {
  var allComponents = useMDXComponents(props.components);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider, {
    value: allComponents
  }, props.children);
};

var TYPE_PROP_NAME = 'mdxType';
var DEFAULTS = {
  inlineCode: 'code',
  wrapper: function wrapper(_ref) {
    var children = _ref.children;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, children);
  }
};
var MDXCreateElement = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function (props, ref) {
  var propComponents = props.components,
      mdxType = props.mdxType,
      originalType = props.originalType,
      parentName = props.parentName,
      etc = _objectWithoutProperties(props, ["components", "mdxType", "originalType", "parentName"]);

  var components = useMDXComponents(propComponents);
  var type = mdxType;
  var Component = components["".concat(parentName, ".").concat(type)] || components[type] || DEFAULTS[type] || originalType;

  if (propComponents) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component, _objectSpread2(_objectSpread2({
      ref: ref
    }, etc), {}, {
      components: propComponents
    }));
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component, _objectSpread2({
    ref: ref
  }, etc));
});
MDXCreateElement.displayName = 'MDXCreateElement';
function createElement (type, props) {
  var args = arguments;
  var mdxType = props && props.mdxType;

  if (typeof type === 'string' || mdxType) {
    var argsLength = args.length;
    var createElementArgArray = new Array(argsLength);
    createElementArgArray[0] = MDXCreateElement;
    var newProps = {};

    for (var key in props) {
      if (hasOwnProperty.call(props, key)) {
        newProps[key] = props[key];
      }
    }

    newProps.originalType = type;
    newProps[TYPE_PROP_NAME] = typeof type === 'string' ? type : mdxType;
    createElementArgArray[1] = newProps;

    for (var i = 2; i < argsLength; i++) {
      createElementArgArray[i] = args[i];
    }

    return react__WEBPACK_IMPORTED_MODULE_0__.createElement.apply(null, createElementArgArray);
  }

  return react__WEBPACK_IMPORTED_MODULE_0__.createElement.apply(null, args);
}




/***/ }),

/***/ 9596:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ JsonLangRunner)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/@monaco-editor/react/lib/es/index.js + 25 modules
var es = __webpack_require__(9604);
// EXTERNAL MODULE: ./node_modules/jsonlang-js/dist/index.js
var dist = __webpack_require__(3157);
;// CONCATENATED MODULE: ./src/components/JsonLangRunner/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const styles_module = ({"gridContainer":"gridContainer_TrrE","gridItem":"gridItem_Hw16","resultBase":"resultBase_zOl6","result":"result_TIKY","label":"label_zWtK"});
;// CONCATENATED MODULE: ./src/components/JsonLangRunner/examples.js
function getExample(exampleNum){const examples=[[`{
      "$R": "+",
      "$I": [{
        "$R": "+",
        "$I": [1, { "$R": "*", "$I": [2, 3] }, 5]
      }, {
        "$R": "+",
        "$I": [1, { "$R": "*", "$I": [3, 3, 7], "$O": "x" }, 6, 7]
      }, {
        "$R": "Var",
        "$I": ["x"]
      }, {
        "$R": "Get",
        "$I": ["user.age", null, { "$R": "Data", "$I": [] }]
      }]
}`,`{ 
  "user": {
    "name": "test",
    "age": 100
  } 
}`],[`{ 
  "$R": "All", 
  "$I": [
    { "$R": "+", "$I": [1, 2], "$O": "y" },
    { "$R": "Var", "$I": ["y"] }
  ] 
}
`,`
{}
`],[`{ 
  "$R": "Data",
  "$I": [] 
}
`,`{
  "name": { 
    "first": "Cristiano",
    "last": "Ronaldo"
  },
  "job": "Footballer" 
}
`],[`{ 
  "$R": "Sum",
  "$I": [3, 4, 6]
}
`,`{}
`],[`{ 
  "$R": "-",
  "$I": [3, 4, 6]
}
`,`{}
`],[`{ 
  "$R": "Multiply",
  "$I": [3, 4, 6]
}
`,`{}
`],[`{ 
  "$R": "/",
  "$I": [50, 5, 20]
}
`,`{}
`],[`{ 
  "$R": "And",
  "$I": [true, true, false]
}
`,`{}
`],[`{ 
  "$R": "||",
  "$I": [true, false, true, true]
}
`,`{}
`],[`{ 
  "$R": "Equal",
  "$I": ["x", "x"]
}
`,`{}
`],[`{ 
  "$R": "!=",
  "$I": ["x", "y"]
}
`,`{}
`],[`{ 
  "$R": "Not",
  "$I": [true]
}
`,`{}
`],[`{ 
  "$R": ">",
  "$I": [31, 4]
}
`,`{}
`],[`{ 
  "$R": "<",
  "$I": [41, 9]
}
`,`{}
`],[`{ 
  "$R": ">=",
  "$I": [9, 9]
}
`,`{}
`],[`{ 
  "$R": "<=",
  "$I": [8, 9]
}
`,`{}
`],[`{ 
  "$R": "Get",
  "$I": [
    "name.last",
    "Unknown Name",
    { "$R": "Data", "$I": [] }
  ]
}
`,`{
  "name": { 
    "first": "Cristiano",
    "last": "Ronaldo"
  },
  "job": "Footballer" 
}
`],[`{ 
  "$R": "All", 
  "$I": [
    { "$R": "+", "$I": [1, 3, 5] },
    { "$R": "-", "$I": [5, 3] }
  ] 
}
`,`{}`],[`{ 
  "$R": "Filter", 
  "$I": [
    [1, 3, 5],
    { 
      "$R": ">",
      "$I": [{ "$R": "Data", "$I": ["Local"] }, 2] 
    }
  ]
}
`,`{}`],[`{ 
  "$R": "Map", 
  "$I": [
    [1, 3, 5],
    { 
      "$R": "+",
      "$I": [{ "$R": "Data", "$I": ["Local"] }, 2]
    }
  ]
}
`,`{}`],[`{ 
  "$R": "Foreach", 
  "$I": [
    [1, 3, 5],
    {
      "$R": "+",
      "$I": [{ "$R": "Data", "$I": ["Local"] }, 2]
    }
  ]
}
`,`{}`],[`{ 
  "$R": "Flatten", 
  "$I": [
    [[[1, 3, 1], [33, 6, 3]], [33, 6, 66, 654]],
    2
  ]
}
`,`{}`],[`{
  "$R": "<" ,
  "$I": [10, 20]
}`,`{}`],[`{ 
  "$R": "All", "$I": [
    { 
      "$R": "Filter",
      "$I": [
        [1, 3, 5], 
        { 
          "$R": ">",
          "$I": [{ "$R": "Data", "$I": ["Local"] }, 2]
        }
      ]
    },
    { 
      "$R": "Filter",
      "$I": [
        { 
          "$R": "Get",
          "$I": [
            "data.test",
            null,
            { "$R": "Data", "$I": ["Global"] }
          ]
        },
        {
          "$R": "<",
          "$I": [{ "$R": "Data", "$I": ["Local"] }, 500]
        }
      ]
    }
  ] 
}
`,`
{ 
  "data": { 
    "id": "test",
    "test": [100, 300, 700]
  } 
}
`],[`{ 
  "$R": "Test",
  "$I": [
    { 
      "$R": "Get",
      "$I": ["user.age", null, { "$R": "Data", "$I": [] }]
    }
  ]
}
`,`{
  "user": { 
    "name": "test",
    "age": 100
  }
}`],[`{ 
  "$R": "If",
  "$I": [
    { 
      "$R": ">",
      "$I": [4, 3]
    },
    { 
      "$R": "If",
      "$I": [0, "Failed", "Success"]
    },
    false
  ]
}
`,`{
  "user": { 
    "name": "test",
    "age": 100
  }
}`]];return examples[exampleNum-1];}
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/contexts/colorMode.js
var contexts_colorMode = __webpack_require__(2949);
;// CONCATENATED MODULE: ./src/components/JsonLangRunner/index.js
const jsonLang=new dist.JsonLang();jsonLang.registerOne({name:'Test',shortcut:'t'},input=>{return`${input} Test`;});function JsonLangRunner(_ref){let{example,height}=_ref;const{colorMode}=(0,contexts_colorMode/* useColorMode */.I)();const[result,setResult]=react.useState('');const[code,setCode]=react.useState(getExample(example)[0]);const[objData,setData]=react.useState(getExample(example)[1]);react.useEffect(()=>{run();});function run(){let jsonCode,jsonData;try{jsonCode=JSON.parse(code);jsonData=JSON.parse(objData);}catch{jsonCode=jsonData=null;}if(jsonCode&&jsonData){try{const res=jsonLang.execute(jsonCode,jsonData);setResult(typeof res=='object'?JSON.stringify(res):res);}catch(error){setResult(error.message);}}}function handleCodeChange(value){setCode(value);}function handleDataChange(value){setData(value);}function handleCodeValidation(markers){}return[/*#__PURE__*/react.createElement("div",{className:styles_module.gridContainer,key:"JsonLang"},/*#__PURE__*/react.createElement("div",{className:styles_module.gridItem},/*#__PURE__*/react.createElement("label",{key:"JsonLangLabel",className:styles_module.label},"Rules"),/*#__PURE__*/react.createElement(es/* default */.ZP,{theme:colorMode==='dark'?"light":"vs-dark",height:height,defaultLanguage:"json",defaultValue:code,onChange:handleCodeChange,onValidate:handleCodeValidation,key:"JsonLangCode"})),/*#__PURE__*/react.createElement("div",{className:styles_module.gridItem},/*#__PURE__*/react.createElement("label",{key:"DataLabel",className:styles_module.label},"Data"),/*#__PURE__*/react.createElement(es/* default */.ZP,{theme:colorMode==='dark'?"light":"vs-dark",height:height,defaultLanguage:"json",defaultValue:objData,onChange:handleDataChange,key:"JsonLangData"}))),/*#__PURE__*/react.createElement("div",{key:"Result"},/*#__PURE__*/react.createElement("label",{key:"ResultLabel",className:styles_module.label},"Result"),/*#__PURE__*/react.createElement("textarea",{key:"ResultValue",defaultValue:result,disabled:true,className:styles_module.resultBase+" "+styles_module.result}))];}

/***/ }),

/***/ 9019:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "assets": () => (/* binding */ assets),
/* harmony export */   "contentTitle": () => (/* binding */ contentTitle),
/* harmony export */   "default": () => (/* binding */ MDXContent),
/* harmony export */   "frontMatter": () => (/* binding */ frontMatter),
/* harmony export */   "metadata": () => (/* binding */ metadata),
/* harmony export */   "toc": () => (/* binding */ toc)
/* harmony export */ });
/* harmony import */ var _home_runner_work_jsonlang_jsonlang_website_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7462);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3905);
/* harmony import */ var _site_src_components_JsonLangRunner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9596);
/* @jsxRuntime classic */ /* @jsx mdx */ /* @jsxFrag React.Fragment */const frontMatter={sidebar_position:6};const contentTitle='What Next?';const metadata={"unversionedId":"todo","id":"todo","title":"What Next?","description":"* Adding more math, logic, object, array, date, and casting methods.","source":"@site/docs/todo.mdx","sourceDirName":".","slug":"/todo","permalink":"/docs/todo","draft":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/todo.mdx","tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"sidebar_position":6},"sidebar":"tutorialSidebar","previous":{"title":"Compatibility","permalink":"/docs/compatibility"}};const assets={};const toc=[];const layoutProps={toc};const MDXLayout="wrapper";function MDXContent(_ref){let{components,...props}=_ref;return (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(MDXLayout,(0,_home_runner_work_jsonlang_jsonlang_website_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h1",{"id":"what-next"},`What Next?`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},`Adding more math, logic, object, array, date, and casting methods.`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},`Allow importing packages to extend JsonLang easily.`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},`Provide plugins to wrap well-known packages like MathJs, Jsonata, Axios, Lodash, MomentJs, ...etc.`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},`Make a UI Editor generate the JSON of JsonLang.`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},`Allow Writing Rules as expression. i.e. `,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"li"},`And(true, Or(1, Get('var1.var2', 0)))`),`.`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},`Public website has good documentation, for example, playground to try JsonLang, use-cases session has many ideas for using JsonLang.`)));};MDXContent.isMDXComponent=true;

/***/ })

}]);