import { useEffect } from "react";

const ClickOutsideHandler = (ref, callbackFunction) => {
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        callbackFunction();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, callbackFunction]);
};

export default ClickOutsideHandler;
