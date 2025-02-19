import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronLeft, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-black">
        <div className="absolute h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#1a1a1a_1px,transparent_1px)] [background-size:16px_16px] opacity-70" />
      </div>

      <div className="container max-w-[640px] text-center relative z-10">
        {/* Logo */}
        <Link href="/" className="inline-block mb-8">
          <h1 className="text-2xl font-bold tracking-tight">frontstep.ai</h1>
        </Link>

        {/* Error Content */}
        <div className="space-y-6">
          <div className="space-y-2">
            <h1 className="text-6xl font-bold tracking-tighter sm:text-7xl text-primary">
              404
            </h1>
            <h2 className="text-2xl font-medium">Page Not Found</h2>
            <p className="text-muted-foreground max-w-[400px] mx-auto">
              We couldn&apos;t find the page you were looking for. Let&apos;s
              get you back on track.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 justify-center">
            <Button variant="outline" asChild>
              <Link
                href="javascript:history.back()"
                className="flex items-center gap-2"
              >
                <ChevronLeft className="h-4 w-4" />
                Go Back
              </Link>
            </Button>
            <Button asChild>
              <Link href="/" className="flex items-center gap-2">
                <Home className="h-4 w-4" />
                Return Home
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
