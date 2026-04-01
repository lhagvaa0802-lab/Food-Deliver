import { AppSidebar } from "./components/sidebar";
import { Header } from "./components/header";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="flex h-screen w-full overflow-hidden">
        <AppSidebar />
        <main className="flex-1 min-w-0 overflow-y-auto bg-neutral-50 p-8">
          {children}
        </main>
      </div>
    </div>
  );
}
