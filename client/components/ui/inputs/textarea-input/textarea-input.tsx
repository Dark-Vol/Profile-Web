"use client";

import type { TextareaHTMLAttributes } from "react";
import { cx, useBoundModel, useField, type Model } from "@/utils";
import styles from "./textarea-input.module.scss";

type TextareaInputProps = Omit<
  TextareaHTMLAttributes<HTMLTextAreaElement>,
  "value" | "defaultValue" | "onChange" | "children"
> & {
  label: string;
  hideLabel?: boolean;
  model?: Model<string>;
  error?: string;
  hint?: string;
};

export function TextareaInput({
  label,
  hideLabel = false,
  model,
  error,
  hint,
  id,
  className,
  rows = 5,
  ...rest
}: TextareaInputProps) {
  const bound = useBoundModel(model, "");
  const { inputId, errorId, hintId, controlProps } = useField(id, error, hint);

  return (
    <div className={cx(styles.field, className)}>
      <label htmlFor={inputId} className={hideLabel ? "sr-only" : styles.label}>
        {label}
      </label>
      <textarea
        {...rest}
        {...controlProps}
        rows={rows}
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
