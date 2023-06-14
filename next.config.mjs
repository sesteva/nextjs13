/** @type {import('next').NextConfig} */

import withNextIntl from "next-intl/plugin"

const nextConfig = withNextIntl("./i18n.ts")({
  experimental: {
    serverActions: true,
  },
})

export default nextConfig
