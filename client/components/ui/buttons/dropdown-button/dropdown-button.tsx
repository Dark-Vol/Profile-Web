"use client";

import type { ButtonHTMLAttributes, KeyboardEvent, ReactNode } from "react";
import { cx, type Model } from "@/utils";
import styles from "./dropdown-button.module.scss";

type DropdownButtonProps = Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  "onClick" | "aria-expanded" | "aria-controls"
> & {
  model: Model<boolean>;
  controls: string;
  current?: boolean;
  children: ReactNode;
};

export function DropdownButton({
  model,
  controls,
  current = false,
  children,
  className,
  onKeyDown,
  ...rest
}: DropdownButtonProps) {
  function handleKeyDown(event: KeyboardEvent<HTMLButtonElement>) {
    onKeyDown?.(event);
    if (event.defaultPrevented) return;
    if (event.key === "ArrowDown" && !model.value) {
      event.preventDefault();
      model.onChange(true);
    }
    if (event.key === "Escape" && model.value) {
      event.preventDefault();
      model.onChange(false);
    }
  }

  return (
    <button
      {...rest}
      type="button"
      className={cx(styles.trigger, current && styles.current, className)}
      aria-expanded={model.value}
      aria-controls={controls}
      onClick={() => model.onChange(!model.value)}
      onKeyDown={handleKeyDown}
    >
      {children}
      <span className={styles.caret} aria-hidden="true" />
    </button>
  );
}
