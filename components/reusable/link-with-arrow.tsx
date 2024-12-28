import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";

export const LinkWithArrow = ({
  text,
  href,
  className,
}: {
  text: string;
  href: string;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "group relative hover:text-gray-500 transition duration-500",
        className
      )}
    >
      <Slot>
        <a href={href} target="_blank">
          {text}
        </a>
      </Slot>
      <div
        className="group-hover:opacity-100 opacity-0 absolute -right-6 bottom-[3px] rounded-sm bg-accent transition duration-500 shrink-0 block w-4 h-4 text-[black]"
        aria-hidden={true}
      >
        <ArrowUpRight />
      </div>
    </div>
  );
};
