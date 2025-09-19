/* Reusable themed Button component */
import React from "react";

const VARIANT_CLASSES = {
  primary:
    "bg-green-500 text-blue-900 hover:bg-green-400",
  secondary:
    "bg-white/10 text-white hover:bg-white/20 border border-white/20",
  danger:
    "bg-rose-500 text-white hover:bg-rose-400",
  ghost:
    "bg-transparent text-white hover:bg-white/10 border border-transparent",
};

const SIZE_CLASSES = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-4 py-2 text-sm",
  lg: "px-5 py-2.5 text-base",
};

const Button = ({
  children,
  variant = "primary",
  size = "md",
  className = "",
  type = "button",
  as: Component = "button",
  ...rest
}) => {
  const variantClass = VARIANT_CLASSES[variant] || VARIANT_CLASSES.primary;
  const sizeClass = SIZE_CLASSES[size] || SIZE_CLASSES.md;
  const classes = `inline-flex items-center justify-center gap-2 rounded-lg shadow-md shadow-black/20 transition-colors ${variantClass} ${sizeClass} ${className}`;

  return (
    <Component
      {...(Component === "button" ? { type } : {})}
      className={classes}
      {...rest}
    >
      {children}
    </Component>
  );
};

export default Button;


