/** @type {import('next').NextConfig} */
// req'd to use react daisyui
const withTM = require("next-transpile-modules")(["react-daisyui"]);

const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
};

module.exports = withTM(nextConfig);
