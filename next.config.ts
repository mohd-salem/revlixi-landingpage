import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Serve WebP by default, AVIF when supported — significant size savings
    // with identical visual quality vs JPEG/PNG.
    formats: ["image/avif", "image/webp"],
    // No remotePatterns: REVLIXI currently uses no external images.
    // Scope this to exact CDN hostnames (e.g. cdn.revlixi.com) when
    // product photography is added — avoid the wildcard "**" pattern.
  },
};

export default nextConfig;
