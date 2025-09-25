import FadeUpWhenVisible from "@/components/animations/FadeUpWhenVisible";
import BreadcrumsWrapper from "@/components/breadcrums/BreadcrumsWrapper";
import TemperatureForm from "@/components/form/TemperatureForm";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function TemperaturePage() {
  return (
    <section className="p-6">
      <BreadcrumsWrapper />
      <h1 className="text-2xl md:text-4xl font-bold text-center text-primary mb-6">Submit Temperature</h1>
      <div className="flex flex-col items-center justify-center ">
        <FadeUpWhenVisible>
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
        </FadeUpWhenVisible>
      </div>
    </section>
  );
}
