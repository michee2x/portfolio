// app/(docs)/docs/layout.tsx
import { AppSidebar } from "@/components/Side-Bar";
import Link from "next/link";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex relative">
      {/* Sidebar */}
      <AppSidebar />

      {/* Main content */}
      <main className="flex-1 bg-blue-600 p-6">{children}</main>
    </div>
  );
}
