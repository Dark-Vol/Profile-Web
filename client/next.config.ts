import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["26.165.10.108"],
  sassOptions: {
    loadPaths: [path.join(process.cwd(), "styles")],
  },
};

export default nextConfig;
