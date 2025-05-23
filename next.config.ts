import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
	rewrites: async () => {
		return [
			{
				source: '/api/:path*',
				destination:
					process.env.NODE_ENV === 'development'
						? 'http://127.0.0.1:5328/api/:path*'
						: '/api/'
			}
		]
	},
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'm.media-amazon.com'
			},
			{
				protocol: 'https',
				hostname: 'example.com'
			}
		]
	},
	env: {
		databaseURL: process.env.DATABASE_URL
	}
}
export default nextConfig
