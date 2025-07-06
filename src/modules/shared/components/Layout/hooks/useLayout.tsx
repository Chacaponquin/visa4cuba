import { useEffect, useRef, useState } from "react";

export default function useLayout() {
  const [openAside, setOpenAside] = useState(true);
  const [fixedNavbar, setFixedNavbar] = useState(false);

  const navbarRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setFixedNavbar(!entry.isIntersecting);
      },
      {
        root: null,
        threshold: 0,
      }
    );

    const el = navbarRef.current;

    if (el) {
      observer.observe(el);
    }

    return () => {
      if (el) observer.unobserve(el);
    };
  }, []);

  function handleOpenAside() {
    setOpenAside(true);
  }

  function handleCloseAside() {
    setOpenAside(false);
  }

  return {
    openAside,
    handleCloseAside,
    handleOpenAside,
    fixedNavbar,
    navbarRef,
  };
}
