// app/(docs)/docs/[...slug]/page.tsx
import { sideBarNav } from "@/components/Side-Bar";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ slug: string }>; // 👈 params is async
};

// Helper: flatten all subcategories
function flattenNav(nav = sideBarNav) {
  const flat: Record<string, { title: string; url: string }> = {};

  nav.forEach((group) => {
    group.category?.forEach((item) => {
      const slug = item.url.split("/").pop()!;
      flat[slug] = { title: item.title, url: item.url };
    });
  });

  return flat;
}

export default async function DocsPage({ params }: Props) {
  const { slug } = await params; // 👈 await params
  const flatMap = flattenNav();
  const doc = flatMap[slug];

  if (!doc) return notFound();

  return (
    <div>
      <h1 className="text-2xl font-bold">{doc.title}</h1>
      <p className="mt-2 text-gray-600">
        This is the docs page for <code>{slug}</code>.
      </p>
    </div>
  );
}
