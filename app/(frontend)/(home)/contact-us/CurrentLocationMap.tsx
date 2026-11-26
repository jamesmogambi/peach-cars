"use client";
import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";

const MapWithLeaflet = dynamic(
  () =>
    import("./MapWithLeaflet").then((mod) => mod.MapWithLeaflet),
  { ssr: false }
);

const CurrentLocationMap = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div style={{ height: "300px", width: "100%" }}>Loading map...</div>;
  }

  return <MapWithLeaflet />;
};

export default CurrentLocationMap;
