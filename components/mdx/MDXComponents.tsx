import Image from "next/image";
import React from "react";

// Custom MDX components for consistent styling across projects and blog
export const mdxComponents = {
  h1: (props: React.ComponentPropsWithoutRef<"h1">) => (
    <h1
      className="text-2xl font-medium text-white mb-4 mt-8 first:mt-0"
      {...props}
    />
  ),
  h2: (props: React.ComponentPropsWithoutRef<"h2">) => (
    <h2 className="text-xl font-medium text-white mb-3 mt-6" {...props} />
  ),
  h3: (props: React.ComponentPropsWithoutRef<"h3">) => (
    <h3 className="text-lg font-medium text-white mb-2 mt-4" {...props} />
  ),
  h4: (props: React.ComponentPropsWithoutRef<"h4">) => (
    <h4 className="text-base font-medium text-white mb-2 mt-3" {...props} />
  ),
  h5: (props: React.ComponentPropsWithoutRef<"h5">) => (
    <h5 className="text-sm font-medium text-white mb-1 mt-2" {...props} />
  ),
  h6: (props: React.ComponentPropsWithoutRef<"h6">) => (
    <h6 className="text-xs font-medium text-white mb-1 mt-2" {...props} />
  ),
  p: (props: React.ComponentPropsWithoutRef<"p">) => (
    <p className="text-white mb-4 leading-relaxed" {...props} />
  ),
  a: (props: React.ComponentPropsWithoutRef<"a">) => (
    <a
      className="text-accent hover:bg-accent hover:text-gray-600 transition-colors duration-300 relative inline-flex after:content-[''] after:absolute after:bottom-px after:left-0 after:w-full after:h-px after:bg-accent"
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    />
  ),
  ul: (props: React.ComponentPropsWithoutRef<"ul">) => (
    <ul className="list-disc list-inside text-white mb-4 space-y-1" {...props} />
  ),
  ol: (props: React.ComponentPropsWithoutRef<"ol">) => (
    <ol className="list-decimal list-inside text-white mb-4 space-y-1" {...props} />
  ),
  li: (props: React.ComponentPropsWithoutRef<"li">) => (
    <li className="text-white" {...props} />
  ),
  blockquote: (props: React.ComponentPropsWithoutRef<"blockquote">) => (
    <blockquote
      className="border-l-2 border-accent pl-4 py-2 my-4 text-white italic bg-accent/5"
      {...props}
    />
  ),
  img: (props: React.ComponentPropsWithoutRef<"img">) => (
    <span className="block my-6 border border-gray-800 rounded-md overflow-hidden">
      <Image
        src={props.src || ""}
        alt={props.alt || ""}
        width={800}
        height={600}
        className="w-full h-auto"
        quality={30}
      />
    </span>
  ),
  code: (props: React.ComponentPropsWithoutRef<"code">) => (
    <code
      className="bg-gray-800/30 px-1.5 py-0.5 rounded-sm text-sm font-mono text-accent"
      {...props}
    />
  ),
  pre: (props: React.ComponentPropsWithoutRef<"pre">) => (
    <pre
      className="bg-gray-800/30 p-4 rounded-md overflow-x-auto my-4 border border-gray-800"
      {...props}
    />
  ),
  hr: (props: React.ComponentPropsWithoutRef<"hr">) => (
    <hr className="border-gray-800 my-8" {...props} />
  ),
  table: (props: React.ComponentPropsWithoutRef<"table">) => (
    <div className="overflow-x-auto my-6">
      <table className="min-w-full border border-gray-800" {...props} />
    </div>
  ),
  th: (props: React.ComponentPropsWithoutRef<"th">) => (
    <th
      className="border border-gray-800 px-4 py-2 text-left text-gray-600 bg-gray-800/20"
      {...props}
    />
  ),
  td: (props: React.ComponentPropsWithoutRef<"td">) => (
    <td className="border border-gray-800 px-4 py-2 text-white" {...props} />
  ),
};
