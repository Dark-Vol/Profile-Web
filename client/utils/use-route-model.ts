import { usePathname } from "next/navigation";
import { useState } from "react";
import type { Model } from "./model";

/** A model whose value falls back to `initial` whenever the route changes. */
export function useRouteModel<T>(initial: T): Model<T> {
  const pathname = usePathname();
  const [stored, setStored] = useState<{ path: string; value: T } | null>(null);

  return {
    value: stored?.path === pathname ? stored.value : initial,
    onChange: (value) => setStored({ path: pathname, value }),
  };
}
