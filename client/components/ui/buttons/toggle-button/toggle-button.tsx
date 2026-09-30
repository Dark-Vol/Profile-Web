"use client";

import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cx, type Model } from "@/utils";
import styles from "./toggle-button.module.scss";

type ToggleButtonProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, "onClick" | "aria-pressed"> & {
  model: Model<boolean>;
  children: ReactNode;
};

export function ToggleButton({ model, children, className, type = "button", ...rest }: ToggleButtonProps) {
  return (
    <button
      {...rest}
      type={type}
      className={cx(styles.toggle, className)}
      aria-pressed={model.value}
      onClick={() => model.onChange(!model.value)}
    >
      {children}
    </button>
  );
}
