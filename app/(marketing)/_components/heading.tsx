"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Heading = () => {
  return (
    <div className="max-w-3xl space-y-4">
      <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">
        Your Ideas, Documents and Plans. Welcome to{" "}
        <span className="underline">Jotion Express</span>
      </h1>
      <h3 className="text-base sm:text-xl md:text-2xl font-medium">
        Jotion Express is the connected wrokspace where better and faster work
        happens.
      </h3>
      <Button>
        Enter Jotion
        <ArrowRight />
      </Button>
    </div>
  );
};
