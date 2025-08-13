import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  distDir: "dist",
  experimental: {
    optimizePackageImports: ["@phosphor-icons/react"],
  },
}

export default nextConfig
