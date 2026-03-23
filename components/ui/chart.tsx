"use client";

import * as React from "react";
import * as RechartsPrimitive from "recharts";
import { cn } from "@/lib/utils";

// Re-exporting Recharts components
export const ChartContainer = RechartsPrimitive.ResponsiveContainer;
export const ChartTooltip = ChartTooltipWrapperComponent;
export const ChartTooltipContent = ChartTooltipContentRendererComponent;

// --------------------
// Types
// --------------------

interface CustomTooltipPayload {
  value: number | string;
  name: string;
  dataKey?: string;
  color?: string;
  unit?: string;
  [key: string]: unknown;
}

interface ChartTooltipContentRendererProps
  extends React.HTMLAttributes<HTMLDivElement> {
  active?: boolean;
  payload?: readonly CustomTooltipPayload[];
  label?: React.ReactNode;
  hideLabel?: boolean;
  hideIndicator?: boolean;
  indicator?: "dot" | "line";
  className?: string;
}

// --------------------
// Tooltip Content
// --------------------

function ChartTooltipContentRendererComponent({
  active,
  payload,
  label,
  className,
  indicator = "dot",
  hideLabel = false,
}: ChartTooltipContentRendererProps) {
  if (!active || !payload || payload.length === 0) {
    return null;
  }

  return (
    <div
      className={cn(
        "grid min-w-[180px] gap-1.5 rounded-lg border border-gray-200 bg-white px-2.5 py-2 text-sm shadow-md dark:border-gray-800 dark:bg-gray-950",
        className
      )}
    >
      {!hideLabel && label != null && (
        <div className="flex items-center justify-between gap-x-2">
          <span className="text-gray-500 dark:text-gray-400">{label}</span>
        </div>
      )}

      {payload.map((item, i) => (
        <div
          key={item.dataKey ?? i}
          className="flex w-full items-center justify-between gap-x-2 py-0.5"
        >
          <div className="flex items-center gap-x-2">
            {indicator === "dot" && (
              <span
                className="h-2 w-2 rounded-full"
                style={{ backgroundColor: item.color }}
              />
            )}
            {indicator === "line" && (
              <span
                className="h-2 w-2 border-t-2 border-dashed"
                style={{ borderColor: item.color }}
              />
            )}
            <span>{item.name ?? item.dataKey}</span>
          </div>

          <span className="font-medium tabular-nums text-gray-950 dark:text-gray-50">
            {item.value}
          </span>
        </div>
      ))}
    </div>
  );
}

// --------------------
// Tooltip Wrapper
// --------------------

interface ChartTooltipWrapperProps
  extends React.ComponentPropsWithoutRef<typeof RechartsPrimitive.Tooltip> {
  hideLabel?: boolean;
  hideIndicator?: boolean;
  indicator?: "dot" | "line";
  className?: string;
  valueFormatter?: (value: number) => string;

  // ✅ FIXED TYPE (IMPORTANT)
  labelFormatter?: (
    label: React.ReactNode,
    payload: readonly any[]
  ) => React.ReactNode;
}

function ChartTooltipWrapperComponent({
  className,
  hideLabel = false,
  hideIndicator = false,
  indicator = "dot",
  valueFormatter,
  labelFormatter,
  ...props
}: ChartTooltipWrapperProps) {
  return (
    <RechartsPrimitive.Tooltip
      cursor={{ strokeDasharray: "8 8" }}
      wrapperClassName={className}
      content={({ active, payload, label }) => {
        if (!payload) return null;

        const formattedPayload: CustomTooltipPayload[] = payload.map(
          (item: any) => ({
            ...item,
            value: valueFormatter
              ? valueFormatter(item.value as number)
              : item.value,
            name: item.name, // ✅ FIXED
          })
        );

        // ✅ APPLY labelFormatter CORRECTLY
        const formattedLabel = labelFormatter
          ? labelFormatter(label, payload)
          : label;

        return (
          <ChartTooltipContentRendererComponent
            active={active}
            payload={formattedPayload}
            label={formattedLabel}
            hideLabel={hideLabel}
            hideIndicator={hideIndicator}
            indicator={indicator}
          />
        );
      }}
      {...props}
    />
  );
}