import { cn } from "@/lib/utils";

interface MoneyValueProps {
  value: number;
  className?: string;
  /** When true and value is null/undefined/NaN, render em-dash */
  fallback?: string;
  /** Tabular-nums by default for stable widths */
  align?: "left" | "right" | "center";
}

/**
 * Standardized monetary display.
 * - "R$" symbol at 60% of main number size
 * - Main integer in font-medium (500)
 * - Cents at the same size as the symbol
 */
export function MoneyValue({ value, className, fallback = "—", align = "left" }: MoneyValueProps) {
  if (value === null || value === undefined || Number.isNaN(value)) {
    return <span className={cn("font-medium tabular-nums", className)}>{fallback}</span>;
  }

  const negative = value < 0;
  const abs = Math.abs(value);
  const intPart = Math.floor(abs);
  const cents = Math.round((abs - intPart) * 100)
    .toString()
    .padStart(2, "0");
  const intStr = intPart.toLocaleString("pt-BR");

  const alignCls = align === "right" ? "justify-end" : align === "center" ? "justify-center" : "justify-start";

  return (
    <span className={cn("inline-flex items-baseline gap-[0.15em] tabular-nums leading-none", alignCls, className)}>
      {negative && <span className="font-medium">-</span>}
      <span className="text-[0.6em] font-medium opacity-80">R$</span>
      <span className="font-medium">{intStr}</span>
      <span className="text-[0.6em] font-medium opacity-80">,{cents}</span>
    </span>
  );
}
