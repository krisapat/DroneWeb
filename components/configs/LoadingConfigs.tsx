import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const LoadingConfigs = () => {
    return (
        <Card className="w-full max-w-md shadow-lg rounded-2xl mx-auto animate-pulse">
            <CardHeader>
                <CardTitle className="text-xl font-semibold">Loading...</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
                <div className="h-4 bg-gray-200 rounded w-3/4" />
                <div className="h-4 bg-gray-200 rounded w-1/2" />
                <div className="h-4 bg-gray-200 rounded w-2/3" />
            </CardContent>
        </Card>
    )
}
export default LoadingConfigs