import { useEffect, useState } from "react";
import type { SCREEN_SIZES } from "../../app/domain/constants/screen-size";

export default function useScreen(size: SCREEN_SIZES) {
  const [condition, setcondition] = useState(true);

  useEffect(() => {
    function handleResize() {
      const width = window.innerWidth;

      if (width > size) {
        setcondition(true);
      } else {
        setcondition(false);
      }
    }

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [size]);

  return { condition };
}
