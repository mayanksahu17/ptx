import React from "react";

const sizes = {
  "3xl": "text-[35px] font-semibold md:text-[33px] sm:text-[31px]",
  "2xl": "text-3xl font-semibold md:text-[28px] sm:text-[26px]",
  xl: "text-[25px] font-semibold md:text-[23px] sm:text-[21px]",
  "4xl": "text-[45px] font-semibold md:text-[41px] sm:text-[35px]",
  s: "text-[19px] font-semibold",
  md: "text-xl font-semibold",
  xs: "text-base font-bold",
  lg: "text-2xl font-semibold md:text-[22px]",
};

const Heading = ({ children, className = "", size = "xl", as, ...restProps }) => {
  const Component = as || "h6";

  return (
    <Component className={`text-white-A700 font-raleway ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
