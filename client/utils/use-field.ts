import { useId } from "react";

/** Ids and aria wiring shared by every input component. */
export function useField(id: string | undefined, error?: string, hint?: string) {
  const autoId = useId();
  const inputId = id ?? autoId;
  const errorId = `${inputId}-error`;
  const hintId = `${inputId}-hint`;
  const describedBy = [hint ? hintId : null, error ? errorId : null].filter(Boolean).join(" ") || undefined;

  return {
    inputId,
    errorId,
    hintId,
    controlProps: {
      id: inputId,
      "aria-invalid": error ? true : undefined,
      "aria-describedby": describedBy,
    },
  };
}
