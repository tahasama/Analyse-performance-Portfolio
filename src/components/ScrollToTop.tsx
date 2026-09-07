import { useEffect, useLayoutEffect } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

const scrollPositions = new Map<string, { x: number; y: number }>();
const MAX_RESTORE_ATTEMPTS = 40;

export default function ScrollToTop() {
  const { pathname, hash, key } = useLocation();
  const navigationType = useNavigationType();

  useEffect(() => {
    const previous = window.history.scrollRestoration;
    window.history.scrollRestoration = "manual";

    return () => {
      window.history.scrollRestoration = previous;
    };
  }, []);

  useLayoutEffect(() => {
    let timeoutId: number | undefined;
    let attempts = 0;

    const retryUntilReady = (restore: () => boolean) => {
      const attempt = () => {
        attempts += 1;
        if (!restore() && attempts < MAX_RESTORE_ATTEMPTS) {
          timeoutId = window.setTimeout(attempt, 50);
        }
      };

      attempt();
    };

    if (hash) {
      retryUntilReady(() => {
        const target = document.getElementById(hash.slice(1));
        if (!target) return false;
        target.scrollIntoView();
        return true;
      });
    } else if (navigationType === "POP") {
      const savedPosition = scrollPositions.get(key);
      if (savedPosition) {
        retryUntilReady(() => {
          window.scrollTo(savedPosition.x, savedPosition.y);
          return Math.abs(window.scrollY - savedPosition.y) < 2;
        });
      }
    } else {
      window.scrollTo(0, 0);
    }

    return () => {
      if (timeoutId !== undefined) window.clearTimeout(timeoutId);
    };
  }, [pathname, hash, key, navigationType]);

  useLayoutEffect(() => {
    let isCurrentEntry = true;

    const savePosition = () => {
      if (!isCurrentEntry) return;

      scrollPositions.set(key, { x: window.scrollX, y: window.scrollY });
    };

    const stopSaving = () => {
      savePosition();
      isCurrentEntry = false;
    };

    const handleLinkClick = (event: MouseEvent) => {
      if (
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      ) {
        return;
      }

      const anchor = (event.target as Element | null)?.closest<HTMLAnchorElement>(
        "a[href]",
      );
      if (!anchor || anchor.target === "_blank" || anchor.hasAttribute("download")) {
        return;
      }

      const destination = new URL(anchor.href, window.location.href);
      if (destination.origin !== window.location.origin) return;
      if (
        destination.pathname === window.location.pathname &&
        destination.search === window.location.search &&
        destination.hash
      ) {
        return;
      }

      stopSaving();
    };

    if (!scrollPositions.has(key)) savePosition();
    window.addEventListener("scroll", savePosition, { passive: true });
    window.addEventListener("popstate", stopSaving);
    document.addEventListener("click", handleLinkClick, true);

    return () => {
      window.removeEventListener("scroll", savePosition);
      window.removeEventListener("popstate", stopSaving);
      document.removeEventListener("click", handleLinkClick, true);
    };
  }, [key]);

  return null;
}
