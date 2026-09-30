import { useEffect } from "react";

export function useBodyClass(className: string, active: boolean) {
  useEffect(() => {
    document.body.classList.toggle(className, active);
    return () => document.body.classList.remove(className);
  }, [className, active]);
}
