"use client";

import * as React from "react";
import * as RechartsPrimitive from "recharts";

import { cn } from "@/lib/utils";

// Re-exporting Recharts components for convenience
export const ChartContainer = RechartsPrimitive.ResponsiveContainer;

// ChartTooltip is now the wrapper around RechartsPrimitive.Tooltip
export const ChartTooltip = ChartTooltipWrapperComponent;
// ChartTooltipContent is now the actual content renderer
export const ChartTooltipContent = ChartTooltipContentRendererComponent;

// Define a custom interface for the tooltip payload items
interface CustomTooltipPayload {
  value: number | string;
  name: string;
  dataKey?: string;
  color?: string;
  unit?: string;
  // Allow for other unknown properties, using 'unknown' instead of 'any'
  [key: string]: unknown;
}

// ChartTooltipContentRendererComponent: This component receives the actual tooltip content props
interface ChartTooltipContentRendererProps
  extends React.HTMLAttributes<HTMLDivElement> {
  active?: boolean;
  payload?: CustomTooltipPayload[]; // Use the custom payload type here
  label?: string | number;
  coordinate?: { x: number; y: number }; // Keep in interface as it can be passed
  viewBox?: { x?: number; y?: number; width?: number; height?: number }; // Keep in interface as it can be passed
  hideLabel?: boolean;
  hideIndicator?: boolean; // Keep in interface as it can be passed
  indicator?: "dot" | "line";
  className?: string;
}

function ChartTooltipContentRendererComponent({
  active,
  payload,
  label,
  className,
  indicator = "dot",
  hideLabel = false,
}: // Removed coordinate, viewBox, hideIndicator from destructuring as they are not used in rendering logic
ChartTooltipContentRendererProps) {
  if (!active || !payload || payload.length === 0) {
    return null;
  }

  return (
    <div
      className={cn(
        "grid min-w-[180px] items-center gap-1.5 rounded-lg border border-gray-200 bg-white px-2.5 py-2 text-sm shadow-md dark:border-gray-800 dark:bg-gray-950",
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
          key={item.dataKey || i}
          className={cn(
            "flex w-full items-center justify-between gap-x-2 py-0.5",
            item.color
              ? `text-${item.color}-500 dark:text-${item.color}-400`
              : ""
          )}
        >
          {item.dataKey ? (
            <div className="flex items-center gap-x-2">
              {indicator === "dot" && (
                <span
                  className="flex h-2 w-2 rounded-full"
                  style={{
                    backgroundColor: item.color as string, // Cast to string as color can be undefined
                  }}
                />
              )}
              {indicator === "line" && (
                <span
                  className="h-2 w-2 border-t-2 border-dashed"
                  style={{
                    borderColor: item.color as string, // Cast to string
                  }}
                />
              )}
              <span>{item.name || item.dataKey}</span>
            </div>
          ) : (
            <span className="text-gray-500 dark:text-gray-400">
              {item.name}
            </span>
          )}
          <span className="font-medium tabular-nums text-gray-950 dark:text-gray-50">
            {item.value}
          </span>
        </div>
      ))}
    </div>
  );
}

// ChartTooltipWrapperComponent: This component wraps RechartsPrimitive.Tooltip
interface ChartTooltipWrapperProps
  extends React.ComponentPropsWithoutRef<typeof RechartsPrimitive.Tooltip> {
  hideLabel?: boolean;
  hideIndicator?: boolean;
  indicator?: "dot" | "line";
  className?: string;
  valueFormatter?: (value: number) => string;
  labelFormatter?: (label: string) => string;
}

// Define the exact type for the arguments passed to the Tooltip's content prop
interface RechartsTooltipContentArgs {
  active?: boolean;
  payload?: CustomTooltipPayload[];
  label?: string | number;
  coordinate?: { x: number; y: number }; // Include here as it's passed by Recharts
  viewBox?: { x?: number; y?: number; width?: number; height?: number }; // Include here as it's passed by Recharts
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
      // Explicitly type the arguments of the content function
      content={({
        active,
        payload,
        label,
        coordinate,
        viewBox,
      }: RechartsTooltipContentArgs) => (
        <ChartTooltipContentRendererComponent
          active={active}
          payload={payload?.map((item) => ({
            ...item,
            value: valueFormatter
              ? valueFormatter(item.value as number)
              : item.value,
            name: labelFormatter
              ? labelFormatter(item.name as string)
              : item.name,
          }))}
          label={label}
          // Pass coordinate and viewBox to the renderer, even if not used in its current JSX
          coordinate={coordinate}
          viewBox={viewBox}
          hideLabel={hideLabel}
          hideIndicator={hideIndicator} // Pass hideIndicator
          indicator={indicator}
        />
      )}
      {...props}
    />
  );
}
