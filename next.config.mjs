/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: "/abouteam",
        destination: "/about#team",
        permanent: false,
      },
      {
        source: "/about-team",
        destination: "/about#team",
        permanent: false,
      },
      {
        source: "/our-staff",
        destination: "/about#team",
        permanent: false,
      },
    ]
  },
}

export default nextConfig
