import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
async function fetchConfig() {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/configs/${process.env.NEXT_PUBLIC_DRONE_ID}`,
        { cache: "force-cache" }
    );

    if (!res.ok) {
        throw new Error("Failed to fetch config");
    }

    return res.json();
}
const ConfigCard = async () => {
    const config = await fetchConfig();
    return (
        <Card className="w-full max-w-md shadow-lg rounded-2xl mx-auto">
            <CardHeader>
                <CardTitle className="text-xl font-bold text-center text-primary">Drone Config {config.drone_id}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
                <div className="flex justify-between">
                    <span className="font-medium">ID:</span>
                    <span>{config.drone_id}</span>
                </div>
                <div className="flex justify-between">
                    <span className="font-medium">Name:</span>
                    <span>{config.drone_name}</span>
                </div>
                <div className="flex justify-between">
                    <span className="font-medium">Light:</span>
                    <span>{config.light}</span>
                </div>
                <div className="flex justify-between">
                    <span className="font-medium">Country:</span>
                    <span>{config.country}</span>
                </div>
            </CardContent>
        </Card>
    )
}
export default ConfigCard