/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[{
            hostname:"images.unsplash.com"
        },
        {
            hostname:"plus.unsplash.com"
        }]
    }
    ,experimental: {
        serverActions: true
    }    
}

module.exports = nextConfig
