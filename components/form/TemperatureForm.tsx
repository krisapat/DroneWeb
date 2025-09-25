"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import SubmitButton from "@/components/form/SubmitButton";

export default function TemperatureForm() {
  const [celsius, setCelsius] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const configRes = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/configs/${process.env.NEXT_PUBLIC_DRONE_ID}`
      );
      const config = await configRes.json();

      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/logs`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          drone_id: config.drone_id,
          drone_name: config.drone_name,
          country: config.country,
          celsius: Number(celsius),
        }),
      });

      if (!res.ok) throw new Error("Failed to submit log");

      toast.success("Temperature log submitted!");
      setCelsius("");
    } catch (err) {
      toast.error("Error submitting log");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input
        type="number"
        placeholder="Temperature (°C)"
        value={celsius}
        onChange={(e) => setCelsius(e.target.value)}
        required
      />
      <SubmitButton loading={loading} />
    </form>
  );
}
