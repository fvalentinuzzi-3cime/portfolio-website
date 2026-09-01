import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const locales = ["en", "it"];
const defaultLocale = "en";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // Check if the URL already has a locale (e.g. /en/about or /it/servizi)
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return;

  // If there is no locale, redirect to the default English locale
  request.nextUrl.pathname = `/${defaultLocale}${pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: [
    // Skip all internal paths (_next, images, sitemaps, etc.)
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
  ],
};