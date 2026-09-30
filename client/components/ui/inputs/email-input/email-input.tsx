"use client";

import type { InputHTMLAttributes } from "react";
import { cx, useBoundModel, useField, type Model } from "@/utils";
import styles from "./email-input.module.scss";

type EmailInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "type" | "value" | "defaultValue" | "onChange" | "children"
> & {
  label: string;
  hideLabel?: boolean;
  model?: Model<string>;
  error?: string;
  hint?: string;
};

export function EmailInput({
  label,
  hideLabel = false,
  model,
  error,
  hint,
  id,
  className,
  autoComplete = "email",
  placeholder = "name@email.com",
  ...rest
}: EmailInputProps) {
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
        type="email"
        inputMode="email"
        autoComplete={autoComplete}
        spellCheck={false}
        placeholder={placeholder}
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
