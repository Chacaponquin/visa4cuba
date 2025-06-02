import { useState } from "react";

export default function useShopCard() {
  const [count, setCount] = useState(1);

  function handleDecrease() {
    setCount((prev) => prev - 1);
  }

  function handleIncrease() {
    setCount((prev) => prev + 1);
  }

  return { count, handleDecrease, handleIncrease };
}
