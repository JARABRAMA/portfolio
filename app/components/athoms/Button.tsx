import { Icon } from "@iconify/react";
import type { ButtonHTMLAttributes } from "react";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  message: string;
  icon?: string;
  /** `primary` para la acción principal, `secondary` para acciones de apoyo. */
  variant?: "primary" | "secondary";
};

const variants = {
  primary: "bg-indigo-600 text-indigo-50 hover:bg-indigo-700",
  secondary: "bg-stone-200 text-stone-800 hover:bg-stone-300",
} as const;

/*
 * Se aceptan los atributos nativos de <button> (onClick, type, aria-*, ...)
 * para poder reutilizarlo como disparador de diálogos sin crear otro átomo.
 */
export function Button({
  message,
  icon,
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) {
  return <button
    className={`w-fit shrink-0 transform rounded-sm px-4 py-2 duration-300
      hover:delay-100 hover:scale-110 active:delay-0 active:duration-100
      active:scale-100 ${variants[variant]} ${className}`}
    {...props}
  >
    <div className="flex items-center justify-between gap-4">
      {message}
      {icon && <Icon icon={icon} />}
    </div>
  </button>
}
