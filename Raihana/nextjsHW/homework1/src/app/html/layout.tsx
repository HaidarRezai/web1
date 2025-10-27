import React from "react";
import Link from "next/link";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col border">
      {/* 🔹 Navigation oben */}
      <ul className="flex justify-center gap-4 font-bold text-[#3AA199] py-4 shadow">
        <li><Link href="/html/link1" className="px-4 py-2 rounded-xl hover:text-white hover:bg-gradient-to-r hover:from-[#3AA199] hover:to-[#E47A5C]">Home</Link></li>
        <li><Link href="/html/link2" className="px-4 py-2 rounded-xl hover:text-white hover:bg-gradient-to-r hover:from-[#3AA199] hover:to-[#E47A5C]">Über uns</Link></li>
        <li><Link href="/html/link3" className="px-4 py-2 rounded-xl hover:text-white hover:bg-gradient-to-r hover:from-[#3AA199] hover:to-[#E47A5C]">Dienstleistungen</Link></li>
        <li><Link href="/projects" className="px-4 py-2 rounded-xl hover:text-white hover:bg-gradient-to-r hover:from-[#3AA199] hover:to-[#E47A5C]">Projekte</Link></li>
        <li><Link href="/contact" className="px-4 py-2 rounded-xl hover:text-white hover:bg-gradient-to-r hover:from-[#3AA199] hover:to-[#E47A5C]">Kontakt</Link></li>
      </ul>

      {/* 🔹 Hauptinhalt */}
      <main className="flex justify-center text-center">{children}</main>
    </div>
  );
}
