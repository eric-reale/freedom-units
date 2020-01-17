// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"src/index.js":[function(require,module,exports) {
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

// import 'babel-polyfill';
// import metricDistanceUnits from './units.js';
// import currencies from './units.js';  //// Not working
var metricDistanceUnits = ['Millimeter', 'Centimeter', 'Meter', 'Kilometer'];
var imperialDistanceUnits = ['Inch', 'Foot', 'Yard', 'Mile'];
var placeholderArray = ['Unit', 'Unit', 'Unit', 'Unit'];
var panels = document.querySelectorAll('.panel'); // Wait function

function wait() {
  var ms = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  return new Promise(function (resolve) {
    return setTimeout(resolve, ms);
  });
}

function unitTypeMargin(e) {
  var unitDiv = e.currentTarget.querySelector('.unit-type');
  unitDiv.style.marginTop = "0px";
}

function convertUnits(inputs) {
  // console.log(inputs);
  var topInput = inputs.find(function (element) {
    return element.classList.contains("amount_top");
  });
  var topSelect = inputs.find(function (element) {
    return element.classList.contains("distance-select");
  });
  console.log(topSelect.value);
}

function createInputsArray() {
  var inputs = [].concat(_toConsumableArray(Array.from(document.querySelectorAll('input'))), _toConsumableArray(Array.from(document.querySelectorAll('select'))));
  convertUnits(inputs); // neeed to make an on change event listener;
  // const topInput = inputs.find(function(element) {
  //   return element.classList.contains("amount_top")
  // })
  // console.log(topInput);
  // return inputs;
  // inputs.forEach(input => {
  //   addEventListener('keydown', function() {
  //   console.log('here');
  // })
  // })
}

function checkPanelNumber(panel) {
  var panelArr = Array.from(panel.childNodes);
  var thisPanel = panelArr.find(function (element) {
    if (element.nodeName === '#text') return;
    return element.classList.contains("unit-type");
  });

  switch (thisPanel.innerText) {
    case 'DISTANCE':
      return [metricDistanceUnits, imperialDistanceUnits];
      break;

    case 'LIQUID':
      return [placeholderArray, placeholderArray];
      break;

    case 'TEMPERATURE':
      return [placeholderArray, placeholderArray];
      break;

    case 'WEIGHT':
      return [placeholderArray, placeholderArray];
      break;

    case 'CURRENECY':
      return [placeholderArray, placeholderArray];
      break;

    default:
      null;
  }
}

function generateOptions(options) {
  if (!options) return;
  return options.map(function (unit) {
    return "<option value=\"".concat(unit, "\">").concat(unit, "</option>");
  });
}

function createInputs(_x) {
  return _createInputs.apply(this, arguments);
}

function _createInputs() {
  _createInputs = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(e) {
    var optionsTopHTML, optionsBottomHTML, para1, para2, htmlTop, htmlBottom;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            optionsTopHTML = generateOptions(checkPanelNumber(e.currentTarget)[0]);
            optionsBottomHTML = generateOptions(checkPanelNumber(e.currentTarget)[1]);
            para1 = e.currentTarget.firstElementChild;
            para2 = e.currentTarget.lastElementChild;
            _context.next = 6;
            return wait(500);

          case 6:
            htmlTop = "\n  <div class='inputs-select slide-down' style=\"width: 40%; margin-top: -25px\">\n          <div class=\"select\" style=\"display: grid; width: 120px;\">\n            <label for=\"distance-unit-selection\">Select Units</label>\n            <select class=\"distance-select\" id=\"distance-select\" style=\"width: 120px; height: 35px\">\n            ".concat(optionsTopHTML, "\n            </select>\n          </div>\n\n          <div class=\"distance-input\" style=\"display: grid; margin-left: 10%; width: 120px;\">\n            <label for=\"distance-input\">Input Units</label>\n            <input name=\"amount_top\" class=\"amount_top\" type=\"number\" style=\"width: 120px; height: 35px;\" placeholder=\"\" id=\"\">\n          </div>\n  </div>\n  "); // const selectClass = document.querySelector('.distance-select');

            htmlBottom = "\n  <div class='inputs-select slide-up' style=\"width: 40%; margin-bottom: -20px\">\n          <div class=\"select\" style=\"display: grid; width: 120px;\">\n            <label for=\"distance-unit-selection\">Select Units</label>\n            <select class=\"\" id=\"distance-select\" style=\"width: 120px; height: 35px;\">\n                ".concat(optionsBottomHTML, "\n            </select>\n          </div>\n\n          <div class=\"distance-input\" style=\"display: grid; margin-left: 10%; width: 120px;\">\n            <label for=\"distance-input\">Input Units</label>\n            <input class=\"\" type=\"number\" style=\"width: 120px; height: 35px;\" placeholder=\"\" id=\"\">\n          </div>\n        </div>\n      ");
            para1.insertAdjacentHTML('afterend', htmlTop);
            para2.insertAdjacentHTML('beforebegin', htmlBottom);
            createInputsArray();

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _createInputs.apply(this, arguments);
}

function removeInputs() {
  var inputSelects = Array.from(document.querySelectorAll('.inputs-select'));

  function removeFadeOut(el, speed) {
    var seconds = speed / 1000;
    el.style.transition = "opacity " + seconds + "s ease";
    el.style.opacity = 0;
    setTimeout(function () {
      el.parentNode.removeChild(el);
    }, speed);
  }

  inputSelects.forEach(function (input) {
    return removeFadeOut(input, 600);
  });
}

function toggleOpen(e) {
  var panelsArr = Array.from(panels);
  var openPanel = panelsArr.find(function (panel) {
    return panel.classList.contains('open');
  });

  if (e.target.type === 'number') {
    return;
  }

  if (e.target.type === 'select-one') {
    return;
  }

  if (this === openPanel) {
    openPanel.classList.remove('open');
    removeInputs();
    return;
  }

  if (openPanel) {
    openPanel.classList.remove('open');
    removeInputs();
  }

  this.classList.toggle('open');
  unitTypeMargin(e);
  createInputs(e);
}

function toggleActive(e) {
  if (e.propertyName.includes('flex')) this.classList.toggle('open-active');
} // Panel event listeners


panels.forEach(function (panel) {
  panel.addEventListener('click', toggleOpen);
});
panels.forEach(function (panel) {
  panel.addEventListener('transitionend', toggleActive);
});
},{}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "50225" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","src/index.js"], null)
//# sourceMappingURL=/src.a2b27638.js.map