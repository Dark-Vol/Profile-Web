"use client";

import type { ButtonHTMLAttributes } from "react";
import { cx, type Model } from "@/utils";
import styles from "./burger-button.module.scss";

type BurgerButtonProps = Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  "onClick" | "aria-expanded" | "aria-controls" | "children"
> & {
  model: Model<boolean>;
  controls: string;
  openLabel: string;
  closeLabel: string;
};

export function BurgerButton({ model, controls, openLabel, closeLabel, className, ...rest }: BurgerButtonProps) {
  return (
    <button
      {...rest}
      type="button"
      className={cx(styles.burger, model.value && styles.open, className)}
      aria-expanded={model.value}
      aria-controls={controls}
      onClick={() => model.onChange(!model.value)}
    >
      <span className="sr-only">{model.value ? closeLabel : openLabel}</span>
      <span className={styles.line} aria-hidden="true" />
      <span className={styles.line} aria-hidden="true" />
      <span className={styles.line} aria-hidden="true" />
    </button>
  );
}
