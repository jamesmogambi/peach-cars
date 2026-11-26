import clsx from "clsx";
import React from "react";

interface Props {
  className?: string;
  loading?: "lazy" | "eager";
  priority?: "auto" | "high" | "low";
}

export const Logo = (props: Props) => {
  const {
    loading: loadingFromProps,
    priority: priorityFromProps,
    className,
  } = props;

  const loading = loadingFromProps || "lazy";
  const priority = priorityFromProps || "low";

  return (
    /* eslint-disable @next/next/no-img-element */
    <img
      alt="Peach Cars Logo"
      width={320}
      height={300}
      loading={loading}
      fetchPriority={priority}
      decoding="async"
      className={clsx("max-w-[9.375rem] w-full h-auto", className)}
      src="/images/logos/peach-cars-logo-transparent.svg"
    />
  );
};
