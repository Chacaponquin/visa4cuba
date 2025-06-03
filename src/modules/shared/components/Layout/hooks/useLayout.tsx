import { useState } from "react";

export default function useLayout() {
  const [openAside, setOpenAside] = useState(true);

  function handleOpenAside() {
    setOpenAside(true);
  }

  function handleCloseAside() {
    setOpenAside(false);
  }

  return { openAside, handleCloseAside, handleOpenAside };
}
