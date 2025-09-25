import { Suspense } from "react";
import LoadingConfigs from "@/components/loading/LoadingConfigs";
import ConfigCard from "@/components/configs/ConfigCard";

export default function ConfigPage() {
    return (
        <div className="p-6">
            <h1 className="text-2xl md:text-4xl font-bold text-center text-primary mb-6">Drone Config</h1>
            <Suspense fallback={<LoadingConfigs />}>
                <ConfigCard />
            </Suspense>
        </div>
    );
}
