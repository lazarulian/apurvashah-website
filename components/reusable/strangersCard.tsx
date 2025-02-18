import { cn } from "@/lib/utils";

const StrangerCard = ({
  question,
  className,
}: {
  question: string;
  className?: string;
}) => (
  <div
    className={cn(
      "relative flex items-center justify-center p-4 border-2 border-gray-600 rounded-xl w-60 h-80 shadow-md bg-neutral-900 transition-transform",
      className
    )}
  >
    <p className="text-white text-center font-medium text-lg">{question}</p>
  </div>
);

export default StrangerCard;
