import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cx } from "@/utils";
import styles from "./icon-button.module.scss";

type IconButtonProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, "aria-label" | "children"> & {
  label: string;
  children: ReactNode;
};

export function IconButton({ label, children, className, type = "button", ...rest }: IconButtonProps) {
  return (
    <button {...rest} type={type} className={cx(styles.iconButton, className)} aria-label={label}>
      {children}
    </button>
  );
}
