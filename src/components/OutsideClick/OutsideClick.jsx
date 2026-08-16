import { useEffect, useRef } from "react";

/**
 * Component that alerts if you click outside of it.
 * Expects a single element child, which it wraps in a span to get a ref.
 */
const OutsideClick = ({ children, action }) => {
  const wrapperRef = useRef(null);

  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event) {
      if (wrapperRef && !wrapperRef.current.contains(event.target) && action) {
        action();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return function cleanup() {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });

  return <span ref={wrapperRef}>{children}</span>;
};

export default OutsideClick;
