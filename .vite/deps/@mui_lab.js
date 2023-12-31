import {
  AlertTitle_default,
  Alert_default,
  Autocomplete_default,
  AvatarGroup_default,
  CircularProgress_default,
  Collapse_default,
  PaginationItem_default,
  Pagination_default,
  Rating_default,
  Skeleton_default,
  SpeedDialAction_default,
  SpeedDialIcon_default,
  SpeedDial_default,
  Tabs_default,
  ToggleButtonGroup_default,
  ToggleButton_default,
  Typography_default,
  isMuiElement_default,
  ownerDocument_default,
  unsupportedProp_default,
  useControlled_default,
  useEnhancedEffect_default as useEnhancedEffect_default2,
  useId_default,
  usePagination,
  useTheme
} from "./chunk-FJZUGKPZ.js";
import {
  Button_default,
  _extends,
  _objectWithoutPropertiesLoose,
  alpha,
  capitalize_default,
  chainPropTypes,
  composeClasses,
  createUnarySpacing,
  deepmerge,
  elementTypeAcceptingRef_default,
  generateUtilityClass,
  generateUtilityClasses,
  getValue,
  handleBreakpoints,
  require_jsx_runtime,
  require_prop_types,
  resolveBreakpointValues,
  styled_default,
  useAutocomplete,
  useEnhancedEffect_default,
  useForkRef,
  useForkRef_default,
  useThemeProps2 as useThemeProps
} from "./chunk-C646WBOU.js";
import "./chunk-W4TI35DA.js";
import {
  require_react_dom
} from "./chunk-ZVSVQ6MR.js";
import {
  clsx_m_default
} from "./chunk-4N56JLVL.js";
import {
  require_react
} from "./chunk-VJU3K2M7.js";
import "./chunk-ZSEW566P.js";
import {
  __toESM
} from "./chunk-QY3AG7D4.js";

// node_modules/@mui/lab/Alert/Alert.js
var React = __toESM(require_react());
var import_jsx_runtime = __toESM(require_jsx_runtime());
var warnedOnce = false;
var Alert_default2 = React.forwardRef(function DeprecatedAlert(props, ref) {
  if (!warnedOnce) {
    console.warn(["MUI: The Alert component was moved from the lab to the core.", "", "You should use `import { Alert } from '@mui/material'`", "or `import Alert from '@mui/material/Alert'`"].join("\n"));
    warnedOnce = true;
  }
  return (0, import_jsx_runtime.jsx)(Alert_default, _extends({
    ref
  }, props));
});

// node_modules/@mui/lab/AlertTitle/AlertTitle.js
var React2 = __toESM(require_react());
var import_jsx_runtime2 = __toESM(require_jsx_runtime());
var warnedOnce2 = false;
var AlertTitle_default2 = React2.forwardRef(function DeprecatedAlertTitle(props, ref) {
  if (!warnedOnce2) {
    console.warn(["MUI: The AlertTitle component was moved from the lab to the core.", "", "You should use `import { AlertTitle } from '@mui/material'`", "or `import AlertTitle from '@mui/material/AlertTitle'`"].join("\n"));
    warnedOnce2 = true;
  }
  return (0, import_jsx_runtime2.jsx)(AlertTitle_default, _extends({
    ref
  }, props));
});

// node_modules/@mui/lab/Autocomplete/Autocomplete.js
var React3 = __toESM(require_react());
var import_jsx_runtime3 = __toESM(require_jsx_runtime());
var warnedOnce3 = false;
var Autocomplete_default2 = React3.forwardRef(function DeprecatedAutocomplete(props, ref) {
  if (!warnedOnce3) {
    console.warn(["MUI: The Autocomplete component was moved from the lab to the core.", "", "You should use `import { Autocomplete } from '@mui/material'`", "or `import Autocomplete from '@mui/material/Autocomplete'`"].join("\n"));
    warnedOnce3 = true;
  }
  return (0, import_jsx_runtime3.jsx)(Autocomplete_default, _extends({
    ref
  }, props));
});

// node_modules/@mui/lab/AvatarGroup/AvatarGroup.js
var React4 = __toESM(require_react());
var import_jsx_runtime4 = __toESM(require_jsx_runtime());
var warnedOnce4 = false;
var AvatarGroup_default2 = React4.forwardRef(function DeprecatedAvatarGroup(props, ref) {
  if (!warnedOnce4) {
    console.warn(["MUI: The AvatarGroup component was moved from the lab to the core.", "", "You should use `import { AvatarGroup } from '@mui/material'`", "or `import AvatarGroup from '@mui/material/AvatarGroup'`"].join("\n"));
    warnedOnce4 = true;
  }
  return (0, import_jsx_runtime4.jsx)(AvatarGroup_default, _extends({
    ref
  }, props));
});

// node_modules/@mui/lab/CalendarPicker/CalendarPicker.js
var React5 = __toESM(require_react());
var warnedOnce5 = false;
var warn = () => {
  if (!warnedOnce5) {
    console.warn(["MUI: The CalendarPicker component was moved from `@mui/lab` to `@mui/x-date-pickers`.", "", "You should use `import { CalendarPicker } from '@mui/x-date-pickers'`", "or `import { CalendarPicker } from '@mui/x-date-pickers/CalendarPicker'`", "", "More information about this migration on our blog: https://mui.com/blog/lab-date-pickers-to-mui-x/."].join("\n"));
    warnedOnce5 = true;
  }
};
var CalendarPicker = React5.forwardRef(function DeprecatedCalendarPicker() {
  warn();
  return null;
});
var CalendarPicker_default = CalendarPicker;
var calendarPickerClasses = {};

// node_modules/@mui/lab/ClockPicker/ClockPicker.js
var React6 = __toESM(require_react());
var warnedOnce6 = false;
var warn2 = () => {
  if (!warnedOnce6) {
    console.warn(["MUI: The ClockPicker component was moved from `@mui/lab` to `@mui/x-date-pickers`.", "", "You should use `import { ClockPicker } from '@mui/x-date-pickers'`", "or `import { ClockPicker } from '@mui/x-date-pickers/ClockPicker'`", "", "More information about this migration on our blog: https://mui.com/blog/lab-date-pickers-to-mui-x/."].join("\n"));
    warnedOnce6 = true;
  }
};
var ClockPicker = React6.forwardRef(function DeprecatedClockPicker() {
  warn2();
  return null;
});
var ClockPicker_default = ClockPicker;
var clockPickerClasses = {};

// node_modules/@mui/lab/DatePicker/DatePicker.js
var React7 = __toESM(require_react());
var warnedOnce7 = false;
var warn3 = () => {
  if (!warnedOnce7) {
    console.warn(["MUI: The DatePicker component was moved from `@mui/lab` to `@mui/x-date-pickers`.", "", "You should use `import { DatePicker } from '@mui/x-date-pickers'`", "or `import { DatePicker } from '@mui/x-date-pickers/DatePicker'`", "", "More information about this migration on our blog: https://mui.com/blog/lab-date-pickers-to-mui-x/."].join("\n"));
    warnedOnce7 = true;
  }
};
var DatePicker = React7.forwardRef(function DeprecatedDatePicker() {
  warn3();
  return null;
});
var DatePicker_default = DatePicker;

// node_modules/@mui/lab/DateRangePicker/DateRangePicker.js
var React8 = __toESM(require_react());
var warnedOnce8 = false;
var warn4 = () => {
  if (!warnedOnce8) {
    console.warn(["MUI: The DateRangePicker component was moved from `@mui/lab` to `@mui/x-date-pickers-pro`", "", "You should use `import { DateRangePicker } from '@mui/x-date-pickers-pro'`", "or `import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker'`", "", "More information about this migration on our blog: https://mui.com/blog/lab-date-pickers-to-mui-x/."].join("\n"));
    warnedOnce8 = true;
  }
};
var DateRangePicker = React8.forwardRef(function DeprecatedDateRangePicker() {
  warn4();
  return null;
});
var DateRangePicker_default = DateRangePicker;

// node_modules/@mui/lab/DateRangePickerDay/DateRangePickerDay.js
var React9 = __toESM(require_react());
var warnedOnce9 = false;
var warn5 = () => {
  if (!warnedOnce9) {
    console.warn(["MUI: The DateRangePickerDay component was moved from `@mui/lab` to `@mui/x-date-pickers-pro`", "", "You should use `import { DateRangePickerDay } from '@mui/x-date-pickers-pro'`", "or `import { DateRangePickerDay } from '@mui/x-date-pickers-pro/DateRangePickerDay'`", "", "More information about this migration on our blog: https://mui.com/blog/lab-date-pickers-to-mui-x/."].join("\n"));
    warnedOnce9 = true;
  }
};
var DateRangePickerDay = React9.forwardRef(function DeprecatedDateRangePickerDay() {
  warn5();
  return null;
});
var DateRangePickerDay_default = DateRangePickerDay;
var getDateRangePickerDayUtilityClass = (slot) => {
  warn5();
  return "";
};

// node_modules/@mui/lab/DateTimePicker/DateTimePicker.js
var React10 = __toESM(require_react());
var warnedOnce10 = false;
var warn6 = () => {
  if (!warnedOnce10) {
    console.warn(["MUI: The DateTimePicker component was moved from `@mui/lab` to `@mui/x-date-pickers`.", "", "You should use `import { DateTimePicker } from '@mui/x-date-pickers'`", "or `import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker'`", "", "More information about this migration on our blog: https://mui.com/blog/lab-date-pickers-to-mui-x/."].join("\n"));
    warnedOnce10 = true;
  }
};
var DateTimePicker = React10.forwardRef(function DeprecatedDateTimePicker() {
  warn6();
  return null;
});
var DateTimePicker_default = DateTimePicker;

// node_modules/@mui/lab/DesktopDatePicker/DesktopDatePicker.js
var React11 = __toESM(require_react());
var warnedOnce11 = false;
var warn7 = () => {
  if (!warnedOnce11) {
    console.warn(["MUI: The DesktopDatePicker component was moved from `@mui/lab` to `@mui/x-date-pickers`.", "", "You should use `import { DesktopDatePicker } from '@mui/x-date-pickers'`", "or `import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker'`", "", "More information about this migration on our blog: https://mui.com/blog/lab-date-pickers-to-mui-x/."].join("\n"));
    warnedOnce11 = true;
  }
};
var DesktopDatePicker = React11.forwardRef(function DeprecatedDesktopDatePicker() {
  warn7();
  return null;
});
var DesktopDatePicker_default = DesktopDatePicker;

// node_modules/@mui/lab/DesktopDateRangePicker/DesktopDateRangePicker.js
var React12 = __toESM(require_react());
var warnedOnce12 = false;
var warn8 = () => {
  if (!warnedOnce12) {
    console.warn(["MUI: The DesktopDateRangePicker component was moved from `@mui/lab` to `@mui/x-date-pickers-pro`", "", "You should use `import { DesktopDateRangePicker } from '@mui/x-date-pickers-pro'`", "or `import { DesktopDateRangePicker } from '@mui/x-date-pickers-pro/DesktopDateRangePicker'`", "", "More information about this migration on our blog: https://mui.com/blog/lab-date-pickers-to-mui-x/."].join("\n"));
    warnedOnce12 = true;
  }
};
var DesktopDateRangePicker = React12.forwardRef(function DeprecatedDesktopDateRangePicker() {
  warn8();
  return null;
});
var DesktopDateRangePicker_default = DesktopDateRangePicker;

// node_modules/@mui/lab/DesktopDateTimePicker/DesktopDateTimePicker.js
var React13 = __toESM(require_react());
var warnedOnce13 = false;
var warn9 = () => {
  if (!warnedOnce13) {
    console.warn(["MUI: The DesktopDateTimePicker component was moved from `@mui/lab` to `@mui/x-date-pickers`.", "", "You should use `import { DesktopDateTimePicker } from '@mui/x-date-pickers'`", "or `import { DesktopDateTimePicker } from '@mui/x-date-pickers/DesktopDateTimePicker'`", "", "More information about this migration on our blog: https://mui.com/blog/lab-date-pickers-to-mui-x/."].join("\n"));
    warnedOnce13 = true;
  }
};
var DesktopDateTimePicker = React13.forwardRef(function DeprecatedDesktopDateTimePicker() {
  warn9();
  return null;
});
var DesktopDateTimePicker_default = DesktopDateTimePicker;

// node_modules/@mui/lab/DesktopTimePicker/DesktopTimePicker.js
var React14 = __toESM(require_react());
var warnedOnce14 = false;
var warn10 = () => {
  if (!warnedOnce14) {
    console.warn(["MUI: The DesktopTimePicker component was moved from `@mui/lab` to `@mui/x-date-pickers`.", "", "You should use `import { DesktopTimePicker } from '@mui/x-date-pickers'`", "or `import { DesktopTimePicker } from '@mui/x-date-pickers/DesktopTimePicker'`", "", "More information about this migration on our blog: https://mui.com/blog/lab-date-pickers-to-mui-x/."].join("\n"));
    warnedOnce14 = true;
  }
};
var DesktopTimePicker = React14.forwardRef(function DeprecatedDesktopTimePicker() {
  warn10();
  return null;
});
var DesktopTimePicker_default = DesktopTimePicker;

// node_modules/@mui/lab/LoadingButton/LoadingButton.js
var React15 = __toESM(require_react());
var import_prop_types = __toESM(require_prop_types());

// node_modules/@mui/lab/LoadingButton/loadingButtonClasses.js
function getLoadingButtonUtilityClass(slot) {
  return generateUtilityClass("MuiLoadingButton", slot);
}
var loadingButtonClasses = generateUtilityClasses("MuiLoadingButton", ["root", "loading", "loadingIndicator", "loadingIndicatorCenter", "loadingIndicatorStart", "loadingIndicatorEnd", "endIconLoadingEnd", "startIconLoadingStart"]);
var loadingButtonClasses_default = loadingButtonClasses;

// node_modules/@mui/lab/LoadingButton/LoadingButton.js
var import_jsx_runtime5 = __toESM(require_jsx_runtime());
var import_jsx_runtime6 = __toESM(require_jsx_runtime());
var _excluded = ["children", "disabled", "id", "loading", "loadingIndicator", "loadingPosition", "variant"];
var useUtilityClasses = (ownerState) => {
  const {
    loading,
    loadingPosition,
    classes
  } = ownerState;
  const slots = {
    root: ["root", loading && "loading"],
    startIcon: [loading && `startIconLoading${capitalize_default(loadingPosition)}`],
    endIcon: [loading && `endIconLoading${capitalize_default(loadingPosition)}`],
    loadingIndicator: ["loadingIndicator", loading && `loadingIndicator${capitalize_default(loadingPosition)}`]
  };
  const composedClasses = composeClasses(slots, getLoadingButtonUtilityClass, classes);
  return _extends({}, classes, composedClasses);
};
var rootShouldForwardProp = (prop) => prop !== "ownerState" && prop !== "theme" && prop !== "sx" && prop !== "as" && prop !== "classes";
var LoadingButtonRoot = styled_default(Button_default, {
  shouldForwardProp: (prop) => rootShouldForwardProp(prop) || prop === "classes",
  name: "MuiLoadingButton",
  slot: "Root",
  overridesResolver: (props, styles) => {
    return [styles.root, styles.startIconLoadingStart && {
      [`& .${loadingButtonClasses_default.startIconLoadingStart}`]: styles.startIconLoadingStart
    }, styles.endIconLoadingEnd && {
      [`& .${loadingButtonClasses_default.endIconLoadingEnd}`]: styles.endIconLoadingEnd
    }];
  }
})(({
  ownerState,
  theme
}) => _extends({
  [`& .${loadingButtonClasses_default.startIconLoadingStart}, & .${loadingButtonClasses_default.endIconLoadingEnd}`]: {
    transition: theme.transitions.create(["opacity"], {
      duration: theme.transitions.duration.short
    }),
    opacity: 0
  }
}, ownerState.loadingPosition === "center" && {
  transition: theme.transitions.create(["background-color", "box-shadow", "border-color"], {
    duration: theme.transitions.duration.short
  }),
  [`&.${loadingButtonClasses_default.loading}`]: {
    color: "transparent"
  }
}, ownerState.loadingPosition === "start" && ownerState.fullWidth && {
  [`& .${loadingButtonClasses_default.startIconLoadingStart}, & .${loadingButtonClasses_default.endIconLoadingEnd}`]: {
    transition: theme.transitions.create(["opacity"], {
      duration: theme.transitions.duration.short
    }),
    opacity: 0,
    marginRight: -8
  }
}, ownerState.loadingPosition === "end" && ownerState.fullWidth && {
  [`& .${loadingButtonClasses_default.startIconLoadingStart}, & .${loadingButtonClasses_default.endIconLoadingEnd}`]: {
    transition: theme.transitions.create(["opacity"], {
      duration: theme.transitions.duration.short
    }),
    opacity: 0,
    marginLeft: -8
  }
}));
var LoadingButtonLoadingIndicator = styled_default("div", {
  name: "MuiLoadingButton",
  slot: "LoadingIndicator",
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.loadingIndicator, styles[`loadingIndicator${capitalize_default(ownerState.loadingPosition)}`]];
  }
})(({
  theme,
  ownerState
}) => _extends({
  position: "absolute",
  visibility: "visible",
  display: "flex"
}, ownerState.loadingPosition === "start" && (ownerState.variant === "outlined" || ownerState.variant === "contained") && {
  left: ownerState.size === "small" ? 10 : 14
}, ownerState.loadingPosition === "start" && ownerState.variant === "text" && {
  left: 6
}, ownerState.loadingPosition === "center" && {
  left: "50%",
  transform: "translate(-50%)",
  color: (theme.vars || theme).palette.action.disabled
}, ownerState.loadingPosition === "end" && (ownerState.variant === "outlined" || ownerState.variant === "contained") && {
  right: ownerState.size === "small" ? 10 : 14
}, ownerState.loadingPosition === "end" && ownerState.variant === "text" && {
  right: 6
}, ownerState.loadingPosition === "start" && ownerState.fullWidth && {
  position: "relative",
  left: -10
}, ownerState.loadingPosition === "end" && ownerState.fullWidth && {
  position: "relative",
  right: -10
}));
var LoadingButton = React15.forwardRef(function LoadingButton2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiLoadingButton"
  });
  const {
    children,
    disabled = false,
    id: idProp,
    loading = false,
    loadingIndicator: loadingIndicatorProp,
    loadingPosition = "center",
    variant = "text"
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded);
  const id = useId_default(idProp);
  const loadingIndicator = loadingIndicatorProp != null ? loadingIndicatorProp : (0, import_jsx_runtime5.jsx)(CircularProgress_default, {
    "aria-labelledby": id,
    color: "inherit",
    size: 16
  });
  const ownerState = _extends({}, props, {
    disabled,
    loading,
    loadingIndicator,
    loadingPosition,
    variant
  });
  const classes = useUtilityClasses(ownerState);
  const loadingButtonLoadingIndicator = loading ? (0, import_jsx_runtime5.jsx)(LoadingButtonLoadingIndicator, {
    className: classes.loadingIndicator,
    ownerState,
    children: loadingIndicator
  }) : null;
  return (0, import_jsx_runtime6.jsxs)(LoadingButtonRoot, _extends({
    disabled: disabled || loading,
    id,
    ref
  }, other, {
    variant,
    classes,
    ownerState,
    children: [ownerState.loadingPosition === "end" ? children : loadingButtonLoadingIndicator, ownerState.loadingPosition === "end" ? loadingButtonLoadingIndicator : children]
  }));
});
true ? LoadingButton.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The content of the component.
   */
  children: import_prop_types.default.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: import_prop_types.default.object,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: import_prop_types.default.bool,
  /**
   * @ignore
   */
  id: import_prop_types.default.string,
  /**
   * If `true`, the loading indicator is shown.
   * @default false
   */
  loading: import_prop_types.default.bool,
  /**
   * Element placed before the children if the button is in loading state.
   * The node should contain an element with `role="progressbar"` with an accessible name.
   * By default we render a `CircularProgress` that is labelled by the button itself.
   * @default <CircularProgress color="inherit" size={16} />
   */
  loadingIndicator: import_prop_types.default.node,
  /**
   * The loading indicator can be positioned on the start, end, or the center of the button.
   * @default 'center'
   */
  loadingPosition: chainPropTypes(import_prop_types.default.oneOf(["start", "end", "center"]), (props) => {
    if (props.loadingPosition === "start" && !props.startIcon) {
      return new Error(`MUI: The loadingPosition="start" should be used in combination with startIcon.`);
    }
    if (props.loadingPosition === "end" && !props.endIcon) {
      return new Error(`MUI: The loadingPosition="end" should be used in combination with endIcon.`);
    }
    return null;
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types.default.oneOfType([import_prop_types.default.arrayOf(import_prop_types.default.oneOfType([import_prop_types.default.func, import_prop_types.default.object, import_prop_types.default.bool])), import_prop_types.default.func, import_prop_types.default.object]),
  /**
   * The variant to use.
   * @default 'text'
   */
  variant: import_prop_types.default.oneOfType([import_prop_types.default.oneOf(["contained", "outlined", "text"]), import_prop_types.default.string])
} : void 0;
var LoadingButton_default = LoadingButton;

// node_modules/@mui/lab/LocalizationProvider/LocalizationProvider.js
var React16 = __toESM(require_react());
var warnedOnce15 = false;
var warn11 = () => {
  if (!warnedOnce15) {
    console.warn(["MUI: The LocalizationProvider component was moved from `@mui/lab` to `@mui/x-date-pickers`.", "", "You should use `import { LocalizationProvider } from '@mui/x-date-pickers'`", "or `import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'`", "", "More information about this migration on our blog: https://mui.com/blog/lab-date-pickers-to-mui-x/."].join("\n"));
    warnedOnce15 = true;
  }
};
var LocalizationProvider = React16.forwardRef(function DeprecatedLocalizationProvider() {
  warn11();
  return null;
});
var LocalizationProvider_default = LocalizationProvider;

// node_modules/@mui/lab/MobileDatePicker/MobileDatePicker.js
var React17 = __toESM(require_react());
var warnedOnce16 = false;
var warn12 = () => {
  if (!warnedOnce16) {
    console.warn(["MUI: The MobileDatePicker component was moved from `@mui/lab` to `@mui/x-date-pickers`.", "", "You should use `import { MobileDatePicker } from '@mui/x-date-pickers'`", "or `import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker'`", "", "More information about this migration on our blog: https://mui.com/blog/lab-date-pickers-to-mui-x/."].join("\n"));
    warnedOnce16 = true;
  }
};
var MobileDatePicker = React17.forwardRef(function DeprecatedMobileDatePicker(props, ref) {
  warn12();
  return null;
});
var MobileDatePicker_default = MobileDatePicker;

// node_modules/@mui/lab/MobileDateRangePicker/MobileDateRangePicker.js
var React18 = __toESM(require_react());
var warnedOnce17 = false;
var warn13 = () => {
  if (!warnedOnce17) {
    console.warn(["MUI: The MobileDateRangePicker component was moved from `@mui/lab` to `@mui/x-date-pickers-pro`", "", "You should use `import { MobileDateRangePicker } from '@mui/x-date-pickers-pro'`", "or `import { MobileDateRangePicker } from '@mui/x-date-pickers-pro/MobileDateRangePicker'`", "", "More information about this migration on our blog: https://mui.com/blog/lab-date-pickers-to-mui-x/."].join("\n"));
    warnedOnce17 = true;
  }
};
var MobileDateRangePicker = React18.forwardRef(function DeprecatedMobileDateRangePicker() {
  warn13();
  return null;
});
var MobileDateRangePicker_default = MobileDateRangePicker;

// node_modules/@mui/lab/MobileDateTimePicker/MobileDateTimePicker.js
var React19 = __toESM(require_react());
var warnedOnce18 = false;
var warn14 = () => {
  if (!warnedOnce18) {
    console.warn(["MUI: The MobileDateTimePicker component was moved from `@mui/lab` to `@mui/x-date-pickers`.", "", "You should use `import { MobileDateTimePicker } from '@mui/x-date-pickers'`", "or `import { MobileDateTimePicker } from '@mui/x-date-pickers/MobileDateTimePicker'`", "", "More information about this migration on our blog: https://mui.com/blog/lab-date-pickers-to-mui-x/."].join("\n"));
    warnedOnce18 = true;
  }
};
var MobileDateTimePicker = React19.forwardRef(function DeprecatedMobileDateTimePicker() {
  warn14();
  return null;
});
var MobileDateTimePicker_default = MobileDateTimePicker;

// node_modules/@mui/lab/MobileTimePicker/MobileTimePicker.js
var React20 = __toESM(require_react());
var warnedOnce19 = false;
var warn15 = () => {
  if (!warnedOnce19) {
    console.warn(["MUI: The MobileTimePicker component was moved from `@mui/lab` to `@mui/x-date-pickers`.", "", "You should use `import { MobileTimePicker } from '@mui/x-date-pickers'`", "or `import { MobileTimePicker } from '@mui/x-date-pickers/MobileTimePicker'`", "", "More information about this migration on our blog: https://mui.com/blog/lab-date-pickers-to-mui-x/."].join("\n"));
    warnedOnce19 = true;
  }
};
var MobileTimePicker = React20.forwardRef(function DeprecatedMobileTimePicker() {
  warn15();
  return null;
});
var MobileTimePicker_default = MobileTimePicker;

// node_modules/@mui/lab/MonthPicker/MonthPicker.js
var React21 = __toESM(require_react());
var warnedOnce20 = false;
var warn16 = () => {
  if (!warnedOnce20) {
    console.warn(["MUI: The MonthPicker component was moved from `@mui/lab` to `@mui/x-date-pickers`.", "", "You should use `import { MonthPicker } from '@mui/x-date-pickers'`", "or `import { MonthPicker } from '@mui/x-date-pickers/MonthPicker'`", "", "More information about this migration on our blog: https://mui.com/blog/lab-date-pickers-to-mui-x/."].join("\n"));
    warnedOnce20 = true;
  }
};
var MonthPicker = React21.forwardRef(function DeprecatedMonthPicker() {
  warn16();
  return null;
});
var MonthPicker_default = MonthPicker;
var monthPickerClasses = {};
var getMonthPickerUtilityClass = (slot) => {
  warn16();
  return "";
};

// node_modules/@mui/lab/Pagination/Pagination.js
var React22 = __toESM(require_react());
var import_jsx_runtime7 = __toESM(require_jsx_runtime());
var warnedOnce21 = false;
var Pagination_default2 = React22.forwardRef(function DeprecatedPagination(props, ref) {
  if (!warnedOnce21) {
    console.warn(["MUI: The Pagination component was moved from the lab to the core.", "", "You should use `import { Pagination } from '@mui/material'`", "or `import Pagination from '@mui/material/Pagination'`"].join("\n"));
    warnedOnce21 = true;
  }
  return (0, import_jsx_runtime7.jsx)(Pagination_default, _extends({
    ref
  }, props));
});

// node_modules/@mui/lab/PaginationItem/PaginationItem.js
var React23 = __toESM(require_react());
var import_jsx_runtime8 = __toESM(require_jsx_runtime());
var warnedOnce22 = false;
var PaginationItem_default2 = React23.forwardRef(function DeprecatedPaginationItem(props, ref) {
  if (!warnedOnce22) {
    console.warn(["MUI: The PaginationItem component was moved from the lab to the core.", "", "You should use `import { PaginationItem } from '@mui/material'`", "or `import PaginationItem from '@mui/material/PaginationItem'`"].join("\n"));
    warnedOnce22 = true;
  }
  return (0, import_jsx_runtime8.jsx)(PaginationItem_default, _extends({
    ref
  }, props));
});

// node_modules/@mui/lab/CalendarPickerSkeleton/CalendarPickerSkeleton.js
var React24 = __toESM(require_react());
var warnedOnce23 = false;
var warn17 = () => {
  if (!warnedOnce23) {
    console.warn(["MUI: The CalendarPickerSkeleton component was moved from `@mui/lab` to `@mui/x-date-pickers`.", "", "You should use `import { CalendarPickerSkeleton } from '@mui/x-date-pickers'`", "or `import { CalendarPickerSkeleton } from '@mui/x-date-pickers/CalendarPickerSkeleton'`", "", "More information about this migration on our blog: https://mui.com/blog/lab-date-pickers-to-mui-x/."].join("\n"));
    warnedOnce23 = true;
  }
};
var CalendarPickerSkeleton = React24.forwardRef(function DeprecatedCalendarPickerSkeleton() {
  warn17();
  return null;
});
var CalendarPickerSkeleton_default = CalendarPickerSkeleton;
var calendarPickerSkeletonClasses = {};
var getCalendarPickerSkeletonUtilityClass = (slot) => {
  warn17();
  return "";
};

// node_modules/@mui/lab/PickersDay/PickersDay.js
var React25 = __toESM(require_react());
var warnedOnce24 = false;
var warn18 = () => {
  if (!warnedOnce24) {
    console.warn(["MUI: The PickersDay component was moved from `@mui/lab` to `@mui/x-date-pickers`.", "", "You should use `import { PickersDay } from '@mui/x-date-pickers'`", "or `import { PickersDay } from '@mui/x-date-pickers/PickersDay'`", "", "More information about this migration on our blog: https://mui.com/blog/lab-date-pickers-to-mui-x/."].join("\n"));
    warnedOnce24 = true;
  }
};
var PickersDay = React25.forwardRef(function DeprecatedPickersDay() {
  warn18();
  return null;
});
var PickersDay_default = PickersDay;
var pickersDayClasses = {};
var getPickersDayUtilityClass = (slot) => {
  warn18();
  return "";
};

// node_modules/@mui/lab/Rating/Rating.js
var React26 = __toESM(require_react());
var import_jsx_runtime9 = __toESM(require_jsx_runtime());
var warnedOnce25 = false;
var Rating_default2 = React26.forwardRef(function DeprecatedRating(props, ref) {
  if (!warnedOnce25) {
    console.warn(["MUI: The Rating component was moved from the lab to the core.", "", "You should use `import { Rating } from '@mui/material'`", "or `import Rating from '@mui/material/Rating'`"].join("\n"));
    warnedOnce25 = true;
  }
  return (0, import_jsx_runtime9.jsx)(Rating_default, _extends({
    ref
  }, props));
});

// node_modules/@mui/lab/Skeleton/Skeleton.js
var React27 = __toESM(require_react());
var import_jsx_runtime10 = __toESM(require_jsx_runtime());
var warnedOnce26 = false;
var Skeleton_default2 = React27.forwardRef(function DeprecatedSkeleton(props, ref) {
  if (!warnedOnce26) {
    console.warn(["MUI: The Skeleton component was moved from the lab to the core.", "", "You should use `import { Skeleton } from '@mui/material'`", "or `import Skeleton from '@mui/material/Skeleton'`"].join("\n"));
    warnedOnce26 = true;
  }
  return (0, import_jsx_runtime10.jsx)(Skeleton_default, _extends({
    ref
  }, props));
});

// node_modules/@mui/lab/SpeedDial/SpeedDial.js
var React28 = __toESM(require_react());
var import_jsx_runtime11 = __toESM(require_jsx_runtime());
var warnedOnce27 = false;
var SpeedDial_default2 = React28.forwardRef(function DeprecatedSpeedDial(props, ref) {
  if (!warnedOnce27) {
    console.warn(["MUI: The SpeedDial component was moved from the lab to the core.", "", "You should use `import { SpeedDial } from '@mui/material'`", "or `import SpeedDial from '@mui/material/SpeedDial'`"].join("\n"));
    warnedOnce27 = true;
  }
  return (0, import_jsx_runtime11.jsx)(SpeedDial_default, _extends({
    ref
  }, props));
});

// node_modules/@mui/lab/SpeedDialAction/SpeedDialAction.js
var React29 = __toESM(require_react());
var import_jsx_runtime12 = __toESM(require_jsx_runtime());
var warnedOnce28 = false;
var SpeedDialAction_default2 = React29.forwardRef(function DeprecatedSpeedDialAction(props, ref) {
  if (!warnedOnce28) {
    console.warn(["MUI: The SpeedDialAction component was moved from the lab to the core.", "", "You should use `import { SpeedDialAction } from '@mui/material'`", "or `import SpeedDialAction from '@mui/material/SpeedDialAction'`"].join("\n"));
    warnedOnce28 = true;
  }
  return (0, import_jsx_runtime12.jsx)(SpeedDialAction_default, _extends({
    ref
  }, props));
});

// node_modules/@mui/lab/SpeedDialIcon/SpeedDialIcon.js
var React30 = __toESM(require_react());
var import_jsx_runtime13 = __toESM(require_jsx_runtime());
var warnedOnce29 = false;
var SpeedDialIcon_default2 = React30.forwardRef(function DeprecatedSpeedDialIcon(props, ref) {
  if (!warnedOnce29) {
    console.warn(["MUI: The SpeedDialIcon component was moved from the lab to the core.", "", "You should use `import { SpeedDialIcon } from '@mui/material'`", "or `import SpeedDialIcon from '@mui/material/SpeedDialIcon'`"].join("\n"));
    warnedOnce29 = true;
  }
  return (0, import_jsx_runtime13.jsx)(SpeedDialIcon_default, _extends({
    ref
  }, props));
});

// node_modules/@mui/lab/StaticDatePicker/StaticDatePicker.js
var React31 = __toESM(require_react());
var warnedOnce30 = false;
var warn19 = () => {
  if (!warnedOnce30) {
    console.warn(["MUI: The StaticDatePicker component was moved from `@mui/lab` to `@mui/x-date-pickers`.", "", "You should use `import { StaticDatePicker } from '@mui/x-date-pickers'`", "or `import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker'`", "", "More information about this migration on our blog: https://mui.com/blog/lab-date-pickers-to-mui-x/."].join("\n"));
    warnedOnce30 = true;
  }
};
var StaticDatePicker = React31.forwardRef(function DeprecatedStaticDatePicker() {
  warn19();
  return null;
});
var StaticDatePicker_default = StaticDatePicker;

// node_modules/@mui/lab/StaticDateRangePicker/StaticDateRangePicker.js
var React32 = __toESM(require_react());
var warnedOnce31 = false;
var warn20 = () => {
  if (!warnedOnce31) {
    console.warn(["MUI: The StaticDateRangePicker component was moved from `@mui/lab` to `@mui/x-date-pickers-pro`", "", "You should use `import { StaticDateRangePicker } from '@mui/x-date-pickers-pro'`", "or `import { StaticDateRangePicker } from '@mui/x-date-pickers-pro/StaticDateRangePicker'`", "", "More information about this migration on our blog: https://mui.com/blog/lab-date-pickers-to-mui-x/."].join("\n"));
    warnedOnce31 = true;
  }
};
var StaticDateRangePicker = React32.forwardRef(function DeprecatedStaticDateRangePicker() {
  warn20();
  return null;
});
var StaticDateRangePicker_default = StaticDateRangePicker;

// node_modules/@mui/lab/StaticDateTimePicker/StaticDateTimePicker.js
var React33 = __toESM(require_react());
var warnedOnce32 = false;
var warn21 = () => {
  if (!warnedOnce32) {
    console.warn(["MUI: The StaticDateTimePicker component was moved from `@mui/lab` to `@mui/x-date-pickers`.", "", "You should use `import { StaticDateTimePicker } from '@mui/x-date-pickers'`", "or `import { StaticDateTimePicker } from '@mui/x-date-pickers/StaticDateTimePicker'`", "", "More information about this migration on our blog: https://mui.com/blog/lab-date-pickers-to-mui-x/."].join("\n"));
    warnedOnce32 = true;
  }
};
var StaticDateTimePicker = React33.forwardRef(function DeprecatedStaticDateTimePicker() {
  warn21();
  return null;
});
var StaticDateTimePicker_default = StaticDateTimePicker;

// node_modules/@mui/lab/StaticTimePicker/StaticTimePicker.js
var React34 = __toESM(require_react());
var warnedOnce33 = false;
var warn22 = () => {
  if (!warnedOnce33) {
    console.warn(["MUI: The StaticTimePicker component was moved from `@mui/lab` to `@mui/x-date-pickers`.", "", "You should use `import { StaticTimePicker } from '@mui/x-date-pickers'`", "or `import { StaticTimePicker } from '@mui/x-date-pickers/StaticTimePicker'`", "", "More information about this migration on our blog: https://mui.com/blog/lab-date-pickers-to-mui-x/."].join("\n"));
    warnedOnce33 = true;
  }
};
var StaticTimePicker = React34.forwardRef(function DeprecatedStaticTimePicker() {
  warn22();
  return null;
});
var StaticTimePicker_default = StaticTimePicker;

// node_modules/@mui/lab/TabContext/TabContext.js
var React35 = __toESM(require_react());
var import_prop_types2 = __toESM(require_prop_types());
var import_jsx_runtime14 = __toESM(require_jsx_runtime());
var Context = React35.createContext(null);
if (true) {
  Context.displayName = "TabContext";
}
function useUniquePrefix() {
  const [id, setId] = React35.useState(null);
  React35.useEffect(() => {
    setId(`mui-p-${Math.round(Math.random() * 1e5)}`);
  }, []);
  return id;
}
function TabContext(props) {
  const {
    children,
    value
  } = props;
  const idPrefix = useUniquePrefix();
  const context = React35.useMemo(() => {
    return {
      idPrefix,
      value
    };
  }, [idPrefix, value]);
  return (0, import_jsx_runtime14.jsx)(Context.Provider, {
    value: context,
    children
  });
}
true ? TabContext.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The content of the component.
   */
  children: import_prop_types2.default.node,
  /**
   * The value of the currently selected `Tab`.
   */
  value: import_prop_types2.default.string.isRequired
} : void 0;
function useTabContext() {
  return React35.useContext(Context);
}
function getPanelId(context, value) {
  const {
    idPrefix
  } = context;
  if (idPrefix === null) {
    return null;
  }
  return `${context.idPrefix}-P-${value}`;
}
function getTabId(context, value) {
  const {
    idPrefix
  } = context;
  if (idPrefix === null) {
    return null;
  }
  return `${context.idPrefix}-T-${value}`;
}

// node_modules/@mui/lab/TabList/TabList.js
var React36 = __toESM(require_react());
var import_prop_types3 = __toESM(require_prop_types());
var import_jsx_runtime15 = __toESM(require_jsx_runtime());
var _excluded2 = ["children"];
var TabList = React36.forwardRef(function TabList2(props, ref) {
  const {
    children: childrenProp
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded2);
  const context = useTabContext();
  if (context === null) {
    throw new TypeError("No TabContext provided");
  }
  const children = React36.Children.map(childrenProp, (child) => {
    if (!React36.isValidElement(child)) {
      return null;
    }
    return React36.cloneElement(child, {
      // SOMEDAY: `Tabs` will set those themselves
      "aria-controls": getPanelId(context, child.props.value),
      id: getTabId(context, child.props.value)
    });
  });
  return (0, import_jsx_runtime15.jsx)(Tabs_default, _extends({}, other, {
    ref,
    value: context.value,
    children
  }));
});
true ? TabList.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * A list of `<Tab />` elements.
   */
  children: import_prop_types3.default.node
} : void 0;
var TabList_default = TabList;

// node_modules/@mui/lab/TabPanel/TabPanel.js
var React37 = __toESM(require_react());
var import_prop_types4 = __toESM(require_prop_types());

// node_modules/@mui/lab/TabPanel/tabPanelClasses.js
function getTabPanelUtilityClass(slot) {
  return generateUtilityClass("MuiTabPanel", slot);
}
var tabPanelClasses = generateUtilityClasses("MuiTabPanel", ["root"]);
var tabPanelClasses_default = tabPanelClasses;

// node_modules/@mui/lab/TabPanel/TabPanel.js
var import_jsx_runtime16 = __toESM(require_jsx_runtime());
var _excluded3 = ["children", "className", "value"];
var useUtilityClasses2 = (ownerState) => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ["root"]
  };
  return composeClasses(slots, getTabPanelUtilityClass, classes);
};
var TabPanelRoot = styled_default("div", {
  name: "MuiTabPanel",
  slot: "Root",
  overridesResolver: (props, styles) => styles.root
})(({
  theme
}) => ({
  padding: theme.spacing(3)
}));
var TabPanel = React37.forwardRef(function TabPanel2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiTabPanel"
  });
  const {
    children,
    className,
    value
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded3);
  const ownerState = _extends({}, props);
  const classes = useUtilityClasses2(ownerState);
  const context = useTabContext();
  if (context === null) {
    throw new TypeError("No TabContext provided");
  }
  const id = getPanelId(context, value);
  const tabId = getTabId(context, value);
  return (0, import_jsx_runtime16.jsx)(TabPanelRoot, _extends({
    "aria-labelledby": tabId,
    className: clsx_m_default(classes.root, className),
    hidden: value !== context.value,
    id,
    ref,
    role: "tabpanel",
    ownerState
  }, other, {
    children: value === context.value && children
  }));
});
true ? TabPanel.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The content of the component.
   */
  children: import_prop_types4.default.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: import_prop_types4.default.object,
  /**
   * @ignore
   */
  className: import_prop_types4.default.string,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types4.default.oneOfType([import_prop_types4.default.arrayOf(import_prop_types4.default.oneOfType([import_prop_types4.default.func, import_prop_types4.default.object, import_prop_types4.default.bool])), import_prop_types4.default.func, import_prop_types4.default.object]),
  /**
   * The `value` of the corresponding `Tab`. Must use the index of the `Tab` when
   * no `value` was passed to `Tab`.
   */
  value: import_prop_types4.default.string.isRequired
} : void 0;
var TabPanel_default = TabPanel;

// node_modules/@mui/lab/TimePicker/TimePicker.js
var React38 = __toESM(require_react());
var warnedOnce34 = false;
var warn23 = () => {
  if (!warnedOnce34) {
    console.warn(["MUI: The TimePicker component was moved from `@mui/lab` to `@mui/x-date-pickers`.", "", "You should use `import { TimePicker } from '@mui/x-date-pickers'`", "or `import { TimePicker } from '@mui/x-date-pickers/TimePicker'`", "", "More information about this migration on our blog: https://mui.com/blog/lab-date-pickers-to-mui-x/."].join("\n"));
    warnedOnce34 = true;
  }
};
var TimePicker = React38.forwardRef(function DeprecatedTimePicker() {
  warn23();
  return null;
});
var TimePicker_default = TimePicker;

// node_modules/@mui/lab/Timeline/Timeline.js
var React40 = __toESM(require_react());
var import_prop_types5 = __toESM(require_prop_types());

// node_modules/@mui/lab/Timeline/TimelineContext.js
var React39 = __toESM(require_react());
var TimelineContext = React39.createContext({});
if (true) {
  TimelineContext.displayName = "TimelineContext";
}
var TimelineContext_default = TimelineContext;

// node_modules/@mui/lab/Timeline/timelineClasses.js
function getTimelineUtilityClass(slot) {
  return generateUtilityClass("MuiTimeline", slot);
}
var timelineClasses = generateUtilityClasses("MuiTimeline", ["root", "positionLeft", "positionRight", "positionAlternate", "positionAlternateReverse"]);
var timelineClasses_default = timelineClasses;

// node_modules/@mui/lab/internal/convertTimelinePositionToClass.js
function convertTimelinePositionToClass(position) {
  return position === "alternate-reverse" ? "positionAlternateReverse" : `position${capitalize_default(position)}`;
}

// node_modules/@mui/lab/Timeline/Timeline.js
var import_jsx_runtime17 = __toESM(require_jsx_runtime());
var _excluded4 = ["position", "className"];
var useUtilityClasses3 = (ownerState) => {
  const {
    position,
    classes
  } = ownerState;
  const slots = {
    root: ["root", position && convertTimelinePositionToClass(position)]
  };
  return composeClasses(slots, getTimelineUtilityClass, classes);
};
var TimelineRoot = styled_default("ul", {
  name: "MuiTimeline",
  slot: "Root",
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, ownerState.position && styles[convertTimelinePositionToClass(ownerState.position)]];
  }
})({
  display: "flex",
  flexDirection: "column",
  padding: "6px 16px",
  flexGrow: 1
});
var Timeline = React40.forwardRef(function Timeline2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiTimeline"
  });
  const {
    position = "right",
    className
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded4);
  const ownerState = _extends({}, props, {
    position
  });
  const classes = useUtilityClasses3(ownerState);
  const contextValue = React40.useMemo(() => ({
    position
  }), [position]);
  return (0, import_jsx_runtime17.jsx)(TimelineContext_default.Provider, {
    value: contextValue,
    children: (0, import_jsx_runtime17.jsx)(TimelineRoot, _extends({
      className: clsx_m_default(classes.root, className),
      ownerState,
      ref
    }, other))
  });
});
true ? Timeline.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * The content of the component.
   */
  children: import_prop_types5.default.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: import_prop_types5.default.object,
  /**
   * className applied to the root element.
   */
  className: import_prop_types5.default.string,
  /**
   * The position where the TimelineContent should appear relative to the time axis.
   * @default 'right'
   */
  position: import_prop_types5.default.oneOf(["alternate-reverse", "alternate", "left", "right"]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types5.default.oneOfType([import_prop_types5.default.arrayOf(import_prop_types5.default.oneOfType([import_prop_types5.default.func, import_prop_types5.default.object, import_prop_types5.default.bool])), import_prop_types5.default.func, import_prop_types5.default.object])
} : void 0;
var Timeline_default = Timeline;

// node_modules/@mui/lab/TimelineConnector/TimelineConnector.js
var React41 = __toESM(require_react());
var import_prop_types6 = __toESM(require_prop_types());

// node_modules/@mui/lab/TimelineConnector/timelineConnectorClasses.js
function getTimelineConnectorUtilityClass(slot) {
  return generateUtilityClass("MuiTimelineConnector", slot);
}
var timelineConnectorClasses = generateUtilityClasses("MuiTimelineConnector", ["root"]);
var timelineConnectorClasses_default = timelineConnectorClasses;

// node_modules/@mui/lab/TimelineConnector/TimelineConnector.js
var import_jsx_runtime18 = __toESM(require_jsx_runtime());
var _excluded5 = ["className"];
var useUtilityClasses4 = (ownerState) => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ["root"]
  };
  return composeClasses(slots, getTimelineConnectorUtilityClass, classes);
};
var TimelineConnectorRoot = styled_default("span", {
  name: "MuiTimelineConnector",
  slot: "Root",
  overridesResolver: (props, styles) => styles.root
})(({
  theme
}) => {
  return {
    width: 2,
    backgroundColor: (theme.vars || theme).palette.grey[400],
    flexGrow: 1
  };
});
var TimelineConnector = React41.forwardRef(function TimelineConnector2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiTimelineConnector"
  });
  const {
    className
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded5);
  const ownerState = props;
  const classes = useUtilityClasses4(ownerState);
  return (0, import_jsx_runtime18.jsx)(TimelineConnectorRoot, _extends({
    className: clsx_m_default(classes.root, className),
    ownerState,
    ref
  }, other));
});
true ? TimelineConnector.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The content of the component.
   */
  children: import_prop_types6.default.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: import_prop_types6.default.object,
  /**
   * @ignore
   */
  className: import_prop_types6.default.string,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types6.default.oneOfType([import_prop_types6.default.arrayOf(import_prop_types6.default.oneOfType([import_prop_types6.default.func, import_prop_types6.default.object, import_prop_types6.default.bool])), import_prop_types6.default.func, import_prop_types6.default.object])
} : void 0;
var TimelineConnector_default = TimelineConnector;

// node_modules/@mui/lab/TimelineContent/TimelineContent.js
var React42 = __toESM(require_react());
var import_prop_types7 = __toESM(require_prop_types());

// node_modules/@mui/lab/TimelineContent/timelineContentClasses.js
function getTimelineContentUtilityClass(slot) {
  return generateUtilityClass("MuiTimelineContent", slot);
}
var timelineContentClasses = generateUtilityClasses("MuiTimelineContent", ["root", "positionLeft", "positionRight", "positionAlternate", "positionAlternateReverse"]);
var timelineContentClasses_default = timelineContentClasses;

// node_modules/@mui/lab/TimelineContent/TimelineContent.js
var import_jsx_runtime19 = __toESM(require_jsx_runtime());
var _excluded6 = ["className"];
var useUtilityClasses5 = (ownerState) => {
  const {
    position,
    classes
  } = ownerState;
  const slots = {
    root: ["root", convertTimelinePositionToClass(position)]
  };
  return composeClasses(slots, getTimelineContentUtilityClass, classes);
};
var TimelineContentRoot = styled_default(Typography_default, {
  name: "MuiTimelineContent",
  slot: "Root",
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, styles[convertTimelinePositionToClass(ownerState.position)]];
  }
})(({
  ownerState
}) => _extends({
  flex: 1,
  padding: "6px 16px",
  textAlign: "left"
}, ownerState.position === "left" && {
  textAlign: "right"
}));
var TimelineContent = React42.forwardRef(function TimelineContent2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiTimelineContent"
  });
  const {
    className
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded6);
  const {
    position: positionContext
  } = React42.useContext(TimelineContext_default);
  const ownerState = _extends({}, props, {
    position: positionContext || "right"
  });
  const classes = useUtilityClasses5(ownerState);
  return (0, import_jsx_runtime19.jsx)(TimelineContentRoot, _extends({
    component: "div",
    className: clsx_m_default(classes.root, className),
    ownerState,
    ref
  }, other));
});
true ? TimelineContent.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The content of the component.
   */
  children: import_prop_types7.default.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: import_prop_types7.default.object,
  /**
   * @ignore
   */
  className: import_prop_types7.default.string,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types7.default.oneOfType([import_prop_types7.default.arrayOf(import_prop_types7.default.oneOfType([import_prop_types7.default.func, import_prop_types7.default.object, import_prop_types7.default.bool])), import_prop_types7.default.func, import_prop_types7.default.object])
} : void 0;
var TimelineContent_default = TimelineContent;

// node_modules/@mui/lab/TimelineDot/TimelineDot.js
var React43 = __toESM(require_react());
var import_prop_types8 = __toESM(require_prop_types());

// node_modules/@mui/lab/TimelineDot/timelineDotClasses.js
function getTimelineDotUtilityClass(slot) {
  return generateUtilityClass("MuiTimelineDot", slot);
}
var timelineDotClasses = generateUtilityClasses("MuiTimelineDot", ["root", "filled", "outlined", "filledGrey", "outlinedGrey", "filledPrimary", "outlinedPrimary", "filledSecondary", "outlinedSecondary"]);
var timelineDotClasses_default = timelineDotClasses;

// node_modules/@mui/lab/TimelineDot/TimelineDot.js
var import_jsx_runtime20 = __toESM(require_jsx_runtime());
var _excluded7 = ["className", "color", "variant"];
var useUtilityClasses6 = (ownerState) => {
  const {
    color,
    variant,
    classes
  } = ownerState;
  const slots = {
    root: ["root", variant, color !== "inherit" && `${variant}${capitalize_default(color)}`]
  };
  return composeClasses(slots, getTimelineDotUtilityClass, classes);
};
var TimelineDotRoot = styled_default("span", {
  name: "MuiTimelineDot",
  slot: "Root",
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, styles[ownerState.color !== "inherit" && `${ownerState.variant}${capitalize_default(ownerState.color)}`], styles[ownerState.variant]];
  }
})(({
  ownerState,
  theme
}) => _extends({
  display: "flex",
  alignSelf: "baseline",
  borderStyle: "solid",
  borderWidth: 2,
  padding: 4,
  borderRadius: "50%",
  boxShadow: (theme.vars || theme).shadows[1],
  margin: "11.5px 0"
}, ownerState.variant === "filled" && _extends({
  borderColor: "transparent"
}, ownerState.color !== "inherit" && _extends({}, ownerState.color === "grey" ? {
  color: (theme.vars || theme).palette.grey[50],
  backgroundColor: (theme.vars || theme).palette.grey[400]
} : {
  color: (theme.vars || theme).palette[ownerState.color].contrastText,
  backgroundColor: (theme.vars || theme).palette[ownerState.color].main
})), ownerState.variant === "outlined" && _extends({
  boxShadow: "none",
  backgroundColor: "transparent"
}, ownerState.color !== "inherit" && _extends({}, ownerState.color === "grey" ? {
  borderColor: (theme.vars || theme).palette.grey[400]
} : {
  borderColor: (theme.vars || theme).palette[ownerState.color].main
}))));
var TimelineDot = React43.forwardRef(function TimelineDot2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiTimelineDot"
  });
  const {
    className,
    color = "grey",
    variant = "filled"
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded7);
  const ownerState = _extends({}, props, {
    color,
    variant
  });
  const classes = useUtilityClasses6(ownerState);
  return (0, import_jsx_runtime20.jsx)(TimelineDotRoot, _extends({
    className: clsx_m_default(classes.root, className),
    ownerState,
    ref
  }, other));
});
true ? TimelineDot.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The content of the component.
   */
  children: import_prop_types8.default.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: import_prop_types8.default.object,
  /**
   * @ignore
   */
  className: import_prop_types8.default.string,
  /**
   * The dot can have a different colors.
   * @default 'grey'
   */
  color: import_prop_types8.default.oneOfType([import_prop_types8.default.oneOf(["error", "grey", "info", "inherit", "primary", "secondary", "success", "warning"]), import_prop_types8.default.string]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types8.default.oneOfType([import_prop_types8.default.arrayOf(import_prop_types8.default.oneOfType([import_prop_types8.default.func, import_prop_types8.default.object, import_prop_types8.default.bool])), import_prop_types8.default.func, import_prop_types8.default.object]),
  /**
   * The dot can appear filled or outlined.
   * @default 'filled'
   */
  variant: import_prop_types8.default.oneOfType([import_prop_types8.default.oneOf(["filled", "outlined"]), import_prop_types8.default.string])
} : void 0;
var TimelineDot_default = TimelineDot;

// node_modules/@mui/lab/TimelineItem/TimelineItem.js
var React45 = __toESM(require_react());
var import_prop_types10 = __toESM(require_prop_types());

// node_modules/@mui/lab/TimelineOppositeContent/TimelineOppositeContent.js
var React44 = __toESM(require_react());
var import_prop_types9 = __toESM(require_prop_types());

// node_modules/@mui/lab/TimelineOppositeContent/timelineOppositeContentClasses.js
function getTimelineOppositeContentUtilityClass(slot) {
  return generateUtilityClass("MuiTimelineOppositeContent", slot);
}
var timelineOppositeContentClasses = generateUtilityClasses("MuiTimelineOppositeContent", ["root", "positionLeft", "positionRight", "positionAlternate", "positionAlternateReverse"]);
var timelineOppositeContentClasses_default = timelineOppositeContentClasses;

// node_modules/@mui/lab/TimelineOppositeContent/TimelineOppositeContent.js
var import_jsx_runtime21 = __toESM(require_jsx_runtime());
var _excluded8 = ["className"];
var useUtilityClasses7 = (ownerState) => {
  const {
    position,
    classes
  } = ownerState;
  const slots = {
    root: ["root", convertTimelinePositionToClass(position)]
  };
  return composeClasses(slots, getTimelineOppositeContentUtilityClass, classes);
};
var TimelineOppositeContentRoot = styled_default(Typography_default, {
  name: "MuiTimelineOppositeContent",
  slot: "Root",
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, styles[convertTimelinePositionToClass(ownerState.position)]];
  }
})(({
  ownerState
}) => _extends({
  padding: "6px 16px",
  marginRight: "auto",
  textAlign: "right",
  flex: 1
}, ownerState.position === "left" && {
  textAlign: "left"
}));
var TimelineOppositeContent = React44.forwardRef(function TimelineOppositeContent2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiTimelineOppositeContent"
  });
  const {
    className
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded8);
  const {
    position: positionContext
  } = React44.useContext(TimelineContext_default);
  const ownerState = _extends({}, props, {
    position: positionContext || "left"
  });
  const classes = useUtilityClasses7(ownerState);
  return (0, import_jsx_runtime21.jsx)(TimelineOppositeContentRoot, _extends({
    component: "div",
    className: clsx_m_default(classes.root, className),
    ownerState,
    ref
  }, other));
});
true ? TimelineOppositeContent.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The content of the component.
   */
  children: import_prop_types9.default.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: import_prop_types9.default.object,
  /**
   * @ignore
   */
  className: import_prop_types9.default.string,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types9.default.oneOfType([import_prop_types9.default.arrayOf(import_prop_types9.default.oneOfType([import_prop_types9.default.func, import_prop_types9.default.object, import_prop_types9.default.bool])), import_prop_types9.default.func, import_prop_types9.default.object])
} : void 0;
TimelineOppositeContent.muiName = "TimelineOppositeContent";
var TimelineOppositeContent_default = TimelineOppositeContent;

// node_modules/@mui/lab/TimelineItem/timelineItemClasses.js
function getTimelineItemUtilityClass(slot) {
  return generateUtilityClass("MuiTimelineItem", slot);
}
var timelineItemClasses = generateUtilityClasses("MuiTimelineItem", ["root", "positionLeft", "positionRight", "positionAlternate", "positionAlternateReverse", "missingOppositeContent"]);
var timelineItemClasses_default = timelineItemClasses;

// node_modules/@mui/lab/TimelineItem/TimelineItem.js
var import_jsx_runtime22 = __toESM(require_jsx_runtime());
var _excluded9 = ["position", "className"];
var useUtilityClasses8 = (ownerState) => {
  const {
    position,
    classes,
    hasOppositeContent
  } = ownerState;
  const slots = {
    root: ["root", convertTimelinePositionToClass(position), !hasOppositeContent && "missingOppositeContent"]
  };
  return composeClasses(slots, getTimelineItemUtilityClass, classes);
};
var TimelineItemRoot = styled_default("li", {
  name: "MuiTimelineItem",
  slot: "Root",
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, styles[convertTimelinePositionToClass(ownerState.position)]];
  }
})(({
  ownerState
}) => _extends({
  listStyle: "none",
  display: "flex",
  position: "relative",
  minHeight: 70
}, ownerState.position === "left" && {
  flexDirection: "row-reverse"
}, (ownerState.position === "alternate" || ownerState.position === "alternate-reverse") && {
  [`&:nth-of-type(${ownerState.position === "alternate" ? "even" : "odd"})`]: {
    flexDirection: "row-reverse",
    [`& .${timelineContentClasses_default.root}`]: {
      textAlign: "right"
    },
    [`& .${timelineOppositeContentClasses_default.root}`]: {
      textAlign: "left"
    }
  }
}, !ownerState.hasOppositeContent && {
  "&:before": {
    content: '""',
    flex: 1,
    padding: "6px 16px"
  }
}));
var TimelineItem = React45.forwardRef(function TimelineItem2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiTimelineItem"
  });
  const {
    position: positionProp,
    className
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded9);
  const {
    position: positionContext
  } = React45.useContext(TimelineContext_default);
  let hasOppositeContent = false;
  React45.Children.forEach(props.children, (child) => {
    if (isMuiElement_default(child, ["TimelineOppositeContent"])) {
      hasOppositeContent = true;
    }
  });
  const ownerState = _extends({}, props, {
    position: positionProp || positionContext || "right",
    hasOppositeContent
  });
  const classes = useUtilityClasses8(ownerState);
  const contextValue = React45.useMemo(() => ({
    position: ownerState.position
  }), [ownerState.position]);
  return (0, import_jsx_runtime22.jsx)(TimelineContext_default.Provider, {
    value: contextValue,
    children: (0, import_jsx_runtime22.jsx)(TimelineItemRoot, _extends({
      className: clsx_m_default(classes.root, className),
      ownerState,
      ref
    }, other))
  });
});
true ? TimelineItem.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The content of the component.
   */
  children: import_prop_types10.default.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: import_prop_types10.default.object,
  /**
   * @ignore
   */
  className: import_prop_types10.default.string,
  /**
   * The position where the timeline's item should appear.
   */
  position: import_prop_types10.default.oneOf(["alternate-reverse", "alternate", "left", "right"]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types10.default.oneOfType([import_prop_types10.default.arrayOf(import_prop_types10.default.oneOfType([import_prop_types10.default.func, import_prop_types10.default.object, import_prop_types10.default.bool])), import_prop_types10.default.func, import_prop_types10.default.object])
} : void 0;
var TimelineItem_default = TimelineItem;

// node_modules/@mui/lab/TimelineSeparator/TimelineSeparator.js
var React46 = __toESM(require_react());
var import_prop_types11 = __toESM(require_prop_types());

// node_modules/@mui/lab/TimelineSeparator/timelineSeparatorClasses.js
function getTimelineSeparatorUtilityClass(slot) {
  return generateUtilityClass("MuiTimelineSeparator", slot);
}
var timelineSeparatorClasses = generateUtilityClasses("MuiTimelineSeparator", ["root"]);
var timelineSeparatorClasses_default = timelineSeparatorClasses;

// node_modules/@mui/lab/TimelineSeparator/TimelineSeparator.js
var import_jsx_runtime23 = __toESM(require_jsx_runtime());
var _excluded10 = ["className"];
var useUtilityClasses9 = (ownerState) => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ["root"]
  };
  return composeClasses(slots, getTimelineSeparatorUtilityClass, classes);
};
var TimelineSeparatorRoot = styled_default("div", {
  name: "MuiTimelineSeparator",
  slot: "Root",
  overridesResolver: (props, styles) => styles.root
})({
  display: "flex",
  flexDirection: "column",
  flex: 0,
  alignItems: "center"
});
var TimelineSeparator = React46.forwardRef(function TimelineSeparator2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiTimelineSeparator"
  });
  const {
    className
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded10);
  const ownerState = props;
  const classes = useUtilityClasses9(ownerState);
  return (0, import_jsx_runtime23.jsx)(TimelineSeparatorRoot, _extends({
    className: clsx_m_default(classes.root, className),
    ownerState,
    ref
  }, other));
});
true ? TimelineSeparator.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The content of the component.
   */
  children: import_prop_types11.default.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: import_prop_types11.default.object,
  /**
   * @ignore
   */
  className: import_prop_types11.default.string,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types11.default.oneOfType([import_prop_types11.default.arrayOf(import_prop_types11.default.oneOfType([import_prop_types11.default.func, import_prop_types11.default.object, import_prop_types11.default.bool])), import_prop_types11.default.func, import_prop_types11.default.object])
} : void 0;
var TimelineSeparator_default = TimelineSeparator;

// node_modules/@mui/lab/ToggleButton/ToggleButton.js
var React47 = __toESM(require_react());
var import_jsx_runtime24 = __toESM(require_jsx_runtime());
var warnedOnce35 = false;
var ToggleButton_default2 = React47.forwardRef(function DeprecatedToggleButton(props, ref) {
  if (!warnedOnce35) {
    console.warn(["MUI: The ToggleButton component was moved from the lab to the core.", "", "You should use `import { ToggleButton } from '@mui/material'`", "or `import ToggleButton from '@mui/material/ToggleButton'`"].join("\n"));
    warnedOnce35 = true;
  }
  return (0, import_jsx_runtime24.jsx)(ToggleButton_default, _extends({
    ref
  }, props));
});

// node_modules/@mui/lab/ToggleButtonGroup/ToggleButtonGroup.js
var React48 = __toESM(require_react());
var import_jsx_runtime25 = __toESM(require_jsx_runtime());
var warnedOnce36 = false;
var ToggleButtonGroup_default2 = React48.forwardRef(function DeprecatedToggleButtonGroup(props, ref) {
  if (!warnedOnce36) {
    console.warn(["MUI: The ToggleButtonGroup component was moved from the lab to the core.", "", "You should use `import { ToggleButtonGroup } from '@mui/material'`", "or `import ToggleButtonGroup from '@mui/material/ToggleButtonGroup'`"].join("\n"));
    warnedOnce36 = true;
  }
  return (0, import_jsx_runtime25.jsx)(ToggleButtonGroup_default, _extends({
    ref
  }, props));
});

// node_modules/@mui/lab/TreeItem/TreeItem.js
var React53 = __toESM(require_react());
var import_prop_types14 = __toESM(require_prop_types());

// node_modules/@mui/lab/TreeView/TreeViewContext.js
var React49 = __toESM(require_react());
var TreeViewContext = React49.createContext({});
if (true) {
  TreeViewContext.displayName = "TreeViewContext";
}
var TreeViewContext_default = TreeViewContext;

// node_modules/@mui/lab/TreeView/descendants.js
var React50 = __toESM(require_react());
var import_prop_types12 = __toESM(require_prop_types());
var import_jsx_runtime26 = __toESM(require_jsx_runtime());
var _excluded11 = ["element"];
function findIndex(array, comp) {
  for (let i = 0; i < array.length; i += 1) {
    if (comp(array[i])) {
      return i;
    }
  }
  return -1;
}
function binaryFindElement(array, element) {
  let start = 0;
  let end = array.length - 1;
  while (start <= end) {
    const middle = Math.floor((start + end) / 2);
    if (array[middle].element === element) {
      return middle;
    }
    if (array[middle].element.compareDocumentPosition(element) & Node.DOCUMENT_POSITION_PRECEDING) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
  }
  return start;
}
var DescendantContext = React50.createContext({});
if (true) {
  DescendantContext.displayName = "DescendantContext";
}
function usePrevious(value) {
  const ref = React50.useRef(null);
  React50.useEffect(() => {
    ref.current = value;
  }, [value]);
  return ref.current;
}
var noop = () => {
};
function useDescendant(descendant) {
  const [, forceUpdate] = React50.useState();
  const {
    registerDescendant = noop,
    unregisterDescendant = noop,
    descendants = [],
    parentId = null
  } = React50.useContext(DescendantContext);
  const index = findIndex(descendants, (item) => item.element === descendant.element);
  const previousDescendants = usePrevious(descendants);
  const someDescendantsHaveChanged = descendants.some((newDescendant, position) => {
    return previousDescendants && previousDescendants[position] && previousDescendants[position].element !== newDescendant.element;
  });
  useEnhancedEffect_default2(() => {
    if (descendant.element) {
      registerDescendant(_extends({}, descendant, {
        index
      }));
      return () => {
        unregisterDescendant(descendant.element);
      };
    }
    forceUpdate({});
    return void 0;
  }, [registerDescendant, unregisterDescendant, index, someDescendantsHaveChanged, descendant]);
  return {
    parentId,
    index
  };
}
function DescendantProvider(props) {
  const {
    children,
    id
  } = props;
  const [items, set] = React50.useState([]);
  const registerDescendant = React50.useCallback((_ref) => {
    let {
      element
    } = _ref, other = _objectWithoutPropertiesLoose(_ref, _excluded11);
    set((oldItems) => {
      let newItems;
      if (oldItems.length === 0) {
        return [_extends({}, other, {
          element,
          index: 0
        })];
      }
      const index = binaryFindElement(oldItems, element);
      if (oldItems[index] && oldItems[index].element === element) {
        newItems = oldItems;
      } else {
        const newItem = _extends({}, other, {
          element,
          index
        });
        newItems = oldItems.slice();
        newItems.splice(index, 0, newItem);
      }
      newItems.forEach((item, position) => {
        item.index = position;
      });
      return newItems;
    });
  }, []);
  const unregisterDescendant = React50.useCallback((element) => {
    set((oldItems) => oldItems.filter((item) => element !== item.element));
  }, []);
  const value = React50.useMemo(() => ({
    descendants: items,
    registerDescendant,
    unregisterDescendant,
    parentId: id
  }), [items, registerDescendant, unregisterDescendant, id]);
  return (0, import_jsx_runtime26.jsx)(DescendantContext.Provider, {
    value,
    children
  });
}
true ? DescendantProvider.propTypes = {
  children: import_prop_types12.default.node,
  id: import_prop_types12.default.string
} : void 0;

// node_modules/@mui/lab/TreeItem/TreeItemContent.js
var React52 = __toESM(require_react());
var import_prop_types13 = __toESM(require_prop_types());

// node_modules/@mui/lab/TreeItem/useTreeItem.js
var React51 = __toESM(require_react());
function useTreeItem(nodeId) {
  const {
    focus,
    isExpanded,
    isExpandable,
    isFocused,
    isDisabled,
    isSelected,
    multiSelect,
    selectNode,
    selectRange,
    toggleExpansion
  } = React51.useContext(TreeViewContext_default);
  const expandable = isExpandable ? isExpandable(nodeId) : false;
  const expanded = isExpanded ? isExpanded(nodeId) : false;
  const focused = isFocused ? isFocused(nodeId) : false;
  const disabled = isDisabled ? isDisabled(nodeId) : false;
  const selected = isSelected ? isSelected(nodeId) : false;
  const handleExpansion = (event) => {
    if (!disabled) {
      if (!focused) {
        focus(event, nodeId);
      }
      const multiple = multiSelect && (event.shiftKey || event.ctrlKey || event.metaKey);
      if (expandable && !(multiple && isExpanded(nodeId))) {
        toggleExpansion(event, nodeId);
      }
    }
  };
  const handleSelection = (event) => {
    if (!disabled) {
      if (!focused) {
        focus(event, nodeId);
      }
      const multiple = multiSelect && (event.shiftKey || event.ctrlKey || event.metaKey);
      if (multiple) {
        if (event.shiftKey) {
          selectRange(event, {
            end: nodeId
          });
        } else {
          selectNode(event, nodeId, true);
        }
      } else {
        selectNode(event, nodeId);
      }
    }
  };
  const preventSelection = (event) => {
    if (event.shiftKey || event.ctrlKey || event.metaKey || disabled) {
      event.preventDefault();
    }
  };
  return {
    disabled,
    expanded,
    selected,
    focused,
    handleExpansion,
    handleSelection,
    preventSelection
  };
}

// node_modules/@mui/lab/TreeItem/TreeItemContent.js
var import_jsx_runtime27 = __toESM(require_jsx_runtime());
var import_jsx_runtime28 = __toESM(require_jsx_runtime());
var _excluded12 = ["classes", "className", "displayIcon", "expansionIcon", "icon", "label", "nodeId", "onClick", "onMouseDown"];
var TreeItemContent = React52.forwardRef(function TreeItemContent2(props, ref) {
  const {
    classes,
    className,
    displayIcon,
    expansionIcon,
    icon: iconProp,
    label,
    nodeId,
    onClick,
    onMouseDown
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded12);
  const {
    disabled,
    expanded,
    selected,
    focused,
    handleExpansion,
    handleSelection,
    preventSelection
  } = useTreeItem(nodeId);
  const icon = iconProp || expansionIcon || displayIcon;
  const handleMouseDown = (event) => {
    preventSelection(event);
    if (onMouseDown) {
      onMouseDown(event);
    }
  };
  const handleClick = (event) => {
    handleExpansion(event);
    handleSelection(event);
    if (onClick) {
      onClick(event);
    }
  };
  return (
    /* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions -- Key event is handled by the TreeView */
    (0, import_jsx_runtime28.jsxs)("div", _extends({
      className: clsx_m_default(className, classes.root, expanded && classes.expanded, selected && classes.selected, focused && classes.focused, disabled && classes.disabled),
      onClick: handleClick,
      onMouseDown: handleMouseDown,
      ref
    }, other, {
      children: [(0, import_jsx_runtime27.jsx)("div", {
        className: classes.iconContainer,
        children: icon
      }), (0, import_jsx_runtime27.jsx)("div", {
        className: classes.label,
        children: label
      })]
    }))
  );
});
true ? TreeItemContent.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: import_prop_types13.default.object,
  /**
   * className applied to the root element.
   */
  className: import_prop_types13.default.string,
  /**
   * The icon to display next to the tree node's label. Either a parent or end icon.
   */
  displayIcon: import_prop_types13.default.node,
  /**
   * The icon to display next to the tree node's label. Either an expansion or collapse icon.
   */
  expansionIcon: import_prop_types13.default.node,
  /**
   * The icon to display next to the tree node's label.
   */
  icon: import_prop_types13.default.node,
  /**
   * The tree node label.
   */
  label: import_prop_types13.default.node,
  /**
   * The id of the node.
   */
  nodeId: import_prop_types13.default.string.isRequired,
  /**
   * @ignore
   */
  onClick: import_prop_types13.default.func,
  /**
   * @ignore
   */
  onMouseDown: import_prop_types13.default.func
} : void 0;
var TreeItemContent_default = TreeItemContent;

// node_modules/@mui/lab/TreeItem/treeItemClasses.js
function getTreeItemUtilityClass(slot) {
  return generateUtilityClass("MuiTreeItem", slot);
}
var treeItemClasses = generateUtilityClasses("MuiTreeItem", ["root", "group", "content", "expanded", "selected", "focused", "disabled", "iconContainer", "label"]);
var treeItemClasses_default = treeItemClasses;

// node_modules/@mui/lab/TreeItem/TreeItem.js
var import_jsx_runtime29 = __toESM(require_jsx_runtime());
var import_jsx_runtime30 = __toESM(require_jsx_runtime());
var _excluded13 = ["children", "className", "collapseIcon", "ContentComponent", "ContentProps", "endIcon", "expandIcon", "disabled", "icon", "id", "label", "nodeId", "onClick", "onMouseDown", "TransitionComponent", "TransitionProps"];
var useUtilityClasses10 = (ownerState) => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ["root"],
    content: ["content"],
    expanded: ["expanded"],
    selected: ["selected"],
    focused: ["focused"],
    disabled: ["disabled"],
    iconContainer: ["iconContainer"],
    label: ["label"],
    group: ["group"]
  };
  return composeClasses(slots, getTreeItemUtilityClass, classes);
};
var TreeItemRoot = styled_default("li", {
  name: "MuiTreeItem",
  slot: "Root",
  overridesResolver: (props, styles) => styles.root
})({
  listStyle: "none",
  margin: 0,
  padding: 0,
  outline: 0
});
var StyledTreeItemContent = styled_default(TreeItemContent_default, {
  name: "MuiTreeItem",
  slot: "Content",
  overridesResolver: (props, styles) => {
    return [styles.content, styles.iconContainer && {
      [`& .${treeItemClasses_default.iconContainer}`]: styles.iconContainer
    }, styles.label && {
      [`& .${treeItemClasses_default.label}`]: styles.label
    }];
  }
})(({
  theme
}) => ({
  padding: "0 8px",
  width: "100%",
  display: "flex",
  alignItems: "center",
  cursor: "pointer",
  WebkitTapHighlightColor: "transparent",
  "&:hover": {
    backgroundColor: (theme.vars || theme).palette.action.hover,
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      backgroundColor: "transparent"
    }
  },
  [`&.${treeItemClasses_default.disabled}`]: {
    opacity: (theme.vars || theme).palette.action.disabledOpacity,
    backgroundColor: "transparent"
  },
  [`&.${treeItemClasses_default.focused}`]: {
    backgroundColor: (theme.vars || theme).palette.action.focus
  },
  [`&.${treeItemClasses_default.selected}`]: {
    backgroundColor: theme.vars ? `rgba(${theme.vars.palette.primary.mainChannel} / ${theme.vars.palette.action.selectedOpacity})` : alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity),
    "&:hover": {
      backgroundColor: theme.vars ? `rgba(${theme.vars.palette.primary.mainChannel} / calc(${theme.vars.palette.action.selectedOpacity} + ${theme.vars.palette.action.hoverOpacity}))` : alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity + theme.palette.action.hoverOpacity),
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: theme.vars ? `rgba(${theme.vars.palette.primary.mainChannel} / ${theme.vars.palette.action.selectedOpacity})` : alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity)
      }
    },
    [`&.${treeItemClasses_default.focused}`]: {
      backgroundColor: theme.vars ? `rgba(${theme.vars.palette.primary.mainChannel} / calc(${theme.vars.palette.action.selectedOpacity} + ${theme.vars.palette.action.focusOpacity}))` : alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity + theme.palette.action.focusOpacity)
    }
  },
  [`& .${treeItemClasses_default.iconContainer}`]: {
    marginRight: 4,
    width: 15,
    display: "flex",
    flexShrink: 0,
    justifyContent: "center",
    "& svg": {
      fontSize: 18
    }
  },
  [`& .${treeItemClasses_default.label}`]: _extends({
    width: "100%",
    // fixes overflow - see https://github.com/mui/material-ui/issues/27372
    minWidth: 0,
    paddingLeft: 4,
    position: "relative"
  }, theme.typography.body1)
}));
var TreeItemGroup = styled_default(Collapse_default, {
  name: "MuiTreeItem",
  slot: "Group",
  overridesResolver: (props, styles) => styles.group
})({
  margin: 0,
  padding: 0,
  marginLeft: 17
});
var TreeItem = React53.forwardRef(function TreeItem2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiTreeItem"
  });
  const {
    children,
    className,
    collapseIcon,
    ContentComponent = TreeItemContent_default,
    ContentProps,
    endIcon,
    expandIcon,
    disabled: disabledProp,
    icon,
    id: idProp,
    label,
    nodeId,
    onClick,
    onMouseDown,
    TransitionComponent = Collapse_default,
    TransitionProps
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded13);
  const {
    icons: contextIcons = {},
    focus,
    isExpanded,
    isFocused,
    isSelected,
    isDisabled,
    multiSelect,
    disabledItemsFocusable,
    mapFirstChar,
    unMapFirstChar,
    registerNode,
    unregisterNode,
    treeId
  } = React53.useContext(TreeViewContext_default);
  let id = null;
  if (idProp != null) {
    id = idProp;
  } else if (treeId && nodeId) {
    id = `${treeId}-${nodeId}`;
  }
  const [treeitemElement, setTreeitemElement] = React53.useState(null);
  const contentRef = React53.useRef(null);
  const handleRef = useForkRef_default(setTreeitemElement, ref);
  const descendant = React53.useMemo(() => ({
    element: treeitemElement,
    id: nodeId
  }), [nodeId, treeitemElement]);
  const {
    index,
    parentId
  } = useDescendant(descendant);
  const expandable = Boolean(Array.isArray(children) ? children.length : children);
  const expanded = isExpanded ? isExpanded(nodeId) : false;
  const focused = isFocused ? isFocused(nodeId) : false;
  const selected = isSelected ? isSelected(nodeId) : false;
  const disabled = isDisabled ? isDisabled(nodeId) : false;
  const ownerState = _extends({}, props, {
    expanded,
    focused,
    selected,
    disabled
  });
  const classes = useUtilityClasses10(ownerState);
  let displayIcon;
  let expansionIcon;
  if (expandable) {
    if (!expanded) {
      expansionIcon = expandIcon || contextIcons.defaultExpandIcon;
    } else {
      expansionIcon = collapseIcon || contextIcons.defaultCollapseIcon;
    }
  }
  if (expandable) {
    displayIcon = contextIcons.defaultParentIcon;
  } else {
    displayIcon = endIcon || contextIcons.defaultEndIcon;
  }
  React53.useEffect(() => {
    if (registerNode && unregisterNode && index !== -1) {
      registerNode({
        id: nodeId,
        idAttribute: id,
        index,
        parentId,
        expandable,
        disabled: disabledProp
      });
      return () => {
        unregisterNode(nodeId);
      };
    }
    return void 0;
  }, [registerNode, unregisterNode, parentId, index, nodeId, expandable, disabledProp, id]);
  React53.useEffect(() => {
    if (mapFirstChar && unMapFirstChar && label) {
      mapFirstChar(nodeId, contentRef.current.textContent.substring(0, 1).toLowerCase());
      return () => {
        unMapFirstChar(nodeId);
      };
    }
    return void 0;
  }, [mapFirstChar, unMapFirstChar, nodeId, label]);
  let ariaSelected;
  if (multiSelect) {
    ariaSelected = selected;
  } else if (selected) {
    ariaSelected = true;
  }
  function handleFocus(event) {
    if (event.target === event.currentTarget) {
      let rootElement;
      if (typeof event.target.getRootNode === "function") {
        rootElement = event.target.getRootNode();
      } else {
        rootElement = ownerDocument_default(event.target);
      }
      rootElement.getElementById(treeId).focus({
        preventScroll: true
      });
    }
    const unfocusable = !disabledItemsFocusable && disabled;
    if (!focused && event.currentTarget === event.target && !unfocusable) {
      focus(event, nodeId);
    }
  }
  return (0, import_jsx_runtime30.jsxs)(TreeItemRoot, _extends({
    className: clsx_m_default(classes.root, className),
    role: "treeitem",
    "aria-expanded": expandable ? expanded : null,
    "aria-selected": ariaSelected,
    "aria-disabled": disabled || null,
    ref: handleRef,
    id,
    tabIndex: -1
  }, other, {
    ownerState,
    onFocus: handleFocus,
    children: [(0, import_jsx_runtime29.jsx)(StyledTreeItemContent, _extends({
      as: ContentComponent,
      ref: contentRef,
      classes: {
        root: classes.content,
        expanded: classes.expanded,
        selected: classes.selected,
        focused: classes.focused,
        disabled: classes.disabled,
        iconContainer: classes.iconContainer,
        label: classes.label
      },
      label,
      nodeId,
      onClick,
      onMouseDown,
      icon,
      expansionIcon,
      displayIcon,
      ownerState
    }, ContentProps)), children && (0, import_jsx_runtime29.jsx)(DescendantProvider, {
      id: nodeId,
      children: (0, import_jsx_runtime29.jsx)(TreeItemGroup, _extends({
        as: TransitionComponent,
        unmountOnExit: true,
        className: classes.group,
        in: expanded,
        component: "ul",
        role: "group"
      }, TransitionProps, {
        children
      }))
    })]
  }));
});
true ? TreeItem.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The content of the component.
   */
  children: import_prop_types14.default.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: import_prop_types14.default.object,
  /**
   * @ignore
   */
  className: import_prop_types14.default.string,
  /**
   * The icon used to collapse the node.
   */
  collapseIcon: import_prop_types14.default.node,
  /**
   * The component used for the content node.
   * @default TreeItemContent
   */
  ContentComponent: elementTypeAcceptingRef_default,
  /**
   * Props applied to ContentComponent
   */
  ContentProps: import_prop_types14.default.object,
  /**
   * If `true`, the node is disabled.
   * @default false
   */
  disabled: import_prop_types14.default.bool,
  /**
   * The icon displayed next to a end node.
   */
  endIcon: import_prop_types14.default.node,
  /**
   * The icon used to expand the node.
   */
  expandIcon: import_prop_types14.default.node,
  /**
   * The icon to display next to the tree node's label.
   */
  icon: import_prop_types14.default.node,
  /**
   * @ignore
   */
  id: import_prop_types14.default.string,
  /**
   * The tree node label.
   */
  label: import_prop_types14.default.node,
  /**
   * The id of the node.
   */
  nodeId: import_prop_types14.default.string.isRequired,
  /**
   * @ignore
   */
  onClick: import_prop_types14.default.func,
  /**
   * This prop isn't supported.
   * Use the `onNodeFocus` callback on the tree if you need to monitor a node's focus.
   */
  onFocus: unsupportedProp_default,
  /**
   * @ignore
   */
  onMouseDown: import_prop_types14.default.func,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types14.default.oneOfType([import_prop_types14.default.arrayOf(import_prop_types14.default.oneOfType([import_prop_types14.default.func, import_prop_types14.default.object, import_prop_types14.default.bool])), import_prop_types14.default.func, import_prop_types14.default.object]),
  /**
   * The component used for the transition.
   * [Follow this guide](/material-ui/transitions/#transitioncomponent-prop) to learn more about the requirements for this component.
   * @default Collapse
   */
  TransitionComponent: import_prop_types14.default.elementType,
  /**
   * Props applied to the transition element.
   * By default, the element is based on this [`Transition`](http://reactcommunity.org/react-transition-group/transition/) component.
   */
  TransitionProps: import_prop_types14.default.object
} : void 0;
var TreeItem_default = TreeItem;

// node_modules/@mui/lab/TreeView/TreeView.js
var React54 = __toESM(require_react());
var import_prop_types15 = __toESM(require_prop_types());

// node_modules/@mui/lab/TreeView/treeViewClasses.js
function getTreeViewUtilityClass(slot) {
  return generateUtilityClass("MuiTreeView", slot);
}
var treeViewClasses = generateUtilityClasses("MuiTreeView", ["root"]);
var treeViewClasses_default = treeViewClasses;

// node_modules/@mui/lab/TreeView/TreeView.js
var import_jsx_runtime31 = __toESM(require_jsx_runtime());
var _excluded14 = ["children", "className", "defaultCollapseIcon", "defaultEndIcon", "defaultExpanded", "defaultExpandIcon", "defaultParentIcon", "defaultSelected", "disabledItemsFocusable", "disableSelection", "expanded", "id", "multiSelect", "onBlur", "onFocus", "onKeyDown", "onNodeFocus", "onNodeSelect", "onNodeToggle", "selected"];
var useUtilityClasses11 = (ownerState) => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ["root"]
  };
  return composeClasses(slots, getTreeViewUtilityClass, classes);
};
var TreeViewRoot = styled_default("ul", {
  name: "MuiTreeView",
  slot: "Root",
  overridesResolver: (props, styles) => styles.root
})({
  padding: 0,
  margin: 0,
  listStyle: "none",
  outline: 0
});
function isPrintableCharacter(string) {
  return string && string.length === 1 && string.match(/\S/);
}
function findNextFirstChar(firstChars, startIndex, char) {
  for (let i = startIndex; i < firstChars.length; i += 1) {
    if (char === firstChars[i]) {
      return i;
    }
  }
  return -1;
}
function noopSelection() {
  return false;
}
var defaultDefaultExpanded = [];
var defaultDefaultSelected = [];
var TreeView = React54.forwardRef(function TreeView2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiTreeView"
  });
  const {
    children,
    className,
    defaultCollapseIcon,
    defaultEndIcon,
    defaultExpanded = defaultDefaultExpanded,
    defaultExpandIcon,
    defaultParentIcon,
    defaultSelected = defaultDefaultSelected,
    disabledItemsFocusable = false,
    disableSelection = false,
    expanded: expandedProp,
    id: idProp,
    multiSelect = false,
    onBlur,
    onFocus,
    onKeyDown,
    onNodeFocus,
    onNodeSelect,
    onNodeToggle,
    selected: selectedProp
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded14);
  const theme = useTheme();
  const isRtl = theme.direction === "rtl";
  const ownerState = _extends({}, props, {
    defaultExpanded,
    defaultSelected,
    disabledItemsFocusable,
    disableSelection,
    multiSelect
  });
  const classes = useUtilityClasses11(ownerState);
  const treeId = useId_default(idProp);
  const treeRef = React54.useRef(null);
  const handleRef = useForkRef_default(treeRef, ref);
  const [focusedNodeId, setFocusedNodeId] = React54.useState(null);
  const nodeMap = React54.useRef({});
  const firstCharMap = React54.useRef({});
  const [expanded, setExpandedState] = useControlled_default({
    controlled: expandedProp,
    default: defaultExpanded,
    name: "TreeView",
    state: "expanded"
  });
  const [selected, setSelectedState] = useControlled_default({
    controlled: selectedProp,
    default: defaultSelected,
    name: "TreeView",
    state: "selected"
  });
  const isExpanded = React54.useCallback((id) => Array.isArray(expanded) ? expanded.indexOf(id) !== -1 : false, [expanded]);
  const isExpandable = React54.useCallback((id) => nodeMap.current[id] && nodeMap.current[id].expandable, []);
  const isSelected = React54.useCallback((id) => Array.isArray(selected) ? selected.indexOf(id) !== -1 : selected === id, [selected]);
  const isDisabled = React54.useCallback((id) => {
    let node = nodeMap.current[id];
    if (!node) {
      return false;
    }
    if (node.disabled) {
      return true;
    }
    while (node.parentId != null) {
      node = nodeMap.current[node.parentId];
      if (node.disabled) {
        return true;
      }
    }
    return false;
  }, []);
  const isFocused = (id) => focusedNodeId === id;
  const getChildrenIds = (id) => Object.keys(nodeMap.current).map((key) => {
    return nodeMap.current[key];
  }).filter((node) => node.parentId === id).sort((a, b) => a.index - b.index).map((child) => child.id);
  const getNavigableChildrenIds = (id) => {
    let childrenIds = getChildrenIds(id);
    if (!disabledItemsFocusable) {
      childrenIds = childrenIds.filter((node) => !isDisabled(node));
    }
    return childrenIds;
  };
  const getNextNode = (id) => {
    if (isExpanded(id) && getNavigableChildrenIds(id).length > 0) {
      return getNavigableChildrenIds(id)[0];
    }
    let node = nodeMap.current[id];
    while (node != null) {
      const siblings = getNavigableChildrenIds(node.parentId);
      const nextSibling = siblings[siblings.indexOf(node.id) + 1];
      if (nextSibling) {
        return nextSibling;
      }
      node = nodeMap.current[node.parentId];
    }
    return null;
  };
  const getPreviousNode = (id) => {
    const node = nodeMap.current[id];
    const siblings = getNavigableChildrenIds(node.parentId);
    const nodeIndex = siblings.indexOf(id);
    if (nodeIndex === 0) {
      return node.parentId;
    }
    let currentNode = siblings[nodeIndex - 1];
    while (isExpanded(currentNode) && getNavigableChildrenIds(currentNode).length > 0) {
      currentNode = getNavigableChildrenIds(currentNode).pop();
    }
    return currentNode;
  };
  const getLastNode = () => {
    let lastNode = getNavigableChildrenIds(null).pop();
    while (isExpanded(lastNode)) {
      lastNode = getNavigableChildrenIds(lastNode).pop();
    }
    return lastNode;
  };
  const getFirstNode = () => getNavigableChildrenIds(null)[0];
  const getParent = (id) => nodeMap.current[id].parentId;
  const findOrderInTremauxTree = (nodeAId, nodeBId) => {
    if (nodeAId === nodeBId) {
      return [nodeAId, nodeBId];
    }
    const nodeA = nodeMap.current[nodeAId];
    const nodeB = nodeMap.current[nodeBId];
    if (nodeA.parentId === nodeB.id || nodeB.parentId === nodeA.id) {
      return nodeB.parentId === nodeA.id ? [nodeA.id, nodeB.id] : [nodeB.id, nodeA.id];
    }
    const aFamily = [nodeA.id];
    const bFamily = [nodeB.id];
    let aAncestor = nodeA.parentId;
    let bAncestor = nodeB.parentId;
    let aAncestorIsCommon = bFamily.indexOf(aAncestor) !== -1;
    let bAncestorIsCommon = aFamily.indexOf(bAncestor) !== -1;
    let continueA = true;
    let continueB = true;
    while (!bAncestorIsCommon && !aAncestorIsCommon) {
      if (continueA) {
        aFamily.push(aAncestor);
        aAncestorIsCommon = bFamily.indexOf(aAncestor) !== -1;
        continueA = aAncestor !== null;
        if (!aAncestorIsCommon && continueA) {
          aAncestor = nodeMap.current[aAncestor].parentId;
        }
      }
      if (continueB && !aAncestorIsCommon) {
        bFamily.push(bAncestor);
        bAncestorIsCommon = aFamily.indexOf(bAncestor) !== -1;
        continueB = bAncestor !== null;
        if (!bAncestorIsCommon && continueB) {
          bAncestor = nodeMap.current[bAncestor].parentId;
        }
      }
    }
    const commonAncestor = aAncestorIsCommon ? aAncestor : bAncestor;
    const ancestorFamily = getChildrenIds(commonAncestor);
    const aSide = aFamily[aFamily.indexOf(commonAncestor) - 1];
    const bSide = bFamily[bFamily.indexOf(commonAncestor) - 1];
    return ancestorFamily.indexOf(aSide) < ancestorFamily.indexOf(bSide) ? [nodeAId, nodeBId] : [nodeBId, nodeAId];
  };
  const getNodesInRange = (nodeA, nodeB) => {
    const [first, last] = findOrderInTremauxTree(nodeA, nodeB);
    const nodes = [first];
    let current = first;
    while (current !== last) {
      current = getNextNode(current);
      nodes.push(current);
    }
    return nodes;
  };
  const focus = (event, id) => {
    if (id) {
      setFocusedNodeId(id);
      if (onNodeFocus) {
        onNodeFocus(event, id);
      }
    }
  };
  const focusNextNode = (event, id) => focus(event, getNextNode(id));
  const focusPreviousNode = (event, id) => focus(event, getPreviousNode(id));
  const focusFirstNode = (event) => focus(event, getFirstNode());
  const focusLastNode = (event) => focus(event, getLastNode());
  const focusByFirstCharacter = (event, id, char) => {
    let start;
    let index;
    const lowercaseChar = char.toLowerCase();
    const firstCharIds = [];
    const firstChars = [];
    Object.keys(firstCharMap.current).forEach((nodeId) => {
      const firstChar = firstCharMap.current[nodeId];
      const map = nodeMap.current[nodeId];
      const visible = map.parentId ? isExpanded(map.parentId) : true;
      const shouldBeSkipped = disabledItemsFocusable ? false : isDisabled(nodeId);
      if (visible && !shouldBeSkipped) {
        firstCharIds.push(nodeId);
        firstChars.push(firstChar);
      }
    });
    start = firstCharIds.indexOf(id) + 1;
    if (start >= firstCharIds.length) {
      start = 0;
    }
    index = findNextFirstChar(firstChars, start, lowercaseChar);
    if (index === -1) {
      index = findNextFirstChar(firstChars, 0, lowercaseChar);
    }
    if (index > -1) {
      focus(event, firstCharIds[index]);
    }
  };
  const toggleExpansion = (event, value = focusedNodeId) => {
    let newExpanded;
    if (expanded.indexOf(value) !== -1) {
      newExpanded = expanded.filter((id) => id !== value);
    } else {
      newExpanded = [value].concat(expanded);
    }
    if (onNodeToggle) {
      onNodeToggle(event, newExpanded);
    }
    setExpandedState(newExpanded);
  };
  const expandAllSiblings = (event, id) => {
    const map = nodeMap.current[id];
    const siblings = getChildrenIds(map.parentId);
    const diff = siblings.filter((child) => isExpandable(child) && !isExpanded(child));
    const newExpanded = expanded.concat(diff);
    if (diff.length > 0) {
      setExpandedState(newExpanded);
      if (onNodeToggle) {
        onNodeToggle(event, newExpanded);
      }
    }
  };
  const lastSelectedNode = React54.useRef(null);
  const lastSelectionWasRange = React54.useRef(false);
  const currentRangeSelection = React54.useRef([]);
  const handleRangeArrowSelect = (event, nodes) => {
    let base = selected.slice();
    const {
      start,
      next,
      current
    } = nodes;
    if (!next || !current) {
      return;
    }
    if (currentRangeSelection.current.indexOf(current) === -1) {
      currentRangeSelection.current = [];
    }
    if (lastSelectionWasRange.current) {
      if (currentRangeSelection.current.indexOf(next) !== -1) {
        base = base.filter((id) => id === start || id !== current);
        currentRangeSelection.current = currentRangeSelection.current.filter((id) => id === start || id !== current);
      } else {
        base.push(next);
        currentRangeSelection.current.push(next);
      }
    } else {
      base.push(next);
      currentRangeSelection.current.push(current, next);
    }
    if (onNodeSelect) {
      onNodeSelect(event, base);
    }
    setSelectedState(base);
  };
  const handleRangeSelect = (event, nodes) => {
    let base = selected.slice();
    const {
      start,
      end
    } = nodes;
    if (lastSelectionWasRange.current) {
      base = base.filter((id) => currentRangeSelection.current.indexOf(id) === -1);
    }
    let range = getNodesInRange(start, end);
    range = range.filter((node) => !isDisabled(node));
    currentRangeSelection.current = range;
    let newSelected = base.concat(range);
    newSelected = newSelected.filter((id, i) => newSelected.indexOf(id) === i);
    if (onNodeSelect) {
      onNodeSelect(event, newSelected);
    }
    setSelectedState(newSelected);
  };
  const handleMultipleSelect = (event, value) => {
    let newSelected;
    if (selected.indexOf(value) !== -1) {
      newSelected = selected.filter((id) => id !== value);
    } else {
      newSelected = [value].concat(selected);
    }
    if (onNodeSelect) {
      onNodeSelect(event, newSelected);
    }
    setSelectedState(newSelected);
  };
  const handleSingleSelect = (event, value) => {
    const newSelected = multiSelect ? [value] : value;
    if (onNodeSelect) {
      onNodeSelect(event, newSelected);
    }
    setSelectedState(newSelected);
  };
  const selectNode = (event, id, multiple = false) => {
    if (id) {
      if (multiple) {
        handleMultipleSelect(event, id);
      } else {
        handleSingleSelect(event, id);
      }
      lastSelectedNode.current = id;
      lastSelectionWasRange.current = false;
      currentRangeSelection.current = [];
      return true;
    }
    return false;
  };
  const selectRange = (event, nodes, stacked = false) => {
    const {
      start = lastSelectedNode.current,
      end,
      current
    } = nodes;
    if (stacked) {
      handleRangeArrowSelect(event, {
        start,
        next: end,
        current
      });
    } else if (start != null && end != null) {
      handleRangeSelect(event, {
        start,
        end
      });
    }
    lastSelectionWasRange.current = true;
  };
  const rangeSelectToFirst = (event, id) => {
    if (!lastSelectedNode.current) {
      lastSelectedNode.current = id;
    }
    const start = lastSelectionWasRange.current ? lastSelectedNode.current : id;
    selectRange(event, {
      start,
      end: getFirstNode()
    });
  };
  const rangeSelectToLast = (event, id) => {
    if (!lastSelectedNode.current) {
      lastSelectedNode.current = id;
    }
    const start = lastSelectionWasRange.current ? lastSelectedNode.current : id;
    selectRange(event, {
      start,
      end: getLastNode()
    });
  };
  const selectNextNode = (event, id) => {
    if (!isDisabled(getNextNode(id))) {
      selectRange(event, {
        end: getNextNode(id),
        current: id
      }, true);
    }
  };
  const selectPreviousNode = (event, id) => {
    if (!isDisabled(getPreviousNode(id))) {
      selectRange(event, {
        end: getPreviousNode(id),
        current: id
      }, true);
    }
  };
  const selectAllNodes = (event) => {
    selectRange(event, {
      start: getFirstNode(),
      end: getLastNode()
    });
  };
  const registerNode = React54.useCallback((node) => {
    const {
      id,
      index,
      parentId,
      expandable,
      idAttribute,
      disabled
    } = node;
    nodeMap.current[id] = {
      id,
      index,
      parentId,
      expandable,
      idAttribute,
      disabled
    };
  }, []);
  const unregisterNode = React54.useCallback((id) => {
    const newMap = _extends({}, nodeMap.current);
    delete newMap[id];
    nodeMap.current = newMap;
    setFocusedNodeId((oldFocusedNodeId) => {
      if (oldFocusedNodeId === id && treeRef.current === ownerDocument_default(treeRef.current).activeElement) {
        return getChildrenIds(null)[0];
      }
      return oldFocusedNodeId;
    });
  }, []);
  const mapFirstChar = React54.useCallback((id, firstChar) => {
    firstCharMap.current[id] = firstChar;
  }, []);
  const unMapFirstChar = React54.useCallback((id) => {
    const newMap = _extends({}, firstCharMap.current);
    delete newMap[id];
    firstCharMap.current = newMap;
  }, []);
  const handleNextArrow = (event) => {
    if (isExpandable(focusedNodeId)) {
      if (isExpanded(focusedNodeId)) {
        focusNextNode(event, focusedNodeId);
      } else if (!isDisabled(focusedNodeId)) {
        toggleExpansion(event);
      }
    }
    return true;
  };
  const handlePreviousArrow = (event) => {
    if (isExpanded(focusedNodeId) && !isDisabled(focusedNodeId)) {
      toggleExpansion(event, focusedNodeId);
      return true;
    }
    const parent = getParent(focusedNodeId);
    if (parent) {
      focus(event, parent);
      return true;
    }
    return false;
  };
  const handleKeyDown = (event) => {
    let flag = false;
    const key = event.key;
    if (event.altKey || event.currentTarget !== event.target || !focusedNodeId) {
      return;
    }
    const ctrlPressed = event.ctrlKey || event.metaKey;
    switch (key) {
      case " ":
        if (!disableSelection && !isDisabled(focusedNodeId)) {
          if (multiSelect && event.shiftKey) {
            selectRange(event, {
              end: focusedNodeId
            });
            flag = true;
          } else if (multiSelect) {
            flag = selectNode(event, focusedNodeId, true);
          } else {
            flag = selectNode(event, focusedNodeId);
          }
        }
        event.stopPropagation();
        break;
      case "Enter":
        if (!isDisabled(focusedNodeId)) {
          if (isExpandable(focusedNodeId)) {
            toggleExpansion(event);
            flag = true;
          } else if (multiSelect) {
            flag = selectNode(event, focusedNodeId, true);
          } else {
            flag = selectNode(event, focusedNodeId);
          }
        }
        event.stopPropagation();
        break;
      case "ArrowDown":
        if (multiSelect && event.shiftKey && !disableSelection) {
          selectNextNode(event, focusedNodeId);
        }
        focusNextNode(event, focusedNodeId);
        flag = true;
        break;
      case "ArrowUp":
        if (multiSelect && event.shiftKey && !disableSelection) {
          selectPreviousNode(event, focusedNodeId);
        }
        focusPreviousNode(event, focusedNodeId);
        flag = true;
        break;
      case "ArrowRight":
        if (isRtl) {
          flag = handlePreviousArrow(event);
        } else {
          flag = handleNextArrow(event);
        }
        break;
      case "ArrowLeft":
        if (isRtl) {
          flag = handleNextArrow(event);
        } else {
          flag = handlePreviousArrow(event);
        }
        break;
      case "Home":
        if (multiSelect && ctrlPressed && event.shiftKey && !disableSelection && !isDisabled(focusedNodeId)) {
          rangeSelectToFirst(event, focusedNodeId);
        }
        focusFirstNode(event);
        flag = true;
        break;
      case "End":
        if (multiSelect && ctrlPressed && event.shiftKey && !disableSelection && !isDisabled(focusedNodeId)) {
          rangeSelectToLast(event, focusedNodeId);
        }
        focusLastNode(event);
        flag = true;
        break;
      default:
        if (key === "*") {
          expandAllSiblings(event, focusedNodeId);
          flag = true;
        } else if (multiSelect && ctrlPressed && key.toLowerCase() === "a" && !disableSelection) {
          selectAllNodes(event);
          flag = true;
        } else if (!ctrlPressed && !event.shiftKey && isPrintableCharacter(key)) {
          focusByFirstCharacter(event, focusedNodeId, key);
          flag = true;
        }
    }
    if (flag) {
      event.preventDefault();
      event.stopPropagation();
    }
    if (onKeyDown) {
      onKeyDown(event);
    }
  };
  const handleFocus = (event) => {
    if (event.target === event.currentTarget) {
      const firstSelected = Array.isArray(selected) ? selected[0] : selected;
      focus(event, firstSelected || getNavigableChildrenIds(null)[0]);
    }
    if (onFocus) {
      onFocus(event);
    }
  };
  const handleBlur = (event) => {
    setFocusedNodeId(null);
    if (onBlur) {
      onBlur(event);
    }
  };
  const activeDescendant = nodeMap.current[focusedNodeId] ? nodeMap.current[focusedNodeId].idAttribute : null;
  return (0, import_jsx_runtime31.jsx)(TreeViewContext_default.Provider, {
    // TODO: fix this lint error
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    value: {
      icons: {
        defaultCollapseIcon,
        defaultExpandIcon,
        defaultParentIcon,
        defaultEndIcon
      },
      focus,
      toggleExpansion,
      isExpanded,
      isExpandable,
      isFocused,
      isSelected,
      isDisabled,
      selectNode: disableSelection ? noopSelection : selectNode,
      selectRange: disableSelection ? noopSelection : selectRange,
      multiSelect,
      disabledItemsFocusable,
      mapFirstChar,
      unMapFirstChar,
      registerNode,
      unregisterNode,
      treeId
    },
    children: (0, import_jsx_runtime31.jsx)(DescendantProvider, {
      children: (0, import_jsx_runtime31.jsx)(TreeViewRoot, _extends({
        role: "tree",
        id: treeId,
        "aria-activedescendant": activeDescendant,
        "aria-multiselectable": multiSelect,
        className: clsx_m_default(classes.root, className),
        ref: handleRef,
        tabIndex: 0,
        onKeyDown: handleKeyDown,
        onFocus: handleFocus,
        onBlur: handleBlur,
        ownerState
      }, other, {
        children
      }))
    })
  });
});
true ? TreeView.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The content of the component.
   */
  children: import_prop_types15.default.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: import_prop_types15.default.object,
  /**
   * @ignore
   */
  className: import_prop_types15.default.string,
  /**
   * The default icon used to collapse the node.
   */
  defaultCollapseIcon: import_prop_types15.default.node,
  /**
   * The default icon displayed next to a end node. This is applied to all
   * tree nodes and can be overridden by the TreeItem `icon` prop.
   */
  defaultEndIcon: import_prop_types15.default.node,
  /**
   * Expanded node ids. (Uncontrolled)
   * @default []
   */
  defaultExpanded: import_prop_types15.default.arrayOf(import_prop_types15.default.string),
  /**
   * The default icon used to expand the node.
   */
  defaultExpandIcon: import_prop_types15.default.node,
  /**
   * The default icon displayed next to a parent node. This is applied to all
   * parent nodes and can be overridden by the TreeItem `icon` prop.
   */
  defaultParentIcon: import_prop_types15.default.node,
  /**
   * Selected node ids. (Uncontrolled)
   * When `multiSelect` is true this takes an array of strings; when false (default) a string.
   * @default []
   */
  defaultSelected: import_prop_types15.default.oneOfType([import_prop_types15.default.arrayOf(import_prop_types15.default.string), import_prop_types15.default.string]),
  /**
   * If `true`, will allow focus on disabled items.
   * @default false
   */
  disabledItemsFocusable: import_prop_types15.default.bool,
  /**
   * If `true` selection is disabled.
   * @default false
   */
  disableSelection: import_prop_types15.default.bool,
  /**
   * Expanded node ids. (Controlled)
   */
  expanded: import_prop_types15.default.arrayOf(import_prop_types15.default.string),
  /**
   * This prop is used to help implement the accessibility logic.
   * If you don't provide this prop. It falls back to a randomly generated id.
   */
  id: import_prop_types15.default.string,
  /**
   * If true `ctrl` and `shift` will trigger multiselect.
   * @default false
   */
  multiSelect: import_prop_types15.default.bool,
  /**
   * @ignore
   */
  onBlur: import_prop_types15.default.func,
  /**
   * @ignore
   */
  onFocus: import_prop_types15.default.func,
  /**
   * @ignore
   */
  onKeyDown: import_prop_types15.default.func,
  /**
   * Callback fired when tree items are focused.
   *
   * @param {React.SyntheticEvent} event The event source of the callback **Warning**: This is a generic event not a focus event.
   * @param {string} value of the focused node.
   */
  onNodeFocus: import_prop_types15.default.func,
  /**
   * Callback fired when tree items are selected/unselected.
   *
   * @param {React.SyntheticEvent} event The event source of the callback
   * @param {string[] | string} nodeIds Ids of the selected nodes. When `multiSelect` is true
   * this is an array of strings; when false (default) a string.
   */
  onNodeSelect: import_prop_types15.default.func,
  /**
   * Callback fired when tree items are expanded/collapsed.
   *
   * @param {React.SyntheticEvent} event The event source of the callback.
   * @param {array} nodeIds The ids of the expanded nodes.
   */
  onNodeToggle: import_prop_types15.default.func,
  /**
   * Selected node ids. (Controlled)
   * When `multiSelect` is true this takes an array of strings; when false (default) a string.
   */
  selected: import_prop_types15.default.oneOfType([import_prop_types15.default.arrayOf(import_prop_types15.default.string), import_prop_types15.default.string]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types15.default.oneOfType([import_prop_types15.default.arrayOf(import_prop_types15.default.oneOfType([import_prop_types15.default.func, import_prop_types15.default.object, import_prop_types15.default.bool])), import_prop_types15.default.func, import_prop_types15.default.object])
} : void 0;
var TreeView_default = TreeView;

// node_modules/@mui/lab/YearPicker/YearPicker.js
var warnedOnce37 = false;
var warn24 = () => {
  if (!warnedOnce37) {
    console.warn(["MUI: The YearPicker component was moved from `@mui/lab` to `@mui/x-date-pickers`.", "", "You should use `import { YearPicker } from '@mui/x-date-pickers'`", "or `import { YearPicker } from '@mui/x-date-pickers/YearPicker'`", "", "More information about this migration on our blog: https://mui.com/blog/lab-date-pickers-to-mui-x/."].join("\n"));
    warnedOnce37 = true;
  }
};
var YearPicker = function DeprecatedYearPicker() {
  warn24();
  return null;
};
var YearPicker_default = YearPicker;
var yearPickerClasses = {};
var getYearPickerUtilityClass = (slot) => {
  warn24();
  return "";
};

// node_modules/@mui/lab/Masonry/Masonry.js
var ReactDOM = __toESM(require_react_dom());
var import_prop_types16 = __toESM(require_prop_types());
var React55 = __toESM(require_react());

// node_modules/@mui/lab/Masonry/masonryClasses.js
function getMasonryUtilityClass(slot) {
  return generateUtilityClass("MuiMasonry", slot);
}
var masonryClasses = generateUtilityClasses("MuiMasonry", ["root"]);
var masonryClasses_default = masonryClasses;

// node_modules/@mui/lab/Masonry/Masonry.js
var import_jsx_runtime32 = __toESM(require_jsx_runtime());
var import_jsx_runtime33 = __toESM(require_jsx_runtime());
var _excluded15 = ["children", "className", "component", "columns", "spacing", "defaultColumns", "defaultHeight", "defaultSpacing"];
var parseToNumber = (val) => {
  return Number(val.replace("px", ""));
};
var lineBreakStyle = {
  flexBasis: "100%",
  width: 0,
  margin: 0,
  padding: 0
};
var useUtilityClasses12 = (ownerState) => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ["root"]
  };
  return composeClasses(slots, getMasonryUtilityClass, classes);
};
var getStyle = ({
  ownerState,
  theme
}) => {
  let styles = {
    width: "100%",
    display: "flex",
    flexFlow: "column wrap",
    alignContent: "flex-start",
    boxSizing: "border-box",
    "& > *": {
      boxSizing: "border-box"
    }
  };
  const stylesSSR = {};
  if (ownerState.isSSR) {
    const orderStyleSSR = {};
    const defaultSpacing = parseToNumber(theme.spacing(ownerState.defaultSpacing));
    for (let i = 1; i <= ownerState.defaultColumns; i += 1) {
      orderStyleSSR[`&:nth-of-type(${ownerState.defaultColumns}n+${i % ownerState.defaultColumns})`] = {
        order: i
      };
    }
    stylesSSR.height = ownerState.defaultHeight;
    stylesSSR.margin = -(defaultSpacing / 2);
    stylesSSR["& > *"] = _extends({}, styles["& > *"], orderStyleSSR, {
      margin: defaultSpacing / 2,
      width: `calc(${(100 / ownerState.defaultColumns).toFixed(2)}% - ${defaultSpacing}px)`
    });
    return _extends({}, styles, stylesSSR);
  }
  const spacingValues = resolveBreakpointValues({
    values: ownerState.spacing,
    breakpoints: theme.breakpoints.values
  });
  const transformer = createUnarySpacing(theme);
  const spacingStyleFromPropValue = (propValue) => {
    let spacing;
    if (typeof propValue === "string" && !Number.isNaN(Number(propValue)) || typeof propValue === "number") {
      const themeSpacingValue = Number(propValue);
      spacing = getValue(transformer, themeSpacingValue);
    } else {
      spacing = propValue;
    }
    return _extends({
      margin: `calc(0px - (${spacing} / 2))`,
      "& > *": {
        margin: `calc(${spacing} / 2)`
      }
    }, ownerState.maxColumnHeight && {
      height: typeof spacing === "number" ? Math.ceil(ownerState.maxColumnHeight + parseToNumber(spacing)) : `calc(${ownerState.maxColumnHeight}px + ${spacing})`
    });
  };
  styles = deepmerge(styles, handleBreakpoints({
    theme
  }, spacingValues, spacingStyleFromPropValue));
  const columnValues = resolveBreakpointValues({
    values: ownerState.columns,
    breakpoints: theme.breakpoints.values
  });
  const columnStyleFromPropValue = (propValue) => {
    const columnValue = Number(propValue);
    const width = `${(100 / columnValue).toFixed(2)}%`;
    const spacing = typeof spacingValues === "string" && !Number.isNaN(Number(spacingValues)) || typeof spacingValues === "number" ? getValue(transformer, Number(spacingValues)) : "0px";
    return {
      "& > *": {
        width: `calc(${width} - ${spacing})`
      }
    };
  };
  styles = deepmerge(styles, handleBreakpoints({
    theme
  }, columnValues, columnStyleFromPropValue));
  if (typeof spacingValues === "object") {
    styles = deepmerge(styles, handleBreakpoints({
      theme
    }, spacingValues, (propValue, breakpoint) => {
      if (breakpoint) {
        const themeSpacingValue = Number(propValue);
        const lastBreakpoint = Object.keys(columnValues).pop();
        const spacing = getValue(transformer, themeSpacingValue);
        const column = typeof columnValues === "object" ? columnValues[breakpoint] || columnValues[lastBreakpoint] : columnValues;
        const width = `${(100 / column).toFixed(2)}%`;
        return {
          "& > *": {
            width: `calc(${width} - ${spacing})`
          }
        };
      }
      return null;
    }));
  }
  return styles;
};
var MasonryRoot = styled_default("div", {
  name: "MuiMasonry",
  slot: "Root",
  overridesResolver: (props, styles) => {
    return [styles.root];
  }
})(getStyle);
var Masonry = React55.forwardRef(function Masonry2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiMasonry"
  });
  const {
    children,
    className,
    component = "div",
    columns = 4,
    spacing = 1,
    defaultColumns,
    defaultHeight,
    defaultSpacing
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded15);
  const masonryRef = React55.useRef();
  const [maxColumnHeight, setMaxColumnHeight] = React55.useState();
  const isSSR = !maxColumnHeight && defaultHeight && defaultColumns !== void 0 && defaultSpacing !== void 0;
  const [numberOfLineBreaks, setNumberOfLineBreaks] = React55.useState(isSSR ? defaultColumns - 1 : 0);
  const ownerState = _extends({}, props, {
    spacing,
    columns,
    maxColumnHeight,
    defaultColumns,
    defaultHeight,
    defaultSpacing,
    isSSR
  });
  const classes = useUtilityClasses12(ownerState);
  const handleResize = (masonryChildren) => {
    if (!masonryRef.current || !masonryChildren || masonryChildren.length === 0) {
      return;
    }
    const masonry = masonryRef.current;
    const masonryFirstChild = masonryRef.current.firstChild;
    const parentWidth = masonry.clientWidth;
    const firstChildWidth = masonryFirstChild.clientWidth;
    if (parentWidth === 0 || firstChildWidth === 0) {
      return;
    }
    const firstChildComputedStyle = window.getComputedStyle(masonryFirstChild);
    const firstChildMarginLeft = parseToNumber(firstChildComputedStyle.marginLeft);
    const firstChildMarginRight = parseToNumber(firstChildComputedStyle.marginRight);
    const currentNumberOfColumns = Math.round(parentWidth / (firstChildWidth + firstChildMarginLeft + firstChildMarginRight));
    const columnHeights = new Array(currentNumberOfColumns).fill(0);
    let skip = false;
    masonry.childNodes.forEach((child) => {
      if (child.nodeType !== Node.ELEMENT_NODE || child.dataset.class === "line-break" || skip) {
        return;
      }
      const childComputedStyle = window.getComputedStyle(child);
      const childMarginTop = parseToNumber(childComputedStyle.marginTop);
      const childMarginBottom = parseToNumber(childComputedStyle.marginBottom);
      const childHeight = parseToNumber(childComputedStyle.height) ? Math.ceil(parseToNumber(childComputedStyle.height)) + childMarginTop + childMarginBottom : 0;
      if (childHeight === 0) {
        skip = true;
        return;
      }
      for (let i = 0; i < child.childNodes.length; i += 1) {
        const nestedChild = child.childNodes[i];
        if (nestedChild.tagName === "IMG" && nestedChild.clientHeight === 0) {
          skip = true;
          break;
        }
      }
      if (!skip) {
        const currentMinColumnIndex = columnHeights.indexOf(Math.min(...columnHeights));
        columnHeights[currentMinColumnIndex] += childHeight;
        const order = currentMinColumnIndex + 1;
        child.style.order = order;
      }
    });
    if (!skip) {
      ReactDOM.flushSync(() => {
        setMaxColumnHeight(Math.max(...columnHeights));
        setNumberOfLineBreaks(currentNumberOfColumns > 0 ? currentNumberOfColumns - 1 : 0);
      });
    }
  };
  useEnhancedEffect_default(() => {
    if (typeof ResizeObserver === "undefined") {
      return void 0;
    }
    let animationFrame;
    const resizeObserver = new ResizeObserver(() => {
      animationFrame = window.requestAnimationFrame(handleResize);
    });
    if (masonryRef.current) {
      masonryRef.current.childNodes.forEach((childNode) => {
        resizeObserver.observe(childNode);
      });
    }
    return () => {
      if (animationFrame) {
        window.cancelAnimationFrame(animationFrame);
      }
      if (resizeObserver) {
        resizeObserver.disconnect();
      }
    };
  }, [columns, spacing, children]);
  const handleRef = useForkRef(ref, masonryRef);
  const lineBreaks = new Array(numberOfLineBreaks).fill("").map((_, index) => (0, import_jsx_runtime32.jsx)("span", {
    "data-class": "line-break",
    style: _extends({}, lineBreakStyle, {
      order: index + 1
    })
  }, index));
  return (0, import_jsx_runtime33.jsxs)(MasonryRoot, _extends({
    as: component,
    className: clsx_m_default(classes.root, className),
    ref: handleRef,
    ownerState
  }, other, {
    children: [children, lineBreaks]
  }));
});
true ? Masonry.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The content of the component.
   */
  children: import_prop_types16.default.node.isRequired,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: import_prop_types16.default.object,
  /**
   * @ignore
   */
  className: import_prop_types16.default.string,
  /**
   * Number of columns.
   * @default 4
   */
  columns: import_prop_types16.default.oneOfType([import_prop_types16.default.arrayOf(import_prop_types16.default.oneOfType([import_prop_types16.default.number, import_prop_types16.default.string])), import_prop_types16.default.number, import_prop_types16.default.object, import_prop_types16.default.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: import_prop_types16.default.elementType,
  /**
   * The default number of columns of the component. This is provided for server-side rendering.
   */
  defaultColumns: import_prop_types16.default.number,
  /**
   * The default height of the component in px. This is provided for server-side rendering.
   */
  defaultHeight: import_prop_types16.default.number,
  /**
   * The default spacing of the component. Like `spacing`, it is a factor of the theme's spacing. This is provided for server-side rendering.
   */
  defaultSpacing: import_prop_types16.default.number,
  /**
   * Defines the space between children. It is a factor of the theme's spacing.
   * @default 1
   */
  spacing: import_prop_types16.default.oneOfType([import_prop_types16.default.arrayOf(import_prop_types16.default.oneOfType([import_prop_types16.default.number, import_prop_types16.default.string])), import_prop_types16.default.number, import_prop_types16.default.object, import_prop_types16.default.string]),
  /**
   * Allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types16.default.oneOfType([import_prop_types16.default.arrayOf(import_prop_types16.default.oneOfType([import_prop_types16.default.func, import_prop_types16.default.object, import_prop_types16.default.bool])), import_prop_types16.default.func, import_prop_types16.default.object])
} : void 0;
var Masonry_default = Masonry;
export {
  Alert_default2 as Alert,
  AlertTitle_default2 as AlertTitle,
  Autocomplete_default2 as Autocomplete,
  AvatarGroup_default2 as AvatarGroup,
  CalendarPicker_default as CalendarPicker,
  CalendarPickerSkeleton_default as CalendarPickerSkeleton,
  ClockPicker_default as ClockPicker,
  DatePicker_default as DatePicker,
  DateRangePicker_default as DateRangePicker,
  DateRangePickerDay_default as DateRangePickerDay,
  DateTimePicker_default as DateTimePicker,
  DesktopDatePicker_default as DesktopDatePicker,
  DesktopDateRangePicker_default as DesktopDateRangePicker,
  DesktopDateTimePicker_default as DesktopDateTimePicker,
  DesktopTimePicker_default as DesktopTimePicker,
  LoadingButton_default as LoadingButton,
  LocalizationProvider_default as LocalizationProvider,
  Masonry_default as Masonry,
  MobileDatePicker_default as MobileDatePicker,
  MobileDateRangePicker_default as MobileDateRangePicker,
  MobileDateTimePicker_default as MobileDateTimePicker,
  MobileTimePicker_default as MobileTimePicker,
  MonthPicker_default as MonthPicker,
  Pagination_default2 as Pagination,
  PaginationItem_default2 as PaginationItem,
  PickersDay_default as PickersDay,
  Rating_default2 as Rating,
  Skeleton_default2 as Skeleton,
  SpeedDial_default2 as SpeedDial,
  SpeedDialAction_default2 as SpeedDialAction,
  SpeedDialIcon_default2 as SpeedDialIcon,
  StaticDatePicker_default as StaticDatePicker,
  StaticDateRangePicker_default as StaticDateRangePicker,
  StaticDateTimePicker_default as StaticDateTimePicker,
  StaticTimePicker_default as StaticTimePicker,
  TabContext,
  TabList_default as TabList,
  TabPanel_default as TabPanel,
  TimePicker_default as TimePicker,
  Timeline_default as Timeline,
  TimelineConnector_default as TimelineConnector,
  TimelineContent_default as TimelineContent,
  TimelineDot_default as TimelineDot,
  TimelineItem_default as TimelineItem,
  TimelineOppositeContent_default as TimelineOppositeContent,
  TimelineSeparator_default as TimelineSeparator,
  ToggleButton_default2 as ToggleButton,
  ToggleButtonGroup_default2 as ToggleButtonGroup,
  TreeItem_default as TreeItem,
  TreeView_default as TreeView,
  YearPicker_default as YearPicker,
  calendarPickerClasses,
  calendarPickerSkeletonClasses,
  clockPickerClasses,
  getCalendarPickerSkeletonUtilityClass,
  getDateRangePickerDayUtilityClass,
  getLoadingButtonUtilityClass,
  getMasonryUtilityClass,
  getMonthPickerUtilityClass,
  getPanelId,
  getPickersDayUtilityClass,
  getTabId,
  getTabPanelUtilityClass,
  getTimelineConnectorUtilityClass,
  getTimelineContentUtilityClass,
  getTimelineDotUtilityClass,
  getTimelineItemUtilityClass,
  getTimelineOppositeContentUtilityClass,
  getTimelineSeparatorUtilityClass,
  getTimelineUtilityClass,
  getTreeItemUtilityClass,
  getTreeViewUtilityClass,
  getYearPickerUtilityClass,
  loadingButtonClasses_default as loadingButtonClasses,
  masonryClasses_default as masonryClasses,
  monthPickerClasses,
  pickersDayClasses,
  tabPanelClasses_default as tabPanelClasses,
  timelineClasses_default as timelineClasses,
  timelineConnectorClasses_default as timelineConnectorClasses,
  timelineContentClasses_default as timelineContentClasses,
  timelineDotClasses_default as timelineDotClasses,
  timelineItemClasses_default as timelineItemClasses,
  timelineOppositeContentClasses_default as timelineOppositeContentClasses,
  timelineSeparatorClasses_default as timelineSeparatorClasses,
  treeItemClasses_default as treeItemClasses,
  treeViewClasses_default as treeViewClasses,
  useAutocomplete,
  usePagination,
  useTabContext,
  useTreeItem,
  yearPickerClasses
};
/*! Bundled license information:

@mui/lab/index.js:
  (**
   * @mui/lab v5.0.0-alpha.137
   *
   * @license MIT
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/
//# sourceMappingURL=@mui_lab.js.map
