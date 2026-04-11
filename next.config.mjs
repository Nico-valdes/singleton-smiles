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
        source: "/before-after",
        destination: "/smile-gallery",
        permanent: true,
      },
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
