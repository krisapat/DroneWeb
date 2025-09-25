"use client";

import { LoaderCircle } from "lucide-react";
import { Button } from "../ui/button";

interface SubmitButtonProps {
  loading: boolean;
}

const SubmitButton = ({ loading }: SubmitButtonProps) => {
  return (
    <Button type="submit" className="w-full" disabled={loading}>
      {loading ? (
        <>
          <LoaderCircle className="animate-spin inline-block mr-2 h-4 w-4" />
          Loading
        </>
      ) : (
        "Submit"
      )}
    </Button>
  );
};

export default SubmitButton;
