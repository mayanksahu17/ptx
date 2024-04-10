import React from "react";
import PropTypes from "prop-types";

const shapes = {
  circle: "rounded-[50%]",
  square: "rounded-[0px]",
  round: "rounded-[30px]",
};
const variants = {
  fill: {
    white_A700: "bg-white-A700",
    indigo_900: "bg-indigo-900",
    yellow_900: "bg-yellow-900 text-white-A700",
  },
  outline: {
    yellow_900: "border-yellow-900 border border-solid text-yellow-900",
    indigo_900: "border-indigo-900 border-2 border-solid text-indigo-900",
  },
};
const sizes = {
  xs: "h-[40px] px-3",
  sm: "h-[55px] px-[35px] text-xl",
  md: "h-[60px] px-[35px] text-lg",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant = "fill",
  size = "md",
  color = "yellow_900",
  ...restProps
}) => {
  return (
    <button
      className={`${className} flex items-center justify-center text-center cursor-pointer ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  shape: PropTypes.oneOf(["circle", "square", "round"]),
  size: PropTypes.oneOf(["xs", "sm", "md"]),
  variant: PropTypes.oneOf(["fill", "outline"]),
  color: PropTypes.oneOf(["white_A700", "indigo_900", "yellow_900"]),
};

export { Button };
