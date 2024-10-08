/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'inhouse.cryscampus.com',
            },
        ],
    }
};

export default nextConfig;
