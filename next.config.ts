import { withPayload } from "@payloadcms/next/withPayload";
import { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  experimental: {
    reactCompiler: false,
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
        ],
      },
    ];
  },
  async rewrites() {
    return [
      /**
       * PT-BR Pages
       */
      { source: "/", destination: "/index.html" },
      { source: "/business-lounge", destination: "/business-lounge/index.html" },
      { source: "/como-chegar", destination: "/como-chegar/index.html" },
      { source: "/contato", destination: "/contato/index.html" },
      { source: "/expositores", destination: "/expositores/index.html" },
      { source: "/imprensa", destination: "/imprensa/index.html" },
      { source: "/palestras", destination: "/palestras/index.html" },
      { source: "/seja-um-expositor", destination: "/seja-um-expositor/index.html" },
      { source: "/sobre-o-evento", destination: "/sobre-o-evento/index.html" },

      /**
       * EN Pages
       */
      { source: "/en", destination: "/en/index.html" },
      { source: "/en/about", destination: "/en/about/index.html" },
      { source: "/en/be-an-exhibitor", destination: "/en/be-an-exhibitor/index.html" },
      { source: "/en/business-lounge", destination: "/en/business-lounge/index.html" },
      { source: "/en/contact", destination: "/en/contact/index.html" },
      { source: "/en/exhibitors", destination: "/en/exhibitors/index.html" },
      { source: "/en/lectures", destination: "/en/lectures/index.html" },
      { source: "/en/venue-directions", destination: "/en/venue-directions/index.html" },

      /**
       * Notícias
       */
      { source: "/noticias", destination: "/noticias/index.html" },
      { source: "/noticias/pagina/:number", destination: "/noticias/pagina/:number/index.html" },
      { source: "/noticias/:slug", destination: "/noticias/:slug/index.html" },
    ];
  },
};

export default withNextIntl(withPayload(nextConfig));
