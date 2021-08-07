const path = require("path");

module.exports = {
    files: [
        `${path.join(__dirname, "./app")}/**/*.{html,css,js}`,
        `${path.join(__dirname, "./public")}/*.css`
    ],
    server: {
        baseDir: [
            path.join(__dirname, "./public"),
            path.join(__dirname, "./app")
        ],
        index: "index.html"
    }
};