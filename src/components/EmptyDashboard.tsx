import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Play } from "lucide-react";

interface Props {
  onStart: () => void;
}

export function EmptyDashboard({ onStart }: Props) {
  return (
    <Card className="glass-card">
      <CardContent className="flex flex-col items-center text-center px-6 py-10 space-y-5">
        <div className="relative">
          <div className="absolute inset-0 rounded-full bg-primary/10 blur-2xl" />
          <svg
            viewBox="0 0 120 80"
            className="relative h-24 w-auto text-primary"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            {/* Road */}
            <path d="M5 70 H115" className="text-muted-foreground/40" />
            <path d="M20 70 h12 M48 70 h12 M76 70 h12 M100 70 h10" className="text-muted-foreground/60" strokeDasharray="0" />
            {/* Car body */}
            <path d="M20 55 L30 38 H80 L92 55 Z" />
            <path d="M14 55 H98 V64 a4 4 0 0 1 -4 4 H18 a4 4 0 0 1 -4 -4 Z" />
            {/* Windows */}
            <path d="M34 41 H56 V53 H30 Z" className="text-primary/50" />
            <path d="M58 41 H76 L86 53 H58 Z" className="text-primary/50" />
            {/* Wheels */}
            <circle cx="32" cy="68" r="6" fill="currentColor" />
            <circle cx="80" cy="68" r="6" fill="currentColor" />
          </svg>
        </div>

        <div className="space-y-1.5">
          <h3 className="text-base font-semibold">Nenhuma rota registrada ainda</h3>
          <p className="text-sm text-muted-foreground max-w-xs">
            Inicie sua primeira rota para ver seus ganhos aqui
          </p>
        </div>

        <Button onClick={onStart} className="gap-2 h-11 px-6 font-semibold">
          <Play className="h-4 w-4 fill-current" />
          Iniciar primeira rota
        </Button>
      </CardContent>
    </Card>
  );
}
