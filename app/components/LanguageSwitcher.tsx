"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function LanguageSwitcher() {
  const pathname = usePathname();
  
  // Fallback while rendering
  if (!pathname) return null;

  // Check if we are currently on the Italian version
  const isItalian = pathname.startsWith("/it");
  
  // Generate the paths for both languages
  const enPath = pathname.replace(/^\/(en|it)/, '/en');
  const itPath = pathname.replace(/^\/(en|it)/, '/it');

  return (
    <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.2em] text-stone-800">
      
      {/* English Toggle */}
      {!isItalian ? (
        <span className="opacity-100 cursor-default">EN</span>
      ) : (
        <Link 
          href={enPath} 
          className="opacity-40 hover:opacity-100 transition-opacity duration-300"
        >
          EN
        </Link>
      )}
      
      {/* Divider */}
      <span className="opacity-30 font-light mx-1">/</span>

      {/* Italian Toggle */}
      {isItalian ? (
        <span className="opacity-100 cursor-default">IT</span>
      ) : (
        <Link 
          href={itPath} 
          className="opacity-40 hover:opacity-100 transition-opacity duration-300"
        >
          IT
        </Link>
      )}
      
    </div>
  );
}