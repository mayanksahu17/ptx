import React from "react";

const sizes = {
  xs: "text-sm font-medium",
  lg: "text-lg font-medium",
  s: "text-base font-normal",
  "2xl": "text-xl font-normal",
  "3xl": "text-[25px] font-medium md:text-[23px] sm:text-[21px]",
  "4xl": "text-[45px] font-normal md:text-[41px] sm:text-[35px]",
  xl: "text-[19px] font-medium",
  md: "text-[17px] font-normal",
};

const Text = ({ children, className = "", as, size = "s", ...restProps }) => {
  const Component = as || "p";

  return (
    <Component className={`text-blue_gray-900 font-dmsans ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
