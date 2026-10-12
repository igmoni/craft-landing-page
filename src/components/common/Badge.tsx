import { cn } from "@/lib/utils";

const Badge = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("mx-auto w-fit rounded-xl px-2 py-1", className)}>
      {children}
    </div>
  );
};

export { Badge };
