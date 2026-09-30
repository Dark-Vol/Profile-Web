"use client";

import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cx, type Model } from "@/utils";
import styles from "./tab-button.module.scss";

type TabButtonProps = Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  "onClick" | "role" | "aria-selected" | "tabIndex"
> & {
  model: Model<boolean>;
  controls: string;
  icon?: ReactNode;
  children: ReactNode;
};

export function TabButton({ model, controls, icon, children, className, ...rest }: TabButtonProps) {
  return (
    <button
      {...rest}
      type="button"
      role="tab"
      className={cx(styles.tab, className)}
      aria-selected={model.value}
      aria-controls={controls}
      tabIndex={model.value ? 0 : -1}
      onClick={() => model.onChange(true)}
    >
      {icon ? (
        <span className={styles.icon} aria-hidden="true">
          {icon}
        </span>
      ) : null}
      {children}
    </button>
  );
}
