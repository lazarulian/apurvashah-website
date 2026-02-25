import { MDXRemote, MDXRemoteProps } from "next-mdx-remote/rsc";
import { mdxComponents } from "./MDXComponents";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";

interface MDXRendererProps {
  source: string;
  components?: MDXRemoteProps["components"];
}

/**
 * Reusable MDX renderer component
 * Can be used for projects, blog posts, documentation, etc.
 */
export function MDXRenderer({ source, components }: MDXRendererProps) {
  // Merge provided components with default mdxComponents
  const mergedComponents = {
    ...mdxComponents,
    ...components,
  };

  return (
    <MDXRemote
      source={source}
      components={mergedComponents}
      options={{
        mdxOptions: {
          remarkPlugins: [remarkGfm],
          rehypePlugins: [
            rehypeSlug,
            [
              rehypePrettyCode,
              {
                theme: "github-dark",
                keepBackground: false,
              },
            ],
          ],
        },
      }}
    />
  );
}
