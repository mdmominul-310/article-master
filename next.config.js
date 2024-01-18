/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        // domains: ["preview.mysterythemes.com"]
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'preview.mysterythemes.com',
                port: '',
                pathname: '**/*'
            }
        ]
    }
}

module.exports = nextConfig
