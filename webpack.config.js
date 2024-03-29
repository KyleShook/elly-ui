const path = require("path");

module.exports = {
	// ... other configuration options
	resolve: {
		alias: {
			"@theme": path.join(__dirname, "./styles/theme.styled.tsx"),
			"@components": path.join(__dirname, "./components"),
		},
	},
};
