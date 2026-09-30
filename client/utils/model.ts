import { useState } from "react";

/** Two-way binding: the component reads `value` and reports edits through `onChange`. */
export type Model<T> = {
  value: T;
  onChange: (value: T) => void;
};

export function useModel<T>(initial: T | (() => T)): Model<T> {
  const [value, setValue] = useState<T>(initial);
  return { value, onChange: setValue };
}

/** Uses the parent's model when given, otherwise keeps local state. */
export function useBoundModel<T>(model: Model<T> | undefined, fallback: T): Model<T> {
  const local = useModel(fallback);
  return model ?? local;
}

/**
 * Binds one option of a model to a boolean, e.g. a toggle or tab that is "on" when its option is selected.
 * Without `off`, turning the option off is ignored (radio behaviour); with `off`, it resets the model.
 */
export function bindOption<T>(model: Model<T>, option: T, config?: { off: T }): Model<boolean> {
  return {
    value: model.value === option,
    onChange: (on) => {
      if (on) model.onChange(option);
      else if (config && model.value === option) model.onChange(config.off);
    },
  };
}
