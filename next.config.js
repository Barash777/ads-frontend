/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    // formats: ['image/avif', 'image/webp', 'image/svg'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'tailwindui.com',
        port: '',
        pathname: '/img/logos/**',
      },
    ],
  },
}
// https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600
// https://www.google.com/url?sa=i&url=https%3A%2F%2Flogo.com%2F&psig=
// https://png.pngtree.com/element_pic/00/16/07/115783931601b5c.jpg
module.exports = nextConfig
