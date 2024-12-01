/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.pravatar.cc',
      },
      {
        protocol: 'https',
        hostname: 'api.dicebear.com',
      },
      {
        protocol: 'https',
        hostname: 'github.com',
      },
    ],
  },
  env: {
    NEXT_PUBLIC_TINYMCE_API_KEY: 'c0wab272fnxejaod1zq46xae0lggm2yi5gik5uj7z25wig7c',
  },
};

module.exports = nextConfig;