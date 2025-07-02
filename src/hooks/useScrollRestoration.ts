import { useEffect } from "react";

interface UseScrollRestorationOptions {
  /**
   * Whether to disable browser scroll restoration
   * @default true
   */
  disabled?: boolean;
  /**
   * Whether to restore scroll restoration on unmount
   * @default false
   */
  restoreOnUnmount?: boolean;
}

/**
 * Custom hook to control browser scroll restoration behavior
 *
 * @example
 * ```tsx
 * // Disable scroll restoration
 * useScrollRestoration();
 *
 * // Disable with custom options
 * useScrollRestoration({
 *   disabled: true,
 *   restoreOnUnmount: true
 * });
 *
 * // Keep scroll restoration enabled
 * useScrollRestoration({ disabled: false });
 * ```
 */
export const useScrollRestoration = (
  options: UseScrollRestorationOptions = {}
) => {
  const { disabled = true, restoreOnUnmount = false } = options;

  useEffect(() => {
    // Store original scroll restoration setting
    const originalScrollRestoration =
      "scrollRestoration" in history ? history.scrollRestoration : null;

    // Disable scroll restoration if requested
    if (disabled && "scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }

    // Cleanup function
    return () => {
      if (
        restoreOnUnmount &&
        originalScrollRestoration &&
        "scrollRestoration" in history
      ) {
        history.scrollRestoration = originalScrollRestoration;
      }
    };
  }, [disabled, restoreOnUnmount]);
};

export default useScrollRestoration;
