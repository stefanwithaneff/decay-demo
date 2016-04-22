(function (React,ReactDOM,Redux,Immutable) {
    'use strict';

    React = 'default' in React ? React['default'] : React;
    ReactDOM = 'default' in ReactDOM ? ReactDOM['default'] : ReactDOM;
    Redux = 'default' in Redux ? Redux['default'] : Redux;
    Immutable = 'default' in Immutable ? Immutable['default'] : Immutable;

    function __commonjs(fn, module) { return module = { exports: {} }, fn(module, module.exports), module.exports; }


    var babelHelpers = {};
    babelHelpers.typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
      return typeof obj;
    } : function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };

    babelHelpers.classCallCheck = function (instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    };

    babelHelpers.createClass = function () {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor) descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }

      return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
      };
    }();

    babelHelpers.inherits = function (subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      }

      subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
          value: subClass,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    };

    babelHelpers.possibleConstructorReturn = function (self, call) {
      if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }

      return call && (typeof call === "object" || typeof call === "function") ? call : self;
    };

    babelHelpers.toConsumableArray = function (arr) {
      if (Array.isArray(arr)) {
        for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

        return arr2;
      } else {
        return Array.from(arr);
      }
    };

    babelHelpers;

    var browser = __commonjs(function (module) {
      /**
       * Copyright 2013-2015, Facebook, Inc.
       * All rights reserved.
       *
       * This source code is licensed under the BSD-style license found in the
       * LICENSE file in the root directory of this source tree. An additional grant
       * of patent rights can be found in the PATENTS file in the same directory.
       */

      'use strict';

      /**
       * Use invariant() to assert state which your program assumes to be true.
       *
       * Provide sprintf-style format (only %s is supported) and arguments
       * to provide information about what broke and what you were
       * expecting.
       *
       * The invariant message will be stripped in production, but the invariant
       * will remain to ensure logic does not differ in production.
       */

      var invariant = function invariant(condition, format, a, b, c, d, e, f) {
        if ("production" !== 'production') {}

        if (!condition) {
          var error;
          if (format === undefined) {
            error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
          } else {
            var args = [a, b, c, d, e, f];
            var argIndex = 0;
            error = new Error(format.replace(/%s/g, function () {
              return args[argIndex++];
            }));
            error.name = 'Invariant Violation';
          }

          error.framesToPop = 1; // we don't care about invariant's own frame
          throw error;
        }
      };

      module.exports = invariant;
    });

    var require$$0$1 = browser && (typeof browser === 'undefined' ? 'undefined' : babelHelpers.typeof(browser)) === 'object' && 'default' in browser ? browser['default'] : browser;

    var index$2 = __commonjs(function (module) {
        /**
         * Copyright 2015, Yahoo! Inc.
         * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
         */
        'use strict';

        var REACT_STATICS = {
            childContextTypes: true,
            contextTypes: true,
            defaultProps: true,
            displayName: true,
            getDefaultProps: true,
            mixins: true,
            propTypes: true,
            type: true
        };

        var KNOWN_STATICS = {
            name: true,
            length: true,
            prototype: true,
            caller: true,
            arguments: true,
            arity: true
        };

        module.exports = function hoistNonReactStatics(targetComponent, sourceComponent) {
            var keys = Object.getOwnPropertyNames(sourceComponent);
            for (var i = 0; i < keys.length; ++i) {
                if (!REACT_STATICS[keys[i]] && !KNOWN_STATICS[keys[i]]) {
                    try {
                        targetComponent[keys[i]] = sourceComponent[keys[i]];
                    } catch (error) {}
                }
            }

            return targetComponent;
        };
    });

    var require$$1 = index$2 && (typeof index$2 === 'undefined' ? 'undefined' : babelHelpers.typeof(index$2)) === 'object' && 'default' in index$2 ? index$2['default'] : index$2;

    var isObjectLike = __commonjs(function (module) {
      /**
       * Checks if `value` is object-like. A value is object-like if it's not `null`
       * and has a `typeof` result of "object".
       *
       * @static
       * @memberOf _
       * @since 4.0.0
       * @category Lang
       * @param {*} value The value to check.
       * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
       * @example
       *
       * _.isObjectLike({});
       * // => true
       *
       * _.isObjectLike([1, 2, 3]);
       * // => true
       *
       * _.isObjectLike(_.noop);
       * // => false
       *
       * _.isObjectLike(null);
       * // => false
       */
      function isObjectLike(value) {
        return !!value && (typeof value === 'undefined' ? 'undefined' : babelHelpers.typeof(value)) == 'object';
      }

      module.exports = isObjectLike;
    });

    var require$$0$2 = isObjectLike && (typeof isObjectLike === 'undefined' ? 'undefined' : babelHelpers.typeof(isObjectLike)) === 'object' && 'default' in isObjectLike ? isObjectLike['default'] : isObjectLike;

    var _isHostObject = __commonjs(function (module) {
      /**
       * Checks if `value` is a host object in IE < 9.
       *
       * @private
       * @param {*} value The value to check.
       * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
       */
      function isHostObject(value) {
        // Many host objects are `Object` objects that can coerce to strings
        // despite having improperly defined `toString` methods.
        var result = false;
        if (value != null && typeof value.toString != 'function') {
          try {
            result = !!(value + '');
          } catch (e) {}
        }
        return result;
      }

      module.exports = isHostObject;
    });

    var require$$1$1 = _isHostObject && (typeof _isHostObject === 'undefined' ? 'undefined' : babelHelpers.typeof(_isHostObject)) === 'object' && 'default' in _isHostObject ? _isHostObject['default'] : _isHostObject;

    var _getPrototype = __commonjs(function (module) {
      /* Built-in method references for those with the same name as other `lodash` methods. */
      var nativeGetPrototype = Object.getPrototypeOf;

      /**
       * Gets the `[[Prototype]]` of `value`.
       *
       * @private
       * @param {*} value The value to query.
       * @returns {null|Object} Returns the `[[Prototype]]`.
       */
      function getPrototype(value) {
        return nativeGetPrototype(Object(value));
      }

      module.exports = getPrototype;
    });

    var require$$2$1 = _getPrototype && (typeof _getPrototype === 'undefined' ? 'undefined' : babelHelpers.typeof(_getPrototype)) === 'object' && 'default' in _getPrototype ? _getPrototype['default'] : _getPrototype;

    var isPlainObject = __commonjs(function (module) {
      var getPrototype = require$$2$1,
          isHostObject = require$$1$1,
          isObjectLike = require$$0$2;

      /** `Object#toString` result references. */
      var objectTag = '[object Object]';

      /** Used for built-in method references. */
      var objectProto = Object.prototype;

      /** Used to resolve the decompiled source of functions. */
      var funcToString = Function.prototype.toString;

      /** Used to check objects for own properties. */
      var hasOwnProperty = objectProto.hasOwnProperty;

      /** Used to infer the `Object` constructor. */
      var objectCtorString = funcToString.call(Object);

      /**
       * Used to resolve the
       * [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
       * of values.
       */
      var objectToString = objectProto.toString;

      /**
       * Checks if `value` is a plain object, that is, an object created by the
       * `Object` constructor or one with a `[[Prototype]]` of `null`.
       *
       * @static
       * @memberOf _
       * @since 0.8.0
       * @category Lang
       * @param {*} value The value to check.
       * @returns {boolean} Returns `true` if `value` is a plain object,
       *  else `false`.
       * @example
       *
       * function Foo() {
       *   this.a = 1;
       * }
       *
       * _.isPlainObject(new Foo);
       * // => false
       *
       * _.isPlainObject([1, 2, 3]);
       * // => false
       *
       * _.isPlainObject({ 'x': 0, 'y': 0 });
       * // => true
       *
       * _.isPlainObject(Object.create(null));
       * // => true
       */
      function isPlainObject(value) {
        if (!isObjectLike(value) || objectToString.call(value) != objectTag || isHostObject(value)) {
          return false;
        }
        var proto = getPrototype(value);
        if (proto === null) {
          return true;
        }
        var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
        return typeof Ctor == 'function' && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
      }

      module.exports = isPlainObject;
    });

    var require$$2 = isPlainObject && (typeof isPlainObject === 'undefined' ? 'undefined' : babelHelpers.typeof(isPlainObject)) === 'object' && 'default' in isPlainObject ? isPlainObject['default'] : isPlainObject;

    var warning = __commonjs(function (module, exports) {
      'use strict';

      exports.__esModule = true;
      exports["default"] = warning;
      /**
       * Prints a warning in the console if it exists.
       *
       * @param {String} message The warning message.
       * @returns {void}
       */
      function warning(message) {
        /* eslint-disable no-console */
        if (typeof console !== 'undefined' && typeof console.error === 'function') {
          console.error(message);
        }
        /* eslint-enable no-console */
        try {
          // This error was thrown as a convenience so that you can use this stack
          // to find the callsite that caused this warning to fire.
          throw new Error(message);
          /* eslint-disable no-empty */
        } catch (e) {}
        /* eslint-enable no-empty */
      }
    });

    var require$$0$3 = warning && (typeof warning === 'undefined' ? 'undefined' : babelHelpers.typeof(warning)) === 'object' && 'default' in warning ? warning['default'] : warning;

    var wrapActionCreators = __commonjs(function (module, exports) {
      'use strict';

      exports.__esModule = true;
      exports["default"] = wrapActionCreators;

      var _redux = Redux;

      function wrapActionCreators(actionCreators) {
        return function (dispatch) {
          return (0, _redux.bindActionCreators)(actionCreators, dispatch);
        };
      }
    });

    var require$$4 = wrapActionCreators && (typeof wrapActionCreators === 'undefined' ? 'undefined' : babelHelpers.typeof(wrapActionCreators)) === 'object' && 'default' in wrapActionCreators ? wrapActionCreators['default'] : wrapActionCreators;

    var shallowEqual = __commonjs(function (module, exports) {
      "use strict";

      exports.__esModule = true;
      exports["default"] = shallowEqual;
      function shallowEqual(objA, objB) {
        if (objA === objB) {
          return true;
        }

        var keysA = Object.keys(objA);
        var keysB = Object.keys(objB);

        if (keysA.length !== keysB.length) {
          return false;
        }

        // Test for A's keys different from B.
        var hasOwn = Object.prototype.hasOwnProperty;
        for (var i = 0; i < keysA.length; i++) {
          if (!hasOwn.call(objB, keysA[i]) || objA[keysA[i]] !== objB[keysA[i]]) {
            return false;
          }
        }

        return true;
      }
    });

    var require$$5 = shallowEqual && (typeof shallowEqual === "undefined" ? "undefined" : babelHelpers.typeof(shallowEqual)) === 'object' && 'default' in shallowEqual ? shallowEqual['default'] : shallowEqual;

    var storeShape = __commonjs(function (module, exports) {
      'use strict';

      exports.__esModule = true;

      var _react = React;

      exports["default"] = _react.PropTypes.shape({
        subscribe: _react.PropTypes.func.isRequired,
        dispatch: _react.PropTypes.func.isRequired,
        getState: _react.PropTypes.func.isRequired
      });
    });

    var require$$1$2 = storeShape && (typeof storeShape === 'undefined' ? 'undefined' : babelHelpers.typeof(storeShape)) === 'object' && 'default' in storeShape ? storeShape['default'] : storeShape;

    var connect$1 = __commonjs(function (module, exports) {
      'use strict';

      var _extends = Object.assign || function (target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }return target;
      };

      exports.__esModule = true;
      exports["default"] = connect;

      var _react = React;

      var _storeShape = require$$1$2;

      var _storeShape2 = _interopRequireDefault(_storeShape);

      var _shallowEqual = require$$5;

      var _shallowEqual2 = _interopRequireDefault(_shallowEqual);

      var _wrapActionCreators = require$$4;

      var _wrapActionCreators2 = _interopRequireDefault(_wrapActionCreators);

      var _warning = require$$0$3;

      var _warning2 = _interopRequireDefault(_warning);

      var _isPlainObject = require$$2;

      var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

      var _hoistNonReactStatics = require$$1;

      var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

      var _invariant = require$$0$1;

      var _invariant2 = _interopRequireDefault(_invariant);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { "default": obj };
      }

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      function _possibleConstructorReturn(self, call) {
        if (!self) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }return call && ((typeof call === 'undefined' ? 'undefined' : babelHelpers.typeof(call)) === "object" || typeof call === "function") ? call : self;
      }

      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : babelHelpers.typeof(superClass)));
        }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
      }

      var defaultMapStateToProps = function defaultMapStateToProps(state) {
        return {};
      }; // eslint-disable-line no-unused-vars
      var defaultMapDispatchToProps = function defaultMapDispatchToProps(dispatch) {
        return { dispatch: dispatch };
      };
      var defaultMergeProps = function defaultMergeProps(stateProps, dispatchProps, parentProps) {
        return _extends({}, parentProps, stateProps, dispatchProps);
      };

      function getDisplayName(WrappedComponent) {
        return WrappedComponent.displayName || WrappedComponent.name || 'Component';
      }

      var errorObject = { value: null };
      function tryCatch(fn, ctx) {
        try {
          return fn.apply(ctx);
        } catch (e) {
          errorObject.value = e;
          return errorObject;
        }
      }

      // Helps track hot reloading.
      var nextVersion = 0;

      function connect(mapStateToProps, mapDispatchToProps, mergeProps) {
        var options = arguments.length <= 3 || arguments[3] === undefined ? {} : arguments[3];

        var shouldSubscribe = Boolean(mapStateToProps);
        var mapState = mapStateToProps || defaultMapStateToProps;

        var mapDispatch = undefined;
        if (typeof mapDispatchToProps === 'function') {
          mapDispatch = mapDispatchToProps;
        } else if (!mapDispatchToProps) {
          mapDispatch = defaultMapDispatchToProps;
        } else {
          mapDispatch = (0, _wrapActionCreators2["default"])(mapDispatchToProps);
        }

        var finalMergeProps = mergeProps || defaultMergeProps;
        var _options$pure = options.pure;
        var pure = _options$pure === undefined ? true : _options$pure;
        var _options$withRef = options.withRef;
        var withRef = _options$withRef === undefined ? false : _options$withRef;

        var checkMergedEquals = pure && finalMergeProps !== defaultMergeProps;

        // Helps track hot reloading.
        var version = nextVersion++;

        return function wrapWithConnect(WrappedComponent) {
          var connectDisplayName = 'Connect(' + getDisplayName(WrappedComponent) + ')';

          function checkStateShape(props, methodName) {
            if (!(0, _isPlainObject2["default"])(props)) {
              (0, _warning2["default"])(methodName + '() in ' + connectDisplayName + ' must return a plain object. ' + ('Instead received ' + props + '.'));
            }
          }

          function computeMergedProps(stateProps, dispatchProps, parentProps) {
            var mergedProps = finalMergeProps(stateProps, dispatchProps, parentProps);
            if ("production" !== 'production') {}
            return mergedProps;
          }

          var Connect = function (_Component) {
            _inherits(Connect, _Component);

            Connect.prototype.shouldComponentUpdate = function shouldComponentUpdate() {
              return !pure || this.haveOwnPropsChanged || this.hasStoreStateChanged;
            };

            function Connect(props, context) {
              _classCallCheck(this, Connect);

              var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));

              _this.version = version;
              _this.store = props.store || context.store;

              (0, _invariant2["default"])(_this.store, 'Could not find "store" in either the context or ' + ('props of "' + connectDisplayName + '". ') + 'Either wrap the root component in a <Provider>, ' + ('or explicitly pass "store" as a prop to "' + connectDisplayName + '".'));

              var storeState = _this.store.getState();
              _this.state = { storeState: storeState };
              _this.clearCache();
              return _this;
            }

            Connect.prototype.computeStateProps = function computeStateProps(store, props) {
              if (!this.finalMapStateToProps) {
                return this.configureFinalMapState(store, props);
              }

              var state = store.getState();
              var stateProps = this.doStatePropsDependOnOwnProps ? this.finalMapStateToProps(state, props) : this.finalMapStateToProps(state);

              if ("production" !== 'production') {}
              return stateProps;
            };

            Connect.prototype.configureFinalMapState = function configureFinalMapState(store, props) {
              var mappedState = mapState(store.getState(), props);
              var isFactory = typeof mappedState === 'function';

              this.finalMapStateToProps = isFactory ? mappedState : mapState;
              this.doStatePropsDependOnOwnProps = this.finalMapStateToProps.length !== 1;

              if (isFactory) {
                return this.computeStateProps(store, props);
              }

              if ("production" !== 'production') {}
              return mappedState;
            };

            Connect.prototype.computeDispatchProps = function computeDispatchProps(store, props) {
              if (!this.finalMapDispatchToProps) {
                return this.configureFinalMapDispatch(store, props);
              }

              var dispatch = store.dispatch;

              var dispatchProps = this.doDispatchPropsDependOnOwnProps ? this.finalMapDispatchToProps(dispatch, props) : this.finalMapDispatchToProps(dispatch);

              if ("production" !== 'production') {}
              return dispatchProps;
            };

            Connect.prototype.configureFinalMapDispatch = function configureFinalMapDispatch(store, props) {
              var mappedDispatch = mapDispatch(store.dispatch, props);
              var isFactory = typeof mappedDispatch === 'function';

              this.finalMapDispatchToProps = isFactory ? mappedDispatch : mapDispatch;
              this.doDispatchPropsDependOnOwnProps = this.finalMapDispatchToProps.length !== 1;

              if (isFactory) {
                return this.computeDispatchProps(store, props);
              }

              if ("production" !== 'production') {}
              return mappedDispatch;
            };

            Connect.prototype.updateStatePropsIfNeeded = function updateStatePropsIfNeeded() {
              var nextStateProps = this.computeStateProps(this.store, this.props);
              if (this.stateProps && (0, _shallowEqual2["default"])(nextStateProps, this.stateProps)) {
                return false;
              }

              this.stateProps = nextStateProps;
              return true;
            };

            Connect.prototype.updateDispatchPropsIfNeeded = function updateDispatchPropsIfNeeded() {
              var nextDispatchProps = this.computeDispatchProps(this.store, this.props);
              if (this.dispatchProps && (0, _shallowEqual2["default"])(nextDispatchProps, this.dispatchProps)) {
                return false;
              }

              this.dispatchProps = nextDispatchProps;
              return true;
            };

            Connect.prototype.updateMergedPropsIfNeeded = function updateMergedPropsIfNeeded() {
              var nextMergedProps = computeMergedProps(this.stateProps, this.dispatchProps, this.props);
              if (this.mergedProps && checkMergedEquals && (0, _shallowEqual2["default"])(nextMergedProps, this.mergedProps)) {
                return false;
              }

              this.mergedProps = nextMergedProps;
              return true;
            };

            Connect.prototype.isSubscribed = function isSubscribed() {
              return typeof this.unsubscribe === 'function';
            };

            Connect.prototype.trySubscribe = function trySubscribe() {
              if (shouldSubscribe && !this.unsubscribe) {
                this.unsubscribe = this.store.subscribe(this.handleChange.bind(this));
                this.handleChange();
              }
            };

            Connect.prototype.tryUnsubscribe = function tryUnsubscribe() {
              if (this.unsubscribe) {
                this.unsubscribe();
                this.unsubscribe = null;
              }
            };

            Connect.prototype.componentDidMount = function componentDidMount() {
              this.trySubscribe();
            };

            Connect.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
              if (!pure || !(0, _shallowEqual2["default"])(nextProps, this.props)) {
                this.haveOwnPropsChanged = true;
              }
            };

            Connect.prototype.componentWillUnmount = function componentWillUnmount() {
              this.tryUnsubscribe();
              this.clearCache();
            };

            Connect.prototype.clearCache = function clearCache() {
              this.dispatchProps = null;
              this.stateProps = null;
              this.mergedProps = null;
              this.haveOwnPropsChanged = true;
              this.hasStoreStateChanged = true;
              this.haveStatePropsBeenPrecalculated = false;
              this.statePropsPrecalculationError = null;
              this.renderedElement = null;
              this.finalMapDispatchToProps = null;
              this.finalMapStateToProps = null;
            };

            Connect.prototype.handleChange = function handleChange() {
              if (!this.unsubscribe) {
                return;
              }

              var storeState = this.store.getState();
              var prevStoreState = this.state.storeState;
              if (pure && prevStoreState === storeState) {
                return;
              }

              if (pure && !this.doStatePropsDependOnOwnProps) {
                var haveStatePropsChanged = tryCatch(this.updateStatePropsIfNeeded, this);
                if (!haveStatePropsChanged) {
                  return;
                }
                if (haveStatePropsChanged === errorObject) {
                  this.statePropsPrecalculationError = errorObject.value;
                }
                this.haveStatePropsBeenPrecalculated = true;
              }

              this.hasStoreStateChanged = true;
              this.setState({ storeState: storeState });
            };

            Connect.prototype.getWrappedInstance = function getWrappedInstance() {
              (0, _invariant2["default"])(withRef, 'To access the wrapped instance, you need to specify ' + '{ withRef: true } as the fourth argument of the connect() call.');

              return this.refs.wrappedInstance;
            };

            Connect.prototype.render = function render() {
              var haveOwnPropsChanged = this.haveOwnPropsChanged;
              var hasStoreStateChanged = this.hasStoreStateChanged;
              var haveStatePropsBeenPrecalculated = this.haveStatePropsBeenPrecalculated;
              var statePropsPrecalculationError = this.statePropsPrecalculationError;
              var renderedElement = this.renderedElement;

              this.haveOwnPropsChanged = false;
              this.hasStoreStateChanged = false;
              this.haveStatePropsBeenPrecalculated = false;
              this.statePropsPrecalculationError = null;

              if (statePropsPrecalculationError) {
                throw statePropsPrecalculationError;
              }

              var shouldUpdateStateProps = true;
              var shouldUpdateDispatchProps = true;
              if (pure && renderedElement) {
                shouldUpdateStateProps = hasStoreStateChanged || haveOwnPropsChanged && this.doStatePropsDependOnOwnProps;
                shouldUpdateDispatchProps = haveOwnPropsChanged && this.doDispatchPropsDependOnOwnProps;
              }

              var haveStatePropsChanged = false;
              var haveDispatchPropsChanged = false;
              if (haveStatePropsBeenPrecalculated) {
                haveStatePropsChanged = true;
              } else if (shouldUpdateStateProps) {
                haveStatePropsChanged = this.updateStatePropsIfNeeded();
              }
              if (shouldUpdateDispatchProps) {
                haveDispatchPropsChanged = this.updateDispatchPropsIfNeeded();
              }

              var haveMergedPropsChanged = true;
              if (haveStatePropsChanged || haveDispatchPropsChanged || haveOwnPropsChanged) {
                haveMergedPropsChanged = this.updateMergedPropsIfNeeded();
              } else {
                haveMergedPropsChanged = false;
              }

              if (!haveMergedPropsChanged && renderedElement) {
                return renderedElement;
              }

              if (withRef) {
                this.renderedElement = (0, _react.createElement)(WrappedComponent, _extends({}, this.mergedProps, {
                  ref: 'wrappedInstance'
                }));
              } else {
                this.renderedElement = (0, _react.createElement)(WrappedComponent, this.mergedProps);
              }

              return this.renderedElement;
            };

            return Connect;
          }(_react.Component);

          Connect.displayName = connectDisplayName;
          Connect.WrappedComponent = WrappedComponent;
          Connect.contextTypes = {
            store: _storeShape2["default"]
          };
          Connect.propTypes = {
            store: _storeShape2["default"]
          };

          if ("production" !== 'production') {}

          return (0, _hoistNonReactStatics2["default"])(Connect, WrappedComponent);
        };
      }
    });

    var require$$0 = connect$1 && (typeof connect$1 === 'undefined' ? 'undefined' : babelHelpers.typeof(connect$1)) === 'object' && 'default' in connect$1 ? connect$1['default'] : connect$1;

    var Provider$1 = __commonjs(function (module, exports) {
      'use strict';

      exports.__esModule = true;
      exports["default"] = undefined;

      var _react = React;

      var _storeShape = require$$1$2;

      var _storeShape2 = _interopRequireDefault(_storeShape);

      var _warning = require$$0$3;

      var _warning2 = _interopRequireDefault(_warning);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { "default": obj };
      }

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      function _possibleConstructorReturn(self, call) {
        if (!self) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }return call && ((typeof call === 'undefined' ? 'undefined' : babelHelpers.typeof(call)) === "object" || typeof call === "function") ? call : self;
      }

      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : babelHelpers.typeof(superClass)));
        }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
      }

      var didWarnAboutReceivingStore = false;
      function warnAboutReceivingStore() {
        if (didWarnAboutReceivingStore) {
          return;
        }
        didWarnAboutReceivingStore = true;

        (0, _warning2["default"])('<Provider> does not support changing `store` on the fly. ' + 'It is most likely that you see this error because you updated to ' + 'Redux 2.x and React Redux 2.x which no longer hot reload reducers ' + 'automatically. See https://github.com/reactjs/react-redux/releases/' + 'tag/v2.0.0 for the migration instructions.');
      }

      var Provider = function (_Component) {
        _inherits(Provider, _Component);

        Provider.prototype.getChildContext = function getChildContext() {
          return { store: this.store };
        };

        function Provider(props, context) {
          _classCallCheck(this, Provider);

          var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));

          _this.store = props.store;
          return _this;
        }

        Provider.prototype.render = function render() {
          var children = this.props.children;

          return _react.Children.only(children);
        };

        return Provider;
      }(_react.Component);

      exports["default"] = Provider;

      if ("production" !== 'production') {}

      Provider.propTypes = {
        store: _storeShape2["default"].isRequired,
        children: _react.PropTypes.element.isRequired
      };
      Provider.childContextTypes = {
        store: _storeShape2["default"].isRequired
      };
    });

    var require$$1$3 = Provider$1 && (typeof Provider$1 === 'undefined' ? 'undefined' : babelHelpers.typeof(Provider$1)) === 'object' && 'default' in Provider$1 ? Provider$1['default'] : Provider$1;

    var index = __commonjs(function (module, exports) {
      'use strict';

      exports.__esModule = true;
      exports.connect = exports.Provider = undefined;

      var _Provider = require$$1$3;

      var _Provider2 = _interopRequireDefault(_Provider);

      var _connect = require$$0;

      var _connect2 = _interopRequireDefault(_connect);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { "default": obj };
      }

      exports.Provider = _Provider2["default"];
      exports.connect = _connect2["default"];
    });

    index && (typeof index === 'undefined' ? 'undefined' : babelHelpers.typeof(index)) === 'object' && 'default' in index ? index['default'] : index;
    var connect = index.connect;
    var Provider = index.Provider;

    var LOG_DATA = 'LOG_DATA';
    var NEW_PROMPT = 'NEW_PROMPT';

    // Action Creator: Logs assessment results
    function logData(score, k) {
      return {
        type: LOG_DATA,
        k: k,
        score: score,
        time: Date.now()
      };
    }

    // Action Creator: Generates a new prompt string and resets the app
    function newPrompt(length) {
      // Randomly generate new prompt of given length
      var prompt = Array.apply(null, { length: length }).map(function () {
        return Math.random() < 0.4 ? String.fromCharCode(Math.floor(Math.random() * 10) + 48) : String.fromCharCode(Math.floor(Math.random() * 26) + 65);
      }).join('');

      return {
        type: NEW_PROMPT,
        prompt: prompt
      };
    }

    // Compare prompt and response to derive score
    function recordScore(prompt, responseStr) {
      var res = responseStr.toUpperCase().split('');
      // eslint-disable-next-line prefer-const
      var score = prompt.split('').slice();
      // Score correct letter, correct placement
      res.forEach(function (char, i) {
        if (char === score[i]) {
          score[i] = res[i] = 2;
        }
      });

      // Score correct letter, incorrect placement
      res.forEach(function (char) {
        if (typeof char === 'number') return;
        if (score.indexOf(char) !== -1) {
          score[score.indexOf(char)] = 1;
        }
      });

      // Score incorrect letter
      return score.map(function (char) {
        return typeof char === 'string' ? 0 : char;
      });
    }

    // Derive k value from score array and last reintroduction time
    function deriveK(scoreArr, lastReintro) {
      var score = scoreArr.reduce(function (sum, char) {
        return sum + char / (scoreArr.length * 2);
      }, 0);
      if (score === 1) {
        score = (scoreArr.length * 2 - 1) / (scoreArr.length * 2);
      } else if (score === 0) {
        score = 1 / (scoreArr.length * 2);
      }
      return Math.abs(Math.log(score) / ((Date.now() - lastReintro) / 1000));
    }

    function defaultEqualityCheck(a, b) {
      return a === b;
    }

    function defaultMemoize(func) {
      var equalityCheck = arguments.length <= 1 || arguments[1] === undefined ? defaultEqualityCheck : arguments[1];

      var lastArgs = null;
      var lastResult = null;
      return function () {
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        if (lastArgs !== null && lastArgs.length === args.length && args.every(function (value, index) {
          return equalityCheck(value, lastArgs[index]);
        })) {
          return lastResult;
        }
        lastArgs = args;
        lastResult = func.apply(undefined, args);
        return lastResult;
      };
    }

    function getDependencies(funcs) {
      var dependencies = Array.isArray(funcs[0]) ? funcs[0] : funcs;

      if (!dependencies.every(function (dep) {
        return typeof dep === 'function';
      })) {
        var dependencyTypes = dependencies.map(function (dep) {
          return typeof dep === 'undefined' ? 'undefined' : babelHelpers.typeof(dep);
        }).join(', ');
        throw new Error('Selector creators expect all input-selectors to be functions, ' + ('instead received the following types: [' + dependencyTypes + ']'));
      }

      return dependencies;
    }

    function createSelectorCreator(memoize) {
      for (var _len2 = arguments.length, memoizeOptions = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        memoizeOptions[_key2 - 1] = arguments[_key2];
      }

      return function () {
        for (var _len3 = arguments.length, funcs = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
          funcs[_key3] = arguments[_key3];
        }

        var recomputations = 0;
        var resultFunc = funcs.pop();
        var dependencies = getDependencies(funcs);

        var memoizedResultFunc = memoize.apply(undefined, [function () {
          recomputations++;
          return resultFunc.apply(undefined, arguments);
        }].concat(memoizeOptions));

        var selector = function selector(state, props) {
          for (var _len4 = arguments.length, args = Array(_len4 > 2 ? _len4 - 2 : 0), _key4 = 2; _key4 < _len4; _key4++) {
            args[_key4 - 2] = arguments[_key4];
          }

          var params = dependencies.map(function (dependency) {
            return dependency.apply(undefined, [state, props].concat(args));
          });
          return memoizedResultFunc.apply(undefined, babelHelpers.toConsumableArray(params));
        };

        selector.resultFunc = resultFunc;
        selector.recomputations = function () {
          return recomputations;
        };
        selector.resetRecomputations = function () {
          return recomputations = 0;
        };
        return selector;
      };
    }

    function createSelector() {
      return createSelectorCreator(defaultMemoize).apply(undefined, arguments);
    }

    var RECALL_THRESHOLD = 0.85;

    /*
     * Data Reducer
     *
     * state is an Immutable.List of coefficients from previous forgetting curves
     *
     */
    function dataReducer(state, action) {
      switch (action.type) {
        case NEW_PROMPT:
          return state.clear();
        case LOG_DATA:
          return state.push(action.k);
        default:
          return state;
      }
    }

    var dataSelector = function dataSelector(state) {
      return state.get('data');
    };

    // Selector: Derives the decay model equation
    var kStarSelector = createSelector(dataSelector, function (data) {
      // Return null if data is too small to manipulate
      if (data.size < 2) return null;

      // Convert data List to array of log transformed coefficients
      var lnKArray = data.toArray().map(function (k) {
        return Math.log(k);
      });

      // Calculate helper summations
      var n = lnKArray.length;
      var sumN = n * (n + 1) / 2;
      var sumN2 = n * (n + 1) * (2 * n + 1) / 6;
      var sumLNK = lnKArray.reduce(function (sum, lnK) {
        return sum + lnK;
      }, 0);
      var sumLNK2 = lnKArray.reduce(function (sum, lnK) {
        return sum + lnK * lnK;
      }, 0);
      var sumNLNK = lnKArray.reduce(function (sum, lnK, index) {
        return sum + lnK * (index + 1);
      }, 0);

      // Calculate components of Pearson coefficient for a population
      var meanN = sumN / n;
      var meanLNK = sumLNK / n;
      var meanNLNK = sumNLNK / n;
      var meanN2 = sumN2 / n;
      var meanLNK2 = sumLNK2 / n;
      var sdN = Math.sqrt(meanN2 - meanN * meanN);
      var sdLNK = Math.sqrt(meanLNK2 - meanLNK * meanLNK);
      var covariance = meanNLNK - meanN * meanLNK;

      var rho = covariance / (sdN * sdLNK); // Pearson correlation coefficient
      var m = covariance / (sdN * sdN); // Slope of the log-linear regression line
      var b = meanLNK - m * meanN; // Intercept of the log-linear regression line

      // Produces equation k* = e^(m*n + b) where n is the number of assessments completed
      return {
        slope: m,
        intercept: b,
        r: rho
      };
    });

    // Selector: Derives the re-introduction delay (in seconds)
    var delaySelector = createSelector(kStarSelector, dataSelector, function (kStar, data) {
      var k = void 0; // Predicted coefficient of new forgetting curve

      // Define predicted value for k
      // Return naive estimate if data is too small
      if (kStar === null) {
        if (data.size === 0) return 5;
        if (data.size === 1) {
          k = data.get(0) / 2;
        }
      } else {
        k = Math.exp(kStar.slope * (data.size + 1) + kStar.intercept);
      }

      return Math.floor(Math.abs(Math.log(RECALL_THRESHOLD) / k));
    });

    var CHANGE_TAB = 'CHANGE_TAB';
    var TOGGLE_MODAL = 'TOGGLE_MODAL';

    /*
     * Display Reducer
     *
     * state has the following properties:
     * @tab: The index of the currently visible view container
     * @modal: A boolean defining modal visibility
     *
     */
    function displayReducer(state, action) {
      switch (action.type) {
        case NEW_PROMPT:
          return state.set('modal', false);
        case CHANGE_TAB:
          return state.set('tab', action.tab);
        case TOGGLE_MODAL:
          return state.set('modal', !state.get('modal'));
        default:
          return state;
      }
    }

    // Action Creator: Changes currently visible view container
    function changeTab(tab) {
      return {
        type: CHANGE_TAB,
        tab: tab
      };
    }

    // Action Creator: Toggles New Prompt modal visibility
    function toggleModal() {
      return { type: TOGGLE_MODAL };
    }

    var READY_PROMPT = 'READY_PROMPT';
    var NEXT_PRACTICE = 'NEXT_PRACTICE';

    /*
     * Assessment Reducer
     *
     * state has the following properties:
     * @prompt: The randomly generated alphanumeric string used in the assessment
     * @lastReintroduced: Most recent time (in milliseconds) that the assessment was completed
     * @view: String defining the current configuration of the assessment view
     *     ['practice', 'practice2', 'wait', 'prompt', 'score']
     *
     */
    function assessmentReducer(state, action) {
      switch (action.type) {
        case NEW_PROMPT:
          return state.withMutations(function (oldState) {
            oldState.set('prompt', action.prompt).set('lastReintroduced', null).set('view', 'practice');
          });
        case NEXT_PRACTICE:
          return state.withMutations(function (oldState) {
            oldState.set('lastReintroduced', action.time).set('view', action.view);
          });
        case READY_PROMPT:
          return state.set('view', 'prompt');
        case LOG_DATA:
          return state.set('view', 'score');
        default:
          return state;
      }
    }

    // Action Creator: Signals view transitions to and from the practice views
    function nextPractice(currentView) {
      var newView = '';
      switch (currentView) {
        case 'practice':
          newView = 'practice2';
          break;
        case 'practice2':
          newView = 'wait';
          break;
        case 'score':
          newView = 'practice';
          break;
        default:
      }

      return {
        type: NEXT_PRACTICE,
        view: newView,
        time: Date.now()
      };
    }

    // Action Creator: Sets timer for view transition to unassisted prompt
    function setTimerForPrompt(delay) {
      return {
        type: READY_PROMPT,
        meta: {
          delay: delay
        }
      };
    }

    var CHANGE_INDEX = 'CHANGE_INDEX';

    /*
     * History Reducer
     *
     * state has the following properties:
     * @scores: Immutable.List of previous assessment results
     * @index: The index of the score being viewed, negative values represent the aggregate view
     *
     */
    function historyReducer(state, action) {
      switch (action.type) {
        case NEW_PROMPT:
          return state.withMutations(function (oldState) {
            oldState.set('scores', Immutable.List()) // eslint-disable-line new-cap
            .set('index', 0);
          });
        case LOG_DATA:
          return state.update('scores', function (scores) {
            return scores.push(action.score);
          });
        case CHANGE_INDEX:
          return state.set('index', action.index);
        default:
          return state;
      }
    }

    // Action Creator: Changes index for viewable score data
    function changeIndex(index) {
      return {
        type: CHANGE_INDEX,
        index: index
      };
    }

    var scoresSelector = function scoresSelector(state) {
      return state.get('history').get('scores');
    };

    // Selector: Returns relative frequency of correct answers for each character in the prompt
    var aggregateSelector = createSelector(scoresSelector, function (scoresArr) {
      return scoresArr.toArray().reduce(function (aggArr, scores, index) {
        if (index === 0) return scores.map(function (score) {
          return score / (scoresArr.size * 2);
        });
        return aggArr.map(function (agg, i) {
          return agg + scores[i] / (scoresArr.size * 2);
        });
      }, null);
    });

    /*
     * Root Reducer
     *
     * state has the following properties:
     * @data: Data from the assessment used in decay modelling
     * @display: Miscellaneous state for managing the view
     * @assessment: State for the assessment view
     * @history: Scoring history from the assessment and state for managing the history view
     *
     */
    function rootReducer(state, action) {
      return state.withMutations(function (oldState) {
        oldState.set('data', dataReducer(oldState.get('data'), action)).set('display', displayReducer(oldState.get('display'), action)).set('assessment', assessmentReducer(oldState.get('assessment'), action)).set('history', historyReducer(oldState.get('history'), action));
      });
    }

    var Timer = function (_React$Component) {
      babelHelpers.inherits(Timer, _React$Component);

      function Timer(props) {
        babelHelpers.classCallCheck(this, Timer);

        var _this = babelHelpers.possibleConstructorReturn(this, Object.getPrototypeOf(Timer).call(this, props));

        _this.changeTime = _this.changeTime.bind(_this);
        return _this;
      }

      babelHelpers.createClass(Timer, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
          // Set timer if app is reloaded in waiting view
          if (this.props.view === 'wait') {
            this.cancelTimer = this.props.setTimer(this.props.delay - Math.floor((Date.now() - this.props.lastReintro) / 1000));
          }

          // Initialize timer render loop
          requestAnimationFrame(this.changeTime);
        }
      }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
          // Cancels prompt timer if new prompt is generated
          if (this.cancelTimer && this.props.prompt !== nextProps.prompt) {
            this.cancelTimer();
          }

          // Set timer when app transitions to the waiting view
          if (this.props.view !== 'wait' && nextProps.view === 'wait') {
            this.cancelTimer = this.props.setTimer(this.props.delay);
          }
        }

        // Uses ref to display derived 'Time Remaining' state

      }, {
        key: 'changeTime',
        value: function changeTime() {
          this.timer.textContent = this.props.view === 'wait' ? this.timeToText(this.props.delay, this.props.lastReintro) : '00:00:00';

          requestAnimationFrame(this.changeTime);
        }

        // Returns time left as text to be displayed

      }, {
        key: 'timeToText',
        value: function timeToText(delay, lastReintro) {
          if (lastReintro === null) return '00:00:00';

          // Calculate time left in seconds
          var now = Date.now();
          var timePassedMS = now - lastReintro;
          var timeLeftS = delay - Math.floor(timePassedMS / 1000);
          timeLeftS = timeLeftS <= 0 ? 0 : timeLeftS;

          // Return simplified display if time left is too long
          var daysLeft = Math.floor(timeLeftS / 86400);
          if (daysLeft > 1) return daysLeft + ' days';

          var hoursLeft = Math.floor(timeLeftS / 3600);
          var minsLeft = Math.floor(timeLeftS % 3600 / 60);
          var secsLeft = timeLeftS % 3600 % 60;

          /* eslint-disable prefer-template */
          return (hoursLeft < 10 ? '0' + hoursLeft : hoursLeft) + ':' + (minsLeft < 10 ? '0' + minsLeft : minsLeft) + ':' + (secsLeft < 10 ? '0' + secsLeft : secsLeft);
          /* eslint-enable */
        }
      }, {
        key: 'render',
        value: function render() {
          var _this2 = this;

          return React.createElement(
            'div',
            { className: 'timer', ref: function ref(e) {
                _this2.timer = e;
              } },
            this.props.view === 'wait' ? this.timeToText(this.props.delay, this.props.lastReintro) : '00:00:00'
          );
        }
      }]);
      return Timer;
    }(React.Component);

    Timer.propTypes = {
      delay: React.PropTypes.number.isRequired,
      lastReintro: React.PropTypes.number,
      view: React.PropTypes.string.isRequired,
      prompt: React.PropTypes.string.isRequired,
      setTimer: React.PropTypes.func.isRequired
    };

    function mapStateToProps$1(state) {
      return {
        delay: delaySelector(state),
        lastReintro: state.get('assessment').get('lastReintroduced'),
        view: state.get('assessment').get('view'),
        prompt: state.get('assessment').get('prompt')
      };
    }

    function mapDispatchToProps$1(dispatch) {
      return {
        setTimer: Redux.bindActionCreators(setTimerForPrompt, dispatch)
      };
    }

    var Timer$1 = connect(mapStateToProps$1, mapDispatchToProps$1)(Timer);

    var Tab = function Tab(props) {
      return React.createElement(
        'span',
        { className: props.tab === props.index ? 'tab selected' : 'tab',
          onClick: function onClick() {
            return props.onTabSelect(props.index);
          }
        },
        props.children
      );
    };

    Tab.propTypes = {
      children: React.PropTypes.node.isRequired,
      tab: React.PropTypes.number.isRequired,
      index: React.PropTypes.number.isRequired,
      onTabSelect: React.PropTypes.func.isRequired
    };

    var mapStateToProps$2 = function mapStateToProps(state) {
      return {
        tab: state.get('display').get('tab')
      };
    };

    var mapDispatchToProps$2 = function mapDispatchToProps(dispatch) {
      return {
        onTabSelect: Redux.bindActionCreators(changeTab, dispatch)
      };
    };

    var Tab$1 = connect(mapStateToProps$2, mapDispatchToProps$2)(Tab);

    var TabNavigator = function TabNavigator() {
      return React.createElement(
        'nav',
        null,
        React.createElement(
          Tab$1,
          { index: 0 },
          'Assessment'
        ),
        React.createElement(
          Tab$1,
          { index: 1 },
          'Data'
        ),
        React.createElement(
          Tab$1,
          { index: 2 },
          'History'
        )
      );
    };

    var Header = function Header() {
      return React.createElement(
        'header',
        null,
        React.createElement(Timer$1, null),
        React.createElement(TabNavigator, null)
      );
    };

    var PromptInfo = function (_React$Component) {
      babelHelpers.inherits(PromptInfo, _React$Component);

      function PromptInfo() {
        babelHelpers.classCallCheck(this, PromptInfo);
        return babelHelpers.possibleConstructorReturn(this, Object.getPrototypeOf(PromptInfo).apply(this, arguments));
      }

      babelHelpers.createClass(PromptInfo, [{
        key: 'calcScore',
        value: function calcScore(scoreArray) {
          return Math.ceil(scoreArray.reduce(function (score, charScore) {
            return score + charScore / (scoreArray.length * 2);
          }, 0) * 100);
        }
      }, {
        key: 'render',
        value: function render() {
          switch (this.props.view) {
            case 'practice':
              return React.createElement(
                'h1',
                { className: 'prompt-info' },
                'Input the given series of characters (case does not matter) and press Submit.'
              );
            case 'practice2':
              return React.createElement(
                'h1',
                { className: 'prompt-info' },
                'Please re-type the given series of characters and press Submit.'
              );
            case 'wait':
              return React.createElement(
                'h1',
                { className: 'prompt-info' },
                'Please wait for the next recall attempt...'
              );
            case 'prompt':
              return React.createElement(
                'h1',
                { className: 'prompt-info' },
                'Enter the series of characters from memory. Partial credit is given for including a correct character in the incorrect order.'
              );
            case 'score':
              return React.createElement(
                'h1',
                { className: 'prompt-info' },
                'Your score is ' + this.calcScore(this.props.score) + '%. Press Submit to continue.'
              );
            default:
          }
          return React.createElement(
            'h1',
            { className: 'prompt-info' },
            'Input the given series of characters (case does not matter) and press Submit.'
          );
        }
      }]);
      return PromptInfo;
    }(React.Component);

    PromptInfo.propTypes = {
      view: React.PropTypes.string.isRequired,
      score: React.PropTypes.array
    };

    var PromptString = function PromptString(props) {
      return React.createElement(
        'div',
        { className: 'prompt-string' },
        props.prompt.split('').map(function (char, i) {
          return React.createElement(
            'span',
            { key: 'char-' + i,
              className: props.view === 'score' ? 'prompt-char score-' + props.score[i] : 'prompt-char'
            },
            char
          );
        })
      );
    };

    PromptString.propTypes = {
      prompt: React.PropTypes.string.isRequired,
      view: React.PropTypes.string.isRequired,
      score: React.PropTypes.array
    };

    var PromptInput = function (_React$Component) {
      babelHelpers.inherits(PromptInput, _React$Component);

      function PromptInput(props) {
        babelHelpers.classCallCheck(this, PromptInput);

        var _this = babelHelpers.possibleConstructorReturn(this, Object.getPrototypeOf(PromptInput).call(this, props));

        _this.validateInput = _this.validateInput.bind(_this);
        _this.getData = _this.getData.bind(_this);
        _this.submitInput = _this.submitInput.bind(_this);
        _this.autoFill = _this.autoFill.bind(_this);
        return _this;
      }

      // Clear input field on view transitions
      // Empty autofill field if prompt changes


      babelHelpers.createClass(PromptInput, [{
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps) {
          this.input.value = this.props.view !== prevProps.view ? '' : this.input.value;
          if (prevProps.prompt !== this.props.prompt && prevProps.prompt !== 'practice') {
            this.fakeInput.value = '';
          } else {
            this.autoFill();
          }
        }

        // Return score and k value as an array

      }, {
        key: 'getData',
        value: function getData() {
          var score = recordScore(this.props.prompt, this.input.value);
          return [score, deriveK(score, this.props.lastReintro)];
        }

        // Submits input value when the Enter key is hit

      }, {
        key: 'submitInput',
        value: function submitInput(event) {
          if (event.keyCode === 13) {
            this.validateInput();
          }
        }

        // Fills input with prompt hinting

      }, {
        key: 'autoFill',
        value: function autoFill() {
          var _this2 = this;

          if (this.props.view === 'prompt' || this.props.view === 'score') {
            this.fakeInput.value = '';
            if (this.props.view === 'score') {
              this.input.value = '';
            }
            return;
          }
          this.fakeInput.value = this.props.prompt.split('').map(function (char, i) {
            if (i < _this2.input.value.length) return ' ';
            return char;
          }).join('');
        }

        // Validates input and dispatches actions

      }, {
        key: 'validateInput',
        value: function validateInput() {
          this.err.textContent = '';
          switch (this.props.view) {
            case 'practice':
            case 'practice2':
              if (this.input.value.toUpperCase() === this.props.prompt) {
                this.props.nextPractice(this.props.view);
              } else {
                this.err.textContent = 'One or more characters are incorrect';
              }
              break;
            case 'prompt':
              if (this.input.value < this.props.prompt.length) {
                this.err.textContent = 'Input must be ' + this.props.prompt.length + ' characters long.';
              } else {
                this.props.logData.apply(null, this.getData());
              }
              break;
            case 'score':
              this.props.nextPractice(this.props.view);
              break;
            default:
          }
        }
      }, {
        key: 'render',
        value: function render() {
          var _this3 = this;

          return React.createElement(
            'div',
            { className: 'prompt-input' },
            React.createElement('input', { className: 'real',
              ref: function ref(e) {
                _this3.input = e;
              },
              type: 'text',
              maxLength: this.props.prompt.length,
              autoComplete: 'off',
              onKeyDown: this.submitInput,
              onChange: this.autoFill,
              onFocus: this.autoFill
            }),
            React.createElement(
              'button',
              { className: 'real', onClick: this.validateInput },
              'Submit'
            ),
            React.createElement('div', { ref: function ref(e) {
                _this3.err = e;
              }, className: 'prompt-error' }),
            React.createElement(
              'div',
              { className: 'prompt-input fake' },
              React.createElement('input', { ref: function ref(e) {
                  _this3.fakeInput = e;
                }, readOnly: true }),
              React.createElement(
                'button',
                { disabled: true },
                'Submit'
              )
            )
          );
        }
      }]);
      return PromptInput;
    }(React.Component);

    PromptInput.propTypes = {
      prompt: React.PropTypes.string.isRequired,
      lastReintro: React.PropTypes.number,
      view: React.PropTypes.string.isRequired,
      logData: React.PropTypes.func.isRequired,
      nextPractice: React.PropTypes.func.isRequired
    };

    var Prompt = function Prompt(props) {
      return React.createElement(
        'div',
        { className: 'prompt-main ' + props.view },
        React.createElement(PromptInfo, { view: props.view, score: props.score }),
        React.createElement(PromptString, { prompt: props.prompt, view: props.view, score: props.score }),
        React.createElement(PromptInput, { prompt: props.prompt,
          lastReintro: props.lastReintro,
          view: props.view,
          logData: props.logData,
          nextPractice: props.nextPractice
        })
      );
    };

    Prompt.propTypes = {
      prompt: React.PropTypes.string.isRequired,
      lastReintro: React.PropTypes.number,
      view: React.PropTypes.string.isRequired,
      score: React.PropTypes.array,
      delay: React.PropTypes.number.isRequired,
      logData: React.PropTypes.func.isRequired,
      nextPractice: React.PropTypes.func.isRequired,
      setTimerForPrompt: React.PropTypes.func.isRequired
    };

    var mapStateToProps$3 = function mapStateToProps(state) {
      return {
        prompt: state.get('assessment').get('prompt'),
        lastReintro: state.get('assessment').get('lastReintroduced'),
        view: state.get('assessment').get('view'),
        score: state.get('history').get('scores').last(),
        delay: delaySelector(state)
      };
    };

    var mapDispatchToProps$3 = function mapDispatchToProps(dispatch) {
      return Redux.bindActionCreators({ logData: logData, nextPractice: nextPractice, setTimerForPrompt: setTimerForPrompt }, dispatch);
    };

    var Prompt$1 = connect(mapStateToProps$3, mapDispatchToProps$3)(Prompt);

    var ModalToggle = function ModalToggle(props) {
      return React.createElement(
        'div',
        { className: 'modal-toggle' },
        React.createElement(
          'span',
          { onClick: function onClick() {
              return props.toggleModal();
            } },
          'New Prompt'
        )
      );
    };

    ModalToggle.propTypes = {
      toggleModal: React.PropTypes.func.isRequired
    };

    function mapDispatchToProps$4(dispatch) {
      return {
        toggleModal: Redux.bindActionCreators(toggleModal, dispatch)
      };
    }

    var ModalToggle$1 = connect(null, mapDispatchToProps$4)(ModalToggle);

    var Assessment = function Assessment() {
      return React.createElement(
        'div',
        { className: 'content assessment' },
        React.createElement(Prompt$1, null),
        React.createElement(ModalToggle$1, null)
      );
    };

    var Data = function Data() {
      return React.createElement(
        "div",
        { className: "content data" },
        "Data"
      );
    };

    var HistoryNav = function (_React$Component) {
      babelHelpers.inherits(HistoryNav, _React$Component);

      function HistoryNav(props) {
        babelHelpers.classCallCheck(this, HistoryNav);

        var _this = babelHelpers.possibleConstructorReturn(this, Object.getPrototypeOf(HistoryNav).call(this, props));

        _this.navIndex = _this.navIndex.bind(_this);
        return _this;
      }

      babelHelpers.createClass(HistoryNav, [{
        key: 'navIndex',
        value: function navIndex(loc) {
          if (this.props.scores.size === 0) return;
          switch (loc) {
            case 'left':
              if (this.props.index <= 0) return;
              this.props.changeIndex(this.props.index - 1);
              break;
            case 'history':
              this.props.changeIndex(this.props.scores.size - 1);
              break;
            case 'agg':
              this.props.changeIndex(-1);
              break;
            case 'right':
              if (this.props.index < this.props.scores.size - 1 && this.props.index >= 0) {
                this.props.changeIndex(this.props.index + 1);
              }
              break;
            default:
          }
        }
      }, {
        key: 'render',
        value: function render() {
          var _this2 = this;

          return React.createElement(
            'div',
            { className: 'history-nav' },
            React.createElement(
              'button',
              { className: 'nav-left', onClick: function onClick() {
                  return _this2.navIndex('left');
                } },
              '◄'
            ),
            React.createElement(
              'button',
              { className: this.props.index < 0 ? 'nav-history' : 'nav-history selected',
                onClick: function onClick() {
                  return _this2.navIndex('history');
                }
              },
              'Score History'
            ),
            React.createElement(
              'button',
              { className: this.props.index < 0 ? 'nav-agg selected' : 'nav-agg',
                onClick: function onClick() {
                  return _this2.navIndex('agg');
                }
              },
              'Aggregate Score'
            ),
            React.createElement(
              'button',
              { className: 'nav-right', onClick: function onClick() {
                  return _this2.navIndex('right');
                } },
              '►'
            )
          );
        }
      }]);
      return HistoryNav;
    }(React.Component);

    HistoryNav.propTypes = {
      index: React.PropTypes.number.isRequired,
      scores: React.PropTypes.object,
      changeIndex: React.PropTypes.func.isRequired
    };

    var HistoryVis = function HistoryVis(props) {
      if (props.scores.size === 0) {
        return React.createElement(
          'div',
          { className: 'prompt-string empty' },
          props.prompt.split('').map(function (char, i) {
            return React.createElement(
              'span',
              { key: 'char-' + i, className: 'prompt-char' },
              char
            );
          })
        );
      }
      return React.createElement(
        'div',
        { className: 'prompt-string' },
        props.index < 0 ? props.scoreAgg.map(function (freq, i) {
          return React.createElement(
            'span',
            { key: 'char-' + i,
              className: 'prompt-char',
              style: { backgroundColor: 'hsl(' + (360 - Math.floor(freq * 240)) + ', 100%, 70%)' }
            },
            props.prompt[i]
          );
        }) : props.scores.get(props.index).map(function (score, i) {
          return React.createElement(
            'span',
            { key: 'char-' + i, className: 'prompt-char score-' + score },
            props.prompt[i]
          );
        })
      );
    };

    HistoryVis.propTypes = {
      index: React.PropTypes.number.isRequired,
      scores: React.PropTypes.object,
      scoreAgg: React.PropTypes.array,
      prompt: React.PropTypes.string.isRequired
    };

    var History = function History(props) {
      return React.createElement(
        'div',
        { className: 'content history' },
        React.createElement(
          'div',
          { className: 'prompt-main' },
          React.createElement(HistoryNav, { index: props.index,
            scores: props.scores,
            changeIndex: props.changeIndex
          }),
          React.createElement(HistoryVis, { index: props.index,
            scores: props.scores,
            scoreAgg: props.scoreAgg,
            prompt: props.prompt
          })
        )
      );
    };

    History.propTypes = {
      index: React.PropTypes.number.isRequired,
      scores: React.PropTypes.object.isRequired,
      scoreAgg: React.PropTypes.array,
      prompt: React.PropTypes.string.isRequired,
      changeIndex: React.PropTypes.func.isRequired
    };

    function mapStateToProps$4(state) {
      return {
        index: state.get('history').get('index'),
        scores: state.get('history').get('scores'),
        scoreAgg: aggregateSelector(state),
        prompt: state.get('assessment').get('prompt')
      };
    }

    function mapDispatchToProps$5(dispatch) {
      return {
        changeIndex: Redux.bindActionCreators(changeIndex, dispatch)
      };
    }

    var History$1 = connect(mapStateToProps$4, mapDispatchToProps$5)(History);

    var TabbedWindow = function TabbedWindow(props) {
      if (props.tab === 1) return React.createElement(Data, null);
      if (props.tab === 2) return React.createElement(History$1, null);
      return React.createElement(Assessment, null);
    };

    TabbedWindow.propTypes = {
      tab: React.PropTypes.number.isRequired
    };

    var Modal = function (_React$Component) {
      babelHelpers.inherits(Modal, _React$Component);

      function Modal(props) {
        babelHelpers.classCallCheck(this, Modal);

        var _this = babelHelpers.possibleConstructorReturn(this, Object.getPrototypeOf(Modal).call(this, props));

        _this.onNew = _this.onNew.bind(_this);
        return _this;
      }

      // Resets radio buttons when modal is opened


      babelHelpers.createClass(Modal, [{
        key: 'componentWillUpdate',
        value: function componentWillUpdate(newProps) {
          if (newProps.modal && !this.props.modal) {
            var option = this.radioDiv.querySelector('input:checked');
            if (option) option.checked = false;
          }
        }
      }, {
        key: 'onNew',
        value: function onNew() {
          this.props.newPrompt(Number(this.radioDiv.querySelector('input:checked').value));
        }
      }, {
        key: 'render',
        value: function render() {
          var _this2 = this;

          return React.createElement(
            'div',
            { className: this.props.modal ? 'modal-container' : 'modal-container hidden' },
            React.createElement(
              'div',
              { className: 'modal' },
              React.createElement(
                'h2',
                { className: 'modal-info' },
                'Choose a character length for the new prompt'
              ),
              React.createElement(
                'div',
                { ref: function ref(e) {
                    _this2.radioDiv = e;
                  }, className: 'modal-options' },
                React.createElement('input', { id: 'short', type: 'radio', name: 'length', value: '12' }),
                React.createElement(
                  'label',
                  { htmlFor: 'short' },
                  'Short'
                ),
                React.createElement('br', null),
                React.createElement('input', { id: 'med', type: 'radio', name: 'length', value: '16' }),
                React.createElement(
                  'label',
                  { htmlFor: 'med' },
                  'Medium'
                ),
                React.createElement('br', null),
                React.createElement('input', { id: 'long', type: 'radio', name: 'length', value: '20' }),
                React.createElement(
                  'label',
                  { htmlFor: 'long' },
                  'Long'
                )
              ),
              React.createElement(
                'div',
                { className: 'modal-buttons' },
                React.createElement(
                  'button',
                  { className: 'new', onClick: this.onNew },
                  'New Prompt'
                ),
                React.createElement(
                  'button',
                  { className: 'toggle', onClick: this.props.onToggle },
                  'Cancel'
                )
              ),
              React.createElement(
                'div',
                { className: 'modal-warning' },
                'Warning: Generating a new prompt will delete all current data.'
              )
            )
          );
        }
      }]);
      return Modal;
    }(React.Component);

    Modal.propTypes = {
      modal: React.PropTypes.bool.isRequired,
      onToggle: React.PropTypes.func.isRequired,
      newPrompt: React.PropTypes.func.isRequired
    };

    var App = function App(props) {
      return React.createElement(
        'div',
        { className: 'container' },
        React.createElement(Header, null),
        React.createElement(TabbedWindow, { tab: props.tab, view: props.view }),
        React.createElement(Modal, { modal: props.modal, onToggle: props.toggleModal, newPrompt: props.newPrompt })
      );
    };

    App.propTypes = {
      tab: React.PropTypes.number.isRequired,
      modal: React.PropTypes.bool.isRequired,
      view: React.PropTypes.string.isRequired,
      toggleModal: React.PropTypes.func.isRequired,
      newPrompt: React.PropTypes.func.isRequired
    };

    var mapStateToProps = function mapStateToProps(state) {
      return {
        tab: state.get('display').get('tab'),
        modal: state.get('display').get('modal'),
        view: state.get('assessment').get('view'),
        lastReintroduced: state.get('assessment').get('lastReintroduced')
      };
    };

    var mapDispatchToProps = function mapDispatchToProps(dispatch) {
      return Redux.bindActionCreators({ toggleModal: toggleModal, newPrompt: newPrompt }, dispatch);
    };

    var App$1 = connect(mapStateToProps, mapDispatchToProps)(App);

    /*
     * Redux Local Storage Middleware
     *
     * Saves data locally on each view transition (excluding practice2)
     */
    function reduxLocalStore(store) {
      return function (next) {
        return function (action) {
          var returnValue = next(action);
          if (typeof Storage !== 'undefined' && store.getState().get('assessment').get('view') !== 'practice2') {
            localStorage.state = JSON.stringify(store.getState().toJS());
          }
          return returnValue;
        };
      };
    }

    /*
     * Redux Timer Management Middleware
     *
     * Sets a timer for an action if the action has a delay property
     * Expects delay to be in seconds
     * Returns a function wrapper for cancelling the timeout
     *
     */
    function timerMgmtMiddleware() {
      return function (next) {
        return function (action) {
          if (action.meta && action.meta.delay) {
            var _ret = function () {
              var timer = setTimeout(function () {
                return next(action);
              }, action.meta.delay > 0 ? action.meta.delay * 1000 : 0);

              return {
                v: function v() {
                  return clearTimeout(timer);
                }
              };
            }();

            if ((typeof _ret === "undefined" ? "undefined" : babelHelpers.typeof(_ret)) === "object") return _ret.v;
          }
          return next(action);
        };
      };
    }

    /* eslint-disable new-cap */
    var defaultState = Immutable.Map({
      data: Immutable.List(),
      display: Immutable.Map({
        tab: 0,
        modal: false
      }),
      assessment: Immutable.Map({
        prompt: newPrompt(12).prompt,
        lastReintroduced: null,
        view: 'practice'
      }),
      history: Immutable.Map({
        scores: Immutable.List(),
        index: 0
      })
    });
    /* eslint-enable */

    // Attempt to load initial state from HTML5 LocalStorage API
    var initialState = defaultState;
    if (typeof Storage !== 'undefined') {
      if (localStorage.state !== undefined) {
        initialState = Immutable.fromJS(JSON.parse(localStorage.state), function (key, value) {
          var isIndexed = Immutable.Iterable.isIndexed(value);
          if (isIndexed) {
            if (key !== 'scores' && key !== 'data') {
              return value.toArray();
            }
            return value.toList();
          }
          return value.toMap();
        }).setIn(['display', 'modal'], false); // Closes modal if saved in open state
      }
    }

    var store = Redux.createStore(rootReducer, initialState, Redux.applyMiddleware(reduxLocalStore, timerMgmtMiddleware));

    ReactDOM.render(React.createElement(
      Provider,
      { store: store },
      React.createElement(App$1, null)
    ), document.querySelector('#app'));

}(React,ReactDOM,Redux,Immutable));