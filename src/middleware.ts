import { NextRequest, NextResponse } from "next/server";
import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

const intlMiddleware = createMiddleware(routing);

const rewritesMap: Record<string, string> = {
  "/": "/index.html",
  "/business-lounge": "/business-lounge/index.html",
  "/como-chegar": "/como-chegar/index.html",
  "/contato": "/contato/index.html",
  "/expositores": "/expositores/index.html",
  "/imprensa": "/imprensa/index.html",
  "/palestras": "/palestras/index.html",
  "/sobre-o-evento": "/sobre-o-evento/index.html",
  "/en": "/en/index.html",
  "/en/about": "/en/about/index.html",
  "/en/business-lounge": "/en/business-lounge/index.html",
  "/en/contact": "/en/contact/index.html",
  "/en/exhibitors": "/en/exhibitors/index.html",
  "/en/lectures": "/en/lectures/index.html",
  "/en/venue-directions": "/en/venue-directions/index.html",
  "/noticias": "/noticias/index.html",
};

export default function middleware(req: NextRequest) {
  const { nextUrl } = req;
  const pathname = nextUrl.pathname;

  // Check if the pathname matches an exact rewrite
  if (rewritesMap[pathname]) {
    return NextResponse.rewrite(new URL(rewritesMap[pathname], req.url));
  }

  // Handle dynamic routes for "/noticias/pagina/:number"
  const noticiasPaginaMatch = pathname.match(/^\/noticias\/pagina\/(\d+)$/);
  if (noticiasPaginaMatch) {
    return NextResponse.rewrite(new URL(`/noticias/pagina/${noticiasPaginaMatch[1]}/index.html`, req.url));
  }

  // Handle dynamic routes for "/noticias/:slug"
  const noticiasSlugMatch = pathname.match(/^\/noticias\/([^/]+)$/);
  if (noticiasSlugMatch) {
    return NextResponse.rewrite(new URL(`/noticias/${noticiasSlugMatch[1]}/index.html`, req.url));
  }

  // Fallback to next-intl middleware
  return intlMiddleware(req);
}

export const config = {
  matcher: "/((?!api|trpc|_next|_vercel|.*\\..*).*)",
};
