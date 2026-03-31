"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/admin-page", label: "Food Menu", icon: "/images/Icon.svg" },
  { href: "/admin-page/orders", label: "Orders", icon: "/images/Truck.svg" },
];

export function AppSidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-[220px] shrink-0 h-screen bg-white flex flex-col px-3 py-4">
      {/* Logo */}
      <Link href="/" className="flex items-center gap-2 px-2 py-1 mb-8">
        <Image
          src="/images/Logo.svg"
          alt="NomNom logo"
          width={32}
          height={32}
        />
        <div>
          <span className="font-semibold text-sm">NomNom</span>
          <p className="text-xs text-gray-400">Swift delivery</p>
        </div>
      </Link>

      {/* Nav */}
      <nav className="flex flex-col gap-2">
        {navItems.map(({ href, label, icon }) => {
          const active =
            href === "/admin-page"
              ? pathname === "/admin-page"
              : pathname.startsWith(href);
          return (
            <Link
              key={href}
              href={href}
              className={cn(
                "flex items-center gap-2 rounded-full px-3 py-2 text-sm font-medium transition-colors",
                active
                  ? "bg-black text-white"
                  : "text-gray-600 hover:bg-gray-100",
              )}
            >
              <Image src={icon} alt={`${label} icon`} width={20} height={20} />
              <span>{label}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
