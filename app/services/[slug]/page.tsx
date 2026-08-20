import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getService,
  getAllServiceSlugs,
  serviceMetadata,
} from "@/lib/content/services";
import { ServicePageView } from "@/components/services/ServicePageView";

export function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  return serviceMetadata(slug);
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();
  return <ServicePageView service={service} />;
}
