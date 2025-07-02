import { useEffect } from "react";
import { useLocation } from "react-router-dom";

interface ScrollToTopProps {
  /**
   * Optional custom scroll behavior
   * @default "smooth"
   */
  behavior?: ScrollBehavior;
  /**
   * Optional custom scroll target (useful for custom scroll containers)
   * @default window
   */
  target?: HTMLElement | null;
  /**
   * Whether to disable browser scroll restoration
   * @default true
   */
  disableScrollRestoration?: boolean;
}

/**
 * ScrollToTop component that automatically scrolls to the top on route changes
 * and optionally disables browser scroll restoration
 *
 * @example
 * ```tsx
 * // Basic usage with scroll restoration disabled
 * <ScrollToTop />
 *
 * // With custom behavior
 * <ScrollToTop behavior="auto" />
 *
 * // With custom scroll target
 * <ScrollToTop target={document.getElementById('main-container')} />
 *
 * // Keep browser scroll restoration enabled
 * <ScrollToTop disableScrollRestoration={false} />
 * ```
 */
const ScrollToTop: React.FC<ScrollToTopProps> = ({
  behavior = "smooth",
  target = null,
  disableScrollRestoration = true,
}) => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Disable browser scroll restoration on mount
    if (disableScrollRestoration && "scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }

    const scrollTarget = target || window;

    // Use requestAnimationFrame to ensure DOM is ready
    const scrollToTop = () => {
      requestAnimationFrame(() => {
        if (scrollTarget === window) {
          window.scrollTo({ top: 0, behavior });
        } else if (scrollTarget) {
          scrollTarget.scrollTo({ top: 0, behavior });
        }
      });
    };

    scrollToTop();
  }, [pathname, behavior, target, disableScrollRestoration]);

  return null; // This component doesn't render anything
};

export default ScrollToTop;
