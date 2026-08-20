import type { Metadata } from "next";
import { BlogIndex } from "@/components/resources/BlogIndex";
import { staticPageSeo } from "@/lib/seo/pages";

export const metadata: Metadata = staticPageSeo.blog;

export default function BlogPage() {
  return <BlogIndex />;
}
