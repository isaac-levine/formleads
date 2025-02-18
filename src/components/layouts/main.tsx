export function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="pt-24">
      {" "}
      {/* pt-24 = padding-top: 6rem, adjusts for fixed navbar */}
      {children}
    </main>
  );
}
