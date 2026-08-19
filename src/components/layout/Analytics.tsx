import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { trackPageView } from "../../lib/analytics";

export const Analytics = (): null => {
  const { pathname, search } = useLocation();
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    trackPageView(pathname + search);
  }, [pathname, search]);

  return null;
};
