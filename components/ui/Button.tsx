import Link from "next/link";
import { ReactNode } from "react";

type Variant = "primary" | "secondary" | "outline";
type Size = "sm" | "md" | "lg";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: Variant;
  size?: Size;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
  external?: boolean;
}

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-olive-600 hover:bg-olive-700 text-white shadow-sm",
  secondary:
    "bg-slate-800 hover:bg-slate-700 text-white shadow-sm",
  outline:
    "border border-slate-300 hover:border-slate-400 text-slate-700 hover:bg-slate-50",
};

const sizeClasses: Record<Size, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

export default function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  onClick,
  type = "button",
  className = "",
  external = false,
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center rounded-lg font-semibold transition-colors duration-200 ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  if (href) {
    if (external) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
