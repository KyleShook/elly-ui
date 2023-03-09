/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	typescript: {
		// enable type checking for production builds
		// (disable during development for faster builds)
		ignoreBuildErrors: true,
	},
};

module.exports = nextConfig;

const path = require("path");

module.exports = {
	webpack: (config) => {
		config.resolve.modules.push(path.resolve("./"));

		return config;
	},
};
