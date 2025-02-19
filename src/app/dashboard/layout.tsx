import { DashboardSidebar } from "@/components/dashboard/sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background">
      <div className="flex">
        <DashboardSidebar />
        <main className="flex-1 md:pl-80">
          <div className="container max-w-7xl mx-auto p-4 md:p-8 pt-16 md:pt-8">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
