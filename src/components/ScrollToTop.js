import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, behavior: "auto" });
      return;
    }
    const frame = requestAnimationFrame(() => {
      const target = document.getElementById(decodeURIComponent(hash.slice(1)));
      if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
    return () => cancelAnimationFrame(frame);
  }, [pathname, hash]);

  return null;
}
export default ScrollToTop;
