import { RefObject, useEffect } from "react";

export function useScrollToTop(trigger: unknown, target?: RefObject<Element | null>) {
  useEffect(() => {
    const node = target?.current;
    if (node && "scrollIntoView" in node) {
      node.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [trigger, target]);
}
