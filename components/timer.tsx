"use client";

import { useEffect, useState } from "react";

export const Timer = () => {
  const [time, setTime] = useState(new Date());
  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect(() => {
    setIsMounted(true);
    const timer = setInterval(() => setTime(new Date()), 1000);

    return () => clearInterval(timer);
  }, []);


  if (!isMounted) {
    return null;
  }

  return <div>{time.toLocaleTimeString("lt-LT")}</div>;
};
