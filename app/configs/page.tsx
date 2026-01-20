
import { Suspense } from "react";
import LoadingConfigs from "@/components/configs/LoadingConfigs";
import ConfigCard from "@/components/configs/ConfigCard";
import BreadcrumsWrapper from "@/components/breadcrums/BreadcrumsWrapper";
import FadeUpWhenVisible from "@/components/animations/FadeUpWhenVisible";

export default function ConfigPage() {
    return (
        <section className="p-6">
            <BreadcrumsWrapper />
            <h1 className="text-2xl md:text-4xl font-bold text-center text-primary mb-6">Drone Config</h1>
            <FadeUpWhenVisible>
            <Suspense fallback={<LoadingConfigs />}>
                <ConfigCard />
            </Suspense>
            </FadeUpWhenVisible>
        </section>
    );
}
