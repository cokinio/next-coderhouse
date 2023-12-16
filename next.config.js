/** @type {import('next').NextConfig} */

const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "d22fxaf9t8d39k.cloudfront.net",
				port: "",
				pathname: "/**",
			},
			{
				protocol: "https",
				hostname: "firebasestorage.googleapis.com",
				port: "",
				pathname: "/**",
			}
		],
	},
	experimental: {
		esmExternals: "loose", // <-- add this
		serverComponentsExternalPackages: ["mongoose"], 
	},
	// webpack: (config) => {
	// 	config.experiments = {
	// 		topLevelAwait: true,
	// 	};
	// 	return config;
	// },
};

module.exports = nextConfig;
