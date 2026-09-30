"use client";

import type { InputHTMLAttributes } from "react";
import { cx, useBoundModel, useField, type Model } from "@/utils";
import styles from "./text-input.module.scss";

export type TextInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "value" | "defaultValue" | "onChange" | "children"
> & {
  label: string;
  hideLabel?: boolean;
  model?: Model<string>;
  error?: string;
  hint?: string;
};

export function TextInput({
  label,
  hideLabel = false,
  model,
  error,
  hint,
  id,
  className,
  type = "text",
  ...rest
}: TextInputProps) {
  const bound = useBoundModel(model, "");
  const { inputId, errorId, hintId, controlProps } = useField(id, error, hint);

  return (
    <div className={cx(styles.field, className)}>
      <label htmlFor={inputId} className={hideLabel ? "sr-only" : styles.label}>
        {label}
      </label>
      <input
        {...rest}
        {...controlProps}
        type={type}
        className={styles.control}
        value={bound.value}
        onChange={(event) => bound.onChange(event.target.value)}
      />
      {hint ? (
        <p id={hintId} className={styles.hint}>
          {hint}
        </p>
      ) : null}
      {error ? (
        <p id={errorId} className={styles.error} role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}
