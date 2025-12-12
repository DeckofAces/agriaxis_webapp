import type React from "react";

interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  variant: "primary" | "secondary" | "link" | "tertiary";
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  variant,
  children,
  className = "",
  ...rest
}) => {
  const baseClasses =
    "w-full rounded-[.75rem] p-4 font-medium transition-colors duration-200 cursor-pointer";
  const variantClasses = {
    primary: "bg-[#0A814A] text-white hover:bg-[#086a3d]",
    secondary: "bg-[#E7F2ED] text-[#0A814A] hover:bg-[#d5e0dc]",
    tertiary: "bg-[#E8E8E8] text-[#615C74]",
    link: "bg-transparent text-[#0A814A]"
  }[variant];

  const finalClasses = `${baseClasses} ${variantClasses} ${className}`;

  return (
    <button className={finalClasses} {...rest}>
      {children}
    </button>
  );
};

export { Button };
