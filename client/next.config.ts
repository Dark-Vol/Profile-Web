import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["26.165.10.108"],
  sassOptions: {
    loadPaths: [path.join(process.cwd(), "styles")],
  },
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: `${process.env.API_PROXY ?? "http://localhost:4000"}/api/:path*`,
      },
    ];
  },
};

export default nextConfig;
