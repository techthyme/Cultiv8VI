"use client";

import { SWRConfig } from "swr";
import { ReactNode } from "react";

interface SWRProviderProps {
  children: ReactNode;
}

export default function SWRProvider({ children }: SWRProviderProps) {
  return (
    <SWRConfig
      value={{
        // Global SWR configuration
        revalidateOnFocus: false,
        revalidateOnReconnect: true,
        refreshInterval: 0,
        dedupingInterval: 60000,
        errorRetryCount: 3,
        errorRetryInterval: 1000,
        // Global error handler
        onError: (error) => {
          console.error("SWR Error:", error);
        },
        // Global success handler
        onSuccess: (data, key) => {
          // You can add analytics or logging here
          console.log("SWR Success:", key);
        },
      }}
    >
      {children}
    </SWRConfig>
  );
}
