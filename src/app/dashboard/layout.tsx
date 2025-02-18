export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <main className="pt-24">{children}</main>
    </>
  );
}
