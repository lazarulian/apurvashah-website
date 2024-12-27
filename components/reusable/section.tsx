import { cn } from "@/lib/utils";

const Section = ({
  heading,
  children,
  className,
}: {
  heading?: string;
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div className={cn(className)}>
      {heading && <h2 className="mb-2 font-medium text-gray-11">{heading}</h2>}
      {children}
    </div>
  );
};

export default Section;
