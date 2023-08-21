import {
  require_classnames,
  require_jsx_runtime,
  useBootstrapPrefix,
  useIsRTL
} from "./chunk-RVBTYSWJ.js";
import {
  __toESM,
  require_react
} from "./chunk-QSQYAWSL.js";

// node_modules/react-bootstrap/esm/Tooltip.js
var import_classnames = __toESM(require_classnames());
var React2 = __toESM(require_react());

// node_modules/react-bootstrap/esm/helpers.js
var React = __toESM(require_react());
function getOverlayDirection(placement, isRTL) {
  let bsDirection = placement;
  if (placement === "left") {
    bsDirection = isRTL ? "end" : "start";
  } else if (placement === "right") {
    bsDirection = isRTL ? "start" : "end";
  }
  return bsDirection;
}

// node_modules/react-bootstrap/esm/getInitialPopperStyles.js
function getInitialPopperStyles(position = "absolute") {
  return {
    position,
    top: "0",
    left: "0",
    opacity: "0",
    pointerEvents: "none"
  };
}

// node_modules/react-bootstrap/esm/Tooltip.js
var import_jsx_runtime = __toESM(require_jsx_runtime());
var import_jsx_runtime2 = __toESM(require_jsx_runtime());
var Tooltip = React2.forwardRef(({
  bsPrefix,
  placement = "right",
  className,
  style,
  children,
  arrowProps,
  hasDoneInitialMeasure,
  popper,
  show,
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, "tooltip");
  const isRTL = useIsRTL();
  const [primaryPlacement] = (placement == null ? void 0 : placement.split("-")) || [];
  const bsDirection = getOverlayDirection(primaryPlacement, isRTL);
  let computedStyle = style;
  if (show && !hasDoneInitialMeasure) {
    computedStyle = {
      ...style,
      ...getInitialPopperStyles(popper == null ? void 0 : popper.strategy)
    };
  }
  return (0, import_jsx_runtime2.jsxs)("div", {
    ref,
    style: computedStyle,
    role: "tooltip",
    "x-placement": primaryPlacement,
    className: (0, import_classnames.default)(className, bsPrefix, `bs-tooltip-${bsDirection}`),
    ...props,
    children: [(0, import_jsx_runtime.jsx)("div", {
      className: "tooltip-arrow",
      ...arrowProps
    }), (0, import_jsx_runtime.jsx)("div", {
      className: `${bsPrefix}-inner`,
      children
    })]
  });
});
Tooltip.displayName = "Tooltip";
var Tooltip_default = Object.assign(Tooltip, {
  // Default tooltip offset.
  // https://github.com/twbs/bootstrap/blob/beca2a6c7f6bc88b6449339fc76edcda832c59e5/js/src/tooltip.js#L65
  TOOLTIP_OFFSET: [0, 6]
});

export {
  getOverlayDirection,
  getInitialPopperStyles,
  Tooltip_default
};
//# sourceMappingURL=chunk-TAGB2TPY.js.map
