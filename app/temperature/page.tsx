import TemperatureForm from "@/components/form/TemperatureForm";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function TemperaturePage() {
  return (
    <div className="flex flex-col items-center justify-center p-6">
      <h1 className="text-2xl md:text-4xl font-bold text-center text-primary mb-6">Submit Temperature</h1>
      <Card className="w-full max-w-md shadow-md rounded-2xl">
        <CardHeader>
          <CardTitle className="text-xl font-semibold">
            Submit Temperature
          </CardTitle>
        </CardHeader>
        <CardContent>
          <TemperatureForm />
        </CardContent>
      </Card>
    </div>
  );
}
