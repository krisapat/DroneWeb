"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import LogsTable from "@/components/LogsTable/LogsTable";
import BreadcrumsWrapper from "@/components/breadcrums/BreadcrumsWrapper";

export default function LogsPage() {
  const searchParams = useSearchParams();
  const page = Number(searchParams.get("page")) || 1;

  return (
    <section className="p-6">
      <BreadcrumsWrapper />
      <h1 className="text-2xl md:text-4xl font-bold text-center text-primary mb-6">Drone Table</h1>
      <Suspense fallback={<p className="text-center text-gray-500">Loading logs...</p>}>
        <LogsTable page={page} />
      </Suspense>
    </section>
  );
}
